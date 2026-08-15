"use client";

import { Suspense, useEffect, useMemo, useRef, useState, type MutableRefObject } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Environment, Lightformer, Float, Sparkles } from "@react-three/drei";
import { EffectComposer, Bloom, Vignette } from "@react-three/postprocessing";
import {
  Shape,
  Path,
  ExtrudeGeometry,
  MeshPhysicalMaterial,
  MathUtils,
  Color,
  type Group,
} from "three";

/**
 * Apple-style pinned scrollytelling for Axivore.
 * A single sticky WebGL canvas sits behind the page; window scroll (0..1) drives
 * the 3D Axivore mark (extruded "A" monogram + star) through four scenes.
 * `?p=<0..1>` renders one settled frame in demand mode for screenshotting.
 */

type ScrollRef = MutableRefObject<number>;

const BRAND = {
  a: new Color("#c97c3c"),
  b: new Color("#b5502e"),
  c: new Color("#22d3ee"),
  d: new Color("#e0a360"),
};

// ---- Axivore mark geometry (built in code, no external asset) ----------------

function buildAShape(): Shape {
  const a = new Shape();
  a.moveTo(0, 1.0);
  a.lineTo(0.72, -1.0);
  a.lineTo(-0.72, -1.0);
  a.closePath();
  // counter (triangular hole above the crossbar)
  const counter = new Path();
  counter.moveTo(0, 0.5);
  counter.lineTo(0.3, -0.05);
  counter.lineTo(-0.3, -0.05);
  counter.closePath();
  a.holes.push(counter);
  // leg notch (separates the two legs below the crossbar)
  const notch = new Path();
  notch.moveTo(0, -0.28);
  notch.lineTo(0.32, -1.0);
  notch.lineTo(-0.32, -1.0);
  notch.closePath();
  a.holes.push(notch);
  return a;
}

function buildStarShape(outer = 1, inner = 0.42, points = 5): Shape {
  const s = new Shape();
  for (let i = 0; i <= points * 2; i++) {
    const r = i % 2 === 0 ? outer : inner;
    const ang = (i / (points * 2)) * Math.PI * 2 - Math.PI / 2;
    const x = Math.cos(ang) * r;
    const y = Math.sin(ang) * r;
    if (i === 0) s.moveTo(x, y);
    else s.lineTo(x, y);
  }
  s.closePath();
  return s;
}

