import type { MetierFaq } from "@/content/metier-pages";

/**
 * Version anglaise des pages métier, indexée par le slug français.
 *
 * Les pages visent un lectorat anglophone (expatriés, clientèle internationale)
 * qui cherche un prestataire pour une activité exercée en France : les
 * références réglementaires françaises sont donc conservées, avec leur nom
 * d'origine entre parenthèses quand il aide à les retrouver.
 *
 * `demoName` et `secondaryDemo.name` nomment la démo sans mention de langue :
 * tous les templates publics sont bilingues, le lien va vers `/en/<slug>`.
 */
export interface MetierPageEnglishCopy {
  /** Slug anglais, servi sous /en/{slug}. */
  slug: string;
  /** Utilisé dans les titres, au singulier, avec son article. */
  label: string;
  demoName: string;
  secondaryDemo?: { name: string; note: string };
  seoTitle: string;
  seoDescription: string;
  h1: string;
  intro: string;
  searchIntent: string[];
  siteMustDo: { title: string; detail: string }[];
  toPrepare: string[];
  faq: MetierFaq[];
}

export const metierPagesEn: Record<string, MetierPageEnglishCopy> = {
  "site-internet-plombier": {
    slug: "plumber-website",
    label: "a plumbing and heating business",
    demoName: "Plumbing and heating demo",
    seoTitle: "Website for plumbers: what you need | Sitekept",
    seoDescription:
      "A website for a plumbing and heating business: what customers look for in an emergency, what it must show, and our €500 offer delivered in 48 hours.",
    h1: "Website for plumbing and heating contractors",
    intro:
      "Plumbing is one of the few trades where visitors don't compare. They have a leak, they look for a number, and they call the first business that inspires confidence and serves their town. A plumber's website is therefore not judged on its looks, but on how long it takes to find the phone number and see that you work in the visitor's area.",
    searchIntent: [
      "An ongoing emergency: a leak, a broken boiler, a blocked drain. The visitor is in a hurry, often on mobile, sometimes standing in a flooded bathroom.",
      "A quote to request: replacing a boiler, renovating a bathroom. This time they compare, and they look at your past work and your certifications.",
      "A check: they got your name through word of mouth and want to confirm that you exist, that you are insured and that you cover their area.",
    ],
    siteMustDo: [
      {
        title: "The phone number visible without scrolling",
        detail:
          "At the top of every page, tappable on mobile. It is the first reflex of a visitor in an emergency, and the number one reason they leave when they have to hunt for it.",
      },
      {
        title: "Your service area, by name",
        detail:
          "List the towns, not just the département. “We work within a 30 km radius” helps no one: visitors want to read the name of their own town.",
      },
      {
        title: "Your hours, and what emergency service covers",
        detail:
          "Do you work evenings, weekends, holidays? Is there a surcharge? Saying so saves you pointless calls and spares them disappointment.",
      },
      {
        title: "Certifications and insurance",
        detail:
          "RGE, Qualibat, ten-year liability insurance (décennale): these are your proof of reliability, and some of them determine whether your customers can get financial assistance. They are useless if they stay in a drawer.",
      },
      {
        title: "Photos of real jobs",
        detail:
          "A bathroom you actually installed is worth more than ten stock images. It is also what sets you apart from the competitor who bought the same website template as everyone else.",
      },
    ],
    toPrepare: [
      "The list of towns where you work",
      "Your certifications and your ten-year liability insurance number",
      "Five to ten photos of finished jobs",
      "Your hours and your terms for emergency service",
    ],
    faq: [
      {
        question: "Does a plumber really need a website?",
        answer:
          "Word of mouth is still the trade's main channel, but it almost always comes with an online check. Without a website, that check lands on a directory listing you don't control, or on nothing at all. The website is as useful for converting a contact who is already interested as it is for generating new ones.",
      },
      {
        question: "Should a plumbing website show prices?",
        answer:
          "Rarely in detail, since every job is different. On the other hand, showing a trip charge, a price range for common jobs or the fact that quotes are free reassures visitors and filters out requests that are over budget before they pick up the phone.",
      },
    ],
  },
  "site-internet-dentiste": {
    slug: "dentist-website",
    label: "a dental practice",
    demoName: "Dental practice demo",
    seoTitle: "Website for dentists and dental practices | Sitekept",
    seoDescription:
      "A website for a dental practice: reassure patients before their first visit, organize treatments clearly, make booking easy. Delivered in 48 hours from €500.",
    h1: "Website for dental practices",
    intro:
      "A dental practice's website doesn't sell: it reassures. Some of your future patients arrive with genuine anxiety, sometimes long-standing. What they look for online before picking up the phone is what the practice looks like, who will see them and how a first visit works.",
    searchIntent: [
      "Pain: the visitor wants an appointment quickly and looks first at your availability and your address.",
      "A change of dentist: a move, or their previous dentist retiring. They compare practices on the welcome, the team and the opening hours.",
      "Cosmetic treatment or an implant: a long process and a high cost. They read, compare and come back several times before getting in touch.",
    ],
    siteMustDo: [
      {
        title: "A way to book an appointment on every page",
        detail:
          "Whether it is a phone number, a form or a link to your booking platform, no one should ever have to go back to the home page to find it.",
      },
      {
        title: "Treatments explained and organized by need",
        detail:
          "A patient doesn't search for “endodontics”, they search for “toothache”. Name treatments in their words, then explain the technical term.",
      },
      {
        title: "A “first visit” page",
        detail:
          "How long it takes, how it goes, what to bring, how payment works. This is the page that eases the most anxiety, and almost no practice has one.",
      },
      {
        title: "The team, with faces",
        detail:
          "Knowing who will see you changes how you feel about the appointment. Real photos, not stock portraits.",
      },
      {
        title: "Access and parking",
        detail:
          "Floor, elevator, wheelchair access, public transportation, where to park. Trivial details for you, decisive for a patient coming for the first time or with reduced mobility.",
      },
    ],
    toPrepare: [
      "The list of treatments you offer, and those you don't",
      "Photos of the practice and the team",
      "Your hours and how patients book appointments",
      "Practical information on access and parking",
    ],
    faq: [
      {
        question: "What can a dental practice's website say?",
        answer:
          "Dentists' communication is regulated by their code of ethics and by the French Public Health Code. Informing the public is allowed; advertising that compares or promises a result is not. We build the website on factual information — treatments, team, access, how appointments work — and it is up to you to have the content checked against your obligations to the Ordre (the French dental board).",
      },
      {
        question: "Do I need an online booking module?",
        answer:
          "If you already use a booking platform, the website should link to it clearly from every page: that is included in the business website. Developing a booking system specific to your practice, on the other hand, is a custom feature, quoted separately.",
      },
    ],
  },
  "site-internet-restaurant": {
    slug: "restaurant-website",
    label: "a restaurant",
    demoName: "Bistro restaurant demo",
    seoTitle: "Website for restaurants: the essentials | Sitekept",
    seoDescription:
      "A restaurant website: an up-to-date menu, reservations, hours and directions. What customers really look for, and our offer delivered in 48 hours from €500.",
    h1: "Website for restaurants",
    intro:
      "A restaurant website has three jobs, and only one real difficulty. The jobs: show the menu, take reservations, and say where and when you are open. The difficulty: staying up to date. An outdated menu or wrong hours cost more than having no website at all, because they make people travel for nothing.",
    searchIntent: [
      "An immediate choice: the visitor is looking for somewhere to eat tonight, often on mobile and nearby. They check the menu, the prices and whether there are tables left.",
      "An occasion to organize: a birthday, a team dinner, a group. They look for capacity, the option of booking the whole restaurant and a direct contact.",
      "A check before visiting: they have the address and want to confirm today's hours and whether they need a reservation.",
    ],
    siteMustDo: [
      {
        title: "The menu, readable and date-stamped",
        detail:
          "As text on the page, not as a PDF or a photo: a PDF is uncomfortable to read on mobile and invisible to search engines. Show prices, and the date of the last update if your menu changes often.",
      },
      {
        title: "Your real hours, days closed included",
        detail:
          "It is the most viewed information on a restaurant website, and the most often wrong. Remember vacation closures and holidays.",
      },
      {
        title: "Reservations, through the channel you actually use",
        detail:
          "Phone, platform or form: one single path, clearly shown. Two poorly synchronized channels produce double-booked tables.",
      },
      {
        title: "Photos of the dishes and the dining room",
        detail:
          "They are what gets people through the door. Taken on your premises, in daylight if possible, not bought from a stock library.",
      },
      {
        title: "The atmosphere, in a few words",
        detail:
          "Neighborhood bistro, fine dining, family-friendly, vegetarian: visitors want to know within ten seconds whether you are the right place for the occasion they are planning.",
      },
    ],
    toPrepare: [
      "Your up-to-date menu, with prices",
      "Your hours, days closed and vacation closures",
      "Ten to fifteen photos of dishes and the dining room",
      "How you take reservations, and the dining room's capacity",
    ],
    faq: [
      {
        question: "Should I put my menu on the website as a PDF?",
        answer:
          "It is the quickest solution and the least effective. A PDF opens poorly on mobile, forces people to zoom, and its content is hard for search engines to use: your dishes won't show up in the results. A menu written as text on the page can be read anywhere and updated in a few minutes.",
      },
      {
        question: "Does a restaurant need a website if it is already on the platforms?",
        answer:
          "Platforms give you visibility, but they take a commission, impose their own presentation and can change their terms overnight. A website gives you a direct point of contact, with no middleman and no commission on reservations. The two complement each other; relying only on the platforms makes you dependent on them.",
      },
    ],
  },
  "site-internet-salon-de-coiffure": {
    slug: "hair-salon-website",
    label: "a hair salon",
    demoName: "Hair salon demo",
    seoTitle: "Website for hair salons | Sitekept",
    seoDescription:
      "Building a hair salon website: services and prices, online booking, a portfolio of your work. A professional website delivered in 48 hours from €500.",
    h1: "Website for hair salons",
    intro:
      "In hairdressing, the website plays a role that few trades know: it is as much a portfolio as a shop window. People don't choose a salon for its address, they choose it for the work they see. It is also a trade where online booking has changed habits faster than anywhere else.",
    searchIntent: [
      "An appointment to book: the visitor looks for availability and prices, often in the evening or on weekends, outside your opening hours.",
      "A change of salon: they compare work and look for a stylist whose style speaks to them.",
      "A specific technical service: balayage, hair straightening, extensions, curly or coily hair. They check that you have the skills before calling.",
    ],
    siteMustDo: [
      {
        title: "Services with their prices",
        detail:
          "It is the most searched-for information and the one most often missing. A price range is better than nothing: it avoids misunderstandings when it is time to pay.",
      },
      {
        title: "A portfolio of real work",
        detail:
          "Your cuts and your colors, on your own clients, with their consent. This is what decides, far more than any introductory text.",
      },
      {
        title: "Booking available at all times",
        detail:
          "A large share of appointments are booked outside business hours. A booking link visible on every page captures those moments.",
      },
      {
        title: "The team, and each person's specialties",
        detail:
          "Many clients come back for a person, not for a salon. Saying who does what lets them ask for the right person from their very first appointment.",
      },
      {
        title: "The techniques and hair types you work with",
        detail:
          "Curly hair, coily hair, plant-based colors, extensions: each of these is a search query in its own right, and sets you apart far more than a slogan.",
      },
    ],
    toPrepare: [
      "Your list of services and prices",
      "Fifteen to twenty photos of your work, with the clients' consent",
      "An introduction to the team and their specialties",
      "Your hours and how clients book",
    ],
    faq: [
      {
        question: "Should a hair salon show its prices online?",
        answer:
          "Yes. In France, salons are already required to display their prices on the premises, and showing them online is a natural extension of that. Prices are the first thing people look for. Hiding them gains you nothing: it simply moves the question to the phone, or sends the visitor to a salon that does show them.",
      },
      {
        question: "Can I publish photos of my clients?",
        answer:
          "Only with their consent, and it is wise to get it in writing. An identifiable photo is personal data: consent must be explicit, and the person must be able to ask for the photo to be removed. A simple note in your client record is usually enough.",
      },
    ],
  },
  "site-internet-boulangerie": {
    slug: "bakery-website",
    label: "a bakery",
    demoName: "Bakery demo",
    seoTitle: "Website for bakeries | Sitekept",
    seoDescription:
      "Building a bakery website: hours and day closed, your products, special orders. What your customers look for, with a website delivered in 48 hours from €500.",
    h1: "Website for bakeries",
    intro:
      "A bakery runs on proximity and habit, not on outreach. Its website therefore doesn't have to persuade anyone: it has to answer three very practical questions quickly — are you open right now, do you make what I'm looking for, and can I place an order. Everything else is a bonus.",
    searchIntent: [
      "An immediate craving: “bakery open near me”, often early in the morning or on a Sunday. The visitor wants today's opening hours, not your story.",
      "An order to place: a galette des rois, a Yule log, bread for a buffet, sandwiches for a job-site crew. They look for your terms and how much notice you need.",
      "A diet or an allergy: gluten-free, natural sourdough, local flours. Low-competition, highly qualified searches that bakery websites almost never cover.",
    ],
    siteMustDo: [
      {
        title: "Hours, with your day closed up front",
        detail:
          "It is the most viewed information, and the most often wrong online. State your closing day, your Sunday hours and your vacation periods — a customer who finds the door shut won't come back to check your website.",
      },
      {
        title: "What you really make yourself",
        detail:
          "Sourdough bread, all-butter pastries, baked on site: this is what sets you apart from supermarket bread, and exactly what customers want to read before crossing the street.",
      },
      {
        title: "Orders, with the notice required",
        detail:
          "Celebration cakes, buffets, platters, specialty breads: say what can be ordered, how much notice you need and how to order. An order for 80 sandwiches is revenue that never comes through the shop window.",
      },
      {
        title: "Allergens and flours",
        detail:
          "Allergen information is a legal requirement that also applies to direct sales. Putting it online saves you repeated questions at the counter and positions you on very targeted searches.",
      },
      {
        title: "Where to park, and for how long",
        detail:
          "A quick-stop spot, a space out front, a parking lot fifty meters away: trivial to you, decisive for someone torn between you and the bakery at the roundabout.",
      },
    ],
    toPrepare: [
      "Your exact hours, including your day closed and vacations",
      "The list of your products and specialties",
      "Your ordering terms and the notice you need",
      "Ten to fifteen photos of your products and the shop",
    ],
    faq: [
      {
        question: "Does a neighborhood bakery need a website?",
        answer:
          "For attracting new customers, the effect is limited: people choose their bakery by walking past it. The website mainly captures two things the shop window can't — searches for opening hours, which are very frequent, and orders for events, which are worth far more than a sale at the counter.",
      },
      {
        question: "Should a baker sell online?",
        answer:
          "It is rarely useful for day-to-day sales: customers come in anyway. A simple order form with in-store pickup covers most of the need and involves neither online payment nor logistics. A full online store is a custom feature, quoted separately.",
      },
    ],
  },
  "site-internet-patisserie": {
    slug: "pastry-shop-website",
    label: "a pastry shop",
    demoName: "Pastry shop demo",
    seoTitle: "Website for pastry shops | Sitekept",
    seoDescription:
      "A pastry shop website: a portfolio of your creations, order lead times and prices, custom cakes. A professional website delivered in 48 hours from €500.",
    h1: "Website for pastry shops",
    intro:
      "Pastries don't sell the way bread does. Nobody orders a tiered celebration cake on a whim: people search, compare photos and picture the occasion. A pastry shop's website is therefore first and foremost a portfolio, and its main challenge is turning visual desire into an order — with lead times and prices shown before anyone has to ask.",
    searchIntent: [
      "An event to prepare: a birthday, a wedding, a christening. The visitor looks for photos, a price range and the order lead time, often several weeks in advance.",
      "A craving of the moment: they look for a quality pastry shop nearby and browse your online showcase before making the trip.",
      "A dietary restriction: gluten-free, lactose-free, vegan. Precise, low-competition searches with strong intent.",
    ],
    siteMustDo: [
      {
        title: "A large-format portfolio of your creations",
        detail:
          "It is the heart of the website. Your cakes, properly photographed, in daylight. In this trade, the photo is the sales pitch; glowing copy never makes up for a mediocre image.",
      },
      {
        title: "Order lead times, highly visible",
        detail:
          "Forty-eight hours for an entremets (layered mousse cake), three weeks for a tiered cake: finding out too late is the customer's first frustration, and the leading cause of lost orders.",
      },
      {
        title: "Price ranges by number of servings",
        detail:
          "Few pastry shops show them, and it is precisely what everyone is looking for. A range per size avoids requests that are over budget and saves you a great deal of time.",
      },
      {
        title: "Flavors and the current menu",
        detail:
          "A seasonal menu shows that your kitchen is active. Date it: a Christmas menu still online in spring has the opposite of the intended effect.",
      },
      {
        title: "Allergens, stated plainly",
        detail:
          "Tree nuts, gluten, lactose, eggs. This information is mandatory and, in this trade, it is often what decides the order.",
      },
    ],
    toPrepare: [
      "Twenty to thirty well-lit photos of your creations",
      "Your order lead times by type of cake",
      "An indicative price list by number of servings",
      "The list of allergens and the alternatives you offer",
    ],
    faq: [
      {
        question: "Should a pastry shop show its prices online?",
        answer:
          "At least price ranges by number of servings. It is the question asked in almost every first message: answering it up front saves you exchanges that go nowhere, and reassures customers who fear an unpredictable bill for a custom order.",
      },
      {
        question: "Can I sell my pastries online?",
        answer:
          "Technically yes, but selling fresh products at a distance involves logistics, a cold chain and responsibilities that go far beyond the website. An order form with in-store pickup covers most of the need without these constraints. A full online store is a matter for a custom quote.",
      },
    ],
  },
  "site-internet-fleuriste": {
    slug: "florist-website",
    label: "a florist",
    demoName: "Florist demo",
    seoTitle: "Website for florists | Sitekept",
    seoDescription:
      "Building a florist website: delivery, arrangements by occasion, funeral and wedding orders. A professional website delivered in 48 hours from €500.",
    h1: "Website for florists",
    intro:
      "Floristry has a feature that few trades share: people rarely come for you; they come for an occasion. A birth, a birthday, a wedding, a bereavement. The website should therefore be organized around those moments rather than around your catalog — and handle the most delicate of them with the restraint it demands.",
    searchIntent: [
      "An emotional emergency: a bereavement, a forgotten birthday. The visitor wants fast delivery and to be reassured in three lines, not won over.",
      "A planned event: a wedding, a corporate order, event decor. A long process and a bigger budget; they compare your work and want to set up a meeting.",
      "A local purchase: they look for a florist open near them and check your opening hours and delivery area.",
    ],
    siteMustDo: [
      {
        title: "Delivery area and lead time, front and center",
        detail:
          "Which towns, what cut-off time for same-day delivery, what cost. It is the number one question, and leaving it unanswered sends visitors to a competitor or to a national platform.",
      },
      {
        title: "Arrangements organized by occasion",
        detail:
          "Birth, thank you, wedding, bereavement: visitors are looking for a moment, not a variety of flower. A catalog sorted by flower type forces them to translate their need themselves.",
      },
      {
        title: "Funerals handled with restraint",
        detail:
          "Sprays, cushion arrangements, racket-shaped wreaths, delivery to the funeral home or the church, very short lead times. A dedicated page, factual and free of stylistic flourishes, is a real service to people ordering in a rush and in an emotional state.",
      },
      {
        title: "Easy ordering by phone",
        detail:
          "In this trade, many orders are settled in a two-minute conversation: the message on the card, the colors, the address. The phone number must be tappable on every page.",
      },
      {
        title: "Subscriptions and corporate contracts",
        detail:
          "Weekly bouquets for a reception area, an office, a hotel: this is recurring revenue that never comes through the shop window, and almost no florist website mentions it.",
      },
    ],
    toPrepare: [
      "Your delivery towns, lead times and prices",
      "Photos sorted by occasion",
      "Your opening hours, including Sundays and public holidays",
      "Your terms for weddings and corporate contracts",
    ],
    faq: [
      {
        question: "Should a florist sell bouquets online?",
        answer:
          "It is not essential, and it is often counterproductive at first. A floral arrangement is something people discuss: colors, budget, message. An order form followed by a callback usually converts better than a shopping cart, while avoiding the frustration of flowers that are unavailable at certain times of year.",
      },
      {
        question: "How can I stand out from flower delivery platforms?",
        answer:
          "Through what they can't offer: your real creations rather than standardized visuals, local same-day delivery, and someone who adapts the bouquet. Platforms take a large commission on every order; a website gives you a direct channel, with no middleman.",
      },
    ],
  },
  "site-internet-reparation-informatique": {
    slug: "computer-repair-website",
    label: "a computer repair business",
    demoName: "Computer repair demo",
    seoTitle: "Website for computer repair shops | Sitekept",
    seoDescription:
      "A computer repair website: the problems you fix, prices, turnaround times and data confidentiality. A professional website delivered in 48 hours from €500.",
    h1: "Website for computer repair shops",
    intro:
      "Handing over your computer means handing over your photos, your documents and your passwords. A computer repair website therefore has a job other trades don't: easing concerns about confidentiality, while also reassuring visitors about your skills and your prices. It is a trade where opaque pricing is the norm, and where simply showing your prices is enough to stand out.",
    searchIntent: [
      "A blocking problem: a black screen, a computer that won't start, a virus. The visitor is worried, in a hurry, and looking for someone they can reach today.",
      "Data loss: a failed hard drive, deleted files. Very strong intent, a high budget, and genuine distress to address in plain words.",
      "A less urgent need: a slow machine, an upgrade, buying equipment, a maintenance contract for a small business.",
    ],
    siteMustDo: [
      {
        title: "Problems named in the customer's own words",
        detail:
          "Nobody searches for “hardware diagnostics”. People search for “my computer won't turn on” or “blue screen”. Use those phrases, then explain what they mean technically.",
      },
      {
        title: "Prices, or at least price ranges",
        detail:
          "It is the trade's biggest obstacle, and the main reason customers hesitate to walk in. Showing a diagnostic fee and price ranges by type of repair sets you apart immediately.",
      },
      {
        title: "What happens to the data",
        detail:
          "State explicitly whether you access files, what you do with them and how you protect them. It is the concern nobody voices out loud, and almost no website in the trade addresses it.",
      },
      {
        title: "Turnaround time, and what can be done the same day",
        detail:
          "A customer without a computer is a customer who can't work. Distinguish what can be fixed on the spot, what takes two days and what depends on a part that has to be ordered.",
      },
      {
        title: "In the workshop, at home or remotely",
        detail:
          "These three options have neither the same price nor the same audience. Individuals and small businesses are not looking for the same thing: keep them clearly separate.",
      },
    ],
    toPrepare: [
      "The list of problems you fix, and those you turn down",
      "Your price list or your price ranges per job",
      "Your usual turnaround times and your terms for urgent jobs",
      "Your policy on customer data confidentiality",
    ],
    faq: [
      {
        question: "Should a computer repair shop show its prices?",
        answer:
          "The exact price depends on the diagnosis, but showing the cost of the diagnosis itself and price ranges by type of repair removes the trade's main obstacle. Opaque pricing is so widespread that transparency alone becomes a selling point.",
      },
      {
        question: "How can I reassure customers about data confidentiality?",
        answer:
          "By putting it in writing: what you access, what you never look at, whether you make a backup before working on the machine, and what you do with the data when you return it. A short, factual page is better than a long legal text nobody will read.",
      },
    ],
  },
  "site-internet-entreprise-nettoyage": {
    slug: "cleaning-company-website",
    label: "a cleaning company",
    demoName: "Home and office cleaning demo",
    seoTitle: "Website for cleaning companies | Sitekept",
    seoDescription:
      "Building a cleaning company website: services for households and businesses, service area, quotes. A website delivered in 48 hours from €500.",
    h1: "Website for cleaning companies",
    intro:
      "Cleaning is one of the few trades that serves two audiences with almost nothing in common. A household is looking for someone trustworthy to hand their keys to; a business is looking for a provider who can follow a detailed scope of work and invoice properly. A website that mixes the two loses both.",
    searchIntent: [
      "A household: regular cleaning, ironing, help after a hospital stay. They look for trust, the hourly rate and eligibility for the French tax credit.",
      "A business: offices, a shop, a condo building. It looks for a service area, references and a quote, often after a disappointing provider.",
      "A one-off need: post-renovation cleaning, end-of-lease cleaning, window cleaning. Strong intent, quick decisions, little competition online.",
    ],
    siteMustDo: [
      {
        title: "A clear split between households and businesses",
        detail:
          "Two journeys, two vocabularies, two ways of invoicing. A single page that tries to speak to both convinces neither.",
      },
      {
        title: "Your service area, town by town",
        detail:
          "It is the first selection criterion and often the first reason people leave. Naming the towns also positions you on local searches that “the whole region” never captures.",
      },
      {
        title: "Services with their frequency",
        detail:
          "Weekly, every two weeks, one-off: customers think in terms of rhythm as much as tasks. Describing your packages by frequency helps them picture the service and compare.",
      },
      {
        title: "Guarantees, in writing",
        detail:
          "Properly employed and declared staff, professional liability insurance, replacement in case of absence, the products used. This is the core of trust in a trade where people hand their keys to a stranger.",
      },
      {
        title: "The quote: free, on site, within what timeframe",
        detail:
          "Almost every service goes through a quote. Saying how to get one and how long it takes turns hesitation into a request.",
      },
    ],
    toPrepare: [
      "The towns where you work",
      "Your services, broken down by audience and frequency",
      "Your insurance certificates and any approvals you hold",
      "How you handle quotes and how quickly you reply",
    ],
    faq: [
      {
        question: "Should my website mention the tax credit?",
        answer:
          "If you are registered or approved under the French home services scheme (services à la personne), it is a decisive argument for households, since the tax credit significantly reduces the real cost. Mention the scheme and your eligibility conditions, linking to the official source rather than promising an amount: the rules change, and eligibility depends on each customer's situation.",
      },
      {
        question: "Should I show an hourly rate?",
        answer:
          "For households, yes: it is what they look for, and a ballpark figure avoids calls that go nowhere. For businesses, an hourly rate on its own makes little sense — the floor area, the frequency and access constraints determine the price. It is better to present a clear quoting process there.",
      },
    ],
  },
  "site-internet-architecte-interieur": {
    slug: "interior-designer-website",
    label: "an interior designer",
    demoName: "Interior designer demo",
    seoTitle: "Website for interior designers | Sitekept",
    seoDescription:
      "A website for an interior designer: a project portfolio, how your fees work, how an engagement unfolds. A professional website delivered in 48 hours from €500.",
    h1: "Website for interior designers",
    intro:
      "An interior design project is decided slowly and costs a lot. A visitor who lands on your website isn't buying anything today: they are drawing up a shortlist they will check several times before getting in touch. Your website therefore has to stand up to those repeat visits, and answer the question almost none of your peers dare to address online — how much it costs, and how it is calculated.",
    searchIntent: [
      "A project taking shape: renovating an apartment, an addition, a redesign. The visitor looks for projects similar to theirs, in size and style.",
      "A budget question: “interior designer fees”, “renovation cost per square meter”. A very common search, very rarely addressed by websites in the trade.",
      "A search for a style: they have an aesthetic in mind and are looking for someone whose work resembles it. The portfolio alone decides.",
    ],
    siteMustDo: [
      {
        title: "A portfolio organized by project, not by photo",
        detail:
          "Each project deserves its own page: the initial brief, the constraints, your solution, the floor area, the result. A wall of images with no context doesn't let visitors recognize themselves in your work.",
      },
      {
        title: "How your fees work, explained",
        detail:
          "A percentage of the construction budget, a flat fee, hourly billing: saying which one you use and what it covers is the strongest differentiator in this trade. Opacity is the rule there, and it drives away clients who can afford you.",
      },
      {
        title: "The exact scope of the engagement",
        detail:
          "Design only, site supervision, coordinating contractors, buying furniture. A client who finds out at the third meeting that site supervision wasn't included won't sign.",
      },
      {
        title: "How a project unfolds, step by step",
        detail:
          "First meeting, survey, sketches, plans, construction, handover — with indicative durations. This sets expectations and spares you a great many preliminary questions.",
      },
      {
        title: "The floor areas and budgets of the projects shown",
        detail:
          "A visitor renovating 45 m² doesn't picture themselves in a 300 m² villa. Giving the order of magnitude lets everyone know whether they are in the right place.",
      },
    ],
    toPrepare: [
      "Five to ten properly photographed projects, with their context",
      "How your fees work and what they include",
      "How a typical engagement unfolds, with durations",
      "Your insurance and any professional order or trade association you belong to",
    ],
    faq: [
      {
        question: "Should an interior designer show their fees?",
        answer:
          "Not necessarily an amount, but always the method of calculation. Explaining that you charge a percentage of the construction budget, a flat fee or by the hour, and giving an order of magnitude, filters out requests that are over budget and attracts those that aren't. Total silence on this point is the leading reason visitors leave websites in the trade.",
      },
      {
        question: "Can I publish photos of my clients' projects?",
        answer:
          "With their consent, which it is wise to obtain in writing in the engagement contract rather than after the fact. Specify whether the place may be identifiable and whether the client's name may be mentioned. Credit the photographer as well: the rights to the images belong to them unless they have been assigned.",
      },
    ],
  },
  "site-internet-avocat": {
    slug: "law-firm-website",
    label: "a law firm",
    demoName: "Law firm demo",
    secondaryDemo: {
      name: "Lawyer demo",
      note: "A second, more editorial template, for a lawyer practicing under their own name.",
    },
    seoTitle: "Website for lawyers and law firms | Sitekept",
    seoDescription:
      "Building a law firm website: practice areas, fees, the first consultation. Compliant with professional ethics rules. A website delivered in 48 hours from €500.",
    h1: "Website for law firms",
    intro:
      "A lawyer's website doesn't have to sell, and in fact cannot do so freely: the profession's communication is regulated. What it must do is let someone going through a difficult time understand whether you handle their problem, what a first appointment will cost and who they will be dealing with. That is very different from a corporate brochure.",
    searchIntent: [
      "An urgent problem: a termination, a dispute, a summons. The visitor looks for a lawyer in the right area of law, available quickly, and often in their city.",
      "A question of cost: “lawyer fees”, “first consultation price”. A major obstacle to getting in touch, and very rarely addressed online.",
      "A check: they got your name through a recommendation and want to confirm your bar association, your background and your practice areas before calling.",
    ],
    siteMustDo: [
      {
        title: "Practice areas described in the client's words",
        detail:
          "People don't search for “labor court litigation”, they search for “wrongful termination”. Name the problem as it is experienced, then link it to the area of law.",
      },
      {
        title: "Fees and the first consultation",
        detail:
          "The principle of the fee agreement, how you bill, and the cost of a first appointment. It is the first obstacle to getting in touch, and the most searched-for information after the practice area.",
      },
      {
        title: "Exactly who you are",
        detail:
          "The bar you are registered with, the year you were sworn in, your training, the languages you work in. These are verifiable facts, and they are exactly what builds trust in a regulated profession.",
      },
      {
        title: "What happens at the first appointment",
        detail:
          "How long it lasts, which documents to bring, how it goes, confidentiality. Many people have never consulted a lawyer and don't dare ask these questions.",
      },
      {
        title: "Access and how appointments work",
        detail:
          "Address, accessibility, the option of a remote consultation. Video calls have widened the client base of many firms — but only if they say so.",
      },
    ],
    toPrepare: [
      "Your practice areas, and those you don't handle",
      "How you bill and the cost of a first consultation",
      "Your background, your bar and your working languages",
      "How appointments work, at the office and remotely",
    ],
    faq: [
      {
        question: "Are lawyers allowed to have a website?",
        answer:
          "Yes. In France, advertising and personalized solicitation have been allowed for lawyers since 2014, but they remain regulated: the information must be truthful and respect the dignity of the profession, collegiality and professional secrecy, and it may contain neither comparisons nor promises of results. We build the website on factual information, and it is up to you to have the content checked against your bar's rules.",
      },
      {
        question: "Can I publish my results or the cases I have won?",
        answer:
          "This is the most delicate point. Professional secrecy prohibits disclosing identifying details, and advertising that compares or holds out the hope of a result is prohibited. Instead, many firms present anonymized, generalized sample cases that explain an approach without referring to a real case — an approach to validate with your bar association.",
      },
    ],
  },
  "site-internet-agence-immobiliere": {
    slug: "real-estate-agency-website",
    label: "a real estate agency",
    demoName: "Real estate agency demo",
    seoTitle: "Website for real estate agencies | Sitekept",
    seoDescription:
      "Building a real estate agency website: online valuation, up-to-date listings, published fees, areas covered. A website delivered in 48 hours from €500.",
    h1: "Website for real estate agencies",
    intro:
      "One mistake shapes most agency websites: they are built for buyers, when the client to win over is the seller. Buyers come through the listing portals anyway. What your website needs to capture is the owner wondering what their property is worth — and they always start with a valuation.",
    searchIntent: [
      "A seller weighing their options: “house valuation”, “price per square meter” in their town. Maximum commercial intent, and this is the client who brings you a listing.",
      "A buyer or a tenant: they are looking for properties, often after seeing them on a portal. They come to check who you are.",
      "A search for an agency: they compare fees, the areas covered and the team before signing a listing agreement.",
    ],
    siteMustDo: [
      {
        title: "Valuation as the main entry point",
        detail:
          "It is your best tool for winning listings. A simple form, a clear promise of a callback within 24 or 48 hours, and visibility on every page: this is what turns a business website into a sales tool.",
      },
      {
        title: "Listings that are genuinely up to date",
        detail:
          "A sold property left online destroys trust more surely than having no listings at all. If you can't keep your portfolio up to date, it is better to show recently sold properties, which prove you are active.",
      },
      {
        title: "Published fees",
        detail:
          "In France, real estate professionals are required by law to display their fee schedule, both in the agency and online. You might as well make it a sign of transparency rather than a regulatory notice buried in the footer.",
      },
      {
        title: "Areas covered, neighborhood by neighborhood",
        detail:
          "Real estate is an intensely local business. Naming neighborhoods and towns positions you on highly qualified local searches that “the whole metropolitan area” never captures.",
      },
      {
        title: "The team, with real faces",
        detail:
          "Entrusting someone with the sale of your home is a big decision, and people make it based on a person more than on a brand. Real photos, first names, and each agent's specialties and areas.",
      },
    ],
    toPrepare: [
      "Your fee schedule, for sales and rentals",
      "The areas and neighborhoods you cover",
      "Photos and introductions of the team",
      "Your professional license (carte professionnelle) and your financial guarantees",
    ],
    faq: [
      {
        question: "Do I need a website if I already advertise on the portals?",
        answer:
          "Portals bring you buyers, not listings — and they charge you for advertising while placing your listings next to your competitors'. The website serves the other half of the business: capturing sellers through valuations, and demonstrating your local roots. The two complement each other, but only one belongs to you.",
      },
      {
        question: "Do I need a property search engine on the website?",
        answer:
          "Not necessarily at the start. A portfolio of a few well-presented properties, updated by hand, works better than a search engine fed by a poorly synchronized feed. Automatic connection to transaction software is a custom feature, quoted separately once the need is proven.",
      },
    ],
  },
};
