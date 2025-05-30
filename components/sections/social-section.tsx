"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export function SocialSection() {
  return (
    <Card className="grid-item-5">
      <CardHeader>
        <CardTitle>Socials</CardTitle>
      </CardHeader>
      <CardContent className="flex gap-2 justify-start">
        <Badge variant="default" asChild>
          <Link href="https://linkedin.com/in/zdeag" target="_blank">
            LinkedIn
          </Link>
        </Badge>
        <Badge variant="outline" asChild>
          <Link href="https://github.com/zdeag" target="_blank">
            GitHub
          </Link>
        </Badge>
        <Badge variant="destructive" asChild>
          <Link href="https://x.com/de_zdeag/" target="_blank">
            X
          </Link>
        </Badge>
      </CardContent>
    </Card>
  );
}
