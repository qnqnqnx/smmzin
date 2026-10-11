import type { Metadata } from "next";
import Link from "next/link";

import BlogCard from "@/components/blog/BlogCard";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { getDictionary } from "@/content/dictionaries";
import { getSortedPosts } from "@/content/blog/registry";
import { SITE_CONFIG } from "@/content/site.config";

const dictEn = getDictionary("en");

export const metadata: Metadata = {
  title: "SMM Panel Blog — SMMZin | Guides on social media growth",
  description:
    "In-depth SMM Panel guides, platform tips and marketing insights for creators, agencies and resellers. Learn how SMM panels work, how to grow on major platforms, and how to run social media growth as a business.",
  alternates: {
    canonical: `${SITE_CONFIG.siteUrl}/blog`,
  },
  openGraph: {
    type: "website",
    url: `${SITE_CONFIG.siteUrl}/blog`,
    title: "Blog — SMMZin",
    description:
      "Guides on social media marketing, SMM panels, and platform growth.",
  },
};

export default function BlogListingPage() {
  const posts = getSortedPosts();
  const categories = Array.from(new Set(posts.map((p) => p.category)));

  return (
    <>
      <Navbar
        brand={SITE_CONFIG.brandName}
        items={dictEn.nav.items}
        notifyLabel={dictEn.common.notifyMe}
        demoLabel={dictEn.common.demo}
        themeLabelDark={dictEn.theme.toggleToDark}
        themeLabelLight={dictEn.theme.toggleToLight}
        openMenuLabel={dictEn.nav.openMenu}
        closeMenuLabel={dictEn.nav.closeMenu}
        countriesLabel={dictEn.nav.countriesLabel}
      />

      <main className="pt-[var(--nav-h)]">
        {/* ============ Hero ============ */}
        <section className="blog-hero">
          <div className="shell max-w-[860px] text-center">
            <p className="eyebrow">SMMZin.Com · SMM Panel Blog</p>
            <h1 className="blog-hero-title">Read Our Blog</h1>
            <p className="blog-hero-subtitle">
              Guides on SMM panels, social media growth and platform
              marketing. Practical insights for creators, agencies and
              resellers building their social presence.
            </p>

            {/* Keyword badges */}
            <div className="blog-keywords">
              <span className="blog-keyword">SMM Panel</span>
              <span className="blog-keyword">Social Media Marketing</span>
              <span className="blog-keyword">Instagram Growth</span>
              <span className="blog-keyword">TikTok Growth</span>
              <span className="blog-keyword">YouTube Growth</span>
            </div>

            {/* Search bar (visual placeholder — functionality later) */}
            <div className="blog-search">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                <circle cx="11" cy="11" r="7" />
                <path d="m20 20-3.5-3.5" />
              </svg>
              <input
                type="text"
                placeholder="Search articles by title, topic, or author"
                className="blog-search-input"
                readOnly
                aria-label="Search articles"
              />
            </div>

            {/* Category pills */}
            <div className="blog-categories">
              <span className="blog-category-pill blog-category-pill-active">All</span>
              {categories.map((cat) => (
                <span key={cat} className="blog-category-pill">
                  {cat}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ============ Posts grid ============ */}
        <section className="section">
          <div className="shell">
            {posts.length === 0 ? (
              <p className="text-center text-[color:var(--text-muted)]">
                No posts yet. Coming soon.
              </p>
            ) : (
              <div className="blog-grid">
                {posts.map((post) => (
                  <BlogCard key={post.slug} post={post} />
                ))}
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer dict={dictEn} locale="en" />
    </>
  );
}
