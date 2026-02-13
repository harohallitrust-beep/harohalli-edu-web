import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Harohalli Education Society | Empowering Future Generations",
  description: "Official website of Harohalli Education Society. Providing quality education through our group of institutions.",
  icons: {
    icon: "/images/logo/favicon-32.png",
    shortcut: "/images/logo/favicon-16.png",
    apple: "/images/logo/logo-180.png",
  },
  openGraph: {
    images: ["/images/logo/og-image-1200x630.jpg"],
  },
};

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
