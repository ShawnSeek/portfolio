import "@/app/globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ThemeProvider } from "@/components/ThemeProvider";
import { BackgroundBeamsWithCollision } from "@/components/ui/BackgroundBeamsWithCollision";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ShawnSeek's Blog",
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
        <BackgroundBeamsWithCollision className="fixed inset-0 -z-10 h-full w-full">
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            {children}
            <Footer />
          </ThemeProvider>
        </BackgroundBeamsWithCollision>
      </body>
    </html>
  );
}