function AxivoreMark({ scroll, snap }: { scroll: ScrollRef; snap: boolean }) {
  const group = useRef<Group>(null);
  const spin = useRef<Group>(null);
  const tmp = useRef(new Color());

  const material = useMemo(
    () =>
      new MeshPhysicalMaterial({
        metalness: 0.95,
        roughness: 0.11,
        iridescence: 1,
        iridescenceIOR: 1.4,
        clearcoat: 1,
        clearcoatRoughness: 0.08,
        color: new Color("#c97c3c"),
        envMapIntensity: 1.7,
      }),
    []
  );

  const aGeo = useMemo(() => {
    const g = new ExtrudeGeometry(buildAShape(), {
      depth: 0.36,
      bevelEnabled: true,
      bevelThickness: 0.07,
      bevelSize: 0.055,
      bevelSegments: 5,
      curveSegments: 6,
    });
    g.center();
    return g;
  }, []);

  const starGeo = useMemo(() => {
    const g = new ExtrudeGeometry(buildStarShape(1, 0.42, 5), {
      depth: 0.3,
      bevelEnabled: true,
      bevelThickness: 0.06,
      bevelSize: 0.05,
      bevelSegments: 5,
      curveSegments: 4,
    });
    g.center();
    return g;
  }, []);

  useFrame((state, delta) => {
    const p = scroll.current;
    const t = state.clock.elapsedTime;
    const k = snap ? 1 : 1 - Math.pow(0.001, delta); // damping factor

    // hue drift through the brand spectrum as you scroll
    const seg = p * 3;
    let from = BRAND.a, to = BRAND.d;
    if (seg < 1) { from = BRAND.a; to = BRAND.b; }
    else if (seg < 2) { from = BRAND.b; to = BRAND.c; }
    else { from = BRAND.c; to = BRAND.d; }
    tmp.current.copy(from).lerp(to, seg % 1);
    material.color.lerp(tmp.current, snap ? 1 : 0.1);

    if (spin.current) {
      spin.current.rotation.y = t * 0.3 + p * Math.PI * 4;
      spin.current.rotation.x = MathUtils.lerp(spin.current.rotation.x, p * Math.PI * 1.5, k);
    }

    if (group.current) {
      const targetX = Math.sin(p * Math.PI * 2) * 1.7;
      const targetZ = MathUtils.lerp(0, 2.2, p);
      const targetScale = MathUtils.lerp(1.25, 1.9, Math.sin(p * Math.PI));
      group.current.position.x = MathUtils.lerp(group.current.position.x, targetX, k);
      group.current.position.z = MathUtils.lerp(group.current.position.z, targetZ, k);
      const sc = MathUtils.lerp(group.current.scale.x, targetScale, k);
      group.current.scale.setScalar(sc);
    }
  });

  return (
    <group ref={group} scale={1.25}>
      <Float speed={1.1} rotationIntensity={0.2} floatIntensity={0.5}>
        <group ref={spin}>
          <mesh geometry={aGeo} material={material} />
          <mesh geometry={starGeo} material={material} position={[0.62, 0.92, 0]} scale={0.34} rotation={[0, 0, 0.1]} />
        </group>
      </Float>
    </group>
  );
}

function Rig() {
  return (
    <Environment resolution={256}>
      <Lightformer intensity={3} color="#e0a360" form="rect" position={[0, 3, 4]} scale={[8, 3, 1]} />
      <Lightformer intensity={2.6} color="#c97c3c" form="rect" position={[-5, 1, 2]} scale={[4, 8, 1]} rotation={[0, Math.PI / 4, 0]} />
      <Lightformer intensity={2.8} color="#b5502e" form="rect" position={[5, -1, 2]} scale={[4, 6, 1]} rotation={[0, -Math.PI / 4, 0]} />
      <Lightformer intensity={2.2} color="#22d3ee" form="circle" position={[0, -4, 3]} scale={[4, 4, 1]} />
      <Lightformer intensity={5} color="#ffffff" form="rect" position={[0, 0, -6]} scale={[12, 12, 1]} />
    </Environment>
  );
}

function Settle({ active }: { active: boolean }) {
  const invalidate = useThree((s) => s.invalidate);
  useEffect(() => {
    if (!active) return;
    let n = 0;
    const id = setInterval(() => {
      invalidate();
      if (++n > 60) clearInterval(id);
    }, 16);
    return () => clearInterval(id);
  }, [active, invalidate]);
  return null;
}

function Stage({ scroll, snap }: { scroll: ScrollRef; snap: boolean }) {
  return (
    <>
      <color attach="background" args={["#050507"]} />
      <ambientLight intensity={0.45} />
      <pointLight position={[6, 6, 6]} intensity={45} color="#e0a360" />
      <pointLight position={[-6, -4, 3]} intensity={26} color="#b5502e" />
      <Suspense fallback={null}>
        <AxivoreMark scroll={scroll} snap={snap} />
        {/* brand star field — the "more effects" layer */}
        <Sparkles count={70} scale={[13, 9, 9]} size={3.5} speed={0.28} opacity={0.7} color="#f0c48a" />
        <Sparkles count={35} scale={[16, 10, 6]} size={5} speed={0.18} opacity={0.5} color="#dc7c5b" />
        <Rig />
      </Suspense>
      <Settle active={snap} />
      <EffectComposer enableNormalPass={false}>
        <Bloom mipmapBlur luminanceThreshold={0.6} luminanceSmoothing={0.28} intensity={1.0} radius={0.75} />
        <Vignette eskil={false} offset={0.2} darkness={0.8} />
      </EffectComposer>
    </>
  );
}

