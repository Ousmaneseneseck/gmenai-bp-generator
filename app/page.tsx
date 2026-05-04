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
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-blue-50 via-white to-emerald-50">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full mb-6">
            ✨ Nouveau : Assistant IA intégré
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Générez un business plan bancable
            <span className="text-primary"> en moins de 10 minutes</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            8 modules IA, prévisions financières en FCFA, intégration Mobile Money.
            Le business plan que les investisseurs et banques africaines attendent.
          </p>
          <button
            onClick={() => setShowForm(true)}
            className="bg-primary text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-primary/90 transition-all transform hover:scale-105 shadow-lg"
          >
            🚀 Démarrer mon business plan
          </button>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto mt-12 pt-8 border-t border-gray-200">
            <div><div className="text-3xl font-bold text-primary">2000+</div><div className="text-sm text-gray-500">Entrepreneurs</div></div>
            <div><div className="text-3xl font-bold text-primary">50M+</div><div className="text-sm text-gray-500">FCFA levés</div></div>
            <div><div className="text-3xl font-bold text-primary">8</div><div className="text-sm text-gray-500">Modules IA</div></div>
          </div>
        </div>
      </section>

      {/* Section Fonctionnalités / 8 modules IA */}
      <section id="features" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">8 modules IA puissants</h2>
            <p className="text-lg text-gray-600">Chaque bloc de votre business plan est généré par une IA spécialisée</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Étude de marché', subtitle: 'Customer Intelligence', desc: 'Analyse marché local + concurrence', emoji: '📊' },
              { title: 'Proposition de valeur', subtitle: 'Value Generator AI', desc: 'UVP unique et adaptée', emoji: '💡' },
              { title: 'Go-to-market', subtitle: 'Go-To-Market AI', desc: "Canaux d'acquisition Mobile Money", emoji: '🚀' },
              { title: 'Modèle de revenus', subtitle: 'Revenue Intelligence', desc: 'Pricing + ARR/MRR', emoji: '💰' },
              { title: 'Organisation & RH', subtitle: 'Resource Optimizer', desc: 'Organigramme + masse salariale FCFA', emoji: '👥' },
              { title: 'Process & opérations', subtitle: 'Operations AI', desc: 'Workflows + KPIs', emoji: '⚙️' },
              { title: 'Partenariats', subtitle: 'Ecosystem Manager', desc: 'Scoring partenaires locaux', emoji: '🤝' },
              { title: 'Coûts & risques', subtitle: 'Cost & Risk AI', desc: 'CAPEX/OPEX + 3 scénarios', emoji: '🛡️' }
            ].map((m, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition">
                <div className="text-3xl mb-3">{m.emoji}</div>
                <h3 className="text-xl font-semibold mb-1">{m.title}</h3>
                <p className="text-sm text-primary mb-2">{m.subtitle}</p>
                <p className="text-gray-600 text-sm">{m.desc}</p>
              </div>
            ))}
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
            {[
              { step: '1', title: 'Remplir', desc: 'Formulaire court : secteur, localisation, type de revenus', emoji: '📝' },
              { step: '2', title: 'Générer', desc: 'Nos 8 IA travaillent en temps réel', emoji: '⚡' },
              { step: '3', title: 'Exporter', desc: 'PDF, Excel, DOCX ou lien sécurisé', emoji: '📎' },
              { step: '4', title: 'Partager', desc: 'Envoyez à vos partenaires ou investisseurs', emoji: '🤝' }
            ].map((s, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 text-xl font-bold text-primary">{s.step}</div>
                <div className="text-3xl mb-2">{s.emoji}</div>
                <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
                <p className="text-gray-500 text-sm">{s.desc}</p>
              </div>
            ))}
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
            {[
              { name: 'Gratuit', price: '0 FCFA', features: ['1 business plan', 'Export PDF', '7 jours de validité', 'Support communautaire'], popular: false },
              { name: 'Pro', price: '49 500 FCFA/mois', features: ['Business plans illimités', 'Export Excel/DOCX', '3 scénarios financiers', 'Support prioritaire 24/7', 'Intégration Mobile Money'], popular: true },
              { name: 'Enterprise', price: 'Sur devis', features: ['API dédiée', 'RBAC avancé', 'SSO & authentification', 'Cloud dédié', 'SLA personnalisé'], popular: false }
            ].map((p, i) => (
              <div key={i} className={`bg-white rounded-xl p-6 shadow-lg border ${p.popular ? 'border-primary ring-2 ring-primary/20' : 'border-gray-200'}`}>
                {p.popular && <div className="text-center text-primary text-sm font-semibold mb-2">🔥 Le plus populaire</div>}
                <h3 className="text-2xl font-bold text-center mb-2">{p.name}</h3>
                <div className="text-center text-3xl font-bold text-primary mb-4">{p.price}</div>
                <ul className="space-y-2 mb-6">
                  {p.features.map((f, j) => <li key={j} className="text-gray-600 flex items-center gap-2 text-sm">✓ {f}</li>)}
                </ul>
                <button className="w-full bg-primary text-white py-2 rounded-lg hover:bg-primary/90 transition">Commencer</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Ressources (déjà présente) */}
      <section id="resources" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">📚 Ressources GMENAI</h2>
            <p className="text-lg text-gray-600">Guides, templates et outils pour vous accompagner dans votre projet</p>
          </div>
          
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6">📘 Guides & E-books</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-sm"><div className="text-4xl mb-3">📖</div><h4 className="text-xl font-bold mb-2">Guide du business plan bancable</h4><p className="text-gray-600 mb-4">63 pages pour convaincre banques et investisseurs</p><button className="text-primary font-semibold">Télécharger →</button></div>
              <div className="bg-white rounded-xl p-6 shadow-sm"><div className="text-4xl mb-3">💰</div><h4 className="text-xl font-bold mb-2">Guide des prévisions financières</h4><p className="text-gray-600 mb-4">Maîtrisez vos projections en FCFA</p><button className="text-primary font-semibold">Télécharger →</button></div>
              <div className="bg-white rounded-xl p-6 shadow-sm"><div className="text-4xl mb-3">📱</div><h4 className="text-xl font-bold mb-2">Guide Mobile Money</h4><p className="text-gray-600 mb-4">Intégrez Orange Money, Wave, M-Pesa</p><button className="text-primary font-semibold">Télécharger →</button></div>
            </div>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6">📊 Templates & Outils</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-sm"><div className="text-4xl mb-3">📈</div><h4 className="text-xl font-bold mb-2">Dashboard financier Excel</h4><p className="text-gray-600 mb-4">Tableau de bord KPIs + projections 5 ans</p><button className="text-primary font-semibold">Télécharger →</button></div>
              <div className="bg-white rounded-xl p-6 shadow-sm"><div className="text-4xl mb-3">🎯</div><h4 className="text-xl font-bold mb-2">Pitch Deck template</h4><p className="text-gray-600 mb-4">Présentation professionnelle pour investisseurs</p><button className="text-primary font-semibold">Télécharger →</button></div>
              <div className="bg-white rounded-xl p-6 shadow-sm"><div className="text-4xl mb-3">✅</div><h4 className="text-xl font-bold mb-2">Checklist financement</h4><p className="text-gray-600 mb-4">Préparez votre dossier de financement</p><button className="text-primary font-semibold">Télécharger →</button></div>
            </div>
          </div>
        </div>
      </section>

      <Footer onSignupClick={() => setIsSignupOpen(true)} isSignupOpen={isSignupOpen} setIsSignupOpen={setIsSignupOpen} />
      <SearchAssistant />
    </main>
  );
}