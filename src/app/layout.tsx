import type { Metadata } from "next";
import localFont from "next/font/local";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";

const montserrat = localFont({
  src: "../../fonts/Montserrat-Regular.ttf",
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "CHEF242 | Fresh Bahamian food for your job site",
  description:
    "Bringing freshly made Bahamian food to your job site. Order catering for construction and work sites in The Bahamas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-[#1a1a1a]">
        <Header />
        <main className="w-full">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
