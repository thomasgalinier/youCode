import { Footer } from '@/components/base/Footer';
import { Header } from '@/components/base/Header';
import { TailwindIndicator } from '@/lib/utils/TailwindIndicator';
import { SiteConfig } from '@/lib/site-config';
import { cn } from '@/lib/utils';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { PropsWithChildren } from 'react';
import { Providers } from './Provider';
import './globals.css';
import {SessionProvider} from "next-auth/react";
import {getAuthSession} from "@/lib/auth";

const fontSans = Inter({ subsets: ['latin'], variable: '--font-sans' });



export default async function RootLayout({ children }: PropsWithChildren) {

    const session = await getAuthSession()
  return (
      <>
        <html lang="en" className="h-full" suppressHydrationWarning>
        <head />

        <body
            className={cn(
                'h-full bg-background font-sans antialiased',
                fontSans.variable
            )}
        >
        <Providers>
          <div className="relative flex min-h-screen flex-col">
            <Header />
            <div className="flex-1">{children}</div>
            <Footer />
          </div>
          <TailwindIndicator />
        </Providers>
        </body>
        </html>
      </>
  );
}