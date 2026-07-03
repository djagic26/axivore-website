import type { Metadata } from "next";
import Link from "next/link";
import { ServiceShell, CALENDLY_URL } from "@/components/ServiceShell";

const SITE_URL = "https://axivore.io";

export const metadata: Metadata = {
  title: "Leistungen — KI-Automatisierung & Chatbots für KMU | Axivore",
  description:
    "Was Axivore für kleine und mittlere Unternehmen in Deutschland baut: KI-Automatisierungen, intelligente Chatbots und maßgeschneiderte Software. Live in Wochen.",
  alternates: { canonical: `${SITE_URL}/leistungen` },
  openGraph: {
    title: "Leistungen — KI-Automatisierung & Chatbots für KMU | Axivore",
    description:
      "KI-Automatisierungen, intelligente Chatbots und maßgeschneiderte Software für kleine Unternehmen in Deutschland.",
    url: `${SITE_URL}/leistungen`,
    siteName: "Axivore",
    locale: "de_DE",
    type: "website",
  },
};

const services = [
  {
    href: "/leistungen/ki-automatisierung",
    eyebrow: "Automatisierung",
    title: "KI-Automatisierung",
    text: "Angebote, Rechnungen, Berichte, Dateneingaben — wiederkehrende Aufgaben laufen automatisch. Du sparst 5–15 Stunden pro Woche.",
  },
  {
    href: "/leistungen/ki-chatbots",
    eyebrow: "Chatbots",
    title: "KI-Chatbots",
    text: "Ein digitaler Assistent, der rund um die Uhr Kundenanfragen beantwortet, Termine bucht und Leads qualifiziert — auch nachts.",
  },
];

const breadcrumb = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Start", item: SITE_URL },
    { "@type": "ListItem", position: 2, name: "Leistungen", item: `${SITE_URL}/leistungen` },
  ],
};

