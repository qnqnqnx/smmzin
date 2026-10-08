"use client";

import { VnDrumPattern } from "@/components/vietnam/VnDrumPattern";

/**
 * Wrapper cho VnDrumPattern — dùng lại component cũ.
 * Animation class `vn-drum-glow` được áp dụng qua CSS (đã có sẵn).
 */
export function VietnamVisual({ size = 520 }: { size?: number }) {
  return (
    <div
      className="vn-drum-glow"
      style={{
        animation: "smmzin-rotate 120s linear infinite",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <VnDrumPattern size={size} />
    </div>
  );
}
