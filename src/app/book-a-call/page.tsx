'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, Clock, CheckCircle } from 'lucide-react';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { CalendlyModal } from '@/components/CalendlyModal';

export default function BookACall() {
	return (
		<div className='min-h-screen bg-gradient-to-br from-qb-green-50 via-white to-qb-green-100'>
			{/* Header */}
			<header className='bg-white border-b sticky top-0 z-50'>
				<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='flex justify-between items-center h-16'>
						<Link
							href='/'
							className='flex items-center text-lg font-medium hover:text-primary transition-colors'>
							<ArrowLeft className='mr-2 h-4 w-4' />
							Ray Galloway Bookkeeping
						</Link>
						<div className='flex items-center space-x-4'>
							<Link
								href='/auth'
								className='text-sm font-medium hover:text-primary transition-colors'>
								Client Login
							</Link>
						</div>
					</div>
				</div>
			</header>

			<div className='container mx-auto px-4 sm:px-6 lg:px-8 py-12'>
				<div className='max-w-6xl mx-auto'>
					{/* Header Section */}
					<div className='text-center mb-12'>
						<h1 className='text-4xl sm:text-5xl font-bold mb-6'>
							Book Your{' '}
							<span className='text-primary'>
								FREE Consultation
							</span>
						</h1>
						<p className='text-xl text-muted-foreground max-w-3xl mx-auto mb-8'>
							Let's discuss how I can help streamline your
							bookkeeping and save you 60+ hours per year. No
							obligation, just valuable insights for your
							business.
						</p>

						{/* Trust Badges */}
						<div className='flex flex-wrap justify-center items-center gap-6 mb-8'>
							<div className='flex items-center gap-2'>
								<div className='w-8 h-8 bg-qb-green-100 rounded-full flex items-center justify-center'>
									<span className='text-lg'>🏆</span>
								</div>
								<span className='text-sm font-medium'>
									QuickBooks ProAdvisor
								</span>
							</div>
							<div className='flex items-center gap-2'>
								<div className='w-8 h-8 bg-qb-green-100 rounded-full flex items-center justify-center'>
									<span className='text-lg'>📊</span>
								</div>
								<span className='text-sm font-medium'>
									10+ Years Experience
								</span>
							</div>
							<div className='flex items-center gap-2'>
								<div className='w-8 h-8 bg-qb-green-100 rounded-full flex items-center justify-center'>
									<span className='text-lg'>⭐</span>
								</div>
								<span className='text-sm font-medium'>
									Delaware, Ohio Local
								</span>
							</div>
						</div>
					</div>

					<div className='grid lg:grid-cols-3 gap-8'>
						{/* Left Column - What to Expect */}
						<div className='lg:col-span-1 space-y-6'>
							<Card>
								<CardHeader>
									<CardTitle className='flex items-center gap-2'>
										<Clock className='h-5 w-5 text-primary' />
										What to Expect
									</CardTitle>
								</CardHeader>
								<CardContent>
									<ul className='space-y-3'>
										<li className='flex items-start gap-3'>
											<CheckCircle className='h-5 w-5 text-primary mt-0.5 flex-shrink-0' />
											<span className='text-sm'>
												30-minute consultation call
											</span>
										</li>
										<li className='flex items-start gap-3'>
											<CheckCircle className='h-5 w-5 text-primary mt-0.5 flex-shrink-0' />
											<span className='text-sm'>
												Assessment of your current
												bookkeeping
											</span>
										</li>
										<li className='flex items-start gap-3'>
											<CheckCircle className='h-5 w-5 text-primary mt-0.5 flex-shrink-0' />
											<span className='text-sm'>
												Customized service
												recommendations
											</span>
										</li>
										<li className='flex items-start gap-3'>
											<CheckCircle className='h-5 w-5 text-primary mt-0.5 flex-shrink-0' />
											<span className='text-sm'>
												Transparent pricing discussion
											</span>
										</li>
										<li className='flex items-start gap-3'>
											<CheckCircle className='h-5 w-5 text-primary mt-0.5 flex-shrink-0' />
											<span className='text-sm'>
												No obligation or pressure
											</span>
										</li>
										<li className='flex items-start gap-3'>
											<CheckCircle className='h-5 w-5 text-primary mt-0.5 flex-shrink-0' />
											<span className='text-sm'>
												First-time client pricing offer
											</span>
										</li>
									</ul>
								</CardContent>
							</Card>

							<Card>
								<CardHeader>
									<CardTitle>Perfect For:</CardTitle>
								</CardHeader>
								<CardContent>
									<ul className='space-y-2 text-sm text-muted-foreground'>
										<li>
											• Delaware & Columbus area
											businesses
										</li>
										<li>• Service-based companies</li>
										<li>
											• Growing businesses with messy
											books
										</li>
										<li>
											• Owners spending too much time on
											bookkeeping
										</li>
										<li>
											• Companies needing QuickBooks setup
										</li>
										<li>
											• Businesses preparing for tax
											season
										</li>
									</ul>
								</CardContent>
							</Card>

							<Card className='bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20'>
								<CardContent className='pt-6'>
									<div className='text-center'>
										<div className='w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold'>
											RG
										</div>
										<h3 className='font-semibold mb-2'>
											Hi, I'm Ray Galloway
										</h3>
										<p className='text-sm text-muted-foreground'>
											QuickBooks ProAdvisor with 10+ years
											of experience helping Delaware and
											Columbus area businesses get their
											books in order.
										</p>
									</div>
								</CardContent>
							</Card>
						</div>

						{/* Center Column - Calendly Widget */}
						<div className='lg:col-span-2'>
							<Card className='border-2 border-primary/20'>
								<CardHeader>
									<CardTitle className='flex items-center gap-2 text-xl'>
										<Calendar className='h-6 w-6 text-primary' />
										Schedule Your Free Consultation
									</CardTitle>
									<CardDescription>
										Choose a time that works best for you.
										I'll call you at the scheduled time.
									</CardDescription>
								</CardHeader>
								<CardContent>
									{/* Calendly Inline Widget */}
									<CalendlyModal
										mode='inline'
										className='min-h-[630px]'
									/>
								</CardContent>
							</Card>
						</div>
					</div>

					{/* Bottom CTA */}
					<div className='mt-12 text-center'>
						<div className='bg-white rounded-lg p-8 shadow-lg max-w-2xl mx-auto'>
							<h3 className='text-2xl font-bold mb-4'>
								Ready to Get Started?
							</h3>
							<p className='text-muted-foreground mb-6'>
								Join 100+ Delaware and Columbus area businesses
								that trust Ray with their bookkeeping. Save
								time, reduce errors, and get clear financial
								insights.
							</p>
							<div className='flex flex-col sm:flex-row gap-4 justify-center'>
								<Button size='lg' className='text-lg px-8 py-6'>
									<Calendar className='mr-2 h-5 w-5' />
									Book Your Call Above
								</Button>
								<Button
									variant='outline'
									size='lg'
									className='text-lg px-8 py-6'
									asChild>
									<Link href='tel:555-123-4567'>
										Call (555) 123-4567
									</Link>
								</Button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
