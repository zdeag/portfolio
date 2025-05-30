"use client";

import { experience } from "@/data/experience";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export function AboutSection() {
  return (
    <Card className="grid-item-1">
      <CardHeader>
        <CardTitle>About Me</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        <p>
          Thanks for clicking on my portfolio. My name is Zach, and if I needed
          to describe myself in a couple of words, I'd say that I'm a curious
          and passionate go-getter. I'm enthralled by anything finance, tech,
          and robotics related. If my stocks are down, I like to say I'm
          shooting for the long term. If they're up? Well, I'm just a
          knowledgable investor.
        </p>
        <div>
          {experience.map((experience, index) => (
            <div
              key={index}
              className="mb-4 grid grid-cols-[25px_1fr] items-start pb-4 last:mb-0 last:pb-0"
            >
              <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
              <div className="space-y-1">
                <p className="text-sm font-medium leading-none">
                  {experience.title}
                </p>
                <p className="text-sm text-muted-foreground">
                  {experience.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
