import Link from "next/link";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
  compact?: boolean;
};

export function Logo({ className, compact = false }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label={`${siteConfig.displayName} home`}
      className={cn("group inline-flex items-center gap-3", className)}
    >
      { <span className="relative grid size-10 shrink-0 place-items-center overflow-hidden rounded-lg bg-foreground text-background shadow-[0_16px_40px_rgb(26_26_26_/_0.14)]">
        { <svg viewBox="0 0 40 40" className="size-10" aria-hidden="true">
          <rect width="40" height="40" rx="8" fill="currentColor" opacity="0.04" />
          <path
            d="M9.5 20c0-6.05 4.86-10.95 10.86-10.95 4.44 0 8.23 2.65 9.91 6.44h-5.02a6.12 6.12 0 0 0-4.89-2.34c-3.58 0-6.48 3.03-6.48 6.85 0 3.84 2.9 6.88 6.48 6.88a6.14 6.14 0 0 0 5.07-2.58h4.92c-1.61 3.98-5.52 6.78-9.99 6.78C14.36 31.08 9.5 26.08 9.5 20Z"
            fill="#1389C6"
          />
          <path
            d="M20.38 15.43h10.18v3.26H20.38c-.78 0-1.42.58-1.42 1.31 0 .75.64 1.33 1.42 1.33h10.18v3.25H20.38c-2.7 0-4.88-2.02-4.88-4.58 0-2.54 2.18-4.57 4.88-4.57Z"
            fill="#1ABCD0"
          />
          <circle cx="30.6" cy="20" r="2.05" fill="#FA740D" />
        </svg> }
      </span> }
      {!compact ? (
        <span className="leading-none">
          <span className="block text-base font-bold text-foreground">Ontologix</span>
          <span className="mt-1 block text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
            Software Pvt Ltd
          </span>
        </span>
      ) : null}
    </Link>
  );
}
