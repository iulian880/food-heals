export type Lang = 'en' | 'ro';

export type DietaryCategory =
  | 'all'
  | 'anti-inflammatory'
  | 'high-protein'
  | 'gut-reset'
  | 'plant-based';

export type DeliveryZoneId =
  | 'timisoara'
  | 'giroc'
  | 'dumbravita'
  | 'mosnita'
  | 'ghiroda';

export interface BilingualText {
  en: string;
  ro: string;
}

export interface Dish {
  id: string;
  code: string;
  image: string;
  tightCrop?: boolean;
  featuredInHero?: boolean;
  heroOrder?: number;
  name: BilingualText;
  subtitle: BilingualText;
  description: BilingualText;
  chefNote: BilingualText;
  priceEur: number;
  priceRon: number;
  proteinGrams: number;
  carbsGrams: number;
  fatGrams: number;
  fiberGrams: number;
  calories: number;
  prepMinutes: number;
  glycemicLoad: BilingualText;
  primaryBenefit: BilingualText;
  categories: Exclude<DietaryCategory, 'all'>[];
  ingredients: {
    en: string[];
    ro: string[];
  };
  allergens: BilingualText;
  farmOrigin: BilingualText;
}

export interface DeliveryZone {
  id: DeliveryZoneId;
  name: string;
  shortLabel: string;
  etaMinutes: number;
  neighborhoods: BilingualText;
  hubLabel: BilingualText;
  hours: string;
  image: string;
  dailyCapacity: BilingualText;
  localHighlight: BilingualText;
  partnerFarms: BilingualText;
  coordinates: string;
}

export interface RitualStep {
  number: string;
  timeWindow: BilingualText;
  title: BilingualText;
  detail: BilingualText;
  metric: BilingualText;
}

export interface SubscriptionPlan {
  id: 'starter' | 'pro' | 'ritual';
  name: BilingualText;
  tagline: BilingualText;
  mealsPerMonth: number;
  mealsPerWeek: number;
  monthlyEur: number;
  monthlyRon: number;
  weeklyEur: number;
  weeklyRon: number;
  perMealEur: number;
  perMealRon: number;
  highlighted?: boolean;
  features: {
    en: string[];
    ro: string[];
  };
}

export interface DinerNote {
  id: string;
  dishId: string;
  quote: BilingualText;
  author: string;
  zone: string;
  favoriteDish: BilingualText;
}

