'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
	ArrowLeft,
	Download,
	CheckCircle,
	Star,
	Users,
	Clock,
	Shield,
	TrendingUp,
	DollarSign,
	FileText,
	Mail,
	Gift,
} from 'lucide-react';

export default function FreeGuide() {
	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
		email: '',
		businessName: '',
		businessType: '',
	});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [isSubmitted, setIsSubmitted] = useState(false);

	const handleInputChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		// Basic validation
		if (!formData.firstName || !formData.email) {
			alert('Please fill in all required fields');
			return;
		}

		setIsSubmitting(true);

		// Simulate form submission (replace with actual email service integration)
		try {
			// TODO: Integrate with email service (ConvertKit, Mailchimp, etc.)
			console.log('Lead magnet form submitted:', formData);

			// Simulate API call
			await new Promise((resolve) => setTimeout(resolve, 2000));

			setIsSubmitted(true);
		} catch (error) {
			console.error('Form submission error:', error);
			alert('There was an error submitting the form. Please try again.');
		} finally {
			setIsSubmitting(false);
		}
	};

	if (isSubmitted) {
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
						</div>
					</div>
				</header>

				{/* Thank You Content */}
				<div className='container mx-auto px-4 sm:px-6 lg:px-8 py-12'>
					<div className='max-w-4xl mx-auto text-center'>
						<div className='mb-8'>
							<CheckCircle className='h-20 w-20 text-green-500 mx-auto mb-6' />
							<h1 className='text-4xl sm:text-5xl font-bold mb-6'>
								Thank You, {formData.firstName}!
							</h1>
							<p className='text-xl text-muted-foreground mb-8'>
								Your free guide is ready for download. Check
								your email for the download link and bonus tips
								for Delaware service businesses.
							</p>
						</div>

						{/* Download Button */}
						<Card className='bg-white shadow-xl border-2 border-primary/20 mb-8 max-w-2xl mx-auto'>
							<CardContent className='pt-8'>
								<div className='flex items-center justify-center mb-6'>
									<div className='w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mr-4'>
										<FileText className='h-8 w-8 text-primary' />
									</div>
									<div className='text-left'>
										<h3 className='text-xl font-bold'>
											7 Financial Tricks for Delaware
											Service Businesses
										</h3>
										<p className='text-muted-foreground'>
											PDF Guide • 15 pages • Instant
											download
										</p>
									</div>
								</div>

								<Button
									size='lg'
									className='w-full text-lg py-6 mb-4'
									onClick={() => {
										// TODO: Trigger actual PDF download
										console.log('Downloading PDF guide...');
										alert(
											'PDF download would start here. Add actual PDF file to public/downloads/'
										);
									}}>
									<Download className='mr-2 h-5 w-5' />
									Download Your Free Guide Now
								</Button>

								<p className='text-sm text-muted-foreground'>
									Can't download? Check your email for the
									direct link.
								</p>
							</CardContent>
						</Card>

						{/* Next Steps */}
						<div className='grid md:grid-cols-2 gap-6 mb-12'>
							<Card>
								<CardContent className='pt-6'>
									<Mail className='h-12 w-12 text-primary mx-auto mb-4' />
									<h3 className='font-bold mb-2'>
										Check Your Email
									</h3>
									<p className='text-sm text-muted-foreground'>
										We've sent you the download link plus 3
										bonus tips specifically for Delaware and
										Columbus area businesses.
									</p>
								</CardContent>
							</Card>

							<Card>
								<CardContent className='pt-6'>
									<Gift className='h-12 w-12 text-primary mx-auto mb-4' />
									<h3 className='font-bold mb-2'>
										Bonus Content
									</h3>
									<p className='text-sm text-muted-foreground'>
										Get access to our exclusive email
										series: "The Delaware Business Owner's
										Guide to Stress-Free Bookkeeping"
									</p>
								</CardContent>
							</Card>
						</div>

						{/* CTA Section */}
						<div className='bg-white rounded-xl shadow-lg p-8'>
							<h3 className='text-2xl font-bold mb-4'>
								Ready to Get Your Books in Order?
							</h3>
							<p className='text-muted-foreground mb-6'>
								Let's discuss how I can help implement these
								strategies for your{' '}
								{formData.businessName || 'business'}.
							</p>
							<div className='flex flex-col sm:flex-row gap-4 justify-center'>
								<Button size='lg' asChild>
									<Link href='/book-a-call'>
										Schedule Free Consultation
									</Link>
								</Button>
								<Button variant='outline' size='lg' asChild>
									<Link href='/'>
										Learn More About My Services
									</Link>
								</Button>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}

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
							<span className='text-sm font-medium text-primary'>
								100% Free • No Credit Card Required
							</span>
						</div>
					</div>
				</div>
			</header>

			<div className='container mx-auto px-4 sm:px-6 lg:px-8 py-12'>
				<div className='max-w-6xl mx-auto'>
					{/* Hero Section */}
					<div className='text-center mb-12'>
						<div className='inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6'>
							<Star className='h-4 w-4 text-primary' />
							<span className='text-sm font-medium text-primary'>
								FREE DOWNLOAD
							</span>
						</div>

						<h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold mb-6'>
							7 Financial Tricks for
							<br />
							<span className='text-primary'>
								Delaware Service Businesses
							</span>
						</h1>

						<p className='text-xl text-muted-foreground mb-8 max-w-3xl mx-auto'>
							Discover the insider strategies I use to help
							Delaware and Columbus area service businesses save
							60+ hours per year and increase their profit margins
							by an average of 18%.
						</p>

						{/* Social Proof */}
						<div className='flex flex-wrap justify-center items-center gap-6 mb-8'>
							<div className='flex items-center gap-2'>
								<Users className='h-5 w-5 text-primary' />
								<span className='text-sm font-medium'>
									Downloaded by 500+ business owners
								</span>
							</div>
							<div className='flex items-center gap-2'>
								<Clock className='h-5 w-5 text-primary' />
								<span className='text-sm font-medium'>
									15-minute read
								</span>
							</div>
							<div className='flex items-center gap-2'>
								<Shield className='h-5 w-5 text-primary' />
								<span className='text-sm font-medium'>
									100% Free
								</span>
							</div>
						</div>
					</div>

					<div className='grid lg:grid-cols-2 gap-12 items-start'>
						{/* Left Column - Benefits */}
						<div>
							<h2 className='text-2xl font-bold mb-6'>
								What You'll Learn Inside:
							</h2>

							<div className='space-y-4 mb-8'>
								{[
									{
										icon: (
											<DollarSign className='h-6 w-6' />
										),
										title: 'The Delaware Tax Advantage',
										description:
											'How to leverage local tax incentives that 90% of service businesses miss',
									},
									{
										icon: (
											<TrendingUp className='h-6 w-6' />
										),
										title: 'Cash Flow Optimization',
										description:
											'Simple strategies to improve your cash flow by 25% in 90 days',
									},
									{
										icon: <FileText className='h-6 w-6' />,
										title: 'Expense Tracking Secrets',
										description:
											'The 5-category system that saves business owners 10+ hours per month',
									},
									{
										icon: (
											<CheckCircle className='h-6 w-6' />
										),
										title: 'QuickBooks Shortcuts',
										description:
											'Power-user tips that cut your bookkeeping time in half',
									},
									{
										icon: <Shield className='h-6 w-6' />,
										title: 'Audit-Proof Documentation',
										description:
											'How to organize your records so you never fear an IRS audit again',
									},
									{
										icon: <Users className='h-6 w-6' />,
										title: 'Local Business Networks',
										description:
											'Columbus-area resources and connections for service businesses',
									},
									{
										icon: <Clock className='h-6 w-6' />,
										title: 'Year-End Planning',
										description:
											'The December checklist that saves thousands in taxes',
									},
								].map((benefit, index) => (
									<div
										key={index}
										className='flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm'>
										<div className='w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary flex-shrink-0'>
											{benefit.icon}
										</div>
										<div>
											<h3 className='font-semibold mb-1'>
												{benefit.title}
											</h3>
											<p className='text-sm text-muted-foreground'>
												{benefit.description}
											</p>
										</div>
									</div>
								))}
							</div>

							{/* Testimonial */}
							<Card className='bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20'>
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
										"This guide helped me identify $3,200 in
										missed deductions and streamline my
										monthly bookkeeping from 8 hours to just
										2. Ray's local knowledge of Delaware
										business regulations is invaluable."
									</p>
									<div className='flex items-center'>
										<div className='w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center mr-3'>
											<span className='text-primary font-semibold text-sm'>
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
						</div>

						{/* Right Column - Form */}
						<div className='lg:sticky lg:top-24'>
							<Card className='bg-white shadow-2xl border-2 border-primary/20'>
								<CardHeader className='text-center pb-6'>
									<CardTitle className='text-2xl mb-2'>
										Get Your Free Guide
									</CardTitle>
									<p className='text-muted-foreground'>
										Enter your details below for instant
										access
									</p>
								</CardHeader>

								<CardContent>
									<form
										onSubmit={handleSubmit}
										className='space-y-4'>
										<div className='grid grid-cols-2 gap-4'>
											<div>
												<Label htmlFor='firstName'>
													First Name *
												</Label>
												<Input
													id='firstName'
													name='firstName'
													value={formData.firstName}
													onChange={handleInputChange}
													required
													className='mt-1'
													placeholder='Ray'
												/>
											</div>
											<div>
												<Label htmlFor='lastName'>
													Last Name
												</Label>
												<Input
													id='lastName'
													name='lastName'
													value={formData.lastName}
													onChange={handleInputChange}
													className='mt-1'
													placeholder='Galloway'
												/>
											</div>
										</div>

										<div>
											<Label htmlFor='email'>
												Email Address *
											</Label>
											<Input
												id='email'
												name='email'
												type='email'
												value={formData.email}
												onChange={handleInputChange}
												required
												className='mt-1'
												placeholder='ray@yourbusiness.com'
											/>
										</div>

										<div>
											<Label htmlFor='businessName'>
												Business Name
											</Label>
											<Input
												id='businessName'
												name='businessName'
												value={formData.businessName}
												onChange={handleInputChange}
												className='mt-1'
												placeholder='Your Business Name'
											/>
										</div>

										<div>
											<Label htmlFor='businessType'>
												Business Type
											</Label>
											<select
												id='businessType'
												name='businessType'
												value={formData.businessType}
												onChange={handleInputChange}
												className='w-full mt-1 px-3 py-2 border border-input rounded-md bg-background'>
												<option value=''>
													Select your business type
												</option>
												<option value='consulting'>
													Consulting
												</option>
												<option value='construction'>
													Construction
												</option>
												<option value='healthcare'>
													Healthcare
												</option>
												<option value='professional-services'>
													Professional Services
												</option>
												<option value='restaurant'>
													Restaurant/Food Service
												</option>
												<option value='retail'>
													Retail
												</option>
												<option value='other'>
													Other
												</option>
											</select>
										</div>

										<Button
											type='submit'
											className='w-full text-lg py-6 mt-6'
											disabled={isSubmitting}>
											{isSubmitting ? (
												<>
													<div className='animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2'></div>
													Preparing Your Guide...
												</>
											) : (
												<>
													<Download className='mr-2 h-5 w-5' />
													Get My Free Guide Now
												</>
											)}
										</Button>

										<p className='text-xs text-muted-foreground text-center mt-4'>
											By downloading this guide, you agree
											to receive helpful bookkeeping tips
											via email. You can unsubscribe at
											any time. No spam, ever.
										</p>
									</form>
								</CardContent>
							</Card>

							{/* Trust Indicators */}
							<div className='mt-6 text-center'>
								<p className='text-sm font-medium text-muted-foreground mb-3'>
									Trusted by Delaware & Columbus area
									businesses
								</p>
								<div className='flex justify-center items-center gap-4'>
									<div className='text-center'>
										<div className='text-lg font-bold text-primary'>
											500+
										</div>
										<div className='text-xs text-muted-foreground'>
											Downloads
										</div>
									</div>
									<div className='text-center'>
										<div className='text-lg font-bold text-primary'>
											4.9★
										</div>
										<div className='text-xs text-muted-foreground'>
											Rating
										</div>
									</div>
									<div className='text-center'>
										<div className='text-lg font-bold text-primary'>
											100+
										</div>
										<div className='text-xs text-muted-foreground'>
											Clients
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