// ---- copy scenes -------------------------------------------------------------

type SceneDef = {
  badge: string;
  title: string;
  titleItalic?: string;
  body: string;
  align: "left" | "right" | "center";
};

const SCENES: SceneDef[] = [
  {
    badge: "Digital-Studio aus Stuttgart",
    title: "Dein Büro arbeitet.",
    titleItalic: "Auch nachts",
    body: "Websites, Web-Apps und KI-Automatisierung für kleine Unternehmen — live in Wochen, nicht Monaten.",
    align: "left",
  },
  {
    badge: "Was wir bauen",
    title: "Systeme,",
    titleItalic: "die mitdenken",
    body: "Angebote, Rechnungen, Reports, Dateneingabe — automatisiert. Deine Zeit fließt zurück ins Geschäft, nicht in Formulare.",
    align: "right",
  },
  {
    badge: "Ergebnisse",
    title: "365 Tage",
    titleItalic: "automatisiert",
    body: "Eigene Systeme, live im Einsatz. Festpreis vorab, 30-Tage-Garantie. Beweis statt Versprechen.",
    align: "left",
  },
  {
    badge: "Loslegen",
    title: "Reden wir über",
    titleItalic: "dein Projekt",
    body: "Kostenloses Erstgespräch. Antwort in 24 Stunden — unverbindlich.",
    align: "center",
  },
];

function smoothstep(edge0: number, edge1: number, x: number): number {
  const t = Math.min(1, Math.max(0, (x - edge0) / (edge1 - edge0)));
  return t * t * (3 - 2 * t);
}

function sceneStyle(p: number, index: number, total: number): { opacity: number; translateY: number } {
  const w = 1 / total;
  const start = index * w;
  const end = start + w;
  const fadeIn = index === 0 ? 1 : smoothstep(start, start + 0.09, p);
  const fadeOut = index === total - 1 ? 1 : 1 - smoothstep(end - 0.09, end, p);
  const opacity = Math.max(0, Math.min(fadeIn, fadeOut));
  const center = start + w / 2;
  const translateY = (center - p) * 240;
  return { opacity, translateY };
}

