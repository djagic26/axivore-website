import type { Metadata } from "next";
import Link from "next/link";
import { ArticleLayout } from "@/components/ratgeber/ArticleLayout";
import { getRatgeberArticle } from "@/lib/ratgeber";
import { resolveContentLocale, partialPageMetadata, localePathname, type AppLocale } from "@/lib/seo";

const AVAILABLE: readonly AppLocale[] = ["de", "hr", "en"];
const SLUG = "angebote-automatisieren-handwerk";
const PATH = `/ratgeber/${SLUG}`;

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const contentLocale = resolveContentLocale(rawLocale, AVAILABLE);
  const de = getRatgeberArticle(SLUG, "de")!;
  const hr = getRatgeberArticle(SLUG, "hr")!;
  const en = getRatgeberArticle(SLUG, "en")!;
  return partialPageMetadata(
    contentLocale,
    PATH,
    { de: { title: de.metaTitle, description: de.description }, hr: { title: hr.metaTitle, description: hr.description }, en: { title: en.metaTitle, description: en.description } },
    AVAILABLE
  );
}

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  const contentLocale = resolveContentLocale(rawLocale, AVAILABLE);
  const article = getRatgeberArticle(SLUG, contentLocale)!;

  if (contentLocale === "hr") {
    return (
      <ArticleLayout article={article} locale={contentLocale}>
        <p>
          21 sat je. Gradilište je gotovo prije nekoliko sati, ali ti i dalje sjediš za kuhinjskim
          stolom i tipkaš ponudu. Tražiš stavke, provjeravaš cijene, sve slažeš u ispravan format —
          a sutra te čeka sljedeća. Ako ti ovo zvuči poznato, ovaj je članak za tebe. Objašnjavamo
          što &bdquo;automatizacija ponuda&ldquo; konkretno znači, što stvarno donosi — i jednako
          iskreno: što ne može.
        </p>

        <h2>Što &bdquo;automatizacija ponuda&ldquo; konkretno znači</h2>
        <p>
          Ideja je jednostavna: unosiš samo osnovne podatke — što treba napraviti, koje površine ili
          količine, koje posebnosti. Ostalo preuzima sustav koji poznaje tvoju logiku cijena i tvoje
          standardne stavke. Rezultat je gotova, uredno formatirana ponuda kao PDF — s tvojim logom,
          tvojim tekstovima, tvojim cijenama. Umjesto 45 do 60 minuta po ponudi, trebaš samo par
          minuta za unos i kratku provjeru.
        </p>

        <h2>Kako to tehnički funkcionira — bez stručnog žargona</h2>
        <p>Automatizirani sustav za ponude sastoji se od četiri gradivna elementa:</p>
        <ul>
          <li>
            <strong>Tvoj katalog usluga:</strong> tvoje tipične stavke (npr. &bdquo;gletanje i
            bojanje zida, po m²&ldquo;) jednom se uredno unesu.
          </li>
          <li>
            <strong>Tvoja logika cijena:</strong> materijal, radno vrijeme, doplate, dolazak —
            pravila po kojima danas računaš u glavi ili u Excelu ugrađena su u sustav.
          </li>
          <li>
            <strong>AI za tekst:</strong> iz tvojih natuknica AI formulira opise — profesionalno,
            ali tvojim tonom. Nema fraza koje zvuče kao serijsko pismo.
          </li>
          <li>
            <strong>Tvoja predložak:</strong> gotova ponuda izgleda kao tvoja, jer i jest tvoja —
            logo, struktura, uvjeti plaćanja, sve kao i inače.
          </li>
        </ul>
        <p>
          Kontrola ostaje kod tebe: sustav izrađuje nacrt, ti provjeravaš i šalješ. Ništa ne ide van
          bez tvog odobrenja.
        </p>

        <h2>Što to stvarno donosi</h2>
        <h3>1. Vrijeme — iskren obračun</h3>
        <p>
          Ako pišeš pet ponuda tjedno po 45 do 60 minuta, to je <strong>4 do 5 sati svaki
          tjedan</strong> — najčešće navečer ili vikendom. Uz automatizaciju to se smanjuje na unos
          i provjeru, dakle otprilike sat vremena. To su tri do četiri vraćena sata tjedno, tjedan
          za tjednom.
        </p>
        <h3>2. Brzina donosi poslove</h3>
        <p>
          Tko postavi upit, rijetko pita samo jednu tvrtku. Posao često dobije onaj tko prvi pošalje
          urednu ponudu — ne nužno najjeftiniji. Ako tvoja ponuda stigne klijentu istog dana umjesto
          za tjedan dana, to je stvarna konkurentska prednost.
        </p>
        <h3>3. Dosljednost</h3>
        <p>
          Više nema zaboravljenih stavki, pomaknutih cijena, &bdquo;prošli put sam to drugačije
          izračunao&ldquo;. Svaka ponuda prati istu logiku — to štiti tvoju maržu.
        </p>

        <h2>Iskreno: Što automatizacija ne može</h2>
        <ul>
          <li>
            <strong>Mjerenje na licu mjesta</strong> ne preuzima nijedan sustav. Osnovne podatke i
            dalje moraš sam prikupiti — samo tipkanje nakon toga otpada.
          </li>
          <li>
            <strong>Stvarne posebne slučajeve</strong> (neuobičajene konstrukcije, zaštita
            spomenika, specijalni materijal) i dalje trebaju tvoju glavu. Sustav pomaže kod 80&nbsp;%
            standardnih slučajeva.
          </li>
          <li>
            <strong>Postavljanje treba tebe:</strong> da bi sustav računao tvoje cijene, moraš
            jednom otkriti svoju kalkulaciju i proći je s nama. To je jedno popodne posla — jednom,
            ne svaki tjedan.
          </li>
        </ul>

        <h2>Koliko to košta — i od kada se isplati?</h2>
        <p>
          Kod nas jedna automatizacija kreće <strong>od 499&nbsp;€ po fiksnoj cijeni</strong> —
          unaprijed dobivaš pisanu ponudu s fiksnom cijenom, poslije se ništa više ne mijenja. Račun
          je jednostavan: ako uštediš 3 do 4 sata tjedno i konzervativno računaš svoj sat s
          50&nbsp;€, sustav se isplatio za nekoliko tjedana. Više o našem modelu cijena pronađi na{" "}
          <Link href={localePathname(contentLocale, "/preise")}>stranici s cijenama</Link>.
        </p>

        <h2>Kako krenuti</h2>
        <ol>
          <li>
            <strong>Pogledamo proces:</strong> kako danas nastaju tvoje ponude? Gdje najviše
            zapinje? To razjasnimo na besplatnom razgovoru.
          </li>
          <li>
            <strong>Bilježimo kalkulaciju:</strong> tvoju logiku cijena prevodimo u pravila koja
            sustav razumije — zajedno, razumljivo, bez da moraš učiti išta tehničko.
          </li>
          <li>
            <strong>Testiranje i lansiranje:</strong> uspoređuješ automatske ponude sa svojim
            vlastitim, mi dorađujemo — onda sustav radi. Obično unutar 1 do 2 tjedna.
          </li>
        </ol>
        <p>
          Više o tome što gradimo posebno za obrtničke tvrtke pronađi na našoj stranici{" "}
          <Link href={localePathname(contentLocale, "/branchen/handwerk")}>AI za obrtnike</Link>.
        </p>
      </ArticleLayout>
    );
  }

  if (contentLocale === "en") {
    return (
      <ArticleLayout article={article} locale={contentLocale}>
        <p>
          It's 9pm. The job site has been quiet for hours, but you're still at the kitchen table
          typing up a quote. Looking up line items, checking prices, getting everything into the
          right format — and tomorrow the next one is waiting. If this sounds familiar, this
          article is for you. We explain what &ldquo;automating quotes&rdquo; actually means, what
          it really delivers — and just as honestly: what it can't do.
        </p>

        <h2>What &ldquo;automating quotes&rdquo; actually means</h2>
        <p>
          The idea is simple: you only enter the key details — what needs to be done, which areas
          or quantities, which special requirements. A system that knows your pricing logic and
          your standard line items takes care of the rest. What comes out is a finished, cleanly
          formatted quote as a PDF — with your logo, your wording, your prices. Instead of 45 to 60
          minutes per quote, you need a few minutes for input and a quick review.
        </p>

        <h2>How it works technically — without the jargon</h2>
        <p>An automated quoting system consists of four building blocks:</p>
        <ul>
          <li>
            <strong>Your service catalog:</strong> your typical line items (e.g. &ldquo;skim and
            paint wall, per m²&rdquo;) are captured cleanly once.
          </li>
          <li>
            <strong>Your pricing logic:</strong> materials, labor time, surcharges, travel — the
            rules you currently calculate in your head or in Excel are built into the system.
          </li>
          <li>
            <strong>AI for the text:</strong> from your bullet points, the AI writes the
            descriptions — professional, but in your voice. No boilerplate that reads like a form
            letter.
          </li>
          <li>
            <strong>Your template:</strong> the finished quote looks like yours, because it is
            yours — logo, layout, payment terms, all as usual.
          </li>
        </ul>
        <p>
          You stay in control: the system creates the draft, you review and send it. Nothing goes
          out without your okay.
        </p>

        <h2>What it really delivers</h2>
        <h3>1. Time — the honest math</h3>
        <p>
          If you write five quotes a week at 45 to 60 minutes each, that's <strong>4 to 5 hours
          every week</strong> — usually in the evening or on weekends. With automation that shrinks
          to input plus review, roughly one hour. That's three to four reclaimed hours per week,
          week after week.
        </p>
        <h3>2. Speed wins jobs</h3>
        <p>
          Whoever makes an inquiry rarely asks only one business. The job often goes to whoever
          sends a clean quote first — not necessarily the cheapest. If your quote reaches the
          customer the same day instead of a week later, that's a real competitive advantage.
        </p>
        <h3>3. Consistency</h3>
        <p>
          No more forgotten line items, no more shifted prices, no more &ldquo;last time I
          calculated it differently.&rdquo; Every quote follows the same logic — that protects your
          margin.
        </p>

        <h2>Honestly: what automation can't do</h2>
        <ul>
          <li>
            <strong>On-site measuring</strong> isn't taken over by any system. You still have to
            gather the key details yourself — only the typing afterward goes away.
          </li>
          <li>
            <strong>Genuine edge cases</strong> (unusual constructions, heritage protection,
            special materials) still need your judgment. The system helps with the 80% standard
            cases.
          </li>
          <li>
            <strong>Setup needs you:</strong> for the system to calculate your prices, you need to
            lay out your pricing once and go through it with us. That's an afternoon of work — once,
            not every week.
          </li>
        </ul>

        <h2>What does it cost — and when is it worth it?</h2>
        <p>
          With us, a single automation starts <strong>from €499 at a fixed price</strong> — you get
          a written quote with a fixed price upfront, nothing changes after that. The math is
          simple: if you save 3 to 4 hours a week and conservatively value your hour at €50, the
          system pays for itself within a few weeks. More on our pricing model on the{" "}
          <Link href={localePathname(contentLocale, "/preise")}>pricing page</Link>.
        </p>

        <h2>How to get started</h2>
        <ol>
          <li>
            <strong>Look at the process:</strong> how do your quotes come together today? Where
            does it get stuck the most? We clarify this in a free call.
          </li>
          <li>
            <strong>Capture your pricing:</strong> we translate your pricing logic into rules the
            system understands — together, in plain language, with no need for you to learn
            anything technical.
          </li>
          <li>
            <strong>Test and go live:</strong> you compare the automatic quotes with your own, we
            fine-tune — then it runs. Usually within 1 to 2 weeks.
          </li>
        </ol>
        <p>
          More on what we build specifically for trade businesses can be found on our{" "}
          <Link href={localePathname(contentLocale, "/branchen/handwerk")}>AI for trade businesses</Link> page.
        </p>
      </ArticleLayout>
    );
  }

  return (
    <ArticleLayout article={article} locale={contentLocale}>
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
        Weitere zu unserem Preismodell findest du auf der <Link href={localePathname(contentLocale, "/preise")}>Preisseite</Link>.
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
        <Link href={localePathname(contentLocale, "/branchen/handwerk")}>KI für Handwerksbetriebe</Link>.
      </p>
    </ArticleLayout>
  );
}
