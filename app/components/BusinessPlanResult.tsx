// app/components/BusinessPlanResult.tsx
'use client';

import { useRouter } from 'next/navigation';
import { Download, Printer, LineChart, TrendingUp, DollarSign, Users, Brain, Handshake, Shield, Target } from 'lucide-react';

export default function BusinessPlanResult({ result, companyName, onDownloadPDF, onPrint }: any) {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="fixed bottom-4 right-4 z-50 flex gap-2 print:hidden">
        <button onClick={onDownloadPDF} className="bg-primary text-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2"><Download size={18} /> PDF</button>
        <button onClick={onPrint} className="bg-gray-700 text-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2"><Printer size={18} /> Imprimer</button>
        <button onClick={() => router.push('/financial-reports')} className="bg-secondary text-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2"><LineChart size={18} /> Rapports financiers</button>
      </div>

      <div className="container mx-auto max-w-5xl py-8 px-4">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-primary to-primary/70 text-white p-8">
            <h1 className="text-3xl font-bold">{companyName}</h1>
            <p className="opacity-90 mt-2">Business Plan - {new Date().toLocaleDateString()}</p>
          </div>
          
          <div className="p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border rounded-lg p-4"><h3 className="font-bold text-primary flex items-center gap-2"><TrendingUp size={18} /> Étude de marché</h3><p>Taille: {result?.marketStudy?.size || '850M FCFA'}</p></div>
              <div className="border rounded-lg p-4"><h3 className="font-bold text-primary flex items-center gap-2"><Target size={18} /> Proposition de valeur</h3><p>{result?.valueProposition?.uniqueValue || 'Solution unique combinant IA et Mobile Money'}</p></div>
              <div className="border rounded-lg p-4"><h3 className="font-bold text-primary flex items-center gap-2"><Users size={18} /> Go-to-market</h3><p>Budget: {result?.goToMarket?.budget || '40M FCFA'}</p></div>
              <div className="border rounded-lg p-4"><h3 className="font-bold text-primary flex items-center gap-2"><DollarSign size={18} /> Revenus</h3><p>ARR: {result?.revenueModel?.arr || '250'}M FCFA | MRR: {result?.revenueModel?.mrr || '25'}M FCFA</p></div>
              <div className="border rounded-lg p-4"><h3 className="font-bold text-primary flex items-center gap-2"><Brain size={18} /> Organisation</h3><p>Masse salariale: {result?.organization?.payroll || '80'}M FCFA/an</p></div>
              <div className="border rounded-lg p-4"><h3 className="font-bold text-primary flex items-center gap-2"><Handshake size={18} /> Partenariats</h3><p>Orange Money, Wave, Incubateur local</p></div>
            </div>
            
            <div className="bg-gray-50 rounded-lg p-4"><h3 className="font-bold text-primary flex items-center gap-2"><Shield size={18} /> Analyse des risques</h3><div className="grid grid-cols-3 gap-2 mt-2"><div className="bg-red-50 p-2 rounded text-center"><p className="text-sm">Pessimiste</p><p className="font-bold text-red-600">{result?.costs?.scenarios?.pessimistic || '40'}M FCFA</p></div><div className="bg-yellow-50 p-2 rounded text-center"><p className="text-sm">Réaliste</p><p className="font-bold text-yellow-600">{result?.costs?.scenarios?.realistic || '27'}M FCFA</p></div><div className="bg-green-50 p-2 rounded text-center"><p className="text-sm">Optimiste</p><p className="font-bold text-green-600">{result?.costs?.scenarios?.optimistic || '13'}M FCFA</p></div></div></div>
            
            <button onClick={() => router.push('/financial-reports')} className="w-full py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-semibold flex items-center justify-center gap-2">
              📊 Voir les rapports financiers détaillés <LineChart size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
