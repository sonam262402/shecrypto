import { siteConfig } from '../content';
import { AnimateOnScroll } from './AnimateOnScroll';
import { Button } from './Button';
import { GridPattern } from './GridPattern';

export function CallToAction() {
  return (
    <section id="next-step" className="relative section-padding overflow-hidden">
      <GridPattern />
      <div className="relative max-w-4xl mx-auto text-center">
        <AnimateOnScroll>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-charcoal leading-tight mb-6">
            Let&apos;s make SheCrypto&apos;s public presence reflect the work already happening behind the scenes.
          </h2>
          <p className="text-lg text-charcoal/75 leading-relaxed mb-10 max-w-2xl mx-auto">
            {siteConfig.firstName} would love to begin with a focused 30-day pilot, establish the workflow, and build the
            next phase based on what creates the most value for SheCrypto.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button href={`mailto:${siteConfig.email}?subject=SheCrypto%20Proposal`}>Get in Touch</Button>
            <Button href="#pilot" variant="secondary">Discuss the 30-Day Pilot</Button>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-charcoal/60">
            <a href={`mailto:${siteConfig.email}`} className="hover:text-deep-purple transition-colors">
              {siteConfig.email}
            </a>
            <span className="hidden sm:inline text-charcoal/30">|</span>
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-deep-purple transition-colors"
            >
              LinkedIn Profile
            </a>
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
