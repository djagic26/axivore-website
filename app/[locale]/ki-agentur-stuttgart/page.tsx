import type { Metadata } from "next";
import { ServiceShell, CALENDLY_URL } from "@/components/ServiceShell";
import { resolveContentLocale, partialPageMetadata, localePathname, type AppLocale } from "@/lib/seo";

const AVAILABLE: readonly AppLocale[] = ["de", "hr", "en", "ro", "tr", "it"];
const PATH = "/ki-agentur-stuttgart";

const region = ["Stuttgart", "Esslingen", "Ludwigsburg", "Böblingen", "Sindelfingen", "Waiblingen", "Fellbach", "Leonberg"];

type Item = { title: string; text: string };
type Faq = { question: string; answer: string };

const CONTENT: Record<"de" | "hr" | "en" | "ro" | "tr" | "it", {
  metaTitle: string; metaDescription: string; ogDescription: string;
  eyebrow: string; h1: string; subheadline: string;
  servicesHeading: string; services: Item[];
  whyHeading: string; why: Item[];
  regionHeading: string; regionText: string;
  faqHeading: string; faq: Faq[];
  ctaHeading: string; ctaText: string; ctaButton: string;
  start: string; localBusinessDescription: string;
}> = {
  de: {
    metaTitle: "KI-Agentur Stuttgart — KI-Automatisierung für KMU | Axivore",
    metaDescription: "Axivore ist deine KI-Agentur aus Stuttgart: KI-Automatisierungen, Chatbots und maßgeschneiderte Software für kleine und mittlere Unternehmen in Stuttgart und der Region. Live in 1–2 Wochen.",
    ogDescription: "KI-Automatisierungen, Chatbots und Software für kleine Unternehmen in Stuttgart und Umgebung. Persönlich, lokal, ehrlich.",
    eyebrow: "KI-Agentur · Stuttgart",
    h1: "KI-Agentur aus Stuttgart für kleine Unternehmen.",
    subheadline: "Axivore baut KI-Automatisierungen, intelligente Chatbots und maßgeschneiderte Software für kleine und mittlere Unternehmen in Stuttgart und der Region. Wir nehmen dir die Aufgaben ab, die jede Woche Stunden kosten — persönlich, lokal und ohne dass du Technik verstehen musst.",
    servicesHeading: "Was wir für Stuttgarter Unternehmen bauen",
    services: [
      { title: "KI-Automatisierung", text: "Angebote, Rechnungen, Berichte und Dateneingaben laufen automatisch — 5–15 Stunden pro Woche zurückgewonnen, ohne neue Mitarbeiter." },
      { title: "KI-Chatbots", text: "Ein digitaler Assistent beantwortet Kundenanfragen rund um die Uhr, bucht Termine und qualifiziert Leads — auch nach Feierabend." },
      { title: "Maßgeschneiderte Software", text: "Kleine Tools, die genau zu deinem Betrieb passen — statt teurer Standardlösungen, die du nie ganz nutzt." },
    ],
    whyHeading: "Warum eine KI-Agentur aus der Region",
    why: [
      { title: "Aus Stuttgart, für Stuttgart", text: "Wir kennen die Betriebe hier — Handwerk, Dienstleistung, Gastronomie, Praxen. Kein anonymes Callcenter, sondern ein Ansprechpartner aus der Region." },
      { title: "Persönlich erreichbar", text: "Vor-Ort-Termin in Stuttgart und Umgebung oder per Video — wie es dir passt. Du redest immer direkt mit der Person, die dein System baut." },
      { title: "Schnell live", text: "Die erste Automatisierung läuft meist in 1–2 Wochen. Kein monatelanges Projekt, sondern ein Ergebnis, das du sofort spürst." },
    ],
    regionHeading: "In Stuttgart und Umgebung",
    regionText: "Wir betreuen Unternehmen in ganz Stuttgart und der Region — unter anderem in:",
    faqHeading: "Häufige Fragen",
    faq: [
      { question: "Arbeitet Axivore nur in Stuttgart?", answer: "Unser Sitz ist in Stuttgart und wir betreuen Unternehmen in Stuttgart und der gesamten Region — von Esslingen über Ludwigsburg bis Böblingen. Vor-Ort-Termine sind in der Region problemlos möglich, der Rest läuft bequem digital." },
      { question: "Für welche Unternehmen lohnt sich das?", answer: "Für kleine und mittlere Betriebe mit 5–30 Mitarbeitern, die Zeit an wiederkehrenden Aufgaben verlieren — Handwerk, Dienstleistungen, Agenturen, Gastronomie, Praxen. Gerade kleine Betriebe profitieren am meisten, weil jede gesparte Stunde direkt zählt." },
      { question: "Was kostet eine KI-Automatisierung?", answer: "Das hängt vom Umfang ab. Im kostenlosen Erstgespräch schauen wir uns deine zeitfressende Aufgabe an und sagen dir ehrlich, was es kostet und ob sich der Aufwand lohnt — ohne Verpflichtung." },
      { question: "Muss ich technisch sein?", answer: "Nein. Du beschreibst die Aufgabe in normaler Sprache, wir bauen den Rest. Die Bedienung ist anschließend so einfach wie eine E-Mail." },
    ],
    ctaHeading: "Lass uns über deinen Betrieb reden.",
    ctaText: "Kostenloses Erstgespräch — vor Ort in Stuttgart oder per Video. Wir zeigen dir, welche Aufgabe sich bei dir zuerst automatisieren lässt.",
    ctaButton: "Kostenloses Gespräch buchen",
    start: "Start",
    localBusinessDescription: "KI-Agentur aus Stuttgart für KI-Automatisierungen, Chatbots und maßgeschneiderte Software für kleine und mittlere Unternehmen in Stuttgart und der Region.",
  },
  hr: {
    metaTitle: "AI agencija Stuttgart — AI automatizacija za male tvrtke | Axivore",
    metaDescription: "Axivore je tvoja AI agencija iz Stuttgarta: AI automatizacije, chatbotovi i softver po mjeri za male i srednje tvrtke u Stuttgartu i okolici. Live za 1–2 tjedna.",
    ogDescription: "AI automatizacije, chatbotovi i softver za male tvrtke u Stuttgartu i okolici. Osobno, lokalno, iskreno.",
    eyebrow: "AI agencija · Stuttgart",
    h1: "AI agencija iz Stuttgarta za male tvrtke.",
    subheadline: "Axivore gradi AI automatizacije, inteligentne chatbotove i softver po mjeri za male i srednje tvrtke u Stuttgartu i okolici. Preuzimamo zadatke koji te svaki tjedan koštaju sate — osobno, lokalno i bez da moraš razumjeti tehniku.",
    servicesHeading: "Što gradimo za tvrtke iz Stuttgarta",
    services: [
      { title: "AI automatizacija", text: "Ponude, računi, izvještaji i unos podataka rade se automatski — 5–15 sati tjedno vraćeno, bez novih zaposlenika." },
      { title: "AI chatbotovi", text: "Digitalni asistent 0-24 odgovara na upite klijenata, zakazuje termine i kvalificira leadove — čak i poslije radnog vremena." },
      { title: "Softver po mjeri", text: "Mali alati koji točno pristaju tvom poslu — umjesto skupih standardnih rješenja koja nikad u potpunosti ne koristiš." },
    ],
    whyHeading: "Zašto AI agencija iz regije",
    why: [
      { title: "Iz Stuttgarta, za Stuttgart", text: "Poznajemo tvrtke ovdje — obrt, uslužne djelatnosti, ugostiteljstvo, ordinacije. Ne anonimni pozivni centar, nego osoba za kontakt iz regije." },
      { title: "Osobno dostupni", text: "Sastanak uživo u Stuttgartu i okolici ili preko videa — kako tebi odgovara. Uvijek razgovaraš izravno s osobom koja gradi tvoj sustav." },
      { title: "Brzo live", text: "Prva automatizacija obično radi za 1–2 tjedna. Ne mjesecima dugačak projekt, nego rezultat koji odmah osjetiš." },
    ],
    regionHeading: "U Stuttgartu i okolici",
    regionText: "Brinemo se o tvrtkama u cijelom Stuttgartu i regiji — među ostalim u:",
    faqHeading: "Česta pitanja",
    faq: [
      { question: "Radi li Axivore samo u Stuttgartu?", answer: "Naše je sjedište u Stuttgartu i brinemo se o tvrtkama u Stuttgartu i cijeloj regiji — od Esslingena preko Ludwigsburga do Böblingena. Sastanci uživo u regiji su bez problema mogući, ostalo ide udobno digitalno." },
      { question: "Za koje se tvrtke ovo isplati?", answer: "Za male i srednje tvrtke s 5–30 zaposlenih koje gube vrijeme na ponavljajućim zadacima — obrt, uslužne djelatnosti, agencije, ugostiteljstvo, ordinacije. Baš male tvrtke imaju najviše koristi, jer svaki ušteđeni sat izravno vrijedi." },
      { question: "Koliko košta AI automatizacija?", answer: "Ovisi o opsegu. Na besplatnom prvom razgovoru pogledamo tvoj zadatak koji ti oduzima vrijeme i iskreno ti kažemo koliko košta i isplati li se trud — bez obveze." },
      { question: "Moram li biti tehnički potkovan?", answer: "Ne. Ti opišeš zadatak običnim jezikom, mi gradimo ostalo. Korištenje je nakon toga jednostavno kao slanje e-maila." },
    ],
    ctaHeading: "Razgovarajmo o tvom poslu.",
    ctaText: "Besplatan prvi razgovor — uživo u Stuttgartu ili preko videa. Pokazat ćemo ti koji se zadatak kod tebe prvo isplati automatizirati.",
    ctaButton: "Zakaži besplatan razgovor",
    start: "Početna",
    localBusinessDescription: "AI agencija iz Stuttgarta za AI automatizacije, chatbotove i softver po mjeri za male i srednje tvrtke u Stuttgartu i okolici.",
  },
  en: {
    metaTitle: "AI Agency Stuttgart — AI Automation for SMEs | Axivore",
    metaDescription: "Axivore is your AI agency from Stuttgart: AI automations, chatbots and custom software for small and medium businesses in Stuttgart and the region. Live in 1–2 weeks.",
    ogDescription: "AI automations, chatbots and software for small businesses in Stuttgart and the surrounding area. Personal, local, honest.",
    eyebrow: "AI Agency · Stuttgart",
    h1: "AI agency from Stuttgart for small businesses.",
    subheadline: "Axivore builds AI automations, intelligent chatbots and custom software for small and medium businesses in Stuttgart and the region. We take the tasks off your hands that cost hours every week — personal, local, with no need to understand the technology.",
    servicesHeading: "What we build for Stuttgart businesses",
    services: [
      { title: "AI automation", text: "Quotes, invoices, reports and data entry run automatically — 5–15 hours a week reclaimed, with no new hires." },
      { title: "AI chatbots", text: "A digital assistant answers customer inquiries around the clock, books appointments and qualifies leads — even after hours." },
      { title: "Custom software", text: "Small tools that fit your business exactly — instead of expensive off-the-shelf solutions you never fully use." },
    ],
    whyHeading: "Why an AI agency from the region",
    why: [
      { title: "From Stuttgart, for Stuttgart", text: "We know the businesses here — trades, services, hospitality, practices. Not an anonymous call center, but a contact person from the region." },
      { title: "Personally reachable", text: "In-person meeting in Stuttgart and the surrounding area or via video — whichever suits you. You always talk directly to the person building your system." },
      { title: "Live fast", text: "The first automation usually runs within 1–2 weeks. Not a months-long project, but a result you feel immediately." },
    ],
    regionHeading: "In Stuttgart and the surrounding area",
    regionText: "We support businesses across Stuttgart and the region — including in:",
    faqHeading: "Frequently asked questions",
    faq: [
      { question: "Does Axivore only work in Stuttgart?", answer: "We're based in Stuttgart and support businesses in Stuttgart and the entire region — from Esslingen to Ludwigsburg to Böblingen. In-person meetings are easily possible across the region, everything else runs comfortably online." },
      { question: "Which businesses is this worth it for?", answer: "For small and medium businesses with 5–30 employees that lose time on recurring tasks — trades, services, agencies, hospitality, practices. Small businesses in particular benefit the most, because every hour saved counts directly." },
      { question: "What does AI automation cost?", answer: "It depends on the scope. In the free initial call, we'll look at your time-consuming task and tell you honestly what it costs and whether it's worth the effort — with no obligation." },
      { question: "Do I need to be technical?", answer: "No. You describe the task in plain language, we build the rest. Using it afterwards is as simple as sending an email." },
    ],
    ctaHeading: "Let's talk about your business.",
    ctaText: "Free initial call — in person in Stuttgart or via video. We'll show you which task is worth automating first for you.",
    ctaButton: "Book a free call",
    start: "Home",
    localBusinessDescription: "AI agency from Stuttgart for AI automations, chatbots and custom software for small and medium businesses in Stuttgart and the region.",
  },
  ro: {
    metaTitle: "Agenție AI Stuttgart — Automatizare AI pentru IMM-uri | Axivore",
    metaDescription: "Axivore este agenția ta AI din Stuttgart: automatizări AI, chatbot-uri și software personalizat pentru firme mici și mijlocii din Stuttgart și regiune. Live în 1–2 săptămâni.",
    ogDescription: "Automatizări AI, chatbot-uri și software pentru firme mici din Stuttgart și împrejurimi. Personal, local, sincer.",
    eyebrow: "Agenție AI · Stuttgart",
    h1: "Agenție AI din Stuttgart pentru firme mici.",
    subheadline: "Axivore construiește automatizări AI, chatbot-uri inteligente și software personalizat pentru firme mici și mijlocii din Stuttgart și regiune. Preluăm sarcinile care costă ore în fiecare săptămână — personal, local, fără să fie nevoie să înțelegi tehnologia.",
    servicesHeading: "Ce construim pentru firmele din Stuttgart",
    services: [
      { title: "Automatizare AI", text: "Oferte, facturi, rapoarte și introducerea datelor funcționează automat — 5–15 ore pe săptămână recuperate, fără angajați noi." },
      { title: "Chatbot-uri AI", text: "Un asistent digital răspunde la cererile clienților non-stop, programează întâlniri și califică lead-uri — chiar și după program." },
      { title: "Software personalizat", text: "Instrumente mici care se potrivesc exact firmei tale — în loc de soluții standard scumpe pe care nu le folosești niciodată complet." },
    ],
    whyHeading: "De ce o agenție AI din regiune",
    why: [
      { title: "Din Stuttgart, pentru Stuttgart", text: "Cunoaștem firmele de aici — meșteșugari, servicii, ospitalitate, cabinete. Nu un call center anonim, ci o persoană de contact din regiune." },
      { title: "Accesibili personal", text: "Întâlnire în persoană în Stuttgart și împrejurimi sau prin video — cum ți se potrivește. Vorbești mereu direct cu persoana care construiește sistemul tău." },
      { title: "Live rapid", text: "Prima automatizare funcționează de obicei în 1–2 săptămâni. Nu un proiect de luni de zile, ci un rezultat pe care îl simți imediat." },
    ],
    regionHeading: "În Stuttgart și împrejurimi",
    regionText: "Susținem firme în tot Stuttgart-ul și regiunea — printre altele în:",
    faqHeading: "Întrebări frecvente",
    faq: [
      { question: "Axivore lucrează doar în Stuttgart?", answer: "Sediul nostru este în Stuttgart și susținem firme în Stuttgart și în întreaga regiune — de la Esslingen prin Ludwigsburg până la Böblingen. Întâlnirile în persoană sunt posibile fără probleme în regiune, restul se desfășoară confortabil digital." },
      { question: "Pentru ce firme merită asta?", answer: "Pentru firme mici și mijlocii cu 5–30 de angajați care pierd timp pe sarcini recurente — meșteșugari, servicii, agenții, ospitalitate, cabinete. Firmele mici beneficiază cel mai mult, pentru că fiecare oră economisită contează direct." },
      { question: "Cât costă o automatizare AI?", answer: "Depinde de amploare. La prima discuție gratuită analizăm sarcina care îți consumă timp și îți spunem sincer cât costă și dacă merită efortul — fără obligații." },
      { question: "Trebuie să fiu tehnic?", answer: "Nu. Descrii sarcina în limbaj obișnuit, noi construim restul. Utilizarea ulterioară este la fel de simplă ca trimiterea unui e-mail." },
    ],
    ctaHeading: "Hai să vorbim despre firma ta.",
    ctaText: "Discuție inițială gratuită — în persoană în Stuttgart sau prin video. Îți arătăm care sarcină merită automatizată prima pentru tine.",
    ctaButton: "Programează o discuție gratuită",
    start: "Acasă",
    localBusinessDescription: "Agenție AI din Stuttgart pentru automatizări AI, chatbot-uri și software personalizat pentru firme mici și mijlocii din Stuttgart și regiune.",
  },
  tr: {
    metaTitle: "Stuttgart AI Ajansı — KOBİ'ler için AI Otomasyonu | Axivore",
    metaDescription: "Axivore, Stuttgart'tan AI ajansındır: Stuttgart ve çevresindeki küçük ve orta ölçekli işletmeler için AI otomasyonları, chatbotlar ve özel yazılım. 1-2 hafta içinde canlı.",
    ogDescription: "Stuttgart ve çevresindeki küçük işletmeler için AI otomasyonları, chatbotlar ve yazılım. Kişisel, yerel, dürüst.",
    eyebrow: "AI Ajansı · Stuttgart",
    h1: "Küçük işletmeler için Stuttgart'tan AI ajansı.",
    subheadline: "Axivore, Stuttgart ve çevresindeki küçük ve orta ölçekli işletmeler için AI otomasyonları, akıllı chatbotlar ve özel yazılım kurar. Her hafta saatler alan görevleri senden alırız — kişisel, yerel ve teknolojiyi anlaman gerekmeden.",
    servicesHeading: "Stuttgartlı işletmeler için neler kuruyoruz",
    services: [
      { title: "AI Otomasyonu", text: "Teklifler, faturalar, raporlar ve veri girişi otomatik olarak yürür — haftada 5-15 saat geri kazanılır, yeni işe alım olmadan." },
      { title: "AI Chatbotlar", text: "Bir dijital asistan müşteri taleplerini 7/24 yanıtlar, randevu alır ve lead'leri niteler — mesai sonrasında bile." },
      { title: "Özel yazılım", text: "Tam olarak asla kullanmadığın pahalı hazır çözümler yerine, işletmene tam olarak uyan küçük araçlar." },
    ],
    whyHeading: "Neden bölgeden bir AI ajansı",
    why: [
      { title: "Stuttgart'tan, Stuttgart için", text: "Buradaki işletmeleri tanırız — zanaatkârlar, hizmet sağlayıcılar, gastronomi, muayenehaneler. Anonim bir çağrı merkezi değil, bölgeden bir muhatap." },
      { title: "Kişisel olarak ulaşılabilir", text: "Stuttgart ve çevresinde yüz yüze randevu ya da video üzerinden — sana uyan şekilde. Her zaman sistemini kuran kişiyle doğrudan konuşursun." },
      { title: "Hızlı canlı", text: "İlk otomasyon genellikle 1-2 hafta içinde çalışır. Aylarca süren bir proje değil, anında hissettiğin bir sonuç." },
    ],
    regionHeading: "Stuttgart ve çevresinde",
    regionText: "Stuttgart ve bölgenin tamamındaki işletmelere hizmet veriyoruz — bunlar arasında:",
    faqHeading: "Sık sorulan sorular",
    faq: [
      { question: "Axivore sadece Stuttgart'ta mı çalışıyor?", answer: "Merkezimiz Stuttgart'ta ve Esslingen'den Ludwigsburg'a, Böblingen'e kadar Stuttgart ve tüm bölgedeki işletmelere hizmet veriyoruz. Bölgede yüz yüze randevular sorunsuzca mümkün, gerisi rahatça dijital olarak yürüyor." },
      { question: "Bu hangi işletmeler için değer?", answer: "Tekrarlayan görevlere zaman kaybeden 5-30 çalışanlı küçük ve orta ölçekli işletmeler için — zanaatkârlar, hizmetler, ajanslar, gastronomi, muayenehaneler. Özellikle küçük işletmeler en çok fayda sağlar, çünkü tasarruf edilen her saat doğrudan değer katar." },
      { question: "Bir AI otomasyonu ne kadara mal olur?", answer: "Bu kapsama bağlıdır. Ücretsiz ilk görüşmede zamanını alan göreve bakarız ve sana dürüstçe ne kadara mal olacağını ve çabaya değip değmeyeceğini söyleriz — hiçbir yükümlülük olmadan." },
      { question: "Teknik bilgim olması gerekir mi?", answer: "Hayır. Görevi sade bir dille anlatırsın, gerisini biz kurarız. Kullanımı sonrasında bir e-posta göndermek kadar basittir." },
    ],
    ctaHeading: "İşletmen hakkında konuşalım.",
    ctaText: "Ücretsiz ilk görüşme — Stuttgart'ta yüz yüze ya da video üzerinden. Sana hangi görevin önce otomatikleştirilmeye değer olduğunu gösteririz.",
    ctaButton: "Ücretsiz görüşme ayarla",
    start: "Ana Sayfa",
    localBusinessDescription: "Stuttgart ve çevresindeki küçük ve orta ölçekli işletmeler için AI otomasyonları, chatbotlar ve özel yazılım sunan Stuttgart'tan bir AI ajansı.",
  },
  it: {
    metaTitle: "Agenzia AI Stoccarda — Automazione AI per PMI | Axivore",
    metaDescription: "Axivore è la tua agenzia AI di Stoccarda: automazioni AI, chatbot e software su misura per piccole e medie imprese a Stoccarda e nella regione. Attivo in 1–2 settimane.",
    ogDescription: "Automazioni AI, chatbot e software per piccole imprese a Stoccarda e dintorni. Personale, locale, onesto.",
    eyebrow: "Agenzia AI · Stoccarda",
    h1: "Agenzia AI di Stoccarda per piccole imprese.",
    subheadline: "Axivore costruisce automazioni AI, chatbot intelligenti e software su misura per piccole e medie imprese a Stoccarda e nella regione. Ti togliamo i compiti che costano ore ogni settimana — personale, locale e senza dover capire la tecnologia.",
    servicesHeading: "Cosa costruiamo per le aziende di Stoccarda",
    services: [
      { title: "Automazione AI", text: "Preventivi, fatture, report e inserimento dati funzionano automaticamente — 5–15 ore a settimana recuperate, senza nuove assunzioni." },
      { title: "Chatbot AI", text: "Un assistente digitale risponde alle richieste dei clienti 24/7, prenota appuntamenti e qualifica i lead — anche dopo l'orario di lavoro." },
      { title: "Software su misura", text: "Piccoli strumenti che si adattano esattamente alla tua attività — invece di costose soluzioni standard che non usi mai completamente." },
    ],
    whyHeading: "Perché un'agenzia AI della regione",
    why: [
      { title: "Da Stoccarda, per Stoccarda", text: "Conosciamo le aziende qui — artigiani, fornitori di servizi, ristorazione, studi medici. Non un call center anonimo, ma un referente della regione." },
      { title: "Raggiungibili personalmente", text: "Appuntamento di persona a Stoccarda e dintorni o via video — come preferisci. Parli sempre direttamente con la persona che costruisce il tuo sistema." },
      { title: "Attivo velocemente", text: "La prima automazione di solito funziona in 1–2 settimane. Non un progetto di mesi, ma un risultato che senti subito." },
    ],
    regionHeading: "A Stoccarda e dintorni",
    regionText: "Seguiamo aziende in tutta Stoccarda e nella regione — tra le altre in:",
    faqHeading: "Domande frequenti",
    faq: [
      { question: "Axivore lavora solo a Stoccarda?", answer: "La nostra sede è a Stoccarda e seguiamo aziende a Stoccarda e in tutta la regione — da Esslingen a Ludwigsburg fino a Böblingen. Gli appuntamenti di persona nella regione sono possibili senza problemi, il resto funziona comodamente online." },
      { question: "Per quali aziende conviene?", answer: "Per piccole e medie imprese con 5–30 dipendenti che perdono tempo con compiti ricorrenti — artigiani, fornitori di servizi, agenzie, ristorazione, studi medici. Sono proprio le piccole imprese a trarne il massimo beneficio, perché ogni ora risparmiata conta direttamente." },
      { question: "Quanto costa un'automazione AI?", answer: "Dipende dall'ambito. Nel primo colloquio gratuito guardiamo il tuo compito che ti fa perdere tempo e ti diciamo onestamente quanto costa e se ne vale la pena — senza impegno." },
      { question: "Devo essere tecnico?", answer: "No. Descrivi il compito in linguaggio semplice, noi costruiamo il resto. L'uso è poi semplice come inviare un'e-mail." },
    ],
    ctaHeading: "Parliamo della tua attività.",
    ctaText: "Primo colloquio gratuito — di persona a Stoccarda o via video. Ti mostriamo quale compito conviene automatizzare prima per te.",
    ctaButton: "Prenota un colloquio gratuito",
    start: "Home",
    localBusinessDescription: "Agenzia AI di Stoccarda per automazioni AI, chatbot e software su misura per piccole e medie imprese a Stoccarda e nella regione.",
  },
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const contentLocale = resolveContentLocale(rawLocale, AVAILABLE);
  return partialPageMetadata(
    contentLocale,
    PATH,
    { de: { title: CONTENT.de.metaTitle, description: CONTENT.de.metaDescription }, hr: { title: CONTENT.hr.metaTitle, description: CONTENT.hr.metaDescription }, en: { title: CONTENT.en.metaTitle, description: CONTENT.en.metaDescription }, ro: { title: CONTENT.ro.metaTitle, description: CONTENT.ro.metaDescription }, tr: { title: CONTENT.tr.metaTitle, description: CONTENT.tr.metaDescription }, it: { title: CONTENT.it.metaTitle, description: CONTENT.it.metaDescription } },
    AVAILABLE
  );
}

