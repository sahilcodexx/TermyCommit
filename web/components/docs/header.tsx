"use client";

import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";

export function DocsHeader() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-14 border-b border-neutral-200/50 dark:border-neutral-800/50 bg-white/80 dark:bg-neutral-950/80 backdrop-blur-sm">
      <div className="flex h-full items-center justify-between px-4 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <span className="text-[15px] font-medium text-neutral-900 dark:text-neutral-100">
            tcxcommit
          </span>
        </Link>

        <div className="flex items-center gap-3">
          <Link
            href="https://github.com/sahilcodexx/tcxcommit"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13px] text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 transition-colors"
          >
            GitHub
          </Link>
          <Link
            href="/docs"
            className="text-[13px] text-neutral-500 hover:text-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-100 transition-colors"
          >
            Docs
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
