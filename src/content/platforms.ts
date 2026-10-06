export type PlatformKey =
  | "facebook"
  | "instagram"
  | "tiktok"
  | "youtube"
  | "telegram"
  | "x"
  | "threads"
  | "spotify";

export type PlatformItem = {
  key: PlatformKey;
  name: string;
  description: string;
  services: string[];
};

export const marqueePlatforms: { key: PlatformKey; name: string }[] = [
  { key: "facebook", name: "Facebook" },
  { key: "instagram", name: "Instagram" },
  { key: "tiktok", name: "TikTok" },
  { key: "youtube", name: "YouTube" },
  { key: "telegram", name: "Telegram" },
  { key: "x", name: "X" },
  { key: "threads", name: "Threads" },
  { key: "spotify", name: "Spotify" },
];
