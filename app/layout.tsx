import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from '@clerk/nextjs'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const geistPoppins = Poppins({
  variable: "--font-geist-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Apex Foot",
  description: "Agency dedicated to promoting football talents",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider localization={{locale: "fr-FR"}}>
      <html lang="fr">
        <body className={`${geistSans.variable} ${geistMono.variable} ${geistPoppins.variable} antialiased`}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  )
}
