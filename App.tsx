import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Preloader } from './components/Preloader';
import { CustomCursor } from './components/CustomCursor';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Portfolio } from './components/Portfolio';
import { Contact } from './components/Contact';

const App: React.FC = () => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <div className="noise-overlay" />
      <CustomCursor />
      
      <AnimatePresence mode="wait">
        {loading && <Preloader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <>
          <Header />
          <main className="w-full bg-bg min-h-screen relative selection:bg-accent/30 selection:text-white">
            <Hero />
            <Services />
            <Portfolio />
            <Contact />
          </main>
        </>
      )}
    </>
  );
};

export default App;