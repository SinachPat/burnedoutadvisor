import Link from "next/link";
import { cn } from "@/lib/cn";

/**
 * Placeholder wordmark. The live logo is a dark PNG on a transparent background,
 * so it can't sit on the ink footer. Replace with a proper SVG logo when one exists.
 */
export function Wordmark({ light = false, className }: { light?: boolean; className?: string }) {
  return (
    <Link href="/" className={cn("inline-flex items-center gap-2.5", className)} aria-label="BurnedOut Media, home">
      <svg viewBox="0 0 28 28" aria-hidden="true" className="size-7">
        {/* A ring with a gap: the open space the work is meant to give back. */}
        <circle
          cx="14"
          cy="14"
          r="10.5"
          fill="none"
          stroke={light ? "#f5f8f7" : "#0b1b2b"}
          strokeWidth="3"
          strokeDasharray="56 10"
          strokeLinecap="round"
          transform="rotate(-50 14 14)"
        />
        <circle cx="14" cy="14" r="3" fill="#e8734a" />
      </svg>
      <span className="font-display text-xl font-semibold tracking-tight">BurnedOut Media</span>
    </Link>
  );
}
