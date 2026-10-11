import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import BlogCard from "@/components/blog/BlogCard";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { getDictionary } from "@/content/dictionaries";
import {
  getAllSlugs,
  getPostBySlug,
  getRelatedPosts,
  formatDate,
} from "@/content/blog/registry";
import { SITE_CONFIG } from "@/content/site.config";

const dictEn = getDictionary("en");

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) return {};

  const url = `${SITE_CONFIG.siteUrl}/blog/${post.slug}`;

  return {
    metadataBase: new URL(SITE_CONFIG.siteUrl),
    title: `${post.title} | SMMZin Blog`,
    description: post.excerpt,
    keywords: [
      "SMM Panel",
      "SMM panel guide",
      post.category.toLowerCase(),
      ...post.title.toLowerCase().split(" ").slice(0, 6),
    ],
    alternates: { canonical: url },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    openGraph: {
      type: "article",
      url,
      title: post.title,
      description: post.excerpt,
      siteName: SITE_CONFIG.brandName,
      publishedTime: post.publishedAt,
      authors: [post.author.name],
      images: [
        {
          url: `${SITE_CONFIG.siteUrl}/api/og?locale=en`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [`${SITE_CONFIG.siteUrl}/api/og?locale=en`],
    },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  const related = getRelatedPosts(post);
  const Content = post.Content;
  const toc = post.toc ?? [];

  const pageUrl = `${SITE_CONFIG.siteUrl}/blog/${post.slug}`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${pageUrl}/#article`,
        headline: post.title,
        description: post.excerpt,
        datePublished: post.publishedAt,
        dateModified: post.publishedAt,
        author: { "@type": "Organization", name: post.author.name },
        publisher: {
          "@type": "Organization",
          name: SITE_CONFIG.brandName,
          logo: {
            "@type": "ImageObject",
            url: `${SITE_CONFIG.siteUrl}/favicon.svg`,
          },
        },
        mainEntityOfPage: { "@type": "WebPage", "@id": pageUrl },
        inLanguage: "en",
        articleSection: post.category,
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}/#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_CONFIG.siteUrl },
          { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_CONFIG.siteUrl}/blog` },
          { "@type": "ListItem", position: 3, name: post.title, item: pageUrl },
        ],
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

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
        {/* ============ Breadcrumb ============ */}
        <div className="shell pt-6">
          <nav className="blog-breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            <Link href="/blog">Blog</Link>
            <span>/</span>
            <span className="blog-breadcrumb-current">{post.title}</span>
          </nav>
        </div>

        {/* ============ 2-column layout ============ */}
        <div className="blog-post-layout shell">
          {/* -------- SIDEBAR (desktop only, sticky) -------- */}
          <aside className="blog-post-sidebar">
            <div className="blog-post-sidebar-inner">
              {/* TOC */}
              {toc.length > 0 && (
                <div className="blog-toc">
                  <p className="blog-toc-title">In this article</p>
                  <ol className="blog-toc-list">
                    {toc.map((item, i) => (
                      <li
                        key={item.id}
                        className={`blog-toc-item blog-toc-item-level-${item.level}`}
                      >
                        <a href={`#${item.id}`} className="blog-toc-link">
                          <span className="blog-toc-num">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <span>{item.label}</span>
                        </a>
                      </li>
                    ))}
                  </ol>
                </div>
              )}

              {/* Author card */}
              <div className="blog-author-card">
                <span className="blog-author-card-avatar" aria-hidden="true">
                  {post.author.name.charAt(0)}
                </span>
                <div className="blog-author-card-name">{post.author.name}</div>
                <div className="blog-author-card-role">{post.author.role}</div>
                <p className="blog-author-card-bio">
                  Editorial team covering SMM panels, social media growth
                  and platform trends.
                </p>
              </div>

              {/* Share */}
              <div className="blog-share">
                <p className="blog-share-title">Share</p>
                <div className="blog-share-buttons">
                  <a
                    href={`https://x.com/intent/tweet?url=${encodeURIComponent(pageUrl)}&text=${encodeURIComponent(post.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Share on X"
                    className="blog-share-btn"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M17.53 3h3.02l-6.6 7.54L21.75 21h-6.06l-4.75-6.2L5.5 21H2.47l7.06-8.07L2.25 3h6.21l4.29 5.67L17.53 3Zm-1.06 16.2h1.67L7.6 4.72H5.81L16.47 19.2Z" />
                    </svg>
                  </a>
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Share on Facebook"
                    className="blog-share-btn"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M22 12.06C22 6.5 17.52 2 12 2S2 6.5 2 12.06c0 5.02 3.66 9.18 8.44 9.94v-7.03H7.9v-2.91h2.54V9.85c0-2.51 1.49-3.9 3.77-3.9 1.09 0 2.24.2 2.24.2v2.46h-1.26c-1.24 0-1.63.78-1.63 1.57v1.88h2.78l-.44 2.91h-2.34V22c4.78-.76 8.44-4.92 8.44-9.94Z" />
                    </svg>
                  </a>
                  <a
                    href={`https://t.me/share/url?url=${encodeURIComponent(pageUrl)}&text=${encodeURIComponent(post.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Share on Telegram"
                    className="blog-share-btn"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d="M21.94 4.3 18.9 19.1c-.23 1.02-.84 1.27-1.7.79l-4.7-3.47-2.27 2.19c-.25.25-.46.46-.94.46l.34-4.78 8.7-7.86c.38-.34-.08-.53-.59-.19L6.98 13.1 2.34 11.65c-1-.32-1.02-1 .21-1.49L20.5 3.1c.84-.31 1.57.2 1.44 1.2Z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </aside>

          {/* -------- MAIN content -------- */}
          <div className="blog-post-main">
            {/* Hero visual */}
            <div className="blog-post-hero">
              <div className="blog-post-hero-bg" aria-hidden="true">
                <div className="blog-post-hero-grid" />
              </div>
              <div className="blog-post-hero-content">
                <span className="blog-card-category">{post.category}</span>
                <div className="blog-post-hero-title">{post.title}</div>
              </div>
            </div>

            {/* Meta line */}
            <div className="blog-post-meta">
              <span>{post.readingTime} min read</span>
              <span className="blog-post-meta-sep">·</span>
              <span>{formatDate(post.publishedAt)}</span>
            </div>

            {/* H1 */}
            <h1 className="blog-post-title">{post.title}</h1>

            {/* Author row */}
            <div className="blog-post-author-row">
              <span className="blog-card-author-avatar" aria-hidden="true">
                {post.author.name.charAt(0)}
              </span>
              <div>
                <div className="blog-card-author-name">{post.author.name}</div>
                <div className="blog-card-date">
                  {post.author.role} · {formatDate(post.publishedAt)}
                </div>
              </div>
            </div>

            {/* Article */}
            <article className="blog-article">
              <Content />
            </article>
          </div>
        </div>

        {/* ============ Related posts ============ */}
        {related.length > 0 && (
          <section className="section border-t border-[color:var(--border)]">
            <div className="shell">
              <h2 className="text-[24px] font-semibold tracking-[-0.02em] sm:text-[28px]">
                Related Blog
              </h2>
              <div className="blog-grid mt-8">
                {related.map((rel) => (
                  <BlogCard key={rel.slug} post={rel} />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ============ CTA ============ */}
        <section className="section">
          <div className="shell">
            <div className="relative overflow-hidden rounded-[28px] border border-[color:var(--border)] px-6 py-16 text-center sm:px-12 sm:py-20">
              <div
                className="pointer-events-none absolute inset-x-0 -bottom-40 h-[320px] opacity-70 blur-3xl"
                style={{
                  background:
                    "radial-gradient(ellipse at center, rgba(79,125,94,0.6), transparent 70%)",
                }}
                aria-hidden="true"
              />
              <h2 className="relative text-[28px] font-semibold leading-[1.15] tracking-[-0.03em] sm:text-[38px]">
                Ready to grow your social media?
              </h2>
              <p className="relative mx-auto mt-4 max-w-[56ch] text-[15.5px] leading-relaxed text-[color:var(--text-muted)]">
                SMMZin is building one SMM panel for creators, agencies
                and resellers. Get notified when we launch.
              </p>
              <div className="relative mt-8 flex flex-wrap justify-center gap-3">
                <a href="/#notify" className="btn btn-primary">
                  Notify Me
                </a>
                <Link href="/#platforms" className="btn btn-ghost">
                  View Platforms
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer dict={dictEn} locale="en" />
    </>
  );
}
