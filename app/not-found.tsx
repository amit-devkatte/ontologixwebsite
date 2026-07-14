import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="container-enterprise grid min-h-[70vh] place-items-center py-24 text-center">
      <div className="max-w-2xl">
        <p className="section-kicker">404</p>
        <h1 className="mt-5 text-balance text-4xl font-semibold md:text-6xl">Page not found</h1>
        <p className="mt-5 text-lg leading-8 text-muted-foreground">
          The page may have moved, or the route is no longer available.
        </p>
        <div className="mt-8 flex justify-center gap-3">
          <Button asChild>
            <Link href="/">Return home</Link>
          </Button>
          <Button asChild variant="secondary">
            <Link href="/contact/">Contact Ontologix</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
