import type { Metadata } from "next";
import { inter, montserrat, oswald, playfair } from "@/lib/fonts";
import "./globals.css";
import ClientBody from "./ClientBody";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "SolarClubDiscount - The Industry Magazine for Solar Panel Cleaning",
  description: "The leading magazine for solar panel cleaning professionals featuring industry news, services, marketplace, and more.",
  keywords: "solar panel cleaning, solar industry, clean energy, solar maintenance, solar equipment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${montserrat.variable} ${oswald.variable} ${playfair.variable}`}>
      <body suppressHydrationWarning className="antialiased min-h-screen flex flex-col">
        <ClientBody>
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </ClientBody>
      </body>
    </html>
  );
}
