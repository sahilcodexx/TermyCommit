"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";
import { ChevronUp } from "lucide-react";

interface TocItem {
  id: string;
  title: string;
  level: number;
}

interface TableOfContentsProps {
  items: TocItem[];
}

export function TableOfContents({ items }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>("");
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-100px 0px -80% 0px" }
    );

    items.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [items]);

  if (items.length === 0) return null;

  return (
    <>
      {/* Mobile TOC - Collapsible */}
      <div className="fixed bottom-4 right-4 z-40 xl:hidden">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center gap-2 px-3 py-2 rounded-full bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-sm shadow-lg"
        >
          <span className="text-xs text-neutral-500">On this page</span>
          <ChevronUp 
            size={16} 
            className={`transition-transform ${isExpanded ? "rotate-180" : ""}`}
          />
        </button>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute bottom-12 right-0 w-56 max-h-64 overflow-y-auto bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-lg shadow-xl p-3"
            >
              <h4 className="mb-2 text-xs font-medium uppercase tracking-wider text-neutral-400">
                On this page
              </h4>
              <ul className="space-y-1">
                {items.map((item, index) => (
                  <li key={item.id}>
                    <a
                      href={`#${item.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        document.getElementById(item.id)?.scrollIntoView({
                          behavior: "smooth"
                        });
                        setIsExpanded(false);
                      }}
                      className={cn(
                        "block py-1 text-sm transition-colors",
                        activeId === item.id
                          ? "text-neutral-900 dark:text-neutral-100 font-medium"
                          : "text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300"
                      )}
                      style={{ paddingLeft: (item.level - 1) * 12 }}
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Desktop TOC - Always visible */}
      <aside className="fixed top-14 right-8 z-30 hidden h-auto w-48 shrink-0 overflow-y-auto py-8 xl:block">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-xs"
          >
            <h4 className="mb-3 font-medium uppercase tracking-wider text-neutral-400">
              On this page
            </h4>
            <ul className="relative border-l border-neutral-200 dark:border-neutral-800">
              {items.map((item, index) => {
                const isActive = activeId === item.id;
                return (
                  <motion.li
                    key={item.id}
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.03 }}
                    className="relative"
                  >
                    <a
                      href={`#${item.id}`}
                      onClick={(e) => {
                        e.preventDefault();
                        document.getElementById(item.id)?.scrollIntoView({
                          behavior: "smooth"
                        });
                        setActiveId(item.id);
                      }}
                      className={cn(
                        "group flex items-center py-1.5 pl-3 text-[13px] transition-all duration-200",
                        isActive
                          ? "text-neutral-900 dark:text-neutral-100 font-medium"
                          : "text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-300"
                      )}
                      style={{ paddingLeft: (item.level - 1) * 12 + 12 }}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="tocIndicator"
                          className="absolute -left-[1px] top-1/2 -translate-y-1/2 w-[2px] h-4 bg-neutral-900 dark:bg-neutral-100 rounded-full"
                          transition={{ type: "spring", stiffness: 400, damping: 35 }}
                        />
                      )}
                      <span className="line-clamp-1">{item.title}</span>
                    </a>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>
        </div>
      </aside>
    </>
  );
}
