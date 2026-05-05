// app/components/SearchAssistant.tsx
'use client';

import { useState } from 'react';
import { Search, Globe, X, Loader2, TrendingUp, DollarSign, Building2, Scale, Newspaper, BarChart3 } from 'lucide-react';

// ⚠️ On accepte les props même si on ne les utilise pas pour éviter l'erreur
interface SearchAssistantProps {
  sector?: string;
  country?: string;
  onDataEnriched?: (data: any) => void;
}

export default function SearchAssistant({ sector, country, onDataEnriched }: SearchAssistantProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [data, setData] = useState<any>(null);
  const [activeTab, setActiveTab] = useState('market');

  const performSearch = async () => {
    setIsSearching(true);
    await new Promise(r => setTimeout(r, 1000));
    
    const demoData = {
      marketData: { size: '850M FCFA', growth: '28%', trends: ['Cloud adoption', 'IA générative', 'API économie'] },
      economicData: { gdp: '27.5M€', inflation: '3.2%', mobileMoney: '78%' },
      competitors: [{ name: 'TechLeader', strengths: ['Réseau étendu'] }, { name: 'DigitalSolutions', strengths: ['Support local'] }],
      benchmark: { avgMargin: '65%', avgGrowth: '35%', avgCAC: '45k FCFA', avgLTV: '540k FCFA' },
      regulations: [{ name: 'RGPD local', impact: 'Conformité obligatoire' }],
      news: [{ title: 'Marché en croissance', source: 'EcoActu' }]
    };
    
    setData(demoData);
    if (onDataEnriched) onDataEnriched(demoData);
    setIsSearching(false);
  };

  const tabs = [
    { id: 'market', label: 'Marché', icon: TrendingUp },
    { id: 'economic', label: 'Économie', icon: DollarSign },
    { id: 'competitors', label: 'Concurrence', icon: Building2 },
    { id: 'benchmark', label: 'Benchmark', icon: BarChart3 },
    { id: 'regulations', label: 'Réglementation', icon: Scale },
    { id: 'news', label: 'Actualités', icon: Newspaper },
  ];

  return (
    <>
      <button onClick={() => { setIsOpen(true); performSearch(); }} className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-primary to-secondary text-white p-4 rounded-full shadow-lg hover:scale-105 transition-all">
        <Search size={24} />
      </button>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[80vh] overflow-hidden">
            <div className="flex justify-between items-center p-4 bg-primary text-white">
              <h2 className="text-lg font-bold flex items-center gap-2"><Globe size={20} /> Assistant IA</h2>
              <button onClick={() => setIsOpen(false)}><X size={20} /></button>
            </div>
            <div className="flex overflow-x-auto border-b">
              {tabs.map(tab => (<button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`px-3 py-2 text-sm whitespace-nowrap flex items-center gap-1 ${activeTab === tab.id ? 'border-b-2 border-primary text-primary' : 'text-gray-500'}`}>
                <tab.icon size={14} /> {tab.label}
              </button>))}
            </div>
            <div className="p-4 overflow-y-auto max-h-[60vh]">
              {isSearching ? (<div className="text-center py-8"><Loader2 className="animate-spin text-primary mx-auto" size={32} /><p className="mt-2">Recherche...</p></div>) : data ? (
                <div className="space-y-3">
                  {activeTab === 'market' && (<><p className="font-bold">Taille: {data.marketData.size}</p><p>Croissance: {data.marketData.growth}</p><ul>{data.marketData.trends?.map((t: string, i: number) => <li key={i}>• {t}</li>)}</ul></>)}
                  {activeTab === 'economic' && (<><p>PIB: {data.economicData.gdp}</p><p>Inflation: {data.economicData.inflation}</p><p>Mobile Money: {data.economicData.mobileMoney}</p></>)}
                  {activeTab === 'competitors' && (<div>{data.competitors.map((c: any, i: number) => (<div key={i} className="border rounded p-2 mb-2"><p className="font-bold">{c.name}</p><p>{c.strengths?.join(', ')}</p></div>))}</div>)}
                  {activeTab === 'benchmark' && (<><p>Marge: {data.benchmark.avgMargin}</p><p>CAC: {data.benchmark.avgCAC}</p><p>LTV: {data.benchmark.avgLTV}</p></>)}
                  {activeTab === 'regulations' && (<div>{data.regulations.map((r: any, i: number) => (<div key={i} className="border rounded p-2"><p className="font-bold">{r.name}</p><p>{r.impact}</p></div>))}</div>)}
                  {activeTab === 'news' && (<div>{data.news.map((n: any, i: number) => (<div key={i} className="border-b py-2"><p className="font-semibold">{n.title}</p><p className="text-xs text-gray-500">{n.source}</p></div>))}</div>)}
                </div>
              ) : (<div className="text-center py-8 text-gray-500">Recherche...</div>)}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
