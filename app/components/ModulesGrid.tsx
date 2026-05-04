'use client';

import { motion } from 'framer-motion';
import {
  TrendingUp,
  Lightbulb,
  Rocket,
  DollarSign,
  Users,
  Settings,
  Handshake,
  Shield,
} from 'lucide-react';

const modules = [
  {
    icon: TrendingUp,
    title: 'Étude de marché',
    subtitle: 'Customer Intelligence',
    description: 'Analyse marché local + concurrence',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: Lightbulb,
    title: 'Proposition de valeur',
    subtitle: 'Value Generator AI',
    description: 'UVP unique et adaptée',
    color: 'from-yellow-500 to-yellow-600',
  },
  {
    icon: Rocket,
    title: 'Go-to-market',
    subtitle: 'Go-To-Market AI',
    description: "Canaux d'acquisition Mobile Money",
    color: 'from-purple-500 to-purple-600',
  },
  {
    icon: DollarSign,
    title: 'Modèle de revenus',
    subtitle: 'Revenue Intelligence',
    description: 'Pricing + ARR/MRR',
    color: 'from-green-500 to-green-600',
  },
  {
    icon: Users,
    title: 'Organisation & RH',
    subtitle: 'Resource Optimizer',
    description: 'Organigramme + masse salariale FCFA',
    color: 'from-pink-500 to-pink-600',
  },
  {
    icon: Settings,
    title: 'Process & opérations',
    subtitle: 'Operations AI',
    description: 'Workflows + KPIs',
    color: 'from-indigo-500 to-indigo-600',
  },
  {
    icon: Handshake,
    title: 'Partenariats',
    subtitle: 'Ecosystem Manager',
    description: 'Scoring partenaires locaux',
    color: 'from-red-500 to-red-600',
  },
  {
    icon: Shield,
    title: 'Coûts & risques',
    subtitle: 'Cost & Risk AI',
    description: 'CAPEX/OPEX + 3 scénarios',
    color: 'from-orange-500 to-orange-600',
  },
];

export default function ModulesGrid() {
  return (
    <section id="modules" className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            8 modules IA puissants
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Chaque bloc de votre business plan est généré par une IA spécialisée
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {modules.map((module, index) => (
            <motion.div
              key={module.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all cursor-pointer group"
            >
              <div className={`w-12 h-12 bg-gradient-to-r ${module.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <module.icon className="text-white" size={24} />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                {module.title}
              </h3>
              <p className="text-sm text-primary mb-2">{module.subtitle}</p>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                {module.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}