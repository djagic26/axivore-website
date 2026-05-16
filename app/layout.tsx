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
  title: "Axivore — Precision · Disruption · Direction",
  description:
    "Axivore builds custom AI automations, intelligent chatbots, and SaaS products for modern businesses.",
  metadataBase: new URL("https://axivore.io"),
  openGraph: {
    title: "Axivore — Precision · Disruption · Direction",
    description:
      "Axivore builds custom AI automations, intelligent chatbots, and SaaS products for modern businesses.",
    url: "https://axivore.io",
    siteName: "Axivore",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Axivore — Precision · Disruption · Direction",
    description:
      "Axivore builds custom AI automations, intelligent chatbots, and SaaS products for modern businesses.",
  },
  icons: {
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
