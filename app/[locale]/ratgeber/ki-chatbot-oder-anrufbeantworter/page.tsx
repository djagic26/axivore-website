import type { Metadata } from "next";
import Link from "next/link";
import { ArticleLayout } from "@/components/ratgeber/ArticleLayout";
import { getRatgeberArticle } from "@/lib/ratgeber";

const article = getRatgeberArticle("ki-chatbot-oder-anrufbeantworter")!;
const PAGE_URL = `https://axivore.io/ratgeber/${article.slug}`;

export const metadata: Metadata = {
  title: article.metaTitle,
  description: article.description,
  alternates: { canonical: PAGE_URL },
  openGraph: {
    title: article.metaTitle,
    description: article.description,
    url: PAGE_URL,
    siteName: "Axivore",
    locale: "de_DE",
    type: "article",
  },
};

const comparison = [
  { label: "Kosten", ab: "Einmalig sehr günstig", buero: "Laufend, ab mehreren Hundert €/Monat", ki: "Einmalig ab 499 €, geringe laufende Kosten" },
  { label: "Erreichbar", ab: "24/7 — aber nur Aufnahme", buero: "Zu Bürozeiten", ki: "24/7 — mit echten Antworten" },
  { label: "Beantwortet Fragen", ab: "Nein", buero: "Ja, Standardfragen", ki: "Ja, alles was du ihm beibringst" },
  { label: "Bucht Termine", ab: "Nein", buero: "Ja", ki: "Ja, direkt in deinen Kalender" },
  { label: "Strukturierte Übergabe", ab: "Du hörst Nachrichten ab", buero: "Zettel / E-Mail", ki: "Anliegen + Kontakt sauber erfasst" },
  { label: "Persönlicher Kontakt", ab: "Nein", buero: "Ja", ki: "Nein — übergibt an dich, wenn es persönlich wird" },
];

