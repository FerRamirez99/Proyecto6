import { Inter } from "next/font/google";
import "./globals.css";
import Provider from './Provider'
import Socials from '../components/Socials'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: 'Portfolio',
  description: 'Project 6: Portfolio',
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
