import { Geist, Geist_Mono } from "next/font/google";
import { Poppins } from "next/font/google";
import { routing } from "@/i18n/routing";
import { AbstractIntlMessages, NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import Script from "next/script"; // Import next/script

import "@/app/globals.css";
import { Metadata } from "next";
import { notFound } from "next/navigation";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const translations = await getTranslations({ locale, namespace: "metadata" });
  const messages = await getMessages();

  const title = translations("title");
  const description = translations("description");

  const info = {
    title,
    description,
    images: [
      {
        url: "/favicon.ico",
      },
    ],
  };

  return {
    title,
    description,
    applicationName: title,
    openGraph: {
      type: "website",
      url: "https://ygcompany.vn",
      siteName: title,
      ...info,
    },
    twitter: {
      ...info,
      card: "summary_large_image",
    },
    keywords: Object.keys(
      (messages.metadata as AbstractIntlMessages).keywords
    ).map(
      (key) =>
        (
          (messages.metadata as AbstractIntlMessages)
            .keywords as AbstractIntlMessages
        )[key] as string
    ),
    icons: "/favicon.ico",
  };
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as (typeof routing.locales)[number])) {
    notFound();
  }

  const messages = await getMessages();

  return (
    <html lang={locale} className={poppins.variable}>
      <head>
        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-F5KLVK5QP8"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-F5KLVK5QP8');
          `}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
