import { AnimateOnScroll } from './AnimateOnScroll';
import { Section, SectionHeader } from './Section';

export function Opportunity() {
  return (
    <Section id="opportunity" alt>
      <div className="max-w-7xl mx-auto">
        <AnimateOnScroll>
          <SectionHeader
            label="The Opportunity"
            title="Important work is happening, but it's not always visible."
            description="SheCrypto's events, podcasts, partnerships, and Kelly's network generate real value every day. The opportunity is to capture that work and distribute it consistently across social platforms."
          />
        </AnimateOnScroll>

        <AnimateOnScroll delay={100}>
          <div className="max-w-3xl space-y-5 text-charcoal/80 leading-relaxed">
            <p>
              Right now, valuable conversations, event moments, and partnership announcements often
              live in isolated channels, shared once, then lost in the flow of a busy calendar.
            </p>
            <p>
              Without a unified system, SheCrypto&apos;s public presence doesn&apos;t fully reflect the
              depth of work happening behind the scenes. Audiences miss the stories. Partners miss
              the amplification. The brand misses the momentum.
            </p>
            <blockquote className="border-l-4 border-deep-purple pl-6 py-2 my-6 font-display text-xl sm:text-2xl font-semibold text-charcoal italic">
              SheCrypto does not need more disconnected content. It needs one system that turns
              everything already happening into a consistent public narrative.
            </blockquote>
          </div>
        </AnimateOnScroll>
      </div>
    </Section>
  );
}
