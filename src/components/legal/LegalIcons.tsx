import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

function Base({ size = 22, children, ...rest }: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...rest}
    >
      {children}
    </svg>
  );
}

const IconUser = (p: IconProps) => (
  <Base {...p}>
    <circle cx="12" cy="8" r="4" />
    <path d="M4 21a8 8 0 0 1 16 0" />
  </Base>
);

const IconDoc = (p: IconProps) => (
  <Base {...p}>
    <path d="M14 3H7a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8Z" />
    <path d="M14 3v5h5" />
    <path d="M9 13h6" />
    <path d="M9 17h4" />
  </Base>
);

const IconGear = (p: IconProps) => (
  <Base {...p}>
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5v.2a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1A1.7 1.7 0 0 0 4.6 9a1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9A1.7 1.7 0 0 0 10 3.1V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1Z" />
  </Base>
);

const IconLock = (p: IconProps) => (
  <Base {...p}>
    <rect x="4" y="10" width="16" height="11" rx="2.5" />
    <path d="M8 10V7a4 4 0 0 1 8 0v3" />
    <circle cx="12" cy="15.5" r="1.2" fill="currentColor" />
  </Base>
);

const IconCookie = (p: IconProps) => (
  <Base {...p}>
    <path d="M21 12a9 9 0 1 1-9-9 4 4 0 0 0 4 4 4 4 0 0 0 4 4 1 1 0 0 1 1 1Z" />
    <circle cx="9" cy="10" r="1" fill="currentColor" />
    <circle cx="14" cy="14" r="1" fill="currentColor" />
    <circle cx="9" cy="15" r="1" fill="currentColor" />
  </Base>
);

const IconShare = (p: IconProps) => (
  <Base {...p}>
    <circle cx="18" cy="5" r="3" />
    <circle cx="6" cy="12" r="3" />
    <circle cx="18" cy="19" r="3" />
    <path d="m8.6 13.5 6.8 3.9" />
    <path d="m15.4 6.5-6.8 3.9" />
  </Base>
);

const IconShield = (p: IconProps) => (
  <Base {...p}>
    <path d="M12 3 4.5 6v6c0 4.5 3.2 7.7 7.5 9 4.3-1.3 7.5-4.5 7.5-9V6L12 3Z" />
    <path d="m9 12 2 2 4-4" />
  </Base>
);

const IconHeart = (p: IconProps) => (
  <Base {...p}>
    <path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8Z" />
  </Base>
);

const IconLink = (p: IconProps) => (
  <Base {...p}>
    <path d="M10 14a4.5 4.5 0 0 0 6.4 0l3-3a4.5 4.5 0 0 0-6.4-6.4l-1.5 1.5" />
    <path d="M14 10a4.5 4.5 0 0 0-6.4 0l-3 3a4.5 4.5 0 0 0 6.4 6.4l1.5-1.5" />
  </Base>
);

const IconRefresh = (p: IconProps) => (
  <Base {...p}>
    <path d="M3 12a9 9 0 0 1 15.5-6.3L21 8" />
    <path d="M21 3v5h-5" />
    <path d="M21 12a9 9 0 0 1-15.5 6.3L3 16" />
    <path d="M3 21v-5h5" />
  </Base>
);

const IconMail = (p: IconProps) => (
  <Base {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2.5" />
    <path d="m3.5 7.5 8.5 6 8.5-6" />
  </Base>
);

const IconBook = (p: IconProps) => (
  <Base {...p}>
    <path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v16H6.5A2.5 2.5 0 0 0 4 20.5Z" />
    <path d="M4 4.5v16" />
  </Base>
);

const IconCheck = (p: IconProps) => (
  <Base {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="m8.5 12.5 2.5 2.5 4.5-5" />
  </Base>
);

const IconLayers = (p: IconProps) => (
  <Base {...p}>
    <path d="m12 3 9 4.5-9 4.5-9-4.5L12 3Z" />
    <path d="m3 12 9 4.5 9-4.5" />
    <path d="m3 16.5 9 4.5 9-4.5" />
  </Base>
);

const IconPackage = (p: IconProps) => (
  <Base {...p}>
    <path d="m12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Z" />
    <path d="m4 7.5 8 4.5 8-4.5" />
    <path d="M12 12v9" />
  </Base>
);

const IconWallet = (p: IconProps) => (
  <Base {...p}>
    <rect x="3" y="6" width="18" height="14" rx="3" />
    <path d="M3 10h18" />
    <circle cx="16.5" cy="15" r="1.2" fill="currentColor" />
  </Base>
);

const IconUsers = (p: IconProps) => (
  <Base {...p}>
    <circle cx="9" cy="8" r="3.5" />
    <path d="M2.5 20a6.5 6.5 0 0 1 13 0" />
    <path d="M16 5.5a3 3 0 0 1 0 5.5" />
    <path d="M21.5 20a5 5 0 0 0-4-4.9" />
  </Base>
);

const IconAlert = (p: IconProps) => (
  <Base {...p}>
    <path d="M10.3 3.6 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.6a2 2 0 0 0-3.4 0Z" />
    <path d="M12 9v4" />
    <circle cx="12" cy="17" r="0.8" fill="currentColor" />
  </Base>
);

const IconCopyright = (p: IconProps) => (
  <Base {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M15 10.5A3.5 3.5 0 1 0 15 13.5" />
  </Base>
);

const IconGavel = (p: IconProps) => (
  <Base {...p}>
    <path d="m14 4 6 6" />
    <path d="m5 13 7-7" />
    <path d="m3 21 4-4" />
    <path d="M10 5 4 11" />
    <path d="M13 20 20 13" />
  </Base>
);

const IconScale = (p: IconProps) => (
  <Base {...p}>
    <path d="M12 3v18" />
    <path d="M6 21h12" />
    <path d="M4 7h16" />
    <path d="m4 7-3 6h6Z" />
    <path d="m20 7-3 6h6Z" />
  </Base>
);

// Map section id → icon
const ICON_MAP: Record<string, (p: IconProps) => JSX.Element> = {
  "who-we-are": IconUser,
  "information-we-collect": IconDoc,
  "how-we-use": IconGear,
  "data-storage": IconLock,
  cookies: IconCookie,
  "cookies-info": IconCookie,
  sharing: IconShare,
  "your-rights": IconShield,
  children: IconHeart,
  "third-party": IconLink,
  changes: IconRefresh,
  contact: IconMail,
  definitions: IconBook,
  eligibility: IconCheck,
  services: IconLayers,
  orders: IconPackage,
  payment: IconWallet,
  reseller: IconUsers,
  refunds: IconRefresh,
  prohibited: IconAlert,
  "intellectual-property": IconCopyright,
  disclaimers: IconShield,
  liability: IconScale,
  indemnification: IconShield,
  suspension: IconLock,
  governing: IconGavel,
  "what-are-cookies": IconCookie,
  "how-we-use-cookies": IconGear,
  "types-of-cookies": IconLayers,
  "cookie-lifetime": IconDoc,
  "cookie-control": IconShield,
  "cookie-advertising": IconAlert,
  "cookies-privacy": IconLock,
  "what-we-do": IconCheck,
  "not-advice": IconAlert,
  "external-content": IconLink,
  "no-guarantee": IconShield,
  "limitation": IconScale,
  "changes-to-disclaimer": IconRefresh,
};

export function LegalSectionIcon({ id, size = 22 }: { id: string; size?: number }) {
  const Icon = ICON_MAP[id] ?? IconDoc;
  return <Icon size={size} />;
}
