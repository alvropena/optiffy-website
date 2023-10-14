import Navbar from "@/components/navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Optiffy",
  description: "Spend no time on manual tasks.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
      <footer className="flex flex-col m-5 gap-3">
        <div className="flex flex-row gap-3">
          <Link href="/terms">Terms</Link>
          <Link href="/privacy-policy">Privacy</Link>
          <Link href="/privacy-policy">Privacy</Link>
        </div>
        <p className="text-gray-500">&copy; 2023 Optiffy Inc. All rights reserved.</p>
        <div></div>
      </footer>
    </html>
  );
}
