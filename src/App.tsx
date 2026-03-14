/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Marquee from './components/Marquee';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import AdAccounts from './pages/AdAccounts';
import Contact from './pages/Contact';
import WhatsAppButton from './components/WhatsAppButton';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <header className="fixed top-0 left-0 right-0 z-50">
          <Marquee />
          <Navbar />
        </header>
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/ad-accounts" element={<AdAccounts />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton floating />
      </div>
    </Router>
  );
}
