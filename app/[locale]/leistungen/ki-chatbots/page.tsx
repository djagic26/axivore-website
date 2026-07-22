import type { Metadata } from "next";
import { ServiceShell, CALENDLY_URL } from "@/components/ServiceShell";
import { resolveContentLocale, partialPageMetadata, localePathname, type AppLocale } from "@/lib/seo";

const AVAILABLE: readonly AppLocale[] = ["de", "hr"];
const PATH = "/leistungen/ki-chatbots";

type Item = { title: string; text: string };
type Step = { n: string; title: string; text: string };
type Faq = { question: string; answer: string };

const CONTENT: Record<"de" | "hr", {
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
    ],
    ctaHeading: "Isprobaj kako bi tvoj chatbot zvučao.",
    ctaText: "Na besplatnom razgovoru pokazujemo ti na konkretnom primjeru kako bi chatbot za tvoju tvrtku odgovarao na upite.",
    ctaButton: "Zakaži besplatan razgovor",
    start: "Početna",
    leistungenLabel: "Usluge",
  },
};

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const contentLocale = resolveContentLocale(rawLocale, AVAILABLE);
  return partialPageMetadata(
    contentLocale,
    PATH,
    { de: { title: CONTENT.de.metaTitle, description: CONTENT.de.metaDescription }, hr: { title: CONTENT.hr.metaTitle, description: CONTENT.hr.metaDescription } },
    AVAILABLE
  );
}

export default async function KiChatbotsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  const contentLocale = resolveContentLocale(rawLocale, AVAILABLE);
  const c = CONTENT[contentLocale as "de" | "hr"];
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
        <p className="text-[11px] tracking-[0.2em] uppercase text-[#A09AFF] mb-5">{c.eyebrow}</p>
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
              <span className="text-[#7C5CFF] font-black text-[20px] shrink-0">{s.n}</span>
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
