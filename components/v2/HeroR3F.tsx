"use client";

import { Suspense, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  Float,
  Environment,
  Lightformer,
  MeshTransmissionMaterial,
} from "@react-three/drei";
import { EffectComposer, Bloom, Vignette } from "@react-three/postprocessing";
import { motion } from "framer-motion";
import type { Group, Mesh } from "three";

/**
 * Rotating glass torus-knot with real transmission + chromatic dispersion.
 * Reflections come from colored Lightformers inside <Environment> — no external
 * HDR asset, so it renders identically in dev, on Vercel, and offline.
 */
function Crystal() {
  const mesh = useRef<Mesh>(null);
  const group = useRef<Group>(null);
  const { pointer } = useThree();

  useFrame((_, delta) => {
    if (mesh.current) {
      mesh.current.rotation.y += delta * 0.18;
      mesh.current.rotation.z += delta * 0.05;
    }
    if (group.current) {
      // subtle parallax toward the cursor
      group.current.rotation.y += (pointer.x * 0.35 - group.current.rotation.y) * 0.05;
      group.current.rotation.x += (-pointer.y * 0.25 - group.current.rotation.x) * 0.05;
    }
  });

  return (
    <group ref={group}>
      <Float speed={1.4} rotationIntensity={0.35} floatIntensity={0.7}>
        <mesh ref={mesh} scale={1.55}>
          <torusKnotGeometry args={[1, 0.32, 260, 40]} />
          <MeshTransmissionMaterial
            samples={8}
            resolution={512}
            transmission={1}
            roughness={0.06}
            thickness={1.4}
            ior={1.5}
            chromaticAberration={0.55}
            anisotropy={0.3}
            distortion={0.25}
            distortionScale={0.35}
            temporalDistortion={0.15}
            color="#F5E4C8"
            attenuationColor="#e0a360"
            attenuationDistance={2.4}
            background={"#050507" as unknown as undefined}
          />
        </mesh>
      </Float>
    </group>
  );
}

function Scene() {
  return (
    <>
      <color attach="background" args={["#050507"]} />
      <ambientLight intensity={0.35} />
      <pointLight position={[6, 6, 6]} intensity={30} color="#e0a360" />
      <pointLight position={[-6, -3, 4]} intensity={18} color="#b5502e" />

      <Suspense fallback={null}>
        <Crystal />

        {/* Colored studio light-bars the glass reflects — the "expensive" look */}
        <Environment resolution={256}>
          <Lightformer intensity={3.2} color="#e0a360" form="rect" position={[0, 3, 3]} scale={[6, 3, 1]} />
          <Lightformer intensity={2.4} color="#b36a2e" form="rect" position={[-4, 1, 2]} scale={[4, 6, 1]} rotation={[0, Math.PI / 4, 0]} />
          <Lightformer intensity={2.6} color="#b5502e" form="rect" position={[4, -1, 2]} scale={[4, 5, 1]} rotation={[0, -Math.PI / 4, 0]} />
          <Lightformer intensity={2.0} color="#22d3ee" form="circle" position={[0, -3, 3]} scale={[3, 3, 1]} />
          <Lightformer intensity={4} color="#ffffff" form="rect" position={[0, 0, -5]} scale={[10, 10, 1]} />
        </Environment>
      </Suspense>

      <EffectComposer enableNormalPass={false}>
        <Bloom mipmapBlur luminanceThreshold={0.55} luminanceSmoothing={0.3} intensity={0.9} radius={0.7} />
        <Vignette eskil={false} offset={0.15} darkness={0.85} />
      </EffectComposer>
    </>
  );
}

export function HeroR3F() {
  return (
    <section className="relative min-h-screen overflow-hidden" style={{ background: "#050507" }}>
      {/* 3D layer */}
      <div className="absolute inset-0">
        <Canvas
          camera={{ position: [0, 0, 6], fov: 42 }}
          dpr={[1, 1.75]}
          gl={{ antialias: true }}
          style={{ position: "absolute", inset: 0 }}
        >
          <Scene />
        </Canvas>
      </div>

      {/* readability scrim on the left where the copy sits */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(100deg, rgba(5,5,7,0.92) 0%, rgba(5,5,7,0.65) 34%, rgba(5,5,7,0.1) 58%, transparent 72%)",
        }}
      />
      <div
        className="absolute inset-x-0 bottom-0 h-[35%] pointer-events-none"
        style={{ background: "linear-gradient(to bottom, transparent, #050507)" }}
      />

      {/* copy overlay */}
      <div className="relative z-10 max-w-[1320px] mx-auto px-6 min-h-screen flex items-center">
        <div className="max-w-[560px] py-24">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-9"
            style={{ background: "rgba(201,124,60,0.1)", border: "1px solid rgba(201,124,60,0.25)" }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: "#E0A360" }} />
            <span className="text-[10.5px] tracking-[0.18em] uppercase font-medium" style={{ color: "#E0A360" }}>
              Digital-Studio aus Stuttgart
            </span>
          </motion.div>

          <h1 className="mb-8">
            {["Dein Büro arbeitet.", "Auch nachts"].map((line, i) => (
              <div key={line} className="overflow-hidden">
                <motion.div
                  initial={{ y: "105%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, delay: 0.25 + i * 0.14, ease: [0.16, 1, 0.3, 1] }}
                  className="leading-[0.94] tracking-[-0.015em]"
                  style={{
                    fontFamily: "var(--font-fraunces), Georgia, serif",
                    fontWeight: 600,
                    fontStyle: i === 1 ? "italic" : "normal",
                    fontSize: "clamp(52px,6.6vw,96px)",
                    background:
                      i === 0
                        ? "linear-gradient(160deg, #ffffff 0%, #FBEEDD 60%, #f0c48a 100%)"
                        : "linear-gradient(160deg, #FBF2E4 0%, #E8B978 50%, #E0793D 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    filter: "drop-shadow(0 0 40px rgba(224,163,96,0.35))",
                  }}
                >
                  {i === 1 ? (
                    <>
                      {line}
                      <span style={{ WebkitTextFillColor: "#C97C3C" }}>.</span>
                    </>
                  ) : (
                    line
                  )}
                </motion.div>
              </div>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.62 }}
            className="text-[15px] leading-[1.75] max-w-[440px] mb-10"
            style={{ color: "rgba(255,255,255,0.5)" }}
          >
            Websites, Web-Apps und KI-Automatisierung für kleine Unternehmen — wir bauen die
            digitalen Werkzeuge, mit denen dein Geschäft mehr schafft. Live in Wochen, nicht Monaten.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.78 }}
            className="flex items-center gap-5 flex-wrap"
          >
            <a
              href="https://calendly.com/hello-axivore/kostenloses-gesprach"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-7 py-4 rounded-full text-white text-[14px] font-semibold"
              style={{
                background: "linear-gradient(135deg, #C97C3C 0%, #C97C3C 40%, #d9a54e 100%)",
                boxShadow: "0 6px 36px rgba(201,124,60,0.5)",
              }}
            >
              Kostenloses Gespräch buchen
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                <path d="M2 11L11 2M11 2H4M11 2V9" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </a>
            <a href="#results" className="flex items-center gap-2 text-[14px] font-medium" style={{ color: "rgba(255,255,255,0.5)" }}>
              Ergebnisse ansehen
              <span className="text-[16px]">→</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
