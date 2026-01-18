import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "sonner";
import { ThemeProvider } from "@/components/theme-provider";
import { ReduxProviders } from "@/store/ReduxProvider";
// import { GoogleOAuthProvider } from "@react-oauth/google";
import { AuthProvider } from "@/providers/AuthProvider";
import { Suspense } from "react";
import Loading from "./Loading.jsx"
import { Inter, Source_Serif_4 } from 'next/font/google';
import FixedSidebar from "@/components/common/FixedSidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: "swap"
});

const sourceSerif = Source_Serif_4({
  subsets: ['latin'],
  variable: '--font-source-serif',
  weight: ['400', '600'],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Coderschain | Tech, Web & AI Insights",
    template: "%s | Coderschain",
  },
  description:
    "Coderschain is a modern tech blog sharing insights on Web Development, JavaScript, AI, and Coding best practices.",
  keywords: [
    "Coderschain",
    "Tech Blog",
    "Web Development",
    "AI",
    "JavaScript",
    "Next.js",
    "React",
    "Coding",
  ],
  authors: [{ name: "Coderschain Team" }],
  creator: "Coderschain",
  publisher: "Coderschain",
  metadataBase: new URL("https://www.coderschain.com"),
  alternates: {
    canonical: "https://www.coderschain.com",
  },
  openGraph: {
    title: "Coderschain | Web, AI & Coding Insights",
    description:
      "Stay ahead in tech with Coderschain — tutorials, guides, and deep dives into AI, web, and software development.",
    url: "https://www.coderschain.com",
    siteName: "Coderschain",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.coderschain.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Coderschain - Tech Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Coderschain | Tech, Web & AI Blog",
    description:
      "A modern blog about coding, web, and AI — powered by Next.js and Express.",
    creator: "@coderschain", // your Twitter handle if available
    images: ["https://www.coderschain.com/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    // shortcut: "/favicon-32x32.png",
  },
  // manifest: "/site.webmanifest",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  category: "technology",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${sourceSerif.variable}`}>
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Suspense fallback={<Loading />}>
          {/* <GoogleOAuthProvider clientId={process.env.NEXT_OAUTH_CLIENT_ID!}> */}
          <ReduxProviders>
            <AuthProvider>
              <ThemeProvider
                attribute="class"
                defaultTheme="dark"
                enableSystem
                disableTransitionOnChange
              >
                <FixedSidebar />
                {children}
                <Toaster />
              </ThemeProvider>
            </AuthProvider>
          </ReduxProviders>
          {/* </GoogleOAuthProvider> */}
        </Suspense>
      </body>
    </html>
  );
}
