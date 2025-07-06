import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = {
    title: 'Thibaut - Portfolio',
    description: 'Full-stack developer portfolio showcasing modern web applications',
};
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" data-oid="hg344n1">
            <body className="" data-oid="15iq3yh">
                {children}
            </body>
        </html>
    );
}
