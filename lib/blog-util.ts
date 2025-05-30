import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postDirectory = path.join(process.cwd(), "blogs");

export interface BlogPost {
  slug: string;
  title: string;
  image: string;
  description: string;
  date: string;
  tags?: string[];
  readTime?: string;
  content: string;
}

export function getAllBlogPosts(): BlogPost[] {
  if (!fs.existsSync(postDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postDirectory);
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => {
      const slug = fileName.replace(/\.md$/, "");
      const fullPath = path.join(postDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");

      const { data, content } = matter(fileContents);

      return {
        slug: data.slug || slug,
        title: data.title || slug,
        image: data.image || true, // Default to true to show the default image
        description: data.description || "",
        date: data.date || new Date().toISOString(),
        tags: data.tags || [],
        readTime: data.readTime || calculateReadTime(content),
        content: content.trim(), // Trim whitespace from content
      } as BlogPost;
    });

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  const fullPath = path.join(postDirectory, `${slug}.md`);
  if (!fs.existsSync(fullPath)) {
    return undefined;
  }

  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    slug: data.slug || slug,
    title: data.title || slug,
    image: data.image || "",
    description: data.description || "",
    date: data.date || new Date().toISOString(),
    tags: data.tags || [],
    readTime: data.readTime || calculateReadTime(content),
    content,
  } as BlogPost;
}

function calculateReadTime(content: string): string {
  const wordsPerMinute = 200;
  const words = content.split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
}
