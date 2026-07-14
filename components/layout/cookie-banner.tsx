"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";

const storageKey = "ontologix-cookie-consent";

export function CookieBanner() {
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    setVisible(window.localStorage.getItem(storageKey) !== "accepted");
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 mx-auto max-w-3xl rounded-lg border border-border bg-card p-4 shadow-[var(--shadow-enterprise)] md:left-auto md:right-6 md:max-w-md">
      <p className="text-sm leading-6 text-muted-foreground">
        Ontologix uses essential cookies and privacy-conscious analytics to improve site quality and
        understand content performance.
      </p>
      <div className="mt-4 flex justify-end gap-2">
        <Button
          type="button"
          variant="secondary"
          size="sm"
          onClick={() => {
            window.localStorage.setItem(storageKey, "accepted");
            setVisible(false);
          }}
        >
          Accept
        </Button>
      </div>
    </div>
  );
}
