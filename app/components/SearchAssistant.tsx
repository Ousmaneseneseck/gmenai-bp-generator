// app/components/SearchAssistant.tsx
'use client';

import { useState } from 'react';
import { Search, Globe, X, Loader2, TrendingUp, DollarSign, Building2, Scale, Newspaper, BarChart3 } from 'lucide-react';

export default function SearchAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSearching, setIsSearching] = useState(false);
  const [activeTab, setActiveTab] = useState('market');

  const marketData = { size: '850M FCFA', growth: '28%', trends: ['Cloud adoption +35%', 'IA générative x2', 'API économie +40%', 'SaaS penetration 15% → 35%'] };
  const economicData = { gdp: '27.5Mds €', growth: '5.8%', inflation: '3.2%', mobileMoney: '78%', internet: '42%' };
  const competitors = [{ name: 'TechLeader Afrique', desc: 'Leader historique, 35% PDM', strengths: 'Réseau 15 pays, Marque forte' }, { name: 'DigitalSolutions', desc: 'Innovateur local, 20% PDM', strengths: 'Agilité, Support local, Prix compétitifs' }, { name: 'MobileFirst', desc: 'Spécialiste Mobile Money, 15% PDM', strengths: 'Intégration paiement, UI simple' }];
  const benchmark = { avgMargin: '65%', avgGrowth: '35%', avgCAC: '45k FCFA', avgLTV: '540k FCFA', avgChurn: '5%', position: 'Très attractif' };
  const regulations = [{ name: 'RGPD local', desc: 'Protection des données personnelles', impact: 'Conformité obligatoire - 2M FCFA' }, { name: 'Loi FinTech', desc: 'Encadrement services financiers digitaux', impact: 'Opportunité d\'intégration' }, { name: 'Zone OHADA', desc: 'Droit des affaires harmonisé dans 17 pays', impact: 'Facilite l\'expansion régionale' }];
  const news = [{ title: 'Le secteur SaaS en pleine croissance en Afrique', source: 'EcoActu', date: '04/05/2026' }, { title: 'Nouvelle réglementation favorisant l\'innovation', source: 'Financial Afrik', date: '03/05/2026' }, { title: 'Mobile Money : 78% de pénétration au Sénégal', source: 'Jeune Afrique', date: '02/05/2026' }];

  const performSearch = async () => { setIsSearching(true); await new Promise(r => setTimeout(r, 1000)); setIsSearching(false); };

  return (
    <>
      <button onClick={() => { setIsOpen(true); performSearch(); }} className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-primary to-secondary text-white p-4 rounded-full shadow-lg hover:scale-105 transition-all"><Search size={24} /></button>
      {isOpen && (<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"><div className="bg-white rounded-xl shadow-2xl w-full max-w-2xl max-h-[80vh] overflow-hidden">
        <div className="flex justify-between items-center p-4 bg-primary text-white"><h2 className="text-lg font-bold flex items-center gap-2"><Globe size={20} /> Assistant IA - Analyse sectorielle</h2><button onClick={() => setIsOpen(false)}><X size={20} /></button></div>
        <div className="flex overflow-x-auto border-b">{['market', 'economic', 'competitors', 'benchmark', 'regulations', 'news'].map(tab => (<button key={tab} onClick={() => setActiveTab(tab)} className={`px-3 py-2 text-sm whitespace-nowrap flex items-center gap-1 ${activeTab === tab ? 'border-b-2 border-primary text-primary' : 'text-gray-500'}`}>{tab === 'market' && <TrendingUp size={14} />}{tab === 'economic' && <DollarSign size={14} />}{tab === 'competitors' && <Building2 size={14} />}{tab === 'benchmark' && <BarChart3 size={14} />}{tab === 'regulations' && <Scale size={14} />}{tab === 'news' && <Newspaper size={14} />}{' '}{{ market: 'Marché', economic: 'Économie', competitors: 'Concurrence', benchmark: 'Benchmark', regulations: 'Réglementation', news: 'Actualités' }[tab]}</button>))}</div>
        <div className="p-4 overflow-y-auto max-h-[60vh]">
          {isSearching ? (<div className="text-center py-8"><Loader2 className="animate-spin text-primary mx-auto" size={32} /><p className="mt-2">Analyse du secteur...</p></div>) : (<div className="space-y-3">
            {activeTab === 'market' && (<><p className="font-bold text-primary">Taille: {marketData.size} | Croissance: {marketData.growth}</p><p className="font-semibold mt-2">🎯 Tendances clés</p><ul className="list-disc pl-4">{marketData.trends.map((t, i) => <li key={i}>{t}</li>)}</ul></>)}
            {activeTab === 'economic' && (<div className="grid grid-cols-2 gap-2"><div className="bg-gray-50 p-2 rounded"><p className="text-xs">PIB</p><p className="font-bold">{economicData.gdp}</p><p>Croissance: {economicData.growth}</p></div><div className="bg-gray-50 p-2 rounded"><p className="text-xs">Inflation</p><p className="font-bold">{economicData.inflation}</p></div><div className="bg-gray-50 p-2 rounded"><p className="text-xs">Mobile Money</p><p className="font-bold text-primary">{economicData.mobileMoney}</p></div><div className="bg-gray-50 p-2 rounded"><p className="text-xs">Internet</p><p className="font-bold">{economicData.internet}</p></div></div>)}
            {activeTab === 'competitors' && (<div>{competitors.map((c, i) => (<div key={i} className="border rounded p-2 mb-2"><p className="font-bold text-primary">{c.name}</p><p className="text-sm">{c.desc}</p><p className="text-xs text-gray-500">Forces: {c.strengths}</p></div>))}</div>)}
            {activeTab === 'benchmark' && (<div className="space-y-2"><div className="bg-gradient-to-r from-blue-50 to-green-50 p-3 rounded text-center"><p className="font-bold">{benchmark.position}</p></div><div className="grid grid-cols-2 gap-2"><div><p className="text-xs">Marge moyenne</p><p className="font-bold">{benchmark.avgMargin}</p></div><div><p className="text-xs">Croissance secteur</p><p className="font-bold text-green-600">{benchmark.avgGrowth}</p></div><div><p className="text-xs">CAC moyen</p><p className="font-bold">{benchmark.avgCAC}</p></div><div><p className="text-xs">LTV moyen</p><p className="font-bold">{benchmark.avgLTV}</p></div></div></div>)}
            {activeTab === 'regulations' && (<div>{regulations.map((r, i) => (<div key={i} className="border rounded p-2 mb-2"><p className="font-bold text-primary">{r.name}</p><p className="text-sm">{r.desc}</p><p className="text-xs text-yellow-600">{r.impact}</p></div>))}</div>)}
            {activeTab === 'news' && (<div>{news.map((n, i) => (<div key={i} className="border-b py-2"><p className="font-semibold text-sm">{n.title}</p><p className="text-xs text-gray-500">{n.date} - {n.source}</p></div>))}</div>)}
          </div>)}
        </div>
        <div className="p-2 border-t text-center text-xs text-gray-400 bg-gray-50">Données enrichies par GMENAI IA</div>
      </div></div>)}
    </>
  );
}
