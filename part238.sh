#!/usr/bin/env bash
set -euo pipefail

cd /d/vocvach/smmzin

echo "=== PART 238: Upgrade Blog (Search, Tabs, Pagination) ==="

# 1. Tạo component Client xử lý logic
cat > src/components/blog/BlogListingClient.tsx << 'XXENDXX'
"use client";

import { useState, useMemo } from "react";
import BlogCard from "./BlogCard";
import type { BlogPost } from "@/content/blog/types";

const POSTS_PER_PAGE = 9;

export default function BlogListingClient({ posts }: { posts: BlogPost[] }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const categories = ["All", "Business", "Guides", "Trends", "Marketing", "Platforms"];

  // 1. Lọc theo Category và Search Term
  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchCategory = activeCategory === "All" || post.category === activeCategory;
      const term = searchTerm.toLowerCase();
      const matchSearch =
        post.title.toLowerCase().includes(term) ||
        post.excerpt.toLowerCase().includes(term) ||
        post.author.name.toLowerCase().includes(term);
      return matchCategory && matchSearch;
    });
  }, [posts, activeCategory, searchTerm]);

  // 2. Tính toán phân trang
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const paginatedPosts = filteredPosts.slice(startIndex, startIndex + POSTS_PER_PAGE);

  // Reset về trang 1 mỗi khi đổi tab hoặc search
  const handleCategoryChange = (cat: string) => {
    setActiveCategory(cat);
    setCurrentPage(1);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1);
  };

  return (
    <>
      {/* ============ Hero & Controls ============ */}
      <section className="blog-hero">
        <div className="shell max-w-[860px] text-center">
          <p className="eyebrow">SMMZin.Com · SMM Panel Blog</p>
          <h1 className="blog-hero-title">Read Our Blog</h1>
          <p className="blog-hero-subtitle">
            Guides on SMM panels, social media growth and platform
            marketing. Practical insights for creators, agencies and
            resellers building their social presence.
          </p>

          <div className="blog-keywords">
            <span className="blog-keyword">SMM Panel</span>
            <span className="blog-keyword">Social Media Marketing</span>
            <span className="blog-keyword">Instagram Growth</span>
            <span className="blog-keyword">TikTok Growth</span>
            <span className="blog-keyword">YouTube Growth</span>
          </div>

          {/* Search Bar */}
          <div className="blog-search">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-3.5-3.5" />
            </svg>
            <input
              type="text"
              placeholder="Search articles by title, topic, or author"
              className="blog-search-input"
              value={searchTerm}
              onChange={handleSearchChange}
              aria-label="Search articles"
            />
          </div>

          {/* Category Tabs */}
          <div className="blog-categories">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`blog-category-pill ${activeCategory === cat ? "blog-category-pill-active" : ""}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ============ Posts Grid ============ */}
      <section className="section">
        <div className="shell">
          {paginatedPosts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-[color:var(--text-muted)] text-lg">No articles found matching your criteria.</p>
              <button 
                onClick={() => { setSearchTerm(""); setActiveCategory("All"); }}
                className="mt-4 text-[color:var(--accent)] hover:underline"
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div className="blog-grid">
              {paginatedPosts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>
          )}

          {/* ============ Pagination ============ */}
          {totalPages > 1 && (
            <div className="blog-pagination">
              <button
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="blog-page-btn"
              >
                Previous
              </button>
              
              {Array.from({ length: totalPages }).map((_, idx) => {
                const pageNum = idx + 1;
                return (
                  <button
                    key={pageNum}
                    onClick={() => setCurrentPage(pageNum)}
                    className={`blog-page-btn ${currentPage === pageNum ? "blog-page-btn-active" : ""}`}
                  >
                    {pageNum}
                  </button>
                );
              })}

              <button
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="blog-page-btn"
              >
                Next
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
XXENDXX

# 2. Ghi đè page.tsx để dùng component mới
cat > src/app/blog/page.tsx << 'XXENDXX'
import type { Metadata } from "next";

import BlogListingClient from "@/components/blog/BlogListingClient";
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
  // Lấy toàn bộ bài viết ở Server, truyền xuống Client để xử lý filter/search
  const posts = getSortedPosts();

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
        <BlogListingClient posts={posts} />
      </main>

      <Footer dict={dictEn} locale="en" />
    </>
  );
}
XXENDXX

# 3. Thêm CSS cho Pagination và cập nhật nút Tabs
cat >> src/app/globals.css << 'XXENDXX'

/* ============================================================
   BLOG UPGRADE: SEARCH & PAGINATION
   ============================================================ */

/* Nút Category (đổi từ span sang button) */
.blog-category-pill {
  cursor: pointer;
  background: transparent;
  border: 1px solid var(--border);
  transition: all 0.2s ease;
}
.blog-category-pill:hover {
  background: rgba(255, 255, 255, 0.05);
  border-color: rgba(255, 255, 255, 0.2);
}
.blog-category-pill-active {
  background: rgba(142, 214, 173, 0.12) !important;
  border-color: rgba(142, 214, 173, 0.4) !important;
  color: var(--accent) !important;
}

/* Ô Search cho phép click */
.blog-search-input {
  cursor: text;
  background: transparent;
  width: 100%;
}
.blog-search-input:focus {
  outline: none;
}
.blog-search:focus-within {
  border-color: var(--accent);
  box-shadow: 0 0 0 3px rgba(142, 214, 173, 0.1);
}

/* Phân trang */
.blog-pagination {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-top: 48px;
  margin-bottom: 24px;
  flex-wrap: wrap;
}

.blog-page-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 40px;
  height: 40px;
  padding: 0 16px;
  border-radius: 8px;
  border: 1px solid var(--border);
  background: rgba(255, 255, 255, 0.02);
  color: var(--text-muted);
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}

.blog-page-btn:hover:not(:disabled) {
  background: rgba(255, 255, 255, 0.06);
  color: var(--text);
  border-color: rgba(255, 255, 255, 0.15);
}

.blog-page-btn:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

.blog-page-btn-active {
  background: rgba(142, 214, 173, 0.12) !important;
  border-color: rgba(142, 214, 173, 0.4) !important;
  color: var(--accent) !important;
}
XXENDXX

# Verify CSS balance
python - << 'PYEOF'
path = "src/app/globals.css"
with open(path, "r", encoding="utf-8") as f:
    c = f.read()
opens = c.count("{")
closes = c.count("}")
diff = opens - closes
if diff > 0:
    c = c.rstrip() + "\n" + ("}\n" * diff)
    with open(path, "w", encoding="utf-8") as f:
        f.write(c)
    print(f"✅ Fixed {diff} CSS braces")
PYEOF

echo ""
echo "=== Clear cache + Build test ==="
rm -rf .next 2>/dev/null
npm run build 2>&1 | tail -10
