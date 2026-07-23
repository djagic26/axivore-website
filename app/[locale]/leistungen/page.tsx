import type { Metadata } from "next";
import Link from "next/link";
import { ServiceShell, CALENDLY_URL } from "@/components/ServiceShell";
import { resolveContentLocale, partialPageMetadata, localePathname, type AppLocale } from "@/lib/seo";

const AVAILABLE: readonly AppLocale[] = ["de", "hr", "en", "ro", "tr", "it"];
const PATH = "/leistungen";

type ServiceCard = { href: string; eyebrow: string; title: string; text: string };
type Pair = [string, string];
type Step = [string, string, string];

const CONTENT: Record<"de" | "hr" | "en" | "ro" | "tr" | "it", {
  metaTitle: string; metaDescription: string; ogDescription: string;
  eyebrow: string; h1a: string; h1b: string; subheadline: string;
  services: ServiceCard[]; more: string;
  autoHeading: string; autoIntro: string; autoItems: Pair[];
  stepsHeading: string; steps: Step[];
  branchenLinkText: string; branchenLabel: string; ratgeberLabel: string;
  ctaHeading: string; ctaText: string; ctaButton: string;
  start: string;
}> = {
  de: {
    metaTitle: "Leistungen — Websites, Software & KI für kleine Unternehmen | Axivore",
    metaDescription: "Was Axivore für kleine und mittlere Unternehmen in Deutschland baut: moderne Websites, maßgeschneiderte Web-Apps & SaaS und KI-Automatisierung. Alles aus einer Hand, live in Wochen.",
    ogDescription: "Moderne Websites, maßgeschneiderte Web-Apps & SaaS und KI-Automatisierung für kleine Unternehmen in Deutschland — alles aus einer Hand.",
    eyebrow: "Leistungen",
    h1a: "Websites, Software & KI",
    h1b: "für kleine Unternehmen.",
    subheadline: "Von der modernen Website über maßgeschneiderte Web-Apps bis zur KI-Automatisierung — wir bauen deine digitale Basis. Alles aus einer Hand, live in Wochen, nicht Monaten. Speziell für Geschäftsführer mit 5–30 Mitarbeitern in Deutschland, die selbst mit anpacken.",
    services: [
      { href: "/leistungen/webseiten", eyebrow: "Websites", title: "Websites & Landingpages", text: "Moderne, schnelle Websites, die aus Besuchern Kunden machen — auf Wunsch mit KI-Assistent, der Termine bucht und Fragen beantwortet." },
      { href: "/leistungen/web-apps", eyebrow: "Web-Apps & SaaS", title: "Web-Apps & SaaS", text: "Maßgeschneiderte Web-Anwendungen und SaaS-Produkte — von der Idee bis live. Genau auf deinen Betrieb zugeschnitten, nicht von der Stange." },
      { href: "/leistungen/ki-automatisierung", eyebrow: "Automatisierung", title: "KI-Automatisierung", text: "Angebote, Rechnungen, Berichte, Dateneingaben — wiederkehrende Aufgaben laufen automatisch. Du sparst 5–15 Stunden pro Woche." },
      { href: "/leistungen/ki-chatbots", eyebrow: "Chatbots", title: "KI-Chatbots", text: "Ein digitaler Assistent, der rund um die Uhr Kundenanfragen beantwortet, Termine bucht und Leads qualifiziert — auch nachts." },
    ],
    more: "Mehr erfahren",
    autoHeading: "Was sich in deinem Betrieb automatisieren lässt",
    autoIntro: "Die meisten kleinen Unternehmen verlieren jede Woche Stunden an denselben wiederkehrenden Aufgaben. Genau da setzen wir an — hier die häufigsten Beispiele aus der Praxis:",
    autoItems: [
      ["Angebote & Kostenvoranschläge", "Aus ein paar Stichpunkten entsteht das fertige, kalkulierte Angebot — formatiert und versandfertig in Minuten statt Stunden."],
      ["Rechnungen & Nachfassen", "Rechnungen entstehen nach dem Auftrag automatisch, offene Posten werden freundlich nachgefasst — ohne dass du daran denken musst."],
      ["Terminvereinbarung", "Kunden buchen selbst einen freien Termin, Bestätigung und Erinnerung laufen automatisch — kein Telefon-Pingpong mehr."],
      ["Kundenanfragen beantworten", "Wiederkehrende Fragen zu Preisen, Öffnungszeiten und Leistungen werden rund um die Uhr beantwortet — auch nach Feierabend."],
      ["Berichte & Reporting", "Zahlen aus verschiedenen Quellen werden automatisch zusammengeführt — der fertige Bericht liegt montags in deinem Postfach."],
      ["Dateneingabe & Übertragung", "Daten wandern automatisch von A nach B — zwischen Formular, Tabelle und deinem System, ganz ohne Copy-Paste."],
    ],
    stepsHeading: "So läuft ein Projekt ab",
    steps: [
      ["01", "Kostenloses Gespräch", "Wir schauen uns deine Abläufe an und finden die Aufgabe, die sich am schnellsten lohnt. Ehrlich — auch wenn die Antwort manchmal lautet: noch nicht."],
      ["02", "Festpreis-Angebot", "Du bekommst ein schriftliches Angebot mit fixem Preis und klarem Umfang. Danach ändert sich der Preis nicht mehr."],
      ["03", "Live in Wochen", "Wir bauen, testen gemeinsam mit dir und gehen live — meist in 1 bis 2 Wochen, nicht in Monaten."],
    ],
    branchenLinkText: "Du bist dir nicht sicher, ob dein Betrieb dafür bereit ist? Schau dir an, wie wir für {BRANCHEN} arbeiten, oder wirf einen Blick in unseren {RATGEBER}.",
    branchenLabel: "verschiedene Branchen",
    ratgeberLabel: "Ratgeber",
    ctaHeading: "Sag uns dein Problem.",
    ctaText: "In einem kostenlosen 30-Minuten-Gespräch schauen wir gemeinsam, welche Aufgabe sich bei dir am schnellsten automatisieren lässt. Kein Pitch.",
    ctaButton: "Kostenloses Gespräch buchen",
    start: "Start",
  },
  hr: {
    metaTitle: "Usluge — web stranice, softver i AI za male tvrtke | Axivore",
    metaDescription: "Što Axivore gradi za male i srednje tvrtke u Njemačkoj: moderne web stranice, softver po mjeri (web-aplikacije i SaaS) i AI automatizaciju. Sve na jednom mjestu, live za tjedne.",
    ogDescription: "Moderne web stranice, softver po mjeri i AI automatizacija za male tvrtke u Njemačkoj — sve na jednom mjestu.",
    eyebrow: "Usluge",
    h1a: "Web stranice, softver i AI",
    h1b: "za male tvrtke.",
    subheadline: "Od moderne web stranice preko softvera po mjeri do AI automatizacije — gradimo tvoju digitalnu osnovu. Sve na jednom mjestu, live za tjedne, ne mjesece. Posebno za vlasnike s 5–30 zaposlenih u Njemačkoj koji i sami zasuču rukave.",
    services: [
      { href: "/leistungen/webseiten", eyebrow: "Web stranice", title: "Web stranice i landing stranice", text: "Moderne, brze web stranice koje od posjetitelja stvaraju klijente — po želji s AI asistentom koji zakazuje termine i odgovara na pitanja." },
      { href: "/leistungen/web-apps", eyebrow: "Web-aplikacije i SaaS", title: "Web-aplikacije i SaaS", text: "Web-aplikacije i SaaS proizvodi po mjeri — od ideje do live. Skrojeno točno za tvoj posao, ne s police." },
      { href: "/leistungen/ki-automatisierung", eyebrow: "Automatizacija", title: "AI automatizacija", text: "Ponude, računi, izvještaji, unos podataka — ponavljajući zadaci rade se automatski. Štediš 5–15 sati tjedno." },
      { href: "/leistungen/ki-chatbots", eyebrow: "Chatbotovi", title: "AI chatbotovi", text: "Digitalni asistent koji 0-24 odgovara na upite klijenata, zakazuje termine i kvalificira leadove — čak i noću." },
    ],
    more: "Saznaj više",
    autoHeading: "Što se u tvom poslu može automatizirati",
    autoIntro: "Većina malih tvrtki svaki tjedan gubi sate na iste ponavljajuće zadatke. Upravo tu djelujemo — evo najčešćih primjera iz prakse:",
    autoItems: [
      ["Ponude i predračuni", "Iz nekoliko natuknica nastaje gotova, obračunata ponuda — formatirana i spremna za slanje u minutama umjesto sati."],
      ["Računi i podsjećanje", "Računi nastaju automatski nakon posla, nepodmirene stavke se ljubazno podsjećaju — bez da ti to moraš pamtiti."],
      ["Zakazivanje termina", "Klijenti sami rezerviraju slobodan termin, potvrda i podsjetnik idu automatski — više nema prepiske telefonom."],
      ["Odgovaranje na upite klijenata", "Ponavljajuća pitanja o cijenama, radnom vremenu i uslugama odgovaraju se 0-24 — i poslije radnog vremena." ],
      ["Izvještaji i reporting", "Brojevi s različitih izvora automatski se objedinjuju — gotov izvještaj čeka te u sandučiću ponedjeljkom."],
      ["Unos i prijenos podataka", "Podaci putuju automatski od A do B — između forme, tablice i tvog sustava, potpuno bez copy-pastea."],
    ],
    stepsHeading: "Kako izgleda jedan projekt",
    steps: [
      ["01", "Besplatan razgovor", "Pogledamo tvoje procese i pronađemo zadatak koji se najbrže isplati. Iskreno — i kad je odgovor ponekad: još ne."],
      ["02", "Ponuda s fiksnom cijenom", "Dobivaš pisanu ponudu s fiksnom cijenom i jasnim opsegom. Poslije se cijena više ne mijenja."],
      ["03", "Live za tjedne", "Gradimo, zajedno s tobom testiramo i idemo live — obično za 1 do 2 tjedna, ne u mjesecima."],
    ],
    branchenLinkText: "Nisi siguran je li tvoj posao spreman za ovo? Pogledaj kako radimo za {BRANCHEN}, ili baci pogled u naš {RATGEBER}.",
    branchenLabel: "razne branše",
    ratgeberLabel: "vodič",
    ctaHeading: "Reci nam svoj problem.",
    ctaText: "Na besplatnom 30-minutnom razgovoru zajedno pogledamo koji se zadatak kod tebe najbrže može automatizirati. Bez pitcha.",
    ctaButton: "Zakaži besplatan razgovor",
    start: "Početna",
  },
  en: {
    metaTitle: "Services — Websites, Software & AI for Small Businesses | Axivore",
    metaDescription: "What Axivore builds for small and medium businesses in Germany: modern websites, custom web apps & SaaS, and AI automation. Everything from one source, live within weeks.",
    ogDescription: "Modern websites, custom web apps & SaaS, and AI automation for small businesses in Germany — everything from one source.",
    eyebrow: "Services",
    h1a: "Websites, Software & AI",
    h1b: "for small businesses.",
    subheadline: "From modern websites through custom web apps to AI automation — we build your digital foundation. Everything from one source, live within weeks, not months. Especially for owners of businesses with 5–30 employees in Germany who roll up their sleeves themselves.",
    services: [
      { href: "/leistungen/webseiten", eyebrow: "Websites", title: "Websites & Landing Pages", text: "Modern, fast websites that turn visitors into customers — on request with an AI assistant that books appointments and answers questions." },
      { href: "/leistungen/web-apps", eyebrow: "Web Apps & SaaS", title: "Web Apps & SaaS", text: "Custom web applications and SaaS products — from idea to live. Tailored exactly to your business, not off the shelf." },
      { href: "/leistungen/ki-automatisierung", eyebrow: "Automation", title: "AI Automation", text: "Quotes, invoices, reports, data entry — recurring tasks run automatically. You save 5–15 hours a week." },
      { href: "/leistungen/ki-chatbots", eyebrow: "Chatbots", title: "AI Chatbots", text: "A digital assistant that answers customer inquiries, books appointments and qualifies leads around the clock — even at night." },
    ],
    more: "Learn more",
    autoHeading: "What can be automated in your business",
    autoIntro: "Most small businesses lose hours every week to the same recurring tasks. That's exactly where we come in — here are the most common examples from practice:",
    autoItems: [
      ["Quotes & estimates", "A few bullet points turn into a finished, calculated quote — formatted and ready to send in minutes instead of hours."],
      ["Invoices & follow-ups", "Invoices are created automatically after the job, open items get a friendly follow-up — without you having to remember."],
      ["Appointment scheduling", "Customers book a free slot themselves, confirmation and reminders go out automatically — no more phone tag."],
      ["Answering customer inquiries", "Recurring questions about prices, hours and services are answered around the clock — even after hours."],
      ["Reports & reporting", "Numbers from different sources are automatically merged — the finished report is in your inbox on Monday morning."],
      ["Data entry & transfer", "Data moves automatically from A to B — between form, spreadsheet and your system, with no copy-paste at all."],
    ],
    stepsHeading: "How a project works",
    steps: [
      ["01", "Free call", "We look at your workflows and find the task that pays off fastest. Honestly — even when the answer is sometimes: not yet."],
      ["02", "Fixed-price quote", "You get a written quote with a fixed price and a clear scope. The price doesn't change after that."],
      ["03", "Live within weeks", "We build, test together with you and go live — usually within 1 to 2 weeks, not months."],
    ],
    branchenLinkText: "Not sure if your business is ready for this? See how we work for {BRANCHEN}, or take a look at our {RATGEBER}.",
    branchenLabel: "different industries",
    ratgeberLabel: "guide",
    ctaHeading: "Tell us your problem.",
    ctaText: "In a free 30-minute call, we'll look together at which task can be automated fastest for you. No pitch.",
    ctaButton: "Book a free call",
    start: "Home",
  },
  ro: {
    metaTitle: "Servicii — Site-uri web, software și AI pentru firme mici | Axivore",
    metaDescription: "Ce construiește Axivore pentru firme mici și mijlocii din Germania: site-uri web moderne, aplicații web și SaaS personalizate, automatizare AI. Totul dintr-un singur loc, live în câteva săptămâni.",
    ogDescription: "Site-uri web moderne, aplicații web și SaaS personalizate, automatizare AI pentru firme mici din Germania — totul dintr-un singur loc.",
    eyebrow: "Servicii",
    h1a: "Site-uri web, software și AI",
    h1b: "pentru firme mici.",
    subheadline: "De la site-uri web moderne, prin aplicații web personalizate, până la automatizare AI — construim baza ta digitală. Totul dintr-un singur loc, live în câteva săptămâni, nu luni. Special pentru proprietarii de firme cu 5–30 de angajați din Germania care se implică personal.",
    services: [
      { href: "/leistungen/webseiten", eyebrow: "Site-uri web", title: "Site-uri web și pagini de destinație", text: "Site-uri web moderne, rapide, care transformă vizitatorii în clienți — la cerere cu un asistent AI care programează întâlniri și răspunde la întrebări." },
      { href: "/leistungen/web-apps", eyebrow: "Aplicații web și SaaS", title: "Aplicații web și SaaS", text: "Aplicații web și produse SaaS personalizate — de la idee la lansare. Adaptate exact firmei tale, nu de serie." },
      { href: "/leistungen/ki-automatisierung", eyebrow: "Automatizare", title: "Automatizare AI", text: "Oferte, facturi, rapoarte, introducerea datelor — sarcinile recurente funcționează automat. Economisești 5–15 ore pe săptămână." },
      { href: "/leistungen/ki-chatbots", eyebrow: "Chatbot-uri", title: "Chatbot-uri AI", text: "Un asistent digital care răspunde la cererile clienților, programează întâlniri și califică lead-uri non-stop — chiar și noaptea." },
    ],
    more: "Află mai multe",
    autoHeading: "Ce se poate automatiza în firma ta",
    autoIntro: "Majoritatea firmelor mici pierd ore în fiecare săptămână cu aceleași sarcini recurente. Exact aici intervenim — iată cele mai frecvente exemple din practică:",
    autoItems: [
      ["Oferte și estimări", "Din câteva puncte cheie rezultă oferta finală, calculată — formatată și gata de trimis în minute în loc de ore."],
      ["Facturi și urmărire", "Facturile apar automat după finalizarea comenzii, sumele restante primesc o urmărire politicoasă — fără să trebuiască să ții tu minte."],
      ["Programări", "Clienții își rezervă singuri un interval liber, confirmarea și memento-ul se trimit automat — fără du-te-vino telefonic."],
      ["Răspuns la cererile clienților", "Întrebările recurente despre prețuri, program și servicii primesc răspuns non-stop — chiar și după program."],
      ["Rapoarte și reportare", "Numerele din surse diferite sunt îmbinate automat — raportul finit te așteaptă luni dimineața în inbox."],
      ["Introducerea și transferul datelor", "Datele circulă automat de la A la B — între formular, tabel și sistemul tău, fără copy-paste."],
    ],
    stepsHeading: "Cum funcționează un proiect",
    steps: [
      ["01", "Discuție gratuită", "Analizăm procesele tale și găsim sarcina care se amortizează cel mai rapid. Sincer — chiar și atunci când răspunsul e uneori: încă nu."],
      ["02", "Ofertă cu preț fix", "Primești o ofertă scrisă cu preț fix și domeniu clar. Prețul nu se mai schimbă după aceea."],
      ["03", "Lansare în câteva săptămâni", "Construim, testăm împreună cu tine și lansăm — de obicei în 1 până la 2 săptămâni, nu în luni."],
    ],
    branchenLinkText: "Nu ești sigur dacă firma ta e pregătită pentru asta? Vezi cum lucrăm pentru {BRANCHEN}, sau aruncă o privire în {RATGEBER}.",
    branchenLabel: "diverse domenii",
    ratgeberLabel: "ghidul nostru",
    ctaHeading: "Spune-ne problema ta.",
    ctaText: "La o discuție gratuită de 30 de minute analizăm împreună care sarcină poate fi automatizată cel mai rapid pentru tine. Fără prezentare de vânzare.",
    ctaButton: "Programează o discuție gratuită",
    start: "Acasă",
  },
  tr: {
    metaTitle: "Hizmetler — Küçük İşletmeler için Web Siteleri, Yazılım ve AI | Axivore",
    metaDescription: "Axivore'un Almanya'daki küçük ve orta ölçekli işletmeler için inşa ettikleri: modern web siteleri, özel web uygulamaları ve SaaS, AI otomasyonu. Tek elden, haftalar içinde canlı.",
    ogDescription: "Almanya'daki küçük işletmeler için modern web siteleri, özel web uygulamaları ve SaaS, AI otomasyonu — tek elden.",
    eyebrow: "Hizmetler",
    h1a: "Web Siteleri, Yazılım ve AI",
    h1b: "küçük işletmeler için.",
    subheadline: "Modern web sitesinden özel web uygulamalarına, AI otomasyonuna kadar — dijital temelini biz kuruyoruz. Tek elden, aylar değil haftalar içinde canlı. Özellikle Almanya'da 5-30 çalışanı olan ve işin başında bizzat duran işletme sahipleri için.",
    services: [
      { href: "/leistungen/webseiten", eyebrow: "Web Siteleri", title: "Web Siteleri ve Açılış Sayfaları", text: "Ziyaretçileri müşteriye dönüştüren modern, hızlı web siteleri — istek üzerine randevu alan ve soruları yanıtlayan bir AI asistanıyla." },
      { href: "/leistungen/web-apps", eyebrow: "Web Uygulamaları ve SaaS", title: "Web Uygulamaları ve SaaS", text: "Fikirden canlıya kadar özel web uygulamaları ve SaaS ürünleri. Hazır kalıp değil, tam olarak işletmene göre uyarlanmış." },
      { href: "/leistungen/ki-automatisierung", eyebrow: "Otomasyon", title: "AI Otomasyonu", text: "Teklifler, faturalar, raporlar, veri girişi — tekrarlayan görevler otomatik yürür. Haftada 5-15 saat kazanırsın." },
      { href: "/leistungen/ki-chatbots", eyebrow: "Chatbotlar", title: "AI Chatbotlar", text: "Müşteri taleplerini 7/24 yanıtlayan, randevu alan ve lead'leri niteleyen bir dijital asistan — geceleri bile." },
    ],
    more: "Daha fazla bilgi",
    autoHeading: "İşletmende neler otomatikleştirilebilir",
    autoIntro: "Çoğu küçük işletme her hafta aynı tekrarlayan görevlere saatler harcıyor. Tam olarak burada devreye giriyoruz — işte pratikten en yaygın örnekler:",
    autoItems: [
      ["Teklifler ve fiyat tahminleri", "Birkaç maddeden hesaplanmış, tamamlanmış bir teklif ortaya çıkar — saatler yerine dakikalar içinde biçimlendirilmiş ve gönderime hazır."],
      ["Faturalar ve takip", "İş bittikten sonra faturalar otomatik olarak oluşturulur, açık kalemler nazikçe takip edilir — bunu hatırlaman gerekmeden."],
      ["Randevu planlama", "Müşteriler uygun bir zamanı kendileri ayırır, onay ve hatırlatma otomatik olarak gönderilir — artık telefonla ileri geri yazışma yok."],
      ["Müşteri taleplerini yanıtlama", "Fiyatlar, çalışma saatleri ve hizmetler hakkındaki tekrarlayan sorular 7/24 yanıtlanır — mesai sonrasında bile."],
      ["Raporlar ve raporlama", "Farklı kaynaklardan gelen sayılar otomatik olarak birleştirilir — hazır rapor pazartesi sabahı gelen kutunda seni bekler."],
      ["Veri girişi ve aktarımı", "Veriler form, tablo ve sistemin arasında otomatik olarak A'dan B'ye taşınır — hiç kopyala-yapıştır olmadan."],
    ],
    stepsHeading: "Bir proje nasıl ilerler",
    steps: [
      ["01", "Ücretsiz görüşme", "Süreçlerine bakar ve en hızlı karşılığını verecek görevi buluruz. Dürüstçe — bazen cevap 'henüz değil' olsa bile."],
      ["02", "Sabit fiyat teklifi", "Sabit fiyatlı ve net kapsamlı yazılı bir teklif alırsın. Sonrasında fiyat değişmez."],
      ["03", "Haftalar içinde canlı", "Kurarız, seninle birlikte test ederiz ve canlıya alırız — genellikle aylar değil, 1-2 hafta içinde."],
    ],
    branchenLinkText: "İşletmenin buna hazır olup olmadığından emin değil misin? {BRANCHEN} için nasıl çalıştığımıza bak ya da {RATGEBER} sayfamıza göz at.",
    branchenLabel: "farklı sektörler",
    ratgeberLabel: "rehberimiz",
    ctaHeading: "Bize sorununu anlat.",
    ctaText: "Ücretsiz 30 dakikalık bir görüşmede, senin için en hızlı otomatikleştirilebilecek görevi birlikte bulalım. Satış konuşması yok.",
    ctaButton: "Ücretsiz görüşme ayarla",
    start: "Ana Sayfa",
  },
  it: {
    metaTitle: "Servizi — Siti Web, Software e AI per Piccole Imprese | Axivore",
    metaDescription: "Cosa costruisce Axivore per piccole e medie imprese in Germania: siti web moderni, web-app e SaaS su misura, automazione AI. Tutto da un'unica fonte, attivo in poche settimane.",
    ogDescription: "Siti web moderni, web-app e SaaS su misura, automazione AI per piccole imprese in Germania — tutto da un'unica fonte.",
    eyebrow: "Servizi",
    h1a: "Siti Web, Software e AI",
    h1b: "per piccole imprese.",
    subheadline: "Dal sito web moderno alle web-app su misura fino all'automazione AI — costruiamo la tua base digitale. Tutto da un'unica fonte, attivo in settimane, non mesi. Pensato per titolari di aziende con 5–30 dipendenti in Germania che mettono le mani in pasta loro stessi.",
    services: [
      { href: "/leistungen/webseiten", eyebrow: "Siti Web", title: "Siti Web e Landing Page", text: "Siti web moderni e veloci che trasformano i visitatori in clienti — su richiesta con assistente AI che prenota appuntamenti e risponde alle domande." },
      { href: "/leistungen/web-apps", eyebrow: "Web-App e SaaS", title: "Web-App e SaaS", text: "Applicazioni web e prodotti SaaS su misura — dall'idea all'attivazione. Realizzati esattamente per la tua attività, non preconfezionati." },
      { href: "/leistungen/ki-automatisierung", eyebrow: "Automazione", title: "Automazione AI", text: "Preventivi, fatture, report, inserimento dati — i compiti ricorrenti girano automaticamente. Risparmi 5–15 ore a settimana." },
      { href: "/leistungen/ki-chatbots", eyebrow: "Chatbot", title: "Chatbot AI", text: "Un assistente digitale che risponde alle richieste dei clienti 24/7, prenota appuntamenti e qualifica i lead — anche di notte." },
    ],
    more: "Scopri di più",
    autoHeading: "Cosa si può automatizzare nella tua attività",
    autoIntro: "La maggior parte delle piccole imprese perde ore ogni settimana con gli stessi compiti ricorrenti. È esattamente lì che interveniamo — ecco gli esempi più comuni dalla pratica:",
    autoItems: [
      ["Preventivi e stime", "Da poche note nasce il preventivo finito e calcolato — formattato e pronto per l'invio in pochi minuti invece che ore."],
      ["Fatture e solleciti", "Le fatture vengono create automaticamente dopo l'incarico, le voci aperte vengono sollecitate gentilmente — senza che tu debba pensarci."],
      ["Prenotazione appuntamenti", "I clienti prenotano da soli un orario libero, conferma e promemoria vengono inviati automaticamente — niente più tira e molla telefonico."],
      ["Rispondere alle richieste dei clienti", "Le domande ricorrenti su prezzi, orari e servizi vengono risposte 24/7 — anche dopo l'orario di lavoro."],
      ["Report e reportistica", "I numeri da fonti diverse vengono uniti automaticamente — il report finito è nella tua casella di posta il lunedì mattina."],
      ["Inserimento e trasferimento dati", "I dati passano automaticamente da A a B — tra modulo, tabella e il tuo sistema, senza copia-incolla."],
    ],
    stepsHeading: "Come funziona un progetto",
    steps: [
      ["01", "Colloquio gratuito", "Guardiamo i tuoi processi e troviamo il compito che ripaga più velocemente. Onestamente — anche quando la risposta a volte è: non ancora."],
      ["02", "Preventivo a prezzo fisso", "Ricevi un preventivo scritto con prezzo fisso e ambito chiaro. Dopo, il prezzo non cambia più."],
      ["03", "Attivo in settimane", "Costruiamo, testiamo insieme a te e andiamo online — di solito in 1–2 settimane, non mesi."],
    ],
    branchenLinkText: "Non sei sicuro se la tua attività è pronta per questo? Guarda come lavoriamo per {BRANCHEN}, o dai un'occhiata alla nostra {RATGEBER}.",
    branchenLabel: "diversi settori",
    ratgeberLabel: "guida",
    ctaHeading: "Raccontaci il tuo problema.",
    ctaText: "In un colloquio gratuito di 30 minuti guardiamo insieme quale compito si può automatizzare più velocemente per te. Nessuna presentazione di vendita.",
    ctaButton: "Prenota un colloquio gratuito",
    start: "Home",
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

export default async function LeistungenPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  const contentLocale = resolveContentLocale(rawLocale, AVAILABLE);
  const c = CONTENT[contentLocale as "de" | "hr" | "en" | "ro" | "tr" | "it"];
  const pageUrl = `https://axivore.io${localePathname(contentLocale, PATH)}`;
  const siteUrl = `https://axivore.io${localePathname(contentLocale, "")}`;
  const [beforeBranchen, rest] = c.branchenLinkText.split("{BRANCHEN}");
  const [betweenLinks, afterRatgeber] = rest.split("{RATGEBER}");

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: c.start, item: siteUrl },
      { "@type": "ListItem", position: 2, name: c.eyebrow, item: pageUrl },
    ],
  };

  return (
    <ServiceShell>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }} />

      <section className="max-w-5xl mx-auto px-6 pt-20 pb-12">
        <p className="text-[11px] tracking-[0.2em] uppercase text-[#A09AFF] mb-5">{c.eyebrow}</p>
        <h1 className="font-black tracking-[-0.03em] leading-[1.02] mb-6" style={{ fontSize: "clamp(38px,6vw,68px)" }}>
          {c.h1a}
          <br />
          {c.h1b}
        </h1>
        <p className="text-[16px] leading-relaxed text-white/55 max-w-2xl">{c.subheadline}</p>
      </section>

      <section className="max-w-5xl mx-auto px-6 pb-8">
        <div className="grid sm:grid-cols-2 gap-5">
          {c.services.map((s) => (
            <Link
              key={s.href}
              href={localePathname(contentLocale, s.href)}
              className="group block rounded-2xl p-7 transition-colors"
              style={{ background: "rgba(255,255,255,0.028)", border: "1px solid rgba(255,255,255,0.07)" }}
            >
              <p className="text-[10.5px] tracking-[0.18em] uppercase text-[#A09AFF] mb-3">{s.eyebrow}</p>
              <h2 className="text-[22px] font-semibold mb-3 group-hover:text-[#C4B8FF] transition-colors">{s.title}</h2>
              <p className="text-[14px] leading-relaxed text-white/50">{s.text}</p>
              <span className="inline-flex items-center gap-1.5 mt-5 text-[13px] font-medium text-[#A09AFF]">
                {c.more}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-10">
        <h2 className="text-[26px] md:text-[30px] font-bold tracking-tight mb-5">{c.autoHeading}</h2>
        <p className="text-[15px] leading-relaxed text-white/55 max-w-2xl mb-9">{c.autoIntro}</p>
        <div className="grid sm:grid-cols-2 gap-x-10 gap-y-6">
          {c.autoItems.map(([title, text]) => (
            <div key={title} className="flex gap-3.5">
              <span className="mt-2 shrink-0 w-1.5 h-1.5 rounded-full" style={{ background: "#A09AFF" }} />
              <div>
                <h3 className="text-[15.5px] font-semibold mb-1">{title}</h3>
                <p className="text-[13.5px] leading-relaxed text-white/50">{text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-10">
        <h2 className="text-[26px] md:text-[30px] font-bold tracking-tight mb-8">{c.stepsHeading}</h2>
        <div className="grid sm:grid-cols-3 gap-8">
          {c.steps.map(([num, title, text]) => (
            <div key={num}>
              <div className="text-[13px] font-bold text-[#A09AFF] mb-3">{num}</div>
              <h3 className="text-[16px] font-semibold mb-2">{title}</h3>
              <p className="text-[13.5px] leading-relaxed text-white/50">{text}</p>
            </div>
          ))}
        </div>
        <p className="text-[14px] leading-relaxed text-white/50 max-w-2xl mt-10">
          {beforeBranchen}
          <Link href={localePathname(contentLocale, "/branchen")} className="text-[#A09AFF] underline underline-offset-2 hover:text-[#C4B8FF]">{c.branchenLabel}</Link>
          {betweenLinks}
          <Link href={localePathname(contentLocale, "/ratgeber")} className="text-[#A09AFF] underline underline-offset-2 hover:text-[#C4B8FF]">{c.ratgeberLabel}</Link>
          {afterRatgeber}
        </p>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="rounded-2xl px-8 py-12 text-center" style={{ background: "linear-gradient(135deg,rgba(124,92,255,0.12),rgba(160,154,255,0.05))", border: "1px solid rgba(124,92,255,0.2)" }}>
          <h2 className="text-[26px] font-bold mb-3">{c.ctaHeading}</h2>
          <p className="text-white/55 mb-8 max-w-xl mx-auto">{c.ctaText}</p>
          <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="inline-block font-semibold px-7 py-3.5 rounded-full transition-transform hover:scale-[1.03]" style={{ background: "linear-gradient(135deg,#7C5CFF,#A09AFF)", color: "#0C0C0F" }}>
            {c.ctaButton}
          </a>
        </div>
      </section>
    </ServiceShell>
  );
}
