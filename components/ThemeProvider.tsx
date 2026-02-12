'use client';

import { ReactNode } from 'react';

interface ThemeProviderProps {
  children: ReactNode;
  theme: {
    primary: string;
    secondary: string;
    accent: string;
    bg: string;
    text: string;
  };
}

export default function ThemeProvider({ children, theme }: ThemeProviderProps) {
  return (
    <>
      <style jsx global>{`
        :root {
          --color-primary: ${theme.primary};
          --color-secondary: ${theme.secondary};
          --color-accent: ${theme.accent};
          --color-bg: ${theme.bg};
          --color-text: ${theme.text};
        }
      `}</style>
      {children}
    </>
  );
}
