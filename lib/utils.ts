import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function absoluteUrl(path = "") {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.ontologixsoftware.com";
  return `${siteUrl}${path.startsWith("/") ? path : `/${path}`}`;
}

export function formatDate(date: string) {
  return new Intl.DateTimeFormat("en", {
    month: "long",
    day: "numeric",
    year: "numeric"
  }).format(new Date(date));
}
