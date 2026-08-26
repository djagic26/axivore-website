// Ratgeber (blog) article metadata. The article content itself lives in
// app/ratgeber/<slug>/page.tsx as static JSX — German only, like the other
// SEO pages. Add a new entry here + a new page folder to publish an article.

export type RatgeberArticle = {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  category: string;
  /** ISO date, shown on the card and used in JSON-LD. */
  date: string;
  readingTime: string;
};

export const ratgeberArticles: RatgeberArticle[] = [
  {
    slug: "angebote-automatisieren-handwerk",
    title: "Angebote automatisieren im Handwerk: Was es wirklich bringt",
    metaTitle: "Angebote automatisieren im Handwerk — was es wirklich bringt | Axivore",
    description:
      "Wie Handwerksbetriebe Angebote in Minuten statt Stunden erstellen: was Automatisierung wirklich kann, was sie ehrlich kostet und ab wann sie sich lohnt.",
    category: "Handwerk",
    date: "2026-07-03",
    readingTime: "6 Min.",
  },
  {
    slug: "ki-chatbot-oder-anrufbeantworter",
    title: "KI-Chatbot oder Anrufbeantworter: Was lohnt sich für kleine Betriebe?",
    metaTitle: "KI-Chatbot oder Anrufbeantworter? Der ehrliche Vergleich | Axivore",
    description:
      "Verpasste Anrufe kosten Aufträge. Der ehrliche Vergleich: Anrufbeantworter, Bürokraft und KI-Assistent — Kosten, Nutzen und wann sich was wirklich lohnt.",
    category: "Erreichbarkeit",
    date: "2026-07-03",
    readingTime: "7 Min.",
  },
  {
    slug: "reservierungen-automatisieren-gastronomie",
    title: "Reservierungen automatisieren in der Gastronomie: Was es wirklich bringt",
    metaTitle: "Reservierungen automatisieren in der Gastronomie — was es wirklich bringt | Axivore",
    description:
      "Wie Restaurants und Cafés Reservierungen rund um die Uhr annehmen, ohne dass während des Service das Telefon klingelt: was Automatisierung wirklich kann, was sie kostet und ab wann sie sich lohnt.",
    category: "Gastronomie",
    date: "2026-08-26",
    readingTime: "6 Min.",
  },
  {
    slug: "termine-automatisieren-praxis",
    title: "Terminvereinbarung automatisieren in der Praxis: Was es wirklich bringt",
    metaTitle: "Terminvereinbarung automatisieren in der Praxis — was es wirklich bringt | Axivore",
    description:
      "Wie Arzt- und Therapiepraxen Termine rund um die Uhr vergeben, ohne dass die Anmeldung ständig zum Telefon greift: was Automatisierung wirklich kann und was sie kostet.",
    category: "Praxen",
    date: "2026-08-26",
    readingTime: "6 Min.",
  },
  {
    slug: "reportings-automatisieren-agentur",
    title: "Reportings automatisieren in der Agentur: Was es wirklich bringt",
    metaTitle: "Reportings automatisieren in der Agentur — was es wirklich bringt | Axivore",
    description:
      "Wie kleine Agenturen Kundenreportings in Minuten statt Tagen erstellen: was Automatisierung wirklich kann, was sie kostet und ab wann sie sich lohnt.",
    category: "Agenturen",
    date: "2026-08-26",
    readingTime: "6 Min.",
  },
  {
    slug: "anfragen-automatisieren-dienstleister",
    title: "Anfragen automatisieren im Dienstleistungsbetrieb: Was es wirklich bringt",
    metaTitle: "Anfragen automatisieren im Dienstleistungsbetrieb — was es wirklich bringt | Axivore",
    description:
      "Wie Dienstleistungsbetriebe Anfragen rund um die Uhr entgegennehmen und daraus automatisch Angebote erstellen: was Automatisierung wirklich kann und was sie kostet.",
    category: "Dienstleister",
    date: "2026-08-26",
    readingTime: "6 Min.",
  },
];