export const DISHES: Dish[] = [
  {
    id: 'charred-miso-salmon',
    code: 'FH-01',
    image: './assets/dishes/salmon-dark.jpg',
    tightCrop: true,
    featuredInHero: true,
    heroOrder: 2,
    name: {
      en: 'Charred Wild Salmon & Broccolini',
      ro: 'Somon Sălbatic cu Miso & Broccolini',
    },
    subtitle: {
      en: 'White-miso glaze, jasmine rice, charred organic broccolini & fresh cilantro',
      ro: 'Glazură de miso alb, orez aromat la abur, broccolini organic tras la foc & coriandru',
    },
    description: {
      en: 'Line-caught wild salmon seared crisp over cast iron with fermented white miso, paired with tender-stem organic broccolini and slow-steamed heirloom rice.',
      ro: 'File de somon sălbatic rumenit pe fontă cu miso alb fermentat natural, alături de broccolini organic fraged și orez gătit lent la abur.',
    },
    chefNote: {
      en: 'Seared to order at 240°C so the skin blisters while the omega-rich center stays silky in thermal stoneware.',
      ro: 'Fript la comandă la 240°C pentru crustă caramelizată și interior suculent, bogat în Omega-3, păstrat impecabil în ambalaj termo-ceramic.',
    },
    priceEur: 14.9,
    priceRon: 74,
    proteinGrams: 42,
    carbsGrams: 44,
    fatGrams: 19,
    fiberGrams: 8,
    calories: 540,
    prepMinutes: 18,
    glycemicLoad: { en: 'Low GL · 9', ro: 'IG Scăzut · 9' },
    primaryBenefit: { en: 'Anti-Inflammatory', ro: 'Antiinflamator' },
    categories: ['anti-inflammatory', 'high-protein'],
    ingredients: {
      en: [
        'Wild-caught Atlantic salmon (190g)',
        'Unpasteurized white miso & ginger glaze',
        'Organic tender-stem broccolini',
        'Steamed heirloom rice',
        'Fresh coriander & cold-pressed sesame',
      ],
      ro: [
        'Somon sălbatic de captură (190g)',
        'Glazură de miso alb nepasteurizat și ghimbir',
        'Broccolini organic fraged',
        'Orez gătit la abur',
        'Coriandru proaspăt și susan presat la rece',
      ],
    },
    allergens: { en: 'Fish, Soy, Sesame', ro: 'Pește, Soia, Susan' },
    farmOrigin: {
      en: 'Greens harvested dawn daily in Banat · Wild marine sourcing',
      ro: 'Verdețuri culese dimineața din Banat · Pescuit sălbatic responsabil',
    },
  },
  {
    id: 'crispy-sea-bass',
    code: 'FH-02',
    image: './assets/dishes/fine-fish.jpg',
    featuredInHero: true,
    heroOrder: 1,
    name: {
      en: 'Crispy Sea Bass & Parsnip Velouté',
      ro: 'Biban de Mare Crocant & Velouté de Păstârnac',
    },
    subtitle: {
      en: 'Pan-roasted sea bass, heirloom carrot, parsnip silk & herb oil jus',
      ro: 'File de biban cu piele crocantă, morcov copt, cremă de păstârnac & ulei de ierburi',
    },
    description: {
      en: 'Crisp-skinned wild sea bass resting over whipped organic parsnip purée, caramelized Banat heirloom carrot, pumpkin emulsion, and roasted vegetable jus infused with cold-pressed chive oil.',
      ro: 'File de biban de mare cu piele crocantă așezat pe piure catifelat de păstârnac organic, morcov copt de Banat, emulsie de dovleac și jus vegetal cu ulei de arpagic.',
    },
    chefNote: {
      en: 'Zero heavy butter or cream — velvet texture comes purely from slow-roasted root aromatics and cold-pressed olive oil.',
      ro: 'Zero unt greu sau smântână procesată — textura catifelată vine exclusiv din rădăcinoase coapte lent și ulei de măsline extravirgin.',
    },
    priceEur: 15.9,
    priceRon: 79,
    proteinGrams: 38,
    carbsGrams: 34,
    fatGrams: 16,
    fiberGrams: 7,
    calories: 480,
    prepMinutes: 18,
    glycemicLoad: { en: 'Low GL · 8', ro: 'IG Scăzut · 8' },
    primaryBenefit: { en: 'Cognitive Focus', ro: 'Claritate Mentală' },
    categories: ['anti-inflammatory', 'high-protein'],
    ingredients: {
      en: [
        'Line-caught sea bass fillet (185g)',
        'Organic Banat parsnip & thyme velouté',
        'Honey-roasted heirloom carrot',
        'Cold-pressed chive & parsley oil',
        'Fresh pea shoots & mineral sea salt',
      ],
      ro: [
        'File de biban de mare sălbatic (185g)',
        'Velouté de păstârnac organic din Banat cu cimbru',
        'Morcov copt cu note ușoare de ierburi',
        'Ulei presat la rece de arpagic și pătrunjel',
        'Lăstari de mazăre și sare marină minerală',
      ],
    },
    allergens: { en: 'Fish', ro: 'Pește' },
    farmOrigin: {
      en: 'Root vegetables from Ghiroda & Recaș organic growers',
      ro: 'Rădăcinoase de la ferme organice din Ghiroda & Recaș',
    },
  },
  {
    id: 'hokkaido-pumpkin-veloute',
    code: 'FH-03',
    image: './assets/dishes/pumpkin-seeds.jpg',
    featuredInHero: true,
    heroOrder: 3,
    name: {
      en: 'Hokkaido Pumpkin Velouté & Pepitas',
      ro: 'Velouté de Dovleac Hokkaido & Semințe Coapte',
    },
    subtitle: {
      en: 'Fire-roasted organic squash, toasted Banat pepitas, ginger & cultured cream',
      ro: 'Dovleac organic copt la cuptor, semințe prăjite de Banat, ghimbir & cremă fermentată',
    },
    description: {
      en: 'Whole-roasted Hokkaido pumpkin blended velvety with fresh ginger root, turmeric, roasted garlic, finished with crunchy Banat pumpkin seeds and a swirl of organic cultured cashew-coconut cream.',
      ro: 'Dovleac Hokkaido copt întreg și pasat fin cu ghimbir proaspăt, turmeric și usturoi copt, desăvârșit cu semințe crocante de dovleac din Banat și cremă vegetală fermentată.',
    },
    chefNote: {
      en: 'High bioavailable beta-carotene and warm ginger aromatics built for calm digestion and sustained afternoon warmth.',
      ro: 'Bogat în beta-caroten biodisponibil și ghimbir proaspăt, conceput pentru digestie ușoară și energie constantă toată după-amiaza.',
    },
    priceEur: 11.5,
    priceRon: 57,
    proteinGrams: 16,
    carbsGrams: 38,
    fatGrams: 15,
    fiberGrams: 11,
    calories: 360,
    prepMinutes: 14,
    glycemicLoad: { en: 'Low GL · 7', ro: 'IG Scăzut · 7' },
    primaryBenefit: { en: 'Gut Restoration', ro: 'Refacere Digestivă' },
    categories: ['plant-based', 'gut-reset', 'anti-inflammatory'],
    ingredients: {
      en: [
        'Organic Hokkaido & muscat pumpkin',
        'Fresh turmeric & pressed ginger root',
        'Toasted raw Banat pepitas',
        'Cultured organic cashew cream',
        'Micro-marjoram & Aleppo chili',
      ],
      ro: [
        'Dovleac organic Hokkaido și plăcintar',
        'Turmeric proaspăt și rădăcină de ghimbir',
        'Semințe crude de dovleac prăjite ușor din Banat',
        'Cremă fermentată din caju organic',
        'Micro-măghiran și fulgi blânzi de ardei Aleppo',
      ],
    },
    allergens: { en: 'Tree Nuts (Cashew)', ro: 'Fructe cu coajă (Caju)' },
    farmOrigin: {
      en: 'Pumpkins & pepitas from Timiș organic cooperative',
      ro: 'Dovleci și semințe din cooperativa organică Timiș',
    },
  },
  {
    id: 'fire-roasted-pasture-chicken',
    code: 'FH-04',
    image: './assets/dishes/herb-poultry.jpg',
    name: {
      en: 'Fire-Roasted Pasture Chicken & Charred Tomato',
      ro: 'Pui de Pășune la Jar & Roșii Coapte',
    },
    subtitle: {
      en: 'Sumac & wild-thyme pasture poultry, blistered heirloom tomato & warm spelt flatbread',
      ro: 'Pui de pășune cu sumac și cimbru sălbatic, roșii coapte la flacără & lipie caldă de spelta',
    },
    description: {
      en: 'Slow-raised antibiotic-free pasture chicken marinated 18 hours in wild thyme, crushed sumac, and olive oil, flame-roasted beside blistered orchard tomatoes, charred sweet onion, and ancient spelt flatbread.',
      ro: 'Pui de pășune crescut lent fără antibiotice, marinat 18 ore cu cimbru sălbatic, sumac și ulei extravirgin, fript pe jar alături de roșii coapte, ceapă dulce caramelizată și lipie integrală de spelta.',
    },
    chefNote: {
      en: '46 grams of clean complete protein with zero seed oils, paired with polyphenol-rich charred lycopene tomatoes.',
      ro: '46 grame de proteină completă fără uleiuri rafinate de semințe, completată de roșii coapte bogate în licopen.',
    },
    priceEur: 13.9,
    priceRon: 69,
    proteinGrams: 46,
    carbsGrams: 36,
    fatGrams: 22,
    fiberGrams: 6,
    calories: 560,
    prepMinutes: 20,
    glycemicLoad: { en: 'Low GL · 10', ro: 'IG Scăzut · 10' },
    primaryBenefit: { en: 'Muscle Recovery', ro: 'Refacere Musculară' },
    categories: ['high-protein'],
    ingredients: {
      en: [
        'Free-range pasture chicken (220g)',
        'Sumac, wild thyme & garlic marinade',
        'Blistered heirloom tomato & charred onion',
        'Stone-ground ancient spelt flatbread',
        'Whipped garlic-yogurt tahini dip',
      ],
      ro: [
        'Pui de pășune crescut liber (220g)',
        'Marinadă de sumac, cimbru sălbatic și usturoi',
        'Roșii heirloom și ceapă coaptă pe jar',
        'Lipie din făină integrală de grâu spelta',
        'Sos cremos de iaurt grecesc cu tahini',
      ],
    },
    allergens: { en: 'Gluten (Spelt), Dairy, Sesame', ro: 'Gluten (Spelta), Lactate, Susan' },
    farmOrigin: {
      en: 'Pasture poultry from Lugoj hills · Tomatoes from Dumbrăvița',
      ro: 'Pui de pășune din dealurile Lugojului · Roșii din Dumbrăvița',
    },
  },
  {
    id: 'avocado-sweet-potato-bowl',
    code: 'FH-05',
    image: './assets/dishes/rainbow-quinoa.jpg',
    name: {
      en: 'Avocado, Sweet Potato & Tahini Bowl',
      ro: 'Bol cu Avocado, Cartof Dulce & Tahini',
    },
    subtitle: {
      en: 'Roasted sweet potato, sprouted chickpeas, watermelon radish, vine tomatoes & lemon tahini',
      ro: 'Cartof dulce copt, năut germinat, ridiche pepene, roșii pe ciorchine & tahini cu lămâie',
    },
    description: {
      en: 'A vibrant living-color harvest bowl uniting caramelized organic sweet potato cubes, creamy Hass avocado, sprouted chickpeas, crisp watermelon radish, micro-broccoli sprouts, and bright lemon-tahini dressing.',
      ro: 'Un bol viu de sezon care reunește cartof dulce organic caramelizat, avocado Hass cremos, năut germinat, ridiche crocantă, micro-lăstari de broccoli și dressing de tahini cu lămâie.',
    },
    chefNote: {
      en: '14 grams of prebiotic plant fiber and live sulforaphane-rich broccoli microgreens harvested the same morning.',
      ro: '14 grame de fibre prebiotice vegetale și micro-lăstari proaspeți bogați în sulforafan, culeși în aceeași dimineață.',
    },
    priceEur: 12.5,
    priceRon: 62,
    proteinGrams: 22,
    carbsGrams: 52,
    fatGrams: 18,
    fiberGrams: 14,
    calories: 450,
    prepMinutes: 15,
    glycemicLoad: { en: 'Low GL · 9', ro: 'IG Scăzut · 9' },
    primaryBenefit: { en: 'Microbiome Diversity', ro: 'Diversitate Microbiom' },
    categories: ['plant-based', 'gut-reset', 'anti-inflammatory'],
    ingredients: {
      en: [
        'Caramelized organic sweet potato',
        'Ripe Hass avocado & cracked pepper',
        'Sprouted organic chickpeas',
        'Watermelon radish, vine cherry tomatoes & red cabbage',
        'Fresh broccoli microgreens & raw lemon tahini',
      ],
      ro: [
        'Cartof dulce organic copt lent',
        'Avocado Hass copt și piper proaspăt măcinat',
        'Năut organic germinat',
        'Ridiche pepene, roșii cherry pe ciorchine și varză roșie',
        'Micro-lăstari de broccoli și sos crud de tahini cu lămâie',
      ],
    },
    allergens: { en: 'Sesame', ro: 'Susan' },
    farmOrigin: {
      en: 'Microgreens grown in Giroc urban greenhouse',
      ro: 'Micro-lăstari cultivați în sera urbană din Giroc',
    },
  },
  {
    id: 'beet-hummus-trout-bowl',
    code: 'FH-06',
    image: './assets/dishes/nourish-lentil.jpg',
    name: {
      en: 'Ruby Beet Hummus, Chickpea & Smoked Trout',
      ro: 'Humus de Sfeclă Roșie, Năut & Păstrăv Afumat',
    },
    subtitle: {
      en: 'Roasted spiced chickpeas, sheep feta, smoked mountain trout, edamame & ruby beetroot dip',
      ro: 'Năut copt condimentat, brânză de oaie, păstrăv afumat de munte, edamame & humus de sfeclă',
    },
    description: {
      en: 'Beechwood-smoked Carpathian trout paired with crispy spiced chickpeas, artisan Banat sheep cheese, roasted turmeric cauliflower, green edamame, avocado, and vibrant ruby roasted-beetroot hummus.',
      ro: 'Păstrăv carpatic afumat la lemn de fag alături de năut crocant, brânză artizanală de oaie din Banat, conopidă coaptă cu turmeric, edamame, avocado și humus rubiniu de sfeclă coaptă.',
    },
    chefNote: {
      en: 'Natural dietary nitrates from roasted red beet support clean blood flow and sustained endurance without heavy starches.',
      ro: 'Nitrații naturali din sfecla roșie coaptă susțin oxigenarea și energia susținută, fără carbohidrați grei.',
    },
    priceEur: 13.9,
    priceRon: 69,
    proteinGrams: 34,
    carbsGrams: 39,
    fatGrams: 21,
    fiberGrams: 12,
    calories: 510,
    prepMinutes: 16,
    glycemicLoad: { en: 'Low GL · 8', ro: 'IG Scăzut · 8' },
    primaryBenefit: { en: 'Cardio & Circulation', ro: 'Energie & Circulație' },
    categories: ['anti-inflammatory', 'gut-reset', 'high-protein'],
    ingredients: {
      en: [
        'Beechwood-smoked mountain trout',
        'Roasted ruby beetroot & tahini hummus',
        'Crisp turmeric cauliflower & spiced chickpeas',
        'Artisan Banat sheep feta & baby spinach',
        'Organic edamame, cherry tomatoes & avocado',
      ],
      ro: [
        'Păstrăv de munte afumat la lemn de fag',
        'Humus rubiniu de sfeclă coaptă și tahini',
        'Conopidă coaptă cu turmeric și năut condimentat',
        'Brânză artizanală de oaie din Banat și spanac tânăr',
        'Edamame organic, roșii cherry și avocado',
      ],
    },
    allergens: { en: 'Fish, Dairy, Soy, Sesame', ro: 'Pește, Lactate, Soia, Susan' },
    farmOrigin: {
      en: 'Mountain trout from Caraș-Severin · Organic beets from Moșnița',
      ro: 'Păstrăv din Caraș-Severin · Sfeclă organică din Moșnița',
    },
  },
  {
    id: 'ginger-tofu-edamame-bowl',
    code: 'FH-07',
    image: './assets/dishes/harvest-greens.jpg',
    name: {
      en: 'Ginger-Seared Tofu, Edamame & Quail Egg',
      ro: 'Tofu cu Ghimbir, Edamame & Ouă de Prepeliță',
    },
    subtitle: {
      en: 'Crisp organic tofu, soft-boiled quail eggs, fermented purple cabbage & crisp greens',
      ro: 'Tofu organic rumenit, ouă fierte moi de prepeliță, varză roșie fermentată & verdețuri',
    },
    description: {
      en: 'Golden-seared organic tofu glazed in toasted sesame and fresh ginger, layered with shelled edamame, pasture quail eggs, probiotic pickled purple cabbage, sweet corn, and crisp garden cucumber.',
      ro: 'Tofu organic rumenit auriu în susan și ghimbir proaspăt, așezat alături de edamame, ouă de prepeliță, varză roșie fermentată probiotic, porumb dulce și castraveți crocanți de grădină.',
    },
    chefNote: {
      en: 'Combines complete plant-and-egg amino acids with naturally fermented red cabbage for calm midday mental stamina.',
      ro: 'Îmbină aminoacizi compleți din plante și ou de prepeliță cu varză roșie fermentată natural pentru focus susținut.',
    },
    priceEur: 12.9,
    priceRon: 64,
    proteinGrams: 31,
    carbsGrams: 37,
    fatGrams: 17,
    fiberGrams: 10,
    calories: 440,
    prepMinutes: 15,
    glycemicLoad: { en: 'Low GL · 8', ro: 'IG Scăzut · 8' },
    primaryBenefit: { en: 'Probiotic Balance', ro: 'Echilibru Probiotic' },
    categories: ['high-protein', 'gut-reset'],
    ingredients: {
      en: [
        'Organic non-GMO sprouted tofu glazed with ginger',
        'Free-range Banat quail eggs',
        'House-fermented purple cabbage',
        'Organic edamame, cucumber & cherry tomatoes',
        'Crisp butterhead lettuce & scallions',
      ],
      ro: [
        'Tofu organic nemodificat genetic, rumenit cu ghimbir',
        'Ouă de prepeliță de la fermă din Banat',
        'Varză roșie fermentată în bucătăria noastră',
        'Edamame organic, castraveți și roșii cherry',
        'Salată fragedă și ceapă verde proaspătă',
      ],
    },
    allergens: { en: 'Soy, Eggs, Sesame', ro: 'Soia, Ouă, Susan' },
    farmOrigin: {
      en: 'Quail eggs & garden greens from Ghiroda family farm',
      ro: 'Ouă de prepeliță și salate din ferma de familie Ghiroda',
    },
  },
  {
    id: 'sourdough-avocado-tartine',
    code: 'FH-08',
    image: './assets/dishes/avocado-sourdough.jpg',
    name: {
      en: 'Artisan Sourdough, Avocado & Pasture Egg',
      ro: 'Tartină cu Maia, Avocado & Ou de Țară',
    },
    subtitle: {
      en: '36-hour stone-milled sourdough, smashed lime avocado, runny pasture egg & chili flakes',
      ro: 'Pâine cu maia fermentată 36h, avocado zdrobit cu lime, ou moale de țară & fulgi chili',
    },
    description: {
      en: 'Thick-cut 36-hour naturally fermented whole-grain sourdough toasted to a crackle, layered with lime-pressed Hass avocado, a golden-yolk pasture egg, flaky sea salt, and crushed Aleppo pepper.',
      ro: 'Felie groasă de pâine integrală cu maia fermentată natural 36 de ore, prăjită crocant, acoperită cu avocado zdrobit cu lime, ou de țară cu gălbenuș cremos, sare grunjoasă și fulgi de chili.',
    },
    chefNote: {
      en: 'Long-fermented sourdough naturally breaks down phytic acid for effortless morning or late-afternoon digestion.',
      ro: 'Fermentația lungă cu maia face glutenul mult mai ușor de digerat — ideală dimineața sau la o pauză rapidă.',
    },
    priceEur: 10.9,
    priceRon: 54,
    proteinGrams: 21,
    carbsGrams: 34,
    fatGrams: 22,
    fiberGrams: 9,
    calories: 420,
    prepMinutes: 12,
    glycemicLoad: { en: 'Low GL · 9', ro: 'IG Scăzut · 9' },
    primaryBenefit: { en: 'Steady Morning Fuel', ro: 'Energie Stabilă' },
    categories: ['plant-based', 'gut-reset'],
    ingredients: {
      en: [
        '36-hour fermented organic whole-grain sourdough',
        'Smashed Hass avocado with fresh lime zest',
        'Pasture-raised golden-yolk egg',
        'Crushed red chili flakes & cracked black pepper',
        'Cold-pressed extra-virgin olive oil & flaky salt',
      ],
      ro: [
        'Pâine integrală organică cu maia (36h fermentare)',
        'Avocado Hass zdrobit cu coajă și suc de lime',
        'Ou proaspăt de țară cu gălbenuș intens',
        'Fulgi de chili și piper negru proaspăt râșnit',
        'Ulei extravirgin presat la rece și fulgi de sare marină',
      ],
    },
    allergens: { en: 'Gluten, Eggs', ro: 'Gluten, Ouă' },
    farmOrigin: {
      en: 'Artisan bakery in Iosefin, Timișoara · Eggs from Moșnița',
      ro: 'Brutărie cu maia din Iosefin, Timișoara · Ouă din Moșnița',
    },
  },
];

