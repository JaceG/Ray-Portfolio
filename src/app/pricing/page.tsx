import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CalendlyModal } from '@/components/CalendlyModal';
import { ROICalculator } from '@/components/ROICalculator';
import {
	ArrowLeft,
	Check,
	X,
	Calculator,
	TrendingUp,
	Clock,
	Shield,
	Award,
	Hammer,
	Building,
	Star,
	Phone,
	Mail,
} from 'lucide-react';

export const metadata = {
	title: 'Professional Bookkeeping Pricing | Columbus Ohio | Ray Galloway',
	description:
		'Transparent pricing for professional bookkeeping services. Packages designed for Columbus Ohio area businesses. First month 50% off.',
	keywords:
		'bookkeeping pricing, Columbus Ohio accounting costs, small business bookkeeping rates, QuickBooks ProAdvisor pricing',
};

interface PricingTier {
	name: string;
	price: string;
	originalPrice?: string;
	description: string;
	features: string[];
	notIncluded?: string[];
	recommended?: boolean;
	popular?: boolean;
	ctaText: string;
	ideal: string;
}

const pricingTiers: PricingTier[] = [
	{
		name: 'Startup Business',
		price: '$597',
		originalPrice: '$895',
		description: 'Perfect for new businesses getting organized',
		features: [
			'Monthly bookkeeping & reconciliation',
			'Basic financial reporting',
			'Quarterly financial statements',
			'Tax-ready financial organization',
			'QuickBooks setup & training',
			'Email support',
			'Monthly check-in call',
		],
		notIncluded: [
			'Weekly reporting',
			'Advanced analytics',
			'Payroll processing',
		],
		ideal: 'New businesses, basic bookkeeping needs',
		ctaText: 'Start Startup Package',
	},
	{
		name: 'Growing Business',
		price: '$997',
		originalPrice: '$1,495',
		description: 'Comprehensive bookkeeping for established businesses',
		features: [
			'Everything in Startup Package',
			'Advanced financial analysis & profitability tracking',
			'Weekly financial reports',
			'Cash flow forecasting',
			'Vendor payment tracking',
			'Asset depreciation management',
			'Priority phone support',
			'Bi-weekly strategy calls',
		],
		notIncluded: ['Daily bookkeeping', 'Payroll processing'],
		recommended: true,
		popular: true,
		ideal: 'Established businesses, moderate complexity',
		ctaText: 'Choose Growing Package',
	},
	{
		name: 'Enterprise Business',
		price: '$2,197',
		originalPrice: '$3,295',
		description:
			'Full-service financial management for large business operations',
		features: [
			'Everything in Growing Package',
			'Daily bookkeeping & transaction monitoring',
			'Multi-location dashboard',
			'Payroll processing & reporting',
			'Tax-ready financial planning',
			'Investor-ready financial statements',
			'Same-day response guarantee',
			'Weekly strategy sessions',
			'CFO-level insights',
		],
		ideal: 'Large businesses, complex operations, multiple locations',
		ctaText: 'Get Enterprise Package',
	},
];

