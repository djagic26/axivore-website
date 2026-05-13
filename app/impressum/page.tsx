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
            <h2 className="text-white text-xs font-semibold uppercase tracking-widest mb-3 text-white/30">Betreiber</h2>
            <p>Dino Jagić</p>
            <p>Rotweiss 172</p>
            <p>70437 Stuttgart</p>
            <p>Deutschland</p>
          </div>

          <div>
            <h2 className="text-white text-xs font-semibold uppercase tracking-widest mb-3 text-white/30">Kontakt</h2>
            <p>E-Mail: <a href="mailto:hello@axivore.io" className="text-[#A09AFF] hover:underline">hello@axivore.io</a></p>
            <p>Telefon: <a href="tel:+4917293772307" className="text-[#A09AFF] hover:underline">+49 172 9372307</a></p>
          </div>

          <div>
            <h2 className="text-white text-xs font-semibold uppercase tracking-widest mb-3 text-white/30">Steuerliche Angaben</h2>
            <p className="text-white/40 italic">Steuernummer wird nach Gewerbeanmeldung ergänzt.</p>
          </div>

          <div>
            <h2 className="text-white text-xs font-semibold uppercase tracking-widest mb-3 text-white/30">Verantwortlich für den Inhalt</h2>
            <p>Dino Jagić</p>
            <p>Rotweiss 172</p>
            <p>70437 Stuttgart</p>
          </div>

          <div>
            <h2 className="text-white text-xs font-semibold uppercase tracking-widest mb-3 text-white/30">Haftungsausschluss</h2>
            <p>
              Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine Haftung für die Inhalte externer Links.
              Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich.
            </p>
          </div>

        </section>
      </div>
    </main>
  );
}
