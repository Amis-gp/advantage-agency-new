import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { GoogleTagManager } from '@next/third-parties/google'
import { LanguageProvider } from './context/LanguageContext';
import Header from '../components/Header';
import { ReactNode } from 'react';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Advantage Agency",
  description: "Digital marketing agency",
  icons: {
    icon: '/img/favicon.svg'
  },
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps): JSX.Element {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-P2P44NGZ" />
      <body className={inter.className}>
        <LanguageProvider>
          <Header/>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
