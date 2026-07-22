import type { Metadata } from "next";
import Link from "next/link";
import { ArticleLayout } from "@/components/ratgeber/ArticleLayout";
import { getRatgeberArticle } from "@/lib/ratgeber";
import { resolveContentLocale, partialPageMetadata, localePathname, type AppLocale } from "@/lib/seo";

const AVAILABLE: readonly AppLocale[] = ["de", "hr", "en"];
const SLUG = "ki-chatbot-oder-anrufbeantworter";
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

const comparisonDe = [
  { label: "Kosten", ab: "Einmalig sehr günstig", buero: "Laufend, ab mehreren Hundert €/Monat", ki: "Einmalig ab 499 €, geringe laufende Kosten" },
  { label: "Erreichbar", ab: "24/7 — aber nur Aufnahme", buero: "Zu Bürozeiten", ki: "24/7 — mit echten Antworten" },
  { label: "Beantwortet Fragen", ab: "Nein", buero: "Ja, Standardfragen", ki: "Ja, alles was du ihm beibringst" },
  { label: "Bucht Termine", ab: "Nein", buero: "Ja", ki: "Ja, direkt in deinen Kalender" },
  { label: "Strukturierte Übergabe", ab: "Du hörst Nachrichten ab", buero: "Zettel / E-Mail", ki: "Anliegen + Kontakt sauber erfasst" },
  { label: "Persönlicher Kontakt", ab: "Nein", buero: "Ja", ki: "Nein — übergibt an dich, wenn es persönlich wird" },
];

const comparisonHr = [
  { label: "Trošak", ab: "Jednokratno vrlo jeftino", buero: "Stalno, od nekoliko stotina €/mjesec", ki: "Jednokratno od 499 €, niski tekući troškovi" },
  { label: "Dostupnost", ab: "0-24 — ali samo snimanje", buero: "Radnim vremenom", ki: "0-24 — sa stvarnim odgovorima" },
  { label: "Odgovara na pitanja", ab: "Ne", buero: "Da, standardna pitanja", ki: "Da, sve što ga naučiš" },
  { label: "Zakazuje termine", ab: "Ne", buero: "Da", ki: "Da, izravno u tvoj kalendar" },
  { label: "Strukturirana predaja", ab: "Sam preslušavaš poruke", buero: "Cedulja / e-mail", ki: "Upit + kontakt uredno zabilježeni" },
  { label: "Osobni kontakt", ab: "Ne", buero: "Da", ki: "Ne — predaje tebi kad postane osobno" },
];

const comparisonEn = [
  { label: "Cost", ab: "Very cheap, one-time", buero: "Ongoing, from several hundred €/month", ki: "One-time from €499, low ongoing costs" },
  { label: "Availability", ab: "24/7 — but only recording", buero: "During office hours", ki: "24/7 — with real answers" },
  { label: "Answers questions", ab: "No", buero: "Yes, standard questions", ki: "Yes, everything you teach it" },
  { label: "Books appointments", ab: "No", buero: "Yes", ki: "Yes, directly into your calendar" },
  { label: "Structured handoff", ab: "You listen to messages", buero: "Note / email", ki: "Request + contact captured cleanly" },
  { label: "Personal contact", ab: "No", buero: "Yes", ki: "No — hands off to you when it gets personal" },
];