export default function PricingPage() {
	return (
		<div className='min-h-screen bg-white'>
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
							<CalendlyModal
								buttonText='Free Consultation'
								buttonSize='sm'
							/>
						</div>
					</div>
				</div>
			</header>

			{/* Hero Section */}
			<section className='py-16 bg-gradient-to-br from-qb-green-50 via-white to-qb-green-100'>
				<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='max-w-4xl mx-auto text-center'>
						<div className='inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6'>
							<Hammer className='h-4 w-4 text-primary' />
							<span className='text-sm font-medium text-primary'>
								BUSINESS SPECIALISTS
							</span>
						</div>

						<h1 className='text-4xl sm:text-5xl font-bold mb-6'>
							Transparent Pricing for
							<br />
							<span className='text-primary'>
								Columbus Ohio Businesses
							</span>
						</h1>

						<p className='text-xl text-muted-foreground mb-8 max-w-3xl mx-auto'>
							Professional bookkeeping packages designed for
							growing businesses. Save 60+ hours per year and
							increase profit margins with expert financial
							management.
						</p>

						{/* Promotional Banner */}
						<div className='bg-gradient-to-r from-primary to-primary/80 text-white rounded-lg p-6 mb-8'>
							<div className='flex items-center justify-center gap-3 mb-2'>
								<Star className='h-6 w-6 fill-current' />
								<span className='text-lg font-bold'>
									Limited Time Offer
								</span>
								<Star className='h-6 w-6 fill-current' />
							</div>
							<p className='text-xl font-semibold mb-2'>
								50% Off Your First 3 Months
							</p>
							<p className='text-sm opacity-90'>
								For new Columbus area business clients
							</p>
						</div>

						{/* Key Benefits */}
						<div className='grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto'>
							<div className='text-center'>
								<div className='text-2xl font-bold text-primary'>
									60+
								</div>
								<div className='text-sm text-muted-foreground'>
									Hours Saved/Year
								</div>
							</div>
							<div className='text-center'>
								<div className='text-2xl font-bold text-primary'>
									25%
								</div>
								<div className='text-sm text-muted-foreground'>
									Profit Increase
								</div>
							</div>
							<div className='text-center'>
								<div className='text-2xl font-bold text-primary'>
									$15K
								</div>
								<div className='text-sm text-muted-foreground'>
									Avg. Tax Savings
								</div>
							</div>
							<div className='text-center'>
								<div className='text-2xl font-bold text-primary'>
									24hr
								</div>
								<div className='text-sm text-muted-foreground'>
									Response Time
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Pricing Tables */}
			<section className='py-16'>
				<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='max-w-7xl mx-auto'>
						<div className='text-center mb-12'>
							<h2 className='text-3xl sm:text-4xl font-bold mb-4'>
								Choose Your Business Bookkeeping Package
							</h2>
							<p className='text-xl text-muted-foreground'>
								Designed specifically for Columbus Ohio area
								businesses
							</p>
						</div>

						<div className='grid lg:grid-cols-3 gap-8 pt-8'>
							{pricingTiers.map((tier) => (
								<Card
									key={tier.name}
									className={`relative ${
										tier.recommended
											? 'border-2 border-primary shadow-xl scale-105 overflow-visible'
											: 'border overflow-hidden'
									} ${
										tier.popular
											? 'ring-2 ring-primary/20'
											: ''
									}`}>
									{tier.recommended && (
										<div className='absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10'>
											<div className='bg-primary text-white px-4 py-1 rounded-full text-sm font-medium shadow-lg'>
												Most Popular
											</div>
										</div>
									)}

									<CardHeader className='text-center pb-4'>
										<CardTitle className='text-2xl mb-2'>
											{tier.name}
										</CardTitle>
										<div className='mb-2'>
											<span className='text-4xl font-bold text-primary'>
												{tier.price}
											</span>
											<span className='text-muted-foreground'>
												/month
											</span>
										</div>
										{tier.originalPrice && (
											<div className='text-sm text-muted-foreground'>
												<span className='line-through'>
													{tier.originalPrice}
												</span>
												<span className='ml-2 text-red-600 font-medium'>
													First 3 Months 50% Off!
												</span>
											</div>
										)}
										<p className='text-muted-foreground'>
											{tier.description}
										</p>
										<p className='text-sm font-medium text-primary mt-2'>
											{tier.ideal}
										</p>
									</CardHeader>

									<CardContent>
										<ul className='space-y-3 mb-6'>
											{tier.features.map(
												(feature, idx) => (
													<li
														key={idx}
														className='flex items-start gap-3'>
														<Check className='h-5 w-5 text-primary mt-0.5 flex-shrink-0' />
														<span className='text-sm'>
															{feature}
														</span>
													</li>
												)
											)}
											{tier.notIncluded?.map(
												(feature, idx) => (
													<li
														key={`not-${idx}`}
														className='flex items-start gap-3 opacity-50'>
														<X className='h-5 w-5 text-gray-400 mt-0.5 flex-shrink-0' />
														<span className='text-sm text-gray-500'>
															{feature}
														</span>
													</li>
												)
											)}
										</ul>

										<CalendlyModal
											buttonText={tier.ctaText}
											buttonSize='lg'
											buttonClassName={`w-full py-6 ${
												tier.recommended
													? 'bg-primary hover:bg-primary/90'
													: ''
											}`}
										/>

										<p className='text-xs text-muted-foreground text-center mt-3'>
											No setup fees • Cancel anytime •
											90-day guarantee
										</p>
									</CardContent>
								</Card>
							))}
						</div>

						{/* Package Comparison */}
						<div className='mt-16'>
							<h3 className='text-2xl font-bold text-center mb-8'>
								Detailed Package Comparison
							</h3>

							<div className='overflow-x-auto'>
								<table className='w-full border-collapse bg-white rounded-lg shadow-lg overflow-hidden'>
									<thead>
										<tr className='bg-gray-50'>
											<th className='text-left p-4 font-semibold'>
												Features
											</th>
											{pricingTiers.map((tier) => (
												<th
													key={tier.name}
													className='text-center p-4 font-semibold'>
													{tier.name}
													<div className='text-sm font-normal text-muted-foreground'>
														{tier.price}/month
													</div>
												</th>
											))}
										</tr>
									</thead>
									<tbody>
										{[
											[
												'Monthly Bookkeeping',
												true,
												true,
												true,
											],
											[
												'Financial Reporting Setup',
												true,
												true,
												true,
											],
											[
												'Tax-Ready Organization',
												true,
												true,
												true,
											],
											[
												'QuickBooks Training',
												true,
												true,
												true,
											],
											[
												'Advanced Analytics',
												false,
												true,
												true,
											],
											[
												'Weekly Reports',
												false,
												true,
												true,
											],
											[
												'Cash Flow Forecasting',
												false,
												true,
												true,
											],
											[
												'Vendor Tracking',
												false,
												true,
												true,
											],
											[
												'Daily Monitoring',
												false,
												false,
												true,
											],
											[
												'Payroll Processing',
												false,
												false,
												true,
											],
											[
												'CFO-Level Insights',
												false,
												false,
												true,
											],
										].map(
											(
												[
													feature,
													startup,
													growing,
													enterprise,
												],
												idx
											) => (
												<tr
													key={idx}
													className='border-t'>
													<td className='p-4 font-medium'>
														{feature}
													</td>
													<td className='p-4 text-center'>
														{startup ? (
															<Check className='h-5 w-5 text-primary mx-auto' />
														) : (
															<X className='h-5 w-5 text-gray-400 mx-auto' />
														)}
													</td>
													<td className='p-4 text-center'>
														{growing ? (
															<Check className='h-5 w-5 text-primary mx-auto' />
														) : (
															<X className='h-5 w-5 text-gray-400 mx-auto' />
														)}
													</td>
													<td className='p-4 text-center'>
														{enterprise ? (
															<Check className='h-5 w-5 text-primary mx-auto' />
														) : (
															<X className='h-5 w-5 text-gray-400 mx-auto' />
														)}
													</td>
												</tr>
											)
										)}
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* ROI Calculator */}
			<section className='py-16 bg-gray-50'>
				<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='max-w-6xl mx-auto'>
						<ROICalculator
							title='ROI Calculator for Your Business'
							description='See how much you could save with professional bookkeeping'
						/>
					</div>
				</div>
			</section>

			{/* Value Proposition */}
			<section className='py-16'>
				<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='max-w-6xl mx-auto'>
						<div className='text-center mb-12'>
							<h2 className='text-3xl font-bold mb-4'>
								Why Columbus Businesses Choose Ray
							</h2>
							<p className='text-muted-foreground'>
								More than just bookkeeping - it's business
								optimization
							</p>
						</div>

						<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
							{[
								{
									icon: <Building className='h-8 w-8' />,
									title: 'Industry Expertise',
									description:
										'Specialized knowledge across multiple industries with expertise in financial reporting, asset management, and tax-ready record organization.',
								},
								{
									icon: <Hammer className='h-8 w-8' />,
									title: 'Local Columbus Knowledge',
									description:
										'Deep understanding of Columbus area regulations, compliance requirements, and local business environment.',
								},
								{
									icon: <Calculator className='h-8 w-8' />,
									title: 'QuickBooks ProAdvisor',
									description:
										'Certified expertise in QuickBooks construction features, job costing, and financial reporting.',
								},
								{
									icon: <Clock className='h-8 w-8' />,
									title: 'Time Savings Guarantee',
									description:
										'Save 60+ hours per year on bookkeeping, or get your money back.',
								},
								{
									icon: <Shield className='h-8 w-8' />,
									title: 'Error-Proof Systems',
									description:
										'Eliminate costly mistakes with proven systems and regular oversight.',
								},
								{
									icon: <TrendingUp className='h-8 w-8' />,
									title: 'Profit Optimization',
									description:
										'Increase net profit margins by 15-25% through better financial management.',
								},
							].map((benefit, index) => (
								<Card
									key={index}
									className='text-center hover:shadow-lg transition-shadow'>
									<CardContent className='pt-8'>
										<div className='w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary'>
											{benefit.icon}
										</div>
										<h3 className='font-bold mb-3'>
											{benefit.title}
										</h3>
										<p className='text-sm text-muted-foreground leading-relaxed'>
											{benefit.description}
										</p>
									</CardContent>
								</Card>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* FAQ Section */}
			<section className='py-16 bg-gray-50'>
				<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='max-w-4xl mx-auto'>
						<div className='text-center mb-12'>
							<h2 className='text-3xl font-bold mb-4'>
								Frequently Asked Questions
							</h2>
							<p className='text-muted-foreground'>
								Common questions from Columbus area businesses
							</p>
						</div>

						<div className='space-y-6'>
							{[
								{
									question:
										"What's included in the first month 50% off promotion?",
									answer: 'All new Columbus area business clients get 50% off their first month of any package. This includes full setup, QuickBooks configuration, and all regular services.',
								},
								{
									question:
										'Do you work with businesses outside Columbus?',
									answer: 'While I specialize in Columbus area businesses, I do work with companies throughout Ohio and can provide remote services nationwide.',
								},
								{
									question:
										'How quickly can you get my business books organized?',
									answer: 'Most Columbus area businesses see their books fully organized within 2-3 weeks. For catch-up work, it depends on how far behind you are, but typically 4-6 weeks for complete cleanup.',
								},
								{
									question:
										'Do you handle payroll for businesses?',
									answer: 'Yes, payroll processing is included in the Enterprise package and available as an add-on for other packages. This includes all payroll tax filings and compliance requirements.',
								},
								{
									question:
										"What if I'm not satisfied with the service?",
									answer: 'I offer a 30-day money-back guarantee. If you&apos;re not completely satisfied with your bookkeeping service, I&apos;ll refund your first month payment.',
								},
							].map((faq, index) => (
								<Card key={index}>
									<CardContent className='pt-6'>
										<h3 className='font-semibold mb-2'>
											{faq.question}
										</h3>
										<p className='text-muted-foreground'>
											{faq.answer}
										</p>
									</CardContent>
								</Card>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* Final CTA */}
			<section className='py-16 bg-gradient-to-br from-primary/5 to-primary/10'>
				<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='max-w-4xl mx-auto text-center'>
						<h2 className='text-3xl font-bold mb-4'>
							Ready to Transform Your Construction Business
							Finances?
						</h2>
						<p className='text-xl text-muted-foreground mb-8'>
							Join 50+ Columbus area businesses that trust Ray
							with their financial management. Schedule your free
							consultation today.
						</p>

						<div className='bg-white rounded-xl shadow-lg p-8 mb-8'>
							<div className='grid md:grid-cols-3 gap-6 mb-6'>
								<div className='text-center'>
									<Phone className='h-8 w-8 text-primary mx-auto mb-2' />
									<p className='font-semibold'>
										(555) 123-4567
									</p>
									<p className='text-sm text-muted-foreground'>
										Direct line to Ray
									</p>
								</div>
								<div className='text-center'>
									<Mail className='h-8 w-8 text-primary mx-auto mb-2' />
									<p className='font-semibold'>
										ray@gallowaybookkeeping.com
									</p>
									<p className='text-sm text-muted-foreground'>
										24-hour response
									</p>
								</div>
								<div className='text-center'>
									<Award className='h-8 w-8 text-primary mx-auto mb-2' />
									<p className='font-semibold'>
										QuickBooks ProAdvisor
									</p>
									<p className='text-sm text-muted-foreground'>
										Certified expert
									</p>
								</div>
							</div>
						</div>

						<div className='flex flex-col sm:flex-row gap-4 justify-center'>
							<CalendlyModal
								buttonText='Schedule Free Business Consultation'
								buttonSize='lg'
								buttonClassName='px-8 py-6 text-lg'
							/>
							<Button
								variant='outline'
								size='lg'
								className='px-8 py-6 text-lg'
								asChild>
								<a href='tel:555-123-4567'>
									<Phone className='mr-2 h-5 w-5' />
									Call Now
								</a>
							</Button>
						</div>

						<p className='text-sm text-muted-foreground mt-6'>
							No obligation • Free consultation • Same-day
							response guarantee
						</p>
					</div>
				</div>
			</section>
		</div>
	);
}
