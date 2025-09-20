'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ThankYouModal } from '@/components/ThankYouModal';
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
} from 'lucide-react';

export default function FreeGuide() {
	const [showThankYouModal, setShowThankYouModal] = useState(false);
	const [formError, setFormError] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const [formData, setFormData] = useState({
		firstName: '',
		lastName: '',
		email: '',
		businessName: '',
		businessType: '',
		grossRevenue: '',
	});

	const handleInputChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) => {
		// Clear any existing error when user starts typing
		if (formError) {
			setFormError('');
		}

		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleGetGuideClick = async () => {
		// Clear any previous errors
		setFormError('');

		// Basic validation
		if (!formData.firstName.trim()) {
			setFormError('Please enter your first name');
			return;
		}

		if (!formData.email.trim()) {
			setFormError('Please enter your email address');
			return;
		}

		// Email format validation
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(formData.email)) {
			setFormError('Please enter a valid email address');
			return;
		}

		setIsLoading(true);

		try {
			// TODO: Integrate with email service to send the guide
			console.log('Guide requested for:', formData);

			// Simulate API call
			await new Promise((resolve) => setTimeout(resolve, 1000));

			// Show thank you modal
			setShowThankYouModal(true);
		} catch (error) {
			console.error('Error requesting guide:', error);
			setFormError(
				'There was an error processing your request. Please try again.'
			);
		} finally {
			setIsLoading(false);
		}
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		// Use the same validation as the button click
		await handleGetGuideClick();
	};

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
								Columbus Area Service Businesses
							</span>
						</h1>

						<p className='text-xl text-muted-foreground mb-8 max-w-3xl mx-auto'>
							Discover the insider strategies I use to help
							Columbus area service businesses save 60+ hours per
							year and increase their profit margins by an average
							of 18%.
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
										title: 'Columbus Area Tax Strategies',
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
										2. Ray's local knowledge of Columbus
										area business regulations is
										invaluable."
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
												Mitchell Consulting, Columbus OH
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

										<div>
											<Label htmlFor='grossRevenue'>
												Annual Gross Revenue
											</Label>
											<select
												id='grossRevenue'
												name='grossRevenue'
												value={formData.grossRevenue}
												onChange={handleInputChange}
												className='w-full mt-1 px-3 py-2 border border-input rounded-md bg-background'>
												<option value=''>
													Select your revenue range
												</option>
												<option value='under-100k'>
													Under $100,000
												</option>
												<option value='100k-250k'>
													$100,000 - $250,000
												</option>
												<option value='250k-500k'>
													$250,000 - $500,000
												</option>
												<option value='500k-1m'>
													$500,000 - $1,000,000
												</option>
												<option value='1m-2m'>
													$1,000,000 - $2,000,000
												</option>
												<option value='over-2m'>
													Over $2,000,000
												</option>
											</select>
										</div>

										{/* Error Message */}
										{formError && (
											<div className='bg-red-50 border border-red-200 rounded-md p-3 mb-4'>
												<p className='text-sm text-red-600 font-medium'>
													{formError}
												</p>
											</div>
										)}

										<Button
											type='button'
											className='w-full text-lg py-6 mt-6'
											onClick={handleGetGuideClick}
											disabled={isLoading}>
											{isLoading ? (
												<>
													<div className='mr-2 h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent' />
													Sending...
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
									Trusted by Columbus area businesses
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

			{/* Thank You Modal */}
			<ThankYouModal
				isOpen={showThankYouModal}
				onClose={() => setShowThankYouModal(false)}
				title='Thank You for Your Request!'
				description='Your free guide "7 Financial Tricks for Columbus Area Service Businesses" will be emailed to you shortly.'
				userEmail={formData.email}
			/>
		</div>
	);
}
