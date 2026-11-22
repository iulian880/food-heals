import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  DISHES,
  SUBSCRIPTION_PLANS,
  UI_COPY,
  type DeliveryZoneId,
  type Dish,
  type Lang,
  type SubscriptionPlan,
} from './data/content';
import { HeroVerticalPass } from './components/HeroVerticalPass';
import { HarvestMenu } from './components/HarvestMenu';
import { CulinaryRitual } from './components/CulinaryRitual';
import { DeliveryZones } from './components/DeliveryZones';
import {
  SubscriptionLedger,
  type PlanCadence,
} from './components/SubscriptionLedger';
import { DinerNotesAndConcierge } from './components/DinerNotesAndConcierge';
import { DishDetailModal } from './components/DishDetailModal';
import { BagDrawer } from './components/BagDrawer';
import { Footer } from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

const INITIAL_BAG: Record<string, number> = {
  'charred-miso-salmon': 1,
  'hokkaido-pumpkin-veloute': 1,
};

export function App() {
  const [lang, setLang] = useState<Lang>(() => {
    try {
      const saved = window.localStorage.getItem('food-heals-lang');
      if (saved === 'en' || saved === 'ro') return saved;
    } catch {
      // Ignore storage access errors
    }
    return 'en';
  });

  const [activeZoneId, setActiveZoneId] = useState<DeliveryZoneId>('timisoara');
  const [bagQuantities, setBagQuantities] = useState<Record<string, number>>(INITIAL_BAG);
  const [selectedPlanId, setSelectedPlanId] = useState<SubscriptionPlan['id'] | null>(null);
  const [selectedCadence, setSelectedCadence] = useState<PlanCadence>('monthly');
  const [inspectedDish, setInspectedDish] = useState<Dish | null>(null);
  const [bagOpen, setBagOpen] = useState(false);

  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title =
      lang === 'ro'
        ? 'food-heals — Mese Organice Gătite de Chefi în 20 de Minute · Timișoara'
        : 'food-heals — Organic Chef Meals Delivered in 20 Minutes · Timișoara';
    try {
      window.localStorage.setItem('food-heals-lang', lang);
    } catch {
      // Ignore storage access errors
    }
  }, [lang]);

  // Orchestrated exponential ease-out motion with strict reduced-motion compliance
  useEffect(() => {
    const mm = gsap.matchMedia();
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      const ctx = gsap.context(() => {
        gsap.from('.hero-stagger', {
          y: 14,
          duration: 0.72,
          stagger: 0.08,
          ease: 'expo.out',
          clearProps: 'transform',
        });

        gsap.utils.toArray<HTMLElement>('.reveal-card').forEach((card, i) => {
          gsap.from(card, {
            y: 16,
            duration: 0.55,
            delay: (i % 4) * 0.05,
            ease: 'expo.out',
            clearProps: 'transform',
            scrollTrigger: {
              trigger: card,
              start: 'top 92%',
              once: true,
            },
          });
        });
      }, rootRef);

      return () => ctx.revert();
    });

    return () => mm.revert();
  }, []);

  const handleAddDish = (dish: Dish, quantity = 1) => {
    setBagQuantities((prev) => ({
      ...prev,
      [dish.id]: (prev[dish.id] ?? 0) + quantity,
    }));
  };

  const handleUpdateQty = (dishId: string, delta: number) => {
    setBagQuantities((prev) => {
      const next = (prev[dishId] ?? 0) + delta;
      if (next <= 0) {
        const clone = { ...prev };
        delete clone[dishId];
        return clone;
      }
      return { ...prev, [dishId]: next };
    });
  };

  const handleSelectPlan = (plan: SubscriptionPlan, cadence: PlanCadence) => {
    setSelectedPlanId(plan.id);
    setSelectedCadence(cadence);
    setBagOpen(true);
  };

  const handleClearOrder = () => {
    setBagQuantities({});
    setSelectedPlanId(null);
  };

  const selectedPlan = selectedPlanId
    ? SUBSCRIPTION_PLANS.find((p) => p.id === selectedPlanId) ?? null
    : null;
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

  const bagTotals = Object.entries(bagQuantities).reduce(
    (acc, [id, qty]) => {
      const dish = DISHES.find((d) => d.id === id);
      if (dish && qty > 0) {
        acc.count += qty;
        acc.eur += dish.priceEur * qty;
        acc.ron += dish.priceRon * qty;
      }
      return acc;
    },
    { count: selectedPlan ? 1 : 0, eur: planEur, ron: planRon }
  );

  return (
    <div ref={rootRef} className="min-h-screen flex flex-col">
      <a href="#main-content" className="skip-link">
        {UI_COPY.skipToContent[lang]}
      </a>

      <HeroVerticalPass
        lang={lang}
        onChangeLang={setLang}
        activeZoneId={activeZoneId}
        onSelectZone={setActiveZoneId}
        bagCount={bagTotals.count}
        bagTotalEur={bagTotals.eur}
        bagTotalRon={bagTotals.ron}
        onOpenBag={() => setBagOpen(true)}
        onAddDish={(dish) => handleAddDish(dish, 1)}
        onInspectDish={setInspectedDish}
      />

      <main id="main-content" className="flex-1">
        <HarvestMenu
          lang={lang}
          bagQuantities={bagQuantities}
          onAddDish={(dish) => handleAddDish(dish, 1)}
          onInspectDish={setInspectedDish}
        />

        <CulinaryRitual lang={lang} />

        <DeliveryZones
          lang={lang}
          activeZoneId={activeZoneId}
          onSelectZone={setActiveZoneId}
        />

        <SubscriptionLedger
          lang={lang}
          selectedPlanId={selectedPlanId}
          selectedCadence={selectedCadence}
          onSelectPlan={handleSelectPlan}
        />

        <DinerNotesAndConcierge
          lang={lang}
          activeZoneId={activeZoneId}
          onInspectDish={setInspectedDish}
        />
      </main>

      <Footer
        lang={lang}
        onChangeLang={setLang}
        activeZoneId={activeZoneId}
        onSelectZone={setActiveZoneId}
      />

      <DishDetailModal
        dish={inspectedDish}
        lang={lang}
        onClose={() => setInspectedDish(null)}
        onAddMultiple={handleAddDish}
      />

      <BagDrawer
        open={bagOpen}
        lang={lang}
        activeZoneId={activeZoneId}
        onSelectZone={setActiveZoneId}
        bagQuantities={bagQuantities}
        selectedPlanId={selectedPlanId}
        selectedCadence={selectedCadence}
        onUpdateQty={handleUpdateQty}
        onRemovePlan={() => setSelectedPlanId(null)}
        onClearOrder={handleClearOrder}
        onClose={() => setBagOpen(false)}
      />
    </div>
  );
}
export default App;
