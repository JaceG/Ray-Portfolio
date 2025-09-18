import { LeadMagnetForm } from './LeadMagnetForm';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import {
	Download,
	Star,
	Users,
	Clock,
	CheckCircle,
	ArrowRight,
	Gift,
	FileText,
	TrendingUp,
} from 'lucide-react';
import Link from 'next/link';

export function LeadMagnetSection() {
	return (
		<section className='py-20 bg-gradient-to-br from-primary/5 to-primary/10'>
			<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='max-w-6xl mx-auto'>
					{/* Section Header */}
					<div className='text-center mb-12'>
						<div className='inline-flex items-center gap-2 px-4 py-2 bg-primary/20 rounded-full mb-6'>
							<Gift className='h-4 w-4 text-primary' />
							<span className='text-sm font-medium text-primary'>
								FREE RESOURCE
							</span>
						</div>

						<h2 className='text-3xl sm:text-4xl font-bold mb-6'>
							Get Your Free Financial Guide
						</h2>

						<p className='text-xl text-muted-foreground max-w-3xl mx-auto'>
							Download "7 Financial Tricks for Delaware Service
							Businesses" and discover the insider strategies that
							help local businesses save 60+ hours per year.
						</p>
					</div>

					<div className='grid lg:grid-cols-2 gap-12 items-center'>
						{/* Left Column - Benefits & Preview */}
						<div>
							{/* Guide Preview */}
							<Card className='bg-white shadow-lg mb-8'>
								<CardContent className='pt-6'>
									<div className='flex items-center mb-6'>
										<div className='w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mr-4'>
											<FileText className='h-8 w-8 text-primary' />
										</div>
										<div>
											<h3 className='text-xl font-bold'>
												7 Financial Tricks for Delaware
												Service Businesses
											</h3>
											<p className='text-muted-foreground'>
												15-page PDF guide • Instant
												download
											</p>
										</div>
									</div>

									<div className='grid grid-cols-3 gap-4 text-center mb-6'>
										<div>
											<div className='text-2xl font-bold text-primary'>
												500+
											</div>
											<div className='text-xs text-muted-foreground'>
												Downloads
											</div>
										</div>
										<div>
											<div className='text-2xl font-bold text-primary'>
												4.9★
											</div>
											<div className='text-xs text-muted-foreground'>
												Rating
											</div>
										</div>
										<div>
											<div className='text-2xl font-bold text-primary'>
												15
											</div>
											<div className='text-xs text-muted-foreground'>
												Minutes
											</div>
										</div>
									</div>
								</CardContent>
							</Card>

							{/* Key Benefits */}
							<div className='space-y-4'>
								<h3 className='text-xl font-bold mb-4'>
									What You'll Learn:
								</h3>

								{[
									{
										icon: (
											<TrendingUp className='h-5 w-5' />
										),
										title: 'Delaware Tax Advantages',
										description:
											'Local incentives 90% of businesses miss',
									},
									{
										icon: <Clock className='h-5 w-5' />,
										title: 'Time-Saving Systems',
										description:
											'Cut bookkeeping time in half',
									},
									{
										icon: (
											<CheckCircle className='h-5 w-5' />
										),
										title: 'Audit-Proof Organization',
										description:
											'Never fear an IRS audit again',
									},
									{
										icon: <Users className='h-5 w-5' />,
										title: 'Columbus Area Resources',
										description:
											'Local networks and connections',
									},
								].map((benefit, index) => (
									<div
										key={index}
										className='flex items-center gap-3 p-3 bg-white rounded-lg'>
										<div className='w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary'>
											{benefit.icon}
										</div>
										<div>
											<h4 className='font-semibold text-sm'>
												{benefit.title}
											</h4>
											<p className='text-xs text-muted-foreground'>
												{benefit.description}
											</p>
										</div>
									</div>
								))}
							</div>

							{/* Social Proof */}
							<Card className='bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20 mt-8'>
								<CardContent className='pt-6'>
									<div className='flex text-yellow-400 mb-3'>
										{[...Array(5)].map((_, i) => (
											<Star
												key={i}
												className='h-4 w-4 fill-current'
											/>
										))}
									</div>
									<p className='text-sm italic mb-4'>
										"This guide saved me $3,200 in missed
										deductions and cut my monthly
										bookkeeping from 8 hours to 2. Ray's
										local Delaware expertise is invaluable."
									</p>
									<div className='flex items-center'>
										<div className='w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center mr-3'>
											<span className='text-primary font-semibold text-xs'>
												SM
											</span>
										</div>
										<div>
											<p className='font-semibold text-sm'>
												Sarah Mitchell
											</p>
											<p className='text-xs text-muted-foreground'>
												Mitchell Consulting, Delaware OH
											</p>
										</div>
									</div>
								</CardContent>
							</Card>

							{/* Alternative CTA */}
							<div className='mt-6 text-center'>
								<Button variant='outline' size='lg' asChild>
									<Link href='/free-guide'>
										View Full Landing Page
										<ArrowRight className='ml-2 h-4 w-4' />
									</Link>
								</Button>
							</div>
						</div>

						{/* Right Column - Form */}
						<div>
							<LeadMagnetForm
								title='Download Your Free Guide'
								description='Enter your details for instant access'
								buttonText='Get My Free Guide Now'
								variant='default'
							/>
						</div>
					</div>

					{/* Bottom CTA */}
					<div className='mt-16 text-center'>
						<div className='bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto'>
							<h3 className='text-2xl font-bold mb-4'>
								Ready to Transform Your Business Finances?
							</h3>
							<p className='text-muted-foreground mb-6'>
								After downloading the guide, let's discuss how I
								can help implement these strategies for your
								Delaware or Columbus area business.
							</p>
							<div className='flex flex-col sm:flex-row gap-4 justify-center'>
								<Button size='lg' asChild>
									<Link href='/book-a-call'>
										Schedule Free Consultation
									</Link>
								</Button>
								<Button variant='outline' size='lg' asChild>
									<Link href='/free-guide'>
										<Download className='mr-2 h-4 w-4' />
										Download Guide First
									</Link>
								</Button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
