import { BlogCard } from "@/components/blog/blog-card";
import { getAllBlogPosts } from "@/lib/blog-util";

export function BlogList() {
  const blogs = getAllBlogPosts();

  return (
    <div className="blog-grid">
      {blogs.map((blog) => (
        <div key={blog.slug}>
          <BlogCard blog={blog} />
        </div>
      ))}
      {blogs.length === 0 && (
        <div className="text-center py-8">
          <p>No blog posts found.</p>
        </div>
      )}
    </div>
  );
}
