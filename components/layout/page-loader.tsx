"use client";

import { usePathname } from "next/navigation";
import * as React from "react";

export function PageLoader() {
  const pathname = usePathname();
  const [active, setActive] = React.useState(false);

  React.useEffect(() => {
    setActive(true);
    const timer = window.setTimeout(() => setActive(false), 420);
    return () => window.clearTimeout(timer);
  }, [pathname]);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[70] h-0.5 w-full overflow-hidden"
    >
      <div
        className="h-full bg-primary transition-transform duration-500 ease-[var(--ease-enterprise)]"
        style={{ transform: active ? "translateX(0)" : "translateX(-100%)" }}
      />
    </div>
  );
}
