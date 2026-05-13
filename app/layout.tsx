import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/lib/LanguageContext";
import { ThemeProvider } from "@/lib/ThemeContext";
import ChatWidgetWrapper from "@/components/ChatWidgetWrapper";

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
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" suppressHydrationWarning className={`${geistSans.variable} h-full antialiased`}>
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
