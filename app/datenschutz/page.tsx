import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Datenschutzerklärung — Axivore",
  robots: { index: false },
};

export default function Datenschutz() {
  return (
    <main className="min-h-screen bg-[#050507] text-white px-6 py-24">
      <div className="max-w-2xl mx-auto">

        <Link href="/" className="inline-flex items-center gap-2 text-white/30 text-sm hover:text-white/60 transition-colors mb-12">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M19 12H5M12 5l-7 7 7 7"/>
          </svg>
          Zurück
        </Link>

        <h1 className="text-3xl font-semibold tracking-tight mb-2">Datenschutzerklärung</h1>
        <p className="text-white/30 text-sm mb-12">Gemäß Art. 13, 14 DSGVO</p>

        <section className="space-y-10 text-white/70 text-sm leading-relaxed">

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-widest mb-3 text-white/30">1. Verantwortlicher</h2>
            <p>
              Verantwortlicher im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:
            </p>
            <div className="mt-3 space-y-1">
              <p>Dino Jagić</p>
              <p>Axivore</p>
              <p>Rotweg 172</p>
              <p>70437 Stuttgart</p>
              <p>Deutschland</p>
              <p className="mt-2">
                E-Mail:{" "}
                <a href="mailto:hello@axivore.io" className="text-[#A09AFF] hover:underline">
                  hello@axivore.io
                </a>
              </p>
              <p>
                Telefon:{" "}
                <a href="tel:+491729372307" className="text-[#A09AFF] hover:underline">
                  +49 172 9372307
                </a>
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-widest mb-3 text-white/30">2. Allgemeine Hinweise zur Datenverarbeitung</h2>
            <p>
              Wir nehmen den Schutz Ihrer persönlichen Daten ernst. Diese Datenschutzerklärung informiert Sie darüber,
              welche personenbezogenen Daten wir erheben, wie wir sie verwenden und welche Rechte Sie in Bezug auf
              Ihre Daten haben. Personenbezogene Daten werden nur im notwendigen Umfang erhoben und verarbeitet.
            </p>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-widest mb-3 text-white/30">3. Hosting</h2>
            <p>
              Diese Website wird gehostet bei:
            </p>
            <div className="mt-3 space-y-1">
              <p>Vercel Inc.</p>
              <p>340 Pine Street, Suite 701</p>
              <p>San Francisco, CA 94104, USA</p>
            </div>
            <p className="mt-3">
              Bei jedem Aufruf unserer Website werden durch den Hosting-Anbieter automatisch Server-Logfiles
              erfasst. Dazu gehören: IP-Adresse, Datum und Uhrzeit des Abrufs, aufgerufene URL,
              verwendeter Browser und Betriebssystem sowie Referrer-URL. Diese Daten werden ausschließlich
              zur Sicherstellung des technischen Betriebs und zur Abwehr von Angriffen verarbeitet.
            </p>
            <p className="mt-3">
              Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse am sicheren Betrieb
              der Website).
            </p>
            <p className="mt-3">
              Da Vercel ein US-amerikanisches Unternehmen ist, können Daten in die USA übermittelt werden.
              Vercel ist gemäß dem EU-U.S. Data Privacy Framework zertifiziert. Ergänzend werden
              Standardvertragsklauseln der EU-Kommission eingesetzt (Art. 46 Abs. 2 lit. c DSGVO).
            </p>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-widest mb-3 text-white/30">4. Cookies und lokaler Speicher</h2>
            <p>
              Unsere Website verwendet ausschließlich technisch notwendige Cookies und den lokalen Speicher
              (localStorage) des Browsers. Eine Einwilligung ist hierfür gemäß § 25 Abs. 2 TTDSG nicht
              erforderlich.
            </p>
            <div className="mt-4 space-y-3">
              <div className="bg-white/5 rounded-lg p-4 space-y-1">
                <p className="text-white font-medium">axivore-lang <span className="text-white/30 font-normal">(Cookie)</span></p>
                <p className="text-white/50">Speichert die gewählte Sprache der Website.</p>
                <p className="text-white/30 text-xs">Laufzeit: Sitzungsende / bis zur manuellen Löschung</p>
              </div>
              <div className="bg-white/5 rounded-lg p-4 space-y-1">
                <p className="text-white font-medium">axivore-theme <span className="text-white/30 font-normal">(localStorage)</span></p>
                <p className="text-white/50">Speichert die Darstellungseinstellung (Hell-/Dunkelmodus).</p>
                <p className="text-white/30 text-xs">Keine Übermittlung an Server</p>
              </div>
              <div className="bg-white/5 rounded-lg p-4 space-y-1">
                <p className="text-white font-medium">axivore-lang <span className="text-white/30 font-normal">(localStorage)</span></p>
                <p className="text-white/50">Speichert die Sprachpräferenz lokal im Browser.</p>
                <p className="text-white/30 text-xs">Keine Übermittlung an Server</p>
              </div>
            </div>
            <p className="mt-3">
              Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der
              nutzerfreundlichen Darstellung der Website).
            </p>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-widest mb-3 text-white/30">5. KI-Assistent (Axi)</h2>
            <p>
              Unsere Website bietet einen KI-gestützten Chat-Assistenten an. Wenn Sie diesen nutzen, werden
              die von Ihnen eingegebenen Nachrichten an unseren Server übermittelt und dort verarbeitet,
              um eine Antwort zu generieren.
            </p>
            <p className="mt-3">
              <span className="text-white">Was wird verarbeitet:</span> Ausschließlich die Inhalte, die
              Sie aktiv in das Chat-Fenster eingeben. Chat-Verläufe werden nicht dauerhaft gespeichert;
              die Konversation wird nach Beendigung der Browsersitzung nicht aufbewahrt.
            </p>
            <p className="mt-3">
              Wir empfehlen, keine sensiblen personenbezogenen Daten (z.B. Passwörter, Zahlungsdaten,
              Gesundheitsinformationen) über den Chat zu übermitteln.
            </p>
            <p className="mt-3">
              Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (Durchführung vorvertraglicher Maßnahmen)
              bzw. Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Bereitstellung eines
              Beratungsangebots).
            </p>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-widest mb-3 text-white/30">6. Kontaktaufnahme per E-Mail</h2>
            <p>
              Wenn Sie uns per E-Mail kontaktieren, werden Ihre übermittelten Daten (E-Mail-Adresse,
              ggf. Name und Nachrichteninhalt) zum Zweck der Bearbeitung Ihrer Anfrage verarbeitet und
              gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
            </p>
            <p className="mt-3">
              Rechtsgrundlage: Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Kommunikation) oder
              Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der Beantwortung von Anfragen).
            </p>
            <p className="mt-3">
              Die Daten werden gelöscht, sobald die Anfrage abschließend bearbeitet ist und keine
              gesetzlichen Aufbewahrungspflichten entgegenstehen.
            </p>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-widest mb-3 text-white/30">7. Analyse- und Tracking-Tools</h2>
            <p>
              Wir setzen auf dieser Website keine Analyse-, Tracking- oder Werbe-Tools ein. Es werden
              keine Nutzungsprofile erstellt, keine Daten an Werbenetzwerke übermittelt und keine
              Third-Party-Tracking-Cookies gesetzt.
            </p>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-widest mb-3 text-white/30">8. Externe Links</h2>
            <p>
              Unsere Website kann Links zu externen Webseiten Dritter enthalten. Für die
              Datenschutzpraktiken der verlinkten Seiten sind deren jeweilige Betreiber verantwortlich.
              Wir haben keinen Einfluss auf deren Inhalte und Datenschutzpraktiken.
            </p>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-widest mb-3 text-white/30">9. Ihre Rechte als betroffene Person</h2>
            <p className="mb-4">
              Ihnen stehen gegenüber uns folgende Rechte zu:
            </p>
            <ul className="space-y-2 ml-4">
              <li className="flex gap-2">
                <span className="text-[#A09AFF] shrink-0">—</span>
                <span><span className="text-white">Auskunft</span> über Ihre bei uns gespeicherten Daten (Art. 15 DSGVO)</span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#A09AFF] shrink-0">—</span>
                <span><span className="text-white">Berichtigung</span> unrichtiger Daten (Art. 16 DSGVO)</span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#A09AFF] shrink-0">—</span>
                <span><span className="text-white">Löschung</span> Ihrer Daten (Art. 17 DSGVO)</span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#A09AFF] shrink-0">—</span>
                <span><span className="text-white">Einschränkung</span> der Verarbeitung (Art. 18 DSGVO)</span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#A09AFF] shrink-0">—</span>
                <span><span className="text-white">Datenübertragbarkeit</span> (Art. 20 DSGVO)</span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#A09AFF] shrink-0">—</span>
                <span><span className="text-white">Widerspruch</span> gegen die Verarbeitung (Art. 21 DSGVO)</span>
              </li>
            </ul>
            <p className="mt-4">
              Zur Ausübung Ihrer Rechte wenden Sie sich bitte an:{" "}
              <a href="mailto:hello@axivore.io" className="text-[#A09AFF] hover:underline">
                hello@axivore.io
              </a>
            </p>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-widest mb-3 text-white/30">10. Beschwerderecht bei der Aufsichtsbehörde</h2>
            <p>
              Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde über die Verarbeitung
              Ihrer personenbezogenen Daten durch uns zu beschweren. Die zuständige Aufsichtsbehörde
              für Baden-Württemberg ist:
            </p>
            <div className="mt-3 space-y-1">
              <p className="text-white">Der Landesbeauftragte für den Datenschutz und die Informationsfreiheit Baden-Württemberg</p>
              <p>Königstraße 10a</p>
              <p>70173 Stuttgart</p>
              <p className="mt-2">
                <a
                  href="https://www.baden-wuerttemberg.datenschutz.de"
                  className="text-[#A09AFF] hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.baden-wuerttemberg.datenschutz.de
                </a>
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-xs font-semibold uppercase tracking-widest mb-3 text-white/30">11. Datensicherheit</h2>
            <p>
              Diese Website nutzt SSL-/TLS-Verschlüsselung für die sichere Übertragung aller Daten.
              Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers
              von „http://" auf „https://" wechselt.
            </p>
          </div>

          <div className="pt-4 border-t border-white/10">
            <h2 className="text-xs font-semibold uppercase tracking-widest mb-3 text-white/30">12. Aktualität dieser Datenschutzerklärung</h2>
            <p>
              Diese Datenschutzerklärung ist aktuell gültig. Mit der Weiterentwicklung unserer Website
              oder bei geänderten gesetzlichen Vorgaben kann es notwendig werden, diese
              Datenschutzerklärung anzupassen. Wir empfehlen, diese Seite regelmäßig zu besuchen.
            </p>
            <p className="mt-4 text-white/30 text-xs">Letzte Aktualisierung: Juni 2026</p>
          </div>

        </section>
      </div>
    </main>
  );
}