// Croatian translations — same slugs/order/dates as `ratgeberArticles`.
export const ratgeberArticlesHr: RatgeberArticle[] = [
  {
    slug: "angebote-automatisieren-handwerk",
    title: "Automatizacija ponuda u obrtu: Što to stvarno donosi",
    metaTitle: "Automatizacija ponuda u obrtu — što to stvarno donosi | Axivore",
    description:
      "Kako obrtničke tvrtke izrađuju ponude u minutama umjesto sati: što automatizacija stvarno može, koliko iskreno košta i od kada se isplati.",
    category: "Obrt",
    date: "2026-07-03",
    readingTime: "6 min.",
  },
  {
    slug: "ki-chatbot-oder-anrufbeantworter",
    title: "AI chatbot ili telefonska sekretarica: Što se isplati za male tvrtke?",
    metaTitle: "AI chatbot ili telefonska sekretarica? Iskrena usporedba | Axivore",
    description:
      "Propušteni pozivi koštaju poslova. Iskrena usporedba: telefonska sekretarica, ured/služba i AI asistent — troškovi, korist i kad se što stvarno isplati.",
    category: "Dostupnost",
    date: "2026-07-03",
    readingTime: "7 min.",
  },
  {
    slug: "reservierungen-automatisieren-gastronomie",
    title: "Automatizacija rezervacija u ugostiteljstvu: Što to stvarno donosi",
    metaTitle: "Automatizacija rezervacija u ugostiteljstvu — što to stvarno donosi | Axivore",
    description:
      "Kako restorani i kafići primaju rezervacije 0-24, bez da telefon zvoni tijekom servisa: što automatizacija stvarno može, koliko košta i od kada se isplati.",
    category: "Ugostiteljstvo",
    date: "2026-08-26",
    readingTime: "6 min.",
  },
  {
    slug: "termine-automatisieren-praxis",
    title: "Automatizacija zakazivanja termina u ordinaciji: Što to stvarno donosi",
    metaTitle: "Automatizacija zakazivanja termina u ordinaciji — što to stvarno donosi | Axivore",
    description:
      "Kako liječničke i terapeutske ordinacije zakazuju termine 0-24, bez da recepcija non-stop odgovara na telefon: što automatizacija stvarno može i koliko košta.",
    category: "Ordinacije",
    date: "2026-08-26",
    readingTime: "6 min.",
  },
  {
    slug: "reportings-automatisieren-agentur",
    title: "Automatizacija izvještaja u agenciji: Što to stvarno donosi",
    metaTitle: "Automatizacija izvještaja u agenciji — što to stvarno donosi | Axivore",
    description:
      "Kako male agencije izrađuju izvještaje za klijente u minutama umjesto danima: što automatizacija stvarno može, koliko košta i od kada se isplati.",
    category: "Agencije",
    date: "2026-08-26",
    readingTime: "6 min.",
  },
  {
    slug: "anfragen-automatisieren-dienstleister",
    title: "Automatizacija upita u uslužnoj djelatnosti: Što to stvarno donosi",
    metaTitle: "Automatizacija upita u uslužnoj djelatnosti — što to stvarno donosi | Axivore",
    description:
      "Kako uslužne tvrtke primaju upite 0-24 i iz njih automatski izrađuju ponude: što automatizacija stvarno može i koliko košta.",
    category: "Uslužne djelatnosti",
    date: "2026-08-26",
    readingTime: "6 min.",
  },
];

