import Link from "next/link";

const CALENDLY_URL = "https://calendly.com/hello-axivore/kostenloses-gesprach";

type ServiceShellProps = {
  children: React.ReactNode;
};

/**
 * Shared shell for the /leistungen service pages.
 * Server component — renders into static HTML for SEO.
 * Minimal header + footer (no homepage anchor nav) to avoid broken
 * in-page links on sub-routes.
 */
export function ServiceShell({ children }: ServiceShellProps) {
  return (
    <div className="min-h-screen bg-[#050507] text-white">
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#050507]/80 border-b border-white/[0.06]">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="font-semibold tracking-tight text-[17px] hover:opacity-80 transition-opacity">
            Axivore
          </Link>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13px] font-medium px-4 py-2 rounded-full transition-transform hover:scale-[1.03]"
            style={{
              background: "linear-gradient(135deg,#7C5CFF,#A09AFF)",
              color: "#0C0C0F",
            }}
          >
            Kostenloses Gespräch
          </a>
        </div>
      </header>

      <main>{children}</main>

      <footer className="border-t border-white/[0.06] mt-24">
        <div className="max-w-5xl mx-auto px-6 py-12 text-sm text-white/40">
          <div className="flex flex-wrap gap-x-8 gap-y-3 mb-8">
            <Link href="/leistungen" className="hover:text-white/70 transition-colors">Leistungen</Link>
            <Link href="/leistungen/ki-automatisierung" className="hover:text-white/70 transition-colors">KI-Automatisierung</Link>
            <Link href="/leistungen/ki-chatbots" className="hover:text-white/70 transition-colors">KI-Chatbots</Link>
            <Link href="/impressum" className="hover:text-white/70 transition-colors">Impressum</Link>
            <Link href="/datenschutz" className="hover:text-white/70 transition-colors">Datenschutz</Link>
          </div>
          <p>© {new Date().getFullYear()} Axivore · Stuttgart, Deutschland</p>
        </div>
      </footer>
    </div>
  );
}

export { CALENDLY_URL };
