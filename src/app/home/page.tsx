import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from './components/HeroSection';
import NurserySection from './components/NurserySection';
import HillsideSection from './components/HillsideSection';
import WetMillSection from './components/WetMillSection';
import DryingSection from './components/DryingSection';
import CuppingSection from './components/CuppingSection';
import ScrollRevealInit from './components/ScrollRevealInit';

export default function HomePage() {
  return (
    <main className="bg-pale-parchment overflow-x-hidden">
      <ScrollRevealInit />
      <Header />
      <HeroSection />
      <NurserySection />
      <HillsideSection />
      <WetMillSection />
      <DryingSection />
      <CuppingSection />
      <Footer />
    </main>
  );
}