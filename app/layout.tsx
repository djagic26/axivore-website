import type { Metadata } from "next";
import { Geist, Fraunces } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/LanguageContext";
import { ThemeProvider } from "@/lib/ThemeContext";
import ChatWidgetWrapper from "@/components/ChatWidgetWrapper";
import { StructuredData } from "@/components/StructuredData";
import { Analytics } from "@vercel/analytics/next";

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
    alternateLocale: ["en_US", "hr_HR", "ro_RO", "tr_TR", "it_IT"],
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

// lang defaults to "de" in the static HTML; the inline script below swaps it
// client-side from localStorage. No cookies() here — reading cookies in the
// root layout would force dynamic rendering on every route (slow TTFB, no CDN).
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" suppressHydrationWarning className={`${geistSans.variable} ${fraunces.variable} h-full antialiased`}>
      <head>
        <meta property="fb:app_id" content="1371180501519020" />
        <StructuredData />
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
        <Analytics />
      </body>
    </html>
  );
}
