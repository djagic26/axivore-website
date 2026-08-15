export function useColors(isDark: boolean) {
  return {
    text:       isDark ? "#ffffff"                   : "#100d09",
    muted:      isDark ? "rgba(255,255,255,0.48)"    : "rgba(16, 13, 9,0.52)",
    card:       isDark ? "rgba(255,255,255,0.028)"   : "rgba(255,255,255,0.75)",
    cardBorder: isDark ? "rgba(255,255,255,0.07)"    : "rgba(201,124,60,0.14)",
    divider:    isDark ? "rgba(255,255,255,0.07)"    : "rgba(201,124,60,0.1)",
    bgHero: isDark ? "#120d08" : "linear-gradient(155deg,#FBF2E4 0%,#F8ECDA 35%,#FCF5E9 70%,#FEFCF8 100%)",
    bgA:    isDark ? "#140d05" : "linear-gradient(180deg,#FAF0E0 0%,#FDF8EF 100%)",
    bgB:    isDark ? "#120d08" : "linear-gradient(180deg,#FDF8EF 0%,#FAEFDE 100%)",
    bgC:    isDark ? "#120c07" : "linear-gradient(180deg,#FAEFDE 0%,#F8EBD6 100%)",
    bgD:    isDark ? "#140d05" : "linear-gradient(180deg,#F8EBD6 0%,#FDF8EF 100%)",
  };
}
