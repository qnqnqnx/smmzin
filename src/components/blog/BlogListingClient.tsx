"use client";

import { useState, useMemo } from "react";
import BlogCard from "./BlogCard";
import type { BlogPostMeta } from "@/content/blog/types";

const POSTS_PER_PAGE = 9;

export default function BlogListingClient({ posts }: { posts: BlogPostMeta[] }) {
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
