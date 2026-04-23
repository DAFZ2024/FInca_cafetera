import React from 'react';
import AppImage from '@/components/ui/AppImage';

const WetMillSection: React.FC = () => {
  return (
    <section className="story-section bg-parchment py-24 md:py-36 px-6 md:px-14 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Asymmetric layout */}
        <div className="grid md:grid-cols-12 gap-12 md:gap-8 items-start">

          {/* Left: narrow text column */}
          <div className="md:col-span-4 md:sticky md:top-32 flex flex-col gap-6">
            <span className="text-xs font-sans tracking-[0.3em] uppercase text-mist font-medium reveal">
              04 · The Wet Mill
            </span>
            <h2 className="font-display text-canopy text-4xl md:text-5xl font-light leading-tight reveal stagger-2">
              Fermentation<br />is where flavour<br /><em>finds its voice.</em>
            </h2>
            <div className="hr-canopy reveal stagger-2" />
            <p className="font-sans text-wet-earth/70 text-base leading-relaxed reveal stagger-3">
              After depulping, the sticky parchment coffee rests in concrete fermentation tanks for 36–48 hours. Microbes break down the mucilage. The air above the tanks is sharp, fruity, almost alcoholic — a smell that roasters recognise immediately as the origin of their favourite tasting notes.
            </p>
            <p className="font-sans text-wet-earth/55 text-sm leading-relaxed reveal stagger-4">
              You will dip your hand into the washing channel and feel parchment coffee moving through cold mountain water. You will understand, immediately, why washed Guatemalan tastes different from everything else.
            </p>
          </div>

          {/* Right: stacked images */}
          <div className="md:col-span-8 flex flex-col gap-6">
            {/* Main image */}
            <div className="reveal img-zoom rounded-2xl overflow-hidden aspect-[16/9] shadow-xl">
              <AppImage
                src="https://img.rocket.new/generatedImages/rocket_gen_img_167c18f84-1772056285933.png"
                alt="Concrete fermentation tanks at a coffee wet mill, parchment coffee fermenting in water with steam rising in the cool morning air"
                fill
                className="object-cover" />
              
            </div>

            {/* Two smaller images side by side */}
            <div className="grid grid-cols-2 gap-6">
              <div className="reveal stagger-2 img-zoom rounded-xl overflow-hidden aspect-[4/3] shadow-md">
                <AppImage
                  src="https://img.rocket.new/generatedImages/rocket_gen_img_1213e9331-1772056285928.png"
                  alt="Close view of coffee depulping machine with fresh red cherries entering and parchment coffee emerging"
                  fill
                  className="object-cover" />
                
              </div>
              <div className="reveal stagger-3 img-zoom rounded-xl overflow-hidden aspect-[4/3] shadow-md">
                <AppImage
                  src="https://img.rocket.new/generatedImages/rocket_gen_img_1e28d6768-1772056285220.png"
                  alt="Washing channel with parchment coffee floating through clean mountain spring water, wooden paddles guiding the flow"
                  fill
                  className="object-cover" />
                
              </div>
            </div>

            {/* Sensory detail card */}
            <div className="reveal stagger-4 bg-wet-earth text-parchment rounded-xl p-6 md:p-8">
              <p className="pull-quote text-parchment/80 text-lg md:text-xl leading-relaxed">
                "The fermentation tanks smell like ripe mango and wet hay. It is the smell of good coffee being made, and once you know it, you will find it everywhere."
              </p>
              <p className="text-parchment/40 text-xs font-sans mt-4 tracking-wide">
                — Field note, Finca tour, March 2025
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default WetMillSection;