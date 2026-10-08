"use client";

import { BdTigerArt } from "@/components/bangladesh/BdTigerArt";

export function BangladeshVisual({ size = 440 }: { size?: number }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <BdTigerArt size={size} />
    </div>
  );
}
