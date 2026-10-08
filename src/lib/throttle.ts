/**
 * Gộp nhiều lần gọi hàm liên tiếp thành 1 lần mỗi animation frame.
 * Dùng cho mousemove/scroll để tránh update 60+ lần/giây.
 */
export function rafThrottle<T extends (...args: any[]) => void>(fn: T): T {
  let rafId: number | null = null;
  let lastArgs: any[] | null = null;

  return ((...args: any[]) => {
    lastArgs = args;
    if (rafId !== null) return;
    rafId = requestAnimationFrame(() => {
      rafId = null;
      if (lastArgs) fn(...lastArgs);
    });
  }) as T;
}
