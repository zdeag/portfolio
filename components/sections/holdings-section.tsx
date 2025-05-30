"use client";

import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { stocks } from "@/data/tempstocks";

export function HoldingSection() {
  return (
    <Card className="grid-item-6">
      <CardHeader>
        <CardTitle>My Portfolio Holdings</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-hidden">
          <div className="flex flex-row gap-2 animate-scroll whitespace-nowrap">
            {stocks.concat(stocks).map((stock, index) => (
              <div
                key={index}
                className={`flex flex-row border-2 rounded-lg px-4 py-2 flex-shrink-0 ${
                  stock.change > 0
                    ? "text-green-400 border-green-400"
                    : "text-red-400 border-red-400"
                }`}
              >
                <span>{stock.symbol}</span>
                <span className="ml-1">
                  {stock.change > 0 ? `+${stock.change}%` : `${stock.change}%`}
                </span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
