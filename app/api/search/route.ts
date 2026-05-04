// app/api/search/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { searchService } from '@/app/lib/search/searchService';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { sector, country, query } = body;
    
    let data = {};
    
    if (query) {
      const news = await searchService.getNews(sector || 'Technologie/SaaS', country || 'Sénégal');
      data = { news: news.filter(n => n.title.toLowerCase().includes(query.toLowerCase())) };
    } else if (sector && country) {
      data = await searchService.enrichBusinessPlan(sector, country);
    } else {
      return NextResponse.json({ success: false, error: 'Paramètres manquants' }, { status: 400 });
    }
    
    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Search error:', error);
    return NextResponse.json({ success: false, error: 'Erreur lors de la recherche' }, { status: 500 });
  }
}
