// app/financial-reports/page.tsx
'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Download, Printer, TrendingUp, DollarSign, PieChart as PieChartIcon, TrendingDown, FileText, BarChart3 } from 'lucide-react';
import {
  BarChart, Bar, LineChart, Line, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  AreaChart, Area
} from 'recharts';

export default function FinancialReportsPage() {
  const router = useRouter();
  const [companyName, setCompanyName] = useState('Votre entreprise');
  const [activeTab, setActiveTab] = useState<'income' | 'cashflow' | 'capex' | 'scenarios'>('income');

  // ==================== DONNÉES DE DÉMONSTRATION ====================
  
  // 1. Compte de résultat 5 ans
  const incomeData = [
    { year: 'N+1', revenue: 120, expenses: 180, profit: -60, margin: -50 },
    { year: 'N+2', revenue: 280, expenses: 220, profit: 60, margin: 21 },
    { year: 'N+3', revenue: 550, expenses: 380, profit: 170, margin: 31 },
    { year: 'N+4', revenue: 880, expenses: 540, profit: 340, margin: 39 },
    { year: 'N+5', revenue: 1350, expenses: 780, profit: 570, margin: 42 },
  ];

  // 2. Plan de trésorerie 12 mois
  const cashflowData = [
    { month: 'Jan', encaissements: 8, decaissements: 14, solde: -6, cumul: -6 },
    { month: 'Fév', encaissements: 10, decaissements: 14, solde: -4, cumul: -10 },
    { month: 'Mar', encaissements: 12, decaissements: 15, solde: -3, cumul: -13 },
    { month: 'Avr', encaissements: 16, decaissements: 15, solde: 1, cumul: -12 },
    { month: 'Mai', encaissements: 20, decaissements: 16, solde: 4, cumul: -8 },
    { month: 'Juin', encaissements: 25, decaissements: 17, solde: 8, cumul: 0 },
    { month: 'Juil', encaissements: 30, decaissements: 18, solde: 12, cumul: 12 },
    { month: 'Aoû', encaissements: 35, decaissements: 19, solde: 16, cumul: 28 },
    { month: 'Sep', encaissements: 42, decaissements: 20, solde: 22, cumul: 50 },
    { month: 'Oct', encaissements: 50, decaissements: 22, solde: 28, cumul: 78 },
    { month: 'Nov', encaissements: 60, decaissements: 24, solde: 36, cumul: 114 },
    { month: 'Déc', encaissements: 75, decaissements: 28, solde: 47, cumul: 161 },
  ];

  // 3. CAPEX (investissements)
  const capexData = [
    { category: 'Développement', amount: 45, color: '#0A66C2' },
    { category: 'Marketing & Sales', amount: 30, color: '#10B981' },
    { category:'Infrastructure', amount: 20, color: '#F59E0B' },
    { category: 'Administratif', amount: 15, color: '#8B5CF6' },
    { category: 'Formation', amount: 10, color: '#EC4899' },
  ];

  // 4. OPEX (charges annuelles)
  const opexData = [
    { category: 'Salaires & charges', amount: 85, color: '#0A66C2' },
    { category: 'Licences & SaaS', amount: 25, color: '#10B981' },
    { category: 'Hébergement & Cloud', amount: 20, color: '#F59E0B' },
    { category: 'Support client', amount: 18, color: '#8B5CF6' },
    { category: 'Marketing opérationnel', amount: 22, color: '#EC4899' },
  ];

  // 5. Scénarios financiers
  const scenariosData = [
    { name: 'Pessimiste', value: 65, color: '#EF4444', description: 'CA -20%, délais +60j' },
    { name: 'Réaliste', value: 42, color: '#F59E0B', description: 'Croissance 25%, CAC standard' },
    { name: 'Optimiste', value: 22, color: '#10B981', description: 'CA +30%, churn -50%' },
  ];

  // 6. Synthèse financière
  const synthesis = {
    besoinFinancement: '120M FCFA',
    seuilRentabilite: '18 mois',
    roi5ans: '425%',
    van: '350M FCFA',
    tri: '32%'
  };

  useEffect(() => {
    const stored = sessionStorage.getItem('companyName');
    if (stored) setCompanyName(stored);
  }, []);

  const handlePrint = () => window.print();
  const handleBack = () => router.push('/');

  // Formatter pour les tooltips
  const formatCurrency = (value: number) => `${value}M FCFA`;
  const formatPercent = (value: number) => `${value}%`;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Barre d'outils flottante */}
      <div className="fixed bottom-4 right-4 z-50 flex gap-2 print:hidden">
        <button onClick={handleBack} className="bg-gray-700 text-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2 hover:bg-gray-600 transition">
          <ArrowLeft size={18} /> Retour
        </button>
        <button onClick={handlePrint} className="bg-primary text-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2 hover:bg-primary/90 transition">
          <Download size={18} /> Télécharger PDF
        </button>
        <button onClick={handlePrint} className="bg-gray-700 text-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2 hover:bg-gray-600 transition">
          <Printer size={18} /> Imprimer
        </button>
      </div>

      <div className="container mx-auto max-w-6xl py-8 px-4 print:py-0">
        
        {/* EN-TÊTE */}
        <div className="bg-gradient-to-r from-primary to-primary/70 text-white p-8 rounded-t-xl print:bg-primary mb-6">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">{companyName}</h1>
          <p className="text-xl opacity-90">Rapports Financiers & Projections</p>
          <p className="text-sm opacity-75 mt-2">Généré par GMENAI IA - {new Date().toLocaleDateString('fr-FR')}</p>
          <div className="mt-4 inline-block px-4 py-2 bg-white/20 rounded-lg">
            <span className="font-semibold">💰 Devise : FCFA</span>
          </div>
        </div>

        {/* ONGLETS */}
        <div className="flex flex-wrap gap-2 mb-6 print:hidden">
          <button onClick={() => setActiveTab('income')} className={`px-4 py-2 rounded-lg flex items-center gap-2 transition ${activeTab === 'income' ? 'bg-primary text-white shadow-md' : 'bg-white dark:bg-gray-800 text-gray-700 hover:bg-gray-100'}`}>
            <BarChart3 size={18} /> Compte de résultat
          </button>
          <button onClick={() => setActiveTab('cashflow')} className={`px-4 py-2 rounded-lg flex items-center gap-2 transition ${activeTab === 'cashflow' ? 'bg-primary text-white shadow-md' : 'bg-white dark:bg-gray-800 text-gray-700 hover:bg-gray-100'}`}>
            <DollarSign size={18} /> Plan de trésorerie
          </button>
          <button onClick={() => setActiveTab('capex')} className={`px-4 py-2 rounded-lg flex items-center gap-2 transition ${activeTab === 'capex' ? 'bg-primary text-white shadow-md' : 'bg-white dark:bg-gray-800 text-gray-700 hover:bg-gray-100'}`}>
            <PieChartIcon size={18} /> CAPEX/OPEX
          </button>
          <button onClick={() => setActiveTab('scenarios')} className={`px-4 py-2 rounded-lg flex items-center gap-2 transition ${activeTab === 'scenarios' ? 'bg-primary text-white shadow-md' : 'bg-white dark:bg-gray-800 text-gray-700 hover:bg-gray-100'}`}>
            <TrendingDown size={18} /> Scénarios
          </button>
        </div>

        {/* CONTENU PRINCIPAL */}
        <div className="space-y-6">
          
          {/* ==================== 1. COMPTE DE RÉSULTAT ==================== */}
          {activeTab === 'income' && (
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 print:shadow-none print:break-inside-avoid">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <TrendingUp className="text-primary" /> Compte de résultat prévisionnel 5 ans
              </h2>
              
              {/* Graphique */}
              <div className="mb-8 h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={incomeData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis tickFormatter={(v) => `${v}M`} />
                    <Tooltip formatter={(value, name) => [formatCurrency(value as number), name === 'revenue' ? 'CA' : name === 'expenses' ? 'Charges' : 'Résultat']} />
                    <Legend />
                    <Bar dataKey="revenue" name="Chiffre d'affaires" fill="#0A66C2" />
                    <Bar dataKey="expenses" name="Charges d'exploitation" fill="#F59E0B" />
                    <Line type="monotone" dataKey="profit" name="Résultat net" stroke="#10B981" strokeWidth={2} dot={{ r: 4 }} />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              {/* Tableau détaillé */}
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-gray-100 dark:bg-gray-700">
                      <th className="p-3 text-left">Indicateurs (M FCFA)</th>
                      {incomeData.map(y => <th key={y.year} className="p-3 text-right">{y.year}</th>)}
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200"><td className="p-3 font-medium">Chiffre d'affaires</td>{incomeData.map(y => <td key={y.year} className="p-3 text-right">{y.revenue}M</td>)}</tr>
                    <tr className="border-b border-gray-200 bg-gray-50 dark:bg-gray-800/50"><td className="p-3 font-medium">Charges d'exploitation</td>{incomeData.map(y => <td key={y.year} className="p-3 text-right">{y.expenses}M</td>)}</tr>
                    <tr className="border-b border-gray-200"><td className="p-3 font-medium">EBITDA</td>{incomeData.map(y => <td key={y.year} className={`p-3 text-right ${y.profit >= 0 ? 'text-green-600' : 'text-red-600'}`}>{y.profit >= 0 ? '+' : ''}{y.profit}M</td>)}</tr>
                    <tr className="border-b border-gray-200 bg-gray-50 dark:bg-gray-800/50"><td className="p-3 font-medium">Marge EBITDA</td>{incomeData.map(y => <td key={y.year} className="p-3 text-right">{y.margin >= 0 ? `${y.margin}%` : '-'}</td>)}</tr>
                    <tr className="border-b border-gray-200"><td className="p-3 font-medium">Résultat net</td>{incomeData.map(y => <td key={y.year} className={`p-3 text-right ${y.profit >= 0 ? 'text-green-600' : 'text-red-600'}`}>{y.profit >= 0 ? '+' : ''}{Math.round(y.profit * 0.7)}M</td>)}</tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* ==================== 2. PLAN DE TRÉSORERIE ==================== */}
          {activeTab === 'cashflow' && (
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 print:shadow-none print:break-inside-avoid">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <DollarSign className="text-primary" /> Plan de trésorerie - 12 mois
              </h2>

              {/* Graphique en aires */}
              <div className="mb-8 h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={cashflowData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis tickFormatter={(v) => `${v}M`} />
                    <Tooltip formatter={(value) => `${value}M FCFA`} />
                    <Legend />
                    <Area type="monotone" dataKey="encaissements" name="Encaissements" stroke="#0A66C2" fill="#0A66C2" fillOpacity={0.3} />
                    <Area type="monotone" dataKey="decaissements" name="Décaissements" stroke="#EF4444" fill="#EF4444" fillOpacity={0.3} />
                    <Line type="monotone" dataKey="cumul" name="Trésorerie cumulée" stroke="#10B981" strokeWidth={2} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>

              {/* Tableau mensuel */}
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-gray-100 dark:bg-gray-700"><th className="p-2 text-left">Mois</th><th className="p-2 text-right">Encaissements</th><th className="p-2 text-right">Décaissements</th><th className="p-2 text-right">Solde</th><th className="p-2 text-right">Trésorerie cumulée</th></tr>
                  </thead>
                  <tbody>
                    {cashflowData.map((row, i) => (
                      <tr key={i} className="border-b border-gray-200">
                        <td className="p-2 font-medium">{row.month}</td>
                        <td className="p-2 text-right">{row.encaissements}M</td>
                        <td className="p-2 text-right">{row.decaissements}M</td>
                        <td className={`p-2 text-right ${row.solde >= 0 ? 'text-green-600' : 'text-red-600'}`}>{row.solde >= 0 ? '+' : ''}{row.solde}M</td>
                        <td className={`p-2 text-right font-semibold ${row.cumul >= 0 ? 'text-green-600' : 'text-red-600'}`}>{row.cumul >= 0 ? '+' : ''}{row.cumul}M</td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot className="bg-gray-100 dark:bg-gray-700"><tr><td className="p-2 font-bold">TOTAL</td><td className="p-2 text-right font-bold">{cashflowData.reduce((s, r) => s + r.encaissements, 0)}M</td><td className="p-2 text-right font-bold">{cashflowData.reduce((s, r) => s + r.decaissements, 0)}M</td><td className="p-2 text-right font-bold">{cashflowData.reduce((s, r) => s + r.solde, 0)}M</td><td className="p-2 text-right font-bold text-green-600">+{cashflowData[cashflowData.length-1].cumul}M</td></tr></tfoot>
                </table>
              </div>
            </div>
          )}

          {/* ==================== 3. CAPEX / OPEX ==================== */}
          {activeTab === 'capex' && (
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 print:shadow-none print:break-inside-avoid">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">🏗️ CAPEX / OPEX détaillés</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div><h3 className="text-lg font-semibold text-center mb-3">Investissements (CAPEX) - 120M FCFA</h3><div className="h-64"><ResponsiveContainer width="100%" height="100%"><PieChart><Pie data={capexData} cx="50%" cy="50%" labelLine={false} label={({ name, percent }) => `${name} ${percent ? (percent * 100).toFixed(0) : 0}%`} outerRadius={80} dataKey="amount">{capexData.map((e, i) => <Cell key={i} fill={e.color} />)}</Pie><Tooltip formatter={(value) => `${value}M FCFA`} /></PieChart></ResponsiveContainer></div><div className="mt-3 space-y-1">{capexData.map((item, i) => <div key={i} className="flex justify-between text-sm"><span className="flex items-center gap-2"><div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>{item.category}</span><span className="font-semibold">{item.amount}M FCFA</span></div>)}</div></div>
                <div><h3 className="text-lg font-semibold text-center mb-3">Charges annuelles (OPEX) - 170M FCFA/an</h3><div className="h-64"><ResponsiveContainer width="100%" height="100%"><PieChart><Pie data={opexData} cx="50%" cy="50%" labelLine={false} label={({ name, percent }) => `${name} ${percent ? (percent * 100).toFixed(0) : 0}%`} outerRadius={80} dataKey="amount">{opexData.map((e, i) => <Cell key={i} fill={e.color} />)}</Pie><Tooltip formatter={(value) => `${value}M FCFA`} /></PieChart></ResponsiveContainer></div><div className="mt-3 space-y-1">{opexData.map((item, i) => <div key={i} className="flex justify-between text-sm"><span className="flex items-center gap-2"><div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>{item.category}</span><span className="font-semibold">{item.amount}M FCFA</span></div>)}</div></div>
              </div>
            </div>
          )}

          {/* ==================== 4. SCÉNARIOS FINANCIERS ==================== */}
          {activeTab === 'scenarios' && (
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 print:shadow-none print:break-inside-avoid">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">🎯 3 scénarios financiers</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div><h3 className="text-lg font-semibold text-center mb-3">CAPEX selon scénarios</h3><div className="h-64"><ResponsiveContainer width="100%" height="100%"><PieChart><Pie data={scenariosData} cx="50%" cy="50%" labelLine={true} label={({ name, percent }) => `${name} ${percent ? (percent * 100).toFixed(0) : 0}%`} outerRadius={80} dataKey="value">{scenariosData.map((e, i) => <Cell key={i} fill={e.color} />)}</Pie><Tooltip formatter={(value) => `${value}M FCFA`} /></PieChart></ResponsiveContainer></div></div>
                <div className="space-y-3">{scenariosData.map((item, i) => (<div key={i} className="p-3 rounded-lg" style={{ backgroundColor: `${item.color}20` }}><div className="flex justify-between items-center"><span className="font-semibold">{item.name}</span><span className="font-bold" style={{ color: item.color }}>{item.value}M FCFA</span></div><p className="text-xs text-gray-500 mt-1">{item.description}</p></div>))}</div>
              </div>
            </div>
          )}
        </div>

        {/* ==================== SYNTHÈSE FINANCIÈRE (toujours visible) ==================== */}
        <div className="mt-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 print:shadow-none print:break-inside-avoid">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2"><FileText className="text-primary" /> Synthèse financière</h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-3 text-center">
            <div className="bg-blue-50 dark:bg-blue-900/20 p-3 rounded-lg"><p className="text-xs text-gray-500">Besoin financement</p><p className="text-xl font-bold text-primary">{synthesis.besoinFinancement}</p></div>
            <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg"><p className="text-xs text-gray-500">Seuil rentabilité</p><p className="text-xl font-bold text-green-600">{synthesis.seuilRentabilite}</p></div>
            <div className="bg-purple-50 dark:bg-purple-900/20 p-3 rounded-lg"><p className="text-xs text-gray-500">ROI 5 ans</p><p className="text-xl font-bold text-purple-600">{synthesis.roi5ans}</p></div>
            <div className="bg-yellow-50 dark:bg-yellow-900/20 p-3 rounded-lg"><p className="text-xs text-gray-500">VAN</p><p className="text-xl font-bold text-yellow-600">{synthesis.van}</p></div>
            <div className="bg-red-50 dark:bg-red-900/20 p-3 rounded-lg"><p className="text-xs text-gray-500">TRI</p><p className="text-xl font-bold text-red-600">{synthesis.tri}</p></div>
          </div>
          <div className="mt-4 h-40"><ResponsiveContainer width="100%" height="100%"><LineChart data={incomeData}><CartesianGrid strokeDasharray="3 3" /><XAxis dataKey="year" /><YAxis tickFormatter={(v) => `${v}M`} /><Tooltip formatter={(value) => `${value}M FCFA`} /><Legend /><Line type="monotone" dataKey="revenue" name="CA" stroke="#0A66C2" strokeWidth={2} /><Line type="monotone" dataKey="profit" name="Résultat" stroke="#10B981" strokeWidth={2} /></LineChart></ResponsiveContainer></div>
        </div>

        {/* PIED DE PAGE */}
        <div className="mt-6 text-center text-sm text-gray-500 print:mt-4">
          <p>Document confidentiel généré par GMENAI IA - {new Date().toLocaleDateString('fr-FR')}</p>
          <p className="text-xs">📊 Prévisions en FCFA - Adapté aux marchés africains - Intégrations Mobile Money</p>
          <p className="text-xs">📧 contact@gmenai.com | 🌐 www.gmenai.com | 📞 +221 78 123 45 67</p>
        </div>
      </div>
    </div>
  );
}
