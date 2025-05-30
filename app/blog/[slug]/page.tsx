import { getBlogPostBySlug } from "@/lib/blog-util";
import { Card, CardContent } from "@/components/ui/card";
import { notFound } from "next/navigation";
import Markdoc from "@markdoc/markdoc";
import React from "react";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Tag } from "lucide-react";

interface PageProps {
  params: {
    slug: string;
  };
}

// Define custom Markdoc components and configuration
const config = {
  nodes: {
    heading: {
      render: "Heading",
      attributes: {
        level: { type: Number, required: true },
        id: { type: String },
      },
    },
    paragraph: {
      render: "Paragraph",
    },
    // Add other node types as needed
  },
};

// Custom React components for Markdoc
const components = {
  Heading: ({
    level,
    children,
    id,
  }: {
    level: number;
    children: React.ReactNode;
    id?: string;
  }) => {
    const HeadingTag = `h${level}` as keyof JSX.IntrinsicElements;
    return <HeadingTag id={id}>{children}</HeadingTag>;
  },
  Paragraph: ({ children }: { children: React.ReactNode }) => {
    return <p>{children}</p>;
  },
  // Add other components as needed
};

export default function BlogPost({ params }: PageProps) {
  const { slug } = params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const ast = Markdoc.parse(post.content);
  const content = Markdoc.transform(ast, config);
  const ReactContent = Markdoc.renderers.react(content, React, { components });

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  return (
    <div className="portfolio-container dark">
      <div className="blog-container">
        <Card className="w-full h-full overflow-auto">
          <div className="p-8">
            {/* Back Link */}
            <Link
              href="/blog"
              className="flex items-center text-sm text-muted-foreground hover:text-primary mb-8"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to all posts
            </Link>

            {/* Blog Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold mb-4">{post.title}</h1>

              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <Calendar className="mr-2 h-4 w-4" />
                  {formatDate(post.date)}
                </div>

                {post.readTime && (
                  <div className="flex items-center">
                    <Clock className="mr-2 h-4 w-4" />
                    {post.readTime}
                  </div>
                )}
              </div>

              {post.tags && post.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {post.tags.map((tag) => (
                    <div
                      key={tag}
                      className="flex items-center text-xs px-3 py-1 bg-muted rounded-full"
                    >
                      <Tag className="mr-1 h-3 w-3" />
                      {tag}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Featured Image (if available) */}
            {post.image && (
              <div className="mb-8 rounded-lg overflow-hidden">
                <img
                  src={`/images/${post.slug}.png`}
                  alt={post.title}
                  className="w-full h-auto object-cover"
                />
              </div>
            )}

            {/* Blog Content */}
            <div className="markdown-content">{ReactContent}</div>
          </div>
        </Card>
      </div>
    </div>
  );
}
