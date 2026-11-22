import { useEffect, useState } from 'react';
import {
  CheckCircle,
  Clock,
  MapPin,
  Minus,
  Plus,
  Trash,
  X,
} from '@phosphor-icons/react';
import {
  DELIVERY_ZONES,
  DISHES,
  SUBSCRIPTION_PLANS,
  UI_COPY,
  formatPrice,
  type DeliveryZoneId,
  type Lang,
  type SubscriptionPlan,
} from '../data/content';
import type { PlanCadence } from './SubscriptionLedger';

interface BagDrawerProps {
  open: boolean;
  lang: Lang;
  activeZoneId: DeliveryZoneId;
  onSelectZone: (id: DeliveryZoneId) => void;
  bagQuantities: Record<string, number>;
  selectedPlanId: SubscriptionPlan['id'] | null;
  selectedCadence: PlanCadence;
  onUpdateQty: (dishId: string, delta: number) => void;
  onRemovePlan: () => void;
  onClearOrder: () => void;
  onClose: () => void;
}

export function BagDrawer({
  open,
  lang,
  activeZoneId,
  onSelectZone,
  bagQuantities,
  selectedPlanId,
  selectedCadence,
  onUpdateQty,
  onRemovePlan,
  onClearOrder,
  onClose,
}: BagDrawerProps) {
  const [orderPlaced, setOrderPlaced] = useState(false);

  useEffect(() => {
    if (!open) {
      setOrderPlaced(false);
      return;
    }
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener('keydown', handleKey);
    };
  }, [open, onClose]);

  if (!open) return null;

  const activeZone =
    DELIVERY_ZONES.find((z) => z.id === activeZoneId) ?? DELIVERY_ZONES[0];

  const items = Object.entries(bagQuantities)
    .filter(([, qty]) => qty > 0)
    .map(([id, qty]) => {
      const dish = DISHES.find((d) => d.id === id);
      return dish ? { dish, qty } : null;
    })
    .filter(Boolean) as { dish: (typeof DISHES)[number]; qty: number }[];

  const selectedPlan = selectedPlanId
    ? SUBSCRIPTION_PLANS.find((p) => p.id === selectedPlanId) ?? null
    : null;

  const dishCount = items.reduce((sum, item) => sum + item.qty, 0);
  const dishesEur = items.reduce((sum, item) => sum + item.dish.priceEur * item.qty, 0);
  const dishesRon = items.reduce((sum, item) => sum + item.dish.priceRon * item.qty, 0);

  const planEur = selectedPlan
    ? selectedCadence === 'monthly'
      ? selectedPlan.monthlyEur
      : selectedPlan.weeklyEur
    : 0;
  const planRon = selectedPlan
    ? selectedCadence === 'monthly'
      ? selectedPlan.monthlyRon
      : selectedPlan.weeklyRon
    : 0;

  const freeDelivery =
    dishCount >= 2 ||
    (selectedPlan !== null && selectedPlan.id !== 'starter') ||
    (dishCount === 0 && selectedPlan !== null);

  const deliveryFeeEur = freeDelivery || (dishCount === 0 && !selectedPlan) ? 0 : 2.5;
  const deliveryFeeRon = freeDelivery || (dishCount === 0 && !selectedPlan) ? 0 : 12;

  const totalEur = dishesEur + planEur + deliveryFeeEur;
  const totalRon = dishesRon + planRon + deliveryFeeRon;
  const isEmpty = items.length === 0 && !selectedPlan;

  return (
    <div
      className="fixed inset-0 z-50 flex justify-end bg-[#130408]/75"
      role="dialog"
      aria-modal="true"
      aria-labelledby="bag-drawer-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="w-full max-w-md h-full bg-[var(--surface-chalk)] text-[var(--ink-on-chalk)] flex flex-col border-l border-[var(--hairline-chalk-strong)] shadow-[-20px_0_60px_rgba(12,2,6,0.45)]">
        {/* Drawer Header in Oxblood Lacquer */}
        <div className="lacquer-surface px-6 py-5 border-b border-[var(--hairline-lacquer)]">
          <div className="flex items-center justify-between gap-3">
            <h2
              id="bag-drawer-title"
              className="font-display text-2xl font-semibold text-[var(--ink-on-lacquer)]"
            >
              {UI_COPY.drawer.title[lang]}
            </h2>
            <button
              type="button"
              onClick={onClose}
              aria-label={UI_COPY.modal.close[lang]}
              className="w-9 h-9 rounded-full border border-[var(--hairline-lacquer-strong)] text-[var(--ink-on-lacquer)] inline-flex items-center justify-center hover:border-[var(--accent-saffron)] hover:text-[var(--accent-saffron)] transition-colors cursor-pointer"
            >
              <X size={17} weight="bold" aria-hidden="true" />
            </button>
          </div>

          {/* Active Zone Selector synced right in the Bag */}
          <div className="mt-4 pt-3.5 border-t border-[var(--hairline-lacquer)] flex items-center justify-between gap-2 text-xs">
            <label
              htmlFor="bag-zone-select"
              className="inline-flex items-center gap-1.5 text-[var(--ink-on-lacquer-muted)]"
            >
              <MapPin size={14} className="text-[var(--accent-saffron)]" aria-hidden="true" />
              <span>{UI_COPY.drawer.deliveringTo[lang]}:</span>
            </label>
            <div className="flex items-center gap-2 font-mono-tabular">
              <select
                id="bag-zone-select"
                value={activeZoneId}
                onChange={(e) => onSelectZone(e.target.value as DeliveryZoneId)}
                className="bg-[#1a050b] border border-[var(--hairline-lacquer-strong)] rounded-[3px] px-2 py-1 text-xs text-[var(--accent-saffron)] font-semibold cursor-pointer"
              >
                {DELIVERY_ZONES.map((z) => (
                  <option key={z.id} value={z.id}>
                    {z.name}
                  </option>
                ))}
              </select>
              <span className="inline-flex items-center gap-1 text-[var(--ink-on-lacquer-muted)]">
                <Clock size={12} aria-hidden="true" />
                {activeZone.etaMinutes}m
              </span>
            </div>
          </div>
        </div>

        {/* Drawer Body */}
        <div className="flex-1 overflow-y-auto px-6 py-6">
          {orderPlaced ? (
            <div role="status" aria-live="polite" className="py-10 text-center">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-[var(--accent-jade-light)] text-[var(--accent-jade)]">
                <CheckCircle size={30} weight="fill" aria-hidden="true" />
              </div>
              <h3 className="mt-4 font-display text-2xl font-semibold text-[var(--ink-on-chalk)]">
                {UI_COPY.drawer.confirmedTitle[lang]}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-[var(--ink-on-chalk-muted)]">
                {UI_COPY.drawer.confirmedBody[lang]}
              </p>
              <p className="mt-3 font-mono-tabular text-xs text-[var(--accent-jade)] font-semibold">
                {activeZone.name} · {activeZone.etaMinutes} min · {activeZone.hubLabel[lang]}
              </p>
              <button
                type="button"
                onClick={() => {
                  onClearOrder();
                  setOrderPlaced(false);
                  onClose();
                }}
                className="mt-6 inline-flex items-center justify-center rounded-[var(--radius-control)] bg-[var(--surface-lacquer)] text-[var(--ink-on-lacquer)] px-6 py-3 text-sm font-semibold cursor-pointer hover:bg-[#3a0f1e]"
              >
                {UI_COPY.drawer.newOrder[lang]}
              </button>
            </div>
          ) : isEmpty ? (
            <div className="py-12 text-center">
              <h3 className="font-display text-2xl font-semibold text-[var(--ink-on-chalk)]">
                {UI_COPY.drawer.emptyTitle[lang]}
              </h3>
              <p className="mt-2 text-sm text-[var(--ink-on-chalk-muted)]">
                {UI_COPY.drawer.emptyBody[lang]}
              </p>
              <a
                href="#menu"
                onClick={onClose}
                className="mt-6 inline-flex items-center justify-center rounded-[var(--radius-control)] bg-[var(--surface-lacquer)] text-[var(--ink-on-lacquer)] px-6 py-3 text-sm font-semibold no-underline"
              >
                {UI_COPY.drawer.browseMenu[lang]}
              </a>
            </div>
          ) : (
            <div className="space-y-6">
              {selectedPlan && (
                <div className="p-4 rounded-[var(--radius-sharp)] bg-[var(--surface-lacquer)] text-[var(--ink-on-lacquer)] border border-[var(--accent-saffron)]/50">
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="font-display text-lg font-semibold">
                        {selectedPlan.name[lang]}
                      </h3>
                      <p className="font-mono-tabular text-[11px] text-[var(--accent-saffron)] mt-0.5">
                        {UI_COPY.drawer.selectedPlanLabel[lang]} ·{' '}
                        {formatPrice(planEur, planRon, lang)}{' '}
                        {selectedPlan.id === 'starter'
                          ? UI_COPY.plans.perMealSingle[lang]
                          : selectedCadence === 'monthly'
                            ? UI_COPY.plans.perMonth[lang]
                            : UI_COPY.plans.perWeek[lang]}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={onRemovePlan}
                      aria-label={UI_COPY.drawer.removePlan[lang]}
                      className="text-xs text-[var(--ink-on-lacquer-muted)] hover:text-[var(--accent-saffron)] underline cursor-pointer"
                    >
                      {UI_COPY.drawer.removePlan[lang]}
                    </button>
                  </div>
                </div>
              )}

              {items.length > 0 && (
                <ul className="divide-y divide-[var(--hairline-chalk)] border-t border-b border-[var(--hairline-chalk)]">
                  {items.map(({ dish, qty }) => (
                    <li key={dish.id} className="py-4 flex items-center gap-3.5">
                      <img
                        src={dish.image}
                        alt={dish.name[lang]}
                        className="w-16 h-16 rounded-[3px] object-cover shrink-0 border border-[var(--hairline-chalk)]"
                      />
                      <div className="flex-1 min-w-0">
                        <h3 className="font-display text-base font-semibold leading-snug text-[var(--ink-on-chalk)] truncate">
                          {dish.name[lang]}
                        </h3>
                        <p className="font-mono-tabular text-xs text-[var(--ink-on-chalk-subtle)] mt-0.5">
                          {dish.proteinGrams}g {UI_COPY.hero.proteinUnit[lang]} ·{' '}
                          {formatPrice(dish.priceEur, dish.priceRon, lang)}
                        </p>

                        <div className="mt-2.5 flex items-center justify-between gap-2">
                          <div className="inline-flex items-center border border-[var(--hairline-chalk-strong)] rounded-[3px] bg-white">
                            <button
                              type="button"
                              onClick={() => onUpdateQty(dish.id, -1)}
                              aria-label={`${UI_COPY.drawer.removeOneAria[lang]} ${dish.name[lang]}`}
                              className="w-7 h-7 inline-flex items-center justify-center text-[var(--ink-on-chalk)] hover:bg-[var(--surface-chalk-warm)] cursor-pointer"
                            >
                              {qty === 1 ? (
                                <Trash size={13} aria-hidden="true" />
                              ) : (
                                <Minus size={13} aria-hidden="true" />
                              )}
                            </button>
                            <span className="w-7 text-center font-mono-tabular text-xs font-semibold">
                              {qty}
                            </span>
                            <button
                              type="button"
                              onClick={() => onUpdateQty(dish.id, 1)}
                              aria-label={`${UI_COPY.drawer.addOneAria[lang]} ${dish.name[lang]}`}
                              className="w-7 h-7 inline-flex items-center justify-center text-[var(--ink-on-chalk)] hover:bg-[var(--surface-chalk-warm)] cursor-pointer"
                            >
                              <Plus size={13} aria-hidden="true" />
                            </button>
                          </div>

                          <span className="font-mono-tabular text-sm font-semibold text-[var(--ink-on-chalk)]">
                            {formatPrice(dish.priceEur * qty, dish.priceRon * qty, lang)}
                          </span>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}

              {!freeDelivery && dishCount === 1 && (
                <p className="text-xs font-mono-tabular text-[var(--accent-jade)] bg-[var(--accent-jade-light)] px-3.5 py-2.5 rounded-[3px]">
                  {UI_COPY.drawer.freeThresholdHint[lang]}
                </p>
              )}
            </div>
          )}
        </div>

        {/* Drawer Footer Checkout Summary */}
        {!isEmpty && !orderPlaced && (
          <div className="border-t border-[var(--hairline-chalk-strong)] bg-[var(--surface-chalk-card)] px-6 py-5 space-y-4">
            <dl className="space-y-2 text-sm">
              <div className="flex items-center justify-between text-[var(--ink-on-chalk-muted)]">
                <dt>{UI_COPY.drawer.subtotal[lang]}</dt>
                <dd className="font-mono-tabular">
                  {formatPrice(dishesEur + planEur, dishesRon + planRon, lang)}
                </dd>
              </div>
              <div className="flex items-center justify-between text-[var(--ink-on-chalk-muted)]">
                <dt>{UI_COPY.drawer.delivery[lang]}</dt>
                <dd className="font-mono-tabular text-[var(--accent-jade)] font-semibold">
                  {deliveryFeeEur === 0
                    ? UI_COPY.drawer.free[lang]
                    : formatPrice(deliveryFeeEur, deliveryFeeRon, lang)}
                </dd>
              </div>
              <div className="pt-2.5 border-t border-[var(--hairline-chalk)] flex items-center justify-between font-semibold text-base text-[var(--ink-on-chalk)]">
                <dt>{UI_COPY.drawer.total[lang]}</dt>
                <dd className="font-display text-2xl tabular-nums">
                  {formatPrice(totalEur, totalRon, lang)}
                </dd>
              </div>
            </dl>

            <button
              type="button"
              onClick={() => setOrderPlaced(true)}
              className="w-full py-3.5 px-6 rounded-[var(--radius-control)] bg-[var(--accent-saffron)] hover:bg-[var(--accent-saffron-hover)] text-[var(--accent-saffron-ink)] font-semibold text-sm transition-colors cursor-pointer"
            >
              {UI_COPY.drawer.checkoutBtn[lang]}
            </button>

            <p className="text-[11px] text-center font-mono-tabular text-[var(--ink-on-chalk-subtle)]">
              {UI_COPY.drawer.previewDisclaimer[lang]}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
