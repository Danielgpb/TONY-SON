export interface Service {
  slug: string;
  name: string;
  category: 'coiffure' | 'barbier';
  categoryParents?: ('coiffure' | 'barbier')[];
  price?: string;
  titleTag: string;
  metaDescription: string;
  h1: string;
  description: string;
  longDescription: string;
  crossLinks: { slug: string; label: string }[];
  images?: string[];
  faq: { question: string; answer: string }[];
}

// ═══════════════════════════════════════════════════════════════
// TONS DÉFINIS PAR PAGE (Core 30, Section 9)
// ═══════════════════════════════════════════════════════════════
// Coloration       → Rassurant, expert, « on rattrape tout »
// Balayage         → Lifestyle, Instagram-aware, tendance
// Brushing         → Court, pratique, zéro blabla
// Lissage          → Myth-busting, transparent, factuel (sujet anxiogène)
// Coupes enfants   → Familial, émotionnel, chaleureux
// Mèches           → Technique vulgarisé, comparaisons visuelles
// Kératine         → Didactique, « attention confusion »
// Extensions       → Direct, honnête, pragmatique
// Permanentes      → Nostalgique revisité, fun, décomplexé
// Taille de barbe  → Masculin, expérience sensorielle, confiance
// Coloration dégradé → Concis, visuel, glossaire
// Épilation        → Ultra-factuel, 3 phrases suffisent
// ═══════════════════════════════════════════════════════════════

