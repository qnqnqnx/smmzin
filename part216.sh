git add .
git commit -m "Security: upgrade Next.js 14.2.5 → 14.2.35

Fixes 20+ CVE including middleware redirect SSRF, cache poisoning,
and PostCSS XSS. Tailwind dev warnings remain (transitive devDeps,
no production impact)."
git push