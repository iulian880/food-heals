import { useState } from 'react';
import { Check } from '@phosphor-icons/react';
import {
  SUBSCRIPTION_PLANS,
  UI_COPY,
  formatPrice,
  type Lang,
  type SubscriptionPlan,
} from '../data/content';

export type PlanCadence = 'monthly' | 'weekly';

interface SubscriptionLedgerProps {
  lang: Lang;
  selectedPlanId: SubscriptionPlan['id'] | null;
  selectedCadence: PlanCadence;
  onSelectPlan: (plan: SubscriptionPlan, cadence: PlanCadence) => void;
}

export function SubscriptionLedger({
  lang,
  selectedPlanId,
  selectedCadence,
  onSelectPlan,
}: SubscriptionLedgerProps) {
  const [cadence, setCadence] = useState<PlanCadence>(selectedCadence);

  return (
    <section
      id="plans"
      aria-labelledby="plans-heading"
      className="lacquer-surface border-b border-[var(--hairline-lacquer)] scroll-mt-16"
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-10 xl:px-12 py-20 sm:py-28">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-10 border-b border-[var(--hairline-lacquer)]">
          <div className="max-w-[60ch]">
            <h2
              id="plans-heading"
              className="font-display text-[2.2rem] sm:text-[2.95rem] leading-[1.06] font-semibold tracking-[-0.02em] text-[var(--ink-on-lacquer)]"
            >
              {UI_COPY.plans.heading[lang]}
            </h2>
            <p className="mt-3.5 text-base leading-relaxed text-[var(--ink-on-lacquer-muted)] font-light">
              {UI_COPY.plans.lead[lang]}
            </p>
          </div>

          {/* Cadence Toggle */}
          <div
            className="inline-flex items-center self-start lg:self-auto rounded-[var(--radius-control)] border border-[var(--hairline-lacquer-strong)] p-1 bg-[#1b050c]"
            role="group"
            aria-label={UI_COPY.plans.cadenceAria[lang]}
          >
            <button
              type="button"
              onClick={() => setCadence('monthly')}
              aria-pressed={cadence === 'monthly'}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-[3px] transition-colors cursor-pointer ${
                cadence === 'monthly'
                  ? 'bg-[var(--accent-saffron)] text-[var(--accent-saffron-ink)] font-semibold'
                  : 'text-[var(--ink-on-lacquer-muted)] hover:text-[var(--ink-on-lacquer)]'
              }`}
            >
              {UI_COPY.plans.monthlyToggle[lang]}
            </button>
            <button
              type="button"
              onClick={() => setCadence('weekly')}
              aria-pressed={cadence === 'weekly'}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-[3px] transition-colors cursor-pointer ${
                cadence === 'weekly'
                  ? 'bg-[var(--accent-saffron)] text-[var(--accent-saffron-ink)] font-semibold'
                  : 'text-[var(--ink-on-lacquer-muted)] hover:text-[var(--ink-on-lacquer)]'
              }`}
            >
              {UI_COPY.plans.weeklyToggle[lang]}
            </button>
          </div>
        </div>

        {/* Hairline Architectural Plan Ledger */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {SUBSCRIPTION_PLANS.map((plan) => {
            const isSelected =
              selectedPlanId === plan.id && selectedCadence === cadence;
            const isHighlighted = Boolean(plan.highlighted);
            const displayEur =
              cadence === 'monthly' ? plan.monthlyEur : plan.weeklyEur;
            const displayRon =
              cadence === 'monthly' ? plan.monthlyRon : plan.weeklyRon;
            const periodLabel =
              plan.id === 'starter'
                ? UI_COPY.plans.perMealSingle[lang]
                : cadence === 'monthly'
                  ? UI_COPY.plans.perMonth[lang]
                  : UI_COPY.plans.perWeek[lang];

            return (
              <article
                key={plan.id}
                className={`flex flex-col justify-between p-6 sm:p-8 rounded-[var(--radius-sharp)] border transition-colors ${
                  isHighlighted
                    ? 'bg-[var(--surface-lacquer-elevated)] border-[var(--accent-saffron)]/75'
                    : 'bg-white/[0.02] border-[var(--hairline-lacquer)] hover:border-[var(--hairline-lacquer-strong)]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 min-h-[24px]">
                    <h3 className="font-display text-2xl sm:text-[1.75rem] font-semibold text-[var(--ink-on-lacquer)]">
                      {plan.name[lang]}
                    </h3>
                    {isHighlighted && (
                      <span className="font-mono-tabular text-[11px] uppercase tracking-[0.08em] px-2.5 py-0.5 rounded-[2px] bg-[var(--accent-saffron)] text-[var(--accent-saffron-ink)] font-semibold">
                        {UI_COPY.plans.mostChosen[lang]}
                      </span>
                    )}
                  </div>

                  <p className="mt-2.5 text-sm leading-relaxed text-[var(--ink-on-lacquer-muted)] font-light">
                    {plan.tagline[lang]}
                  </p>

                  {/* Price Band */}
                  <div className="mt-6 py-5 border-t border-b border-[var(--hairline-lacquer)]">
                    <div className="flex items-baseline gap-2">
                      <span className="font-display text-4xl sm:text-[2.85rem] font-semibold text-[var(--ink-on-lacquer)] tabular-nums">
                        {formatPrice(displayEur, displayRon, lang)}
                      </span>
                      <span className="font-mono-tabular text-xs text-[var(--ink-on-lacquer-subtle)]">
                        {periodLabel}
                      </span>
                    </div>
                    <p className="mt-1.5 font-mono-tabular text-xs text-[var(--accent-saffron)]">
                      {formatPrice(plan.perMealEur, plan.perMealRon, lang)}{' '}
                      {UI_COPY.plans.perMealBreakdown[lang]}
                    </p>
                  </div>

                  {/* Inclusions */}
                  <ul className="mt-6 space-y-3 text-sm text-[var(--ink-on-lacquer-muted)]">
                    {plan.features[lang].map((feature) => (
                      <li key={feature} className="flex items-start gap-2.5">
                        <Check
                          size={16}
                          weight="bold"
                          className="text-[var(--accent-saffron)] shrink-0 mt-0.5"
                          aria-hidden="true"
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-4">
                  <button
                    type="button"
                    onClick={() => onSelectPlan(plan, cadence)}
                    className={`w-full py-3.5 px-5 rounded-[var(--radius-control)] text-sm font-semibold transition-colors cursor-pointer ${
                      isSelected
                        ? 'bg-[var(--accent-jade)] text-[var(--ink-on-lacquer)]'
                        : isHighlighted
                          ? 'bg-[var(--accent-saffron)] hover:bg-[var(--accent-saffron-hover)] text-[var(--accent-saffron-ink)]'
                          : 'border border-[var(--hairline-lacquer-strong)] hover:border-[var(--accent-saffron)] text-[var(--ink-on-lacquer)] hover:text-[var(--accent-saffron)]'
                    }`}
                  >
                    {isSelected
                      ? UI_COPY.plans.selectedPlan[lang]
                      : UI_COPY.plans.choosePlan[lang]}
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
