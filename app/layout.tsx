import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tax Shield | Memphis Tax Preparation & $7,000 Refund Advance",
  description:
    "Get your taxes done right in Memphis. Up to $7,000 refund advance available. Trusted by 1,000+ families. 148+ five-star reviews. Call (844) 503-0401.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakarta.variable} h-full antialiased`}>
      <head>
        <script src="https://static.elfsight.com/platform/platform.js" defer></script>
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
