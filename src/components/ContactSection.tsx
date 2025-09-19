'use client';

import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { CalendlyModal } from './CalendlyModal';
import {
	Phone,
	Mail,
	MapPin,
	Clock,
	CheckCircle,
	Calendar,
} from 'lucide-react';

// TODO: Replace placeholder contact information with Ray's actual details
// See SETUP.md for detailed instructions on customizing content

export default function ContactSection() {
	return (
		<section
			id='contact'
			className='py-20 bg-gradient-to-br from-qb-green-50 to-white'>
			<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='max-w-6xl mx-auto'>
					{/* Header */}
					<div className='text-center mb-16'>
						<h2 className='text-3xl sm:text-4xl font-bold mb-4'>
							Ready to Get Your Books in Order?
						</h2>
						<p className='text-xl text-muted-foreground max-w-3xl mx-auto'>
							Let&apos;s discuss how I can help streamline your
							bookkeeping and save you 60+ hours per year. Get
							started with a free consultation.
						</p>
					</div>

					<div className='grid lg:grid-cols-2 gap-12'>
						{/* Left Column - Contact Info */}
						<div>
							<h3 className='text-2xl font-bold mb-8'>
								Get in Touch
							</h3>

							{/* Contact Methods */}
							<div className='space-y-6 mb-8'>
								<div className='flex items-center'>
									<div className='w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4'>
										<Phone className='h-6 w-6 text-primary' />
									</div>
									<div>
										<p className='font-semibold'>Phone</p>
										<p className='text-muted-foreground'>
											(555) 123-4567
										</p>
									</div>
								</div>

								<div className='flex items-center'>
									<div className='w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4'>
										<Mail className='h-6 w-6 text-primary' />
									</div>
									<div>
										<p className='font-semibold'>Email</p>
										<p className='text-muted-foreground'>
											ray@gallowaybookkeeping.com
										</p>
									</div>
								</div>

								<div className='flex items-center'>
									<div className='w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4'>
										<MapPin className='h-6 w-6 text-primary' />
									</div>
									<div>
										<p className='font-semibold'>
											Service Area
										</p>
										<p className='text-muted-foreground'>
											Columbus Area
										</p>
									</div>
								</div>

								<div className='flex items-center'>
									<div className='w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4'>
										<Clock className='h-6 w-6 text-primary' />
									</div>
									<div>
										<p className='font-semibold'>
											Business Hours
										</p>
										<p className='text-muted-foreground'>
											Monday - Friday: 9:00 AM - 5:00 PM
										</p>
									</div>
								</div>
							</div>
						</div>

						{/* Right Column - Calendly Inline */}
						<div>
							<Card className='shadow-lg'>
								<CardHeader>
									<CardTitle className='flex items-center gap-2'>
										<Calendar className='h-6 w-6 text-primary' />
										Schedule Your Free Consultation
									</CardTitle>
								</CardHeader>
								<CardContent>
									<div className='text-center mb-4'>
										<p className='text-muted-foreground'>
											Pick a time that works for you.
											I&apos;ll call you at your scheduled
											time to discuss your bookkeeping
											needs.
										</p>
									</div>

									{/* Calendly Inline Widget */}
									<CalendlyModal
										mode='inline'
										className='min-h-[600px] w-full'
									/>
								</CardContent>
							</Card>
						</div>
					</div>

					{/* Bottom Trust Section */}
					<div className='mt-16 text-center'>
						<div className='grid md:grid-cols-3 gap-8 max-w-4xl mx-auto'>
							<div className='flex flex-col items-center'>
								<CheckCircle className='h-8 w-8 text-primary mb-2' />
								<h4 className='font-semibold mb-1'>
									Free Consultation
								</h4>
								<p className='text-sm text-muted-foreground'>
									No obligation 30-minute discussion about
									your bookkeeping needs
								</p>
							</div>
							<div className='flex flex-col items-center'>
								<CheckCircle className='h-8 w-8 text-primary mb-2' />
								<h4 className='font-semibold mb-1'>
									Quick Response
								</h4>
								<p className='text-sm text-muted-foreground'>
									I respond to all inquiries within 24 hours,
									usually much sooner
								</p>
							</div>
							<div className='flex flex-col items-center'>
								<CheckCircle className='h-8 w-8 text-primary mb-2' />
								<h4 className='font-semibold mb-1'>
									Local Expert
								</h4>
								<p className='text-sm text-muted-foreground'>
									Columbus area specialist with 10+ years
									experience
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
