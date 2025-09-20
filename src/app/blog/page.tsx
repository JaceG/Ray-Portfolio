import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CalendlyModal } from '@/components/CalendlyModal';
import {
	ArrowLeft,
	Calendar,
	Clock,
	User,
	MapPin,
	ArrowRight,
	Hammer,
	Building,
	Calculator,
	TrendingUp,
	FileText,
	Award,
} from 'lucide-react';

export const metadata = {
	title: 'Construction Bookkeeping Blog | Delaware & Columbus OH | Ray Galloway',
	description:
		'Expert bookkeeping tips for Delaware and Columbus construction companies. Job costing, tax strategies, and financial management advice from QuickBooks ProAdvisor Ray Galloway.',
	keywords:
		'construction bookkeeping, Delaware construction accounting, Columbus construction companies, job costing, construction tax strategies',
};

interface BlogPost {
	slug: string;
	title: string;
	excerpt: string;
	publishDate: string;
	readTime: string;
	category: string;
	location: string;
	image: string;
	featured?: boolean;
}

const blogPosts: BlogPost[] = [
	{
		slug: 'columbus-construction-bookkeeping-mistakes',
		title: '5 Costly Bookkeeping Mistakes Columbus Construction Companies Make',
		excerpt:
			'Discover the financial errors that cost Columbus area contractors thousands each year and how to avoid them with proper job costing systems.',
		publishDate: '2024-11-28',
		readTime: '8 min read',
		category: 'Job Costing',
		location: 'Columbus, OH',
		image: '/images/blog/columbus-construction-site.jpg',
		featured: true,
	},
	{
		slug: 'columbus-construction-tax-strategies',
		title: 'Columbus Construction Tax Strategies That Save Thousands',
		excerpt:
			'Learn the specific tax deductions and strategies that Columbus area construction businesses use to minimize their tax burden legally.',
		publishDate: '2024-11-25',
		readTime: '10 min read',
		category: 'Financial Planning',
		location: 'Columbus, OH',
		image: '/images/blog/columbus-downtown-construction.jpg',
		featured: true,
	},
	{
		slug: 'quickbooks-job-costing-construction',
		title: 'QuickBooks Job Costing for Construction: A Complete Guide',
		excerpt:
			'Master QuickBooks job costing to track project profitability, manage subcontractor payments, and make data-driven decisions.',
		publishDate: '2024-11-22',
		readTime: '12 min read',
		category: 'QuickBooks',
		location: 'Columbus Area',
		image: '/images/blog/quickbooks-construction-dashboard.jpg',
	},
	{
		slug: 'construction-cash-flow-management',
		title: 'How Construction Companies Can Improve Cash Flow by 40%',
		excerpt:
			'Simple strategies to optimize cash flow, manage payment schedules, and avoid the feast-or-famine cycle common in construction.',
		publishDate: '2024-11-19',
		readTime: '7 min read',
		category: 'Cash Flow',
		location: 'Central Ohio',
		image: '/images/blog/construction-cash-flow.jpg',
	},
	{
		slug: 'dublin-construction-business-growth',
		title: 'Growing Your Dublin Construction Business: Financial Foundations',
		excerpt:
			'Essential financial systems every Dublin construction company needs to scale from startup to multi-million dollar operation.',
		publishDate: '2024-11-16',
		readTime: '9 min read',
		category: 'Business Growth',
		location: 'Dublin, OH',
		image: '/images/blog/dublin-construction-growth.jpg',
	},
	{
		slug: 'construction-expense-tracking-system',
		title: 'The 5-Category Expense System Every Contractor Needs',
		excerpt:
			'Simplify your expense tracking with this proven system that saves construction companies 10+ hours per month on bookkeeping.',
		publishDate: '2024-11-13',
		readTime: '6 min read',
		category: 'Expense Management',
		location: 'Columbus Area',
		image: '/images/blog/construction-expense-tracking.jpg',
	},
];

