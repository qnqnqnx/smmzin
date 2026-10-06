import type { Dictionary } from "@/content/dictionaries";
import Countdown from "./Countdown";
import { ArrowRight } from "./Icons";

export default function Hero({ dict, initialMs }: { dict: Dictionary; initialMs: number }) {
  return (
    <section id="home" className="relative overflow-hidden pt-[calc(var(--nav-h)+48px)] pb-14 sm:pb-20">
      <div className="pointer-events-none absolute inset-0 -z-10 grid-overlay" aria-hidden="true" />

      <div className="shell">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-16">
          {/* ---------------- Left: copy ---------------- */}
          <div>
            <h1 className="text-[38px] font-semibold leading-[1.05] tracking-[-0.035em] sm:text-[52px] lg:text-[60px]">
              {dict.hero.title}
            </h1>

            <p className="mt-5 max-w-[54ch] text-[15.5px] leading-relaxed text-[color:var(--text-muted)] sm:text-[17px]">
              {dict.hero.description}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#notify" className="btn btn-primary">
                {dict.common.notifyMe}
                <ArrowRight size={17} />
              </a>
              <a href="#about" className="btn btn-ghost">
                {dict.common.explore}
              </a>
            </div>
          </div>

          {/* ---------------- Right: orb + countdown ---------------- */}
          <div className="relative mx-auto w-full max-w-[480px]">
            <div className="relative aspect-square">
              <div className="ring inset-[-14%]" />
              <div className="ring inset-[-4%]" />

              <div className="orb float-slow">
                <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6 text-center">
                  {/* Badge SẮP RA MẮT */}
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.22em] text-white backdrop-blur-sm">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#8ed6ad] shadow-[0_0_0_3px_rgba(142,214,173,0.25)]" />
                    {dict.hero.badge}
                  </span>

                  {/* Đồng hồ */}
                  <Countdown
                    variant="orb"
                    initialMs={initialMs}
                    labels={{
                      label: dict.hero.countdownLabel,
                      hours: dict.hero.hours,
                      minutes: dict.hero.minutes,
                      seconds: dict.hero.seconds,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
