import { Article, Category } from '../types';

export const NAVIGATION_CATEGORIES: Category[] = [
  'All',
  'International',
  'Europe',
  'France',
  'Economy',
  'Environment',
  'Culture',
  'Opinion',
  'Sport',
  'Science',
  'Style',
  'The Big Read'
];

export const LIVE_NEWS_FEED = [
  { time: '14:25', topic: 'Kyiv', title: 'European Commission announces €2.8B emergency winter energy package for Ukrainian grid' },
  { time: '13:50', topic: 'Paris', title: 'National Assembly begins debate on environmental tax reform amid cross-party discussions' },
  { time: '13:12', topic: 'Frankfurt', title: 'ECB President Christine Lagarde reaffirms monetary stability targets in Eurozone address' },
  { time: '12:40', topic: 'Brussels', title: 'EU climate ministers reach consensus on Mediterranean maritime emissions standards' },
  { time: '11:55', topic: 'Berlin', title: 'German-French high-speed rail consortium inaugurates direct night connection' },
  { time: '10:30', topic: 'Rome', title: 'G7 culture ministers establish joint task force for safeguarding Mediterranean heritage' }
];

export const ARTICLES: Article[] = [
  {
    id: 'lead-story-macron-europe',
    kicker: 'EUROPEAN DIPLOMACY',
    section: 'Europe',
    subsection: 'International',
    headline: 'Faced with global volatility, France and Germany push for accelerated European strategic autonomy',
    summary:
      'In a joint address ahead of the Brussels summit, Paris and Berlin outlined a far-reaching overhaul of collective defense financing, clean energy networks, and industrial sovereignty.',
    byline: 'By Philippe Ricard in Brussels and Claire Gatinois in Paris',
    readTime: '6 min read',
    date: 'October 12, 2026, at 14:10 (Paris)',
    audioMinutes: 7,
    isSubscriberOnly: true,
    imageUrl: 'https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'The European Council building in Brussels, where member states will convene to finalize defense and energy investment frameworks.',
    imageCredit: 'Le Monde / European Union',
    paragraphs: [
      'BRUSSELS — In an unprecedented joint diplomatic démarche ahead of this week’s European Council summit, French President Emmanuel Macron and German Chancellor Olaf Scholz presented a comprehensive roadmap designed to reinforce the European Union’s technological, defense, and economic independence.',
      'The proposal, presented simultaneously in Paris and Berlin, calls for the creation of a specialized €250 billion European Sovereignty Fund. The capital would be channeled toward joint military procurement, next-generation semiconductor manufacturing, and trans-continental clean hydrogen networks.',
      '“Europe cannot afford to remain a passive spectator to geopolitical friction between continental superpowers,” said an Élysée spokesperson during a background briefing. “Strategic autonomy is no longer a rhetorical doctrine; it has become an indispensable baseline for safeguarding our democratic model and social contract.”',
      'The initiative has garnered immediate backing from Rome, Warsaw, and Madrid, marking a decisive shift away from traditional fiscal hesitation toward pooled borrowing instruments.',
      'Northern capitals, historically reluctant toward shared debt obligations, have conceded that fragmented procurement is producing unsustainable cost redundancies across European armed forces.',
      'Diplomats in Brussels noted that the joint Franco-German momentum provides critical leverage ahead of scheduled multilateral negotiations on trade reciprocity with Washington and Beijing.'
    ],
    pullQuote: {
      text: '“Europe cannot afford to remain a passive spectator to geopolitical friction. Strategic autonomy is no longer a rhetorical doctrine; it has become an indispensable baseline.”',
      attribution: 'Élysée Diplomatic Briefing, Paris'
    },
    comments: [
      {
        id: 'c-eur-1',
        author: 'Julien Mercier',
        location: 'Lyon, France',
        timestamp: '1 hour ago',
        content: 'Pooling defense procurement is twenty years overdue. Having 27 different tank and artillery specifications within the EU was a logistical failure.',
        likes: 54,
        isLeMondePick: true
      },
      {
        id: 'c-eur-2',
        author: 'Anke Weber',
        location: 'Frankfurt, Germany',
        timestamp: '45 mins ago',
        content: 'The industrial sovereignty aspect is crucial. Without European microchips and clean steel, our manufacturing base remains precariously exposed.',
        likes: 31
      }
    ]
  },
  {
    id: 'live-ukraine-frontline',
    kicker: 'WAR IN UKRAINE',
    section: 'International',
    subsection: 'Conflict & Diplomacy',
    headline: 'LIVE · Kyiv repels drone assault on energy grid as European allies pledge emergency winter support',
    summary:
      'Follow continuous reporting from our correspondents in Kyiv, Warsaw, and Brussels as diplomatic negotiations resume on infrastructure security.',
    byline: 'By Piotr Smolar in Kyiv and Sylvie Kauffmann in Paris',
    readTime: 'Live updates',
    date: 'Updated 12 min ago (Paris)',
    audioMinutes: 5,
    isSubscriberOnly: false,
    isLive: true,
    imageUrl: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&w=800&q=80',
    imageCaption: 'Repair crews working on substation transformers on the outskirts of Kyiv following overnight drone strikes.',
    imageCredit: 'Serhiy Supinsky / AFP',
    paragraphs: [
      'KYIV — Ukrainian air defense units successfully intercepted 48 of 54 long-range attack drones launched against municipal electrical substations and district heating hubs overnight, military officials in Kyiv announced on Monday morning.',
      'Despite the high interception rate, falling debris caused localized blackouts in two northeastern regions, prompting municipal utilities to deploy mobile generator networks supplied by European partners.',
      'At a briefing in Brussels, the European Commissioner for Energy confirmed the dispatch of 800 heavy industrial generators alongside spare transmission components to reinforce resilience ahead of sub-zero winter temperatures.',
      '“The targeting of heating networks as winter sets in is a deliberate attempt to demoralize civilian populations,” remarked a senior French diplomatic source. “France and its partners will ensure the electrical grid remains operational throughout the cold season.”',
      'Meanwhile, confidential discussions mediated by international partners continue regarding maritime safety corridors in the Black Sea, where grain and fertilizer shipments have maintained steady export rhythms.'
    ],
    comments: [
      {
        id: 'c-ukr-1',
        author: 'Nathalie Dupont',
        location: 'Paris, France',
        timestamp: '2 hours ago',
        content: 'The courage of Ukrainian emergency electrical workers working in the dark to restore heat is extraordinary.',
        likes: 67,
        isLeMondePick: true
      }
    ]
  },
  {
    id: 'france-matignon-budget',
    kicker: 'FRENCH POLITICS',
    section: 'France',
    subsection: 'National Assembly',
    headline: 'At the National Assembly, the French government navigates high-stakes deficit negotiations',
    summary:
      'The Prime Minister seeks compromise on public spending cuts and ecological tax incentives as parliamentary groups debate amended budget bills.',
    byline: 'By Alexandre Lemarié and Mariama Darame in Paris',
    readTime: '5 min read',
    date: 'October 12, 2026, at 11:45 (Paris)',
    audioMinutes: 6,
    isSubscriberOnly: true,
    imageUrl: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80',
    imageCaption: 'The Palais Bourbon in Paris, seat of France’s National Assembly.',
    imageCredit: 'Bertrand Guay / Le Monde',
    paragraphs: [
      'PARIS — Inside the Palais Bourbon, the government of France is facing its most critical parliamentary test of the legislative year as debate commences on the 2027 draft budget bill.',
      'Caught between European deficit guidelines and intense domestic social priorities, the executive branch is seeking fragile consensus with moderate opposition deputies to avoid resorting to Article 49.3 of the French Constitution.',
      'Key amendments under discussion include a phased reduction in operational state expenditures paired with targeted taxes on share buybacks and windfall profits from fossil fuel conglomerates.',
      '“Our objective is to restore fiscal equilibrium while protecting essential public investments in public hospitals, schools, and the ecological transition,” stated the Minister for the Economy before the Finance Committee.',
      'Parliamentary observers predict grueling late-night sessions throughout the week as party leaders negotiate compromises on local municipal subsidies and agricultural fuel taxation.'
    ],
    pullQuote: {
      text: '“Our objective is to restore fiscal equilibrium while protecting essential public investments in hospitals, schools, and ecological transition.”',
      attribution: 'Minister for the Economy, Palais Bourbon'
    },
    comments: [
      {
        id: 'c-pol-1',
        author: 'Antoine Moreau',
        location: 'Bordeaux, France',
        timestamp: '3 hours ago',
        content: 'Finding a parliamentary majority without triggering constitutional overrides is the exact test French democracy needs.',
        likes: 38
      }
    ]
  },
  {
    id: 'big-read-green-industry',
    kicker: 'THE BIG READ · INVESTIGATION',
    section: 'The Big Read',
    subsection: 'Industrial Ecology',
    headline: 'How Europe’s clean tech race is reshaping the historic Rhine-Rhône industrial corridor',
    summary:
      'From electric battery gigafactories in Dunkirk to low-carbon steelworks in Duisburg, a monumental structural transformation is redefining Europe’s manufacturing heartlands.',
    byline: 'By Jean-Michel Bezat in Dunkirk and Thomas Wieder in Duisburg',
    readTime: '11 min read',
    date: 'October 11, 2026, at 09:30 (Paris)',
    audioMinutes: 12,
    isSubscriberOnly: true,
    imageUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80',
    imageCaption: 'Robotic assembly in a newly commissioned battery cell plant in northern France’s Battery Valley.',
    imageCredit: 'Le Monde / Grand Format',
    paragraphs: [
      'DUNKIRK, Northern France — Along the North Sea coast, where blast furnaces once belched dense gray smoke across Flanders, a silent electric revolution is taking physical shape.',
      'Four colossal gigafactories are currently operational or under construction within a 60-kilometer radius, earning the region the moniker "Battery Valley." Hundreds of specialized engineers, lured from across Europe and Asia, are supervising automated cleanrooms where lithium iron phosphate cells roll off clean conveyors.',
      'Yet beneath this visual triumph lies an acute technological and logistical challenge: securing green electricity at stable prices and cultivating a vast new domestic workforce of technicians and chemical process operators.',
      '“We are building a twentieth-century industrial base with twenty-first-century environmental mandates in less than a decade,” explains Marie Lefebvre, site director of the Dunkirk facility. “Every kilowatt of energy and every liter of recycled water is calibrated to minimize environmental impact.”',
      'Across the border in Germany’s Ruhr basin, steel plants are gradually replacing coal-fired coking ovens with hydrogen direct-reduction towers. The capital expenditure is staggering, demanding tens of billions in public-private co-investment.',
      'For Europe, this industrial migration represents more than economic competitiveness: it is the primary litmus test of whether an open democratic bloc can decarbonize without deindustrializing.'
    ],
    pullQuote: {
      text: '“We are building an entire twentieth-century industrial base with twenty-first-century environmental mandates in less than a decade.”',
      attribution: 'Marie Lefebvre, Battery Valley Industrial Director'
    },
    comments: [
      {
        id: 'c-big-1',
        author: 'Gérard Blanc',
        location: 'Lille, France',
        timestamp: '5 hours ago',
        content: 'The industrial revival in Hauts-de-France is palpable. For forty years this region was left for dead; today young engineers are moving here from Paris and abroad.',
        likes: 82,
        isLeMondePick: true
      }
    ]
  },
  {
    id: 'opinion-piketty-wealth',
    kicker: 'OPINION · TRIBUNE',
    section: 'Opinion',
    subsection: 'Economics & Society',
    headline: 'Thomas Piketty: "Why a coordinated European wealth contribution is essential for climate justice"',
    summary:
      'To finance the ecological transition without disproportionately penalizing working households, European nations must establish an integrated tax on ultra-high net worth capital.',
    byline: 'By Thomas Piketty',
    authorTitle: 'Economist, Director of Studies at EHESS & Paris School of Economics',
    readTime: '7 min read',
    date: 'October 12, 2026, at 08:00 (Paris)',
    audioMinutes: 8,
    isSubscriberOnly: true,
    imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    imageCaption: 'The financial towers of Paris La Défense.',
    imageCredit: 'Le Monde / Archives',
    paragraphs: [
      'The climate crisis cannot be resolved through regressive consumer taxes that spark popular revolts while exempting the principal beneficiaries of hyper-capitalism.',
      'Carbon taxes levied on heating oil or commuter fuel inevitably provoke legitimate democratic backlash when citizens observe private jets, tax havens, and massive dividend transfers operating with near-impunity across borders.',
      'A progressive European wealth tax of 2% on net fortunes exceeding €100 million would raise over €180 billion annually across the European Union. This sum alone would fund half the capital expenditures needed to retrofit public buildings, expand regional rail links, and subsidize heat pump installations for low-income families.',
      'Fiscal coordination is entirely feasible within the framework of enhanced cooperation permitted by European treaties. What has been lacking is not technical instruments, but political willpower.',
      'Without fiscal justice, the green transition will either stall indefinitely or collapse into social confrontation. The choice before European leaders is clear: progressive solidarity or climate paralysis.'
    ],
    pullQuote: {
      text: '“Carbon taxes levied on commuter fuel provoke legitimate backlash when citizens observe private jets and tax havens operating with near-impunity.”',
      attribution: 'Thomas Piketty, Tribune in Le Monde'
    },
    comments: [
      {
        id: 'c-op-1',
        author: 'Claire Delorme',
        location: 'Toulouse, France',
        timestamp: '4 hours ago',
        content: 'Piketty makes the essential point: ecological transition without fiscal justice is a recipe for social explosion. Europe needs bold common rules.',
        likes: 95,
        isLeMondePick: true
      }
    ]
  },
  {
    id: 'opinion-lemonde-editorial',
    kicker: 'LE MONDE EDITORIAL',
    section: 'Opinion',
    subsection: 'Editorial Board',
    headline: 'Editorial: The vital necessity of European cultural independence in the age of algorithmic monopoly',
    summary:
      'Preserving linguistic diversity, copyright protections, and public broadcasting is a foundational democratic requirement against unregulated digital consolidation.',
    byline: 'By Le Monde Editorial Board',
    readTime: '4 min read',
    date: 'October 12, 2026, at 07:00 (Paris)',
    audioMinutes: 5,
    isSubscriberOnly: false,
    imageUrl: 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?auto=format&fit=crop&w=800&q=80',
    imageCaption: 'Open books in the historic reading room of the Bibliothèque nationale de France in Paris.',
    imageCredit: 'BnF / Le Monde',
    paragraphs: [
      'Culture is neither an ordinary commodity nor raw training data to be scraped without consent by proprietary foreign algorithmic models.',
      'For decades, France’s "cultural exception" was dismissed by neoliberal free-marketeers as protectionist vanity. Today, as generative artificial intelligence systems threaten to cannibalize the livelihoods of authors, journalists, translators, and filmmakers, that French insight stands vindicated.',
      'Europe possesses the richest mosaic of literary, cinematographic, and philosophical traditions on Earth. Allowing that heritage to be homogenized by Silicon Valley data aggregators would be a civilizational abdication.',
      'The European Union’s AI Act and copyright directives must be enforced with uncompromising rigour: transparency on training datasets, fair remuneration for creators, and sustained funding for independent journalism.',
      'A democracy that surrenders its cultural narrative to unaccountable foreign algorithms ceases to think for itself.'
    ],
    pullQuote: {
      text: '“A democracy that surrenders its cultural narrative to unaccountable foreign algorithms ceases to think for itself.”',
      attribution: 'Le Monde Editorial'
    },
    comments: [
      {
        id: 'c-ed-1',
        author: 'Marc Vaneau',
        location: 'Strasbourg, France',
        timestamp: '6 hours ago',
        content: 'A powerful defense of cultural exception. Copyright is not a barrier to innovation; it is the prerequisite of human creativity.',
        likes: 47,
        isLeMondePick: true
      }
    ]
  },
  {
    id: 'economy-ecb-rates',
    kicker: 'EUROPEAN ECONOMY',
    section: 'Economy',
    subsection: 'Monetary Policy',
    headline: 'European Central Bank signals measured rate pause as inflation stabilizes across the Eurozone',
    summary:
      'Christine Lagarde emphasizes resilience in the service sector while warning that persistent energy price volatility demands sustained monetary vigilance.',
    byline: 'By Éric Albert in Frankfurt',
    readTime: '4 min read',
    date: 'October 12, 2026, at 12:30 (Paris)',
    audioMinutes: 4,
    isSubscriberOnly: false,
    imageUrl: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=800&q=80',
    imageCaption: 'The European Central Bank tower in Frankfurt am Main.',
    imageCredit: 'Arne Dedert / DPA',
    paragraphs: [
      'FRANKFURT — Meeting at its headquarters overlooking the Main river, the Governing Council of the European Central Bank held its benchmark deposit facility rate steady on Monday, indicating that borrowing costs have reached an equilibrium capable of keeping headline inflation anchored near the 2% target.',
      'Eurozone consumer price growth moderated to 2.1% year-on-year in September, buoyed by declining wholesale electricity and natural gas rates across the single currency bloc.',
      '“We are observing clear signs of disinflation in core goods,” ECB President Christine Lagarde told reporters. “However, wage growth in specialized services remains elevated, and geopolitical tensions across maritime supply corridors remind us that risks remain two-sided.”',
      'Commercial lenders reported modest improvements in business loan demand, particularly for digital modernization and thermal renovation projects.'
    ],
    comments: [
      {
        id: 'c-eco-1',
        author: 'Paul H.',
        location: 'Amsterdam, Netherlands',
        timestamp: '1 hour ago',
        content: 'The pause was widely expected. European mortgage rates are finally stabilizing around 3.2%, which brings welcome relief to home buyers.',
        likes: 19
      }
    ]
  },
  {
    id: 'environment-mediterranean-water',
    kicker: 'ENVIRONMENT & CLIMATE',
    section: 'Environment',
    subsection: 'Water & Agriculture',
    headline: 'Drought and renewal: How Southern France is rethinking agriculture in the era of arid summers',
    summary:
      'In the Hérault and Drôme valleys, farmers and hydrologists are deploying ancestral water-catchment basins, drought-resilient crops, and agroforestry.',
    byline: 'By Martine Valo in Montpellier',
    readTime: '8 min read',
    date: 'October 11, 2026, at 16:15 (Paris)',
    audioMinutes: 9,
    isSubscriberOnly: true,
    imageUrl: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80',
    imageCaption: 'Agroforestry plots intercropping olive groves and winter lentils near Montpellier.',
    imageCredit: 'Le Monde / Environment',
    paragraphs: [
      'MONTPELLIER — Walking through fields of golden grain in the Hérault backcountry, agronomist Sébastien Rouquette bends down to scoop a fistful of dark, crumbly soil. Despite three months without significant rainfall, the earth beneath the surface remains cool and moist.',
      '“Ten years ago, we were tilling the soil deep and spraying chemical fertilizers, watching topsoil blow away during summer tramontane winds,” he says. “Today, with cover crops and shade trees planted directly between rows, the soil retains humidity like a natural sponge.”',
      'Faced with repeated heatwaves and declining flow in the Rhône and Garonne basins, the French agricultural landscape is undergoing rapid reinvention.',
      'Traditional monocultures of water-thirsty maize are increasingly replaced by sorghum, chickpeas, and ancient varieties of durum wheat adapted to Mediterranean climates.',
      'Regional water agencies are partnering with municipal cooperatives to recharge subterranean aquifers during winter rainstorms, creating resilient underground reserves that bypass surface evaporation.'
    ],
    pullQuote: {
      text: '“Cover crops and shade trees planted directly between rows turn the soil into a natural sponge that resists 40°C heat.”',
      attribution: 'Sébastien Rouquette, Agronomist'
    },
    comments: [
      {
        id: 'c-env-1',
        author: 'Isabelle Martin',
        location: 'Aix-en-Provence, France',
        timestamp: '7 hours ago',
        content: 'This is the true ecological transition in practice: science, ancestral techniques, and respect for natural cycles working together.',
        likes: 53,
        isLeMondePick: true
      }
    ]
  },
  {
    id: 'culture-cannes-cinema',
    kicker: 'CINEMA & ARTS',
    section: 'Culture',
    subsection: 'Film Review',
    headline: 'French cinema’s new international renaissance: Beyond Parisian romanticism',
    summary:
      'A bold new generation of filmmakers from Marseille, Lyon, and the banlieues is captivating international festivals with inventive narrative forms and searing authenticity.',
    byline: 'By Clarisse Fabre in Paris',
    readTime: '6 min read',
    date: 'October 10, 2026, at 18:20 (Paris)',
    audioMinutes: 6,
    isSubscriberOnly: false,
    imageUrl: 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=800&q=80',
    imageCaption: 'A movie theater projection screen in Paris’s Latin Quarter.',
    imageCredit: 'Le Monde / Culture',
    paragraphs: [
      'For decades, Anglo-American audiences held an idealized cinematic postcard of France: cobblestone Montmartre alleys, melancholic jazz in smoke-filled bistros, and bourgeois existential crises.',
      'That cliché has been thoroughly dismantled. Today’s most celebrated French cinematic exports come from directors who grew up in suburban social housing estates, working-class Mediterranean ports, and rural mountain communities.',
      'At recent film festivals in Venice, Toronto, and San Sebastián, French productions distinguished themselves by marrying formal aesthetic radicalism with pressing social urgency.',
      '“There is an extraordinary appetite for stories that capture the real friction and multilingual vitality of contemporary French society,” observes film critic Thomas Sotinel. “The energy is intoxicating.”',
      'Supported by France’s unique CNC box-office redistribution model, independent production houses have found the financial autonomy to take artistic risks that Hollywood studios have largely abandoned.'
    ],
    comments: [
      {
        id: 'c-cul-1',
        author: 'Émilie Vernier',
        location: 'Marseille, France',
        timestamp: '8 hours ago',
        content: 'French cinema is in a golden age precisely because it stopped looking at its own navel in the 6th arrondissement.',
        likes: 41
      }
    ]
  },
  {
    id: 'science-fusion-iter',
    kicker: 'SCIENCE & DISCOVERY',
    section: 'Science',
    subsection: 'Physics & Energy',
    headline: 'At Cadarache, the ITER nuclear fusion mega-project installs its first superconducting magnet sector',
    summary:
      'The world’s largest magnetic confinement plasma physics experiment reaches a critical engineering milestone in southern France after years of precision assembly.',
    byline: 'By David Larousserie in Saint-Paul-lès-Durance',
    readTime: '5 min read',
    date: 'October 12, 2026, at 10:15 (Paris)',
    audioMinutes: 6,
    isSubscriberOnly: true,
    imageUrl: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&w=800&q=80',
    imageCaption: 'The colossal tokamak pit at the ITER site in southern France.',
    imageCredit: 'ITER Organization / Le Monde',
    paragraphs: [
      'SAINT-PAUL-LÈS-DURANCE — Inside a cavernous clean assembly hall the size of a cathedral, a 320-ton D-shaped toroidal field coil was slowly lowered into the heart of the ITER tokamak on Monday.',
      'Manufactured in Europe through collaboration between French, Italian, and German industrial specialists, the superconducting magnet is engineered to generate a magnetic field of 11.8 Tesla — 250,000 times stronger than Earth’s magnetic field.',
      'The objective of the 35-nation consortium is to prove the scientific feasibility of fusion: replicating the physical processes that power the sun to generate clean, baseload electricity without long-lived radioactive waste.',
      '“This insertion was an engineering feat with sub-millimeter tolerances,” stated ITER Director General Pietro Barabaschi. “We are entering the final integration phase that will pave the way toward first plasma demonstrations.”'
    ],
    comments: [
      {
        id: 'c-sci-1',
        author: 'Dr. Lucas Rey',
        location: 'Grenoble, France',
        timestamp: '4 hours ago',
        content: 'A triumph of international scientific cooperation. Despite all geopolitical headwinds, 35 nations continue to build the future of physics together in Provence.',
        likes: 62,
        isLeMondePick: true
      }
    ]
  },
  {
    id: 'style-french-gastronomy',
    kicker: 'STYLE & L’ÉPOQUE',
    section: 'Style',
    subsection: 'Gastronomy',
    headline: 'How young Parisian chefs are deconstructing haute cuisine without losing its soul',
    summary:
      'In the 11th arrondissement, neo-bistros are championing hyper-local biodynamic foraging, low-intervention wines, and warm, unpretentious dining rooms.',
    byline: 'By François-Régis Gaudry in Paris',
    readTime: '5 min read',
    date: 'October 10, 2026, at 15:40 (Paris)',
    audioMinutes: 5,
    isSubscriberOnly: false,
    imageUrl: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=800&q=80',
    imageCaption: 'Artisanal dishes prepared with seasonal Ile-de-France produce in an open-kitchen bistro in Paris.',
    imageCredit: 'Le Monde / L’Époque',
    paragraphs: [
      'Gone are the days when a memorable French meal required starchy white tablecloths, hushed silver-service whispers, and eye-watering dress codes.',
      'Across the cobblestone streets of the 11th and 10th arrondissements of Paris, a thriving generation of chefs in their twenties and thirties is reinventing French gastronomy with exuberant joy.',
      'Their menus change not seasonally, but daily, dictated strictly by what market gardeners in the Seine-et-Marne bring to their kitchen doors at dawn.',
      '“Classic French culinary technique is an incredible toolkit of sauces, stocks, and ferments,” explains Chef Léa Marchand of restaurant Le Belvédère. “We take that rigor and strip away the snobbery. Eating well should feel like welcoming close friends into your living room.”'
    ],
    comments: [
      {
        id: 'c-sty-1',
        author: 'Sophie Chen',
        location: 'Paris, France',
        timestamp: '9 hours ago',
        content: 'The 11th arrondissement bistro scene is unbeatable. Fresh, inventive, and democratic.',
        likes: 33
      }
    ]
  },
  {
    id: 'sport-rugby-six-nations',
    kicker: 'SPORT',
    section: 'Sport',
    subsection: 'Rugby Union',
    headline: 'Six Nations Championship: France’s revamped squad embraces ruthless tactical discipline',
    summary:
      'Fabien Galthié introduces tactical adaptations ahead of the European tournament, prioritizing territorial kicking and rapid breakdown contests.',
    byline: 'By Clément Martel in Marcoussis',
    readTime: '4 min read',
    date: 'October 11, 2026, at 19:00 (Paris)',
    audioMinutes: 4,
    isSubscriberOnly: false,
    imageUrl: 'https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=800&q=80',
    imageCaption: 'The French national rugby team during tactical training in Marcoussis.',
    imageCredit: 'Franck Fife / AFP',
    paragraphs: [
      'MARCOUSSIS — At the National Rugby Centre in Marcoussis, the mood during autumn camp was one of quiet, methodical intensity.',
      'Head coach Fabien Galthié has recalibrated France’s game model, seeking to blend the irresistible flair of Antoine Dupont and Thomas Ramos with unyielding defensive structure at the breakdown.',
      '“The modern international game leaves zero margin for indiscipline,” Galthié noted during his squad unveiling. “Our ambition is total mastery in every sector of the pitch.”'
    ],
    comments: [
      {
        id: 'c-spo-1',
        author: 'Thierry Lambert',
        location: 'Toulouse, France',
        timestamp: '11 hours ago',
        content: 'With Dupont back at his peak physical condition, France has the depth to dominate the tournament.',
        likes: 29
      }
    ]
  },
  {
    id: 'popular-1-paris-olympics-legacy',
    kicker: 'URBAN DESIGN',
    section: 'France',
    subsection: 'Paris Life',
    headline: 'Two years after the Games, how the Seine cleanup permanently changed Parisian civic life',
    summary:
      'Public swimming sites along the Bras Marie and Canal Saint-Martin have become bustling, beloved fixtures of daily summer life in the French capital.',
    byline: 'By Denis Cosnard in Paris',
    readTime: '4 min read',
    date: 'October 12, 2026, at 09:10 (Paris)',
    audioMinutes: 4,
    isSubscriberOnly: false,
    imageUrl: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=800&q=80',
    imageCaption: 'Pedestrians and swimmers along the newly landscaped riverbanks of the Seine in central Paris.',
    imageCredit: 'Le Monde / Paris',
    paragraphs: [
      'PARIS — When Mayor Anne Hidalgo dived into the Seine ahead of the 2024 Olympic Games, sceptics dismissed the €1.4 billion cleanup project as an expensive public relations stunt.',
      'Two years later, the verdict of ordinary Parisians is overwhelmingly clear: the cleanup of the river has sparked one of the greatest urban quality-of-life transformations in modern European history.',
      'Every weekend between June and October, thousands of bathers flock to designated, water-tested swimming basins at Bras Marie, Bercy, and Grenelle.',
      'Ecologists have cataloged 36 fish species now breeding in the river, up from just three in the 1970s, turning the waterway into an ecological corridor that cools the city center during summer heatwaves.'
    ],
    comments: [
      {
        id: 'c-pop-1',
        author: 'Guillaume Roux',
        location: 'Paris, France',
        timestamp: '5 hours ago',
        content: 'Swimming in the Seine with the view of Notre-Dame is an unforgettable experience. A true gift to the city.',
        likes: 77,
        isLeMondePick: true
      }
    ]
  },
  {
    id: 'popular-2-coffee-culture',
    kicker: 'LIFESTYLE',
    section: 'Style',
    subsection: 'Culture',
    headline: 'The slow death of the bitter Parisian espresso and the rise of terroir specialty roasters',
    summary:
      'From Belleville to the Marais, a quiet specialty coffee revolution has upended the quintessential zinc-counter experience.',
    byline: 'By Elvire von Bardeleben in Paris',
    readTime: '3 min read',
    date: 'October 11, 2026, at 14:00 (Paris)',
    audioMinutes: 3,
    isSubscriberOnly: false,
    imageUrl: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=800&q=80',
    imageCaption: 'A barista preparing single-origin filter coffee in a Belleville micro-roastery.',
    imageCredit: 'Le Monde / Style',
    paragraphs: [
      'For more than a century, ordering an express au comptoir was a sacred Parisian ritual: dark, burnt, intensely bitter, and consumed in thirty seconds flat while reading the morning paper.',
      'Today, that scorched dark roast is retreating. Independent micro-roasteries in Belleville, Oberkampf, and Montmartre are educating French palates to celebrate fruit acidity, floral jasmine notes, and ethical direct-trade cooperatives in Ethiopia and Colombia.'
    ],
    comments: [
      {
        id: 'c-pop-2',
        author: 'Benoît D.',
        location: 'Paris, France',
        timestamp: '6 hours ago',
        content: 'Finally! French people love terroir wine and cheese; there was no reason to drink battery-acid coffee.',
        likes: 45
      }
    ]
  },
  {
    id: 'popular-3-literature-goncourt',
    kicker: 'BOOKS & LITERATURE',
    section: 'Culture',
    subsection: 'Literary World',
    headline: 'Prix Goncourt shortlist reveals a fierce literary reckoning with Europe’s postwar memory',
    summary:
      'France’s premier literary award highlights four gripping novels that excavate family archives, secret state trials, and wartime exile.',
    byline: 'By Macha Séry in Paris',
    readTime: '5 min read',
    date: 'October 12, 2026, at 13:00 (Paris)',
    audioMinutes: 5,
    isSubscriberOnly: true,
    imageUrl: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=800&q=80',
    imageCaption: 'The dining room of the Drouant restaurant in Paris where the Académie Goncourt convenes.',
    imageCredit: 'Le Monde / Livres',
    paragraphs: [
      'PARIS — Meeting at their traditional salon at restaurant Drouant, the ten members of the Académie Goncourt unveiled their finalist list for France’s most coveted literary distinction.',
      'Unlike previous years dominated by autobiographical introspection, this autumn’s selection is marked by sweeping historical ambition, with authors exploring archival trails across Central Europe, North Africa, and the Atlantic.'
    ],
    comments: [
      {
        id: 'c-pop-3',
        author: 'Catherine V.',
        location: 'Rennes, France',
        timestamp: '2 hours ago',
        content: 'A stellar shortlist. The novel on the Nuremberg translation corps is an absolute masterpiece.',
        likes: 36
      }
    ]
  }
];
