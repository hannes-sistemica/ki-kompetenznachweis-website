import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Home } from './pages/Home';
import { Questionnaire } from './pages/Questionnaire';
import { Pricing } from './pages/Pricing';
import { Legal } from './pages/Legal';
import { FAQ } from './pages/FAQ';

function App() {
  useEffect(() => {
    console.log('=== App Component Mounted ===');
    console.log('Window location:', {
      href: window.location.href,
      origin: window.location.origin,
      host: window.location.host,
      pathname: window.location.pathname
    });
    console.log('Turnstile exists:', !!window.turnstile);
    console.log('Environment variables:', {
      mode: import.meta.env.MODE,
      hasSiteKey: !!import.meta.env.VITE_TURNSTILE_SITE_KEY,
      // Don't log the actual key for security
      siteKeyLength: import.meta.env.VITE_TURNSTILE_SITE_KEY?.length
    });
  }, []);

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/questionnaire" element={<Questionnaire />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/impressum" element={<Legal type="impressum" />} />
            <Route path="/datenschutz" element={<Legal type="datenschutz" />} />
            <Route path="/agb" element={<Legal type="agb" />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;