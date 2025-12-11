import type React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ConvexClientProvider } from "@/components/convex-client-provider";
import { PWARegister } from "@/components/pwa-register";
import { PWAInstallPrompt } from "@/components/pwa-install-prompt";
import { PWAHead } from "@/components/pwa-head";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "sonner";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "OneChef - Your Smart Kitchen Companion",
  description: "Cook Smarter. Live Better with OneChef.",
  applicationName: "OneChef",
  generator: "Next.js",
  keywords: [
    "recipe",
    "cooking",
    "AI",
    "voice control",
    "YouTube",
    "food",
    "chef",
    "jikoni",
  ],
  authors: [{ name: "JikoniGPT Team" }],
  creator: "JikoniGPT Team",
  publisher: "JikoniGPT Team",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/app_icon.png" },
      { url: "/app_icon.png", sizes: "16x16", type: "image/png" },
      { url: "/app_icon.png", sizes: "32x32", type: "image/png" },
      {
        url: "/app_icon.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/app_icon.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    apple: [{ url: "/app_icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "OneChef",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "OChef - Your Smart Kitchen Companion",
    description:
      "Convert YouTube cooking videos into structured recipes with voice control",
    siteName: "OneChef",
    images: [
      {
        url: "/app_icon.png",
        width: 512,
        height: 512,
        alt: "OneChef App Icon",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "OChef - Your Smart Kitchen Companion",
    description:
      "Convert YouTube cooking videos into structured recipes with voice control",
    images: ["/app_icon.png"],
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
    viewportFit: "cover",
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5f5f5" },
    { media: "(prefers-color-scheme: dark)", color: "#171717" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <PWAHead />
      </head>
      <body className={`font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <PWARegister />
          <ConvexClientProvider>
            {children}
            <PWAInstallPrompt />
            <Toaster position="bottom-center" />
          </ConvexClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
