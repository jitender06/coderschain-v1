import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Software Development Services | CodersChain',
    description: 'Expert software development services including custom web development, mobile apps, UI/UX design, and emerging technologies.',
    keywords: 'web development, mobile app development, UI/UX design, software development services',
};

export default function ServicesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}