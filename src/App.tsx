import React, { Suspense } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';

const Services = React.lazy(() => import('./components/Services'));
const Comparison = React.lazy(() => import('./components/Comparison'));
const Trust = React.lazy(() => import('./components/Trust'));
const SurveyForm = React.lazy(() => import('./components/SurveyForm'));
const FAQ = React.lazy(() => import('./components/FAQ'));
const CalendlyEmbed = React.lazy(() => import('./components/CalendlyEmbed'));
const Footer = React.lazy(() => import('./components/Footer'));
const FloatingWhatsApp = React.lazy(() => import('./components/FloatingWhatsApp'));

export default function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-cyan-900/50 selection:text-white flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Suspense fallback={<div className="py-24 text-center text-cyan-400">Loading...</div>}>
          <Services />
          <Comparison />
          <Trust />
          <SurveyForm />
          <FAQ />
          <CalendlyEmbed />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
        <FloatingWhatsApp />
      </Suspense>
    </div>
  );
}
