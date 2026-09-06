import { pilotDeliverables } from '../content';
import { AnimateOnScroll } from './AnimateOnScroll';
import { Section, SectionHeader } from './Section';

export function Pilot() {
  return (
    <Section id="pilot" alt>
      <div className="max-w-4xl mx-auto">
        <AnimateOnScroll>
          <SectionHeader
            label="Pilot"
            title="30-Day Brand & Content Pilot"
            align="center"
          />
        </AnimateOnScroll>

        <AnimateOnScroll delay={100}>
          <div className="rounded-3xl bg-gradient-to-br from-deep-purple via-deep-purple to-electric p-8 md:p-12 text-white shadow-xl shadow-deep-purple/25">
            <ul className="space-y-4 mb-8">
              {pilotDeliverables.map((item) => (
                <li key={item} className="flex gap-3 text-white/90 leading-relaxed">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-white/20 flex items-center justify-center mt-0.5">
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <div className="border-t border-white/20 pt-6 space-y-4">
              <p className="text-sm text-white/75 leading-relaxed">
                Publishing volume and deliverables will be finalized based on priorities, available
                content, approval capacity, production resources, and budget. Advanced editing, complex
                design, paid advertising, travel, and continuous community moderation can be scoped
                separately.
              </p>
              <div className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 border border-white/20 backdrop-blur">
                <span className="text-sm font-medium text-white/70">Investment:</span>
                <span className="font-semibold">To be finalized together</span>
              </div>
            </div>
          </div>
        </AnimateOnScroll>
      </div>
    </Section>
  );
}
