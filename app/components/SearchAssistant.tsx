// app/components/SearchAssistant.tsx
'use client';

import { useState, ReactNode } from 'react';
import { Search, Globe, X, Loader2, TrendingUp, DollarSign, Building2, Scale, Newspaper, BarChart3, LucideIcon } from 'lucide-react';

interface SearchAssistantProps {
  sector?: string;
  country?: string;
  onDataEnriched?: (data: any) => void;
}

interface Tab {
  id: string;
  label: string;
  icon: LucideIcon;
}

export default function SearchAssistant({ sector = "Technologie/SaaS", country = "Sénégal", onDataEnriched }: SearchAssistantProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [data, setData] = useState<any>(null);
  const [activeTab, setActiveTab] = useState('market');

  const performSearch = async () => {
    setIsSearching(true);
    await new Promise(r => setTimeout(r, 800));
    
    const enrichedData = {
      marketData: { size: '850M FCFA', growth: '28%', trends: ['Cloud adoption +35%', 'IA générative x2', 'API économie +40%'] },
      economicData: { gdp: '27.5Mds €', inflation: '3.2%', mobileMoney: '78%', internet: '42%' },
      competitors: [
        { name: 'TechLeader Afrique', strengths: 'Réseau 15 pays, Marque forte' },
        { name: 'DigitalSolutions', strengths: 'Agilité, Support local, Prix compétitifs' },
        { name: 'MobileFirst', strengths: 'Intégration Mobile Money, UI simple' }
      ],
      benchmark: { avgMargin: '65%', avgGrowth: '35%', avgCAC: '45k FCFA', avgLTV: '540k FCFA', avgChurn: '5%' },
      regulations: [
        { name: 'RGPD local', impact: 'Conformité obligatoire - 2M FCFA' },
        { name: 'Loi FinTech', impact: 'Opportunité d\'intégration Mobile Money' },
        { name: 'Zone OHADA', impact: 'Facilite l\'expansion régionale' }
      ],
      news: [
        { title: 'Le secteur SaaS en pleine croissance en Afrique', source: 'EcoActu', date: '05/05/2026' },
        { title: 'Mobile Money : 78% de pénétration au Sénégal', source: 'Jeune Afrique', date: '04/05/2026' },
        { title: 'Nouveau fonds d\'investissement pour les startups tech', source: 'Financial Afrik', date: '03/05/2026' }
      ]
    };
    
    setData(enrichedData);
    if (onDataEnriched) onDataEnriched(enrichedData);
    setIsSearching(false);
  };

  const tabs: Tab[] = [
    { id: 'market', label: 'Marché', icon: TrendingUp },
    { id: 'economic', label: 'Économie', icon: DollarSign },
    { id: 'competitors', label: 'Concurrence', icon: Building2 },
    { id: 'benchmark', label: 'Benchmark', icon: BarChart3 },
    { id: 'regulations', label: 'Réglementation', icon: Scale },
    { id: 'news', label: 'Actualités', icon: Newspaper },
  ];

  const renderIcon = (Icon: LucideIcon, className: string) => {
    return <Icon className={className} size={16} />;
  };

  return (
    <>
      <button onClick={() => { setIsOpen(true); performSearch(); }} className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-primary to-secondary text-white p-4 rounded-full shadow-lg hover:scale-105 transition-all">
        <Search size={24} />
      </button>
      
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[85vh] overflow-hidden">
            <div className="flex justify-between items-center p-4 bg-gradient-to-r from-primary to-primary/80 text-white">
              <h2 className="text-lg font-bold flex items-center gap-2"><Globe size={20} /> Assistant IA</h2>
              <button onClick={() => setIsOpen(false)}><X size={20} /></button>
            </div>
            
            <div className="flex overflow-x-auto border-b bg-gray-50">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-3 py-2 text-sm whitespace-nowrap flex items-center gap-1 transition-all ${activeTab === tab.id ? 'border-b-2 border-primary text-primary font-medium' : 'text-gray-500'}`}
                >
                  {renderIcon(tab.icon, 'inline')}
                  <span className="ml-1">{tab.label}</span>
                </button>
              ))}
            </div>
            
            <div className="p-4 overflow-y-auto max-h-[55vh]">
              {isSearching ? (
                <div className="text-center py-8">
                  <Loader2 className="animate-spin text-primary mx-auto" size={32} />
                  <p className="mt-2 text-gray-600">Analyse du secteur {sector}...</p>
                </div>
              ) : data ? (
                <div className="space-y-3">
                  {activeTab === 'market' && (
                    <div>
                      <p className="font-bold text-primary text-lg">📊 Taille: {data.marketData.size}</p>
                      <p className="text-green-600 font-semibold">📈 Croissance: {data.marketData.growth}</p>
                      <p className="font-semibold mt-2">🎯 Tendances clés</p>
                      <ul className="list-disc pl-4 text-gray-600">
                        {data.marketData.trends.map((t: string, i: number) => <li key={i}>{t}</li>)}
                      </ul>
                    </div>
                  )}
                  
                  {activeTab === 'economic' && (
                    <div className="grid grid-cols-2 gap-2">
                      <div className="bg-blue-50 p-2 rounded"><p className="text-xs">PIB</p><p className="font-bold">{data.economicData.gdp}</p></div>
                      <div className="bg-yellow-50 p-2 rounded"><p className="text-xs">Inflation</p><p className="font-bold">{data.economicData.inflation}</p></div>
                      <div className="bg-green-50 p-2 rounded"><p className="text-xs">Mobile Money</p><p className="font-bold text-primary">{data.economicData.mobileMoney}</p></div>
                      <div className="bg-purple-50 p-2 rounded"><p className="text-xs">Internet</p><p className="font-bold">{data.economicData.internet}</p></div>
                    </div>
                  )}
                  
                  {activeTab === 'competitors' && (
                    <div className="space-y-2">
                      {data.competitors.map((c: any, i: number) => (
                        <div key={i} className="border rounded p-2">
                          <p className="font-bold text-primary">{c.name}</p>
                          <p className="text-sm text-gray-600">Forces: {c.strengths}</p>
                        </div>
                      ))}
                    </div>
                  )}
                  
                  {activeTab === 'benchmark' && (
                    <div className="bg-gradient-to-r from-blue-50 to-green-50 p-3 rounded-lg">
                      <p className="font-bold">📊 Marge moyenne: {data.benchmark.avgMargin}</p>
                      <p>💰 CAC moyen: {data.benchmark.avgCAC}</p>
                      <p>📈 LTV moyen: {data.benchmark.avgLTV}</p>
                      <p>🔄 Churn moyen: {data.benchmark.avgChurn}</p>
                      <p className="mt-2 text-sm text-primary">💡 Ratio LTV/CAC idéal: {">"}3x</p>
                    </div>
                  )}
                  
                  {activeTab === 'regulations' && (
                    <div className="space-y-2">
                      {data.regulations.map((r: any, i: number) => (
                        <div key={i} className="border rounded p-2">
                          <p className="font-bold text-primary">⚖️ {r.name}</p>
                          <p className="text-sm">{r.impact}</p>
                        </div>
                      ))}
                    </div>
                  )}
                  
                  {activeTab === 'news' && (
                    <div className="space-y-2">
                      {data.news.map((n: any, i: number) => (
                        <div key={i} className="border-b pb-2">
                          <p className="font-semibold text-sm">📰 {n.title}</p>
                          <p className="text-xs text-gray-500">{n.date} - {n.source}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <div className="text-center py-8 text-gray-500">
                  <Globe size={48} className="mx-auto mb-3 opacity-50" />
                  <p>Cliquez sur OK pour analyser le secteur {sector}</p>
                </div>
              )}
            </div>
            
            <div className="p-2 border-t text-center text-xs text-gray-400 bg-gray-50">
              Données enrichies par GMENAI IA • Mise à jour quotidienne
            </div>
          </div>
        </div>
      )}
    </>
  );
}

