// app/page.tsx
'use client';

import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import DemoBusinessPlan from './components/DemoBusinessPlan';
import SearchAssistant from './components/SearchAssistant';

export default function Home() {
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [showGenerator, setShowGenerator] = useState(false);

  if (showGenerator) {
    return (
      <>
        <DemoBusinessPlan />
        <SearchAssistant />
      </>
    );
  }

  return (
    <main>
      <Header onSignupClick={() => setIsSignupOpen(true)} />
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full mb-6">🎉 Gratuit - aucun paiement initial requis</div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Générez un business plan bancable<br/><span className="text-primary">en moins de 10 minutes</span></h1>
          <p className="text-xl text-gray-600 mb-8">8 modules IA, prévisions financières en FCFA, intégration Mobile Money.</p>
          <button onClick={() => setShowGenerator(true)} className="bg-primary text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-primary/90">🚀 Démarrer mon business plan</button>
        </div>
      </section>
      
      {/* Section Ressources */}
      <section id="resources" className="py-20 px-4 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              📚 Ressources GMENAI
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Guides, templates et outils pour vous accompagner dans votre projet
            </p>
          </div>
          
          {/* Guides */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">📘 Guides & E-books</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-xl transition">
                <div className="text-4xl mb-3">📖</div>
                <h4 className="text-xl font-bold mb-2">Guide du business plan bancable</h4>
                <p className="text-gray-600 dark:text-gray-400 mb-4">63 pages pour convaincre banques et investisseurs</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">PDF gratuit</span>
                  <button className="text-primary font-semibold hover:underline">Télécharger →</button>
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-xl transition">
                <div className="text-4xl mb-3">💰</div>
                <h4 className="text-xl font-bold mb-2">Guide des prévisions financières</h4>
                <p className="text-gray-600 dark:text-gray-400 mb-4">Maîtrisez vos projections en FCFA</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">PDF gratuit</span>
                  <button className="text-primary font-semibold hover:underline">Télécharger →</button>
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-xl transition">
                <div className="text-4xl mb-3">📱</div>
                <h4 className="text-xl font-bold mb-2">Guide Mobile Money</h4>
                <p className="text-gray-600 dark:text-gray-400 mb-4">Intégrez Orange Money, Wave, M-Pesa</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">PDF gratuit</span>
                  <button className="text-primary font-semibold hover:underline">Télécharger →</button>
                </div>
              </div>
            </div>
          </div>

          {/* Templates */}
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">📊 Templates & Outils</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-xl transition">
                <div className="text-4xl mb-3">📈</div>
                <h4 className="text-xl font-bold mb-2">Dashboard financier Excel</h4>
                <p className="text-gray-600 dark:text-gray-400 mb-4">Tableau de bord KPIs + projections 5 ans</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">Excel (FCFA)</span>
                  <button className="text-primary font-semibold hover:underline">Télécharger →</button>
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-xl transition">
                <div className="text-4xl mb-3">🎯</div>
                <h4 className="text-xl font-bold mb-2">Pitch Deck template</h4>
                <p className="text-gray-600 dark:text-gray-400 mb-4">Présentation professionnelle pour investisseurs</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">PowerPoint</span>
                  <button className="text-primary font-semibold hover:underline">Télécharger →</button>
                </div>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-xl transition">
                <div className="text-4xl mb-3">✅</div>
                <h4 className="text-xl font-bold mb-2">Checklist financement</h4>
                <p className="text-gray-600 dark:text-gray-400 mb-4">Préparez votre dossier de financement</p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">PDF</span>
                  <button className="text-primary font-semibold hover:underline">Télécharger →</button>
                </div>
              </div>
            </div>
          </div>

          {/* Tutoriels vidéo */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">🎬 Tutoriels vidéo</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-xl transition">
                <div className="text-4xl mb-3">🎥</div>
                <h4 className="text-xl font-bold mb-2">Découvrir GMENAI en 5 min</h4>
                <p className="text-gray-600 dark:text-gray-400 mb-4">Premiers pas sur la plateforme</p>
                <button className="text-primary font-semibold hover:underline">Regarder →</button>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-xl transition">
                <div className="text-4xl mb-3">📊</div>
                <h4 className="text-xl font-bold mb-2">Lire ses prévisions financières</h4>
                <p className="text-gray-600 dark:text-gray-400 mb-4">Comprendre les graphiques et tableaux</p>
                <button className="text-primary font-semibold hover:underline">Regarder →</button>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-xl transition">
                <div className="text-4xl mb-3">🚀</div>
                <h4 className="text-xl font-bold mb-2">Obtenir un prêt bancaire</h4>
                <p className="text-gray-600 dark:text-gray-400 mb-4">Comment utiliser GMENAI pour convaincre</p>
                <button className="text-primary font-semibold hover:underline">Regarder →</button>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="mt-12 p-8 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-xl text-center">
            <h3 className="text-2xl font-bold mb-2">📧 Recevez nos conseils</h3>
            <p className="text-gray-600 mb-4">Templates, guides et astuces directement dans votre boîte mail</p>
            <div className="flex max-w-md mx-auto gap-2">
              <input type="email" placeholder="Votre email" className="flex-1 px-4 py-2 rounded-lg border border-gray-300" />
              <button className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90">S'inscrire</button>
            </div>
          </div>
        </div>
      </section>

<Footer onSignupClick={() => setIsSignupOpen(true)} isSignupOpen={isSignupOpen} setIsSignupOpen={setIsSignupOpen} />
      <SearchAssistant />
    </main>
  );
}

