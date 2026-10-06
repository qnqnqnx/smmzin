"use client";

import { useRef, type ReactNode, type MouseEvent } from "react";

/**
 * Card có hiệu ứng spotlight chạy theo con trỏ chuột.
 * Dùng thay cho <article className="card"> khi muốn hiệu ứng.
 *
 * Cách dùng:
 *   <SpotlightCard className="p-6">
 *     ...nội dung...
 *   </SpotlightCard>
 */
export default function SpotlightCard({
  children,
  className = "",
  lift = true,
  as: Tag = "article",
}: {
  children: ReactNode;
  className?: string;
  lift?: boolean;
  as?: "article" | "div" | "li" | "section";
}) {
  const ref = useRef<HTMLElement>(null);

  function handleMouseMove(event: MouseEvent<HTMLElement>) {
    const element = ref.current;
    if (!element) return;
    const rect = element.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    element.style.setProperty("--mouse-x", `${x}px`);
    element.style.setProperty("--mouse-y", `${y}px`);
  }

  return (
    <Tag
      // @ts-expect-error — ref type phụ thuộc vào Tag động
      ref={ref}
      onMouseMove={handleMouseMove}
      className={["card spotlight", lift ? "card-lift" : "", className].filter(Boolean).join(" ")}
    >
      {children}
    </Tag>
  );
}