export default async function Page({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  const contentLocale = resolveContentLocale(rawLocale, AVAILABLE);
  const article = getRatgeberArticle(SLUG, contentLocale)!;

  if (contentLocale === "hr") {
    return (
      <ArticleLayout article={article} locale={contentLocale}>
        <p>
          Stojiš na ljestvama, telefon zvoni. Razgovaraš s klijentom — zvoni opet. Poslije posla
          nazoveš natrag, ali zainteresirani je odavno nazvao sljedeću tvrtku. Propušteni pozivi su
          za male tvrtke jedan od najskupljih problema — baš zato jer se ne vidi na računu. Pitanje
          je: što učiniti? Uspoređujemo tri uobičajene opcije — iskreno, sa svim slabostima.
        </p>

        <h2>Stvarni problem: tko ne dobije odgovor, zove sljedećeg</h2>
        <p>
          Tko danas traži obrtnika, stol ili termin, ima malo strpljenja. Ako se nitko ne javi na
          telefon, rijetko se čeka — bira se sljedeći broj s popisa. Posao je nestao prije nego si
          uopće znao da je postojao. Svako rješenje mora se mjeriti time: hvata li zainteresiranog
          upravo u trenutku kad zove ili piše?
        </p>

        <h2>Opcija 1: Telefonska sekretarica</h2>
        <p>
          Klasično rješenje — košta gotovo ništa i brzo se postavlja. Problem poznaješ iz vlastitog
          iskustva: mnogi pozivatelji <strong>uopće ne ostave poruku</strong> na sekretarici, nego
          poklope. A čak i kad poruka postoji, počinje ping-pong povratnih poziva: nazoveš natrag,
          klijent nije dostupan, on nazove natrag, ti stojiš na ljestvama. Sekretarica snima —
          ništa ne rješava.
        </p>

        <h2>Opcija 2: Ured ili vanjska telefonska služba</h2>
        <p>
          Čovjek na telefonu je najugodnije rješenje za pozivatelja — nema sumnje. No ima svoju
          cijenu: vlastito osoblje za ured isplati se tek od određene veličine tvrtke, a vanjske
          telefonske službe stalno koštaju novac, a tvoj posao poznaju samo površno. Kod stručnih
          pitanja (&bdquo;Radite li i sanaciju starih zgrada?&ldquo;) postaje tanko, a izvan radnog
          vremena opet zvoni u prazno.
        </p>

        <h2>Opcija 3: AI asistent</h2>
        <p>
          AI asistent — kao chat na tvojoj web stranici, preko WhatsAppa ili na telefonu — najnovija
          je opcija, i jedina koja 0-24 <em>odgovara</em> umjesto da samo snima. Konkretno može:
        </p>
        <ul>
          <li>
            <strong>Odmah odgovoriti na standardna pitanja:</strong> radno vrijeme, usluge, područje
            rada, okvirne cijene — sve što si ga jednom naučio.
          </li>
          <li>
            <strong>Izravno zakazati termin:</strong> zainteresirani bira slobodan termin, potvrda
            ide automatski — bez ping-ponga povratnih poziva.
          </li>
          <li>
            <strong>Strukturirano zabilježiti upit:</strong> umjesto polovično razumljive glasovne
            poruke dobivaš uredno zabilježeno ime, kontakt, upit i hitnost.
          </li>
          <li>
            <strong>Predati kad postane ozbiljno:</strong> dobar asistent prepoznaje kad treba
            čovjek — i proslijedi dalje, umjesto da klijenta šalje u krug.
          </li>
        </ul>

        <h2>Iskrena usporedba</h2>
        <div className="mb-6 overflow-x-auto rounded-xl" style={{ border: "1px solid rgba(255,255,255,0.1)" }}>
          <table className="w-full text-[13.5px] leading-[1.5]">
            <thead>
              <tr className="text-left" style={{ background: "rgba(255,255,255,0.04)" }}>
                <th className="p-3.5 font-semibold text-white"> </th>
                <th className="p-3.5 font-semibold text-white">Telefonska sekretarica</th>
                <th className="p-3.5 font-semibold text-white">Ured / služba</th>
                <th className="p-3.5 font-semibold" style={{ color: "#A09AFF" }}>AI asistent</th>
              </tr>
            </thead>
            <tbody>
              {comparisonHr.map((row) => (
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

        <h2>Kad je telefonska sekretarica sasvim dovoljna</h2>
        <p>
          Iskren odgovor: ne treba svaka tvrtka AI. Ako imaš gotovo isključivo stalne klijente, novi
          upiti telefonom rijetko dolaze, a povratne pozive pouzdano stigneš istog dana — onda je
          sekretarica dovoljna. Uloži novac negdje drugdje.
        </p>

        <h2>Kad se AI asistent isplati</h2>
        <ul>
          <li>Redovito propuštaš pozive jer si na gradilištu, u usluživanju ili na tretmanu.</li>
          <li>Novi upiti su ti važni — i znaš da neki od njih završe kod konkurencije.</li>
          <li>Isto pet pitanja svaki dan troši vrijeme: radno vrijeme, cijene, dostupnost.</li>
          <li>Koordiniranje termina uz beskonačno telefoniranje živcira tebe (i tvoje klijente).</li>
        </ul>
        <p>
          Ako se dvije ili više točaka odnose na tebe, asistent se brzo isplati: kod nas takav
          sustav kreće <strong>od 499&nbsp;€ po fiksnoj cijeni</strong> — jednokratno, s pisanom
          ponudom unaprijed. Detalji na{" "}
          <Link href={localePathname(contentLocale, "/preise")}>stranici s cijenama</Link>, više o
          tehnici na našoj stranici o{" "}
          <Link href={localePathname(contentLocale, "/leistungen/ki-chatbots")}>AI chatbotovima za tvrtke</Link>.
        </p>

        <h2>Zaključak</h2>
        <p>
          Telefonska sekretarica snima, čovjek stalno košta, AI asistent odgovara — 0-24, uz
          jednokratnu cijenu. Koje rješenje pristaje tvom poslu ovisi o broju poziva koje primaš, ne
          o tehnološkom hypeu. Ako nisi siguran: u 30 minuta ti iskreno kažemo isplati li se to kod
          tebe — čak i kad je odgovor &bdquo;ne&ldquo;.
        </p>
      </ArticleLayout>
    );
  }

  if (contentLocale === "en") {
    return (
      <ArticleLayout article={article} locale={contentLocale}>
        <p>
          You're up a ladder, the phone rings. You're talking to a customer — it rings again. After
          hours you call back, but the prospect has long since called the next business. Missed
          calls are one of the most expensive problems for small businesses — precisely because you
          never see it on an invoice. The question is: what to do? We compare the three usual
          options — honestly, with all their weaknesses.
        </p>

        <h2>The real problem: whoever can't get through calls the next one</h2>
        <p>
          Anyone looking for a tradesperson, a table, or an appointment today has little patience.
          If no one answers the phone, people rarely wait — they dial the next number on the list.
          The job is gone before you even knew it existed. Every solution has to be measured
          against this: does it catch the prospect in the moment they call or message?
        </p>

        <h2>Option 1: The answering machine</h2>
        <p>
          The classic solution — costs almost nothing and is set up quickly. You know the problem
          from experience: <strong>many callers don't even leave a message</strong> on an answering
          machine, they just hang up. And even when there is a message, the callback ping-pong
          begins: you call back, the customer isn't reachable, they call back, you're up a ladder.
          The answering machine records — it doesn't solve anything.
        </p>

        <h2>Option 2: Office staff or an external phone service</h2>
        <p>
          A human on the phone is the most pleasant solution for the caller — no question. But it
          has its price: your own office staff only pays off from a certain business size, and
          external phone services cost money on an ongoing basis while only knowing your business
          superficially. On technical questions (&ldquo;Do you also do renovation work on older
          buildings?&rdquo;) it gets thin, and outside office hours it rings into the void again.
        </p>

        <h2>Option 3: The AI assistant</h2>
        <p>
          An AI assistant — as a chat on your website, via WhatsApp, or on the phone — is the newest
          option, and the only one that <em>answers</em> around the clock instead of just recording.
          Specifically, it can:
        </p>
        <ul>
          <li>
            <strong>Answer standard questions instantly:</strong> hours, services, service area,
            rough price ranges — anything you've taught it once.
          </li>
          <li>
            <strong>Book appointments directly:</strong> the prospect picks an open slot,
            confirmation goes out automatically — no callback ping-pong.
          </li>
          <li>
            <strong>Capture requests in a structured way:</strong> instead of a half-understandable
            voicemail, you get name, contact, request and urgency noted cleanly.
          </li>
          <li>
            <strong>Hand off when it gets serious:</strong> a good assistant recognizes when a human
            needs to take over — and forwards, instead of sending the customer in circles.
          </li>
        </ul>

        <h2>The honest comparison</h2>
        <div className="mb-6 overflow-x-auto rounded-xl" style={{ border: "1px solid rgba(255,255,255,0.1)" }}>
          <table className="w-full text-[13.5px] leading-[1.5]">
            <thead>
              <tr className="text-left" style={{ background: "rgba(255,255,255,0.04)" }}>
                <th className="p-3.5 font-semibold text-white"> </th>
                <th className="p-3.5 font-semibold text-white">Answering machine</th>
                <th className="p-3.5 font-semibold text-white">Office staff / service</th>
                <th className="p-3.5 font-semibold" style={{ color: "#A09AFF" }}>AI assistant</th>
              </tr>
            </thead>
            <tbody>
              {comparisonEn.map((row) => (
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

        <h2>When the answering machine is completely enough</h2>
        <p>
          Honest answer: not every business needs AI. If you have almost only repeat customers,
          hardly any new inquiries come in by phone, and you reliably manage callbacks the same day
          — then the answering machine will do. Invest the money elsewhere.
        </p>

        <h2>When the AI assistant is worth it</h2>
        <ul>
          <li>You regularly miss calls because you're on the job site, in service, or with a patient.</li>
          <li>New inquiries matter to you — and you know some of them end up with the competition.</li>
          <li>The same five questions eat up time every day: hours, prices, availability.</li>
          <li>Coordinating appointments via back-and-forth phone calls annoys you (and your customers).</li>
        </ul>
        <p>
          If two or more of these apply, the assistant quickly pays for itself: with us, a system
          like this starts <strong>from €499 at a fixed price</strong> — one-time, with a written
          quote upfront. Details on the <Link href={localePathname(contentLocale, "/preise")}>pricing page</Link>, more on
          the technology on our page about <Link href={localePathname(contentLocale, "/leistungen/ki-chatbots")}>AI chatbots for businesses</Link>.
        </p>

        <h2>Bottom line</h2>
        <p>
          The answering machine records, the human costs on an ongoing basis, the AI assistant
          answers — around the clock, for a one-time price. Which solution fits your business
          depends on your call volume, not the tech hype. If you're unsure: in 30 minutes we'll
          tell you honestly whether it's worth it for you — even if the answer is &ldquo;no.&rdquo;
        </p>
      </ArticleLayout>
    );
  }

  return (
    <ArticleLayout article={article} locale={contentLocale}>
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
            {comparisonDe.map((row) => (
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
        Angebot vorab. Details auf der <Link href={localePathname(contentLocale, "/preise")}>Preisseite</Link>, mehr zur Technik auf
        unserer Seite über <Link href={localePathname(contentLocale, "/leistungen/ki-chatbots")}>KI-Chatbots für Unternehmen</Link>.
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
