"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

const sidebarItems = [
  {
    title: "Getting Started",
    items: [
      { title: "Introduction", href: "/docs" },
      { title: "Installation", href: "/docs/install" },
      { title: "Usage", href: "/docs/usage" },
    ],
  },
];

export function DocsSidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed top-14 z-30 hidden h-[calc(100vh-3.5rem)] w-64 shrink-0 overflow-y-auto border-r border-neutral-200/50 dark:border-neutral-800/50 bg-neutral-50/50 dark:bg-neutral-950/50 py-8 pl-4 lg:block">
      <nav className="flex flex-col px-3">
        {sidebarItems.map((section, sectionIndex) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: sectionIndex * 0.05 }}
            className="mb-6"
          >
            <h4 className="mb-2 px-3 text-[11px] font-semibold uppercase tracking-wider text-neutral-500 dark:text-neutral-400">
              {section.title}
            </h4>
            <ul className="flex flex-col gap-0.5">
              {section.items.map((item, itemIndex) => {
                const isActive = pathname === item.href;
                return (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, x: -5 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: sectionIndex * 0.05 + itemIndex * 0.03 }}
                  >
                    <Link
                      href={item.href}
                      className={cn(
                        "group flex items-center rounded-md px-3 py-1.5 text-[14px] transition-all duration-150",
                        isActive
                          ? "bg-neutral-200/60 dark:bg-neutral-800/60 text-neutral-900 dark:text-neutral-100 font-medium"
                          : "text-neutral-600 hover:bg-neutral-200/40 dark:text-neutral-400 dark:hover:bg-neutral-800/40 dark:hover:text-neutral-200"
                      )}
                    >
                      {item.title}
                    </Link>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>
        ))}
      </nav>
    </aside>
  );
}

// Mobile version - horizontal scrollable tabs
export function DocsSidebarMobile() {
  const pathname = usePathname();

  return (
    <div className="lg:hidden sticky top-14 z-20 border-b border-neutral-200/50 dark:border-neutral-800/50 bg-white/80 dark:bg-neutral-950/80 backdrop-blur-sm">
      <nav className="flex items-center gap-1 px-4 py-2 overflow-x-auto scrollbar-hide">
        {sidebarItems[0].items.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex-shrink-0 px-3 py-1.5 text-[13px] rounded-md transition-all duration-150 whitespace-nowrap",
                isActive
                  ? "bg-neutral-900 text-white dark:bg-white dark:text-neutral-900 font-medium"
                  : "text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100"
              )}
            >
              {item.title}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
