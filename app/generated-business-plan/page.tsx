// app/generated-business-plan/page.tsx
'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Download, Printer, TrendingUp, Target, Rocket, DollarSign, Users, Settings, Handshake, Shield, LineChart } from 'lucide-react';

export default function GeneratedBusinessPlan() {
  const router = useRouter();
  const [companyName, setCompanyName] = useState('Votre entreprise');
  const [formData, setFormData] = useState<any>({});

  useEffect(() => {
    const name = sessionStorage.getItem('companyName');
    const data = sessionStorage.getItem('businessPlanData');
    if (name) setCompanyName(name);
    if (data) setFormData(JSON.parse(data));
  }, []);

  const modules = [
    { title: 'Étude de marché', subtitle: 'Customer Intelligence', icon: TrendingUp, content: { size: '850M FCFA', growth: '28%', competitors: ['Concurrent A', 'Concurrent B'], opportunities: ['Digitalisation', 'Mobile Money'] } },
    { title: 'Proposition de valeur', subtitle: 'Value Generator AI', icon: Target, content: { uniqueValue: `Simplifiez la gestion de ${formData.sector || 'votre secteur'} avec ${companyName}`, benefits: ['Gain de temps', 'Réduction des coûts', 'Meilleure visibilité'] } },
    { title: 'Go-to-market', subtitle: 'Go-To-Market AI', icon: Rocket, content: { channels: ['Social Media', 'Partenaires locaux', 'Mobile Money'], budget: '40M FCFA', timeline: '3 mois' } },
    { title: 'Modèle de revenus', subtitle: 'Revenue Intelligence', icon: DollarSign, content: { pricing: '49 500 FCFA/mois', arr: '250M FCFA', mrr: '25M FCFA' } },
    { title: 'Organisation & RH', subtitle: 'Resource Optimizer', icon: Users, content: { structure: ['Direction', 'Commercial', 'Tech', 'Support'], payroll: '80M FCFA/an' } },
    { title: 'Process & opérations', subtitle: 'Operations AI', icon: Settings, content: { workflows: ['Onboarding', 'Support', 'Facturation'], kpis: ['SLA < 2h', 'Satisfaction > 90%'] } },
    { title: 'Partenariats', subtitle: 'Ecosystem Manager', icon: Handshake, content: { partners: ['Orange Money', 'Wave', 'Incubateur Local'] } },
    { title: 'Coûts & risques', subtitle: 'Cost & Risk AI', icon: Shield, content: { capex: '53M FCFA', opex: '31M FCFA', scenarios: { pessimistic: '51M', realistic: '33M', optimistic: '13M' } } }
  ];

  const handleFinancialReports = () => {
    router.push('/financial-reports');
  };

  const handleBack = () => {
    router.push('/');
  };

  const handlePrint = () => window.print();

  return (
    <div className="min-h-screen bg-gray-50">
            <div className="fixed bottom-4 right-4 z-50 flex gap-2 print:hidden">
        <button onClick={handleBack} className="bg-gray-700 text-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2"><ArrowLeft size={18} /> Retour</button>
        <button onClick={handleFinancialReports} className="bg-secondary text-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2"><LineChart size={18} /> Rapports financiers</button>
        <button onClick={handlePrint} className="bg-primary text-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2"><Download size={18} /> PDF</button>
        <button onClick={handlePrint} className="bg-gray-700 text-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2"><Printer size={18} /> Imprimer</button>
      </div>

      <div className="container mx-auto max-w-5xl py-8 px-4">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="bg-gradient-to-r from-primary to-primary/70 text-white p-6">
            <h1 className="text-2xl font-bold">{companyName}</h1>
            <p className="opacity-90">Business Plan généré par IA - {new Date().toLocaleDateString()}</p>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {modules.map((mod, idx) => (
                <div key={idx} className="border rounded-lg p-4 hover:shadow-md transition">
                  <div className="flex items-center gap-2 mb-3"><mod.icon className="text-primary" size={20} /><h3 className="font-bold text-primary">{mod.title}</h3><span className="text-xs text-gray-400">{mod.subtitle}</span></div>
                  {mod.title === 'Étude de marché' && (<><p className="text-sm">📊 Taille: {mod.content.size}</p><p className="text-sm">📈 Croissance: {mod.content.growth}</p><p className="text-sm">🎯 Opportunités: {mod.content.opportunities.join(', ')}</p></>)}
                  {mod.title === 'Proposition de valeur' && (<><p className="text-sm font-medium text-gray-700">{mod.content.uniqueValue}</p><ul className="list-disc list-inside text-sm mt-2">{mod.content.benefits.map((b: string, i: number) => <li key={i}>{b}</li>)}</ul></>)}
                  {mod.title === 'Go-to-market' && (<><p className="text-sm">📢 Canaux: {mod.content.channels.join(', ')}</p><p className="text-sm">💰 Budget: {mod.content.budget}</p><p className="text-sm">⏱️ Timeline: {mod.content.timeline}</p></>)}
                  {mod.title === 'Modèle de revenus' && (<><p className="text-sm">💵 Pricing: {mod.content.pricing}</p><p className="text-sm">📊 ARR: {mod.content.arr} | MRR: {mod.content.mrr}</p></>)}
                  {mod.title === 'Organisation & RH' && (<><p className="text-sm">🏢 Structure: {mod.content.structure.join(' → ')}</p><p className="text-sm">💰 Masse salariale: {mod.content.payroll}</p></>)}
                  {mod.title === 'Process & opérations' && (<><p className="text-sm">⚙️ Workflows: {mod.content.workflows.join(', ')}</p><p className="text-sm">📊 KPIs: {mod.content.kpis.join(', ')}</p></>)}
                  {mod.title === 'Partenariats' && (<><p className="text-sm">🤝 Partenaires: {mod.content.partners.join(', ')}</p></>)}
                  {mod.title === 'Coûts & risques' && (<><p className="text-sm">🏗️ CAPEX: {mod.content.capex} | OPEX: {mod.content.opex}</p><div className="flex gap-2 mt-2"><span className="text-xs bg-red-100 px-2 py-1 rounded">Pessimiste: {mod.content.scenarios.pessimistic}M</span><span className="text-xs bg-yellow-100 px-2 py-1 rounded">Réaliste: {mod.content.scenarios.realistic}M</span><span className="text-xs bg-green-100 px-2 py-1 rounded">Optimiste: {mod.content.scenarios.optimistic}M</span></div></>)}
                </div>
              ))}
            </div>
            <div className="mt-8 text-center"><button onClick={handleFinancialReports} className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg font-semibold hover:scale-105 transition">📊 Voir les rapports financiers détaillés <LineChart size={18} /></button></div>
          </div>
          <div className="bg-gray-50 p-3 text-center text-xs text-gray-400">Prévisions en FCFA - Adapté aux marchés africains - Intégrations Mobile Money</div>
        </div>
      </div>
    </div>
  );
}

// Ajouter les boutons d'export multiples dans la barre d'outils
// Remplacer les boutons existants par :

      <div className="fixed bottom-4 right-4 z-50 flex gap-2 print:hidden">
        <button onClick={handleBack} className="bg-gray-700 text-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2"><ArrowLeft size={18} /> Retour</button>
        <button onClick={handleFinancialReports} className="bg-secondary text-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2"><LineChart size={18} /> Rapports financiers</button>
        <button onClick={handlePrint} className="bg-primary text-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2"><Download size={18} /> PDF</button>
        <button onClick={handlePrint} className="bg-gray-700 text-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2"><Printer size={18} /> Imprimer</button>
      </div>