export const DELIVERY_ZONES: DeliveryZone[] = [
  {
    id: 'timisoara',
    name: 'Timișoara',
    shortLabel: 'TIMIȘOARA',
    etaMinutes: 16,
    neighborhoods: {
      en: 'Piața Unirii · Cetate · Iosefin · ISHO · Iulius Town · Elisabetin · Fabric',
      ro: 'Piața Unirii · Cetate · Iosefin · ISHO · Iulius Town · Elisabetin · Fabric',
    },
    hubLabel: {
      en: 'Flagship Kitchen Pass · Cetate District, Timișoara',
      ro: 'Bucătăria Principală · Zona Cetate, Timișoara',
    },
    hours: '08:00 – 22:00',
    image: './assets/zones/timisoara-square.jpg',
    dailyCapacity: {
      en: 'Electric courier fleet · Hot stone-lined thermal boxes',
      ro: 'Flotă electrică dedicată · Cutii termo-ceramice calde',
    },
    localHighlight: {
      en: 'Direct 14–18 minute drop to offices in ISHO, Iulius Town, and historic Cetate homes.',
      ro: 'Livrare directă în 14–18 minute către birourile din ISHO, Iulius Town și zona Cetate.',
    },
    partnerFarms: {
      en: 'Iosefin sourdough bakery & Timiș organic vegetable cooperative',
      ro: 'Brutăria cu maia din Iosefin & cooperativa legumicolă organică Timiș',
    },
    coordinates: '45.7580° N · 21.2290° E',
  },
  {
    id: 'giroc',
    name: 'Giroc',
    shortLabel: 'GIROC',
    etaMinutes: 19,
    neighborhoods: {
      en: 'Giroc Centru · Calea Martirilor · Chișoda · Cartierul Planete',
      ro: 'Giroc Centru · Calea Martirilor · Chișoda · Cartierul Planete',
    },
    hubLabel: {
      en: 'South Dispatch Point · Calea Timișoarei',
      ro: 'Punct Livrare Sud · Calea Timișoarei',
    },
    hours: '08:30 – 21:30',
    image: './assets/zones/banat-harvest.jpg',
    dailyCapacity: {
      en: 'Dedicated south-corridor electric fleet · Zero batch stacking',
      ro: 'Flotă electrică dedicată coridorului de sud · Livrare directă',
    },
    localHighlight: {
      en: 'Home to our partner microgreens greenhouse — harvested two hours before lunch service.',
      ro: 'Acasă pentru sera noastră parteneră de micro-lăstari — culeși cu două ore înainte de prânz.',
    },
    partnerFarms: {
      en: 'Giroc urban microgreens & heirloom herb growers',
      ro: 'Sera de micro-lăstari și ierburi aromatice din Giroc',
    },
    coordinates: '45.6996° N · 21.2392° E',
  },
  {
    id: 'dumbravita',
    name: 'Dumbrăvița',
    shortLabel: 'DUMBRĂVIȚA',
    etaMinutes: 18,
    neighborhoods: {
      en: 'Zona Nord · Pădurea Verde · Bulevardul Petre Țuțea · Cartier Rezidențial',
      ro: 'Zona Nord · Pădurea Verde · Bulevardul Petre Țuțea · Cartier Rezidențial',
    },
    hubLabel: {
      en: 'North Dispatch Point · Bd. Petre Țuțea',
      ro: 'Punct Livrare Nord · Bd. Petre Țuțea',
    },
    hours: '08:00 – 22:00',
    image: './assets/zones/timisoara-unirii.jpg',
    dailyCapacity: {
      en: 'Scheduled family dinner windows & instant lunch drop',
      ro: 'Ferestre programate pentru cine de familie & livrare rapidă la prânz',
    },
    localHighlight: {
      en: 'Preferred zone for Daily Ritual family subscriptions — doorstep delivery before 19:00.',
      ro: 'Zona preferată pentru abonamentele de familie Daily Ritual — la ușă înainte de ora 19:00.',
    },
    partnerFarms: {
      en: 'Dumbrăvița solar-heated heirloom tomato & greens farms',
      ro: 'Solarii locale din Dumbrăvița pentru roșii heirloom și salate',
    },
    coordinates: '45.8001° N · 21.2464° E',
  },
  {
    id: 'mosnita',
    name: 'Moșnița',
    shortLabel: 'MOȘNIȚA',
    etaMinutes: 20,
    neighborhoods: {
      en: 'Moșnița Nouă · Moșnița Veche · Urseni · Albina',
      ro: 'Moșnița Nouă · Moșnița Veche · Urseni · Albina',
    },
    hubLabel: {
      en: 'East Garden Hub · Calea Moșniței',
      ro: 'Punct Livrare Est · Calea Moșniței',
    },
    hours: '09:00 – 21:30',
    image: './assets/zones/chef-kitchen.jpg',
    dailyCapacity: {
      en: 'Thermal stoneware transport preserving 68°C serving heat',
      ro: 'Transport termo-ceramic care păstrează 68°C la servire',
    },
    localHighlight: {
      en: 'Source of our pasture eggs and organic ruby beetroots — zero long-haul cold storage.',
      ro: 'Sursa ouălor de țară și a sfeclei roșii organice — zero depozitare frigorifică lungă.',
    },
    partnerFarms: {
      en: 'Moșnița free-range poultry & root vegetable family farms',
      ro: 'Ferme de familie din Moșnița pentru ouă libere și rădăcinoase',
    },
    coordinates: '45.7186° N · 21.3264° E',
  },
  {
    id: 'ghiroda',
    name: 'Ghiroda',
    shortLabel: 'GHIRODA',
    etaMinutes: 19,
    neighborhoods: {
      en: 'Ghiroda · Giarmata-Vii · Calea Lugojului · Zona Aeroport',
      ro: 'Ghiroda · Giarmata-Vii · Calea Lugojului · Zona Aeroport',
    },
    hubLabel: {
      en: 'East-Airport Dispatch · Calea Lugojului',
      ro: 'Punct Livrare Aeroport · Calea Lugojului',
    },
    hours: '08:30 – 21:30',
    image: './assets/zones/banat-harvest.jpg',
    dailyCapacity: {
      en: 'Fast business-park & residential drop along Calea Lugojului',
      ro: 'Livrare rapidă în parcurile de birouri și zonele rezidențiale',
    },
    localHighlight: {
      en: 'Direct farm-gate supply of heirloom parsnips, quail eggs, and seasonal orchard fruit.',
      ro: 'Aprovizionare directă de la fermă cu păstârnac, ouă de prepeliță și fructe de livadă.',
    },
    partnerFarms: {
      en: 'Ghiroda family orchards & organic root-crop plots',
      ro: 'Livezi de familie și culturi organice din Ghiroda',
    },
    coordinates: '45.7745° N · 21.3095° E',
  },
];

