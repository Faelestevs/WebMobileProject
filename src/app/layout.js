import { Inter } from "next/font/google";
import "./globals.css";
// import Navegacao from "./Componentes/Navegacao";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "FGR",
  description: "Aplicação educativa e informativa sobre o câncer.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="shortcut icon" href="./favicon/favicon.ico" />
      </head>
      <body className={inter.className}>
        <>
        {children}
        </>
        </body>
    </html>
  );
}
