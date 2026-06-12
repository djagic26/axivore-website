import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/LanguageContext";
import { ThemeProvider } from "@/lib/ThemeContext";
import ChatWidgetWrapper from "@/components/ChatWidgetWrapper";
import { cookies } from "next/headers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Axivore — KI-Automatisierung für deutsche Unternehmen",
  description:
    "Axivore entwickelt KI-Automatisierungen, intelligente Chatbots und maßgeschneiderte Software für Unternehmen in Deutschland. Mehr schaffen, weniger Aufwand.",
  metadataBase: new URL("https://axivore.io"),
  alternates: {
    canonical: "https://axivore.io",
  },
  openGraph: {
    title: "Axivore — KI-Automatisierung für deutsche Unternehmen",
    description:
      "Axivore entwickelt KI-Automatisierungen, intelligente Chatbots und maßgeschneiderte Software für Unternehmen in Deutschland.",
    url: "https://axivore.io",
    siteName: "Axivore",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Axivore — KI-Automatisierung für deutsche Unternehmen",
    description:
      "Axivore entwickelt KI-Automatisierungen, intelligente Chatbots und maßgeschneiderte Software für Unternehmen in Deutschland.",
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

const VALID_LANGS = ["de", "en", "hr", "ro", "tr", "it"];

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const langCookie = cookieStore.get("axivore-lang")?.value ?? "de";
  const lang = VALID_LANGS.includes(langCookie) ? langCookie : "de";

  return (
    <html lang={lang} suppressHydrationWarning className={`${geistSans.variable} h-full antialiased`}>
      <head>
        <meta property="fb:app_id" content="1371180501519020" />
        {/* Prevent flash of wrong theme and wrong language on load */}
        <script dangerouslySetInnerHTML={{ __html: `(function(){try{var t=localStorage.getItem('axivore-theme')||'dark';document.documentElement.setAttribute('data-theme',t);}catch(e){}try{var l=localStorage.getItem('axivore-lang')||'de';document.documentElement.setAttribute('lang',l);}catch(e){}})();` }} />
      </head>
      <body className="min-h-full">
        <ThemeProvider>
          <LanguageProvider>
            {children}
            <ChatWidgetWrapper />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