export default function BlogHomepage() {
	const featuredPosts = blogPosts.filter((post) => post.featured);
	const recentPosts = blogPosts.filter((post) => !post.featured);

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
								CONSTRUCTION EXPERTISE
							</span>
						</div>

						<h1 className='text-4xl sm:text-5xl font-bold mb-6'>
							Financial Insights for
							<br />
							<span className='text-primary'>
								Columbus Area Construction
							</span>
						</h1>

						<p className='text-xl text-muted-foreground mb-8 max-w-3xl mx-auto'>
							Expert bookkeeping advice, job costing strategies,
							and tax tips specifically for construction companies
							in Columbus and Central Ohio.
						</p>

						<div className='flex flex-col sm:flex-row gap-4 justify-center mb-12'>
							<CalendlyModal
								buttonText='Get Construction Bookkeeping Help'
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

						{/* Blog Stats */}
						<div className='grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto'>
							<div className='text-center'>
								<div className='text-2xl font-bold text-primary'>
									50+
								</div>
								<div className='text-sm text-muted-foreground'>
									Construction Clients
								</div>
							</div>
							<div className='text-center'>
								<div className='text-2xl font-bold text-primary'>
									100+
								</div>
								<div className='text-sm text-muted-foreground'>
									Blog Articles
								</div>
							</div>
							<div className='text-center'>
								<div className='text-2xl font-bold text-primary'>
									10+
								</div>
								<div className='text-sm text-muted-foreground'>
									Years Experience
								</div>
							</div>
							<div className='text-center'>
								<div className='text-2xl font-bold text-primary'>
									$2M+
								</div>
								<div className='text-sm text-muted-foreground'>
									Projects Managed
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Featured Articles */}
			<section className='py-16'>
				<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='max-w-6xl mx-auto'>
						<div className='text-center mb-12'>
							<h2 className='text-3xl sm:text-4xl font-bold mb-4'>
								Featured Construction Insights
							</h2>
							<p className='text-xl text-muted-foreground'>
								Essential reading for Columbus area contractors
							</p>
						</div>

						<div className='grid lg:grid-cols-2 gap-8 mb-16'>
							{featuredPosts.map((post, index) => (
								<Card
									key={post.slug}
									className='overflow-hidden hover:shadow-xl transition-shadow duration-300'>
									<div className='relative h-64 bg-gray-100'>
										{/* TODO: Add actual construction site photos */}
										<div className='absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center'>
											<div className='text-center text-white'>
												<Building className='h-16 w-16 mx-auto mb-4' />
												<p className='text-sm'>
													Construction Image
													Placeholder
												</p>
												<p className='text-xs opacity-75'>
													Add: {post.image}
												</p>
											</div>
										</div>
										<div className='absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium'>
											{post.category}
										</div>
										<div className='absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm'>
											{post.readTime}
										</div>
									</div>

									<CardContent className='p-6'>
										<div className='flex items-center gap-2 mb-3'>
											<MapPin className='h-4 w-4 text-primary' />
											<span className='text-sm text-primary font-medium'>
												{post.location}
											</span>
										</div>

										<h3 className='text-xl font-bold mb-3 leading-tight'>
											{post.title}
										</h3>

										<p className='text-muted-foreground mb-4 leading-relaxed'>
											{post.excerpt}
										</p>

										<div className='flex items-center justify-between'>
											<div className='flex items-center gap-2 text-sm text-muted-foreground'>
												<Calendar className='h-4 w-4' />
												<span>
													{new Date(
														post.publishDate
													).toLocaleDateString()}
												</span>
											</div>
											<Button asChild>
												<Link
													href={`/blog/${post.slug}`}>
													Read More
													<ArrowRight className='ml-2 h-4 w-4' />
												</Link>
											</Button>
										</div>
									</CardContent>
								</Card>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* Recent Articles Grid */}
			<section className='py-16 bg-gray-50'>
				<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='max-w-6xl mx-auto'>
						<div className='text-center mb-12'>
							<h2 className='text-3xl font-bold mb-4'>
								Latest Construction Bookkeeping Tips
							</h2>
							<p className='text-muted-foreground'>
								Stay ahead with the latest strategies and
								insights
							</p>
						</div>

						<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
							{recentPosts.map((post) => (
								<Card
									key={post.slug}
									className='overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full'>
									<div className='relative h-48 bg-gray-100'>
										{/* TODO: Add actual construction photos */}
										<div className='absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/20 flex items-center justify-center'>
											<div className='text-center text-primary'>
												<Calculator className='h-12 w-12 mx-auto mb-2' />
												<p className='text-xs'>
													Add: {post.image}
												</p>
											</div>
										</div>
										<div className='absolute top-3 left-3 bg-primary text-white px-2 py-1 rounded text-xs font-medium'>
											{post.category}
										</div>
										<div className='absolute top-3 right-3 bg-black/50 text-white px-2 py-1 rounded text-xs'>
											{post.readTime}
										</div>
									</div>

									<CardContent className='p-4 flex-1'>
										<div className='flex items-center gap-2 mb-2'>
											<MapPin className='h-3 w-3 text-primary' />
											<span className='text-xs text-primary font-medium'>
												{post.location}
											</span>
										</div>

										<h3 className='text-lg font-bold mb-2 leading-tight'>
											{post.title}
										</h3>

										<p className='text-sm text-muted-foreground mb-4 leading-relaxed'>
											{post.excerpt}
										</p>

										<div className='flex items-center justify-between mt-auto'>
											<div className='flex items-center gap-2 text-xs text-muted-foreground'>
												<Calendar className='h-3 w-3' />
												<span>
													{new Date(
														post.publishDate
													).toLocaleDateString()}
												</span>
											</div>
											<Button size='sm' asChild>
												<Link
													href={`/blog/${post.slug}`}>
													Read More
												</Link>
											</Button>
										</div>
									</CardContent>
								</Card>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* Author & CTA Section */}
			<section className='py-16'>
				<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='max-w-4xl mx-auto'>
						<Card className='bg-gradient-to-r from-primary/5 to-primary/10 border-primary/20'>
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
										<p className='text-lg text-muted-foreground mb-4'>
											QuickBooks ProAdvisor specializing
											in Columbus area construction
											companies. With 10+ years of
											experience helping contractors
											optimize their job costing, manage
											cash flow, and maximize profits.
										</p>

										<div className='flex flex-wrap justify-center lg:justify-start gap-4 mb-6'>
											<div className='flex items-center gap-2 px-3 py-1 bg-qb-green-100 rounded-full'>
												<Award className='h-4 w-4 text-primary' />
												<span className='text-sm font-medium text-primary'>
													QuickBooks ProAdvisor
												</span>
											</div>
											<div className='flex items-center gap-2 px-3 py-1 bg-qb-green-100 rounded-full'>
												<Hammer className='h-4 w-4 text-primary' />
												<span className='text-sm font-medium text-primary'>
													Construction Specialist
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
											buttonText='Schedule Construction Consultation'
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

			{/* Newsletter Signup */}
			<section className='py-16 bg-gradient-to-br from-primary/5 to-primary/10'>
				<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='max-w-2xl mx-auto text-center'>
						<h2 className='text-3xl font-bold mb-4'>
							Stay Updated with Construction Financial Tips
						</h2>
						<p className='text-muted-foreground mb-8'>
							Get weekly insights delivered to your inbox. No
							spam, just valuable tips for Columbus area
							construction companies.
						</p>

						{/* TODO: Replace with actual email signup form */}
						<div className='bg-white rounded-lg p-6 shadow-lg'>
							<div className='flex flex-col sm:flex-row gap-4'>
								<input
									type='email'
									placeholder='Enter your email address'
									className='flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent'
								/>
								<Button className='px-8 py-3'>
									Subscribe to Blog
								</Button>
							</div>
							<p className='text-xs text-muted-foreground mt-3'>
								Join 500+ construction business owners getting
								weekly tips
							</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
