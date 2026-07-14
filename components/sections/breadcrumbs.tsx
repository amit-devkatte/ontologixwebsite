import { ChevronRight, Home } from "lucide-react";
import Link from "next/link";

type BreadcrumbItem = {
  name: string;
  href: string;
};

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav className="container-enterprise pt-8" aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
        <li>
          <Link href="/" className="inline-flex items-center gap-1 hover:text-primary">
            <Home className="size-4" aria-hidden="true" />
            Home
          </Link>
        </li>
        {items.map((item) => (
          <li className="flex items-center gap-2" key={item.href}>
            <ChevronRight className="size-4" aria-hidden="true" />
            <Link href={item.href} className="font-medium text-foreground hover:text-primary">
              {item.name}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}
