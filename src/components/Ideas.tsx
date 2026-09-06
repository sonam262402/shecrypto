import { contentSeries } from '../content';
import { AnimateOnScroll } from './AnimateOnScroll';
import { Section, SectionHeader } from './Section';

const accentColors = [
  'from-deep-purple/15 to-electric/10',
  'from-coral/15 to-blush',
  'from-electric/15 to-lavender',
  'from-deep-purple/10 to-coral/10',
  'from-blush to-electric/10',
  'from-lavender to-deep-purple/10',
  'from-coral/10 to-electric/15',
  'from-electric/10 to-coral/15',
];

export function Ideas() {
  return (
    <Section id="ideas">
      <div className="max-w-7xl mx-auto">
        <AnimateOnScroll>
          <SectionHeader
            label="Initial Ideas"
            title="Branded content series built for consistency."
            description="Recurring formats that turn SheCrypto's existing work into a recognizable editorial voice across platforms."
          />
        </AnimateOnScroll>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {contentSeries.map((series, index) => (
            <AnimateOnScroll key={series.title} delay={index * 60}>
              <div
                className={`group h-full rounded-2xl bg-gradient-to-br ${accentColors[index % accentColors.length]} border border-charcoal/8 p-6 transition-all duration-300 hover:shadow-lg hover:shadow-deep-purple/8 hover:-translate-y-1 hover:border-deep-purple/20`}
              >
                <div className="w-10 h-10 rounded-xl bg-white/80 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-deep-purple font-bold text-sm">{String(index + 1).padStart(2, '0')}</span>
                </div>
                <h3 className="font-display text-lg font-bold text-charcoal mb-2 leading-snug">
                  {series.title}
                </h3>
                <p className="text-sm text-charcoal/65 leading-relaxed">{series.description}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </Section>
  );
}