export const services: Service[] = [
  // ─────────────────────────────────────────────
  // COLORATION — Ton : rassurant, expert
  // Volume : LONG (6 paragraphes, 5 FAQ)
  // ─────────────────────────────────────────────
  {
    slug: 'colorations-capillaires-bruxelles',
    name: 'Colorations capillaires',
    category: 'coiffure',
    categoryParents: ['coiffure', 'barbier'],
    price: 'À partir de 40 €',
    titleTag: 'Colorations capillaires Bruxelles – Couleur sur mesure | Tony&Son',
    metaDescription: 'Colorations capillaires à Bruxelles chez Tony&Son, salon à Saint-Josse-ten-Noode depuis 1970. Coloration, retouche racines, végétale. Dès 40 €. ☎ 02 230 55 37',
    h1: 'Colorations capillaires à Bruxelles — Tony&Son',
    description: "Colorations sur mesure pour révéler votre style. Chez Tony&Son, coiffeur à Bruxelles, nos coloristes experts subliment vos cheveux avec des teintes éclatantes tout en préservant leur brillance.",
    crossLinks: [{ slug: 'balayage-bruxelles', label: 'balayage à Bruxelles' }, { slug: 'meches-bruxelles', label: 'mèches à Bruxelles' }, { slug: 'coloration-degrade-bruxelles', label: 'coloration en dégradé' }],
    longDescription: `Coloration capillaire à Bruxelles, Saint-Josse-ten-Noode — c'est le service pour lequel on nous appelle le plus souvent au 02 230 55 37. Pas toujours pour une première couleur. Sur <a href="https://www.qcunbon.be" target="_blank" rel="noopener">qcunbon.be</a>, la phrase revient en boucle : « Mes cheveux ont viré à l'orange. » Entre le rond-point Schuman et l'avenue de Cortenbergh, on connaît cette situation par cœur.

La correction de couleur, c'est un métier à part entière. Nos coloristes — certains travaillent ici depuis plus de huit ans — ont rattrapé des dizaines de cas : cuivré non voulu, racines mal fondues, teinte trop foncée qu'un autre salon n'a pas su doser. Sur les forums, une cliente bruxelloise raconte avoir payé 220 € pour une correction ailleurs. Chez nous, le diagnostic est gratuit et le prix annoncé avant qu'on touche un seul cheveu.

On commence toujours par regarder. La base naturelle, la texture, les anciens traitements. On vous demande ce que vous voulez, on vous dit ce qui est réaliste — et ce qui ne l'est pas. C'est cette honnêteté qui fait revenir nos clientes d'Etterbeek, du quartier européen et de Schaerbeek depuis trois générations.

Les tarifs. Coloration complète : à partir de 40 €. Retouche racines, ton sur ton, végétale — le prix dépend de la technique et de la longueur. Conformément aux <a href="https://economie.fgov.be/fr/themes/ventes/pratiques-du-marche-et/indication-des-prix" target="_blank" rel="noopener">directives du SPF Économie</a>, tout est compris : shampooing, soin, brushing de finition. Zéro supplément.

Pour un résultat plus naturel, on propose aussi le <a href="/fr/services/balayage-bruxelles/">balayage</a> — des reflets peints à main levée qui tiennent 3-4 mois. Les <a href="/fr/services/meches-bruxelles/">mèches</a> donnent des contrastes plus francs. Et pour celles qui veulent zéro chimie, on travaille avec des colorations végétales. Moins de couverture sur les cheveux blancs, mais aucune agression.

Rue Bonneels 27, à deux minutes du métro Schuman (lignes 1 et 5). Retrouvez l'ensemble de nos services sur notre page <a href="/fr/coiffure/">coiffure à Bruxelles</a>. Réservez votre créneau en ligne via <a href="https://widget.treatwell.be/fr/salon/tony-and-son/" target="_blank" rel="noopener">Treatwell</a> — les créneaux du mercredi midi partent vite, pause déjeuner des institutions oblige.`,
    faq: [
      { question: "Pouvez-vous rattraper une coloration ratée dans un autre salon ?", answer: "C'est l'une de nos spécialités. Nos coloristes réalisent un diagnostic gratuit, identifient le problème et proposent un protocole de correction. Appelez au 02 230 55 37 pour en discuter avant de prendre rendez-vous." },
      { question: "Quel est le tarif total d'une coloration, brushing compris ?", answer: "À partir de 40 €, tout inclus : shampooing, soin et brushing de finition. Le prix exact dépend de la technique et de la longueur. On vous confirme le montant avant de commencer — jamais de surprise sur la facture." },
      { question: "Coloration complète ou balayage : quelle technique choisir ?", answer: "La coloration couvre l'ensemble de la chevelure ou les racines. Le balayage crée des reflets naturels sans toucher la racine — repousse discrète, entretien tous les 3-4 mois. Si vous hésitez, nos coloristes vous montrent la différence sur des exemples concrets." },
      { question: "Tous les combien faut-il refaire sa couleur ?", answer: "Coloration permanente : retouche racines toutes les 4-6 semaines. Ton sur ton : s'estompe en 6-8 semaines. Le balayage tient 3-4 mois — l'option la moins contraignante si votre agenda entre Schuman et la rue de la Loi ne laisse pas beaucoup de marge." }
    ]
  },

  // ─────────────────────────────────────────────
  // BALAYAGE — Ton : lifestyle, tendance
  // Volume : MOYEN (4 paragraphes, 4 FAQ)
  // ─────────────────────────────────────────────
  {
    slug: 'balayage-bruxelles',
    name: 'Balayage',
    category: 'coiffure',
    price: 'À partir de 35 €',
    titleTag: 'Balayage Bruxelles – Reflets naturels & lumineux | Tony&Son',
    metaDescription: 'Balayage à Bruxelles chez Tony&Son, salon à Saint-Josse-ten-Noode. Reflets naturels à main levée, babylights, balayage miel ou cendré. Dès 35 €. ☎ 02 230 55 37',
    h1: 'Balayage à Bruxelles — Tony&Son',
    description: "Balayage naturel et lumineux réalisé par nos coloristes experts chez Tony&Son, coiffeur à Bruxelles. Des reflets sur mesure pour illuminer vos cheveux.",
    crossLinks: [{ slug: 'colorations-capillaires-bruxelles', label: 'colorations capillaires à Bruxelles' }, { slug: 'meches-bruxelles', label: 'mèches à Bruxelles' }],
    longDescription: `Balayage à Bruxelles, Saint-Josse-ten-Noode. L'effet « baigné de soleil » — sans passer par la case plage. C'est le service le plus demandé entre midi et deux par les clientes du quartier Schuman qui veulent un changement visible mais pas de contrainte d'entretien.

La technique : chaque mèche est peinte à main levée, pas au papier aluminium comme pour des <a href="/fr/services/meches-bruxelles/">mèches classiques</a>. Le résultat ? Des reflets qui ont l'air naturels, une repousse qui se fond au lieu de marquer. Trois mois sans retouche. Quatre, si votre coloriste a bien dosé. C'est le service le plus photographié sur <a href="https://www.instagram.com/tonysonhairstylist" target="_blank" rel="noopener">notre Instagram</a> — et ce n'est pas un hasard.

Soyons honnêtes : un balayage blond polaire sur base noire, ça ne se fait pas en une séance. Nos coloristes vous le disent avant, pas après. Et on vous annonce le prix total — balayage + toner + brushing — avant de toucher un seul cheveu. French balayage, babylights, balayage miel ou cendré : on maîtrise les variantes. À partir de 35 €, tout compris.

Rue Bonneels 27, entre le Parc du Cinquantenaire et le métro Schuman (lignes 1/5). Ce service fait partie de notre offre <a href="/fr/coiffure/">coiffure à Bruxelles</a>. Réservez en ligne via <a href="https://widget.treatwell.be/fr/salon/tony-and-son/" target="_blank" rel="noopener">Treatwell</a> ou au 02 230 55 37.`,
    faq: [
      { question: "Balayage ou mèches : quelle est la vraie différence ?", answer: "Le balayage est peint à main levée — résultat fondu, repousse discrète, retouche tous les 3-4 mois. Les <a href='/fr/services/meches-bruxelles/'>mèches</a> utilisent du papier alu pour des contrastes plus francs, mais la repousse se voit au bout de 6 semaines. Pour un agenda chargé côté Schuman, le balayage est l'option la plus tranquille." },
      { question: "Combien coûte un balayage, brushing compris ?", answer: "À partir de 35 €, brushing inclus. Le tarif final dépend de la longueur et de la technique. On vous annonce le prix exact avant de commencer — pas de surprise." },
      { question: "Le balayage abîme-t-il les cheveux fins ?", answer: "Moins qu'une coloration complète : on ne touche pas toute la chevelure. Un soin restructurant est appliqué après chaque séance. Si vos cheveux sont fragilisés, nos coloristes proposeront un <a href='/fr/services/traitement-keratine-bruxelles/'>traitement kératine</a> en complément." },
      { question: "Tous les combien faut-il revenir pour un balayage ?", answer: "Tous les 3-4 mois en moyenne. C'est deux fois moins souvent que les mèches (6-8 semaines). Pour les clientes pressées entre la rue de la Loi et le rond-point Schuman, c'est un gain de temps concret." }
    ]
  },

  // ─────────────────────────────────────────────
  // BRUSHING — Ton : court, pratique, zéro blabla
  // Volume : COURT (2 paragraphes, 2 FAQ)
  // ─────────────────────────────────────────────
  {
    slug: 'brushing-bruxelles',
    name: 'Brushing',
    category: 'coiffure',
    price: 'À partir de 30 €',
    titleTag: 'Brushing Bruxelles – Lisse, volume ou wavy | Tony&Son',
    metaDescription: 'Brushing professionnel à Bruxelles chez Tony&Son, Saint-Josse-ten-Noode. Lisse, volume ou wavy. Shampooing inclus. Dès 30 €. ☎ 02 230 55 37',
    h1: 'Brushing à Bruxelles — Tony&Son',
    description: "Brushing professionnel chez Tony&Son à Bruxelles. Résultat lisse, volume ou wavy — au choix.",
    crossLinks: [{ slug: 'lissage-cheveux-bruxelles', label: 'lissage de cheveux à Bruxelles' }, { slug: 'colorations-capillaires-bruxelles', label: 'coloration à Bruxelles' }],
    longDescription: `Brushing à Bruxelles, Saint-Josse-ten-Noode. Entre votre réunion de 12h à la Commission et le déjeuner au Square Ambiorix, il reste 45 minutes. C'est pile ce qu'il faut.

Lisse, volume ou wavy — shampooing et soin protecteur thermique inclus, à partir de 30 €. Tenue : 2-4 jours selon la texture et la météo bruxelloise. Nos coiffeurs vous filent deux-trois astuces concrètes — taie en satin, spray fixant, pas d'attache le premier soir — pour que ça tienne jusqu'au vendredi. Combinable avec une <a href="/fr/services/colorations-capillaires-bruxelles/">coloration</a> ou un <a href="/fr/services/lissage-cheveux-bruxelles/">lissage</a> dans la même séance. Ce service fait partie de notre offre <a href="/fr/coiffure/">coiffure à Bruxelles</a>. Réservez en ligne sur <a href="https://widget.treatwell.be/fr/salon/tony-and-son/" target="_blank" rel="noopener">Treatwell</a> ou au 02 230 55 37. Rue Bonneels 27, à deux pas du métro Schuman.`,
    faq: [
      { question: "Le shampooing est-il compris dans le tarif du brushing ?", answer: "Oui. Shampooing, soin et brushing — tout est compris dans le prix affiché. Pas de supplément." },
      { question: "Combien de temps tient un brushing professionnel ?", answer: "Entre 2 et 4 jours. Pour un événement, venez le matin même ou la veille. On vous donne les astuces pour prolonger la tenue." },
      { question: "Peut-on combiner brushing et coloration dans la même séance ?", answer: "Oui, c'est courant. On peut enchaîner une <a href='/fr/services/colorations-capillaires-bruxelles/'>coloration</a>, des <a href='/fr/services/meches-bruxelles/'>mèches</a> ou un soin kératine avec le brushing de finition." },
      { question: "Combien de temps dure le rendez-vous pour un brushing ?", answer: "30-45 minutes, un peu plus sur cheveux très longs. Parfait pour un créneau entre deux réunions côté quartier européen." }
    ]
  },

  // ─────────────────────────────────────────────
  // LISSAGE — Ton : myth-busting, transparent, factuel
  // Volume : TRÈS LONG (8 paragraphes, 6 FAQ)
  // ─────────────────────────────────────────────
  {
    slug: 'lissage-cheveux-bruxelles',
    name: 'Lissage de cheveux',
    category: 'coiffure',
    price: 'À partir de 150 €',
    titleTag: 'Lissage cheveux Bruxelles – Brésilien, tanin & botox | Tony&Son',
    metaDescription: 'Lissage de cheveux à Bruxelles chez Tony&Son. Lissage brésilien, tanin, botox capillaire. Produits conformes normes EU. Dès 150 €. ☎ 02 230 55 37',
    h1: 'Lissage de cheveux à Bruxelles — Tony&Son',
    description: "Lissage brésilien, lissage au tanin et botox capillaire chez Tony&Son à Bruxelles. Produits conformes aux normes européennes.",
    crossLinks: [{ slug: 'traitement-keratine-bruxelles', label: 'traitement kératine à Bruxelles' }, { slug: 'brushing-bruxelles', label: 'brushing à Bruxelles' }],
    longDescription: `Lissage de cheveux à Bruxelles, Saint-Josse-ten-Noode. C'est le service qui génère le plus de questions — et le plus de peur. Sur les forums, la même inquiétude revient : « Vos produits contiennent-ils du formaldéhyde ? » On a lu ces discussions sur <a href="https://www.yabiladi.com/forum/" target="_blank" rel="noopener">yabiladi.com</a> et ailleurs. On comprend. Voici notre position.

Chez Tony&Son, on utilise exclusivement des produits conformes à la <a href="https://health.ec.europa.eu/scientific-committees/former-scientific-committees/scientific-committee-consumer-safety-sccs_en" target="_blank" rel="noopener">réglementation européenne</a> : maximum 0,2 % de formaldéhyde comme conservateur. Nos produits viennent de distributeurs officiels, pas d'importations parallèles. Vous voulez voir la fiche technique ? On vous la montre. Ce n'est pas négociable.

Trois options, trois résultats différents. <strong>Le lissage brésilien à la kératine</strong> : le plus efficace. Il lisse réellement, réduit le volume de 60-80 %, supprime les frisottis. Résultat : 3-6 mois. À partir de 150 €. C'est le bon choix si vous en avez marre du fer à lisser chaque matin avant de filer vers la rue de la Loi. <strong>Le lissage au tanin</strong> : plus doux. Idéal pour cheveux fins ou fragilisés par des <a href="/fr/services/colorations-capillaires-bruxelles/">colorations</a> répétées. Durée : 2-4 mois. <strong>Le botox capillaire</strong> : ce n'est pas un lissage. C'est un soin profond qui redonne brillance sans modifier la structure. Si vous confondez avec le <a href="/fr/services/traitement-keratine-bruxelles/">traitement à la kératine</a>, c'est normal — on vous explique la différence sur place.

Sur les cheveux très frisés ou crépus, soyons clairs : le brésilien réduit énormément le volume et facilite le coiffage, mais le résultat n'est pas toujours « raide comme un fil ». Nos coiffeurs vous montrent des avant/après sur des textures similaires. Pas de fausses promesses.

Après le traitement : shampooing sans sulfate obligatoire, pas d'attache ni de lavage pendant 48-72h. On vous remet les instructions par écrit. Rue Bonneels 27, à côté du métro Schuman (lignes 1/5). Accessible depuis Etterbeek, Ixelles, Schaerbeek et le quartier européen. Ce service fait partie de notre offre <a href="/fr/coiffure/">coiffure à Bruxelles</a>. Appelez au 02 230 55 37 ou réservez via <a href="https://widget.treatwell.be/fr/salon/tony-and-son/" target="_blank" rel="noopener">Treatwell</a>.`,
    faq: [
      { question: "Vos produits de lissage contiennent-ils du formol ?", answer: "Nos produits respectent la réglementation européenne (max 0,2 % comme conservateur). Distributeurs officiels uniquement. On vous montre la fiche technique du produit avant de l'appliquer — la transparence n'est pas négociable chez Tony&Son." },
      { question: "Quel budget prévoir pour un lissage brésilien ?", answer: "À partir de 150 € pour le lissage brésilien, tout compris. Le tarif exact dépend de la longueur et de l'épaisseur. On vous donne le prix avant de commencer." },
      { question: "Brésilien, tanin ou botox capillaire : comment choisir ?", answer: "Le brésilien lisse réellement (3-6 mois). Le tanin est plus doux, pour cheveux fragiles (2-4 mois). Le botox est un soin — il nourrit sans lisser (1-3 mois). Nos coiffeurs vous orientent après un diagnostic honnête de votre situation." },
      { question: "Peut-on faire une coloration après un lissage brésilien ?", answer: "Attendez 2-3 semaines minimum. L'idéal : faire la <a href='/fr/services/colorations-capillaires-bruxelles/'>coloration</a> AVANT le lissage. Nos coiffeurs planifient l'ordre des soins ensemble pour ne pas fragiliser la fibre." }
    ]
  },

  // ─────────────────────────────────────────────
  // REPOUSSE CAPILLAIRE — Ton : empathique, honnête
  // Volume : MOYEN (5 paragraphes, 4 FAQ)
  // ─────────────────────────────────────────────
  {
    slug: 'repousse-capillaire-bruxelles',
    name: 'Repousse capillaire',
    category: 'coiffure',
    price: 'Sur devis',
    titleTag: 'Repousse capillaire Bruxelles – Soins anti-chute & stimulation | Tony&Son',
    metaDescription: 'Soins repousse capillaire à Bruxelles chez Tony&Son. Traitements anti-chute, stimulation de la pousse. Saint-Josse-ten-Noode depuis 1970. ☎ 02 230 55 37',
    h1: 'Repousse capillaire à Bruxelles — Tony&Son',
    description: "Soins repousse capillaire chez Tony&Son à Bruxelles. Traitements anti-chute et stimulation de la pousse des cheveux à Saint-Josse-ten-Noode.",
    crossLinks: [
      { slug: 'traitement-keratine-bruxelles', label: 'traitement kératine à Bruxelles' },
      { slug: 'extensions-cheveux-bruxelles', label: 'extensions de cheveux à Bruxelles' }
    ],
    longDescription: `Repousse capillaire à Bruxelles, Saint-Josse-ten-Noode. La chute de cheveux, on n'en parle pas facilement. Stress des négociations rue de la Loi, changements hormonaux, carences, traitements médicaux — les causes sont multiples. Chez Tony&Son, on ne promet pas de miracles. On propose des soins qui fonctionnent, dans un cadre discret.

Depuis 1970, notre salon voit passer toutes les situations. Chute diffuse après une grossesse, alopécie androgénétique, cheveux fragilisés par des <a href="/fr/services/colorations-capillaires-bruxelles/">colorations</a> répétées ou un <a href="/fr/services/lissage-cheveux-bruxelles/">lissage</a>. Nos coiffeurs commencent toujours par un diagnostic capillaire complet — on regarde, on écoute, on vous dit ce qui est réaliste.

Nos traitements : soins topiques professionnels, massages du cuir chevelu pour stimuler la microcirculation, protocoles de renforcement. On travaille aussi en complément avec des <a href="/fr/services/traitement-keratine-bruxelles/">traitements kératine</a> pour renforcer la fibre existante. Pour les cas où la repousse seule ne suffit pas, nos <a href="/fr/services/extensions-cheveux-bruxelles/">extensions de cheveux</a> offrent du volume immédiat.

Le premier rendez-vous est un diagnostic. Pas de vente, pas de pression. Si votre situation nécessite un suivi médical, on vous le dit — on préfère vous orienter que vous vendre un soin inadapté. Nos clients viennent du quartier Schuman, de Schaerbeek, d'Etterbeek et du Parc du Cinquantenaire pour ce suivi honnête.

Ce service fait partie de notre offre <a href="/fr/coiffure/">coiffure à Bruxelles</a>. Rue Bonneels 27, métro Schuman (lignes 1/5). Appelez au 02 230 55 37 ou réservez en ligne via <a href="https://widget.treatwell.be/fr/salon/tony-and-son/" target="_blank" rel="noopener">Treatwell</a>.`,
    faq: [
      { question: "Quels soins anti-chute proposez-vous au salon ?", answer: "Soins topiques professionnels, massages stimulants du cuir chevelu et protocoles de renforcement capillaire. Chaque traitement est adapté après un diagnostic complet de votre situation." },
      { question: "Combien de séances pour voir des résultats concrets ?", answer: "Les premiers résultats sont visibles après 4-6 séances, espacées de 2-3 semaines. Le protocole complet dure 3-6 mois selon la cause. On vous donne un calendrier réaliste dès le premier rendez-vous." },
      { question: "Les soins en salon fonctionnent-ils sur l'alopécie androgénétique ?", answer: "Ils peuvent ralentir la progression et améliorer la densité perçue. On est honnêtes : l'alopécie androgénétique nécessite souvent un suivi médical complémentaire. On vous oriente si besoin." },
      { question: "Peut-on combiner repousse capillaire et coloration ?", answer: "Oui, avec un protocole adapté. On espace les traitements et on utilise des <a href='/fr/services/colorations-capillaires-bruxelles/'>colorations</a> douces pour ne pas fragiliser davantage. Nos coiffeurs planifient l'ordre des soins avec vous." }
    ]
  },

  // ─────────────────────────────────────────────
  // COUPES ENFANTS — Ton : familial, émotionnel
  // Volume : MOYEN-COURT (3 paragraphes, 3 FAQ)
  // ─────────────────────────────────────────────
  {
    slug: 'coupes-enfants-bruxelles',
    name: 'Coupes enfants',
    category: 'coiffure',
    categoryParents: ['coiffure', 'barbier'],
    price: 'À partir de 25 €',
    titleTag: 'Coupes enfants Bruxelles – Ambiance familiale | Tony&Son',
    metaDescription: 'Coupes enfants à Bruxelles chez Tony&Son, salon familial à Saint-Josse-ten-Noode depuis 1970. Garçons et filles. Dès 25 €. ☎ 02 230 55 37',
    h1: 'Coupes enfants à Bruxelles — Tony&Son',
    description: "Coupes enfants dans une ambiance rassurante chez Tony&Son à Bruxelles. Patience, douceur et résultat soigné pour les plus jeunes.",
    crossLinks: [{ slug: 'taille-barbe-bruxelles', label: 'taille de barbe à Bruxelles' }],
    longDescription: `Coupe enfant à Bruxelles, Saint-Josse-ten-Noode. Sur <a href="https://www.qcunbon.be/bruxelles/55511491" target="_blank" rel="noopener">qcunbon.be</a>, des parents cherchent « un coiffeur VRAIMENT doué avec les enfants ». Chez Tony&Son, trois générations de la famille Campisi accueillent les plus jeunes — on sait qu'une mauvaise expérience à 3 ans peut marquer jusqu'à l'adolescence.

Si le petit pleure, on attend. Genoux de maman ? Pas de problème. Coupe en deux fois parce qu'il craque au bout de 5 minutes ? On s'adapte. Le résultat compte, mais le moment aussi. Les familles du quartier Schuman, d'Etterbeek et de Schaerbeek reviennent pour ça : un salon où l'enfant repart content, et les parents avec la vidéo prise en douce.

Garçons et filles, même tarif : à partir de 25 €. Dégradé, carré, frange, brosse — nos coiffeurs maîtrisent tout. Le mercredi et samedi, c'est chargé (pause des écoles + week-end). Ce service fait partie de notre offre <a href="/fr/coiffure/">coiffure</a> et <a href="/fr/barbier/">barbier à Bruxelles</a>. Réservez en ligne via <a href="https://widget.treatwell.be/fr/salon/tony-and-son/" target="_blank" rel="noopener">Treatwell</a> ou au 02 230 55 37. Rue Bonneels 27, à côté du Parc du Cinquantenaire.`,
    faq: [
      { question: "Comment gérez-vous un enfant qui a peur du coiffeur ?", answer: "On y est habitués depuis 1970. Nos coiffeurs s'adaptent au rythme de l'enfant : pause si besoin, genoux d'un parent, pas de pression. L'objectif : qu'il reparte avec un bon souvenir, pas un traumatisme." },
      { question: "Quel est le prix d'une coupe enfant, filles et garçons confondus ?", answer: "25 € quel que soit le sexe. Le tarif augmente uniquement pour une coupe complexe (dégradé élaboré, occasion spéciale). Pas de surprise." },
      { question: "À partir de quel âge acceptez-vous les enfants ?", answer: "Dès le plus jeune âge, y compris pour une toute première coupe. Certains de nos plus petits clients ont moins d'un an." },
      { question: "Quel jour est le moins chargé pour emmener son enfant ?", answer: "Le mardi et le jeudi après-midi sont les créneaux les plus calmes. Mercredi et samedi sont pris d'assaut — réservez en avance sur Treatwell si vous visez ces jours-là." }
    ]
  },

  // ─────────────────────────────────────────────
  // MÈCHES — Ton : technique vulgarisé, comparaisons
  // Volume : MOYEN (4 paragraphes, 4 FAQ)
  // ─────────────────────────────────────────────
  {
    slug: 'meches-bruxelles',
    name: 'Mèches',
    category: 'coiffure',
    price: 'Sur devis',
    titleTag: 'Mèches Bruxelles – Reflets structurés & précis | Tony&Son',
    metaDescription: 'Mèches à Bruxelles chez Tony&Son, salon à Saint-Josse-ten-Noode. Mèches aluminium, bonnet ou main levée. Coloristes experts depuis 1970. ☎ 02 230 55 37',
    h1: 'Mèches à Bruxelles — Tony&Son',
    description: "Mèches sur mesure chez Tony&Son, coiffeur à Bruxelles. Reflets lumineux et structurés réalisés par nos coloristes experts.",
    crossLinks: [{ slug: 'balayage-bruxelles', label: 'balayage à Bruxelles' }, { slug: 'colorations-capillaires-bruxelles', label: 'colorations capillaires' }],
    longDescription: `Mèches à Bruxelles, Saint-Josse-ten-Noode. Si le <a href="/fr/services/balayage-bruxelles/">balayage</a> est un pinceau, les mèches sont un crayon. Plus précises. Plus structurées. Des contrastes francs que les clientes du quartier Schuman demandent quand elles veulent un changement visible — pas juste « un petit quelque chose ».

Trois techniques, trois rendus. L'aluminium donne un résultat régulier et net — le classique, maîtrisé ici depuis 1970. Le bonnet crée des reflets fins, idéal pour un premier essai. La main levée offre un résultat libre, entre mèches classiques et balayage. Nos coloristes vous orientent en fonction de votre texture et de vos attentes.

Le compromis à connaître : les mèches demandent un passage toutes les 6-8 semaines. La repousse se voit plus vite qu'avec un balayage (3-4 mois). C'est le prix d'un résultat plus marqué. On vous le dit dès la consultation — pas de mauvaise surprise dans 6 semaines.

Rue Bonneels 27, entre le Parc du Cinquantenaire et le métro Schuman. Accessible depuis Schaerbeek, Etterbeek et Ixelles. Ce service fait partie de notre offre <a href="/fr/coiffure/">coiffure à Bruxelles</a>. Appelez au 02 230 55 37 ou réservez en ligne via <a href="https://widget.treatwell.be/fr/salon/tony-and-son/" target="_blank" rel="noopener">Treatwell</a>.`,
    faq: [
      { question: "Mèches ou balayage : quel rendu choisir ?", answer: "Les mèches donnent des contrastes nets et structurés. Le <a href='/fr/services/balayage-bruxelles/'>balayage</a> est plus fondu et naturel. Côté entretien : mèches toutes les 6-8 semaines, balayage tous les 3-4 mois. Nos coloristes vous montrent des exemples concrets des deux techniques." },
      { question: "Combien de temps dure une pose de mèches ?", answer: "Entre 1h30 et 2h30 selon la technique, la longueur et l'épaisseur. Si votre agenda est serré côté quartier européen, prévoyez le créneau le plus large." },
      { question: "Les mèches abîment-elles les cheveux fragiles ?", answer: "Toute décoloration sollicite la fibre. On applique un soin restructurant après chaque pose. Si vos cheveux sont trop fragilisés, on vous le dit — on préfère refuser plutôt que risquer la casse." },
      { question: "Peut-on faire des mèches sur des cheveux déjà colorés ?", answer: "Oui. On fait régulièrement des mèches sur une base <a href='/fr/services/colorations-capillaires-bruxelles/'>colorée</a> pour ajouter de la dimension. Nos coloristes planifient les deux traitements ensemble." }
    ]
  },

  // ─────────────────────────────────────────────
  // KÉRATINE — Ton : didactique, « attention confusion »
  // Volume : MOYEN (4 paragraphes, 3 FAQ)
  // ─────────────────────────────────────────────
  {
    slug: 'traitement-keratine-bruxelles',
    name: 'Traitements à la kératine',
    category: 'coiffure',
    price: 'Sur devis',
    titleTag: 'Traitement kératine Bruxelles – Réparation & brillance | Tony&Son',
    metaDescription: 'Traitement à la kératine à Bruxelles chez Tony&Son. Soin réparateur, anti-frisottis, brillance. Sans formaldéhyde. Saint-Josse-ten-Noode. ☎ 02 230 55 37',
    h1: 'Traitement kératine à Bruxelles — Tony&Son',
    description: "Soins à la kératine chez Tony&Son, coiffeur à Bruxelles. Réparation, brillance et discipline pour vos cheveux.",
    crossLinks: [{ slug: 'lissage-cheveux-bruxelles', label: 'lissage de cheveux à Bruxelles' }, { slug: 'colorations-capillaires-bruxelles', label: 'coloration à Bruxelles' }],
    longDescription: `Traitement kératine à Bruxelles, Saint-Josse-ten-Noode. Stop — ce n'est PAS un lissage. C'est la confusion qu'on entend dix fois par semaine au salon, et on comprend pourquoi : les deux utilisent le mot « kératine ». Mais ils ne font pas la même chose.

Le traitement kératine est un soin. Il reconstitue la protéine naturelle du cheveu — celle que le sèche-cheveux, la pollution avenue de Cortenbergh, les <a href="/fr/services/colorations-capillaires-bruxelles/">colorations</a> et le soleil dégradent au fil des mois. Résultat : cheveux plus souples, plus brillants, frisottis réduits. Mais la structure ne change pas. Pour un vrai lissage, c'est notre <a href="/fr/services/lissage-cheveux-bruxelles/">service de lissage brésilien</a> qu'il vous faut.

Particulièrement utile après une coloration, un balayage ou des mèches — le traitement répare les dommages et prolonge l'éclat de la couleur. Comptez 1h30-2h au salon. L'effet dure 3-4 mois avec un shampooing sans sulfate. Nos produits sont conformes aux normes européennes, sans formaldéhyde.

Rue Bonneels 27, à deux minutes du métro Schuman. Appelez au 02 230 55 37 ou réservez votre créneau en ligne sur <a href="https://widget.treatwell.be/fr/salon/tony-and-son/" target="_blank" rel="noopener">Treatwell</a>. Les clientes du quartier européen prennent souvent le traitement kératine en complément de leur coloration habituelle — c'est le duo qui marche le mieux. Ce service fait partie de notre offre <a href="/fr/coiffure/">coiffure à Bruxelles</a>.`,
    faq: [
      { question: "Quelle différence entre kératine et lissage brésilien ?", answer: "Le traitement kératine est un soin de réparation — il nourrit, réduit les frisottis, mais ne modifie pas la structure du cheveu. Le lissage brésilien lisse réellement. Si vous voulez des cheveux lisses, c'est le lissage. Si vous voulez des cheveux réparés et brillants, c'est la kératine." },
      { question: "Combien de temps dure l'effet d'un traitement kératine ?", answer: "3-4 mois avec un shampooing sans sulfate. L'effet s'estompe progressivement — pas de ligne de démarcation brutale." },
      { question: "La kératine est-elle compatible avec des cheveux colorés ?", answer: "Oui, et c'est même recommandé. La kératine répare les dommages de la <a href='/fr/services/colorations-capillaires-bruxelles/'>coloration</a> et prolonge l'éclat de votre couleur. Beaucoup de nos clientes combinent les deux." },
      { question: "Quel shampooing utiliser après un traitement kératine ?", answer: "Shampooing sans sulfate obligatoire pour prolonger l'effet. On vous recommande des références précises en fin de séance — pas juste « sans sulfate » mais des marques testées par nos coiffeurs." }
    ]
  },

  // ─────────────────────────────────────────────
  // EXTENSIONS — Ton : direct, honnête, pragmatique
  // Volume : MOYEN (5 paragraphes, 4 FAQ)
  // ─────────────────────────────────────────────
  {
    slug: 'extensions-cheveux-bruxelles',
    name: 'Extensions de cheveux',
    category: 'coiffure',
    price: 'À partir de 500 €',
    titleTag: 'Extensions cheveux Bruxelles – Pose experte Remy | Tony&Son',
    metaDescription: 'Extensions de cheveux naturels à Bruxelles chez Tony&Son. Kératine, micro-anneaux, tape-in, clips. Cheveux Remy. Dès 500 €. ☎ 02 230 55 37',
    h1: 'Extensions de cheveux à Bruxelles — Tony&Son',
    description: "Extensions de cheveux naturels chez Tony&Son à Bruxelles. Pose experte, cheveux Remy, résultat invisible.",
    crossLinks: [{ slug: 'repousse-capillaire-bruxelles', label: 'repousse capillaire à Bruxelles' }, { slug: 'colorations-capillaires-bruxelles', label: 'coloration à Bruxelles' }],
    longDescription: `Extensions de cheveux à Bruxelles, Saint-Josse-ten-Noode. « Est-ce que ça abîme ? » C'est la question qu'on lit partout sur les forums — et la première qu'on entend au salon. Réponse courte : ça dépend de qui pose et de qui dépose. Chez Tony&Son, on maîtrise les deux.

Quatre techniques, quatre situations. <strong>Kératine (à chaud)</strong> : la plus durable, 3-4 mois. Résultat invisible, idéale pour un port quotidien. <strong>Micro-anneaux (à froid)</strong> : pas de chaleur, même durée, moins agressif. <strong>Tape-in (adhésives)</strong> : pose rapide, repose toutes les 6-8 semaines — le meilleur rapport effort/résultat pour les clientes pressées du quartier Schuman. <strong>Clips</strong> : zéro engagement. Parfait pour un événement au Parc du Cinquantenaire.

Uniquement des cheveux naturels Remy — cuticules alignées dans le même sens, zéro synthétique. C'est ce qui fait la différence entre des extensions qui s'emmêlent au bout de 3 semaines et celles qui restent souples pendant des mois. Sur un forum belge spécialisé, une professionnelle recommande les tape-in pour les cheveux fins et fragiles. Nos coiffeurs confirment : c'est la technique la moins contraignante pour les textures fines.

La consultation est obligatoire. On évalue la densité, la santé du cheveu, votre mode de vie. Si vos cheveux sont trop fragilisés, on vous le dit — et on vous oriente vers nos soins de <a href="/fr/services/repousse-capillaire-bruxelles/">repousse capillaire</a> ou un <a href="/fr/services/traitement-keratine-bruxelles/">traitement kératine</a> pour renforcer la base d'abord.

À partir de 500 €. Ce service fait partie de notre offre <a href="/fr/coiffure/">coiffure à Bruxelles</a>. Rue Bonneels 27, métro Schuman (lignes 1/5). Réservez une consultation au 02 230 55 37 ou en ligne via <a href="https://widget.treatwell.be/fr/salon/tony-and-son/" target="_blank" rel="noopener">Treatwell</a>.`,
    faq: [
      { question: "Les extensions abîment-elles les cheveux ?", answer: "Ça dépend de la pose ET de la dépose. Chez Tony&Son, on maîtrise les deux étapes. Une extension bien posée et correctement retirée ne laisse pas de dommage. Le risque vient des poses amateurs ou des déposes brutales. Certaines clientes portent des extensions chez nous depuis des années sans souci." },
      { question: "Quel budget prévoir pour des extensions de cheveux ?", answer: "À partir de 500 € selon la technique et la quantité de mèches. Le prix exact est donné après la consultation obligatoire — on évalue vos besoins avant de chiffrer." },
      { question: "Quelle technique d'extensions pour des cheveux fins ?", answer: "Tape-in ou micro-anneaux : moins de poids, moins de traction. C'est ce que les spécialistes belges recommandent pour les textures fines. Les extensions kératine sont possibles aussi, avec des mèches plus petites. On évalue au cas par cas." },
      { question: "Combien de temps durent les extensions selon la technique ?", answer: "Kératine : 3-4 mois. Micro-anneaux : 3-4 mois. Tape-in : repose toutes les 6-8 semaines. Clips : le temps que vous voulez. On vous explique le calendrier d'entretien dès la consultation." }
    ]
  },

  // ─────────────────────────────────────────────
  // PERMANENTES — Ton : nostalgique revisité, fun
  // Volume : MOYEN-COURT (3 paragraphes, 3 FAQ)
  // ─────────────────────────────────────────────
  {
    slug: 'permanentes-bruxelles',
    name: 'Permanentes',
    category: 'coiffure',
    price: 'Sur devis',
    titleTag: 'Permanentes Bruxelles – Boucles & ondulations modernes | Tony&Son',
    metaDescription: 'Permanentes modernes à Bruxelles chez Tony&Son. Spirale, bodywave, partielle. Formulations douces. Saint-Josse-ten-Noode. ☎ 02 230 55 37',
    h1: 'Permanentes à Bruxelles — Tony&Son',
    description: "Permanentes modernes chez Tony&Son à Bruxelles. Boucles naturelles, vagues souples ou volume — les années 80 c'est fini.",
    crossLinks: [{ slug: 'colorations-capillaires-bruxelles', label: 'coloration à Bruxelles' }, { slug: 'brushing-bruxelles', label: 'brushing à Bruxelles' }],
    longDescription: `Permanente à Bruxelles, Saint-Josse-ten-Noode. Votre mère en a eu une dans les années 80 et ça l'a traumatisée. On sait. Les permanentes de 2025 n'ont rien à voir. Formulations sans ammoniaque, enrichies en protéines de soie — les résultats sont contrôlés, pas subis.

Trois variations chez Tony&Son. La <strong>spirale</strong> pour des boucles définies. Le <strong>bodywave</strong> pour des ondulations naturelles — c'est la plus demandée par nos clientes entre Ixelles et le quartier Schuman. Et la <strong>permanente partielle</strong> : racines uniquement (pour du volume) ou pointes (pour du mouvement). On n'est pas obligé de tout boucler.

On ne fait pas de permanente sur des cheveux trop abîmés. Lissage brésilien récent ? Décoloration intensive ? Nos coiffeurs vous le diront et proposeront une alternative — un <a href="/fr/services/traitement-keratine-bruxelles/">traitement kératine</a> pour renforcer la fibre d'abord, par exemple. Comptez 2-3h au salon. Le résultat tient 3-6 mois. Rue Bonneels 27, métro Schuman (lignes 1/5). Ce service fait partie de notre offre <a href="/fr/coiffure/">coiffure à Bruxelles</a>. Réservez au 02 230 55 37 ou en ligne via <a href="https://widget.treatwell.be/fr/salon/tony-and-son/" target="_blank" rel="noopener">Treatwell</a>.`,
    faq: [
      { question: "Les permanentes modernes abîment-elles les cheveux ?", answer: "Les formulations actuelles sont incomparablement plus douces qu'avant — sans ammoniaque, enrichies en protéines. On évalue toujours l'état de vos cheveux avant. Si c'est trop risqué (coloration récente, <a href='/fr/services/lissage-cheveux-bruxelles/'>lissage</a>), on vous le dit." },
      { question: "Quel est le prix et la durée d'une permanente au salon ?", answer: "Comptez 2-3h au salon. Le résultat tient 3-6 mois. Le tarif dépend de la longueur et de la technique — on vous donne le prix exact après consultation." },
      { question: "Quelle permanente pour un effet vague naturelle ?", answer: "Le bodywave. Des ondulations souples, pas des bouclettes serrées. La permanente partielle sur les pointes donne aussi du mouvement sans tout changer — idéal si vous voulez tester avant de vous lancer sur toute la chevelure." },
      { question: "Peut-on combiner permanente et coloration ?", answer: "Oui, avec 2 semaines minimum entre les deux traitements. Sur cheveux très décolorés, la permanente est déconseillée. Nos coiffeurs planifient les soins dans le bon ordre." }
    ]
  },

  // ─────────────────────────────────────────────
  // TAILLE DE BARBE — Ton : masculin, expérience sensorielle
  // Volume : LONG (6 paragraphes, 5 FAQ)
  // ─────────────────────────────────────────────
  {
    slug: 'taille-barbe-bruxelles',
    name: 'Taille de barbe',
    category: 'barbier',
    price: 'Sur devis',
    images: ['/images/barbier-1.jpg', '/images/barbier-2.jpg'],
    titleTag: 'Taille barbe Bruxelles – Rasage & dégradé précis | Tony&Son',
    metaDescription: 'Taille de barbe à Bruxelles chez Tony&Son. Rasage traditionnel, dégradé, serviette chaude. Barbier expert à Saint-Josse-ten-Noode. ☎ 02 230 55 37',
    h1: 'Taille de barbe à Bruxelles — Tony&Son',
    description: "Taille de barbe précise chez Tony&Son, barbier à Bruxelles. Rasage traditionnel, dégradé, serviette chaude. Tous types de barbe.",
    crossLinks: [{ slug: 'coupes-enfants-bruxelles', label: 'coupes enfants à Bruxelles' }],
    longDescription: `Taille de barbe à Bruxelles, Saint-Josse-ten-Noode. Sur <a href="https://www.qcunbon.be" target="_blank" rel="noopener">qcunbon.be</a>, un client a écrit : « J'ai toujours peur avec les coiffeurs, généralement ça ne ressemble jamais à ce que j'avais demandé. » On lit ça souvent. C'est exactement pour ça que nos barbiers commencent par discuter — pas par couper.

On regarde. La forme de votre visage, la densité de pilosité, la direction de pousse. On vous demande ce que vous voulez. Photo de référence ? Parfait. Idée vague ? On vous propose. Et ensuite seulement : tondeuse de précision pour le volume, ciseaux pour les finitions, rasoir droit pour les contours. Propre.

Le rasage traditionnel au coupe-chou, c'est notre classique. Serviette chaude pour ouvrir les pores, mousse au blaireau, lame, soin après-rasage. Les habitués du quartier européen reviennent pour ce moment autant que pour le résultat. C'est 20 minutes de silence dans une journée de réunions rue de la Loi.

Le dégradé américain ? On le maîtrise. Skin fade, mid fade, high fade, taper — sur toutes les textures. Pilosité européenne, maghrébine, afro, asiatique. Un fade sur cheveu crépu ne se fait pas comme sur cheveu lisse, et nos barbiers adaptent leur technique sans qu'on ait besoin de le demander. Les clients de Schaerbeek et du rond-point Schuman viennent spécifiquement pour ça.

Ce service fait partie de notre offre <a href="/fr/barbier/">barbier à Bruxelles</a>. Rue Bonneels 27, métro Schuman (lignes 1/5), tram 81. Vendredi et samedi, c'est chargé — réservez en ligne via <a href="https://widget.treatwell.be/fr/salon/tony-and-son/" target="_blank" rel="noopener">Treatwell</a> ou appelez au 02 230 55 37. Sans rendez-vous accepté en semaine, selon disponibilité.`,
    faq: [
      { question: "Proposez-vous le rasage au coupe-chou ?", answer: "Oui. Serviette chaude, mousse au blaireau, rasoir droit, soin après-rasage. C'est notre classique — prévoir 20 minutes. Sur rendez-vous." },
      { question: "Quel est le tarif d'une taille de barbe avec finitions ?", answer: "Le prix dépend du service (taille simple, rasage traditionnel, combo coupe + barbe). On vous donne le tarif exact avant de commencer. Appelez au 02 230 55 37 pour un devis rapide." },
      { question: "Maîtrisez-vous le dégradé sur toutes les textures de cheveux ?", answer: "Skin fade, mid fade, high fade, taper — sur pilosité européenne, maghrébine, afro ou asiatique. Amenez une photo de référence si vous voulez un résultat précis. Nos barbiers adaptent la technique à chaque texture." },
      { question: "Faut-il réserver ou peut-on venir sans rendez-vous ?", answer: "Rendez-vous recommandé, surtout vendredi et samedi. Réservez via <a href='https://widget.treatwell.be/fr/salon/tony-and-son/' target='_blank' rel='noopener'>Treatwell</a> ou au 02 230 55 37. Sans rendez-vous accepté en semaine selon disponibilité." }
    ]
  },

  // ─────────────────────────────────────────────
  // COLORATION DÉGRADÉ — Ton : concis, glossaire visuel
  // Volume : COURT (3 paragraphes, 2 FAQ)
  // ─────────────────────────────────────────────
  {
    slug: 'coloration-degrade-bruxelles',
    name: 'Coloration en dégradé',
    category: 'coiffure',
    price: 'À partir de 40 €',
    titleTag: 'Coloration dégradé Bruxelles – Ombré, sombré & dip-dye | Tony&Son',
    metaDescription: 'Coloration en dégradé à Bruxelles chez Tony&Son. Ombré, sombré, dip-dye par nos coloristes experts à Saint-Josse-ten-Noode. Dès 40 €. ☎ 02 230 55 37',
    h1: 'Coloration en dégradé à Bruxelles — Tony&Son',
    description: "Coloration en dégradé chez Tony&Son, coiffeur à Bruxelles. Ombré, sombré ou dip-dye — des nuances harmonieuses.",
    crossLinks: [{ slug: 'colorations-capillaires-bruxelles', label: 'colorations capillaires' }, { slug: 'balayage-bruxelles', label: 'balayage à Bruxelles' }],
    longDescription: `Coloration en dégradé à Bruxelles, Saint-Josse-ten-Noode. Trois mots, trois techniques — et nos coloristes chez Tony&Son voient régulièrement des clientes confondre les trois. Petit glossaire rapide.

<strong>Ombré</strong> : transition nette du foncé (racines) au clair (pointes). Effet marqué, très visible. <strong>Sombré</strong> : même principe, fondu plus doux. « Soft ombré ». Le plus naturel des trois. <strong>Dip-dye</strong> : démarcation franche, parfois avec des couleurs fantaisie. Plus audacieux. Le point commun ? La repousse fait partie du style. Entretien tous les 3-4 mois seulement — la technique la plus économique pour un vrai changement de tête entre deux trimestres à la Commission.

À partir de 40 €. On vous montre des exemples avant de toucher quoi que ce soit — pour être sûrs qu'on parle de la même chose. Rue Bonneels 27, métro Schuman. Ce service fait partie de notre offre <a href="/fr/coiffure/">coiffure à Bruxelles</a>. Appelez au 02 230 55 37 ou réservez sur <a href="https://widget.treatwell.be/fr/salon/tony-and-son/" target="_blank" rel="noopener">Treatwell</a>. Pour des techniques plus classiques : <a href="/fr/services/colorations-capillaires-bruxelles/">coloration complète</a>, <a href="/fr/services/balayage-bruxelles/">balayage</a> ou <a href="/fr/services/meches-bruxelles/">mèches</a>.`,
    faq: [
      { question: "Ombré ou balayage : quelle est la différence ?", answer: "L'ombré crée une transition verticale du foncé au clair. Le <a href='/fr/services/balayage-bruxelles/'>balayage</a> crée des reflets diffus dans toute la chevelure. Deux techniques très différentes — nos coloristes vous montrent des exemples concrets." },
      { question: "Combien coûte une coloration en dégradé ?", answer: "À partir de 40 €, shampooing et brushing inclus. Le tarif final dépend de la longueur et de la technique choisie." },
      { question: "Quelle technique de dégradé pour un résultat discret et naturel ?", answer: "Le sombré. C'est le fondu le plus doux — la transition est progressive, presque invisible. Idéal si vous voulez changer sans que tout le bureau s'en aperçoive lundi matin." },
      { question: "Tous les combien faut-il refaire un dégradé de couleur ?", answer: "Tous les 3-4 mois. La repousse fait partie du style — pas besoin de retouche fréquente. C'est l'option la plus tranquille de toutes nos techniques de coloration." }
    ]
  },

  // ─────────────────────────────────────────────
  // ÉPILATION — Ton : ultra-factuel
  // Volume : TRÈS COURT (1 paragraphe, 2 FAQ)
  // ─────────────────────────────────────────────
  {
    slug: 'epilation-cire-bruxelles',
    name: 'Épilation à la cire',
    category: 'barbier',
    price: '10 €',
    titleTag: 'Épilation cire Bruxelles – Visage & sourcils | Tony&Son',
    metaDescription: 'Épilation à la cire du visage à Bruxelles chez Tony&Son. Sourcils, lèvre, menton. 10 €. Saint-Josse-ten-Noode. ☎ 02 230 55 37',
    h1: 'Épilation à la cire à Bruxelles — Tony&Son',
    description: "Épilation à la cire du visage chez Tony&Son à Bruxelles. Sourcils, lèvre, menton. 10 €.",
    crossLinks: [{ slug: 'taille-barbe-bruxelles', label: 'taille de barbe à Bruxelles' }],
    longDescription: `Épilation à la cire à Bruxelles, Saint-Josse-ten-Noode. Sourcils, lèvre, menton — cire tiède, geste rapide, 10 €. Hommes et femmes. Se combine avec une <a href="/fr/services/taille-barbe-bruxelles/">taille de barbe</a> ou un <a href="/fr/services/brushing-bruxelles/">brushing</a> dans la même séance — mentionnez-le à la réservation sur <a href="https://widget.treatwell.be/fr/salon/tony-and-son/" target="_blank" rel="noopener">Treatwell</a> ou au 02 230 55 37. Ce service fait partie de notre offre <a href="/fr/barbier/">barbier à Bruxelles</a>. Rue Bonneels 27, métro Schuman.`,
    faq: [
      { question: "L'épilation à la cire du visage est-elle douloureuse ?", answer: "Le geste est rapide, la sensation brève. On utilise de la cire tiède — moins agressive que la cire chaude." },
      { question: "Peut-on combiner l'épilation avec d'autres services ?", answer: "Oui. Beaucoup de clients ajoutent l'épilation des sourcils à leur coupe ou leur <a href='/fr/services/taille-barbe-bruxelles/'>taille de barbe</a>. Il suffit de le mentionner à la réservation." }
    ]
  }
];

export function getServicesByCategory(category: 'coiffure' | 'barbier') {
  return services.filter(s =>
    s.category === category ||
    (s.categoryParents && s.categoryParents.includes(category))
  );
}

export function getServiceBySlug(slug: string) {
  return services.find(s => s.slug === slug);
}
