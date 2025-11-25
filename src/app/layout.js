import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import AppContextProvider from "./context/AppContext";
import Footer from "./components/Footer";
import { ToastContainer, toast } from 'react-toastify';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Chitra",
  description: "Your own AI image generator",
  icons: {
    icon: "/favicon.svg", // Path to favicon inside /public
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="px-4 sm:px-10 md:px-14 lg:px-28 min-h-screen bg-gradient-to-b from-teal-50 to-orange-50">
        <ToastContainer position="buttom-right"/>
        <AppContextProvider>
        <Navbar></Navbar>
        {children}
        <Footer/>
        </AppContextProvider>
        
      </body>
    </html>
  );
}
