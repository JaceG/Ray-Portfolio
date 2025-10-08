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
	Users,
	MapPin,
	Hammer,
	Building,
	Calculator,
	TrendingUp,
	FileText,
	Award,
	CheckCircle,
	DollarSign,
	Share2,
	BarChart3,
	Target,
	Receipt,
	Folder,
	Settings,
} from 'lucide-react';

export const metadata = {
	title: 'The 5-Category Expense System Every Contractor Needs | Ray Galloway',
	description:
		'Simplify your expense tracking with this proven system that saves Columbus construction companies 10+ hours per month on bookkeeping and improves tax deductions.',
	keywords:
		'construction expense tracking, contractor bookkeeping system, construction tax deductions, Columbus construction accounting',
};

export default function ConstructionExpenseTracking() {
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
							Construction Blog
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
							<span>Expense Tracking System</span>
						</nav>

						{/* Article Meta */}
						<div className='flex flex-wrap items-center gap-4 mb-6'>
							<div className='flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full'>
								<Receipt className='h-4 w-4 text-primary' />
								<span className='text-sm font-medium text-primary'>
									Expense Management
								</span>
							</div>
							<div className='flex items-center gap-2 px-3 py-1 bg-gray-100 rounded-full'>
								<MapPin className='h-4 w-4 text-gray-600' />
								<span className='text-sm font-medium text-gray-600'>
									Columbus Area
								</span>
							</div>
							<div className='flex items-center gap-2 text-sm text-muted-foreground'>
								<Calendar className='h-4 w-4' />
								<span>November 13, 2024</span>
							</div>
							<div className='flex items-center gap-2 text-sm text-muted-foreground'>
								<Clock className='h-4 w-4' />
								<span>6 min read</span>
							</div>
						</div>

						{/* Title */}
						<h1 className='text-4xl sm:text-5xl font-bold mb-6 leading-tight'>
							The 5-Category Expense System Every Contractor Needs
						</h1>

						<p className='text-xl text-muted-foreground mb-8'>
							Simplify your expense tracking with this proven
							system that saves construction companies 10+ hours
							per month on bookkeeping and maximizes tax
							deductions.
						</p>

						{/* Featured Image */}
						<div className='relative h-64 sm:h-80 lg:h-96 rounded-xl overflow-hidden shadow-xl mb-8'>
							{/* TODO: Add actual expense tracking system photo */}
							<div className='absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center'>
								<div className='text-center text-white'>
									<Receipt className='h-20 w-20 mx-auto mb-4' />
									<p className='text-lg font-semibold'>
										Construction Expense Tracking
									</p>
									<p className='text-sm opacity-75'>
										Add photo:
										/images/blog/construction-expense-tracking.jpg
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
								Every Columbus construction company I work with
								starts with the same problem: a shoebox full of
								receipts, scattered expense records, and no
								clear system for tracking where their money
								goes. This chaos costs them thousands in missed
								deductions and hours of frustration every month.
							</p>

							<p className='text-lg leading-relaxed mb-8'>
								The solution isn't more complex software or
								expensive systems. It's a simple, proven
								5-category expense tracking system that any
								construction company can implement immediately.
								This system has saved my clients over 10 hours
								per month and increased their tax deductions by
								an average of $8,000 annually.
							</p>

							{/* The Problem */}
							<div className='bg-red-50 border-l-4 border-red-500 p-6 mb-8 rounded-r-lg'>
								<h2 className='text-2xl font-bold text-red-900 mb-4'>
									Why Most Construction Expense Tracking Fails
								</h2>
								<p className='text-red-800 mb-4'>
									Construction companies face unique expense
									tracking challenges that generic business
									advice doesn't address. Understanding these
									challenges is the first step to solving
									them.
								</p>
								<ul className='space-y-2 text-red-800'>
									<li>
										• Multiple job sites with different
										expense types
									</li>
									<li>
										• Mix of materials, labor, and equipment
										costs
									</li>
									<li>
										• Personal and business expenses often
										intermingled
									</li>
									<li>
										• Seasonal variations in expense
										patterns
									</li>
									<li>
										• Complex tax deduction rules for
										construction
									</li>
								</ul>
							</div>

							{/* The 5-Category System */}
							<div className='bg-qb-green-50 border-l-4 border-primary p-6 mb-8 rounded-r-lg'>
								<h2 className='text-2xl font-bold text-primary mb-4'>
									The 5-Category Construction Expense System
								</h2>
								<p className='text-lg leading-relaxed mb-4'>
									This system organizes every construction
									expense into just five categories. Simple
									enough to use daily, comprehensive enough to
									maximize your tax deductions.
								</p>
							</div>

							{/* Category 1 */}
							<div className='bg-white border border-gray-200 rounded-lg p-6 mb-8'>
								<h3 className='text-xl font-bold mb-4 flex items-center gap-2'>
									<Hammer className='h-6 w-6 text-primary' />
									Category 1: Direct Job Costs
								</h3>
								<p className='text-muted-foreground mb-4'>
									Expenses that can be directly attributed to
									specific construction projects.
								</p>
								<div className='grid md:grid-cols-2 gap-6'>
									<div>
										<h4 className='font-semibold mb-2'>
											Materials & Supplies
										</h4>
										<ul className='space-y-1 text-sm text-muted-foreground'>
											<li>• Lumber, concrete, drywall</li>
											<li>• Fixtures and hardware</li>
											<li>
												• Paint and finishing materials
											</li>
											<li>• Job-specific tools</li>
										</ul>
									</div>
									<div>
										<h4 className='font-semibold mb-2'>
											Subcontractor Costs
										</h4>
										<ul className='space-y-1 text-sm text-muted-foreground'>
											<li>• Electrical and plumbing</li>
											<li>• HVAC installation</li>
											<li>• Specialty trades</li>
											<li>• Equipment rental</li>
										</ul>
									</div>
								</div>
								<div className='mt-4 p-3 bg-green-50 rounded-lg'>
									<p className='text-sm font-medium text-green-800'>
										💡 Tax Tip: These expenses are 100%
										deductible and should be tracked by
										specific job for accurate job costing.
									</p>
								</div>
							</div>

							{/* Category 2 */}
							<div className='bg-white border border-gray-200 rounded-lg p-6 mb-8'>
								<h3 className='text-xl font-bold mb-4 flex items-center gap-2'>
									<Building className='h-6 w-6 text-primary' />
									Category 2: Equipment & Vehicle Expenses
								</h3>
								<p className='text-muted-foreground mb-4'>
									All costs related to construction equipment,
									tools, and vehicles.
								</p>
								<div className='grid md:grid-cols-2 gap-6'>
									<div>
										<h4 className='font-semibold mb-2'>
											Equipment Costs
										</h4>
										<ul className='space-y-1 text-sm text-muted-foreground'>
											<li>• Equipment purchases</li>
											<li>• Maintenance and repairs</li>
											<li>• Equipment insurance</li>
											<li>• Storage and security</li>
										</ul>
									</div>
									<div>
										<h4 className='font-semibold mb-2'>
											Vehicle Expenses
										</h4>
										<ul className='space-y-1 text-sm text-muted-foreground'>
											<li>• Fuel and maintenance</li>
											<li>• Vehicle insurance</li>
											<li>
												• Registration and licensing
											</li>
											<li>• Business mileage</li>
										</ul>
									</div>
								</div>
								<div className='mt-4 p-3 bg-green-50 rounded-lg'>
									<p className='text-sm font-medium text-green-800'>
										💡 Tax Tip: Track business vs. personal
										use carefully. Heavy equipment over
										6,000 lbs may qualify for 100%
										first-year depreciation.
									</p>
								</div>
							</div>

							{/* Category 3 */}
							<div className='bg-white border border-gray-200 rounded-lg p-6 mb-8'>
								<h3 className='text-xl font-bold mb-4 flex items-center gap-2'>
									<FileText className='h-6 w-6 text-primary' />
									Category 3: Business Operations
								</h3>
								<p className='text-muted-foreground mb-4'>
									General business expenses that keep your
									construction company running.
								</p>
								<div className='grid md:grid-cols-2 gap-6'>
									<div>
										<h4 className='font-semibold mb-2'>
											Office & Administrative
										</h4>
										<ul className='space-y-1 text-sm text-muted-foreground'>
											<li>• Office rent and utilities</li>
											<li>• Phone and internet</li>
											<li>• Office supplies</li>
											<li>• Software subscriptions</li>
										</ul>
									</div>
									<div>
										<h4 className='font-semibold mb-2'>
											Professional Services
										</h4>
										<ul className='space-y-1 text-sm text-muted-foreground'>
											<li>
												• Accounting and bookkeeping
											</li>
											<li>• Legal services</li>
											<li>• Insurance premiums</li>
											<li>• Banking fees</li>
										</ul>
									</div>
								</div>
								<div className='mt-4 p-3 bg-green-50 rounded-lg'>
									<p className='text-sm font-medium text-green-800'>
										💡 Tax Tip: Home office expenses can be
										deducted if you use part of your home
										exclusively for business.
									</p>
								</div>
							</div>

							{/* Mid-Article CTA */}
							<Card className='bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20 my-12'>
								<CardContent className='pt-6'>
									<div className='text-center'>
										<h3 className='text-xl font-bold mb-3'>
											Ready to Implement This System?
										</h3>
										<p className='text-muted-foreground mb-4'>
											I'll help you set up this expense
											tracking system in QuickBooks and
											train your team to use it
											effectively.
										</p>
										<CalendlyModal
											buttonText='Get Expense System Setup'
											buttonSize='lg'
											buttonClassName='px-8 py-4'
										/>
									</div>
								</CardContent>
							</Card>

							{/* Category 4 */}
							<div className='bg-white border border-gray-200 rounded-lg p-6 mb-8'>
								<h3 className='text-xl font-bold mb-4 flex items-center gap-2'>
									<Users className='h-6 w-6 text-primary' />
									Category 4: Labor & Personnel
								</h3>
								<p className='text-muted-foreground mb-4'>
									All costs related to your construction
									workforce and personnel management.
								</p>
								<div className='grid md:grid-cols-2 gap-6'>
									<div>
										<h4 className='font-semibold mb-2'>
											Direct Labor
										</h4>
										<ul className='space-y-1 text-sm text-muted-foreground'>
											<li>
												• Employee wages and salaries
											</li>
											<li>• Payroll taxes</li>
											<li>• Workers' compensation</li>
											<li>• Overtime premiums</li>
										</ul>
									</div>
									<div>
										<h4 className='font-semibold mb-2'>
											Benefits & Training
										</h4>
										<ul className='space-y-1 text-sm text-muted-foreground'>
											<li>• Health insurance</li>
											<li>• Retirement contributions</li>
											<li>• Safety training</li>
											<li>• Certification costs</li>
										</ul>
									</div>
								</div>
								<div className='mt-4 p-3 bg-green-50 rounded-lg'>
									<p className='text-sm font-medium text-green-800'>
										💡 Tax Tip: Track labor costs by job for
										accurate job costing. Safety training
										and certification costs are fully
										deductible.
									</p>
								</div>
							</div>

							{/* Category 5 */}
							<div className='bg-white border border-gray-200 rounded-lg p-6 mb-8'>
								<h3 className='text-xl font-bold mb-4 flex items-center gap-2'>
									<Target className='h-6 w-6 text-primary' />
									Category 5: Marketing & Business Development
								</h3>
								<p className='text-muted-foreground mb-4'>
									Expenses related to growing your
									construction business and attracting new
									clients.
								</p>
								<div className='grid md:grid-cols-2 gap-6'>
									<div>
										<h4 className='font-semibold mb-2'>
											Marketing & Advertising
										</h4>
										<ul className='space-y-1 text-sm text-muted-foreground'>
											<li>
												• Website and online advertising
											</li>
											<li>• Print advertising</li>
											<li>
												• Business cards and brochures
											</li>
											<li>• Trade show expenses</li>
										</ul>
									</div>
									<div>
										<h4 className='font-semibold mb-2'>
											Networking & Development
										</h4>
										<ul className='space-y-1 text-sm text-muted-foreground'>
											<li>
												• Business meals and
												entertainment
											</li>
											<li>• Professional memberships</li>
											<li>
												• Conference and seminar fees
											</li>
											<li>
												• Client gifts and appreciation
											</li>
										</ul>
									</div>
								</div>
								<div className='mt-4 p-3 bg-green-50 rounded-lg'>
									<p className='text-sm font-medium text-green-800'>
										💡 Tax Tip: Business meals are 50%
										deductible. Keep detailed records of
										who, what, when, where, and why for each
										expense.
									</p>
								</div>
							</div>

							{/* Implementation Steps */}
							<div className='bg-qb-green-50 border-l-4 border-primary p-6 mb-8 rounded-r-lg'>
								<h2 className='text-2xl font-bold text-primary mb-4'>
									How to Implement This System
								</h2>
								<p className='text-lg leading-relaxed mb-4'>
									Setting up this system takes less than 2
									hours but will save you 10+ hours every
									month. Here's exactly how to do it.
								</p>
							</div>

							<div className='bg-white border border-gray-200 rounded-lg p-6 mb-8'>
								<h3 className='text-xl font-bold mb-4'>
									Step-by-Step Implementation
								</h3>
								<div className='space-y-4'>
									<div className='flex items-start gap-3'>
										<div className='bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5'>
											1
										</div>
										<div>
											<h4 className='font-semibold mb-1'>
												Set Up Categories in QuickBooks
											</h4>
											<p className='text-sm text-muted-foreground'>
												Create expense accounts for each
												of the 5 categories with
												appropriate sub-accounts.
											</p>
										</div>
									</div>
									<div className='flex items-start gap-3'>
										<div className='bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5'>
											2
										</div>
										<div>
											<h4 className='font-semibold mb-1'>
												Create a Simple Reference Guide
											</h4>
											<p className='text-sm text-muted-foreground'>
												Print a one-page guide showing
												which expenses go in which
												category.
											</p>
										</div>
									</div>
									<div className='flex items-start gap-3'>
										<div className='bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5'>
											3
										</div>
										<div>
											<h4 className='font-semibold mb-1'>
												Establish Receipt Collection
												Process
											</h4>
											<p className='text-sm text-muted-foreground'>
												Use a simple envelope system or
												mobile app to capture receipts
												immediately.
											</p>
										</div>
									</div>
									<div className='flex items-start gap-3'>
										<div className='bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5'>
											4
										</div>
										<div>
											<h4 className='font-semibold mb-1'>
												Schedule Weekly Entry Time
											</h4>
											<p className='text-sm text-muted-foreground'>
												Dedicate 30 minutes every Friday
												to enter expenses. Consistency
												is key.
											</p>
										</div>
									</div>
									<div className='flex items-start gap-3'>
										<div className='bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5'>
											5
										</div>
										<div>
											<h4 className='font-semibold mb-1'>
												Review Monthly Reports
											</h4>
											<p className='text-sm text-muted-foreground'>
												Generate expense reports by
												category to identify trends and
												opportunities.
											</p>
										</div>
									</div>
								</div>
							</div>

							{/* Common Mistakes */}
							<div className='bg-red-50 border-l-4 border-red-500 p-6 mb-8 rounded-r-lg'>
								<h2 className='text-2xl font-bold text-red-900 mb-4'>
									Common Implementation Mistakes
								</h2>
								<ul className='space-y-3'>
									<li className='flex items-start gap-3'>
										<span className='text-red-500 font-bold'>
											×
										</span>
										<span>
											Making the system too complex with
											too many subcategories
										</span>
									</li>
									<li className='flex items-start gap-3'>
										<span className='text-red-500 font-bold'>
											×
										</span>
										<span>
											Waiting weeks to enter expenses
											instead of doing it weekly
										</span>
									</li>
									<li className='flex items-start gap-3'>
										<span className='text-red-500 font-bold'>
											×
										</span>
										<span>
											Not training all team members on the
											system
										</span>
									</li>
									<li className='flex items-start gap-3'>
										<span className='text-red-500 font-bold'>
											×
										</span>
										<span>
											Mixing personal and business
											expenses in the same accounts
										</span>
									</li>
									<li className='flex items-start gap-3'>
										<span className='text-red-500 font-bold'>
											×
										</span>
										<span>
											Forgetting to track mileage and
											vehicle usage
										</span>
									</li>
								</ul>
							</div>

							{/* Results Section */}
							<div className='bg-primary/5 border border-primary/20 rounded-lg p-8 mb-12'>
								<h2 className='text-2xl font-bold text-primary mb-4'>
									Results Construction Companies See
								</h2>
								<p className='text-lg leading-relaxed mb-6'>
									Columbus area construction companies that
									implement this 5-category system see
									immediate improvements in their financial
									management and tax savings.
								</p>

								<div className='grid md:grid-cols-2 gap-6 mb-6'>
									<div className='bg-white rounded-lg p-4'>
										<h4 className='font-semibold mb-2 text-primary'>
											Time Savings
										</h4>
										<p className='text-2xl font-bold text-primary mb-1'>
											10+ Hours
										</p>
										<p className='text-sm text-muted-foreground'>
											Per month saved on bookkeeping
										</p>
									</div>
									<div className='bg-white rounded-lg p-4'>
										<h4 className='font-semibold mb-2 text-primary'>
											Increased Deductions
										</h4>
										<p className='text-2xl font-bold text-primary mb-1'>
											$8,000
										</p>
										<p className='text-sm text-muted-foreground'>
											Average annual increase in tax
											deductions
										</p>
									</div>
									<div className='bg-white rounded-lg p-4'>
										<h4 className='font-semibold mb-2 text-primary'>
											Accuracy Improvement
										</h4>
										<p className='text-2xl font-bold text-primary mb-1'>
											95%
										</p>
										<p className='text-sm text-muted-foreground'>
											Reduction in categorization errors
										</p>
									</div>
									<div className='bg-white rounded-lg p-4'>
										<h4 className='font-semibold mb-2 text-primary'>
											Stress Reduction
										</h4>
										<p className='text-2xl font-bold text-primary mb-1'>
											90%
										</p>
										<p className='text-sm text-muted-foreground'>
											Less stress during tax season
										</p>
									</div>
								</div>

								<div className='text-center'>
									<CalendlyModal
										buttonText='Implement This System Today'
										buttonSize='lg'
										buttonClassName='px-8 py-4'
									/>
								</div>
							</div>

							{/* Conclusion */}
							<div className='border-t pt-8'>
								<h2 className='text-2xl font-bold mb-4'>
									Stop Losing Money to Poor Expense Tracking
								</h2>
								<p className='text-lg leading-relaxed mb-6'>
									Every month you delay implementing a proper
									expense tracking system, you're losing money
									on missed deductions and wasting hours on
									inefficient bookkeeping. This 5-category
									system is simple enough to start today but
									powerful enough to transform your
									construction business's financial
									management.
								</p>
								<p className='text-lg leading-relaxed mb-8'>
									Don't let another tax season catch you
									unprepared. Implement this system now and
									start maximizing your deductions while
									minimizing your bookkeeping time.
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
											QuickBooks ProAdvisor • Expense
											Management Specialist
										</p>
										<p className='text-muted-foreground mb-6 leading-relaxed'>
											Ray has helped over 75 Columbus area
											construction companies implement
											efficient expense tracking systems.
											His simplified approach to
											construction bookkeeping has saved
											clients thousands of hours and
											maximized their tax deductions by an
											average of $8,000 annually.
										</p>

										<div className='flex flex-wrap justify-center lg:justify-start gap-3 mb-6'>
											<div className='flex items-center gap-2 px-3 py-1 bg-qb-green-100 rounded-full'>
												<Award className='h-4 w-4 text-primary' />
												<span className='text-sm font-medium text-primary'>
													System Expert
												</span>
											</div>
											<div className='flex items-center gap-2 px-3 py-1 bg-qb-green-100 rounded-full'>
												<Receipt className='h-4 w-4 text-primary' />
												<span className='text-sm font-medium text-primary'>
													Expense Specialist
												</span>
											</div>
											<div className='flex items-center gap-2 px-3 py-1 bg-qb-green-100 rounded-full'>
												<MapPin className='h-4 w-4 text-primary' />
												<span className='text-sm font-medium text-primary'>
													Columbus Area
												</span>
											</div>
										</div>

										<CalendlyModal
											buttonText='Schedule Your System Setup'
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
							More Construction Financial Tips
						</h2>

						<div className='grid md:grid-cols-3 gap-6'>
							{[
								{
									title: 'QuickBooks Job Costing for Construction: Complete Guide',
									excerpt:
										'Master QuickBooks job costing for better project profitability.',
									slug: 'quickbooks-job-costing-construction',
									location: 'Columbus Area',
									category: 'QuickBooks',
								},
								{
									title: '5 Costly Bookkeeping Mistakes Columbus Construction Companies Make',
									excerpt:
										'Financial errors that cost Columbus contractors thousands each year.',
									slug: 'columbus-construction-bookkeeping-mistakes',
									location: 'Columbus, OH',
									category: 'Job Costing',
								},
								{
									title: 'Construction Cash Flow: Avoid the Feast-or-Famine Cycle',
									excerpt:
										'Strategies to maintain steady cash flow year-round.',
									slug: 'construction-cash-flow-management',
									location: 'Central Ohio',
									category: 'Cash Flow',
								},
							].map((post, index) => (
								<Card
									key={index}
									className='hover:shadow-lg transition-shadow cursor-pointer'>
									<CardContent className='pt-6'>
										<div className='flex items-center gap-2 mb-3'>
											<MapPin className='h-4 w-4 text-primary' />
											<span className='text-sm text-primary font-medium'>
												{post.location}
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
							Ready to Simplify Your Expense Tracking?
						</h2>
						<p className='text-xl text-muted-foreground mb-8'>
							Stop wasting time on complicated bookkeeping. Get
							this proven 5-category system set up in your
							business and start saving time and maximizing
							deductions immediately.
						</p>

						<div className='flex flex-col sm:flex-row gap-4 justify-center'>
							<CalendlyModal
								buttonText='Schedule System Implementation'
								buttonSize='lg'
								buttonClassName='px-8 py-6 text-lg'
							/>
							<Button
								variant='outline'
								size='lg'
								className='px-8 py-6 text-lg'
								asChild>
								<Link href='/free-guide'>
									Download Free Construction Guide
								</Link>
							</Button>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
