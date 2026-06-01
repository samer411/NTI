import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarCheck,faUser } from '@fortawesome/free-solid-svg-icons'

import Link from "next/link";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Todo App",
  description: "This is a todo app that demonstrate using of context and reducer hooks of react",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      
      <body className="min-h-full flex flex-col"><header className="text-[#FF61F8] flex justify-between items-center p-5">
        <div className="logo-container flex items-center font-bold text-3xl">
          <FontAwesomeIcon className="mx-3 "  icon={faCalendarCheck} />
          <h3>Todo App</h3>
        </div>
        <nav>
          <ul className="flex w-50 justify-between items-center">
            <Link rel="stylesheet" href="/todo">
              <li className="relative overflow-hidden rounded-2xl  py-3 px-5 ease-in duration-500
               ">Todo</li>
            </Link>
            <Link rel="stylesheet" href="/#">
              <FontAwesomeIcon icon={faUser} />
            </Link>
          </ul>
        </nav>
      </header>
      {children}</body>
    </html>
  );
}
