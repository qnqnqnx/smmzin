"use client";

import { CnPandaArt } from "@/components/china/CnPandaArt";

/**
 * Wrapper cho CnPandaArt — dùng lại SVG component cũ.
 * Animation `cn-panda-bounce` + `cn-bamboo-sway` đã có sẵn trong CSS.
 */
export function ChinaVisual({ size = 420 }: { size?: number }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <CnPandaArt size={size} />
    </div>
  );
}
