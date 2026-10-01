import { Inter, Nexa } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Hermes Technologies — Ideias que ganham forma.",
  description:
    "A Hermes Technologies cria soluções digitais, automações e aplicações com inteligência artificial.",

  alternates: {
    canonical: "https://hermestechnologies.com.br/",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Hermes Technologies — Ideias que ganham forma.",
    description:
      "Soluções digitais, automações, software e inteligência artificial.",
    url: "https://hermestechnologies.com.br/",
    siteName: "Hermes Technologies",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="pt-BR"
      className={`bg-primary-foreground mt-20 ${inter.variable}  `}
    >
      <body>{children}</body>
    </html>
  );
}
