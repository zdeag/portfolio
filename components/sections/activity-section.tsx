"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function ActivitySection() {
  return (
    <Card className="grid-item-4">
      <CardHeader>
        <CardTitle>Recent Activites</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center justify-center">
          <div className="flex-center">
            <p></p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
