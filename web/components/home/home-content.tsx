"use client";

import { Github, Download, Copy, Check } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { useState } from "react";
import { toast } from "sonner";

interface HomeContentProps {
  version: string;
  downloads: number;
  stars: number;
}

export function HomeContent({ version, downloads, stars }: HomeContentProps) {
  const formatDownloads = (num: number) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + "k";
    }
    return num.toString();
  };
  const [animation, setAnimation] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText("npm install -g tcxcommit");
    setAnimation(true);
    toast("Copied to clipboard", { position: "bottom-right" });

    setTimeout(() => setAnimation(false), 2000);
  };
  return (
    <div className="flex min-h-screen items-center justify-center font-sans dark:bg-neutral-950 bg-orange-50/50">
      <main className="flex min-h-screen w-full max-w-xl flex-col items-center justify-between py-5 px-16  dark:bg-neutral-950 sm:items-start">
        <div className="relative flex items-start justify-between w-full flex-1">
          <motion.h2
            initial={{ opacity: 0, filter: "blur(6px)" }}
            animate={{ opacity: 100, filter: "blur(0)" }}
            transition={{ delay: 2, duration: 0.8 }}
            className="text-lg italic font-medium"
          >
            tcxcommit
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, filter: "blur(6px)" }}
            animate={{ opacity: 100, filter: "blur(0)" }}
            transition={{ delay: 2, duration: 0.8 }}
            className="flex items-center gap-4"
          >
            <Link
              href="/docs"
              className="text-sm font-mono text-neutral-500 dark:text-neutral-400/80 hover:text-neutral-800 dark:hover:text-neutral-200 transition-all duration-200 cursor-pointer hover:underline"
            >
              [docs]
            </Link>
            <ThemeToggle />
          </motion.div>
        </div>

        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left flex-1">
          <div>
            <div className="flex justify-between text-neutral-500/70 font-mono mb-4">
              <motion.div
                initial={{ opacity: 0, filter: "blur(6px)" }}
                animate={{ opacity: 100, filter: "blur(0)" }}
                transition={{ delay: 2, duration: 0.8 }}
              >
                v{version} is out!
              </motion.div>
              <div className="flex gap-3">
                <motion.div
                  initial={{ opacity: 0, filter: "blur(6px)" }}
                  animate={{ opacity: 100, filter: "blur(0)" }}
                  transition={{ delay: 2, duration: 0.8 }}
                  className="flex items-center gap-1"
                >
                  <Download size={14} />
                  {formatDownloads(downloads)}
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, filter: "blur(6px)" }}
                  animate={{ opacity: 100, filter: "blur(0)" }}
                  transition={{ delay: 2.2, duration: 0.8 }}
                  className="flex items-center gap-1"
                >
                  <Github size={14} />
                  {stars}
                </motion.div>
              </div>
            </div>
            <div>
              {words.map((word, i) => {
                const isLastWord = i === lastWordIndex;

                return (
                  <motion.span
                    initial={{ opacity: 0, filter: "blur(6px)" }}
                    animate={{ opacity: 100, filter: "blur(0)" }}
                    transition={{ delay: 0.2 * i, duration: 0.8 }}
                    key={i}
                    className="mr-2 inline-block"
                  >
                    {word.split("").map((char, j) => (
                      <motion.span
                        key={j}
                        className={`text-3xl font-[450] leading-10 tracking-tight ${
                          isLastWord
                            ? "text-black/70 font-medium dark:text-white/90"
                            : "text-black/30 dark:text-zinc-600"
                        }`}
                      >
                        {char}
                      </motion.span>
                    ))}
                  </motion.span>
                );
              })}
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, filter: "blur(6px)" }}
            animate={{ opacity: 100, filter: "blur(0)" }}
            transition={{ delay: 1.7, duration: 0.8 }}
            className="w-full flex flex-col items-end relative"
          >
            <p
              onClick={handleCopy}
              className="max-w-md text-sm leading-8 tracking-normal text-zinc-600/50 dark:text-zinc-400/50 font-mono border border-dashed border-neutral-500/60 dark:border-neutral-400/70 w-full px-4 py-0.5 cursor-pointer flex"
            >
              npm install -g
              <span className="text-neutral-700 dark:text-white/80 ml-2">
                tcxcommit
              </span>
              <span className="absolute right-5 top-3 ">
                {animation ? (
                  <span>
                    <Check size={14} />
                  </span>
                ) : (
                  <span>
                    <Copy size={14} />
                  </span>
                )}
              </span>
            </p>
            <span className="font-mono text-xs -rotate-10 absolute -top-4 -left-4 px-2 py-0.5 bg-amber-600 text-white">
              Try it!
            </span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, filter: "blur(6px)" }}
            animate={{ opacity: 100, filter: "blur(0)" }}
            transition={{ delay: 2.2, duration: 0.8 }}
            className="flex items-center justify-between w-full mt-6"
          >
            <Link
              href="/docs"
              className="text-sm font-mono text-neutral-500 dark:text-neutral-400/80 hover:text-neutral-800 dark:hover:text-neutral-200 transition-all duration-200 cursor-pointer hover:underline"
            >
              [docs]
            </Link>
            <div className="flex gap-3">
              <Link
                href="https://github.com/sahilcodexx/tcxcommit"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-mono text-neutral-500 dark:text-neutral-400/80 hover:text-neutral-800 dark:hover:text-neutral-200 transition-all duration-200 cursor-pointer hover:underline"
              >
                [github]
              </Link>
              <Link
                href="https://npmjs.com/package/tcxcommit"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-mono text-neutral-500 dark:text-neutral-400/80 hover:text-neutral-800 dark:hover:text-neutral-200 transition-all duration-200 cursor-pointer hover:underline"
              >
                [npm]
              </Link>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}

const title = "Never write commit message manually!";
const words = title.split(" ");
const lastWordIndex = words.length - 1;
