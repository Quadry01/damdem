import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./NavBar/page";
import Footer from "./Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Damdem System Housing",
  description: "	DAMDEM SYSTEMS HOUSING, DAMDEM SYSTEMS BUILDING, Construction company, Achitecture ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
     
      <body className={inter.className}> <NavBar/>{children}<Footer/></body>
    </html>
  );
}
