// proxy.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const rateLimit = new Map<string, { count: number; resetTime: number }>();

export function proxy(request: NextRequest) {
  const ip = request.ip || request.headers.get('x-forwarded-for') || 'anonymous';
  const now = Date.now();
  const windowMs = 60 * 1000;
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

  return NextResponse.next();
}
