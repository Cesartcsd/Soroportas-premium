import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Collections from './components/Collections';
import Features from './components/Features';
import Process from './components/Process';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import CustomCursor from './components/CustomCursor';
import QuoteModal from './components/QuoteModal';

function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);

  return (
    <div className="bg-white min-h-screen font-sans text-gray-900 selection:bg-brand-primary selection:text-white">
      <CustomCursor />
      <Navbar onOpenQuote={() => setIsQuoteModalOpen(true)} />
      <main>
        <Hero onOpenQuote={() => setIsQuoteModalOpen(true)} />
        <Collections />
        <Features />
        <Process />
        <Gallery />
        <Testimonials />
        <FAQ />
      </main>
      <Footer />
      <WhatsAppButton />
      <QuoteModal isOpen={isQuoteModalOpen} onClose={() => setIsQuoteModalOpen(false)} />
    </div>
  );
}

export default App;