import Header from '@/components/Header'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import ActiveSectionContextProvider from '@/context/active-section-context'
import { notFound } from 'next/navigation'
import NextIntlProvider from './nextIntlProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sakib | Software Engineer',
  description: 'Portfolio showcasing experience and projects',
}

// Can be imported from a shared config
const locales = ['en', 'jp'];
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode,
  params: { locale: string }
}) {
  let messages;
  try {
    messages = (await import(`@/messages/${locale}.json`))
      .default;
  } catch (error) {
    notFound();
  }
  return (
    <html lang={locale}>
      <body className={`${inter.className} relative bg-gray-50 text-gray-950 pt-28 sm:pt-36`}>
        <div className="bg-[#fbe2e3] absolute -z-50 -top-24 right-44 w-[31.25rem] h-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
        <div className="bg-[#dbd7fb] absolute -z-50 -top-4 left-[-35rem] w-[50rem] h-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>
        <NextIntlProvider
          locale={locale}
          messages={messages}
          timeZone={"Europe/Berlin"}
          now={new Date()}
        >
          <ActiveSectionContextProvider>
            <Header />
            {children}
          </ActiveSectionContextProvider>
        </NextIntlProvider>
      </body>
    </html>
  )
}
