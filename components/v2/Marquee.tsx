"use client";

import { useTheme } from "@/lib/ThemeContext";

export function Marquee() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const brandList = [
    { name: "OpenAI",   dot: "#10b981" },
    { name: "Claude",   dot: "#E0A360" },
    { name: "Supabase", dot: "#3ecf8e" },
    { name: "Next.js",  dot: isDark ? "#e5e5e5" : "#111111" },
    { name: "Stripe",   dot: "#635bff" },
    { name: "HubSpot",  dot: "#ff7a59" },
    { name: "Notion",   dot: isDark ? "#e5e5e5" : "#111111" },
    { name: "Slack",    dot: "#e01e5a" },
    { name: "Airtable", dot: "#18bfff" },
    { name: "Make",     dot: "#7B68EE" },
    { name: "n8n",      dot: "#EA4B71" },
    { name: "Zapier",   dot: "#FF4A00" },
  ];

  const sectionBg = isDark ? "linear-gradient(180deg, #110d08 0%, #120d08 100%)" : "#ffffff";
  const borderColor = isDark ? "rgba(224,163,96,0.12)" : "rgba(0,0,0,0.06)";
  const pillBg = isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.04)";
  const pillBorder = isDark ? "rgba(255,255,255,0.11)" : "rgba(0,0,0,0.07)";
  const textColor = isDark ? "rgba(255,255,255,0.72)" : "rgba(0,0,0,0.62)";
  const fadeColor = isDark ? "#120d08" : "#ffffff";

  return (
    <div className="relative overflow-hidden py-5"
      style={{
        borderTop: `1px solid ${borderColor}`,
        borderBottom: `1px solid ${borderColor}`,
        background: sectionBg,
      }}>
      <div className="absolute left-0 top-0 bottom-0 w-28 z-10 pointer-events-none"
        style={{ background: `linear-gradient(to right, ${fadeColor}, transparent)` }} />
      <div className="absolute right-0 top-0 bottom-0 w-28 z-10 pointer-events-none"
        style={{ background: `linear-gradient(to left, ${fadeColor}, transparent)` }} />

      <div className="animate-marquee flex gap-3 w-max">
        {[...brandList, ...brandList].map((brand, i) => (
          <div key={i}
            className="flex items-center gap-2.5 whitespace-nowrap px-4 py-2 rounded-full flex-shrink-0"
            style={{ background: pillBg, border: `1px solid ${pillBorder}` }}>
            <div className="w-1.5 h-1.5 rounded-full flex-shrink-0"
              style={{
                background: brand.dot,
                boxShadow: isDark ? `0 0 7px ${brand.dot}90` : "none",
              }} />
            <span className="text-[13px] font-semibold tracking-[-0.01em]"
              style={{ color: textColor }}>
              {brand.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
