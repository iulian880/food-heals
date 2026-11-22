import { useState } from 'react';
import { Clock, Flame, Leaf, ShieldCheck } from '@phosphor-icons/react';
import { RITUAL_STEPS, UI_COPY, type Lang } from '../data/content';

interface CulinaryRitualProps {
  lang: Lang;
}

export function CulinaryRitual({ lang }: CulinaryRitualProps) {
  const [activeStepIndex, setActiveStepIndex] = useState(1);

  return (
    <section
      id="ritual"
      aria-labelledby="ritual-heading"
      className="lacquer-surface border-b border-[var(--hairline-lacquer)]"
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-10 xl:px-12 py-20 sm:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* Left Editorial Column — Headline, Kitchen Pass Photo & Culinary Standards */}
          <div className="lg:col-span-5 flex flex-col">
            <h2
              id="ritual-heading"
              className="font-display text-[2.25rem] sm:text-[2.95rem] leading-[1.06] font-semibold tracking-[-0.02em] text-[var(--ink-on-lacquer)]"
            >
              {UI_COPY.ritual.heading[lang]}
            </h2>

            <p className="mt-5 text-base leading-relaxed text-[var(--ink-on-lacquer-muted)] font-light max-w-[54ch]">
              {UI_COPY.ritual.lead[lang]}
            </p>

            {/* Editorial Kitchen Pass Monochrome Photograph */}
            <figure className="mt-8 border border-[var(--hairline-lacquer-strong)] rounded-[var(--radius-sharp)] overflow-hidden bg-[#140409]">
              <img
                src="./assets/zones/chef-kitchen.jpg"
                alt={
                  lang === 'ro'
                    ? 'Chef montând preparate proaspete pe pass-ul bucătăriei food-heals'
                    : 'Chef plating fresh organic dishes along the food-heals stainless kitchen pass'
                }
                className="w-full aspect-[16/10] object-cover object-center"
                loading="eager"
                decoding="sync"
              />
              <figcaption className="px-4 py-3 border-t border-[var(--hairline-lacquer)] flex flex-wrap items-center justify-between gap-2 font-mono-tabular text-[11px] text-[var(--ink-on-lacquer-muted)]">
                <span>{UI_COPY.ritual.passCaptionLeft[lang]}</span>
                <span className="text-[var(--accent-saffron)]">
                  {UI_COPY.ritual.passCaptionRight[lang]}
                </span>
              </figcaption>
            </figure>

            {/* Four Non-Negotiable Kitchen Ledger Promises */}
            <dl className="mt-8 grid grid-cols-1 sm:grid-cols-2 border-t border-[var(--hairline-lacquer)]">
              {UI_COPY.ritual.commitments.map((item, idx) => {
                const icons = [Leaf, Flame, ShieldCheck, Clock];
                const Icon = icons[idx] ?? Leaf;
                return (
                  <div
                    key={item.label.en}
                    className="py-4 sm:pr-4 border-b border-[var(--hairline-lacquer)] flex items-start gap-3"
                  >
                    <Icon
                      size={18}
                      weight="regular"
                      className="text-[var(--accent-saffron)] shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <div>
                      <dt className="font-mono-tabular text-[11px] uppercase tracking-[0.07em] text-[var(--ink-on-lacquer-subtle)]">
                        {item.label[lang]}
                      </dt>
                      <dd className="mt-1 text-sm font-medium text-[var(--ink-on-lacquer)]">
                        {item.value[lang]}
                      </dd>
                    </div>
                  </div>
                );
              })}
            </dl>
          </div>

          {/* Right Column — Sequential 01..04 Ritual Connected by Live Saffron Spine */}
          <div className="lg:col-span-7 lg:pl-4">
            <div className="relative">
              <div
                aria-hidden="true"
                className="hidden sm:block absolute left-[23px] top-10 bottom-10 w-px bg-[var(--hairline-lacquer-strong)]"
              />
              <div
                aria-hidden="true"
                style={{
                  height: `${(activeStepIndex / (RITUAL_STEPS.length - 1)) * 82}%`,
                }}
                className="hidden sm:block absolute left-[22.5px] top-10 w-[2px] bg-[var(--accent-saffron)] transition-all duration-500 ease-out"
              />

              <ol className="space-y-4">
                {RITUAL_STEPS.map((step, index) => {
                  const isActive = index === activeStepIndex;
                  return (
                    <li key={step.number} className="relative sm:pl-16">
                      <span
                        aria-hidden="true"
                        className={`hidden sm:inline-flex absolute left-0 top-6 w-12 h-12 rounded-full items-center justify-center font-mono-tabular text-sm font-semibold border transition-colors ${
                          isActive
                            ? 'bg-[var(--accent-saffron)] text-[var(--accent-saffron-ink)] border-[var(--accent-saffron)]'
                            : 'bg-[#260811] text-[var(--ink-on-lacquer-muted)] border-[var(--hairline-lacquer-strong)]'
                        }`}
                      >
                        {step.number}
                      </span>

                      <button
                        type="button"
                        onClick={() => setActiveStepIndex(index)}
                        onMouseEnter={() => setActiveStepIndex(index)}
                        aria-expanded={isActive}
                        className={`w-full text-left p-5 sm:p-6 rounded-[var(--radius-sharp)] border transition-colors cursor-pointer ${
                          isActive
                            ? 'bg-[var(--surface-lacquer-elevated)] border-[var(--accent-saffron)]/70'
                            : 'bg-white/[0.015] border-[var(--hairline-lacquer)] hover:border-[var(--hairline-lacquer-strong)]'
                        }`}
                      >
                        {/* Heading Leads Directly (Zero Eyebrow Above Heading) */}
                        <h3 className="font-display text-xl sm:text-[1.45rem] font-semibold text-[var(--ink-on-lacquer)]">
                          <span className="sm:hidden font-mono-tabular text-sm text-[var(--accent-saffron)] mr-2.5">
                            {step.number}
                          </span>
                          {step.title[lang]}
                        </h3>

                        <p className="mt-2 text-sm sm:text-[15px] leading-[1.6] text-[var(--ink-on-lacquer-muted)] font-light max-w-[62ch]">
                          {step.detail[lang]}
                        </p>

                        {/* Hairline Metadata Footer Below Copy */}
                        <div className="mt-4 pt-3 border-t border-[var(--hairline-lacquer)] flex flex-wrap items-center justify-between gap-2 font-mono-tabular text-[11px] tracking-[0.06em]">
                          <span className="text-[var(--accent-saffron)]">
                            {step.timeWindow[lang]}
                          </span>
                          <span className="text-[var(--ink-on-lacquer-subtle)]">
                            {step.metric[lang]}
                          </span>
                        </div>
                      </button>
                    </li>
                  );
                })}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
