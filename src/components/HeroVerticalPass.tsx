import { useEffect, useState } from 'react';
import {
  Bag,
  CaretLeft,
  CaretRight,
  Check,
  List,
  MapPin,
  Plus,
  X,
} from '@phosphor-icons/react';
import {
  DELIVERY_ZONES,
  DISHES,
  UI_COPY,
  formatPrice,
  type DeliveryZoneId,
  type Dish,
  type Lang,
} from '../data/content';

interface HeroVerticalPassProps {
  lang: Lang;
  onChangeLang: (lang: Lang) => void;
  activeZoneId: DeliveryZoneId;
  onSelectZone: (id: DeliveryZoneId) => void;
  bagCount: number;
  bagTotalEur: number;
  bagTotalRon: number;
  onOpenBag: () => void;
  onAddDish: (dish: Dish) => void;
  onInspectDish: (dish: Dish) => void;
}

export function HeroVerticalPass({
  lang,
  onChangeLang,
  activeZoneId,
  onSelectZone,
  bagCount,
  bagTotalEur,
  bagTotalRon,
  onOpenBag,
  onAddDish,
  onInspectDish,
}: HeroVerticalPassProps) {
  const heroDishes = DISHES.filter((d) => d.featuredInHero).sort(
    (a, b) => (a.heroOrder ?? 99) - (b.heroOrder ?? 99)
  );
  const [heroIndex, setHeroIndex] = useState(0);
  const [justAddedId, setJustAddedId] = useState<string | null>(null);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [showStickyRail, setShowStickyRail] = useState(false);

  const activeDish = heroDishes[heroIndex] ?? DISHES[0];
  const activeZone =
    DELIVERY_ZONES.find((z) => z.id === activeZoneId) ?? DELIVERY_ZONES[0];

  useEffect(() => {
    const onScroll = () => {
      setShowStickyRail(window.scrollY > 540);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleQuickAdd = (dish: Dish) => {
    onAddDish(dish);
    setJustAddedId(dish.id);
    window.setTimeout(() => {
      setJustAddedId((curr) => (curr === dish.id ? null : curr));
    }, 1400);
  };

  const stepHeroDish = (delta: number) => {
    setHeroIndex((prev) => (prev + delta + heroDishes.length) % heroDishes.length);
  };

  const bagLabel =
    bagCount > 0
      ? `${UI_COPY.nav.bag[lang]} (${bagCount} · ${formatPrice(
          bagTotalEur,
          bagTotalRon,
          lang
        )})`
      : `${UI_COPY.nav.bag[lang]} (0)`;

  return (
    <header className="relative w-full lacquer-surface" id="top">
      {/* Persistent Desktop Sticky Kitchen Rail (appears smoothly after scrolling past hero) */}
      <div
        className={`hidden lg:block fixed top-0 inset-x-0 z-40 bg-[#260811]/96 border-b border-[var(--hairline-lacquer-strong)] transition-transform duration-300 ease-out ${
          showStickyRail ? 'translate-y-0' : '-translate-y-full pointer-events-none'
        }`}
        aria-hidden={!showStickyRail}
      >
        <div className="max-w-[1440px] mx-auto px-10 xl:px-12 h-15 flex items-center justify-between gap-6">
          <div className="flex items-center gap-7">
            <a
              href="#top"
              tabIndex={showStickyRail ? 0 : -1}
              className="font-display text-2xl font-semibold tracking-tight text-[var(--ink-on-lacquer)] no-underline"
            >
              food-heals
            </a>
            <div className="flex items-center gap-6 text-sm text-[var(--ink-on-lacquer-muted)]">
              <a
                href="#menu"
                tabIndex={showStickyRail ? 0 : -1}
                className="hover:text-[var(--ink-on-lacquer)] transition-colors no-underline"
              >
                {UI_COPY.nav.menu[lang]}
              </a>
              <a
                href="#ritual"
                tabIndex={showStickyRail ? 0 : -1}
                className="hover:text-[var(--ink-on-lacquer)] transition-colors no-underline"
              >
                {UI_COPY.nav.ritual[lang]}
              </a>
              <a
                href="#zones"
                tabIndex={showStickyRail ? 0 : -1}
                className="hover:text-[var(--ink-on-lacquer)] transition-colors no-underline"
              >
                {UI_COPY.nav.zones[lang]}
              </a>
              <a
                href="#plans"
                tabIndex={showStickyRail ? 0 : -1}
                className="hover:text-[var(--ink-on-lacquer)] transition-colors no-underline"
              >
                {UI_COPY.nav.plans[lang]}
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <a
              href="#zones"
              tabIndex={showStickyRail ? 0 : -1}
              className="inline-flex items-center gap-1.5 font-mono-tabular text-xs text-[var(--accent-saffron)] hover:underline no-underline"
            >
              <MapPin size={14} weight="fill" aria-hidden="true" />
              <span>
                {activeZone.name} · {activeZone.etaMinutes} min
              </span>
            </a>

            <div
              className="inline-flex items-center rounded-full border border-[var(--hairline-lacquer-strong)] px-1 py-0.5 text-xs font-mono-tabular"
              role="group"
              aria-label={UI_COPY.nav.languageAria[lang]}
            >
              <button
                type="button"
                tabIndex={showStickyRail ? 0 : -1}
                onClick={() => onChangeLang('en')}
                aria-pressed={lang === 'en'}
                className={`px-2 py-0.5 rounded-full transition-colors cursor-pointer ${
                  lang === 'en'
                    ? 'bg-[var(--accent-saffron)] text-[var(--accent-saffron-ink)] font-semibold'
                    : 'text-[var(--ink-on-lacquer-muted)] hover:text-[var(--ink-on-lacquer)]'
                }`}
              >
                EN
              </button>
              <button
                type="button"
                tabIndex={showStickyRail ? 0 : -1}
                onClick={() => onChangeLang('ro')}
                aria-pressed={lang === 'ro'}
                className={`px-2 py-0.5 rounded-full transition-colors cursor-pointer ${
                  lang === 'ro'
                    ? 'bg-[var(--accent-saffron)] text-[var(--accent-saffron-ink)] font-semibold'
                    : 'text-[var(--ink-on-lacquer-muted)] hover:text-[var(--ink-on-lacquer)]'
                }`}
              >
                RO
              </button>
            </div>

            <button
              type="button"
              tabIndex={showStickyRail ? 0 : -1}
              onClick={onOpenBag}
              className="inline-flex items-center gap-2 rounded-[var(--radius-control)] bg-[var(--accent-saffron)] hover:bg-[var(--accent-saffron-hover)] text-[var(--accent-saffron-ink)] px-3.5 py-2 text-xs font-semibold transition-colors cursor-pointer tabular-nums"
            >
              <Bag size={15} weight="bold" aria-hidden="true" />
              <span>{bagLabel}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile / Tablet Compact Sticky Top Bar (below lg) */}
      <div className="flex lg:hidden items-center justify-between px-4 sm:px-6 h-16 border-b border-[var(--hairline-lacquer)] sticky top-0 z-40 bg-[#260811]/96">
        <a
          href="#top"
          className="font-display text-2xl font-semibold tracking-tight text-[var(--ink-on-lacquer)] no-underline"
        >
          food-heals
        </a>

        <div className="flex items-center gap-2.5">
          <div
            className="inline-flex items-center rounded-full border border-[var(--hairline-lacquer-strong)] p-0.5 text-xs font-mono-tabular"
            role="group"
            aria-label={UI_COPY.nav.languageAria[lang]}
          >
            <button
              type="button"
              onClick={() => onChangeLang('en')}
              aria-pressed={lang === 'en'}
              className={`px-2 py-1 rounded-full transition-colors cursor-pointer ${
                lang === 'en'
                  ? 'bg-[var(--accent-saffron)] text-[var(--accent-saffron-ink)] font-semibold'
                  : 'text-[var(--ink-on-lacquer-muted)] hover:text-[var(--ink-on-lacquer)]'
              }`}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => onChangeLang('ro')}
              aria-pressed={lang === 'ro'}
              className={`px-2 py-1 rounded-full transition-colors cursor-pointer ${
                lang === 'ro'
                  ? 'bg-[var(--accent-saffron)] text-[var(--accent-saffron-ink)] font-semibold'
                  : 'text-[var(--ink-on-lacquer-muted)] hover:text-[var(--ink-on-lacquer)]'
              }`}
            >
              RO
            </button>
          </div>

          <button
            type="button"
            onClick={onOpenBag}
            aria-label={bagLabel}
            className="inline-flex items-center gap-1.5 rounded-[var(--radius-control)] border border-[var(--hairline-lacquer-strong)] px-3 py-1.5 text-xs font-medium text-[var(--ink-on-lacquer)] hover:border-[var(--accent-saffron)] transition-colors cursor-pointer tabular-nums"
          >
            <Bag size={15} weight="regular" aria-hidden="true" />
            <span>{bagCount}</span>
          </button>

          <button
            type="button"
            onClick={() => setMobileNavOpen((o) => !o)}
            aria-expanded={mobileNavOpen}
            aria-label={
              mobileNavOpen ? UI_COPY.nav.closeMenu[lang] : UI_COPY.nav.openMenu[lang]
            }
            className="inline-flex items-center justify-center w-9 h-9 rounded-[var(--radius-control)] border border-[var(--hairline-lacquer-strong)] text-[var(--ink-on-lacquer)] cursor-pointer"
          >
            {mobileNavOpen ? (
              <X size={18} aria-hidden="true" />
            ) : (
              <List size={18} aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Navigation */}
      {mobileNavOpen && (
        <nav
          aria-label={UI_COPY.nav.mobileNavAria[lang]}
          className="lg:hidden border-b border-[var(--hairline-lacquer)] bg-[#1d060d] px-5 py-4 flex flex-col gap-3"
        >
          {[
            { href: '#menu', label: UI_COPY.nav.menu[lang] },
            { href: '#ritual', label: UI_COPY.nav.ritual[lang] },
            { href: '#zones', label: UI_COPY.nav.zones[lang] },
            { href: '#plans', label: UI_COPY.nav.plans[lang] },
          ].map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMobileNavOpen(false)}
              className="py-2 text-base font-medium text-[var(--ink-on-lacquer)] border-b border-[var(--hairline-lacquer)] last:border-b-0 no-underline"
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}

      {/* Option 3 — 46% / 54% Vertical Editorial Dish Column & Lacquer Supper-Club Pass */}
      <div className="grid grid-cols-1 lg:grid-cols-[46fr_54fr] lg:min-h-[600px] lg:h-[75vh] lg:max-h-[710px]">
        {/* LEFT 46% — Full-Height Edge-to-Edge Dark Stoneware Culinary Portrait */}
        <div className="relative order-2 lg:order-1 min-h-[300px] sm:min-h-[400px] lg:min-h-0 overflow-hidden bg-[#120b0d] group">
          <img
            key={activeDish.id}
            src={activeDish.image}
            alt={activeDish.name[lang]}
            className={`w-full h-full object-cover object-center transition-all duration-700 ease-out ${
              activeDish.tightCrop
                ? 'scale-[1.16] group-hover:scale-[1.19]'
                : 'group-hover:scale-[1.03]'
            }`}
            loading="eager"
            decoding="sync"
          />

          {/* Subtle bottom vignette so floating lacquer badge keeps crisp contrast */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#140409]/85 via-[#140409]/35 to-transparent"
          />

          {/* Single-Row Signature Dish Badge + Switcher (never stacks or truncates price) */}
          <div className="absolute bottom-3.5 left-3.5 right-3.5 sm:bottom-5 sm:left-5 sm:right-5 xl:bottom-6 xl:left-6 xl:right-6 flex items-center justify-between gap-2">
            <div className="inline-flex items-center gap-2 xl:gap-3 rounded-full bg-[#1a050b]/90 border border-[var(--hairline-lacquer-strong)] px-3 xl:px-3.5 py-1.5 sm:py-2 text-[11px] xl:text-sm text-[var(--ink-on-lacquer)] shadow-[0_12px_32px_rgba(0,0,0,0.45)]">
              <button
                type="button"
                onClick={() => onInspectDish(activeDish)}
                className="inline-flex items-center whitespace-nowrap text-left hover:text-[var(--accent-saffron)] transition-colors cursor-pointer"
              >
                <span className="font-medium">{UI_COPY.hero.signatureTag[lang]}</span>
                <span className="mx-1.5 xl:mx-2 text-[var(--ink-on-lacquer-subtle)]">·</span>
                <span className="font-mono-tabular font-medium text-[var(--accent-saffron)]">
                  {formatPrice(activeDish.priceEur, activeDish.priceRon, lang)}
                </span>
              </button>

              <span className="h-3.5 w-px bg-[var(--hairline-lacquer-strong)] shrink-0" aria-hidden="true" />

              <button
                type="button"
                onClick={() => handleQuickAdd(activeDish)}
                className="inline-flex items-center gap-1 whitespace-nowrap font-medium text-[var(--ink-on-lacquer)] hover:text-[var(--accent-saffron)] transition-colors cursor-pointer shrink-0"
              >
                {justAddedId === activeDish.id ? (
                  <>
                    <Check size={13} weight="bold" className="text-[var(--accent-saffron)]" aria-hidden="true" />
                    <span className="text-[var(--accent-saffron)]">{UI_COPY.hero.added[lang]}</span>
                  </>
                ) : (
                  <>
                    <Plus size={13} weight="bold" aria-hidden="true" />
                    <span>{UI_COPY.hero.quickAdd[lang].replace('+ ', '')}</span>
                  </>
                )}
              </button>
            </div>

            <div className="inline-flex items-center gap-0.5 sm:gap-1 rounded-full bg-[#1a050b]/88 border border-[var(--hairline-lacquer-strong)] p-0.5 sm:p-1 shrink-0">
              <button
                type="button"
                onClick={() => stepHeroDish(-1)}
                aria-label={UI_COPY.hero.prevDish[lang]}
                className="w-6 h-6 sm:w-7 sm:h-7 rounded-full inline-flex items-center justify-center text-[var(--ink-on-lacquer)] hover:bg-white/10 transition-colors cursor-pointer"
              >
                <CaretLeft size={13} weight="bold" aria-hidden="true" />
              </button>
              <span className="px-1 font-mono-tabular text-[10px] sm:text-[11px] text-[var(--ink-on-lacquer-muted)]">
                0{heroIndex + 1}/0{heroDishes.length}
              </span>
              <button
                type="button"
                onClick={() => stepHeroDish(1)}
                aria-label={UI_COPY.hero.nextDish[lang]}
                className="w-6 h-6 sm:w-7 sm:h-7 rounded-full inline-flex items-center justify-center text-[var(--ink-on-lacquer)] hover:bg-white/10 transition-colors cursor-pointer"
              >
                <CaretRight size={13} weight="bold" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT 54% — Deep Fig-Oxblood Lacquer Supper-Club Pass Panel */}
        <div className="order-1 lg:order-2 flex flex-col justify-between px-4 sm:px-8 lg:px-6 xl:px-10 2xl:px-12 pb-7 pt-5 lg:py-0 min-w-0">
          {/* Desktop Integrated Top Nav inside Right Lacquer Panel */}
          <nav
            aria-label={UI_COPY.nav.primaryNavAria[lang]}
            className="hidden lg:flex items-center justify-between gap-2.5 xl:gap-4 py-5 border-b border-[var(--hairline-lacquer)] min-w-0"
          >
            <a
              href="#top"
              className="font-display text-[1.35rem] xl:text-[1.6rem] leading-none font-semibold tracking-tight text-[var(--ink-on-lacquer)] no-underline shrink-0 whitespace-nowrap"
            >
              food-heals
            </a>

            <div className="flex items-center gap-3.5 xl:gap-6 text-[13px] xl:text-sm text-[var(--ink-on-lacquer-muted)]">
              <a
                href="#menu"
                className="hover:text-[var(--ink-on-lacquer)] transition-colors no-underline whitespace-nowrap"
              >
                {UI_COPY.nav.menu[lang]}
              </a>
              <a
                href="#ritual"
                className="hover:text-[var(--ink-on-lacquer)] transition-colors no-underline whitespace-nowrap"
              >
                {UI_COPY.nav.ritual[lang]}
              </a>
              <a
                href="#zones"
                className="hover:text-[var(--ink-on-lacquer)] transition-colors no-underline whitespace-nowrap"
              >
                {UI_COPY.nav.zones[lang]}
              </a>
              <a
                href="#plans"
                className="hover:text-[var(--ink-on-lacquer)] transition-colors no-underline whitespace-nowrap"
              >
                {UI_COPY.nav.plans[lang]}
              </a>
            </div>

            <div className="flex items-center gap-2 xl:gap-3 shrink-0">
              <div
                className="inline-flex items-center rounded-full border border-[var(--hairline-lacquer-strong)] px-0.5 xl:px-1 py-0.5 text-[11px] xl:text-xs font-mono-tabular"
                role="group"
                aria-label={UI_COPY.nav.languageAria[lang]}
              >
                <button
                  type="button"
                  onClick={() => onChangeLang('en')}
                  aria-pressed={lang === 'en'}
                  className={`px-1.5 xl:px-2 py-0.5 rounded-full transition-colors cursor-pointer ${
                    lang === 'en'
                      ? 'bg-[var(--accent-saffron)] text-[var(--accent-saffron-ink)] font-semibold'
                      : 'text-[var(--ink-on-lacquer-muted)] hover:text-[var(--ink-on-lacquer)]'
                  }`}
                >
                  EN
                </button>
                <button
                  type="button"
                  onClick={() => onChangeLang('ro')}
                  aria-pressed={lang === 'ro'}
                  className={`px-1.5 xl:px-2 py-0.5 rounded-full transition-colors cursor-pointer ${
                    lang === 'ro'
                      ? 'bg-[var(--accent-saffron)] text-[var(--accent-saffron-ink)] font-semibold'
                      : 'text-[var(--ink-on-lacquer-muted)] hover:text-[var(--ink-on-lacquer)]'
                  }`}
                >
                  RO
                </button>
              </div>

              <button
                type="button"
                onClick={onOpenBag}
                aria-label={bagLabel}
                className="inline-flex items-center gap-1.5 xl:gap-2 rounded-[var(--radius-control)] border border-[var(--hairline-lacquer-strong)] px-2.5 xl:px-3.5 py-2 text-xs xl:text-[13px] font-medium text-[var(--ink-on-lacquer)] hover:border-[var(--accent-saffron)] hover:text-[var(--accent-saffron)] transition-colors cursor-pointer tabular-nums whitespace-nowrap"
              >
                <Bag size={15} weight="regular" aria-hidden="true" />
                <span className="xl:hidden">
                  {UI_COPY.nav.bag[lang]} ({bagCount})
                </span>
                <span className="hidden xl:inline">{bagLabel}</span>
              </button>
            </div>
          </nav>

          {/* Hero Core Thesis, 5-Zone Board, Macro Ledger, Kinetic Saffron Elbow & CTAs */}
          <div className="flex-1 flex flex-col justify-center py-3 lg:py-6">
            <h1 className="hero-stagger font-display text-[2.35rem] sm:text-[3.3rem] lg:text-[clamp(2.95rem,4.35vw,4.35rem)] leading-[1.02] font-semibold tracking-[-0.022em] text-[var(--ink-on-lacquer)]">
              {UI_COPY.hero.headlineLine1[lang]}
              <br />
              {UI_COPY.hero.headlineLine2[lang]}
            </h1>

            <p className="hero-stagger mt-3.5 sm:mt-5 max-w-[56ch] text-[15px] sm:text-[1.08rem] leading-[1.55] text-[var(--ink-on-lacquer-muted)] font-light">
              {UI_COPY.hero.subcopy[lang]}
            </p>

            {/* Illuminated 5-Zone Board — All 5 zones visible at once on 390px AND desktop */}
            <div className="hero-stagger mt-5 sm:mt-7 border-t border-b border-[var(--hairline-lacquer)]">
              <div
                className="flex flex-wrap gap-1.5 py-2.5 sm:py-0 sm:grid sm:grid-cols-5 sm:gap-0 sm:divide-x sm:divide-[var(--hairline-lacquer)]"
                role="tablist"
                aria-label={UI_COPY.nav.zones[lang]}
              >
                {DELIVERY_ZONES.map((zone) => {
                  const isActive = zone.id === activeZoneId;
                  return (
                    <button
                      key={zone.id}
                      type="button"
                      role="tab"
                      aria-selected={isActive}
                      onClick={() => onSelectZone(zone.id)}
                      className={`relative py-1.5 px-2.5 sm:py-3 sm:px-1.5 text-center font-mono-tabular text-[11px] xl:text-xs tracking-[0.05em] transition-colors cursor-pointer rounded-[3px] sm:rounded-none border sm:border-0 ${
                        isActive
                          ? 'text-[var(--accent-saffron)] font-semibold bg-white/[0.05] border-[var(--accent-saffron)]/70'
                          : 'text-[var(--ink-on-lacquer-muted)] border-[var(--hairline-lacquer)] hover:text-[var(--ink-on-lacquer)] hover:bg-white/[0.02]'
                      }`}
                    >
                      <span className="block whitespace-nowrap">{zone.shortLabel}</span>
                      {isActive && (
                        <span
                          aria-hidden="true"
                          className="hidden sm:block absolute inset-x-0 bottom-0 h-[2.5px] bg-[var(--accent-saffron)]"
                        />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Hairline-Ruled Tabular Macro Strip reflecting Active Signature Dish + Active Zone ETA */}
              <div className="border-t border-[var(--hairline-lacquer)] py-2.5 sm:py-3 flex flex-wrap items-center justify-between gap-x-3 gap-y-1.5 font-mono-tabular text-xs xl:text-[13px] text-[var(--ink-on-lacquer)]">
                <div className="flex flex-wrap items-center gap-x-2.5 sm:gap-x-3 gap-y-1">
                  <span>
                    {activeDish.proteinGrams}g {UI_COPY.hero.proteinUnit[lang]}
                  </span>
                  <span className="text-[var(--hairline-lacquer-strong)]" aria-hidden="true">
                    |
                  </span>
                  <span>{activeDish.calories} kcal</span>
                  <span className="text-[var(--hairline-lacquer-strong)]" aria-hidden="true">
                    |
                  </span>
                  <span className="text-[var(--accent-saffron)]">
                    {activeZone.etaMinutes} min · {activeZone.name}
                  </span>
                  <span className="hidden sm:inline text-[var(--hairline-lacquer-strong)]" aria-hidden="true">
                    |
                  </span>
                  <span className="hidden sm:inline text-[var(--ink-on-lacquer-muted)]">
                    {activeDish.primaryBenefit[lang]}
                  </span>
                </div>

                <span className="inline-flex items-center px-2.5 py-0.5 rounded-[var(--radius-sharp)] bg-[var(--accent-jade)] text-[var(--ink-on-lacquer)] text-[11px] tracking-[0.08em] font-medium">
                  {UI_COPY.hero.organicBadge[lang]}
                </span>
              </div>
            </div>

            {/* Kinetic Saffron Elbow Hairline (present on BOTH mobile & desktop) -> Primary & Secondary CTAs */}
            <div className="hero-stagger relative mt-5 sm:mt-6 flex flex-wrap items-center gap-3 sm:gap-3.5 pl-8 sm:pl-14">
              <svg
                aria-hidden="true"
                viewBox="0 0 56 54"
                fill="none"
                className="absolute left-0 -top-5 sm:-top-6 w-8 h-[42px] sm:w-14 sm:h-[54px] pointer-events-none"
              >
                <path
                  d="M1 0 V46 H54"
                  stroke="#E5A91C"
                  strokeWidth="1.5"
                  className="elbow-path-animate"
                />
                <circle cx="54" cy="46" r="2.4" fill="#E5A91C" />
              </svg>

              <a
                href="#menu"
                data-primary-action="true"
                className="inline-flex items-center justify-center rounded-[var(--radius-control)] bg-[var(--accent-saffron)] hover:bg-[var(--accent-saffron-hover)] text-[var(--accent-saffron-ink)] font-semibold text-sm sm:text-[15px] px-5 sm:px-6 py-3 sm:py-3.5 transition-colors no-underline shadow-[0_6px_22px_rgba(229,169,28,0.22)]"
              >
                {UI_COPY.hero.primaryCta[lang]}
              </a>

              <a
                href="#plans"
                className="inline-flex items-center justify-center rounded-[var(--radius-control)] border border-[var(--hairline-lacquer-strong)] hover:border-[var(--accent-saffron)] text-[var(--ink-on-lacquer)] hover:text-[var(--accent-saffron)] font-medium text-sm sm:text-[15px] px-5 sm:px-6 py-3 sm:py-3.5 transition-colors no-underline"
              >
                {UI_COPY.hero.secondaryCta[lang]}
              </a>
            </div>
          </div>

          {/* Single-line dish & pass footer inside right panel on desktop */}
          <div className="hidden lg:flex items-center justify-between gap-4 py-3.5 border-t border-[var(--hairline-lacquer)] text-[11px] xl:text-xs text-[var(--ink-on-lacquer-subtle)] font-mono-tabular">
            <span className="truncate">
              {activeDish.code} — {activeDish.name[lang]}
            </span>
            <span className="shrink-0 whitespace-nowrap">{activeZone.hubLabel[lang]}</span>
          </div>
        </div>
      </div>
    </header>
  );
}
