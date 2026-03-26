import type { Service } from './services';

// ═══════════════════════════════════════════════════════════════
// TONES PER PAGE (Core 30, Section 9 — English adaptation)
// ═══════════════════════════════════════════════════════════════
// Hair coloring    → Reassuring, expert, "we fix everything"
// Balayage         → Lifestyle, Instagram-aware, trending
// Blowout          → Short, practical, zero fluff
// Straightening    → Myth-busting, transparent, factual (anxiety topic)
// Kids haircut     → Family-oriented, emotional, warm
// Highlights       → Technical made simple, visual comparisons
// Keratin          → Educational, "watch out for confusion"
// Extensions       → Direct, honest, pragmatic
// Perm             → Nostalgic revisited, fun, no stigma
// Beard trim       → Masculine, sensory experience, confidence
// Ombré            → Concise, visual, glossary
// Waxing           → Ultra-factual, 3 sentences are enough
// Hair regrowth    → Empathetic, honest
// ═══════════════════════════════════════════════════════════════

export const servicesEn: Service[] = [
  // ─────────────────────────────────────────────
  // HAIR COLORING — Tone: reassuring, expert
  // Volume: LONG (~400 words, 4 FAQ)
  // ─────────────────────────────────────────────
  {
    slug: 'hair-coloring-brussels',
    name: 'Hair Coloring',
    category: 'coiffure',
    categoryParents: ['coiffure', 'barbier'],
    price: 'From 40 €',
    images: ['/images/coloration-1.jpg', '/images/coloration-2.jpg'],
    titleTag: 'Hair Coloring Brussels – Custom Color by Experts | Tony&Son',
    metaDescription: 'Hair coloring in Brussels at Tony&Son, salon in Saint-Josse-ten-Noode since 1970. Full color, root touch-up, plant-based. From 40 €. Phone 02 230 55 37',
    h1: 'Hair Coloring in Brussels — Tony&Son',
    description: "Custom hair coloring to match your style. At Tony&Son, hairdresser in Brussels, our expert colorists deliver vibrant tones while keeping your hair healthy and luminous.",
    crossLinks: [{ slug: 'balayage-brussels', label: 'balayage in Brussels' }, { slug: 'highlights-brussels', label: 'highlights in Brussels' }, { slug: 'ombre-hair-color-brussels', label: 'ombré hair color' }],
    longDescription: `Hair coloring in Brussels, Saint-Josse-ten-Noode — it is the service people call us about most often at 02 230 55 37. And not always for a first color. The same story keeps coming up: "My hair turned orange." Between the Schuman roundabout and Avenue de Cortenbergh, we have seen this situation more times than we can count. Service in French and English.

<h2>Why choose Tony&Son for hair coloring in Brussels?</h2>

Color correction is a skill in itself. Our colorists — some have been working here for over eight years — have fixed dozens of botched jobs: unwanted copper tones, poorly blended roots, shades that came out far too dark because another salon misjudged the formula. On local forums, a client in Brussels described paying 220 € for a correction elsewhere. At Tony&Son, the diagnosis is free and the price is confirmed before we touch a single strand.

<h2>How does hair coloring work at Tony&Son?</h2>

We always start by looking. Your natural base, texture, previous treatments. We ask what you want, then tell you what is realistic — and what is not. That honesty is why clients from Etterbeek, the European Quarter and Schaerbeek have been coming back for three generations. For a more natural result, we also offer <a href="/en/services/balayage-brussels/">balayage</a> — hand-painted highlights that last 3-4 months. <a href="/en/services/highlights-brussels/">Highlights</a> give sharper contrasts. And for those who want zero chemicals, we work with plant-based dyes.

<h2>Hair coloring pricing in Brussels</h2>

Full color: from 40 €. Root touch-ups, tone-on-tone, plant-based color — the price depends on the technique and length. In line with <a href="https://economie.fgov.be/fr/themes/ventes/pratiques-du-marche-et/indication-des-prix" target="_blank" rel="noopener">Belgian pricing regulations</a>, everything is included: shampoo, treatment and finishing blowout. Zero hidden charges.

This service is part of our <a href="/en/hairdresser/">hairdresser in Brussels</a> offering. Rue Bonneels 27, two minutes from Metro Schuman (lines 1 and 5). Book your slot online via <a href="https://widget.treatwell.be/fr/salon/tony-and-son/" target="_blank" rel="noopener">Treatwell</a> — Wednesday lunchtime slots go fast, thanks to the EU institutions' lunch break.`,
    faq: [
      { question: "Can you fix a bad color job done at another salon?", answer: "It is one of our specialties. Our colorists perform a free diagnosis, identify the issue and propose a correction plan. Call 02 230 55 37 to discuss before booking an appointment." },
      { question: "What is the total price for a color, including blowout?", answer: "From 40 €, all inclusive: shampoo, treatment and finishing blowout. The exact price depends on technique and length. We confirm the amount before starting — no surprises on the bill." },
      { question: "Full color or balayage — which technique should I choose?", answer: "Full color covers the entire head or roots. Balayage creates natural-looking highlights without touching the root — subtle regrowth, maintenance every 3-4 months. If you are unsure, our colorists will show you the difference with real examples." },
      { question: "How often should I redo my color?", answer: "Permanent color: root touch-up every 4-6 weeks. Tone-on-tone: fades in 6-8 weeks. Balayage lasts 3-4 months — the least demanding option if your schedule between Schuman and Rue de la Loi leaves little room." }
    ]
  },

  // ─────────────────────────────────────────────
  // BALAYAGE — Tone: lifestyle, trending
  // Volume: MEDIUM (~350 words, 4 FAQ)
  // ─────────────────────────────────────────────
  {
    slug: 'balayage-brussels',
    name: 'Balayage',
    category: 'coiffure',
    price: 'From 35 €',
    images: ['/images/balayage-1.jpg', '/images/balayage-2.jpg'],
    titleTag: 'Balayage Brussels – Natural Sun-Kissed Highlights | Tony&Son',
    metaDescription: 'Balayage in Brussels at Tony&Son, salon in Saint-Josse-ten-Noode. Hand-painted natural highlights, babylights, honey or ash. From 35 €. Phone 02 230 55 37',
    h1: 'Balayage in Brussels — Tony&Son',
    description: "Natural, luminous balayage by our expert colorists at Tony&Son, hairdresser in Brussels. Custom highlights to brighten your hair with minimal upkeep.",
    crossLinks: [{ slug: 'hair-coloring-brussels', label: 'hair coloring in Brussels' }, { slug: 'highlights-brussels', label: 'highlights in Brussels' }],
    longDescription: `Balayage in Brussels, Saint-Josse-ten-Noode. The "sun-kissed" look — without a beach holiday. It is the most requested service during the lunch hour by clients from the Schuman area who want a visible change without the upkeep commitment. Service in French and English.

<h2>Why choose Tony&Son for balayage in Brussels?</h2>

The technique: each strand is painted freehand, not wrapped in foil like traditional <a href="/en/services/highlights-brussels/">highlights</a>. The result? Reflections that look natural, regrowth that blends instead of showing a hard line. Three months without a touch-up. Four, if your colorist got the balance right. It is the most photographed service on <a href="https://www.instagram.com/tonysonhairstylist" target="_blank" rel="noopener">our Instagram</a> — and that is no accident.

<h2>How does balayage work at Tony&Son?</h2>

Platinum balayage on a dark base does not happen in a single session. Our colorists tell you that before, not after. And we quote the full price — balayage + toner + blowout — before touching a single strand. French balayage, babylights, honey or ash: we master the variations.

<h2>Balayage pricing in Brussels</h2>

From 35 €, everything included. This service is part of our <a href="/en/hairdresser/">hairdresser in Brussels</a> offering. Rue Bonneels 27, between Cinquantenaire Park and Metro Schuman (lines 1/5). Book online via <a href="https://widget.treatwell.be/fr/salon/tony-and-son/" target="_blank" rel="noopener">Treatwell</a> or call 02 230 55 37.`,
    faq: [
      { question: "Balayage or highlights — what is the real difference?", answer: "Balayage is painted freehand — blended result, subtle regrowth, touch-up every 3-4 months. <a href='/en/services/highlights-brussels/'>Highlights</a> use foil for sharper contrasts, but regrowth shows within 6 weeks. For a busy schedule near Schuman, balayage is the lower-maintenance option." },
      { question: "How much does a balayage cost, blowout included?", answer: "From 35 €, blowout included. The final price depends on length and technique. We quote the exact price before starting — no surprises." },
      { question: "Does balayage damage fine hair?", answer: "Less than a full color: we do not treat the entire head. A restructuring treatment is applied after every session. If your hair is weakened, our colorists will suggest a <a href='/en/services/keratin-treatment-brussels/'>keratin treatment</a> as a complement." },
      { question: "How often do I need to come back for balayage?", answer: "Every 3-4 months on average. That is half as often as highlights (6-8 weeks). For clients balancing meetings between Rue de la Loi and the Schuman roundabout, it is a real time saver." }
    ]
  },

  // ─────────────────────────────────────────────
  // HIGHLIGHTS — Tone: technical made simple
  // Volume: MEDIUM (~300 words, 4 FAQ)
  // ─────────────────────────────────────────────
  {
    slug: 'highlights-brussels',
    name: 'Highlights',
    category: 'coiffure',
    price: 'On quote',
    images: ['/images/meches-1.jpg', '/images/meches-2.jpg'],
    titleTag: 'Highlights Brussels – Precise Structured Reflections | Tony&Son',
    metaDescription: 'Highlights in Brussels at Tony&Son, salon in Saint-Josse-ten-Noode. Foil, cap or freehand highlights. Expert colorists since 1970. Phone 02 230 55 37',
    h1: 'Highlights in Brussels — Tony&Son',
    description: "Custom highlights at Tony&Son, hairdresser in Brussels. Luminous, structured reflections crafted by our expert colorists.",
    crossLinks: [{ slug: 'balayage-brussels', label: 'balayage in Brussels' }, { slug: 'hair-coloring-brussels', label: 'hair coloring in Brussels' }],
    longDescription: `Highlights in Brussels, Saint-Josse-ten-Noode. If <a href="/en/services/balayage-brussels/">balayage</a> is a paintbrush, highlights are a pencil. More precise. More structured. Bold contrasts that clients from the Schuman area request when they want a visible change — not just "a little something." Service in French and English.

<h2>Why choose Tony&Son for highlights in Brussels?</h2>

Three techniques, three results. Foil highlights give a regular, clean outcome — the classic method, mastered here since 1970. Cap highlights create fine reflections, ideal for a first try. Freehand offers a looser result, halfway between classic highlights and balayage. Our colorists guide you based on your texture and expectations.

<h2>How do highlights work at Tony&Son?</h2>

The trade-off to know about: highlights need a visit every 6-8 weeks. Regrowth shows faster than with balayage (3-4 months). That is the cost of a bolder result. We tell you at the consultation — no unpleasant surprise six weeks later.

<h2>Highlights pricing in Brussels</h2>

Price depends on technique, length and thickness — we give you the exact figure at the consultation. This service is part of our <a href="/en/hairdresser/">hairdresser in Brussels</a> offering. Rue Bonneels 27, between Cinquantenaire Park and Metro Schuman. Call 02 230 55 37 or book online via <a href="https://widget.treatwell.be/fr/salon/tony-and-son/" target="_blank" rel="noopener">Treatwell</a>.`,
    faq: [
      { question: "Highlights or balayage — which look should I go for?", answer: "Highlights give clean, structured contrasts. <a href='/en/services/balayage-brussels/'>Balayage</a> is softer and more blended. Maintenance: highlights every 6-8 weeks, balayage every 3-4 months. Our colorists show you real examples of both techniques." },
      { question: "How long does a highlight session take?", answer: "Between 1h30 and 2h30 depending on technique, length and thickness. If your schedule is tight around the European Quarter, book the widest slot available." },
      { question: "Do highlights damage fragile hair?", answer: "Any lightening process works the hair fiber. We apply a restructuring treatment after every session. If your hair is too weakened, we tell you — we prefer to decline rather than risk breakage." },
      { question: "Can I get highlights on already colored hair?", answer: "Yes. We regularly add highlights over a <a href='/en/services/hair-coloring-brussels/'>colored</a> base to create dimension. Our colorists plan both treatments together." }
    ]
  },

  // ─────────────────────────────────────────────
  // OMBRE HAIR COLOR — Tone: concise, visual glossary
  // Volume: SHORT (~250 words, 4 FAQ)
  // ─────────────────────────────────────────────
  {
    slug: 'ombre-hair-color-brussels',
    name: 'Ombré Hair Color',
    category: 'coiffure',
    price: 'From 40 €',
    images: ['/images/degrade-1.jpg', '/images/degrade-2.jpg'],
    titleTag: 'Ombré Hair Color Brussels – Ombré, Sombré & Dip-Dye | Tony&Son',
    metaDescription: 'Ombré hair color in Brussels at Tony&Son. Ombré, sombré, dip-dye by expert colorists in Saint-Josse-ten-Noode. From 40 €. Phone 02 230 55 37',
    h1: 'Ombré Hair Color in Brussels — Tony&Son',
    description: "Ombré hair color at Tony&Son, hairdresser in Brussels. Ombré, sombré or dip-dye — seamless gradient tones crafted by our colorists.",
    crossLinks: [{ slug: 'hair-coloring-brussels', label: 'hair coloring in Brussels' }, { slug: 'balayage-brussels', label: 'balayage in Brussels' }],
    longDescription: `Ombré hair color in Brussels, Saint-Josse-ten-Noode. Three words, three techniques — and our colorists at Tony&Son regularly see clients mixing them up. A quick glossary. Service in French and English.

<h2>Why choose Tony&Son for ombré coloring in Brussels?</h2>

<strong>Ombré</strong>: a visible transition from dark (roots) to light (ends). Bold, eye-catching. <strong>Sombré</strong>: same principle, softer blend. "Soft ombré." The most natural of the three. <strong>Dip-dye</strong>: a sharp color break, sometimes with fantasy shades. More daring. What they share: regrowth is part of the style. Maintenance every 3-4 months only — the most budget-friendly technique for a real transformation between two quarters at the Commission.

<h2>Ombré coloring pricing in Brussels</h2>

From 40 €. We show you examples before touching anything — to make sure we are on the same page. This service is part of our <a href="/en/hairdresser/">hairdresser in Brussels</a> offering. Rue Bonneels 27, Metro Schuman. Call 02 230 55 37 or book on <a href="https://widget.treatwell.be/fr/salon/tony-and-son/" target="_blank" rel="noopener">Treatwell</a>. For more classic techniques: <a href="/en/services/hair-coloring-brussels/">full color</a>, <a href="/en/services/balayage-brussels/">balayage</a> or <a href="/en/services/highlights-brussels/">highlights</a>.`,
    faq: [
      { question: "Ombré or balayage — what is the difference?", answer: "Ombré creates a vertical transition from dark to light. <a href='/en/services/balayage-brussels/'>Balayage</a> creates diffused highlights throughout the hair. Two very different techniques — our colorists show you real examples to help you decide." },
      { question: "How much does an ombré color cost?", answer: "From 40 €, shampoo and blowout included. The final price depends on length and the technique chosen." },
      { question: "Which gradient technique looks the most natural?", answer: "Sombré. It is the softest blend — the transition is gradual, almost invisible. Ideal if you want a change without the whole office noticing on Monday morning." },
      { question: "How often does ombré need a touch-up?", answer: "Every 3-4 months. Regrowth is part of the look — no frequent visits needed. It is the most low-maintenance of all our coloring techniques." }
    ]
  },

  // ─────────────────────────────────────────────
  // BLOWOUT — Tone: short, practical, zero fluff
  // Volume: SHORT (~150 words, 4 FAQ)
  // ─────────────────────────────────────────────
  {
    slug: 'blowout-brussels',
    name: 'Blowout',
    category: 'coiffure',
    price: 'From 30 €',
    images: ['/images/brushing-1.jpg', '/images/brushing-2.jpg'],
    titleTag: 'Blowout Brussels – Sleek, Volume or Wavy | Tony&Son',
    metaDescription: 'Professional blowout in Brussels at Tony&Son, Saint-Josse-ten-Noode. Sleek, volume or wavy. Shampoo included. From 30 €. Phone 02 230 55 37',
    h1: 'Blowout in Brussels — Tony&Son',
    description: "Professional blowout at Tony&Son in Brussels. Sleek, volume or wavy finish — your choice.",
    crossLinks: [{ slug: 'hair-straightening-brussels', label: 'hair straightening in Brussels' }, { slug: 'hair-coloring-brussels', label: 'hair coloring in Brussels' }],
    longDescription: `Blowout in Brussels, Saint-Josse-ten-Noode. Between your 12 PM meeting at the Commission and lunch near Square Ambiorix, you have 45 minutes. That is exactly what it takes. Service in French and English.

<h2>How does a blowout work at Tony&Son?</h2>

Sleek, volume or wavy — shampoo and heat-protection treatment included. Hold: 2-4 days depending on texture and Brussels weather. Our stylists share practical tips — silk pillowcase, setting spray, skip the hair tie the first night — to keep it looking sharp until Friday. Can be combined with a <a href="/en/services/hair-coloring-brussels/">color</a> or <a href="/en/services/hair-straightening-brussels/">straightening treatment</a> in the same session.

<h2>Blowout pricing in Brussels</h2>

From 30 €, everything included. This service is part of our <a href="/en/hairdresser/">hairdresser in Brussels</a> offering. Book online on <a href="https://widget.treatwell.be/fr/salon/tony-and-son/" target="_blank" rel="noopener">Treatwell</a> or call 02 230 55 37. Rue Bonneels 27, steps from Metro Schuman.`,
    faq: [
      { question: "Is the shampoo included in the blowout price?", answer: "Yes. Shampoo, treatment and blowout — everything is included in the listed price. No surcharge." },
      { question: "How long does a professional blowout last?", answer: "Between 2 and 4 days. For an event, come in the morning of or the day before. We give you tips to extend the hold." },
      { question: "Can I combine a blowout and color in the same session?", answer: "Yes, that is common. We can follow a <a href='/en/services/hair-coloring-brussels/'>color</a>, <a href='/en/services/highlights-brussels/'>highlights</a> or a keratin treatment with a finishing blowout." },
      { question: "How long does a blowout appointment take?", answer: "30-45 minutes, a bit longer on very long hair. Ideal for a slot between two meetings near the European Quarter." }
    ]
  },

  // ─────────────────────────────────────────────
  // HAIR STRAIGHTENING — Tone: myth-busting, transparent
  // Volume: LONG (~450 words, 4 FAQ)
  // ─────────────────────────────────────────────
  {
    slug: 'hair-straightening-brussels',
    name: 'Hair Straightening',
    category: 'coiffure',
    price: 'From 150 €',
    images: ['/images/lissage-1.jpg', '/images/lissage-2.jpg'],
    titleTag: 'Hair Straightening Brussels – Brazilian, Tannin & Botox | Tony&Son',
    metaDescription: 'Hair straightening in Brussels at Tony&Son. Brazilian, tannin, hair botox. EU-compliant products. From 150 €. Phone 02 230 55 37',
    h1: 'Hair Straightening in Brussels — Tony&Son',
    description: "Brazilian straightening, tannin straightening and hair botox at Tony&Son in Brussels. Products compliant with European regulations.",
    crossLinks: [{ slug: 'keratin-treatment-brussels', label: 'keratin treatment in Brussels' }, { slug: 'blowout-brussels', label: 'blowout in Brussels' }],
    longDescription: `Hair straightening in Brussels, Saint-Josse-ten-Noode. It is the service that generates the most questions — and the most anxiety. On forums, the same worry comes up: "Do your products contain formaldehyde?" We have read those threads. We understand. Here is where we stand. Service in French and English.

<h2>Why choose Tony&Son for hair straightening in Brussels?</h2>

At Tony&Son, we use only products that comply with <a href="https://health.ec.europa.eu/scientific-committees/former-scientific-committees/scientific-committee-consumer-safety-sccs_en" target="_blank" rel="noopener">European regulations</a>: maximum 0.2% formaldehyde as a preservative. Our products come from official distributors, not parallel imports. Want to see the product data sheet? We will show it to you. Non-negotiable.

<h2>How does hair straightening work at Tony&Son?</h2>

Three options, three different outcomes. <strong>Brazilian keratin straightening</strong>: the most effective. Genuinely straightens, reduces volume by 60-80%, eliminates frizz. Duration: 3-6 months. The right choice if you are tired of flat-ironing every morning before heading to Rue de la Loi. <strong>Tannin straightening</strong>: gentler. Ideal for fine hair or hair weakened by repeated <a href="/en/services/hair-coloring-brussels/">coloring</a>. Duration: 2-4 months. <strong>Hair botox</strong>: not a straightening treatment. It is a deep conditioning that restores shine without altering the structure. If you confuse it with a <a href="/en/services/keratin-treatment-brussels/">keratin treatment</a>, that is normal — we explain the difference on site.

On very curly or coily hair: the Brazilian treatment dramatically reduces volume and makes styling easier, but the result is not always "pin-straight." Our stylists show you before-and-after photos on similar textures. No false promises. After the treatment: sulfate-free shampoo required, no tying or washing for 48-72 hours. We hand you written aftercare instructions.

<h2>Hair straightening pricing in Brussels</h2>

Brazilian keratin: from 150 €. Tannin and botox: on consultation. This service is part of our <a href="/en/hairdresser/">hairdresser in Brussels</a> offering. Rue Bonneels 27, next to Metro Schuman (lines 1/5). Call 02 230 55 37 or book via <a href="https://widget.treatwell.be/fr/salon/tony-and-son/" target="_blank" rel="noopener">Treatwell</a>.`,
    faq: [
      { question: "Do your straightening products contain formaldehyde?", answer: "Our products comply with European regulations (max 0.2% as a preservative). Official distributors only. We show you the product data sheet before applying anything — transparency is non-negotiable at Tony&Son." },
      { question: "What should I budget for a Brazilian straightening?", answer: "From 150 € for a Brazilian straightening, all included. The exact price depends on length and thickness. We give you the price before starting." },
      { question: "Brazilian, tannin or hair botox — how do I choose?", answer: "Brazilian genuinely straightens (3-6 months). Tannin is gentler, for fragile hair (2-4 months). Botox is a treatment — it nourishes without straightening (1-3 months). Our stylists guide you after an honest assessment of your hair." },
      { question: "Can I color my hair after a Brazilian straightening?", answer: "Wait at least 2-3 weeks. Ideally, get the <a href='/en/services/hair-coloring-brussels/'>color</a> done BEFORE the straightening. Our stylists plan the sequence together to protect the hair fiber." }
    ]
  },

  // ─────────────────────────────────────────────
  // KERATIN TREATMENT — Tone: educational, "watch the confusion"
  // Volume: MEDIUM (~300 words, 4 FAQ)
  // ─────────────────────────────────────────────
  {
    slug: 'keratin-treatment-brussels',
    name: 'Keratin Treatment',
    category: 'coiffure',
    price: 'On quote',
    images: ['/images/keratine-1.jpg', '/images/keratine-2.jpg'],
    titleTag: 'Keratin Treatment Brussels – Repair & Shine | Tony&Son',
    metaDescription: 'Keratin treatment in Brussels at Tony&Son. Repairing, anti-frizz, shine. Formaldehyde-free. Saint-Josse-ten-Noode. Phone 02 230 55 37',
    h1: 'Keratin Treatment in Brussels — Tony&Son',
    description: "Keratin hair treatments at Tony&Son, hairdresser in Brussels. Repair, shine and frizz control for your hair.",
    crossLinks: [{ slug: 'hair-straightening-brussels', label: 'hair straightening in Brussels' }, { slug: 'hair-coloring-brussels', label: 'hair coloring in Brussels' }],
    longDescription: `Keratin treatment in Brussels, Saint-Josse-ten-Noode. This is NOT a straightening treatment. That is the confusion we hear ten times a week, and it makes sense: both use the word "keratin." But they do very different things. Service in French and English.

<h2>Why choose Tony&Son for keratin treatment in Brussels?</h2>

A keratin treatment is a conditioning service. It rebuilds the natural protein of the hair — the protein that blow-drying, pollution along Avenue de Cortenbergh, repeated <a href="/en/services/hair-coloring-brussels/">coloring</a> and sun exposure break down. The result: softer, shinier hair, reduced frizz. But the structure does not change. For actual straightening, you need our <a href="/en/services/hair-straightening-brussels/">Brazilian straightening service</a>.

<h2>How does keratin treatment work at Tony&Son?</h2>

Especially useful after a color, balayage or highlights — the treatment repairs damage and extends color vibrancy. Allow 1h30-2h at the salon. The effect lasts 3-4 months with a sulfate-free shampoo. Our products comply with European standards, formaldehyde-free. Clients from the European Quarter often combine it with their regular coloring — it is the duo that works best.

<h2>Keratin treatment pricing in Brussels</h2>

Price on consultation — depends on length and hair condition. This service is part of our <a href="/en/hairdresser/">hairdresser in Brussels</a> offering. Rue Bonneels 27, two minutes from Metro Schuman. Call 02 230 55 37 or book on <a href="https://widget.treatwell.be/fr/salon/tony-and-son/" target="_blank" rel="noopener">Treatwell</a>.`,
    faq: [
      { question: "What is the difference between keratin and Brazilian straightening?", answer: "A keratin treatment is a repair service — it nourishes, reduces frizz, but does not change the hair structure. Brazilian straightening genuinely straightens. If you want straight hair, go with the straightening. If you want repaired, shiny hair, go with keratin." },
      { question: "How long does a keratin treatment last?", answer: "3-4 months with a sulfate-free shampoo. The effect fades gradually — no harsh line of demarcation." },
      { question: "Is keratin compatible with colored hair?", answer: "Yes, and it is actually recommended. Keratin repairs <a href='/en/services/hair-coloring-brussels/'>color</a> damage and extends the vibrancy of your shade. Many of our clients combine the two." },
      { question: "What shampoo should I use after a keratin treatment?", answer: "A sulfate-free shampoo is required to prolong the effect. We recommend specific brands at the end of the session — not just 'sulfate-free' but products our stylists have tested personally." }
    ]
  },

  // ─────────────────────────────────────────────
  // HAIR EXTENSIONS — Tone: direct, honest, pragmatic
  // Volume: LONG (~400 words, 4 FAQ)
  // ─────────────────────────────────────────────
  {
    slug: 'hair-extensions-brussels',
    name: 'Hair Extensions',
    category: 'coiffure',
    price: 'From 500 €',
    images: ['/images/extensions-1.jpg', '/images/extensions-2.jpg'],
    titleTag: 'Hair Extensions Brussels – Expert Remy Application | Tony&Son',
    metaDescription: 'Natural hair extensions in Brussels at Tony&Son. Keratin, micro-rings, tape-in, clip-in. Remy hair. From 500 €. Phone 02 230 55 37',
    h1: 'Hair Extensions in Brussels — Tony&Son',
    description: "Natural hair extensions at Tony&Son in Brussels. Expert application, Remy hair, invisible result.",
    crossLinks: [{ slug: 'hair-regrowth-brussels', label: 'hair regrowth in Brussels' }, { slug: 'hair-coloring-brussels', label: 'hair coloring in Brussels' }],
    longDescription: `Hair extensions in Brussels, Saint-Josse-ten-Noode. "Will they damage my hair?" That is the question on every forum — and the first thing we hear at the salon. Short answer: it depends on who applies and who removes them. At Tony&Son, we handle both with care. Service in French and English.

<h2>Why choose Tony&Son for hair extensions in Brussels?</h2>

We use only natural Remy hair — cuticles aligned in the same direction, zero synthetic. That is what separates extensions that tangle after 3 weeks from those that stay smooth for months. A Belgian specialist recommends tape-ins for fine and fragile hair. Our stylists agree: it is the gentlest technique for finer textures. A consultation is required — we assess density, hair health and your lifestyle. If your hair is too damaged, we say so and direct you toward <a href="/en/services/hair-regrowth-brussels/">regrowth treatments</a> or <a href="/en/services/keratin-treatment-brussels/">keratin</a> first.

<h2>How do hair extensions work at Tony&Son?</h2>

Four techniques, four situations. <strong>Keratin (hot fusion)</strong>: longest-lasting, 3-4 months. Invisible result, ideal for daily wear. <strong>Micro-rings (cold fusion)</strong>: no heat, same duration, less stress. <strong>Tape-in (adhesive)</strong>: fast application, reapplication every 6-8 weeks — best ratio for busy professionals near Schuman. <strong>Clip-in</strong>: zero commitment. Perfect for an event at Cinquantenaire Park.

<h2>Hair extensions pricing in Brussels</h2>

From 500 €, depending on technique and quantity. This service is part of our <a href="/en/hairdresser/">hairdresser in Brussels</a> offering. Rue Bonneels 27, Metro Schuman (lines 1/5). Book a consultation at 02 230 55 37 or online via <a href="https://widget.treatwell.be/fr/salon/tony-and-son/" target="_blank" rel="noopener">Treatwell</a>.`,
    faq: [
      { question: "Do hair extensions cause damage?", answer: "It depends on the application AND the removal. At Tony&Son, we handle both steps with precision. Well-applied and properly removed extensions leave no damage. The risk comes from amateur applications or rough removals. Some of our clients have worn extensions with us for years without any issue." },
      { question: "What should I budget for hair extensions?", answer: "From 500 € depending on technique and number of strands. The exact price is given after the required consultation — we assess your needs before quoting." },
      { question: "Which extension technique is best for fine hair?", answer: "Tape-in or micro-rings: less weight, less traction. Belgian specialists recommend these for fine textures. Keratin extensions are also possible with smaller strands. We assess on a case-by-case basis." },
      { question: "How long do extensions last depending on the technique?", answer: "Keratin: 3-4 months. Micro-rings: 3-4 months. Tape-in: reapplication every 6-8 weeks. Clip-in: as long as you like. We explain the maintenance schedule at the consultation." }
    ]
  },

  // ─────────────────────────────────────────────
  // PERM — Tone: nostalgic revisited, fun
  // Volume: MEDIUM (~300 words, 4 FAQ)
  // ─────────────────────────────────────────────
  {
    slug: 'perm-brussels',
    name: 'Perm',
    category: 'coiffure',
    price: 'On quote',
    images: ['/images/permanente-1.jpg', '/images/permanente-2.jpg'],
    titleTag: 'Perm Brussels – Modern Curls & Waves | Tony&Son',
    metaDescription: 'Modern perms in Brussels at Tony&Son. Spiral, body wave, partial perm. Gentle formulas. Saint-Josse-ten-Noode. Phone 02 230 55 37',
    h1: 'Perm in Brussels — Tony&Son',
    description: "Modern perms at Tony&Son in Brussels. Natural curls, soft waves or volume — the 1980s perm is history.",
    crossLinks: [{ slug: 'hair-coloring-brussels', label: 'hair coloring in Brussels' }, { slug: 'blowout-brussels', label: 'blowout in Brussels' }],
    longDescription: `Perm in Brussels, Saint-Josse-ten-Noode. Your mother had one in the 1980s and it left lasting memories — not the good kind. We know. The perms of 2025 are a completely different story. Ammonia-free formulas enriched with silk proteins — results you control, not endure. Service in French and English.

<h2>Why choose Tony&Son for a perm in Brussels?</h2>

Three variations. <strong>Spiral</strong> for defined curls. <strong>Body wave</strong> for natural-looking waves — the most popular choice among our clients between Ixelles and the Schuman area. And <strong>partial perm</strong>: roots only (for volume) or ends only (for movement). You do not have to curl everything.

<h2>How does a perm work at Tony&Son?</h2>

We do not perm hair that is too damaged. Recent Brazilian straightening? Intensive bleaching? Our stylists tell you straight and suggest an alternative — a <a href="/en/services/keratin-treatment-brussels/">keratin treatment</a> to strengthen the fiber first. Allow 2-3 hours at the salon. The result lasts 3-6 months.

<h2>Perm pricing in Brussels</h2>

Price on consultation — depends on length and technique. This service is part of our <a href="/en/hairdresser/">hairdresser in Brussels</a> offering. Rue Bonneels 27, Metro Schuman (lines 1/5). Book at 02 230 55 37 or online via <a href="https://widget.treatwell.be/fr/salon/tony-and-son/" target="_blank" rel="noopener">Treatwell</a>.`,
    faq: [
      { question: "Do modern perms damage hair?", answer: "Today's formulas are incomparably gentler than before — ammonia-free, enriched with proteins. We always assess your hair condition first. If the risk is too high (recent color, <a href='/en/services/hair-straightening-brussels/'>straightening</a>), we tell you." },
      { question: "What is the price and duration of a perm?", answer: "Allow 2-3 hours at the salon. The result lasts 3-6 months. The price depends on length and technique — we give you the exact price after a consultation." },
      { question: "Which perm gives a natural wave effect?", answer: "The body wave. Soft undulations, not tight ringlets. A partial perm on the ends also adds movement without changing everything — ideal if you want to try before committing to the full head." },
      { question: "Can I combine a perm and coloring?", answer: "Yes, with at least 2 weeks between the two treatments. On heavily bleached hair, perming is not recommended. Our stylists plan the treatments in the right order." }
    ]
  },

  // ─────────────────────────────────────────────
  // HAIR REGROWTH — Tone: empathetic, honest
  // Volume: MEDIUM (~350 words, 4 FAQ)
  // ─────────────────────────────────────────────
  {
    slug: 'hair-regrowth-brussels',
    name: 'Hair Regrowth',
    category: 'coiffure',
    price: 'On quote',
    images: ['/images/repousse-1.jpg', '/images/repousse-2.jpg'],
    titleTag: 'Hair Regrowth Brussels – Anti-Hair Loss & Stimulation | Tony&Son',
    metaDescription: 'Hair regrowth treatments in Brussels at Tony&Son. Anti-hair loss care, growth stimulation. Saint-Josse-ten-Noode since 1970. Phone 02 230 55 37',
    h1: 'Hair Regrowth in Brussels — Tony&Son',
    description: "Hair regrowth treatments at Tony&Son in Brussels. Anti-hair loss care and hair growth stimulation in Saint-Josse-ten-Noode.",
    crossLinks: [
      { slug: 'keratin-treatment-brussels', label: 'keratin treatment in Brussels' },
      { slug: 'hair-extensions-brussels', label: 'hair extensions in Brussels' }
    ],
    longDescription: `Hair regrowth in Brussels, Saint-Josse-ten-Noode. Hair loss is not something people talk about easily. Stress from negotiations on Rue de la Loi, hormonal changes, nutritional deficiencies, medical treatments — the causes are many. At Tony&Son, we do not promise miracles. We offer treatments that work, in a discreet setting. Service in French and English.

<h2>Why choose Tony&Son for hair regrowth in Brussels?</h2>

Since 1970, our salon has seen every situation. Diffuse shedding after pregnancy, androgenetic alopecia, hair weakened by repeated <a href="/en/services/hair-coloring-brussels/">coloring</a> or <a href="/en/services/hair-straightening-brussels/">straightening</a>. Our stylists always start with a full scalp assessment — we look, we listen, and we tell you what is realistically achievable. The first appointment is a diagnosis. No hard sell, no pressure. If your situation calls for medical follow-up, we tell you — we would rather refer you than sell you an unsuitable treatment.

<h2>How do hair regrowth treatments work at Tony&Son?</h2>

Professional topical products, scalp massages to stimulate microcirculation, strengthening protocols. We also work with <a href="/en/services/keratin-treatment-brussels/">keratin treatments</a> to reinforce existing fiber. When regrowth alone is not enough, our <a href="/en/services/hair-extensions-brussels/">hair extensions</a> provide immediate volume. Our clients come from the Schuman area, Schaerbeek, Etterbeek and Cinquantenaire Park for this honest approach.

<h2>Hair regrowth pricing in Brussels</h2>

Price on consultation — depends on the protocol. This service is part of our <a href="/en/hairdresser/">hairdresser in Brussels</a> offering. Rue Bonneels 27, Metro Schuman (lines 1/5). Call 02 230 55 37 or book online via <a href="https://widget.treatwell.be/fr/salon/tony-and-son/" target="_blank" rel="noopener">Treatwell</a>.`,
    faq: [
      { question: "What anti-hair loss treatments do you offer at the salon?", answer: "Professional topical products, stimulating scalp massages and hair strengthening protocols. Each treatment is tailored after a full assessment of your situation." },
      { question: "How many sessions before I see real results?", answer: "Initial results are visible after 4-6 sessions, spaced 2-3 weeks apart. The full protocol runs 3-6 months depending on the cause. We give you a realistic timeline from the first appointment." },
      { question: "Do salon treatments work for androgenetic alopecia?", answer: "They can slow progression and improve perceived density. We are honest: androgenetic alopecia often requires complementary medical support. We refer you if needed." },
      { question: "Can I combine hair regrowth treatments with coloring?", answer: "Yes, with an adapted protocol. We space the treatments and use gentle <a href='/en/services/hair-coloring-brussels/'>coloring</a> products to avoid further weakening. Our stylists plan the order of care with you." }
    ]
  },

  // ─────────────────────────────────────────────
  // KIDS HAIRCUT — Tone: family, warm, emotional
  // Volume: MEDIUM (~300 words, 4 FAQ)
  // ─────────────────────────────────────────────
  {
    slug: 'kids-haircut-brussels',
    name: 'Kids Haircut',
    category: 'coiffure',
    categoryParents: ['coiffure', 'barbier'],
    price: 'From 25 €',
    images: ['/images/enfant-1.jpg', '/images/enfant-2.jpg'],
    titleTag: 'Kids Haircut Brussels – Family-Friendly Salon | Tony&Son',
    metaDescription: 'Kids haircuts in Brussels at Tony&Son, family salon in Saint-Josse-ten-Noode since 1970. Boys and girls. From 25 €. Phone 02 230 55 37',
    h1: 'Kids Haircut in Brussels — Tony&Son',
    description: "Kids haircuts in a reassuring atmosphere at Tony&Son in Brussels. Patience, gentleness and a neat result for the little ones.",
    crossLinks: [{ slug: 'beard-trim-brussels', label: 'beard trim in Brussels' }],
    longDescription: `Kids haircut in Brussels, Saint-Josse-ten-Noode. On local review sites, parents keep asking the same thing: "a hairdresser who is ACTUALLY good with children." At Tony&Son, three generations of the Campisi family have been welcoming young clients — we know that one bad experience at age 3 can leave a mark well into adolescence. Service in French and English.

<h2>Why choose Tony&Son for kids haircuts in Brussels?</h2>

If the child cries, we wait. Mum's lap? No problem. Cut done in two parts because they lose patience after 5 minutes? We adapt. The result matters, but so does the experience. Families from the Schuman area, Etterbeek and Schaerbeek come back for this: a salon where the child leaves happy and the parents leave with that sneaky video they filmed.

<h2>Kids haircut pricing in Brussels</h2>

Boys and girls, same price: from 25 €. Fade, bob, fringe, buzz cut — our stylists handle all of it. Wednesdays and Saturdays get busy (school half-day + weekend). This service is part of our <a href="/en/hairdresser/">hairdresser</a> and <a href="/en/barber/">barber in Brussels</a> offering. Book online via <a href="https://widget.treatwell.be/fr/salon/tony-and-son/" target="_blank" rel="noopener">Treatwell</a> or call 02 230 55 37. Rue Bonneels 27, next to Cinquantenaire Park.`,
    faq: [
      { question: "How do you handle a child who is afraid of the hairdresser?", answer: "We have been doing this since 1970. Our stylists adapt to the child's pace: breaks if needed, sitting on a parent's lap, zero pressure. The goal: they leave with a good memory, not a bad one." },
      { question: "What is the price of a kids haircut, boys and girls?", answer: "25 € regardless of gender. The price only goes up for a complex cut (elaborate fade, special occasion). No surprises." },
      { question: "What is the youngest age you accept?", answer: "From the very youngest age, including first haircuts. Some of our smallest clients are under one year old." },
      { question: "Which day is the quietest to bring a child?", answer: "Tuesday and Thursday afternoons are the calmest slots. Wednesday and Saturday are packed — book ahead on Treatwell if you are aiming for those days." }
    ]
  },

  // ─────────────────────────────────────────────
  // BEARD TRIM — Tone: masculine, sensory, confidence
  // Volume: LONG (~450 words, 4 FAQ)
  // ─────────────────────────────────────────────
  {
    slug: 'beard-trim-brussels',
    name: 'Beard Trim',
    category: 'barbier',
    price: 'On quote',
    images: ['/images/barbier-1.jpg', '/images/barbier-2.jpg'],
    titleTag: 'Beard Trim Brussels – Shave & Precise Fade | Tony&Son',
    metaDescription: 'Beard trim in Brussels at Tony&Son. Traditional shave, fade, hot towel. Expert barber in Saint-Josse-ten-Noode. Phone 02 230 55 37',
    h1: 'Beard Trim in Brussels — Tony&Son',
    description: "Precise beard trim at Tony&Son, barber in Brussels. Traditional shave, fade, hot towel. All beard types.",
    crossLinks: [{ slug: 'kids-haircut-brussels', label: 'kids haircut in Brussels' }],
    longDescription: `Beard trim in Brussels, Saint-Josse-ten-Noode. On review platforms, a client wrote: "I am always nervous with barbers — the result never looks like what I asked for." We read that often. That is exactly why our barbers start by talking — not cutting. Service in French and English.

<h2>Why choose Tony&Son for a beard trim in Brussels?</h2>

We look. Face shape, hair density, growth direction. We ask what you want. Reference photo? Great. Vague idea? We suggest. And only then: precision clippers for volume, scissors for detailing, straight razor for the outline. Clean. The American fade? Skin fade, mid fade, high fade, taper — on every texture. European, North African, Afro, Asian hair. A fade on coily hair is not done the same way as on straight hair, and our barbers adapt without being asked. Clients from Schaerbeek and the Schuman roundabout come specifically for this.

<h2>How does a beard trim work at Tony&Son?</h2>

The traditional cutthroat razor shave is our signature. Hot towel to open the pores, lather with a badger brush, blade, aftershave care. Regulars from the European Quarter come back for this moment as much as for the result. It is 20 minutes of quiet in a day full of meetings on Rue de la Loi.

<h2>Beard trim pricing in Brussels</h2>

Price depends on the service (simple trim, traditional shave, haircut + beard combo). This service is part of our <a href="/en/barber/">barber in Brussels</a> offering. Rue Bonneels 27, Metro Schuman (lines 1/5), tram 81. Fridays and Saturdays are busy — book online via <a href="https://widget.treatwell.be/fr/salon/tony-and-son/" target="_blank" rel="noopener">Treatwell</a> or call 02 230 55 37. Walk-ins accepted on weekdays, subject to availability.`,
    faq: [
      { question: "Do you offer a traditional cutthroat razor shave?", answer: "Yes. Hot towel, lather with a badger brush, straight razor, aftershave care. It is our signature — allow 20 minutes. By appointment." },
      { question: "What is the price of a beard trim with finishing?", answer: "The price depends on the service (simple trim, traditional shave, haircut + beard combo). We give you the exact price before starting. Call 02 230 55 37 for a quick quote." },
      { question: "Can you do fades on all hair textures?", answer: "Skin fade, mid fade, high fade, taper — on European, North African, Afro or Asian hair. Bring a reference photo if you want a specific result. Our barbers adapt the technique to each texture." },
      { question: "Do I need to book or can I walk in?", answer: "Booking is recommended, especially on Fridays and Saturdays. Reserve via <a href='https://widget.treatwell.be/fr/salon/tony-and-son/' target='_blank' rel='noopener'>Treatwell</a> or call 02 230 55 37. Walk-ins are accepted on weekdays, subject to availability." }
    ]
  },

  // ─────────────────────────────────────────────
  // MEN'S HAIRCUT — Tone: masculine, direct, confidence
  // Volume: LONG (~450 words, 4 FAQ)
  // ─────────────────────────────────────────────
  {
    slug: 'mens-haircut-brussels',
    name: "Men's Haircut",
    category: 'barbier',
    categoryParents: ['coiffure', 'barbier'],
    price: 'From 25 €',
    images: ['/images/barbier-1.jpg', '/images/barbier-2.jpg'],
    titleTag: "Men's Haircut Brussels – Fade, Classic & Trending | Tony&Son",
    metaDescription: "Men's haircut in Brussels at Tony&Son, salon in Saint-Josse-ten-Noode since 1970. Fade, classic, trending styles. From 25 €. Phone 02 230 55 37",
    h1: "Men's Haircut in Brussels — Tony&Son",
    description: "Custom men's haircut at Tony&Son, hairdresser and barber in Brussels. Fade, classic, trending — all hair textures since 1970.",
    crossLinks: [{ slug: 'beard-trim-brussels', label: 'beard trim in Brussels' }, { slug: 'hair-coloring-brussels', label: 'hair coloring in Brussels' }, { slug: 'kids-haircut-brussels', label: 'kids haircut in Brussels' }],
    longDescription: `Men's haircut in Brussels, Saint-Josse-ten-Noode — at Tony&Son, the men's cut has been our DNA since 1970. Tony Campisi started with that. Three generations later, his son Salvatore — trained at Toni&Guy in London — and the team carry on the tradition with the same standard: a cut that matches your face, your style and your daily life. Service in French and English.

<h2>Why choose Tony&Son for a men's haircut in Brussels?</h2>

We don't cut every man the same way. An American fade (skin fade, mid fade, taper) on coily hair is not done the same as on straight hair. A classic scissor cut on fine hair requires a different technique than a textured cut on thick hair. Our stylists adapt to every texture — European, North African, Afro, Asian — without needing to be asked. That's what brings regulars back from Schaerbeek, the Schuman roundabout and Etterbeek.

<h2>How does a men's haircut work at Tony&Son?</h2>

We start by looking and listening. Reference photo? Great. Vague idea? We suggest. We tell you what works with your face shape and what won't hold up between cuts. Then we cut. Precision clippers for fades, scissors for structure, razor for outlines. Shampoo and styling included — the quoted price is the final price.

<h2>Men's haircut pricing in Brussels</h2>

From 25 €, all included. Price varies by complexity (simple cut, elaborate fade, cut + <a href="/en/services/beard-trim-brussels/">beard</a> combo). This service is part of our <a href="/en/barber/">barber in Brussels</a> and <a href="/en/hairdresser/">hairdresser in Brussels</a> offering. Rue Bonneels 27, two minutes from Metro Schuman (lines 1/5). Book on <a href="https://widget.treatwell.be/fr/salon/tony-and-son/" target="_blank" rel="noopener">Treatwell</a> or call 02 230 55 37. Fridays and Saturdays fill up fast — book ahead.`,
    faq: [
      { question: "What is the price of a men's haircut at Tony&Son?", answer: "From 25 €, shampoo and styling included. Price depends on complexity: classic cut, elaborate fade, or cut + beard combo. We confirm the price before starting." },
      { question: "Do you do American fades on all hair textures?", answer: "Yes. Skin fade, mid fade, high fade, taper — on European, North African, Afro or Asian hair. Our stylists adapt the technique to each texture. Bring a reference photo if you have a specific result in mind." },
      { question: "Do I need to book or can I walk in?", answer: "Booking is recommended, especially on Fridays and Saturdays. Reserve via <a href='https://widget.treatwell.be/fr/salon/tony-and-son/' target='_blank' rel='noopener'>Treatwell</a> or call 02 230 55 37. Walk-ins accepted on weekdays, subject to availability." },
      { question: "Can I combine a haircut with a beard trim?", answer: "Yes, it's our most popular combo. Mention it when booking so we can allocate the right time. See our <a href='/en/services/beard-trim-brussels/'>beard trim</a> page for details." }
    ]
  },

  // ─────────────────────────────────────────────
  // FACIAL WAXING — Tone: ultra-factual
  // Volume: VERY SHORT (~80 words, 2 FAQ)
  // ─────────────────────────────────────────────
  {
    slug: 'facial-waxing-brussels',
    name: 'Facial Waxing',
    category: 'barbier',
    price: '10 €',
    images: ['/images/epilation-1.jpg'],
    titleTag: 'Facial Waxing Brussels – Brows & Upper Lip | Tony&Son',
    metaDescription: 'Facial waxing in Brussels at Tony&Son. Eyebrows, upper lip, chin. 10 €. Saint-Josse-ten-Noode. Phone 02 230 55 37',
    h1: 'Facial Waxing in Brussels — Tony&Son',
    description: "Facial waxing at Tony&Son in Brussels. Eyebrows, upper lip, chin. 10 €.",
    crossLinks: [{ slug: 'beard-trim-brussels', label: 'beard trim in Brussels' }],
    longDescription: `Facial waxing in Brussels, Saint-Josse-ten-Noode. Eyebrows, upper lip, chin — warm wax, quick technique, 10 €. Men and women. Service in French and English.

<h2>Facial waxing pricing in Brussels</h2>

10 € per zone. Can be combined with a <a href="/en/services/beard-trim-brussels/">beard trim</a> or a <a href="/en/services/blowout-brussels/">blowout</a> in the same session — mention it when booking on <a href="https://widget.treatwell.be/fr/salon/tony-and-son/" target="_blank" rel="noopener">Treatwell</a> or at 02 230 55 37. This service is part of our <a href="/en/barber/">barber in Brussels</a> offering. Rue Bonneels 27, Metro Schuman.`,
    faq: [
      { question: "Is facial waxing painful?", answer: "The technique is quick and the sensation brief. We use warm wax — less aggressive than hot wax." },
      { question: "Can I combine waxing with other services?", answer: "Yes. Many clients add eyebrow waxing to their haircut or <a href='/en/services/beard-trim-brussels/'>beard trim</a>. Just mention it when booking." }
    ]
  }
];

export function getEnServicesByCategory(category: 'coiffure' | 'barbier') {
  return servicesEn.filter(s =>
    s.category === category ||
    (s.categoryParents && s.categoryParents.includes(category))
  );
}

export function getEnServiceBySlug(slug: string) {
  return servicesEn.find(s => s.slug === slug);
}
