import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Products from './components/Products';
import Features from './components/Features';
import Clients from './components/Clients';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  return (
    <div className="font-sans text-jet-gray-900 overflow-hidden bg-jet-black">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Products />
      <Features />
      <Clients />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}