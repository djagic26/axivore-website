import type { Metadata } from "next";
import Link from "next/link";
import { ArticleLayout } from "@/components/ratgeber/ArticleLayout";
import { getRatgeberArticle } from "@/lib/ratgeber";
import { resolveContentLocale, partialPageMetadata, localePathname, type AppLocale } from "@/lib/seo";

const AVAILABLE: readonly AppLocale[] = ["de", "hr", "en", "ro", "tr", "it"];
const SLUG = "reservierungen-automatisieren-gastronomie";
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
          Petak navečer, 20 sati. Lokal je pun, kuhinja na limitu — a telefon zvoni treći put u
          deset minuta. Nitko nema slobodnu ruku. Tko odgovori, izgubi minutu za štednjakom ili za
          stolom. Tko ne odgovori, možda izgubi rezervaciju za sljedeći tjedan. A upit koji stigne
          u 23:40, kad je odavno zatvoreno? Njega sutra ujutro možda prvi preuzme konkurencija.
        </p>
        <p>
          Upravo tu ulazi automatizacija. Ovaj članak objašnjava što &bdquo;automatizacija
          rezervacija&ldquo; konkretno znači, što stvarno donosi — i jednako iskreno: što ne
          zamjenjuje.
        </p>

        <h2>Što &bdquo;automatizacija&ldquo; ovdje konkretno znači</h2>
        <p>
          Ideja je jednostavna: digitalni asistent — putem chata na web stranici, WhatsAppa ili
          telefona — prima upite za rezervaciju, i kad je lokal zatvoren i kad je tim usred
          servisa. Poznaje kapacitet stolova, radno vrijeme i standardna pitanja (jelovnik,
          parking, dječje stolice, ljubimci) i odmah odgovara. Potvrda i podsjetnik prije termina
          idu automatski.
        </p>
        <p>
          Važno: sustav <strong>ne zamjenjuje</strong> tvoj postojeći alat za rezervacije. Spaja se
          na njega — ili se, ako još ne postoji, gradi kao vlastito jednostavno rješenje. Odluka o
          tome koliko je stolova slobodno i kada ostaje kod tebe i tvog sustava; asistent preuzima
          samo komunikaciju oko toga.
        </p>

        <h2>Što to stvarno donosi</h2>
        <h3>1. Manje izgubljenih rezervacija izvan radnog vremena</h3>
        <p>
          Velik dio upita stiže navečer ili noću, kad nitko više ne odgovara. Asistent koji radi
          0-24 hvata upravo te upite, umjesto da ih izgubiš konkurenciji.
        </p>
        <h3>2. Mir tijekom servisa</h3>
        <p>
          Tim ne mora birati između gosta za stolom i telefona. Standardna pitanja — radno
          vrijeme, dostupnost, jelovnik — odgovara asistent, bez da itko ispadne iz ritma.
        </p>
        <h3>3. Manje no-showova</h3>
        <p>
          Automatski podsjetnici kratko prije termina smanjuju broj gostiju koji se jednostavno ne
          pojave — bez da itko ručno zove i podsjeća. Kod većih stolova ili vikend-rezervacija to
          je pravi novac: no-show subotom navečer je stol koji nitko drugi nije mogao dobiti.
        </p>
        <h3>4. Recenzije i upiti ne ostaju zaboravljeni</h3>
        <p>
          Pristigle Google recenzije i mail upiti automatski se sortiraju i dobivaju prijedloge
          odgovora — korisno kad između pripreme i obračuna ostane malo vremena za inbox.
        </p>

        <h2>Iskreno: što automatizacija ne može</h2>
        <p>
          Asistent ne donosi iznimne odluke — stalna gošća koja želi poseban stol u zadnji čas ili
          obitelj s petero djece koja zapravo više ne stane, i dalje spadaju u ljudske ruke. Sustav
          pouzdano preuzima standardne slučajeve i sve neobično prosljeđuje tebi ili tvom timu — ne
          obrnuto.
        </p>

        <h2>Koliko to košta — i od kada se isplati?</h2>
        <p>
          Kod nas jedna automatizacija kreće <strong>od 499&nbsp;€ po fiksnoj cijeni</strong> —
          unaprijed dobivaš pisanu ponudu s fiksnom cijenom, poslije se ništa više ne mijenja. Ne
          mora biti kompletan sustav za cijeli lokal — već i jedna automatizacija, primjerice samo
          primanje rezervacija poslije radnog vremena, štedi po nekoliko sati telefoniranja tjedno.
          Više o našem modelu cijena pronađi na{" "}
          <Link href={localePathname(contentLocale, "/preise")}>stranici s cijenama</Link>.
        </p>

        <h2>Kako krenuti</h2>
        <ol>
          <li>
            <strong>Pogledamo proces:</strong> kako danas dolaze rezervacije i pozivi? Gdje najviše
            zapinje? To razjasnimo na besplatnom razgovoru.
          </li>
          <li>
            <strong>Postavljamo asistenta:</strong> kapacitet stolova, radno vrijeme i standardna
            pitanja unosimo zajedno — razumljivo, bez da moraš učiti išta tehničko.
          </li>
          <li>
            <strong>Testiranje i lansiranje:</strong> uspoređuješ automatske rezervacije sa svojim
            uobičajenim tokom, mi dorađujemo — onda sustav radi. Obično unutar 1 do 2 tjedna.
          </li>
        </ol>
        <p>
          Više o tome što gradimo posebno za ugostiteljske objekte pronađi na našoj stranici{" "}
          <Link href={localePathname(contentLocale, "/branchen/gastronomie")}>AI za ugostiteljstvo</Link>.
        </p>
      </ArticleLayout>
    );
  }

  if (contentLocale === "en") {
    return (
      <ArticleLayout article={article} locale={contentLocale}>
        <p>
          Friday night, 8pm. The place is full, the kitchen is at its limit — and the phone rings
          for the third time in ten minutes. No one has a free hand. Whoever picks up loses a
          minute at the stove or at the table. Whoever doesn't might lose a reservation for next
          week. And the inquiry that comes in at 11:40pm, long after closing? Tomorrow morning, a
          competitor might answer it first.
        </p>
        <p>
          That's exactly where automation comes in. This article explains what &ldquo;automating
          reservations&rdquo; actually means, what it really delivers — and just as honestly: what
          it doesn't replace.
        </p>

        <h2>What &ldquo;automating&rdquo; actually means here</h2>
        <p>
          The idea is simple: a digital assistant — via chat on the website, WhatsApp, or phone —
          takes reservation inquiries, even when the venue is closed or the team is mid-service.
          It knows table capacity, opening hours, and the usual standard questions (menu, parking,
          high chairs, pet-friendliness) and answers instantly. Confirmation and a reminder before
          the reservation run automatically.
        </p>
        <p>
          Important: the system does <strong>not replace</strong> your existing reservation tool.
          It connects to it — or, if none exists yet, gets built as a lean solution of its own.
          The decision on how many tables are free and when stays with you and your system; the
          assistant only handles the communication around it.
        </p>

        <h2>What it really delivers</h2>
        <h3>1. Fewer lost reservations outside opening hours</h3>
        <p>
          A good share of inquiries come in the evening or at night, when no one's answering
          anymore. An assistant that responds around the clock catches exactly these inquiries
          instead of losing them to the competition.
        </p>
        <h3>2. Calm during service</h3>
        <p>
          The team doesn't have to choose between the guest at the table and the phone. Standard
          questions — hours, availability, menu — get answered by the assistant, without anyone
          getting pulled out of the flow.
        </p>
        <h3>3. Fewer no-shows</h3>
        <p>
          Automatic reminders shortly before the reservation noticeably reduce guests who simply
          don't show up — without anyone having to call around manually. For larger tables or
          weekend reservations, that's real money: a no-show on Saturday night is a table nobody
          else could have had.
        </p>
        <h3>4. Reviews and inquiries don't slip through</h3>
        <p>
          Incoming Google reviews and email inquiries get sorted automatically and come with
          suggested replies — useful when there's little time for the inbox between mise en place
          and closing out the register.
        </p>

        <h2>Honestly: what automation can't do</h2>
        <p>
          An assistant doesn't make exception calls — the regular who wants a special table at
          short notice, or the family of seven that doesn't actually fit, still belong in human
          hands. The system reliably handles the standard cases and passes everything unusual on
          to you or your team — not the other way around.
        </p>

        <h2>What does it cost — and when is it worth it?</h2>
        <p>
          With us, a single automation starts <strong>from €499 at a fixed price</strong> — you
          get a written quote with a fixed price upfront, nothing changes after that. It doesn't
          have to be a full system for the whole venue — even one automation, say just taking
          reservations after hours, saves several hours of phone time a week. More on our pricing
          model on the <Link href={localePathname(contentLocale, "/preise")}>pricing page</Link>.
        </p>

        <h2>How to get started</h2>
        <ol>
          <li>
            <strong>Look at the process:</strong> how do reservations and calls come in today?
            Where does it get stuck the most? We clarify this in a free call.
          </li>
          <li>
            <strong>Set up the assistant:</strong> table capacity, hours and standard questions are
            entered together — in plain language, with no need for you to learn anything
            technical.
          </li>
          <li>
            <strong>Test and go live:</strong> you compare the automated reservations with your
            usual flow, we fine-tune — then it runs. Usually within 1 to 2 weeks.
          </li>
        </ol>
        <p>
          More on what we build specifically for hospitality venues can be found on our{" "}
          <Link href={localePathname(contentLocale, "/branchen/gastronomie")}>AI for hospitality</Link> page.
        </p>
      </ArticleLayout>
    );
  }

  if (contentLocale === "ro") {
    return (
      <ArticleLayout article={article} locale={contentLocale}>
        <p>
          Vineri seara, ora 20:00. Localul e plin, bucătăria la limită — și telefonul sună a treia
          oară în zece minute. Nimeni nu are o mână liberă. Cine răspunde pierde un minut la
          aragaz sau la masă. Cine nu răspunde pierde poate o rezervare pentru săptămâna viitoare.
          Iar cererea care vine la 23:40, când e demult închis? Mâine dimineață poate răspunde
          concurența prima.
        </p>
        <p>
          Exact aici intervine automatizarea. Acest articol explică ce înseamnă concret
          &bdquo;automatizarea rezervărilor&ldquo;, ce aduce cu adevărat — și la fel de sincer: ce
          nu înlocuiește.
        </p>

        <h2>Ce înseamnă concret &bdquo;automatizarea&ldquo; aici</h2>
        <p>
          Ideea este simplă: un asistent digital — prin chat pe site, WhatsApp sau telefon —
          preia cererile de rezervare, chiar și când localul e închis sau echipa e în mijlocul
          serviciului. Cunoaște capacitatea meselor, programul și întrebările standard obișnuite
          (meniu, parcare, scaune pentru copii, animale de companie) și răspunde imediat.
          Confirmarea și memento-ul înainte de rezervare se trimit automat.
        </p>
        <p>
          Important: sistemul <strong>nu înlocuiește</strong> instrumentul tău actual de
          rezervări. Se conectează la el — sau, dacă nu există încă unul, este construit ca o
          soluție proprie, simplă. Decizia despre câte mese sunt libere și când rămâne la tine și
          la sistemul tău; asistentul preia doar comunicarea din jurul acesteia.
        </p>

        <h2>Ce aduce cu adevărat</h2>
        <h3>1. Mai puține rezervări pierdute în afara programului</h3>
        <p>
          O bună parte din cereri vin seara sau noaptea, când nimeni nu mai răspunde. Un asistent
          care răspunde non-stop prinde exact aceste cereri, în loc să le piardă în favoarea
          concurenței.
        </p>
        <h3>2. Liniște în timpul serviciului</h3>
        <p>
          Echipa nu trebuie să aleagă între oaspetele de la masă și telefon. Întrebările standard —
          program, disponibilitate, meniu — sunt preluate de asistent, fără ca cineva să fie scos
          din ritm.
        </p>
        <h3>3. Mai puține no-show-uri</h3>
        <p>
          Memento-urile automate cu puțin timp înainte de rezervare reduc vizibil oaspeții care
          pur și simplu nu apar — fără ca cineva să sune manual. La mese mari sau rezervări de
          weekend, asta înseamnă bani reali: un no-show sâmbătă seara e o masă pe care nimeni
          altcineva n-a putut-o primi.
        </p>
        <h3>4. Recenziile și cererile nu mai rămân uitate</h3>
        <p>
          Recenziile Google și cererile prin e-mail primite sunt sortate automat și primesc
          sugestii de răspuns — util când între mise en place și încasări rămâne puțin timp pentru
          inbox.
        </p>

        <h2>Sincer: ce nu poate face automatizarea</h2>
        <p>
          Un asistent nu ia decizii de excepție — clienta fidelă care vrea o masă specială pe
          ultima sută de metri sau familia cu cinci copii care de fapt nu mai încape rămân tot în
          mâini omenești. Sistemul preia sigur cazurile standard și transmite mai departe tot ce e
          neobișnuit către tine sau echipa ta — nu invers.
        </p>

        <h2>Cât costă — și de când merită?</h2>
        <p>
          La noi, o automatizare pornește <strong>de la 499&nbsp;€ la preț fix</strong> — primești
          în avans o ofertă scrisă cu preț fix, după aceea nimic nu se mai schimbă. Nu trebuie să
          fie un sistem complet pentru tot localul — chiar și o singură automatizare, de exemplu
          doar preluarea rezervărilor în afara programului, economisește câteva ore de telefon pe
          săptămână. Mai multe despre modelul nostru de prețuri găsești pe{" "}
          <Link href={localePathname(contentLocale, "/preise")}>pagina de prețuri</Link>.
        </p>

        <h2>Cum începi</h2>
        <ol>
          <li>
            <strong>Analizăm procesul:</strong> cum vin azi rezervările și apelurile? Unde se
            blochează cel mai mult? Asta clarificăm la o discuție gratuită.
          </li>
          <li>
            <strong>Configurăm asistentul:</strong> capacitatea meselor, programul și întrebările
            standard le introducem împreună — pe înțeles, fără să fie nevoie să înveți ceva
            tehnic.
          </li>
          <li>
            <strong>Testare și lansare:</strong> compari rezervările automate cu fluxul tău
            obișnuit, ajustăm — apoi funcționează. De obicei în 1 până la 2 săptămâni.
          </li>
        </ol>
        <p>
          Mai multe despre ce construim special pentru localuri din ospitalitate găsești pe pagina
          noastră{" "}
          <Link href={localePathname(contentLocale, "/branchen/gastronomie")}>AI pentru ospitalitate</Link>.
        </p>
      </ArticleLayout>
    );
  }

  if (contentLocale === "tr") {
    return (
      <ArticleLayout article={article} locale={contentLocale}>
        <p>
          Cuma akşamı, saat 20:00. Mekân dolu, mutfak sınırda — ve telefon on dakikada üçüncü kez
          çalıyor. Kimsenin boş eli yok. Kim açarsa ocaktan ya da masadan bir dakika kaybediyor.
          Kim açmazsa belki gelecek haftaki bir rezervasyonu kaybediyor. Ya saat 23:40&rsquo;ta,
          çoktan kapandıktan sonra gelen talep? Yarın sabah onu belki de önce bir rakip
          yanıtlayacak.
        </p>
        <p>
          Otomasyon tam da burada devreye giriyor. Bu yazı, &bdquo;rezervasyon otomasyonu&ldquo;nun
          somut olarak ne anlama geldiğini, gerçekte ne kazandırdığını açıklıyor — ve aynı
          dürüstlükle: neyin yerini almadığını da.
        </p>

        <h2>Burada &bdquo;otomasyon&ldquo; somut olarak ne demek</h2>
        <p>
          Fikir basit: dijital bir asistan — web sitesindeki chat, WhatsApp ya da telefon
          üzerinden — mekân kapalıyken ya da ekip servisin ortasındayken bile rezervasyon
          taleplerini alır. Masa kapasitesini, çalışma saatlerini ve standart soruları (menü,
          otopark, çocuk sandalyesi, evcil hayvan dostu olup olmadığı) bilir ve anında yanıtlar.
          Onay ve randevu öncesi hatırlatma otomatik olarak gönderilir.
        </p>
        <p>
          Önemli: sistem mevcut rezervasyon aracının <strong>yerini almaz</strong>. Ona bağlanır —
          ya da henüz yoksa, kendi başına sade bir çözüm olarak kurulur. Hangi masaların ne zaman
          boş olduğuna dair karar sende ve sisteminde kalır; asistan sadece bunun etrafındaki
          iletişimi üstlenir.
        </p>

        <h2>Gerçekte ne kazandırır</h2>
        <h3>1. Çalışma saatleri dışında daha az kayıp rezervasyon</h3>
        <p>
          Taleplerin önemli bir kısmı, artık kimsenin yanıt vermediği akşam ya da gece saatlerinde
          gelir. 0-24 yanıt veren bir asistan, tam da bu talepleri yakalar — rakiplere
          kaptırmadan.
        </p>
        <h3>2. Servis sırasında huzur</h3>
        <p>
          Ekip, masadaki misafir ile telefon arasında seçim yapmak zorunda kalmaz. Standart
          sorular — çalışma saatleri, uygunluk, menü — asistan tarafından yanıtlanır, kimse
          akıştan kopmadan.
        </p>
        <h3>3. Daha az no-show</h3>
        <p>
          Randevudan kısa süre önce gönderilen otomatik hatırlatmalar, gelmeyen misafir sayısını
          belirgin şekilde azaltır — kimsenin elle arayıp hatırlatmasına gerek kalmadan. Büyük
          masalarda ya da hafta sonu rezervasyonlarında bu gerçek bir para demektir: cumartesi
          akşamı bir no-show, başka kimsenin alamadığı bir masa demektir.
        </p>
        <h3>4. Yorumlar ve talepler unutulmaz</h3>
        <p>
          Gelen Google yorumları ve e-posta talepleri otomatik olarak sıralanır ve yanıt önerileri
          ile birlikte gelir — mise en place ile hesap arasında gelen kutusuna az zaman kaldığında
          işe yarar.
        </p>

        <h2>Dürüstçe: otomasyonun yapamadıkları</h2>
        <p>
          Bir asistan istisna kararları vermez — son anda özel bir masa isteyen sadık müşteri ya
          da aslında sığmayan yedi kişilik aile hâlâ insan elini gerektirir. Sistem standart
          durumları güvenilir şekilde üstlenir ve olağandışı olan her şeyi sana ya da ekibine
          yönlendirir — tersi değil.
        </p>

        <h2>Ne kadara mal olur — ve ne zamandan itibaren değer?</h2>
        <p>
          Bizde tek bir otomasyon <strong>499 €&rsquo;dan başlar, sabit fiyatla</strong> —
          önceden sabit fiyatlı yazılı bir teklif alırsın, sonrasında hiçbir şey değişmez. Tüm
          mekân için eksiksiz bir sistem olması gerekmez — tek bir otomasyon bile, örneğin sadece
          çalışma saatleri dışında rezervasyon almak, haftada birkaç saat telefon süresinden
          tasarruf sağlar. Fiyatlandırma modelimiz hakkında daha fazlasını{" "}
          <Link href={localePathname(contentLocale, "/preise")}>fiyatlar sayfasında</Link> bulabilirsin.
        </p>

        <h2>Nasıl başlarsın</h2>
        <ol>
          <li>
            <strong>Süreci inceleriz:</strong> bugün rezervasyonlar ve aramalar nasıl geliyor? En
            çok nerede takılıyorsun? Bunu ücretsiz bir görüşmede netleştiririz.
          </li>
          <li>
            <strong>Asistanı kurarız:</strong> masa kapasitesi, çalışma saatleri ve standart
            sorular birlikte girilir — anlaşılır şekilde, teknik bir şey öğrenmen gerekmeden.
          </li>
          <li>
            <strong>Test edip canlıya alırız:</strong> otomatik rezervasyonları kendi olağan
            akışınla karşılaştırırsın, biz ince ayar yaparız — sonra çalışır. Genellikle 1-2 hafta
            içinde.
          </li>
        </ol>
        <p>
          Gastronomi işletmeleri için özel olarak neler kurduğumuz hakkında daha fazlasını{" "}
          <Link href={localePathname(contentLocale, "/branchen/gastronomie")}>AI için gastronomi</Link> sayfamızda bulabilirsin.
        </p>
      </ArticleLayout>
    );
  }

  if (contentLocale === "it") {
    return (
      <ArticleLayout article={article} locale={contentLocale}>
        <p>
          Venerdì sera, ore 20. Il locale è pieno, la cucina al limite — e il telefono squilla per
          la terza volta in dieci minuti. Nessuno ha una mano libera. Chi risponde perde un minuto
          ai fornelli o al tavolo. Chi non risponde forse perde una prenotazione per la settimana
          prossima. E la richiesta che arriva alle 23:40, quando è già chiuso da un pezzo? Domani
          mattina magari risponde prima un concorrente.
        </p>
        <p>
          È esattamente qui che entra in gioco l&rsquo;automazione. Questo articolo spiega cosa
          significa concretamente &bdquo;automatizzare le prenotazioni&ldquo;, cosa porta davvero —
          e altrettanto onestamente: cosa non sostituisce.
        </p>

        <h2>Cosa significa concretamente &bdquo;automatizzare&ldquo; qui</h2>
        <p>
          L&rsquo;idea è semplice: un assistente digitale — via chat sul sito, WhatsApp o telefono
          — riceve le richieste di prenotazione, anche quando il locale è chiuso o il team è nel
          bel mezzo del servizio. Conosce la capacità dei tavoli, gli orari di apertura e le
          domande standard più comuni (menu, parcheggio, seggioloni, animali ammessi) e risponde
          subito. Conferma e promemoria prima della prenotazione partono automaticamente.
        </p>
        <p>
          Importante: il sistema <strong>non sostituisce</strong> il tuo attuale strumento di
          prenotazione. Si collega ad esso — oppure, se non ne esiste ancora uno, viene costruito
          come soluzione propria e snella. La decisione su quanti tavoli sono liberi e quando
          resta a te e al tuo sistema; l&rsquo;assistente gestisce solo la comunicazione intorno a
          questo.
        </p>

        <h2>Cosa porta davvero</h2>
        <h3>1. Meno prenotazioni perse fuori orario</h3>
        <p>
          Una buona parte delle richieste arriva di sera o di notte, quando nessuno risponde più.
          Un assistente che risponde 24 ore su 24 intercetta esattamente queste richieste, invece
          di perderle a favore della concorrenza.
        </p>
        <h3>2. Calma durante il servizio</h3>
        <p>
          Il team non deve scegliere tra l&rsquo;ospite al tavolo e il telefono. Le domande
          standard — orari, disponibilità, menu — vengono gestite dall&rsquo;assistente, senza che
          nessuno venga tolto dal proprio ritmo.
        </p>
        <h3>3. Meno no-show</h3>
        <p>
          I promemoria automatici poco prima della prenotazione riducono sensibilmente gli ospiti
          che semplicemente non si presentano — senza che nessuno debba chiamare manualmente. Per
          i tavoli grandi o le prenotazioni del weekend è denaro vero: un no-show di sabato sera è
          un tavolo che nessun altro ha potuto avere.
        </p>
        <h3>4. Recensioni e richieste non restano dimenticate</h3>
        <p>
          Le recensioni Google e le richieste via email in arrivo vengono ordinate automaticamente
          e arrivano con suggerimenti di risposta — utile quando tra la mise en place e la cassa
          resta poco tempo per la posta.
        </p>

        <h2>Onestamente: cosa non può fare l&rsquo;automazione</h2>
        <p>
          Un assistente non prende decisioni eccezionali — la cliente abituale che vuole un tavolo
          speciale all&rsquo;ultimo minuto o la famiglia di sette persone che in realtà non ci sta
          restano comunque nelle mani umane. Il sistema gestisce in modo affidabile i casi
          standard e inoltra tutto ciò che è insolito a te o al tuo team — non il contrario.
        </p>

        <h2>Quanto costa — e da quando conviene?</h2>
        <p>
          Da noi una singola automazione parte <strong>da 499 € a prezzo fisso</strong> — ricevi
          in anticipo un preventivo scritto a prezzo fisso, dopo non cambia più nulla. Non deve
          essere un sistema completo per tutto il locale — anche una sola automazione, ad esempio
          solo la gestione delle prenotazioni fuori orario, risparmia diverse ore di telefono a
          settimana. Maggiori informazioni sul nostro modello di prezzi trovi sulla{" "}
          <Link href={localePathname(contentLocale, "/preise")}>pagina dei prezzi</Link>.
        </p>

        <h2>Come iniziare</h2>
        <ol>
          <li>
            <strong>Guardiamo il processo:</strong> come arrivano oggi prenotazioni e chiamate?
            Dove si blocca di più? Lo chiariamo in un colloquio gratuito.
          </li>
          <li>
            <strong>Configuriamo l&rsquo;assistente:</strong> capacità dei tavoli, orari e domande
            standard vengono inseriti insieme — in modo comprensibile, senza che tu debba imparare
            nulla di tecnico.
          </li>
          <li>
            <strong>Testiamo e andiamo online:</strong> confronti le prenotazioni automatiche con
            il tuo flusso abituale, noi affiniamo — poi funziona. Di solito entro 1-2 settimane.
          </li>
        </ol>
        <p>
          Maggiori informazioni su cosa costruiamo specificamente per i locali di ristorazione
          trovi sulla nostra pagina{" "}
          <Link href={localePathname(contentLocale, "/branchen/gastronomie")}>AI per la ristorazione</Link>.
        </p>
      </ArticleLayout>
    );
  }

  return (
    <ArticleLayout article={article} locale={contentLocale}>
      <p>
        Freitagabend, 20 Uhr. Der Laden ist voll, die Küche am Limit — und das Telefon klingelt zum
        dritten Mal in zehn Minuten. Niemand hat eine freie Hand. Wer abnimmt, verliert eine Minute
        am Herd oder am Tisch. Wer nicht abnimmt, verliert vielleicht eine Reservierung für nächste
        Woche. Und die Anfrage, die um 23:40 Uhr kommt, wenn längst zu ist? Die beantwortet am
        nächsten Morgen vielleicht schon ein anderes Lokal zuerst.
      </p>
      <p>
        Genau hier setzt Automatisierung an. Dieser Artikel erklärt, was &bdquo;Reservierungen
        automatisieren&ldquo; konkret bedeutet, was es wirklich bringt — und ebenso ehrlich, was es
        nicht ersetzt.
      </p>

      <h2>Was &bdquo;automatisieren&ldquo; hier konkret heißt</h2>
      <p>
        Die Idee ist einfach: Ein digitaler Assistent — per Chat auf der Website, WhatsApp oder
        Telefon — nimmt Reservierungsanfragen entgegen, auch wenn das Lokal geschlossen hat oder
        das Team mitten im Service steckt. Er kennt Tischkapazität, Öffnungszeiten und die üblichen
        Standardfragen (Karte, Parkplätze, Kinderstühle, Hundefreundlichkeit) und beantwortet sie
        sofort. Bestätigung und Erinnerung vor dem Termin laufen automatisch mit.
      </p>
      <p>
        Wichtig: Das System <strong>ersetzt nicht</strong> dein bestehendes Reservierungstool. Es
        wird daran angebunden — oder, falls noch keins existiert, als schlanke eigene Lösung
        gebaut. Die Entscheidung, wie viele Tische wann frei sind, bleibt bei dir und deinem
        System; der Assistent übernimmt nur die Kommunikation drumherum.
      </p>

      <h2>Was das konkret bringt</h2>
      <h3>1. Weniger verlorene Reservierungen außerhalb der Öffnungszeiten</h3>
      <p>
        Ein gutes Stück der Anfragen kommt abends oder nachts, wenn niemand mehr rangeht. Ein
        Assistent, der 0–24 antwortet, fängt genau diese Anfragen auf, statt sie an die Konkurrenz
        zu verlieren.
      </p>
      <h3>2. Ruhe während des Service</h3>
      <p>
        Das Team muss nicht zwischen Gast am Tisch und Telefon entscheiden. Standardfragen —
        Öffnungszeiten, Verfügbarkeit, Speisekarte — beantwortet der Assistent, ohne dass jemand
        aus dem Ablauf gerissen wird.
      </p>
      <h3>3. Weniger No-Shows</h3>
      <p>
        Automatische Erinnerungen kurz vor dem reservierten Termin senken die Zahl der Gäste, die
        einfach nicht auftauchen — ohne dass jemand von Hand hinterhertelefonieren muss. Gerade bei
        größeren Tischen oder Wochenend-Reservierungen ist das bares Geld: ein No-Show am
        Samstagabend ist ein Tisch, der niemand anderem zugesagt werden konnte.
      </p>
      <h3>4. Bewertungen und Anfragen laufen nicht mehr unter</h3>
      <p>
        Eingehende Google-Bewertungen und Mail-Anfragen werden automatisch sortiert, mit
        Antwortvorschlägen versehen — praktisch, wenn zwischen Mise en Place und Abrechnung wenig
        Zeit für die Inbox bleibt.
      </p>

      <h2>Ehrlich: Was es nicht kann</h2>
      <p>
        Ein Assistent trifft keine Ausnahmeentscheidungen — die Stammgästin, die kurzfristig einen
        Sondertisch will, oder die Familie mit fünf Kindern, die eigentlich nicht mehr reinpasst,
        gehören weiter in menschliche Hände. Das System übernimmt die Standardfälle zuverlässig und
        gibt alles Ungewöhnliche an dich oder dein Team weiter — nicht andersherum.
      </p>

      <h2>Was kostet das — und ab wann lohnt es sich?</h2>
      <p>
        Bei uns startet eine einzelne Automatisierung <strong>ab 499&nbsp;€ zum Festpreis</strong> —
        du bekommst vorab ein schriftliches Angebot mit fixem Preis, danach ändert sich nichts
        mehr. Es muss kein komplettes System für den ganzen Betrieb sein — schon eine einzelne
        Automatisierung, zum Beispiel nur die Annahme von Reservierungen nach Feierabend, spart pro
        Woche mehrere Stunden Telefonzeit. Alles Weitere zu unserem Preismodell findest du auf der{" "}
        <Link href={localePathname(contentLocale, "/preise")}>Preisseite</Link>.
      </p>

      <h2>So startest du</h2>
      <ol>
        <li>
          <strong>Prozess anschauen:</strong> Wie kommen deine Reservierungen und Anrufe heute
          rein? Wo hakt es am meisten? Das klären wir in einem kostenlosen Gespräch.
        </li>
        <li>
          <strong>Assistent einrichten:</strong> Tischkapazität, Öffnungszeiten und Standardfragen
          erfassen wir gemeinsam — verständlich, ohne dass du etwas Technisches lernen musst.
        </li>
        <li>
          <strong>Testen und live gehen:</strong> Du vergleichst die automatischen Reservierungen
          mit deinem gewohnten Ablauf, wir justieren nach — dann läuft es. Meist innerhalb von 1
          bis 2 Wochen.
        </li>
      </ol>
      <p>
        Mehr dazu, was wir speziell für Gastronomiebetriebe bauen, findest du auf unserer Seite{" "}
        <Link href={localePathname(contentLocale, "/branchen/gastronomie")}>KI für Gastronomie</Link>.
      </p>
    </ArticleLayout>
  );
}
