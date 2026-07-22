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
];

// Croatian translations — same slugs/order/dates as `ratgeberArticles`.
// Other locales (en/ro/tr/it) fall back to German until they get their pass.
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
];

export function getRatgeberArticlesList(locale: string): RatgeberArticle[] {
  return locale === "hr" ? ratgeberArticlesHr : ratgeberArticles;
}

export function getRatgeberArticle(slug: string, locale: string = "de"): RatgeberArticle | undefined {
  return getRatgeberArticlesList(locale).find((a) => a.slug === slug);
}
