import type { ReactNode } from "react";

export type BlogCategory =
  | "Guides"
  | "Platforms"
  | "Marketing"
  | "Business"
  | "Trends";

export type BlogTocItem = {
  id: string;
  label: string;
  level: 2 | 3;
};

export type BlogPostMeta = {
  slug: string;
  title: string;
  excerpt: string;
  category: BlogCategory;
  publishedAt: string; // ISO date: "2026-01-15"
  readingTime: number; // minutes
  author: {
    name: string;
    role: string;
  };
  /** Slug của các bài viết liên quan */
  relatedSlugs?: string[];
  /** Table of contents — optional, dùng cho sidebar */
  toc?: BlogTocItem[];
};

export type BlogPost = BlogPostMeta & {
  /** Component render nội dung bài viết */
  Content: () => ReactNode;
};
