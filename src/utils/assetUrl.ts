/**
 * Resolves a public asset path to account for Vite's `base` config.
 * Usage: assetUrl("/logo_diyar.svg") → "/diyar-marketplace/logo_diyar.svg"
 */
const BASE = import.meta.env.BASE_URL; // Vite injects this from vite.config.ts `base`

export function assetUrl(path: string): string {
  // Remove leading slash from path, BASE already ends with /
  const clean = path.startsWith('/') ? path.slice(1) : path;
  return `${BASE}${clean}`;
}
