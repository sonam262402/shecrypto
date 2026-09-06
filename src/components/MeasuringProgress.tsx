import { metrics } from '../content';
import { AnimateOnScroll } from './AnimateOnScroll';
import { Section, SectionHeader } from './Section';

export function MeasuringProgress() {
  return (
    <Section id="outcomes">
      <div className="max-w-7xl mx-auto">
        <AnimateOnScroll>
          <SectionHeader
            label="Measuring Progress"
            title="Tracking what matters, without vanity metrics."
            description="The initial goal is to build a dependable system. Sustainable audience growth follows through consistency, quality, and stronger distribution."
          />
        </AnimateOnScroll>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {metrics.map((metric, index) => (
            <AnimateOnScroll key={metric} delay={index * 50}>
              <div className="rounded-xl bg-lavender/40 border border-charcoal/6 px-5 py-4 transition-all duration-300 hover:bg-white hover:shadow-md hover:border-deep-purple/15">
                <p className="font-medium text-charcoal text-sm">{metric}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>

        <AnimateOnScroll delay={300}>
          <p className="mt-10 text-center text-charcoal/60 italic max-w-2xl mx-auto">
            The initial goal is to build a dependable system. Sustainable audience growth follows
            through consistency, quality, and stronger distribution.
          </p>
        </AnimateOnScroll>
      </div>
    </Section>
  );
}
