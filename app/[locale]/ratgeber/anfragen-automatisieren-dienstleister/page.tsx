import type { Metadata } from "next";
import Link from "next/link";
import { ArticleLayout } from "@/components/ratgeber/ArticleLayout";
import { getRatgeberArticle } from "@/lib/ratgeber";
import { resolveContentLocale, partialPageMetadata, localePathname, type AppLocale } from "@/lib/seo";

const AVAILABLE: readonly AppLocale[] = ["de", "hr", "en", "ro", "tr", "it"];
const SLUG = "anfragen-automatisieren-dienstleister";
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
          Upit stigne na WhatsApp dok si na terenu, ruke su ti prljave, telefon ostaje u džepu. Misliš
          &bdquo;odgovorit ću navečer&ldquo; — ali navečer stigne još pet drugih stvari, i poruka
          jednostavno potone. Sutradan klijent više ne piše. Već je dogovorio nekog drugog, onog tko je
          prvi odgovorio.
        </p>
        <p>
          Ovaj članak objašnjava što &bdquo;automatizacija upita&ldquo; konkretno znači za pružatelje
          usluga, što stvarno donosi — i jednako iskreno: što ne zamjenjuje.
        </p>

        <h2>Što &bdquo;automatizacija&ldquo; ovdje konkretno znači</h2>
        <p>
          Upiti danas stižu kroz pet različitih kanala — telefon, mail, WhatsApp, kontakt formu i
          poruke na društvenim mrežama. Digitalni asistent preuzima taj prvi kontakt: odmah odgovara,
          i navečer i vikendom, te prikuplja sve podatke koji su potrebni za ponudu. Iz toga automatski
          nastaje gotova, formatirana ponuda — spremna za slanje, bez da moraš sjesti navečer i sam je
          sastavljati.
        </p>
        <p>
          Sustav je tool-agnostičan: spaja se na alate koje već koristiš, ili se, ako ih nemaš, gradi
          kao vlastito jednostavno rješenje. Nikoga ne tjeramo da mijenja alat koji mu odgovara.
        </p>

        <h2>Što to stvarno donosi</h2>
        <h3>1. Upiti 0-24</h3>
        <p>
          Asistent odmah odgovara na upite, i navečer i vikendom, i prikuplja sve što ti treba za
          ponudu — umjesto da upit potone dok si na terenu ili spavaš.
        </p>
        <h3>2. Ponude automatski</h3>
        <p>
          Iz prikupljenih podataka nastaje gotova ponuda, formatirana i spremna za slanje. Nema više
          navečer sjedenja za kuhinjskim stolom da se sastavi ponuda koju je trebalo poslati jučer.
        </p>
        <h3>3. Termini i rezervacije</h3>
        <p>
          Klijenti sami rezerviraju odgovarajući termin, potvrda i podsjetnik idu automatski — nema
          više prepiske telefonom da se uskladi kad kome odgovara.
        </p>
        <h3>4. Podsjećanje bez zaborava</h3>
        <p>
          Otvorene ponude i upiti se automatski i ljubazno podsjećaju, tako da od interesa stvarno
          nastane dogovoren posao — umjesto da tiho izblijedi jer ga nitko nije pratio.
        </p>

        <h2>Iskreno: što automatizacija ne može</h2>
        <p>
          Sustav ne donosi prosudbe koje trebaju tebe — cijenu za neuobičajen ili kompliciran posao,
          odluku hoćeš li uopće preuzeti težeg klijenta, ili pravu pritužbu koja treba ljudski razgovor.
          To i dalje spada u tvoje ruke. Sustav pouzdano preuzima standardni tok od upita do ponude i
          sve neobično vraća tebi — ne obrnuto.
        </p>

        <h2>Koliko to košta — i od kada se isplati?</h2>
        <p>
          Kod nas jedna automatizacija kreće <strong>od 499&nbsp;€ po fiksnoj cijeni</strong> —
          unaprijed dobivaš pisanu ponudu s fiksnom cijenom, poslije se ništa više ne mijenja. Ne mora
          biti kompletan sustav odjednom — već i samo automatsko primanje upita izvan radnog vremena
          zna spasiti posao koji bi inače otišao konkurenciji. Više o našem modelu cijena pronađi na{" "}
          <Link href={localePathname(contentLocale, "/preise")}>stranici s cijenama</Link>.
        </p>

        <h2>Kako krenuti</h2>
        <ol>
          <li>
            <strong>Pogledamo proces:</strong> kako danas dolaze upiti i kako nastaju tvoje ponude?
            Gdje najviše zapinje? To razjasnimo na besplatnom razgovoru.
          </li>
          <li>
            <strong>Postavljamo asistenta:</strong> tvoje usluge, cijene i standardna pitanja unosimo
            zajedno — razumljivo, bez da moraš učiti išta tehničko.
          </li>
          <li>
            <strong>Testiranje i lansiranje:</strong> uspoređuješ automatske odgovore i ponude sa
            svojim uobičajenim tokom, mi dorađujemo — onda sustav radi. Obično unutar 1 do 2 tjedna.
          </li>
        </ol>
        <p>
          Više o tome što gradimo posebno za uslužne djelatnosti pronađi na našoj stranici{" "}
          <Link href={localePathname(contentLocale, "/branchen/dienstleister")}>AI za pružatelje usluga</Link>.
        </p>
      </ArticleLayout>
    );
  }

  if (contentLocale === "en") {
    return (
      <ArticleLayout article={article} locale={contentLocale}>
        <p>
          An inquiry lands on WhatsApp while you're on a job, hands full, phone staying in your pocket.
          You think &ldquo;I'll answer this evening&rdquo; — but the evening brings five other things,
          and the message just sinks. By the next day, the customer's gone quiet. They already booked
          someone else — whoever answered first.
        </p>
        <p>
          This article explains what &ldquo;automating inquiries&rdquo; actually means for service
          providers, what it really delivers — and just as honestly: what it doesn't replace.
        </p>

        <h2>What &ldquo;automating&rdquo; actually means here</h2>
        <p>
          Inquiries today come in through five different channels — phone, email, WhatsApp, contact
          form, and social media DMs. A digital assistant takes over that first contact: it answers
          immediately, evenings and weekends too, and collects all the info needed for a quote. From
          that, a finished, formatted quote gets generated automatically — ready to send, without you
          having to sit down at night and put it together yourself.
        </p>
        <p>
          The system is tool-agnostic: it connects to whatever you already use, or if you don't have
          anything yet, it gets built as a lean standalone solution. Nobody has to switch to a tool
          they don't want.
        </p>

        <h2>What it really delivers</h2>
        <h3>1. Inquiries around the clock</h3>
        <p>
          The assistant answers inquiries immediately, evenings and weekends too, and collects
          everything you need for a quote — instead of the inquiry sinking while you're on a job site
          or asleep.
        </p>
        <h3>2. Quotes automatically</h3>
        <p>
          The finished quote is generated from the collected details, formatted and ready to send. No
          more sitting at the kitchen table at night putting together a quote that should have gone
          out yesterday.
        </p>
        <h3>3. Appointments & booking</h3>
        <p>
          Customers book a suitable appointment themselves, confirmation and reminder go out
          automatically — no more back-and-forth by phone trying to find a time that works.
        </p>
        <h3>4. Follow-up without forgetting</h3>
        <p>
          Open quotes and inquiries get an automatic, friendly follow-up, so interest actually turns
          into a booked job — instead of quietly fading because nobody kept track of it.
        </p>

        <h2>Honestly: what automation can't do</h2>
        <p>
          The system doesn't make the judgment calls that need you — pricing an unusual or complex job,
          deciding whether to take on a difficult client, or handling a genuine complaint that needs a
          human conversation. Those still belong in your hands. It reliably handles the standard,
          repeatable flow from inquiry to quote and hands anything atypical back to you — not the other
          way around.
        </p>

        <h2>What does it cost — and when is it worth it?</h2>
        <p>
          With us, a single automation starts <strong>from €499 at a fixed price</strong> — you get a
          written quote with a fixed price upfront, nothing changes after that. It doesn't have to be a
          complete system right away — even just automatically catching inquiries outside business
          hours can save a job that would otherwise have gone to a competitor. More on our pricing model
          on the <Link href={localePathname(contentLocale, "/preise")}>pricing page</Link>.
        </p>

        <h2>How to get started</h2>
        <ol>
          <li>
            <strong>Look at the process:</strong> how do inquiries come in today, and how do your
            quotes come together? Where does it get stuck the most? We clarify this in a free call.
          </li>
          <li>
            <strong>Set up the assistant:</strong> your services, prices and standard questions are
            entered together — in plain language, with no need for you to learn anything technical.
          </li>
          <li>
            <strong>Test and go live:</strong> you compare the automatic replies and quotes with your
            usual flow, we fine-tune — then it runs. Usually within 1 to 2 weeks.
          </li>
        </ol>
        <p>
          More on what we build specifically for service businesses can be found on our{" "}
          <Link href={localePathname(contentLocale, "/branchen/dienstleister")}>AI for service providers</Link> page.
        </p>
      </ArticleLayout>
    );
  }

  if (contentLocale === "ro") {
    return (
      <ArticleLayout article={article} locale={contentLocale}>
        <p>
          O cerere ajunge pe WhatsApp în timp ce ești la un client, cu mâinile ocupate, telefonul rămâne
          în buzunar. Te gândești &bdquo;răspund diseară&ldquo; — dar seara vin alte cinci lucruri, iar
          mesajul pur și simplu se pierde. A doua zi, clientul nu mai scrie. Deja a stabilit cu altcineva
          — cine a răspuns primul.
        </p>
        <p>
          Acest articol explică ce înseamnă concret &bdquo;automatizarea cererilor&ldquo; pentru
          prestatorii de servicii, ce aduce cu adevărat — și la fel de sincer: ce nu înlocuiește.
        </p>

        <h2>Ce înseamnă concret &bdquo;automatizarea&ldquo; aici</h2>
        <p>
          Cererile vin astăzi prin cinci canale diferite — telefon, e-mail, WhatsApp, formular de
          contact și mesaje pe rețelele sociale. Un asistent digital preia acel prim contact: răspunde
          imediat, seara și în weekend la fel, și colectează toate informațiile necesare pentru o ofertă.
          Din acestea rezultă automat o ofertă finită, formatată — gata de trimis, fără să trebuiască să
          stai seara să o întocmești singur.
        </p>
        <p>
          Sistemul este independent de instrumente: se conectează la ce folosești deja sau, dacă nu ai
          încă nimic, este construit ca o soluție proprie, simplă. Nimeni nu e obligat să schimbe un
          instrument cu care e mulțumit.
        </p>

        <h2>Ce aduce cu adevărat</h2>
        <h3>1. Cereri non-stop</h3>
        <p>
          Asistentul răspunde imediat la cereri, seara și în weekend la fel, și colectează tot ce ai
          nevoie pentru o ofertă — în loc ca cererea să se piardă cât ești la un client sau dormi.
        </p>
        <h3>2. Oferte automate</h3>
        <p>
          Din datele colectate rezultă oferta finită, formatată și gata de trimis. Nu mai stai seara la
          masa din bucătărie să întocmești o ofertă care trebuia trimisă ieri.
        </p>
        <h3>3. Programări și rezervări</h3>
        <p>
          Clienții își programează singuri o întâlnire potrivită, confirmarea și memento-ul se trimit
          automat — fără du-te-vino la telefon ca să găsiți o oră care convine amândurora.
        </p>
        <h3>4. Urmărire fără să uiți</h3>
        <p>
          Ofertele și cererile deschise primesc automat un mesaj de urmărire politicos, astfel încât
          interesul se transformă efectiv într-un job rezervat — în loc să se stingă liniștit pentru că
          nimeni nu a mai urmărit-o.
        </p>

        <h2>Sincer: ce nu poate face automatizarea</h2>
        <p>
          Sistemul nu ia deciziile care au nevoie de tine — stabilirea prețului pentru un job neobișnuit
          sau complex, decizia dacă preiei un client dificil sau gestionarea unei reclamații reale care
          are nevoie de o discuție umană. Astea rămân tot în mâinile tale. Preia fiabil fluxul standard,
          repetabil, de la cerere la ofertă și îți transmite ție tot ce iese din tipar — nu invers.
        </p>

        <h2>Cât costă — și de când merită?</h2>
        <p>
          La noi, o automatizare pornește <strong>de la 499&nbsp;€ la preț fix</strong> — primești în
          avans o ofertă scrisă cu preț fix, după aceea nimic nu se mai schimbă. Nu trebuie să fie un
          sistem complet de la început — chiar și doar preluarea automată a cererilor în afara
          programului poate salva un job care altfel ar fi ajuns la concurență. Mai multe despre modelul
          nostru de prețuri găsești pe{" "}
          <Link href={localePathname(contentLocale, "/preise")}>pagina de prețuri</Link>.
        </p>

        <h2>Cum începi</h2>
        <ol>
          <li>
            <strong>Analizăm procesul:</strong> cum vin azi cererile și cum se întocmesc ofertele tale?
            Unde se blochează cel mai mult? Asta clarificăm la o discuție gratuită.
          </li>
          <li>
            <strong>Configurăm asistentul:</strong> serviciile, prețurile și întrebările standard le
            introducem împreună — pe înțeles, fără să fie nevoie să înveți ceva tehnic.
          </li>
          <li>
            <strong>Testare și lansare:</strong> compari răspunsurile și ofertele automate cu fluxul
            tău obișnuit, ajustăm — apoi funcționează. De obicei în 1 până la 2 săptămâni.
          </li>
        </ol>
        <p>
          Mai multe despre ce construim special pentru afaceri de servicii găsești pe pagina noastră{" "}
          <Link href={localePathname(contentLocale, "/branchen/dienstleister")}>AI pentru prestatori de servicii</Link>.
        </p>
      </ArticleLayout>
    );
  }

  if (contentLocale === "tr") {
    return (
      <ArticleLayout article={article} locale={contentLocale}>
        <p>
          Sen sahadayken, eller dolu, telefon cepte dururken WhatsApp&rsquo;a bir talep düşer.
          &bdquo;Akşam cevaplarım&ldquo; diye düşünürsün — ama akşam beş şey daha çıkar ve mesaj
          öylece kaybolur. Ertesi gün müşteri artık yazmıyordur. Çoktan başkasıyla anlaşmıştır —
          ilk yanıt vereni seçmiştir.
        </p>
        <p>
          Bu yazı, hizmet sağlayıcılar için &bdquo;talep otomasyonu&ldquo;nun somut olarak ne anlama
          geldiğini, gerçekte ne kazandırdığını açıklıyor — ve aynı dürüstlükle: neyin yerini
          almadığını da.
        </p>

        <h2>Burada &bdquo;otomasyon&ldquo; somut olarak ne demek</h2>
        <p>
          Talepler bugün beş farklı kanaldan geliyor — telefon, e-posta, WhatsApp, iletişim formu ve
          sosyal medya mesajları. Dijital bir asistan bu ilk temasa devreder: hemen yanıt verir, hem
          akşamları hem hafta sonları, ve teklif için gereken tüm bilgileri toplar. Bunlardan otomatik
          olarak hazır, biçimlendirilmiş bir teklif oluşur — gönderime hazır, sen akşam oturup kendin
          hazırlamak zorunda kalmadan.
        </p>
        <p>
          Sistem araçtan bağımsızdır: zaten kullandığın araçlara bağlanır, ya da henüz bir aracın yoksa
          kendi başına sade bir çözüm olarak kurulur. Kimse memnun olduğu bir aracı değiştirmek zorunda
          kalmaz.
        </p>

        <h2>Gerçekte ne kazandırır</h2>
        <h3>1. 0-24 talepler</h3>
        <p>
          Asistan taleplere hemen yanıt verir, akşamları ve hafta sonları da, ve teklif için gereken
          her şeyi toplar — sen sahadayken ya da uyurken talep kaybolmak yerine.
        </p>
        <h3>2. Otomatik teklifler</h3>
        <p>
          Toplanan bilgilerden hazır teklif oluşur, biçimlendirilmiş ve gönderime hazır. Artık dün
          gönderilmesi gereken bir teklifi hazırlamak için akşam mutfak masasında oturmak yok.
        </p>
        <h3>3. Randevu ve rezervasyon</h3>
        <p>
          Müşteriler uygun randevuyu kendileri alır, onay ve hatırlatma otomatik gider — kime ne zaman
          uyduğunu bulmak için telefonda gidip gelme artık yok.
        </p>
        <h3>4. Unutmadan takip</h3>
        <p>
          Açık teklifler ve talepler otomatik ve nazikçe takip edilir, böylece ilgi gerçekten rezerve
          edilmiş bir işe dönüşür — kimse takip etmediği için sessizce sönüp gitmek yerine.
        </p>

        <h2>Dürüstçe: otomasyonun yapamadıkları</h2>
        <p>
          Sistem senin gerektiren kararları vermez — alışılmadık ya da karmaşık bir işe fiyat biçmek,
          zor bir müşteriyi kabul edip etmeyeceğine karar vermek ya da insan konuşması gerektiren gerçek
          bir şikayeti ele almak. Bunlar hâlâ senin elinde. Sistem, talepten teklife kadar olan standart,
          tekrarlanabilir akışı güvenilir şekilde üstlenir ve sıra dışı olan her şeyi sana geri
          yönlendirir — tersi değil.
        </p>

        <h2>Ne kadara mal olur — ve ne zamandan itibaren değer?</h2>
        <p>
          Bizde tek bir otomasyon <strong>499 €&rsquo;dan başlar, sabit fiyatla</strong> — önceden
          sabit fiyatlı yazılı bir teklif alırsın, sonrasında hiçbir şey değişmez. Baştan eksiksiz bir
          sistem olması gerekmez — sadece çalışma saatleri dışındaki talepleri otomatik yakalamak bile
          aksi halde rakibe gidecek bir işi kurtarabilir. Fiyatlandırma modelimiz hakkında daha fazlasını{" "}
          <Link href={localePathname(contentLocale, "/preise")}>fiyatlar sayfasında</Link> bulabilirsin.
        </p>

        <h2>Nasıl başlarsın</h2>
        <ol>
          <li>
            <strong>Süreci inceleriz:</strong> talepler bugün nasıl geliyor, teklifler nasıl ortaya
            çıkıyor? En çok nerede takılıyorsun? Bunu ücretsiz bir görüşmede netleştiririz.
          </li>
          <li>
            <strong>Asistanı kurarız:</strong> hizmetlerin, fiyatların ve standart sorular birlikte
            girilir — anlaşılır şekilde, teknik bir şey öğrenmen gerekmeden.
          </li>
          <li>
            <strong>Test edip canlıya alırız:</strong> otomatik yanıtları ve teklifleri kendi olağan
            akışınla karşılaştırırsın, biz ince ayar yaparız — sonra çalışır. Genellikle 1-2 hafta
            içinde.
          </li>
        </ol>
        <p>
          Hizmet işletmeleri için özel olarak neler kurduğumuz hakkında daha fazlasını{" "}
          <Link href={localePathname(contentLocale, "/branchen/dienstleister")}>AI için hizmet sağlayıcılar</Link> sayfamızda bulabilirsin.
        </p>
      </ArticleLayout>
    );
  }

  if (contentLocale === "it") {
    return (
      <ArticleLayout article={article} locale={contentLocale}>
        <p>
          Arriva una richiesta su WhatsApp mentre sei da un cliente, le mani occupate, il telefono resta
          in tasca. Pensi &bdquo;rispondo stasera&ldquo; — ma la sera arrivano altre cinque cose e il
          messaggio semplicemente affonda. Il giorno dopo il cliente non scrive più. Ha già trovato
          qualcun altro — chi ha risposto per primo.
        </p>
        <p>
          Questo articolo spiega cosa significa concretamente &bdquo;automatizzare le richieste&ldquo;
          per i prestatori di servizi, cosa porta davvero — e altrettanto onestamente: cosa non
          sostituisce.
        </p>

        <h2>Cosa significa concretamente &bdquo;automatizzare&ldquo; qui</h2>
        <p>
          Oggi le richieste arrivano attraverso cinque canali diversi — telefono, e-mail, WhatsApp,
          modulo di contatto e messaggi sui social. Un assistente digitale gestisce quel primo contatto:
          risponde subito, di sera e nel weekend, e raccoglie tutte le informazioni necessarie per un
          preventivo. Da queste nasce automaticamente un preventivo finito e formattato — pronto per
          essere inviato, senza che tu debba sederti la sera a prepararlo da solo.
        </p>
        <p>
          Il sistema è indipendente dagli strumenti: si collega a quelli che già usi oppure, se non ne
          hai ancora, viene costruito come soluzione propria e snella. Nessuno è costretto a cambiare
          uno strumento con cui è soddisfatto.
        </p>

        <h2>Cosa porta davvero</h2>
        <h3>1. Richieste 24 ore su 24</h3>
        <p>
          L&rsquo;assistente risponde subito alle richieste, di sera e nel weekend compresi, e raccoglie
          tutto ciò che serve per un preventivo — invece che la richiesta affondi mentre sei da un
          cliente o stai dormendo.
        </p>
        <h3>2. Preventivi automatici</h3>
        <p>
          Dai dati raccolti nasce il preventivo finito, formattato e pronto per essere inviato. Basta
          sedersi la sera al tavolo della cucina per preparare un preventivo che doveva partire ieri.
        </p>
        <h3>3. Appuntamenti e prenotazioni</h3>
        <p>
          I clienti prenotano da soli l&rsquo;appuntamento adatto, conferma e promemoria partono
          automaticamente — niente più avanti e indietro al telefono per trovare un orario che vada
          bene a entrambi.
        </p>
        <h3>4. Follow-up senza dimenticare</h3>
        <p>
          Preventivi e richieste ancora aperti ricevono automaticamente un follow-up cortese, così
          l&rsquo;interesse si trasforma davvero in un lavoro prenotato — invece di spegnersi in
          silenzio perché nessuno lo ha più seguito.
        </p>

        <h2>Onestamente: cosa non può fare l&rsquo;automazione</h2>
        <p>
          Il sistema non prende le decisioni che richiedono te — stabilire il prezzo per un lavoro
          insolito o complesso, decidere se accettare un cliente difficile, o gestire un reclamo vero
          che ha bisogno di una conversazione umana. Queste restano comunque nelle tue mani. Il sistema
          gestisce in modo affidabile il flusso standard e ripetibile dalla richiesta al preventivo e ti
          rimanda tutto ciò che esce dagli schemi — non il contrario.
        </p>

        <h2>Quanto costa — e da quando conviene?</h2>
        <p>
          Da noi una singola automazione parte <strong>da 499 € a prezzo fisso</strong> — ricevi in
          anticipo un preventivo scritto a prezzo fisso, dopo non cambia più nulla. Non deve essere
          subito un sistema completo — anche solo intercettare automaticamente le richieste fuori
          orario può salvare un lavoro che altrimenti sarebbe andato alla concorrenza. Maggiori
          informazioni sul nostro modello di prezzi trovi sulla{" "}
          <Link href={localePathname(contentLocale, "/preise")}>pagina dei prezzi</Link>.
        </p>

        <h2>Come iniziare</h2>
        <ol>
          <li>
            <strong>Guardiamo il processo:</strong> come arrivano oggi le richieste e come nascono i
            tuoi preventivi? Dove si blocca di più? Lo chiariamo in un colloquio gratuito.
          </li>
          <li>
            <strong>Configuriamo l&rsquo;assistente:</strong> i tuoi servizi, i prezzi e le domande
            standard vengono inseriti insieme — in modo comprensibile, senza che tu debba imparare
            nulla di tecnico.
          </li>
          <li>
            <strong>Testiamo e andiamo online:</strong> confronti le risposte e i preventivi automatici
            con il tuo flusso abituale, noi affiniamo — poi funziona. Di solito entro 1-2 settimane.
          </li>
        </ol>
        <p>
          Maggiori informazioni su cosa costruiamo specificamente per le attività di servizi trovi sulla
          nostra pagina{" "}
          <Link href={localePathname(contentLocale, "/branchen/dienstleister")}>AI per prestatori di servizi</Link>.
        </p>
      </ArticleLayout>
    );
  }

  return (
    <ArticleLayout article={article} locale={contentLocale}>
      <p>
        Eine Anfrage kommt auf WhatsApp rein, während du auf der Baustelle stehst, die Hände dreckig,
        das Handy bleibt in der Tasche. Du denkst dir &bdquo;antworte ich heute Abend&ldquo; — aber
        abends kommen noch fünf andere Dinge dazwischen, und die Nachricht geht einfach unter. Am
        nächsten Tag meldet sich der Kunde nicht mehr. Er hat sich längst mit jemand anderem
        verabredet — mit dem, der zuerst geantwortet hat.
      </p>
      <p>
        Dieser Artikel erklärt, was &bdquo;Anfragen automatisieren&ldquo; für Dienstleister konkret
        bedeutet, was es wirklich bringt — und ebenso ehrlich, was es nicht ersetzt.
      </p>

      <h2>Was &bdquo;automatisieren&ldquo; hier konkret heißt</h2>
      <p>
        Anfragen kommen heute über fünf verschiedene Kanäle rein — Telefon, Mail, WhatsApp,
        Kontaktformular und Social-Media-Nachrichten. Ein digitaler Assistent übernimmt diesen ersten
        Kontakt: Er antwortet sofort, auch abends und am Wochenende, und sammelt alle Angaben, die du
        für ein Angebot brauchst. Daraus entsteht automatisch ein fertiges, formatiertes Angebot —
        versandfertig, ohne dass du dich abends selbst hinsetzen musst, um es zusammenzustellen.
      </p>
      <p>
        Das System ist tool-agnostisch: Es wird an die Tools angebunden, die du schon nutzt — oder,
        falls du noch keine hast, als schlanke eigene Lösung gebaut. Niemand muss ein Tool wechseln,
        mit dem er zufrieden ist.
      </p>

      <h2>Was das konkret bringt</h2>
      <h3>1. Anfragen rund um die Uhr</h3>
      <p>
        Der Assistent beantwortet Anfragen sofort, auch abends und am Wochenende, und sammelt alles,
        was du für ein Angebot brauchst — statt dass die Anfrage untergeht, während du auf der
        Baustelle stehst oder schläfst.
      </p>
      <h3>2. Angebote automatisch</h3>
      <p>
        Aus den gesammelten Angaben entsteht das fertige Angebot, formatiert und versandfertig. Kein
        abendliches Sitzen am Küchentisch mehr, um ein Angebot zusammenzubasteln, das eigentlich schon
        gestern raus sollte.
      </p>
      <h3>3. Termine & Buchung</h3>
      <p>
        Kunden buchen sich den passenden Termin selbst, Bestätigung und Erinnerung laufen automatisch
        mit — kein Hin und Her per Telefon mehr, um einen Termin zu finden, der beiden passt.
      </p>
      <h3>4. Nachfassen ohne Vergessen</h3>
      <p>
        Offene Angebote und Anfragen werden automatisch und freundlich nachgefasst, damit aus
        Interesse tatsächlich ein gebuchter Auftrag wird — statt dass es stillschweigend einschläft,
        weil niemand mehr drangedacht hat.
      </p>

      <h2>Ehrlich: Was es nicht kann</h2>
      <p>
        Das System trifft nicht die Entscheidungen, die dich brauchen — den Preis für einen
        ungewöhnlichen oder komplexen Auftrag festlegen, entscheiden, ob du einen schwierigen Kunden
        überhaupt annimmst, oder eine echte Beschwerde, die ein menschliches Gespräch braucht. Das
        bleibt weiter bei dir. Das System übernimmt zuverlässig den Standardablauf von der Anfrage bis
        zum Angebot und gibt alles Ungewöhnliche an dich zurück — nicht andersherum.
      </p>

      <h2>Was kostet das — und ab wann lohnt es sich?</h2>
      <p>
        Bei uns startet eine einzelne Automatisierung <strong>ab 499&nbsp;€ zum Festpreis</strong> —
        du bekommst vorab ein schriftliches Angebot mit fixem Preis, danach ändert sich nichts mehr.
        Es muss nicht sofort ein komplettes System sein — schon allein das automatische Auffangen von
        Anfragen außerhalb der Geschäftszeiten kann einen Auftrag retten, der sonst an die Konkurrenz
        gegangen wäre. Alles Weitere zu unserem Preismodell findest du auf der{" "}
        <Link href={localePathname(contentLocale, "/preise")}>Preisseite</Link>.
      </p>

      <h2>So startest du</h2>
      <ol>
        <li>
          <strong>Prozess anschauen:</strong> Wie kommen deine Anfragen heute rein, wie entstehen
          deine Angebote? Wo hakt es am meisten? Das klären wir in einem kostenlosen Gespräch.
        </li>
        <li>
          <strong>Assistent einrichten:</strong> Deine Leistungen, Preise und Standardfragen erfassen
          wir gemeinsam — verständlich, ohne dass du etwas Technisches lernen musst.
        </li>
        <li>
          <strong>Testen und live gehen:</strong> Du vergleichst die automatischen Antworten und
          Angebote mit deinem gewohnten Ablauf, wir justieren nach — dann läuft es. Meist innerhalb
          von 1 bis 2 Wochen.
        </li>
      </ol>
      <p>
        Mehr dazu, was wir speziell für Dienstleistungsbetriebe bauen, findest du auf unserer Seite{" "}
        <Link href={localePathname(contentLocale, "/branchen/dienstleister")}>KI für Dienstleister</Link>.
      </p>
    </ArticleLayout>
  );
}
