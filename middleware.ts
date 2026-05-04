// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

interface RateLimitEntry {
  count: number;
  resetTime: number;
}

const rateLimit = new Map<string, RateLimitEntry>();

export function middleware(request: NextRequest) {
  const ip = request.ip || request.headers.get('x-forwarded-for') || 'anonymous';
  const now = Date.now();
  const windowMs = 60 * 1000; // 1 minute
  const maxRequests = 30;

  let entry = rateLimit.get(ip);
  
  if (!entry || now > entry.resetTime) {
    entry = { count: 1, resetTime: now + windowMs };
    rateLimit.set(ip, entry);
  } else {
    entry.count++;
    rateLimit.set(ip, entry);
  }

  if (entry.count > maxRequests) {
    return new NextResponse('Trop de requêtes. Veuillez réessayer dans une minute.', { 
      status: 429,
      headers: {
        'Retry-After': Math.ceil((entry.resetTime - now) / 1000).toString(),
      }
    });
  }

  // Ajouter des headers de cache
  const response = NextResponse.next();
  response.headers.set('Cache-Control', 'public, max-age=3600, stale-while-revalidate=86400');
  
  return response;
}

export const config = {
  matcher: '/api/:path*',
};
