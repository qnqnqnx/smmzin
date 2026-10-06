import { marqueePlatforms } from "@/content/platforms";
import { PlatformIcon } from "./PlatformIcons";

export default function PlatformMarquee({ heading }: { heading: string }) {
  const items = [...marqueePlatforms, ...marqueePlatforms];

  return (
    <section className="section border-y border-[color:var(--border)] !py-10 sm:!py-12" aria-label={heading}>
      <p className="eyebrow text-center">{heading}</p>

      <div className="marquee mt-6">
        <div className="marquee-track">
          {items.map((platform, index) => (
            <div
              key={`${platform.key}-${index}`}
              className="flex shrink-0 items-center gap-2.5 px-6 text-[color:var(--text-muted)] sm:px-8"
            >
              <PlatformIcon name={platform.key} size={20} />
              <span className="whitespace-nowrap text-[14px] font-medium tracking-[-0.01em]">
                {platform.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
