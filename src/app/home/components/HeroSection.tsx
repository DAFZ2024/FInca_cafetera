'use client';

import React, { useEffect, useRef, useState } from 'react';
import AppImage from '@/components/ui/AppImage';

const HeroSection: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const [ctaVisible, setCtaVisible] = useState(false);

  useEffect(() => {
    // Fade in CTA after a short delay
    const timer = setTimeout(() => setCtaVisible(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleParallax = () => {
      if (!bgRef.current) return;
      const scrollY = window.scrollY;
      bgRef.current.style.transform = `translateY(${scrollY * 0.35}px) scale(1.05)`;
    };
    window.addEventListener('scroll', handleParallax, { passive: true });
    return () => window.removeEventListener('scroll', handleParallax);
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative h-[93vh] min-h-[600px] w-full overflow-hidden grain-overlay">
      
      {/* Background image with parallax */}
      <div
        ref={bgRef}
        className="absolute inset-0 will-change-transform"
        style={{ transformOrigin: 'center top' }}>
        
        <AppImage
          src="https://img.rocket.new/generatedImages/rocket_gen_img_188e137ef-1772056285088.png"
          alt="Dawn corridor of coffee rows with mist sitting low between plants, a single picker in a straw hat carrying a red basket, volcanic ridgeline soft in the background"
          fill
          className="object-cover object-center"
          priority />
        
      </div>

      {/* Gradient overlays — cinematic depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-deep-bark/60 via-transparent to-deep-bark/85 z-10" />
      <div className="absolute inset-0 bg-gradient-to-r from-deep-bark/30 via-transparent to-transparent z-10" />

      {/* Top nav spacer */}
      <div className="relative z-20 pt-28" />

      {/* Hero content — bottom anchored */}
      <div className="absolute bottom-0 left-0 right-0 z-20 px-6 md:px-14 pb-12 md:pb-16">
        <div className="max-w-7xl mx-auto">
          {/* Eyebrow */}
          <div
            className={`transition-all duration-700 ${ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            style={{ transitionDelay: '200ms' }}>
            
            <span className="inline-flex items-center gap-2 text-parchment/70 text-xs tracking-[0.2em] uppercase font-sans mb-5">
              <span className="w-6 h-px bg-parchment/50" />
              Specialty Coffee · Volcanic Origin
              <span className="w-6 h-px bg-parchment/50" />
            </span>
          </div>

          {/* Main headline */}
          <div
            className={`transition-all duration-900 ${ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            style={{ transitionDelay: '400ms', transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}>
            
            <h1 className="font-display text-parchment text-5xl md:text-7xl lg:text-8xl font-light leading-[0.95] tracking-tight max-w-4xl mb-8">
              From seed to cup,<br />
              <em className="font-light italic">you walk every step.</em>
            </h1>
          </div>

          {/* Bottom row: tagline + CTA */}
          <div
            className={`flex flex-col md:flex-row md:items-end justify-between gap-8 transition-all duration-700 ${ctaVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            style={{ transitionDelay: '700ms', transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)' }}>
            
            <p className="text-parchment/75 font-sans font-light text-base md:text-lg max-w-md leading-relaxed">
              A dawn pilgrimage through arabica rows on volcanic soil — for roasters, obsessives, and anyone who needs to taste the difference.
            </p>

            <div className="flex flex-col items-start md:items-end gap-3">
              {/* Next available teaser */}
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-mist-light opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-mist-light" />
                </span>
                <span className="text-parchment/60 text-xs font-sans tracking-wide">
                  Next available: Saturday morning, 6 AM
                </span>
              </div>

              {/* Hero CTA — subtle cream */}
              <a
                href="#book"
                className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-full border border-parchment/50 text-parchment text-sm font-medium tracking-wide hover:bg-parchment/10 hover:border-parchment transition-all duration-300">
                
                Reserve Your Walk
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="transition-transform duration-300 group-hover:translate-x-1">
                  
                  <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 z-20 transition-all duration-700 ${ctaVisible ? 'opacity-100' : 'opacity-0'}`}
        style={{ transitionDelay: '1200ms' }}>
        
        <div className="flex flex-col items-center gap-2 text-parchment/40">
          <span className="text-[10px] tracking-[0.25em] uppercase font-sans">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-parchment/40 to-transparent animate-pulse" />
        </div>
      </div>
    </section>);

};

export default HeroSection;