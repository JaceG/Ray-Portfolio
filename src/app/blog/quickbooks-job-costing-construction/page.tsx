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
	Settings,
} from 'lucide-react';

export const metadata = {
	title: 'QuickBooks Job Costing for Construction: Complete Guide | Ray Galloway',
	description:
		'Master QuickBooks job costing to track project profitability, manage subcontractor payments, and make data-driven decisions for your Columbus construction business.',
	keywords:
		'QuickBooks job costing construction, construction project tracking, Columbus construction accounting, job profitability QuickBooks',
};

export default function QuickBooksJobCosting() {
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
							<span>QuickBooks Job Costing</span>
						</nav>

						{/* Article Meta */}
						<div className='flex flex-wrap items-center gap-4 mb-6'>
							<div className='flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full'>
								<Calculator className='h-4 w-4 text-primary' />
								<span className='text-sm font-medium text-primary'>
									QuickBooks
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
								<span>November 22, 2024</span>
							</div>
							<div className='flex items-center gap-2 text-sm text-muted-foreground'>
								<Clock className='h-4 w-4' />
								<span>12 min read</span>
							</div>
						</div>

						{/* Title */}
						<h1 className='text-4xl sm:text-5xl font-bold mb-6 leading-tight'>
							QuickBooks Job Costing for Construction: A Complete Guide
						</h1>

						<p className='text-xl text-muted-foreground mb-8'>
							Master QuickBooks job costing to track project profitability, 
							manage subcontractor payments, and make data-driven decisions 
							that can improve your profit margins by 15-25%.
						</p>

						{/* Featured Image */}
						<div className='relative h-64 sm:h-80 lg:h-96 rounded-xl overflow-hidden shadow-xl mb-8'>
							{/* TODO: Add actual QuickBooks dashboard screenshot */}
							<div className='absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center'>
								<div className='text-center text-white'>
									<BarChart3 className='h-20 w-20 mx-auto mb-4' />
									<p className='text-lg font-semibold'>
										QuickBooks Construction Dashboard
									</p>
									<p className='text-sm opacity-75'>
										Add photo: /images/blog/quickbooks-construction-dashboard.jpg
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
								Job costing is the difference between profitable construction 
								companies and those that struggle to stay afloat. Yet 70% of 
								the Columbus area contractors I work with aren't using QuickBooks 
								job costing effectively—or at all.
							</p>

							<p className='text-lg leading-relaxed mb-8'>
								This comprehensive guide will show you exactly how to set up 
								and use QuickBooks job costing to track every dollar on your 
								construction projects, identify profitable work, and make 
								data-driven decisions that boost your bottom line.
							</p>

							{/* What is Job Costing */}
							<div className='bg-qb-green-50 border-l-4 border-primary p-6 mb-8 rounded-r-lg'>
								<h2 className='text-2xl font-bold text-primary mb-4'>
									What is Job Costing in Construction?
								</h2>
								<p className='text-lg leading-relaxed mb-4'>
									Job costing tracks all expenses and revenues for each 
									specific construction project. Instead of lumping all 
									costs together, you can see exactly how much each job 
									costs and how much profit it generates.
								</p>
							</div>

							<div className='bg-white border border-gray-200 rounded-lg p-6 mb-8'>
								<h3 className='text-xl font-bold mb-4'>
									Why Columbus Contractors Need Job Costing
								</h3>
								<div className='grid md:grid-cols-2 gap-6'>
									<div>
										<h4 className='font-semibold mb-2 flex items-center gap-2'>
											<Target className='h-5 w-5 text-primary' />
											Identify Profitable Projects
										</h4>
										<p className='text-sm text-muted-foreground mb-4'>
											Know which types of jobs make money and which ones don't.
										</p>
									</div>
									<div>
										<h4 className='font-semibold mb-2 flex items-center gap-2'>
											<DollarSign className='h-5 w-5 text-primary' />
											Accurate Bidding
										</h4>
										<p className='text-sm text-muted-foreground mb-4'>
											Use real cost data to bid future projects more accurately.
										</p>
									</div>
									<div>
										<h4 className='font-semibold mb-2 flex items-center gap-2'>
											<BarChart3 className='h-5 w-5 text-primary' />
											Cash Flow Management
										</h4>
										<p className='text-sm text-muted-foreground mb-4'>
											Track project progress and predict cash flow needs.
										</p>
									</div>
									<div>
										<h4 className='font-semibold mb-2 flex items-center gap-2'>
											<Settings className='h-5 w-5 text-primary' />
											Better Decision Making
										</h4>
										<p className='text-sm text-muted-foreground mb-4'>
											Make informed decisions about subcontractors, materials, and methods.
										</p>
									</div>
								</div>
							</div>

							{/* Step 1: Setup */}
							<div className='bg-qb-green-50 border-l-4 border-primary p-6 mb-8 rounded-r-lg'>
								<h2 className='text-2xl font-bold text-primary mb-4'>
									Step 1: Set Up QuickBooks for Construction Job Costing
								</h2>
								<p className='text-lg leading-relaxed mb-4'>
									Before you can track job costs, you need to configure 
									QuickBooks properly. Here's the exact setup I use for 
									Columbus construction companies.
								</p>
							</div>

							<div className='bg-white border border-gray-200 rounded-lg p-6 mb-8'>
								<h3 className='text-xl font-bold mb-4'>
									Essential QuickBooks Settings
								</h3>
								<ul className='space-y-3'>
									<li className='flex items-start gap-3'>
										<CheckCircle className='h-5 w-5 text-primary mt-0.5 flex-shrink-0' />
										<span>
											<strong>Enable Class Tracking:</strong> Go to Edit &gt; Preferences &gt; Accounting &gt; Company Preferences and check "Use class tracking"
										</span>
									</li>
									<li className='flex items-start gap-3'>
										<CheckCircle className='h-5 w-5 text-primary mt-0.5 flex-shrink-0' />
										<span>
											<strong>Set Up Customer Jobs:</strong> Create a customer for each client, then add jobs under each customer
										</span>
									</li>
									<li className='flex items-start gap-3'>
										<CheckCircle className='h-5 w-5 text-primary mt-0.5 flex-shrink-0' />
										<span>
											<strong>Create Cost Categories:</strong> Set up items for Labor, Materials, Subcontractors, and Equipment
										</span>
									</li>
									<li className='flex items-start gap-3'>
										<CheckCircle className='h-5 w-5 text-primary mt-0.5 flex-shrink-0' />
										<span>
											<strong>Configure Payroll Items:</strong> Link payroll to specific jobs and cost categories
										</span>
									</li>
								</ul>
							</div>

							{/* Mid-Article CTA */}
							<Card className='bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20 my-12'>
								<CardContent className='pt-6'>
									<div className='text-center'>
										<h3 className='text-xl font-bold mb-3'>
											Need Help Setting Up QuickBooks Job Costing?
										</h3>
										<p className='text-muted-foreground mb-4'>
											I'll set up your QuickBooks system properly and train 
											your team to use job costing effectively.
										</p>
										<CalendlyModal
											buttonText='Get QuickBooks Setup Help'
											buttonSize='lg'
											buttonClassName='px-8 py-4'
										/>
									</div>
								</CardContent>
							</Card>

							{/* Step 2: Creating Jobs */}
							<div className='bg-qb-green-50 border-l-4 border-primary p-6 mb-8 rounded-r-lg'>
								<h2 className='text-2xl font-bold text-primary mb-4'>
									Step 2: Create and Organize Construction Jobs
								</h2>
								<p className='text-lg leading-relaxed mb-4'>
									Proper job setup is crucial for accurate tracking. Here's 
									my proven system for organizing construction projects in QuickBooks.
								</p>
							</div>

							<div className='bg-white border border-gray-200 rounded-lg p-6 mb-8'>
								<h3 className='text-xl font-bold mb-4'>
									Job Naming Convention
								</h3>
								<p className='text-muted-foreground mb-4'>
									Use a consistent naming system that includes key project information:
								</p>
								<div className='bg-gray-50 p-4 rounded-lg mb-4 font-mono text-sm'>
									[Year]-[Client Last Name]-[Project Type]-[Address]
									<br />
									Example: 2024-Smith-Kitchen-1234MainSt
								</div>
								<ul className='space-y-2 text-sm'>
									<li>• <strong>Year:</strong> Helps with reporting and organization</li>
									<li>• <strong>Client Name:</strong> Easy identification</li>
									<li>• <strong>Project Type:</strong> Kitchen, Bathroom, Addition, etc.</li>
									<li>• <strong>Address:</strong> Distinguishes multiple projects for same client</li>
								</ul>
							</div>

							{/* Step 3: Tracking Costs */}
							<h2 className='text-2xl font-bold mb-4 text-primary'>
								Step 3: Track All Project Costs
							</h2>
							<p className='text-lg leading-relaxed mb-6'>
								This is where the magic happens. Every expense must be assigned 
								to the correct job and cost category. Here's how to track each 
								type of construction cost in QuickBooks.
							</p>

							<div className='grid md:grid-cols-2 gap-6 mb-8'>
								<Card>
									<CardContent className='pt-6'>
										<h4 className='font-semibold mb-3 flex items-center gap-2'>
											<Hammer className='h-5 w-5 text-primary' />
											Labor Costs
										</h4>
										<ul className='space-y-2 text-sm text-muted-foreground'>
											<li>• Direct employee wages</li>
											<li>• Payroll taxes and benefits</li>
											<li>• Overtime premiums</li>
											<li>• Job-specific training time</li>
										</ul>
									</CardContent>
								</Card>

								<Card>
									<CardContent className='pt-6'>
										<h4 className='font-semibold mb-3 flex items-center gap-2'>
											<Building className='h-5 w-5 text-primary' />
											Material Costs
										</h4>
										<ul className='space-y-2 text-sm text-muted-foreground'>
											<li>• Lumber, concrete, fixtures</li>
											<li>• Delivery charges</li>
											<li>• Material waste allowance</li>
											<li>• Special order items</li>
										</ul>
									</CardContent>
								</Card>

								<Card>
									<CardContent className='pt-6'>
										<h4 className='font-semibold mb-3 flex items-center gap-2'>
											<Users className='h-5 w-5 text-primary' />
											Subcontractor Costs
										</h4>
										<ul className='space-y-2 text-sm text-muted-foreground'>
											<li>• Electrical, plumbing, HVAC</li>
											<li>• Specialty trades</li>
											<li>• Equipment rental</li>
											<li>• Permit and inspection fees</li>
										</ul>
									</CardContent>
								</Card>

								<Card>
									<CardContent className='pt-6'>
										<h4 className='font-semibold mb-3 flex items-center gap-2'>
											<Calculator className='h-5 w-5 text-primary' />
											Equipment & Other
										</h4>
										<ul className='space-y-2 text-sm text-muted-foreground'>
											<li>• Equipment depreciation</li>
											<li>• Fuel and maintenance</li>
											<li>• Insurance allocations</li>
											<li>• Job-specific overhead</li>
										</ul>
									</CardContent>
								</Card>
							</div>

							{/* Reporting Section */}
							<div className='bg-qb-green-50 border-l-4 border-primary p-6 mb-8 rounded-r-lg'>
								<h2 className='text-2xl font-bold text-primary mb-4'>
									Step 4: Generate Powerful Job Costing Reports
								</h2>
								<p className='text-lg leading-relaxed mb-4'>
									The real value of job costing comes from the reports. These 
									QuickBooks reports will transform how you manage your 
									construction business.
								</p>
							</div>

							<div className='bg-white border border-gray-200 rounded-lg p-6 mb-8'>
								<h3 className='text-xl font-bold mb-4'>
									Essential Job Costing Reports
								</h3>
								<div className='space-y-4'>
									<div className='border-l-4 border-primary pl-4'>
										<h4 className='font-semibold mb-2'>Job Profitability Summary</h4>
										<p className='text-sm text-muted-foreground'>
											Shows profit/loss for each job. Run this weekly to identify problems early.
										</p>
									</div>
									<div className='border-l-4 border-primary pl-4'>
										<h4 className='font-semibold mb-2'>Job Profitability Detail</h4>
										<p className='text-sm text-muted-foreground'>
											Breaks down costs by category for each job. Perfect for analyzing cost overruns.
										</p>
									</div>
									<div className='border-l-4 border-primary pl-4'>
										<h4 className='font-semibold mb-2'>Job Estimates vs. Actuals</h4>
										<p className='text-sm text-muted-foreground'>
											Compares your estimates to actual costs. Helps improve future bidding accuracy.
										</p>
									</div>
									<div className='border-l-4 border-primary pl-4'>
										<h4 className='font-semibold mb-2'>Time by Job Summary</h4>
										<p className='text-sm text-muted-foreground'>
											Tracks labor hours by project. Essential for labor-intensive construction work.
										</p>
									</div>
								</div>
							</div>

							{/* Best Practices */}
							<h2 className='text-2xl font-bold mb-4 text-primary'>
								Best Practices for Construction Job Costing
							</h2>

							<div className='grid md:grid-cols-1 gap-6 mb-8'>
								<div className='bg-gray-50 p-6 rounded-lg'>
									<h4 className='font-semibold mb-3'>Weekly Review Process</h4>
									<p className='text-sm text-muted-foreground mb-3'>
										Set aside time every Friday to review job costs and profitability. 
										This weekly discipline prevents small problems from becoming big losses.
									</p>
									<ul className='space-y-2 text-sm'>
										<li>• Review job profitability reports</li>
										<li>• Check for unassigned expenses</li>
										<li>• Update job completion percentages</li>
										<li>• Identify cost overruns early</li>
									</ul>
								</div>
							</div>

							{/* Common Mistakes */}
							<div className='bg-red-50 border-l-4 border-red-500 p-6 mb-8 rounded-r-lg'>
								<h2 className='text-2xl font-bold text-red-900 mb-4'>
									Common Job Costing Mistakes to Avoid
								</h2>
								<ul className='space-y-3'>
									<li className='flex items-start gap-3'>
										<span className='text-red-500 font-bold'>×</span>
										<span>Not assigning ALL expenses to jobs (including overhead)</span>
									</li>
									<li className='flex items-start gap-3'>
										<span className='text-red-500 font-bold'>×</span>
										<span>Waiting until month-end to enter job costs</span>
									</li>
									<li className='flex items-start gap-3'>
										<span className='text-red-500 font-bold'>×</span>
										<span>Using generic job names that don't identify projects clearly</span>
									</li>
									<li className='flex items-start gap-3'>
										<span className='text-red-500 font-bold'>×</span>
										<span>Not tracking change orders separately</span>
									</li>
									<li className='flex items-start gap-3'>
										<span className='text-red-500 font-bold'>×</span>
										<span>Forgetting to include equipment depreciation and overhead</span>
									</li>
								</ul>
							</div>

							{/* Results Section */}
							<div className='bg-primary/5 border border-primary/20 rounded-lg p-8 mb-12'>
								<h2 className='text-2xl font-bold text-primary mb-4'>
									Results You Can Expect
								</h2>
								<p className='text-lg leading-relaxed mb-6'>
									Columbus construction companies that implement proper job 
									costing typically see dramatic improvements in their business 
									performance within 90 days.
								</p>

								<div className='grid md:grid-cols-2 gap-6 mb-6'>
									<div className='bg-white rounded-lg p-4'>
										<h4 className='font-semibold mb-2 text-primary'>
											Profit Margin Improvement
										</h4>
										<p className='text-2xl font-bold text-primary mb-1'>
											15-25%
										</p>
										<p className='text-sm text-muted-foreground'>
											Average increase in net profit margins
										</p>
									</div>
									<div className='bg-white rounded-lg p-4'>
										<h4 className='font-semibold mb-2 text-primary'>
											Bidding Accuracy
										</h4>
										<p className='text-2xl font-bold text-primary mb-1'>
											90%+
										</p>
										<p className='text-sm text-muted-foreground'>
											Improvement in estimate accuracy
										</p>
									</div>
									<div className='bg-white rounded-lg p-4'>
										<h4 className='font-semibold mb-2 text-primary'>
											Time Savings
										</h4>
										<p className='text-2xl font-bold text-primary mb-1'>
											10+ Hours
										</p>
										<p className='text-sm text-muted-foreground'>
											Per month saved on financial management
										</p>
									</div>
									<div className='bg-white rounded-lg p-4'>
										<h4 className='font-semibold mb-2 text-primary'>
											Cash Flow Predictability
										</h4>
										<p className='text-2xl font-bold text-primary mb-1'>
											95%
										</p>
										<p className='text-sm text-muted-foreground'>
											Accuracy in cash flow projections
										</p>
									</div>
								</div>

								<div className='text-center'>
									<CalendlyModal
										buttonText='Get Job Costing Implementation Help'
										buttonSize='lg'
										buttonClassName='px-8 py-4'
									/>
								</div>
							</div>

							{/* Conclusion */}
							<div className='border-t pt-8'>
								<h2 className='text-2xl font-bold mb-4'>
									Take Control of Your Construction Profitability
								</h2>
								<p className='text-lg leading-relaxed mb-6'>
									Job costing isn't just about tracking expenses—it's about 
									transforming your construction business into a data-driven, 
									profitable operation. The Columbus contractors who implement 
									these systems consistently outperform their competitors.
								</p>
								<p className='text-lg leading-relaxed mb-8'>
									Don't let another project slip by without knowing its true 
									profitability. Start implementing QuickBooks job costing 
									today and take control of your construction business's 
									financial future.
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
											QuickBooks ProAdvisor • Construction Specialist
										</p>
										<p className='text-muted-foreground mb-6 leading-relaxed'>
											Ray has helped over 75 Columbus area construction 
											companies implement effective job costing systems. 
											His expertise in QuickBooks and construction 
											accounting has helped clients improve their profit 
											margins by an average of 22% and save over 10 hours 
											per month on financial management.
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
													Job Costing Specialist
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
							More Construction Financial Tips
						</h2>

						<div className='grid md:grid-cols-3 gap-6'>
							{[
								{
									title: 'Columbus Construction Tax Strategies That Save Thousands',
									excerpt:
										'Specific tax deductions for Columbus area construction businesses.',
									slug: 'columbus-construction-tax-strategies',
									location: 'Columbus, OH',
									category: 'Financial Planning',
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
							Ready to Master QuickBooks Job Costing?
						</h2>
						<p className='text-xl text-muted-foreground mb-8'>
							Don't struggle with job costing setup alone. I'll configure 
							your QuickBooks system, train your team, and help you start 
							tracking profitability immediately.
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
