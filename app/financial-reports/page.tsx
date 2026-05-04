// app/financial-reports/page.tsx
'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Download, Printer, TrendingUp, DollarSign, PieChart as PieChartIcon, TrendingDown, FileText } from 'lucide-react';
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area } from 'recharts';

export default function FinancialReportsPage() {
  const router = useRouter();
  const [companyName, setCompanyName] = useState('Votre entreprise');
  const [activeTab, setActiveTab] = useState<'income' | 'cashflow' | 'capex' | 'scenarios'>('income');

  const incomeData = [{ year: 'N+1', revenue: 120, expenses: 180, profit: -60 }, { year: 'N+2', revenue: 280, expenses: 220, profit: 60 }, { year: 'N+3', revenue: 550, expenses: 380, profit: 170 }, { year: 'N+4', revenue: 880, expenses: 540, profit: 340 }, { year: 'N+5', revenue: 1350, expenses: 780, profit: 570 }];
  const cashflowData = [{ month: 'Jan', encaissements: 8, decaissements: 14, solde: -6, cumul: -6 }, { month: 'Fév', encaissements: 10, decaissements: 14, solde: -4, cumul: -10 }, { month: 'Mar', encaissements: 12, decaissements: 15, solde: -3, cumul: -13 }, { month: 'Avr', encaissements: 16, decaissements: 15, solde: 1, cumul: -12 }, { month: 'Mai', encaissements: 20, decaissements: 16, solde: 4, cumul: -8 }, { month: 'Juin', encaissements: 25, decaissements: 17, solde: 8, cumul: 0 }, { month: 'Juil', encaissements: 30, decaissements: 18, solde: 12, cumul: 12 }, { month: 'Aoû', encaissements: 35, decaissements: 19, solde: 16, cumul: 28 }, { month: 'Sep', encaissements: 42, decaissements: 20, solde: 22, cumul: 50 }, { month: 'Oct', encaissements: 50, decaissements: 22, solde: 28, cumul: 78 }, { month: 'Nov', encaissements: 60, decaissements: 24, solde: 36, cumul: 114 }, { month: 'Déc', encaissements: 75, decaissements: 28, solde: 47, cumul: 161 }];
  const capexData = [{ category: 'Développement', amount: 45, color: '#0A66C2' }, { category: 'Marketing', amount: 30, color: '#10B981' }, { category: 'Infrastructure', amount: 20, color: '#F59E0B' }, { category: 'Admin', amount: 15, color: '#8B5CF6' }, { category: 'Formation', amount: 10, color: '#EC4899' }];
  const opexData = [{ category: 'Salaires', amount: 85, color: '#0A66C2' }, { category: 'Licences', amount: 25, color: '#10B981' }, { category: 'Hébergement', amount: 20, color: '#F59E0B' }, { category: 'Support', amount: 18, color: '#8B5CF6' }, { category: 'Marketing', amount: 22, color: '#EC4899' }];
  const scenariosData = [{ name: 'Pessimiste', value: 65, color: '#EF4444' }, { name: 'Réaliste', value: 42, color: '#F59E0B' }, { name: 'Optimiste', value: 22, color: '#10B981' }];

  useEffect(() => { const stored = sessionStorage.getItem('companyName'); if (stored) setCompanyName(stored); }, []);
  const handlePrint = () => window.print();
  const handleBack = () => router.push('/generated-business-plan');

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="fixed bottom-4 right-4 z-50 flex gap-2 print:hidden">
        <button onClick={handleBack} className="bg-gray-700 text-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2"><ArrowLeft size={18} /> Retour</button>
        <button onClick={handlePrint} className="bg-primary text-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2"><Download size={18} /> PDF</button>
        <button onClick={handlePrint} className="bg-gray-700 text-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2"><Printer size={18} /> Imprimer</button>
      </div>
      <div className="container mx-auto max-w-6xl py-8 px-4">
        <div className="bg-gradient-to-r from-primary to-primary/70 text-white p-8 rounded-t-xl mb-6"><h1 className="text-3xl font-bold mb-2">{companyName}</h1><p className="text-xl opacity-90">Rapports Financiers & Projections</p><div className="mt-4 inline-block px-4 py-2 bg-white/20 rounded-lg"><span className="font-semibold">💰 Devise : FCFA</span></div></div>
        <div className="flex flex-wrap gap-2 mb-6 print:hidden">
          <button onClick={() => setActiveTab('income')} className={`px-4 py-2 rounded-lg flex items-center gap-2 ${activeTab === 'income' ? 'bg-primary text-white' : 'bg-white'}`}><TrendingUp size={18} /> Compte de résultat</button>
          <button onClick={() => setActiveTab('cashflow')} className={`px-4 py-2 rounded-lg flex items-center gap-2 ${activeTab === 'cashflow' ? 'bg-primary text-white' : 'bg-white'}`}><DollarSign size={18} /> Plan de trésorerie</button>
          <button onClick={() => setActiveTab('capex')} className={`px-4 py-2 rounded-lg flex items-center gap-2 ${activeTab === 'capex' ? 'bg-primary text-white' : 'bg-white'}`}><PieChartIcon size={18} /> CAPEX/OPEX</button>
          <button onClick={() => setActiveTab('scenarios')} className={`px-4 py-2 rounded-lg flex items-center gap-2 ${activeTab === 'scenarios' ? 'bg-primary text-white' : 'bg-white'}`}><TrendingDown size={18} /> Scénarios</button>
        </div>
        <div className="space-y-6">
          {activeTab === 'income' && (<div className="bg-white rounded-xl shadow-lg p-6"><h2 className="text-2xl font-bold mb-4">Compte de résultat 5 ans</h2><div className="h-80"><ResponsiveContainer width="100%" height="100%"><BarChart data={incomeData}><CartesianGrid strokeDasharray="3 3" /><XAxis dataKey="year" /><YAxis /><Tooltip formatter={(v) => `${v}M FCFA`} /><Legend /><Bar dataKey="revenue" name="CA" fill="#0A66C2" /><Bar dataKey="expenses" name="Charges" fill="#F59E0B" /><Line type="monotone" dataKey="profit" name="Résultat" stroke="#10B981" strokeWidth={2} /></BarChart></ResponsiveContainer></div></div>)}
          {activeTab === 'cashflow' && (<div className="bg-white rounded-xl shadow-lg p-6"><h2 className="text-2xl font-bold mb-4">Plan de trésorerie 12 mois</h2><div className="h-80"><ResponsiveContainer width="100%" height="100%"><AreaChart data={cashflowData}><CartesianGrid strokeDasharray="3 3" /><XAxis dataKey="month" /><YAxis /><Tooltip formatter={(v) => `${v}M FCFA`} /><Legend /><Area type="monotone" dataKey="encaissements" name="Encaissements" stroke="#0A66C2" fill="#0A66C2" fillOpacity={0.3} /><Area type="monotone" dataKey="decaissements" name="Décaissements" stroke="#EF4444" fill="#EF4444" fillOpacity={0.3} /><Line type="monotone" dataKey="cumul" name="Trésorerie" stroke="#10B981" strokeWidth={2} /></AreaChart></ResponsiveContainer></div></div>)}
          {activeTab === 'capex' && (<div className="bg-white rounded-xl shadow-lg p-6"><h2 className="text-2xl font-bold mb-4">CAPEX / OPEX</h2><div className="grid grid-cols-1 lg:grid-cols-2 gap-8"><div><h3 className="text-lg font-semibold text-center">CAPEX - 120M FCFA</h3><div className="h-64"><ResponsiveContainer width="100%" height="100%"><PieChart><Pie data={capexData} cx="50%" cy="50%" labelLine={false} label={({ name, percent }) => `${name} ${percent ? (percent * 100).toFixed(0) : 0}%`} outerRadius={80} dataKey="amount">{capexData.map((e, i) => <Cell key={i} fill={e.color} />)}</Pie><Tooltip formatter={(v) => `${v}M FCFA`} /></PieChart></ResponsiveContainer></div></div><div><h3 className="text-lg font-semibold text-center">OPEX - 170M FCFA/an</h3><div className="h-64"><ResponsiveContainer width="100%" height="100%"><PieChart><Pie data={opexData} cx="50%" cy="50%" labelLine={false} label={({ name, percent }) => `${name} ${percent ? (percent * 100).toFixed(0) : 0}%`} outerRadius={80} dataKey="amount">{opexData.map((e, i) => <Cell key={i} fill={e.color} />)}</Pie><Tooltip formatter={(v) => `${v}M FCFA`} /></PieChart></ResponsiveContainer></div></div></div></div>)}
          {activeTab === 'scenarios' && (<div className="bg-white rounded-xl shadow-lg p-6"><h2 className="text-2xl font-bold mb-4">3 scénarios financiers</h2><div className="grid grid-cols-1 lg:grid-cols-2 gap-8"><div className="h-64"><ResponsiveContainer width="100%" height="100%"><PieChart><Pie data={scenariosData} cx="50%" cy="50%" labelLine={true} label={({ name, percent }) => `${name} ${percent ? (percent * 100).toFixed(0) : 0}%`} outerRadius={80} dataKey="value">{scenariosData.map((e, i) => <Cell key={i} fill={e.color} />)}</Pie><Tooltip formatter={(v) => `${v}M FCFA`} /></PieChart></ResponsiveContainer></div><div className="space-y-2">{scenariosData.map((item, i) => (<div key={i} className="p-3 rounded-lg" style={{ backgroundColor: `${item.color}20` }}><div className="flex justify-between items-center"><span className="font-semibold">{item.name}</span><span className="font-bold" style={{ color: item.color }}>{item.value}M FCFA</span></div></div>))}</div></div></div>)}
        </div>
        <div className="mt-6 text-center text-sm text-gray-500"><p>Document généré par GMENAI IA - {new Date().toLocaleDateString()}</p><p className="text-xs">Prévisions en FCFA - Adapté aux marchés africains</p></div>
      </div>
    </div>
  );
}

