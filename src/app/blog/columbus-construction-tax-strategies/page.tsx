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
	PiggyBank,
	Receipt,
	Truck,
} from 'lucide-react';

export const metadata = {
	title: 'Columbus Construction Tax Strategies That Save Thousands | Ray Galloway',
	description:
		'Discover tax deductions and strategies specifically for Columbus construction companies. Expert advice from QuickBooks ProAdvisor Ray Galloway.',
	keywords:
		'Columbus construction tax deductions, construction tax strategies Ohio, Columbus contractor taxes, construction business deductions',
};

export default function ColumbusConstructionTax() {
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
							<span>Columbus Tax Strategies</span>
						</nav>

						{/* Article Meta */}
						<div className='flex flex-wrap items-center gap-4 mb-6'>
							<div className='flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full'>
								<PiggyBank className='h-4 w-4 text-primary' />
								<span className='text-sm font-medium text-primary'>
									Tax Planning
								</span>
							</div>
							<div className='flex items-center gap-2 px-3 py-1 bg-gray-100 rounded-full'>
								<MapPin className='h-4 w-4 text-gray-600' />
								<span className='text-sm font-medium text-gray-600'>
									Columbus, OH
								</span>
							</div>
							<div className='flex items-center gap-2 text-sm text-muted-foreground'>
								<Calendar className='h-4 w-4' />
								<span>November 25, 2024</span>
							</div>
							<div className='flex items-center gap-2 text-sm text-muted-foreground'>
								<Clock className='h-4 w-4' />
								<span>10 min read</span>
							</div>
						</div>

						{/* Title */}
						<h1 className='text-4xl sm:text-5xl font-bold mb-6 leading-tight'>
							Columbus Construction Tax Strategies That Save
							Thousands
						</h1>

						<p className='text-xl text-muted-foreground mb-8'>
							Columbus area construction companies are missing out
							on $8,000+ in annual tax savings. Here are the
							specific deductions and strategies that smart
							contractors use to minimize their tax burden.
						</p>

						{/* Featured Image */}
						<div className='relative h-64 sm:h-80 lg:h-96 rounded-xl overflow-hidden shadow-xl mb-8'>
							{/* TODO: Add actual Columbus construction/downtown photo */}
							<div className='absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center'>
								<div className='text-center text-white'>
									<Building className='h-20 w-20 mx-auto mb-4' />
									<p className='text-lg font-semibold'>
										Columbus Downtown Construction
									</p>
									<p className='text-sm opacity-75'>
										Add photo:
										/images/blog/columbus-downtown-construction.jpg
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
								Last week, I helped a Columbus construction
								company discover $12,000 in overlooked tax
								deductions. They'd been in business for eight
								years and had never claimed these completely
								legal write-offs. Don't let this be your story.
							</p>

							<p className='text-lg leading-relaxed mb-8'>
								Columbus construction companies face unique tax
								challenges and opportunities. From downtown
								high-rise projects to suburban developments in
								Dublin and Hilliard, the tax implications vary
								significantly. Here are the strategies that
								consistently save my Columbus construction
								clients thousands each year.
							</p>

							{/* Strategy 1 */}
							<div className='bg-qb-green-50 border-l-4 border-primary p-6 mb-8 rounded-r-lg'>
								<h2 className='text-2xl font-bold text-primary mb-4'>
									Strategy #1: Maximize Equipment Depreciation
								</h2>
								<p className='text-lg leading-relaxed mb-4'>
									<strong>The Opportunity:</strong> Columbus
									construction companies can deduct up to
									$1.16 million in equipment purchases in the
									first year using Section 179 and bonus
									depreciation.
								</p>
							</div>

							<p className='text-lg leading-relaxed mb-6'>
								Most Columbus contractors I meet are only
								depreciating equipment over 5-7 years, missing
								massive first-year deductions. Here's what you
								need to know:
							</p>

							<div className='bg-white border border-gray-200 rounded-lg p-6 mb-8'>
								<h3 className='text-xl font-bold mb-4'>
									Equipment Deduction Maximization
								</h3>
								<ul className='space-y-3'>
									<li className='flex items-start gap-3'>
										<CheckCircle className='h-5 w-5 text-primary mt-0.5 flex-shrink-0' />
										<span>
											<strong>Section 179:</strong> Deduct
											up to $1.16M in qualifying equipment
											purchases
										</span>
									</li>
									<li className='flex items-start gap-3'>
										<CheckCircle className='h-5 w-5 text-primary mt-0.5 flex-shrink-0' />
										<span>
											<strong>Bonus Depreciation:</strong>{' '}
											80% first-year deduction on
											remaining equipment
										</span>
									</li>
									<li className='flex items-start gap-3'>
										<CheckCircle className='h-5 w-5 text-primary mt-0.5 flex-shrink-0' />
										<span>
											<strong>Timing Strategy:</strong>{' '}
											Purchase equipment before December
											31st for full-year deduction
										</span>
									</li>
								</ul>
							</div>

							{/* Strategy 2 */}
							<div className='bg-qb-green-50 border-l-4 border-primary p-6 mb-8 rounded-r-lg'>
								<h2 className='text-2xl font-bold text-primary mb-4'>
									Strategy #2: Vehicle Deduction Optimization
								</h2>
								<p className='text-lg leading-relaxed mb-4'>
									<strong>The Opportunity:</strong> Most
									Columbus contractors are leaving thousands
									on the table with improper vehicle
									deductions. The right strategy can save
									$3,000-$8,000 annually per vehicle.
								</p>
							</div>

							<p className='text-lg leading-relaxed mb-6'>
								Whether you're driving from downtown Columbus to
								job sites in Powell or hauling equipment to
								Dublin developments, your vehicles are major
								business assets that deserve maximum deductions:
							</p>

							<div className='bg-white border border-gray-200 rounded-lg p-6 mb-8'>
								<h3 className='text-xl font-bold mb-4'>
									Vehicle Deduction Strategies
								</h3>
								<div className='grid md:grid-cols-2 gap-6'>
									<div>
										<h4 className='font-semibold mb-2 flex items-center gap-2'>
											<Truck className='h-5 w-5 text-primary' />
											Heavy Vehicles (Over 6,000 lbs)
										</h4>
										<ul className='space-y-2 text-sm'>
											<li>
												• 100% first-year deduction
												possible
											</li>
											<li>
												• Includes pickup trucks, work
												vans
											</li>
											<li>• No luxury vehicle limits</li>
										</ul>
									</div>
									<div>
										<h4 className='font-semibold mb-2 flex items-center gap-2'>
											<Calculator className='h-5 w-5 text-primary' />
											Standard vs. Actual Expense
										</h4>
										<ul className='space-y-2 text-sm'>
											<li>
												• Standard: $0.655 per business
												mile
											</li>
											<li>
												• Actual: Depreciation +
												operating costs
											</li>
											<li>
												• Choose method that maximizes
												deduction
											</li>
										</ul>
									</div>
								</div>
							</div>

							{/* Mid-Article CTA */}
							<Card className='bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20 my-12'>
								<CardContent className='pt-6'>
									<div className='text-center'>
										<h3 className='text-xl font-bold mb-3'>
											Want to Implement These Strategies
											for Your Columbus Construction
											Business?
										</h3>
										<p className='text-muted-foreground mb-4'>
											I'll show you exactly how to set up
											these deductions in QuickBooks and
											ensure you're maximizing every
											opportunity.
										</p>
										<CalendlyModal
											buttonText='Get Columbus Construction Tax Help'
											buttonSize='lg'
											buttonClassName='px-8 py-4'
										/>
									</div>
								</CardContent>
							</Card>

							{/* Strategy 3 - Preview */}
							<h2 className='text-2xl font-bold mb-4 text-gray-600'>
								Strategy #3: Home Office Deduction for
								Construction
							</h2>
							<p className='text-muted-foreground mb-6 italic'>
								[Content about home office deductions for
								Columbus construction companies with dedicated
								office space...]
							</p>

							{/* Strategy 4 - Preview */}
							<h2 className='text-2xl font-bold mb-4 text-gray-600'>
								Strategy #4: Meal and Entertainment Deductions
							</h2>
							<p className='text-muted-foreground mb-6 italic'>
								[Content about client meals, job site lunches,
								and business entertainment deductions...]
							</p>

							{/* Strategy 5 - Preview */}
							<h2 className='text-2xl font-bold mb-4 text-gray-600'>
								Strategy #5: Columbus-Specific Business
								Incentives
							</h2>
							<p className='text-muted-foreground mb-6 italic'>
								[Content about Columbus city tax incentives,
								opportunity zones, and local business
								credits...]
							</p>

							{/* Final Strategy - Work with Specialist */}
							<div className='bg-primary/5 border border-primary/20 rounded-lg p-8 mb-12'>
								<h2 className='text-2xl font-bold text-primary mb-4'>
									Strategy #6: Partner with a Columbus
									Construction Tax Expert
								</h2>
								<p className='text-lg leading-relaxed mb-6'>
									The most tax-efficient Columbus construction
									companies don't try to navigate these
									strategies alone. They work with a
									specialist who understands both the
									construction industry and local Columbus tax
									landscape.
								</p>

								<div className='grid md:grid-cols-2 gap-6 mb-6'>
									<div className='bg-white rounded-lg p-4'>
										<h4 className='font-semibold mb-2 text-primary'>
											Average Annual Savings
										</h4>
										<p className='text-2xl font-bold text-primary mb-1'>
											$8,000 - $15,000
										</p>
										<p className='text-sm text-muted-foreground'>
											Per Columbus construction company
										</p>
									</div>
									<div className='bg-white rounded-lg p-4'>
										<h4 className='font-semibold mb-2 text-primary'>
											Time Saved
										</h4>
										<p className='text-2xl font-bold text-primary mb-1'>
											60+ Hours
										</p>
										<p className='text-sm text-muted-foreground'>
											Per year on tax preparation
										</p>
									</div>
								</div>

								<div className='text-center'>
									<CalendlyModal
										buttonText='Schedule Columbus Tax Strategy Session'
										buttonSize='lg'
										buttonClassName='px-8 py-4'
									/>
								</div>
							</div>

							{/* Conclusion */}
							<div className='border-t pt-8'>
								<h2 className='text-2xl font-bold mb-4'>
									Don't Leave Money on the Table
								</h2>
								<p className='text-lg leading-relaxed mb-6'>
									These tax strategies are specifically
									designed for Columbus area construction
									companies. I've helped local contractors
									from downtown high-rises to suburban
									developments implement these exact
									strategies and save thousands.
								</p>
								<p className='text-lg leading-relaxed mb-8'>
									The construction industry is competitive
									enough without overpaying taxes. Make sure
									your Columbus construction business is
									taking advantage of every legal deduction
									available.
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
											QuickBooks ProAdvisor • Columbus
											Construction Tax Specialist
										</p>
										<p className='text-muted-foreground mb-6 leading-relaxed'>
											Ray has helped over 75 Columbus area
											construction companies optimize
											their tax strategies and improve
											their bottom line. From small
											residential contractors to large
											commercial builders, his expertise
											in construction accounting and Ohio
											tax law has saved clients over
											$750,000 in taxes.
										</p>

										<div className='flex flex-wrap justify-center lg:justify-start gap-3 mb-6'>
											<div className='flex items-center gap-2 px-3 py-1 bg-qb-green-100 rounded-full'>
												<Award className='h-4 w-4 text-primary' />
												<span className='text-sm font-medium text-primary'>
													Tax Expert
												</span>
											</div>
											<div className='flex items-center gap-2 px-3 py-1 bg-qb-green-100 rounded-full'>
												<Building className='h-4 w-4 text-primary' />
												<span className='text-sm font-medium text-primary'>
													75+ Construction Clients
												</span>
											</div>
											<div className='flex items-center gap-2 px-3 py-1 bg-qb-green-100 rounded-full'>
												<MapPin className='h-4 w-4 text-primary' />
												<span className='text-sm font-medium text-primary'>
													Columbus Expert
												</span>
											</div>
										</div>

										<CalendlyModal
											buttonText='Schedule Your Columbus Tax Consultation'
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
							More Columbus Construction Tips
						</h2>

						<div className='grid md:grid-cols-3 gap-6'>
							{[
								{
									title: '5 Costly Bookkeeping Mistakes Delaware Construction Companies Make',
									excerpt:
										'Financial errors that cost Delaware contractors thousands each year.',
									slug: 'delaware-construction-bookkeeping-mistakes',
									location: 'Delaware, OH',
									category: 'Job Costing',
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
										'Maintain steady cash flow throughout the construction season.',
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
							Ready to Optimize Your Columbus Construction
							Business Taxes?
						</h2>
						<p className='text-xl text-muted-foreground mb-8'>
							Don't wait until tax season to implement these
							strategies. Schedule a free consultation and I'll
							show you exactly how to maximize your deductions and
							minimize your tax burden.
						</p>

						<div className='flex flex-col sm:flex-row gap-4 justify-center'>
							<CalendlyModal
								buttonText='Schedule Free Tax Strategy Session'
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
