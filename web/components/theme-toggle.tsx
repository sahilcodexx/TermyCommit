'use client';

import { Sun, Moon } from 'lucide-react';
import { motion } from 'motion/react';
import { useTheme } from '@/lib/theme-provider';
import { useEffect, useState } from 'react';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const isDark = theme === 'dark';

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <button className="w-5 h-5" />;
  }

  return (
    <button
      onClick={toggleTheme}
      className="cursor-pointer"
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{ rotate: isDark ? 180 : 0, scale: isDark ? 0.8 : 1 }}
        transition={{ duration: 0.3, type: 'spring', stiffness: 200, damping: 15 }}
      >
        {isDark ? (
          <Moon size={18} className="text-neutral-400" />
        ) : (
          <Sun size={18} className="text-neutral-600" />
        )}
      </motion.div>
    </button>
  );
}
