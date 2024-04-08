import ModalProvider from "@/components/modals/modal-provider";
import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Quizmania - Test Your Knowledge!",
  description: "I made a Quiz app For Taxmann and Mindler for a Hackathon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={poppins.className}>
        <ModalProvider />
        {children}
      </body>
    </html>
  );
}
