import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Geist, Fraunces } from "next/font/google";
import "../globals.css";
import { LanguageProvider } from "@/lib/LanguageContext";
import { ThemeProvider } from "@/lib/ThemeContext";
import ChatWidgetWrapper from "@/components/ChatWidgetWrapper";
import { CookieBanner } from "@/components/CookieBanner";
import { ConsentProvider } from "@/lib/ConsentContext";
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";
import { MetaPixel } from "@/components/analytics/MetaPixel";
import { CalendlyClickTracking } from "@/components/analytics/CalendlyClickTracking";
import { StructuredData } from "@/components/StructuredData";
import { Analytics } from "@vercel/analytics/next";
import { routing, type AppLocale } from "@/i18n/routing";
import { resolveLocale, pageMetadata, type LocaleCopy } from "@/lib/seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const HOME_META: LocaleCopy = {
  de: {
    title: "Axivore — KI-Automatisierung für deutsche Unternehmen",
    description:
      "Axivore entwickelt KI-Automatisierungen, intelligente Chatbots und maßgeschneiderte Software für Unternehmen in Deutschland. Mehr schaffen, weniger Aufwand.",
  },
  en: {
    title: "Axivore — AI Automation for Small Businesses",
    description:
      "Axivore builds AI automations, intelligent chatbots and custom software for small and medium businesses. Do more, with less manual work.",
  },
  hr: {
    title: "Axivore — AI automatizacija za male tvrtke",
    description:
      "Axivore gradi AI automatizacije, inteligentne chatbotove i prilagođeni softver za male i srednje tvrtke. Više posla, manje ručnog rada.",
  },
  ro: {
    title: "Axivore — Automatizare AI pentru afaceri mici",
    description:
      "Axivore construiește automatizări AI, chatboți inteligenți și software personalizat pentru afaceri mici și mijlocii. Mai multă eficiență, mai puțină muncă manuală.",
  },
  tr: {
    title: "Axivore — Küçük İşletmeler için Yapay Zeka Otomasyonu",
    description:
      "Axivore, küçük ve orta ölçekli işletmeler için yapay zeka otomasyonları, akıllı chatbotlar ve özel yazılımlar geliştirir. Daha az manuel işle daha fazlasını başarın.",
  },
  it: {
    title: "Axivore — Automazione AI per piccole imprese",
    description:
      "Axivore sviluppa automazioni AI, chatbot intelligenti e software su misura per piccole e medie imprese. Più risultati, meno lavoro manuale.",
  },
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = resolveLocale(rawLocale);

  return {
    ...pageMetadata(locale, "", HOME_META),
    metadataBase: new URL("https://axivore.io"),
    openGraph: {
      ...pageMetadata(locale, "", HOME_META).openGraph,
      images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    },
    icons: {
      icon: [
        { url: "/icon.png", type: "image/png", sizes: "512x512" },
        { url: "/favicon.ico", sizes: "32x32" },
      ],
      shortcut: "/favicon.ico",
      apple: "/apple-touch-icon.png",
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale: rawLocale } = await params;
  if (!(routing.locales as readonly string[]).includes(rawLocale)) notFound();
  const locale = rawLocale as AppLocale;

  return (
    <html lang={locale} suppressHydrationWarning className={`${geistSans.variable} ${fraunces.variable} h-full antialiased`}>
      <head>
        {/* Google Consent Mode v2 — must run before any gtag/GA/Ads script.
            Defaults to denied; lib/ConsentContext.tsx sends 'update' once a
            visitor accepts, so Google Ads conversion tracking + remarketing
            work correctly for EEA traffic once ads campaigns start. */}
        <script dangerouslySetInnerHTML={{ __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('consent', 'default', {
            ad_storage: 'denied',
            analytics_storage: 'denied',
            ad_user_data: 'denied',
            ad_personalization: 'denied',
            wait_for_update: 500
          });
        ` }} />
        <meta property="fb:app_id" content="1371180501519020" />
        <StructuredData locale={locale} />
        {/* Prevent flash of wrong theme on load (language is now set server-side via the URL, no script needed for that). */}
        <script dangerouslySetInnerHTML={{ __html: `(function(){try{var t=localStorage.getItem('axivore-theme')||'dark';document.documentElement.setAttribute('data-theme',t);}catch(e){}})();` }} />
      </head>
      <body className="min-h-full">
        <ThemeProvider>
          <LanguageProvider locale={locale}>
            <ConsentProvider>
              {children}
              <ChatWidgetWrapper />
              <CookieBanner />
              <GoogleAnalytics />
              <MetaPixel />
              <CalendlyClickTracking />
            </ConsentProvider>
          </LanguageProvider>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
