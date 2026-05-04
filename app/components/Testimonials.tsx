'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Amadou Diallo',
    role: 'CEO, AgriTech Sénégal',
    content: "GMENAI nous a permis d'obtenir un prêt de 50M FCFA en seulement 2 semaines. Les prévisions financières sont extrêmement précises.",
    rating: 5,
    image: 'https://ui-avatars.com/api/?name=Amadou+Diallo&background=0A66C2&color=fff',
  },
  {
    name: 'Fatima Koné',
    role: 'Fondatrice, Digital Services CI',
    content: 'La génération automatique des 8 modules nous a fait gagner des semaines de travail. Indispensable pour tout entrepreneur africain.',
    rating: 5,
    image: 'https://ui-avatars.com/api/?name=Fatima+Kone&background=0A66C2&color=fff',
  },
  {
    name: 'Jean-Paul Nguema',
    role: 'Directeur Financier, Gabon Logistics',
    content: "L'intégration Mobile Money et les exports Excel sont parfaits pour nos reportings internes. Un outil professionnel de haut niveau.",
    rating: 5,
    image: 'https://ui-avatars.com/api/?name=Jean-Paul+Nguema&background=0A66C2&color=fff',
  },
];

export default function Testimonials() {
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
            Ils nous font confiance
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Rejoignez plus de 2000 entrepreneurs satisfaits
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 relative"
            >
              <Quote className="absolute top-6 right-6 text-primary/20 w-12 h-12" />
              
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {testimonial.role}
                  </p>
                </div>
              </div>
              
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-yellow-500 text-yellow-500" />
                ))}
              </div>
              
              <p className="text-gray-700 dark:text-gray-300 italic">
                "{testimonial.content}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}