import { Inter } from "next/font/google";
import "../globals.css";
import Provider from '../Provider'
import Socials from '../../components/Socials'

import i18nConfig from "../../../i18nConfig";
import { dir } from "i18next";

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

export function generateStaticParams() {
  return i18nConfig.locales.map(locale => ({ locale }));
}

export default function RootLayout({ children, params: { locale } }) {
  return (
    <html lang={locale} dir={dir(locale)}>
      <body className={inter.className}>
        <Provider>
          <Socials />
          {children}
        </Provider>
      </body>
    </html>
  );
}
