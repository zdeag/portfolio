"use client";

import { AboutSection } from "@/components/sections/about-section";
import { ProjectSection } from "@/components/sections/project-section";
import { BlogSection } from "@/components/sections/blog-section";
import { ActivitySection } from "@/components/sections/activity-section";
import { SocialSection } from "@/components/sections/social-section";
import { HoldingSection } from "@/components/sections/holdings-section";

export default function Home() {
  return (
    <div className="portfolio-container dark">
      <div className="portfolio-grid">
        <AboutSection />
        <ProjectSection />
        <BlogSection />
        <ActivitySection />
        <SocialSection />
        <HoldingSection />
      </div>
    </div>
  );
}
