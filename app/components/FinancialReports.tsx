// app/components/FinancialReports.tsx
'use client';

import { useState } from 'react';
import {
  BarChart, Bar, LineChart, Line, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  AreaChart, Area
} from 'recharts';
import { DollarSign, TrendingUp, TrendingDown, PieChart as PieChartIcon, Download, Printer } from 'lucide-react';

interface FinancialReportsProps {
  companyName: string;
  financialData: any;
}

export default function FinancialReports({ companyName, financialData }: FinancialReportsProps) {
  const [activeTab, setActiveTab] = useState<'income' | 'cashflow' | 'capex' | 'scenarios'>('income');

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

  const formatPercent = (value: number | undefined): string => {
    if (value === undefined) return '0%';
    return `${(value * 100).toFixed(0)}%`;
  };

  const CustomLabel = ({ name, percent }: { name?: string; percent?: number }) => {
    if (!percent) return null;
    return `${name} ${(percent * 100).toFixed(0)}%`;
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="fixed bottom-4 right-4 z-50 flex gap-2 print:hidden">
        <button className="bg-primary text-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2">
          <Download size={18} /> Télécharger rapports
        </button>
        <button className="bg-gray-700 text-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2">
          <Printer size={18} /> Imprimer
        </button>
      </div>

      <div className="container mx-auto max-w-6xl py-8 px-4 print:py-0">
        <div className="bg-gradient-to-r from-primary to-primary/70 text-white p-8 rounded-t-xl print:bg-primary mb-6">
          <h1 className="text-3xl font-bold mb-2">{companyName}</h1>
          <p className="text-xl opacity-90">Rapports Financiers & Projections</p>
          <p className="text-sm opacity-75 mt-2">Généré par GMENAI IA - {new Date().toLocaleDateString('fr-FR')}</p>
          <div className="mt-4 inline-block px-4 py-2 bg-white/20 rounded-lg">
            <span className="font-semibold">💰 Devise : FCFA</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-6 print:hidden">
          <button onClick={() => setActiveTab('income')} className={`px-4 py-2 rounded-lg flex items-center gap-2 ${activeTab === 'income' ? 'bg-primary text-white' : 'bg-white text-gray-700'}`}>
            <TrendingUp size={18} /> Compte de résultat
          </button>
          <button onClick={() => setActiveTab('cashflow')} className={`px-4 py-2 rounded-lg flex items-center gap-2 ${activeTab === 'cashflow' ? 'bg-primary text-white' : 'bg-white text-gray-700'}`}>
            <DollarSign size={18} /> Plan de trésorerie
          </button>
          <button onClick={() => setActiveTab('capex')} className={`px-4 py-2 rounded-lg flex items-center gap-2 ${activeTab === 'capex' ? 'bg-primary text-white' : 'bg-white text-gray-700'}`}>
            <PieChartIcon size={18} /> CAPEX/OPEX
          </button>
          <button onClick={() => setActiveTab('scenarios')} className={`px-4 py-2 rounded-lg flex items-center gap-2 ${activeTab === 'scenarios' ? 'bg-primary text-white' : 'bg-white text-gray-700'}`}>
            <TrendingDown size={18} /> Scénarios
          </button>
        </div>

        <div className="space-y-6">
          {activeTab === 'income' && (
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Compte de résultat prévisionnel 5 ans</h2>
              <div className="mb-8 h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={revenueData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="year" />
                    <YAxis />
                    <Tooltip formatter={(value) => `${value}M FCFA`} />
                    <Legend />
                    <Bar dataKey="revenue" name="CA" fill="#0A66C2" />
                    <Bar dataKey="expenses" name="Charges" fill="#F59E0B" />
                    <Bar dataKey="profit" name="Résultat" fill="#10B981" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          )}

          {activeTab === 'capex' && (
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">CAPEX/OPEX détaillés</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-center mb-3">Investissements (CAPEX) - 100M FCFA</h3>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={capexData}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          label={({ name, percent }) => `${name} ${percent ? (percent * 100).toFixed(0) : 0}%`}
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
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-center mb-3">Charges d'exploitation (OPEX) - 80M FCFA/an</h3>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={opexData}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          label={({ name, percent }) => `${name} ${percent ? (percent * 100).toFixed(0) : 0}%`}
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
                </div>
              </div>
            </div>
          )}

          {activeTab === 'scenarios' && (
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">3 scénarios financiers</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={scenariosData}
                        cx="50%"
                        cy="50%"
                        labelLine={true}
                        label={({ name, percent }) => `${name} ${percent ? (percent * 100).toFixed(0) : 0}%`}
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
                <div className="space-y-2">
                  {scenariosData.map((item, i) => (
                    <div key={i} className="flex justify-between items-center p-2 rounded-lg" style={{ backgroundColor: `${item.color}20` }}>
                      <span className="font-semibold">{item.name}</span>
                      <span className="font-bold" style={{ color: item.color }}>{item.value}M FCFA</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="mt-6 text-center text-sm text-gray-500 print:mt-4">
          <p>Document confidentiel généré par GMENAI IA - {new Date().toLocaleDateString('fr-FR')}</p>
          <p className="text-xs">📊 Prévisions en FCFA - Adapté aux marchés africains - Intégrations Mobile Money</p>
        </div>
      </div>
    </div>
  );
}
