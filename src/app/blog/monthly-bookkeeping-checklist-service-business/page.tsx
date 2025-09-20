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
	BarChart3,
	AlertTriangle,
	ListChecks,
	CreditCard,
	Receipt,
	Target,
	Folder,
} from 'lucide-react';

export const metadata = {
	title: 'The 7-Step Monthly Bookkeeping Checklist for Service Businesses | Ray Galloway',
	description:
		'Never miss important bookkeeping tasks again. This comprehensive monthly checklist ensures your service business stays financially organized and compliant.',
	keywords:
		'monthly bookkeeping checklist, service business accounting, bookkeeping tasks, small business financial management, QuickBooks checklist',
};

export default function MonthlyBookkeepingChecklist() {
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
							<span>Bookkeeping Checklist</span>
						</nav>

						{/* Article Meta */}
						<div className='flex flex-wrap items-center gap-4 mb-6'>
							<div className='flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full'>
								<ListChecks className='h-4 w-4 text-primary' />
								<span className='text-sm font-medium text-primary'>
									Bookkeeping
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
								<span>December 5, 2024</span>
							</div>
							<div className='flex items-center gap-2 text-sm text-muted-foreground'>
								<Clock className='h-4 w-4' />
								<span>9 min read</span>
							</div>
						</div>

						{/* Title */}
						<h1 className='text-4xl sm:text-5xl font-bold mb-6 leading-tight'>
							The 7-Step Monthly Bookkeeping Checklist for Service
							Businesses
						</h1>

						<p className='text-xl text-muted-foreground mb-8'>
							Stay on top of your finances with this comprehensive
							monthly checklist. Follow these 7 essential steps to
							keep your service business financially organized and
							make better business decisions.
						</p>

						{/* Featured Image */}
						<div className='relative h-64 sm:h-80 lg:h-96 rounded-xl overflow-hidden shadow-xl mb-8'>
							{/* TODO: Add actual bookkeeping checklist image */}
							<div className='absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center'>
								<div className='text-center text-white'>
									<ListChecks className='h-20 w-20 mx-auto mb-4' />
									<p className='text-lg font-semibold'>
										Monthly Bookkeeping Checklist
									</p>
									<p className='text-sm opacity-75'>
										Add photo:
										/images/blog/bookkeeping-checklist.jpg
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
								Consistent monthly bookkeeping is the foundation
								of a healthy service business. Yet most business
								owners I work with admit they're inconsistent
								with their financial management—some months
								they're on top of everything, other months they
								let it slide.
							</p>

							<p className='text-lg leading-relaxed mb-8'>
								This checklist eliminates the guesswork. Follow
								these 7 steps every month, and you'll always
								know exactly where your business stands
								financially. Better yet, you'll catch problems
								early and make decisions based on accurate,
								up-to-date information.
							</p>

							{/* Why Monthly Matters */}
							<div className='bg-qb-green-50 border-l-4 border-primary p-6 mb-8 rounded-r-lg'>
								<h2 className='text-2xl font-bold text-primary mb-4'>
									Why Monthly Bookkeeping Matters
								</h2>
								<p className='text-lg leading-relaxed mb-4'>
									Monthly bookkeeping isn't just about staying
									organized—it's about maintaining control
									over your business's financial health and
									making informed decisions that drive growth.
								</p>
							</div>

							<div className='bg-white border border-gray-200 rounded-lg p-6 mb-8'>
								<h3 className='text-xl font-bold mb-4'>
									The Cost of Inconsistent Bookkeeping
								</h3>
								<div className='grid md:grid-cols-2 gap-6'>
									<div>
										<h4 className='font-semibold mb-2 text-red-600'>
											Financial Blind Spots
										</h4>
										<ul className='space-y-2 text-sm text-muted-foreground'>
											<li>
												• Don't know true profitability
											</li>
											<li>• Miss cash flow problems</li>
											<li>• Can't identify trends</li>
											<li>
												• Make decisions on outdated
												data
											</li>
										</ul>
									</div>
									<div>
										<h4 className='font-semibold mb-2 text-red-600'>
											Year-End Scramble
										</h4>
										<ul className='space-y-2 text-sm text-muted-foreground'>
											<li>• Panic during tax season</li>
											<li>• Higher accounting fees</li>
											<li>• Missed deductions</li>
											<li>
												• Potential compliance issues
											</li>
										</ul>
									</div>
								</div>
								<div className='mt-4 p-3 bg-green-50 rounded-lg'>
									<p className='text-sm font-medium text-green-800'>
										💡 Solution: Spend 2-3 hours monthly on
										these tasks to save 20+ hours during tax
										season and make better business
										decisions year-round.
									</p>
								</div>
							</div>

							{/* The 7-Step Checklist */}
							<h2 className='text-2xl font-bold mb-6 text-primary'>
								Your 7-Step Monthly Bookkeeping Checklist
							</h2>

							{/* Step 1 */}
							<div className='bg-white border border-gray-200 rounded-lg p-6 mb-6'>
								<div className='flex items-start gap-4'>
									<div className='bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold flex-shrink-0 mt-1'>
										1
									</div>
									<div className='flex-1'>
										<h3 className='text-xl font-bold mb-4 flex items-center gap-2'>
											<CreditCard className='h-6 w-6 text-primary' />
											Reconcile All Bank and Credit Card
											Accounts
										</h3>
										<p className='text-muted-foreground mb-4'>
											Start by ensuring all your bank and
											credit card statements match your
											accounting records. This catches
											errors early and ensures your
											financial reports are accurate.
										</p>

										<div className='bg-blue-50 p-4 rounded-lg mb-4'>
											<h4 className='font-semibold mb-2'>
												What to Reconcile:
											</h4>
											<ul className='space-y-1 text-sm text-muted-foreground'>
												<li>
													• Business checking account
												</li>
												<li>
													• Business savings account
												</li>
												<li>• Business credit cards</li>
												<li>
													• PayPal or other payment
													processors
												</li>
												<li>
													• Petty cash (if applicable)
												</li>
											</ul>
										</div>

										<div className='bg-yellow-50 p-4 rounded-lg'>
											<h4 className='font-semibold mb-2 text-yellow-800'>
												Pro Tip:
											</h4>
											<p className='text-sm text-yellow-700'>
												If you're using QuickBooks with
												bank feeds, this process is much
												faster. Transactions download
												automatically, and you just need
												to categorize and match them.
											</p>
										</div>
									</div>
								</div>
							</div>

							{/* Step 2 */}
							<div className='bg-white border border-gray-200 rounded-lg p-6 mb-6'>
								<div className='flex items-start gap-4'>
									<div className='bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold flex-shrink-0 mt-1'>
										2
									</div>
									<div className='flex-1'>
										<h3 className='text-xl font-bold mb-4 flex items-center gap-2'>
											<Receipt className='h-6 w-6 text-primary' />
											Review and Categorize All Expenses
										</h3>
										<p className='text-muted-foreground mb-4'>
											Go through every expense transaction
											and ensure it's properly
											categorized. This is crucial for
											accurate financial reporting and tax
											preparation.
										</p>

										<div className='grid md:grid-cols-2 gap-4 mb-4'>
											<div className='bg-green-50 p-4 rounded-lg'>
												<h4 className='font-semibold mb-2'>
													Common Service Business
													Categories:
												</h4>
												<ul className='space-y-1 text-sm text-muted-foreground'>
													<li>
														• Professional services
													</li>
													<li>• Office supplies</li>
													<li>
														• Software subscriptions
													</li>
													<li>
														• Marketing and
														advertising
													</li>
													<li>• Travel and meals</li>
												</ul>
											</div>
											<div className='bg-red-50 p-4 rounded-lg'>
												<h4 className='font-semibold mb-2'>
													Watch Out For:
												</h4>
												<ul className='space-y-1 text-sm text-muted-foreground'>
													<li>
														• Personal expenses
														mixed in
													</li>
													<li>
														• Uncategorized
														transactions
													</li>
													<li>• Duplicate entries</li>
													<li>• Missing receipts</li>
													<li>• Incorrect amounts</li>
												</ul>
											</div>
										</div>

										<div className='bg-primary/5 p-4 rounded-lg'>
											<p className='text-sm font-medium text-primary'>
												⏰ Time Saver: Set up rules in
												QuickBooks to automatically
												categorize recurring expenses
												like software subscriptions and
												utilities.
											</p>
										</div>
									</div>
								</div>
							</div>

							{/* Step 3 */}
							<div className='bg-white border border-gray-200 rounded-lg p-6 mb-6'>
								<div className='flex items-start gap-4'>
									<div className='bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold flex-shrink-0 mt-1'>
										3
									</div>
									<div className='flex-1'>
										<h3 className='text-xl font-bold mb-4 flex items-center gap-2'>
											<FileText className='h-6 w-6 text-primary' />
											Send Outstanding Invoices and Follow
											Up
										</h3>
										<p className='text-muted-foreground mb-4'>
											Review your accounts receivable and
											take action on overdue invoices.
											Consistent follow-up is key to
											maintaining healthy cash flow.
										</p>

										<div className='space-y-3 mb-4'>
											<div className='border-l-4 border-green-500 pl-4'>
												<h4 className='font-semibold mb-1'>
													Current Invoices (0-30 days)
												</h4>
												<p className='text-sm text-muted-foreground'>
													Send friendly payment
													reminders 3 days before due
													date.
												</p>
											</div>
											<div className='border-l-4 border-yellow-500 pl-4'>
												<h4 className='font-semibold mb-1'>
													Past Due (31-60 days)
												</h4>
												<p className='text-sm text-muted-foreground'>
													Call or email immediately.
													Be firm but professional.
												</p>
											</div>
											<div className='border-l-4 border-red-500 pl-4'>
												<h4 className='font-semibold mb-1'>
													Seriously Overdue (60+ days)
												</h4>
												<p className='text-sm text-muted-foreground'>
													Consider collection agencies
													or legal action.
												</p>
											</div>
										</div>

										<div className='bg-blue-50 p-4 rounded-lg'>
											<h4 className='font-semibold mb-2'>
												Monthly Action Items:
											</h4>
											<ul className='space-y-1 text-sm text-muted-foreground'>
												<li>• Review aging report</li>
												<li>
													• Send payment reminders
												</li>
												<li>• Make collection calls</li>
												<li>
													• Update customer payment
													terms if needed
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>

							{/* Mid-Article CTA */}
							<Card className='bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20 my-12'>
								<CardContent className='pt-6'>
									<div className='text-center'>
										<h3 className='text-xl font-bold mb-3'>
											Need Help Implementing This
											Checklist?
										</h3>
										<p className='text-muted-foreground mb-4'>
											I'll help you set up systems and
											processes to make monthly
											bookkeeping quick and painless.
										</p>
										<CalendlyModal
											buttonText='Get Bookkeeping System Help'
											buttonSize='lg'
											buttonClassName='px-8 py-4'
										/>
									</div>
								</CardContent>
							</Card>

							{/* Step 4 */}
							<div className='bg-white border border-gray-200 rounded-lg p-6 mb-6'>
								<div className='flex items-start gap-4'>
									<div className='bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold flex-shrink-0 mt-1'>
										4
									</div>
									<div className='flex-1'>
										<h3 className='text-xl font-bold mb-4 flex items-center gap-2'>
											<DollarSign className='h-6 w-6 text-primary' />
											Review Accounts Payable and Cash
											Flow
										</h3>
										<p className='text-muted-foreground mb-4'>
											Check what you owe to vendors and
											suppliers, and plan your cash flow
											for the upcoming month. This
											prevents cash crunches and helps you
											take advantage of early payment
											discounts.
										</p>

										<div className='grid md:grid-cols-2 gap-4 mb-4'>
											<div className='bg-blue-50 p-4 rounded-lg'>
												<h4 className='font-semibold mb-2'>
													Review Outstanding Bills:
												</h4>
												<ul className='space-y-1 text-sm text-muted-foreground'>
													<li>
														• Vendor invoices due
													</li>
													<li>
														• Recurring
														subscriptions
													</li>
													<li>• Loan payments</li>
													<li>• Tax obligations</li>
													<li>• Payroll expenses</li>
												</ul>
											</div>
											<div className='bg-green-50 p-4 rounded-lg'>
												<h4 className='font-semibold mb-2'>
													Cash Flow Planning:
												</h4>
												<ul className='space-y-1 text-sm text-muted-foreground'>
													<li>
														• Expected income this
														month
													</li>
													<li>
														• Required expense
														payments
													</li>
													<li>
														• Available cash balance
													</li>
													<li>
														• Potential cash
														shortfalls
													</li>
													<li>
														• Early payment
														opportunities
													</li>
												</ul>
											</div>
										</div>

										<div className='bg-yellow-50 p-4 rounded-lg'>
											<p className='text-sm font-medium text-yellow-800'>
												💰 Money Tip: Many vendors offer
												2% discounts for payments within
												10 days. If you have the cash
												flow, these discounts add up
												quickly.
											</p>
										</div>
									</div>
								</div>
							</div>

							{/* Step 5 */}
							<div className='bg-white border border-gray-200 rounded-lg p-6 mb-6'>
								<div className='flex items-start gap-4'>
									<div className='bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold flex-shrink-0 mt-1'>
										5
									</div>
									<div className='flex-1'>
										<h3 className='text-xl font-bold mb-4 flex items-center gap-2'>
											<BarChart3 className='h-6 w-6 text-primary' />
											Generate and Review Financial
											Reports
										</h3>
										<p className='text-muted-foreground mb-4'>
											Create your key financial reports
											and actually review them. These
											reports tell the story of your
											business performance and help you
											make informed decisions.
										</p>

										<div className='space-y-4 mb-4'>
											<div className='border border-gray-200 rounded-lg p-4'>
												<h4 className='font-semibold mb-2 flex items-center gap-2'>
													<TrendingUp className='h-5 w-5 text-primary' />
													Profit & Loss Statement
												</h4>
												<p className='text-sm text-muted-foreground mb-2'>
													Shows your income, expenses,
													and net profit for the
													month.
												</p>
												<p className='text-sm font-medium text-primary'>
													Key Questions: Are you
													profitable? Which services
													make the most money? Where
													are expenses higher than
													expected?
												</p>
											</div>
											<div className='border border-gray-200 rounded-lg p-4'>
												<h4 className='font-semibold mb-2 flex items-center gap-2'>
													<BarChart3 className='h-5 w-5 text-primary' />
													Balance Sheet
												</h4>
												<p className='text-sm text-muted-foreground mb-2'>
													Shows what you own (assets)
													and what you owe
													(liabilities).
												</p>
												<p className='text-sm font-medium text-primary'>
													Key Questions: Is your
													business financially
													healthy? Are you building
													equity? Do you have enough
													cash reserves?
												</p>
											</div>
											<div className='border border-gray-200 rounded-lg p-4'>
												<h4 className='font-semibold mb-2 flex items-center gap-2'>
													<DollarSign className='h-5 w-5 text-primary' />
													Cash Flow Statement
												</h4>
												<p className='text-sm text-muted-foreground mb-2'>
													Shows how cash moved in and
													out of your business.
												</p>
												<p className='text-sm font-medium text-primary'>
													Key Questions: Where is your
													cash coming from? Where is
													it going? Do you have enough
													for upcoming expenses?
												</p>
											</div>
										</div>

										<div className='bg-primary/5 p-4 rounded-lg'>
											<p className='text-sm font-medium text-primary'>
												📊 Pro Tip: Compare this month
												to the same month last year and
												to your budget. Look for trends
												and unusual changes that need
												investigation.
											</p>
										</div>
									</div>
								</div>
							</div>

							{/* Step 6 */}
							<div className='bg-white border border-gray-200 rounded-lg p-6 mb-6'>
								<div className='flex items-start gap-4'>
									<div className='bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold flex-shrink-0 mt-1'>
										6
									</div>
									<div className='flex-1'>
										<h3 className='text-xl font-bold mb-4 flex items-center gap-2'>
											<Target className='h-6 w-6 text-primary' />
											Track Key Performance Indicators
											(KPIs)
										</h3>
										<p className='text-muted-foreground mb-4'>
											Monitor the metrics that matter most
											to your service business. These KPIs
											help you spot trends and make
											strategic decisions before problems
											become crises.
										</p>

										<div className='grid md:grid-cols-2 gap-4 mb-4'>
											<div className='bg-blue-50 p-4 rounded-lg'>
												<h4 className='font-semibold mb-2'>
													Financial KPIs:
												</h4>
												<ul className='space-y-1 text-sm text-muted-foreground'>
													<li>
														• Monthly recurring
														revenue
													</li>
													<li>
														• Gross profit margin
													</li>
													<li>
														• Average invoice value
													</li>
													<li>
														• Days sales outstanding
													</li>
													<li>
														• Cash conversion cycle
													</li>
												</ul>
											</div>
											<div className='bg-green-50 p-4 rounded-lg'>
												<h4 className='font-semibold mb-2'>
													Operational KPIs:
												</h4>
												<ul className='space-y-1 text-sm text-muted-foreground'>
													<li>
														• Client acquisition
														cost
													</li>
													<li>
														• Client lifetime value
													</li>
													<li>• Utilization rate</li>
													<li>
														• Project completion
														time
													</li>
													<li>
														• Client satisfaction
														scores
													</li>
												</ul>
											</div>
										</div>

										<div className='bg-yellow-50 p-4 rounded-lg'>
											<h4 className='font-semibold mb-2 text-yellow-800'>
												Monthly KPI Review Questions:
											</h4>
											<ul className='space-y-1 text-sm text-yellow-700'>
												<li>
													• Which KPIs improved this
													month?
												</li>
												<li>
													• Which ones declined and
													why?
												</li>
												<li>
													• What actions should you
													take next month?
												</li>
												<li>
													• Are you on track to meet
													annual goals?
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>

							{/* Step 7 */}
							<div className='bg-white border border-gray-200 rounded-lg p-6 mb-8'>
								<div className='flex items-start gap-4'>
									<div className='bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-lg font-bold flex-shrink-0 mt-1'>
										7
									</div>
									<div className='flex-1'>
										<h3 className='text-xl font-bold mb-4 flex items-center gap-2'>
											<Folder className='h-6 w-6 text-primary' />
											Organize and Backup Financial
											Records
										</h3>
										<p className='text-muted-foreground mb-4'>
											End each month by organizing your
											financial documents and ensuring
											everything is properly backed up.
											This saves time during tax season
											and protects your business.
										</p>

										<div className='space-y-4 mb-4'>
											<div className='border-l-4 border-primary pl-4'>
												<h4 className='font-semibold mb-2'>
													Digital Organization:
												</h4>
												<ul className='space-y-1 text-sm text-muted-foreground'>
													<li>
														• Save receipts to cloud
														storage
													</li>
													<li>
														• File bank statements
													</li>
													<li>
														• Archive completed
														invoices
													</li>
													<li>
														• Update expense
														documentation
													</li>
												</ul>
											</div>
											<div className='border-l-4 border-primary pl-4'>
												<h4 className='font-semibold mb-2'>
													Backup Procedures:
												</h4>
												<ul className='space-y-1 text-sm text-muted-foreground'>
													<li>
														• Export QuickBooks
														backup
													</li>
													<li>
														• Sync cloud storage
													</li>
													<li>
														• Update external drive
														backup
													</li>
													<li>
														• Verify backup
														integrity
													</li>
												</ul>
											</div>
										</div>

										<div className='bg-red-50 p-4 rounded-lg'>
											<h4 className='font-semibold mb-2 text-red-800'>
												⚠️ Critical Reminder:
											</h4>
											<p className='text-sm text-red-700'>
												The IRS requires you to keep
												business records for at least 3
												years (7 years for some items).
												Proper organization and backup
												protect you from data loss and
												audit issues.
											</p>
										</div>
									</div>
								</div>
							</div>

							{/* Implementation Tips */}
							<div className='bg-primary/5 border border-primary/20 rounded-lg p-8 mb-12'>
								<h2 className='text-2xl font-bold text-primary mb-4'>
									Making This Checklist Work for You
								</h2>
								<p className='text-lg leading-relaxed mb-6'>
									The key to successful monthly bookkeeping is
									consistency and systems. Here's how to make
									this checklist a habit that sticks.
								</p>

								<div className='grid md:grid-cols-2 gap-6'>
									<div>
										<h3 className='text-lg font-semibold mb-3'>
											⏰ Time Management Tips
										</h3>
										<ul className='space-y-2 text-sm text-muted-foreground'>
											<li>
												• Block 2-3 hours on the same
												day each month
											</li>
											<li>
												• Break the checklist into
												smaller daily tasks
											</li>
											<li>
												• Use a timer to stay focused on
												each step
											</li>
											<li>
												• Reward yourself when you
												complete it
											</li>
										</ul>
									</div>
									<div>
										<h3 className='text-lg font-semibold mb-3'>
											🔧 System Optimization
										</h3>
										<ul className='space-y-2 text-sm text-muted-foreground'>
											<li>
												• Automate recurring
												transactions
											</li>
											<li>
												• Set up bank feeds in
												QuickBooks
											</li>
											<li>
												• Create templates for common
												entries
											</li>
											<li>
												• Use apps for receipt capture
											</li>
										</ul>
									</div>
								</div>

								<div className='text-center mt-6'>
									<CalendlyModal
										buttonText='Get Professional Bookkeeping Help'
										buttonSize='lg'
										buttonClassName='px-8 py-4'
									/>
								</div>
							</div>

							{/* Conclusion */}
							<div className='border-t pt-8'>
								<h2 className='text-2xl font-bold mb-4'>
									Consistency Creates Success
								</h2>
								<p className='text-lg leading-relaxed mb-6'>
									Following this 7-step monthly checklist will
									transform your relationship with your
									business finances. Instead of dreading
									bookkeeping, you'll have confidence in your
									numbers and the insights you need to grow
									your service business.
								</p>
								<p className='text-lg leading-relaxed mb-8'>
									Remember: the goal isn't perfection—it's
									progress. Start with what you can manage,
									and gradually work up to completing all 7
									steps each month. Your future self (and your
									accountant) will thank you.
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
											QuickBooks ProAdvisor • Bookkeeping
											Systems Specialist
										</p>
										<p className='text-muted-foreground mb-6 leading-relaxed'>
											Ray has helped hundreds of service
											business owners implement systematic
											bookkeeping processes that save time
											and improve financial
											decision-making. His practical
											approach to financial management has
											helped clients reduce bookkeeping
											time by 60% while improving accuracy
											and insights.
										</p>

										<div className='flex flex-wrap justify-center lg:justify-start gap-3 mb-6'>
											<div className='flex items-center gap-2 px-3 py-1 bg-qb-green-100 rounded-full'>
												<Award className='h-4 w-4 text-primary' />
												<span className='text-sm font-medium text-primary'>
													Systems Expert
												</span>
											</div>
											<div className='flex items-center gap-2 px-3 py-1 bg-qb-green-100 rounded-full'>
												<ListChecks className='h-4 w-4 text-primary' />
												<span className='text-sm font-medium text-primary'>
													Process Specialist
												</span>
											</div>
											<div className='flex items-center gap-2 px-3 py-1 bg-qb-green-100 rounded-full'>
												<Calculator className='h-4 w-4 text-primary' />
												<span className='text-sm font-medium text-primary'>
													QuickBooks Pro
												</span>
											</div>
										</div>

										<CalendlyModal
											buttonText='Schedule Your Bookkeeping Consultation'
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
									title: "Small Business Tax Deductions You're Probably Missing",
									excerpt:
										'Discover overlooked deductions that could save thousands annually.',
									slug: 'small-business-tax-deductions',
									category: 'Tax Planning',
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
							Ready to Master Your Monthly Bookkeeping?
						</h2>
						<p className='text-xl text-muted-foreground mb-8'>
							Stop struggling with inconsistent bookkeeping. Get
							professional help implementing these systems and
							take control of your business finances.
						</p>

						<div className='flex flex-col sm:flex-row gap-4 justify-center'>
							<CalendlyModal
								buttonText='Schedule Bookkeeping System Setup'
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
