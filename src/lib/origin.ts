/**
 * Decides which origin Stripe should send buyers back to after paying.
 *
 * The Host header is client-controlled, so it is never echoed into a payment redirect unless it matches a host
 * we know is ours. Anything else falls back to our own production host. Pure on purpose, so it can be tested
 * without Next.js. (Not a "use server" file: exports there become callable actions.)
 */
export type OriginConfig = {
  /** NEXT_PUBLIC_SITE_URL / the site's canonical URL, e.g. https://burnedoutadvisor.com */
  siteUrl: string;
  /** Vercel's own hosts (VERCEL_URL, VERCEL_BRANCH_URL, VERCEL_PROJECT_PRODUCTION_URL); may be undefined. */
  vercelHosts: Array<string | undefined>;
  /** Only in development may a localhost host be trusted. */
  isDev: boolean;
};

function hostOf(value: string | undefined) {
  if (!value) return null;
  try {
    return new URL(value.startsWith("http") ? value : `https://${value}`).host;
  } catch {
    return null;
  }
}

export function resolveOrigin(requestHost: string | null, { siteUrl, vercelHosts, isDev }: OriginConfig) {
  const host = (requestHost ?? "").trim().toLowerCase();

  if (isDev && /^(localhost|127\.0\.0\.1)(:\d{1,5})?$/.test(host)) return `http://${host}`;

  const trusted = new Set([hostOf(siteUrl), ...vercelHosts.map(hostOf)].filter((h): h is string => !!h));
  if (trusted.has(host)) return `https://${host}`;

  // Unknown host: send them to our own production host, never to whatever the request claimed.
  const fallback = hostOf(vercelHosts[2]) ?? hostOf(siteUrl);
  return `https://${fallback ?? "localhost"}`;
}
