"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { Ghost, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";

import { Logo } from "@/components/layout/logo";
import { SiteSearch } from "@/components/layout/site-search";
import { ThemeToggle } from "@/components/layout/theme-toggle";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => setOpen(false), [pathname]);

  return (
    // <header className="sticky top-0 z-40 border-b border-border/75 bg-background/86 backdrop-blur-xl">

    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white/70 backdrop-blur-2xl border-b border-white/20 bg-white shadow-lg border-neutral-200">

      <div className="container-enterprise flex min-h-[92px] items-center justify-between gap-4" >
        <Logo />
        <nav className="hidden items-center gap-2 lg:flex" aria-label="Primary navigation">
          {siteConfig.nav.slice(0, 8).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                // "rounded-md px-3 py-2 text-sm font-semibold text-muted-foreground transition-colors hover:bg-muted hover:text-foreground",
              "group relative px-4 py-2 text-[15px] font-medium tracking-tight text-zinc-800 hover:text-black transition-colors",
                pathname === item.href && "bg-muted text-foreground"
              )}
            >
              {item.title}
            </Link>
          ))}
        </nav>

        

{/* <nav class="bg-neutral-primary-soft border-default">
    <div class="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
        <a href="https://flowbite.com" class="flex items-center space-x-3 rtl:space-x-reverse">
            <img src="https://flowbite.com/docs/images/logo.svg" class="h-7" alt="Flowbite Logo" />
            <span class="self-center text-xl font-semibold whitespace-nowrap text-heading">Flowbite</span>
        </a>
          <button data-collapse-toggle="mega-menu-full" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-body rounded-lg md:hidden hover:bg-neutral-secondary-soft hover:text-heading focus:outline-none focus:ring-2 focus:ring-default" aria-controls="mega-menu-full" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="w-6 h-6" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 7h14M5 12h14M5 17h14"/></svg>
        </button>
        <div id="mega-menu-full" class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
            <ul class="flex flex-col mt-4 font-medium md:flex-row md:mt-0 md:space-x-8 rtl:space-x-reverse">
                <li>
                    <a href="#" class="block py-2 px-3 text-heading hover:text-fg-brand border-b border-light hover:bg-neutral-secondary-soft md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0" aria-current="page">Home</a>
                </li>
                <li>
                    <button id="mega-menu-full-dropdown-button" data-collapse-toggle="mega-menu-full-dropdown" class="flex items-center justify-between w-full py-2 px-3 font-medium text-heading border-b border-light md:w-auto hover:bg-neutral-secondary-soft md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0">
                        Company 
                        <svg class="w-4 h-4 ms-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 9-7 7-7-7"/></svg>
                    </button>
                </li>
                <li>
                    <a href="#" class="block py-2 px-3 text-heading hover:text-fg-brand border-b border-light hover:bg-neutral-secondary-soft md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0">Marketplace</a>
                </li>
                <li>
                    <a href="#" class="block py-2 px-3 text-heading hover:text-fg-brand border-b border-light hover:bg-neutral-secondary-soft md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0">Resources</a>
                </li>
                <li>
                    <a href="#" class="block py-2 px-3 text-heading hover:text-fg-brand border-b border-light hover:bg-neutral-secondary-soft md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0">Contact</a>
                </li>
            </ul>
        </div>
    </div>
    <div id="mega-menu-full-dropdown" class="mt-1 bg-neutral-primary-soft border-default shadow-xs border-y">
        <div class="grid max-w-screen-xl px-4 py-5 mx-auto text-heading sm:grid-cols-2 md:grid-cols-3 md:px-6">
            <ul aria-labelledby="mega-menu-full-dropdown-button">
                <li>
                    <a href="#" class="block p-3 rounded-lg hover:bg-neutral-secondary-medium">
                        <div class="font-semibold">Online Stores</div>
                        <span class="text-sm text-body">Connect with third-party tools that you're already using.</span>
                    </a>
                </li>
                <li>
                    <a href="#" class="block p-3 rounded-lg hover:bg-neutral-secondary-medium">
                        <div class="font-semibold">Segmentation</div>
                        <span class="text-sm text-body">Connect with third-party tools that you're already using.</span>
                    </a>
                </li>
                <li>
                    <a href="#" class="block p-3 rounded-lg hover:bg-neutral-secondary-medium">
                        <div class="font-semibold">Marketing CRM</div>
                        <span class="text-sm text-body">Connect with third-party tools that you're already using.</span>
                    </a>
                </li>
            </ul>
            <ul>
                <li>
                    <a href="#" class="block p-3 rounded-lg hover:bg-neutral-secondary-medium">
                        <div class="font-semibold">Online Stores</div>
                        <span class="text-sm text-body">Connect with third-party tools that you're already using.</span>
                    </a>
                </li>
                <li>
                    <a href="#" class="block p-3 rounded-lg hover:bg-neutral-secondary-medium">
                        <div class="font-semibold">Segmentation</div>
                        <span class="text-sm text-body">Connect with third-party tools that you're already using.</span>
                    </a>
                </li>
                <li>
                    <a href="#" class="block p-3 rounded-lg hover:bg-neutral-secondary-medium">
                        <div class="font-semibold">Marketing CRM</div>
                        <span class="text-sm text-body">Connect with third-party tools that you're already using.</span>
                    </a>
                </li>
            </ul>
            <ul class="hidden md:block">
                <li>
                    <a href="#" class="block p-3 rounded-lg hover:bg-neutral-secondary-medium">
                        <div class="font-semibold">Audience Management</div>
                        <span class="text-sm text-body">Connect with third-party tools that you're already using.</span>
                    </a>
                </li>
                <li>
                    <a href="#" class="block p-3 rounded-lg hover:bg-neutral-secondary-medium">
                        <div class="font-semibold">Creative Tools</div>
                        <span class="text-sm text-body">Connect with third-party tools that you're already using.</span>
                    </a>
                </li>
                <li>
                    <a href="#" class="block p-3 rounded-lg hover:bg-neutral-secondary-medium">
                        <div class="font-semibold">Marketing Automation</div>
                        <span class="text-sm text-body">Connect with third-party tools that you're already using.</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</nav> */}

              






        <div className="hidden items-center gap-1 lg:flex">
          <SiteSearch />
          <ThemeToggle />
          {/* <Button asChild size="sm">
            <Link href="/contact/">Start a conversation</Link>
          </Button> */}
          {/* <button className="rounded-md bg-primary px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-primary/90">
            <Link href="/contact/">Contact</Link>
          </button> */}
        </div>
        <div className="flex items-center gap-1 lg:hidden">
          <SiteSearch />
          <ThemeToggle />
          <Dialog.Root open={open} onOpenChange={setOpen}>
            <Dialog.Trigger asChild>
              <Button type="button" variant="ghost" size="icon" aria-label="Open navigation menu">
                <Menu className="size-5" aria-hidden="true" />
              </Button>
            </Dialog.Trigger>
            <Dialog.Portal>
              <Dialog.Overlay className="fixed inset-0 z-50 bg-foreground/30 backdrop-blur-sm" />
              <Dialog.Content className="fixed right-3 top-3 z-50 w-[min(24rem,calc(100%-1.5rem))] rounded-lg border border-border bg-card p-5 shadow-[var(--shadow-enterprise)]">
                <div className="flex items-center justify-between">
                  <Dialog.Title className="sr-only">Navigation menu</Dialog.Title>
                  <Logo compact />
                  <Dialog.Close asChild>
                    <Button type="button" variant="ghost" size="icon" aria-label="Close navigation menu">
                      <X className="size-4" aria-hidden="true" />
                    </Button>
                  </Dialog.Close>
                </div>
                <nav className="mt-6 grid gap-1" aria-label="Mobile navigation">
                  {siteConfig.nav.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="rounded-md px-3 py-3 text-base font-semibold text-foreground transition-colors hover:bg-muted"
                    >
                      {item.title}
                    </Link>
                  ))}
                </nav>
                <Button asChild className="mt-6 w-full">
                  <Link href="/contact/">Start a conversation</Link>
                </Button>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </div>
      </div>
    </header>
  );
}



