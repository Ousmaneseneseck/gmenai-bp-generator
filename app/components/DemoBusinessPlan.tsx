// app/components/DemoBusinessPlan.tsx
'use client';

import { useState } from 'react';

export default function DemoBusinessPlan() {
  const [step, setStep] = useState<'form' | 'result'>('form');
  const [companyName, setCompanyName] = useState('');
  const [sector, setSector] = useState('');
  const [country, setCountry] = useState('Sénégal');

  const sectors = ['Technologie/SaaS', 'Agriculture', 'Commerce', 'Santé', 'Éducation'];
  const countries = ['Sénégal', 'Côte d\'Ivoire', 'Cameroun', 'Mali', 'Burkina Faso'];

  const generateBusinessPlan = () => {
    setStep('result');
  };

  const marketData: Record<string, any> = {
    'Technologie/SaaS': { size: '850M FCFA', growth: '28%', tam: '2500M FCFA', sam: '850M FCFA', som: '120M FCFA' },
    'Agriculture': { size: '1200M FCFA', growth: '15%', tam: '3500M FCFA', sam: '1200M FCFA', som: '180M FCFA' },
    'Commerce': { size: '2500M FCFA', growth: '18%', tam: '5000M FCFA', sam: '2500M FCFA', som: '300M FCFA' },
    'Santé': { size: '600M FCFA', growth: '22%', tam: '1800M FCFA', sam: '600M FCFA', som: '90M FCFA' },
    'Éducation': { size: '400M FCFA', growth: '25%', tam: '1200M FCFA', sam: '400M FCFA', som: '60M FCFA' },
  };

  const economicData: Record<string, any> = {
    'Sénégal': { gdp: '27.5Mds €', growth: '5.8%', mobileMoney: '78%', inflation: '3.2%' },
    "Côte d'Ivoire": { gdp: '70.1Mds €', growth: '6.2%', mobileMoney: '82%', inflation: '3.5%' },
    'Cameroun': { gdp: '44.5Mds €', growth: '4.5%', mobileMoney: '65%', inflation: '3.0%' },
  };

  if (step === 'form') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-12 px-4">
        <div className="container mx-auto max-w-3xl">
          <div className="bg-white rounded-xl shadow-xl p-8">
            <h2 className="text-2xl font-bold text-center mb-6">Créez votre business plan en 2 minutes</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Nom de votre entreprise</label>
                <input
                  type="text"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg"
                  placeholder="Ex: SamaDojo"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Secteur d'activité</label>
                <select
                  value={sector}
                  onChange={(e) => setSector(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg"
                >
                  <option value="">Sélectionnez un secteur</option>
                  {sectors.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-1">Pays</label>
                <select
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  className="w-full px-4 py-2 border rounded-lg"
                >
                  {countries.map(c => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
              
              <button
                onClick={generateBusinessPlan}
                disabled={!companyName || !sector}
                className="w-full bg-primary text-white py-3 rounded-lg hover:bg-primary/90 transition-all disabled:opacity-50"
              >
                Générer mon business plan
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const data = marketData[sector] || marketData['Technologie/SaaS'];
  const eco = economicData[country] || economicData['Sénégal'];

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="container mx-auto max-w-5xl">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="bg-primary text-white p-6">
            <h1 className="text-2xl font-bold">{companyName || 'Votre entreprise'}</h1>
            <p className="opacity-90">Business Plan - {new Date().toLocaleDateString()}</p>
          </div>
          
          <div className="p-6 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-blue-50 p-3 rounded"><p className="text-sm">Taille marché</p><p className="font-bold text-xl">{data.size}</p><p className="text-green-600">{data.growth}</p></div>
              <div className="bg-green-50 p-3 rounded"><p className="text-sm">TAM/SAM/SOM</p><p className="font-bold">{data.tam} / {data.sam} / {data.som}</p></div>
              <div className="bg-yellow-50 p-3 rounded"><p className="text-sm">Mobile Money</p><p className="font-bold">{eco.mobileMoney}</p></div>
            </div>
            
            <div className="border-t pt-4">
              <h3 className="font-bold text-lg mb-2">Proposition de valeur</h3>
              <p className="text-gray-700">Simplifiez la gestion de {sector} avec {companyName}</p>
            </div>
            
            <div className="border-t pt-4">
              <h3 className="font-bold text-lg mb-2">Projections financières</h3>
              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="bg-red-50 p-2 rounded"><p className="text-sm">Pessimiste</p><p className="font-bold">40M FCFA</p></div>
                <div className="bg-yellow-50 p-2 rounded"><p className="text-sm">Réaliste</p><p className="font-bold">27M FCFA</p></div>
                <div className="bg-green-50 p-2 rounded"><p className="text-sm">Optimiste</p><p className="font-bold">13M FCFA</p></div>
              </div>
            </div>
            
            <button
              onClick={() => window.print()}
              className="w-full bg-primary text-white py-2 rounded-lg hover:bg-primary/90"
            >
              📄 Télécharger PDF
            </button>
            
            <button
              onClick={() => setStep('form')}
              className="w-full border border-primary text-primary py-2 rounded-lg"
            >
              ← Modifier mes informations
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
