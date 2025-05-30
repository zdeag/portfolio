"use client";

import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { useRouter } from "next/navigation";

export function BlogSection() {
  const router = useRouter();

  return (
    <Card
      className="grid-item-3 border rounded-lg p-4 cursor-pointer hover:shadow-xl hover:-translate-y-1 transition-all duration-300 hover:border-red-100"
      onClick={() => {
        router.push("/blog");
      }}
    >
      <CardTitle>Blogs</CardTitle>
    </Card>
  );
}
