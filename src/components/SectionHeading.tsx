export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  maxWidth = "max-w-[880px]",
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  maxWidth?: string;
}) {
  const alignment = align === "center" ? "mx-auto text-center items-center" : "";
  return (
    <div className={`flex flex-col ${alignment}`}>
      {eyebrow && (
        <p className="eyebrow whitespace-nowrap">{eyebrow}</p>
      )}
      <h2
        className={`mt-3 text-[28px] font-semibold leading-[1.15] tracking-[-0.03em] sm:text-[36px] lg:text-[42px] ${maxWidth}`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-[15.5px] leading-relaxed text-[color:var(--text-muted)] ${maxWidth}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
