"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const MANIFESTO =
  "Wir bauen Websites, Web-Apps und KI-Systeme, die deinem Unternehmen die Arbeit abnehmen. Angebote, Rechnungen, Reports — automatisch erledigt. Live in Wochen, nicht Monaten.";

const LEISTUNGEN = [
  { n: "01", title: "Websites & Web-Apps", desc: "Schnell, schön, konvertierend — gebaut in Next.js, live auf Vercel." },
  { n: "02", title: "KI-Automatisierung", desc: "Angebote, Rechnungen, Reports, Dateneingabe — dein Team gewinnt Stunden zurück." },
  { n: "03", title: "Eigene Systeme", desc: "Maßgeschneiderte Tools, die genau deinen Prozess abbilden. Keine Standardsoftware." },
];

const KENNZAHLEN = [
  { value: 365, suffix: "", label: "Tage automatisiert" },
  { value: 24, suffix: "h", label: "Antwortzeit" },
  { value: 30, suffix: "", label: "Tage Garantie" },
  { value: 100, suffix: "%", label: "Festpreis vorab" },
];

export function KineticEditorial() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // static screenshot mode: /hero-preview?shot — render final layout, no rAF loop
      if (typeof window !== "undefined" && new URLSearchParams(window.location.search).has("shot")) {
        return;
      }

      // ---- Lenis smooth scroll wired into GSAP's ticker ----
      const lenis = new Lenis({ lerp: 0.085, wheelMultiplier: 1, touchMultiplier: 1.5 });
      lenis.on("scroll", ScrollTrigger.update);
      const raf = (time: number) => lenis.raf(time * 1000);
      gsap.ticker.add(raf);
      gsap.ticker.lagSmoothing(0);

      // ---- hero load reveal ----
      gsap.from(".hero-line-inner", {
        yPercent: 120,
        duration: 1.15,
        ease: "power4.out",
        stagger: 0.11,
        delay: 0.15,
      });
      gsap.from(".hero-fade", {
        opacity: 0,
        y: 24,
        duration: 1,
        ease: "power3.out",
        stagger: 0.12,
        delay: 0.7,
      });

      // ---- word-by-word manifesto reveal (the Obys signature) ----
      const words = gsap.utils.toArray<HTMLElement>(".reveal-word");
      gsap.set(words, { opacity: 0.14 });
      gsap.to(words, {
        opacity: 1,
        ease: "none",
        stagger: 1,
        scrollTrigger: {
          trigger: ".manifesto",
          start: "top 72%",
          end: "bottom 60%",
          scrub: true,
        },
      });

      // ---- parallax layers ----
      gsap.utils.toArray<HTMLElement>("[data-speed]").forEach((el) => {
        const speed = parseFloat(el.dataset.speed || "0");
        gsap.to(el, {
          yPercent: -12 * speed,
          ease: "none",
          scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true },
        });
      });

      // ---- section rise-ins ----
      gsap.utils.toArray<HTMLElement>(".rise").forEach((el) => {
        gsap.from(el, {
          yPercent: 45,
          opacity: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 88%" },
        });
      });

      // ---- big line reveals (overflow-clipped) ----
      gsap.utils.toArray<HTMLElement>(".line-reveal .line-inner").forEach((el) => {
        gsap.from(el, {
          yPercent: 115,
          duration: 1.1,
          ease: "power4.out",
          scrollTrigger: { trigger: el, start: "top 90%" },
        });
      });

      // ---- count-up numbers ----
      gsap.utils.toArray<HTMLElement>(".countup").forEach((el) => {
        const end = parseFloat(el.dataset.value || "0");
        const obj = { v: 0 };
        gsap.to(obj, {
          v: end,
          duration: 1.6,
          ease: "power2.out",
          scrollTrigger: { trigger: el, start: "top 85%" },
          onUpdate: () => {
            el.firstChild!.textContent = String(Math.round(obj.v));
          },
        });
      });

      return () => {
        gsap.ticker.remove(raf);
        lenis.destroy();
      };
    },
    { scope: root }
  );

  return (
    <div ref={root} style={{ background: "#050507", color: "#F5EBD8" }}>
      {/* grain */}
      <div
        aria-hidden
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 40,
          pointerEvents: "none",
          opacity: 0.045,
          mixBlendMode: "overlay",
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* nav */}
      <header style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 30, display: "flex", justifyContent: "space-between", alignItems: "center", padding: "22px clamp(20px,4vw,56px)", mixBlendMode: "difference" }}>
        <span style={{ fontFamily: "var(--font-fraunces), serif", fontWeight: 600, fontSize: 20, letterSpacing: "-0.01em" }}>Axivore</span>
        <a href="#kontakt" style={{ fontSize: 12, letterSpacing: "0.16em", textTransform: "uppercase", color: "#fff", textDecoration: "none" }}>
          Kontakt
        </a>
      </header>

      {/* ambient brand glows */}
      <div aria-hidden data-speed="2" style={{ position: "absolute", top: "6%", left: "-10%", width: 720, height: 720, background: "radial-gradient(circle, rgba(201,124,60,0.28), transparent 62%)", filter: "blur(60px)", pointerEvents: "none", zIndex: 0 }} />
      <div aria-hidden data-speed="3" style={{ position: "absolute", top: "40%", right: "-14%", width: 640, height: 640, background: "radial-gradient(circle, rgba(181,80,46,0.16), transparent 62%)", filter: "blur(70px)", pointerEvents: "none", zIndex: 0 }} />

      {/* ---- HERO ---- */}
      <section style={{ position: "relative", zIndex: 2, minHeight: "100svh", display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 clamp(20px,4vw,56px)" }}>
        <div className="hero-fade" style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: "clamp(20px,3vw,34px)" }}>
          <span style={{ width: 6, height: 6, borderRadius: 99, background: "#E0A360", boxShadow: "0 0 10px #E0A360" }} />
          <span style={{ fontSize: 12, letterSpacing: "0.22em", textTransform: "uppercase", color: "#E0A360" }}>Digital-Studio · Stuttgart</span>
        </div>

        <h1 style={{ fontFamily: "var(--font-fraunces), Georgia, serif", fontWeight: 600, lineHeight: 0.88, letterSpacing: "-0.03em", fontSize: "clamp(58px,13vw,220px)", margin: 0 }}>
          {["Dein Büro", "arbeitet —"].map((l) => (
            <span key={l} className="hero-line" style={{ display: "block", overflow: "hidden" }}>
              <span className="hero-line-inner" style={{ display: "block" }}>{l}</span>
            </span>
          ))}
          <span className="hero-line" style={{ display: "block", overflow: "hidden" }}>
            <span
              className="hero-line-inner"
              style={{
                display: "block",
                fontStyle: "italic",
                background: "linear-gradient(120deg, #FBF2E4 0%, #E8B978 45%, #E0793D 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              auch nachts.
            </span>
          </span>
        </h1>

        <div className="hero-fade" style={{ marginTop: "clamp(28px,4vw,48px)", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "clamp(18px,3vw,40px)", maxWidth: 640 }}>
          <p style={{ fontSize: "clamp(14px,1.1vw,16px)", lineHeight: 1.7, color: "rgba(255,255,255,0.6)", maxWidth: 380, margin: 0 }}>
            Websites, Web-Apps und KI-Automatisierung für kleine Unternehmen. Live in Wochen, nicht Monaten.
          </p>
          <a href="#kontakt" style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "16px 30px", borderRadius: 999, background: "#F5EBD8", color: "#050507", fontSize: 14, fontWeight: 600, textDecoration: "none" }}>
            Projekt starten
            <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M2 11L11 2M11 2H4M11 2V9" stroke="#050507" strokeWidth="1.6" strokeLinecap="round" /></svg>
          </a>
        </div>

        <div className="hero-fade" style={{ position: "absolute", bottom: 28, left: "clamp(20px,4vw,56px)", fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.4)" }}>
          Scroll ↓
        </div>
      </section>

      {/* ---- MARQUEE ---- */}
      <section style={{ position: "relative", zIndex: 2, overflow: "hidden", padding: "36px 0", borderTop: "1px solid rgba(255,255,255,0.08)", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
        <div style={{ display: "flex", whiteSpace: "nowrap", animation: "marquee 26s linear infinite", width: "max-content" }}>
          {[0, 1].map((k) => (
            <span key={k} style={{ display: "inline-flex", alignItems: "center" }}>
              {["Precision", "Disruption", "Direction", "Automatisierung", "Ergebnisse"].map((w) => (
                <span key={w} style={{ fontFamily: "var(--font-fraunces), serif", fontSize: "clamp(34px,5vw,64px)", fontStyle: "italic", padding: "0 32px", color: "transparent", WebkitTextStroke: "1px rgba(224,163,96,0.55)" }}>
                  {w} <span style={{ WebkitTextStroke: "0", color: "#C97C3C" }}>✦</span>
                </span>
              ))}
            </span>
          ))}
        </div>
      </section>

      {/* ---- MANIFESTO (word reveal) ---- */}
      <section className="manifesto" style={{ position: "relative", zIndex: 2, padding: "clamp(120px,22vh,260px) clamp(20px,4vw,56px)", maxWidth: 1200, margin: "0 auto" }}>
        <p style={{ fontSize: 12, letterSpacing: "0.22em", textTransform: "uppercase", color: "#E0A360", marginBottom: 40 }}>Was wir tun</p>
        <p style={{ fontFamily: "var(--font-fraunces), Georgia, serif", fontWeight: 500, fontSize: "clamp(28px,4.6vw,66px)", lineHeight: 1.18, letterSpacing: "-0.015em", margin: 0 }}>
          {MANIFESTO.split(" ").map((w, i) => (
            <span key={i} className="reveal-word" style={{ display: "inline-block", marginRight: "0.28em" }}>
              {w}
            </span>
          ))}
        </p>
      </section>

      {/* ---- LEISTUNGEN ---- */}
      <section style={{ position: "relative", zIndex: 2, padding: "clamp(40px,6vw,80px) clamp(20px,4vw,56px)", maxWidth: 1320, margin: "0 auto" }}>
        <p className="rise" style={{ fontSize: 12, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(255,255,255,0.45)", marginBottom: "clamp(30px,5vw,64px)" }}>
          Leistungen
        </p>
        {LEISTUNGEN.map((item) => (
          <div
            key={item.n}
            className="line-reveal"
            style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr)", gap: 6, padding: "clamp(28px,4vw,52px) 0", borderTop: "1px solid rgba(255,255,255,0.1)" }}
          >
            <div style={{ display: "flex", alignItems: "baseline", gap: "clamp(16px,3vw,44px)", flexWrap: "wrap" }}>
              <span style={{ fontSize: 13, color: "#C97C3C", fontVariantNumeric: "tabular-nums", letterSpacing: "0.1em" }}>{item.n}</span>
              <span className="line-inner" style={{ display: "inline-block", fontFamily: "var(--font-fraunces), serif", fontWeight: 600, fontSize: "clamp(36px,7vw,110px)", lineHeight: 0.98, letterSpacing: "-0.02em" }}>
                {item.title}
              </span>
            </div>
            <p style={{ maxWidth: 420, marginLeft: "auto", fontSize: 15, lineHeight: 1.7, color: "rgba(255,255,255,0.5)" }}>{item.desc}</p>
          </div>
        ))}
      </section>

      {/* ---- KENNZAHLEN ---- */}
      <section style={{ position: "relative", zIndex: 2, padding: "clamp(80px,14vh,180px) clamp(20px,4vw,56px)" }}>
        <div style={{ maxWidth: 1320, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: "clamp(30px,5vw,60px)" }}>
          {KENNZAHLEN.map((k) => (
            <div key={k.label} className="rise">
              <div style={{ fontFamily: "var(--font-fraunces), serif", fontWeight: 600, fontSize: "clamp(52px,7vw,104px)", lineHeight: 1, letterSpacing: "-0.02em", background: "linear-gradient(160deg,#fff,#E8B978)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                <span className="countup" data-value={k.value} style={{ fontVariantNumeric: "tabular-nums" }}>
                  <span>0</span>
                  {k.suffix}
                </span>
              </div>
              <p style={{ marginTop: 14, fontSize: 13, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)" }}>{k.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---- CTA ---- */}
      <section id="kontakt" style={{ position: "relative", zIndex: 2, minHeight: "92svh", display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 clamp(20px,4vw,56px)", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
        <h2 className="line-reveal" style={{ fontFamily: "var(--font-fraunces), Georgia, serif", fontWeight: 600, lineHeight: 0.9, letterSpacing: "-0.03em", fontSize: "clamp(56px,13vw,210px)", margin: 0 }}>
          {["Reden wir", "über dein"].map((l) => (
            <span key={l} style={{ display: "block", overflow: "hidden" }}>
              <span className="line-inner" style={{ display: "block" }}>{l}</span>
            </span>
          ))}
          <span style={{ display: "block", overflow: "hidden" }}>
            <span className="line-inner" style={{ display: "block", fontStyle: "italic", background: "linear-gradient(120deg,#FBF2E4,#E8B978 45%,#E0793D)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              Projekt.
            </span>
          </span>
        </h2>
        <div className="rise" style={{ marginTop: "clamp(36px,5vw,60px)", display: "flex", flexWrap: "wrap", gap: 20, alignItems: "center" }}>
          <a href="https://calendly.com/hello-axivore/kostenloses-gesprach" target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "18px 34px", borderRadius: 999, background: "linear-gradient(135deg,#C97C3C,#C97C3C 45%,#d9a54e)", color: "#fff", fontSize: 15, fontWeight: 600, textDecoration: "none", boxShadow: "0 8px 44px rgba(201,124,60,0.5)" }}>
            Kostenloses Gespräch buchen
            <svg width="14" height="14" viewBox="0 0 13 13" fill="none"><path d="M2 11L11 2M11 2H4M11 2V9" stroke="#fff" strokeWidth="1.6" strokeLinecap="round" /></svg>
          </a>
          <a href="mailto:hello@axivore.io" style={{ fontSize: 15, color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>hello@axivore.io</a>
        </div>
        <p style={{ marginTop: "clamp(48px,8vw,90px)", fontSize: 12, letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)" }}>
          Axivore · Rotweg 172, 70437 Stuttgart · Precision · Disruption · Direction
        </p>
      </section>

      <style>{`@keyframes marquee { from { transform: translateX(0); } to { transform: translateX(-50%); } }`}</style>
    </div>
  );
}
