// app/page.tsx
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
    <main className="relative">
      <Header onSignupClick={() => setIsSignupOpen(true)} />
      <Hero onSignupClick={() => setShowGenerator(true)} />
      <ModulesGrid />
      <FinancialOutputs />
      <HowItWorks />
      <AfricaAdaptation />
      <Pricing />
      <Testimonials />
      <Faq />
      <Footer onSignupClick={() => setIsSignupOpen(true)} isSignupOpen={isSignupOpen} setIsSignupOpen={setIsSignupOpen} />
      <SearchAssistant onDataEnriched={handleDataEnriched} />
    </main>
  );
}
