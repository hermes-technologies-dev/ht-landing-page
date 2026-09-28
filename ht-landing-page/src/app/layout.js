import { Inter, Manrope } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Hermes Technologies",
  description:
    "Tecnologia, criatividade e execução para transformar ideias em soluções.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="pt-BR"
      className={`bg-primary-foreground mt-20 ${inter.variable} ${manrope.variable} `}
    >
      <body>{children}</body>
    </html>
  );
}
