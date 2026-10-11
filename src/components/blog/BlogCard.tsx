import Link from "next/link";
import type { BlogPost } from "@/content/blog/types";
import { formatDate } from "@/content/blog/registry";
import BlogThumbnail from "./BlogThumbnail";

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="blog-card group">
      <Link href={`/blog/${post.slug}`} className="blog-card-link">
        {/* Thumbnail */}
        <div className="blog-card-thumb">
          <BlogThumbnail slug={post.slug} />
        </div>

        {/* Body */}
        <div className="blog-card-body">
          <div className="blog-card-meta-top">
            <span className="blog-card-category">{post.category}</span>
            <span className="blog-card-sep">·</span>
            <span className="blog-card-time">{post.readingTime} min read</span>
          </div>

          <h2 className="blog-card-title">{post.title}</h2>
          <p className="blog-card-excerpt">{post.excerpt}</p>

          <div className="blog-card-meta-bottom">
            <div className="blog-card-author">
              <span className="blog-card-author-avatar" aria-hidden="true">
                {post.author.name.charAt(0)}
              </span>
              <div>
                <div className="blog-card-author-name">{post.author.name}</div>
                <div className="blog-card-date">{formatDate(post.publishedAt)}</div>
              </div>
            </div>
            <span className="blog-card-readmore">
              Read more →
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
}
