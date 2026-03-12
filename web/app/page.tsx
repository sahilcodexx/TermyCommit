"use client";
import { Box, Github } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center  font-sans dark:bg-black bg-orange-">
      <main className="flex min-h-screen w-full max-w-xl flex-col items-center justify-between py-5  px-16  bg-white dark:bg-black sm:items-start">
        <div className="relative flex items-start justify-between w-full flex-1">
          <motion.h2
            initial={{ opacity: 0, filter: "blur(6px)" }}
            animate={{ opacity: 100, filter: "blur(0)" }}
            transition={{ delay: 2, duration: 0.8 }}
            className="text-lg italic font-medium "
          >
            Tcxcommit
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

        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left flex-1 ">
          <div>
            <div className="flex justify-between text-neutral-500/70 font-mono mb-4">
              <motion.div
                initial={{ opacity: 0, filter: "blur(6px)" }}
                animate={{ opacity: 100, filter: "blur(0)" }}
                transition={{ delay: 2, duration: 0.8 }}
              >
                v1.0.19 is out!
              </motion.div>
              <div className="flex gap-3 ">
                <motion.div
                  initial={{ opacity: 0, filter: "blur(6px)" }}
                  animate={{ opacity: 100, filter: "blur(0)" }}
                  transition={{ delay: 2, duration: 0.8 }}
                  className=" flex items-center gap-1 "
                >
                  <Box size={14} />
                  155.1k
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, filter: "blur(6px)" }}
                  animate={{ opacity: 100, filter: "blur(0)" }}
                  transition={{ delay: 2.2, duration: 0.8 }}
                  className=" flex items-center gap-1"
                >
                  <Github size={14} /> 20
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
            <p className="max-w-md text-sm leading-8 tracking-normal  text-zinc-600/50 dark:text-zinc-400/40 font-mono border border-dashed border-neutral-500/60 w-full px-4 py-0.5 ">
              npm install -g{" "}
              <span className="text-neutral-700 dark:text-white/70">
                tcxcommit
              </span>
            </p>
            <span className="font-mono text-xs -rotate-10 absolute -bottom-4 -right-4 px-2 py-0.5 bg-amber-600  text-white">
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
                href="/docs"
                className="text-sm font-mono text-neutral-500 dark:text-neutral-400/80 hover:text-neutral-800 dark:hover:text-neutral-200 transition-all duration-200 cursor-pointer hover:underline"
              >
                [github]
              </Link>
              <Link
                href="/docs"
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

const title = "Never write commit message manually";
const words = title.split(" ");
const lastWordIndex = words.length - 1;

{
  /* <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left ">
  <div>
    <div className="flex justify-between text-neutral-500/70 font-mono mb-4">
      <div>v1.0.19 is out!</div>
      <div className="flex gap-3 ">
        <div className=" flex items-center gap-1 ">
          <Box size={14} />
          155.1k
        </div>
        <div className=" flex items-center gap-1">
          <Github size={14} /> 20
        </div>
      </div>
    </div>
    <h1 className="max-w-md text-3xl font-[450] leading-10 tracking-tight text-black/30 dark:text-zinc-50">
      Never write commit message
      <p className="text-black/70 font-medium dark:text-white">
        manullay!
      </p>
    </h1>
  </div>
  <div className="w-full flex flex-col items-end relative">
    <p className="max-w-md text-sm leading-8 tracking-normal  text-zinc-600/50 dark:text-zinc-400 font-mono border border-dashed border-neutral-500/60 w-full px-4 py-0.5 ">
      npm install -g <span className="text-neutral-700">tcxcommit</span>
    </p>
    <span className="font-mono text-xs -rotate-10 absolute -bottom-4 -right-4 px-2 py-0.5 bg-amber-600  text-white">
      Try it!
    </span>
  </div>
</div> */
}
