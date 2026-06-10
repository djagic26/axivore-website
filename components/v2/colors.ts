export function useColors(isDark: boolean) {
  return {
    text:       isDark ? "#ffffff"                   : "#0d0b1a",
    muted:      isDark ? "rgba(255,255,255,0.48)"    : "rgba(13,11,26,0.52)",
    card:       isDark ? "rgba(255,255,255,0.028)"   : "rgba(255,255,255,0.75)",
    cardBorder: isDark ? "rgba(255,255,255,0.07)"    : "rgba(124,92,255,0.14)",
    divider:    isDark ? "rgba(255,255,255,0.07)"    : "rgba(124,92,255,0.1)",
    bgHero: isDark ? "#030208" : "linear-gradient(155deg,#ede8ff 0%,#e6deff 35%,#f3efff 70%,#faf8ff 100%)",
    bgA:    isDark ? "#040110" : "linear-gradient(180deg,#eee9ff 0%,#f5f1ff 100%)",
    bgB:    isDark ? "#030208" : "linear-gradient(180deg,#f5f1ff 0%,#f0ebff 100%)",
    bgC:    isDark ? "#06030f" : "linear-gradient(180deg,#f0ebff 0%,#ece6ff 100%)",
    bgD:    isDark ? "#040110" : "linear-gradient(180deg,#ece6ff 0%,#f5f1ff 100%)",
  };
}
