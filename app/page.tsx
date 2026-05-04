// app/page.tsx - Version stable
'use client';

import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import DemoBusinessPlan from './components/DemoBusinessPlan';

export default function Home() {
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [showGenerator, setShowGenerator] = useState(false);

  if (showGenerator) {
    return <DemoBusinessPlan />;
  }

  return (
    <main>
      <Header onSignupClick={() => setIsSignupOpen(true)} />
      
      {/* Hero section avec CTA */}
      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-blue-50 to-white">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full mb-6">
            🎉 Gratuit - aucun paiement initial requis
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Générez un business plan bancable<br/>
            <span className="text-primary">en moins de 10 minutes</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            8 modules IA, prévisions financières en FCFA, intégration Mobile Money.
            Le business plan que les investisseurs et banques africaines attendent.
          </p>
          <button
            onClick={() => setShowGenerator(true)}
            className="bg-primary text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-primary/90 transition-all"
          >
            🚀 Démarrer mon business plan
          </button>
        </div>
      </section>
      
      <Footer onSignupClick={() => setIsSignupOpen(true)} isSignupOpen={isSignupOpen} setIsSignupOpen={setIsSignupOpen} />
    </main>
  );
}