function SceneCopy({ scene, index, progress }: { scene: SceneDef; index: number; progress: number }) {
  const { opacity, translateY } = sceneStyle(progress, index, SCENES.length);
  const justify =
    scene.align === "left" ? "justify-start" : scene.align === "right" ? "justify-end" : "justify-center";

  return (
    <div className="h-screen w-full flex items-center px-6 sm:px-10" style={{ pointerEvents: "none" }}>
      <div className={`max-w-[1320px] mx-auto w-full flex ${justify}`}>
        <div style={{ opacity, transform: `translateY(${translateY}px)`, maxWidth: 560, textAlign: scene.align }}>
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-7"
            style={{ background: "rgba(201,124,60,0.1)", border: "1px solid rgba(201,124,60,0.28)" }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#E0A360" }} />
            <span className="text-[10.5px] tracking-[0.18em] uppercase font-medium" style={{ color: "#E0A360" }}>
              {scene.badge}
            </span>
          </div>

          <h2
            className="leading-[0.95] tracking-[-0.015em] mb-6"
            style={{ fontFamily: "var(--font-fraunces), Georgia, serif", fontWeight: 600, fontSize: "clamp(46px,6vw,88px)" }}
          >
            <span
              style={{
                background: "linear-gradient(160deg, #ffffff 0%, #FBEEDD 60%, #f0c48a 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                filter: "drop-shadow(0 0 40px rgba(224,163,96,0.35))",
              }}
            >
              {scene.title}
            </span>
            {scene.titleItalic && (
              <>
                {" "}
                <span
                  style={{
                    fontStyle: "italic",
                    background: "linear-gradient(160deg, #FBF2E4 0%, #E8B978 50%, #E0793D 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    filter: "drop-shadow(0 0 40px rgba(224,163,96,0.35))",
                  }}
                >
                  {scene.titleItalic}
                </span>
                <span style={{ color: "#C97C3C" }}>.</span>
              </>
            )}
          </h2>

          <p
            className="text-[15px] leading-[1.75] mb-9"
            style={{
              color: "rgba(255,255,255,0.55)",
              maxWidth: 440,
              marginLeft: scene.align === "right" || scene.align === "center" ? "auto" : undefined,
              marginRight: scene.align === "center" ? "auto" : undefined,
            }}
          >
            {scene.body}
          </p>

          {index === SCENES.length - 1 && (
            <a
              href="https://calendly.com/hello-axivore/kostenloses-gesprach"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full text-white text-[14px] font-semibold"
              style={{ background: "linear-gradient(135deg, #C97C3C 0%, #C97C3C 40%, #d9a54e 100%)", boxShadow: "0 6px 36px rgba(201,124,60,0.5)", pointerEvents: "auto" }}
            >
              Kostenloses Gespräch buchen
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                <path d="M2 11L11 2M11 2H4M11 2V9" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export function ScrollExperience() {
  const scroll = useRef(0);
  const [progress, setProgress] = useState(0);

  // static screenshot mode: /hero-preview?p=0.5
  const staticP = useMemo(() => {
    if (typeof window === "undefined") return null;
    const raw = new URLSearchParams(window.location.search).get("p");
    if (raw === null) return null;
    const v = parseFloat(raw);
    return Number.isFinite(v) ? Math.min(1, Math.max(0, v)) : null;
  }, []);
  const isStatic = staticP !== null;

  useEffect(() => {
    if (isStatic) {
      scroll.current = staticP as number;
      setProgress(staticP as number);
      return;
    }
    let raf = 0;
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const p = max > 0 ? window.scrollY / max : 0;
      scroll.current = p;
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => setProgress(p));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(raf);
    };
  }, [isStatic, staticP]);

  const activeScene = Math.min(SCENES.length - 1, Math.floor(progress * SCENES.length));

  return (
    <div style={{ background: "#050507" }}>
      <div style={{ position: "fixed", inset: 0, zIndex: 0 }}>
        <Canvas
          camera={{ position: [0, 0, 6], fov: 40 }}
          dpr={[1, 1.6]}
          gl={{ antialias: true }}
          frameloop={isStatic ? "demand" : "always"}
        >
          <Stage scroll={scroll} snap={isStatic} />
        </Canvas>
      </div>

      {/* film grain */}
      <div
        aria-hidden
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 1,
          pointerEvents: "none",
          opacity: 0.04,
          mixBlendMode: "overlay",
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
      <div style={{ position: "fixed", inset: 0, zIndex: 1, pointerEvents: "none", background: "radial-gradient(120% 90% at 50% 50%, transparent 42%, rgba(5,5,7,0.55) 100%)" }} />

      {!isStatic && (
        <div style={{ position: "relative", zIndex: 2 }}>
          {SCENES.map((scene, i) => (
            <SceneCopy key={scene.badge} scene={scene} index={i} progress={progress} />
          ))}
        </div>
      )}
      {isStatic && (
        <div style={{ position: "relative", zIndex: 2 }}>
          <SceneCopy scene={SCENES[activeScene]} index={activeScene} progress={progress} />
        </div>
      )}

      <div style={{ position: "fixed", right: 22, top: "50%", transform: "translateY(-50%)", zIndex: 3, display: "flex", flexDirection: "column", gap: 10, pointerEvents: "none" }}>
        {SCENES.map((s, i) => (
          <span key={s.badge} style={{ width: 6, height: 6, borderRadius: 99, background: i === activeScene ? "#E0A360" : "rgba(255,255,255,0.25)", boxShadow: i === activeScene ? "0 0 8px #E0A360" : "none", transition: "background 0.3s" }} />
        ))}
      </div>
    </div>
  );
}
