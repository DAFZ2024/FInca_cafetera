'use client';

import React, { useState, useEffect } from 'react';
import AppLogo from '@/components/ui/AppLogo';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'nav-glass shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-5 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <AppLogo
            text="Finca"
            size={32}
            className={`transition-colors duration-300 ${
              scrolled ? 'text-canopy' : 'text-parchment'
            }`}
          />
          <span
            className={`font-display text-xl font-medium tracking-wide transition-colors duration-300 ${
              scrolled ? 'text-canopy' : 'text-parchment'
            }`}
          >
            Finca
          </span>
        </div>

        {/* CTA */}
        <a
          href="#book"
          className={`text-sm font-medium tracking-wide transition-all duration-300 px-5 py-2.5 rounded-full border ${
            scrolled
              ? 'border-canopy text-canopy hover:bg-canopy hover:text-parchment' :'border-parchment/60 text-parchment hover:bg-parchment/10'
          }`}
        >
          Reserve Your Walk
        </a>
      </div>
    </header>
  );
};

export default Header;