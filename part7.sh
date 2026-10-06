#!/usr/bin/env bash
set -euo pipefail

cat > src/components/Icons.tsx << 'EOF'
import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

function Line({ size = 20, children, ...rest }: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...rest}
    >
      {children}
    </svg>
  );
}

export const ArrowRight = (p: IconProps) => (
  <Line {...p}>
    <path d="M5 12h14" />
    <path d="m13 6 6 6-6 6" />
  </Line>
);

export const ArrowUpRight = (p: IconProps) => (
  <Line {...p}>
    <path d="M7 17 17 7" />
    <path d="M8 7h9v9" />
  </Line>
);

export const Menu = (p: IconProps) => (
  <Line {...p}>
    <path d="M4 7h16" />
    <path d="M4 12h16" />
    <path d="M4 17h16" />
  </Line>
);

export const Close = (p: IconProps) => (
  <Line {...p}>
    <path d="m6 6 12 12" />
    <path d="M18 6 6 18" />
  </Line>
);

export const ChevronDown = (p: IconProps) => (
  <Line {...p}>
    <path d="m6 9 6 6 6-6" />
  </Line>
);

export const Check = (p: IconProps) => (
  <Line {...p}>
    <path d="m4.5 12.5 5 5L20 6.5" />
  </Line>
);

export const Layers = (p: IconProps) => (
  <Line {...p}>
    <path d="m12 3 9 4.5-9 4.5-9-4.5L12 3Z" />
    <path d="m3 12 9 4.5 9-4.5" />
    <path d="m3 16.5 9 4.5 9-4.5" />
  </Line>
);

export const Workflow = (p: IconProps) => (
  <Line {...p}>
    <rect x="3" y="3" width="7" height="7" rx="2" />
    <rect x="14" y="14" width="7" height="7" rx="2" />
    <path d="M10 6.5h4.5A2.5 2.5 0 0 1 17 9v5" />
  </Line>
);

export const Activity = (p: IconProps) => (
  <Line {...p}>
    <path d="M3 12h4l2.5-7 4 14L16 12h5" />
  </Line>
);

export const TrendingUp = (p: IconProps) => (
  <Line {...p}>
    <path d="m3 17 6-6 4 4 8-8" />
    <path d="M15 7h6v6" />
  </Line>
);

export const LayoutGrid = (p: IconProps) => (
  <Line {...p}>
    <rect x="3" y="3" width="7.5" height="7.5" rx="2" />
    <rect x="13.5" y="3" width="7.5" height="7.5" rx="2" />
    <rect x="3" y="13.5" width="7.5" height="7.5" rx="2" />
    <rect x="13.5" y="13.5" width="7.5" height="7.5" rx="2" />
  </Line>
);

export const Package = (p: IconProps) => (
  <Line {...p}>
    <path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z" />
    <path d="m4 7.5 8 4.5 8-4.5" />
    <path d="M12 12v9" />
  </Line>
);

export const Code = (p: IconProps) => (
  <Line {...p}>
    <path d="m8 8-4 4 4 4" />
    <path d="m16 8 4 4-4 4" />
    <path d="m13.5 5-3 14" />
  </Line>
);

export const Users = (p: IconProps) => (
  <Line {...p}>
    <path d="M16 20v-1.5a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4V20" />
    <circle cx="9.5" cy="7" r="3.5" />
    <path d="M21 20v-1.5a4 4 0 0 0-3-3.87" />
    <path d="M16.5 3.6a4 4 0 0 1 0 7.75" />
  </Line>
);

export const UserRound = (p: IconProps) => (
  <Line {...p}>
    <circle cx="12" cy="8" r="4" />
    <path d="M4 20a8 8 0 0 1 16 0" />
  </Line>
);

export const Briefcase = (p: IconProps) => (
  <Line {...p}>
    <rect x="3" y="7.5" width="18" height="12.5" rx="2" />
    <path d="M8.5 7.5V6a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v1.5" />
    <path d="M3 13h18" />
  </Line>
);

export const Store = (p: IconProps) => (
  <Line {...p}>
    <path d="M3.5 9.5 5 4h14l1.5 5.5" />
    <path d="M3.5 9.5v10h17v-10" />
    <path d="M3.5 9.5h17" />
    <path d="M9.5 19.5v-5h5v5" />
  </Line>
);

export const Building = (p: IconProps) => (
  <Line {...p}>
    <path d="M4 21V5a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v16" />
    <path d="M15 21V10h3a2 2 0 0 1 2 2v9" />
    <path d="M3 21h18" />
    <path d="M8 7h3" />
    <path d="M8 11h3" />
    <path d="M8 15h3" />
  </Line>
);

export const Globe = (p: IconProps) => (
  <Line {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18" />
    <path d="M12 3a15 15 0 0 1 0 18 15 15 0 0 1 0-18Z" />
  </Line>
);

export const Mail = (p: IconProps) => (
  <Line {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2.5" />
    <path d="m3.5 7.5 8.5 6 8.5-6" />
  </Line>
);

export const ShieldCheck = (p: IconProps) => (
  <Line {...p}>
    <path d="M12 3 4.5 6v6c0 4.5 3.2 7.7 7.5 9 4.3-1.3 7.5-4.5 7.5-9V6L12 3Z" />
    <path d="m9 12 2 2 4-4" />
  </Line>
);

type BrandProps = SVGProps<SVGSVGElement> & { size?: number };

export function FacebookMark({ size = 22, ...rest }: BrandProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...rest}>
      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.51 1.49-3.9 3.77-3.9 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.78-1.63 1.57v1.88h2.78l-.44 2.91h-2.34V22c4.78-.76 8.44-4.92 8.44-9.94Z" />
    </svg>
  );
}