export const RITUAL_STEPS: RitualStep[] = [
  {
    number: '01',
    timeWindow: { en: '05:30 · BANAT HARVEST', ro: '05:30 · RECOLTĂ BANAT' },
    title: {
      en: 'Morning-Cut Organic Produce',
      ro: 'Ingrediente Organice Culese în Zori',
    },
    detail: {
      en: 'Every morning begins with direct farm crates arriving from Giroc, Dumbrăvița, Moșnița, and Ghiroda — zero seed oils, zero added hormones, zero chemical preservatives.',
      ro: 'Fiecare dimineață începe cu lăzi proaspete direct din Giroc, Dumbrăvița, Moșnița și Ghiroda — zero uleiuri rafinate, zero hormoni, zero conservanți.',
    },
    metric: { en: '100% Organic Produce', ro: '100% Ingrediente Organice' },
  },
  {
    number: '02',
    timeWindow: { en: 'LIVE PASS · TO ORDER', ro: 'LA COMANDĂ · FOC VIU' },
    title: {
      en: 'Chef-Plated From Scratch',
      ro: 'Gătit pe Loc de Chefi',
    },
    detail: {
      en: 'Nothing sits in plastic meal-prep tubs. Your wild salmon, sea bass, or pasture chicken hits cast iron the moment your ticket prints on our kitchen pass.',
      ro: 'Nimic nu stă în caserole reci de plastic. Somonul sălbatic, bibanul sau puiul de pășune intră pe fontă în secunda în care comanda ajunge la bucătărie.',
    },
    metric: { en: '0 Plastic Reheat Boxes', ro: '0 Caserole Reîncălzite' },
  },
  {
    number: '03',
    timeWindow: { en: '< 20 MIN · 5 ZONES', ro: '< 20 MIN · 5 ZONE' },
    title: {
      en: 'Thermal Ceramic Dispatch',
      ro: 'Livrare Termo-Ceramică în 20 Min',
    },
    detail: {
      en: 'Electric couriers carry compostable thermal-insulated bowls straight to Timișoara, Giroc, Dumbrăvița, Moșnița, and Ghiroda — arriving crisp and hot.',
      ro: 'Curierii noștri electrici livrează în boluri termoizolante compostabile direct în Timișoara, Giroc, Dumbrăvița, Moșnița și Ghiroda — fierbinte și crocant.',
    },
    metric: { en: '18 min Avg Dispatch', ro: '18 min Medie Livrare' },
  },
  {
    number: '04',
    timeWindow: { en: '365 DAYS · FLEXIBLE', ro: '365 ZILE · FLEXIBIL' },
    title: {
      en: 'Effortless Daily Rhythm',
      ro: 'Ritm Zilnic Fără Efort',
    },
    detail: {
      en: 'Order single dishes whenever hunger strikes, or lock a flexible monthly subscription with pause-any-day freedom and custom macro preferences.',
      ro: 'Comandă preparate individuale ori de câte ori vrei, sau alege un abonament flexibil pe care îl poți pune pe pauză în orice zi, adaptat macro-urilor tale.',
    },
    metric: { en: 'Pause or Swap Anytime', ro: 'Pauză sau Schimb Oricând' },
  },
];

