import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import FloatMenu from "../components/ui/FloatMenu";
import { ThemeProvider } from "@/components/util/context/ThemeProvider";
import Footer from "@/components/layout/Footer";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

export const metadata: Metadata = {
  title: "L&L Assessoria e Serviços",
  description:
    "Na L&L Assessoria e Serviços, nossa missão é promover uma gestão pública transformadora e sustentável, por meio de engajamento genuíno e decisões assertivas que geram mudanças duradouras.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider>
      <html
        className="scroll-smooth font-roboto selection:bg-primary-content"
        data-theme="light"
        lang="pt-br"
      >
        <body>
          <header>
            <Navbar />
          </header>
          {children}
          <Footer />
          {/* Float Menu */}
          <FloatMenu />
        </body>
      </html>
    </ThemeProvider>
  );
}
