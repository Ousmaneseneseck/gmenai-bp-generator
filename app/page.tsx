'use client';

import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import BusinessPlanForm from './components/BusinessPlanForm';
import SearchAssistant from './components/SearchAssistant';

export default function Home() {
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);

  if (showForm) {
    return (
      <>
        <BusinessPlanForm />
        <SearchAssistant />
      </>
    );
  }

  return (
    <main>
      <Header onSignupClick={() => setIsSignupOpen(true)} />

      {/* Hero Section */}
            {/* Hero Section - Version mobile optimisée */}
      <section className="pt-24 md:pt-32 pb-12 md:pb-20 px-4 bg-gradient-to-br from-blue-50 via-white to-emerald-50">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-800 px-3 md:px-4 py-1 md:py-2 rounded-full mb-4 md:mb-6 text-sm md:text-base">
            ✨ Nouveau : Assistant IA intégré
          </div>
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
            Générez un business plan bancable
            <span className="text-primary block mt-1"> en moins de 10 minutes</span>
          </h1>
          <p className="text-base md:text-xl text-gray-700 mb-6 md:mb-8 max-w-3xl mx-auto px-2">
            8 modules IA, prévisions financières en FCFA, intégration Mobile Money.
            Le business plan que les investisseurs et banques africaines attendent.
          </p>
          <button
            onClick={() => setShowForm(true)}
            className="bg-primary text-white px-6 md:px-8 py-2 md:py-3 rounded-lg text-base md:text-lg font-semibold hover:bg-primary/90 transition-all transform hover:scale-105 shadow-lg"
          >
            🚀 Démarrer mon business plan
          </button>
          <div className="grid grid-cols-3 gap-4 max-w-md mx-auto mt-8 md:mt-12 pt-6 md:pt-8 border-t border-gray-200">
            <div><div className="text-xl md:text-3xl font-bold text-primary">2000+</div><div className="text-xs md:text-sm text-gray-600">Entrepreneurs</div></div>
            <div><div className="text-xl md:text-3xl font-bold text-primary">50M+</div><div className="text-xs md:text-sm text-gray-600">FCFA levés</div></div>
            <div><div className="text-xl md:text-3xl font-bold text-primary">8</div><div className="text-xs md:text-sm text-gray-600">Modules IA</div></div>
          </div>
        </div>
      </section>

      {/* Section Fonctionnalités - 8 modules IA */}
      <section id="features" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">8 modules IA puissants</h2>
            <p className="text-lg text-gray-600">Chaque bloc de votre business plan est généré par une IA spécialisée</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition"><div className="text-3xl mb-3">📊</div><h3 className="text-xl font-semibold mb-1">Étude de marché</h3><p className="text-sm text-primary mb-2">Customer Intelligence</p><p className="text-gray-600 text-sm">Analyse marché local + concurrence</p></div>
            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition"><div className="text-3xl mb-3">💡</div><h3 className="text-xl font-semibold mb-1">Proposition de valeur</h3><p className="text-sm text-primary mb-2">Value Generator AI</p><p className="text-gray-600 text-sm">UVP unique et adaptée</p></div>
            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition"><div className="text-3xl mb-3">🚀</div><h3 className="text-xl font-semibold mb-1">Go-to-market</h3><p className="text-sm text-primary mb-2">Go-To-Market AI</p><p className="text-gray-600 text-sm">Canaux d'acquisition Mobile Money</p></div>
            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition"><div className="text-3xl mb-3">💰</div><h3 className="text-xl font-semibold mb-1">Modèle de revenus</h3><p className="text-sm text-primary mb-2">Revenue Intelligence</p><p className="text-gray-600 text-sm">Pricing + ARR/MRR</p></div>
            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition"><div className="text-3xl mb-3">👥</div><h3 className="text-xl font-semibold mb-1">Organisation & RH</h3><p className="text-sm text-primary mb-2">Resource Optimizer</p><p className="text-gray-600 text-sm">Organigramme + masse salariale FCFA</p></div>
            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition"><div className="text-3xl mb-3">⚙️</div><h3 className="text-xl font-semibold mb-1">Process & opérations</h3><p className="text-sm text-primary mb-2">Operations AI</p><p className="text-gray-600 text-sm">Workflows + KPIs</p></div>
            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition"><div className="text-3xl mb-3">🤝</div><h3 className="text-xl font-semibold mb-1">Partenariats</h3><p className="text-sm text-primary mb-2">Ecosystem Manager</p><p className="text-gray-600 text-sm">Scoring partenaires locaux</p></div>
            <div className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition"><div className="text-3xl mb-3">🛡️</div><h3 className="text-xl font-semibold mb-1">Coûts & risques</h3><p className="text-sm text-primary mb-2">Cost & Risk AI</p><p className="text-gray-600 text-sm">CAPEX/OPEX + 3 scénarios</p></div>
          </div>
        </div>
      </section>

      {/* Section Comment ça marche */}
      <section id="how-it-works" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Comment ça marche ?</h2>
            <p className="text-lg text-gray-600">4 étapes simples pour votre business plan</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            <div className="bg-white rounded-xl p-6 shadow-sm"><div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold text-primary">1</div><div className="text-3xl mb-2">📝</div><h3 className="text-xl font-semibold mb-2">Remplir</h3><p className="text-gray-500 text-sm">Formulaire court : secteur, localisation, type de revenus</p></div>
            <div className="bg-white rounded-xl p-6 shadow-sm"><div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold text-primary">2</div><div className="text-3xl mb-2">⚡</div><h3 className="text-xl font-semibold mb-2">Générer</h3><p className="text-gray-500 text-sm">Nos 8 IA travaillent en temps réel</p></div>
            <div className="bg-white rounded-xl p-6 shadow-sm"><div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold text-primary">3</div><div className="text-3xl mb-2">📎</div><h3 className="text-xl font-semibold mb-2">Exporter</h3><p className="text-gray-500 text-sm">PDF, Excel, DOCX ou lien sécurisé</p></div>
            <div className="bg-white rounded-xl p-6 shadow-sm"><div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold text-primary">4</div><div className="text-3xl mb-2">🤝</div><h3 className="text-xl font-semibold mb-2">Partager</h3><p className="text-gray-500 text-sm">Envoyez à vos partenaires ou investisseurs</p></div>
          </div>
        </div>
      </section>

      {/* Section Tarifs */}
      <section id="pricing" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Tarifs transparents</h2>
            <p className="text-lg text-gray-600">Choisissez le plan adapté à vos besoins</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200"><h3 className="text-2xl font-bold text-center mb-2">Gratuit</h3><div className="text-center text-3xl font-bold text-primary mb-4">0 FCFA</div><ul className="space-y-2 mb-6"><li className="text-gray-600 text-sm">✓ 1 business plan</li><li className="text-gray-600 text-sm">✓ Export PDF</li><li className="text-gray-600 text-sm">✓ 7 jours de validité</li><li className="text-gray-600 text-sm">✓ Support communautaire</li></ul><button className="w-full bg-primary text-white py-2 rounded-lg hover:bg-primary/90 transition">Commencer</button></div>
            <div className="bg-white rounded-xl p-6 shadow-lg border border-primary ring-2 ring-primary/20 relative"><div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-white text-xs px-3 py-1 rounded-full">🔥 Le plus populaire</div><h3 className="text-2xl font-bold text-center mb-2">Pro</h3><div className="text-center text-3xl font-bold text-primary mb-4">49 500 FCFA/mois</div><ul className="space-y-2 mb-6"><li className="text-gray-600 text-sm">✓ Business plans illimités</li><li className="text-gray-600 text-sm">✓ Export Excel/DOCX</li><li className="text-gray-600 text-sm">✓ 3 scénarios financiers</li><li className="text-gray-600 text-sm">✓ Support prioritaire 24/7</li><li className="text-gray-600 text-sm">✓ Intégration Mobile Money</li></ul><button className="w-full bg-primary text-white py-2 rounded-lg hover:bg-primary/90 transition">Commencer</button></div>
            <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200"><h3 className="text-2xl font-bold text-center mb-2">Enterprise</h3><div className="text-center text-3xl font-bold text-primary mb-4">Sur devis</div><ul className="space-y-2 mb-6"><li className="text-gray-600 text-sm">✓ API dédiée</li><li className="text-gray-600 text-sm">✓ RBAC avancé</li><li className="text-gray-600 text-sm">✓ SSO & authentification</li><li className="text-gray-600 text-sm">✓ Cloud dédié</li><li className="text-gray-600 text-sm">✓ SLA personnalisé</li></ul><button className="w-full bg-primary text-white py-2 rounded-lg hover:bg-primary/90 transition">Contacter</button></div>
          </div>
        </div>
      </section>

      {/* Section Ressources */}
      <section id="resources" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">📚 Ressources GMENAI</h2>
            <p className="text-lg text-gray-600">Guides, templates et outils pour vous accompagner dans votre projet</p>
          </div>
          <div className="mb-12"><h3 className="text-2xl font-semibold mb-6">📘 Guides & E-books</h3><div className="grid grid-cols-1 md:grid-cols-3 gap-6"><div className="bg-white rounded-xl p-6 shadow-sm"><div className="text-4xl mb-3">📖</div><h4 className="text-xl font-bold mb-2">Guide du business plan bancable</h4><p className="text-gray-600 mb-4">63 pages pour convaincre banques et investisseurs</p><button className="text-primary font-semibold">Télécharger →</button></div><div className="bg-white rounded-xl p-6 shadow-sm"><div className="text-4xl mb-3">💰</div><h4 className="text-xl font-bold mb-2">Guide des prévisions financières</h4><p className="text-gray-600 mb-4">Maîtrisez vos projections en FCFA</p><button className="text-primary font-semibold">Télécharger →</button></div><div className="bg-white rounded-xl p-6 shadow-sm"><div className="text-4xl mb-3">📱</div><h4 className="text-xl font-bold mb-2">Guide Mobile Money</h4><p className="text-gray-600 mb-4">Intégrez Orange Money, Wave, M-Pesa</p><button className="text-primary font-semibold">Télécharger →</button></div></div></div>
          <div><h3 className="text-2xl font-semibold mb-6">📊 Templates & Outils</h3><div className="grid grid-cols-1 md:grid-cols-3 gap-6"><div className="bg-white rounded-xl p-6 shadow-sm"><div className="text-4xl mb-3">📈</div><h4 className="text-xl font-bold mb-2">Dashboard financier Excel</h4><p className="text-gray-600 mb-4">Tableau de bord KPIs + projections 5 ans</p><button className="text-primary font-semibold">Télécharger →</button></div><div className="bg-white rounded-xl p-6 shadow-sm"><div className="text-4xl mb-3">🎯</div><h4 className="text-xl font-bold mb-2">Pitch Deck template</h4><p className="text-gray-600 mb-4">Présentation professionnelle pour investisseurs</p><button className="text-primary font-semibold">Télécharger →</button></div><div className="bg-white rounded-xl p-6 shadow-sm"><div className="text-4xl mb-3">✅</div><h4 className="text-xl font-bold mb-2">Checklist financement</h4><p className="text-gray-600 mb-4">Préparez votre dossier de financement</p><button className="text-primary font-semibold">Télécharger →</button></div></div></div>
        </div>
      </section>

      <Footer onSignupClick={() => setIsSignupOpen(true)} isSignupOpen={isSignupOpen} setIsSignupOpen={setIsSignupOpen} />
      <SearchAssistant />
    </main>
  );
}

