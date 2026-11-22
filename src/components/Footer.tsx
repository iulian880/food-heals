import {
  DELIVERY_ZONES,
  UI_COPY,
  type DeliveryZoneId,
  type Lang,
} from '../data/content';

interface FooterProps {
  lang: Lang;
  onChangeLang: (lang: Lang) => void;
  activeZoneId: DeliveryZoneId;
  onSelectZone: (id: DeliveryZoneId) => void;
}

export function Footer({
  lang,
  onChangeLang,
  activeZoneId,
  onSelectZone,
}: FooterProps) {
  return (
    <footer className="lacquer-surface border-t border-[var(--hairline-lacquer)]">
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-10 xl:px-12 py-16 sm:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[var(--hairline-lacquer)]">
          {/* Brand Column */}
          <div className="md:col-span-5">
            <a
              href="#top"
              className="font-display text-3xl font-semibold tracking-tight text-[var(--ink-on-lacquer)] no-underline"
            >
              food-heals
            </a>
            <p className="mt-4 text-sm leading-relaxed text-[var(--ink-on-lacquer-muted)] max-w-[46ch] font-light">
              {UI_COPY.footer.manifesto[lang]}
            </p>

            <div className="mt-6 inline-flex items-center rounded-full border border-[var(--hairline-lacquer-strong)] p-1 text-xs font-mono-tabular">
              <button
                type="button"
                onClick={() => onChangeLang('en')}
                aria-pressed={lang === 'en'}
                className={`px-3 py-1 rounded-full transition-colors cursor-pointer ${
                  lang === 'en'
                    ? 'bg-[var(--accent-saffron)] text-[var(--accent-saffron-ink)] font-semibold'
                    : 'text-[var(--ink-on-lacquer-muted)] hover:text-[var(--ink-on-lacquer)]'
                }`}
              >
                English
              </button>
              <button
                type="button"
                onClick={() => onChangeLang('ro')}
                aria-pressed={lang === 'ro'}
                className={`px-3 py-1 rounded-full transition-colors cursor-pointer ${
                  lang === 'ro'
                    ? 'bg-[var(--accent-saffron)] text-[var(--accent-saffron-ink)] font-semibold'
                    : 'text-[var(--ink-on-lacquer-muted)] hover:text-[var(--ink-on-lacquer)]'
                }`}
              >
                Română
              </button>
            </div>
          </div>

          {/* Explore Links */}
          <div className="md:col-span-2">
            <h3 className="font-mono-tabular text-[11px] uppercase tracking-[0.08em] text-[var(--ink-on-lacquer-subtle)]">
              {UI_COPY.footer.navHeading[lang]}
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm text-[var(--ink-on-lacquer-muted)]">
              <li>
                <a href="#menu" className="hover:text-[var(--accent-saffron)] no-underline transition-colors">
                  {UI_COPY.nav.menu[lang]}
                </a>
              </li>
              <li>
                <a href="#ritual" className="hover:text-[var(--accent-saffron)] no-underline transition-colors">
                  {UI_COPY.nav.ritual[lang]}
                </a>
              </li>
              <li>
                <a href="#zones" className="hover:text-[var(--accent-saffron)] no-underline transition-colors">
                  {UI_COPY.nav.zones[lang]}
                </a>
              </li>
              <li>
                <a href="#plans" className="hover:text-[var(--accent-saffron)] no-underline transition-colors">
                  {UI_COPY.nav.plans[lang]}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[var(--accent-saffron)] no-underline transition-colors">
                  {UI_COPY.nav.concierge[lang]}
                </a>
              </li>
            </ul>
          </div>

          {/* Active Timișoara Metropolitan Zones */}
          <div className="md:col-span-2">
            <h3 className="font-mono-tabular text-[11px] uppercase tracking-[0.08em] text-[var(--ink-on-lacquer-subtle)]">
              {UI_COPY.footer.zonesHeading[lang]}
            </h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {DELIVERY_ZONES.map((zone) => {
                const isSelected = zone.id === activeZoneId;
                return (
                  <li key={zone.id}>
                    <a
                      href="#zones"
                      onClick={() => onSelectZone(zone.id)}
                      className={`no-underline transition-colors ${
                        isSelected
                          ? 'text-[var(--accent-saffron)] font-medium'
                          : 'text-[var(--ink-on-lacquer-muted)] hover:text-[var(--ink-on-lacquer)]'
                      }`}
                    >
                      {zone.name} · {zone.etaMinutes}m
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Kitchen Pass Column */}
          <div className="md:col-span-3">
            <h3 className="font-mono-tabular text-[11px] uppercase tracking-[0.08em] text-[var(--ink-on-lacquer-subtle)]">
              {UI_COPY.footer.kitchenHeading[lang]}
            </h3>
            <p className="mt-4 text-sm text-[var(--ink-on-lacquer)]">
              {UI_COPY.footer.address[lang]}
            </p>
            <p className="mt-1.5 font-mono-tabular text-xs text-[var(--accent-saffron)]">
              {UI_COPY.footer.hours[lang]}
            </p>
            <p className="mt-4 text-xs text-[var(--ink-on-lacquer-subtle)] font-mono-tabular">
              github.com/iulian880/food-heals
            </p>
          </div>
        </div>

        <div className="pt-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-[var(--ink-on-lacquer-subtle)] font-mono-tabular">
          <p>{UI_COPY.footer.copyright[lang]}</p>
          <p>TIMIȘOARA · GIROC · DUMBRĂVIȚA · MOȘNIȚA · GHIRODA</p>
        </div>
      </div>
    </footer>
  );
}
