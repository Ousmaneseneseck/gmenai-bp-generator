// app/components/SearchAssistant.tsx
'use client';

import { useState, useEffect } from 'react';
import { Search, Globe, X, Loader2, TrendingUp, DollarSign, Building2, Scale, Newspaper, BarChart3, Calculator, Target, AlertCircle } from 'lucide-react';

interface SearchAssistantProps {
  sector?: string;
  country?: string;
  onDataEnriched?: (data: any) => void;
}

export default function SearchAssistant({ sector = 'Technologie/SaaS', country = 'Sénégal', onDataEnriched }: SearchAssistantProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [data, setData] = useState<any>(null);
  const [activeTab, setActiveTab] = useState('market');
  const [currentSector, setCurrentSector] = useState(sector);
  const [currentCountry, setCurrentCountry] = useState(country);

  useEffect(() => {
    if (sector) setCurrentSector(sector);
    if (country) setCurrentCountry(country);
  }, [sector, country]);

  const performSearch = async () => {
    setIsSearching(true);
    try {
      const response = await fetch('/api/search', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sector: currentSector, country: currentCountry })
      });
      const result = await response.json();
      if (result.success) {
        setData(result.data);
        if (onDataEnriched) onDataEnriched(result.data);
      }
    } catch (err) {
      console.error(err);
    }
    setIsSearching(false);
  };

  const openModal = () => {
    setIsOpen(true);
    performSearch();
  };

  const integrateToBusinessPlan = () => {
    if (data && onDataEnriched) {
      onDataEnriched(data);
      alert('✅ Données intégrées au business plan !');
    }
  };

  const tabs = [
    { id: 'market', label: 'Marché', icon: TrendingUp },
    { id: 'economic', label: 'Économie', icon: DollarSign },
    { id: 'competitors', label: 'Concurrence', icon: Building2 },
    { id: 'swot', label: 'SWOT', icon: Target },
    { id: 'benchmark', label: 'Benchmark', icon: BarChart3 },
    { id: 'financial', label: 'Ratios', icon: Calculator },
    { id: 'regulations', label: 'Réglementation', icon: Scale },
    { id: 'news', label: 'Actualités', icon: Newspaper },
  ];

  return (
    <>
      <button
        onClick={openModal}
        className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-blue-600 to-green-600 text-white p-4 rounded-full shadow-lg hover:scale-105 transition-all print:hidden"
      >
        <Search size={24} />
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 print:hidden">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-2xl w-full max-w-3xl max-h-[85vh] overflow-hidden">
            
            {/* Header */}
            <div className="flex justify-between items-center p-4 bg-gradient-to-r from-blue-600 to-green-600 text-white">
              <h2 className="text-lg font-bold flex items-center gap-2">
                <Globe size={20} />
                Assistant IA - Analyse sectorielle complète
              </h2>
              <button onClick={() => setIsOpen(false)}><X size={20} /></button>
            </div>

            {/* Contrôles */}
            <div className="p-3 border-b flex gap-2 bg-gray-50">
              <select value={currentSector} onChange={(e) => setCurrentSector(e.target.value)} className="flex-1 p-2 border rounded-lg">
                <option>Technologie/SaaS</option><option>Agriculture</option><option>Commerce/Retail</option><option>Santé</option><option>Éducation</option>
              </select>
              <select value={currentCountry} onChange={(e) => setCurrentCountry(e.target.value)} className="flex-1 p-2 border rounded-lg">
                <option>Sénégal</option><option>Côte d'Ivoire</option><option>Cameroun</option>
              </select>
              <button onClick={performSearch} className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">Rechercher</button>
            </div>

            {/* Tabs */}
            <div className="flex overflow-x-auto border-b bg-gray-50">
              {tabs.map(tab => (
                <button key={tab.id} onClick={() => setActiveTab(tab.id)} className={`px-3 py-2 text-sm whitespace-nowrap flex items-center gap-1 ${activeTab === tab.id ? 'border-b-2 border-blue-500 text-blue-600' : 'text-gray-500'}`}>
                  <tab.icon size={16} /> {tab.label}
                </button>
              ))}
            </div>

            {/* Content */}
            <div className="p-4 overflow-y-auto max-h-[55vh]">
              {isSearching ? (
                <div className="text-center py-12"><Loader2 className="animate-spin text-blue-600 mx-auto" size={40} /><p className="mt-3">Analyse du secteur {currentSector}...</p></div>
              ) : data ? (
                <div className="space-y-4">
                  
                  {/* Marché */}
                  {activeTab === 'market' && data.marketData && (
                    <div className="space-y-3">
                      <div className="grid grid-cols-3 gap-3">
                        <div className="bg-blue-50 p-3 rounded-lg text-center"><p className="text-xs">TAM</p><p className="font-bold text-blue-600">{data.marketData.tam}</p></div>
                        <div className="bg-green-50 p-3 rounded-lg text-center"><p className="text-xs">SAM</p><p className="font-bold text-green-600">{data.marketData.sam}</p></div>
                        <div className="bg-yellow-50 p-3 rounded-lg text-center"><p className="text-xs">SOM</p><p className="font-bold text-yellow-600">{data.marketData.som}</p></div>
                      </div>
                      <div><p className="font-semibold">📈 Taille: {data.marketData.size} | Croissance: {data.marketData.growth}</p></div>
                      <div><p className="font-semibold">🎯 Tendances:</p><ul className="list-disc pl-5">{data.marketData.trends?.map((t: string, i: number) => <li key={i}>{t}</li>)}</ul></div>
                      <div><p className="font-semibold">🏢 Acteurs clés:</p><ul className="list-disc pl-5">{data.marketData.keyPlayers?.map((p: string, i: number) => <li key={i}>{p}</li>)}</ul></div>
                      <div className="grid grid-cols-2 gap-3 mt-2">
                        <div className="bg-green-50 p-2 rounded"><p className="text-xs">🚀 Drivers</p><ul className="list-disc pl-4 text-sm">{data.marketData.marketDrivers?.slice(0,2).map((d: string, i: number) => <li key={i}>{d}</li>)}</ul></div>
                        <div className="bg-red-50 p-2 rounded"><p className="text-xs">⚠️ Barrières</p><ul className="list-disc pl-4 text-sm">{data.marketData.marketBarriers?.slice(0,2).map((b: string, i: number) => <li key={i}>{b}</li>)}</ul></div>
                      </div>
                    </div>
                  )}

                  {/* Économie */}
                  {activeTab === 'economic' && data.economicData && (
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-gray-50 p-3 rounded"><p className="text-xs">PIB</p><p className="font-bold">{data.economicData.gdp}</p><p className="text-green-600 text-sm">Croissance: {data.economicData.gdpGrowth}</p></div>
                      <div className="bg-gray-50 p-3 rounded"><p className="text-xs">Inflation</p><p className="font-bold">{data.economicData.inflation}</p></div>
                      <div className="bg-gray-50 p-3 rounded"><p className="text-xs">Mobile Money</p><p className="font-bold text-blue-600">{data.economicData.mobileMoneyPenetration}</p></div>
                      <div className="bg-gray-50 p-3 rounded"><p className="text-xs">Internet</p><p className="font-bold">{data.economicData.internetPenetration}</p></div>
                      <div className="bg-gray-50 p-3 rounded"><p className="text-xs">Population</p><p className="font-bold">{data.economicData.population}</p></div>
                      <div className="bg-gray-50 p-3 rounded"><p className="text-xs">Chômage</p><p className="font-bold">{data.economicData.unemployment}</p></div>
                    </div>
                  )}

                  {/* Concurrents */}
                  {activeTab === 'competitors' && data.competitors && (
                    <div className="space-y-3">
                      {data.competitors.map((c: any, i: number) => (
                        <div key={i} className="border rounded-lg p-3">
                          <div className="flex justify-between items-start">
                            <div><p className="font-bold text-blue-600">{c.name}</p><p className="text-sm">{c.description}</p></div>
                            {c.marketShare && <span className="text-sm bg-gray-100 px-2 py-1 rounded">PDM: {c.marketShare}</span>}
                          </div>
                          <div className="mt-2 flex flex-wrap gap-2"><span className="text-xs bg-green-100 px-2 py-0.5 rounded">Forces: {c.strengths?.join(', ')}</span></div>
                          {c.weaknesses && <div className="mt-1"><span className="text-xs bg-red-100 px-2 py-0.5 rounded">Faiblesses: {c.weaknesses?.join(', ')}</span></div>}
                          <div className="mt-1 text-xs text-gray-500">Fondé: {c.founded} | Siège: {c.headquarters} | Funding: {c.funding}</div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* SWOT */}
                  {activeTab === 'swot' && data.swotAnalysis && (
                    <div className="grid grid-cols-2 gap-3">
                      <div className="border-l-4 border-green-500 pl-3"><p className="font-bold text-green-600">Forces</p><ul className="list-disc pl-4 text-sm">{data.swotAnalysis.strengths?.map((s: string, i: number) => <li key={i}>{s}</li>)}</ul></div>
                      <div className="border-l-4 border-red-500 pl-3"><p className="font-bold text-red-600">Faiblesses</p><ul className="list-disc pl-4 text-sm">{data.swotAnalysis.weaknesses?.map((w: string, i: number) => <li key={i}>{w}</li>)}</ul></div>
                      <div className="border-l-4 border-yellow-500 pl-3"><p className="font-bold text-yellow-600">Opportunités</p><ul className="list-disc pl-4 text-sm">{data.swotAnalysis.opportunities?.slice(0,3).map((o: string, i: number) => <li key={i}>{o}</li>)}</ul></div>
                      <div className="border-l-4 border-purple-500 pl-3"><p className="font-bold text-purple-600">Menaces</p><ul className="list-disc pl-4 text-sm">{data.swotAnalysis.threats?.slice(0,3).map((t: string, i: number) => <li key={i}>{t}</li>)}</ul></div>
                    </div>
                  )}

                  {/* Benchmark */}
                  {activeTab === 'benchmark' && data.benchmark && (
                    <div className="space-y-3">
                      <div className="bg-gradient-to-r from-blue-50 to-green-50 p-3 rounded-lg text-center"><p className="font-bold">{data.benchmark.position}</p><p className="text-sm">Score: {data.benchmark.industryScore}/100</p></div>
                      <div className="grid grid-cols-2 gap-2">
                        <div><p className="text-xs">Marge moyenne</p><p className="font-bold">{data.benchmark.avgMargin}</p></div>
                        <div><p className="text-xs">Croissance secteur</p><p className="font-bold text-green-600">{data.benchmark.avgGrowth}</p></div>
                        <div><p className="text-xs">CAC moyen</p><p className="font-bold">{data.benchmark.avgCAC}</p></div>
                        <div><p className="text-xs">LTV moyen</p><p className="font-bold">{data.benchmark.avgLTV}</p></div>
                        <div className="col-span-2 bg-blue-50 p-2 rounded"><p className="text-xs">💡 Recommandation</p><p className="text-sm">{data.benchmark.recommendation}</p></div>
                      </div>
                    </div>
                  )}

                  {/* Ratios financiers */}
                  {activeTab === 'financial' && data.financialRatios && (
                    <div className="grid grid-cols-2 gap-2">
                      <div className="bg-blue-50 p-2 rounded"><p className="text-xs">CAC</p><p className="font-bold">{data.financialRatios.cac}</p></div>
                      <div className="bg-green-50 p-2 rounded"><p className="text-xs">LTV</p><p className="font-bold">{data.financialRatios.ltv}</p></div>
                      <div className="bg-purple-50 p-2 rounded col-span-2"><p className="text-xs">Ratio LTV/CAC</p><p className="font-bold">{data.financialRatios.ltvToCac}</p></div>
                      <div><p className="text-xs">Marge brute</p><p>{data.financialRatios.grossMargin}</p></div>
                      <div><p className="text-xs">Marge nette</p><p>{data.financialRatios.netMargin}</p></div>
                      <div><p className="text-xs">Burn Rate</p><p>{data.financialRatios.burnRate}</p></div>
                      <div><p className="text-xs">Runway</p><p>{data.financialRatios.runway}</p></div>
                    </div>
                  )}

                  {/* Réglementation */}
                  {activeTab === 'regulations' && data.regulations && (
                    <div className="space-y-2">
                      {data.regulations.map((r: any, i: number) => (
                        <div key={i} className="border rounded p-2"><p className="font-bold text-blue-600">{r.name}</p><p className="text-sm">{r.description}</p><p className="text-xs text-yellow-600">Impact: {r.impact}</p>{r.complianceCost && <p className="text-xs">💰 Coût: {r.complianceCost}</p>}<p className="text-xs text-gray-500">Autorité: {r.authority}</p></div>
                      ))}
                    </div>
                  )}

                  {/* Actualités */}
                  {activeTab === 'news' && data.news && (
                    <div className="space-y-2">
                      {data.news.map((n: any, i: number) => (
                        <div key={i} className="border-b pb-2"><p className="font-semibold text-sm">{n.title}</p><p className="text-xs text-gray-500">{n.date} - {n.source} | {n.category}</p><p className="text-sm">{n.summary}</p></div>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <div className="text-center py-12 text-gray-500"><Globe size={48} className="mx-auto mb-3 opacity-50" /><p>Sélectionnez un secteur et la recherche</p></div>
              )}
            </div>

            {/* Footer */}
            <div className="p-3 border-t bg-gray-50 flex gap-2">
              <button onClick={integrateToBusinessPlan} className="flex-1 py-2 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-lg hover:opacity-90">📊 Intégrer les données au business plan</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
