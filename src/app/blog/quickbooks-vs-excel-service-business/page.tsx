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
	Zap,
	Shield,
	Users,
	Target,
	X,
} from 'lucide-react';

export const metadata = {
	title: 'QuickBooks vs Excel: Why Your Service Business Needs to Upgrade | Ray Galloway',
	description:
		'Discover why QuickBooks beats Excel for service business accounting. Compare features, costs, and benefits to make the right choice for your business.',
	keywords:
		'QuickBooks vs Excel, service business accounting software, small business bookkeeping, accounting software comparison, QuickBooks benefits',
};

export default function QuickBooksVsExcel() {
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
							<span>Software Comparison</span>
						</nav>

						{/* Article Meta */}
						<div className='flex flex-wrap items-center gap-4 mb-6'>
							<div className='flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full'>
								<Calculator className='h-4 w-4 text-primary' />
								<span className='text-sm font-medium text-primary'>
									Software
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
								<span>December 3, 2024</span>
							</div>
							<div className='flex items-start gap-2 text-sm text-muted-foreground'>
								<Clock className='h-4 w-4' />
								<span>10 min read</span>
							</div>
						</div>

						{/* Title */}
						<h1 className='text-4xl sm:text-5xl font-bold mb-6 leading-tight'>
							QuickBooks vs Excel: Why Your Service Business Needs
							to Upgrade
						</h1>

						<p className='text-xl text-muted-foreground mb-8'>
							Still using Excel for your business accounting?
							Discover why QuickBooks is the game-changer your
							service business needs to save time, reduce errors,
							and make better financial decisions.
						</p>

						{/* Featured Image */}
						<div className='relative h-64 sm:h-80 lg:h-96 rounded-xl overflow-hidden shadow-xl mb-8'>
							{/* TODO: Add actual QuickBooks vs Excel comparison image */}
							<div className='absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center'>
								<div className='text-center text-white'>
									<BarChart3 className='h-20 w-20 mx-auto mb-4' />
									<p className='text-lg font-semibold'>
										QuickBooks vs Excel Comparison
									</p>
									<p className='text-sm opacity-75'>
										Add photo:
										/images/blog/quickbooks-vs-excel.jpg
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
								I meet service business owners every week who
								are still using Excel spreadsheets to manage
								their finances. While Excel is a powerful tool,
								it's like using a hammer when you need a
								screwdriver—it might work, but it's not the
								right tool for the job.
							</p>

							<p className='text-lg leading-relaxed mb-8'>
								After helping hundreds of businesses transition
								from Excel to QuickBooks, I've seen firsthand
								how this upgrade transforms their financial
								management. Let me show you exactly why
								QuickBooks is worth the investment for your
								service business.
							</p>

							{/* The Excel Problem */}
							<div className='bg-red-50 border-l-4 border-red-500 p-6 mb-8 rounded-r-lg'>
								<div className='flex items-start gap-3'>
									<AlertTriangle className='h-6 w-6 text-red-500 mt-1 flex-shrink-0' />
									<div>
										<h2 className='text-2xl font-bold text-red-900 mb-3'>
											The Hidden Costs of Using Excel for
											Business Accounting
										</h2>
										<p className='text-red-800 mb-4'>
											Excel seems free and familiar, but
											it's actually costing your business
											more than you realize in time,
											errors, and missed opportunities.
										</p>
									</div>
								</div>
							</div>

							<div className='bg-white border border-gray-200 rounded-lg p-6 mb-8'>
								<h3 className='text-xl font-bold mb-4'>
									What Excel is Really Costing You
								</h3>
								<div className='grid md:grid-cols-2 gap-6'>
									<div>
										<h4 className='font-semibold mb-2 text-red-600 flex items-center gap-2'>
											<Clock className='h-5 w-5' />
											Time Costs
										</h4>
										<ul className='space-y-2 text-sm text-muted-foreground'>
											<li>
												• 5-10 hours per month on manual
												data entry
											</li>
											<li>
												• 2-3 hours monthly reconciling
												accounts
											</li>
											<li>
												• 4-6 hours creating financial
												reports
											</li>
											<li>
												• 8-12 hours during tax season
												organizing data
											</li>
										</ul>
									</div>
									<div>
										<h4 className='font-semibold mb-2 text-red-600 flex items-center gap-2'>
											<AlertTriangle className='h-5 w-5' />
											Error Costs
										</h4>
										<ul className='space-y-2 text-sm text-muted-foreground'>
											<li>
												• Formula errors in calculations
											</li>
											<li>
												• Duplicate or missed
												transactions
											</li>
											<li>• Incorrect tax filings</li>
											<li>
												• Poor business decisions from
												bad data
											</li>
										</ul>
									</div>
								</div>
								<div className='mt-4 p-3 bg-red-50 rounded-lg'>
									<p className='text-sm font-medium text-red-800'>
										💰 Total Cost: The average service
										business owner spends 20+ hours per
										month on Excel-based bookkeeping—that's
										$1,000-$2,000 in lost productive time
										monthly.
									</p>
								</div>
							</div>

							{/* Feature Comparison */}
							<div className='bg-qb-green-50 border-l-4 border-primary p-6 mb-8 rounded-r-lg'>
								<h2 className='text-2xl font-bold text-primary mb-4'>
									Feature-by-Feature Comparison
								</h2>
								<p className='text-lg leading-relaxed mb-4'>
									Let's compare the key features that matter
									most to service businesses. The differences
									are more significant than you might think.
								</p>
							</div>

							{/* Comparison Table */}
							<div className='bg-white border border-gray-200 rounded-lg overflow-hidden mb-8'>
								<div className='overflow-x-auto'>
									<table className='w-full'>
										<thead className='bg-gray-50'>
											<tr>
												<th className='px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider'>
													Feature
												</th>
												<th className='px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider'>
													Excel
												</th>
												<th className='px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider'>
													QuickBooks
												</th>
											</tr>
										</thead>
										<tbody className='bg-white divide-y divide-gray-200'>
											<tr>
												<td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>
													Automatic Bank Sync
												</td>
												<td className='px-6 py-4 whitespace-nowrap text-center'>
													<X className='h-5 w-5 text-red-500 mx-auto' />
												</td>
												<td className='px-6 py-4 whitespace-nowrap text-center'>
													<CheckCircle className='h-5 w-5 text-green-500 mx-auto' />
												</td>
											</tr>
											<tr className='bg-gray-50'>
												<td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>
													Professional Invoicing
												</td>
												<td className='px-6 py-4 whitespace-nowrap text-center'>
													<X className='h-5 w-5 text-red-500 mx-auto' />
												</td>
												<td className='px-6 py-4 whitespace-nowrap text-center'>
													<CheckCircle className='h-5 w-5 text-green-500 mx-auto' />
												</td>
											</tr>
											<tr>
												<td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>
													Expense Tracking
												</td>
												<td className='px-6 py-4 whitespace-nowrap text-center'>
													<span className='text-yellow-600 text-sm'>
														Manual
													</span>
												</td>
												<td className='px-6 py-4 whitespace-nowrap text-center'>
													<CheckCircle className='h-5 w-5 text-green-500 mx-auto' />
												</td>
											</tr>
											<tr className='bg-gray-50'>
												<td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>
													Tax Preparation
												</td>
												<td className='px-6 py-4 whitespace-nowrap text-center'>
													<span className='text-yellow-600 text-sm'>
														Complex
													</span>
												</td>
												<td className='px-6 py-4 whitespace-nowrap text-center'>
													<CheckCircle className='h-5 w-5 text-green-500 mx-auto' />
												</td>
											</tr>
											<tr>
												<td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>
													Financial Reports
												</td>
												<td className='px-6 py-4 whitespace-nowrap text-center'>
													<span className='text-yellow-600 text-sm'>
														Manual
													</span>
												</td>
												<td className='px-6 py-4 whitespace-nowrap text-center'>
													<CheckCircle className='h-5 w-5 text-green-500 mx-auto' />
												</td>
											</tr>
											<tr className='bg-gray-50'>
												<td className='px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900'>
													Multi-User Access
												</td>
												<td className='px-6 py-4 whitespace-nowrap text-center'>
													<span className='text-yellow-600 text-sm'>
														Limited
													</span>
												</td>
												<td className='px-6 py-4 whitespace-nowrap text-center'>
													<CheckCircle className='h-5 w-5 text-green-500 mx-auto' />
												</td>
											</tr>
										</tbody>
									</table>
								</div>
							</div>

							{/* Top 5 Reasons */}
							<h2 className='text-2xl font-bold mb-6 text-primary'>
								Top 5 Reasons Service Businesses Choose
								QuickBooks
							</h2>

							{/* Reason 1 */}
							<div className='bg-white border border-gray-200 rounded-lg p-6 mb-6'>
								<h3 className='text-xl font-bold mb-4 flex items-center gap-2'>
									<Zap className='h-6 w-6 text-primary' />
									1. Automatic Bank Synchronization
								</h3>
								<p className='text-muted-foreground mb-4'>
									QuickBooks automatically downloads and
									categorizes your bank transactions,
									eliminating hours of manual data entry every
									month.
								</p>
								<div className='bg-green-50 p-4 rounded-lg'>
									<p className='text-sm font-medium text-green-800'>
										<strong>Time Saved:</strong> 8-12 hours
										per month that you can spend growing
										your business instead of entering data.
									</p>
								</div>
							</div>

							{/* Reason 2 */}
							<div className='bg-white border border-gray-200 rounded-lg p-6 mb-6'>
								<h3 className='text-xl font-bold mb-4 flex items-center gap-2'>
									<FileText className='h-6 w-6 text-primary' />
									2. Professional Invoicing and Payment
									Processing
								</h3>
								<p className='text-muted-foreground mb-4'>
									Create professional invoices, send automatic
									reminders, and accept online payments—all
									integrated with your accounting system.
								</p>
								<div className='grid md:grid-cols-2 gap-4'>
									<div className='bg-blue-50 p-4 rounded-lg'>
										<h4 className='font-semibold mb-2'>
											Excel Invoicing
										</h4>
										<ul className='text-sm text-muted-foreground space-y-1'>
											<li>• Manual invoice creation</li>
											<li>• Separate payment tracking</li>
											<li>• No payment reminders</li>
											<li>• Cash/check payments only</li>
										</ul>
									</div>
									<div className='bg-green-50 p-4 rounded-lg'>
										<h4 className='font-semibold mb-2'>
											QuickBooks Invoicing
										</h4>
										<ul className='text-sm text-muted-foreground space-y-1'>
											<li>• Professional templates</li>
											<li>
												• Automatic payment tracking
											</li>
											<li>• Automated reminders</li>
											<li>• Online payment acceptance</li>
										</ul>
									</div>
								</div>
							</div>

							{/* Reason 3 */}
							<div className='bg-white border border-gray-200 rounded-lg p-6 mb-6'>
								<h3 className='text-xl font-bold mb-4 flex items-center gap-2'>
									<BarChart3 className='h-6 w-6 text-primary' />
									3. Real-Time Financial Reporting
								</h3>
								<p className='text-muted-foreground mb-4'>
									Get instant access to profit & loss
									statements, cash flow reports, and business
									performance metrics without building complex
									spreadsheets.
								</p>
								<div className='bg-primary/5 p-4 rounded-lg'>
									<p className='text-sm font-medium text-primary'>
										<strong>Business Impact:</strong> Make
										faster, data-driven decisions with
										real-time insights into your business
										performance.
									</p>
								</div>
							</div>

							{/* Mid-Article CTA */}
							<Card className='bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20 my-12'>
								<CardContent className='pt-6'>
									<div className='text-center'>
										<h3 className='text-xl font-bold mb-3'>
											Ready to Make the Switch to
											QuickBooks?
										</h3>
										<p className='text-muted-foreground mb-4'>
											I'll help you set up QuickBooks
											properly and migrate your data from
											Excel seamlessly.
										</p>
										<CalendlyModal
											buttonText='Get QuickBooks Setup Help'
											buttonSize='lg'
											buttonClassName='px-8 py-4'
										/>
									</div>
								</CardContent>
							</Card>

							{/* Reason 4 */}
							<div className='bg-white border border-gray-200 rounded-lg p-6 mb-6'>
								<h3 className='text-xl font-bold mb-4 flex items-center gap-2'>
									<Shield className='h-6 w-6 text-primary' />
									4. Tax Preparation Made Simple
								</h3>
								<p className='text-muted-foreground mb-4'>
									QuickBooks organizes your financial data in
									a way that makes tax preparation
									straightforward and ensures you don't miss
									any deductions.
								</p>
								<div className='grid md:grid-cols-2 gap-4'>
									<div>
										<h4 className='font-semibold mb-2 text-red-600'>
											Excel Tax Season
										</h4>
										<ul className='text-sm text-muted-foreground space-y-1'>
											<li>
												• Scrambling to organize data
											</li>
											<li>
												• Missing receipts and records
											</li>
											<li>• Manual categorization</li>
											<li>• Higher accounting fees</li>
										</ul>
									</div>
									<div>
										<h4 className='font-semibold mb-2 text-green-600'>
											QuickBooks Tax Season
										</h4>
										<ul className='text-sm text-muted-foreground space-y-1'>
											<li>• Data already organized</li>
											<li>• Digital receipt storage</li>
											<li>• Automatic categorization</li>
											<li>• Lower preparation costs</li>
										</ul>
									</div>
								</div>
							</div>

							{/* Reason 5 */}
							<div className='bg-white border border-gray-200 rounded-lg p-6 mb-8'>
								<h3 className='text-xl font-bold mb-4 flex items-center gap-2'>
									<Users className='h-6 w-6 text-primary' />
									5. Team Collaboration and Access Control
								</h3>
								<p className='text-muted-foreground mb-4'>
									Give your team, bookkeeper, and accountant
									secure access to the financial data they
									need without sharing sensitive information.
								</p>
								<div className='bg-blue-50 p-4 rounded-lg'>
									<h4 className='font-semibold mb-2'>
										User Permission Levels
									</h4>
									<ul className='text-sm text-muted-foreground space-y-1'>
										<li>
											• <strong>Full Access:</strong>{' '}
											Complete control over all features
										</li>
										<li>
											• <strong>Limited Access:</strong>{' '}
											Can view reports but not edit data
										</li>
										<li>
											•{' '}
											<strong>Time Tracking Only:</strong>{' '}
											Employees can track time for billing
										</li>
										<li>
											• <strong>Reports Only:</strong>{' '}
											View financial reports without
											access to transactions
										</li>
									</ul>
								</div>
							</div>

							{/* Cost Analysis */}
							<div className='bg-qb-green-50 border-l-4 border-primary p-6 mb-8 rounded-r-lg'>
								<h2 className='text-2xl font-bold text-primary mb-4'>
									The Real Cost Comparison
								</h2>
								<p className='text-lg leading-relaxed mb-4'>
									Let's look at the true cost of each option,
									including your time and the hidden costs of
									using the wrong tool.
								</p>
							</div>

							<div className='bg-white border border-gray-200 rounded-lg p-6 mb-8'>
								<div className='grid md:grid-cols-2 gap-8'>
									<div>
										<h3 className='text-xl font-bold mb-4 text-center'>
											Excel "Free" Option
										</h3>
										<div className='space-y-3'>
											<div className='flex justify-between'>
												<span>Excel License</span>
												<span>$150/year</span>
											</div>
											<div className='flex justify-between'>
												<span>
													Your Time (20 hrs/month)
												</span>
												<span>$1,000/month</span>
											</div>
											<div className='flex justify-between'>
												<span>Error Corrections</span>
												<span>$200/month</span>
											</div>
											<div className='flex justify-between'>
												<span>
													Higher Accounting Fees
												</span>
												<span>$100/month</span>
											</div>
											<div className='border-t pt-3 flex justify-between font-bold text-red-600'>
												<span>Total Annual Cost</span>
												<span>$15,750</span>
											</div>
										</div>
									</div>
									<div>
										<h3 className='text-xl font-bold mb-4 text-center'>
											QuickBooks Option
										</h3>
										<div className='space-y-3'>
											<div className='flex justify-between'>
												<span>
													QuickBooks Subscription
												</span>
												<span>$360/year</span>
											</div>
											<div className='flex justify-between'>
												<span>
													Your Time (5 hrs/month)
												</span>
												<span>$250/month</span>
											</div>
											<div className='flex justify-between'>
												<span>Setup & Training</span>
												<span>$500 (one-time)</span>
											</div>
											<div className='flex justify-between'>
												<span>
													Lower Accounting Fees
												</span>
												<span>-$50/month</span>
											</div>
											<div className='border-t pt-3 flex justify-between font-bold text-green-600'>
												<span>Total Annual Cost</span>
												<span>$3,260</span>
											</div>
										</div>
									</div>
								</div>
								<div className='mt-6 p-4 bg-green-50 rounded-lg text-center'>
									<p className='text-lg font-bold text-green-800'>
										Annual Savings with QuickBooks: $12,490
									</p>
									<p className='text-sm text-green-700 mt-1'>
										Plus improved accuracy, better insights,
										and reduced stress
									</p>
								</div>
							</div>

							{/* Making the Switch */}
							<div className='bg-primary/5 border border-primary/20 rounded-lg p-8 mb-12'>
								<h2 className='text-2xl font-bold text-primary mb-4'>
									Making the Switch: Your Step-by-Step Plan
								</h2>
								<p className='text-lg leading-relaxed mb-6'>
									Transitioning from Excel to QuickBooks
									doesn't have to be overwhelming. Here's
									exactly how to make the switch smoothly.
								</p>

								<div className='space-y-4'>
									<div className='flex items-start gap-3'>
										<div className='bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5'>
											1
										</div>
										<div>
											<h4 className='font-semibold mb-1'>
												Choose Your QuickBooks Plan
											</h4>
											<p className='text-sm text-muted-foreground'>
												Most service businesses do well
												with QuickBooks Simple Start
												($15/month) or Essentials
												($30/month).
											</p>
										</div>
									</div>
									<div className='flex items-start gap-3'>
										<div className='bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5'>
											2
										</div>
										<div>
											<h4 className='font-semibold mb-1'>
												Set Up Your Chart of Accounts
											</h4>
											<p className='text-sm text-muted-foreground'>
												Organize your income and expense
												categories to match your
												business needs.
											</p>
										</div>
									</div>
									<div className='flex items-start gap-3'>
										<div className='bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5'>
											3
										</div>
										<div>
											<h4 className='font-semibold mb-1'>
												Connect Your Bank Accounts
											</h4>
											<p className='text-sm text-muted-foreground'>
												Link your business checking,
												savings, and credit card
												accounts for automatic
												transaction downloads.
											</p>
										</div>
									</div>
									<div className='flex items-start gap-3'>
										<div className='bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5'>
											4
										</div>
										<div>
											<h4 className='font-semibold mb-1'>
												Import Your Historical Data
											</h4>
											<p className='text-sm text-muted-foreground'>
												Bring in your customer list,
												vendor information, and
												year-to-date transactions.
											</p>
										</div>
									</div>
									<div className='flex items-start gap-3'>
										<div className='bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5'>
											5
										</div>
										<div>
											<h4 className='font-semibold mb-1'>
												Train Your Team
											</h4>
											<p className='text-sm text-muted-foreground'>
												Get everyone comfortable with
												the new system through training
												and practice.
											</p>
										</div>
									</div>
								</div>

								<div className='text-center mt-6'>
									<CalendlyModal
										buttonText='Get Professional Setup Help'
										buttonSize='lg'
										buttonClassName='px-8 py-4'
									/>
								</div>
							</div>

							{/* Conclusion */}
							<div className='border-t pt-8'>
								<h2 className='text-2xl font-bold mb-4'>
									The Bottom Line: QuickBooks Pays for Itself
								</h2>
								<p className='text-lg leading-relaxed mb-6'>
									The question isn't whether you can afford
									QuickBooks—it's whether you can afford not
									to upgrade. The time savings, error
									reduction, and business insights you'll gain
									make QuickBooks one of the best investments
									you can make in your service business.
								</p>
								<p className='text-lg leading-relaxed mb-8'>
									Don't let outdated tools hold your business
									back. Make the switch to QuickBooks and
									start experiencing the benefits of modern
									accounting software designed specifically
									for businesses like yours.
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
											QuickBooks ProAdvisor • Software
											Implementation Specialist
										</p>
										<p className='text-muted-foreground mb-6 leading-relaxed'>
											Ray has helped over 200 service
											businesses transition from Excel to
											QuickBooks, saving them thousands of
											hours and dramatically improving
											their financial management. His
											systematic approach to software
											implementation ensures a smooth
											transition with minimal disruption
											to your business.
										</p>

										<div className='flex flex-wrap justify-center lg:justify-start gap-3 mb-6'>
											<div className='flex items-center gap-2 px-3 py-1 bg-qb-green-100 rounded-full'>
												<Award className='h-4 w-4 text-primary' />
												<span className='text-sm font-medium text-primary'>
													QuickBooks Expert
												</span>
											</div>
											<div className='flex items-center gap-2 px-3 py-1 bg-qb-green-100 rounded-full'>
												<Calculator className='h-4 w-4 text-primary' />
												<span className='text-sm font-medium text-primary'>
													Software Specialist
												</span>
											</div>
											<div className='flex items-center gap-2 px-3 py-1 bg-qb-green-100 rounded-full'>
												<Target className='h-4 w-4 text-primary' />
												<span className='text-sm font-medium text-primary'>
													Implementation Pro
												</span>
											</div>
										</div>

										<CalendlyModal
											buttonText='Schedule Your QuickBooks Consultation'
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
							More Small Business Software Tips
						</h2>

						<div className='grid md:grid-cols-3 gap-6'>
							{[
								{
									title: "Small Business Tax Deductions You're Probably Missing",
									excerpt:
										'Discover overlooked deductions that could save thousands annually.',
									slug: 'small-business-tax-deductions',
									category: 'Tax Planning',
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
							Ready to Upgrade from Excel to QuickBooks?
						</h2>
						<p className='text-xl text-muted-foreground mb-8'>
							Don't let outdated tools hold your business back.
							Get professional help setting up QuickBooks and
							start saving time and money immediately.
						</p>

						<div className='flex flex-col sm:flex-row gap-4 justify-center'>
							<CalendlyModal
								buttonText='Schedule QuickBooks Setup Session'
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
