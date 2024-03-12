'use client'

import {SessionProvider} from 'next-auth/react';
import {ThemeProvider} from 'next-themes';
import {PropsWithChildren} from 'react';
import {Toaster} from 'sonner';
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

const queryClient = new QueryClient();

export const Providers = ({children}: PropsWithChildren) => {
    return (
        <>
            <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
                <Toaster/>
                <SessionProvider>
                    <QueryClientProvider client={queryClient}>
                        {children}
                    </QueryClientProvider>
                </SessionProvider>
            </ThemeProvider>
        </>
    );
};
