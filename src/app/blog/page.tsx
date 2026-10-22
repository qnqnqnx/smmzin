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
  const posts = getSortedPosts().map(({ Content, ...meta }) => meta);

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
