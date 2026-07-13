import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: "Grace Studio | 세종 DIY 공방",
  description:
    "세종특별자치시 보듬8로에 위치한 플라워·핸드메이드 공방 Grace Studio. 당신의 일상이 작품이 되는 공간.",
  openGraph: {
    title: "Grace Studio | 세종 DIY 공방",
    description: "당신의 일상이 작품이 되는 공간, Grace Studio",
    images: ["/images/storefront.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" data-scroll-behavior="smooth">
      <body className="min-h-screen flex flex-col bg-secondary text-text antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
