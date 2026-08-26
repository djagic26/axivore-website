import type { Metadata } from "next";
import Link from "next/link";
import { ArticleLayout } from "@/components/ratgeber/ArticleLayout";
import { getRatgeberArticle } from "@/lib/ratgeber";
import { resolveContentLocale, partialPageMetadata, localePathname, type AppLocale } from "@/lib/seo";

const AVAILABLE: readonly AppLocale[] = ["de", "hr", "en", "ro", "tr", "it"];
const SLUG = "reportings-automatisieren-agentur";
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
          Treći u mjesecu. Umjesto da account manageri rade s klijentima, svi sjede zatvorenih
          vrata i grade isti izvještaj iz pet različitih dashboarda — ad account, analytics, tablica
          s prošlim mjesecom za usporedbu. Copy-paste, formatiranje, brendiranje, slanje. Cijeli dan
          ode, a klijent ionako dobije PDF tek popodne, kad je najbolji trenutak za poziv već
          prošao.
        </p>
        <p>
          Upravo tu ulazi automatizacija. Ovaj članak objašnjava što &bdquo;automatizacija
          izvještaja&ldquo; konkretno znači za malu agenciju, što stvarno donosi — i jednako
          iskreno: što ne zamjenjuje.
        </p>

        <h2>Što &bdquo;automatizacija&ldquo; ovdje konkretno znači</h2>
        <p>
          Sustav se spaja na alate koje agencija već koristi — ad accounte, analytics, CRM,
          projektne alate — i automatski povlači podatke svakog klijenta. Umjesto da netko ručno
          kopira brojke u tablicu, sustav ih spaja i slaže u gotov, brendiran izvještaj: mjesečno
          samostalno ili na klik kad klijent zatraži ažuriranje.
        </p>
        <p>
          Ista logika se proširuje i na drugi ponavljajući admin: kratki brief pretvara se u
          strukturiranu ponudu ili pitch dokument u stilu agencije, ponavljajući koraci u produkciji
          sadržaja (istraživanje, prva verzija teksta) automatiziraju se, a pristigli upiti se
          automatski ocjenjuju i dobivaju poruke za podsjećanje.
        </p>

        <h2>Što to stvarno donosi</h2>
        <h3>1. Izvještaji na klik, ne na dane</h3>
        <p>
          Podaci s različitih platformi automatski se objedinjuju u gotov izvještaj — mjesečno ili
          kad zatreba. Ono što je prije trajalo dan po klijentu, sada traje minute.
        </p>
        <h3>2. Ponude i pitchevi u minutama</h3>
        <p>
          Iz kratkog brifa nastaje strukturirana ponuda ili prezentacija, dosljedna stilu agencije —
          umjesto da netko svaki put počinje ispočetka u praznom dokumentu.
        </p>
        <h3>3. Content bez ponavljajućeg dijela</h3>
        <p>
          Istraživanje i prva verzija teksta automatiziraju se, tim samo dorađuje i unosi kreativnu
          odluku — bez gubljenja vremena na pripremne korake.
        </p>
        <h3>4. Nijedan lead ne ohladi</h3>
        <p>
          Pristigli upiti automatski se ocjenjuju, obogaćuju podacima i dobivaju follow-up poruke —
          umjesto da čekaju u inboxu dok se netko sjeti odgovoriti.
        </p>

        <h2>Iskreno: što automatizacija ne može</h2>
        <p>
          Sustav ne piše finalni kreativni koncept i ne donosi strateške odluke o account-u — to i
          dalje spada u tim i njihovo iskustvo. Ono što automatizacija skida s ljudi jest
          repetitivni admin: povlačenje podataka, formatiranje, ručno kopiranje između alata. Ta
          ušteđena satnica ide natrag u rad s klijentima i kreativno razmišljanje, ne u nove
          zaposlenike — automatizacija ne zamjenjuje headcount za stvarno novi posao, ona vraća
          kapacitet koji već imaš.
        </p>

        <h2>Koliko to košta — i od kada se isplati?</h2>
        <p>
          Kod nas jedna automatizacija kreće <strong>od 499&nbsp;€ po fiksnoj cijeni</strong> —
          unaprijed dobivaš pisanu ponudu s fiksnom cijenom, poslije se ništa više ne mijenja. Ne
          mora biti kompletan sustav za cijelu agenciju — već i sama automatizacija mjesečnog
          izvještaja, primjerice, štedi po nekoliko sati po klijentu svaki mjesec. Više o našem
          modelu cijena pronađi na{" "}
          <Link href={localePathname(contentLocale, "/preise")}>stranici s cijenama</Link>.
        </p>

        <h2>Kako krenuti</h2>
        <ol>
          <li>
            <strong>Pogledamo proces:</strong> koji alati se koriste, odakle danas dolaze podaci za
            izvještaj i gdje se najviše gubi vrijeme. To razjasnimo na besplatnom razgovoru.
          </li>
          <li>
            <strong>Postavljamo automatizaciju:</strong> spajamo tvoje postojeće alate i dogovaramo
            format i brendiranje izvještaja — bez da moraš mijenjati ono što već koristiš.
          </li>
          <li>
            <strong>Testiranje i lansiranje:</strong> uspoređuješ automatski izvještaj s onim koji
            bi napravio ručno, mi dorađujemo — onda sustav radi. Obično unutar 1 do 2 tjedna.
          </li>
        </ol>
        <p>
          Više o tome što gradimo posebno za agencije pronađi na našoj stranici{" "}
          <Link href={localePathname(contentLocale, "/branchen/agenturen")}>AI za agencije</Link>.
        </p>
      </ArticleLayout>
    );
  }

  if (contentLocale === "en") {
    return (
      <ArticleLayout article={article} locale={contentLocale}>
        <p>
          The third of the month. Instead of talking to clients, every account manager is behind a
          closed door building the same report from five different dashboards — the ad account,
          analytics, a spreadsheet with last month's numbers for comparison. Copy-paste, formatting,
          branding, sending. The whole day disappears, and the client still only gets the PDF in the
          afternoon, well after the best moment for a call has already passed.
        </p>
        <p>
          That's exactly where automation comes in. This article explains what &ldquo;automating
          reporting&rdquo; actually means for a small agency, what it really delivers — and just as
          honestly: what it doesn't replace.
        </p>

        <h2>What &ldquo;automating&rdquo; actually means here</h2>
        <p>
          The system connects to the tools the agency already uses — ad accounts, analytics, CRM,
          project tools — and automatically pulls each client's data. Instead of someone manually
          copying numbers into a spreadsheet, the system merges them into a finished, branded
          report: monthly on its own, or at the push of a button whenever a client wants an update.
        </p>
        <p>
          The same logic extends to other recurring admin: a short brief turns into a structured
          quote or pitch document in the agency's style, recurring steps in content production
          (research, first draft) get automated, and incoming inquiries are automatically scored and
          given follow-up messages.
        </p>

        <h2>What it really delivers</h2>
        <h3>1. Reporting at the push of a button, not days</h3>
        <p>
          Data from different platforms gets automatically merged into a finished report — monthly
          or on demand. What used to take a full day per client now takes minutes.
        </p>
        <h3>2. Quotes and pitches in minutes</h3>
        <p>
          A short brief turns into a structured quote or pitch document, consistent with the
          agency's style — instead of someone starting from a blank document every time.
        </p>
        <h3>3. Content without the repetitive part</h3>
        <p>
          Research and the first draft get automated, the team just refines it and adds the creative
          judgment — without losing time on the prep steps.
        </p>
        <h3>4. No lead goes cold</h3>
        <p>
          Incoming inquiries get automatically scored, enriched, and given follow-up messages —
          instead of sitting in the inbox until someone remembers to answer.
        </p>

        <h2>Honestly: what automation can't do</h2>
        <p>
          The system doesn't write the final creative concept and doesn't make account-strategy
          calls — that still belongs to the team and their experience. What automation takes off
          people's plates is the repetitive admin: pulling data, formatting, copy-pasting between
          tools. That freed-up time goes back into client work and creative thinking, not into new
          hires — automation doesn't replace headcount for genuinely new client work, it gives you
          back the capacity you already have.
        </p>

        <h2>What does it cost — and when is it worth it?</h2>
        <p>
          With us, a single automation starts <strong>from €499 at a fixed price</strong> — you get
          a written quote with a fixed price upfront, nothing changes after that. It doesn't have to
          be a full system for the whole agency — even automating the monthly report alone saves
          several hours per client every month. More on our pricing model on the{" "}
          <Link href={localePathname(contentLocale, "/preise")}>pricing page</Link>.
        </p>

        <h2>How to get started</h2>
        <ol>
          <li>
            <strong>Look at the process:</strong> which tools are in use, where does the reporting
            data come from today, and where does the most time get lost? We clarify this in a free
            call.
          </li>
          <li>
            <strong>Set up the automation:</strong> we connect your existing tools and agree on
            format and branding for the report — with no need to change what you already use.
          </li>
          <li>
            <strong>Test and go live:</strong> you compare the automated report against one built by
            hand, we fine-tune — then it runs. Usually within 1 to 2 weeks.
          </li>
        </ol>
        <p>
          More on what we build specifically for agencies can be found on our{" "}
          <Link href={localePathname(contentLocale, "/branchen/agenturen")}>AI for agencies</Link> page.
        </p>
      </ArticleLayout>
    );
  }

  if (contentLocale === "ro") {
    return (
      <ArticleLayout article={article} locale={contentLocale}>
        <p>
          Trei ale lunii. În loc să vorbească cu clienții, fiecare account manager stă cu ușa închisă
          și construiește același raport din cinci dashboard-uri diferite — contul de ads,
          analytics, un tabel cu cifrele lunii trecute pentru comparație. Copy-paste, formatare,
          branding, trimitere. Toată ziua dispare, iar clientul tot primește PDF-ul abia după-amiaza,
          mult după ce a trecut cel mai bun moment pentru un apel.
        </p>
        <p>
          Exact aici intervine automatizarea. Acest articol explică ce înseamnă concret
          &bdquo;automatizarea raportărilor&ldquo; pentru o agenție mică, ce aduce cu adevărat — și
          la fel de sincer: ce nu înlocuiește.
        </p>

        <h2>Ce înseamnă concret &bdquo;automatizarea&ldquo; aici</h2>
        <p>
          Sistemul se conectează la instrumentele pe care agenția le folosește deja — conturi de
          ads, analytics, CRM, instrumente de proiect — și preia automat datele fiecărui client. În
          loc ca cineva să copieze manual cifrele într-un tabel, sistemul le îmbină într-un raport
          finit, cu branding: lunar, de la sine, sau la un click ori de câte ori un client cere o
          actualizare.
        </p>
        <p>
          Aceeași logică se extinde și la alte sarcini administrative recurente: dintr-un scurt
          briefing rezultă o ofertă structurată sau un document de pitch în stilul agenției, pașii
          recurenți din producția de conținut (cercetare, prima variantă) sunt automatizați, iar
          cererile primite sunt evaluate automat și primesc mesaje de urmărire.
        </p>

        <h2>Ce aduce cu adevărat</h2>
        <h3>1. Rapoarte la un click, nu în zile</h3>
        <p>
          Datele din platforme diferite sunt îmbinate automat într-un raport finit — lunar sau la
          cerere. Ce dura o zi întreagă pe client acum durează câteva minute.
        </p>
        <h3>2. Oferte și prezentări în minute</h3>
        <p>
          Dintr-un scurt briefing rezultă o ofertă structurată sau un document de pitch, consecvent
          cu stilul agenției — în loc ca cineva să pornească de fiecare dată de la o pagină goală.
        </p>
        <h3>3. Conținut fără partea repetitivă</h3>
        <p>
          Cercetarea și prima variantă sunt automatizate, echipa doar rafinează și adaugă judecata
          creativă — fără să piardă timp pe pașii pregătitori.
        </p>
        <h3>4. Niciun lead nu se răcește</h3>
        <p>
          Cererile primite sunt evaluate automat, îmbogățite cu date și primesc mesaje de urmărire —
          în loc să stea în inbox până își amintește cineva să răspundă.
        </p>

        <h2>Sincer: ce nu poate face automatizarea</h2>
        <p>
          Sistemul nu scrie conceptul creativ final și nu ia decizii de strategie de cont — asta
          rămâne tot la echipă și experiența ei. Ceea ce automatizarea preia de la oameni este
          administrația repetitivă: extragerea datelor, formatarea, copierea manuală între
          instrumente. Timpul eliberat astfel se întoarce la lucrul cu clienții și gândirea creativă,
          nu la angajări noi — automatizarea nu înlocuiește personal pentru muncă nouă de client, ci
          îți dă înapoi capacitatea pe care deja o ai.
        </p>

        <h2>Cât costă — și de când merită?</h2>
        <p>
          La noi, o automatizare pornește <strong>de la 499&nbsp;€ la preț fix</strong> — primești
          în avans o ofertă scrisă cu preț fix, după aceea nimic nu se mai schimbă. Nu trebuie să fie
          un sistem complet pentru toată agenția — chiar și automatizarea raportului lunar, singură,
          economisește câteva ore pe client în fiecare lună. Mai multe despre modelul nostru de
          prețuri găsești pe{" "}
          <Link href={localePathname(contentLocale, "/preise")}>pagina de prețuri</Link>.
        </p>

        <h2>Cum începi</h2>
        <ol>
          <li>
            <strong>Analizăm procesul:</strong> ce instrumente sunt folosite, de unde vin azi datele
            pentru raport și unde se pierde cel mai mult timp? Asta clarificăm la o discuție
            gratuită.
          </li>
          <li>
            <strong>Configurăm automatizarea:</strong> conectăm instrumentele tale existente și
            stabilim formatul și branding-ul raportului — fără să fie nevoie să schimbi ce folosești
            deja.
          </li>
          <li>
            <strong>Testare și lansare:</strong> compari raportul automat cu unul făcut manual,
            ajustăm — apoi funcționează. De obicei în 1 până la 2 săptămâni.
          </li>
        </ol>
        <p>
          Mai multe despre ce construim special pentru agenții găsești pe pagina noastră{" "}
          <Link href={localePathname(contentLocale, "/branchen/agenturen")}>AI pentru agenții</Link>.
        </p>
      </ArticleLayout>
    );
  }

  if (contentLocale === "tr") {
    return (
      <ArticleLayout article={article} locale={contentLocale}>
        <p>
          Ayın üçü. Müşterilerle konuşmak yerine, her account manager kapalı kapılar ardında beş
          farklı panelden — reklam hesabı, analytics, karşılaştırma için geçen ayın rakamlarının
          olduğu bir tablo — aynı raporu hazırlıyor. Kopyala-yapıştır, biçimlendirme, markalama,
          gönderme. Bütün gün gidiyor ve müşteri PDF&rsquo;yi yine de öğleden sonra alıyor — arama
          için en iyi an çoktan geçmişken.
        </p>
        <p>
          Otomasyon tam da burada devreye giriyor. Bu yazı, küçük bir ajans için &bdquo;raporlama
          otomasyonu&ldquo;nun somut olarak ne anlama geldiğini, gerçekte ne kazandırdığını
          açıklıyor — ve aynı dürüstlükle: neyin yerini almadığını da.
        </p>

        <h2>Burada &bdquo;otomasyon&ldquo; somut olarak ne demek</h2>
        <p>
          Sistem, ajansın zaten kullandığı araçlara — reklam hesapları, analytics, CRM, proje
          araçları — bağlanır ve her müşterinin verisini otomatik olarak çeker. Birinin rakamları
          elle bir tabloya kopyalaması yerine, sistem bunları hazır, markalı bir rapor hâlinde
          birleştirir: aylık olarak kendiliğinden ya da müşteri güncelleme istediğinde bir tuşla.
        </p>
        <p>
          Aynı mantık diğer tekrarlayan idari işlere de uzanır: kısa bir brief, ajansın stilinde
          yapılandırılmış bir teklife ya da pitch dokümanına dönüşür, içerik üretimindeki tekrarlayan
          adımlar (araştırma, ilk taslak) otomatikleştirilir ve gelen talepler otomatik olarak
          değerlendirilip takip mesajlarıyla desteklenir.
        </p>

        <h2>Gerçekte ne kazandırır</h2>
        <h3>1. Günler yerine bir tuşla raporlama</h3>
        <p>
          Farklı platformlardan gelen veriler otomatik olarak hazır bir rapora birleştirilir —
          aylık ya da talep üzerine. Müşteri başına eskiden bir gün süren iş artık dakikalar
          alıyor.
        </p>
        <h3>2. Dakikalar içinde teklif ve pitch</h3>
        <p>
          Kısa bir brief, ajansın stiliyle tutarlı, yapılandırılmış bir teklife ya da pitch
          dokümanına dönüşür — her seferinde boş bir belgeyle başlamak yerine.
        </p>
        <h3>3. Tekrarlayan kısmı olmayan içerik</h3>
        <p>
          Araştırma ve ilk taslak otomatikleştirilir, ekip yalnızca ince ayar yapar ve yaratıcı
          kararı ekler — hazırlık adımlarında zaman kaybetmeden.
        </p>
        <h3>4. Hiçbir lead soğumaz</h3>
        <p>
          Gelen talepler otomatik olarak değerlendirilir, zenginleştirilir ve takip mesajlarıyla
          desteklenir — biri yanıtlamayı hatırlayana kadar gelen kutusunda beklemek yerine.
        </p>

        <h2>Dürüstçe: otomasyonun yapamadıkları</h2>
        <p>
          Sistem nihai yaratıcı konsepti yazmaz ve hesap stratejisi kararları vermez — bu hâlâ ekibe
          ve onların deneyimine ait. Otomasyonun insanların üzerinden aldığı şey tekrarlayan idari
          işlerdir: veri çekme, biçimlendirme, araçlar arasında elle kopyalama. Böylece kazanılan
          zaman yeni işe alımlara değil, müşteri işine ve yaratıcı düşünmeye geri döner — otomasyon
          gerçekten yeni müşteri işi için personel yerine geçmez, sahip olduğun kapasiteyi sana geri
          verir.
        </p>

        <h2>Ne kadara mal olur — ve ne zamandan itibaren değer?</h2>
        <p>
          Bizde tek bir otomasyon <strong>499 €&rsquo;dan başlar, sabit fiyatla</strong> — önceden
          sabit fiyatlı yazılı bir teklif alırsın, sonrasında hiçbir şey değişmez. Tüm ajans için
          eksiksiz bir sistem olması gerekmez — sadece aylık raporun otomasyonu bile her ay müşteri
          başına birkaç saat tasarruf sağlar. Fiyatlandırma modelimiz hakkında daha fazlasını{" "}
          <Link href={localePathname(contentLocale, "/preise")}>fiyatlar sayfasında</Link> bulabilirsin.
        </p>

        <h2>Nasıl başlarsın</h2>
        <ol>
          <li>
            <strong>Süreci inceleriz:</strong> hangi araçlar kullanılıyor, rapor verileri bugün
            nereden geliyor ve en çok zaman nerede kayboluyor? Bunu ücretsiz bir görüşmede
            netleştiririz.
          </li>
          <li>
            <strong>Otomasyonu kurarız:</strong> mevcut araçlarınızı bağlarız ve raporun formatı ile
            markalaması üzerinde anlaşırız — zaten kullandığın şeyi değiştirmene gerek kalmadan.
          </li>
          <li>
            <strong>Test edip canlıya alırız:</strong> otomatik raporu elle hazırlanmış olanla
            karşılaştırırsın, biz ince ayar yaparız — sonra çalışır. Genellikle 1-2 hafta içinde.
          </li>
        </ol>
        <p>
          Ajanslar için özel olarak neler kurduğumuz hakkında daha fazlasını{" "}
          <Link href={localePathname(contentLocale, "/branchen/agenturen")}>AI için ajanslar</Link> sayfamızda bulabilirsin.
        </p>
      </ArticleLayout>
    );
  }

  if (contentLocale === "it") {
    return (
      <ArticleLayout article={article} locale={contentLocale}>
        <p>
          Il tre del mese. Invece di parlare con i clienti, ogni account manager è chiuso in
          ufficio a costruire lo stesso report da cinque dashboard diverse — l&rsquo;account ads,
          l&rsquo;analytics, un foglio di calcolo con i numeri del mese scorso per il confronto.
          Copia-incolla, formattazione, branding, invio. Tutta la giornata sparisce, e il cliente
          riceve comunque il PDF solo nel pomeriggio, ben oltre il momento migliore per una
          chiamata.
        </p>
        <p>
          È esattamente qui che entra in gioco l&rsquo;automazione. Questo articolo spiega cosa
          significa concretamente &bdquo;automatizzare il reporting&ldquo; per una piccola agenzia,
          cosa porta davvero — e altrettanto onestamente: cosa non sostituisce.
        </p>

        <h2>Cosa significa concretamente &bdquo;automatizzare&ldquo; qui</h2>
        <p>
          Il sistema si collega agli strumenti che l&rsquo;agenzia già usa — account ads, analytics,
          CRM, strumenti di progetto — e recupera automaticamente i dati di ogni cliente. Invece che
          qualcuno copi a mano i numeri in un foglio di calcolo, il sistema li unisce in un report
          finito e brandizzato: mensilmente in autonomia, o su richiesta ogni volta che un cliente
          vuole un aggiornamento.
        </p>
        <p>
          La stessa logica si estende ad altre attività amministrative ricorrenti: da un breve
          briefing nasce un preventivo strutturato o un documento di pitch nello stile
          dell&rsquo;agenzia, i passaggi ricorrenti nella produzione di contenuti (ricerca, prima
          bozza) vengono automatizzati, e le richieste in arrivo vengono valutate automaticamente e
          dotate di messaggi di sollecito.
        </p>

        <h2>Cosa porta davvero</h2>
        <h3>1. Report a portata di clic, non in giorni</h3>
        <p>
          I dati provenienti da piattaforme diverse vengono uniti automaticamente in un report
          finito — mensilmente o su richiesta. Quello che prima richiedeva una giornata intera per
          cliente ora richiede pochi minuti.
        </p>
        <h3>2. Preventivi e pitch in pochi minuti</h3>
        <p>
          Da un breve briefing nasce un preventivo strutturato o un documento di pitch, coerente con
          lo stile dell&rsquo;agenzia — invece che qualcuno debba ripartire ogni volta da un
          documento vuoto.
        </p>
        <h3>3. Contenuti senza la parte ripetitiva</h3>
        <p>
          Ricerca e prima bozza vengono automatizzate, il team si limita a perfezionare e ad
          aggiungere il giudizio creativo — senza perdere tempo nei passaggi preparatori.
        </p>
        <h3>4. Nessun lead si raffredda</h3>
        <p>
          Le richieste in arrivo vengono valutate automaticamente, arricchite di dati e dotate di
          messaggi di sollecito — invece di restare nella casella di posta finché qualcuno non si
          ricorda di rispondere.
        </p>

        <h2>Onestamente: cosa non può fare l&rsquo;automazione</h2>
        <p>
          Il sistema non scrive il concetto creativo finale e non prende decisioni di strategia
          d&rsquo;account — questo resta compito del team e della sua esperienza. Ciò che
          l&rsquo;automazione toglie dalle spalle delle persone è l&rsquo;amministrazione ripetitiva:
          estrarre dati, formattare, copiare a mano tra strumenti diversi. Il tempo così liberato
          torna al lavoro con i clienti e al pensiero creativo, non a nuove assunzioni —
          l&rsquo;automazione non sostituisce personale per lavoro cliente realmente nuovo, ti
          restituisce la capacità che hai già.
        </p>

        <h2>Quanto costa — e da quando conviene?</h2>
        <p>
          Da noi una singola automazione parte <strong>da 499 € a prezzo fisso</strong> — ricevi in
          anticipo un preventivo scritto a prezzo fisso, dopo non cambia più nulla. Non deve essere
          un sistema completo per tutta l&rsquo;agenzia — anche la sola automazione del report
          mensile risparmia diverse ore per cliente ogni mese. Maggiori informazioni sul nostro
          modello di prezzi trovi sulla{" "}
          <Link href={localePathname(contentLocale, "/preise")}>pagina dei prezzi</Link>.
        </p>

        <h2>Come iniziare</h2>
        <ol>
          <li>
            <strong>Guardiamo il processo:</strong> quali strumenti usate, da dove arrivano oggi i
            dati per il report e dove si perde più tempo? Lo chiariamo in un colloquio gratuito.
          </li>
          <li>
            <strong>Configuriamo l&rsquo;automazione:</strong> colleghiamo i tuoi strumenti esistenti
            e concordiamo formato e branding del report — senza che tu debba cambiare ciò che usi
            già.
          </li>
          <li>
            <strong>Testiamo e andiamo online:</strong> confronti il report automatico con uno fatto
            a mano, noi affiniamo — poi funziona. Di solito entro 1-2 settimane.
          </li>
        </ol>
        <p>
          Maggiori informazioni su cosa costruiamo specificamente per le agenzie trovi sulla nostra
          pagina{" "}
          <Link href={localePathname(contentLocale, "/branchen/agenturen")}>AI per agenzie</Link>.
        </p>
      </ArticleLayout>
    );
  }

  return (
    <ArticleLayout article={article} locale={contentLocale}>
      <p>
        Der Dritte im Monat. Statt mit Kunden zu sprechen, sitzt jeder Account Manager hinter
        geschlossener Tür und baut dasselbe Reporting aus fünf verschiedenen Dashboards zusammen —
        dem Werbekonto, Analytics, einer Tabelle mit den Zahlen vom Vormonat zum Vergleich.
        Copy-paste, Formatierung, Branding, Versand. Der ganze Tag geht drauf, und der Kunde bekommt
        das PDF trotzdem erst nachmittags, lange nachdem der beste Moment für einen Anruf schon
        vorbei ist.
      </p>
      <p>
        Genau hier setzt Automatisierung an. Dieser Artikel erklärt, was &bdquo;Reportings
        automatisieren&ldquo; für eine kleine Agentur konkret bedeutet, was es wirklich bringt — und
        ebenso ehrlich, was es nicht ersetzt.
      </p>

      <h2>Was &bdquo;automatisieren&ldquo; hier konkret heißt</h2>
      <p>
        Das System bindet sich an die Tools an, die die Agentur bereits nutzt — Werbekonten,
        Analytics, CRM, Projekttools — und zieht sich automatisch die Daten jedes Kunden. Statt dass
        jemand Zahlen von Hand in eine Tabelle kopiert, führt das System sie zu einem fertigen,
        gebrandeten Reporting zusammen: monatlich von selbst oder auf Knopfdruck, wenn ein Kunde ein
        Update will.
      </p>
      <p>
        Dieselbe Logik lässt sich auf weitere wiederkehrende Admin-Arbeit ausweiten: Aus einem
        kurzen Briefing entsteht ein strukturiertes Angebot oder Pitch-Dokument im Stil der Agentur,
        wiederkehrende Schritte in der Content-Produktion (Recherche, Erstentwurf) werden
        automatisiert, und eingehende Anfragen werden automatisch bewertet und mit
        Nachfassnachrichten versehen.
      </p>

      <h2>Was das konkret bringt</h2>
      <h3>1. Reportings auf Knopfdruck statt in Tagen</h3>
      <p>
        Daten aus verschiedenen Plattformen werden automatisch zu einem fertigen Reporting
        zusammengeführt — monatlich oder auf Anfrage. Was vorher einen ganzen Tag pro Kunde
        gekostet hat, dauert jetzt Minuten.
      </p>
      <h3>2. Angebote und Pitches in Minuten</h3>
      <p>
        Aus einem kurzen Briefing entsteht ein strukturiertes Angebot oder Pitch-Dokument,
        konsistent im Stil der Agentur — statt dass jemand jedes Mal bei einem leeren Dokument
        anfängt.
      </p>
      <h3>3. Content ohne den repetitiven Teil</h3>
      <p>
        Recherche und Erstentwurf werden automatisiert, das Team feilt nur noch nach und bringt das
        kreative Urteil ein — ohne Zeit in den Vorbereitungsschritten zu verlieren.
      </p>
      <h3>4. Kein Lead kühlt ab</h3>
      <p>
        Eingehende Anfragen werden automatisch bewertet, angereichert und mit
        Nachfassnachrichten versehen — statt im Postfach zu liegen, bis jemand ans Antworten denkt.
      </p>

      <h2>Ehrlich: Was es nicht kann</h2>
      <p>
        Das System schreibt kein finales Kreativkonzept und trifft keine Account-Strategie-
        Entscheidungen — das gehört weiter dem Team und seiner Erfahrung. Was Automatisierung den
        Leuten abnimmt, ist die repetitive Admin-Arbeit: Daten ziehen, formatieren, von Hand
        zwischen Tools kopieren. Die dadurch gewonnene Zeit fließt zurück in Kundenarbeit und
        kreatives Denken, nicht in neue Stellen — Automatisierung ersetzt keine Köpfe für wirklich
        neue Kundenarbeit, sie gibt dir die Kapazität zurück, die du bereits hast.
      </p>

      <h2>Was kostet das — und ab wann lohnt es sich?</h2>
      <p>
        Bei uns startet eine einzelne Automatisierung <strong>ab 499&nbsp;€ zum Festpreis</strong> —
        du bekommst vorab ein schriftliches Angebot mit fixem Preis, danach ändert sich nichts mehr.
        Es muss kein komplettes System für die ganze Agentur sein — schon die Automatisierung des
        monatlichen Reportings allein spart pro Kunde mehrere Stunden im Monat. Alles Weitere zu
        unserem Preismodell findest du auf der{" "}
        <Link href={localePathname(contentLocale, "/preise")}>Preisseite</Link>.
      </p>

      <h2>So startest du</h2>
      <ol>
        <li>
          <strong>Prozess anschauen:</strong> Welche Tools sind im Einsatz, woher kommen die
          Reporting-Daten heute und wo geht die meiste Zeit verloren? Das klären wir in einem
          kostenlosen Gespräch.
        </li>
        <li>
          <strong>Automatisierung einrichten:</strong> Wir binden deine bestehenden Tools an und
          legen Format und Branding des Reportings gemeinsam fest — ohne dass du ändern musst, was
          du bereits nutzt.
        </li>
        <li>
          <strong>Testen und live gehen:</strong> Du vergleichst das automatische Reporting mit
          einem von Hand erstellten, wir justieren nach — dann läuft es. Meist innerhalb von 1 bis 2
          Wochen.
        </li>
      </ol>
      <p>
        Mehr dazu, was wir speziell für Agenturen bauen, findest du auf unserer Seite{" "}
        <Link href={localePathname(contentLocale, "/branchen/agenturen")}>KI für Agenturen</Link>.
      </p>
    </ArticleLayout>
  );
}
