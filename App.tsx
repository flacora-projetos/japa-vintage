import React from 'react';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { ProductShowcase } from './components/ProductShowcase';
import { About } from './components/About';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-vintage-cream selection:bg-vintage-red selection:text-white">
      <Navigation />
      <main>
        <Hero />
        <Features />
        <ProductShowcase />
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;