export const SUBSCRIPTION_PLANS: SubscriptionPlan[] = [
  {
    id: 'starter',
    name: { en: 'Tasting Pass', ro: 'Tasting Pass' },
    tagline: {
      en: 'Zero commitment — explore today’s seasonal menu on demand.',
      ro: 'Fără angajament — descoperă meniul zilnic ori de câte ori ai poftă.',
    },
    mealsPerMonth: 1,
    mealsPerWeek: 1,
    monthlyEur: 14.9,
    monthlyRon: 74,
    weeklyEur: 14.9,
    weeklyRon: 74,
    perMealEur: 14.9,
    perMealRon: 74,
    features: {
      en: [
        'Single chef-crafted dish on demand',
        'Order daily 08:00 – 22:00 across all 5 zones',
        'Full tabular macro & farm provenance sheet',
        'Free thermal delivery on orders of 2+ dishes',
      ],
      ro: [
        'Comandă individuală preparată pe loc',
        'Livrare zilnică 08:00 – 22:00 în toate cele 5 zone',
        'Fișă completă de macro-nutrienți și proveniență',
        'Livrare gratuită la comenzi de minimum 2 preparate',
      ],
    },
  },
  {
    id: 'pro',
    name: { en: 'Workweek Rhythm', ro: 'Ritm Săptămânal' },
    tagline: {
      en: 'Built for demanding workdays in Timișoara without cooking stress.',
      ro: 'Creat pentru zilele intense de muncă din Timișoara, fără grija gătitului.',
    },
    mealsPerMonth: 10,
    mealsPerWeek: 3,
    monthlyEur: 135,
    monthlyRon: 670,
    weeklyEur: 41,
    weeklyRon: 204,
    perMealEur: 13.5,
    perMealRon: 67,
    features: {
      en: [
        '10 organic chef meals / month (or 3 / week)',
        'Free priority delivery in Timișoara, Giroc, Dumbrăvița, Moșnița & Ghiroda',
        'Early access to weekly seasonal chef specials',
        'Pause, skip, or roll over unused meals anytime',
      ],
      ro: [
        '10 mese organice / lună (sau 3 / săptămână)',
        'Livrare gratuită în Timișoara, Giroc, Dumbrăvița, Moșnița & Ghiroda',
        'Acces prioritar la preparatele săptămânale de sezon',
        'Pauză sau reportare gratuită pentru mesele nefolosite',
      ],
    },
  },
  {
    id: 'ritual',
    name: { en: 'Daily Ritual', ro: 'Ritual Zilnic' },
    tagline: {
      en: 'Complete 365-day restorative nourishment with priority 16-minute pass.',
      ro: 'Nutriție restaurativă 365 de zile cu prioritate pe pass și livrare rapidă.',
    },
    mealsPerMonth: 30,
    mealsPerWeek: 7,
    monthlyEur: 369,
    monthlyRon: 1830,
    weeklyEur: 89,
    weeklyRon: 442,
    perMealEur: 12.3,
    perMealRon: 61,
    highlighted: true,
    features: {
      en: [
        '1 chef-plated organic meal every single day (30 / month)',
        'Priority thermal dispatch (< 18 min target window)',
        'Personal allergen & macro goal calibration',
        'Complimentary daily ginger-turmeric morning elixir',
      ],
      ro: [
        '1 masă organică gătită de chef în fiecare zi (30 / lună)',
        'Prioritate la livrare termo-ceramică (țintă < 18 min)',
        'Calibrare personală de alergeni și obiectiv nutrițional',
        'Elixir matinal de ghimbir și turmeric inclus zilnic',
      ],
    },
  },
];

