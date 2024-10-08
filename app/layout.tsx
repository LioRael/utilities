import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./_components/providers";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "AnnUI Utilities",
    template: "%s | AnnUI Utilities",
  },
  description: "Utilities provided by AnnUI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
