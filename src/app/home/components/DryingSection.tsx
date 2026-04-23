import React from 'react';
import AppImage from '@/components/ui/AppImage';

const DryingSection: React.FC = () => {
  return (
    <section className="story-section bg-wet-earth py-24 md:py-36 px-6 md:px-14 relative overflow-hidden">
      {/* Texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`
        }} />
      

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Centered heading */}
        <div className="text-center mb-16 md:mb-20">
          <span className="text-xs font-sans tracking-[0.3em] uppercase text-parchment/40 font-medium mb-4 block reveal">
            05 · The Drying Patio
          </span>
          <h2 className="font-display text-parchment text-4xl md:text-6xl font-light leading-tight reveal stagger-2">
            Patience raked<br /><em>under open sky.</em>
          </h2>
        </div>

        {/* Full-width panoramic */}
        <div className="reveal img-zoom rounded-2xl overflow-hidden mb-12 md:mb-16" style={{ aspectRatio: '21/8' }}>
          <AppImage
            src="https://img.rocket.new/generatedImages/rocket_gen_img_106354fd5-1772056285251.png"
            alt="Wide view of African drying beds with parchment coffee spread in thin layers under bright sky, workers raking the coffee in the midday sun"
            fill
            className="object-cover object-center" />
          
        </div>

        {/* Two column detail */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-20">
          <div className="flex flex-col gap-5">
            <p className="font-sans text-parchment/70 text-base leading-relaxed reveal">
              Raised African beds — timber frames with mesh bottoms — allow air to circulate beneath the parchment as it dries. For 18 to 30 days, depending on altitude and cloud cover, workers rake the coffee every two hours to prevent mould and ensure even drying.
            </p>
            <p className="font-sans text-parchment/50 text-sm leading-relaxed reveal stagger-2">
              You will pick up a handful of parchment coffee, still warm from the morning sun, and turn it in your palm. It rattles like a small percussion instrument. The moisture content is still dropping. It won't be ready for two more weeks.
            </p>
          </div>
          <div className="flex flex-col gap-5">
            <p className="font-sans text-parchment/70 text-base leading-relaxed reveal stagger-2">
              The drying patio is the most meditative stop on the walk. The smell is sweet and vegetal — green tea, hay, a faint lactic tang from the fermentation that preceded it. Hummingbirds work the hedgerow at the patio's edge.
            </p>
            {/* Stats row */}
            <div className="grid grid-cols-3 gap-4 border-t border-parchment/10 pt-5 reveal stagger-3">
              {[
              { n: '18–30', u: 'days drying' },
              { n: '11%', u: 'target moisture' },
              { n: '2×', u: 'daily raking' }].
              map((s) =>
              <div key={s.u}>
                  <p className="font-display text-parchment text-2xl font-light italic">{s.n}</p>
                  <p className="text-parchment/40 text-xs font-sans tracking-wide mt-1">{s.u}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>);

};

export default DryingSection;