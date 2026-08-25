export type ConsentStatus = "accepted" | "declined";

const STORAGE_KEY = "axivore-cookie-consent";

export function getStoredConsent(): ConsentStatus | null {
  const raw = localStorage.getItem(STORAGE_KEY);
  return raw === "accepted" || raw === "declined" ? raw : null;
}

export function setStoredConsent(status: ConsentStatus): void {
  localStorage.setItem(STORAGE_KEY, status);
}

export function clearStoredConsent(): void {
  localStorage.removeItem(STORAGE_KEY);
}
