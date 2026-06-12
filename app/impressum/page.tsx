import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Impressum — Axivore",
  robots: { index: false },
};

export default function Impressum() {
  return (
    <main className="min-h-screen bg-[#050507] text-white px-6 py-24">
      <div className="max-w-2xl mx-auto">

        <Link href="/" className="inline-flex items-center gap-2 text-white/30 text-sm hover:text-white/60 transition-colors mb-12">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M19 12H5M12 5l-7 7 7 7"/>
          </svg>
          Zurück
        </Link>

        <h1 className="text-3xl font-semibold tracking-tight mb-2">Impressum</h1>
        <p className="text-white/30 text-sm mb-12">Angaben gemäß § 5 TMG</p>

        <section className="space-y-8 text-white/70 text-sm leading-relaxed">

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-widest mb-3 text-white/30">Betreiber</h2>
            <p>Dino Jagić</p>
            <p>Axivore</p>
            <p>Rotweg 172</p>
            <p>70437 Stuttgart</p>
            <p>Deutschland</p>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-widest mb-3 text-white/30">Kontakt</h2>
            <p>E-Mail: <a href="mailto:hello@axivore.io" className="text-[#A09AFF] hover:underline">hello@axivore.io</a></p>
            <p>Telefon: <a href="tel:+491729372307" className="text-[#A09AFF] hover:underline">+49 172 9372307</a></p>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-widest mb-3 text-white/30">Steuerliche Angaben</h2>
            <p className="text-white/40 italic">Steuernummer wird nach Erteilung durch das Finanzamt ergänzt.</p>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-widest mb-3 text-white/30">Umsatzsteuer</h2>
            <p>Gemäß § 19 UStG wird keine Umsatzsteuer berechnet (Kleinunternehmerregelung).</p>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-widest mb-3 text-white/30">Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
            <p>Dino Jagić</p>
            <p>Rotweg 172</p>
            <p>70437 Stuttgart</p>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-widest mb-3 text-white/30">Haftung für Inhalte</h2>
            <p>
              Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach den
              allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht
              verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen. Verpflichtungen zur
              Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon
              unberührt.
            </p>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-widest mb-3 text-white/30">Haftung für Links</h2>
            <p>
              Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben.
              Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten
              Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Eine permanente
              inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung
              nicht zumutbar.
            </p>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-widest mb-3 text-white/30">Urheberrecht</h2>
            <p>
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen
              Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
              Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>
          </div>

          <div className="pt-4 border-t border-white/10">
            <p className="text-white/30 text-xs">Letzte Aktualisierung: Juni 2026</p>
          </div>

        </section>
      </div>
    </main>
  );
}
