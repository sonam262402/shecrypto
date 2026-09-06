import { ninetyDayPlan } from '../content';
import { AnimateOnScroll } from './AnimateOnScroll';
import { Section, SectionHeader } from './Section';

const monthColors = [
  'border-t-deep-purple',
  'border-t-electric',
  'border-t-coral',
];

export function NinetyDayPlan() {
  return (
    <Section id="ninety-day-plan" alt>
      <div className="max-w-7xl mx-auto">
        <AnimateOnScroll>
          <SectionHeader
            label="90-Day Plan"
            title="A clear roadmap from foundation to growth."
            align="center"
          />
        </AnimateOnScroll>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {ninetyDayPlan.map((phase, index) => (
            <AnimateOnScroll key={phase.month} delay={index * 100}>
              <div
                className={`h-full rounded-2xl bg-white border border-charcoal/8 border-t-4 ${monthColors[index]} p-6 md:p-8 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1`}
              >
                <h3 className="font-display text-xl font-bold text-charcoal mb-6">{phase.month}</h3>
                <ul className="space-y-3">
                  {phase.items.map((item) => (
                    <li key={item} className="flex gap-3 text-sm text-charcoal/75 leading-relaxed">
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br from-deep-purple/20 to-electric/20 flex items-center justify-center mt-0.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-deep-purple" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </Section>
  );
}
