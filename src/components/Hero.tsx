import { contentEcosystem, siteConfig } from '../content';
import { AnimateOnScroll } from './AnimateOnScroll';
import { Button } from './Button';
import { GridPattern } from './GridPattern';

export function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 pb-16 section-padding overflow-hidden">
      <GridPattern />

      <div className="relative max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <AnimateOnScroll>
            <p className="text-sm font-semibold uppercase tracking-widest text-deep-purple mb-4">
              Brand Growth Proposal for SheCrypto
            </p>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-charcoal leading-[1.1] mb-6">
              Turning everything happening at SheCrypto into{' '}
              <span className="text-gradient">visible brand momentum.</span>
            </h1>
            <p className="text-lg text-charcoal/75 leading-relaxed mb-8 max-w-xl">
              SheCrypto already has the conversations, relationships, events, and industry credibility.
              {siteConfig.firstName} proposes building the content and distribution system that makes this work consistently
              visible, and helps SheCrypto grow into a recognizable women-led Web3 media and community brand.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button href="#ninety-day-plan">View the Plan</Button>
              <Button href="#pilot" variant="secondary">Discuss the Pilot</Button>
            </div>
          </AnimateOnScroll>

          <AnimateOnScroll delay={150}>
            <div className="rounded-2xl bg-white/80 backdrop-blur border border-charcoal/8 p-6 md:p-8 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-wider text-charcoal/50 mb-4">
                Connected Content Ecosystem
              </p>
              <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                {contentEcosystem.map((item, i) => (
                  <div key={item} className="flex items-center gap-2 sm:gap-3">
                    <span
                      className="inline-flex items-center px-3 py-1.5 rounded-full text-xs sm:text-sm font-medium bg-gradient-to-r from-deep-purple/10 to-electric/10 text-charcoal border border-deep-purple/15"
                    >
                      {item}
                    </span>
                    {i < contentEcosystem.length - 1 && (
                      <span className="text-deep-purple/40 hidden sm:inline" aria-hidden="true">→</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
