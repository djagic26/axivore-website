// Branchen-Landingpages (programmatic SEO).
// Jede Branche = ein Eintrag → eine Seite unter /branchen/<slug>.
// Inhalt bewusst branchenspezifisch und ehrlich (keine erfundenen Metriken).

export type UseCase = {
  title: string;
  text: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type Branche = {
  slug: string;
  name: string; // "Handwerk"
  metaTitle: string;
  metaDescription: string;
  ogDescription: string;
  eyebrow: string; // "Branche · Handwerk"
  h1: string;
  intro: string;
  serviceType: string;
  useCasesHeading: string;
  useCases: UseCase[];
  faq: FaqItem[];
};

export const branchen: Branche[] = [
  {
    slug: "handwerk",
    name: "Handwerk",
    metaTitle: "KI für Handwerksbetriebe — Angebote & Anrufe automatisieren | Axivore",
    metaDescription:
      "KI-Automatisierung für Handwerksbetriebe: Angebote in Minuten statt abends, kein verpasster Anruf von der Baustelle, Rechnungen automatisch. Axivore baut Systeme für das Handwerk — live in 1–2 Wochen.",
    ogDescription:
      "Angebote, Anrufe und Rechnungen automatisieren — damit du auf der Baustelle bleibst statt abends im Büro. Für Handwerksbetriebe in Deutschland.",
    eyebrow: "Branche · Handwerk",
    h1: "KI-Automatisierung für Handwerksbetriebe.",
    intro:
      "Als Handwerker arbeitest du tagsüber auf der Baustelle und schreibst abends Angebote. Anrufe gehen verloren, weil keiner ans Telefon kann. Axivore baut Systeme, die genau diese Aufgaben übernehmen — damit du am Feierabend nicht mehr im Büro sitzt.",
    serviceType: "KI-Automatisierung für Handwerksbetriebe",
    useCasesHeading: "Was sich im Handwerk automatisieren lässt",
    useCases: [
      { title: "Angebote in Minuten", text: "Aus ein paar Stichpunkten entsteht das fertige, kalkulierte Angebot — formatiert und versandfertig. Keine Angebote mehr nach Feierabend." },
      { title: "Kein verpasster Anruf", text: "Ein digitaler Assistent nimmt Anrufe entgegen, wenn du auf der Leiter stehst — notiert Anliegen, Kontakt und Rückrufwunsch, und du verlierst keinen Auftrag mehr." },
      { title: "Termine & Disposition", text: "Kundentermine werden automatisch koordiniert und bestätigt — inklusive Erinnerung, damit keiner vergisst und du nicht umsonst hinfährst." },
      { title: "Rechnungen & Nachfassen", text: "Nach dem Auftrag entsteht die Rechnung automatisch, offene Posten werden freundlich nachgefasst — ohne dass du daran denken musst." },
    ],
    faq: [
      { question: "Ich bin nicht technisch — funktioniert das trotzdem?", answer: "Ja. Du beschreibst die Aufgabe in normaler Sprache, wir bauen den Rest. Die Bedienung ist anschließend so einfach wie eine WhatsApp-Nachricht." },
      { question: "Bin ich als kleiner Betrieb zu klein dafür?", answer: "Im Gegenteil. Gerade Ein-Mann- und kleine Betriebe profitieren am meisten, weil jede gesparte Stunde direkt mehr Zeit auf der Baustelle oder zuhause bedeutet." },
      { question: "Wie schnell läuft so ein System?", answer: "Eine erste Automatisierung — zum Beispiel für Angebote — ist meist in 1–2 Wochen einsatzbereit." },
    ],
  },
  {
    slug: "gastronomie",
    name: "Gastronomie",
    metaTitle: "KI für Gastronomie — Reservierungen & Anfragen automatisieren | Axivore",
    metaDescription:
      "KI-Automatisierung für Restaurants, Cafés und Gastronomie: Reservierungen rund um die Uhr, Anrufe automatisch beantwortet, Bewertungen verwaltet. Axivore baut Systeme für die Gastronomie — live in 1–2 Wochen.",
    ogDescription:
      "Reservierungen, Anrufe und Anfragen automatisieren — auch während des Services und nach Feierabend. Für Restaurants und Cafés in Deutschland.",
    eyebrow: "Branche · Gastronomie",
    h1: "KI-Automatisierung für die Gastronomie.",
    intro:
      "Während des Services klingelt das Telefon, aber niemand hat eine Hand frei. Reservierungsanfragen kommen nachts, wenn längst zu ist. Axivore baut Systeme, die Anfragen rund um die Uhr beantworten und Reservierungen automatisch annehmen — damit du dich um die Gäste vor dir kümmern kannst.",
    serviceType: "KI-Automatisierung für Gastronomiebetriebe",
    useCasesHeading: "Was sich in der Gastronomie automatisieren lässt",
    useCases: [
      { title: "Reservierungen rund um die Uhr", text: "Gäste reservieren per Chat oder Sprachassistent — auch um 23 Uhr, wenn das Lokal geschlossen ist. Bestätigung und Erinnerung laufen automatisch." },
      { title: "Anrufe während des Services", text: "Ein Assistent nimmt Anrufe entgegen, wenn das Team am Tisch ist — beantwortet Standardfragen zu Öffnungszeiten, Karte und Verfügbarkeit." },
      { title: "Bewertungen & Anfragen", text: "Eingehende Bewertungen und Mail-Anfragen werden automatisch sortiert und mit Antwortvorschlägen versehen, damit nichts liegen bleibt." },
      { title: "No-Shows reduzieren", text: "Automatische Erinnerungen vor dem Termin senken Nichterscheinen spürbar — ohne dass jemand händisch hinterhertelefonieren muss." },
    ],
    faq: [
      { question: "Ersetzt das mein Reservierungssystem?", answer: "Nein, es ergänzt es. Wir binden die Automatisierung an deine bestehenden Tools an oder bauen eine schlanke Lösung, falls du noch keine hast." },
      { question: "Funktioniert das auch für ein kleines Café?", answer: "Ja. Schon eine einzelne Automatisierung — etwa die Annahme von Reservierungen nach Feierabend — spart pro Woche mehrere Stunden Telefonzeit." },
      { question: "Wie lange dauert die Einrichtung?", answer: "Eine erste Automatisierung ist in der Regel in 1–2 Wochen live und mit deinen echten Abläufen getestet." },
    ],
  },
  {
    slug: "praxen",
    name: "Praxen",
    metaTitle: "KI für Arzt- & Zahnarztpraxen — Telefon & Termine entlasten | Axivore",
    metaDescription:
      "KI-Automatisierung für Praxen: Dauerklingelndes Telefon entlasten, Termine automatisch vergeben, Standardanfragen rund um die Uhr beantworten. Axivore baut Systeme für Arzt- und Zahnarztpraxen — live in 1–2 Wochen.",
    ogDescription:
      "Telefon entlasten, Termine automatisch vergeben, Anfragen rund um die Uhr beantworten. Für Arzt-, Zahnarzt- und Therapiepraxen in Deutschland.",
    eyebrow: "Branche · Praxen",
    h1: "KI-Automatisierung für Arzt- und Zahnarztpraxen.",
    intro:
      "Das Praxistelefon steht nicht still, die Anmeldung kommt kaum zum Arbeiten und Patienten erreichen euch trotzdem nicht. Axivore baut Systeme, die die organisatorische Last von der Anmeldung nehmen — Terminvergabe, wiederkehrende Anfragen und Erreichbarkeit, ohne dass medizinische Entscheidungen automatisiert werden.",
    serviceType: "KI-Automatisierung für Arzt- und Zahnarztpraxen",
    useCasesHeading: "Was sich in der Praxis automatisieren lässt",
    useCases: [
      { title: "Telefon entlasten", text: "Ein digitaler Assistent beantwortet wiederkehrende Fragen zu Öffnungszeiten, Erreichbarkeit und Abläufen — die Anmeldung kann sich auf die Patienten vor Ort konzentrieren." },
      { title: "Termine rund um die Uhr", text: "Patienten vereinbaren und verschieben Termine online — auch außerhalb der Sprechzeiten. Bestätigung und Erinnerung laufen automatisch." },
      { title: "Weniger Ausfälle", text: "Automatische Terminerinnerungen senken Nichterscheinen und halten den Behandlungsplan voll, ohne zusätzlichen Aufwand für das Team." },
      { title: "Anfragen vorsortieren", text: "Eingehende Anliegen werden strukturiert erfasst und priorisiert weitergeleitet — das Team sieht sofort, was dringend ist und was warten kann." },
    ],
    faq: [
      { question: "Trifft die KI medizinische Entscheidungen?", answer: "Nein. Wir automatisieren ausschließlich organisatorische Abläufe — Termine, Erreichbarkeit, wiederkehrende Anfragen. Medizinische Beurteilung bleibt vollständig beim Praxisteam." },
      { question: "Wie sieht es mit Datenschutz aus?", answer: "Datenschutz steht im Mittelpunkt. Wir richten Abläufe DSGVO-konform ein und besprechen vorab genau, welche Daten wie verarbeitet werden." },
      { question: "Lässt sich das an unsere Software anbinden?", answer: "In den meisten Fällen ja. Im Erstgespräch klären wir, welche Systeme ihr nutzt und wie sich die Automatisierung sauber einfügt." },
    ],
  },
  {
    slug: "agenturen",
    name: "Agenturen",
    metaTitle: "KI für Agenturen — Reporting, Angebote & Workflows automatisieren | Axivore",
    metaDescription:
      "KI-Automatisierung für kleine Agenturen: Reportings auf Knopfdruck, Angebote in Minuten, Content- und Lead-Workflows automatisiert. Axivore baut Systeme für Agenturen — live in 1–2 Wochen.",
    ogDescription:
      "Reportings, Angebote und Workflows automatisieren — mehr Zeit für Kundenarbeit statt für Admin. Für kleine Agenturen in Deutschland.",
    eyebrow: "Branche · Agenturen",
    h1: "KI-Automatisierung für Agenturen.",
    intro:
      "Reportings fressen jeden Monat Tage, Angebote werden von Hand zusammengebaut und das Team kopiert Daten zwischen Tools. Axivore baut Systeme, die genau diese wiederkehrende Arbeit übernehmen — damit dein Team an der Kundenarbeit sitzt statt an der Admin.",
    serviceType: "KI-Automatisierung für Agenturen",
    useCasesHeading: "Was sich in der Agentur automatisieren lässt",
    useCases: [
      { title: "Reportings auf Knopfdruck", text: "Daten aus verschiedenen Plattformen werden automatisch zusammengeführt und als fertiges, gebrandetes Reporting ausgegeben — monatlich oder auf Knopfdruck." },
      { title: "Angebote & Pitches", text: "Aus einem kurzen Briefing entsteht das strukturierte Angebot oder Pitch-Dokument — konsistent im Stil der Agentur, in Minuten statt Stunden." },
      { title: "Content-Workflows", text: "Wiederkehrende Schritte in der Content-Produktion — von Recherche bis Erstentwurf — werden automatisiert, das Team verfeinert nur noch." },
      { title: "Leads qualifizieren", text: "Eingehende Anfragen werden automatisch bewertet, angereichert und mit Nachfassnachrichten versehen, damit kein Lead kalt wird." },
    ],
    faq: [
      { question: "Wir nutzen viele verschiedene Tools — geht das?", answer: "Genau dafür ist es gemacht. Wir verbinden deine bestehenden Tools, sodass Daten automatisch fließen, statt von Hand kopiert zu werden." },
      { question: "Ersetzt das Mitarbeiter?", answer: "Nein — es nimmt dem Team die repetitive Arbeit ab, damit es sich auf Kreatives und Kundenbeziehungen konzentrieren kann. Mehr Output ohne neue Stellen." },
      { question: "Wie schnell sehen wir Ergebnisse?", answer: "Eine erste Automatisierung — etwa das monatliche Reporting — ist meist in 1–2 Wochen einsatzbereit." },
    ],
  },
  {
    slug: "dienstleister",
    name: "Dienstleister",
    metaTitle: "KI für Dienstleister — Anfragen, Angebote & Termine automatisieren | Axivore",
    metaDescription:
      "KI-Automatisierung für Dienstleister: Anfragen rund um die Uhr beantworten, Angebote automatisch erstellen, Termine buchen und nachfassen. Axivore baut Systeme für Dienstleistungsbetriebe — live in 1–2 Wochen.",
    ogDescription:
      "Anfragen, Angebote und Termine automatisieren — kein verlorener Lead, kein vergessenes Nachfassen. Für Dienstleister in Deutschland.",
    eyebrow: "Branche · Dienstleister",
    h1: "KI-Automatisierung für Dienstleister.",
    intro:
      "Anfragen kommen über fünf Kanäle, Angebote schreibst du zwischendurch und das Nachfassen vergisst du im Tagesgeschäft. Axivore baut Systeme, die Anfragen sofort beantworten, Angebote vorbereiten und Termine koordinieren — damit kein Auftrag mehr durchrutscht.",
    serviceType: "KI-Automatisierung für Dienstleistungsbetriebe",
    useCasesHeading: "Was sich bei Dienstleistern automatisieren lässt",
    useCases: [
      { title: "Anfragen rund um die Uhr", text: "Ein digitaler Assistent beantwortet Anfragen sofort — auch abends und am Wochenende — und sammelt alle Infos, die du für ein Angebot brauchst." },
      { title: "Angebote automatisch", text: "Aus den gesammelten Angaben entsteht das fertige Angebot — formatiert und versandfertig, ohne dass du dich abends hinsetzen musst." },
      { title: "Termine & Buchung", text: "Kunden buchen passende Termine selbst, Bestätigung und Erinnerung laufen automatisch — kein Hin und Her per Telefon mehr." },
      { title: "Nachfassen ohne Vergessen", text: "Offene Angebote und Anfragen werden automatisch und freundlich nachgefasst, damit aus Interesse auch ein Auftrag wird." },
    ],
    faq: [
      { question: "Funktioniert das für meine Branche?", answer: "Die Abläufe sind bei den meisten Dienstleistern ähnlich — Anfrage, Angebot, Termin, Nachfassen. Im Erstgespräch schauen wir konkret auf deinen Betrieb." },
      { question: "Muss ich meine Tools wechseln?", answer: "Nein. Wir binden die Automatisierung an deine bestehenden Tools an oder bauen eine schlanke Lösung, falls du noch keine nutzt." },
      { question: "Was kostet das?", answer: "Das hängt vom Umfang ab. Im kostenlosen Erstgespräch sagen wir dir ehrlich, was es kostet und ob sich der Aufwand für dich lohnt." },
    ],
  },
];

export function getBranche(slug: string): Branche | undefined {
  return branchen.find((b) => b.slug === slug);
}