// English translations — same slugs/order/dates as `ratgeberArticles`.
export const ratgeberArticlesEn: RatgeberArticle[] = [
  {
    slug: "angebote-automatisieren-handwerk",
    title: "Automating Quotes in Trade Businesses: What It Really Delivers",
    metaTitle: "Automating Quotes in Trade Businesses — What It Really Delivers | Axivore",
    description:
      "How trade businesses create quotes in minutes instead of hours: what automation can really do, what it honestly costs, and when it's worth it.",
    category: "Trades",
    date: "2026-07-03",
    readingTime: "6 min.",
  },
  {
    slug: "ki-chatbot-oder-anrufbeantworter",
    title: "AI Chatbot or Answering Machine: What's Worth It for Small Businesses?",
    metaTitle: "AI Chatbot or Answering Machine? The Honest Comparison | Axivore",
    description:
      "Missed calls cost jobs. The honest comparison: answering machine, office staff and AI assistant — costs, benefits, and when what actually pays off.",
    category: "Availability",
    date: "2026-07-03",
    readingTime: "7 min.",
  },
  {
    slug: "reservierungen-automatisieren-gastronomie",
    title: "Automating Reservations in Restaurants: What It Really Delivers",
    metaTitle: "Automating Reservations in Restaurants — What It Really Delivers | Axivore",
    description:
      "How restaurants and cafés take reservations around the clock without the phone ringing during service: what automation can really do, what it costs, and when it's worth it.",
    category: "Hospitality",
    date: "2026-08-26",
    readingTime: "6 min.",
  },
  {
    slug: "termine-automatisieren-praxis",
    title: "Automating Appointment Scheduling in Medical Practices: What It Really Delivers",
    metaTitle: "Automating Appointment Scheduling in Medical Practices — What It Really Delivers | Axivore",
    description:
      "How medical and therapy practices offer appointment booking around the clock, without the front desk constantly reaching for the phone: what automation can really do and what it costs.",
    category: "Medical Practices",
    date: "2026-08-26",
    readingTime: "6 min.",
  },
  {
    slug: "reportings-automatisieren-agentur",
    title: "Automating Client Reporting in Agencies: What It Really Delivers",
    metaTitle: "Automating Client Reporting in Agencies — What It Really Delivers | Axivore",
    description:
      "How small agencies build client reports in minutes instead of days: what automation can really do, what it costs, and when it's worth it.",
    category: "Agencies",
    date: "2026-08-26",
    readingTime: "6 min.",
  },
  {
    slug: "anfragen-automatisieren-dienstleister",
    title: "Automating Inquiries in Service Businesses: What It Really Delivers",
    metaTitle: "Automating Inquiries in Service Businesses — What It Really Delivers | Axivore",
    description:
      "How service businesses take inquiries around the clock and turn them into quotes automatically: what automation can really do and what it costs.",
    category: "Service Businesses",
    date: "2026-08-26",
    readingTime: "6 min.",
  },
];

// Romanian translations — same slugs/order/dates as `ratgeberArticles`.
export const ratgeberArticlesRo: RatgeberArticle[] = [
  {
    slug: "angebote-automatisieren-handwerk",
    title: "Automatizarea ofertelor în meșteșugărit: Ce aduce cu adevărat",
    metaTitle: "Automatizarea ofertelor în meșteșugărit — ce aduce cu adevărat | Axivore",
    description:
      "Cum creează firmele de meșteșugărit oferte în minute în loc de ore: ce poate face cu adevărat automatizarea, cât costă sincer și de când merită.",
    category: "Meșteșugari",
    date: "2026-07-03",
    readingTime: "6 min.",
  },
  {
    slug: "ki-chatbot-oder-anrufbeantworter",
    title: "Chatbot AI sau robot telefonic: Ce merită pentru firmele mici?",
    metaTitle: "Chatbot AI sau robot telefonic? Comparația sinceră | Axivore",
    description:
      "Apelurile pierdute costă comenzi. Comparația sinceră: robot telefonic, personal de birou și asistent AI — costuri, beneficii și când chiar merită ce.",
    category: "Disponibilitate",
    date: "2026-07-03",
    readingTime: "7 min.",
  },
  {
    slug: "reservierungen-automatisieren-gastronomie",
    title: "Automatizarea rezervărilor în restaurante: Ce aduce cu adevărat",
    metaTitle: "Automatizarea rezervărilor în restaurante — ce aduce cu adevărat | Axivore",
    description:
      "Cum preiau restaurantele și cafenelele rezervări non-stop, fără ca telefonul să sune în timpul serviciului: ce poate face cu adevărat automatizarea, cât costă și de când merită.",
    category: "Ospitalitate",
    date: "2026-08-26",
    readingTime: "6 min.",
  },
  {
    slug: "termine-automatisieren-praxis",
    title: "Automatizarea programărilor în cabinete medicale: Ce aduce cu adevărat",
    metaTitle: "Automatizarea programărilor în cabinete medicale — ce aduce cu adevărat | Axivore",
    description:
      "Cum oferă cabinetele medicale și de terapie programări non-stop, fără ca recepția să răspundă continuu la telefon: ce poate face cu adevărat automatizarea și cât costă.",
    category: "Cabinete Medicale",
    date: "2026-08-26",
    readingTime: "6 min.",
  },
  {
    slug: "reportings-automatisieren-agentur",
    title: "Automatizarea rapoartelor pentru clienți în agenții: Ce aduce cu adevărat",
    metaTitle: "Automatizarea rapoartelor pentru clienți în agenții — ce aduce cu adevărat | Axivore",
    description:
      "Cum creează agențiile mici rapoarte pentru clienți în minute în loc de zile: ce poate face cu adevărat automatizarea, cât costă și de când merită.",
    category: "Agenții",
    date: "2026-08-26",
    readingTime: "6 min.",
  },
  {
    slug: "anfragen-automatisieren-dienstleister",
    title: "Automatizarea cererilor în firmele de servicii: Ce aduce cu adevărat",
    metaTitle: "Automatizarea cererilor în firmele de servicii — ce aduce cu adevărat | Axivore",
    description:
      "Cum preiau firmele de servicii cereri non-stop și le transformă automat în oferte: ce poate face cu adevărat automatizarea și cât costă.",
    category: "Firme de Servicii",
    date: "2026-08-26",
    readingTime: "6 min.",
  },
];

