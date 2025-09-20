import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CalendlyModal } from '@/components/CalendlyModal';
import {
	ArrowLeft,
	Calendar,
	Clock,
	User,
	MapPin,
	Calculator,
	TrendingUp,
	FileText,
	Award,
	CheckCircle,
	DollarSign,
	Share2,
	Receipt,
	Home,
	Car,
	Coffee,
	Smartphone,
	BookOpen,
	AlertCircle,
} from 'lucide-react';

export const metadata = {
	title: "Small Business Tax Deductions You're Probably Missing | Ray Galloway",
	description:
		'Discover the commonly overlooked tax deductions that could save your service business thousands. Expert advice from QuickBooks ProAdvisor Ray Galloway.',
	keywords:
		'small business tax deductions, service business taxes, business expense deductions, QuickBooks tax tips, small business accounting',
};

export default function SmallBusinessTaxDeductions() {
	return (
		<div className='min-h-screen bg-white'>
			{/* Header */}
			<header className='bg-white border-b sticky top-0 z-50'>
				<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='flex justify-between items-center h-16'>
						<Link
							href='/blog'
							className='flex items-center text-lg font-medium hover:text-primary transition-colors'>
							<ArrowLeft className='mr-2 h-4 w-4' />
							Business Blog
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

			{/* Article Header */}
			<section className='py-12 bg-gradient-to-br from-qb-green-50 via-white to-qb-green-100'>
				<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='max-w-4xl mx-auto'>
						{/* Breadcrumb */}
						<nav className='flex items-center gap-2 text-sm text-muted-foreground mb-6'>
							<Link href='/' className='hover:text-primary'>
								Home
							</Link>
							<span>/</span>
							<Link href='/blog' className='hover:text-primary'>
								Blog
							</Link>
							<span>/</span>
							<span>Tax Deductions</span>
						</nav>

						{/* Article Meta */}
						<div className='flex flex-wrap items-center gap-4 mb-6'>
							<div className='flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full'>
								<Calculator className='h-4 w-4 text-primary' />
								<span className='text-sm font-medium text-primary'>
									Tax Planning
								</span>
							</div>
							<div className='flex items-center gap-2 px-3 py-1 bg-gray-100 rounded-full'>
								<MapPin className='h-4 w-4 text-gray-600' />
								<span className='text-sm font-medium text-gray-600'>
									All Service Businesses
								</span>
							</div>
							<div className='flex items-center gap-2 text-sm text-muted-foreground'>
								<Calendar className='h-4 w-4' />
								<span>December 1, 2024</span>
							</div>
							<div className='flex items-center gap-2 text-sm text-muted-foreground'>
								<Clock className='h-4 w-4' />
								<span>8 min read</span>
							</div>
						</div>

						{/* Title */}
						<h1 className='text-4xl sm:text-5xl font-bold mb-6 leading-tight'>
							Small Business Tax Deductions You're Probably
							Missing
						</h1>

						<p className='text-xl text-muted-foreground mb-8'>
							Most service business owners leave thousands on the
							table every year by missing these commonly
							overlooked tax deductions. Here's your complete
							guide to maximizing your business tax savings.
						</p>

						{/* Featured Image */}
						<div className='relative h-64 sm:h-80 lg:h-96 rounded-xl overflow-hidden shadow-xl mb-8'>
							{/* TODO: Add actual tax deductions image */}
							<div className='absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center'>
								<div className='text-center text-white'>
									<Receipt className='h-20 w-20 mx-auto mb-4' />
									<p className='text-lg font-semibold'>
										Business Tax Deductions
									</p>
									<p className='text-sm opacity-75'>
										Add photo:
										/images/blog/tax-deductions.jpg
									</p>
								</div>
							</div>
						</div>

						{/* Share Buttons */}
						<div className='flex items-center gap-4 mb-8'>
							<span className='text-sm font-medium text-muted-foreground'>
								Share:
							</span>
							<Button variant='outline' size='sm'>
								<Share2 className='h-4 w-4 mr-2' />
								LinkedIn
							</Button>
							<Button variant='outline' size='sm'>
								<Share2 className='h-4 w-4 mr-2' />
								Facebook
							</Button>
						</div>
					</div>
				</div>
			</section>

			{/* Article Content */}
			<article className='py-12'>
				<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='max-w-4xl mx-auto'>
						<div className='prose prose-lg max-w-none'>
							{/* Introduction */}
							<p className='text-lg leading-relaxed mb-8'>
								Every year, I help service business owners
								discover thousands of dollars in overlooked tax
								deductions. The average small business owner I
								work with finds an additional $3,000-$8,000 in
								legitimate deductions they didn't know they
								could claim.
							</p>

							<p className='text-lg leading-relaxed mb-8'>
								The problem isn't that these deductions are
								hidden or complicated—it's that most business
								owners simply don't know they exist. This guide
								will walk you through the most commonly missed
								deductions that could significantly reduce your
								tax burden.
							</p>

							{/* The Hidden Cost */}
							<div className='bg-red-50 border-l-4 border-red-500 p-6 mb-8 rounded-r-lg'>
								<div className='flex items-start gap-3'>
									<AlertCircle className='h-6 w-6 text-red-500 mt-1 flex-shrink-0' />
									<div>
										<h2 className='text-2xl font-bold text-red-900 mb-3'>
											The Hidden Cost of Missing
											Deductions
										</h2>
										<p className='text-red-800 mb-4'>
											Missing tax deductions isn't just
											about paying more taxes— it's about
											losing money that could be
											reinvested in your business growth,
											equipment, or personal financial
											goals.
										</p>
									</div>
								</div>
							</div>

							<div className='bg-white border border-gray-200 rounded-lg p-6 mb-8'>
								<h3 className='text-xl font-bold mb-4'>
									What Missing Deductions Really Costs You
								</h3>
								<div className='grid md:grid-cols-2 gap-6'>
									<div>
										<h4 className='font-semibold mb-2 text-red-600'>
											If You're Missing $5,000 in
											Deductions
										</h4>
										<ul className='space-y-2 text-sm text-muted-foreground'>
											<li>
												• Federal tax savings:
												$1,100-$1,850
											</li>
											<li>
												• State tax savings: $250-$500
											</li>
											<li>
												• Self-employment tax savings:
												$765
											</li>
											<li>
												•{' '}
												<strong>
													Total lost savings:
													$2,115-$3,115
												</strong>
											</li>
										</ul>
									</div>
									<div>
										<h4 className='font-semibold mb-2 text-red-600'>
											If You're Missing $10,000 in
											Deductions
										</h4>
										<ul className='space-y-2 text-sm text-muted-foreground'>
											<li>
												• Federal tax savings:
												$2,200-$3,700
											</li>
											<li>
												• State tax savings: $500-$1,000
											</li>
											<li>
												• Self-employment tax savings:
												$1,530
											</li>
											<li>
												•{' '}
												<strong>
													Total lost savings:
													$4,230-$6,230
												</strong>
											</li>
										</ul>
									</div>
								</div>
							</div>

							{/* Deduction 1: Home Office */}
							<div className='bg-qb-green-50 border-l-4 border-primary p-6 mb-8 rounded-r-lg'>
								<h2 className='text-2xl font-bold text-primary mb-4 flex items-center gap-2'>
									<Home className='h-6 w-6' />
									Deduction #1: Home Office Expenses
								</h2>
								<p className='text-lg leading-relaxed mb-4'>
									Even if you only use part of your home for
									business, you can deduct a portion of your
									home expenses. This is one of the most
									valuable and underutilized deductions.
								</p>
							</div>

							<div className='bg-white border border-gray-200 rounded-lg p-6 mb-8'>
								<h3 className='text-xl font-bold mb-4'>
									Two Ways to Claim Home Office Deductions
								</h3>
								<div className='grid md:grid-cols-2 gap-6'>
									<div>
										<h4 className='font-semibold mb-2 text-primary'>
											Simplified Method
										</h4>
										<ul className='space-y-2 text-sm text-muted-foreground'>
											<li>
												• $5 per square foot of office
												space
											</li>
											<li>
												• Maximum 300 square feet
												($1,500)
											</li>
											<li>
												• Easy to calculate and document
											</li>
											<li>
												• No need to track actual
												expenses
											</li>
										</ul>
									</div>
									<div>
										<h4 className='font-semibold mb-2 text-primary'>
											Actual Expense Method
										</h4>
										<ul className='space-y-2 text-sm text-muted-foreground'>
											<li>
												• Percentage of mortgage/rent
											</li>
											<li>
												• Utilities, insurance, repairs
											</li>
											<li>• Depreciation (if you own)</li>
											<li>
												• Often results in larger
												deduction
											</li>
										</ul>
									</div>
								</div>
								<div className='mt-4 p-3 bg-green-50 rounded-lg'>
									<p className='text-sm font-medium text-green-800'>
										💡 Pro Tip: The space must be used
										"regularly and exclusively" for
										business. A dedicated office room
										qualifies, but your kitchen table
										doesn't.
									</p>
								</div>
							</div>

							{/* Deduction 2: Vehicle Expenses */}
							<div className='bg-qb-green-50 border-l-4 border-primary p-6 mb-8 rounded-r-lg'>
								<h2 className='text-2xl font-bold text-primary mb-4 flex items-center gap-2'>
									<Car className='h-6 w-6' />
									Deduction #2: Vehicle and Travel Expenses
								</h2>
								<p className='text-lg leading-relaxed mb-4'>
									Business use of your vehicle is deductible,
									but many service business owners don't track
									it properly or miss opportunities to
									maximize this deduction.
								</p>
							</div>

							<div className='bg-white border border-gray-200 rounded-lg p-6 mb-8'>
								<h3 className='text-xl font-bold mb-4'>
									What Counts as Business Vehicle Use
								</h3>
								<ul className='space-y-3'>
									<li className='flex items-start gap-3'>
										<CheckCircle className='h-5 w-5 text-primary mt-0.5 flex-shrink-0' />
										<span>
											<strong>
												Client meetings and site visits:
											</strong>{' '}
											Driving to meet clients or work at
											their location
										</span>
									</li>
									<li className='flex items-start gap-3'>
										<CheckCircle className='h-5 w-5 text-primary mt-0.5 flex-shrink-0' />
										<span>
											<strong>Business errands:</strong>{' '}
											Bank deposits, supply runs,
											equipment pickups
										</span>
									</li>
									<li className='flex items-start gap-3'>
										<CheckCircle className='h-5 w-5 text-primary mt-0.5 flex-shrink-0' />
										<span>
											<strong>Networking events:</strong>{' '}
											Industry conferences, business
											meetings, professional development
										</span>
									</li>
									<li className='flex items-start gap-3'>
										<CheckCircle className='h-5 w-5 text-primary mt-0.5 flex-shrink-0' />
										<span>
											<strong>Business travel:</strong>{' '}
											Out-of-town trips for business
											purposes
										</span>
									</li>
								</ul>
								<div className='mt-4 p-3 bg-blue-50 rounded-lg'>
									<p className='text-sm font-medium text-blue-800'>
										📱 Use a mileage tracking app like
										MileIQ or QuickBooks Self-Employed to
										automatically track business miles.
									</p>
								</div>
							</div>

							{/* Mid-Article CTA */}
							<Card className='bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20 my-12'>
								<CardContent className='pt-6'>
									<div className='text-center'>
										<h3 className='text-xl font-bold mb-3'>
											Want to Maximize Your Business
											Deductions?
										</h3>
										<p className='text-muted-foreground mb-4'>
											I'll review your business expenses
											and help you identify every
											deduction you're entitled to claim.
										</p>
										<CalendlyModal
											buttonText='Get Tax Deduction Review'
											buttonSize='lg'
											buttonClassName='px-8 py-4'
										/>
									</div>
								</CardContent>
							</Card>

							{/* Deduction 3: Business Meals */}
							<div className='bg-qb-green-50 border-l-4 border-primary p-6 mb-8 rounded-r-lg'>
								<h2 className='text-2xl font-bold text-primary mb-4 flex items-center gap-2'>
									<Coffee className='h-6 w-6' />
									Deduction #3: Business Meals and
									Entertainment
								</h2>
								<p className='text-lg leading-relaxed mb-4'>
									Business meals are 50% deductible, but many
									business owners either don't claim them or
									don't document them properly to withstand
									IRS scrutiny.
								</p>
							</div>

							<div className='bg-white border border-gray-200 rounded-lg p-6 mb-8'>
								<h3 className='text-xl font-bold mb-4'>
									What Business Meals Qualify
								</h3>
								<div className='space-y-4'>
									<div className='border-l-4 border-primary pl-4'>
										<h4 className='font-semibold mb-2'>
											Client Entertainment
										</h4>
										<p className='text-sm text-muted-foreground'>
											Taking clients to lunch, dinner, or
											coffee to discuss business matters.
										</p>
									</div>
									<div className='border-l-4 border-primary pl-4'>
										<h4 className='font-semibold mb-2'>
											Business Travel Meals
										</h4>
										<p className='text-sm text-muted-foreground'>
											Meals while traveling overnight for
											business purposes.
										</p>
									</div>
									<div className='border-l-4 border-primary pl-4'>
										<h4 className='font-semibold mb-2'>
											Team Meetings
										</h4>
										<p className='text-sm text-muted-foreground'>
											Meals during business meetings with
											employees, partners, or vendors.
										</p>
									</div>
									<div className='border-l-4 border-primary pl-4'>
										<h4 className='font-semibold mb-2'>
											Networking Events
										</h4>
										<p className='text-sm text-muted-foreground'>
											Industry events, conferences, and
											professional networking functions.
										</p>
									</div>
								</div>
								<div className='mt-4 p-3 bg-yellow-50 rounded-lg'>
									<p className='text-sm font-medium text-yellow-800'>
										⚠️ Required Documentation: Date, amount,
										business purpose, and who attended. Keep
										receipts and note the business
										discussion topics.
									</p>
								</div>
							</div>

							{/* Deduction 4: Technology */}
							<div className='bg-qb-green-50 border-l-4 border-primary p-6 mb-8 rounded-r-lg'>
								<h2 className='text-2xl font-bold text-primary mb-4 flex items-center gap-2'>
									<Smartphone className='h-6 w-6' />
									Deduction #4: Technology and Equipment
								</h2>
								<p className='text-lg leading-relaxed mb-4'>
									From your smartphone to software
									subscriptions, technology expenses are often
									overlooked but can add up to significant
									deductions for service businesses.
								</p>
							</div>

							<div className='bg-white border border-gray-200 rounded-lg p-6 mb-8'>
								<h3 className='text-xl font-bold mb-4'>
									Commonly Missed Technology Deductions
								</h3>
								<div className='grid md:grid-cols-2 gap-6'>
									<div>
										<h4 className='font-semibold mb-2'>
											Hardware & Equipment
										</h4>
										<ul className='space-y-2 text-sm text-muted-foreground'>
											<li>
												• Computer and laptop purchases
											</li>
											<li>
												• Smartphone and tablet costs
											</li>
											<li>
												• Printers, scanners, monitors
											</li>
											<li>
												• Office furniture and equipment
											</li>
											<li>
												• Professional tools and
												instruments
											</li>
										</ul>
									</div>
									<div>
										<h4 className='font-semibold mb-2'>
											Software & Services
										</h4>
										<ul className='space-y-2 text-sm text-muted-foreground'>
											<li>
												• QuickBooks and accounting
												software
											</li>
											<li>
												• CRM and project management
												tools
											</li>
											<li>
												• Website hosting and domain
												names
											</li>
											<li>
												• Cloud storage subscriptions
											</li>
											<li>
												• Professional software licenses
											</li>
										</ul>
									</div>
								</div>
								<div className='mt-4 p-3 bg-green-50 rounded-lg'>
									<p className='text-sm font-medium text-green-800'>
										💡 Section 179 Deduction: You can often
										deduct the full cost of equipment
										purchases in the year you buy them,
										rather than depreciating over several
										years.
									</p>
								</div>
							</div>

							{/* Deduction 5: Professional Development */}
							<div className='bg-qb-green-50 border-l-4 border-primary p-6 mb-8 rounded-r-lg'>
								<h2 className='text-2xl font-bold text-primary mb-4 flex items-center gap-2'>
									<BookOpen className='h-6 w-6' />
									Deduction #5: Professional Development and
									Education
								</h2>
								<p className='text-lg leading-relaxed mb-4'>
									Investing in your skills and knowledge is
									not only good for business—it's also
									tax-deductible. Many business owners miss
									these valuable deductions.
								</p>
							</div>

							<div className='bg-white border border-gray-200 rounded-lg p-6 mb-8'>
								<h3 className='text-xl font-bold mb-4'>
									Deductible Professional Development Expenses
								</h3>
								<ul className='space-y-3'>
									<li className='flex items-start gap-3'>
										<CheckCircle className='h-5 w-5 text-primary mt-0.5 flex-shrink-0' />
										<span>
											<strong>
												Conferences and seminars:
											</strong>{' '}
											Registration fees, travel, and
											accommodation for industry events
										</span>
									</li>
									<li className='flex items-start gap-3'>
										<CheckCircle className='h-5 w-5 text-primary mt-0.5 flex-shrink-0' />
										<span>
											<strong>
												Online courses and
												certifications:
											</strong>{' '}
											Professional development courses
											related to your business
										</span>
									</li>
									<li className='flex items-start gap-3'>
										<CheckCircle className='h-5 w-5 text-primary mt-0.5 flex-shrink-0' />
										<span>
											<strong>
												Professional memberships:
											</strong>{' '}
											Industry associations, chambers of
											commerce, networking groups
										</span>
									</li>
									<li className='flex items-start gap-3'>
										<CheckCircle className='h-5 w-5 text-primary mt-0.5 flex-shrink-0' />
										<span>
											<strong>
												Books and publications:
											</strong>{' '}
											Industry magazines, professional
											books, research materials
										</span>
									</li>
									<li className='flex items-start gap-3'>
										<CheckCircle className='h-5 w-5 text-primary mt-0.5 flex-shrink-0' />
										<span>
											<strong>
												Coaching and consulting:
											</strong>{' '}
											Business coaches, consultants, and
											professional advisors
										</span>
									</li>
								</ul>
							</div>

							{/* Action Plan */}
							<div className='bg-primary/5 border border-primary/20 rounded-lg p-8 mb-12'>
								<h2 className='text-2xl font-bold text-primary mb-4'>
									Your Tax Deduction Action Plan
								</h2>
								<p className='text-lg leading-relaxed mb-6'>
									Don't wait until tax season to start
									tracking these deductions. Implement these
									systems now to maximize your tax savings for
									this year and beyond.
								</p>

								<div className='space-y-4'>
									<div className='flex items-start gap-3'>
										<div className='bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5'>
											1
										</div>
										<div>
											<h4 className='font-semibold mb-1'>
												Set Up Expense Tracking
											</h4>
											<p className='text-sm text-muted-foreground'>
												Use QuickBooks or a similar
												system to categorize expenses
												properly from day one.
											</p>
										</div>
									</div>
									<div className='flex items-start gap-3'>
										<div className='bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5'>
											2
										</div>
										<div>
											<h4 className='font-semibold mb-1'>
												Document Everything
											</h4>
											<p className='text-sm text-muted-foreground'>
												Keep receipts, take photos, and
												note business purposes for all
												deductible expenses.
											</p>
										</div>
									</div>
									<div className='flex items-start gap-3'>
										<div className='bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5'>
											3
										</div>
										<div>
											<h4 className='font-semibold mb-1'>
												Track Mileage Automatically
											</h4>
											<p className='text-sm text-muted-foreground'>
												Use a mileage tracking app to
												capture all business driving
												throughout the year.
											</p>
										</div>
									</div>
									<div className='flex items-start gap-3'>
										<div className='bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5'>
											4
										</div>
										<div>
											<h4 className='font-semibold mb-1'>
												Review Quarterly
											</h4>
											<p className='text-sm text-muted-foreground'>
												Schedule quarterly reviews to
												ensure you're capturing all
												deductible expenses.
											</p>
										</div>
									</div>
								</div>

								<div className='text-center mt-6'>
									<CalendlyModal
										buttonText='Get Professional Tax Help'
										buttonSize='lg'
										buttonClassName='px-8 py-4'
									/>
								</div>
							</div>

							{/* Conclusion */}
							<div className='border-t pt-8'>
								<h2 className='text-2xl font-bold mb-4'>
									Stop Leaving Money on the Table
								</h2>
								<p className='text-lg leading-relaxed mb-6'>
									These five categories of deductions alone
									could save most service businesses
									$3,000-$8,000 annually. The key is
									implementing proper tracking systems now and
									working with a professional who understands
									small business taxes.
								</p>
								<p className='text-lg leading-relaxed mb-8'>
									Remember: every dollar you save in taxes is
									a dollar you can reinvest in growing your
									business, improving your services, or
									achieving your personal financial goals.
								</p>
							</div>
						</div>
					</div>
				</div>
			</article>

			{/* Author Bio Section */}
			<section className='py-12 bg-gray-50'>
				<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='max-w-4xl mx-auto'>
						<Card className='border-2 border-primary/20'>
							<CardContent className='pt-8'>
								<div className='flex flex-col lg:flex-row items-center gap-8'>
									<div className='flex-shrink-0'>
										<div className='w-32 h-32 rounded-xl shadow-lg overflow-hidden'>
											{/* TODO: Add Ray's professional photo */}
											<div className='bg-gradient-to-br from-primary to-primary/80 w-full h-full flex items-center justify-center text-white text-4xl font-bold'>
												RG
											</div>
										</div>
									</div>

									<div className='flex-1 text-center lg:text-left'>
										<h3 className='text-2xl font-bold mb-2'>
											About Ray Galloway
										</h3>
										<p className='text-primary font-semibold mb-3'>
											QuickBooks ProAdvisor • Small
											Business Tax Specialist
										</p>
										<p className='text-muted-foreground mb-6 leading-relaxed'>
											Ray has helped hundreds of service
											business owners maximize their tax
											deductions and improve their
											financial systems. His expertise in
											small business accounting and tax
											planning has saved clients over $2
											million in taxes and countless hours
											of bookkeeping frustration.
										</p>

										<div className='flex flex-wrap justify-center lg:justify-start gap-3 mb-6'>
											<div className='flex items-center gap-2 px-3 py-1 bg-qb-green-100 rounded-full'>
												<Award className='h-4 w-4 text-primary' />
												<span className='text-sm font-medium text-primary'>
													Tax Expert
												</span>
											</div>
											<div className='flex items-center gap-2 px-3 py-1 bg-qb-green-100 rounded-full'>
												<Calculator className='h-4 w-4 text-primary' />
												<span className='text-sm font-medium text-primary'>
													QuickBooks ProAdvisor
												</span>
											</div>
											<div className='flex items-center gap-2 px-3 py-1 bg-qb-green-100 rounded-full'>
												<TrendingUp className='h-4 w-4 text-primary' />
												<span className='text-sm font-medium text-primary'>
													Business Growth
												</span>
											</div>
										</div>

										<CalendlyModal
											buttonText='Schedule Your Tax Consultation'
											buttonSize='lg'
											buttonClassName='px-8 py-4'
										/>
									</div>
								</div>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>

			{/* Related Articles */}
			<section className='py-12'>
				<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='max-w-6xl mx-auto'>
						<h2 className='text-3xl font-bold mb-8 text-center'>
							More Small Business Financial Tips
						</h2>

						<div className='grid md:grid-cols-3 gap-6'>
							{[
								{
									title: 'QuickBooks vs Excel: Why Your Service Business Needs to Upgrade',
									excerpt:
										'Discover why QuickBooks beats Excel for service business accounting.',
									slug: 'quickbooks-vs-excel-service-business',
									category: 'Software',
								},
								{
									title: 'The 7-Step Monthly Bookkeeping Checklist for Service Businesses',
									excerpt:
										'Never miss important bookkeeping tasks with this comprehensive checklist.',
									slug: 'monthly-bookkeeping-checklist-service-business',
									category: 'Bookkeeping',
								},
								{
									title: 'How to Price Your Services for Maximum Profitability',
									excerpt:
										'Strategic pricing methods that increase profits without losing clients.',
									slug: 'service-business-pricing-strategy',
									category: 'Pricing',
								},
							].map((post, index) => (
								<Card
									key={index}
									className='hover:shadow-lg transition-shadow cursor-pointer'>
									<CardContent className='pt-6'>
										<div className='flex items-center gap-2 mb-3'>
											<FileText className='h-4 w-4 text-primary' />
											<span className='text-sm text-primary font-medium'>
												{post.category}
											</span>
										</div>
										<h3 className='font-bold mb-2 leading-tight'>
											{post.title}
										</h3>
										<p className='text-sm text-muted-foreground mb-4'>
											{post.excerpt}
										</p>
										<Button size='sm' asChild>
											<Link href={`/blog/${post.slug}`}>
												Read Article
											</Link>
										</Button>
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
					<div className='max-w-3xl mx-auto text-center'>
						<h2 className='text-3xl font-bold mb-4'>
							Ready to Maximize Your Tax Deductions?
						</h2>
						<p className='text-xl text-muted-foreground mb-8'>
							Don't let another tax season pass without claiming
							every deduction you're entitled to. Get professional
							help to ensure you're maximizing your tax savings.
						</p>

						<div className='flex flex-col sm:flex-row gap-4 justify-center'>
							<CalendlyModal
								buttonText='Schedule Free Tax Review'
								buttonSize='lg'
								buttonClassName='px-8 py-6 text-lg'
							/>
							<Button
								variant='outline'
								size='lg'
								className='px-8 py-6 text-lg'
								asChild>
								<Link href='/free-guide'>
									Download Free Business Guide
								</Link>
							</Button>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
