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

// English translations — same slugs/order as `branchen`.
export const branchenEn: Branche[] = [
  {
    slug: "handwerk",
    name: "Trade Businesses",
    metaTitle: "AI for Trade Businesses — Automate Quotes & Calls | Axivore",
    metaDescription:
      "AI automation for trade businesses: quotes in minutes instead of at night, no missed call from the job site, invoices on autopilot. Axivore builds systems for tradespeople — live in 1–2 weeks.",
    ogDescription:
      "Automate quotes, calls and invoices — so you stay on the job site instead of in the office at night. For trade businesses in Germany.",
    eyebrow: "Industry · Trade Businesses",
    h1: "AI automation for trade businesses.",
    intro:
      "As a tradesperson you work on site all day and write quotes at night. Calls get lost because no one can pick up. Axivore builds systems that take over exactly these tasks — so you're not stuck in the office after work anymore.",
    serviceType: "AI automation for trade businesses",
    useCasesHeading: "What can be automated in a trade business",
    useCases: [
      { title: "Quotes in minutes", text: "A few bullet points turn into a finished, calculated quote — formatted and ready to send. No more writing quotes after hours." },
      { title: "No missed calls", text: "A digital assistant takes calls while you're up a ladder — noting the request, contact details and callback wish, so you never lose a job again." },
      { title: "Appointments & scheduling", text: "Customer appointments are coordinated and confirmed automatically — including reminders, so no one forgets and you don't drive out for nothing." },
      { title: "Invoices & follow-ups", text: "Invoices are created automatically after the job, open items get a friendly follow-up — without you having to remember." },
    ],
    faq: [
      { question: "I'm not technical — does this still work?", answer: "Yes. You describe the task in plain language, we build the rest. Using it afterwards is as simple as a WhatsApp message." },
      { question: "Am I too small as a one-person business?", answer: "Quite the opposite. One-person and small businesses benefit the most, because every hour saved directly means more time on site or at home." },
      { question: "How fast is a system like this up and running?", answer: "A first automation — for quotes, for example — is usually ready to use in 1–2 weeks." },
    ],
  },
  {
    slug: "gastronomie",
    name: "Hospitality",
    metaTitle: "AI for Hospitality — Automate Reservations & Inquiries | Axivore",
    metaDescription:
      "AI automation for restaurants, cafés and hospitality businesses: reservations around the clock, calls answered automatically, reviews handled. Axivore builds systems for hospitality — live in 1–2 weeks.",
    ogDescription:
      "Automate reservations, calls and inquiries — during service and after hours. For restaurants and cafés in Germany.",
    eyebrow: "Industry · Hospitality",
    h1: "AI automation for hospitality.",
    intro:
      "During service the phone rings, but no one has a free hand. Reservation requests come in at night, long after closing. Axivore builds systems that answer inquiries around the clock and accept reservations automatically — so you can focus on the guests in front of you.",
    serviceType: "AI automation for hospitality businesses",
    useCasesHeading: "What can be automated in hospitality",
    useCases: [
      { title: "Reservations around the clock", text: "Guests book via chat or voice assistant — even at 11pm when the venue is closed. Confirmation and reminders go out automatically." },
      { title: "Calls during service", text: "An assistant takes calls while the team is at the tables — answering standard questions about hours, the menu and availability." },
      { title: "Reviews & inquiries", text: "Incoming reviews and email inquiries are automatically sorted and given suggested replies, so nothing falls through the cracks." },
      { title: "Fewer no-shows", text: "Automatic reminders before the reservation noticeably reduce no-shows — without anyone having to call around manually." },
    ],
    faq: [
      { question: "Does this replace my reservation system?", answer: "No, it complements it. We connect the automation to your existing tools, or build a lean solution if you don't have one yet." },
      { question: "Does this work for a small café too?", answer: "Yes. Even a single automation — like accepting reservations after hours — saves several hours of phone time per week." },
      { question: "How long does setup take?", answer: "A first automation is usually live within 1–2 weeks and tested against your real workflows." },
    ],
  },
  {
    slug: "praxen",
    name: "Medical & Dental Practices",
    metaTitle: "AI for Medical & Dental Practices — Relieve Phone & Scheduling | Axivore",
    metaDescription:
      "AI automation for practices: relieve a constantly ringing phone, schedule appointments automatically, answer standard inquiries around the clock. Axivore builds systems for medical and dental practices — live in 1–2 weeks.",
    ogDescription:
      "Relieve the phone, schedule appointments automatically, answer inquiries around the clock. For medical, dental and therapy practices in Germany.",
    eyebrow: "Industry · Practices",
    h1: "AI automation for medical and dental practices.",
    intro:
      "The practice phone never stops, the front desk barely gets to work, and patients still can't reach you. Axivore builds systems that take the organizational load off the front desk — scheduling, recurring inquiries and availability, without automating any medical decisions.",
    serviceType: "AI automation for medical and dental practices",
    useCasesHeading: "What can be automated in a practice",
    useCases: [
      { title: "Relieve the phone", text: "A digital assistant answers recurring questions about hours, availability and procedures — so the front desk can focus on the patients in front of them." },
      { title: "Appointments around the clock", text: "Patients book and reschedule appointments online — even outside consultation hours. Confirmation and reminders go out automatically." },
      { title: "Fewer no-shows", text: "Automatic appointment reminders reduce no-shows and keep the schedule full, with no extra effort for the team." },
      { title: "Pre-sorting inquiries", text: "Incoming requests are captured in a structured way and forwarded by priority — the team immediately sees what's urgent and what can wait." },
    ],
    faq: [
      { question: "Does the AI make medical decisions?", answer: "No. We only automate organizational processes — scheduling, availability, recurring inquiries. Medical judgment stays entirely with the practice team." },
      { question: "What about data protection?", answer: "Data protection is central. We set up processes in line with GDPR and clarify in advance exactly which data is processed and how." },
      { question: "Can this connect to our software?", answer: "In most cases, yes. In the first conversation we clarify which systems you use and how the automation fits in cleanly." },
    ],
  },
  {
    slug: "agenturen",
    name: "Agencies",
    metaTitle: "AI for Agencies — Automate Reporting, Quotes & Workflows | Axivore",
    metaDescription:
      "AI automation for small agencies: reports at the push of a button, quotes in minutes, content and lead workflows automated. Axivore builds systems for agencies — live in 1–2 weeks.",
    ogDescription:
      "Automate reporting, quotes and workflows — more time for client work instead of admin. For small agencies in Germany.",
    eyebrow: "Industry · Agencies",
    h1: "AI automation for agencies.",
    intro:
      "Reporting eats up days every month, quotes are pieced together by hand, and the team copies data between tools. Axivore builds systems that take over exactly this recurring work — so your team sits on client work instead of admin.",
    serviceType: "AI automation for agencies",
    useCasesHeading: "What can be automated at an agency",
    useCases: [
      { title: "Reporting at the push of a button", text: "Data from different platforms is automatically merged and delivered as a finished, branded report — monthly or on demand." },
      { title: "Quotes & pitches", text: "A short brief turns into a structured quote or pitch document — consistent with the agency's style, in minutes instead of hours." },
      { title: "Content workflows", text: "Recurring steps in content production — from research to first draft — are automated, the team only refines from there." },
      { title: "Qualifying leads", text: "Incoming inquiries are automatically scored, enriched and given follow-up messages, so no lead goes cold." },
    ],
    faq: [
      { question: "We use lots of different tools — does this work?", answer: "That's exactly what it's built for. We connect your existing tools so data flows automatically instead of being copied by hand." },
      { question: "Does this replace employees?", answer: "No — it takes the repetitive work off the team so they can focus on creative work and client relationships. More output without new hires." },
      { question: "How quickly do we see results?", answer: "A first automation — such as monthly reporting — is usually ready to use in 1–2 weeks." },
    ],
  },
  {
    slug: "dienstleister",
    name: "Service Providers",
    metaTitle: "AI for Service Providers — Automate Inquiries, Quotes & Appointments | Axivore",
    metaDescription:
      "AI automation for service providers: answer inquiries around the clock, generate quotes automatically, book appointments and follow up. Axivore builds systems for service businesses — live in 1–2 weeks.",
    ogDescription:
      "Automate inquiries, quotes and appointments — no lost lead, no forgotten follow-up. For service providers in Germany.",
    eyebrow: "Industry · Service Providers",
    h1: "AI automation for service providers.",
    intro:
      "Inquiries come in through five channels, you write quotes in between other things, and follow-ups get forgotten in the daily grind. Axivore builds systems that answer inquiries instantly, prepare quotes and coordinate appointments — so no job slips through anymore.",
    serviceType: "AI automation for service businesses",
    useCasesHeading: "What can be automated for service providers",
    useCases: [
      { title: "Inquiries around the clock", text: "A digital assistant answers inquiries immediately — evenings and weekends too — and collects all the info you need for a quote." },
      { title: "Quotes automatically", text: "The finished quote is generated from the collected details — formatted and ready to send, without you having to sit down at night." },
      { title: "Appointments & booking", text: "Customers book a suitable appointment themselves, confirmation and reminders go out automatically — no more back-and-forth phone calls." },
      { title: "Follow-ups without forgetting", text: "Open quotes and inquiries get an automatic, friendly follow-up, so interest actually turns into a booking." },
    ],
    faq: [
      { question: "Does this work for my industry?", answer: "The workflows are similar for most service providers — inquiry, quote, appointment, follow-up. In the first conversation we look specifically at your business." },
      { question: "Do I have to switch tools?", answer: "No. We connect the automation to your existing tools, or build a lean solution if you're not using any yet." },
      { question: "What does it cost?", answer: "It depends on the scope. In the free first conversation, we'll tell you honestly what it costs and whether it's worth it for you." },
    ],
  },
];

