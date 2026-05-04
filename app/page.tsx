// app/page.tsx (version corrigée avec section Ressources)
'use client';

import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ModulesGrid from './components/ModulesGrid';
import FinancialOutputs from './components/FinancialOutputs';
import HowItWorks from './components/HowItWorks';
import AfricaAdaptation from './components/AfricaAdaptation';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Faq from './components/Faq';
import Footer from './components/Footer';
import BusinessPlanGenerator from './components/BusinessPlanGenerator';
import BusinessPlanResult from './components/BusinessPlanResult';
import SearchAssistant from './components/SearchAssistant';

export default function Home() {
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [showGenerator, setShowGenerator] = useState(false);
  const [savedBusinessPlan, setSavedBusinessPlan] = useState<any>(null);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('showResult') === 'true') {
      const storedBP = sessionStorage.getItem('currentBusinessPlan');
      if (storedBP) {
        setSavedBusinessPlan(JSON.parse(storedBP));
        setShowGenerator(false);
      }
    }
  }, []);

  const handlePrint = () => {
    window.print();
  };

  const handleDownloadPDF = () => {
    window.print();
  };

  const handleDataEnriched = (data: any) => {
    console.log('Données enrichies reçues:', data);
  };

  if (savedBusinessPlan) {
    return (
      <>
        <BusinessPlanResult 
          result={savedBusinessPlan.result} 
          companyName={savedBusinessPlan.companyName}
          formData={savedBusinessPlan.formData}
          onDownloadPDF={handleDownloadPDF}
          onPrint={handlePrint}
        />
        <SearchAssistant onDataEnriched={handleDataEnriched} />
      </>
    );
  }

  if (showGenerator) {
    return <BusinessPlanGenerator />;
  }

  return (
    <main>
      <Header onSignupClick={() => setIsSignupOpen(true)} />
      <Hero onSignupClick={() => setShowGenerator(true)} />
      <ModulesGrid />
      <FinancialOutputs />
      <HowItWorks />
      <AfricaAdaptation />
      <Pricing />
      <Testimonials />
      <Faq />
      
      {/* Section Ressources */}
      <section id="ressources" className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Ressources GMENAI
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Guides, templates et outils pour réussir votre business plan
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl mb-3">📘</div>
              <h3 className="text-xl font-semibold mb-2">Guide du business plan</h3>
              <p className="text-gray-600 dark:text-gray-400">Créez un business plan bancable</p>
              <span className="inline-block mt-3 text-primary text-sm">À venir →</span>
            </div>
            
            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl mb-3">📊</div>
              <h3 className="text-xl font-semibold mb-2">Template Excel</h3>
              <p className="text-gray-600 dark:text-gray-400">Prévisions financières en FCFA</p>
              <span className="inline-block mt-3 text-primary text-sm">À venir →</span>
            </div>
            
            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="text-4xl mb-3">🎬</div>
              <h3 className="text-xl font-semibold mb-2">Tutoriels vidéo</h3>
              <p className="text-gray-600 dark:text-gray-400">Tutos pas à pas</p>
              <span className="inline-block mt-3 text-primary text-sm">À venir →</span>
            </div>
          </div>
        </div>
      </section>
      
      <Footer onSignupClick={() => setIsSignupOpen(true)} isSignupOpen={isSignupOpen} setIsSignupOpen={setIsSignupOpen} />
      <SearchAssistant onDataEnriched={handleDataEnriched} />
    </main>
  );
}