// Turkish translations — same slugs/order/dates as `ratgeberArticles`.
export const ratgeberArticlesTr: RatgeberArticle[] = [
  {
    slug: "angebote-automatisieren-handwerk",
    title: "Zanaatkârlıkta Teklif Otomasyonu: Gerçekte Ne Kazandırır?",
    metaTitle: "Zanaatkârlıkta teklif otomasyonu — gerçekte ne kazandırır? | Axivore",
    description:
      "Zanaatkâr işletmeleri teklifleri saatler yerine dakikalar içinde nasıl oluşturur: otomasyon gerçekte ne yapabilir, dürüstçe neye mal olur ve ne zaman değer?",
    category: "Zanaatkârlar",
    date: "2026-07-03",
    readingTime: "6 dk.",
  },
  {
    slug: "ki-chatbot-oder-anrufbeantworter",
    title: "AI Chatbot mu, Telesekreter mi: Küçük İşletmeler İçin Ne Değer?",
    metaTitle: "AI Chatbot mu Telesekreter mi? Dürüst Karşılaştırma | Axivore",
    description:
      "Kaçırılan aramalar iş kaybettirir. Dürüst karşılaştırma: telesekreter, ofis personeli ve AI asistanı — maliyetler, faydalar ve gerçekte ne zaman ne işe yarar.",
    category: "Erişilebilirlik",
    date: "2026-07-03",
    readingTime: "7 dk.",
  },
  {
    slug: "reservierungen-automatisieren-gastronomie",
    title: "Restoranlarda Rezervasyon Otomasyonu: Gerçekte Ne Kazandırır?",
    metaTitle: "Restoranlarda rezervasyon otomasyonu — gerçekte ne kazandırır? | Axivore",
    description:
      "Restoranlar ve kafeler servis sırasında telefon çalmadan, 0-24 rezervasyon almayı nasıl başarır: otomasyon gerçekte ne yapabilir, neye mal olur ve ne zaman değer?",
    category: "Gastronomi",
    date: "2026-08-26",
    readingTime: "6 dk.",
  },
  {
    slug: "termine-automatisieren-praxis",
    title: "Muayenehanede Randevu Otomasyonu: Gerçekte Ne Kazandırır?",
    metaTitle: "Muayenehanede randevu otomasyonu — gerçekte ne kazandırır? | Axivore",
    description:
      "Doktor ve terapi muayenehaneleri, resepsiyon sürekli telefona koşmadan 0-24 randevu almayı nasıl başarır: otomasyon gerçekte ne yapabilir ve neye mal olur?",
    category: "Muayenehaneler",
    date: "2026-08-26",
    readingTime: "6 dk.",
  },
  {
    slug: "reportings-automatisieren-agentur",
    title: "Ajansta Raporlama Otomasyonu: Gerçekte Ne Kazandırır?",
    metaTitle: "Ajansta raporlama otomasyonu — gerçekte ne kazandırır? | Axivore",
    description:
      "Küçük ajanslar müşteri raporlarını günler yerine dakikalar içinde nasıl oluşturur: otomasyon gerçekte ne yapabilir, neye mal olur ve ne zaman değer?",
    category: "Ajanslar",
    date: "2026-08-26",
    readingTime: "6 dk.",
  },
  {
    slug: "anfragen-automatisieren-dienstleister",
    title: "Hizmet İşletmelerinde Talep Otomasyonu: Gerçekte Ne Kazandırır?",
    metaTitle: "Hizmet işletmelerinde talep otomasyonu — gerçekte ne kazandırır? | Axivore",
    description:
      "Hizmet işletmeleri talepleri 0-24 nasıl alır ve otomatik olarak teklife dönüştürür: otomasyon gerçekte ne yapabilir ve neye mal olur?",
    category: "Hizmet İşletmeleri",
    date: "2026-08-26",
    readingTime: "6 dk.",
  },
];

