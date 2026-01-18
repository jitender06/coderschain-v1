import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Contact Us | Get a Quote for Your Project | Coderschain',
    description: 'Reach out to Coderschain for your software development needs. Get a custom quote for web apps, mobile apps, AI solutions, and more.',
    keywords: ['contact coderschain', 'software development quote', 'hire developers', 'technical support'],
};

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
