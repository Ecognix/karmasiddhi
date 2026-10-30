import { Fraunces, Hanken_Grotesk, Cinzel } from "next/font/google";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsApp from "../components/WhatsApp";
import "./globals.css";

const display = Fraunces({ subsets: ["latin"], variable: "--font-display" });
const body = Hanken_Grotesk({ subsets: ["latin"], variable: "--font-body" });
const logo = Cinzel({ subsets: ["latin"], weight: ["700"], variable: "--font-logo" });

export const metadata = {
  title: { default: "Karmasiddhi Nirmaan | Destined to build success", template: "%s | Karmasiddhi Nirmaan" },
  description: "Karmasiddhi Nirmaan designs and builds apartments, villas and commercial spaces across Guwahati, Assam.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${logo.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsApp />
      </body>
    </html>
  );
}
