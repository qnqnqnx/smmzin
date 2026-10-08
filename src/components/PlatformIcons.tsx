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
  LinkedInMark,
  PinterestMark,
  SnapchatMark,
  RedditMark,
  DiscordMark,
  TwitchMark,
  SoundCloudMark,
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
  linkedin: LinkedInMark,
  pinterest: PinterestMark,
  snapchat: SnapchatMark,
  reddit: RedditMark,
  discord: DiscordMark,
  twitch: TwitchMark,
  soundcloud: SoundCloudMark,
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
