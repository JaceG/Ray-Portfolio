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
	Target,
	Users,
	Zap,
	Star,
	TrendingDown,
	ArrowUp,
} from 'lucide-react';

export const metadata = {
	title: 'How to Price Your Services for Maximum Profitability | Ray Galloway',
	description:
		'Master strategic pricing for your service business. Learn proven methods to increase profits without losing clients and avoid common pricing mistakes.',
	keywords:
		'service business pricing, pricing strategy, profitable pricing, service pricing methods, value-based pricing, hourly vs project pricing',
};

export default function ServiceBusinessPricingStrategy() {
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
							<span>Pricing Strategy</span>
						</nav>

						{/* Article Meta */}
						<div className='flex flex-wrap items-center gap-4 mb-6'>
							<div className='flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full'>
								<DollarSign className='h-4 w-4 text-primary' />
								<span className='text-sm font-medium text-primary'>
									Pricing
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
								<span>December 7, 2024</span>
							</div>
							<div className='flex items-center gap-2 text-sm text-muted-foreground'>
								<Clock className='h-4 w-4' />
								<span>12 min read</span>
							</div>
						</div>

						{/* Title */}
						<h1 className='text-4xl sm:text-5xl font-bold mb-6 leading-tight'>
							How to Price Your Services for Maximum Profitability
						</h1>

						<p className='text-xl text-muted-foreground mb-8'>
							Stop undercharging and start earning what you're
							worth. This comprehensive guide reveals proven
							pricing strategies that increase profits without
							losing clients.
						</p>

						{/* Featured Image */}
						<div className='relative h-64 sm:h-80 lg:h-96 rounded-xl overflow-hidden shadow-xl mb-8'>
							{/* TODO: Add actual pricing strategy image */}
							<div className='absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center'>
								<div className='text-center text-white'>
									<Target className='h-20 w-20 mx-auto mb-4' />
									<p className='text-lg font-semibold'>
										Strategic Service Pricing
									</p>
									<p className='text-sm opacity-75'>
										Add photo:
										/images/blog/pricing-strategy.jpg
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
								Pricing is the fastest way to increase your
								profits, yet it's where most service business
								owners struggle the most. I've worked with
								hundreds of service providers who were leaving
								money on the table simply because they didn't
								know how to price strategically.
							</p>

							<p className='text-lg leading-relaxed mb-8'>
								The good news? Pricing isn't magic—it's a skill
								you can learn. The businesses I help implement
								these strategies typically see profit increases
								of 25-40% within six months, often without
								losing a single client.
							</p>

							{/* The Pricing Problem */}
							<div className='bg-red-50 border-l-4 border-red-500 p-6 mb-8 rounded-r-lg'>
								<div className='flex items-start gap-3'>
									<AlertTriangle className='h-6 w-6 text-red-500 mt-1 flex-shrink-0' />
									<div>
										<h2 className='text-2xl font-bold text-red-900 mb-3'>
											The Hidden Cost of Underpricing
										</h2>
										<p className='text-red-800 mb-4'>
											Underpricing doesn't just hurt your
											profits—it creates a cycle of
											overwork, stress, and business
											stagnation that's hard to break.
										</p>
									</div>
								</div>
							</div>

							<div className='bg-white border border-gray-200 rounded-lg p-6 mb-8'>
								<h3 className='text-xl font-bold mb-4'>
									What Underpricing Really Costs You
								</h3>
								<div className='grid md:grid-cols-2 gap-6'>
									<div>
										<h4 className='font-semibold mb-2 text-red-600 flex items-center gap-2'>
											<TrendingDown className='h-5 w-5' />
											Financial Impact
										</h4>
										<ul className='space-y-2 text-sm text-muted-foreground'>
											<li>• Lower profit margins</li>
											<li>
												• Inability to invest in growth
											</li>
											<li>• Cash flow problems</li>
											<li>• No money for marketing</li>
											<li>• Can't hire quality help</li>
										</ul>
									</div>
									<div>
										<h4 className='font-semibold mb-2 text-red-600 flex items-center gap-2'>
											<Users className='h-5 w-5' />
											Personal Impact
										</h4>
										<ul className='space-y-2 text-sm text-muted-foreground'>
											<li>• Working longer hours</li>
											<li>
												• Attracting price-focused
												clients
											</li>
											<li>
												• Constant stress about money
											</li>
											<li>• Burnout and resentment</li>
											<li>• No time for personal life</li>
										</ul>
									</div>
								</div>
								<div className='mt-4 p-3 bg-red-50 rounded-lg'>
									<p className='text-sm font-medium text-red-800'>
										💡 Reality Check: If you're working 60+
										hours a week and still struggling
										financially, your pricing is the
										problem, not your work ethic.
									</p>
								</div>
							</div>

							{/* Pricing Methods Comparison */}
							<div className='bg-qb-green-50 border-l-4 border-primary p-6 mb-8 rounded-r-lg'>
								<h2 className='text-2xl font-bold text-primary mb-4'>
									The 4 Main Pricing Methods (And When to Use
									Each)
								</h2>
								<p className='text-lg leading-relaxed mb-4'>
									Not all pricing methods are created equal.
									Understanding when and how to use each
									approach is crucial for maximizing your
									profitability.
								</p>
							</div>

							{/* Method 1: Hourly Pricing */}
							<div className='bg-white border border-gray-200 rounded-lg p-6 mb-6'>
								<h3 className='text-xl font-bold mb-4 flex items-center gap-2'>
									<Clock className='h-6 w-6 text-blue-600' />
									Method 1: Hourly Pricing
								</h3>
								<p className='text-muted-foreground mb-4'>
									Charging by the hour is simple but often
									limits your earning potential. You're
									selling time instead of value.
								</p>

								<div className='grid md:grid-cols-2 gap-4 mb-4'>
									<div className='bg-green-50 p-4 rounded-lg'>
										<h4 className='font-semibold mb-2 text-green-700'>
											✅ When It Works:
										</h4>
										<ul className='space-y-1 text-sm text-muted-foreground'>
											<li>• Undefined scope projects</li>
											<li>• Ongoing consulting work</li>
											<li>
												• Client-requested billing
												method
											</li>
											<li>• New service offerings</li>
										</ul>
									</div>
									<div className='bg-red-50 p-4 rounded-lg'>
										<h4 className='font-semibold mb-2 text-red-700'>
											❌ Limitations:
										</h4>
										<ul className='space-y-1 text-sm text-muted-foreground'>
											<li>
												• Income capped by hours worked
											</li>
											<li>• Penalizes efficiency</li>
											<li>
												• Clients focus on time, not
												results
											</li>
											<li>• Hard to scale</li>
										</ul>
									</div>
								</div>

								<div className='bg-blue-50 p-4 rounded-lg'>
									<h4 className='font-semibold mb-2'>
										💰 Hourly Rate Formula:
									</h4>
									<p className='text-sm text-muted-foreground mb-2'>
										(Annual Salary Goal + Business Expenses
										+ Profit Margin) ÷ Billable Hours
									</p>
									<p className='text-sm font-medium text-blue-800'>
										Example: ($75,000 + $25,000 + $25,000) ÷
										1,000 hours = $125/hour minimum
									</p>
								</div>
							</div>

							{/* Method 2: Project-Based Pricing */}
							<div className='bg-white border border-gray-200 rounded-lg p-6 mb-6'>
								<h3 className='text-xl font-bold mb-4 flex items-center gap-2'>
									<FileText className='h-6 w-6 text-green-600' />
									Method 2: Project-Based Pricing
								</h3>
								<p className='text-muted-foreground mb-4'>
									Fixed pricing for defined deliverables. This
									method rewards efficiency and allows you to
									capture more value.
								</p>

								<div className='grid md:grid-cols-2 gap-4 mb-4'>
									<div className='bg-green-50 p-4 rounded-lg'>
										<h4 className='font-semibold mb-2 text-green-700'>
											✅ Advantages:
										</h4>
										<ul className='space-y-1 text-sm text-muted-foreground'>
											<li>• Predictable revenue</li>
											<li>• Rewards efficiency</li>
											<li>• Easier client budgeting</li>
											<li>
												• Can charge premium for
												expertise
											</li>
										</ul>
									</div>
									<div className='bg-yellow-50 p-4 rounded-lg'>
										<h4 className='font-semibold mb-2 text-yellow-700'>
											⚠️ Requirements:
										</h4>
										<ul className='space-y-1 text-sm text-muted-foreground'>
											<li>• Clear scope definition</li>
											<li>• Accurate time estimation</li>
											<li>• Strong project management</li>
											<li>• Change order processes</li>
										</ul>
									</div>
								</div>

								<div className='bg-green-50 p-4 rounded-lg'>
									<h4 className='font-semibold mb-2'>
										🎯 Project Pricing Formula:
									</h4>
									<p className='text-sm text-muted-foreground mb-2'>
										(Estimated Hours × Hourly Rate) +
										Complexity Factor + Risk Buffer
									</p>
									<p className='text-sm font-medium text-green-800'>
										Example: (40 hours × $125) + 20%
										complexity + 10% risk = $6,500
									</p>
								</div>
							</div>

							{/* Method 3: Value-Based Pricing */}
							<div className='bg-white border border-gray-200 rounded-lg p-6 mb-6'>
								<h3 className='text-xl font-bold mb-4 flex items-center gap-2'>
									<Star className='h-6 w-6 text-yellow-600' />
									Method 3: Value-Based Pricing (The Profit
									Maximizer)
								</h3>
								<p className='text-muted-foreground mb-4'>
									Price based on the value you deliver to the
									client, not the time it takes. This is where
									the highest profits are made.
								</p>

								<div className='bg-yellow-50 p-4 rounded-lg mb-4'>
									<h4 className='font-semibold mb-2'>
										🏆 Value-Based Pricing Example:
									</h4>
									<p className='text-sm text-muted-foreground mb-2'>
										A marketing consultant helps a client
										increase revenue by $100,000 annually.
										The work takes 20 hours. Instead of
										charging $2,500 (20 × $125), they charge
										$15,000 (15% of the value created).
									</p>
									<p className='text-sm font-medium text-yellow-800'>
										Result: $750/hour effective rate vs.
										$125/hour hourly rate
									</p>
								</div>

								<div className='space-y-3'>
									<div className='border-l-4 border-primary pl-4'>
										<h4 className='font-semibold mb-1'>
											Step 1: Quantify the Value
										</h4>
										<p className='text-sm text-muted-foreground'>
											What financial impact will your work
											have? Increased revenue, cost
											savings, risk reduction?
										</p>
									</div>
									<div className='border-l-4 border-primary pl-4'>
										<h4 className='font-semibold mb-1'>
											Step 2: Calculate Your Share
										</h4>
										<p className='text-sm text-muted-foreground'>
											Typically 10-30% of the first year's
											value is reasonable for most service
											businesses.
										</p>
									</div>
									<div className='border-l-4 border-primary pl-4'>
										<h4 className='font-semibold mb-1'>
											Step 3: Present the ROI
										</h4>
										<p className='text-sm text-muted-foreground'>
											Show clients they're getting $3-10
											back for every $1 invested in your
											services.
										</p>
									</div>
								</div>
							</div>

							{/* Mid-Article CTA */}
							<Card className='bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20 my-12'>
								<CardContent className='pt-6'>
									<div className='text-center'>
										<h3 className='text-xl font-bold mb-3'>
											Want Help Implementing Strategic
											Pricing?
										</h3>
										<p className='text-muted-foreground mb-4'>
											I'll help you analyze your current
											pricing and develop a strategy that
											maximizes your profitability.
										</p>
										<CalendlyModal
											buttonText='Get Pricing Strategy Help'
											buttonSize='lg'
											buttonClassName='px-8 py-4'
										/>
									</div>
								</CardContent>
							</Card>

							{/* Method 4: Retainer Pricing */}
							<div className='bg-white border border-gray-200 rounded-lg p-6 mb-8'>
								<h3 className='text-xl font-bold mb-4 flex items-center gap-2'>
									<TrendingUp className='h-6 w-6 text-purple-600' />
									Method 4: Retainer Pricing (The Stability
									Creator)
								</h3>
								<p className='text-muted-foreground mb-4'>
									Monthly recurring revenue for ongoing
									services. This provides predictable income
									and deeper client relationships.
								</p>

								<div className='grid md:grid-cols-2 gap-4 mb-4'>
									<div className='bg-purple-50 p-4 rounded-lg'>
										<h4 className='font-semibold mb-2'>
											📈 Business Benefits:
										</h4>
										<ul className='space-y-1 text-sm text-muted-foreground'>
											<li>
												• Predictable monthly revenue
											</li>
											<li>• Better cash flow planning</li>
											<li>
												• Deeper client relationships
											</li>
											<li>• Higher lifetime value</li>
										</ul>
									</div>
									<div className='bg-blue-50 p-4 rounded-lg'>
										<h4 className='font-semibold mb-2'>
											👥 Client Benefits:
										</h4>
										<ul className='space-y-1 text-sm text-muted-foreground'>
											<li>
												• Priority access to your time
											</li>
											<li>
												• Consistent service delivery
											</li>
											<li>• Better budget planning</li>
											<li>
												• Often lower effective rates
											</li>
										</ul>
									</div>
								</div>

								<div className='bg-purple-50 p-4 rounded-lg'>
									<h4 className='font-semibold mb-2'>
										💼 Retainer Structure Example:
									</h4>
									<div className='text-sm text-muted-foreground space-y-1'>
										<p>
											• <strong>Basic:</strong>{' '}
											$2,500/month - 15 hours of work,
											email support
										</p>
										<p>
											• <strong>Standard:</strong>{' '}
											$4,500/month - 30 hours of work,
											priority support, monthly strategy
											call
										</p>
										<p>
											• <strong>Premium:</strong>{' '}
											$7,500/month - 50 hours of work,
											dedicated support, weekly calls
										</p>
									</div>
								</div>
							</div>

							{/* Pricing Psychology */}
							<div className='bg-qb-green-50 border-l-4 border-primary p-6 mb-8 rounded-r-lg'>
								<h2 className='text-2xl font-bold text-primary mb-4'>
									The Psychology of Pricing: What Really
									Influences Buying Decisions
								</h2>
								<p className='text-lg leading-relaxed mb-4'>
									Understanding how clients make pricing
									decisions helps you position your services
									more effectively and justify premium rates.
								</p>
							</div>

							<div className='grid md:grid-cols-2 gap-6 mb-8'>
								<div className='bg-white border border-gray-200 rounded-lg p-6'>
									<h3 className='text-lg font-bold mb-4 flex items-center gap-2'>
										<Zap className='h-5 w-5 text-primary' />
										Price Anchoring
									</h3>
									<p className='text-sm text-muted-foreground mb-3'>
										The first price clients see becomes
										their reference point for all other
										prices.
									</p>
									<div className='bg-primary/5 p-3 rounded-lg'>
										<p className='text-sm font-medium text-primary'>
											Strategy: Always present your
											premium option first, then show
											lower-priced alternatives.
										</p>
									</div>
								</div>

								<div className='bg-white border border-gray-200 rounded-lg p-6'>
									<h3 className='text-lg font-bold mb-4 flex items-center gap-2'>
										<Target className='h-5 w-5 text-primary' />
										The Decoy Effect
									</h3>
									<p className='text-sm text-muted-foreground mb-3'>
										Clients choose the middle option when
										presented with three choices, especially
										if the middle option offers the best
										value.
									</p>
									<div className='bg-primary/5 p-3 rounded-lg'>
										<p className='text-sm font-medium text-primary'>
											Strategy: Create three service tiers
											with your preferred option in the
											middle.
										</p>
									</div>
								</div>

								<div className='bg-white border border-gray-200 rounded-lg p-6'>
									<h3 className='text-lg font-bold mb-4 flex items-center gap-2'>
										<Star className='h-5 w-5 text-primary' />
										Perceived Value
									</h3>
									<p className='text-sm text-muted-foreground mb-3'>
										Clients don't buy based on cost—they buy
										based on perceived value relative to the
										price.
									</p>
									<div className='bg-primary/5 p-3 rounded-lg'>
										<p className='text-sm font-medium text-primary'>
											Strategy: Focus on outcomes and
											benefits, not features or time
											spent.
										</p>
									</div>
								</div>

								<div className='bg-white border border-gray-200 rounded-lg p-6'>
									<h3 className='text-lg font-bold mb-4 flex items-center gap-2'>
										<Users className='h-5 w-5 text-primary' />
										Social Proof
									</h3>
									<p className='text-sm text-muted-foreground mb-3'>
										Clients are more comfortable with higher
										prices when they see others paying
										similar amounts.
									</p>
									<div className='bg-primary/5 p-3 rounded-lg'>
										<p className='text-sm font-medium text-primary'>
											Strategy: Share case studies and
											testimonials that reference your
											pricing or ROI.
										</p>
									</div>
								</div>
							</div>

							{/* Common Pricing Mistakes */}
							<div className='bg-red-50 border-l-4 border-red-500 p-6 mb-8 rounded-r-lg'>
								<h2 className='text-2xl font-bold text-red-900 mb-4'>
									5 Pricing Mistakes That Kill Profits
								</h2>
								<p className='text-red-800 mb-4'>
									Avoid these common mistakes that keep
									service businesses struggling financially
									despite doing great work.
								</p>
							</div>

							<div className='space-y-4 mb-8'>
								<div className='bg-white border border-red-200 rounded-lg p-4'>
									<h4 className='font-semibold mb-2 text-red-700 flex items-center gap-2'>
										<AlertTriangle className='h-5 w-5' />
										Mistake #1: Competing on Price
									</h4>
									<p className='text-sm text-muted-foreground mb-2'>
										Racing to the bottom by undercutting
										competitors destroys profit margins and
										attracts price-focused clients.
									</p>
									<p className='text-sm font-medium text-green-700'>
										✅ Solution: Compete on value,
										expertise, and results instead of price.
									</p>
								</div>

								<div className='bg-white border border-red-200 rounded-lg p-4'>
									<h4 className='font-semibold mb-2 text-red-700 flex items-center gap-2'>
										<AlertTriangle className='h-5 w-5' />
										Mistake #2: Not Factoring in All Costs
									</h4>
									<p className='text-sm text-muted-foreground mb-2'>
										Forgetting about overhead, taxes,
										benefits, and non-billable time leads to
										pricing that doesn't cover true costs.
									</p>
									<p className='text-sm font-medium text-green-700'>
										✅ Solution: Calculate your true cost
										per billable hour including all business
										expenses.
									</p>
								</div>

								<div className='bg-white border border-red-200 rounded-lg p-4'>
									<h4 className='font-semibold mb-2 text-red-700 flex items-center gap-2'>
										<AlertTriangle className='h-5 w-5' />
										Mistake #3: Pricing Based on Personal
										Budget
									</h4>
									<p className='text-sm text-muted-foreground mb-2'>
										Setting prices based on what you
										personally would pay, rather than the
										value you provide to business clients.
									</p>
									<p className='text-sm font-medium text-green-700'>
										✅ Solution: Price based on business
										value and ROI, not personal
										affordability.
									</p>
								</div>

								<div className='bg-white border border-red-200 rounded-lg p-4'>
									<h4 className='font-semibold mb-2 text-red-700 flex items-center gap-2'>
										<AlertTriangle className='h-5 w-5' />
										Mistake #4: Not Raising Prices Regularly
									</h4>
									<p className='text-sm text-muted-foreground mb-2'>
										Keeping the same prices for years while
										costs increase, effectively giving
										yourself a pay cut annually.
									</p>
									<p className='text-sm font-medium text-green-700'>
										✅ Solution: Review and adjust prices
										annually, minimum 3-5% to keep up with
										inflation.
									</p>
								</div>

								<div className='bg-white border border-red-200 rounded-lg p-4'>
									<h4 className='font-semibold mb-2 text-red-700 flex items-center gap-2'>
										<AlertTriangle className='h-5 w-5' />
										Mistake #5: Apologizing for Your Prices
									</h4>
									<p className='text-sm text-muted-foreground mb-2'>
										Showing discomfort or uncertainty about
										your pricing undermines client
										confidence in your value.
									</p>
									<p className='text-sm font-medium text-green-700'>
										✅ Solution: Present prices confidently
										and be prepared to justify them with
										value statements.
									</p>
								</div>
							</div>

							{/* Implementation Strategy */}
							<div className='bg-primary/5 border border-primary/20 rounded-lg p-8 mb-12'>
								<h2 className='text-2xl font-bold text-primary mb-4'>
									Your 30-Day Pricing Optimization Plan
								</h2>
								<p className='text-lg leading-relaxed mb-6'>
									Don't try to change everything at once.
									Follow this systematic approach to optimize
									your pricing over the next month.
								</p>

								<div className='space-y-4'>
									<div className='flex items-start gap-3'>
										<div className='bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5'>
											Week 1
										</div>
										<div>
											<h4 className='font-semibold mb-1'>
												Analyze Your Current Pricing
											</h4>
											<p className='text-sm text-muted-foreground'>
												Calculate your true hourly cost,
												review profit margins by
												service, and identify your
												most/least profitable clients.
											</p>
										</div>
									</div>
									<div className='flex items-start gap-3'>
										<div className='bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5'>
											Week 2
										</div>
										<div>
											<h4 className='font-semibold mb-1'>
												Research Market Rates
											</h4>
											<p className='text-sm text-muted-foreground'>
												Survey competitors, talk to
												industry peers, and understand
												what clients are paying for
												similar services.
											</p>
										</div>
									</div>
									<div className='flex items-start gap-3'>
										<div className='bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5'>
											Week 3
										</div>
										<div>
											<h4 className='font-semibold mb-1'>
												Develop New Pricing Structure
											</h4>
											<p className='text-sm text-muted-foreground'>
												Create service packages, set new
												rates, and prepare value-based
												justifications for price
												increases.
											</p>
										</div>
									</div>
									<div className='flex items-start gap-3'>
										<div className='bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5'>
											Week 4
										</div>
										<div>
											<h4 className='font-semibold mb-1'>
												Implement and Communicate
											</h4>
											<p className='text-sm text-muted-foreground'>
												Roll out new pricing to new
												clients, communicate changes to
												existing clients, and track
												results.
											</p>
										</div>
									</div>
								</div>

								<div className='text-center mt-6'>
									<CalendlyModal
										buttonText='Get Professional Pricing Help'
										buttonSize='lg'
										buttonClassName='px-8 py-4'
									/>
								</div>
							</div>

							{/* Conclusion */}
							<div className='border-t pt-8'>
								<h2 className='text-2xl font-bold mb-4'>
									Your Pricing is Your Profit Strategy
								</h2>
								<p className='text-lg leading-relaxed mb-6'>
									Strategic pricing isn't about charging
									more—it's about charging appropriately for
									the value you deliver. When you price
									strategically, you attract better clients,
									reduce stress, and create the financial
									foundation for sustainable business growth.
								</p>
								<p className='text-lg leading-relaxed mb-8'>
									Remember: every dollar you add to your
									pricing goes directly to your bottom line. A
									20% price increase can often double your
									profits. Don't leave that money on the table
									any longer.
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
											Business Financial Advisor • Pricing
											Strategy Specialist
										</p>
										<p className='text-muted-foreground mb-6 leading-relaxed'>
											Ray has helped over 150 service
											business owners optimize their
											pricing strategies, resulting in an
											average profit increase of 35%
											within six months. His data-driven
											approach to pricing combines
											financial analysis with market
											psychology to maximize profitability
											without losing clients.
										</p>

										<div className='flex flex-wrap justify-center lg:justify-start gap-3 mb-6'>
											<div className='flex items-center gap-2 px-3 py-1 bg-qb-green-100 rounded-full'>
												<Target className='h-4 w-4 text-primary' />
												<span className='text-sm font-medium text-primary'>
													Pricing Expert
												</span>
											</div>
											<div className='flex items-center gap-2 px-3 py-1 bg-qb-green-100 rounded-full'>
												<TrendingUp className='h-4 w-4 text-primary' />
												<span className='text-sm font-medium text-primary'>
													Profit Optimization
												</span>
											</div>
											<div className='flex items-center gap-2 px-3 py-1 bg-qb-green-100 rounded-full'>
												<BarChart3 className='h-4 w-4 text-primary' />
												<span className='text-sm font-medium text-primary'>
													Business Strategy
												</span>
											</div>
										</div>

										<CalendlyModal
											buttonText='Schedule Your Pricing Strategy Session'
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
									title: 'The 7-Step Monthly Bookkeeping Checklist for Service Businesses',
									excerpt:
										'Never miss important bookkeeping tasks with this comprehensive checklist.',
									slug: 'monthly-bookkeeping-checklist-service-business',
									category: 'Bookkeeping',
								},
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
							Ready to Optimize Your Pricing Strategy?
						</h2>
						<p className='text-xl text-muted-foreground mb-8'>
							Stop undercharging and start earning what you're
							worth. Get professional help developing a pricing
							strategy that maximizes your profits without losing
							clients.
						</p>

						<div className='flex flex-col sm:flex-row gap-4 justify-center'>
							<CalendlyModal
								buttonText='Schedule Pricing Strategy Session'
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
