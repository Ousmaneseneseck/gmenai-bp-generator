// app/financial-reports/page.tsx
'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, DollarSign, TrendingUp, TrendingDown, PieChart as PieChartIcon, Download, Printer } from 'lucide-react';
import {
  BarChart, Bar, LineChart, Line, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  AreaChart, Area
} from 'recharts';

export default function FinancialReportsPage() {
  const router = useRouter();
  const [companyName, setCompanyName] = useState('Votre entreprise');
  const [activeTab, setActiveTab] = useState<'income' | 'cashflow' | 'capex' | 'scenarios'>('income');

  // Données pour les graphiques
  const revenueData = [
    { year: 'N+1', revenue: 100, expenses: 150, profit: -50 },
    { year: 'N+2', revenue: 250, expenses: 200, profit: 50 },
    { year: 'N+3', revenue: 500, expenses: 350, profit: 150 },
    { year: 'N+4', revenue: 800, expenses: 500, profit: 300 },
    { year: 'N+5', revenue: 1200, expenses: 720, profit: 480 },
  ];

  const cashflowData = [
    { month: 'Jan', encaissements: 8, decaissements: 12, solde: -4 },
    { month: 'Fév', encaissements: 10, decaissements: 12, solde: -2 },
    { month: 'Mar', encaissements: 12, decaissements: 13, solde: -1 },
    { month: 'Avr', encaissements: 15, decaissements: 13, solde: 2 },
    { month: 'Mai', encaissements: 18, decaissements: 14, solde: 4 },
    { month: 'Juin', encaissements: 22, decaissements: 15, solde: 7 },
    { month: 'Juil', encaissements: 25, decaissements: 16, solde: 9 },
    { month: 'Aoû', encaissements: 28, decaissements: 17, solde: 11 },
    { month: 'Sep', encaissements: 32, decaissements: 18, solde: 14 },
    { month: 'Oct', encaissements: 38, decaissements: 20, solde: 18 },
    { month: 'Nov', encaissements: 45, decaissements: 22, solde: 23 },
    { month: 'Déc', encaissements: 55, decaissements: 25, solde: 30 },
  ];

  const capexData = [
    { category: 'Développement', amount: 35, color: '#0A66C2' },
    { category: 'Marketing', amount: 25, color: '#10B981' },
    { category: 'Commercial', amount: 20, color: '#F59E0B' },
    { category: 'Infrastructure', amount: 15, color: '#8B5CF6' },
    { category: 'Administratif', amount: 10, color: '#EC4899' },
  ];

  const opexData = [
    { category: 'Salaires', amount: 45, color: '#0A66C2' },
    { category: 'Hébergement', amount: 12, color: '#10B981' },
    { category: 'Licences', amount: 8, color: '#F59E0B' },
    { category: 'Support', amount: 8, color: '#8B5CF6' },
    { category: 'Frais généraux', amount: 7, color: '#EC4899' },
  ];

  const scenariosData = [
    { name: 'Pessimiste', value: 40, color: '#EF4444' },
    { name: 'Réaliste', value: 27, color: '#F59E0B' },
    { name: 'Optimiste', value: 13, color: '#10B981' },
  ];

  const kpiData = [
    { name: 'MRR', value: '19M', growth: '+15%', target: '100M' },
    { name: 'Churn', value: '3%', growth: '-2%', target: '<5%' },
    { name: 'LTV/CAC', value: '6.5x', growth: '+1.2x', target: '>5x' },
    { name: 'NPS', value: '52', growth: '+12', target: '>50' },
  ];

  useEffect(() => {
    const storedName = sessionStorage.getItem('companyName');
    if (storedName) {
      setCompanyName(storedName);
    }
  }, []);

  // Fonction de retour vers le business plan
  const handleGoBack = () => {
    // Vérifier si nous avons un business plan stocké
    const storedBP = sessionStorage.getItem('currentBusinessPlan');
    if (storedBP) {
      // Rediriger vers la page d'accueil avec un paramètre pour afficher le résultat
      router.push('/?showResult=true');
    } else {
      router.back();
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadPDF = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Barre d'outils */}
      <div className="fixed bottom-4 right-4 z-50 flex gap-2 print:hidden">
        <button
          onClick={handleGoBack}
          className="bg-gray-700 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-gray-600 transition-all flex items-center gap-2"
        >
          <ArrowLeft size={18} /> Retour au business plan
        </button>
        <button
          onClick={handleDownloadPDF}
          className="bg-primary text-white px-4 py-2 rounded-lg shadow-lg hover:bg-primary/90 transition-all flex items-center gap-2"
        >
          <Download size={18} /> Télécharger PDF
        </button>
        <button
          onClick={handlePrint}
          className="bg-gray-700 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-gray-600 transition-all flex items-center gap-2"
        >
          <Printer size={18} /> Imprimer
        </button>
      </div>

      <div className="container mx-auto max-w-6xl py-8 px-4 print:py-0">
        
        {/* En-tête */}
        <div className="bg-gradient-to-r from-primary to-primary/70 text-white p-8 rounded-t-xl print:bg-primary mb-6">
          <h1 className="text-3xl font-bold mb-2">{companyName}</h1>
          <p className="text-xl opacity-90">Rapports Financiers & Projections</p>
          <p className="text-sm opacity-75 mt-2">Généré par GMENAI IA - {new Date().toLocaleDateString('fr-FR')}</p>
          <div className="mt-4 inline-block px-4 py-2 bg-white/20 rounded-lg">
            <span className="font-semibold">💰 Devise : FCFA</span>
          </div>
        </div>

        {/* Navigation des onglets */}
        <div className="flex flex-wrap gap-2 mb-6 print:hidden">
          {[
            { id: 'income', label: '📊 Compte de résultat', icon: TrendingUp },
            { id: 'cashflow', label: '💵 Plan de trésorerie', icon: DollarSign },
            { id: 'capex', label: '🏗️ CAPEX/OPEX', icon: PieChartIcon },
            { id: 'scenarios', label: '🎯 Scénarios', icon: TrendingDown },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 py-2 rounded-lg transition-all flex items-center gap-2 ${
                activeTab === tab.id
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100'
              }`}
            >
              <tab.icon size={18} />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Contenu des onglets - identique à avant */}
        <div className="space-y-6">
          
          {/* 1. COMPTE DE RÉSULTAT */}
          {activeTab === 'income' && (
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 print:shadow-none print:break-inside-avoid">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <TrendingUp className="text-primary" />
                Compte de résultat prévisionnel 5 ans
              </h2>
              
              <div className="mb-8 h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={revenueData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis />
                    <Tooltip formatter={(value) => `${value}M FCFA`} />
                    <Legend />
                    <Bar dataKey="revenue" name="Chiffre d'affaires" fill="#0A66C2" />
                    <Bar dataKey="expenses" name="Charges" fill="#F59E0B" />
                    <Bar dataKey="profit" name="Résultat" fill="#10B981" />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-gray-100 dark:bg-gray-700">
                      <th className="p-3 text-left">Indicateurs (M FCFA)</th>
                      <th className="p-3 text-right">N+1</th>
                      <th className="p-3 text-right">N+2</th>
                      <th className="p-3 text-right">N+3</th>
                      <th className="p-3 text-right">N+4</th>
                      <th className="p-3 text-right">N+5</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="p-3 font-medium">Chiffre d'affaires</td>
                      <td className="p-3 text-right">100M</td>
                      <td className="p-3 text-right">250M</td>
                      <td className="p-3 text-right">500M</td>
                      <td className="p-3 text-right">800M</td>
                      <td className="p-3 text-right">1200M</td>
                    </tr>
                    <tr className="border-b border-gray-200 bg-gray-50 dark:bg-gray-800/50">
                      <td className="p-3 font-medium">Charges d'exploitation</td>
                      <td className="p-3 text-right">150M</td>
                      <td className="p-3 text-right">200M</td>
                      <td className="p-3 text-right">350M</td>
                      <td className="p-3 text-right">500M</td>
                      <td className="p-3 text-right">720M</td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="p-3 font-medium">EBITDA</td>
                      <td className="p-3 text-right text-red-600">-50M</td>
                      <td className="p-3 text-right text-green-600">+50M</td>
                      <td className="p-3 text-right text-green-600">+150M</td>
                      <td className="p-3 text-right text-green-600">+300M</td>
                      <td className="p-3 text-right text-green-600">+480M</td>
                    </tr>
                    <tr className="border-b border-gray-200 bg-gray-50 dark:bg-gray-800/50">
                      <td className="p-3 font-medium">Marge EBITDA</td>
                      <td className="p-3 text-right">-50%</td>
                      <td className="p-3 text-right">20%</td>
                      <td className="p-3 text-right">30%</td>
                      <td className="p-3 text-right">38%</td>
                      <td className="p-3 text-right">40%</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium">Résultat net</td>
                      <td className="p-3 text-right text-red-600">-65M</td>
                      <td className="p-3 text-right text-green-600">+35M</td>
                      <td className="p-3 text-right text-green-600">+105M</td>
                      <td className="p-3 text-right text-green-600">+210M</td>
                      <td className="p-3 text-right text-green-600">+336M</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* 2. PLAN DE TRÉSORERIE */}
          {activeTab === 'cashflow' && (
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 print:shadow-none print:break-inside-avoid">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <DollarSign className="text-primary" />
                Plan de trésorerie - 12 mois
              </h2>

              <div className="mb-8 h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={cashflowData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip formatter={(value) => `${value}M FCFA`} />
                    <Legend />
                    <Area type="monotone" dataKey="encaissements" name="Encaissements" stroke="#0A66C2" fill="#0A66C2" fillOpacity={0.3} />
                    <Area type="monotone" dataKey="decaissements" name="Décaissements" stroke="#EF4444" fill="#EF4444" fillOpacity={0.3} />
                    <Line type="monotone" dataKey="solde" name="Solde" stroke="#10B981" strokeWidth={2} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-gray-100 dark:bg-gray-700">
                      <th className="p-2 text-left">Mois</th>
                      <th className="p-2 text-right">Encaissements</th>
                      <th className="p-2 text-right">Décaissements</th>
                      <th className="p-2 text-right">Solde mensuel</th>
                      <th className="p-2 text-right">Trésorerie cumulée</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cashflowData.map((row, i) => {
                      const cumul = cashflowData.slice(0, i + 1).reduce((sum, r) => sum + r.solde, 0);
                      return (
                        <tr key={i} className="border-b border-gray-200">
                          <td className="p-2 font-medium">{row.month}</td>
                          <td className="p-2 text-right">{row.encaissements}M</td>
                          <td className="p-2 text-right">{row.decaissements}M</td>
                          <td className={`p-2 text-right ${row.solde >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                            {row.solde >= 0 ? '+' : ''}{row.solde}M
                          </td>
                          <td className={`p-2 text-right font-semibold ${cumul >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                            {cumul >= 0 ? '+' : ''}{cumul}M
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* 3. CAPEX/OPEX DÉTAILLÉS */}
          {activeTab === 'capex' && (
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 print:shadow-none print:break-inside-avoid">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">🏗️ CAPEX/OPEX détaillés</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3 text-center">
                    Investissements (CAPEX) - 100M FCFA
                  </h3>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={capexData}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="amount"
                        >
                          {capexData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip formatter={(value) => `${value}M FCFA`} />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="mt-4 space-y-1">
                    {capexData.map((item, i) => (
                      <div key={i} className="flex justify-between items-center text-sm">
                        <span className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                          {item.category}
                        </span>
                        <span className="font-semibold">{item.amount}M FCFA</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3 text-center">
                    Charges d'exploitation (OPEX) - 80M FCFA/an
                  </h3>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={opexData}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="amount"
                        >
                          {opexData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip formatter={(value) => `${value}M FCFA`} />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="mt-4 space-y-1">
                    {opexData.map((item, i) => (
                      <div key={i} className="flex justify-between items-center text-sm">
                        <span className="flex items-center gap-2">
                          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                          {item.category}
                        </span>
                        <span className="font-semibold">{item.amount}M FCFA</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 4. SCÉNARIOS FINANCIERS */}
          {activeTab === 'scenarios' && (
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 print:shadow-none print:break-inside-avoid">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">🎯 3 scénarios financiers</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3 text-center">
                    Scénarios de rentabilité à 5 ans
                  </h3>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={[
                        { year: 'N+1', pessimistic: -80, realistic: -50, optimistic: -30 },
                        { year: 'N+2', pessimistic: -20, realistic: 50, optimistic: 80 },
                        { year: 'N+3', pessimistic: 50, realistic: 150, optimistic: 220 },
                        { year: 'N+4', pessimistic: 150, realistic: 300, optimistic: 450 },
                        { year: 'N+5', pessimistic: 250, realistic: 480, optimistic: 700 },
                      ]}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="year" />
                        <YAxis />
                        <Tooltip formatter={(value) => `${value}M FCFA`} />
                        <Legend />
                        <Bar dataKey="pessimistic" name="Pessimiste" fill="#EF4444" />
                        <Bar dataKey="realistic" name="Réaliste" fill="#F59E0B" />
                        <Bar dataKey="optimistic" name="Optimiste" fill="#10B981" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-3 text-center">
                    CAPEX selon scénarios
                  </h3>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={scenariosData}
                          cx="50%"
                          cy="50%"
                          labelLine={true}
                          label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                        >
                          {scenariosData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip formatter={(value) => `${value}M FCFA`} />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="mt-4 space-y-2">
                    {scenariosData.map((item, i) => (
                      <div key={i} className="flex justify-between items-center p-2 rounded-lg" style={{ backgroundColor: `${item.color}20` }}>
                        <span className="font-semibold">{item.name}</span>
                        <span className="font-bold" style={{ color: item.color }}>{item.value}M FCFA</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-3">📊 Indicateurs clés de suivi</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {kpiData.map((kpi, i) => (
                    <div key={i} className="text-center p-3 bg-white dark:bg-gray-600 rounded-lg">
                      <p className="text-sm text-gray-500">{kpi.name}</p>
                      <p className="text-xl font-bold text-primary">{kpi.value}</p>
                      <p className={`text-xs ${kpi.growth.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                        {kpi.growth} vs objectif
                      </p>
                      <p className="text-xs text-gray-400">Cible: {kpi.target}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Page supplémentaire - Synthèse */}
        <div className="mt-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 print:shadow-none print:break-inside-avoid">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">📈 Synthèse financière</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="text-center p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <p className="text-sm text-gray-500">💰 Besoin de financement initial</p>
              <p className="text-2xl font-bold text-primary">100M FCFA</p>
            </div>
            <div className="text-center p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <p className="text-sm text-gray-500">🎯 Seuil de rentabilité</p>
              <p className="text-2xl font-bold text-green-600">18 mois</p>
            </div>
            <div className="text-center p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
              <p className="text-sm text-gray-500">📊 ROI projeté à 5 ans</p>
              <p className="text-2xl font-bold text-primary">320%</p>
            </div>
          </div>

          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip formatter={(value) => `${value}M FCFA`} />
                <Legend />
                <Line type="monotone" dataKey="revenue" name="CA" stroke="#0A66C2" strokeWidth={3} />
                <Line type="monotone" dataKey="profit" name="Profit" stroke="#10B981" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Pied de page */}
        <div className="mt-6 text-center text-sm text-gray-500 print:mt-4">
          <p>Document confidentiel généré par GMENAI IA - {new Date().toLocaleDateString('fr-FR')}</p>
          <p className="text-xs">📊 Prévisions en FCFA - Adapté aux marchés africains - Intégrations Mobile Money</p>
        </div>
      </div>
    </div>
  );
}
