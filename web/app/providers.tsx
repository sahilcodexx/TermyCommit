'use client';

import { ThemeProvider } from '@/lib/theme-provider';

export function Providers({ children }: { children: React.ReactNode }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
