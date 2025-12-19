"use client";

import * as React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export interface FadeSlideTabItem {
  value: string;
  label: string;
  content?: React.ReactNode;
}

interface FadeSlideTabsProps {
  items?: FadeSlideTabItem[];
  defaultValue?: string;
  className?: string;
}

export default function FadeSlideTabs({
  items = [
    { value: "overview", label: "Overview", content: "Overview content goes here." },
    { value: "activity", label: "Activity", content: "Activity content goes here." },
    { value: "settings", label: "Settings", content: "Settings content goes here." },
    { value: "faq", label: "FAQ", content: "Frequently asked questions." },
  ],
  defaultValue = "overview",
  className,
}: FadeSlideTabsProps) {
  const [active, setActive] = React.useState(defaultValue);

  return (
    <Tabs value={active} onValueChange={setActive} className={cn("w-full", className)}>
      <TabsList>
        {items.map((item) => (
          <TabsTrigger key={item.value} value={item.value}>
            {item.label}
          </TabsTrigger>
        ))}
      </TabsList>

      <div className="relative mt-4 overflow-hidden">
        <AnimatePresence mode="wait">
          {items.map(
            (item) =>
              item.value === active && (
                <motion.div
                  key={item.value}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.25 }}
                >
                  {item.content}
                </motion.div>
              )
          )}
        </AnimatePresence>
      </div>
    </Tabs>
  );
}
