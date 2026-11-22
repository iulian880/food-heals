import { useEffect, useState } from 'react';
import { Leaf, Minus, Plus, X } from '@phosphor-icons/react';
import { UI_COPY, formatPrice, type Dish, type Lang } from '../data/content';

interface DishDetailModalProps {
  dish: Dish | null;
  lang: Lang;
  onClose: () => void;
  onAddMultiple: (dish: Dish, quantity: number) => void;
}

export function DishDetailModal({
  dish,
  lang,
  onClose,
  onAddMultiple,
}: DishDetailModalProps) {
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    setQuantity(1);
  }, [dish?.id]);

  useEffect(() => {
    if (!dish) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [dish, onClose]);

  if (!dish) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#130408]/78"
      role="dialog"
      aria-modal="true"
      aria-labelledby="dish-modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-[var(--radius-sharp)] border border-[var(--hairline-chalk-strong)] bg-[var(--surface-chalk)] text-[var(--ink-on-chalk)] shadow-[0_24px_64px_rgba(12,2,6,0.55)]">
        {/* Top Photo Band */}
        <div className="relative aspect-[16/9] sm:aspect-[21/10] w-full bg-[#1a050b] overflow-hidden">
          <img
            src={dish.image}
            alt={dish.name[lang]}
            className="w-full h-full object-cover object-center"
          />
          <button
            type="button"
            onClick={onClose}
            aria-label={UI_COPY.modal.close[lang]}
            className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[#1a050b]/85 border border-[var(--hairline-lacquer-strong)] text-[var(--ink-on-lacquer)] inline-flex items-center justify-center hover:border-[var(--accent-saffron)] hover:text-[var(--accent-saffron)] transition-colors cursor-pointer"
          >
            <X size={18} weight="bold" aria-hidden="true" />
          </button>

          <div className="absolute bottom-4 left-5 flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-[2px] bg-[var(--accent-jade)] text-[var(--ink-on-lacquer)] font-mono-tabular text-[11px] font-semibold tracking-[0.07em]">
              <Leaf size={13} weight="fill" aria-hidden="true" />
              {UI_COPY.hero.organicBadge[lang]}
            </span>
            <span className="px-2.5 py-1 rounded-[2px] bg-[#19050b]/86 text-[var(--accent-saffron)] font-mono-tabular text-[11px] font-medium">
              {dish.code} · {dish.glycemicLoad[lang]}
            </span>
          </div>
        </div>

        {/* Specimen Content */}
        <div className="p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
            <div>
              <h2
                id="dish-modal-title"
                className="font-display text-2xl sm:text-3xl font-semibold leading-tight text-[var(--ink-on-chalk)]"
              >
                {dish.name[lang]}
              </h2>
              <p className="mt-2 text-sm sm:text-[15px] leading-relaxed text-[var(--ink-on-chalk-muted)] max-w-[58ch]">
                {dish.description[lang]}
              </p>
            </div>
            <div className="font-display text-2xl sm:text-3xl font-semibold text-[var(--ink-on-chalk)] shrink-0 tabular-nums">
              {formatPrice(dish.priceEur, dish.priceRon, lang)}
            </div>
          </div>

          {/* Hairline-Ruled 4-Column Macro Ledger */}
          <div className="mt-6">
            <h3 className="font-mono-tabular text-[11px] uppercase tracking-[0.07em] text-[var(--ink-on-chalk-subtle)]">
              {UI_COPY.modal.macrosTitle[lang]} · {dish.calories} kcal · {dish.prepMinutes} min
            </h3>
            <div className="mt-2 grid grid-cols-4 border-t border-b border-[var(--hairline-chalk-strong)] divide-x divide-[var(--hairline-chalk)] py-3 text-center font-mono-tabular">
              <div className="px-2">
                <span className="block text-base sm:text-lg font-semibold text-[var(--ink-on-chalk)]">
                  {dish.proteinGrams}g
                </span>
                <span className="text-[11px] text-[var(--ink-on-chalk-subtle)]">
                  {UI_COPY.modal.protein[lang]}
                </span>
              </div>
              <div className="px-2">
                <span className="block text-base sm:text-lg font-semibold text-[var(--ink-on-chalk)]">
                  {dish.carbsGrams}g
                </span>
                <span className="text-[11px] text-[var(--ink-on-chalk-subtle)]">
                  {UI_COPY.modal.carbs[lang]}
                </span>
              </div>
              <div className="px-2">
                <span className="block text-base sm:text-lg font-semibold text-[var(--ink-on-chalk)]">
                  {dish.fatGrams}g
                </span>
                <span className="text-[11px] text-[var(--ink-on-chalk-subtle)]">
                  {UI_COPY.modal.fat[lang]}
                </span>
              </div>
              <div className="px-2">
                <span className="block text-base sm:text-lg font-semibold text-[var(--ink-on-chalk)]">
                  {dish.fiberGrams}g
                </span>
                <span className="text-[11px] text-[var(--ink-on-chalk-subtle)]">
                  {UI_COPY.modal.fiber[lang]}
                </span>
              </div>
            </div>
          </div>

          {/* Ingredients & Chef Provenance */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
            <div>
              <h3 className="font-mono-tabular text-[11px] uppercase tracking-[0.07em] text-[var(--ink-on-chalk-subtle)]">
                {UI_COPY.modal.ingredientsTitle[lang]}
              </h3>
              <ul className="mt-2.5 space-y-1.5 text-[var(--ink-on-chalk)]">
                {dish.ingredients[lang].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span
                      aria-hidden="true"
                      className="w-1.5 h-1.5 rounded-full bg-[var(--accent-jade)] mt-2 shrink-0"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <div className="p-4 rounded-[var(--radius-sharp)] bg-[var(--surface-chalk-warm)] border border-[var(--hairline-chalk)]">
                <h3 className="font-mono-tabular text-[11px] uppercase tracking-[0.07em] text-[var(--ink-on-chalk-subtle)]">
                  {UI_COPY.modal.chefNoteTitle[lang]}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-[var(--ink-on-chalk)]">
                  {dish.chefNote[lang]}
                </p>
              </div>

              <div className="space-y-1.5 text-xs">
                <p>
                  <strong className="font-mono-tabular uppercase tracking-[0.05em] text-[var(--ink-on-chalk-subtle)]">
                    {UI_COPY.modal.provenanceTitle[lang]}:{' '}
                  </strong>
                  <span className="text-[var(--ink-on-chalk)]">{dish.farmOrigin[lang]}</span>
                </p>
                <p>
                  <strong className="font-mono-tabular uppercase tracking-[0.05em] text-[var(--ink-on-chalk-subtle)]">
                    {UI_COPY.modal.allergensTitle[lang]}:{' '}
                  </strong>
                  <span className="text-[var(--ink-on-chalk)]">{dish.allergens[lang]}</span>
                </p>
              </div>
            </div>
          </div>

          {/* Modal Sticky Action Footer */}
          <div className="mt-8 pt-5 border-t border-[var(--hairline-chalk-strong)] flex flex-wrap items-center justify-between gap-4">
            <div className="inline-flex items-center border border-[var(--hairline-chalk-strong)] rounded-[var(--radius-control)] bg-white">
              <button
                type="button"
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                aria-label={UI_COPY.modal.decreaseQtyAria[lang]}
                className="w-10 h-10 inline-flex items-center justify-center text-[var(--ink-on-chalk)] hover:bg-[var(--surface-chalk-warm)] cursor-pointer"
              >
                <Minus size={15} weight="bold" aria-hidden="true" />
              </button>
              <span className="w-10 text-center font-mono-tabular text-sm font-semibold">
                {quantity}
              </span>
              <button
                type="button"
                onClick={() => setQuantity((q) => Math.min(12, q + 1))}
                aria-label={UI_COPY.modal.increaseQtyAria[lang]}
                className="w-10 h-10 inline-flex items-center justify-center text-[var(--ink-on-chalk)] hover:bg-[var(--surface-chalk-warm)] cursor-pointer"
              >
                <Plus size={15} weight="bold" aria-hidden="true" />
              </button>
            </div>

            <button
              type="button"
              onClick={() => {
                onAddMultiple(dish, quantity);
                onClose();
              }}
              className="flex-1 sm:flex-none inline-flex items-center justify-center gap-3 rounded-[var(--radius-control)] bg-[var(--surface-lacquer)] hover:bg-[#3a0f1e] text-[var(--ink-on-lacquer)] px-7 py-3.5 text-sm font-semibold transition-colors cursor-pointer tabular-nums"
            >
              <span>{UI_COPY.modal.addToBag[lang]}</span>
              <span className="text-[var(--accent-saffron)]">
                {formatPrice(dish.priceEur * quantity, dish.priceRon * quantity, lang)}
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
