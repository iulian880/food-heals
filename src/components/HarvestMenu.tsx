import { useMemo, useState } from 'react';
import { Plus, SlidersHorizontal } from '@phosphor-icons/react';
import {
  DISHES,
  UI_COPY,
  formatPrice,
  type DietaryCategory,
  type Dish,
  type Lang,
} from '../data/content';

type SortKey = 'curated' | 'protein' | 'fastest' | 'calories';

interface HarvestMenuProps {
  lang: Lang;
  bagQuantities: Record<string, number>;
  onAddDish: (dish: Dish) => void;
  onInspectDish: (dish: Dish) => void;
}

const FILTER_ORDER: DietaryCategory[] = [
  'all',
  'anti-inflammatory',
  'high-protein',
  'gut-reset',
  'plant-based',
];

// Curated display order so the top menu row opens with distinct dishes from the default Hero Sea Bass
const CURATED_ORDER = [
  'hokkaido-pumpkin-veloute',
  'avocado-sweet-potato-bowl',
  'fire-roasted-pasture-chicken',
  'charred-miso-salmon',
  'beet-hummus-trout-bowl',
  'ginger-tofu-edamame-bowl',
  'sourdough-avocado-tartine',
  'crispy-sea-bass',
];

export function HarvestMenu({
  lang,
  bagQuantities,
  onAddDish,
  onInspectDish,
}: HarvestMenuProps) {
  const [activeFilter, setActiveFilter] = useState<DietaryCategory>('all');
  const [sortBy, setSortBy] = useState<SortKey>('curated');

  const visibleDishes = useMemo(() => {
    const filtered =
      activeFilter === 'all'
        ? DISHES
        : DISHES.filter((dish) => dish.categories.includes(activeFilter));

    if (sortBy === 'protein') {
      return [...filtered].sort((a, b) => b.proteinGrams - a.proteinGrams);
    }
    if (sortBy === 'fastest') {
      return [...filtered].sort((a, b) => a.prepMinutes - b.prepMinutes);
    }
    if (sortBy === 'calories') {
      return [...filtered].sort((a, b) => a.calories - b.calories);
    }
    return [...filtered].sort(
      (a, b) => CURATED_ORDER.indexOf(a.id) - CURATED_ORDER.indexOf(b.id)
    );
  }, [activeFilter, sortBy]);

  return (
    <section
      id="menu"
      aria-labelledby="harvest-menu-heading"
      className="chalk-surface border-b border-[var(--hairline-chalk)]"
    >
      <div className="max-w-[1440px] mx-auto px-5 sm:px-8 lg:px-10 xl:px-12 pt-10 sm:pt-12 pb-20 sm:pb-24">
        {/* Top Row rising cleanly into the bottom of the first viewport */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-[var(--hairline-chalk)]">
          <div>
            <h2
              id="harvest-menu-heading"
              className="font-display text-[2.15rem] sm:text-[2.75rem] lg:text-[3.1rem] leading-[1.06] font-semibold tracking-[-0.02em] text-[var(--ink-on-chalk)]"
            >
              {UI_COPY.menu.heading[lang]}
            </h2>
            <p className="mt-2.5 max-w-[60ch] text-sm sm:text-[15px] leading-relaxed text-[var(--ink-on-chalk-muted)]">
              {UI_COPY.menu.subtitle[lang]}
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-between lg:justify-end gap-x-6 gap-y-3">
            {/* Underlined Editorial Filter Tabs */}
            <div
              className="flex flex-wrap items-center gap-x-5 gap-y-2"
              role="tablist"
              aria-label={UI_COPY.menu.filtersAria[lang]}
            >
              {FILTER_ORDER.map((category) => {
                const isSelected = activeFilter === category;
                return (
                  <button
                    key={category}
                    type="button"
                    role="tab"
                    aria-selected={isSelected}
                    onClick={() => setActiveFilter(category)}
                    className={`relative pb-1.5 text-sm transition-colors cursor-pointer whitespace-nowrap ${
                      isSelected
                        ? 'font-semibold text-[var(--ink-on-chalk)]'
                        : 'text-[var(--ink-on-chalk-muted)] hover:text-[var(--ink-on-chalk)]'
                    }`}
                  >
                    {UI_COPY.menu.filters[category][lang]}
                    {isSelected && (
                      <span
                        aria-hidden="true"
                        className="absolute inset-x-0 bottom-0 h-[2px] bg-[var(--ink-on-chalk)]"
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Compact Sort Selector */}
            <label className="inline-flex items-center gap-2 text-xs font-mono-tabular text-[var(--ink-on-chalk-muted)] border border-[var(--hairline-chalk-strong)] rounded-[var(--radius-sharp)] px-2.5 py-1.5 bg-[var(--surface-chalk-card)]">
              <SlidersHorizontal size={14} aria-hidden="true" />
              <span className="sr-only">{UI_COPY.menu.sortLabel[lang]}</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortKey)}
                className="bg-transparent text-[var(--ink-on-chalk)] text-xs font-medium focus:outline-none cursor-pointer pr-1"
              >
                <option value="curated">{UI_COPY.menu.sortOptions.curated[lang]}</option>
                <option value="protein">{UI_COPY.menu.sortOptions.protein[lang]}</option>
                <option value="fastest">{UI_COPY.menu.sortOptions.fastest[lang]}</option>
                <option value="calories">{UI_COPY.menu.sortOptions.calories[lang]}</option>
              </select>
            </label>
          </div>
        </div>

        {/* 4-Column Unencumbered Architectural Specimen Grid */}
        {visibleDishes.length === 0 ? (
          <div className="py-16 text-center border border-[var(--hairline-chalk)] mt-8 bg-[var(--surface-chalk-card)]">
            <p className="text-[var(--ink-on-chalk-muted)]">
              {UI_COPY.menu.emptyFilter[lang]}
            </p>
            <button
              type="button"
              onClick={() => setActiveFilter('all')}
              className="mt-4 inline-flex items-center px-5 py-2.5 rounded-[var(--radius-control)] bg-[var(--surface-lacquer)] text-[var(--ink-on-lacquer)] text-sm font-medium cursor-pointer"
            >
              {UI_COPY.menu.resetFilter[lang]}
            </button>
          </div>
        ) : (
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 xl:gap-6">
            {visibleDishes.map((dish) => {
              const qty = bagQuantities[dish.id] ?? 0;
              return (
                <article
                  key={dish.id}
                  className="reveal-card group flex flex-col border border-[var(--hairline-chalk)] hover:border-[var(--hairline-chalk-strong)] rounded-[var(--radius-sharp)] bg-[var(--surface-chalk-card)] transition-colors overflow-hidden"
                >
                  {/* Clean Unbadged Studio Culinary Photograph */}
                  <button
                    type="button"
                    onClick={() => onInspectDish(dish)}
                    className="relative aspect-[16/11] w-full overflow-hidden bg-[#1a1214] text-left cursor-pointer block"
                    aria-label={`${dish.name[lang]} — ${UI_COPY.menu.inspect[lang]}`}
                  >
                    <img
                      src={dish.image}
                      alt={dish.name[lang]}
                      className={`w-full h-full object-cover object-center transition-transform duration-700 ease-out ${
                        dish.tightCrop
                          ? 'scale-[1.15] group-hover:scale-[1.2]'
                          : 'dish-photo-zoom'
                      }`}
                      loading="eager"
                      decoding="sync"
                    />
                  </button>

                  {/* Card Body — Heading Leads Directly (Zero Eyebrow Above Heading) */}
                  <div className="flex flex-1 flex-col p-4">
                    <div className="flex items-start justify-between gap-2.5">
                      <h3 className="font-display text-[1.22rem] leading-[1.2] font-semibold text-[var(--ink-on-chalk)]">
                        <button
                          type="button"
                          onClick={() => onInspectDish(dish)}
                          className="text-left hover:text-[#63182f] transition-colors cursor-pointer"
                        >
                          {dish.name[lang]}
                        </button>
                      </h3>
                      <span className="font-mono-tabular text-xs font-semibold text-[var(--ink-on-chalk)] shrink-0 pt-0.5">
                        {formatPrice(dish.priceEur, dish.priceRon, lang)}
                      </span>
                    </div>

                    <p className="mt-1.5 text-[13px] leading-[1.5] text-[var(--ink-on-chalk-muted)] line-clamp-2">
                      {dish.subtitle[lang]}
                    </p>

                    <div className="mt-2.5 flex items-center justify-between gap-2 font-mono-tabular text-[11px] text-[var(--accent-jade)] font-medium">
                      <span>
                        {UI_COPY.hero.organicBadge[lang]} · {dish.primaryBenefit[lang]}
                      </span>
                      <span className="text-[var(--ink-on-chalk-subtle)]">{dish.code}</span>
                    </div>

                    {/* Hairline-Ruled Tabular Macro Ledger */}
                    <div className="mt-auto pt-3.5">
                      <div className="grid grid-cols-3 border-t border-b border-[var(--hairline-chalk)] divide-x divide-[var(--hairline-chalk)] py-2 text-center font-mono-tabular text-[11px]">
                        <div className="px-1">
                          <span className="block font-semibold text-[var(--ink-on-chalk)]">
                            {dish.proteinGrams}g
                          </span>
                          <span className="text-[var(--ink-on-chalk-subtle)]">
                            {UI_COPY.hero.proteinUnit[lang]}
                          </span>
                        </div>
                        <div className="px-1">
                          <span className="block font-semibold text-[var(--ink-on-chalk)]">
                            {dish.calories}
                          </span>
                          <span className="text-[var(--ink-on-chalk-subtle)]">kcal</span>
                        </div>
                        <div className="px-1">
                          <span className="block font-semibold text-[var(--ink-on-chalk)]">
                            {dish.prepMinutes}m
                          </span>
                          <span className="text-[var(--ink-on-chalk-subtle)]">
                            {UI_COPY.menu.prepUnit[lang]}
                          </span>
                        </div>
                      </div>

                      <div className="mt-3 flex items-center justify-between gap-2">
                        <button
                          type="button"
                          onClick={() => onInspectDish(dish)}
                          className="text-xs font-medium text-[var(--ink-on-chalk-muted)] hover:text-[var(--ink-on-chalk)] underline underline-offset-4 cursor-pointer py-1.5"
                        >
                          {UI_COPY.menu.inspect[lang]}
                        </button>

                        <button
                          type="button"
                          onClick={() => onAddDish(dish)}
                          className={`inline-flex items-center gap-1.5 rounded-[var(--radius-sharp)] px-3.5 py-2 text-xs font-semibold transition-colors cursor-pointer tabular-nums ${
                            qty > 0
                              ? 'bg-[var(--surface-lacquer)] text-[var(--accent-saffron)] hover:bg-[#380e1b]'
                              : 'bg-[var(--accent-jade)] text-[var(--ink-on-lacquer)] hover:bg-[#1b492f]'
                          }`}
                        >
                          <Plus size={13} weight="bold" aria-hidden="true" />
                          <span>
                            {qty > 0
                              ? `${qty} ${UI_COPY.menu.inBag[lang]}`
                              : UI_COPY.menu.orderBtn[lang]}
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
