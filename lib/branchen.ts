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

// Croatian translations — same slugs/order as `branchen`. Other locales
// (en/ro/tr/it) still fall back to the German content until they get their
// own pass; see lib/seo.ts's resolveContentLocale.
export const branchenHr: Branche[] = [
  {
    slug: "handwerk",
    name: "Obrt",
    metaTitle: "AI za obrtnike — automatiziraj ponude i pozive | Axivore",
    metaDescription:
      "AI automatizacija za obrtničke tvrtke: ponude u minutama umjesto navečer, nijedan propušteni poziv s gradilišta, računi automatski. Axivore gradi sustave za obrt — live za 1–2 tjedna.",
    ogDescription:
      "Automatiziraj ponude, pozive i račune — da ostaneš na gradilištu umjesto navečer u uredu. Za obrtničke tvrtke u Njemačkoj.",
    eyebrow: "Branša · Obrt",
    h1: "AI automatizacija za obrtničke tvrtke.",
    intro:
      "Kao obrtnik danju radiš na gradilištu, a navečer pišeš ponude. Pozivi se gube jer nitko ne stigne javiti se na telefon. Axivore gradi sustave koji preuzimaju upravo te zadatke — da poslije posla više ne sjediš u uredu.",
    serviceType: "AI automatizacija za obrtničke tvrtke",
    useCasesHeading: "Što se u obrtu može automatizirati",
    useCases: [
      { title: "Ponude u minutama", text: "Iz nekoliko natuknica nastaje gotova, obračunata ponuda — formatirana i spremna za slanje. Više nema pisanja ponuda poslije posla." },
      { title: "Nijedan propušteni poziv", text: "Digitalni asistent prima pozive dok si na ljestvama — bilježi upit, kontakt i želju za povratnim pozivom, tako da ne izgubiš nijedan posao." },
      { title: "Termini i raspored", text: "Termini s klijentima se automatski koordiniraju i potvrđuju — uključujući podsjetnik, da nitko ne zaboravi i da ne odeš uzalud." },
      { title: "Računi i podsjećanje", text: "Nakon posla račun nastaje automatski, a nepodmirene stavke se ljubazno podsjećaju — bez da ti to moraš pamtiti." },
    ],
    faq: [
      { question: "Nisam tehnički potkovan — funkcionira li ovo ipak?", answer: "Da. Ti opišeš zadatak običnim jezikom, mi gradimo ostalo. Korištenje je nakon toga jednostavno kao WhatsApp poruka." },
      { question: "Jesam li kao mala tvrtka premali za ovo?", answer: "Naprotiv. Baš jednočlane i male tvrtke imaju najviše koristi, jer svaki ušteđeni sat znači više vremena na gradilištu ili kod kuće." },
      { question: "Koliko brzo takav sustav proradi?", answer: "Prva automatizacija — na primjer za ponude — obično je spremna za korištenje za 1–2 tjedna." },
    ],
  },
  {
    slug: "gastronomie",
    name: "Ugostiteljstvo",
    metaTitle: "AI za ugostiteljstvo — automatiziraj rezervacije i upite | Axivore",
    metaDescription:
      "AI automatizacija za restorane, kafiće i ugostiteljstvo: rezervacije 0-24, pozivi automatski odgovoreni, recenzije uređene. Axivore gradi sustave za ugostiteljstvo — live za 1–2 tjedna.",
    ogDescription:
      "Automatiziraj rezervacije, pozive i upite — i tijekom servisa i poslije radnog vremena. Za restorane i kafiće u Njemačkoj.",
    eyebrow: "Branša · Ugostiteljstvo",
    h1: "AI automatizacija za ugostiteljstvo.",
    intro:
      "Tijekom servisa telefon zvoni, ali nitko nema slobodnu ruku. Upiti za rezervacije stižu noću, kad je odavno zatvoreno. Axivore gradi sustave koji odgovaraju na upite 0-24 i automatski prihvaćaju rezervacije — da se ti možeš posvetiti gostima ispred sebe.",
    serviceType: "AI automatizacija za ugostiteljske objekte",
    useCasesHeading: "Što se u ugostiteljstvu može automatizirati",
    useCases: [
      { title: "Rezervacije 0-24", text: "Gosti rezerviraju putem chata ili glasovnog asistenta — čak i u 23 sata, kad je lokal zatvoren. Potvrda i podsjetnik idu automatski." },
      { title: "Pozivi tijekom servisa", text: "Asistent prima pozive dok je tim za stolovima — odgovara na standardna pitanja o radnom vremenu, jelovniku i dostupnosti." },
      { title: "Recenzije i upiti", text: "Pristigle recenzije i upiti putem maila automatski se sortiraju i dobivaju prijedloge odgovora, tako da ništa ne ostane zaboravljeno." },
      { title: "Manje no-showova", text: "Automatski podsjetnici prije termina osjetno smanjuju broj gostiju koji se ne pojave — bez da itko ručno zove i podsjeća." },
    ],
    faq: [
      { question: "Zamjenjuje li ovo moj sustav za rezervacije?", answer: "Ne, nadopunjuje ga. Automatizaciju povezujemo s tvojim postojećim alatima ili gradimo jednostavno rješenje ako ga još nemaš." },
      { question: "Funkcionira li ovo i za mali kafić?", answer: "Da. Već jedna jedina automatizacija — na primjer prihvaćanje rezervacija poslije radnog vremena — štedi nekoliko sati telefoniranja tjedno." },
      { question: "Koliko dugo traje postavljanje?", answer: "Prva automatizacija je u pravilu live za 1–2 tjedna i testirana na tvojim stvarnim procesima." },
    ],
  },
  {
    slug: "praxen",
    name: "Ordinacije",
    metaTitle: "AI za liječničke i zubarske ordinacije — rasteretite telefon i termine | Axivore",
    metaDescription:
      "AI automatizacija za ordinacije: rasteretite telefon koji stalno zvoni, termine dodijelite automatski, standardne upite odgovorite 0-24. Axivore gradi sustave za liječničke i zubarske ordinacije — live za 1–2 tjedna.",
    ogDescription:
      "Rasteretite telefon, dodijelite termine automatski, odgovorite na upite 0-24. Za liječničke, zubarske i terapeutske ordinacije u Njemačkoj.",
    eyebrow: "Branša · Ordinacije",
    h1: "AI automatizacija za liječničke i zubarske ordinacije.",
    intro:
      "Telefon u ordinaciji ne prestaje zvoniti, recepcija jedva stiže raditi, a pacijenti vas ipak ne mogu dobiti. Axivore gradi sustave koji recepciji skidaju organizacijski teret — zakazivanje termina, ponavljajući upiti i dostupnost, bez da se automatiziraju medicinske odluke.",
    serviceType: "AI automatizacija za liječničke i zubarske ordinacije",
    useCasesHeading: "Što se u ordinaciji može automatizirati",
    useCases: [
      { title: "Rasterećenje telefona", text: "Digitalni asistent odgovara na ponavljajuća pitanja o radnom vremenu, dostupnosti i procesima — recepcija se može posvetiti pacijentima na licu mjesta." },
      { title: "Termini 0-24", text: "Pacijenti dogovaraju i pomiču termine online — i izvan ordinacijskog vremena. Potvrda i podsjetnik idu automatski." },
      { title: "Manje otkazivanja", text: "Automatski podsjetnici za termine smanjuju broj nedolazaka i drže raspored pun, bez dodatnog truda za tim." },
      { title: "Prethodno sortiranje upita", text: "Pristigli upiti se strukturirano bilježe i prosljeđuju po prioritetu — tim odmah vidi što je hitno, a što može pričekati." },
    ],
    faq: [
      { question: "Donosi li AI medicinske odluke?", answer: "Ne. Automatiziramo isključivo organizacijske procese — termine, dostupnost, ponavljajuće upite. Medicinska procjena u potpunosti ostaje na timu ordinacije." },
      { question: "Kako stoji stvar sa zaštitom podataka?", answer: "Zaštita podataka je u središtu. Procese postavljamo u skladu s GDPR-om i unaprijed točno dogovaramo koji se podaci i kako obrađuju." },
      { question: "Može li se ovo povezati s našim softverom?", answer: "U većini slučajeva da. Na prvom razgovoru razjasnimo koje sustave koristite i kako se automatizacija uredno uklapa." },
    ],
  },
  {
    slug: "agenturen",
    name: "Agencije",
    metaTitle: "AI za agencije — automatiziraj izvještaje, ponude i workflowove | Axivore",
    metaDescription:
      "AI automatizacija za male agencije: izvještaji na klik, ponude u minutama, content i lead workflowovi automatizirani. Axivore gradi sustave za agencije — live za 1–2 tjedna.",
    ogDescription:
      "Automatiziraj izvještaje, ponude i workflowove — više vremena za rad s klijentima umjesto za admin. Za male agencije u Njemačkoj.",
    eyebrow: "Branša · Agencije",
    h1: "AI automatizacija za agencije.",
    intro:
      "Izvještaji svaki mjesec pojedu dane, ponude se sastavljaju ručno, a tim kopira podatke između alata. Axivore gradi sustave koji preuzimaju upravo taj ponavljajući posao — da tvoj tim sjedi na radu s klijentima, a ne na adminu.",
    serviceType: "AI automatizacija za agencije",
    useCasesHeading: "Što se u agenciji može automatizirati",
    useCases: [
      { title: "Izvještaji na klik", text: "Podaci s različitih platformi automatski se objedinjuju i izdaju kao gotov, brendiran izvještaj — mjesečno ili na klik." },
      { title: "Ponude i pitchevi", text: "Iz kratkog brifa nastaje strukturirana ponuda ili pitch dokument — dosljedan stilu agencije, u minutama umjesto sati." },
      { title: "Content workflowovi", text: "Ponavljajući koraci u produkciji sadržaja — od istraživanja do prve verzije — automatiziraju se, tim samo dorađuje." },
      { title: "Kvalifikacija leadova", text: "Pristigli upiti se automatski ocjenjuju, obogaćuju podacima i dobivaju poruke za podsjećanje, tako da nijedan lead ne ohladi." },
    ],
    faq: [
      { question: "Koristimo puno različitih alata — je li to izvedivo?", answer: "Upravo za to je i napravljeno. Povezujemo tvoje postojeće alate tako da podaci teku automatski, umjesto da se ručno kopiraju." },
      { question: "Zamjenjuje li ovo zaposlenike?", answer: "Ne — skida s tima repetitivan posao, da se mogu posvetiti kreativi i odnosima s klijentima. Više outputa bez novih zaposlenja." },
      { question: "Koliko brzo vidimo rezultate?", answer: "Prva automatizacija — na primjer mjesečni izvještaj — obično je spremna za korištenje za 1–2 tjedna." },
    ],
  },
  {
    slug: "dienstleister",
    name: "Pružatelji usluga",
    metaTitle: "AI za pružatelje usluga — automatiziraj upite, ponude i termine | Axivore",
    metaDescription:
      "AI automatizacija za pružatelje usluga: odgovaraj na upite 0-24, automatski izradi ponude, zakazuj termine i podsjećaj. Axivore gradi sustave za uslužne djelatnosti — live za 1–2 tjedna.",
    ogDescription:
      "Automatiziraj upite, ponude i termine — nijedan izgubljeni lead, nijedno zaboravljeno podsjećanje. Za pružatelje usluga u Njemačkoj.",
    eyebrow: "Branša · Pružatelji usluga",
    h1: "AI automatizacija za pružatelje usluga.",
    intro:
      "Upiti stižu kroz pet kanala, ponude pišeš usput, a podsjećanje zaboraviš u svakodnevnom poslu. Axivore gradi sustave koji odmah odgovaraju na upite, pripremaju ponude i koordiniraju termine — da ti više nijedan posao ne promakne.",
    serviceType: "AI automatizacija za uslužne djelatnosti",
    useCasesHeading: "Što se kod pružatelja usluga može automatizirati",
    useCases: [
      { title: "Upiti 0-24", text: "Digitalni asistent odmah odgovara na upite — i navečer i vikendom — te prikuplja sve podatke koji su ti potrebni za ponudu." },
      { title: "Ponude automatski", text: "Iz prikupljenih podataka nastaje gotova ponuda — formatirana i spremna za slanje, bez da moraš sjesti navečer." },
      { title: "Termini i rezervacije", text: "Klijenti sami rezerviraju odgovarajući termin, potvrda i podsjetnik idu automatski — više nema prepiske telefonom." },
      { title: "Podsjećanje bez zaborava", text: "Otvorene ponude i upiti se automatski i ljubazno podsjećaju, da od interesa nastane i posao." },
    ],
    faq: [
      { question: "Funkcionira li ovo za moju branšu?", answer: "Procesi su kod većine pružatelja usluga slični — upit, ponuda, termin, podsjećanje. Na prvom razgovoru konkretno pogledamo tvoju tvrtku." },
      { question: "Moram li mijenjati svoje alate?", answer: "Ne. Automatizaciju povezujemo s tvojim postojećim alatima ili gradimo jednostavno rješenje ako ih još ne koristiš." },
      { question: "Koliko to košta?", answer: "Ovisi o opsegu. Na besplatnom prvom razgovoru iskreno ti kažemo koliko košta i isplati li se to za tebe." },
    ],
  },
];

export function getBranchenList(locale: string): Branche[] {
  return locale === "hr" ? branchenHr : branchen;
}

export function getBranche(slug: string, locale: string): Branche | undefined {
  return getBranchenList(locale).find((b) => b.slug === slug);
}
