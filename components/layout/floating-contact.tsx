import { MessageCircle } from "lucide-react";
import Link from "next/link";

export function FloatingContact() {
  return (
    <Link
      href="/contact/"
      className="fixed bottom-6 left-6 z-40 hidden items-center gap-2 rounded-full border border-border bg-card px-4 py-3 text-sm font-semibold text-foreground shadow-[var(--shadow-soft)] transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary md:inline-flex"
    >
      <MessageCircle className="size-4" aria-hidden="true" />
      Contact
    </Link>
  );
}
