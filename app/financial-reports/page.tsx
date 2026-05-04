// app/financial-reports/page.tsx
'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Download, Printer } from 'lucide-react';
import {
  BarChart, Bar, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

export default function FinancialReportsPage() {
  const router = useRouter();
  const [companyName, setCompanyName] = useState('Votre entreprise');

  const revenueData = [
    { year: 'N+1', revenue: 100, expenses: 150, profit: -50 },
    { year: 'N+2', revenue: 250, expenses: 200, profit: 50 },
    { year: 'N+3', revenue: 500, expenses: 350, profit: 150 },
    { year: 'N+4', revenue: 800, expenses: 500, profit: 300 },
    { year: 'N+5', revenue: 1200, expenses: 720, profit: 480 },
  ];

  const capexData = [
    { category: 'Dev', amount: 35, color: '#0A66C2' },
    { category: 'Marketing', amount: 25, color: '#10B981' },
    { category: 'Commercial', amount: 20, color: '#F59E0B' },
    { category: 'Infra', amount: 15, color: '#8B5CF6' },
    { category: 'Admin', amount: 10, color: '#EC4899' },
  ];

  useEffect(() => {
    const storedName = sessionStorage.getItem('companyName');
    if (storedName) setCompanyName(storedName);
  }, []);

  const handleGoBack = () => {
    router.push('/?showResult=true');
  };

  const CustomLabel = (props: any) => {
    const { name, percent } = props;
    if (!percent) return null;
    return `${name} ${(percent * 100).toFixed(0)}%`;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="fixed bottom-4 right-4 z-50 flex gap-2 print:hidden">
        <button onClick={handleGoBack} className="bg-gray-700 text-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2">
          <ArrowLeft size={18} /> Retour
        </button>
        <button className="bg-primary text-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2">
          <Download size={18} /> PDF
        </button>
        <button className="bg-gray-700 text-white px-4 py-2 rounded-lg shadow-lg flex items-center gap-2">
          <Printer size={18} /> Imprimer
        </button>
      </div>

      <div className="container mx-auto max-w-6xl py-8 px-4">
        <div className="bg-gradient-to-r from-primary to-primary/70 text-white p-8 rounded-t-xl mb-6">
          <h1 className="text-3xl font-bold mb-2">{companyName}</h1>
          <p className="text-xl opacity-90">Rapports Financiers</p>
          <div className="mt-4 inline-block px-4 py-2 bg-white/20 rounded-lg">
            <span className="font-semibold">Devise: FCFA</span>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <h2 className="text-2xl font-bold mb-4">Compte de résultat 5 ans</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip formatter={(value) => `${value}M FCFA`} />
                <Legend />
                <Bar dataKey="revenue" name="CA" fill="#0A66C2" />
                <Bar dataKey="expenses" name="Charges" fill="#F59E0B" />
                <Bar dataKey="profit" name="Resultat" fill="#10B981" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4">CAPEX</h2>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={capexData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={CustomLabel}
                  outerRadius={100}
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

        <div className="mt-6 text-center text-sm text-gray-500">
          <p>Document genere par GMENAI IA - {new Date().toLocaleDateString('fr-FR')}</p>
          <p className="text-xs">Previsions en FCFA - Adapte aux marches africains</p>
        </div>
      </div>
    </div>
  );
}
