import { SiteConfig } from '@/lib/site-config';
import Link from 'next/link';
import { ThemeToggle } from '@/components/theme/ThemeToggle';
import { Typography } from '../ui/Typography';
import Image from "next/image";

export function Header() {
    return (
        <header className="bg-background sticky top-0 z-40 w-full border-b">
            <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
                <div className="flex gap-6 md:gap-10">
                    <Image src="images/logo.svg" alt="app logo" width={50} height={35}/>
                    <Typography variant="h3" as={Link} href="/">
                        {SiteConfig.title}
                    </Typography>
                </div>

                <div className="flex flex-1 items-center justify-end space-x-4">
                    <nav className="flex items-center space-x-1">
                        <ThemeToggle />
                    </nav>
                </div>
            </div>
        </header>
    );
}