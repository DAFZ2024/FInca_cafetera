import React from 'react';
import AppImage from '@/components/ui/AppImage';

const HillsideSection: React.FC = () => {
  return (
    <section className="story-section bg-canopy py-24 md:py-36 px-6 md:px-14 relative overflow-hidden">
      {/* Atmospheric background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-mist/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-deep-bark/40 rounded-full blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-24">
          <span className="text-xs font-sans tracking-[0.3em] uppercase text-mist-light font-medium mb-4 reveal">
            02 · The Hillside
          </span>
          <h2 className="font-display text-parchment text-4xl md:text-6xl font-light leading-tight max-w-3xl reveal stagger-2">
            Rows climbing the slope<br />like stanzas in a poem<br /><em>written in green.</em>
          </h2>
        </div>

        {/* Full-width image */}
        <div className="reveal img-zoom rounded-2xl overflow-hidden shadow-2xl mb-16 md:mb-24 aspect-[21/9]">
          <AppImage
            src="https://img.rocket.new/generatedImages/rocket_gen_img_16efc9ee7-1772056285098.png"
            alt="Wide angle view of arabica coffee rows climbing a volcanic hillside, banana leaf canopy providing shade, mist in the valleys below"
            fill
            className="object-cover object-center" />
          
        </div>

        {/* Three-column facts */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {[
          {
            number: '1,600',
            unit: 'masl',
            label: 'Elevation',
            desc: 'High altitude slows ripening, concentrating sugars. The cold nights are the secret.'
          },
          {
            number: '47°F',
            unit: 'avg night',
            label: 'Temperature',
            desc: 'Temperature swings between day and night create the acidity roasters pay premiums for.'
          },
          {
            number: '280+',
            unit: 'days',
            label: 'Growing season',
            desc: 'From flower to ripe cherry — nine months of patience on a slope you can walk in twenty minutes.'
          }].
          map((stat, i) =>
          <div
            key={stat.label}
            className={`border-t border-parchment/15 pt-6 reveal stagger-${i + 2}`}>
            
              <div className="flex items-baseline gap-2 mb-2">
                <span className="font-display text-parchment text-4xl font-light">{stat.number}</span>
                <span className="text-mist-light text-sm font-sans">{stat.unit}</span>
              </div>
              <p className="text-parchment/50 text-xs font-sans tracking-widest uppercase mb-3">{stat.label}</p>
              <p className="text-parchment/65 text-sm font-sans leading-relaxed">{stat.desc}</p>
            </div>
          )}
        </div>

        {/* Harvest subsection */}
        <div className="mt-24 md:mt-32 grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="flex flex-col gap-6 order-2 md:order-1">
            <span className="text-xs font-sans tracking-[0.3em] uppercase text-mist-light font-medium reveal">
              03 · The Harvest
            </span>
            <h3 className="font-display text-parchment text-3xl md:text-4xl font-light leading-tight reveal stagger-2">
              Only the red ones.<br /><em>Every time. No exceptions.</em>
            </h3>
            <p className="font-sans text-parchment/65 text-base leading-relaxed reveal stagger-3">
              Selective hand-picking means each picker returns to the same tree three to five times per season. You will walk a row alongside Doña Esperanza Velásquez — who has picked this hillside for twenty-two harvests — and learn to read a cherry's readiness by the give of its skin.
            </p>
            <p className="font-sans text-parchment/50 text-sm leading-relaxed reveal stagger-4">
              Your hands will be stained. The basket will fill slowly. That's the point.
            </p>
          </div>

          <div className="order-1 md:order-2 reveal-right img-zoom rounded-xl overflow-hidden aspect-[3/4] shadow-xl">
            <AppImage
              src="https://images.unsplash.com/photo-1699807149450-d8beab2d3fb9"
              alt="Close-up of hands carefully selecting only ripe red coffee cherries from a branch, green unripe cherries left on the plant"
              fill
              className="object-cover" />
            
          </div>
        </div>
      </div>
    </section>);

};

export default HillsideSection;