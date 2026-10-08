export type PlatformKey =
  | "facebook"
  | "instagram"
  | "tiktok"
  | "youtube"
  | "telegram"
  | "x"
  | "threads"
  | "spotify"
  | "linkedin"
  | "pinterest"
  | "snapchat"
  | "reddit"
  | "discord"
  | "twitch"
  | "soundcloud";

export type PlatformKeyword = { title: string; description: string };

export type PlatformItem = {
  key: PlatformKey;
  name: string;
  description: string;
  longDescription: string;
  services: string[];
  keywords: PlatformKeyword[];
  accent: string;
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
  { key: "linkedin", name: "LinkedIn" },
  { key: "pinterest", name: "Pinterest" },
  { key: "snapchat", name: "Snapchat" },
  { key: "reddit", name: "Reddit" },
  { key: "discord", name: "Discord" },
  { key: "twitch", name: "Twitch" },
  { key: "soundcloud", name: "SoundCloud" },
];
