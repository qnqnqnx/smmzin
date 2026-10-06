"use client";

import { useState, type FormEvent } from "react";
import type { Dictionary } from "@/content/dictionaries";
import { SITE_CONFIG } from "@/content/site.config";
import { ArrowRight, Check } from "./Icons";

// ------------------------------------------------------------
// Gửi email về Formspree (hoặc bất kỳ endpoint nào bạn dán vào
// SITE_CONFIG.notifyEndpoint).
//
// Nếu notifyEndpoint trống → chạy chế độ demo (chờ 800ms rồi
// báo thành công, không lưu thật). Dùng khi đang thử giao diện.
// ------------------------------------------------------------
async function submitEmail(email: string, locale: string): Promise<void> {
  const endpoint = SITE_CONFIG.notifyEndpoint;

  // Chế độ demo — chưa cấu hình endpoint
  if (!endpoint) {
    await new Promise((resolve) => setTimeout(resolve, 800));
    return;
  }

  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify({
      email,
      locale,
      source: "smmzin-landing",
      submittedAt: new Date().toISOString(),
    }),
  });

  if (!response.ok) {
    throw new Error(`Formspree returned ${response.status}`);
  }
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export default function NotifyMe({ dict, locale }: { dict: Dictionary; locale: string }) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;

    const value = email.trim();
    if (!value) {
      setError(dict.notify.errorRequired);
      return;
    }
    if (!EMAIL_PATTERN.test(value)) {
      setError(dict.notify.errorInvalid);
      return;
    }

    setError(null);
    setStatus("sending");
    try {
      await submitEmail(value, locale);
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("idle");
      setError(dict.notify.errorInvalid);
    }
  }

  return (
    <section id="notify" className="section">
      <div className="shell">
        <div className="glass mx-auto max-w-[720px] rounded-[26px] px-6 py-10 text-center sm:px-10 sm:py-12">
          <p className="eyebrow">{dict.notify.eyebrow}</p>
          <h2 className="mt-3 text-[28px] font-semibold leading-[1.15] tracking-[-0.03em] sm:text-[36px]">
            {dict.notify.title}
          </h2>
          <p className="mx-auto mt-4 max-w-[52ch] text-[15px] leading-relaxed text-[color:var(--text-muted)]">
            {dict.notify.description}
          </p>

          {status === "success" ? (
            <div
              role="status"
              className="mx-auto mt-8 flex max-w-[440px] items-center justify-center gap-2.5 rounded-2xl border border-[color:var(--border-strong)] bg-white/[0.04] px-5 py-4 text-[14px] text-[color:var(--text)]"
            >
              <Check size={17} className="shrink-0 text-[color:var(--accent)]" />
              {dict.notify.success}
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="mx-auto mt-8 max-w-[480px]">
              <label htmlFor="notify-email" className="sr-only">
                {dict.notify.label}
              </label>

              <div className="flex flex-col gap-2.5 sm:flex-row">
                <input
                  id="notify-email"
                  name="email"
                  type="email"
                  inputMode="email"
                  autoComplete="email"
                  placeholder={dict.notify.placeholder}
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                    if (error) setError(null);
                  }}
                  aria-invalid={Boolean(error)}
                  aria-describedby={error ? "notify-error" : undefined}
                  disabled={status === "sending"}
                  className={[
                    "h-12 w-full rounded-full border bg-white/[0.03] px-5 text-[14.5px] text-[color:var(--text)] outline-none transition-colors placeholder:text-[color:var(--text-muted)] disabled:opacity-60",
                    error
                      ? "border-[#c98b8b]"
                      : "border-[color:var(--border-strong)] focus:border-[color:var(--accent)]",
                  ].join(" ")}
                />

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="btn btn-primary !h-12 shrink-0 disabled:opacity-70"
                >
                  {status === "sending" ? dict.notify.sending : dict.notify.button}
                  {status !== "sending" && <ArrowRight size={17} />}
                </button>
              </div>

              {error && (
                <p id="notify-error" role="alert" className="mt-3 text-left text-[13px] text-[#e0a3a3]">
                  {error}
                </p>
              )}

              <p className="mt-4 text-[12.5px] text-[color:var(--text-muted)]">{dict.notify.privacy}</p>
            </form>
          )}

          <p className="mt-6 text-[12px] text-[color:var(--text-muted)] opacity-70">
            {SITE_CONFIG.contact.email}
          </p>
        </div>
      </div>
    </section>
  );
}
