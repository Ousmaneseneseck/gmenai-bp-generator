'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'Mes données sont-elles sécurisées ?',
    answer: 'Absolument. Nous utilisons le chiffrement AES-256 au repos et TLS 1.3+ en transit. Notre infrastructure est conforme RGPD et aux réglementations locales africaines.',
  },
  {
    question: 'Puis-je exporter mon business plan ?',
    answer: 'Oui ! Vous pouvez exporter en PDF, Excel ou DOCX. Les plans Pro et Enterprise permettent des exports illimités.',
  },
  {
    question: 'Quel type de support est inclus ?',
    answer: 'Le plan gratuit inclut le support communautaire. Le plan Pro offre un support prioritaire 24/7 par chat et email. Enterprise bénéficie d\'un support dédié avec SLA.',
  },
  {
    question: 'Les intégrations Mobile Money fonctionnent-elles partout ?',
    answer: 'Nous supportons Orange Money, Wave et M-Pesa dans tous les pays où ces services sont disponibles. D\'autres opérateurs peuvent être ajoutés sur demande.',
  },
  {
    question: 'Puis-je modifier mon business plan après génération ?',
    answer: 'Oui, vous pouvez modifier toutes les hypothèses à tout moment et régénérer automatiquement les sections impactées.',
  },
  {
    question: 'Quelle est la durée de conservation de mes données ?',
    answer: 'Vos données sont conservées tant que votre compte est actif. Vous pouvez demander leur suppression à tout moment.',
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Questions fréquentes
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Tout ce que vous devez savoir sur GMENAI
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                <span className="font-semibold text-gray-900 dark:text-white">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-4"
                  >
                    <p className="text-gray-600 dark:text-gray-400">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}