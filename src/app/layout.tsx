import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// Initialize the Inter font (standard and safe)
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "For Manali ❤️",
    description: "A Valentine's surprise",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body className={inter.className}>
        {children}
        </body>
        </html>
    );
}