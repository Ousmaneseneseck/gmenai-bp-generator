// app/api/generate/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { BusinessPlanService } from '@/app/lib/services/businessPlanService';

const service = new BusinessPlanService();

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const result = await service.generate(body);
    return NextResponse.json({ success: true, data: result });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: 'Erreur lors de la génération' },
      { status: 500 }
    );
  }
}
