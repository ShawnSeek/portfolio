import "@/app/globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ShawnSeek's Portfolio",
  description: "Don't stop thinking and don't stop going.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
