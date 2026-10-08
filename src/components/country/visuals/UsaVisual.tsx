"use client";

import { UsEagleArt } from "@/components/usa/UsEagleArt";

export function UsaVisual({ size = 440 }: { size?: number }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <UsEagleArt size={size} />
    </div>
  );
}
