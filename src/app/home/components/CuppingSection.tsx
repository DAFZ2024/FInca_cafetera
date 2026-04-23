'use client';

import React, { useEffect, useRef, useState } from 'react';
import AppImage from '@/components/ui/AppImage';

const CuppingSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsInView(true);
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="book"
      className="story-section bg-pale-parchment py-24 md:py-36 px-6 md:px-14 overflow-hidden">
      
      <div className="max-w-7xl mx-auto">
        {/* Story conclusion */}
        <div className="text-center mb-16 md:mb-24">
          <span className="text-xs font-sans tracking-[0.3em] uppercase text-mist font-medium mb-4 block reveal">
            06 · The Cupping Table
          </span>
          <h2 className="font-display text-canopy text-4xl md:text-6xl font-light leading-tight max-w-3xl mx-auto reveal stagger-2">
            Porcelain bowls.<br />Silver spoons.<br /><em>Steam rising.</em>
          </h2>
          <p className="font-sans text-wet-earth/60 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mt-6 reveal stagger-3">
            The walk ends where the coffee ends — at the cupping table, where you will taste every stage you just walked through. Brightness from high altitude. Fruit from selective picking. Clarity from the washing channel. Sweetness from the drying bed.
          </p>
        </div>

        {/* Large cupping image */}
        <div className="reveal img-zoom rounded-2xl overflow-hidden mb-16 md:mb-24 aspect-[16/7] shadow-2xl">
          <AppImage
            src="https://img.rocket.new/generatedImages/rocket_gen_img_180f1652f-1772056286166.png"
            alt="Cupping table with white porcelain bowls of freshly brewed coffee, silver cupping spoons, steam rising in the morning light, roaster taking notes"
            fill
            className="object-cover object-center" />
          
        </div>

        {/* CTA block — the earned click */}
        <div
          className={`relative rounded-3xl overflow-hidden transition-all duration-1000 ${
          isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`
          }
          style={{ transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)', transitionDelay: '200ms' }}>
          
          {/* Background */}
          <div className="absolute inset-0">
            <AppImage
              src="https://img.rocket.new/generatedImages/rocket_gen_img_19ccfa6f9-1772056289377.png"
              alt="Atmospheric background of coffee plantation at dawn"
              fill
              className="object-cover object-center" />
            
            <div className="absolute inset-0 bg-canopy/90" />
          </div>

          {/* Content */}
          <div className="relative z-10 px-8 md:px-16 py-14 md:py-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
            {/* Left: trust + availability */}
            <div className="flex flex-col gap-5 max-w-xl">
              {/* Trust line */}
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {[
                  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80',
                  'https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=80&q=80',
                  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&q=80'].
                  map((src, i) =>
                  <div key={i} className="w-8 h-8 rounded-full overflow-hidden border-2 border-canopy ring-1 ring-parchment/20">
                      <AppImage
                      src={src}
                      alt={`Visitor ${i + 1} profile photo`}
                      width={32}
                      height={32}
                      className="object-cover w-full h-full" />
                    
                    </div>
                  )}
                </div>
                <p className="text-parchment/70 text-sm font-sans">
                  <span className="text-parchment font-medium">847 visitors</span> hosted this season
                </p>
              </div>

              <h3 className="font-display text-parchment text-3xl md:text-4xl font-light leading-tight">
                The gate opens<br /><em>at first light.</em>
              </h3>

              <p className="font-sans text-parchment/65 text-sm leading-relaxed max-w-md">
                Six hours. Volcanic soil underfoot. Every stage of your coffee, walked in sequence. Cupping at the end. No zip-lines. No gift shops. Just the farm, the people, and the bean.
              </p>

              {/* Availability */}
              <div className="flex items-center gap-3 bg-parchment/10 border border-parchment/15 rounded-xl px-4 py-3 w-fit">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-mist-light opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-mist-light" />
                </span>
                <div>
                  <p className="text-parchment text-sm font-medium font-sans">Next available: Saturday morning, 6 AM</p>
                  <p className="text-parchment/50 text-xs font-sans">Limited to 8 guests per walk</p>
                </div>
              </div>
            </div>

            {/* Right: CTA */}
            <div className="flex flex-col items-start md:items-end gap-4 shrink-0">
              <a
                href="#"
                className="btn-cherry inline-flex items-center gap-3 px-8 md:px-10 py-4 md:py-5 rounded-full text-parchment text-base font-medium tracking-wide shadow-lg">
                
                Reserve Your Walk
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-transform group-hover:translate-x-1">
                  
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <p className="text-parchment/40 text-xs font-sans text-right max-w-[200px] leading-relaxed">
                Opens the booking calendar — no payment yet required
              </p>
            </div>
          </div>
        </div>

        {/* Final sensory note */}
        <div className="mt-20 md:mt-28 text-center reveal">
          <p className="pull-quote text-canopy text-xl md:text-2xl font-light max-w-2xl mx-auto leading-relaxed">
            "By the time you reach the cupping table, you don't need to be told what you're tasting. You've been there. You watched it become itself."
          </p>
          <p className="text-wet-earth/40 text-xs font-sans mt-4 tracking-wide">
            — Kenji Nakamura, roaster, Tokyo · Finca, February 2026
          </p>
        </div>
      </div>
    </section>);

};

export default CuppingSection;