// Italian translations — same slugs/order/dates as `ratgeberArticles`.
export const ratgeberArticlesIt: RatgeberArticle[] = [
  {
    slug: "angebote-automatisieren-handwerk",
    title: "Automatizzare i Preventivi nell'Artigianato: Cosa Porta Davvero",
    metaTitle: "Automatizzare i preventivi nell'artigianato — cosa porta davvero | Axivore",
    description:
      "Come le aziende artigiane creano preventivi in pochi minuti invece che in ore: cosa può davvero fare l'automazione, quanto costa onestamente e da quando conviene.",
    category: "Artigiani",
    date: "2026-07-03",
    readingTime: "6 min.",
  },
  {
    slug: "ki-chatbot-oder-anrufbeantworter",
    title: "Chatbot AI o Segreteria Telefonica: Cosa Conviene per le Piccole Imprese?",
    metaTitle: "Chatbot AI o Segreteria Telefonica? Il Confronto Onesto | Axivore",
    description:
      "Le chiamate perse costano incarichi. Il confronto onesto: segreteria telefonica, personale d'ufficio e assistente AI — costi, benefici e quando cosa conviene davvero.",
    category: "Reperibilità",
    date: "2026-07-03",
    readingTime: "7 min.",
  },
  {
    slug: "reservierungen-automatisieren-gastronomie",
    title: "Automatizzare le Prenotazioni nella Ristorazione: Cosa Porta Davvero",
    metaTitle: "Automatizzare le prenotazioni nella ristorazione — cosa porta davvero | Axivore",
    description:
      "Come ristoranti e bar accettano prenotazioni 24 ore su 24 senza che il telefono squilli durante il servizio: cosa può fare davvero l'automazione, quanto costa e da quando conviene.",
    category: "Ristorazione",
    date: "2026-08-26",
    readingTime: "6 min.",
  },
  {
    slug: "termine-automatisieren-praxis",
    title: "Automatizzare la Prenotazione degli Appuntamenti in Studio: Cosa Porta Davvero",
    metaTitle: "Automatizzare la prenotazione degli appuntamenti in studio — cosa porta davvero | Axivore",
    description:
      "Come studi medici e terapeutici offrono prenotazioni 24 ore su 24, senza che la reception sia sempre al telefono: cosa può fare davvero l'automazione e quanto costa.",
    category: "Studi Medici",
    date: "2026-08-26",
    readingTime: "6 min.",
  },
  {
    slug: "reportings-automatisieren-agentur",
    title: "Automatizzare il Reporting Clienti in Agenzia: Cosa Porta Davvero",
    metaTitle: "Automatizzare il reporting clienti in agenzia — cosa porta davvero | Axivore",
    description:
      "Come le piccole agenzie creano report per i clienti in pochi minuti invece che in giorni: cosa può fare davvero l'automazione, quanto costa e da quando conviene.",
    category: "Agenzie",
    date: "2026-08-26",
    readingTime: "6 min.",
  },
  {
    slug: "anfragen-automatisieren-dienstleister",
    title: "Automatizzare le Richieste nelle Aziende di Servizi: Cosa Porta Davvero",
    metaTitle: "Automatizzare le richieste nelle aziende di servizi — cosa porta davvero | Axivore",
    description:
      "Come le aziende di servizi ricevono richieste 24 ore su 24 e le trasformano automaticamente in preventivi: cosa può fare davvero l'automazione e quanto costa.",
    category: "Aziende di Servizi",
    date: "2026-08-26",
    readingTime: "6 min.",
  },
];

export function getRatgeberArticlesList(locale: string): RatgeberArticle[] {
  if (locale === "hr") return ratgeberArticlesHr;
  if (locale === "en") return ratgeberArticlesEn;
  if (locale === "ro") return ratgeberArticlesRo;
  if (locale === "tr") return ratgeberArticlesTr;
  if (locale === "it") return ratgeberArticlesIt;
  return ratgeberArticles;
}

export function getRatgeberArticle(slug: string, locale: string = "de"): RatgeberArticle | undefined {
  return getRatgeberArticlesList(locale).find((a) => a.slug === slug);
}
