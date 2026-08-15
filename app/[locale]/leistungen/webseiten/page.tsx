import type { Metadata } from "next";
import Link from "next/link";
import { ServiceShell, CALENDLY_URL } from "@/components/ServiceShell";
import { resolveContentLocale, partialPageMetadata, localePathname, type AppLocale } from "@/lib/seo";

const AVAILABLE: readonly AppLocale[] = ["de", "hr", "en", "ro", "tr", "it"];
const PATH = "/leistungen/webseiten";

type Item = { title: string; text: string };
type Step = { n: string; title: string; text: string };
type Faq = { question: string; answer: string };

const CONTENT: Record<"de" | "hr" | "en" | "ro" | "tr" | "it", {
  metaTitle: string; metaDescription: string; ogDescription: string;
  breadcrumb: string; serviceName: string; eyebrow: string; h1: string; subheadline: string;
  featuresHeading: string; features: Item[];
  stepsHeading: string; steps: Step[];
  faqHeading: string; faq: Faq[];
  crossLinkText: string; chatbotsLabel: string; ratgeberLabel: string;
  ctaHeading: string; ctaText: string; ctaButton: string;
  start: string; leistungenLabel: string;
}> = {
  de: {
    metaTitle: "Webseite erstellen lassen — moderne Websites für kleine Unternehmen | Axivore",
    metaDescription: "Axivore baut moderne, schnelle Websites, die aus Besuchern Kunden machen — auf Wunsch mit KI-Assistent für Terminbuchung und Kundenanfragen. Festpreis, live in 1–3 Wochen.",
    ogDescription: "Moderne, schnelle Websites, die aus Besuchern Kunden machen — mit optionalem KI-Assistenten. Festpreis, live in 1–3 Wochen.",
    breadcrumb: "Webseiten",
    serviceName: "Webseiten & Landingpages",
    eyebrow: "Leistungen / Websites",
    h1: "Websites, die nicht nur gut aussehen.",
    subheadline: "Eine moderne Website ist mehr als eine digitale Visitenkarte. Wir bauen Seiten, die Besucher zu Kunden machen — schnell, mobil, in Google gefunden — und auf Wunsch mit einem KI-Assistenten, der Termine bucht und Fragen beantwortet, auch nach Feierabend.",
    featuresHeading: "Was du bekommst",
    features: [
      { title: "Professioneller Auftritt", text: "Ein Design, das Vertrauen schafft und zu deinem Betrieb passt — nicht von der Stange, sondern auf dich zugeschnitten." },
      { title: "Schnell & mobil", text: "Deine Seite lädt in Sekunden und sieht auf dem Handy genauso gut aus wie am Rechner — dort, wo die meisten Kunden dich finden." },
      { title: "Lokal gefunden werden", text: "Sauber aufgebaut für Google, damit dich Kunden aus deiner Region finden, wenn sie nach deiner Leistung suchen." },
      { title: "KI-Assistent (optional)", text: "Auf Wunsch bauen wir einen Assistenten ein, der Fragen beantwortet und Termine bucht — deine Website arbeitet dann auch nachts." },
      { title: "Termine & Anfragen", text: "Kontaktformular, Terminbuchung oder WhatsApp — Besucher werden direkt zu Anfragen, ohne Umwege." },
      { title: "Pflegeleicht", text: "Du kannst Inhalte selbst ändern oder wir übernehmen die Pflege — wie es dir lieber ist." },
    ],
    stepsHeading: "So läuft es ab",
    steps: [
      { n: "01", title: "Gespräch & Konzept", text: "Wir klären, was deine Website leisten soll und wer deine Kunden sind. Danach bekommst du ein Festpreis-Angebot." },
      { n: "02", title: "Design & Aufbau", text: "Wir gestalten und bauen die Seite — mit deinen Inhalten, deinem Logo, deiner Sprache. Du siehst Zwischenstände und gibst Feedback." },
      { n: "03", title: "Live & Betreuung", text: "Die Seite geht live, wir kümmern uns um Technik und Hosting. Auf Wunsch mit laufender Pflege." },
    ],
    faqHeading: "Häufige Fragen",
    faq: [
      { question: "Was kostet eine Website bei Axivore?", answer: "Das hängt vom Umfang ab. Du bekommst vorab ein schriftliches Festpreis-Angebot — danach ändert sich der Preis nicht mehr. Eine klassische Unternehmensseite startet im niedrigen vierstelligen Bereich, kleinere Landingpages darunter." },
      { question: "Wie lange dauert es, bis meine Website live ist?", answer: "Meist 1 bis 3 Wochen, je nach Umfang und wie schnell wir deine Inhalte (Texte, Bilder) bekommen. Wir sagen dir vorab einen realistischen Termin." },
      { question: "Kann ich die Inhalte später selbst ändern?", answer: "Ja. Wir bauen die Seite so, dass du Texte und Bilder selbst pflegen kannst — oder wir übernehmen die Pflege für dich. Ganz wie du möchtest." },
      { question: "Macht ihr auch Suchmaschinenoptimierung (SEO)?", answer: "Jede Website bauen wir technisch sauber für Google auf. Auf Wunsch kümmern wir uns darüber hinaus um lokales SEO, damit dich Kunden aus deiner Region besser finden." },
    ],
    crossLinkText: "Passt eine Website mit KI-Assistent zu deinem Betrieb? Schau dir auch unsere {CHATBOTS} an oder wirf einen Blick in den {RATGEBER}.",
    chatbotsLabel: "KI-Chatbots",
    ratgeberLabel: "Ratgeber",
    ctaHeading: "Bereit für eine Website, die arbeitet?",
    ctaText: "In einem kostenlosen 30-Minuten-Gespräch schauen wir, was deine Website leisten soll — und du bekommst danach ein Festpreis-Angebot. Kein Pitch.",
    ctaButton: "Kostenloses Gespräch buchen",
    start: "Start",
    leistungenLabel: "Leistungen",
  },
  hr: {
    metaTitle: "Izrada web stranice — moderne web stranice za male tvrtke | Axivore",
    metaDescription: "Axivore gradi moderne, brze web stranice koje od posjetitelja stvaraju klijente — po želji s AI asistentom za zakazivanje termina i upite klijenata. Fiksna cijena, live za 1–3 tjedna.",
    ogDescription: "Moderne, brze web stranice koje od posjetitelja stvaraju klijente — s opcionalnim AI asistentom. Fiksna cijena, live za 1–3 tjedna.",
    breadcrumb: "Web stranice",
    serviceName: "Web stranice i landing stranice",
    eyebrow: "Usluge / Web stranice",
    h1: "Web stranice koje ne samo da dobro izgledaju.",
    subheadline: "Moderna web stranica je više od digitalne posjetnice. Gradimo stranice koje pretvaraju posjetitelje u klijente — brze, prilagođene mobitelu, pronađene na Googleu — i po želji s AI asistentom koji zakazuje termine i odgovara na pitanja, čak i poslije radnog vremena.",
    featuresHeading: "Što dobivaš",
    features: [
      { title: "Profesionalan izgled", text: "Dizajn koji stvara povjerenje i pristaje tvom poslu — ne s police, nego skrojen za tebe." },
      { title: "Brzo i prilagođeno mobitelu", text: "Tvoja stranica učitava se u sekundama i na mobitelu izgleda jednako dobro kao na računalu — tamo gdje te većina klijenata i pronalazi." },
      { title: "Pronalaženje u lokalnoj pretrazi", text: "Uredno izgrađena za Google, da te klijenti iz tvoje regije pronađu kad traže tvoju uslugu." },
      { title: "AI asistent (opcionalno)", text: "Po želji ugrađujemo asistenta koji odgovara na pitanja i zakazuje termine — tvoja web stranica onda radi i noću." },
      { title: "Termini i upiti", text: "Kontakt forma, zakazivanje termina ili WhatsApp — posjetitelji odmah postaju upiti, bez zaobilaznih puteva." },
      { title: "Jednostavno održavanje", text: "Sadržaj možeš sam mijenjati ili mi preuzimamo održavanje — kako tebi više odgovara." },
    ],
    stepsHeading: "Kako to izgleda",
    steps: [
      { n: "01", title: "Razgovor i koncept", text: "Razjasnimo što tvoja web stranica treba postići i tko su tvoji klijenti. Nakon toga dobivaš ponudu s fiksnom cijenom." },
      { n: "02", title: "Dizajn i izrada", text: "Oblikujemo i gradimo stranicu — s tvojim sadržajem, logom, tvojim jezikom. Vidiš međukorake i daješ feedback." },
      { n: "03", title: "Live i podrška", text: "Stranica ide live, mi se brinemo o tehnici i hostingu. Po želji uz stalno održavanje." },
    ],
    faqHeading: "Česta pitanja",
    faq: [
      { question: "Koliko košta web stranica kod Axivorea?", answer: "Ovisi o opsegu. Unaprijed dobivaš pisanu ponudu s fiksnom cijenom — poslije se cijena više ne mijenja. Klasična poslovna stranica kreće u niskom četveroznamenkastom rasponu, manje landing stranice ispod toga." },
      { question: "Koliko traje dok moja web stranica ne bude live?", answer: "Obično 1 do 3 tjedna, ovisno o opsegu i koliko brzo dobijemo tvoj sadržaj (tekstove, slike). Unaprijed ti kažemo realan rok." },
      { question: "Mogu li kasnije sam mijenjati sadržaj?", answer: "Da. Stranicu gradimo tako da tekstove i slike možeš sam održavati — ili mi preuzimamo održavanje za tebe. Potpuno kako želiš." },
      { question: "Radite li i optimizaciju za tražilice (SEO)?", answer: "Svaku web stranicu tehnički uredno gradimo za Google. Po želji se dodatno brinemo o lokalnom SEO-u, da te klijenti iz tvoje regije bolje pronađu." },
    ],
    crossLinkText: "Pristaje li web stranica s AI asistentom tvom poslu? Pogledaj i naše {CHATBOTS} ili baci pogled u {RATGEBER}.",
    chatbotsLabel: "AI chatbotove",
    ratgeberLabel: "Vodič",
    ctaHeading: "Spreman za web stranicu koja radi?",
    ctaText: "Na besplatnom 30-minutnom razgovoru pogledamo što tvoja web stranica treba postići — i nakon toga dobivaš ponudu s fiksnom cijenom. Bez pitcha.",
    ctaButton: "Zakaži besplatan razgovor",
    start: "Početna",
    leistungenLabel: "Usluge",
  },
  en: {
    metaTitle: "Website Design & Development — Modern Websites for Small Businesses | Axivore",
    metaDescription: "Axivore builds modern, fast websites that turn visitors into customers — with an optional AI assistant for booking and customer inquiries. Fixed price, live in 1–3 weeks.",
    ogDescription: "Modern, fast websites that turn visitors into customers — with an optional AI assistant. Fixed price, live in 1–3 weeks.",
    breadcrumb: "Websites",
    serviceName: "Websites & Landing Pages",
    eyebrow: "Services / Websites",
    h1: "Websites that don't just look good.",
    subheadline: "A modern website is more than a digital business card. We build sites that turn visitors into customers — fast, mobile, found on Google — and on request with an AI assistant that books appointments and answers questions, even after hours.",
    featuresHeading: "What you get",
    features: [
      { title: "Professional appearance", text: "A design that builds trust and fits your business — not off the shelf, but tailored to you." },
      { title: "Fast & mobile", text: "Your site loads in seconds and looks just as good on a phone as on a computer — where most customers find you." },
      { title: "Found locally", text: "Built cleanly for Google, so customers in your region find you when they search for your service." },
      { title: "AI assistant (optional)", text: "On request we build in an assistant that answers questions and books appointments — your website then works at night too." },
      { title: "Appointments & inquiries", text: "Contact form, appointment booking or WhatsApp — visitors become inquiries directly, with no detours." },
      { title: "Easy to maintain", text: "You can change content yourself or we take care of maintenance — whichever you prefer." },
    ],
    stepsHeading: "How it works",
    steps: [
      { n: "01", title: "Conversation & concept", text: "We clarify what your website needs to achieve and who your customers are. Then you get a fixed-price quote." },
      { n: "02", title: "Design & build", text: "We design and build the site — with your content, your logo, your voice. You see interim versions and give feedback." },
      { n: "03", title: "Live & support", text: "The site goes live, we take care of tech and hosting. On request with ongoing maintenance." },
    ],
    faqHeading: "Frequently asked questions",
    faq: [
      { question: "What does a website from Axivore cost?", answer: "It depends on scope. You get a written fixed-price quote upfront — the price doesn't change after that. A classic business site starts in the low four figures, smaller landing pages below that." },
      { question: "How long until my website is live?", answer: "Usually 1 to 3 weeks, depending on scope and how quickly we get your content (text, images). We give you a realistic date upfront." },
      { question: "Can I change the content myself later?", answer: "Yes. We build the site so you can maintain text and images yourself — or we take care of maintenance for you. Whichever you prefer." },
      { question: "Do you also do search engine optimization (SEO)?", answer: "We build every website technically clean for Google. On request we also handle local SEO, so customers in your region find you better." },
    ],
    crossLinkText: "Does a website with an AI assistant fit your business? Also check out our {CHATBOTS} or take a look at our {RATGEBER}.",
    chatbotsLabel: "AI Chatbots",
    ratgeberLabel: "Guide",
    ctaHeading: "Ready for a website that works?",
    ctaText: "In a free 30-minute call, we'll look at what your website needs to achieve — and afterwards you'll get a fixed-price quote. No pitch.",
    ctaButton: "Book a free call",
    start: "Home",
    leistungenLabel: "Services",
  },
  ro: {
    metaTitle: "Design și dezvoltare de site-uri web — site-uri moderne pentru firme mici | Axivore",
    metaDescription: "Axivore construiește site-uri web moderne, rapide, care transformă vizitatorii în clienți — cu un asistent AI opțional pentru programări și cereri. Preț fix, live în 1–3 săptămâni.",
    ogDescription: "Site-uri web moderne, rapide, care transformă vizitatorii în clienți — cu un asistent AI opțional. Preț fix, live în 1–3 săptămâni.",
    breadcrumb: "Site-uri web",
    serviceName: "Site-uri web și pagini de destinație",
    eyebrow: "Servicii / Site-uri web",
    h1: "Site-uri web care nu doar arată bine.",
    subheadline: "Un site web modern este mai mult decât o carte de vizită digitală. Construim site-uri care transformă vizitatorii în clienți — rapide, adaptate mobilului, găsite pe Google — și, la cerere, cu un asistent AI care programează întâlniri și răspunde la întrebări, chiar și după program.",
    featuresHeading: "Ce primești",
    features: [
      { title: "Aspect profesional", text: "Un design care inspiră încredere și se potrivește firmei tale — nu de serie, ci personalizat pentru tine." },
      { title: "Rapid și adaptat mobilului", text: "Site-ul tău se încarcă în secunde și arată la fel de bine pe telefon ca pe calculator — acolo unde majoritatea clienților te găsesc." },
      { title: "Găsit local", text: "Construit corect pentru Google, ca să te găsească clienții din regiunea ta când caută serviciul tău." },
      { title: "Asistent AI (opțional)", text: "La cerere, integrăm un asistent care răspunde la întrebări și programează întâlniri — site-ul tău lucrează atunci și noaptea." },
      { title: "Programări și cereri", text: "Formular de contact, programare online sau WhatsApp — vizitatorii devin direct cereri, fără ocolișuri." },
      { title: "Ușor de întreținut", text: "Poți modifica singur conținutul sau preluăm noi întreținerea — cum preferi." },
    ],
    stepsHeading: "Cum funcționează",
    steps: [
      { n: "01", title: "Discuție și concept", text: "Clarificăm ce trebuie să realizeze site-ul tău și cine sunt clienții tăi. Apoi primești o ofertă cu preț fix." },
      { n: "02", title: "Design și construire", text: "Proiectăm și construim site-ul — cu conținutul, logo-ul, tonul tău. Vezi etape intermediare și oferi feedback." },
      { n: "03", title: "Lansare și întreținere", text: "Site-ul este lansat, ne ocupăm de tehnologie și hosting. La cerere, cu întreținere continuă." },
    ],
    faqHeading: "Întrebări frecvente",
    faq: [
      { question: "Cât costă un site web la Axivore?", answer: "Depinde de amploare. Primești în avans o ofertă scrisă cu preț fix — prețul nu se schimbă după aceea. Un site clasic de firmă începe în intervalul mediu-jos de patru cifre, paginile de destinație mai mici sub acest nivel." },
      { question: "Cât durează până când site-ul meu e live?", answer: "De obicei 1 până la 3 săptămâni, în funcție de amploare și cât de repede primim conținutul tău (texte, imagini). Îți spunem dinainte un termen realist." },
      { question: "Pot modifica singur conținutul mai târziu?", answer: "Da. Construim site-ul astfel încât să poți întreține singur texte și imagini — sau preluăm noi întreținerea pentru tine. Exact cum preferi." },
      { question: "Faceți și optimizare pentru motoarele de căutare (SEO)?", answer: "Construim fiecare site tehnic corect pentru Google. La cerere, ne ocupăm și de SEO local, ca clienții din regiunea ta să te găsească mai bine." },
    ],
    crossLinkText: "Un site web cu asistent AI se potrivește firmei tale? Vezi și {CHATBOTS} sau aruncă o privire în {RATGEBER}.",
    chatbotsLabel: "chatbot-urile noastre AI",
    ratgeberLabel: "ghidul nostru",
    ctaHeading: "Ești gata pentru un site web care lucrează?",
    ctaText: "La o discuție gratuită de 30 de minute analizăm ce trebuie să realizeze site-ul tău — și primești apoi o ofertă cu preț fix. Fără prezentare de vânzare.",
    ctaButton: "Programează o discuție gratuită",
    start: "Acasă",
    leistungenLabel: "Servicii",
  },
  tr: {
    metaTitle: "Web Sitesi Yaptırma — Küçük İşletmeler için Modern Web Siteleri | Axivore",
    metaDescription: "Axivore, ziyaretçileri müşteriye dönüştüren modern, hızlı web siteleri kurar — istek üzerine randevu alma ve müşteri talepleri için AI asistanıyla. Sabit fiyat, 1-3 hafta içinde canlı.",
    ogDescription: "Ziyaretçileri müşteriye dönüştüren modern, hızlı web siteleri — isteğe bağlı AI asistanıyla. Sabit fiyat, 1-3 hafta içinde canlı.",
    breadcrumb: "Web Siteleri",
    serviceName: "Web Siteleri ve Açılış Sayfaları",
    eyebrow: "Hizmetler / Web Siteleri",
    h1: "Sadece iyi görünmekle kalmayan web siteleri.",
    subheadline: "Modern bir web sitesi dijital bir kartvizitten fazlasıdır. Ziyaretçileri müşteriye dönüştüren siteler kurarız — hızlı, mobil uyumlu, Google'da bulunan — ve istek üzerine, mesai sonrasında bile randevu alan ve soruları yanıtlayan bir AI asistanıyla.",
    featuresHeading: "Neler alırsın",
    features: [
      { title: "Profesyonel görünüm", text: "Güven inşa eden ve işletmene uyan bir tasarım — hazır kalıp değil, sana özel uyarlanmış." },
      { title: "Hızlı ve mobil uyumlu", text: "Siten saniyeler içinde yüklenir ve telefonda da bilgisayarda olduğu kadar iyi görünür — müşterilerin çoğunun seni bulduğu yer." },
      { title: "Yerel aramada bulunma", text: "Google için düzgünce kurulmuş, böylece bölgendeki müşteriler hizmetini aradığında seni bulur." },
      { title: "AI asistan (isteğe bağlı)", text: "İstek üzerine, soruları yanıtlayan ve randevu alan bir asistan ekleriz — siten böylece geceleri de çalışır." },
      { title: "Randevular ve talepler", text: "İletişim formu, randevu alma ya da WhatsApp — ziyaretçiler dolambaçsız şekilde doğrudan talebe dönüşür." },
      { title: "Bakımı kolay", text: "İçeriği kendin değiştirebilirsin ya da bakımı biz üstleniriz — hangisini tercih edersen." },
    ],
    stepsHeading: "Nasıl işliyor",
    steps: [
      { n: "01", title: "Görüşme ve konsept", text: "Web sitenin ne başarması gerektiğini ve müşterilerinin kim olduğunu netleştiririz. Sonrasında sabit fiyatlı bir teklif alırsın." },
      { n: "02", title: "Tasarım ve kurulum", text: "Siteyi senin içeriğinle, logonla, senin diliyle tasarlar ve kurarız. Ara aşamaları görür ve geri bildirim verirsin." },
      { n: "03", title: "Canlı ve destek", text: "Site canlıya alınır, teknik ve hosting işleriyle biz ilgileniriz. İstek üzerine sürekli bakımla." },
    ],
    faqHeading: "Sık sorulan sorular",
    faq: [
      { question: "Axivore'da bir web sitesi ne kadara mal olur?", answer: "Bu kapsama bağlıdır. Önceden sabit fiyatlı yazılı bir teklif alırsın — sonrasında fiyat değişmez. Klasik bir kurumsal site düşük dört haneli rakamlarla başlar, daha küçük açılış sayfaları bunun altındadır." },
      { question: "Web sitem canlıya alınana kadar ne kadar sürer?", answer: "Genellikle kapsama ve içeriğini (metin, görsel) ne kadar hızlı bize ulaştırdığına bağlı olarak 1 ila 3 hafta. Önceden sana gerçekçi bir tarih söyleriz." },
      { question: "İçeriği daha sonra kendim değiştirebilir miyim?", answer: "Evet. Siteyi metinleri ve görselleri kendin yönetebileceğin şekilde kurarız — ya da bakımı senin yerine biz üstleniriz. Tamamen sen tercih edersin." },
      { question: "Arama motoru optimizasyonu (SEO) da yapıyor musunuz?", answer: "Her web sitesini teknik olarak Google için temiz şekilde kurarız. İstek üzerine ayrıca yerel SEO ile de ilgileniriz, böylece bölgendeki müşteriler seni daha iyi bulur." },
    ],
    crossLinkText: "AI asistanlı bir web sitesi işletmene uyuyor mu? {CHATBOTS} sayfamıza da göz at ya da {RATGEBER} sayfamıza bak.",
    chatbotsLabel: "AI Chatbotlarımız",
    ratgeberLabel: "Rehber",
    ctaHeading: "Çalışan bir web sitesine hazır mısın?",
    ctaText: "Ücretsiz 30 dakikalık bir görüşmede web sitenin ne başarması gerektiğine bakarız — ve sonrasında sabit fiyatlı bir teklif alırsın. Satış konuşması yok.",
    ctaButton: "Ücretsiz görüşme ayarla",
    start: "Ana Sayfa",
    leistungenLabel: "Hizmetler",
  },
  it: {
    metaTitle: "Creazione Siti Web — Siti Web Moderni per Piccole Imprese | Axivore",
    metaDescription: "Axivore costruisce siti web moderni e veloci che trasformano i visitatori in clienti — su richiesta con assistente AI per prenotazione appuntamenti e richieste dei clienti. Prezzo fisso, attivo in 1–3 settimane.",
    ogDescription: "Siti web moderni e veloci che trasformano i visitatori in clienti — con assistente AI opzionale. Prezzo fisso, attivo in 1–3 settimane.",
    breadcrumb: "Siti Web",
    serviceName: "Siti Web e Landing Page",
    eyebrow: "Servizi / Siti Web",
    h1: "Siti web che non sono solo belli da vedere.",
    subheadline: "Un sito web moderno è più di un biglietto da visita digitale. Costruiamo siti che trasformano i visitatori in clienti — veloci, mobile, trovati su Google — e su richiesta con un assistente AI che prenota appuntamenti e risponde alle domande, anche dopo l'orario di lavoro.",
    featuresHeading: "Cosa ottieni",
    features: [
      { title: "Presenza professionale", text: "Un design che crea fiducia e si adatta alla tua attività — non preconfezionato, ma su misura per te." },
      { title: "Veloce e mobile", text: "Il tuo sito si carica in secondi e ha lo stesso bell'aspetto su cellulare come su computer — dove la maggior parte dei clienti ti trova." },
      { title: "Trovato localmente", text: "Costruito correttamente per Google, così i clienti della tua zona ti trovano quando cercano il tuo servizio." },
      { title: "Assistente AI (opzionale)", text: "Su richiesta integriamo un assistente che risponde alle domande e prenota appuntamenti — il tuo sito web lavora così anche di notte." },
      { title: "Appuntamenti e richieste", text: "Modulo di contatto, prenotazione appuntamenti o WhatsApp — i visitatori diventano direttamente richieste, senza deviazioni." },
      { title: "Facile da gestire", text: "Puoi modificare i contenuti da solo o ci occupiamo noi della gestione — come preferisci." },
    ],
    stepsHeading: "Come funziona",
    steps: [
      { n: "01", title: "Colloquio e concetto", text: "Chiariamo cosa deve realizzare il tuo sito web e chi sono i tuoi clienti. Poi ricevi un preventivo a prezzo fisso." },
      { n: "02", title: "Design e costruzione", text: "Progettiamo e costruiamo il sito — con i tuoi contenuti, il tuo logo, il tuo linguaggio. Vedi fasi intermedie e dai feedback." },
      { n: "03", title: "Online e assistenza", text: "Il sito va online, ci occupiamo noi di tecnica e hosting. Su richiesta con manutenzione continua." },
    ],
    faqHeading: "Domande frequenti",
    faq: [
      { question: "Quanto costa un sito web da Axivore?", answer: "Dipende dall'ambito. Ricevi in anticipo un preventivo scritto a prezzo fisso — dopo il prezzo non cambia più. Un classico sito aziendale parte da alcune migliaia di euro, landing page più piccole al di sotto." },
      { question: "Quanto tempo ci vuole prima che il mio sito sia online?", answer: "Di solito 1–3 settimane, a seconda dell'ambito e di quanto velocemente riceviamo i tuoi contenuti (testi, immagini). Ti diciamo in anticipo una data realistica." },
      { question: "Posso modificare i contenuti da solo in seguito?", answer: "Sì. Costruiamo il sito in modo che tu possa gestire testi e immagini da solo — oppure ci occupiamo noi della manutenzione per te. Come preferisci." },
      { question: "Fate anche ottimizzazione per i motori di ricerca (SEO)?", answer: "Costruiamo ogni sito web tecnicamente pulito per Google. Su richiesta ci occupiamo anche di SEO locale, così i clienti della tua zona ti trovano meglio." },
    ],
    crossLinkText: "Un sito web con assistente AI si adatta alla tua attività? Dai un'occhiata anche ai nostri {CHATBOTS} o consulta la nostra {RATGEBER}.",
    chatbotsLabel: "Chatbot AI",
    ratgeberLabel: "Guida",
    ctaHeading: "Pronto per un sito web che lavora?",
    ctaText: "In un colloquio gratuito di 30 minuti guardiamo cosa deve realizzare il tuo sito web — e dopo ricevi un preventivo a prezzo fisso. Nessuna presentazione di vendita.",
    ctaButton: "Prenota un colloquio gratuito",
    start: "Home",
    leistungenLabel: "Servizi",
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

export default async function WebseitenPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  const contentLocale = resolveContentLocale(rawLocale, AVAILABLE);
  const c = CONTENT[contentLocale as "de" | "hr" | "en" | "ro" | "tr" | "it"];
  const pageUrl = `https://axivore.io${localePathname(contentLocale, PATH)}`;
  const leistungenUrl = `https://axivore.io${localePathname(contentLocale, "/leistungen")}`;
  const siteUrl = `https://axivore.io${localePathname(contentLocale, "")}`;

  const [beforeChatbots, rest] = c.crossLinkText.split("{CHATBOTS}");
  const [betweenLinks, afterRatgeber] = rest.split("{RATGEBER}");

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${pageUrl}/#service`,
        name: c.serviceName,
        serviceType: "Webdesign & Webentwicklung",
        description: "Moderne, schnelle Websites für kleine und mittlere Unternehmen — auf Wunsch mit KI-Assistent.",
        provider: { "@id": "https://axivore.io/#organization" },
        areaServed: { "@type": "Country", name: "Germany" },
        url: pageUrl,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: c.start, item: siteUrl },
          { "@type": "ListItem", position: 2, name: c.leistungenLabel, item: leistungenUrl },
          { "@type": "ListItem", position: 3, name: c.breadcrumb, item: pageUrl },
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
        <p className="text-[11px] tracking-[0.2em] uppercase text-[#E0A360] mb-5">{c.eyebrow}</p>
        <h1 className="font-black tracking-[-0.03em] leading-[1.04] mb-6" style={{ fontSize: "clamp(36px,5.5vw,60px)" }}>
          {c.h1}
        </h1>
        <p className="text-[17px] leading-relaxed text-white/60">{c.subheadline}</p>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-8">
        <h2 className="text-[24px] md:text-[28px] font-bold tracking-tight mb-8">{c.featuresHeading}</h2>
        <div className="grid sm:grid-cols-2 gap-x-10 gap-y-6">
          {c.features.map((f) => (
            <div key={f.title} className="flex gap-3.5">
              <span className="mt-2 shrink-0 w-1.5 h-1.5 rounded-full" style={{ background: "#E0A360" }} />
              <div>
                <h3 className="text-[15.5px] font-semibold mb-1">{f.title}</h3>
                <p className="text-[13.5px] leading-relaxed text-white/50">{f.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-8">
        <h2 className="text-[24px] md:text-[28px] font-bold tracking-tight mb-8">{c.stepsHeading}</h2>
        <div className="grid sm:grid-cols-3 gap-8">
          {c.steps.map((s) => (
            <div key={s.n}>
              <div className="text-[13px] font-bold text-[#E0A360] mb-3">{s.n}</div>
              <h3 className="text-[16px] font-semibold mb-2">{s.title}</h3>
              <p className="text-[13.5px] leading-relaxed text-white/50">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-8">
        <h2 className="text-[24px] md:text-[28px] font-bold tracking-tight mb-8">{c.faqHeading}</h2>
        <div className="space-y-6">
          {c.faq.map((f) => (
            <div key={f.question}>
              <h3 className="text-[15.5px] font-semibold mb-2">{f.question}</h3>
              <p className="text-[14px] leading-relaxed text-white/55">{f.answer}</p>
            </div>
          ))}
        </div>
        <p className="text-[14px] leading-relaxed text-white/50 mt-10">
          {beforeChatbots}
          <Link href={localePathname(contentLocale, "/leistungen/ki-chatbots")} className="text-[#E0A360] underline underline-offset-2 hover:text-[#F0C48A]">{c.chatbotsLabel}</Link>
          {betweenLinks}
          <Link href={localePathname(contentLocale, "/ratgeber")} className="text-[#E0A360] underline underline-offset-2 hover:text-[#F0C48A]">{c.ratgeberLabel}</Link>
          {afterRatgeber}
        </p>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="rounded-2xl px-8 py-12 text-center" style={{ background: "linear-gradient(135deg,rgba(201,124,60,0.12),rgba(224,163,96,0.05))", border: "1px solid rgba(201,124,60,0.2)" }}>
          <h2 className="text-[26px] font-bold mb-3">{c.ctaHeading}</h2>
          <p className="text-white/55 mb-8 max-w-xl mx-auto">{c.ctaText}</p>
          <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="inline-block font-semibold px-7 py-3.5 rounded-full transition-transform hover:scale-[1.03]" style={{ background: "linear-gradient(135deg,#C97C3C,#E0A360)", color: "#0C0C0F" }}>
            {c.ctaButton}
          </a>
        </div>
      </section>
    </ServiceShell>
  );
}
