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

export function getRatgeberArticle(slug: string): RatgeberArticle | undefined {
  return ratgeberArticles.find((a) => a.slug === slug);
}
