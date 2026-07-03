import { Nav } from "@/components/v2/Nav";
import { Footer } from "@/components/v2/Footer";

const CALENDLY_URL = "https://calendly.com/hello-axivore/kostenloses-gesprach";

type ServiceShellProps = {
  children: React.ReactNode;
};

/**
 * Shared shell for the German SEO pages (/leistungen, /branchen,
 * /ki-agentur-stuttgart). Server component — the page content renders into
 * static HTML for SEO, while Nav/Footer hydrate as client islands so the
 * whole site shares one navigation and footer.
 * pt-16 offsets the fixed Nav (h-16).
 */
export function ServiceShell({ children }: ServiceShellProps) {
  return (
    <div className="min-h-screen bg-[#050507] text-white">
      <Nav />
      <main className="pt-16">{children}</main>
      <Footer />
    </div>
  );
}

export { CALENDLY_URL };
