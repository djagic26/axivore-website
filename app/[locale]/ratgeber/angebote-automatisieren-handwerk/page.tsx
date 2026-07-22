import type { Metadata } from "next";
import Link from "next/link";
import { ArticleLayout } from "@/components/ratgeber/ArticleLayout";
import { getRatgeberArticle } from "@/lib/ratgeber";

const article = getRatgeberArticle("angebote-automatisieren-handwerk")!;
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

export default function Page() {
  return (
    <ArticleLayout article={article}>
      <p>
        Es ist 21 Uhr. Die Baustelle ist seit Stunden vorbei, aber du sitzt noch am Küchentisch und
        tippst ein Angebot. Positionen raussuchen, Preise nachschlagen, alles ins richtige Format
        bringen — und morgen wartet das nächste. Wenn dir das bekannt vorkommt, ist dieser Artikel
        für dich. Wir erklären, was &bdquo;Angebote automatisieren&ldquo; konkret bedeutet, was es
        wirklich bringt — und genauso ehrlich: was es nicht kann.
      </p>

      <h2>Was &bdquo;Angebote automatisieren&ldquo; konkret heißt</h2>
      <p>
        Die Idee ist einfach: Du gibst nur noch die Eckdaten ein — was gemacht werden soll, welche
        Flächen oder Mengen, welche Besonderheiten. Den Rest übernimmt ein System, das deine
        Preislogik und deine Standardpositionen kennt. Heraus kommt ein fertiges, sauber
        formatiertes Angebot als PDF — mit deinem Logo, deinen Texten, deinen Preisen. Statt 45 bis
        60 Minuten pro Angebot brauchst du noch ein paar Minuten für die Eingabe und einen kurzen
        Kontrollblick.
      </p>

      <h2>Wie das technisch funktioniert — ohne Fachchinesisch</h2>
      <p>Ein automatisiertes Angebotssystem besteht aus vier Bausteinen:</p>
      <ul>
        <li>
          <strong>Dein Leistungskatalog:</strong> Deine typischen Positionen (z.&nbsp;B.
          &bdquo;Wand spachteln und streichen, pro m²&ldquo;) werden einmal sauber erfasst.
        </li>
        <li>
          <strong>Deine Preislogik:</strong> Material, Arbeitszeit, Zuschläge, Anfahrt — die Regeln,
          nach denen du heute im Kopf oder in Excel kalkulierst, stecken im System.
        </li>
        <li>
          <strong>KI für den Text:</strong> Aus deinen Stichpunkten formuliert die KI die
          Beschreibungen — professionell, aber in deinem Ton. Keine Textbausteine, die nach
          Serienbrief klingen.
        </li>
        <li>
          <strong>Deine Vorlage:</strong> Das fertige Angebot sieht aus wie deins, weil es deins
          ist — Logo, Aufbau, Zahlungsbedingungen, alles wie gewohnt.
        </li>
      </ul>
      <p>
        Du behältst die Kontrolle: Das System erstellt den Entwurf, du prüfst und schickst ab.
        Nichts geht ohne dein Okay raus.
      </p>

      <h2>Was es wirklich bringt</h2>
      <h3>1. Zeit — die ehrliche Rechnung</h3>
      <p>
        Schreibst du fünf Angebote pro Woche à 45 bis 60 Minuten, sind das <strong>4 bis 5 Stunden
        jede Woche</strong> — meist abends oder am Wochenende. Mit Automatisierung schrumpft das auf
        Eingabe plus Kontrolle, also grob eine Stunde. Das sind drei bis vier zurückgewonnene
        Stunden pro Woche, Woche für Woche.
      </p>
      <h3>2. Geschwindigkeit gewinnt Aufträge</h3>
      <p>
        Wer eine Anfrage stellt, fragt selten nur bei einem Betrieb an. Oft bekommt derjenige den
        Auftrag, der zuerst ein sauberes Angebot schickt — nicht unbedingt der günstigste. Wenn dein
        Angebot noch am selben Tag beim Kunden liegt statt nach einer Woche, ist das ein echter
        Wettbewerbsvorteil.
      </p>
      <h3>3. Konsistenz</h3>
      <p>
        Keine vergessenen Positionen mehr, keine verrutschten Preise, kein &bdquo;beim letzten Mal
        hab ich das anders gerechnet&ldquo;. Jedes Angebot folgt derselben Logik — das schützt deine
        Marge.
      </p>

      <h2>Ehrlich: Was die Automatisierung nicht kann</h2>
      <ul>
        <li>
          <strong>Das Aufmaß vor Ort</strong> nimmt dir kein System ab. Die Eckdaten musst du
          weiterhin selbst erheben — nur das Tippen danach entfällt.
        </li>
        <li>
          <strong>Echte Sonderfälle</strong> (ungewöhnliche Konstruktionen, Denkmalschutz,
          Spezialmaterial) brauchen weiterhin deinen Kopf. Das System hilft bei den 80&nbsp;%
          Standardfällen.
        </li>
        <li>
          <strong>Die Einrichtung braucht dich:</strong> Damit das System deine Preise rechnet,
          musst du deine Kalkulation einmal offenlegen und mit uns durchgehen. Das ist ein
          Nachmittag Arbeit — einmal, nicht jede Woche.
        </li>
      </ul>

      <h2>Was kostet das — und ab wann lohnt es sich?</h2>
      <p>
        Bei uns startet eine einzelne Automatisierung <strong>ab 499&nbsp;€ zum Festpreis</strong> —
        du bekommst vorab ein schriftliches Angebot mit fixem Preis, danach ändert sich nichts mehr.
        Die Rechnung dazu ist simpel: Sparst du 3 bis 4 Stunden pro Woche und rechnest deine Stunde
        konservativ mit 50&nbsp;€, hat sich das System nach wenigen Wochen bezahlt gemacht. Alles
        Weitere zu unserem Preismodell findest du auf der <Link href="/preise">Preisseite</Link>.
      </p>

      <h2>So startest du</h2>
      <ol>
        <li>
          <strong>Prozess anschauen:</strong> Wie entstehen deine Angebote heute? Wo hakt es am
          meisten? Das klären wir in einem kostenlosen Gespräch.
        </li>
        <li>
          <strong>Kalkulation erfassen:</strong> Wir übersetzen deine Preislogik in Regeln, die das
          System versteht — gemeinsam, verständlich, ohne dass du etwas Technisches lernen musst.
        </li>
        <li>
          <strong>Testen und live gehen:</strong> Du vergleichst die automatischen Angebote mit
          deinen eigenen, wir justieren nach — dann läuft es. Meist innerhalb von 1 bis 2 Wochen.
        </li>
      </ol>
      <p>
        Mehr dazu, was wir speziell für Handwerksbetriebe bauen, findest du auf unserer Seite{" "}
        <Link href="/branchen/handwerk">KI für Handwerksbetriebe</Link>.
      </p>
    </ArticleLayout>
  );
}
