export type CountdownMode = "daily" | "fixed";

export type CountdownConfig = {
  mode: CountdownMode;
  timezone: string;
  launchDate: string;
};

const DAY_MS = 86_400_000;

export function getTimezoneOffsetMs(timeZone: string, date: Date): number {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone,
    hour12: false,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  }).formatToParts(date);

  const map: Record<string, string> = {};
  for (const part of parts) {
    if (part.type !== "literal") map[part.type] = part.value;
  }

  const asUTC = Date.UTC(
    Number(map.year),
    Number(map.month) - 1,
    Number(map.day),
    Number(map.hour) % 24,
    Number(map.minute),
    Number(map.second),
  );

  return asUTC - Math.floor(date.getTime() / 1000) * 1000;
}

export function getRemainingMs(config: CountdownConfig, now: Date = new Date()): number {
  if (config.mode === "fixed") {
    return Math.max(0, new Date(config.launchDate).getTime() - now.getTime());
  }

  const offset = getTimezoneOffsetMs(config.timezone, now);
  const wallClock = now.getTime() + offset;
  const msIntoDay = ((wallClock % DAY_MS) + DAY_MS) % DAY_MS;
  return DAY_MS - msIntoDay;
}

export type RemainingParts = { hours: number; minutes: number; seconds: number };

export function splitRemaining(ms: number): RemainingParts {
  const totalSeconds = Math.max(0, Math.floor(ms / 1000));
  return {
    hours: Math.floor(totalSeconds / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60,
  };
}

export function pad(value: number): string {
  return String(value).padStart(2, "0");
}