export default function LeistungenPage() {
  return (
    <ServiceShell>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />

      <section className="max-w-5xl mx-auto px-6 pt-20 pb-12">
        <p className="text-[11px] tracking-[0.2em] uppercase text-[#A09AFF] mb-5">Leistungen</p>
        <h1
          className="font-black tracking-[-0.03em] leading-[1.02] mb-6"
          style={{ fontSize: "clamp(38px,6vw,68px)" }}
        >
          KI-Automatisierung &amp; Software
          <br />
          für kleine Unternehmen.
        </h1>
        <p className="text-[16px] leading-relaxed text-white/55 max-w-2xl">
          Wir bauen Systeme, die deine Routinearbeit übernehmen — von der ersten Idee bis
          live in Wochen, nicht Monaten. Speziell für Geschäftsführer mit 5–30 Mitarbeitern
          in Deutschland, die selbst mit anpacken.
        </p>
      </section>

      <section className="max-w-5xl mx-auto px-6 pb-8">
        <div className="grid sm:grid-cols-2 gap-5">
          {services.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="group block rounded-2xl p-7 transition-colors"
              style={{
                background: "rgba(255,255,255,0.028)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <p className="text-[10.5px] tracking-[0.18em] uppercase text-[#A09AFF] mb-3">{s.eyebrow}</p>
              <h2 className="text-[22px] font-semibold mb-3 group-hover:text-[#C4B8FF] transition-colors">{s.title}</h2>
              <p className="text-[14px] leading-relaxed text-white/50">{s.text}</p>
              <span className="inline-flex items-center gap-1.5 mt-5 text-[13px] font-medium text-[#A09AFF]">
                Mehr erfahren
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-10">
        <h2 className="text-[26px] md:text-[30px] font-bold tracking-tight mb-5">
          Was sich in deinem Betrieb automatisieren lässt
        </h2>
        <p className="text-[15px] leading-relaxed text-white/55 max-w-2xl mb-9">
          Die meisten kleinen Unternehmen verlieren jede Woche Stunden an denselben
          wiederkehrenden Aufgaben. Genau da setzen wir an — hier die häufigsten Beispiele aus
          der Praxis:
        </p>
        <div className="grid sm:grid-cols-2 gap-x-10 gap-y-6">
          {[
            ["Angebote & Kostenvoranschläge", "Aus ein paar Stichpunkten entsteht das fertige, kalkulierte Angebot — formatiert und versandfertig in Minuten statt Stunden."],
            ["Rechnungen & Nachfassen", "Rechnungen entstehen nach dem Auftrag automatisch, offene Posten werden freundlich nachgefasst — ohne dass du daran denken musst."],
            ["Terminvereinbarung", "Kunden buchen selbst einen freien Termin, Bestätigung und Erinnerung laufen automatisch — kein Telefon-Pingpong mehr."],
            ["Kundenanfragen beantworten", "Wiederkehrende Fragen zu Preisen, Öffnungszeiten und Leistungen werden rund um die Uhr beantwortet — auch nach Feierabend."],
            ["Berichte & Reporting", "Zahlen aus verschiedenen Quellen werden automatisch zusammengeführt — der fertige Bericht liegt montags in deinem Postfach."],
            ["Dateneingabe & Übertragung", "Daten wandern automatisch von A nach B — zwischen Formular, Tabelle und deinem System, ganz ohne Copy-Paste."],
          ].map(([title, text]) => (
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
        <h2 className="text-[26px] md:text-[30px] font-bold tracking-tight mb-8">
          So läuft ein Projekt ab
        </h2>
        <div className="grid sm:grid-cols-3 gap-8">
          {[
            ["01", "Kostenloses Gespräch", "Wir schauen uns deine Abläufe an und finden die Aufgabe, die sich am schnellsten lohnt. Ehrlich — auch wenn die Antwort manchmal lautet: noch nicht."],
            ["02", "Festpreis-Angebot", "Du bekommst ein schriftliches Angebot mit fixem Preis und klarem Umfang. Danach ändert sich der Preis nicht mehr."],
            ["03", "Live in Wochen", "Wir bauen, testen gemeinsam mit dir und gehen live — meist in 1 bis 2 Wochen, nicht in Monaten."],
          ].map(([num, title, text]) => (
            <div key={num}>
              <div className="text-[13px] font-bold text-[#A09AFF] mb-3">{num}</div>
              <h3 className="text-[16px] font-semibold mb-2">{title}</h3>
              <p className="text-[13.5px] leading-relaxed text-white/50">{text}</p>
            </div>
          ))}
        </div>
        <p className="text-[14px] leading-relaxed text-white/50 max-w-2xl mt-10">
          Du bist dir nicht sicher, ob dein Betrieb dafür bereit ist? Schau dir an, wie wir für{" "}
          <Link href="/branchen" className="text-[#A09AFF] underline underline-offset-2 hover:text-[#C4B8FF]">
            verschiedene Branchen
          </Link>{" "}
          arbeiten, oder wirf einen Blick in unseren{" "}
          <Link href="/ratgeber" className="text-[#A09AFF] underline underline-offset-2 hover:text-[#C4B8FF]">
            Ratgeber
          </Link>
          .
        </p>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-16">
        <div
          className="rounded-2xl px-8 py-12 text-center"
          style={{ background: "linear-gradient(135deg,rgba(124,92,255,0.12),rgba(160,154,255,0.05))", border: "1px solid rgba(124,92,255,0.2)" }}
        >
          <h2 className="text-[26px] font-bold mb-3">Sag uns dein Problem.</h2>
          <p className="text-white/55 mb-8 max-w-xl mx-auto">
            In einem kostenlosen 30-Minuten-Gespräch schauen wir gemeinsam, welche
            Aufgabe sich bei dir am schnellsten automatisieren lässt. Kein Pitch.
          </p>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block font-semibold px-7 py-3.5 rounded-full transition-transform hover:scale-[1.03]"
            style={{ background: "linear-gradient(135deg,#7C5CFF,#A09AFF)", color: "#0C0C0F" }}
          >
            Kostenloses Gespräch buchen
          </a>
        </div>
      </section>
    </ServiceShell>
  );
}
