import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";

export const metadata: Metadata = {
  title: "SwipeTrip",
  description: "SwipeTrip est une nouvelle application de voyage innovante, elle possède un système unique permettant de définir le voyage que vous préférerez",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <meta name="google-site-verification" content="xODl_9bIhINMkODL1iS12Z815uFLY7ftcLLLU68GN6Q" />
      <link rel="icon" type="image/svg+xml" href="logo.png" />
      <body className={GeistSans.className}>{children}</body>
    </html>
  );
}
