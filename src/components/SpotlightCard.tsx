"use client";

import { useMemo, useRef, type ReactNode, type MouseEvent } from "react";
import { rafThrottle } from "@/lib/throttle";

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

  const handleMouseMove = useMemo(
    () =>
      rafThrottle((element: HTMLElement, clientX: number, clientY: number) => {
        const rect = element.getBoundingClientRect();
        element.style.setProperty("--mouse-x", `${clientX - rect.left}px`);
        element.style.setProperty("--mouse-y", `${clientY - rect.top}px`);
      }),
    [],
  );

  function onMouseMove(event: MouseEvent<HTMLElement>) {
    const target = event.currentTarget;
    handleMouseMove(target, event.clientX, event.clientY);
  }

  return (
    <Tag
      // @ts-expect-error — ref type phụ thuộc vào Tag động
      ref={ref}
      onMouseMove={onMouseMove}
      className={["card spotlight", lift ? "card-lift" : "", className].filter(Boolean).join(" ")}
    >
      {children}
    </Tag>
  );
}