export const DINER_NOTES: DinerNote[] = [
  {
    id: 'note-1',
    dishId: 'charred-miso-salmon',
    quote: {
      en: 'After launching our product team near ISHO, ordering junk food was wrecking my afternoons. food-heals arrives in 16 minutes hot on real stoneware-grade packaging — the charred wild salmon tastes like a Friday dinner, not a diet.',
      ro: 'După ce am mutat echipa lângă ISHO, comenzile de fast-food îmi distrugeau după-amiezile. food-heals ajunge în 16 minute fierbinte — somonul sălbatic cu miso are gust de cină la restaurant, nu de regim.',
    },
    author: 'Andrei M.',
    zone: 'Timișoara · ISHO',
    favoriteDish: {
      en: 'Charred Wild Salmon & Broccolini',
      ro: 'Somon Sălbatic cu Miso & Broccolini',
    },
  },
  {
    id: 'note-2',
    dishId: 'crispy-sea-bass',
    quote: {
      en: 'Living in Dumbrăvița, most delivery services show up lukewarm and soggy. Having crisp sea bass and pumpkin velouté arrive steaming before 19:00 transformed weeknight dinners for our whole family.',
      ro: 'Locuind în Dumbrăvița, majoritatea livrărilor ajungeau călduțe și moi. Să primim bibanul crocant și velouté-ul de dovleac aburind înainte de ora 19:00 ne-a schimbat complet cinele în familie.',
    },
    author: 'Ioana & Radu P.',
    zone: 'Dumbrăvița',
    favoriteDish: {
      en: 'Crispy Sea Bass & Parsnip Velouté',
      ro: 'Biban de Mare Crocant & Velouté de Păstârnac',
    },
  },
  {
    id: 'note-3',
    dishId: 'fire-roasted-pasture-chicken',
    quote: {
      en: 'Every macro, farm origin, and allergen is right there in plain sight — zero seed oils, zero hidden sauces. Between training sessions in Giroc, Workweek Rhythm saves me ten hours every single week.',
      ro: 'Fiecare gram de proteină, proveniența fermei și alergenii sunt la vedere — zero uleiuri rafinate, zero sosuri ascunse. Între antrenamente în Giroc, abonamentul îmi economisește zece ore pe săptămână.',
    },
    author: 'Cătălin D.',
    zone: 'Giroc',
    favoriteDish: {
      en: 'Fire-Roasted Pasture Chicken',
      ro: 'Pui de Pășune la Jar',
    },
  },
];

