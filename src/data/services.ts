export interface Service {
  slug: string;
  name: string;
  category: 'coiffure' | 'barbier';
  price?: string;
  description: string;
  longDescription: string;
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
    slug: 'coloration-bruxelles',
    name: 'Colorations capillaires',
    category: 'coiffure',
    price: 'À partir de 40 €',
    description: "Colorations sur mesure pour révéler votre style. Chez Tony&Son, coiffeur à Bruxelles, nos coloristes experts subliment vos cheveux avec des teintes éclatantes tout en préservant leur brillance.",
    longDescription: `Sur les forums belges comme <a href="https://www.qcunbon.be" target="_blank" rel="noopener">qcunbon.be</a>, la question revient sans cesse : « Qui connaît un bon coloriste à Bruxelles ? » — souvent posée par des clientes qui arrivent avec une couleur ratée ailleurs. Chez Tony&Son, à Saint-Josse-ten-Noode, on connaît cette situation par cœur.

Depuis 1970, notre salon reçoit des clientes de Schaerbeek, Etterbeek, du quartier Schuman et de tout Bruxelles. Et une bonne partie viennent justement pour qu'on corrige ce qui a été mal fait ailleurs. Couleur qui a viré au cuivré, racines mal fondues, teinte trop foncée — nos coloristes ont vu tous les cas de figure. La correction de couleur, c'est un vrai métier, et c'est l'une de nos spécialités.

Mais la plupart du temps, nos clientes viennent pour une coloration classique, bien faite. On commence toujours par un diagnostic : on regarde vos cheveux, on discute de ce que vous voulez, on vous dit honnêtement ce qui est réalisable et ce qui ne l'est pas. Si une nuance risque de ne pas bien vieillir sur votre base naturelle, on vous le dit avant — pas après.

Côté tarifs, c'est simple. Les colorations commencent à 40 €. Le prix exact dépend de la technique (ton sur ton, permanente, végétale, retouche racines), de la longueur de vos cheveux et du résultat souhaité. Conformément aux <a href="https://economie.fgov.be/fr/themes/ventes/pratiques-du-marche-et/indication-des-prix" target="_blank" rel="noopener">directives du SPF Économie</a>, nos prix sont affichés et comprennent le shampooing et le brushing. Pas de supplément caché.

On propose aussi des <a href="/fr/services/balayage-bruxelles/">colorations partielles comme le balayage</a> pour un effet plus naturel, ou des <a href="/fr/services/meches-bruxelles/">mèches</a> pour des contrastes plus marqués. Et pour les clientes qui veulent éviter les produits chimiques, nous travaillons avec des colorations végétales — moins de couverture sur les cheveux blancs, mais zéro agression.

Le salon est rue Bonneels 27, à deux minutes à pied de la gare de Maelbeek. Bus STIB 59, 29, 63. Ouvert du mardi au vendredi 9h-19h, samedi 9h-18h.`,
    faq: [
      { question: "Pouvez-vous rattraper une coloration ratée dans un autre salon ?", answer: "Oui, c'est l'une de nos spécialités. Nos coloristes chez Tony&Son réalisent d'abord un diagnostic complet, puis proposent un protocole de rattrapage adapté. Appelez au 02 230 55 37 pour en discuter." },
      { question: "Proposez-vous des colorations végétales ?", answer: "Oui. C'est une alternative plus douce, idéale pour les cuirs chevelus sensibles. La couverture des cheveux blancs est moins complète qu'avec une coloration chimique — nos coloristes vous expliquent la différence en toute transparence." },
      { question: "Y a-t-il des frais cachés ? Le shampooing est-il inclus ?", answer: "Nos tarifs sont tout compris : shampooing, soin et brushing de finition inclus. Conformément aux directives du SPF Économie, les prix affichés sont les prix finaux. On vous confirme toujours le montant avant de commencer." },
      { question: "Quelle est la différence entre coloration et <a href='/fr/services/balayage-bruxelles/'>balayage</a> ?", answer: "La coloration couvre l'ensemble de la chevelure (ou les racines). Le balayage est une technique partielle qui crée des reflets naturels sans toucher les racines. Si vous hésitez, nos coloristes vous montrent la différence sur des exemples concrets." },
      { question: "À quelle fréquence faut-il refaire sa coloration ?", answer: "Coloration permanente : retouche racines toutes les 4-6 semaines. Ton sur ton : s'estompe en 6-8 semaines. Le <a href='/fr/services/balayage-bruxelles/'>balayage</a> peut attendre 3-4 mois — c'est l'option la plus économique à long terme." }
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
    description: "Balayage naturel et lumineux réalisé par nos coloristes experts chez Tony&Son, coiffeur à Bruxelles. Des reflets sur mesure pour illuminer vos cheveux.",
    longDescription: `L'effet « baigné de soleil ». C'est ce que la plupart de nos clientes demandent quand elles s'assoient dans notre fauteuil à Saint-Josse-ten-Noode. Un balayage réussi, c'est exactement ça : des reflets qui ont l'air d'être venus naturellement, pas d'un salon. Et la clé, c'est la technique à main levée — chaque mèche est peinte individuellement, pas au papier alu comme pour des <a href="/fr/services/meches-bruxelles/">mèches classiques</a>.

Le truc que nos clientes apprécient le plus ? L'entretien. Contrairement aux mèches qui montrent une repousse nette au bout de 6 semaines, le balayage vieillit bien. La transition reste douce pendant 3-4 mois. C'est aussi pour ça que c'est le service le plus populaire sur <a href="https://www.instagram.com/tonysonhairstylist" target="_blank" rel="noopener">notre Instagram</a> — les résultats parlent d'eux-mêmes.

On ne va pas vous mentir : tout le monde ne peut pas obtenir le même résultat. Un balayage blond polaire sur une base noire, par exemple, demande plusieurs séances et peut fragiliser le cheveu. Nos coloristes vous disent toujours ce qui est réaliste en une séance et ce qui demandera plus de travail. Et on vous donne le prix total — balayage + toner + brushing — avant de toucher un seul cheveu.

French balayage, babylights, balayage miel ou cendré : on maîtrise toutes les variantes. À partir de 35 €. Salon accessible depuis la gare de Maelbeek, Schaerbeek et le quartier européen.`,
    faq: [
      { question: "Balayage ou mèches : quelle différence concrète ?", answer: "Le balayage est peint à main levée pour un résultat fondu et naturel. Les <a href='/fr/services/meches-bruxelles/'>mèches</a> utilisent du papier alu pour des contrastes plus nets. Le balayage vieillit mieux (repousse discrète), les mèches demandent un entretien plus fréquent." },
      { question: "Le balayage abîme-t-il les cheveux ?", answer: "Moins qu'une coloration complète, puisqu'on ne touche pas toute la chevelure. On applique un soin restructurant après chaque balayage. Si vos cheveux sont déjà fragilisés, nos coloristes vous le diront et proposeront un <a href='/fr/services/keratine-bruxelles/'>traitement à la kératine</a> en complément." },
      { question: "Quel est le prix total, brushing inclus ?", answer: "À partir de 35 €, brushing inclus. Le tarif final dépend de la longueur et de la technique. On vous donne toujours le prix exact avant de commencer — jamais de surprise." },
      { question: "Tous les combien faut-il y retourner ?", answer: "Tous les 3-4 mois en moyenne. C'est plus espacé que les mèches (6-8 semaines) ou la coloration (4-6 semaines). Un bon balayage est un investissement malin." }
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
    description: "Brushing professionnel chez Tony&Son à Bruxelles. Résultat lisse, volume ou wavy — au choix.",
    longDescription: `Brushing lisse, volume ou wavy. À partir de 30 €. Shampooing et soin protecteur thermique inclus. Comptez 30-45 minutes, un peu plus sur cheveux très longs.

Tenue : 2-4 jours selon votre type de cheveux et la météo bruxelloise. Nos coiffeurs vous donneront deux-trois astuces concrètes pour le faire tenir — taie en satin, spray fixant, pas de queue de cheval le premier soir. Tony&Son, rue Bonneels 27, Saint-Josse-ten-Noode. Mardi-vendredi 9h-19h, samedi 9h-18h.`,
    faq: [
      { question: "Le shampooing est-il inclus ?", answer: "Oui. Shampooing, soin et brushing compris dans le tarif affiché." },
      { question: "Combien de temps ça tient ?", answer: "Entre 2 et 4 jours. Si vous avez un événement, venez le matin même ou la veille pour un résultat optimal. On peut aussi combiner avec une <a href='/fr/services/coloration-bruxelles/'>coloration</a> ou des <a href='/fr/services/meches-bruxelles/'>mèches</a> dans la même séance." }
    ]
  },

  // ─────────────────────────────────────────────
  // LISSAGE — Ton : myth-busting, transparent, factuel
  // Volume : TRÈS LONG (8 paragraphes, 6 FAQ)
  // ─────────────────────────────────────────────
  {
    slug: 'lissage-bruxelles',
    name: 'Lissage de cheveux',
    category: 'coiffure',
    price: 'À partir de 150 €',
    description: "Lissage brésilien, lissage au tanin et botox capillaire chez Tony&Son à Bruxelles. Produits conformes aux normes européennes.",
    longDescription: `Parlons franchement. Le lissage brésilien est le service qui génère le plus de questions — et de peur — sur les forums. « Vos produits contiennent-ils du formaldéhyde ? », « Est-ce dangereux ? », « Mon coiffeur ne veut pas me dire ce qu'il utilise. » On a lu ces discussions sur <a href="https://www.yabiladi.com/forum/" target="_blank" rel="noopener">yabiladi.com</a> et d'autres forums francophones. Et on comprend l'inquiétude.

Alors voici notre position, clairement. Chez Tony&Son, on utilise exclusivement des produits conformes à la <a href="https://health.ec.europa.eu/scientific-committees/former-scientific-committees/scientific-committee-consumer-safety-sccs_en" target="_blank" rel="noopener">réglementation européenne sur les cosmétiques</a>, qui fixe un maximum de 0,2 % de formaldéhyde comme conservateur. Nos produits viennent de distributeurs officiels, pas d'importations parallèles sur Internet. Si vous voulez voir la fiche technique du produit qu'on va utiliser sur vos cheveux, vous pouvez. On n'a rien à cacher.

Maintenant, les options. Il y en a trois et elles ne font pas du tout la même chose :

<strong>Le lissage brésilien à la kératine</strong> est le plus efficace. Il lisse vraiment, réduit le volume de 60-80 %, supprime les frisottis. Résultat : 3-6 mois selon votre type de cheveux et l'entretien. C'est le bon choix si vous en avez marre de passer 30 minutes au fer chaque matin. Prix : à partir de 150 €.

<strong>Le lissage au tanin</strong> est plus doux. Moins de chimie, résultat moins radical mais plus respectueux de la fibre. Idéal si vos cheveux sont fins, fragilisés par des <a href="/fr/services/coloration-bruxelles/">colorations</a> répétées, ou si vous voulez juste calmer les frisottis sans tout lisser. Durée : 2-4 mois.

<strong>Le botox capillaire</strong> n'est pas un lissage. C'est un soin de réparation profonde qui redonne brillance et discipline, mais qui ne modifie pas la structure du cheveu. Si vous confondez avec le <a href="/fr/services/keratine-bruxelles/">traitement à la kératine</a>, vous n'êtes pas seule — la différence est expliquée sur cette page.

Sur les cheveux très frisés ou crépus, soyons honnêtes : le lissage brésilien réduit énormément le volume et facilite le coiffage, mais le résultat n'est pas toujours « raide comme un fil ». Nos coiffeurs vous montrent des avant/après sur des textures similaires à la vôtre pour que vous sachiez exactement à quoi vous attendre.

Après le traitement : shampooing sans sulfate obligatoire. Pas de queue de cheval ni de lavage pendant 48-72h. On vous donne toutes les instructions par écrit. Rue Bonneels 27, Saint-Josse-ten-Noode, à côté de la gare de Maelbeek. Accessible depuis Schaerbeek, Etterbeek, Woluwe-Saint-Lambert et tout Bruxelles.`,
    faq: [
      { question: "Vos produits de lissage contiennent-ils du formaldéhyde ?", answer: "Nos produits respectent la réglementation européenne (max 0,2 % comme conservateur). Ils proviennent de distributeurs officiels. On peut vous montrer la fiche technique — la transparence n'est pas négociable chez Tony&Son." },
      { question: "Lissage brésilien, tanin ou botox : lequel choisir ?", answer: "Le brésilien lisse vraiment (3-6 mois). Le tanin est plus doux, idéal pour cheveux fragiles (2-4 mois). Le botox est un soin, pas un lissage — il nourrit sans modifier la structure. Nos coiffeurs vous orientent après un diagnostic." },
      { question: "Peut-on colorer ses cheveux après un lissage ?", answer: "Attendez 2-3 semaines. L'idéal : faire la <a href='/fr/services/coloration-bruxelles/'>coloration</a> AVANT le lissage. Nos coiffeurs planifient l'ordre des soins avec vous." },
      { question: "Ça fonctionne sur les cheveux crépus ?", answer: "Oui, mais le résultat varie. Sur cheveux très crépus, le lissage réduit le volume et facilite le coiffage, mais ne donne pas toujours un résultat totalement raide. On vous montre des avant/après réalistes avant de commencer." },
      { question: "Combien de temps dure le résultat ?", answer: "Brésilien : 3-6 mois. Tanin : 2-4 mois. Botox : 1-3 mois. La durée dépend de votre type de cheveux et de l'entretien (shampooing sans sulfate indispensable)." },
      { question: "Quels soins après un lissage ?", answer: "Shampooing sans sulfate, masque nourrissant hebdomadaire, pas de chlore ni eau de mer sans protection. Les premiers jours : pas d'attache, pas de lavage (48-72h). On vous remet les instructions par écrit." }
    ]
  },

  // ─────────────────────────────────────────────
  // COUPES ENFANTS — Ton : familial, émotionnel
  // Volume : MOYEN-COURT (3 paragraphes, 3 FAQ)
  // ─────────────────────────────────────────────
  {
    slug: 'coupe-enfant-bruxelles',
    name: 'Coupes enfants',
    category: 'coiffure',
    price: 'À partir de 25 €',
    description: "Coupes enfants dans une ambiance rassurante chez Tony&Son à Bruxelles. Patience, douceur et résultat soigné pour les plus jeunes.",
    longDescription: `La première coupe. Pour beaucoup de parents, c'est un petit événement. Chez Tony&Son, on comprend ça. Notre salon à Saint-Josse-ten-Noode accueille les enfants depuis trois générations — Tony, puis Salvatore, et maintenant toute l'équipe perpétue cette tradition familiale. On sait qu'un enfant qui a eu une mauvaise expérience chez le coiffeur à 3 ans peut en garder la peur jusqu'à l'adolescence.

Alors on prend le temps. Si le petit pleure, on attend. S'il veut s'asseoir sur les genoux de maman ou papa, pas de problème. S'il faut faire la coupe en deux fois parce qu'il n'en peut plus au bout de 5 minutes, on s'adapte. Le résultat compte, mais le moment aussi. Et à la fin, tout le monde repart content — l'enfant avec sa nouvelle coupe, les parents avec la vidéo qu'ils ont prise en douce.

Coupes garçons et filles, à partir de 25 € — même tarif quel que soit le sexe. Dégradé, carré, frange, brosse : nos coiffeurs maîtrisent toutes les coupes enfants. Rendez-vous conseillé le mercredi et samedi (forte affluence). Réservez via <a href="https://widget.treatwell.be/fr/salon/tony-and-son/" target="_blank" rel="noopener">Treatwell</a> ou au 02 230 55 37.`,
    faq: [
      { question: "Mon enfant a peur du coiffeur. Comment ça se passe ?", answer: "On y est habitués. Nos coiffeurs s'adaptent au rythme de l'enfant : pause si besoin, genoux d'un parent, jouets. L'objectif est qu'il reparte avec un bon souvenir, pas un traumatisme." },
      { question: "À partir de quel âge ?", answer: "Dès le plus jeune âge, y compris pour une première coupe. Certains de nos plus petits clients ont moins d'un an." },
      { question: "Le tarif est le même pour filles et garçons ?", answer: "Oui, 25 € quel que soit le sexe. Le prix varie uniquement si la coupe est plus complexe (dégradé élaboré, coiffure pour occasion spéciale)." }
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
    description: "Mèches sur mesure chez Tony&Son, coiffeur à Bruxelles. Reflets lumineux et structurés réalisés par nos coloristes experts.",
    longDescription: `Si le <a href="/fr/services/balayage-bruxelles/">balayage</a> est le pinceau, les mèches sont le crayon. Plus précises, plus structurées, avec des contrastes plus francs. C'est la technique qu'on recommande aux clientes qui veulent un changement visible — pas juste un « petit quelque chose ».

Trois techniques, trois résultats différents. Les mèches au papier aluminium donnent un résultat régulier et précis — c'est le classique, celui qu'on maîtrise depuis 1970. Les mèches au bonnet créent des reflets fins et homogènes, idéales pour un premier essai. Et les mèches à main levée offrent un résultat plus libre, à mi-chemin entre les mèches classiques et le balayage.

Le point important : les mèches demandent un entretien plus fréquent que le balayage. Comptez une visite toutes les 6-8 semaines pour éviter l'effet « repousse visible ». C'est le compromis : résultat plus marqué, mais suivi plus régulier. Nos coloristes vous expliquent ça dès la consultation pour que vous choisissiez en connaissance de cause.

Salon Tony&Son, rue Bonneels 27 à Saint-Josse-ten-Noode. Accessible depuis Schaerbeek, le quartier européen et la gare de Maelbeek.`,
    faq: [
      { question: "Mèches ou balayage ?", answer: "Les mèches donnent des contrastes plus nets et structurés. Le <a href='/fr/services/balayage-bruxelles/'>balayage</a> est plus fondu et naturel. Les mèches demandent un entretien plus fréquent (6-8 semaines vs 3-4 mois). Nos coloristes vous montrent des exemples des deux." },
      { question: "Les mèches abîment-elles les cheveux ?", answer: "Toute décoloration sollicite le cheveu. On utilise des produits professionnels et un soin restructurant est appliqué après chaque pose. Si vos cheveux sont trop fragilisés, on vous le dit — on préfère refuser que de risquer la casse." },
      { question: "Combien de temps dure la pose ?", answer: "Entre 1h30 et 2h30 selon la technique, la longueur et l'épaisseur de vos cheveux." },
      { question: "Peut-on combiner mèches et <a href='/fr/services/coloration-bruxelles/'>coloration</a> ?", answer: "Oui, c'est même courant. On peut faire des mèches sur une base colorée pour ajouter de la dimension. Nos coloristes planifient les deux ensemble pour un résultat harmonieux." }
    ]
  },

  // ─────────────────────────────────────────────
  // KÉRATINE — Ton : didactique, « attention confusion »
  // Volume : MOYEN (4 paragraphes, 3 FAQ)
  // ─────────────────────────────────────────────
  {
    slug: 'keratine-bruxelles',
    name: 'Traitements à la kératine',
    category: 'coiffure',
    description: "Soins à la kératine chez Tony&Son, coiffeur à Bruxelles. Réparation, brillance et discipline pour vos cheveux.",
    longDescription: `Stop. Avant d'aller plus loin : le traitement à la kératine N'EST PAS un lissage. C'est la confusion la plus fréquente qu'on entend dans notre salon à Saint-Josse-ten-Noode, et on comprend pourquoi — les deux utilisent le mot « kératine » et les résultats se ressemblent un peu. Mais ils ne font pas du tout la même chose.

Le traitement kératine est un soin. Il reconstitue la protéine naturelle du cheveu, qui s'abîme avec le temps (sèche-cheveux, pollution, <a href="/fr/services/coloration-bruxelles/">colorations</a>, soleil). Résultat : cheveux plus souples, plus brillants, moins de frisottis. Mais ça ne lisse pas. Si vous voulez un vrai lissage, c'est notre <a href="/fr/services/lissage-bruxelles/">service de lissage brésilien</a> qu'il vous faut.

Le traitement est particulièrement utile après une coloration, un balayage ou des mèches, pour réparer les dommages et prolonger l'éclat de la couleur. Durée au salon : 1h30-2h. L'effet dure 3-4 mois avec un shampooing sans sulfate.

Nos produits sont conformes aux normes européennes, sans formaldéhyde. Salon rue Bonneels 27, près de la gare de Maelbeek.`,
    faq: [
      { question: "C'est quoi la différence avec un <a href='/fr/services/lissage-bruxelles/'>lissage brésilien</a> ?", answer: "Le traitement kératine est un soin de réparation — il nourrit et réduit les frisottis sans modifier la structure. Le lissage brésilien lisse réellement les cheveux. Si vous voulez un résultat lissant, c'est le lissage qu'il vous faut." },
      { question: "C'est compatible avec des cheveux colorés ?", answer: "Oui, et c'est même recommandé. La kératine aide à réparer les dommages de la <a href='/fr/services/coloration-bruxelles/'>coloration</a> et prolonge l'éclat de votre couleur." },
      { question: "Combien de temps dure l'effet ?", answer: "3-4 mois avec un shampooing sans sulfate. L'effet s'estompe progressivement — pas de démarcation." }
    ]
  },

  // ─────────────────────────────────────────────
  // EXTENSIONS — Ton : direct, honnête, pragmatique
  // Volume : MOYEN (5 paragraphes, 4 FAQ)
  // ─────────────────────────────────────────────
  {
    slug: 'extensions-bruxelles',
    name: 'Extensions de cheveux',
    category: 'coiffure',
    price: 'À partir de 500 €',
    description: "Extensions de cheveux naturels chez Tony&Son à Bruxelles. Pose experte, cheveux Remy, résultat invisible.",
    longDescription: `Les extensions, c'est un sujet où il faut être franc. Oui, ça peut abîmer vos cheveux — si c'est mal posé, mal entretenu, ou si la technique n'est pas adaptée à votre situation. Non, ce n'est pas inévitable — chez Tony&Son à Saint-Josse-ten-Noode, on maîtrise autant la pose que la dépose, et c'est la dépose qui fait souvent la différence.

Quatre options, quatre situations différentes :

<strong>Kératine (à chaud)</strong> — la plus durable, 3-4 mois. Idéale pour un port quotidien. La pose prend du temps mais le résultat est invisible. <strong>Micro-anneaux (à froid)</strong> — pas de chaleur, moins agressif. Même durée. <strong>Tape-in (adhésives)</strong> — pose rapide, repose toutes les 6-8 semaines. Le meilleur rapport effort/résultat. <strong>Clips</strong> — temporaire, zéro engagement. Parfait pour un événement.

On utilise exclusivement des cheveux naturels de grade Remy — les cuticules sont alignées dans le même sens, ce qui évite les nœuds et garantit un aspect naturel. On ne travaille pas avec du synthétique.

La consultation est indispensable. On évalue la densité de vos cheveux, leur santé, votre mode de vie. Si vos cheveux sont trop fins ou fragilisés pour supporter des extensions, on vous le dit. À partir de 500 € selon la technique et la quantité. Accessible depuis Schaerbeek, Etterbeek et le quartier Schuman.`,
    faq: [
      { question: "Est-ce que ça abîme les cheveux ?", answer: "Ça dépend de la pose ET de la dépose. Chez Tony&Son, on maîtrise les deux. Une extension bien posée et correctement retirée ne laisse aucun dommage. Le risque vient des poses amateurs ou des déposes brutales." },
      { question: "Quelle technique pour des cheveux fins ?", answer: "Les tape-in ou les micro-anneaux sont les plus adaptés aux cheveux fins — moins de poids, moins de traction. Les extensions à kératine sont possibles aussi, mais avec des mèches plus petites. On évalue au cas par cas." },
      { question: "Combien de temps ça dure ?", answer: "Kératine : 3-4 mois. Tape-in : 6-8 semaines avant repose. Micro-anneaux : 3-4 mois. Clips : le temps que vous voulez." },
      { question: "Peut-on les colorer ?", answer: "Les extensions Remy (cheveux naturels) peuvent être colorées en salon. Mais le mieux est de choisir la bonne couleur dès le départ — nos coiffeurs matchent la teinte exacte avec vos cheveux naturels ou avec votre <a href='/fr/services/coloration-bruxelles/'>coloration</a>." }
    ]
  },

  // ─────────────────────────────────────────────
  // PERMANENTES — Ton : nostalgique revisité, fun
  // Volume : MOYEN-COURT (3 paragraphes, 3 FAQ)
  // ─────────────────────────────────────────────
  {
    slug: 'permanente-bruxelles',
    name: 'Permanentes',
    category: 'coiffure',
    description: "Permanentes modernes chez Tony&Son à Bruxelles. Boucles naturelles, vagues souples ou volume — les années 80 c'est fini.",
    longDescription: `Votre mère a eu une permanente dans les années 80 et ça l'a traumatisée. On sait. Mais les permanentes de 2024 n'ont strictement rien à voir. Les formulations sont incomparablement plus douces, les résultats sont contrôlés, et on peut obtenir des vagues souples (bodywave) aussi bien que des boucles définies.

Chez Tony&Son à Saint-Josse-ten-Noode, on propose trois variations. La <strong>spirale</strong> pour des boucles bien définies. Le <strong>bodywave</strong> pour des ondulations naturelles — c'est la plus demandée actuellement. Et la <strong>permanente partielle</strong> : uniquement sur les racines (pour du volume) ou sur les pointes (pour du mouvement). On n'est pas obligé de tout boucler.

Point important : on ne fait pas de permanente sur des cheveux trop abîmés. Si vous avez eu un <a href="/fr/services/lissage-bruxelles/">lissage brésilien</a> récent ou une décoloration importante, nos coiffeurs vous le diront et proposeront une alternative. La permanente dure 2-3h au salon, le résultat tient 3-6 mois. Salon rue Bonneels 27, à côté de la gare de Maelbeek.`,
    faq: [
      { question: "La permanente abîme-t-elle les cheveux ?", answer: "Les formulations modernes sont beaucoup plus douces qu'avant. Mais on évalue toujours l'état de vos cheveux avant. Si c'est trop risqué (coloration récente, <a href='/fr/services/lissage-bruxelles/'>lissage</a>), on vous le dit et on propose une alternative." },
      { question: "Quel type pour un effet naturel ?", answer: "Le bodywave. Des vagues souples, pas des bouclettes serrées. La permanente partielle sur les pointes donne aussi du mouvement sans tout changer." },
      { question: "Permanente + coloration, c'est possible ?", answer: "Oui, avec un délai de 2 semaines minimum entre les deux. Sur cheveux très décolorés, la permanente est déconseillée. Nos coiffeurs planifient les soins dans le bon ordre." }
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
    description: "Taille de barbe précise chez Tony&Son, barbier à Bruxelles. Rasage traditionnel, dégradé, serviette chaude. Tous types de barbe.",
    longDescription: `Sur <a href="https://www.qcunbon.be" target="_blank" rel="noopener">qcunbon.be</a>, un gars a écrit : « J'ai toujours peur avec les coiffeurs, généralement ça ne ressemble jamais à ce que j'avais demandé. » On l'entend souvent, ça. Et c'est exactement pour ça que nos barbiers à Saint-Josse-ten-Noode prennent le temps de discuter avant de toucher quoi que ce soit.

Une taille de barbe chez Tony&Son, ce n'est pas un coup de tondeuse en 5 minutes. On commence par regarder la forme de votre visage, la densité de votre pilosité, la direction de pousse. On vous demande ce que vous voulez. Et ensuite seulement, on y va : tondeuse de précision pour le volume, ciseaux pour les finitions, rasoir droit pour les contours. Propre.

Le rasage traditionnel au coupe-chou fait partie de nos classiques. Serviette chaude sur le visage pour ouvrir les pores, mousse au blaireau, rasage à la lame, soin après-rasage. C'est un moment. Les habitués reviennent pour ça autant que pour le résultat.

Et le dégradé ? Oui, on le maîtrise. Skin fade, mid fade, high fade, taper — venez avec une photo si vous voulez un truc précis, ou laissez nos barbiers vous proposer ce qui va avec votre tête. Beaucoup de nos clients du quartier Schuman et de Schaerbeek viennent spécifiquement pour le fade.

On travaille avec toutes les textures. Pilosité européenne, maghrébine, afro, asiatique — chaque texture a ses spécificités et nos barbiers les connaissent. Un dégradé sur cheveu crépu ne se fait pas comme sur cheveu lisse, et nos barbiers adaptent leur technique à chaque client.

Le salon est rue Bonneels 27, à Saint-Josse-ten-Noode. Ouvert du mardi au vendredi 9h-19h, samedi 9h-18h. Rendez-vous recommandé le vendredi et samedi. Réservez via <a href="https://widget.treatwell.be/fr/salon/tony-and-son/" target="_blank" rel="noopener">Treatwell</a> ou au 02 230 55 37.`,
    faq: [
      { question: "Vous faites le rasage traditionnel au rasoir droit ?", answer: "Oui. Serviette chaude, mousse au blaireau, rasoir droit (coupe-chou), soin après-rasage. Disponible sur rendez-vous." },
      { question: "Vous maîtrisez le dégradé américain (fade) ?", answer: "Skin fade, mid fade, high fade, taper fade — nos barbiers maîtrisent toutes les techniques. Amenez une photo de référence si vous voulez un résultat précis." },
      { question: "Tous les types de barbe et de cheveux ?", answer: "Oui. Pilosité européenne, maghrébine, afro, asiatique. Nos barbiers adaptent leur technique à chaque texture — un dégradé sur cheveu crépu ne se fait pas comme sur cheveu lisse." },
      { question: "Rendez-vous obligatoire ou sans rendez-vous ?", answer: "Rendez-vous recommandé, surtout vendredi et samedi. Réservez via <a href='https://widget.treatwell.be/fr/salon/tony-and-son/' target='_blank' rel='noopener'>Treatwell</a> ou au 02 230 55 37. Sans rendez-vous accepté selon disponibilité." },
      { question: "C'est quoi l'ambiance ?", answer: "Un salon de quartier avec une vraie histoire — la famille Campisi depuis 1970. Professionnel mais décontracté. On prend le temps avec chaque client. Pas un barbershop de chaîne." }
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
    description: "Coloration en dégradé chez Tony&Son, coiffeur à Bruxelles. Ombré, sombré ou dip-dye — des nuances harmonieuses.",
    longDescription: `Ombré, sombré, dip-dye. Trois mots, trois techniques, trois résultats différents. Nos coloristes chez Tony&Son à Saint-Josse-ten-Noode vous expliquent :

<strong>Ombré</strong> — transition nette du foncé (racines) au clair (pointes). Effet marqué, très visible. <strong>Sombré</strong> — même principe, mais fondu plus doux. « Soft ombré ». Le plus naturel des trois. <strong>Dip-dye</strong> — démarcation franche, parfois avec des couleurs fantaisie. Plus audacieux. Les trois ont un avantage commun : la repousse fait partie du style. Entretien tous les 3-4 mois seulement, ce qui en fait les techniques les plus économiques pour un changement de tête.

À partir de 40 €. On vous montre des exemples avant de commencer pour être sûrs qu'on parle de la même chose. Rue Bonneels 27, Saint-Josse-ten-Noode. Pour des techniques plus classiques, voir aussi nos pages <a href="/fr/services/coloration-bruxelles/">coloration</a>, <a href="/fr/services/balayage-bruxelles/">balayage</a> et <a href="/fr/services/meches-bruxelles/">mèches</a>.`,
    faq: [
      { question: "Ombré ou balayage ?", answer: "L'ombré crée une transition verticale claire du foncé au clair. Le <a href='/fr/services/balayage-bruxelles/'>balayage</a> crée des reflets diffus et naturels dans toute la chevelure. Deux techniques très différentes — nos coloristes vous montrent des exemples." },
      { question: "C'est facile à entretenir ?", answer: "Oui. La repousse fait partie du style — pas besoin de revenir avant 3-4 mois. C'est l'option la plus low-maintenance de toutes nos colorations." }
    ]
  },

  // ─────────────────────────────────────────────
  // ÉPILATION — Ton : ultra-factuel
  // Volume : TRÈS COURT (1 paragraphe, 2 FAQ)
  // ─────────────────────────────────────────────
  {
    slug: 'epilation-cire-bruxelles',
    name: 'Épilation à la cire',
    category: 'coiffure',
    price: '10 €',
    description: "Épilation à la cire du visage chez Tony&Son à Bruxelles. Sourcils, lèvre, menton. 10 €.",
    longDescription: `Sourcils, lèvre supérieure, menton. Cire tiède, geste rapide, 10 €. Hommes et femmes. Se combine avec une coupe ou un <a href="/fr/services/brushing-bruxelles/">brushing</a> — mentionnez-le à la réservation. Tony&Son, rue Bonneels 27, Saint-Josse-ten-Noode. Tél : 02 230 55 37.`,
    faq: [
      { question: "C'est douloureux ?", answer: "Le geste est rapide et la sensation brève. On utilise de la cire tiède, moins agressive que la cire chaude." },
      { question: "Combinable avec d'autres services ?", answer: "Oui. Beaucoup de clients ajoutent l'épilation des sourcils à leur <a href='/fr/services/brushing-bruxelles/'>brushing</a> ou leur coupe. Il suffit de le mentionner à la réservation." }
    ]
  }
];

export function getServicesByCategory(category: 'coiffure' | 'barbier') {
  return services.filter(s => s.category === category);
}

export function getServiceBySlug(slug: string) {
  return services.find(s => s.slug === slug);
}
