import type { Metadata } from "next";
import Link from "next/link";
import { ArticleLayout } from "@/components/ratgeber/ArticleLayout";
import { getRatgeberArticle } from "@/lib/ratgeber";
import { resolveContentLocale, partialPageMetadata, localePathname, type AppLocale } from "@/lib/seo";

const AVAILABLE: readonly AppLocale[] = ["de", "hr", "en", "ro", "tr", "it"];
const SLUG = "termine-automatisieren-praxis";
const PATH = `/ratgeber/${SLUG}`;

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const contentLocale = resolveContentLocale(rawLocale, AVAILABLE);
  const de = getRatgeberArticle(SLUG, "de")!;
  const hr = getRatgeberArticle(SLUG, "hr")!;
  const en = getRatgeberArticle(SLUG, "en")!;
  const ro = getRatgeberArticle(SLUG, "ro")!;
  const tr = getRatgeberArticle(SLUG, "tr")!;
  const it = getRatgeberArticle(SLUG, "it")!;
  return partialPageMetadata(
    contentLocale,
    PATH,
    { de: { title: de.metaTitle, description: de.description }, hr: { title: hr.metaTitle, description: hr.description }, en: { title: en.metaTitle, description: en.description }, ro: { title: ro.metaTitle, description: ro.description }, tr: { title: tr.metaTitle, description: tr.description }, it: { title: it.metaTitle, description: it.description } },
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
          Ponedjeljak ujutro, pola sata nakon otvaranja. Telefon na recepciji zvoni neprestano —
          pacijent na drugoj liniji čeka, pacijentica pred šalterom čeka da se prijavi, a netko
          treći samo želi pomaknuti termin za dva dana. Recepcija radi sve odjednom i ništa dobro.
          A pacijent koji je sinoć u 22 sata pokušao zakazati termin? Vjerojatno je odustao i
          nazvao susjednu ordinaciju.
        </p>
        <p>
          Upravo tu ulazi automatizacija. Ovaj članak objašnjava što &bdquo;automatizacija
          zakazivanja termina&ldquo; konkretno znači, što stvarno donosi — i jednako iskreno: što
          ne zamjenjuje.
        </p>

        <h2>Što &bdquo;automatizacija&ldquo; ovdje konkretno znači</h2>
        <p>
          Ideja je jednostavna: digitalni asistent preuzima organizacijski dio zakazivanja —
          putem web stranice, telefona ili chata. Pacijenti rezerviraju ili pomiču termine i izvan
          radnog vremena, potvrda i podsjetnik prije termina idu automatski. Standardna pitanja o
          radnom vremenu, dostupnosti i postupku odgovaraju se odmah, bez da recepcija mora
          prekinuti ono što upravo radi s pacijentom koji stoji pred njom.
        </p>
        <p>
          Pristigli upiti se pritom strukturirano hvataju i prosljeđuju po prioritetu — tim odmah
          vidi što je hitno, a što može pričekati red.
        </p>

        <h2>Što to stvarno donosi</h2>
        <h3>1. Rasterećenje telefona</h3>
        <p>
          Digitalni asistent odgovara na ponavljajuća pitanja o radnom vremenu, dostupnosti i
          postupcima, tako da se recepcija može posvetiti pacijentima koji su fizički prisutni.
        </p>
        <h3>2. Termini 0-24</h3>
        <p>
          Pacijenti zakazuju ili pomiču termine online, i izvan konzultacija — potvrda i
          podsjetnik idu automatski, bez da itko mora ostati poslije radnog vremena zbog toga.
        </p>
        <h3>3. Manje neopravdanih izostanaka</h3>
        <p>
          Automatski podsjetnici kratko prije termina smanjuju broj pacijenata koji se jednostavno
          ne pojave — svaki takav termin inače je izgubljen slot koji je mogao pripasti nekome
          drugome.
        </p>
        <h3>4. Upiti unaprijed razvrstani</h3>
        <p>
          Pristigli zahtjevi hvataju se strukturirano i prosljeđuju po prioritetu, tako da tim
          odmah vidi što je hitno, a što može pričekati.
        </p>

        <h2>Iskreno: što automatizacija ne može</h2>
        <p>
          Sustav <strong>ne donosi medicinske odluke</strong> i ne procjenjuje hitnost u kliničkom
          smislu. Automatizira isključivo organizacijski tok — zakazivanje, dostupnost, uobičajena
          pitanja. Svaka prosudba o zdravstvenom stanju pacijenta i dalje u potpunosti ostaje kod
          tima ordinacije, ne kod sustava. Zaštita podataka pritom je riješena po DSGVO — unaprijed
          zajedno razjasnimo koji se podaci obrađuju i kako, jer znamo da su ordinacije s pravom
          osjetljive na tu temu.
        </p>

        <h2>Koliko to košta?</h2>
        <p>
          Kod nas jedna automatizacija kreće <strong>od 499&nbsp;€ po fiksnoj cijeni</strong> —
          unaprijed dobivaš pisanu ponudu s fiksnom cijenom, poslije se ništa više ne mijenja. Ne
          mora biti kompletan sustav za cijelu ordinaciju — već i jedna automatizacija, primjerice
          samo zakazivanje izvan radnog vremena, rasterećuje recepciju svaki dan. Više o našem
          modelu cijena pronađi na{" "}
          <Link href={localePathname(contentLocale, "/preise")}>stranici s cijenama</Link>.
        </p>

        <h2>Kako krenuti</h2>
        <ol>
          <li>
            <strong>Pogledamo proces:</strong> kako danas dolaze upiti i pozivi za termine? Gdje
            recepcija najviše gubi vrijeme? To razjasnimo na besplatnom razgovoru.
          </li>
          <li>
            <strong>Postavljamo asistenta:</strong> radno vrijeme, dostupnost i standardna pitanja
            unosimo zajedno — razumljivo, bez da moraš učiti išta tehničko.
          </li>
          <li>
            <strong>Testiranje i lansiranje:</strong> uspoređuješ automatsko zakazivanje sa svojim
            uobičajenim tokom, mi dorađujemo — onda sustav radi. Obično unutar 1 do 2 tjedna.
          </li>
        </ol>
        <p>
          Više o tome što gradimo posebno za liječničke i zubne ordinacije pronađi na našoj
          stranici{" "}
          <Link href={localePathname(contentLocale, "/branchen/praxen")}>AI za ordinacije</Link>.
        </p>
      </ArticleLayout>
    );
  }

  if (contentLocale === "en") {
    return (
      <ArticleLayout article={article} locale={contentLocale}>
        <p>
          Monday morning, half an hour after opening. The phone at the front desk won't stop
          ringing — one patient is on the line, another is waiting at the counter to check in, and
          a third just wants to move a appointment by two days. The front desk is doing everything
          at once and none of it well. And the patient who tried to book at 10pm the night before?
          They probably gave up and called the practice next door.
        </p>
        <p>
          That's exactly where automation comes in. This article explains what &ldquo;automating
          appointment scheduling&rdquo; actually means, what it really delivers — and just as
          honestly: what it doesn't replace.
        </p>

        <h2>What &ldquo;automating&rdquo; actually means here</h2>
        <p>
          The idea is simple: a digital assistant takes over the organizational side of
          scheduling — via website, phone, or chat. Patients book or reschedule appointments even
          outside consultation hours, confirmation and a reminder before the appointment run
          automatically. Standard questions about hours, availability, and procedures get answered
          right away, without the front desk having to interrupt what they're doing with the
          patient standing in front of them.
        </p>
        <p>
          Incoming requests get captured in a structured way and forwarded by priority — the team
          sees immediately what's urgent and what can wait.
        </p>

        <h2>What it really delivers</h2>
        <h3>1. Relieves the phone</h3>
        <p>
          A digital assistant answers recurring questions about hours, availability, and
          procedures, so the front desk can focus on the patients physically present.
        </p>
        <h3>2. Appointments around the clock</h3>
        <p>
          Patients book or reschedule online, even outside consultation hours — confirmation and
          reminder run automatically, without anyone having to stay late for it.
        </p>
        <h3>3. Fewer no-shows</h3>
        <p>
          Automatic reminders shortly before the appointment reduce the number of patients who
          simply don't show up — every no-show is otherwise a slot that could have gone to someone
          else.
        </p>
        <h3>4. Inquiries pre-sorted</h3>
        <p>
          Incoming requests are captured in a structured way and forwarded by priority, so the
          team sees immediately what's urgent and what can wait.
        </p>

        <h2>Honestly: what automation can't do</h2>
        <p>
          The system does <strong>not make medical decisions</strong> and doesn't triage urgency
          in a clinical sense. It only automates the organizational flow — scheduling,
          availability, recurring questions. Any judgment call about a patient's medical situation
          stays fully with the practice team, not the system. Data protection is handled properly
          under GDPR — we clarify upfront together what data gets processed and how, because we
          know practices are rightly sensitive about this.
        </p>

        <h2>What does it cost?</h2>
        <p>
          With us, a single automation starts <strong>from €499 at a fixed price</strong> — you
          get a written quote with a fixed price upfront, nothing changes after that. It doesn't
          have to be a full system for the whole practice — even one automation, say just booking
          outside consultation hours, takes real load off the front desk every day. More on our
          pricing model on the <Link href={localePathname(contentLocale, "/preise")}>pricing
          page</Link>.
        </p>

        <h2>How to get started</h2>
        <ol>
          <li>
            <strong>Look at the process:</strong> how do appointment requests and calls come in
            today? Where does the front desk lose the most time? We clarify this in a free call.
          </li>
          <li>
            <strong>Set up the assistant:</strong> hours, availability and standard questions are
            entered together — in plain language, with no need for you to learn anything
            technical.
          </li>
          <li>
            <strong>Test and go live:</strong> you compare the automated scheduling with your
            usual flow, we fine-tune — then it runs. Usually within 1 to 2 weeks.
          </li>
        </ol>
        <p>
          More on what we build specifically for medical and dental practices can be found on our{" "}
          <Link href={localePathname(contentLocale, "/branchen/praxen")}>AI for medical
          practices</Link> page.
        </p>
      </ArticleLayout>
    );
  }

  if (contentLocale === "ro") {
    return (
      <ArticleLayout article={article} locale={contentLocale}>
        <p>
          Luni dimineață, la o jumătate de oră după deschidere. Telefonul de la recepție nu se
          oprește din sunat — un pacient așteaptă pe linie, o pacientă așteaptă la ghișeu să se
          înregistreze, iar un al treilea vrea doar să mute o programare cu două zile. Recepția
          face totul deodată și nimic bine. Iar pacientul care a încercat să se programeze seara
          trecută la 22:00? Probabil a renunțat și a sunat cabinetul vecin.
        </p>
        <p>
          Exact aici intervine automatizarea. Acest articol explică ce înseamnă concret
          &bdquo;automatizarea programărilor&ldquo;, ce aduce cu adevărat — și la fel de sincer: ce
          nu înlocuiește.
        </p>

        <h2>Ce înseamnă concret &bdquo;automatizarea&ldquo; aici</h2>
        <p>
          Ideea este simplă: un asistent digital preia partea organizatorică a programărilor —
          prin site, telefon sau chat. Pacienții rezervă sau mută programări chiar și în afara
          orelor de consultație, confirmarea și memento-ul înainte de programare se trimit
          automat. Întrebările standard despre program, disponibilitate și proceduri primesc
          răspuns imediat, fără ca recepția să trebuiască să întrerupă ce face cu pacientul care
          stă în fața ei.
        </p>
        <p>
          Cererile primite sunt captate structurat și direcționate după prioritate — echipa vede
          imediat ce e urgent și ce poate aștepta.
        </p>

        <h2>Ce aduce cu adevărat</h2>
        <h3>1. Ușurează telefonul</h3>
        <p>
          Un asistent digital răspunde la întrebările recurente despre program, disponibilitate și
          proceduri, astfel încât recepția se poate concentra pe pacienții prezenți fizic.
        </p>
        <h3>2. Programări non-stop</h3>
        <p>
          Pacienții rezervă sau mută programări online, chiar și în afara orelor de consultație —
          confirmarea și memento-ul se trimit automat, fără ca cineva să trebuiască să rămână
          peste program pentru asta.
        </p>
        <h3>3. Mai puține neprezentări</h3>
        <p>
          Memento-urile automate cu puțin timp înainte de programare reduc numărul pacienților
          care pur și simplu nu se prezintă — fiecare neprezentare este altfel un loc pierdut care
          ar fi putut reveni altcuiva.
        </p>
        <h3>4. Cererile sortate în avans</h3>
        <p>
          Cererile primite sunt captate structurat și direcționate după prioritate, astfel încât
          echipa vede imediat ce e urgent și ce poate aștepta.
        </p>

        <h2>Sincer: ce nu poate face automatizarea</h2>
        <p>
          Sistemul <strong>nu ia decizii medicale</strong> și nu evaluează urgența în sens
          clinic. Automatizează doar fluxul organizatoric — programare, disponibilitate, întrebări
          recurente. Orice apreciere despre situația medicală a unui pacient rămâne integral la
          echipa cabinetului, nu la sistem. Protecția datelor este tratată corect conform GDPR —
          clarificăm împreună în avans ce date sunt procesate și cum, pentru că știm că cabinetele
          sunt pe bună dreptate sensibile la acest subiect.
        </p>

        <h2>Cât costă?</h2>
        <p>
          La noi, o automatizare pornește <strong>de la 499&nbsp;€ la preț fix</strong> — primești
          în avans o ofertă scrisă cu preț fix, după aceea nimic nu se mai schimbă. Nu trebuie să
          fie un sistem complet pentru tot cabinetul — chiar și o singură automatizare, de exemplu
          doar preluarea programărilor în afara orelor de consultație, ușurează recepția în
          fiecare zi. Mai multe despre modelul nostru de prețuri găsești pe{" "}
          <Link href={localePathname(contentLocale, "/preise")}>pagina de prețuri</Link>.
        </p>

        <h2>Cum începi</h2>
        <ol>
          <li>
            <strong>Analizăm procesul:</strong> cum vin azi cererile și apelurile pentru
            programări? Unde pierde recepția cel mai mult timp? Asta clarificăm la o discuție
            gratuită.
          </li>
          <li>
            <strong>Configurăm asistentul:</strong> programul, disponibilitatea și întrebările
            standard le introducem împreună — pe înțeles, fără să fie nevoie să înveți ceva
            tehnic.
          </li>
          <li>
            <strong>Testare și lansare:</strong> compari programările automate cu fluxul tău
            obișnuit, ajustăm — apoi funcționează. De obicei în 1 până la 2 săptămâni.
          </li>
        </ol>
        <p>
          Mai multe despre ce construim special pentru cabinete medicale și stomatologice găsești
          pe pagina noastră{" "}
          <Link href={localePathname(contentLocale, "/branchen/praxen")}>AI pentru cabinete
          medicale</Link>.
        </p>
      </ArticleLayout>
    );
  }

  if (contentLocale === "tr") {
    return (
      <ArticleLayout article={article} locale={contentLocale}>
        <p>
          Pazartesi sabahı, açılıştan yarım saat sonra. Resepsiyondaki telefon durmadan çalıyor —
          bir hasta hatta bekliyor, bir başkası kayıt için kasada bekliyor, üçüncüsü ise sadece bir
          randevuyu iki gün ertelemek istiyor. Resepsiyon her şeyi aynı anda yapmaya çalışıyor ve
          hiçbirini iyi yapamıyor. Peki bir önceki akşam saat 22:00&rsquo;de randevu almaya çalışan
          hasta? Muhtemelen vazgeçip komşu muayenehaneyi aradı.
        </p>
        <p>
          Otomasyon tam da burada devreye giriyor. Bu yazı, &bdquo;randevu otomasyonu&ldquo;nun
          somut olarak ne anlama geldiğini, gerçekte ne kazandırdığını açıklıyor — ve aynı
          dürüstlükle: neyin yerini almadığını da.
        </p>

        <h2>Burada &bdquo;otomasyon&ldquo; somut olarak ne demek</h2>
        <p>
          Fikir basit: dijital bir asistan, randevu düzenlemenin organizasyonel kısmını üstlenir —
          web sitesi, telefon ya da chat üzerinden. Hastalar muayene saatleri dışında bile randevu
          alır ya da erteler, onay ve randevu öncesi hatırlatma otomatik olarak gönderilir. Çalışma
          saatleri, uygunluk ve süreçlerle ilgili standart sorular hemen yanıtlanır — resepsiyonun
          önündeki hastayla ilgilenirken işini bölmesine gerek kalmadan.
        </p>
        <p>
          Gelen talepler yapılandırılmış şekilde alınır ve önceliğe göre yönlendirilir — ekip
          neyin acil, neyin bekleyebileceğini hemen görür.
        </p>

        <h2>Gerçekte ne kazandırır</h2>
        <h3>1. Telefonu rahatlatır</h3>
        <p>
          Dijital bir asistan, çalışma saatleri, uygunluk ve süreçlerle ilgili tekrar eden
          soruları yanıtlar, böylece resepsiyon fiziksel olarak orada bulunan hastalara
          odaklanabilir.
        </p>
        <h3>2. 0-24 randevu</h3>
        <p>
          Hastalar muayene saatleri dışında bile online randevu alır ya da erteler — onay ve
          hatırlatma otomatik olarak gönderilir, kimsenin bunun için mesai sonrası kalmasına gerek
          kalmadan.
        </p>
        <h3>3. Daha az gelmeme (no-show)</h3>
        <p>
          Randevudan kısa süre önce gönderilen otomatik hatırlatmalar, gelmeyen hasta sayısını
          azaltır — her gelmeme, aksi takdirde başka birine verilebilecek kayıp bir zaman
          dilimidir.
        </p>
        <h3>4. Talepler önceden sıralanır</h3>
        <p>
          Gelen talepler yapılandırılmış şekilde alınır ve önceliğe göre yönlendirilir, böylece
          ekip neyin acil, neyin bekleyebileceğini hemen görür.
        </p>

        <h2>Dürüstçe: otomasyonun yapamadıkları</h2>
        <p>
          Sistem <strong>tıbbi kararlar vermez</strong> ve klinik anlamda aciliyet değerlendirmesi
          yapmaz. Sadece organizasyonel akışı otomatikleştirir — randevu, uygunluk, tekrar eden
          sorular. Bir hastanın tıbbi durumuyla ilgili her türlü değerlendirme tamamen
          muayenehane ekibinde kalır, sistemde değil. Veri koruma konusu GDPR&rsquo;ye uygun
          şekilde ele alınır — hangi verilerin nasıl işlendiğini önceden birlikte netleştiririz,
          çünkü muayenehanelerin bu konuda haklı olarak hassas olduğunu biliyoruz.
        </p>

        <h2>Ne kadara mal olur?</h2>
        <p>
          Bizde tek bir otomasyon <strong>499 €&rsquo;dan başlar, sabit fiyatla</strong> —
          önceden sabit fiyatlı yazılı bir teklif alırsın, sonrasında hiçbir şey değişmez. Tüm
          muayenehane için eksiksiz bir sistem olması gerekmez — tek bir otomasyon bile, örneğin
          sadece muayene saatleri dışında randevu alma, resepsiyonu her gün rahatlatır.
          Fiyatlandırma modelimiz hakkında daha fazlasını{" "}
          <Link href={localePathname(contentLocale, "/preise")}>fiyatlar sayfasında</Link>
          bulabilirsin.
        </p>

        <h2>Nasıl başlarsın</h2>
        <ol>
          <li>
            <strong>Süreci inceleriz:</strong> bugün randevu talepleri ve aramalar nasıl geliyor?
            Resepsiyon en çok nerede zaman kaybediyor? Bunu ücretsiz bir görüşmede netleştiririz.
          </li>
          <li>
            <strong>Asistanı kurarız:</strong> çalışma saatleri, uygunluk ve standart sorular
            birlikte girilir — anlaşılır şekilde, teknik bir şey öğrenmen gerekmeden.
          </li>
          <li>
            <strong>Test edip canlıya alırız:</strong> otomatik randevu sistemini kendi olağan
            akışınla karşılaştırırsın, biz ince ayar yaparız — sonra çalışır. Genellikle 1-2 hafta
            içinde.
          </li>
        </ol>
        <p>
          Doktor ve diş muayenehaneleri için özel olarak neler kurduğumuz hakkında daha fazlasını{" "}
          <Link href={localePathname(contentLocale, "/branchen/praxen")}>AI için
          muayenehaneler</Link> sayfamızda bulabilirsin.
        </p>
      </ArticleLayout>
    );
  }

  if (contentLocale === "it") {
    return (
      <ArticleLayout article={article} locale={contentLocale}>
        <p>
          Lunedì mattina, mezz&rsquo;ora dopo l&rsquo;apertura. Il telefono in reception non
          smette di squillare — un paziente aspetta in linea, una paziente aspetta allo sportello
          per registrarsi, e un terzo vuole solo spostare un appuntamento di due giorni. La
          reception fa tutto insieme e niente bene. E il paziente che la sera prima alle 22 ha
          provato a prenotare? Probabilmente ha rinunciato e ha chiamato lo studio accanto.
        </p>
        <p>
          È esattamente qui che entra in gioco l&rsquo;automazione. Questo articolo spiega cosa
          significa concretamente &bdquo;automatizzare la prenotazione degli appuntamenti&ldquo;,
          cosa porta davvero — e altrettanto onestamente: cosa non sostituisce.
        </p>

        <h2>Cosa significa concretamente &bdquo;automatizzare&ldquo; qui</h2>
        <p>
          L&rsquo;idea è semplice: un assistente digitale si occupa della parte organizzativa
          della prenotazione — tramite sito, telefono o chat. I pazienti prenotano o spostano
          appuntamenti anche fuori dagli orari di visita, conferma e promemoria prima
          dell&rsquo;appuntamento partono automaticamente. Le domande standard su orari,
          disponibilità e procedure ricevono risposta subito, senza che la reception debba
          interrompere ciò che sta facendo con il paziente che ha davanti.
        </p>
        <p>
          Le richieste in arrivo vengono raccolte in modo strutturato e inoltrate per priorità — il
          team vede subito cosa è urgente e cosa può aspettare.
        </p>

        <h2>Cosa porta davvero</h2>
        <h3>1. Alleggerisce il telefono</h3>
        <p>
          Un assistente digitale risponde alle domande ricorrenti su orari, disponibilità e
          procedure, così la reception può concentrarsi sui pazienti fisicamente presenti.
        </p>
        <h3>2. Appuntamenti 24 ore su 24</h3>
        <p>
          I pazienti prenotano o spostano appuntamenti online, anche fuori dagli orari di visita —
          conferma e promemoria partono automaticamente, senza che nessuno debba restare oltre
          l&rsquo;orario per questo.
        </p>
        <h3>3. Meno no-show</h3>
        <p>
          I promemoria automatici poco prima dell&rsquo;appuntamento riducono il numero di
          pazienti che semplicemente non si presentano — ogni no-show è altrimenti uno slot
          perso che sarebbe potuto andare a qualcun altro.
        </p>
        <h3>4. Richieste pre-ordinate</h3>
        <p>
          Le richieste in arrivo vengono raccolte in modo strutturato e inoltrate per priorità,
          così il team vede subito cosa è urgente e cosa può aspettare.
        </p>

        <h2>Onestamente: cosa non può fare l&rsquo;automazione</h2>
        <p>
          Il sistema <strong>non prende decisioni mediche</strong> e non valuta l&rsquo;urgenza in
          senso clinico. Automatizza solo il flusso organizzativo — prenotazione, disponibilità,
          domande ricorrenti. Ogni valutazione sulla situazione medica di un paziente resta
          interamente al team dello studio, non al sistema. La protezione dei dati è gestita
          correttamente secondo il GDPR — chiariamo insieme in anticipo quali dati vengono
          trattati e come, perché sappiamo che gli studi medici sono giustamente sensibili su
          questo tema.
        </p>

        <h2>Quanto costa?</h2>
        <p>
          Da noi una singola automazione parte <strong>da 499 € a prezzo fisso</strong> — ricevi
          in anticipo un preventivo scritto a prezzo fisso, dopo non cambia più nulla. Non deve
          essere un sistema completo per tutto lo studio — anche una sola automazione, ad esempio
          solo la gestione delle prenotazioni fuori orario, alleggerisce la reception ogni giorno.
          Maggiori informazioni sul nostro modello di prezzi trovi sulla{" "}
          <Link href={localePathname(contentLocale, "/preise")}>pagina dei prezzi</Link>.
        </p>

        <h2>Come iniziare</h2>
        <ol>
          <li>
            <strong>Guardiamo il processo:</strong> come arrivano oggi le richieste di
            appuntamento e le chiamate? Dove la reception perde più tempo? Lo chiariamo in un
            colloquio gratuito.
          </li>
          <li>
            <strong>Configuriamo l&rsquo;assistente:</strong> orari, disponibilità e domande
            standard vengono inseriti insieme — in modo comprensibile, senza che tu debba
            imparare nulla di tecnico.
          </li>
          <li>
            <strong>Testiamo e andiamo online:</strong> confronti la prenotazione automatica con
            il tuo flusso abituale, noi affiniamo — poi funziona. Di solito entro 1-2 settimane.
          </li>
        </ol>
        <p>
          Maggiori informazioni su cosa costruiamo specificamente per studi medici e dentistici
          trovi sulla nostra pagina{" "}
          <Link href={localePathname(contentLocale, "/branchen/praxen")}>AI per gli studi
          medici</Link>.
        </p>
      </ArticleLayout>
    );
  }

  return (
    <ArticleLayout article={article} locale={contentLocale}>
      <p>
        Montagmorgen, eine halbe Stunde nach Öffnung. Das Telefon an der Anmeldung klingelt ohne
        Pause — ein Patient wartet in der Leitung, eine Patientin steht am Tresen und will sich
        anmelden, und ein Dritter möchte nur einen Termin um zwei Tage verschieben. Die Anmeldung
        macht alles gleichzeitig und nichts davon gut. Und der Patient, der am Abend zuvor um 22
        Uhr versucht hat, einen Termin zu buchen? Der hat vermutlich aufgegeben und die Praxis
        nebenan angerufen.
      </p>
      <p>
        Genau hier setzt Automatisierung an. Dieser Artikel erklärt, was &bdquo;Terminvereinbarung
        automatisieren&ldquo; konkret bedeutet, was es wirklich bringt — und ebenso ehrlich, was es
        nicht ersetzt.
      </p>

      <h2>Was &bdquo;automatisieren&ldquo; hier konkret heißt</h2>
      <p>
        Die Idee ist einfach: Ein digitaler Assistent übernimmt den organisatorischen Teil der
        Terminvereinbarung — per Website, Telefon oder Chat. Patienten buchen oder verschieben
        Termine auch außerhalb der Sprechzeiten, Bestätigung und Erinnerung vor dem Termin laufen
        automatisch mit. Standardfragen zu Öffnungszeiten, Verfügbarkeit und Ablauf werden sofort
        beantwortet, ohne dass die Anmeldung unterbrechen muss, was sie gerade mit dem Patienten
        vor Ort macht.
      </p>
      <p>
        Eingehende Anfragen werden dabei strukturiert erfasst und nach Priorität weitergeleitet —
        das Team sieht sofort, was dringend ist und was warten kann.
      </p>

      <h2>Was das konkret bringt</h2>
      <h3>1. Entlastet das Telefon</h3>
      <p>
        Ein digitaler Assistent beantwortet wiederkehrende Fragen zu Öffnungszeiten, Verfügbarkeit
        und Ablauf, damit sich die Anmeldung auf die Patienten konzentrieren kann, die vor Ort
        sind.
      </p>
      <h3>2. Termine rund um die Uhr</h3>
      <p>
        Patienten buchen oder verschieben Termine online, auch außerhalb der Sprechzeiten —
        Bestätigung und Erinnerung laufen automatisch mit, ohne dass dafür jemand länger bleiben
        muss.
      </p>
      <h3>3. Weniger verpasste Termine</h3>
      <p>
        Automatische Erinnerungen kurz vor dem Termin senken die Zahl der Patienten, die einfach
        nicht erscheinen — jeder verpasste Termin ist sonst ein Slot, der jemand anderem hätte
        zugutekommen können.
      </p>
      <h3>4. Anfragen vorsortiert</h3>
      <p>
        Eingehende Anfragen werden strukturiert erfasst und nach Priorität weitergeleitet, sodass
        das Team sofort sieht, was dringend ist und was warten kann.
      </p>

      <h2>Ehrlich: Was es nicht kann</h2>
      <p>
        Das System <strong>trifft keine medizinischen Entscheidungen</strong> und beurteilt keine
        Dringlichkeit im klinischen Sinne. Es automatisiert ausschließlich den organisatorischen
        Ablauf — Terminvergabe, Verfügbarkeit, wiederkehrende Fragen. Jede Einschätzung zur
        gesundheitlichen Situation eines Patienten bleibt vollständig beim Praxisteam, nicht beim
        System. Der Datenschutz ist dabei DSGVO-konform aufgesetzt — welche Daten wie verarbeitet
        werden, klären wir vorab gemeinsam, denn wir wissen, dass Praxen hier zu Recht sensibel
        sind.
      </p>

      <h2>Was kostet das?</h2>
      <p>
        Bei uns startet eine einzelne Automatisierung <strong>ab 499&nbsp;€ zum Festpreis</strong>{" "}
        — du bekommst vorab ein schriftliches Angebot mit fixem Preis, danach ändert sich nichts
        mehr. Es muss kein komplettes System für die ganze Praxis sein — schon eine einzelne
        Automatisierung, zum Beispiel nur die Terminvergabe außerhalb der Sprechzeiten, entlastet
        die Anmeldung jeden Tag. Alles Weitere zu unserem Preismodell findest du auf der{" "}
        <Link href={localePathname(contentLocale, "/preise")}>Preisseite</Link>.
      </p>

      <h2>So startest du</h2>
      <ol>
        <li>
          <strong>Prozess anschauen:</strong> Wie kommen deine Terminanfragen und Anrufe heute
          rein? Wo verliert die Anmeldung am meisten Zeit? Das klären wir in einem kostenlosen
          Gespräch.
        </li>
        <li>
          <strong>Assistent einrichten:</strong> Öffnungszeiten, Verfügbarkeit und Standardfragen
          erfassen wir gemeinsam — verständlich, ohne dass du etwas Technisches lernen musst.
        </li>
        <li>
          <strong>Testen und live gehen:</strong> Du vergleichst die automatische
          Terminvereinbarung mit deinem gewohnten Ablauf, wir justieren nach — dann läuft es. Meist
          innerhalb von 1 bis 2 Wochen.
        </li>
      </ol>
      <p>
        Mehr dazu, was wir speziell für Arzt- und Zahnarztpraxen bauen, findest du auf unserer
        Seite{" "}
        <Link href={localePathname(contentLocale, "/branchen/praxen")}>KI für Arzt- und
        Zahnarztpraxen</Link>.
      </p>
    </ArticleLayout>
  );
}
