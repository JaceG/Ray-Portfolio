'use client';

import { HeroSection } from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import GrowthSection from '@/components/GrowthSection';
import { BenefitsSection } from '@/components/BenefitsSection';
import AboutSection from '@/components/AboutSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Calendar } from 'lucide-react';
import { CalendlyModal } from '@/components/CalendlyModal';
import { TrustSection } from '@/components/TrustSection';
import { LeadMagnetSection } from '@/components/LeadMagnetSection';
import Link from 'next/link';

export default function Home() {
	const scrollToContact = () => {
		document
			.getElementById('contact')
			?.scrollIntoView({ behavior: 'smooth' });
	};

	return (
		<div className='min-h-screen'>
			{/* Navigation Header */}
			<header className='sticky top-0 z-50 bg-white border-b'>
				<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='flex justify-between items-center h-16'>
						<div className='flex items-center'>
							<a
								href='/'
								className='text-xl font-bold text-primary'>
								Ray Galloway
							</a>
						</div>

						{/* Desktop Navigation */}
						<nav className='hidden md:flex items-center space-x-8'>
							<a
								href='#services'
								className='text-sm font-medium hover:text-primary transition-colors'>
								Services
							</a>
							<a
								href='#benefits'
								className='text-sm font-medium hover:text-primary transition-colors'>
								Benefits
							</a>
							<a
								href='#about'
								className='text-sm font-medium hover:text-primary transition-colors'>
								About
							</a>
							<Link
								href='/blog'
								className='text-sm font-medium hover:text-primary transition-colors'>
								Blog
							</Link>
							<a
								href='#contact'
								className='text-sm font-medium hover:text-primary transition-colors'>
								Contact
							</a>
						</nav>

						<div className='flex items-center space-x-4'>
							<a
								href='/auth'
								className='hidden sm:block text-sm font-medium hover:text-primary transition-colors'>
								Client Login
							</a>
							<CalendlyModal
								buttonText='Free Consultation'
								buttonSize='sm'
							/>
						</div>
					</div>
				</div>
			</header>

			<main>
				<HeroSection />
				<ServicesSection />
				<GrowthSection />
				<BenefitsSection />
				<LeadMagnetSection />
				<TrustSection />
				<AboutSection />
				<TestimonialsSection />
				<ContactSection />
			</main>

			<Footer />

			{/* Floating CTA Button */}
			<div className='fixed bottom-6 right-6 z-50'>
				<CalendlyModal
					buttonText='Book Free Call'
					buttonSize='lg'
					buttonClassName='shadow-lg hover:shadow-xl transition-shadow duration-200 px-6 py-3'
				/>
			</div>
		</div>
	);
}