export function InstagramMark({ size = 22, ...rest }: BrandProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true" {...rest}>
      <rect x="2.7" y="2.7" width="18.6" height="18.6" rx="5.4" stroke="currentColor" strokeWidth={1.8} />
      <circle cx="12" cy="12" r="4.3" stroke="currentColor" strokeWidth={1.8} />
      <circle cx="17.4" cy="6.6" r="1.2" fill="currentColor" />
    </svg>
  );
}

export function TikTokMark({ size = 22, ...rest }: BrandProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...rest}>
      <path d="M14.2 2.5h2.9c.3 1.75 1.42 3.05 3.15 3.45v2.9c-1.15-.03-2.24-.4-3.15-1.05v6.35a5.72 5.72 0 1 1-5.72-5.72c.3 0 .6.03.9.08v3.02a2.7 2.7 0 1 0 1.92 2.6V2.5Z" />
    </svg>
  );
}

export function YouTubeMark({ size = 22, ...rest }: BrandProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true" {...rest}>
      <rect x="2" y="4.9" width="20" height="14.2" rx="4.2" stroke="currentColor" strokeWidth={1.8} />
      <path d="m10.2 15.2 5-3.2-5-3.2v6.4Z" fill="currentColor" />
    </svg>
  );
}

export function TelegramMark({ size = 22, ...rest }: BrandProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...rest}>
      <path d="M21.94 4.3 18.9 19.1c-.23 1.02-.84 1.27-1.7.79l-4.7-3.47-2.27 2.19c-.25.25-.46.46-.94.46l.34-4.78 8.7-7.86c.38-.34-.08-.53-.59-.19L6.98 13.1 2.34 11.65c-1-.32-1.02-1 .21-1.49L20.5 3.1c.84-.31 1.57.2 1.44 1.2Z" />
    </svg>
  );
}

export function XMark({ size = 22, ...rest }: BrandProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...rest}>
      <path d="M17.53 3h3.02l-6.6 7.54L21.75 21h-6.06l-4.75-6.2L5.5 21H2.47l7.06-8.07L2.25 3h6.21l4.29 5.67L17.53 3Zm-1.06 16.2h1.67L7.6 4.72H5.81L16.47 19.2Z" />
    </svg>
  );
}

export function ThreadsMark({ size = 22, ...rest }: BrandProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true" {...rest}>
      <path d="M12.3 21.6c-4.9 0-8.3-3.4-8.3-9.6s3.4-9.6 8.3-9.6c4.5 0 7.4 2.6 7.9 7.1" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" />
      <path d="M15.4 11.4c-.8-.6-1.9-.95-3-.95-2.2 0-3.7 1.2-3.7 3 0 1.75 1.45 2.95 3.5 2.95 2.6 0 4.2-1.85 4.2-4.9 0-3.55-1.95-5.8-5-5.8" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" />
    </svg>
  );
}

export function SpotifyMark({ size = 22, ...rest }: BrandProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true" {...rest}>
      <circle cx="12" cy="12" r="9.2" stroke="currentColor" strokeWidth={1.7} />
      <path d="M7.6 9.3c3-.9 6.2-.6 8.8 1" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" />
      <path d="M8.4 12.4c2.4-.7 5-.5 7 .8" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" />
      <path d="M9.1 15.3c1.8-.5 3.6-.3 5.2.6" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" />
    </svg>
  );
}
EOF

cat > src/components/PlatformIcons.tsx << 'EOF'
import type { PlatformKey } from "@/content/platforms";
import {
  FacebookMark,
  InstagramMark,
  TikTokMark,
  YouTubeMark,
  TelegramMark,
  XMark,
  ThreadsMark,
  SpotifyMark,
} from "./Icons";

const MAP = {
  facebook: FacebookMark,
  instagram: InstagramMark,
  tiktok: TikTokMark,
  youtube: YouTubeMark,
  telegram: TelegramMark,
  x: XMark,
  threads: ThreadsMark,
  spotify: SpotifyMark,
} as const;

export function PlatformIcon({
  name,
  size = 20,
  className,
}: {
  name: PlatformKey;
  size?: number;
  className?: string;
}) {
  const Component = MAP[name];
  return <Component size={size} className={className} />;
}
EOF

cat > src/components/Reveal.tsx << 'EOF'
"use client";

import { useEffect, useRef, type ReactNode } from "react";

let sharedObserver: IntersectionObserver | null = null;

function getObserver(): IntersectionObserver | null {
  if (typeof window === "undefined" || !("IntersectionObserver" in window)) return null;
  if (!sharedObserver) {
    sharedObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            sharedObserver?.unobserve(entry.target);
          }
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 },
    );
  }
  return sharedObserver;
}

export default function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = getObserver();
    if (!observer) {
      element.classList.add("is-visible");
      return;
    }

    observer.observe(element);
    const failsafe = window.setTimeout(() => element.classList.add("is-visible"), 3000);

    return () => {
      window.clearTimeout(failsafe);
      observer.unobserve(element);
    };
  }, []);

  return (
    <div ref={ref} className={`reveal ${className}`} style={delay ? { transitionDelay: `${delay}ms` } : undefined}>
      {children}
    </div>
  );
}
EOF

echo "part7 done"