export const UI_COPY = {
  skipToContent: {
    en: 'Skip to main content',
    ro: 'Sari la conținutul principal',
  },
  nav: {
    menu: { en: 'Menu', ro: 'Meniu' },
    ritual: { en: 'Ritual', ro: 'Cum funcționează' },
    zones: { en: 'Zones', ro: 'Zone' },
    plans: { en: 'Plans', ro: 'Abonamente' },
    concierge: { en: 'Concierge', ro: 'Contact' },
    bag: { en: 'Bag', ro: 'Coș' },
    openMenu: { en: 'Open navigation menu', ro: 'Deschide meniul' },
    closeMenu: { en: 'Close navigation menu', ro: 'Închide meniul' },
    primaryNavAria: { en: 'Primary navigation', ro: 'Navigație principală' },
    mobileNavAria: { en: 'Mobile navigation', ro: 'Navigație mobilă' },
    languageAria: { en: 'Language switcher', ro: 'Schimbă limba' },
  },
  hero: {
    signatureTag: { en: "Chef's Signature", ro: 'Semnătura Chefului' },
    quickAdd: { en: '+ Add', ro: '+ Adaugă' },
    added: { en: 'Added', ro: 'Adăugat' },
    headlineLine1: { en: 'Food That Restores,', ro: 'Mâncare Care Vindecă,' },
    headlineLine2: { en: 'Plated in 20 Minutes.', ro: 'Gătită în 20 de Minute.' },
    subcopy: {
      en: '100% organic seasonal dishes cooked to order by local chefs across Timișoara, Giroc, Dumbrăvița, Moșnița & Ghiroda.',
      ro: 'Preparate 100% organice de sezon, gătite la comandă de chefi locali în Timișoara, Giroc, Dumbrăvița, Moșnița și Ghiroda.',
    },
    primaryCta: { en: "Order Today's Menu", ro: 'Comandă Meniul de Azi' },
    secondaryCta: { en: 'Explore Plans', ro: 'Vezi Abonamentele' },
    organicBadge: { en: 'ORGANIC', ro: 'ORGANIC' },
    proteinUnit: { en: 'Protein', ro: 'Proteine' },
    prevDish: { en: 'Previous signature dish', ro: 'Preparatul anterior' },
    nextDish: { en: 'Next signature dish', ro: 'Preparatul următor' },
  },
  menu: {
    heading: { en: "Today's Harvest Menu", ro: 'Meniul Recoltei de Azi' },
    subtitle: {
      en: 'Cooked fresh to order in Timișoara. Click any plate for full organic farm provenance, macros, and ingredients.',
      ro: 'Gătit proaspăt la comandă în Timișoara. Deschide orice farfurie pentru proveniența fermelor, macro-uri și ingrediente.',
    },
    filters: {
      all: { en: 'All', ro: 'Toate' },
      'anti-inflammatory': { en: 'Anti-Inflammatory', ro: 'Antiinflamator' },
      'high-protein': { en: 'High Protein', ro: 'Bogat în Proteine' },
      'gut-reset': { en: 'Gut Reset', ro: 'Digestie Ușoară' },
      'plant-based': { en: 'Plant-Based', ro: 'Vegetal' },
    } as Record<DietaryCategory, BilingualText>,
    sortLabel: { en: 'Sort', ro: 'Sortează' },
    sortOptions: {
      curated: { en: 'Chef Order', ro: 'Recomandate' },
      protein: { en: 'Highest Protein', ro: 'Cele mai multe proteine' },
      fastest: { en: 'Fastest Prep', ro: 'Cel mai rapid' },
      calories: { en: 'Lightest kcal', ro: 'Cele mai puține kcal' },
    },
    inspect: { en: 'Details', ro: 'Detalii' },
    orderBtn: { en: 'Order', ro: 'Adaugă' },
    inBag: { en: 'in bag', ro: 'în coș' },
    prepUnit: { en: 'prep', ro: 'timp' },
    filtersAria: { en: 'Dietary filters', ro: 'Filtre nutriționale' },
    emptyFilter: {
      en: 'No dishes match this filter. Reset to view today’s full harvest menu.',
      ro: 'Niciun preparat nu corespunde filtrului. Resetează pentru a vedea întregul meniu.',
    },
    resetFilter: { en: 'Show all dishes', ro: 'Arată toate preparatele' },
  },
  ritual: {
    heading: {
      en: 'From Dawn Harvest to Your Table in 20 Minutes.',
      ro: 'De la Recolta Zorilor la Masa Ta în 20 de Minute.',
    },
    lead: {
      en: 'Get food fast — never fast food. Every ticket triggers live fire, zero seed oils, and direct electric thermal dispatch across greater Timișoara.',
      ro: 'Primești mâncarea rapid — niciodată fast-food. Fiecare comandă pornește focul viu, zero uleiuri rafinate și livrare electrică termo-ceramică în zona Timișoara.',
    },
    passCaptionLeft: {
      en: 'TIMIȘOARA FLAGSHIP PASS · LIVE SERVICE',
      ro: 'BUCĂTĂRIA TIMIȘOARA · SERVICIU LA COMANDĂ',
    },
    passCaptionRight: {
      en: '68°C THERMAL DISPATCH',
      ro: 'LIVRARE TERMO-CERAMICĂ 68°C',
    },
    commitments: [
      {
        label: { en: 'Seed Oils', ro: 'Uleiuri Rafinate' },
        value: { en: '0% — Olive & Avocado Only', ro: '0% — Doar Măsline & Avocado' },
      },
      {
        label: { en: 'Refined Sugar', ro: 'Zahăr Rafinat' },
        value: { en: '0g Added Across All Plates', ro: '0g Adăugat în Toate Farfuriile' },
      },
      {
        label: { en: 'Antibiotics & Hormones', ro: 'Antibiotice & Hormoni' },
        value: { en: 'Pasture-Raised & Wild-Caught', ro: 'Pășune Liberă & Captură Sălbatică' },
      },
      {
        label: { en: 'Packaging', ro: 'Ambalaj' },
        value: { en: 'Compostable Thermal Stoneware-Lined', ro: 'Termoizolant Compostabil' },
      },
    ],
  },
  zones: {
    heading: {
      en: 'Five Active Zones. One Hot Standard.',
      ro: 'Cinci Zone Active. Un Singur Standard Fierbinte.',
    },
    lead: {
      en: 'Select your delivery zone below — your active choice syncs automatically with your meal bag and arrival estimate.',
      ro: 'Alege zona ta de livrare — selecția se sincronizează instant cu coșul tău și timpul estimat de sosire.',
    },
    avgEtaLabel: { en: 'Avg Arrival', ro: 'Timp Mediu' },
    hoursLabel: { en: 'Service Hours', ro: 'Program' },
    neighborhoodsLabel: { en: 'Covered Areas', ro: 'Zone Acoperite' },
    farmsLabel: { en: 'Local Farm Partners', ro: 'Ferme Partenere' },
    activeZoneBadge: { en: 'Selected for Delivery', ro: 'Selectat pentru Livrare' },
    selectZoneBtn: { en: 'Deliver Here', ro: 'Livrează Aici' },
  },
  plans: {
    heading: {
      en: 'Start Eating Restoratively Today.',
      ro: 'Începe Ritualul de Hrană Curată Azi.',
    },
    lead: {
      en: 'Transparent pricing with pause-any-day control. Switch between monthly plans and weekly flexibility.',
      ro: 'Prețuri transparente cu libertate de pauză în orice zi. Alege între abonament lunar sau flexibilitate săptămânală.',
    },
    cadenceAria: { en: 'Billing cadence', ro: 'Frecvență abonament' },
    monthlyToggle: { en: 'Monthly Plans', ro: 'Abonament Lunar' },
    weeklyToggle: { en: 'Weekly Flexible', ro: 'Flexibil Săptămânal' },
    perMonth: { en: '/ month', ro: '/ lună' },
    perWeek: { en: '/ week', ro: '/ săptămână' },
    perMealSingle: { en: '/ meal', ro: '/ masă' },
    perMealBreakdown: { en: 'per chef meal', ro: 'per masă gătită' },
    mostChosen: { en: 'Signature Choice', ro: 'Alegerea Signature' },
    choosePlan: { en: 'Select This Plan', ro: 'Alege Acest Plan' },
    selectedPlan: { en: 'Plan Selected in Bag', ro: 'Plan Selectat în Coș' },
  },
  notes: {
    heading: {
      en: 'Notes From Tables Across Timișoara.',
      ro: 'Gânduri de la Mesele din Timișoara.',
    },
    illustrativeNotice: {
      en: 'Illustrative brand showcase notes — live customer reviews will appear once public orders open.',
      ro: 'Note ilustrative de prezentare — recenziile verificate ale clienților vor apărea odată cu lansarea publică.',
    },
    favoriteLabel: { en: 'Go-to plate', ro: 'Preparat favorit' },
  },
  concierge: {
    heading: {
      en: 'Speak Directly With Our Timișoara Kitchen.',
      ro: 'Vorbește Direct cu Bucătăria din Timișoara.',
    },
    lead: {
      en: 'Corporate team lunches in ISHO or Iulius Town, dietary consultations, allergy questions, or private tasting requests — our kitchen lead replies the same day.',
      ro: 'Prânzuri corporate în ISHO sau Iulius Town, întrebări despre alergeni, consultanță nutrițională sau degustări private — șeful de bucătărie răspunde în aceeași zi.',
    },
    nameLabel: { en: 'Full name', ro: 'Nume complet' },
    namePlaceholder: { en: 'e.g. Elena Ionescu', ro: 'ex. Elena Ionescu' },
    emailLabel: { en: 'Email address', ro: 'Adresă de email' },
    emailPlaceholder: { en: 'elena@company.ro', ro: 'elena@companie.ro' },
    zoneLabel: { en: 'Delivery zone', ro: 'Zonă de livrare' },
    topicLabel: { en: 'How can we help?', ro: 'Cu ce te putem ajuta?' },
    topics: {
      subscription: { en: 'Personal meal subscription', ro: 'Abonament personal de mese' },
      corporate: { en: 'Office & team catering', ro: 'Prânzuri corporate & echipe' },
      dietary: { en: 'Allergens & custom macros', ro: 'Alergeni & obiective nutriționale' },
      partnership: { en: 'Local Banat farm partnership', ro: 'Parteneriat fermă locală Banat' },
    },
    messageLabel: { en: 'Your message', ro: 'Mesajul tău' },
    messagePlaceholder: {
      en: 'Tell us your preferred delivery window, dietary focus, or team size...',
      ro: 'Spune-ne intervalul dorit, preferințele alimentare sau numărul de persoane...',
    },
    newsletterLabel: {
      en: 'Send me the Sunday seasonal harvest menu preview (no spam)',
      ro: 'Trimite-mi duminica meniul nou de sezon (fără spam)',
    },
    submitBtn: { en: 'Send to Kitchen Concierge', ro: 'Trimite către Bucătărie' },
    errorSummaryTitle: {
      en: 'Please fix the following before sending:',
      ro: 'Te rugăm să corectezi următoarele câmpuri:',
    },
    errors: {
      name: {
        en: 'Enter your name (at least 2 characters).',
        ro: 'Introdu numele tău complet (minim 2 caractere).',
      },
      email: {
        en: 'Enter a valid email address so our kitchen can reply.',
        ro: 'Introdu o adresă de email validă ca să îți putem răspunde.',
      },
      message: {
        en: 'Add a short note (at least 10 characters).',
        ro: 'Adaugă un scurt mesaj (minim 10 caractere).',
      },
    },
    successTitle: {
      en: 'Inquiry Received (Interactive Preview)',
      ro: 'Mesaj Înregistrat (Previzualizare Interactivă)',
    },
    successBody: {
      en: 'Your message for our Timișoara kitchen concierge was validated and queued in this interactive storefront preview. No external email was sent.',
      ro: 'Mesajul tău pentru bucătăria din Timișoara a fost validat în această previzualizare interactivă. Nu a fost transmis niciun email extern.',
    },
    sendAnother: { en: 'Send another inquiry', ro: 'Trimite un alt mesaj' },
  },
  drawer: {
    title: { en: 'Your Kitchen Bag', ro: 'Coșul Tău de Comandă' },
    deliveringTo: { en: 'Delivering hot to', ro: 'Livrare fierbinte în' },
    emptyTitle: { en: 'Your bag is waiting for today’s harvest.', ro: 'Coșul tău așteaptă recolta de azi.' },
    emptyBody: {
      en: 'Add chef-crafted organic dishes from the menu or select a daily nourishment plan.',
      ro: 'Adaugă preparate organice din meniu sau alege un abonament zilnic.',
    },
    browseMenu: { en: 'Explore Menu', ro: 'Explorează Meniul' },
    selectedPlanLabel: { en: 'Active Plan Selection', ro: 'Abonament Selectat' },
    removePlan: { en: 'Remove plan', ro: 'Elimină planul' },
    subtotal: { en: 'Dishes subtotal', ro: 'Subtotal preparate' },
    delivery: { en: 'Thermal delivery', ro: 'Livrare termo-ceramică' },
    free: { en: 'Free', ro: 'Gratuit' },
    freeThresholdHint: {
      en: 'Add 1 more dish for complimentary thermal delivery.',
      ro: 'Mai adaugă 1 preparat pentru livrare gratuită.',
    },
    total: { en: 'Total', ro: 'Total' },
    checkoutBtn: { en: 'Place Preview Order', ro: 'Trimite Comanda (Preview)' },
    previewDisclaimer: {
      en: 'Interactive storefront preview — no payment card is charged.',
      ro: 'Previzualizare interactivă — nu se percepe nicio plată reală.',
    },
    confirmedTitle: { en: 'Ticket Printed on the Pass', ro: 'Comandă Trimisă în Bucătărie' },
    confirmedBody: {
      en: 'Your preview order is scheduled for thermal dispatch. In a live deployment, our chefs begin plating immediately.',
      ro: 'Comanda ta de previzualizare a fost înregistrată pentru livrare termo-ceramică. Într-un mediu live, chefii încep prepararea imediat.',
    },
    removeOneAria: { en: 'Remove one serving of', ro: 'Elimină o porție de' },
    addOneAria: { en: 'Add one serving of', ro: 'Adaugă o porție de' },
    newOrder: { en: 'Continue Browsing', ro: 'Continuă Navigarea' },
  },
  modal: {
    close: { en: 'Close dish details', ro: 'Închide detaliile preparatului' },
    decreaseQtyAria: { en: 'Decrease quantity', ro: 'Scade cantitatea' },
    increaseQtyAria: { en: 'Increase quantity', ro: 'Crește cantitatea' },
    macrosTitle: { en: 'Nutritional Ledger (Per Plated Serving)', ro: 'Fișă Nutrițională (Per Porție)' },
    protein: { en: 'Protein', ro: 'Proteine' },
    carbs: { en: 'Carbs', ro: 'Carbohidrați' },
    fat: { en: 'Healthy Fats', ro: 'Grăsimi Bune' },
    fiber: { en: 'Fiber', ro: 'Fibre' },
    ingredientsTitle: { en: 'Whole Organic Ingredients', ro: 'Ingrediente Organice Integrale' },
    provenanceTitle: { en: 'Farm Provenance', ro: 'Proveniență Fermă' },
    allergensTitle: { en: 'Allergens', ro: 'Alergeni' },
    chefNoteTitle: { en: 'Chef Pass Note', ro: 'Nota Chefului' },
    addToBag: { en: 'Add to Kitchen Bag', ro: 'Adaugă în Coș' },
  },
  footer: {
    manifesto: {
      en: 'Culinary-grade organic nourishment plated to order in Timișoara and delivered hot in 20 minutes across Giroc, Dumbrăvița, Moșnița, and Ghiroda.',
      ro: 'Hrană organică de nivel gastronomic, gătită la comandă în Timișoara și livrată fierbinte în 20 de minute în Giroc, Dumbrăvița, Moșnița și Ghiroda.',
    },
    navHeading: { en: 'Explore', ro: 'Explorează' },
    zonesHeading: { en: 'Active Zones', ro: 'Zone Active' },
    kitchenHeading: { en: 'Timișoara Pass', ro: 'Bucătăria Timișoara' },
    address: {
      en: 'Cetate District, Timișoara (Illustrative Hub)',
      ro: 'Zona Cetate, Timișoara (Bucătărie ilustrativă)',
    },
    hours: { en: 'Daily · 08:00 – 22:00', ro: 'Zilnic · 08:00 – 22:00' },
    copyright: {
      en: '© 2026 food-heals · Reimagined & engineered by Petcu Iulian.',
      ro: '© 2026 food-heals · Reconstruit complet de Petcu Iulian.',
    },
  },
};

export function formatPrice(eur: number, ron: number, lang: Lang): string {
  if (lang === 'ro') {
    return `${ron} lei`;
  }
  return `€${eur.toFixed(2)}`;
}
