"use client";

import { gsap } from "gsap";
import * as React from "react";

export function DataConstellation() {
  const ref = React.useRef<SVGSVGElement>(null);

  React.useLayoutEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      gsap.to("[data-flow]", {
        strokeDashoffset: -120,
        duration: 4.6,
        repeat: -1,
        ease: "none",
        stagger: 0.2
      });
      gsap.to("[data-node]", {
        scale: 1.06,
        transformOrigin: "center",
        duration: 2.8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.16
      });
    }, ref);

    return () => ctx.revert();
  }, []);

  return (
    <svg
      ref={ref}
      viewBox="0 0 760 560"
      className="h-full w-full"
      role="img"
      aria-label="Enterprise data, AI, cloud, and analytics platform visualization"
    >
      <defs>
        <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="18" stdDeviation="18" floodColor="#1389C6" floodOpacity="0.12" />
        </filter>
      </defs>
      <rect x="40" y="44" width="680" height="472" rx="18" fill="var(--card)" filter="url(#softShadow)" />
      <rect x="66" y="76" width="628" height="64" rx="10" fill="var(--muted)" />
      <circle cx="98" cy="108" r="7" fill="#F75A48" />
      <circle cx="121" cy="108" r="7" fill="#FBB10E" />
      <circle cx="144" cy="108" r="7" fill="#1ABCD0" />
      <rect x="486" y="96" width="164" height="20" rx="6" fill="#1389C6" opacity="0.18" />

      <g fill="none" stroke="#1389C6" strokeWidth="2" strokeDasharray="8 12" opacity="0.58">
        <path data-flow d="M164 228 C248 190 285 260 365 250" />
        <path data-flow d="M160 352 C240 350 285 287 365 284" />
        <path data-flow d="M396 268 C498 240 526 198 604 214" />
        <path data-flow d="M408 300 C505 350 538 384 616 362" />
      </g>

      <g data-node>
        <rect x="92" y="190" width="146" height="80" rx="12" fill="#F6F8FB" stroke="#DFE5EC" />
        <text x="118" y="224" fill="#1A1A1A" fontSize="18" fontWeight="700">
          Systems
        </text>
        <text x="118" y="249" fill="#5C6673" fontSize="13">
          ERP · CRM · Apps
        </text>
      </g>
      <g data-node>
        <rect x="88" y="314" width="156" height="82" rx="12" fill="#F6F8FB" stroke="#DFE5EC" />
        <text x="116" y="350" fill="#1A1A1A" fontSize="18" fontWeight="700">
          Workflows
        </text>
        <text x="116" y="375" fill="#5C6673" fontSize="13">
          approvals · events
        </text>
      </g>
      <g data-node>
        <rect x="318" y="218" width="162" height="112" rx="16" fill="#1389C6" />
        <text x="354" y="264" fill="white" fontSize="20" fontWeight="800">
          Trusted
        </text>
        <text x="350" y="292" fill="white" fontSize="20" fontWeight="800">
          Data Core
        </text>
      </g>
      <g data-node>
        <rect x="544" y="176" width="138" height="82" rx="12" fill="#EAF9FB" stroke="#1ABCD0" />
        <text x="584" y="212" fill="#0A5964" fontSize="18" fontWeight="700">
          AI
        </text>
        <text x="578" y="237" fill="#28727B" fontSize="13">
          agents · LLMs
        </text>
      </g>
      <g data-node>
        <rect x="548" y="324" width="142" height="86" rx="12" fill="#FFF4E8" stroke="#FA740D" />
        <text x="577" y="361" fill="#8E3E05" fontSize="18" fontWeight="700">
          Analytics
        </text>
        <text x="581" y="386" fill="#9C5519" fontSize="13">
          BI · forecasts
        </text>
      </g>
      <g opacity="0.8">
        <rect x="108" y="442" width="544" height="12" rx="6" fill="#DFE5EC" />
        <rect x="108" y="442" width="218" height="12" rx="6" fill="#1ABCD0" />
        <rect x="108" y="466" width="544" height="12" rx="6" fill="#DFE5EC" />
        <rect x="108" y="466" width="384" height="12" rx="6" fill="#1389C6" />
      </g>
    </svg>
  );
}
