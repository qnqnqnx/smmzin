import Link from "next/link";
import { ArrowRight } from "@/components/Icons";

export default function NotFound() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6">
      <div className="text-center">
        <p className="font-mono text-[12px] tracking-[0.2em] text-[color:var(--accent)]">404</p>
        <h1 className="mt-4 text-[28px] font-semibold tracking-[-0.03em] sm:text-[36px]">Page not found</h1>
        <p className="mt-3 text-[15px] text-[color:var(--text-muted)]">The page you are looking for does not exist.</p>
        <Link href="/vi" className="btn btn-ghost mt-8">
          <ArrowRight size={16} className="rotate-180" />
          Back to home
        </Link>
      </div>
    </main>
  );
}