// Romanian translations — same slugs/order as `branchen`.
export const branchenRo: Branche[] = [
  {
    slug: "handwerk",
    name: "Meșteșugari",
    metaTitle: "AI pentru meșteșugari — automatizează oferte și apeluri | Axivore",
    metaDescription:
      "Automatizare AI pentru firme de meșteșugărit: oferte în minute în loc de seara târziu, niciun apel pierdut de pe șantier, facturi automate. Axivore construiește sisteme pentru meșteșugari — live în 1–2 săptămâni.",
    ogDescription:
      "Automatizează oferte, apeluri și facturi — ca să rămâi pe șantier în loc să stai seara la birou. Pentru firme de meșteșugărit din Germania.",
    eyebrow: "Domeniu · Meșteșugari",
    h1: "Automatizare AI pentru firme de meșteșugărit.",
    intro:
      "Ca meșteșugar, lucrezi ziua pe șantier și scrii oferte seara. Apelurile se pierd pentru că nimeni nu poate răspunde la telefon. Axivore construiește sisteme care preiau exact aceste sarcini — ca să nu mai stai la birou după program.",
    serviceType: "Automatizare AI pentru firme de meșteșugărit",
    useCasesHeading: "Ce se poate automatiza în meșteșugărit",
    useCases: [
      { title: "Oferte în câteva minute", text: "Din câteva puncte cheie rezultă oferta finală, calculată — formatată și gata de trimis. Nu mai scrii oferte după program." },
      { title: "Niciun apel pierdut", text: "Un asistent digital preia apelurile cât ești pe scară — notează cererea, contactul și dorința de apel înapoi, ca să nu mai pierzi nicio comandă." },
      { title: "Programări și organizare", text: "Programările cu clienții sunt coordonate și confirmate automat — inclusiv memento, ca nimeni să nu uite și să nu mergi degeaba." },
      { title: "Facturi și urmărire", text: "După finalizarea lucrării, factura apare automat, iar sumele restante sunt urmărite politicos — fără să trebuiască să ții tu minte." },
    ],
    faq: [
      { question: "Nu sunt tehnic — funcționează totuși?", answer: "Da. Descrii sarcina în limbaj obișnuit, noi construim restul. Utilizarea ulterioară este la fel de simplă ca un mesaj WhatsApp." },
      { question: "Sunt prea mic ca firmă mică pentru asta?", answer: "Dimpotrivă. Firmele mici și cele cu un singur angajat beneficiază cel mai mult, pentru că fiecare oră economisită înseamnă direct mai mult timp pe șantier sau acasă." },
      { question: "Cât de repede funcționează un astfel de sistem?", answer: "O primă automatizare — de exemplu pentru oferte — este de obicei gata de utilizare în 1–2 săptămâni." },
    ],
  },
  {
    slug: "gastronomie",
    name: "Ospitalitate",
    metaTitle: "AI pentru ospitalitate — automatizează rezervări și cereri | Axivore",
    metaDescription:
      "Automatizare AI pentru restaurante, cafenele și unități de ospitalitate: rezervări non-stop, apeluri preluate automat, recenzii gestionate. Axivore construiește sisteme pentru ospitalitate — live în 1–2 săptămâni.",
    ogDescription:
      "Automatizează rezervări, apeluri și cereri — în timpul serviciului și după program. Pentru restaurante și cafenele din Germania.",
    eyebrow: "Domeniu · Ospitalitate",
    h1: "Automatizare AI pentru ospitalitate.",
    intro:
      "În timpul serviciului sună telefonul, dar nimeni nu are o mână liberă. Cererile de rezervare vin noaptea, mult după închidere. Axivore construiește sisteme care răspund la cereri non-stop și acceptă rezervări automat — ca tu să te poți ocupa de oaspeții din fața ta.",
    serviceType: "Automatizare AI pentru unități de ospitalitate",
    useCasesHeading: "Ce se poate automatiza în ospitalitate",
    useCases: [
      { title: "Rezervări non-stop", text: "Oaspeții rezervă prin chat sau asistent vocal — chiar și la ora 23, când localul e închis. Confirmarea și memento-ul se trimit automat." },
      { title: "Apeluri în timpul serviciului", text: "Un asistent preia apelurile cât echipa e la mese — răspunde la întrebări standard despre program, meniu și disponibilitate." },
      { title: "Recenzii și cereri", text: "Recenziile primite și cererile prin e-mail sunt sortate automat și primesc sugestii de răspuns, ca nimic să nu rămână neatins." },
      { title: "Mai puține no-show-uri", text: "Memento-urile automate înainte de rezervare reduc simțitor absențele — fără ca cineva să sune manual." },
    ],
    faq: [
      { question: "Înlocuiește sistemul meu de rezervări?", answer: "Nu, îl completează. Conectăm automatizarea la instrumentele tale existente sau construim o soluție simplă dacă nu ai încă una." },
      { question: "Funcționează și pentru o cafenea mică?", answer: "Da. Chiar și o singură automatizare — de exemplu preluarea rezervărilor după program — economisește câteva ore de telefon pe săptămână." },
      { question: "Cât durează implementarea?", answer: "O primă automatizare este de obicei live în 1–2 săptămâni și testată cu procesele tale reale." },
    ],
  },
  {
    slug: "praxen",
    name: "Cabinete Medicale",
    metaTitle: "AI pentru cabinete medicale și stomatologice — degrevare telefon și programări | Axivore",
    metaDescription:
      "Automatizare AI pentru cabinete: degrevează telefonul care sună constant, programează automat, răspunde la cereri standard non-stop. Axivore construiește sisteme pentru cabinete medicale și stomatologice — live în 1–2 săptămâni.",
    ogDescription:
      "Degrevează telefonul, programează automat, răspunde la cereri non-stop. Pentru cabinete medicale, stomatologice și de terapie din Germania.",
    eyebrow: "Domeniu · Cabinete",
    h1: "Automatizare AI pentru cabinete medicale și stomatologice.",
    intro:
      "Telefonul cabinetului nu se oprește, recepția abia reușește să lucreze, iar pacienții tot nu vă pot contacta. Axivore construiește sisteme care preiau sarcina organizatorică de la recepție — programări, cereri recurente și disponibilitate, fără a automatiza decizii medicale.",
    serviceType: "Automatizare AI pentru cabinete medicale și stomatologice",
    useCasesHeading: "Ce se poate automatiza în cabinet",
    useCases: [
      { title: "Degrevarea telefonului", text: "Un asistent digital răspunde la întrebări recurente despre program, disponibilitate și proceduri — recepția se poate concentra pe pacienții prezenți." },
      { title: "Programări non-stop", text: "Pacienții fac și modifică programări online — chiar și în afara orelor de consultație. Confirmarea și memento-ul se trimit automat." },
      { title: "Mai puține absențe", text: "Memento-urile automate pentru programări reduc absențele și mențin agenda plină, fără efort suplimentar pentru echipă." },
      { title: "Sortarea prealabilă a cererilor", text: "Cererile primite sunt înregistrate structurat și direcționate după prioritate — echipa vede imediat ce e urgent și ce poate aștepta." },
    ],
    faq: [
      { question: "AI-ul ia decizii medicale?", answer: "Nu. Automatizăm exclusiv procesele organizatorice — programări, disponibilitate, cereri recurente. Evaluarea medicală rămâne complet în sarcina echipei cabinetului." },
      { question: "Cum stă treaba cu protecția datelor?", answer: "Protecția datelor este centrală. Configurăm procesele conform GDPR și clarificăm dinainte exact ce date sunt procesate și cum." },
      { question: "Se poate conecta la software-ul nostru?", answer: "În majoritatea cazurilor, da. La prima discuție clarificăm ce sisteme folosiți și cum se integrează automatizarea corect." },
    ],
  },
  {
    slug: "agenturen",
    name: "Agenții",
    metaTitle: "AI pentru agenții — automatizează rapoarte, oferte și fluxuri de lucru | Axivore",
    metaDescription:
      "Automatizare AI pentru agenții mici: rapoarte la un click, oferte în minute, fluxuri de conținut și lead-uri automatizate. Axivore construiește sisteme pentru agenții — live în 1–2 săptămâni.",
    ogDescription:
      "Automatizează rapoarte, oferte și fluxuri de lucru — mai mult timp pentru clienți, mai puțin pentru administrație. Pentru agenții mici din Germania.",
    eyebrow: "Domeniu · Agenții",
    h1: "Automatizare AI pentru agenții.",
    intro:
      "Rapoartele consumă zile întregi în fiecare lună, ofertele sunt asamblate manual, iar echipa copiază date între instrumente. Axivore construiește sisteme care preiau exact această muncă recurentă — ca echipa ta să lucreze cu clienții, nu cu administrația.",
    serviceType: "Automatizare AI pentru agenții",
    useCasesHeading: "Ce se poate automatiza într-o agenție",
    useCases: [
      { title: "Rapoarte la un click", text: "Datele din platforme diferite sunt îmbinate automat și livrate ca raport finit, cu branding — lunar sau la cerere." },
      { title: "Oferte și prezentări", text: "Dintr-un scurt brief rezultă oferta structurată sau documentul de prezentare — consecvent cu stilul agenției, în minute în loc de ore." },
      { title: "Fluxuri de conținut", text: "Pașii recurenți în producția de conținut — de la cercetare la prima variantă — sunt automatizați, echipa doar rafinează." },
      { title: "Calificarea lead-urilor", text: "Cererile primite sunt evaluate automat, îmbogățite și primesc mesaje de urmărire, ca niciun lead să nu se răcească." },
    ],
    faq: [
      { question: "Folosim multe instrumente diferite — merge?", answer: "Exact pentru asta este făcut. Conectăm instrumentele tale existente ca datele să curgă automat, în loc să fie copiate manual." },
      { question: "Înlocuiește angajați?", answer: "Nu — preia munca repetitivă de la echipă, ca aceasta să se concentreze pe creativitate și relații cu clienții. Mai mult output fără angajări noi." },
      { question: "Cât de repede vedem rezultate?", answer: "O primă automatizare — de exemplu raportarea lunară — este de obicei gata de utilizare în 1–2 săptămâni." },
    ],
  },
  {
    slug: "dienstleister",
    name: "Prestatori de Servicii",
    metaTitle: "AI pentru prestatori de servicii — automatizează cereri, oferte și programări | Axivore",
    metaDescription:
      "Automatizare AI pentru prestatori de servicii: răspunde la cereri non-stop, generează oferte automat, programează și urmărește. Axivore construiește sisteme pentru firme de servicii — live în 1–2 săptămâni.",
    ogDescription:
      "Automatizează cereri, oferte și programări — niciun lead pierdut, nicio urmărire uitată. Pentru prestatori de servicii din Germania.",
    eyebrow: "Domeniu · Prestatori de Servicii",
    h1: "Automatizare AI pentru prestatori de servicii.",
    intro:
      "Cererile vin prin cinci canale, scrii oferte printre altele, iar urmărirea se uită în agitația zilnică. Axivore construiește sisteme care răspund imediat la cereri, pregătesc oferte și coordonează programări — ca nicio comandă să nu mai scape.",
    serviceType: "Automatizare AI pentru firme de servicii",
    useCasesHeading: "Ce se poate automatiza la prestatorii de servicii",
    useCases: [
      { title: "Cereri non-stop", text: "Un asistent digital răspunde imediat la cereri — și seara și în weekend — și adună toate informațiile necesare pentru o ofertă." },
      { title: "Oferte automate", text: "Din datele adunate rezultă oferta finală — formatată și gata de trimis, fără să trebuiască să stai seara la calculator." },
      { title: "Programări și rezervări", text: "Clienții își rezervă singuri programarea potrivită, confirmarea și memento-ul se trimit automat — fără du-te-vino telefonic." },
      { title: "Urmărire fără să uiți", text: "Ofertele și cererile deschise primesc automat o urmărire politicoasă, ca interesul să devină efectiv o comandă." },
    ],
    faq: [
      { question: "Funcționează pentru domeniul meu?", answer: "Procesele sunt similare la majoritatea prestatorilor de servicii — cerere, ofertă, programare, urmărire. La prima discuție analizăm concret firma ta." },
      { question: "Trebuie să-mi schimb instrumentele?", answer: "Nu. Conectăm automatizarea la instrumentele tale existente sau construim o soluție simplă dacă nu folosești încă niciunul." },
      { question: "Cât costă?", answer: "Depinde de amploare. La prima discuție gratuită îți spunem sincer cât costă și dacă merită efortul pentru tine." },
    ],
  },
];

export function getBranchenList(locale: string): Branche[] {
  if (locale === "hr") return branchenHr;
  if (locale === "en") return branchenEn;
  if (locale === "ro") return branchenRo;
  return branchen;
}

export function getBranche(slug: string, locale: string): Branche | undefined {
  return getBranchenList(locale).find((b) => b.slug === slug);
}
