import type { BlogPost } from "./types";

import { meta as whatIsMeta, Content as whatIsContent } from "./posts/what-is-an-smm-panel";
import { meta as startBusinessMeta, Content as startBusinessContent } from "./posts/how-to-start-an-smm-panel-business";
import { meta as vsAgencyMeta, Content as vsAgencyContent } from "./posts/smm-panel-vs-agency";
import { meta as safeMeta, Content as safeContent } from "./posts/is-buying-followers-safe";
import { meta as igMeta, Content as igContent } from "./posts/instagram-growth-guide";
import { meta as tiktokMeta, Content as tiktokContent } from "./posts/how-to-get-more-tiktok-views";
import { meta as ytMeta, Content as ytContent } from "./posts/youtube-monetization-guide";
import { meta as pricingMeta, Content as pricingContent } from "./posts/smm-panel-pricing-guide";
import { meta as automationMeta, Content as automationContent } from "./posts/social-media-automation";
import { meta as trendsMeta, Content as trendsContent } from "./posts/social-media-trends-2026";
import { meta as choosePanelMeta, Content as choosePanelContent } from "./posts/how-to-choose-best-smm-panel";
import { meta as safetyGuideMeta, Content as safetyGuideContent } from "./posts/smm-panel-safety-guide";

/**
 * Registry của tất cả bài blog.
 * Thêm bài mới:
 *   1. Tạo file src/content/blog/posts/{slug}.tsx
 *   2. Import meta + Content
 *   3. Thêm vào ALL_POSTS ở đây
 */
export const ALL_POSTS: BlogPost[] = [
  {
    ...whatIsMeta,
    Content: whatIsContent,
  },
  {
    ...startBusinessMeta,
    Content: startBusinessContent,
  },
  {
    ...vsAgencyMeta,
    Content: vsAgencyContent,
  },
  {
    ...safeMeta,
    Content: safeContent,
  },
  {
    ...igMeta,
    Content: igContent,
  },
  {
    ...tiktokMeta,
    Content: tiktokContent,
  },
  {
    ...ytMeta,
    Content: ytContent,
  },
  {
    ...pricingMeta,
    Content: pricingContent,
  },
  {
    ...automationMeta,
    Content: automationContent,
  },
  {
    ...trendsMeta,
    Content: trendsContent,
  },
  {
    ...choosePanelMeta,
    Content: choosePanelContent,
  },
  {
    ...safetyGuideMeta,
    Content: safetyGuideContent,
  },
];

// Sắp xếp mới nhất trước
export function getSortedPosts(): BlogPost[] {
  return [...ALL_POSTS].sort((a, b) =>
    b.publishedAt.localeCompare(a.publishedAt),
  );
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return ALL_POSTS.find((p) => p.slug === slug);
}

export function getRelatedPosts(post: BlogPost, limit = 3): BlogPost[] {
  if (!post.relatedSlugs || post.relatedSlugs.length === 0) {
    // Fallback: bài viết cùng category, mới nhất
    return ALL_POSTS.filter(
      (p) => p.slug !== post.slug && p.category === post.category,
    )
      .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
      .slice(0, limit);
  }
  return post.relatedSlugs
    .map((slug) => ALL_POSTS.find((p) => p.slug === slug))
    .filter((p): p is BlogPost => Boolean(p))
    .slice(0, limit);
}

export function getAllSlugs(): string[] {
  return ALL_POSTS.map((p) => p.slug);
}

/** Format date: "2026-01-15" → "Jan 15, 2026" */
export function formatDate(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}
