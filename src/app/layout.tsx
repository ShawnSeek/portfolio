import "@/app/globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { ThemeProvider } from "@/components/ThemeProvider";
import { BackgroundBeamsWithCollision } from "@/components/ui/BackgroundBeamsWithCollision";
import { GlobalContextProvider } from "@/contexts/GlobalContext";
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
        <GlobalContextProvider>
          <BackgroundBeamsWithCollision className="fixed inset-0 -z-10 min-h-screen w-full">
            <ThemeProvider
              attribute="class"
              defaultTheme="dark"
              enableSystem
              disableTransitionOnChange
            >
              <div className="flex min-h-screen flex-col items-center justify-between">
                <Header />
                <main className="flex-1">{children}</main>
                <Footer />
              </div>
            </ThemeProvider>
          </BackgroundBeamsWithCollision>
        </GlobalContextProvider>
      </body>
    </html>
  );
}
