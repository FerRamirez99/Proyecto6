import { Inter } from "next/font/google";
import "./globals.css";
import Provider from './Provider'
import Socials from '../components/Socials'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: 'Portfolio',
  description: 'Project 6: Portfolio',
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: '/images/icon-light.ico',
        href: '/images/icon-light.ico',
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: '/images/icon.ico',
        href: '/images/icon-dark.ico',
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <Socials />
          {children}
        </Provider>
      </body>
    </html>
  );
}
