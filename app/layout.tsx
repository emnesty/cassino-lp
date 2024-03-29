import type { Metadata } from "next";
import { Inter } from "next/font/google";
import AOSInit from "./components/AOSInit";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Software para Cassinos Online - Crie sua plataforma Online",
  description:
    "Tenha a melhor plataforma de Cassino Online totalmente customizada alem de suporte 24h para melhor atende-lo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth" style={{ scrollBehavior: "smooth" }}>
      <AOSInit />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
