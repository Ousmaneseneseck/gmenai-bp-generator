// app/components/BusinessPlanForm.tsx
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function BusinessPlanForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    companyName: '', sector: '', country: 'Sénégal', revenueModel: 'saas', targetCustomers: '',
    fundingGoal: '', teamSize: '', foundedYear: '', hasMobileMoney: true
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sessionStorage.setItem('companyName', formData.companyName);
    sessionStorage.setItem('businessPlanData', JSON.stringify(formData));
    router.push('/generated-business-plan');
  };

  const sectors = ['Technologie/SaaS', 'Agriculture', 'Commerce/Retail', 'Santé', 'Éducation', 'Immobilier', 'Logistique'];
  const countries = ['Sénégal', "Côte d'Ivoire", 'Cameroun', 'Mali', 'Burkina Faso', 'Guinée', 'RDC'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white py-12 px-4">
      <div className="container mx-auto max-w-3xl">
        <div className="bg-white rounded-xl shadow-xl p-8">
          <h2 className="text-2xl font-bold text-center mb-6">Créez votre business plan en 2 minutes</h2>
          <p className="text-center text-gray-600 mb-8">Remplissez ce formulaire, nos 8 modules IA génèrent automatiquement un business plan complet</p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div><label className="block text-sm font-medium mb-1">Nom de votre entreprise *</label><input type="text" required value={formData.companyName} onChange={(e) => setFormData({...formData, companyName: e.target.value})} className="w-full px-4 py-2 border rounded-lg" placeholder="Ma startup" /></div>
            <div><label className="block text-sm font-medium mb-1">Secteur d'activité *</label><select required value={formData.sector} onChange={(e) => setFormData({...formData, sector: e.target.value})} className="w-full px-4 py-2 border rounded-lg"><option value="">Sélectionnez un secteur</option>{sectors.map(s => <option key={s}>{s}</option>)}</select></div>
            <div><label className="block text-sm font-medium mb-1">Pays / Localisation *</label><select required value={formData.country} onChange={(e) => setFormData({...formData, country: e.target.value})} className="w-full px-4 py-2 border rounded-lg">{countries.map(c => <option key={c}>{c}</option>)}</select></div>
            <div><label className="block text-sm font-medium mb-1">Modèle de revenus *</label><select required value={formData.revenueModel} onChange={(e) => setFormData({...formData, revenueModel: e.target.value})} className="w-full px-4 py-2 border rounded-lg"><option value="saas">SaaS (Abonnement) - ARR/MRR</option><option value="transactionnel">Transactionnel (Commission)</option><option value="abonnement">Abonnement fixe</option><option value="marketplace">Marketplace (Commission)</option></select></div>
            <div><label className="block text-sm font-medium mb-1">Client cible</label><input type="text" value={formData.targetCustomers} onChange={(e) => setFormData({...formData, targetCustomers: e.target.value})} className="w-full px-4 py-2 border rounded-lg" placeholder="Ex: PME, startups..." /></div>
            <div><label className="block text-sm font-medium mb-1">Objectif de financement (FCFA)</label><input type="text" value={formData.fundingGoal} onChange={(e) => setFormData({...formData, fundingGoal: e.target.value})} className="w-full px-4 py-2 border rounded-lg" placeholder="Ex: 50 000 000" /></div>
            <div><label className="block text-sm font-medium mb-1">Taille de l'équipe</label><input type="number" value={formData.teamSize} onChange={(e) => setFormData({...formData, teamSize: e.target.value})} className="w-full px-4 py-2 border rounded-lg" placeholder="Nombre d'employés" /></div>
            <div><label className="block text-sm font-medium mb-1">Année de création</label><input type="text" value={formData.foundedYear} onChange={(e) => setFormData({...formData, foundedYear: e.target.value})} className="w-full px-4 py-2 border rounded-lg" placeholder="Ex: 2023" /></div>
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"><input type="checkbox" checked={formData.hasMobileMoney} onChange={(e) => setFormData({...formData, hasMobileMoney: e.target.checked})} className="w-4 h-4 text-primary rounded" /><label>Intégration Mobile Money (Orange Money, Wave, M-Pesa)</label></div>
            <button type="submit" className="w-full bg-primary text-white py-3 rounded-lg hover:bg-primary/90 transition-all font-semibold text-lg">🚀 Générer mon business plan complet</button>
          </form>
          <div className="mt-6 text-center text-xs text-gray-500">⚡ 8 modules IA • 📊 Prévisions FCFA 5 ans • 📈 Analyse SWOT • 🤝 Partenariats • 📑 Export PDF</div>
        </div>
      </div>
    </div>
  );
}
