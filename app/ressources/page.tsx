// app/ressources/page.tsx
'use client';

import { useState } from 'react';
import { 
  FileText, Video, BookOpen, Download, HelpCircle, 
  Mail, MessageCircle, TrendingUp, Users, Shield,
  ChevronRight, Search, Filter
} from 'lucide-react';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function RessourcesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('all');

  const resources = [
    // Guides
    {
      id: 1,
      title: "Comment générer un business plan bancable",
      description: "Guide pas à pas pour créer un business plan qui convainc les banques",
      type: "guide",
      category: "business",
      icon: FileText,
      link: "/ressources/guide-business-plan",
      readTime: "10 min",
    },
    {
      id: 2,
      title: "Comprendre les prévisions financières en FCFA",
      description: "Tout savoir sur les projections financières adaptées à l'Afrique",
      type: "guide",
      category: "finance",
      icon: TrendingUp,
      link: "/ressources/guide-financier",
      readTime: "15 min",
    },
    // Tutoriels vidéo
    {
      id: 3,
      title: "Tutoriel vidéo : Démarrer avec GMENAI",
      description: "Découvrez comment utiliser la plateforme en 5 minutes",
      type: "video",
      category: "tutorial",
      icon: Video,
      duration: "5:23",
      link: "/ressources/video-tuto",
    },
    {
      id: 4,
      title: "Webinaire : Les erreurs à éviter dans son business plan",
      description: "Replay du webinaire avec des experts",
      type: "video",
      category: "webinaire",
      icon: Video,
      duration: "45 min",
      link: "/ressources/webinaire",
    },
    // Templates
    {
      id: 5,
      title: "Template Excel - Suivi financier",
      description: "Tableau de bord pour suivre vos KPIs",
      type: "template",
      category: "finance",
      icon: Download,
      format: "Excel",
      link: "/downloads/template-financier.xlsx",
    },
    {
      id: 6,
      title: "Présentation investisseurs (Pitch Deck)",
      description: "Template professionnel pour lever des fonds",
      type: "template",
      category: "business",
      icon: Download,
      format: "PowerPoint",
      link: "/downloads/pitch-deck.pptx",
    },
    // FAQs
    {
      id: 7,
      title: "FAQ - Questions fréquentes",
      description: "Réponses aux questions les plus posées",
      type: "faq",
      category: "support",
      icon: HelpCircle,
      link: "/ressources/faq",
    },
    // Articles
    {
      id: 8,
      title: "Les clés pour réussir sa levée de fonds en Afrique",
      description: "Conseils d'experts pour convaincre les investisseurs",
      type: "article",
      category: "fundraising",
      icon: BookOpen,
      link: "/ressources/levee-fonds",
      readTime: "8 min",
    },
    {
      id: 9,
      title: "Mobile Money : Comment intégrer les paiements",
      description: "Guide technique pour Orange Money, Wave, M-Pesa",
      type: "article",
      category: "tech",
      icon: BookOpen,
      link: "/ressources/mobile-money",
      readTime: "12 min",
    },
  ];

  const filteredResources = resources.filter(r => {
    const matchSearch = r.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                        r.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchCategory = category === 'all' || r.category === category;
    return matchSearch && matchCategory;
  });

  const categories = [
    { id: 'all', name: 'Tous', icon: Filter },
    { id: 'business', name: 'Business Plan', icon: FileText },
    { id: 'finance', name: 'Finance', icon: TrendingUp },
    { id: 'tutorial', name: 'Tutoriels', icon: Video },
    { id: 'fundraising', name: 'Levée de fonds', icon: Users },
    { id: 'support', name: 'Support', icon: HelpCircle },
  ];

  return (
    <>
      <Header onSignupClick={() => {}} />
      
      <main className="pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-6xl">
          
          {/* En-tête */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Ressources GMENAI
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Guides, tutos et templates pour réussir votre business plan
            </p>
          </div>

          {/* Barre de recherche */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Rechercher une ressource..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
              />
            </div>
          </div>

          {/* Filtres */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setCategory(cat.id)}
                className={`px-4 py-2 rounded-full flex items-center gap-2 transition-all ${
                  category === cat.id
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200'
                }`}
              >
                <cat.icon size={16} />
                {cat.name}
              </button>
            ))}
          </div>

          {/* Grille des ressources */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResources.map((resource) => (
              <Link
                key={resource.id}
                href={resource.link}
                className="group bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <resource.icon className="text-primary" size={24} />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {resource.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                  {resource.description}
                </p>
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <div className="flex items-center gap-2">
                    {resource.readTime && <span>📖 {resource.readTime}</span>}
                    {resource.duration && <span>🎬 {resource.duration}</span>}
                    {resource.format && <span>📎 {resource.format}</span>}
                  </div>
                  <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>

          {/* Section newsletter */}
          <div className="mt-12 p-8 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl text-center">
            <Mail className="w-12 h-12 text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Recevez nos conseils par email
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Inscrivez-vous à notre newsletter pour recevoir guides et templates
            </p>
            <div className="flex max-w-md mx-auto gap-2">
              <input
                type="email"
                placeholder="Votre email"
                className="flex-1 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800"
              />
              <button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90">
                S'inscrire
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer onSignupClick={() => {}} isSignupOpen={false} setIsSignupOpen={() => {}} />
    </>
  );
}
