import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import {
	LocalBusinessStructuredData,
	PersonStructuredData,
	ServiceStructuredData,
} from '@/components/StructuredData';

const inter = Inter({
	variable: '--font-inter',
	subsets: ['latin'],
});

const jetbrainsMono = JetBrains_Mono({
	variable: '--font-jetbrains-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Ray Galloway Bookkeeping | Delaware, OH QuickBooks ProAdvisor',
	description:
		'Professional bookkeeping services for Delaware and Columbus area businesses. QuickBooks ProAdvisor with 10+ years experience. Save 60+ hours per year with expert financial management.',
	keywords:
		'bookkeeping Delaware Ohio, QuickBooks ProAdvisor, Columbus bookkeeping, small business accounting, financial services Delaware OH',
	authors: [{ name: 'Ray Galloway' }],
	creator: 'Ray Galloway',
	publisher: 'Ray Galloway Bookkeeping',
	robots: 'index, follow',
	openGraph: {
		title: 'Ray Galloway Bookkeeping | Delaware, OH QuickBooks ProAdvisor',
		description:
			'Professional bookkeeping services for Delaware and Columbus area businesses. Save 60+ hours per year with expert financial management.',
		url: 'https://ray-portfolio.onrender.com',
		siteName: 'Ray Galloway Bookkeeping',
		locale: 'en_US',
		type: 'website',
		images: [
			{
				url: '/images/og-image.jpg', // TODO: Add actual OG image
				width: 1200,
				height: 630,
				alt: 'Ray Galloway Bookkeeping Services',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Ray Galloway Bookkeeping | Delaware, OH QuickBooks ProAdvisor',
		description:
			'Professional bookkeeping services for Delaware and Columbus area businesses.',
		images: ['/images/og-image.jpg'],
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<head>
				<LocalBusinessStructuredData />
				<PersonStructuredData />
				<ServiceStructuredData />
			</head>
			<body
				className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}>
				{children}
			</body>
		</html>
	);
}
