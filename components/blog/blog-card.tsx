"use client";

import { Card } from "@/components/ui/card";
import { BlogPost } from "@/lib/blog-util";
import { useRouter } from "next/navigation";

export function BlogCard({ blog }: { blog: BlogPost }) {
  const router = useRouter();

  return (
    <Card
      className="flex flex-row h-full w-full blog-card overflow-hidden"
      onClick={() => router.push(`/blog/${blog.slug}`)}
    >
      {/* Fixed-width image container with padding */}
      <div className="pl-4 py-4 flex items-center">
        <div className="w-48 h-48 flex-shrink-0 rounded-md overflow-hidden">
          <img
            src={`images/${blog.slug}.png`}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="flex-grow flex flex-col p-4">
        <div className="mb-2">
          <h3 className="text-lg font-semibold leading-tight line-clamp-2">
            {blog.title}
          </h3>
          <p className="text-sm text-muted-foreground">
            {blog.date} • {blog.readTime || "5 min read"}
          </p>

          {blog.tags && blog.tags.length > 0 && (
            <div className="flex flex-wrap gap-1 mt-2">
              {blog.tags.slice(0, 2).map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2 py-0.5 bg-muted rounded-md"
                >
                  {tag}
                </span>
              ))}
              {blog.tags.length > 2 && (
                <span className="text-xs px-2 py-0.5 bg-muted rounded-md">
                  +{blog.tags.length - 2}
                </span>
              )}
            </div>
          )}
        </div>

        <div className="flex-grow">
          <p className="text-sm text-muted-foreground line-clamp-2">
            {blog.description}
          </p>
        </div>
      </div>
    </Card>
  );
}
