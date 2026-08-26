import type { Metadata } from "next";
import { ServiceShell, CALENDLY_URL } from "@/components/ServiceShell";
import { resolveContentLocale, partialPageMetadata, localePathname, type AppLocale } from "@/lib/seo";

const AVAILABLE: readonly AppLocale[] = ["de", "hr", "en", "ro", "tr", "it"];
const PATH = "/leistungen/ki-chatbots";

type Item = { title: string; text: string };
type Step = { n: string; title: string; text: string };
type Faq = { question: string; answer: string };

const CONTENT: Record<"de" | "hr" | "en" | "ro" | "tr" | "it", {
  metaTitle: string; metaDescription: string; ogDescription: string;
  breadcrumb: string; serviceName: string; eyebrow: string; h1: string; subheadline: string;
  useCasesHeading: string; useCases: Item[];
  stepsHeading: string; steps: Step[];
  faqHeading: string; faq: Faq[];
  ctaHeading: string; ctaText: string; ctaButton: string;
  start: string; leistungenLabel: string;
}> = {
  de: {
    metaTitle: "KI-Chatbots für Unternehmen in Deutschland | Axivore",
    metaDescription: "Intelligente KI-Chatbots, die rund um die Uhr Kundenanfragen beantworten, Termine buchen und Leads qualifizieren. Axivore baut Chatbots für KMU — 70–90 % der Anfragen automatisch beantwortet.",
    ogDescription: "Ein digitaler Assistent, der rund um die Uhr Kundenanfragen beantwortet und Termine bucht — auch nachts.",
    breadcrumb: "KI-Chatbots",
    serviceName: "KI-Chatbots",
    eyebrow: "Leistungen / KI-Chatbots",
    h1: "KI-Chatbots, die nie schlafen.",
    subheadline: "Ein digitaler Assistent, der rund um die Uhr Kundenanfragen beantwortet, Termine bucht und Interessenten qualifiziert — auch nachts und am Wochenende. So verlierst du keine Anfrage mehr, nur weil gerade niemand am Telefon ist.",
    useCasesHeading: "Was ein KI-Chatbot für dich übernimmt",
    useCases: [
      { title: "24/7 Kundenservice", text: "Beantwortet wiederkehrende Fragen sofort — zu Öffnungszeiten, Preisen, Leistungen — auch außerhalb deiner Arbeitszeit." },
      { title: "Termine buchen", text: "Besucher buchen direkt im Chat einen Termin, ganz ohne E-Mail-Hin-und-Her und Telefonschleifen." },
      { title: "Leads qualifizieren", text: "Der Bot stellt die richtigen Fragen, erkennt ernsthafte Interessenten und übergibt sie mit allen Infos an dich." },
      { title: "Auf deiner Website oder WhatsApp", text: "Wir setzen den Bot dort ein, wo deine Kunden sind — eingebettet auf der Website oder über Messenger." },
    ],
    stepsHeading: "So läuft es ab",
    steps: [
      { n: "01", title: "Wissen sammeln", text: "Wir füttern den Bot mit deinen Inhalten — Leistungen, Preise, häufige Fragen — damit er klingt wie dein Unternehmen." },
      { n: "02", title: "Aufbau in 2–4 Wochen", text: "Wir bauen, trainieren und testen den Chatbot mit echten Fragen, bevor er live geht." },
      { n: "03", title: "Live & lernt weiter", text: "Der Bot geht live und wird mit echten Gesprächen laufend besser. Wir betreuen ihn weiter." },
    ],
    faqHeading: "Häufige Fragen",
    faq: [
      { question: "Wie viele Anfragen kann ein Chatbot übernehmen?", answer: "In der Praxis beantworten gut gebaute Chatbots 70–90 % der wiederkehrenden Anfragen vollautomatisch. Dein Team kümmert sich dann nur noch um die wirklich komplexen Fälle." },
      { question: "Klingt der Bot wie ein Roboter?", answer: "Nein. Wir trainieren ihn auf deine Inhalte und deinen Ton, sodass er natürlich und hilfreich antwortet — wie ein gut eingearbeiteter Mitarbeiter." },
      { question: "Was passiert, wenn der Bot etwas nicht weiß?", answer: "Dann gibt er das ehrlich zu und leitet die Anfrage an dich oder dein Team weiter — inklusive der bisherigen Konversation." },
      { question: "Ersetzt der Chatbot meinen Kundenservice komplett?", answer: "Nein, das ist nicht das Ziel. Er übernimmt die Standardfragen rund um die Uhr, damit dein Team Zeit für die Fälle hat, die wirklich menschliches Urteilsvermögen brauchen." },
    ],
    ctaHeading: "Teste, wie dein Chatbot klingen würde.",
    ctaText: "Im kostenlosen Gespräch zeigen wir dir an einem konkreten Beispiel, wie ein Chatbot für dein Unternehmen Anfragen beantworten würde.",
    ctaButton: "Kostenloses Gespräch buchen",
    start: "Start",
    leistungenLabel: "Leistungen",
  },
  hr: {
    metaTitle: "AI chatbotovi za tvrtke u Njemačkoj | Axivore",
    metaDescription: "Inteligentni AI chatbotovi koji 0-24 odgovaraju na upite klijenata, zakazuju termine i kvalificiraju leadove. Axivore gradi chatbotove za male tvrtke — 70–90 % upita automatski odgovoreno.",
    ogDescription: "Digitalni asistent koji 0-24 odgovara na upite klijenata i zakazuje termine — čak i noću.",
    breadcrumb: "AI chatbotovi",
    serviceName: "AI chatbotovi",
    eyebrow: "Usluge / AI chatbotovi",
    h1: "AI chatbotovi koji nikad ne spavaju.",
    subheadline: "Digitalni asistent koji 0-24 odgovara na upite klijenata, zakazuje termine i kvalificira zainteresirane — čak i noću i vikendom. Tako više ne gubiš nijedan upit samo zato što trenutno nitko nije uz telefon.",
    useCasesHeading: "Što AI chatbot preuzima umjesto tebe",
    useCases: [
      { title: "Korisnička podrška 0-24", text: "Odmah odgovara na ponavljajuća pitanja — o radnom vremenu, cijenama, uslugama — i izvan tvog radnog vremena." },
      { title: "Zakazivanje termina", text: "Posjetitelji rezerviraju termin izravno u chatu, bez prepiske e-mailom i telefonskih poziva." },
      { title: "Kvalifikacija leadova", text: "Bot postavlja prava pitanja, prepoznaje ozbiljne zainteresirane i predaje ti ih sa svim informacijama." },
      { title: "Na tvojoj web stranici ili WhatsAppu", text: "Bota postavljamo tamo gdje su tvoji klijenti — ugrađenog na web stranicu ili preko messengera." },
    ],
    stepsHeading: "Kako to izgleda",
    steps: [
      { n: "01", title: "Prikupljanje znanja", text: "Bota hranimo tvojim sadržajem — uslugama, cijenama, čestim pitanjima — da zvuči kao tvoja tvrtka." },
      { n: "02", title: "Izrada za 2–4 tjedna", text: "Gradimo, treniramo i testiramo chatbota na stvarnim pitanjima prije nego ide live." },
      { n: "03", title: "Live i sve bolji", text: "Bot ide live i postaje sve bolji uz stvarne razgovore. Nastavljamo mu pružati podršku." },
    ],
    faqHeading: "Česta pitanja",
    faq: [
      { question: "Koliko upita chatbot može preuzeti?", answer: "U praksi dobro izgrađeni chatbotovi potpuno automatski odgovore na 70–90 % ponavljajućih upita. Tvoj tim se onda bavi samo stvarno složenim slučajevima." },
      { question: "Zvuči li bot kao robot?", answer: "Ne. Treniramo ga na tvoj sadržaj i ton, tako da odgovara prirodno i korisno — kao dobro uhodan zaposlenik." },
      { question: "Što se događa kad bot nešto ne zna?", answer: "Tada to iskreno prizna i proslijedi upit tebi ili tvom timu — zajedno s dotadašnjim razgovorom." },
      { question: "Zamjenjuje li chatbot potpuno moju korisničku podršku?", answer: "Ne, to nije cilj. On preuzima standardna pitanja 0-24, da tvoj tim ima vremena za slučajeve koji stvarno zahtijevaju ljudsku procjenu." },
    ],
    ctaHeading: "Isprobaj kako bi tvoj chatbot zvučao.",
    ctaText: "Na besplatnom razgovoru pokazujemo ti na konkretnom primjeru kako bi chatbot za tvoju tvrtku odgovarao na upite.",
    ctaButton: "Zakaži besplatan razgovor",
    start: "Početna",
    leistungenLabel: "Usluge",
  },
  en: {
    metaTitle: "AI Chatbots for Businesses in Germany | Axivore",
    metaDescription: "Intelligent AI chatbots that answer customer inquiries, book appointments and qualify leads around the clock. Axivore builds chatbots for SMEs — 70–90% of inquiries answered automatically.",
    ogDescription: "A digital assistant that answers customer inquiries and books appointments around the clock — even at night.",
    breadcrumb: "AI Chatbots",
    serviceName: "AI Chatbots",
    eyebrow: "Services / AI Chatbots",
    h1: "AI chatbots that never sleep.",
    subheadline: "A digital assistant that answers customer inquiries around the clock, books appointments and qualifies leads — nights and weekends too. So you never lose an inquiry just because no one was by the phone.",
    useCasesHeading: "What an AI chatbot takes off your hands",
    useCases: [
      { title: "24/7 customer service", text: "Answers recurring questions instantly — about hours, prices, services — even outside your working hours." },
      { title: "Book appointments", text: "Visitors book an appointment directly in the chat, with no email back-and-forth and no phone tag." },
      { title: "Qualify leads", text: "The bot asks the right questions, recognizes serious prospects and hands them to you with all the info." },
      { title: "On your website or WhatsApp", text: "We deploy the bot where your customers are — embedded on your website or via messenger." },
    ],
    stepsHeading: "How it works",
    steps: [
      { n: "01", title: "Gather knowledge", text: "We feed the bot your content — services, prices, common questions — so it sounds like your business." },
      { n: "02", title: "Built in 2–4 weeks", text: "We build, train and test the chatbot with real questions before it goes live." },
      { n: "03", title: "Live & keeps learning", text: "The bot goes live and keeps improving with real conversations. We keep supporting it." },
    ],
    faqHeading: "Frequently asked questions",
    faq: [
      { question: "How many inquiries can a chatbot handle?", answer: "In practice, well-built chatbots answer 70–90% of recurring inquiries fully automatically. Your team then only deals with the truly complex cases." },
      { question: "Does the bot sound like a robot?", answer: "No. We train it on your content and tone, so it answers naturally and helpfully — like a well-onboarded employee." },
      { question: "What happens if the bot doesn't know something?", answer: "It honestly admits that and forwards the inquiry to you or your team — including the conversation so far." },
      { question: "Does the chatbot completely replace my customer service?", answer: "No, that's not the goal. It handles the standard questions around the clock, so your team has time for the cases that genuinely need human judgment." },
    ],
    ctaHeading: "Test how your chatbot would sound.",
    ctaText: "In a free call, we'll show you with a concrete example how a chatbot would answer inquiries for your business.",
    ctaButton: "Book a free call",
    start: "Home",
    leistungenLabel: "Services",
  },
  ro: {
    metaTitle: "Chatbot-uri AI pentru firme din Germania | Axivore",
    metaDescription: "Chatbot-uri AI inteligente care răspund la cererile clienților, programează întâlniri și califică lead-uri non-stop. Axivore construiește chatbot-uri pentru IMM-uri — 70–90% dintre cereri gestionate automat.",
    ogDescription: "Un asistent digital care răspunde la cererile clienților și programează întâlniri non-stop — chiar și noaptea.",
    breadcrumb: "Chatbot-uri AI",
    serviceName: "Chatbot-uri AI",
    eyebrow: "Servicii / Chatbot-uri AI",
    h1: "Chatbot-uri AI care nu dorm niciodată.",
    subheadline: "Un asistent digital care răspunde la cererile clienților non-stop, programează întâlniri și califică potențiali clienți — și noaptea, și în weekend. Astfel nu mai pierzi nicio cerere doar pentru că nimeni nu era lângă telefon.",
    useCasesHeading: "Ce preia un chatbot AI pentru tine",
    useCases: [
      { title: "Servicii clienți non-stop", text: "Răspunde imediat la întrebări recurente — despre program, prețuri, servicii — chiar și în afara programului tău de lucru." },
      { title: "Programează întâlniri", text: "Vizitatorii programează direct în chat o întâlnire, fără schimb de e-mailuri și fără telefoane repetate." },
      { title: "Califică lead-uri", text: "Bot-ul pune întrebările potrivite, recunoaște persoanele cu adevărat interesate și ți le predă cu toate informațiile." },
      { title: "Pe site-ul tău sau pe WhatsApp", text: "Instalăm bot-ul acolo unde sunt clienții tăi — integrat pe site sau prin messenger." },
    ],
    stepsHeading: "Cum funcționează",
    steps: [
      { n: "01", title: "Adunăm cunoștințele", text: "Hrănim bot-ul cu conținutul tău — servicii, prețuri, întrebări frecvente — ca să sune ca firma ta." },
      { n: "02", title: "Implementare în 2–4 săptămâni", text: "Construim, antrenăm și testăm chatbot-ul cu întrebări reale înainte să fie lansat." },
      { n: "03", title: "Live și în continuă învățare", text: "Bot-ul este lansat și devine tot mai bun cu conversații reale. Continuăm să-l întreținem." },
    ],
    faqHeading: "Întrebări frecvente",
    faq: [
      { question: "Câte cereri poate prelua un chatbot?", answer: "În practică, chatbot-urile bine construite răspund complet automat la 70–90% dintre cererile recurente. Echipa ta se ocupă doar de cazurile cu adevărat complexe." },
      { question: "Bot-ul sună ca un robot?", answer: "Nu. Îl antrenăm pe conținutul și tonul tău, astfel încât răspunde natural și util — ca un angajat bine pregătit." },
      { question: "Ce se întâmplă dacă bot-ul nu știe ceva?", answer: "Recunoaște sincer acest lucru și direcționează cererea către tine sau echipa ta — inclusiv conversația de până atunci." },
      { question: "Chatbot-ul înlocuiește complet serviciul meu clienți?", answer: "Nu, nu ăsta e scopul. El preia întrebările standard non-stop, ca echipa ta să aibă timp pentru cazurile care chiar necesită judecată umană." },
    ],
    ctaHeading: "Testează cum ar suna chatbot-ul tău.",
    ctaText: "La o discuție gratuită îți arătăm cu un exemplu concret cum ar răspunde un chatbot la cererile pentru firma ta.",
    ctaButton: "Programează o discuție gratuită",
    start: "Acasă",
    leistungenLabel: "Servicii",
  },
  tr: {
    metaTitle: "Almanya'daki İşletmeler için AI Chatbotlar | Axivore",
    metaDescription: "Müşteri taleplerini 7/24 yanıtlayan, randevu alan ve lead'leri niteleyen akıllı AI chatbotlar. Axivore KOBİ'ler için chatbotlar kuruyor — taleplerin %70-90'ı otomatik yanıtlanır.",
    ogDescription: "Müşteri taleplerini 7/24 yanıtlayan ve randevu alan bir dijital asistan — geceleri bile.",
    breadcrumb: "AI Chatbotlar",
    serviceName: "AI Chatbotlar",
    eyebrow: "Hizmetler / AI Chatbotlar",
    h1: "Hiç uyumayan AI chatbotlar.",
    subheadline: "Müşteri taleplerini 7/24 yanıtlayan, randevu alan ve potansiyel müşterileri niteleyen bir dijital asistan — geceleri ve hafta sonları da. Böylece sadece o anda telefonun başında kimse olmadığı için hiçbir talebi kaybetmezsin.",
    useCasesHeading: "Bir AI chatbot senin için neyi üstlenir",
    useCases: [
      { title: "7/24 müşteri hizmeti", text: "Çalışma saatleri, fiyatlar, hizmetler hakkındaki tekrarlayan soruları anında yanıtlar — mesai saatlerin dışında bile." },
      { title: "Randevu alma", text: "Ziyaretçiler sohbet içinde doğrudan randevu alır, e-posta ileri geri yazışması ve telefonla uğraşma olmadan." },
      { title: "Lead niteleme", text: "Bot doğru soruları sorar, gerçekten ilgilenen kişileri tanır ve tüm bilgilerle birlikte sana teslim eder." },
      { title: "Web sitende veya WhatsApp'ta", text: "Botu müşterilerinin bulunduğu yere yerleştiririz — web sitene gömülü ya da messenger üzerinden." },
    ],
    stepsHeading: "Nasıl işliyor",
    steps: [
      { n: "01", title: "Bilgi toplama", text: "Botu içeriklerinle besleriz — hizmetler, fiyatlar, sık sorulan sorular — böylece işletmen gibi konuşur." },
      { n: "02", title: "2-4 hafta içinde kurulum", text: "Chatbotu canlıya almadan önce kurar, eğitir ve gerçek sorularla test ederiz." },
      { n: "03", title: "Canlı ve öğrenmeye devam ediyor", text: "Bot canlıya alınır ve gerçek konuşmalarla sürekli gelişir. Ona destek vermeye devam ederiz." },
    ],
    faqHeading: "Sık sorulan sorular",
    faq: [
      { question: "Bir chatbot kaç talebi üstlenebilir?", answer: "Pratikte iyi kurulmuş chatbotlar tekrarlayan taleplerin %70-90'ını tamamen otomatik olarak yanıtlar. Ekibin böylece yalnızca gerçekten karmaşık durumlarla ilgilenir." },
      { question: "Bot robot gibi mi konuşuyor?", answer: "Hayır. Onu içeriğin ve üslubunla eğitiriz, böylece doğal ve yardımsever yanıtlar verir — iyi yetiştirilmiş bir çalışan gibi." },
      { question: "Bot bir şeyi bilmiyorsa ne olur?", answer: "O zaman bunu dürüstçe kabul eder ve talebi, o ana kadarki konuşmayla birlikte sana ya da ekibine yönlendirir." },
      { question: "Chatbot müşteri hizmetimin tamamen yerini alır mı?", answer: "Hayır, amaç bu değil. Standart soruları 0-24 üstlenir, böylece ekibin gerçekten insan muhakemesi gerektiren durumlara zaman ayırabilir." },
    ],
    ctaHeading: "Chatbotunun nasıl konuşacağını dene.",
    ctaText: "Ücretsiz görüşmede, işletmen için bir chatbotun talepleri nasıl yanıtlayacağını somut bir örnekle gösteririz.",
    ctaButton: "Ücretsiz görüşme ayarla",
    start: "Ana Sayfa",
    leistungenLabel: "Hizmetler",
  },
  it: {
    metaTitle: "Chatbot AI per Aziende in Germania | Axivore",
    metaDescription: "Chatbot AI intelligenti che rispondono alle richieste dei clienti 24/7, prenotano appuntamenti e qualificano i lead. Axivore costruisce chatbot per PMI — 70–90% delle richieste risposte automaticamente.",
    ogDescription: "Un assistente digitale che risponde alle richieste dei clienti e prenota appuntamenti 24/7 — anche di notte.",
    breadcrumb: "Chatbot AI",
    serviceName: "Chatbot AI",
    eyebrow: "Servizi / Chatbot AI",
    h1: "Chatbot AI che non dormono mai.",
    subheadline: "Un assistente digitale che risponde alle richieste dei clienti 24/7, prenota appuntamenti e qualifica i potenziali clienti — anche di notte e nei weekend. Così non perdi più nessuna richiesta solo perché in quel momento nessuno era al telefono.",
    useCasesHeading: "Cosa si occupa di fare un chatbot AI per te",
    useCases: [
      { title: "Servizio clienti 24/7", text: "Risponde immediatamente a domande ricorrenti — su orari, prezzi, servizi — anche fuori dal tuo orario di lavoro." },
      { title: "Prenotare appuntamenti", text: "I visitatori prenotano un appuntamento direttamente in chat, senza avanti e indietro via e-mail e senza tira e molla telefonico." },
      { title: "Qualificare i lead", text: "Il bot pone le domande giuste, riconosce i potenziali clienti seri e te li consegna con tutte le informazioni." },
      { title: "Sul tuo sito o su WhatsApp", text: "Installiamo il bot dove sono i tuoi clienti — integrato sul sito web o tramite messenger." },
    ],
    stepsHeading: "Come funziona",
    steps: [
      { n: "01", title: "Raccolta delle conoscenze", text: "Alimentiamo il bot con i tuoi contenuti — servizi, prezzi, domande frequenti — così suona come la tua azienda." },
      { n: "02", title: "Realizzazione in 2–4 settimane", text: "Costruiamo, addestriamo e testiamo il chatbot con domande reali prima che vada online." },
      { n: "03", title: "Online e continua ad apprendere", text: "Il bot va online e migliora continuamente con le conversazioni reali. Continuiamo a seguirlo." },
    ],
    faqHeading: "Domande frequenti",
    faq: [
      { question: "Quante richieste può gestire un chatbot?", answer: "In pratica, i chatbot ben costruiti rispondono completamente in automatico al 70–90% delle richieste ricorrenti. Il tuo team si occupa poi solo dei casi davvero complessi." },
      { question: "Il bot suona come un robot?", answer: "No. Lo addestriamo sui tuoi contenuti e sul tuo tono, così risponde in modo naturale e utile — come un dipendente ben formato." },
      { question: "Cosa succede se il bot non sa qualcosa?", answer: "Allora lo ammette onestamente e inoltra la richiesta a te o al tuo team — inclusa la conversazione fino a quel momento." },
      { question: "Il chatbot sostituisce completamente il mio servizio clienti?", answer: "No, non è questo l'obiettivo. Gestisce le domande standard 24 ore su 24, così il tuo team ha tempo per i casi che richiedono davvero un giudizio umano." },
    ],
    ctaHeading: "Prova come suonerebbe il tuo chatbot.",
    ctaText: "Nel colloquio gratuito ti mostriamo con un esempio concreto come un chatbot risponderebbe alle richieste per la tua azienda.",
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

export default async function KiChatbotsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  const contentLocale = resolveContentLocale(rawLocale, AVAILABLE);
  const c = CONTENT[contentLocale as "de" | "hr" | "en" | "ro" | "tr" | "it"];
  const pageUrl = `https://axivore.io${localePathname(contentLocale, PATH)}`;
  const leistungenUrl = `https://axivore.io${localePathname(contentLocale, "/leistungen")}`;
  const siteUrl = `https://axivore.io${localePathname(contentLocale, "")}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${pageUrl}/#service`,
        name: c.serviceName,
        serviceType: "KI-Chatbot-Entwicklung für Unternehmen",
        description: "Entwicklung intelligenter KI-Chatbots, die Kundenanfragen beantworten, Termine buchen und Leads qualifizieren — für KMU in Deutschland.",
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

      <section className="max-w-3xl mx-auto px-6 py-10">
        <h2 className="text-[24px] font-bold mb-7">{c.useCasesHeading}</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          {c.useCases.map((u) => (
            <div key={u.title} className="rounded-xl p-5" style={{ background: "rgba(255,255,255,0.028)", border: "1px solid rgba(255,255,255,0.07)" }}>
              <h3 className="text-[16px] font-semibold mb-2">{u.title}</h3>
              <p className="text-[13.5px] leading-relaxed text-white/50">{u.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-10">
        <h2 className="text-[24px] font-bold mb-7">{c.stepsHeading}</h2>
        <div className="space-y-5">
          {c.steps.map((s) => (
            <div key={s.n} className="flex gap-5">
              <span className="text-[#C97C3C] font-black text-[20px] shrink-0">{s.n}</span>
              <div>
                <h3 className="text-[16px] font-semibold mb-1">{s.title}</h3>
                <p className="text-[14px] leading-relaxed text-white/50">{s.text}</p>
              </div>
            </div>
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
        <div className="rounded-2xl px-8 py-11 text-center" style={{ background: "linear-gradient(135deg,rgba(201,124,60,0.12),rgba(224,163,96,0.05))", border: "1px solid rgba(201,124,60,0.2)" }}>
          <h2 className="text-[24px] font-bold mb-3">{c.ctaHeading}</h2>
          <p className="text-white/55 mb-8 max-w-lg mx-auto">{c.ctaText}</p>
          <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="inline-block font-semibold px-7 py-3.5 rounded-full transition-transform hover:scale-[1.03]" style={{ background: "linear-gradient(135deg,#C97C3C,#E0A360)", color: "#0C0C0F" }}>
            {c.ctaButton}
          </a>
        </div>
      </section>
    </ServiceShell>
  );
}
