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
	AlertCircle,
	CreditCard,
	PiggyBank,
} from 'lucide-react';

export const metadata = {
	title: 'How Construction Companies Can Improve Cash Flow by 40% | Ray Galloway',
	description:
		'Simple strategies to optimize cash flow, manage payment schedules, and avoid the feast-or-famine cycle common in Columbus area construction businesses.',
	keywords:
		'construction cash flow management, Columbus construction financing, construction payment terms, seasonal cash flow construction',
};

export default function ConstructionCashFlow() {
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
							<span>Construction Cash Flow</span>
						</nav>

						{/* Article Meta */}
						<div className='flex flex-wrap items-center gap-4 mb-6'>
							<div className='flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full'>
								<TrendingUp className='h-4 w-4 text-primary' />
								<span className='text-sm font-medium text-primary'>
									Cash Flow
								</span>
							</div>
							<div className='flex items-center gap-2 px-3 py-1 bg-gray-100 rounded-full'>
								<MapPin className='h-4 w-4 text-gray-600' />
								<span className='text-sm font-medium text-gray-600'>
									Central Ohio
								</span>
							</div>
							<div className='flex items-center gap-2 text-sm text-muted-foreground'>
								<Calendar className='h-4 w-4' />
								<span>November 19, 2024</span>
							</div>
							<div className='flex items-center gap-2 text-sm text-muted-foreground'>
								<Clock className='h-4 w-4' />
								<span>7 min read</span>
							</div>
						</div>

						{/* Title */}
						<h1 className='text-4xl sm:text-5xl font-bold mb-6 leading-tight'>
							How Construction Companies Can Improve Cash Flow by
							40%
						</h1>

						<p className='text-xl text-muted-foreground mb-8'>
							Simple strategies to optimize cash flow, manage
							payment schedules, and avoid the feast-or-famine
							cycle that plagues many Central Ohio construction
							businesses.
						</p>

						{/* Featured Image */}
						<div className='relative h-64 sm:h-80 lg:h-96 rounded-xl overflow-hidden shadow-xl mb-8'>
							{/* TODO: Add actual construction cash flow chart */}
							<div className='absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center'>
								<div className='text-center text-white'>
									<BarChart3 className='h-20 w-20 mx-auto mb-4' />
									<p className='text-lg font-semibold'>
										Construction Cash Flow Chart
									</p>
									<p className='text-sm opacity-75'>
										Add photo:
										/images/blog/construction-cash-flow.jpg
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
								Cash flow problems kill more construction
								companies than lack of work. I've seen
								profitable Columbus area contractors go out of
								business because they couldn't manage the gap
								between when they pay expenses and when they get
								paid by clients.
							</p>

							<p className='text-lg leading-relaxed mb-8'>
								The good news? Cash flow management is a skill
								you can learn. The construction companies I work
								with that implement these strategies typically
								improve their cash flow by 40% within six
								months.
							</p>

							{/* The Problem */}
							<div className='bg-red-50 border-l-4 border-red-500 p-6 mb-8 rounded-r-lg'>
								<div className='flex items-start gap-3'>
									<AlertCircle className='h-6 w-6 text-red-500 mt-1 flex-shrink-0' />
									<div>
										<h2 className='text-2xl font-bold text-red-900 mb-3'>
											The Construction Cash Flow Challenge
										</h2>
										<p className='text-red-800 mb-4'>
											Construction companies face unique
											cash flow challenges that other
											businesses don't experience.
											Understanding these challenges is
											the first step to solving them.
										</p>
									</div>
								</div>
							</div>

							<div className='bg-white border border-gray-200 rounded-lg p-6 mb-8'>
								<h3 className='text-xl font-bold mb-4'>
									Why Construction Cash Flow is Different
								</h3>
								<div className='grid md:grid-cols-2 gap-6'>
									<div>
										<h4 className='font-semibold mb-2 flex items-center gap-2'>
											<Clock className='h-5 w-5 text-primary' />
											Long Payment Cycles
										</h4>
										<p className='text-sm text-muted-foreground mb-4'>
											Net 30-60 day payment terms are
											common, but you pay expenses
											immediately.
										</p>
									</div>
									<div>
										<h4 className='font-semibold mb-2 flex items-center gap-2'>
											<Calendar className='h-5 w-5 text-primary' />
											Seasonal Fluctuations
										</h4>
										<p className='text-sm text-muted-foreground mb-4'>
											Ohio winters slow outdoor work,
											creating predictable cash flow
											challenges.
										</p>
									</div>
									<div>
										<h4 className='font-semibold mb-2 flex items-center gap-2'>
											<DollarSign className='h-5 w-5 text-primary' />
											Large Upfront Costs
										</h4>
										<p className='text-sm text-muted-foreground mb-4'>
											Materials and labor costs must be
											paid before you receive payment from
											clients.
										</p>
									</div>
									<div>
										<h4 className='font-semibold mb-2 flex items-center gap-2'>
											<FileText className='h-5 w-5 text-primary' />
											Change Orders & Delays
										</h4>
										<p className='text-sm text-muted-foreground mb-4'>
											Project changes and weather delays
											extend payment cycles unpredictably.
										</p>
									</div>
								</div>
							</div>

							{/* Strategy 1 */}
							<div className='bg-qb-green-50 border-l-4 border-primary p-6 mb-8 rounded-r-lg'>
								<h2 className='text-2xl font-bold text-primary mb-4'>
									Strategy #1: Optimize Your Payment Terms
								</h2>
								<p className='text-lg leading-relaxed mb-4'>
									The fastest way to improve cash flow is to
									get paid faster. Here's how to structure
									payment terms that work for both you and
									your clients.
								</p>
							</div>

							<div className='bg-white border border-gray-200 rounded-lg p-6 mb-8'>
								<h3 className='text-xl font-bold mb-4'>
									Effective Payment Structures
								</h3>
								<div className='space-y-4'>
									<div className='border-l-4 border-primary pl-4'>
										<h4 className='font-semibold mb-2'>
											Progressive Payments
										</h4>
										<p className='text-sm text-muted-foreground mb-2'>
											Break large projects into milestone
											payments:
										</p>
										<ul className='text-sm text-muted-foreground space-y-1'>
											<li>
												• 25% deposit upon contract
												signing
											</li>
											<li>
												• 25% at rough-in completion
											</li>
											<li>
												• 25% at substantial completion
											</li>
											<li>
												• 25% final payment (hold
												minimal retention)
											</li>
										</ul>
									</div>
									<div className='border-l-4 border-primary pl-4'>
										<h4 className='font-semibold mb-2'>
											Shorter Payment Terms
										</h4>
										<p className='text-sm text-muted-foreground'>
											Negotiate Net 15 instead of Net 30.
											Offer 2% discount for payment within
											10 days to incentivize quick
											payment.
										</p>
									</div>
									<div className='border-l-4 border-primary pl-4'>
										<h4 className='font-semibold mb-2'>
											Material Deposits
										</h4>
										<p className='text-sm text-muted-foreground'>
											For expensive materials, collect
											payment before ordering. This
											eliminates the cash flow gap for
											major purchases.
										</p>
									</div>
								</div>
							</div>

							{/* Strategy 2 */}
							<div className='bg-qb-green-50 border-l-4 border-primary p-6 mb-8 rounded-r-lg'>
								<h2 className='text-2xl font-bold text-primary mb-4'>
									Strategy #2: Create a 13-Week Cash Flow
									Forecast
								</h2>
								<p className='text-lg leading-relaxed mb-4'>
									You can't manage what you can't see. A
									rolling 13-week cash flow forecast helps you
									anticipate problems and opportunities before
									they happen.
								</p>
							</div>

							<p className='text-lg leading-relaxed mb-6'>
								I help Columbus area contractors set up simple
								spreadsheets that track expected income and
								expenses week by week. This forward-looking view
								typically prevents 90% of cash flow crises.
							</p>

							<div className='bg-white border border-gray-200 rounded-lg p-6 mb-8'>
								<h3 className='text-xl font-bold mb-4'>
									What to Include in Your Forecast
								</h3>
								<div className='grid md:grid-cols-2 gap-6'>
									<div>
										<h4 className='font-semibold mb-2 text-green-600'>
											Expected Income
										</h4>
										<ul className='space-y-2 text-sm text-muted-foreground'>
											<li>
												• Scheduled progress payments
											</li>
											<li>• Final payments due</li>
											<li>• New project deposits</li>
											<li>• Change order payments</li>
										</ul>
									</div>
									<div>
										<h4 className='font-semibold mb-2 text-red-600'>
											Expected Expenses
										</h4>
										<ul className='space-y-2 text-sm text-muted-foreground'>
											<li>• Payroll (every week)</li>
											<li>• Material purchases</li>
											<li>• Subcontractor payments</li>
											<li>• Equipment payments</li>
											<li>• Insurance and overhead</li>
										</ul>
									</div>
								</div>
							</div>

							{/* Mid-Article CTA */}
							<Card className='bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20 my-12'>
								<CardContent className='pt-6'>
									<div className='text-center'>
										<h3 className='text-xl font-bold mb-3'>
											Need Help Setting Up Cash Flow
											Forecasting?
										</h3>
										<p className='text-muted-foreground mb-4'>
											I'll create a custom cash flow
											forecasting system for your
											construction business and train your
											team to use it effectively.
										</p>
										<CalendlyModal
											buttonText='Get Cash Flow Help'
											buttonSize='lg'
											buttonClassName='px-8 py-4'
										/>
									</div>
								</CardContent>
							</Card>

							{/* Strategy 3 */}
							<div className='bg-qb-green-50 border-l-4 border-primary p-6 mb-8 rounded-r-lg'>
								<h2 className='text-2xl font-bold text-primary mb-4'>
									Strategy #3: Manage Seasonal Cash Flow
								</h2>
								<p className='text-lg leading-relaxed mb-4'>
									Central Ohio's seasonal construction cycle
									is predictable. Smart contractors prepare
									for winter slowdowns during busy summer
									months.
								</p>
							</div>

							<div className='bg-white border border-gray-200 rounded-lg p-6 mb-8'>
								<h3 className='text-xl font-bold mb-4'>
									Seasonal Cash Flow Strategies
								</h3>
								<div className='space-y-4'>
									<div className='border-l-4 border-blue-500 pl-4'>
										<h4 className='font-semibold mb-2'>
											Build Winter Reserves
										</h4>
										<p className='text-sm text-muted-foreground'>
											Save 15-20% of summer profits for
											winter expenses. Treat this like a
											tax you pay to yourself.
										</p>
									</div>
									<div className='border-l-4 border-blue-500 pl-4'>
										<h4 className='font-semibold mb-2'>
											Develop Winter Revenue
										</h4>
										<p className='text-sm text-muted-foreground'>
											Interior remodeling, basement
											finishing, and planning services can
											provide winter income.
										</p>
									</div>
									<div className='border-l-4 border-blue-500 pl-4'>
										<h4 className='font-semibold mb-2'>
											Negotiate Flexible Terms
										</h4>
										<p className='text-sm text-muted-foreground'>
											Work with suppliers and lenders to
											adjust payment schedules during slow
											seasons.
										</p>
									</div>
								</div>
							</div>

							{/* Strategy 4 */}
							<div className='bg-qb-green-50 border-l-4 border-primary p-6 mb-8 rounded-r-lg'>
								<h2 className='text-2xl font-bold text-primary mb-4'>
									Strategy #4: Accelerate Collections
								</h2>
								<p className='text-lg leading-relaxed mb-4'>
									Getting paid faster is often easier than you
									think. Small changes to your billing and
									collection process can dramatically improve
									cash flow.
								</p>
							</div>

							<div className='bg-white border border-gray-200 rounded-lg p-6 mb-8'>
								<h3 className='text-xl font-bold mb-4'>
									Collection Best Practices
								</h3>
								<ul className='space-y-3'>
									<li className='flex items-start gap-3'>
										<CheckCircle className='h-5 w-5 text-primary mt-0.5 flex-shrink-0' />
										<span>
											<strong>
												Invoice immediately:
											</strong>{' '}
											Send invoices the same day work is
											completed or milestones are reached
										</span>
									</li>
									<li className='flex items-start gap-3'>
										<CheckCircle className='h-5 w-5 text-primary mt-0.5 flex-shrink-0' />
										<span>
											<strong>Follow up quickly:</strong>{' '}
											Call about overdue payments within 3
											days of due date
										</span>
									</li>
									<li className='flex items-start gap-3'>
										<CheckCircle className='h-5 w-5 text-primary mt-0.5 flex-shrink-0' />
										<span>
											<strong>Make payment easy:</strong>{' '}
											Accept credit cards, ACH transfers,
											and online payments
										</span>
									</li>
									<li className='flex items-start gap-3'>
										<CheckCircle className='h-5 w-5 text-primary mt-0.5 flex-shrink-0' />
										<span>
											<strong>Offer incentives:</strong>{' '}
											2% discount for early payment often
											pays for itself
										</span>
									</li>
									<li className='flex items-start gap-3'>
										<CheckCircle className='h-5 w-5 text-primary mt-0.5 flex-shrink-0' />
										<span>
											<strong>Use lien rights:</strong>{' '}
											File mechanics liens promptly when
											payments are significantly overdue
										</span>
									</li>
								</ul>
							</div>

							{/* Strategy 5 */}
							<div className='bg-qb-green-50 border-l-4 border-primary p-6 mb-8 rounded-r-lg'>
								<h2 className='text-2xl font-bold text-primary mb-4'>
									Strategy #5: Optimize Expense Timing
								</h2>
								<p className='text-lg leading-relaxed mb-4'>
									When you pay expenses matters as much as how
									much you pay. Strategic timing of payments
									can smooth out cash flow bumps.
								</p>
							</div>

							<div className='bg-white border border-gray-200 rounded-lg p-6 mb-8'>
								<h3 className='text-xl font-bold mb-4'>
									Smart Expense Management
								</h3>
								<div className='grid md:grid-cols-2 gap-6'>
									<div>
										<h4 className='font-semibold mb-2 flex items-center gap-2'>
											<CreditCard className='h-5 w-5 text-primary' />
											Use Payment Terms
										</h4>
										<p className='text-sm text-muted-foreground mb-4'>
											Take advantage of Net 30 terms with
											suppliers. Pay on day 29, not day 1.
										</p>
									</div>
									<div>
										<h4 className='font-semibold mb-2 flex items-center gap-2'>
											<Calendar className='h-5 w-5 text-primary' />
											Spread Large Purchases
										</h4>
										<p className='text-sm text-muted-foreground mb-4'>
											Don't buy all materials at once.
											Order as needed to match cash
											inflows.
										</p>
									</div>
									<div>
										<h4 className='font-semibold mb-2 flex items-center gap-2'>
											<Target className='h-5 w-5 text-primary' />
											Negotiate Payment Schedules
										</h4>
										<p className='text-sm text-muted-foreground mb-4'>
											Many suppliers will work with you on
											payment timing if you communicate
											proactively.
										</p>
									</div>
									<div>
										<h4 className='font-semibold mb-2 flex items-center gap-2'>
											<PiggyBank className='h-5 w-5 text-primary' />
											Build Supplier Relationships
										</h4>
										<p className='text-sm text-muted-foreground mb-4'>
											Strong relationships with suppliers
											can provide flexibility during tight
											cash periods.
										</p>
									</div>
								</div>
							</div>

							{/* Results Section */}
							<div className='bg-primary/5 border border-primary/20 rounded-lg p-8 mb-12'>
								<h2 className='text-2xl font-bold text-primary mb-4'>
									Real Results from Columbus Area Contractors
								</h2>
								<p className='text-lg leading-relaxed mb-6'>
									Construction companies that implement these
									cash flow strategies see dramatic
									improvements in their financial stability
									and growth potential.
								</p>

								<div className='grid md:grid-cols-2 gap-6 mb-6'>
									<div className='bg-white rounded-lg p-4'>
										<h4 className='font-semibold mb-2 text-primary'>
											Cash Flow Improvement
										</h4>
										<p className='text-2xl font-bold text-primary mb-1'>
											40%
										</p>
										<p className='text-sm text-muted-foreground'>
											Average improvement in cash flow
											within 6 months
										</p>
									</div>
									<div className='bg-white rounded-lg p-4'>
										<h4 className='font-semibold mb-2 text-primary'>
											Faster Collections
										</h4>
										<p className='text-2xl font-bold text-primary mb-1'>
											18 Days
										</p>
										<p className='text-sm text-muted-foreground'>
											Reduction in average collection time
										</p>
									</div>
									<div className='bg-white rounded-lg p-4'>
										<h4 className='font-semibold mb-2 text-primary'>
											Reduced Stress
										</h4>
										<p className='text-2xl font-bold text-primary mb-1'>
											90%
										</p>
										<p className='text-sm text-muted-foreground'>
											Reduction in cash flow-related
											stress
										</p>
									</div>
									<div className='bg-white rounded-lg p-4'>
										<h4 className='font-semibold mb-2 text-primary'>
											Growth Capacity
										</h4>
										<p className='text-2xl font-bold text-primary mb-1'>
											3x
										</p>
										<p className='text-sm text-muted-foreground'>
											Increase in ability to take on
											larger projects
										</p>
									</div>
								</div>

								<div className='text-center'>
									<CalendlyModal
										buttonText='Improve Your Cash Flow Today'
										buttonSize='lg'
										buttonClassName='px-8 py-4'
									/>
								</div>
							</div>

							{/* Conclusion */}
							<div className='border-t pt-8'>
								<h2 className='text-2xl font-bold mb-4'>
									Take Control of Your Construction Cash Flow
								</h2>
								<p className='text-lg leading-relaxed mb-6'>
									Cash flow management isn't just about
									survival—it's about creating the financial
									stability that allows your construction
									business to grow and thrive. The strategies
									in this guide have helped dozens of Central
									Ohio contractors transform their businesses.
								</p>
								<p className='text-lg leading-relaxed mb-8'>
									Don't let cash flow problems limit your
									potential. Start implementing these
									strategies today and build the financial
									foundation your construction business
									deserves.
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
											QuickBooks ProAdvisor • Cash Flow
											Specialist
										</p>
										<p className='text-muted-foreground mb-6 leading-relaxed'>
											Ray has helped over 75 Central Ohio
											construction companies improve their
											cash flow management. His expertise
											in construction finance and
											practical approach to cash flow
											forecasting has helped clients avoid
											financial crises and achieve
											sustainable growth.
										</p>

										<div className='flex flex-wrap justify-center lg:justify-start gap-3 mb-6'>
											<div className='flex items-center gap-2 px-3 py-1 bg-qb-green-100 rounded-full'>
												<Award className='h-4 w-4 text-primary' />
												<span className='text-sm font-medium text-primary'>
													Cash Flow Expert
												</span>
											</div>
											<div className='flex items-center gap-2 px-3 py-1 bg-qb-green-100 rounded-full'>
												<TrendingUp className='h-4 w-4 text-primary' />
												<span className='text-sm font-medium text-primary'>
													Financial Planning
												</span>
											</div>
											<div className='flex items-center gap-2 px-3 py-1 bg-qb-green-100 rounded-full'>
												<MapPin className='h-4 w-4 text-primary' />
												<span className='text-sm font-medium text-primary'>
													Central Ohio
												</span>
											</div>
										</div>

										<CalendlyModal
											buttonText='Schedule Your Cash Flow Consultation'
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
									title: 'Columbus Construction Tax Strategies That Save Thousands',
									excerpt:
										'Specific tax deductions for Columbus area construction businesses.',
									slug: 'columbus-construction-tax-strategies',
									location: 'Columbus, OH',
									category: 'Financial Planning',
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
							Stop Worrying About Cash Flow
						</h2>
						<p className='text-xl text-muted-foreground mb-8'>
							Join Central Ohio contractors who've transformed
							their cash flow management. Get your free
							consultation and start building financial stability
							today.
						</p>

						<div className='flex flex-col sm:flex-row gap-4 justify-center'>
							<CalendlyModal
								buttonText='Schedule Free Cash Flow Analysis'
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
