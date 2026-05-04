'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Star, Building } from 'lucide-react';

const plans = [
  {
    name: 'Gratuit',
    price: 0,
    description: 'Pour démarrer votre projet',
    features: [
      '1 business plan',
      'Export PDF',
      '7 jours de validité',
      'Support communautaire',
    ],
    icon: Star,
    color: 'from-gray-500 to-gray-600',
    buttonColor: 'bg-gray-500',
  },
  {
    name: 'Pro',
    price: 49500,
    description: 'Pour les entrepreneurs sérieux',
    features: [
      'Business plans illimités',
      'Export Excel/DOCX',
      '3 scénarios financiers',
      'Support prioritaire 24/7',
      'Intégration Mobile Money',
      'Mises à jour incluses',
    ],
    icon: Star,
    color: 'from-primary to-primary/80',
    buttonColor: 'bg-primary',
    popular: true,
  },
  {
    name: 'Enterprise',
    price: null,
    description: 'Pour les grandes organisations',
    features: [
      'API dédiée',
      'RBAC avancé',
      'SSO & authentification',
      'Cloud dédié',
      'SLA personnalisé',
      'Formation équipe',
    ],
    icon: Building,
    color: 'from-purple-500 to-purple-600',
    buttonColor: 'bg-purple-500',
  },
];

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section id="pricing" className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Tarifs transparents
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Choisissez le plan adapté à vos besoins
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <span className={`text-sm ${!isAnnual ? 'text-gray-900 dark:text-white font-semibold' : 'text-gray-600 dark:text-gray-400'}`}>
              Mensuel
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="relative w-14 h-7 bg-primary rounded-full transition-colors"
            >
              <div
                className={`absolute top-1 w-5 h-5 bg-white rounded-full transition-transform ${
                  isAnnual ? 'translate-x-7' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-sm ${isAnnual ? 'text-gray-900 dark:text-white font-semibold' : 'text-gray-600 dark:text-gray-400'}`}>
              Annuel <span className="text-green-500">(-20%)</span>
            </span>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => {
            const finalPrice = plan.price
              ? isAnnual
                ? Math.round(plan.price * 0.8)
                : plan.price
              : null;
            
            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className={`relative bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden ${
                  plan.popular ? 'ring-2 ring-primary transform scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 bg-primary text-white px-4 py-1 rounded-bl-lg text-sm font-semibold">
                    Populaire
                  </div>
                )}
                
                <div className="p-6">
                  <div className={`w-12 h-12 bg-gradient-to-r ${plan.color} rounded-lg flex items-center justify-center mb-4`}>
                    <plan.icon className="text-white" size={24} />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {plan.description}
                  </p>
                  
                  <div className="mb-6">
                    {finalPrice !== null ? (
                      <>
                        <span className="text-4xl font-bold text-gray-900 dark:text-white">
                          {finalPrice.toLocaleString()}
                        </span>
                        <span className="text-gray-600 dark:text-gray-400"> FCFA</span>
                        <span className="text-sm text-gray-500">/{isAnnual ? 'an' : 'mois'}</span>
                      </>
                    ) : (
                      <span className="text-2xl font-bold text-gray-900 dark:text-white">
                        Sur devis
                      </span>
                    )}
                  </div>
                  
                  <button
                    onClick={() => console.log(`Sélection du plan ${plan.name}`)}
                    className={`w-full ${plan.buttonColor} text-white py-3 rounded-lg hover:opacity-90 transition-all hover:scale-105 mb-6`}
                  >
                    {plan.name === 'Gratuit' ? 'Commencer gratuitement' : plan.name === 'Enterprise' ? 'Contacter les ventes' : 'Souscrire maintenant'}
                  </button>
                  
                  <div className="space-y-3">
                    {plan.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-3">
                        <Check size={18} className="text-green-500" />
                        <span className="text-sm text-gray-600 dark:text-gray-400">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}