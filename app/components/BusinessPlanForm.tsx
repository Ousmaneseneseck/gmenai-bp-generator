// app/components/BusinessPlanForm.tsx
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function BusinessPlanForm() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    // Partie I - Fondamentaux
    companyName: '', tagline: '', mission: '', vision: '',
    // Partie II - Marché
    sector: '', country: 'Sénégal', targetCustomers: '', problem: '', solution: '',
    // Partie III - Produit
    productDescription: '', uniqueValue: '', mainFeatures: '',
    // Partie IV - Go-to-market
    marketingChannels: '', salesStrategy: '',
    // Partie V - Revenus
    revenueModel: 'saas', pricing: '', fundingGoal: '',
    // Partie VI - Organisation
    teamSize: '', founderNames: '', keyRoles: '',
    // Partie VII - Opérations
    operationalProcess: '', technologyStack: '',
    // Partie VIII - Partenariats
    mainPartners: '',
    // Partie IX - Coûts & risques
    capex: '', opex: '',
    // Options
    hasMobileMoney: true
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sessionStorage.setItem('companyName', formData.companyName);
    sessionStorage.setItem('businessPlanData', JSON.stringify(formData));
    router.push('/generated-business-plan');
  };

  const sectors = ['Technologie/SaaS', 'Agriculture', 'Commerce/Retail', 'Santé', 'Éducation', 'Immobilier', 'Logistique', 'Arts Martiaux'];
  const countries = ['Sénégal', "Côte d'Ivoire", 'Cameroun', 'Mali', 'Burkina Faso', 'Guinée', 'RDC', 'Gabon'];

  const totalSteps = 8;
  const steps = [
    { id: 1, title: 'Fondamentaux', fields: ['companyName', 'tagline', 'mission', 'vision'] },
    { id: 2, title: 'Marché & Problème', fields: ['sector', 'country', 'targetCustomers', 'problem', 'solution'] },
    { id: 3, title: 'Produit & Valeur', fields: ['productDescription', 'uniqueValue', 'mainFeatures'] },
    { id: 4, title: 'Go-to-market', fields: ['marketingChannels', 'salesStrategy'] },
    { id: 5, title: 'Modèle de revenus', fields: ['revenueModel', 'pricing', 'fundingGoal'] },
    { id: 6, title: 'Organisation & RH', fields: ['teamSize', 'founderNames', 'keyRoles'] },
    { id: 7, title: 'Opérations & Partenariats', fields: ['operationalProcess', 'technologyStack', 'mainPartners'] },
    { id: 8, title: 'Coûts & risques', fields: ['capex', 'opex'] }
  ];

  const nextStep = () => setStep(s => Math.min(s + 1, totalSteps));
  const prevStep = () => setStep(s => Math.max(s - 1, 1));

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-8 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-white rounded-xl shadow-xl overflow-hidden">
          {/* Progress bar */}
          <div className="bg-primary/10 p-4">
            <div className="flex justify-between mb-2">
              <span className="text-sm font-medium">Étape {step}/{totalSteps}</span>
              <span className="text-sm font-medium">{steps[step-1].title}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-primary h-2 rounded-full transition-all" style={{ width: `${(step/totalSteps)*100}%` }}></div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="p-6">
            {/* Step 1 : Fondamentaux */}
            {step === 1 && (
              <div className="space-y-4">
                <h2 className="text-2xl font-bold mb-4">📋 Informations fondamentales</h2>
                <div><label className="block text-sm font-medium mb-1">Nom de l'entreprise *</label><input type="text" required value={formData.companyName} onChange={e => setFormData({...formData, companyName: e.target.value})} className="w-full px-4 py-2 border rounded-lg" placeholder="SamaDojo" /></div>
                <div><label className="block text-sm font-medium mb-1">Tagline / Slogan</label><input type="text" value={formData.tagline} onChange={e => setFormData({...formData, tagline: e.target.value})} className="w-full px-4 py-2 border rounded-lg" placeholder="La transformation digitale des dojos" /></div>
                <div><label className="block text-sm font-medium mb-1">Mission</label><textarea rows={2} value={formData.mission} onChange={e => setFormData({...formData, mission: e.target.value})} className="w-full px-4 py-2 border rounded-lg" placeholder="Notre mission est de..." /></div>
                <div><label className="block text-sm font-medium mb-1">Vision</label><textarea rows={2} value={formData.vision} onChange={e => setFormData({...formData, vision: e.target.value})} className="w-full px-4 py-2 border rounded-lg" placeholder="Devenir le leader panafricain..." /></div>
              </div>
            )}

            {/* Step 2 : Marché */}
            {step === 2 && (
              <div className="space-y-4">
                <h2 className="text-2xl font-bold mb-4">📊 Étude de marché</h2>
                <div><label className="block text-sm font-medium mb-1">Secteur *</label><select required value={formData.sector} onChange={e => setFormData({...formData, sector: e.target.value})} className="w-full px-4 py-2 border rounded-lg"><option value="">Sélectionnez</option>{sectors.map(s => <option key={s}>{s}</option>)}</select></div>
                <div><label className="block text-sm font-medium mb-1">Pays *</label><select required value={formData.country} onChange={e => setFormData({...formData, country: e.target.value})} className="w-full px-4 py-2 border rounded-lg">{countries.map(c => <option key={c}>{c}</option>)}</select></div>
                <div><label className="block text-sm font-medium mb-1">Client cible</label><input type="text" value={formData.targetCustomers} onChange={e => setFormData({...formData, targetCustomers: e.target.value})} className="w-full px-4 py-2 border rounded-lg" placeholder="PME, startups, commerçants..." /></div>
                <div><label className="block text-sm font-medium mb-1">Problème identifié</label><textarea rows={2} value={formData.problem} onChange={e => setFormData({...formData, problem: e.target.value})} className="w-full px-4 py-2 border rounded-lg" placeholder="Quel problème résolvez-vous ?" /></div>
                <div><label className="block text-sm font-medium mb-1">Solution proposée</label><textarea rows={2} value={formData.solution} onChange={e => setFormData({...formData, solution: e.target.value})} className="w-full px-4 py-2 border rounded-lg" placeholder="Comment le résolvez-vous ?" /></div>
              </div>
            )}

            {/* Steps 3-8 simplifiés mais complets */}
            {step === 3 && (
              <div className="space-y-4">
                <h2 className="text-2xl font-bold mb-4">💡 Produit & Proposition de valeur</h2>
                <div><label className="block text-sm font-medium mb-1">Description du produit</label><textarea rows={2} value={formData.productDescription} onChange={e => setFormData({...formData, productDescription: e.target.value})} className="w-full px-4 py-2 border rounded-lg" placeholder="Décrivez votre produit/service" /></div>
                <div><label className="block text-sm font-medium mb-1">Valeur unique (UVP)</label><textarea rows={2} value={formData.uniqueValue} onChange={e => setFormData({...formData, uniqueValue: e.target.value})} className="w-full px-4 py-2 border rounded-lg" placeholder="Ce qui vous rend unique" /></div>
                <div><label className="block text-sm font-medium mb-1">Fonctionnalités principales</label><input type="text" value={formData.mainFeatures} onChange={e => setFormData({...formData, mainFeatures: e.target.value})} className="w-full px-4 py-2 border rounded-lg" placeholder="Fonctionnalité 1, Fonctionnalité 2..." /></div>
              </div>
            )}

            {step === 4 && (
              <div className="space-y-4">
                <h2 className="text-2xl font-bold mb-4">🚀 Stratégie Go-to-market</h2>
                <div><label className="block text-sm font-medium mb-1">Canaux marketing</label><input type="text" value={formData.marketingChannels} onChange={e => setFormData({...formData, marketingChannels: e.target.value})} className="w-full px-4 py-2 border rounded-lg" placeholder="Social Media, SEO, Partenariats..." /></div>
                <div><label className="block text-sm font-medium mb-1">Stratégie commerciale</label><textarea rows={2} value={formData.salesStrategy} onChange={e => setFormData({...formData, salesStrategy: e.target.value})} className="w-full px-4 py-2 border rounded-lg" placeholder="Votre approche de vente" /></div>
              </div>
            )}

            {step === 5 && (
              <div className="space-y-4">
                <h2 className="text-2xl font-bold mb-4">💰 Modèle de revenus</h2>
                <div><label className="block text-sm font-medium mb-1">Modèle *</label><select required value={formData.revenueModel} onChange={e => setFormData({...formData, revenueModel: e.target.value})} className="w-full px-4 py-2 border rounded-lg"><option value="saas">SaaS (Abonnement) - ARR/MRR</option><option value="transactionnel">Transactionnel (Commission)</option><option value="abonnement">Abonnement fixe</option><option value="marketplace">Marketplace (Commission)</option></select></div>
                <div><label className="block text-sm font-medium mb-1">Stratégie de prix</label><input type="text" value={formData.pricing} onChange={e => setFormData({...formData, pricing: e.target.value})} className="w-full px-4 py-2 border rounded-lg" placeholder="Ex: 49 500 FCFA/mois" /></div>
                <div><label className="block text-sm font-medium mb-1">Objectif financement (FCFA)</label><input type="text" value={formData.fundingGoal} onChange={e => setFormData({...formData, fundingGoal: e.target.value})} className="w-full px-4 py-2 border rounded-lg" placeholder="Ex: 100 000 000" /></div>
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"><input type="checkbox" checked={formData.hasMobileMoney} onChange={e => setFormData({...formData, hasMobileMoney: e.target.checked})} className="w-4 h-4 text-primary rounded" /><label>Intégration Mobile Money (Orange Money, Wave, M-Pesa)</label></div>
              </div>
            )}

            {step === 6 && (
              <div className="space-y-4">
                <h2 className="text-2xl font-bold mb-4">👥 Organisation & RH</h2>
                <div><label className="block text-sm font-medium mb-1">Taille de l'équipe</label><input type="number" value={formData.teamSize} onChange={e => setFormData({...formData, teamSize: e.target.value})} className="w-full px-4 py-2 border rounded-lg" placeholder="Nombre d'employés" /></div>
                <div><label className="block text-sm font-medium mb-1">Fondateurs</label><input type="text" value={formData.founderNames} onChange={e => setFormData({...formData, founderNames: e.target.value})} className="w-full px-4 py-2 border rounded-lg" placeholder="Noms des fondateurs" /></div>
                <div><label className="block text-sm font-medium mb-1">Postes clés à recruter</label><input type="text" value={formData.keyRoles} onChange={e => setFormData({...formData, keyRoles: e.target.value})} className="w-full px-4 py-2 border rounded-lg" placeholder="CTO, Sales, Support..." /></div>
              </div>
            )}

            {step === 7 && (
              <div className="space-y-4">
                <h2 className="text-2xl font-bold mb-4">⚙️ Opérations & Partenariats</h2>
                <div><label className="block text-sm font-medium mb-1">Processus opérationnels</label><textarea rows={2} value={formData.operationalProcess} onChange={e => setFormData({...formData, operationalProcess: e.target.value})} className="w-full px-4 py-2 border rounded-lg" placeholder="Description de vos processus" /></div>
                <div><label className="block text-sm font-medium mb-1">Stack technologique</label><input type="text" value={formData.technologyStack} onChange={e => setFormData({...formData, technologyStack: e.target.value})} className="w-full px-4 py-2 border rounded-lg" placeholder="Next.js, Python, PostgreSQL..." /></div>
                <div><label className="block text-sm font-medium mb-1">Partenaires principaux</label><input type="text" value={formData.mainPartners} onChange={e => setFormData({...formData, mainPartners: e.target.value})} className="w-full px-4 py-2 border rounded-lg" placeholder="Orange Money, Wave, Incubateurs..." /></div>
              </div>
            )}

            {step === 8 && (
              <div className="space-y-4">
                <h2 className="text-2xl font-bold mb-4">🛡️ Coûts & risques</h2>
                <div><label className="block text-sm font-medium mb-1">CAPEX (Investissements initiaux)</label><input type="text" value={formData.capex} onChange={e => setFormData({...formData, capex: e.target.value})} className="w-full px-4 py-2 border rounded-lg" placeholder="Ex: 100 000 000 FCFA" /></div>
                <div><label className="block text-sm font-medium mb-1">OPEX (Charges annuelles)</label><input type="text" value={formData.opex} onChange={e => setFormData({...formData, opex: e.target.value})} className="w-full px-4 py-2 border rounded-lg" placeholder="Ex: 50 000 000 FCFA/an" /></div>
              </div>
            )}

            {/* Navigation */}
            <div className="flex justify-between mt-8">
              <button type="button" onClick={prevStep} disabled={step === 1} className="px-6 py-2 bg-gray-300 rounded-lg disabled:opacity-50">Précédent</button>
              {step < totalSteps ? (
                <button type="button" onClick={nextStep} className="px-6 py-2 bg-primary text-white rounded-lg">Suivant</button>
              ) : (
                <button type="submit" className="px-6 py-2 bg-primary text-white rounded-lg font-semibold">🚀 Générer mon business plan complet</button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
