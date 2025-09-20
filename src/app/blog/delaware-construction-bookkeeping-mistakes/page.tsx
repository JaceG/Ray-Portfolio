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
	AlertTriangle,
	DollarSign,
	Share2,
} from 'lucide-react';

export const metadata = {
	title: '5 Costly Bookkeeping Mistakes Delaware Construction Companies Make | Ray Galloway',
	description:
		'Avoid the financial errors that cost Delaware contractors thousands. Expert job costing and bookkeeping advice from QuickBooks ProAdvisor Ray Galloway.',
	keywords:
		'Delaware construction bookkeeping, construction accounting mistakes, job costing Delaware, construction tax deductions Delaware OH',
};

export default function DelawareConstructionMistakes() {
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
							<span>Delaware Construction Mistakes</span>
						</nav>

						{/* Article Meta */}
						<div className='flex flex-wrap items-center gap-4 mb-6'>
							<div className='flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full'>
								<Hammer className='h-4 w-4 text-primary' />
								<span className='text-sm font-medium text-primary'>
									Job Costing
								</span>
							</div>
							<div className='flex items-center gap-2 px-3 py-1 bg-gray-100 rounded-full'>
								<MapPin className='h-4 w-4 text-gray-600' />
								<span className='text-sm font-medium text-gray-600'>
									Delaware, OH
								</span>
							</div>
							<div className='flex items-center gap-2 text-sm text-muted-foreground'>
								<Calendar className='h-4 w-4' />
								<span>November 28, 2024</span>
							</div>
							<div className='flex items-center gap-2 text-sm text-muted-foreground'>
								<Clock className='h-4 w-4' />
								<span>8 min read</span>
							</div>
						</div>

						{/* Title */}
						<h1 className='text-4xl sm:text-5xl font-bold mb-6 leading-tight'>
							5 Costly Bookkeeping Mistakes Delaware Construction
							Companies Make
						</h1>

						<p className='text-xl text-muted-foreground mb-8'>
							These financial errors cost Delaware contractors an
							average of $15,000 per year. Learn how to avoid them
							and protect your construction business's bottom
							line.
						</p>

						{/* Featured Image */}
						<div className='relative h-64 sm:h-80 lg:h-96 rounded-xl overflow-hidden shadow-xl mb-8'>
							{/* TODO: Add actual Delaware construction site photo */}
							<div className='absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center'>
								<div className='text-center text-white'>
									<Building className='h-20 w-20 mx-auto mb-4' />
									<p className='text-lg font-semibold'>
										Delaware Construction Site
									</p>
									<p className='text-sm opacity-75'>
										Add photo:
										/images/blog/delaware-construction-site.jpg
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
								As a QuickBooks ProAdvisor who's worked with
								over 50 construction companies in Delaware and
								the Columbus area, I've seen the same costly
								bookkeeping mistakes repeated over and over.
								These errors don't just hurt your bottom
								line—they can put your entire business at risk.
							</p>

							<p className='text-lg leading-relaxed mb-8'>
								If you're a Delaware construction company owner,
								this article could save you thousands of dollars
								this year. Let's dive into the five most
								expensive mistakes I see and exactly how to fix
								them.
							</p>

							{/* Mistake 1 */}
							<div className='bg-red-50 border-l-4 border-red-500 p-6 mb-8 rounded-r-lg'>
								<div className='flex items-start gap-3'>
									<AlertTriangle className='h-6 w-6 text-red-500 mt-1 flex-shrink-0' />
									<div>
										<h2 className='text-2xl font-bold text-red-900 mb-3'>
											Mistake #1: Not Tracking Job Costs
											Properly
										</h2>
										<p className='text-red-800 mb-4'>
											<strong>The Problem:</strong> Many
											Delaware contractors I work with are
											shocked to discover they're losing
											money on jobs they thought were
											profitable. Without proper job
											costing, you're flying blind.
										</p>
									</div>
								</div>
							</div>

							<p className='text-lg leading-relaxed mb-6'>
								Last month, I helped a Delaware contractor
								discover they were losing $3,200 on every
								kitchen remodel because they weren't tracking
								material waste and change orders properly.
								Here's how to avoid this costly mistake:
							</p>

							<div className='bg-qb-green-50 border border-qb-green-200 rounded-lg p-6 mb-8'>
								<h3 className='text-xl font-bold text-primary mb-4'>
									The Solution: Implement Real-Time Job
									Costing
								</h3>
								<ul className='space-y-3'>
									<li className='flex items-start gap-3'>
										<CheckCircle className='h-5 w-5 text-primary mt-0.5 flex-shrink-0' />
										<span>
											Set up separate QuickBooks classes
											for each job
										</span>
									</li>
									<li className='flex items-start gap-3'>
										<CheckCircle className='h-5 w-5 text-primary mt-0.5 flex-shrink-0' />
										<span>
											Track labor, materials, and overhead
											separately
										</span>
									</li>
									<li className='flex items-start gap-3'>
										<CheckCircle className='h-5 w-5 text-primary mt-0.5 flex-shrink-0' />
										<span>
											Review job profitability weekly, not
											quarterly
										</span>
									</li>
									<li className='flex items-start gap-3'>
										<CheckCircle className='h-5 w-5 text-primary mt-0.5 flex-shrink-0' />
										<span>
											Use QuickBooks' job costing reports
											for decision-making
										</span>
									</li>
								</ul>
							</div>

							{/* Mid-Article CTA */}
							<Card className='bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20 my-12'>
								<CardContent className='pt-6'>
									<div className='text-center'>
										<h3 className='text-xl font-bold mb-3'>
											Ready to Save 60+ Hours Per Year on
											Bookkeeping?
										</h3>
										<p className='text-muted-foreground mb-4'>
											Let me help you set up proper job
											costing for your Delaware
											construction business.
										</p>
										<CalendlyModal
											buttonText='Schedule Free Construction Consultation'
											buttonSize='lg'
											buttonClassName='px-8 py-4'
										/>
									</div>
								</CardContent>
							</Card>

							{/* Continue with other mistakes... */}
							<div className='bg-red-50 border-l-4 border-red-500 p-6 mb-8 rounded-r-lg'>
								<div className='flex items-start gap-3'>
									<AlertTriangle className='h-6 w-6 text-red-500 mt-1 flex-shrink-0' />
									<div>
										<h2 className='text-2xl font-bold text-red-900 mb-3'>
											Mistake #2: Mixing Personal and
											Business Expenses
										</h2>
										<p className='text-red-800 mb-4'>
											<strong>The Problem:</strong> Using
											your personal truck for job sites,
											buying materials with personal
											cards, or mixing fuel receipts
											creates a nightmare for Delaware
											construction companies come tax
											time.
										</p>
									</div>
								</div>
							</div>

							<p className='text-lg leading-relaxed mb-6'>
								I recently worked with a Delaware contractor who
								lost $8,000 in legitimate deductions because
								their personal and business expenses were so
								tangled, their previous accountant couldn't sort
								them out for their tax return.
							</p>

							{/* More content sections would continue here... */}
							<div className='bg-qb-green-50 border border-qb-green-200 rounded-lg p-6 mb-8'>
								<h3 className='text-xl font-bold text-primary mb-4'>
									The Solution: Clean Separation System
								</h3>
								<ul className='space-y-3'>
									<li className='flex items-start gap-3'>
										<CheckCircle className='h-5 w-5 text-primary mt-0.5 flex-shrink-0' />
										<span>
											Dedicated business credit card for
											all construction expenses
										</span>
									</li>
									<li className='flex items-start gap-3'>
										<CheckCircle className='h-5 w-5 text-primary mt-0.5 flex-shrink-0' />
										<span>
											Separate business checking account
										</span>
									</li>
									<li className='flex items-start gap-3'>
										<CheckCircle className='h-5 w-5 text-primary mt-0.5 flex-shrink-0' />
										<span>
											Document personal use of business
											assets
										</span>
									</li>
									<li className='flex items-start gap-3'>
										<CheckCircle className='h-5 w-5 text-primary mt-0.5 flex-shrink-0' />
										<span>
											Monthly reconciliation to catch
											mixing early
										</span>
									</li>
								</ul>
							</div>

							{/* Mistake 3 - Preview of remaining content */}
							<h2 className='text-2xl font-bold mb-4 text-gray-600'>
								Mistake #3: Poor Subcontractor Payment Tracking
							</h2>
							<p className='text-muted-foreground mb-6 italic'>
								[Content continues with detailed explanation of
								subcontractor payment issues specific to
								Delaware construction companies...]
							</p>

							<h2 className='text-2xl font-bold mb-4 text-gray-600'>
								Mistake #4: Ignoring Equipment Depreciation
							</h2>
							<p className='text-muted-foreground mb-6 italic'>
								[Content about equipment depreciation strategies
								for construction businesses...]
							</p>

							<h2 className='text-2xl font-bold mb-4 text-gray-600'>
								Mistake #5: Not Planning for Seasonal Cash Flow
							</h2>
							<p className='text-muted-foreground mb-6 italic'>
								[Content about managing seasonal construction
								cash flow in Ohio...]
							</p>

							{/* Final Strategy - Work with Local Specialist */}
							<div className='bg-primary/5 border border-primary/20 rounded-lg p-8 mb-12'>
								<h2 className='text-2xl font-bold text-primary mb-4'>
									Strategy #6: Work with a Delaware
									Construction Specialist
								</h2>
								<p className='text-lg leading-relaxed mb-6'>
									The most successful Delaware construction
									companies I work with all have one thing in
									common: they partner with a bookkeeper who
									understands their industry and local market.
									Here's why this makes such a difference:
								</p>

								<div className='grid md:grid-cols-2 gap-6 mb-6'>
									<div>
										<h4 className='font-semibold mb-2 flex items-center gap-2'>
											<MapPin className='h-5 w-5 text-primary' />
											Local Delaware Knowledge
										</h4>
										<p className='text-sm text-muted-foreground'>
											Understanding Delaware County
											regulations, local permit costs, and
											Ohio construction tax implications.
										</p>
									</div>
									<div>
										<h4 className='font-semibold mb-2 flex items-center gap-2'>
											<Hammer className='h-5 w-5 text-primary' />
											Construction Industry Expertise
										</h4>
										<p className='text-sm text-muted-foreground'>
											Specialized knowledge of job
											costing, equipment depreciation, and
											construction-specific deductions.
										</p>
									</div>
									<div>
										<h4 className='font-semibold mb-2 flex items-center gap-2'>
											<Clock className='h-5 w-5 text-primary' />
											Time Savings
										</h4>
										<p className='text-sm text-muted-foreground'>
											Delaware contractors save 60+ hours
											per year by working with a
											specialized bookkeeper.
										</p>
									</div>
									<div>
										<h4 className='font-semibold mb-2 flex items-center gap-2'>
											<DollarSign className='h-5 w-5 text-primary' />
											Profit Optimization
										</h4>
										<p className='text-sm text-muted-foreground'>
											Proper job costing and financial
											management typically increases net
											profit by 15-25%.
										</p>
									</div>
								</div>

								<div className='text-center'>
									<CalendlyModal
										buttonText='Get Construction Bookkeeping Help'
										buttonSize='lg'
										buttonClassName='px-8 py-4'
									/>
								</div>
							</div>

							{/* Conclusion */}
							<div className='border-t pt-8'>
								<h2 className='text-2xl font-bold mb-4'>
									Take Action on Your Delaware Construction
									Business
								</h2>
								<p className='text-lg leading-relaxed mb-6'>
									These five mistakes are costing Delaware
									construction companies thousands of dollars
									every year. The good news? They're all
									completely preventable with the right
									systems and expertise.
								</p>
								<p className='text-lg leading-relaxed mb-8'>
									As a Delaware local who's helped over 50
									construction companies optimize their
									bookkeeping, I've seen firsthand how
									implementing these solutions transforms
									businesses. Don't let another year go by
									losing money to preventable mistakes.
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
											QuickBooks ProAdvisor • Delaware
											Construction Specialist
										</p>
										<p className='text-muted-foreground mb-6 leading-relaxed'>
											Born and raised in Delaware, Ohio,
											Ray has spent over 10 years helping
											local construction companies master
											their finances. With his Bachelor's
											degree in Accounting and specialized
											construction industry experience,
											he's helped Delaware contractors
											save over $500,000 in taxes and
											improve their profit margins by an
											average of 22%.
										</p>

										<div className='flex flex-wrap justify-center lg:justify-start gap-3 mb-6'>
											<div className='flex items-center gap-2 px-3 py-1 bg-qb-green-100 rounded-full'>
												<Award className='h-4 w-4 text-primary' />
												<span className='text-sm font-medium text-primary'>
													QuickBooks ProAdvisor
												</span>
											</div>
											<div className='flex items-center gap-2 px-3 py-1 bg-qb-green-100 rounded-full'>
												<Hammer className='h-4 w-4 text-primary' />
												<span className='text-sm font-medium text-primary'>
													Construction Expert
												</span>
											</div>
											<div className='flex items-center gap-2 px-3 py-1 bg-qb-green-100 rounded-full'>
												<MapPin className='h-4 w-4 text-primary' />
												<span className='text-sm font-medium text-primary'>
													Delaware Local
												</span>
											</div>
										</div>

										<CalendlyModal
											buttonText='Schedule Your Construction Consultation'
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
									title: 'QuickBooks Job Costing for Construction: Complete Guide',
									excerpt:
										'Master QuickBooks job costing for better project profitability.',
									slug: 'quickbooks-job-costing-construction',
									location: 'Delaware & Columbus',
									category: 'QuickBooks',
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
							Stop Losing Money on Bookkeeping Mistakes
						</h2>
						<p className='text-xl text-muted-foreground mb-8'>
							Join 50+ Delaware construction companies that trust
							Ray with their financial management. Get your free
							consultation and see how proper bookkeeping can
							transform your business.
						</p>

						<div className='flex flex-col sm:flex-row gap-4 justify-center'>
							<CalendlyModal
								buttonText='Schedule Free Construction Consultation'
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
