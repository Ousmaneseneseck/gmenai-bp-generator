// app/components/BusinessPlanResult.tsx
'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { 
  Download, Printer, ChevronDown, ChevronUp, TrendingUp, FileText, Users, 
  Handshake, DollarSign, Shield, Building2, Target, BarChart3, 
  Brain, Sparkles, CheckCircle, AlertCircle, LineChart, PieChart
} from 'lucide-react';

interface BusinessPlanResultProps {
  result: any;
  companyName: string;
  formData?: any;
  onDownloadPDF: () => void;
  onPrint: () => void;
}

export default function BusinessPlanResult({ result, companyName, formData, onDownloadPDF, onPrint }: BusinessPlanResultProps) {
  const router = useRouter();
  const [expandedSections, setExpandedSections] = useState<string[]>([
    'executiveSummary', 'marketStudy', 'valueProposition', 'goToMarket', 
    'revenueModel', 'financialProjections', 'organization', 'operations', 
    'partnerships', 'costs', 'swot', 'kpis', 'risks'
  ]);

  // Stocker les données complètes du business plan dans sessionStorage au chargement
  useEffect(() => {
    if (result && companyName) {
      sessionStorage.setItem('currentBusinessPlan', JSON.stringify({
        result,
        companyName,
        formData,
        timestamp: new Date().toISOString()
      }));
    }
  }, [result, companyName, formData]);

  const toggleSection = (section: string) => {
    setExpandedSections(prev =>
      prev.includes(section) ? prev.filter(s => s !== section) : [...prev, section]
    );
  };

  const Section = ({ title, icon, children, sectionId }: any) => {
    const isExpanded = expandedSections.includes(sectionId);
    return (
      <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden mb-4 print:break-inside-avoid">
        <button
          onClick={() => toggleSection(sectionId)}
          className="w-full flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors print:hidden"
        >
          <div className="flex items-center gap-2">
            {icon}
            <span className="font-semibold text-gray-900 dark:text-white">{title}</span>
          </div>
          {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </button>
        <div className={`p-4 ${!isExpanded ? 'print:block' : ''}`}>
          {children}
        </div>
      </div>
    );
  };

  // Helper pour récupérer les données avec fallback
  const getData = (path: string, defaultValue: any = null) => {
    const parts = path.split('.');
    let current = result;
    for (const part of parts) {
      if (current === undefined || current === null) return defaultValue;
      current = current[part];
    }
    return current !== undefined && current !== null ? current : defaultValue;
  };

  const navigateToFinancialReports = () => {
    // Stocker également les données financières
    sessionStorage.setItem('financialData', JSON.stringify({
      revenueData: [
        { year: 'N+1', revenue: 100, expenses: 150, profit: -50 },
        { year: 'N+2', revenue: 250, expenses: 200, profit: 50 },
        { year: 'N+3', revenue: 500, expenses: 350, profit: 150 },
        { year: 'N+4', revenue: 800, expenses: 500, profit: 300 },
        { year: 'N+5', revenue: 1200, expenses: 720, profit: 480 },
      ],
      arr: getData('revenueModel.arr', 250),
      mrr: getData('revenueModel.mrr', 25),
      breakEvenPoint: getData('revenueModel.breakEvenPoint', '18 mois'),
      scenarios: getData('costs.scenarios', { pessimistic: 40, realistic: 27, optimistic: 13 }),
      marketSize: getData('marketStudy.size', '500M FCFA'),
      marketGrowth: getData('marketStudy.growth', '25% annuel'),
    }));
    router.push('/financial-reports');
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Barre d'outils d'export */}
      <div className="fixed bottom-4 right-4 z-50 flex gap-2 print:hidden">
        <button
          onClick={onDownloadPDF}
          className="bg-primary text-white px-4 py-2 rounded-lg shadow-lg hover:bg-primary/90 transition-all flex items-center gap-2"
        >
          <Download size={18} /> Télécharger PDF
        </button>
        <button
          onClick={onPrint}
          className="bg-gray-700 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-gray-600 transition-all flex items-center gap-2"
        >
          <Printer size={18} /> Imprimer
        </button>
        <button
          onClick={navigateToFinancialReports}
          className="bg-secondary text-white px-4 py-2 rounded-lg shadow-lg hover:bg-secondary/90 transition-all flex items-center gap-2"
        >
          <LineChart size={18} /> Rapports financiers
        </button>
      </div>

      {/* Contenu */}
      <div className="container mx-auto max-w-5xl py-8 px-4 print:py-0">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden print:shadow-none">
          
          {/* En-tête */}
          <div className="bg-gradient-to-r from-primary to-primary/70 text-white p-8 print:bg-primary">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold mb-2">{companyName}</h1>
                <p className="text-xl opacity-90">{getData('executiveSummary.vision', 'Transformer le secteur en Afrique')}</p>
                <p className="text-sm opacity-75 mt-2">Business Plan - {new Date().toLocaleDateString('fr-FR')}</p>
                <p className="text-xs opacity-60 mt-1">Généré par GMENAI IA</p>
              </div>
              <Sparkles className="w-12 h-12 opacity-50" />
            </div>
          </div>

          <div className="p-6 space-y-4">
            
            {/* 1. Résumé Exécutif */}
            <Section title="📋 Résumé Exécutif" icon={<FileText size={20} />} sectionId="executiveSummary">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-1">Vision</h4>
                  <p className="text-gray-600 dark:text-gray-400">{getData('executiveSummary.vision', 'Devenir le leader panafricain de la transformation digitale')}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-1">Mission</h4>
                  <p className="text-gray-600 dark:text-gray-400">{getData('executiveSummary.mission', 'Permettre aux entreprises africaines d\'accéder à des solutions digitales performantes')}</p>
                </div>
                <div className="md:col-span-2">
                  <h4 className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Objectifs stratégiques</h4>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-400">
                    {getData('executiveSummary.objectives', ['Atteindre 5000 clients d\'ici 3 ans', 'Générer 500M FCFA de CA en année 3', 'S\'implanter dans 10 pays africains']).map((obj: string, i: number) => (
                      <li key={i}>{obj}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </Section>

            {/* 2. Étude de Marché */}
            <Section title="📊 Étude de Marché" icon={<TrendingUp size={20} />} sectionId="marketStudy">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg text-center">
                  <p className="text-sm text-gray-500">TAM (Marché Total)</p>
                  <p className="text-xl font-bold text-primary">{getData('marketStudy.tam', '2500M FCFA')}</p>
                </div>
                <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg text-center">
                  <p className="text-sm text-gray-500">SAM (Marché Adressable)</p>
                  <p className="text-xl font-bold text-primary">{getData('marketStudy.sam', '800M FCFA')}</p>
                </div>
                <div className="bg-yellow-50 dark:bg-yellow-900/20 p-3 rounded-lg text-center">
                  <p className="text-sm text-gray-500">SOM (Marché Obtenable)</p>
                  <p className="text-xl font-bold text-primary">{getData('marketStudy.som', '200M FCFA')}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-gray-700 dark:text-gray-300">Taille & Croissance</h4>
                  <p className="text-gray-600">📈 {getData('marketStudy.size', '500M FCFA')} ({getData('marketStudy.growth', '25% annuel')})</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 dark:text-gray-300">Concurrents principaux</h4>
                  {getData('marketStudy.competitors', [
                    { name: 'TechCorp Afrique', marketShare: '35%', strengths: 'Présence établie' }
                  ]).map((c: any, i: number) => (
                    <div key={i} className="mb-2">
                      <p className="font-medium text-gray-800 dark:text-gray-200">{c.name}</p>
                      <p className="text-sm text-gray-500">Part: {c.marketShare} | {c.strengths}</p>
                    </div>
                  ))}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 dark:text-gray-300">Opportunités</h4>
                  <ul className="list-disc list-inside text-gray-600">
                    {getData('marketStudy.opportunities', ['Digitalisation accélérée', 'Mobile Money mature', 'Besoins non satisfaits']).map((o: string, i: number) => (
                      <li key={i}>{o}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700 dark:text-gray-300">Tendances du secteur</h4>
                  <ul className="list-disc list-inside text-gray-600">
                    {getData('marketStudy.trends', ['IA générative', 'Cloud adoption', 'API économie']).map((t: string, i: number) => (
                      <li key={i}>{t}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </Section>

            {/* 3. Proposition de Valeur */}
            <Section title="💡 Proposition de Valeur" icon={<Target size={20} />} sectionId="valueProposition">
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 p-4 rounded-lg mb-4">
                <p className="text-lg font-medium text-primary">{getData('valueProposition.uniqueValue', 'Solution unique combinant IA et Mobile Money pour le marché africain')}</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold text-gray-700">Bénéfices clés</h4>
                  <ul className="list-disc list-inside text-gray-600">
                    {getData('valueProposition.benefits', ['Gain de temps', 'Réduction des coûts', 'Meilleure visibilité']).map((b: string, i: number) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700">Différenciateurs</h4>
                  <ul className="list-disc list-inside text-gray-600">
                    {getData('valueProposition.differentiators', ['IA exclusive', 'Adapté FCFA', 'Support local']).map((d: string, i: number) => (
                      <li key={i}>{d}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </Section>

            {/* 4. Stratégie Go-to-Market */}
            <Section title="🚀 Stratégie Go-to-Market" icon={<Users size={20} />} sectionId="goToMarket">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <h4 className="font-semibold text-gray-700">Budget total</h4>
                  <p className="text-2xl font-bold text-primary">{getData('goToMarket.budget', '40M FCFA')}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700">Timeline</h4>
                  <p className="text-gray-600">{getData('goToMarket.timeline', '6 mois')}</p>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">Canaux d'acquisition</h4>
                <div className="flex flex-wrap gap-2">
                  {getData('goToMarket.channels', ['Marketing digital', 'Partenaires locaux', 'Mobile Money']).map((c: any, i: number) => (
                    <span key={i} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-sm">
                      {typeof c === 'string' ? c : c.name}
                    </span>
                  ))}
                </div>
              </div>
            </Section>

            {/* 5. Modèle de Revenus */}
            <Section title="💰 Modèle de Revenus" icon={<DollarSign size={20} />} sectionId="revenueModel">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                <div className="text-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <p className="text-sm text-gray-500">ARR (Annuel)</p>
                  <p className="text-2xl font-bold text-primary">{getData('revenueModel.arr', 250)}M FCFA</p>
                </div>
                <div className="text-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <p className="text-sm text-gray-500">MRR (Mensuel)</p>
                  <p className="text-xl font-bold text-green-600">{getData('revenueModel.mrr', 25)}M FCFA</p>
                </div>
                <div className="text-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <p className="text-sm text-gray-500">Break-even</p>
                  <p className="text-lg font-semibold">{getData('revenueModel.breakEvenPoint', '18 mois')}</p>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">Offres de pricing</h4>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {getData('revenueModel.pricing.tiers', [
                    { name: 'Starter', price: '29 500 FCFA/mois', features: ['5 utilisateurs', 'Support email'] },
                    { name: 'Pro', price: '49 500 FCFA/mois', features: ['Illimité', 'Support prioritaire'] },
                    { name: 'Enterprise', price: 'Sur devis', features: ['Dédié', 'SLA personnalisé'] }
                  ]).map((tier: any, i: number) => (
                    <div key={i} className="border border-gray-200 dark:border-gray-700 rounded-lg p-3">
                      <h5 className="font-bold text-primary">{tier.name}</h5>
                      <p className="text-lg font-semibold">{tier.price}</p>
                      <ul className="text-sm text-gray-500 mt-2">
                        {tier.features?.map((f: string, j: number) => (
                          <li key={j}>✓ {f}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </Section>

            {/* 6. Projections Financières */}
            <Section title="📈 Projections Financières 5 ans" icon={<BarChart3 size={20} />} sectionId="financialProjections">
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-gray-100 dark:bg-gray-700">
                      <th className="p-2 text-left">Année</th>
                      <th className="p-2 text-right">CA (M FCFA)</th>
                      <th className="p-2 text-right">Charges</th>
                      <th className="p-2 text-right">Résultat</th>
                      <th className="p-2 text-right">Marge</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[1, 2, 3, 4, 5].map(year => {
                      const revenue = [100, 250, 500, 800, 1200][year - 1];
                      const expenses = [150, 200, 350, 500, 720][year - 1];
                      const profit = revenue - expenses;
                      const margin = profit >= 0 ? ((profit / revenue) * 100).toFixed(0) : '-';
                      return (
                        <tr key={year} className="border-b border-gray-200">
                          <td className="p-2 font-medium">N+{year}</td>
                          <td className="p-2 text-right">{revenue}M</td>
                          <td className="p-2 text-right">{expenses}M</td>
                          <td className={`p-2 text-right ${profit >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                            {profit >= 0 ? '+' : ''}{profit}M
                          </td>
                          <td className="p-2 text-right">{profit >= 0 ? `${margin}%` : '-'}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </Section>

            {/* 7. Analyse SWOT */}
            <Section title="🎯 Analyse SWOT" icon={<Brain size={20} />} sectionId="swot">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border-l-4 border-green-500 pl-3">
                  <h4 className="font-semibold text-green-600">Forces</h4>
                  <ul className="list-disc list-inside text-gray-600">
                    {getData('swot.strengths', ['Équipe expérimentée', 'Tech propriétaire', 'Partenariats Mobile Money']).map((s: string, i: number) => (
                      <li key={i}>{s}</li>
                    ))}
                  </ul>
                </div>
                <div className="border-l-4 border-red-500 pl-3">
                  <h4 className="font-semibold text-red-600">Faiblesses</h4>
                  <ul className="list-disc list-inside text-gray-600">
                    {getData('swot.weaknesses', ['Jeune marque', 'Ressources limitées', 'Scale à prouver']).map((w: string, i: number) => (
                      <li key={i}>{w}</li>
                    ))}
                  </ul>
                </div>
                <div className="border-l-4 border-yellow-500 pl-3">
                  <h4 className="font-semibold text-yellow-600">Opportunités</h4>
                  <ul className="list-disc list-inside text-gray-600">
                    {getData('swot.opportunities', ['Marché en croissance', 'Digitalisation', 'Subventions']).map((o: string, i: number) => (
                      <li key={i}>{o}</li>
                    ))}
                  </ul>
                </div>
                <div className="border-l-4 border-orange-500 pl-3">
                  <h4 className="font-semibold text-orange-600">Menaces</h4>
                  <ul className="list-disc list-inside text-gray-600">
                    {getData('swot.threats', ['Concurrence internationale', 'Instabilité économique', 'Fragmentation réglementaire']).map((t: string, i: number) => (
                      <li key={i}>{t}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </Section>

            {/* 8. Partenariats */}
            <Section title="🤝 Partenariats Stratégiques" icon={<Handshake size={20} />} sectionId="partnerships">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {getData('partnerships', [
                  { name: 'Orange Money', type: 'Mobile Money', value: 'Intégration paiement' },
                  { name: 'Wave', type: 'Mobile Money', value: 'API transaction' },
                  { name: 'Incubateur Local', type: 'Support', value: 'Accès réseau' }
                ]).map((p: any, i: number) => (
                  <div key={i} className="border border-gray-200 dark:border-gray-700 rounded-lg p-3">
                    <h4 className="font-bold text-primary">{p.name}</h4>
                    <p className="text-sm text-gray-500">{p.type}</p>
                    <p className="text-sm text-gray-600 mt-1">{p.value}</p>
                  </div>
                ))}
              </div>
            </Section>

            {/* 9. KPIs */}
            <Section title="📊 Indicateurs Clés de Performance" icon={<Target size={20} />} sectionId="kpis">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {getData('kpis', [
                  { name: 'MRR (M FCFA)', target: '100' },
                  { name: 'Churn rate', target: '< 5%' },
                  { name: 'LTV/CAC', target: '> 5' },
                  { name: 'NPS', target: '> 50' }
                ]).map((kpi: any, i: number) => (
                  <div key={i} className="flex justify-between items-center p-2 bg-gray-50 dark:bg-gray-800 rounded">
                    <span className="font-medium">{kpi.name}</span>
                    <span className="text-primary font-bold">{kpi.target}</span>
                  </div>
                ))}
              </div>
            </Section>

            {/* 10. Analyse des Risques */}
            <Section title="⚠️ Analyse des Risques" icon={<Shield size={20} />} sectionId="risks">
              <div className="space-y-3">
                {getData('risks', [
                  { category: 'Marché', description: 'Concurrence agressive', probability: 'Medium', mitigation: 'Différenciation forte' },
                  { category: 'Technique', description: 'Pannes critiques', probability: 'Low', mitigation: 'Redondance + monitoring' }
                ]).map((risk: any, i: number) => (
                  <div key={i} className="border border-gray-200 dark:border-gray-700 rounded-lg p-3">
                    <div className="flex justify-between items-center mb-2">
                      <h4 className="font-semibold text-gray-800 dark:text-gray-200">{risk.category} - {risk.description}</h4>
                      <span className={`text-xs px-2 py-1 rounded ${
                        risk.probability === 'High' ? 'bg-red-100 text-red-700' :
                        risk.probability === 'Medium' ? 'bg-yellow-100 text-yellow-700' :
                        'bg-green-100 text-green-700'
                      }`}>
                        {risk.probability}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600">🔧 Mitigation: {risk.mitigation}</p>
                  </div>
                ))}
              </div>
            </Section>

            {/* Bouton vers rapports financiers */}
            <div className="text-center pt-4 print:hidden">
              <button
                onClick={navigateToFinancialReports}
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-secondary text-white rounded-lg hover:opacity-90 transition-all transform hover:scale-105 font-semibold"
              >
                <PieChart size={20} />
                Voir les rapports financiers détaillés
                <LineChart size={20} />
              </button>
            </div>

          </div>

          {/* Pied de page */}
          <div className="bg-gray-50 dark:bg-gray-900 p-4 text-center text-sm text-gray-500 print:mt-4">
            <p>Document confidentiel généré par GMENAI - {new Date().toLocaleDateString('fr-FR')}</p>
            <p className="text-xs mt-1">📊 Prévisions en FCFA - Adapté aux marchés africains - Intégrations Mobile Money</p>
            <p className="text-xs">📧 contact@gmenai.com | 🌐 www.gmenai.com | 📞 +221 78 123 45 67</p>
          </div>
        </div>
      </div>
    </div>
  );
}
