export const designSystem = {
  colors: [
    { name: "Primary Blue", token: "brand-blue", hex: "#1389C6" },
    { name: "Secondary Cyan", token: "brand-cyan", hex: "#1ABCD0" },
    { name: "Accent Orange", token: "brand-orange", hex: "#FA740D" },
    { name: "Accent Yellow", token: "brand-yellow", hex: "#FBB10E" },
    { name: "Accent Pink", token: "brand-pink", hex: "#F71F71" },
    { name: "Accent Coral", token: "brand-coral", hex: "#F75A48" },
    { name: "Dark Text", token: "brand-ink", hex: "#1A1A1A" },
    { name: "Cloud Surface", token: "brand-cloud", hex: "#F6F8FB" }
  ],
  typography: [
    { name: "Display", className: "text-5xl md:text-7xl" },
    { name: "Hero", className: "text-4xl md:text-6xl" },
    { name: "Section", className: "text-3xl md:text-5xl" },
    { name: "Subsection", className: "text-2xl md:text-3xl" },
    { name: "Body", className: "text-base md:text-lg" },
    { name: "Caption", className: "text-sm" }
  ],
  radii: ["0.25rem", "0.375rem", "0.5rem", "0.75rem", "1rem"],
  spacing: ["0.25rem", "0.5rem", "0.75rem", "1rem", "1.5rem", "2rem", "3rem", "4rem"],
  motion: {
    ease: "cubic-bezier(0.16, 1, 0.3, 1)",
    reveal: "0.7s",
    hover: "180ms",
    page: "420ms"
  }
} as const;
