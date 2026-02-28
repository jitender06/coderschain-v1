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
    default: "Coderschain | Custom Web, Mobile & AI Solutions",
    template: "%s | Coderschain",
  },
  description:
    "Coderschain is a premier software development agency specializing in Custom Web Applications, Mobile Apps, AI Integration, and UI/UX Design. We build scalable digital products for businesses.",
  keywords: [
    "Coderschain",
    "Software Development Agency",
    "Custom Web Development",
    "Mobile App Development",
    "AI Agent Development",
    "UI/UX Design",
    "MVP Development",
    "Full Stack Development",
    "AR/VR Solutions",
  ],
  authors: [{ name: "Coderschain Development Team" }],
  creator: "Coderschain",
  publisher: "Coderschain",
  metadataBase: new URL("https://www.coderschain.com"),
  alternates: {
    canonical: "https://www.coderschain.com",
  },
  openGraph: {
    title: "Coderschain | Custom Software & AI Development Agency",
    description:
      "Transform your business with Coderschain. We deliver high-performance web, mobile, and AI solutions tailored to your unique needs.",
    url: "https://www.coderschain.com",
    siteName: "Coderschain",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/CodersChain.png",
        width: 1200,
        height: 630,
        alt: "Coderschain - Software Development Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Coderschain | Custom Web & AI Development",
    description:
      "Modern software development agency specializing in web, mobile, and AI solutions.",
    creator: "@coderschain",
    images: ["/CodersChain.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
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
      <head>
        <meta name="google-site-verification" content="JL-7xCspWMTwF1Xc4zVBNiCYnx1lvvenzbE18eaT48U" />
      </head>
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
