// app/components/BusinessPlanGenerator.tsx
'use client';

import { useState } from 'react';
import { Loader2 } from 'lucide-react';
import dynamic from 'next/dynamic';

const BusinessPlanResult = dynamic(() => import('./BusinessPlanResult'), {
  loading: () => <div className="text-center py-8">Chargement du résultat...</div>,
  ssr: false,
});

import SearchAssistant from './SearchAssistant';

interface FormData {
  companyName: string;
  sector: string;
  location: string;
  revenueModel: string;
  targetCustomers: string;
  hasMobileMoney: boolean;
}

export default function BusinessPlanGenerator() {
  const [step, setStep] = useState<'form' | 'generating' | 'result'>('form');
  const [formData, setFormData] = useState<FormData>({
    companyName: '',
    sector: '',
    location: 'Sénégal',
    revenueModel: 'saas',
    targetCustomers: '',
    hasMobileMoney: true
  });
  const [result, setResult] = useState(null);
  const [enrichedData, setEnrichedData] = useState(null);

  const sectors = ['Agriculture', 'Technologie/SaaS', 'Commerce', 'Logistique', 'Santé', 'Éducation', 'Immobilier', 'Arts Martiaux'];
  const locations = ['Sénégal', 'Côte d\'Ivoire', 'Cameroun', 'Mali', 'Burkina Faso', 'Guinée', 'Congo', 'RDC', 'Autre'];
  const revenueModels = [
    { value: 'saas', label: 'SaaS (Abonnement)', currency: 'ARR/MRR' },
    { value: 'transactionnel', label: 'Transactionnel (Commission)', currency: 'FCFA/transaction' },
    { value: 'abonnement', label: 'Abonnement (fixe)', currency: 'FCFA/mois' },
    { value: 'marketplace', label: 'Marketplace (Commission)', currency: '% vente' }
  ];

  const handleDataEnriched = (data: any) => {
    setEnrichedData(data);
    console.log('Données enrichies reçues:', data);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStep('generating');
    
    try {
      const response = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      const data = await response.json();
      if (data.success) {
        setResult(data.data);
        setStep('result');
      } else {
        throw new Error('Erreur de génération');
      }
    } catch (error) {
      console.error('Erreur:', error);
      setStep('form');
      alert('Une erreur est survenue. Veuillez réessayer.');
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadPDF = () => {
    window.print();
  };

  if (step === 'generating') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-16 h-16 animate-spin text-primary mx-auto mb-4" />
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
            Génération de votre business plan
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Nos 8 modules IA analysent votre marché...
          </p>
          <div className="mt-4 space-y-2 text-left max-w-md mx-auto">
            <div className="text-sm text-green-600">✓ Analyse marché en cours</div>
            <div className="text-sm text-gray-500">◐ Proposition de valeur</div>
            <div className="text-sm text-gray-500">◐ Stratégie Go-to-market</div>
            <div className="text-sm text-gray-500">◐ Modèle de revenus</div>
            <div className="text-sm text-gray-500">◐ Projections financières</div>
            <div className="text-sm text-gray-500">◐ Analyse SWOT</div>
          </div>
        </div>
      </div>
    );
  }

  if (step === 'result' && result) {
    return (
      <BusinessPlanResult 
        result={result} 
        companyName={formData.companyName} 
        formData={formData}
        onDownloadPDF={handleDownloadPDF}
        onPrint={handlePrint}
      />
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 py-12 px-4">
      <div className="container mx-auto max-w-3xl">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8">
          <div className="text-center mb-8">
            <div className="inline-block p-3 bg-primary/10 rounded-full mb-4">
              <span className="text-4xl">🚀</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2">
              Créez votre business plan en 2 minutes
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Remplissez ce formulaire, nos 8 modules IA génèrent automatiquement un business plan complet
            </p>
          </div>
          
          <SearchAssistant 
            sector={formData.sector} 
            country={formData.location} 
            onDataEnriched={handleDataEnriched} 
          />
          
          <form onSubmit={handleSubmit} className="space-y-6 mt-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Nom de votre entreprise *
              </label>
              <input
                type="text"
                required
                value={formData.companyName}
                onChange={(e) => setFormData({...formData, companyName: e.target.value})}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Ma startup"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Secteur d'activité *
              </label>
              <select
                required
                value={formData.sector}
                onChange={(e) => setFormData({...formData, sector: e.target.value})}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
              >
                <option value="">Sélectionnez un secteur</option>
                {sectors.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Pays / Localisation *
              </label>
              <select
                required
                value={formData.location}
                onChange={(e) => setFormData({...formData, location: e.target.value})}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
              >
                {locations.map(l => <option key={l} value={l}>{l}</option>)}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Modèle de revenus *
              </label>
              <select
                required
                value={formData.revenueModel}
                onChange={(e) => setFormData({...formData, revenueModel: e.target.value})}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
              >
                {revenueModels.map(m => <option key={m.value} value={m.value}>{m.label} ({m.currency})</option>)}
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Client cible
              </label>
              <input
                type="text"
                value={formData.targetCustomers}
                onChange={(e) => setFormData({...formData, targetCustomers: e.target.value})}
                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Ex: PME, startups, commerçants..."
              />
            </div>
            
            <div className="flex items-center gap-3 p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
              <input
                type="checkbox"
                checked={formData.hasMobileMoney}
                onChange={(e) => setFormData({...formData, hasMobileMoney: e.target.checked})}
                className="w-4 h-4 text-primary rounded focus:ring-primary"
              />
              <label className="text-gray-700 dark:text-gray-300">
                Intégration Mobile Money (Orange Money, Wave, M-Pesa)
              </label>
            </div>
            
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-primary to-primary/80 text-white py-3 rounded-lg hover:opacity-90 transition-all hover:scale-105 font-semibold text-lg"
            >
              🚀 Générer mon business plan complet
            </button>
          </form>
          
          <div className="mt-6 text-center text-xs text-gray-500 dark:text-gray-400">
            ⚡ 8 modules IA • 📊 Prévisions FCFA 5 ans • 📈 Analyse SWOT • 🤝 Partenariats • 📑 Export PDF
          </div>
        </div>
      </div>
    </div>
  );
}


