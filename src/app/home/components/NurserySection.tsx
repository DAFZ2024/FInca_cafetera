import React from 'react';
import AppImage from '@/components/ui/AppImage';

const NurserySection: React.FC = () => {
  return (
    <section className="story-section bg-pale-parchment py-24 md:py-36 px-6 md:px-14 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-12 md:gap-16 items-center">

          {/* Left: Large image */}
          <div className="md:col-span-7 reveal-left img-zoom relative">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl">
              <AppImage
                src="https://img.rocket.new/generatedImages/rocket_gen_img_131c85b64-1770647718645.png"
                alt="Coffee seedlings in black nursery bags arranged in rows, tiny bright green leaves emerging from dark volcanic soil"
                fill
                className="object-cover" />
              
              {/* Subtle vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-deep-bark/20 to-transparent pointer-events-none" />
            </div>

            {/* Floating detail card */}
            <div className="absolute -bottom-6 -right-4 md:-right-8 bg-canopy text-parchment px-5 py-4 rounded-xl shadow-xl max-w-[180px] reveal stagger-3">
              <p className="font-display text-2xl font-light italic mb-1">6–8</p>
              <p className="text-xs text-parchment/70 font-sans leading-tight">months in the nursery before hillside planting</p>
            </div>
          </div>

          {/* Right: Story text */}
          <div className="md:col-span-5 flex flex-col gap-6">
            {/* Step number */}
            <div className="reveal stagger-1">
              <span className="text-xs font-sans tracking-[0.3em] uppercase text-mist font-medium">
                01 · The Nursery
              </span>
            </div>

            <h2 className="font-display text-canopy text-4xl md:text-5xl font-light leading-tight reveal stagger-2">
              Every great cup<br />begins in the<br /><em>dark of a seed.</em>
            </h2>

            <div className="hr-canopy reveal stagger-2" />

            <p className="font-sans text-wet-earth/75 text-base leading-relaxed reveal stagger-3">
              Before the hillside rows, before the harvest basket, there are black polythene bags in a shaded nursery. Bourbon and Typica varietals — selected from the farm's best-producing trees — germinate in volcanic pumice mixed with compost from last season's pulp.
            </p>

            <p className="font-sans text-wet-earth/60 text-sm leading-relaxed reveal stagger-4">
              Your walk begins here, crouching between the seedling rows, running a finger across a cotyledon leaf no bigger than your thumbnail. This is the start of the bean in your cup.
            </p>

            {/* Pull quote */}
            <blockquote className="pull-quote text-canopy text-xl font-light border-l-2 border-cherry pl-5 mt-2 reveal stagger-4">
              "The soil smells like rain on warm stone. You remember it for weeks."
            </blockquote>
          </div>
        </div>
      </div>
    </section>);

};

export default NurserySection;