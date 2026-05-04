'use client';

import { motion } from 'framer-motion';
import { FileText, TrendingDown, TrendingUp, BarChart3, FileSpreadsheet, FileJson } from 'lucide-react';

const outputs = [
  {
    icon: FileText,
    title: 'Compte de résultat',
    description: 'Prévisionnel 3 ans',
    color: 'text-primary',
  },
  {
    icon: TrendingUp,
    title: 'Plan de trésorerie',
    description: 'Encaissements/Décaissements',
    color: 'text-green-500',
  },
  {
    icon: BarChart3,
    title: 'CAPEX/OPEX',
    description: 'Détaillés par catégorie',
    color: 'text-purple-500',
  },
  {
    icon: FileJson,
    title: 'ARR/MRR',
    description: 'Pour modèles SaaS',
    color: 'text-yellow-500',
  },
  {
    icon: TrendingDown,
    title: '3 scénarios',
    description: 'Pessimiste / Réaliste / Optimiste',
    color: 'text-red-500',
  },
  {
    icon: FileSpreadsheet,
    title: 'Exports multiples',
    description: 'PDF, Excel, DOCX',
    color: 'text-emerald-500',
  },
];

export default function FinancialOutputs() {
  return (
    <section className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Sorties financières automatisées
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Tout ce dont vous avez besoin pour convaincre banques et investisseurs
          </p>
          <div className="inline-block mt-4 px-4 py-2 bg-primary/10 rounded-lg">
            <span className="text-primary font-semibold">💰 Devise : FCFA</span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {outputs.map((output, index) => (
            <motion.div
              key={output.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
            >
              <output.icon className={`${output.color} w-12 h-12 mx-auto mb-4`} />
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                {output.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">{output.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Mockup preview */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-xl p-8 text-center"
        >
          <div className="flex justify-center gap-4 mb-4">
            <div className="w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center">
              <FileSpreadsheet className="text-primary" size={32} />
            </div>
            <div className="w-16 h-16 bg-green-500/20 rounded-lg flex items-center justify-center">
              <FileText className="text-green-500" size={32} />
            </div>
            <div className="w-16 h-16 bg-blue-500/20 rounded-lg flex items-center justify-center">
              <FileJson className="text-blue-500" size={32} />
            </div>
          </div>
          <p className="text-gray-700 dark:text-gray-300">
            Exports professionnels prêts pour vos dossiers de financement
          </p>
        </motion.div>
      </div>
    </section>
  );
}