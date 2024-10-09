import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";

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
    <html className="scroll-smooth" data-theme="light" lang="pt-br">
      <body>
        <header>
          <Navbar />
        </header>
        {children}
      </body>
    </html>
  );
}