export default async function KiAgenturStuttgartPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  const contentLocale = resolveContentLocale(rawLocale, AVAILABLE);
  const c = CONTENT[contentLocale as "de" | "hr" | "en" | "ro" | "tr" | "it"];
  const pageUrl = `https://axivore.io${localePathname(contentLocale, PATH)}`;
  const siteUrl = `https://axivore.io${localePathname(contentLocale, "")}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["LocalBusiness", "ProfessionalService"],
        "@id": `${pageUrl}/#localbusiness`,
        name: `Axivore — ${c.eyebrow.replace(" · ", " ")}`,
        url: pageUrl,
        logo: "https://axivore.io/icon.png",
        image: "https://axivore.io/opengraph-image",
        description: c.localBusinessDescription,
        email: "hello@axivore.io",
        priceRange: "€€",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Rotweg 172",
          postalCode: "70437",
          addressLocality: "Stuttgart",
          addressRegion: "Baden-Württemberg",
          addressCountry: "DE",
        },
        geo: { "@type": "GeoCoordinates", latitude: 48.8313, longitude: 9.1665 },
        areaServed: region.map((name) => ({ "@type": "City", name })),
        provider: { "@id": "https://axivore.io/#organization" },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: c.start, item: siteUrl },
          { "@type": "ListItem", position: 2, name: c.eyebrow, item: pageUrl },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: c.faq.map((i) => ({
          "@type": "Question",
          name: i.question,
          acceptedAnswer: { "@type": "Answer", text: i.answer },
        })),
      },
    ],
  };

  return (
    <ServiceShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <section className="max-w-3xl mx-auto px-6 pt-20 pb-10">
        <p className="text-[11px] tracking-[0.2em] uppercase text-[#A09AFF] mb-5">{c.eyebrow}</p>
        <h1 className="font-black tracking-[-0.03em] leading-[1.04] mb-6" style={{ fontSize: "clamp(36px,5.5vw,60px)" }}>
          {c.h1}
        </h1>
        <p className="text-[17px] leading-relaxed text-white/60">{c.subheadline}</p>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-10">
        <h2 className="text-[24px] font-bold mb-7">{c.servicesHeading}</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {c.services.map((s) => (
            <div key={s.title} className="rounded-xl p-5" style={{ background: "rgba(255,255,255,0.028)", border: "1px solid rgba(255,255,255,0.07)" }}>
              <h3 className="text-[16px] font-semibold mb-2">{s.title}</h3>
              <p className="text-[13.5px] leading-relaxed text-white/50">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-10">
        <h2 className="text-[24px] font-bold mb-7">{c.whyHeading}</h2>
        <div className="space-y-5">
          {c.why.map((w) => (
            <div key={w.title} className="flex gap-5">
              <span className="text-[#7C5CFF] font-black text-[20px] shrink-0">›</span>
              <div>
                <h3 className="text-[16px] font-semibold mb-1">{w.title}</h3>
                <p className="text-[14px] leading-relaxed text-white/50">{w.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-10">
        <h2 className="text-[24px] font-bold mb-5">{c.regionHeading}</h2>
        <p className="text-[14px] leading-relaxed text-white/50 mb-6">{c.regionText}</p>
        <div className="flex flex-wrap gap-2.5">
          {region.map((city) => (
            <span key={city} className="text-[13px] px-3.5 py-1.5 rounded-full" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.6)" }}>
              {city}
            </span>
          ))}
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-10">
        <h2 className="text-[24px] font-bold mb-7">{c.faqHeading}</h2>
        <div className="space-y-6">
          {c.faq.map((f) => (
            <div key={f.question}>
              <h3 className="text-[15px] font-semibold mb-1.5">{f.question}</h3>
              <p className="text-[14px] leading-relaxed text-white/50">{f.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-12">
        <div className="rounded-2xl px-8 py-11 text-center" style={{ background: "linear-gradient(135deg,rgba(124,92,255,0.12),rgba(160,154,255,0.05))", border: "1px solid rgba(124,92,255,0.2)" }}>
          <h2 className="text-[24px] font-bold mb-3">{c.ctaHeading}</h2>
          <p className="text-white/55 mb-8 max-w-lg mx-auto">{c.ctaText}</p>
          <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="inline-block font-semibold px-7 py-3.5 rounded-full transition-transform hover:scale-[1.03]" style={{ background: "linear-gradient(135deg,#7C5CFF,#A09AFF)", color: "#0C0C0F" }}>
            {c.ctaButton}
          </a>
        </div>
      </section>
    </ServiceShell>
  );
}
