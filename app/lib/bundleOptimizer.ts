// app/lib/bundleOptimizer.ts
// Ce fichier aide à analyser et optimiser la taille du bundle

export const bundleConfig = {
  // Packages à exclure du bundle client
  serverOnly: [
    'pg',           // PostgreSQL
    'redis',        // Redis
    'bcrypt',       // Hachage
    'sharp',        // Traitement images
  ],
  
  // Composants à charger dynamiquement
  dynamicComponents: [
    'BusinessPlanResult',
    'FinancialReports',
    'SearchAssistant',
  ],
  
  // Icônes à importer individuellement
  // Utiliser: import { Search, Menu, X } from 'lucide-react'
};

// Vérifier la taille du bundle en développement
if (process.env.NODE_ENV === 'development') {
  console.log('Bundle optimization enabled:', bundleConfig);
}
