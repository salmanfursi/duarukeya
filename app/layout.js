
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "./../components/Sidebar.js";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "duaruqyah",
  description: "dua ruqyah website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="bg-gray-200">
      <body>
        <Sidebar />
        <main className="ml-40">
          {children}
        </main>
      </body>
    </html>
  );
}
