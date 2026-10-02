/** Formats an amount in minor units (cents) for display, e.g. 488800 → "$4,888.00". */
export function formatMoney(amountMinor: number, currency: string, { cents = true } = {}) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency.toUpperCase(),
    minimumFractionDigits: cents ? 2 : 0,
    maximumFractionDigits: cents ? 2 : 0,
  }).format(amountMinor / 100);
}
