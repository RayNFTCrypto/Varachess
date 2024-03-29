import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { languages } from "../i18n/settings";
import "../../styles/globals.css";
import ClientThemeProvider from "./theme_provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "VaraChess",
  description: "The new era of chess built in Vara Network",
};
export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-principal ${inter.className}`}>
        <ClientThemeProvider>{children}</ClientThemeProvider>
      </body>
    </html>
  );
}

