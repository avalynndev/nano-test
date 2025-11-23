import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ViewTransitions } from "next-view-transitions";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tractor Auction",
  description: "Tractor Auction website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en" suppressHydrationWarning>
        <head>
          <meta name="apple-mobile-web-app-title" content="TractorAuction" />
        </head>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased bg-linear-to-b from-sky-100 via-sky-200 to-cyan-200 dark:bg-background dark:bg-none`}
        >
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
            <Navbar />
            <main className="overflow-x-hidden md:overflow-visible">
              <div className="relative overflow-hidden">
                <div
                  className="fixed inset-0 z-[-1] bg-cover bg-center bg-no-repeat opacity-[0.20]"
                  style={{
                    backgroundImage: "url('/bg-opaque.png')",
                    backgroundAttachment: "fixed",
                  }}
                />
              </div>
            </main>
            {children}
            <Footer />
          </ThemeProvider>
        </body>
      </html>
    </ViewTransitions>
  );
}
