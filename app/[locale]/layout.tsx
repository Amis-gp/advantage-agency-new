import { NextIntlClientProvider } from 'next-intl';
import { notFound } from 'next/navigation';
import { GoogleTagManager } from '@next/third-parties/google';
import { clashGrotesk } from '@/fonts/ClashGrotesk';
import { Metadata } from 'next';
import '../globals.css';

export function generateStaticParams() {
  return [{ locale: 'ua' }, { locale: 'en' }];
}

export const metadata: Metadata = {
  title: 'Advantage Agency',
  description: 'Digital marketing agency',
  icons: {
    icon: [
      {
        url: '/img/favicon.svg',
        sizes: 'any',
      },
    ]
  }
};

export default async function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  let messages;
  try {
    messages = (await import(`@/messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale} className={clashGrotesk.variable}>
      <GoogleTagManager gtmId="GTM-P2P44NGZ" />
      <body className="font-clash-grotesk">
        <NextIntlClientProvider messages={messages} locale={locale}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}