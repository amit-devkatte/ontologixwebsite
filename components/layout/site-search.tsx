"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { Search, X } from "lucide-react";
import Link from "next/link";
import * as React from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { getSearchDocuments } from "@/lib/content";

const documents = getSearchDocuments();

export function SiteSearch() {
  const [open, setOpen] = React.useState(false);
  const [query, setQuery] = React.useState("");

  const results = React.useMemo(() => {
    const value = query.trim().toLowerCase();
    if (!value) return documents.slice(0, 6);

    return documents
      .filter((item) =>
        [item.title, item.category, item.excerpt].join(" ").toLowerCase().includes(value)
      )
      .slice(0, 8);
  }, [query]);

  React.useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen(true);
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <Button type="button" variant="ghost" size="icon" aria-label="Search website" title="Search">
          <Search className="size-4" aria-hidden="true" />
        </Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-foreground/30 backdrop-blur-sm" />
        <Dialog.Content className="fixed left-1/2 top-[12vh] z-50 w-[calc(100%-2rem)] max-w-2xl -translate-x-1/2 rounded-lg border border-border bg-card p-4 shadow-[var(--shadow-enterprise)]">
          <div className="flex items-center gap-3 border-b border-border pb-4">
            <Search className="size-5 text-muted-foreground" aria-hidden="true" />
            <Dialog.Title className="sr-only">Search Ontologix website</Dialog.Title>
            <Input
              autoFocus
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search services, solutions, case studies..."
              aria-label="Search query"
              className="border-0 shadow-none focus-visible:ring-0"
            />
            <Dialog.Close asChild>
              <Button type="button" variant="ghost" size="icon" aria-label="Close search">
                <X className="size-4" aria-hidden="true" />
              </Button>
            </Dialog.Close>
          </div>
          <div className="max-h-[55vh] overflow-y-auto py-3">
            {results.length ? (
              <ul className="space-y-2">
                {results.map((item) => (
                  <li key={`${item.category}-${item.href}`}>
                    <Dialog.Close asChild>
                      <Link
                        href={item.href}
                        className="block rounded-md border border-transparent p-4 transition-colors hover:border-primary/20 hover:bg-muted"
                      >
                        <span className="text-xs font-semibold uppercase tracking-[0.12em] text-primary">
                          {item.category}
                        </span>
                        <span className="mt-1 block font-semibold text-foreground">{item.title}</span>
                        <span className="mt-1 line-clamp-2 block text-sm leading-6 text-muted-foreground">
                          {item.excerpt}
                        </span>
                      </Link>
                    </Dialog.Close>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="p-6 text-sm text-muted-foreground">No matching content found.</p>
            )}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
