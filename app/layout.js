import { Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const inter = Cormorant_Garamond({ subsets: ["latin"], weight: "500" });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white h-screen w-screen`}>{children}</body>
    </html>
  );
}