export default function Page() {
  return (
    <ArticleLayout article={article}>
      <p>
        Du stehst auf der Leiter, das Telefon klingelt. Beim Kunden im Gespräch — es klingelt
        wieder. Nach Feierabend rufst du zurück, aber der Interessent hat längst beim nächsten
        Betrieb angerufen. Verpasste Anrufe sind für kleine Betriebe eines der teuersten Probleme —
        gerade weil man es nicht auf einer Rechnung sieht. Die Frage ist: Was tun? Wir vergleichen
        die drei üblichen Optionen — ehrlich, mit allen Schwächen.
      </p>

      <h2>Das eigentliche Problem: Wer nicht durchkommt, ruft den Nächsten an</h2>
      <p>
        Wer heute einen Handwerker, einen Tisch oder einen Termin sucht, hat wenig Geduld. Kommt
        niemand ans Telefon, wird selten gewartet — es wird die nächste Nummer auf der Liste
        gewählt. Der Auftrag ist weg, bevor du überhaupt wusstest, dass es ihn gab. Jede Lösung
        muss sich daran messen lassen: Fängt sie den Interessenten in dem Moment auf, in dem er
        anruft oder schreibt?
      </p>

      <h2>Option 1: Der Anrufbeantworter</h2>
      <p>
        Die klassische Lösung — kostet fast nichts und ist schnell eingerichtet. Das Problem kennst
        du aus eigener Erfahrung: Auf einen Anrufbeantworter <strong>sprechen viele Anrufer gar
        nicht erst drauf</strong>, sondern legen auf. Und selbst wenn eine Nachricht da ist, beginnt
        das Rückruf-Pingpong: Du rufst zurück, der Kunde ist nicht erreichbar, er ruft zurück, du
        stehst auf der Leiter. Der Anrufbeantworter nimmt auf — er löst nichts.
      </p>

      <h2>Option 2: Bürokraft oder externer Telefonservice</h2>
      <p>
        Ein Mensch am Telefon ist die angenehmste Lösung für den Anrufer — keine Frage. Aber sie hat
        ihren Preis: Eine eigene Bürokraft lohnt sich erst ab einer gewissen Betriebsgröße, und
        externe Telefonservices kosten laufend Geld, kennen dein Geschäft aber nur oberflächlich.
        Bei Fachfragen (&bdquo;Macht ihr auch Altbausanierung?&ldquo;) wird es dünn, und außerhalb
        der Bürozeiten klingelt es wieder ins Leere.
      </p>

      <h2>Option 3: Der KI-Assistent</h2>
      <p>
        Ein KI-Assistent — als Chat auf deiner Website, über WhatsApp oder am Telefon — ist die
        neueste Option, und die einzige, die rund um die Uhr <em>antwortet</em> statt nur
        aufzunehmen. Konkret kann er:
      </p>
      <ul>
        <li>
          <strong>Standardfragen sofort beantworten:</strong> Öffnungszeiten, Leistungen,
          Einzugsgebiet, grobe Preisspannen — alles, was du ihm einmal beigebracht hast.
        </li>
        <li>
          <strong>Termine direkt buchen:</strong> Der Interessent wählt einen freien Slot, die
          Bestätigung geht automatisch raus — ohne Rückruf-Pingpong.
        </li>
        <li>
          <strong>Anliegen strukturiert aufnehmen:</strong> Statt einer halb verständlichen
          Sprachnachricht bekommst du Name, Kontakt, Anliegen und Dringlichkeit sauber notiert.
        </li>
        <li>
          <strong>Übergeben, wenn es ernst wird:</strong> Ein guter Assistent erkennt, wann ein
          Mensch ran muss — und leitet weiter, statt den Kunden im Kreis zu schicken.
        </li>
      </ul>

      <h2>Der ehrliche Vergleich</h2>
      <div className="mb-6 overflow-x-auto rounded-xl" style={{ border: "1px solid rgba(255,255,255,0.1)" }}>
        <table className="w-full text-[13.5px] leading-[1.5]">
          <thead>
            <tr className="text-left" style={{ background: "rgba(255,255,255,0.04)" }}>
              <th className="p-3.5 font-semibold text-white"> </th>
              <th className="p-3.5 font-semibold text-white">Anrufbeantworter</th>
              <th className="p-3.5 font-semibold text-white">Bürokraft / Service</th>
              <th className="p-3.5 font-semibold" style={{ color: "#A09AFF" }}>KI-Assistent</th>
            </tr>
          </thead>
          <tbody>
            {comparison.map((row) => (
              <tr key={row.label} style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
                <td className="p-3.5 font-medium text-white/85">{row.label}</td>
                <td className="p-3.5 text-white/55">{row.ab}</td>
                <td className="p-3.5 text-white/55">{row.buero}</td>
                <td className="p-3.5 text-white/75">{row.ki}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2>Wann der Anrufbeantworter völlig reicht</h2>
      <p>
        Ehrliche Antwort: nicht jeder Betrieb braucht KI. Wenn du fast nur Stammkunden hast, kaum
        Neuanfragen übers Telefon kommen und du Rückrufe zuverlässig am selben Tag schaffst — dann
        tut es der Anrufbeantworter. Investier das Geld woanders.
      </p>

      <h2>Wann sich der KI-Assistent lohnt</h2>
      <ul>
        <li>Du verpasst regelmäßig Anrufe, weil du auf der Baustelle, im Service oder in Behandlung bist.</li>
        <li>Neuanfragen sind dir wichtig — und du weißt, dass einige davon beim Wettbewerb landen.</li>
        <li>Dieselben fünf Fragen fressen jeden Tag Zeit: Öffnungszeiten, Preise, Verfügbarkeit.</li>
        <li>Termine per Hin-und-her-Telefonieren zu koordinieren nervt dich (und deine Kunden).</li>
      </ul>
      <p>
        Treffen zwei oder mehr Punkte zu, rechnet sich der Assistent schnell: Bei uns startet ein
        solches System <strong>ab 499&nbsp;€ zum Festpreis</strong> — einmalig, mit schriftlichem
        Angebot vorab. Details auf der <Link href="/preise">Preisseite</Link>, mehr zur Technik auf
        unserer Seite über <Link href="/leistungen/ki-chatbots">KI-Chatbots für Unternehmen</Link>.
      </p>

      <h2>Fazit</h2>
      <p>
        Der Anrufbeantworter nimmt auf, der Mensch kostet laufend, der KI-Assistent antwortet — rund
        um die Uhr, zum Einmalpreis. Welche Lösung für deinen Betrieb passt, hängt von deinem
        Anrufaufkommen ab, nicht vom Technik-Hype. Wenn du unsicher bist: Wir sagen dir in 30
        Minuten ehrlich, ob sich das bei dir lohnt — auch wenn die Antwort &bdquo;nein&ldquo; ist.
      </p>
    </ArticleLayout>
  );
}
