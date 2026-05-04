// app/fonts.ts
import { Inter, Montserrat, Poppins } from 'next/font/google';

// Optimisation des fonts avec préchargement
export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'Arial', 'sans-serif'],
});

export const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  preload: false,
  fallback: ['system-ui', 'Arial', 'sans-serif'],
});

export const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  preload: false,
  fallback: ['system-ui', 'Arial', 'sans-serif'],
});

// Optimisation: utiliser une seule police principale pour réduire le chargement
export const defaultFont = inter;
