import { ArrowRight, CheckCircle, Clock, MapPin, Plant } from '@phosphor-icons/react';
import {
  DELIVERY_ZONES,
  UI_COPY,
  type DeliveryZoneId,
  type Lang,
} from '../data/content';

interface DeliveryZonesProps {
  lang: Lang;
  activeZoneId: DeliveryZoneId;
  onSelectZone: (id: DeliveryZoneId) => void;
}

export function DeliveryZones({
  lang,
  activeZoneId,
  onSelectZone,
}: DeliveryZonesProps) {
  const activeZone =
    DELIVERY_ZONES.find((z) => z.id === activeZoneId) ?? DELIVERY_ZONES[0];

  return (
    <section
      id="zones"
      aria-labelledby="zones-heading"
      className="chalk-surface border-b border-[var(--hairline-chalk)] scroll-mt-16"
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-10 xl:px-12 py-20 sm:py-28">
        <div className="max-w-[68ch]">
          <h2
            id="zones-heading"
            className="font-display text-[2.2rem] sm:text-[2.95rem] leading-[1.06] font-semibold tracking-[-0.02em] text-[var(--ink-on-chalk)]"
          >
            {UI_COPY.zones.heading[lang]}
          </h2>
          <p className="mt-3.5 text-base leading-relaxed text-[var(--ink-on-chalk-muted)]">
            {UI_COPY.zones.lead[lang]}
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* Left Illuminated Architectural Zone Board (All 5 Metropolitan Zones) */}
          <div className="lg:col-span-5 flex flex-col border-t border-[var(--hairline-chalk-strong)]">
            {DELIVERY_ZONES.map((zone) => {
              const isSelected = zone.id === activeZoneId;
              return (
                <button
                  key={zone.id}
                  type="button"
                  onClick={() => onSelectZone(zone.id)}
                  aria-pressed={isSelected}
                  className={`group w-full text-left px-4 sm:px-5 py-4 sm:py-5 border-b border-[var(--hairline-chalk)] transition-colors cursor-pointer flex items-center justify-between gap-4 ${
                    isSelected
                      ? 'bg-[var(--surface-lacquer)] text-[var(--ink-on-lacquer)]'
                      : 'hover:bg-[var(--surface-chalk-warm)] text-[var(--ink-on-chalk)]'
                  }`}
                >
                  <div className="min-w-0">
                    <div className="flex items-center gap-2.5">
                      <span
                        aria-hidden="true"
                        className={`w-2 h-2 rounded-full shrink-0 ${
                          isSelected
                            ? 'bg-[var(--accent-saffron)]'
                            : 'bg-[var(--hairline-chalk-strong)] group-hover:bg-[var(--accent-jade)]'
                        }`}
                      />
                      <span className="font-display text-xl sm:text-2xl font-semibold tracking-tight">
                        {zone.name}
                      </span>
                    </div>
                    <p
                      className={`mt-1 pl-4.5 text-xs sm:text-[13px] truncate ${
                        isSelected
                          ? 'text-[var(--ink-on-lacquer-muted)]'
                          : 'text-[var(--ink-on-chalk-muted)]'
                      }`}
                    >
                      {zone.hubLabel[lang]}
                    </p>
                  </div>

                  <div className="shrink-0 text-right font-mono-tabular">
                    <span
                      className={`block text-sm font-semibold ${
                        isSelected
                          ? 'text-[var(--accent-saffron)]'
                          : 'text-[var(--ink-on-chalk)]'
                      }`}
                    >
                      {zone.etaMinutes} min
                    </span>
                    <span
                      className={`text-[11px] ${
                        isSelected
                          ? 'text-[var(--ink-on-lacquer-subtle)]'
                          : 'text-[var(--ink-on-chalk-subtle)]'
                      }`}
                    >
                      {zone.hours}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Live Active Zone Architectural Plate & Telemetry */}
          <div className="lg:col-span-7 border border-[var(--hairline-chalk-strong)] rounded-[var(--radius-sharp)] bg-[var(--surface-chalk-card)] overflow-hidden flex flex-col">
            <div className="relative aspect-[16/9] sm:aspect-[21/10] w-full overflow-hidden bg-[#1a050b]">
              <img
                key={activeZone.id}
                src={activeZone.image}
                alt={`${activeZone.name} — food-heals delivery zone`}
                className="w-full h-full object-cover object-center transition-opacity duration-500"
                loading="eager"
                decoding="sync"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#19050b]/88 via-[#19050b]/35 to-transparent"
              />
              <div className="absolute bottom-4 left-5 right-5 flex flex-wrap items-end justify-between gap-2 text-[var(--ink-on-lacquer)]">
                <div>
                  <h3 className="font-display text-2xl sm:text-3xl font-semibold leading-tight">
                    {activeZone.name}
                  </h3>
                  <span className="mt-1 font-mono-tabular text-[11px] tracking-[0.07em] text-[var(--accent-saffron)] block">
                    {activeZone.coordinates}
                  </span>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-[var(--radius-sharp)] bg-[var(--accent-jade)] text-[var(--ink-on-lacquer)] px-3 py-1 text-xs font-medium">
                  <CheckCircle size={14} weight="fill" aria-hidden="true" />
                  {UI_COPY.zones.activeZoneBadge[lang]}
                </span>
              </div>
            </div>

            <div className="p-5 sm:p-7 flex-1 flex flex-col justify-between gap-6">
              <p className="text-[15px] sm:text-base leading-relaxed text-[var(--ink-on-chalk)]">
                {activeZone.localHighlight[lang]}
              </p>

              <dl className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-t border-b border-[var(--hairline-chalk)] py-4 text-sm">
                <div className="flex items-start gap-2.5">
                  <MapPin
                    size={17}
                    className="text-[var(--accent-jade)] shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <div>
                    <dt className="font-mono-tabular text-[11px] uppercase tracking-[0.06em] text-[var(--ink-on-chalk-subtle)]">
                      {UI_COPY.zones.neighborhoodsLabel[lang]}
                    </dt>
                    <dd className="mt-1 text-[var(--ink-on-chalk)] leading-snug">
                      {activeZone.neighborhoods[lang]}
                    </dd>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Plant
                    size={17}
                    className="text-[var(--accent-jade)] shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <div>
                    <dt className="font-mono-tabular text-[11px] uppercase tracking-[0.06em] text-[var(--ink-on-chalk-subtle)]">
                      {UI_COPY.zones.farmsLabel[lang]}
                    </dt>
                    <dd className="mt-1 text-[var(--ink-on-chalk)] leading-snug">
                      {activeZone.partnerFarms[lang]}
                    </dd>
                  </div>
                </div>
              </dl>

              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2 font-mono-tabular text-xs text-[var(--ink-on-chalk-muted)]">
                  <Clock size={15} aria-hidden="true" />
                  <span>
                    {UI_COPY.zones.avgEtaLabel[lang]}:{' '}
                    <strong className="text-[var(--ink-on-chalk)]">
                      {activeZone.etaMinutes} min
                    </strong>
                    {' · '}
                    {activeZone.dailyCapacity[lang]}
                  </span>
                </div>

                <a
                  href="#menu"
                  className="inline-flex items-center gap-2 rounded-[var(--radius-control)] bg-[var(--surface-lacquer)] hover:bg-[#3a0f1e] text-[var(--ink-on-lacquer)] px-4 py-2.5 text-xs sm:text-sm font-semibold no-underline transition-colors"
                >
                  <span>{UI_COPY.hero.primaryCta[lang]}</span>
                  <ArrowRight size={15} aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
