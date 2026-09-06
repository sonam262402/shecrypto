import { serviceCards } from '../content';
import { AnimateOnScroll } from './AnimateOnScroll';
import { Card } from './Card';
import { Section, SectionHeader } from './Section';

export function WhatICanManage() {
  return (
    <Section id="what-i-can-manage" alt>
      <div className="max-w-7xl mx-auto">
        <AnimateOnScroll>
          <SectionHeader
            label="What I Can Manage"
            title="Five pillars of a connected brand & content engine."
          />
        </AnimateOnScroll>

        <div className="space-y-8">
          {serviceCards.map((card, index) => (
            <AnimateOnScroll key={card.title} delay={index * 80}>
              <Card>
                <h3 className="font-display text-2xl font-bold text-charcoal mb-5">{card.title}</h3>

                {'items' in card && card.items && (
                  <ul className="grid sm:grid-cols-2 gap-3">
                    {card.items.map((item) => (
                      <li key={item} className="flex gap-2 text-charcoal/75 text-sm leading-relaxed">
                        <span className="text-deep-purple mt-1">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                )}

                {'platforms' in card && card.platforms && (
                  <div className="grid sm:grid-cols-2 gap-4">
                    {card.platforms.map((platform) => (
                      <div
                        key={platform.name}
                        className="rounded-xl bg-lavender/50 border border-charcoal/5 p-4 transition-colors hover:border-deep-purple/20"
                      >
                        <p className="font-semibold text-charcoal mb-1">{platform.name}</p>
                        <p className="text-sm text-charcoal/65">{platform.description}</p>
                      </div>
                    ))}
                  </div>
                )}

                {'pipeline' in card && card.pipeline && (
                  <>
                    <div className="mt-6 overflow-x-auto pb-2">
                      <div className="flex items-center gap-2 min-w-max">
                        <span className="px-3 py-1.5 rounded-lg bg-deep-purple text-white text-sm font-semibold">
                          1 Podcast
                        </span>
                        <span className="text-deep-purple/40">→</span>
                        {card.pipeline.map((step, i) => (
                          <div key={step} className="flex items-center gap-2">
                            <span className="px-3 py-1.5 rounded-lg bg-white border border-charcoal/10 text-sm text-charcoal/80 font-medium">
                              {step}
                            </span>
                            {i < card.pipeline!.length - 1 && (
                              <span className="text-deep-purple/40">+</span>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                )}

                {'timeline' in card && card.timeline && (
                  <div className="grid md:grid-cols-3 gap-4 mt-2">
                    {card.timeline.map((step, i) => (
                      <div key={step.phase} className="relative">
                        {i < card.timeline!.length - 1 && (
                          <div className="hidden md:block absolute top-6 left-full w-full h-0.5 bg-gradient-to-r from-deep-purple/30 to-transparent -translate-x-4 z-0" />
                        )}
                        <div className="relative z-10 rounded-xl border border-charcoal/8 p-5 bg-lavender/30">
                          <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider bg-deep-purple/10 text-deep-purple mb-3">
                            {step.phase}
                          </span>
                          <p className="text-sm text-charcoal/75 leading-relaxed">{step.items}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {'description' in card && card.description && (
                  <div>
                    <p className="text-charcoal/75 leading-relaxed mb-4">{card.description}</p>
                    {card.note && (
                      <p className="text-sm font-medium text-deep-purple bg-deep-purple/5 rounded-lg px-4 py-3 border border-deep-purple/10">
                        {card.note}
                      </p>
                    )}
                  </div>
                )}
              </Card>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </Section>
  );
}
