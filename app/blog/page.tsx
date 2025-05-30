import { BlogList } from "@/components/blog/blog-list";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function BlogPage() {
  return (
    <div className="portfolio-container dark">
      {/* Use the same dimensions as the portfolio grid */}
      <div className="blog-container">
        <Card className="w-full h-full overflow-auto">
          <CardHeader className="sticky top-0 z-10 bg-card border-b py-4">
            <CardTitle>Blog Posts</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <BlogList />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
