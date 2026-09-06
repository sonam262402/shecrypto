import { siteConfig } from '../content';
import { AnimateOnScroll } from './AnimateOnScroll';
import { Card } from './Card';
import { Section, SectionHeader } from './Section';

const strengths = [
  'Five years of Web3 marketing experience',
  "Experience building and managing CoinGape's podcast",
  'Experience across content, community, distribution, events, and partnerships',
  'Ability to connect strategy with hands-on execution',
  'Comfortable managing guest research, outreach, scheduling, publishing coordination, repurposing, and amplification',
];

export function WhatIBring() {
  return (
    <Section id="what-i-bring">
      <div className="max-w-7xl mx-auto">
        <AnimateOnScroll>
          <SectionHeader
            label="What I Bring"
            title={`${siteConfig.firstName}: a hands-on operator who connects strategy with execution.`}
          />
        </AnimateOnScroll>

        <div className="grid lg:grid-cols-5 gap-8">
          <AnimateOnScroll delay={100} className="lg:col-span-3">
            <ul className="space-y-4">
              {strengths.map((item) => (
                <li key={item} className="flex gap-3 text-charcoal/80 leading-relaxed">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-br from-deep-purple to-electric flex items-center justify-center mt-0.5">
                    <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <p className="mt-8 text-sm text-charcoal/55 leading-relaxed">
              Advanced audio editing, advanced video editing, and complex graphic design can be
              scoped separately when needed. {siteConfig.firstName} focuses on the strategy, workflow, and distribution
              that turns content into brand momentum.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll delay={200} className="lg:col-span-2">
            <Card className="h-full bg-gradient-to-br from-lavender/80 to-white border-deep-purple/15">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-deep-purple to-electric flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <p className="font-display text-xl font-semibold text-charcoal leading-snug">
                {siteConfig.firstName} can own the work between an idea, event, or interview and its full distribution, giving
                Kelly more space to focus on relationships, conversations, and partnerships.
              </p>
            </Card>
          </AnimateOnScroll>
        </div>
      </div>
    </Section>
  );
}
