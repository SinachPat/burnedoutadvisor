import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/cn";

type Variant = "primary" | "outline" | "outline-light";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-base font-semibold transition-colors duration-200 disabled:cursor-not-allowed disabled:opacity-60";

const variants: Record<Variant, string> = {
  // Ink on ember: white on this orange is only 3:1.
  primary: "bg-ember text-ink hover:bg-[#f08a65]",
  outline: "border-2 border-ink text-ink hover:bg-ink hover:text-foam",
  "outline-light": "border-2 border-foam/70 text-foam hover:bg-foam hover:text-ink",
};

type Common = { variant?: Variant; className?: string; children: ReactNode };

type AsLink = Common & { href: string } & Omit<ComponentProps<"a">, "href" | "className" | "children">;
type AsButton = Common & { href?: undefined } & Omit<ComponentProps<"button">, "className" | "children">;

export function Button(props: AsLink | AsButton) {
  const { variant = "primary", className, children, ...rest } = props;
  const classes = cn(base, variants[variant], className);

  if (props.href !== undefined) {
    const { href, ...anchor } = rest as Omit<AsLink, keyof Common>;
    const external = /^https?:\/\//.test(href);
    return external ? (
      <a href={href} className={classes} {...anchor}>
        {children}
      </a>
    ) : (
      <Link href={href} className={classes} {...anchor}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(rest as Omit<AsButton, keyof Common>)}>
      {children}
    </button>
  );
}
