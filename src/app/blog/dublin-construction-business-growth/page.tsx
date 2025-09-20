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
	Users,
	Briefcase,
	Settings,
} from 'lucide-react';

export const metadata = {
	title: 'Growing Your Dublin Construction Business: Financial Foundations | Ray Galloway',
	description:
		'Essential financial systems every Dublin construction company needs to scale from startup to multi-million dollar operation in Columbus\' premier business community.',
	keywords:
		'Dublin construction business growth, construction business scaling, Dublin Ohio contractors, construction financial systems',
};

export default function DublinConstructionGrowth() {
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
							<span>Dublin Business Growth</span>
						</nav>

						{/* Article Meta */}
						<div className='flex flex-wrap items-center gap-4 mb-6'>
							<div className='flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full'>
								<TrendingUp className='h-4 w-4 text-primary' />
								<span className='text-sm font-medium text-primary'>
									Business Growth
								</span>
							</div>
							<div className='flex items-center gap-2 px-3 py-1 bg-gray-100 rounded-full'>
								<MapPin className='h-4 w-4 text-gray-600' />
								<span className='text-sm font-medium text-gray-600'>
									Dublin, OH
								</span>
							</div>
							<div className='flex items-center gap-2 text-sm text-muted-foreground'>
								<Calendar className='h-4 w-4' />
								<span>November 16, 2024</span>
							</div>
							<div className='flex items-center gap-2 text-sm text-muted-foreground'>
								<Clock className='h-4 w-4' />
								<span>9 min read</span>
							</div>
						</div>

						{/* Title */}
						<h1 className='text-4xl sm:text-5xl font-bold mb-6 leading-tight'>
							Growing Your Dublin Construction Business: Financial Foundations
						</h1>

						<p className='text-xl text-muted-foreground mb-8'>
							Essential financial systems every Dublin construction company needs 
							to scale from startup to multi-million dollar operation in Columbus' 
							premier business community.
						</p>

						{/* Featured Image */}
						<div className='relative h-64 sm:h-80 lg:h-96 rounded-xl overflow-hidden shadow-xl mb-8'>
							{/* TODO: Add actual Dublin construction growth photo */}
							<div className='absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center'>
								<div className='text-center text-white'>
									<Building className='h-20 w-20 mx-auto mb-4' />
									<p className='text-lg font-semibold'>
										Dublin Construction Growth
									</p>
									<p className='text-sm opacity-75'>
										Add photo: /images/blog/dublin-construction-growth.jpg
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
								Dublin represents one of the most lucrative construction markets 
								in Central Ohio. With its affluent residential communities, 
								thriving business district, and ongoing development projects, 
								Dublin offers exceptional opportunities for construction companies 
								ready to scale their operations.
							</p>

							<p className='text-lg leading-relaxed mb-8'>
								But growing a construction business in Dublin's competitive market 
								requires more than just good craftsmanship. You need robust 
								financial systems that can support larger projects, more complex 
								operations, and the sophisticated clients that define Dublin's 
								construction landscape.
							</p>

							{/* The Dublin Opportunity */}
							<div className='bg-qb-green-50 border-l-4 border-primary p-6 mb-8 rounded-r-lg'>
								<h2 className='text-2xl font-bold text-primary mb-4'>
									The Dublin Construction Opportunity
								</h2>
								<p className='text-lg leading-relaxed mb-4'>
									Dublin's unique position as a corporate hub and affluent 
									residential community creates exceptional opportunities for 
									construction companies with the right financial foundation.
								</p>
							</div>

							<div className='bg-white border border-gray-200 rounded-lg p-6 mb-8'>
								<h3 className='text-xl font-bold mb-4'>
									Why Dublin is Different
								</h3>
								<div className='grid md:grid-cols-2 gap-6'>
									<div>
										<h4 className='font-semibold mb-2 flex items-center gap-2'>
											<Briefcase className='h-5 w-5 text-primary' />
											Corporate Headquarters
										</h4>
										<p className='text-sm text-muted-foreground mb-4'>
											Home to major corporations requiring sophisticated 
											commercial construction and renovation services.
										</p>
									</div>
									<div>
										<h4 className='font-semibold mb-2 flex items-center gap-2'>
											<Building className='h-5 w-5 text-primary' />
											High-End Residential
										</h4>
										<p className='text-sm text-muted-foreground mb-4'>
											Affluent homeowners with budgets for premium 
											construction and remodeling projects.
										</p>
									</div>
									<div>
										<h4 className='font-semibold mb-2 flex items-center gap-2'>
											<TrendingUp className='h-5 w-5 text-primary' />
											Ongoing Development
										</h4>
										<p className='text-sm text-muted-foreground mb-4'>
											Continuous growth creates opportunities for new 
											construction and infrastructure projects.
										</p>
									</div>
									<div>
										<h4 className='font-semibold mb-2 flex items-center gap-2'>
											<DollarSign className='h-5 w-5 text-primary' />
											Premium Pricing
										</h4>
										<p className='text-sm text-muted-foreground mb-4'>
											Dublin clients expect quality and are willing to 
											pay premium rates for exceptional service.
										</p>
									</div>
								</div>
							</div>

							{/* Foundation 1: Financial Systems */}
							<div className='bg-qb-green-50 border-l-4 border-primary p-6 mb-8 rounded-r-lg'>
								<h2 className='text-2xl font-bold text-primary mb-4'>
									Foundation #1: Scalable Financial Systems
								</h2>
								<p className='text-lg leading-relaxed mb-4'>
									Growing from a small contractor to a multi-million dollar 
									operation requires financial systems that can handle 
									increased complexity, larger projects, and more sophisticated 
									reporting requirements.
								</p>
							</div>

							<div className='bg-white border border-gray-200 rounded-lg p-6 mb-8'>
								<h3 className='text-xl font-bold mb-4'>
									Essential Financial Infrastructure
								</h3>
								<div className='space-y-4'>
									<div className='border-l-4 border-primary pl-4'>
										<h4 className='font-semibold mb-2'>Advanced QuickBooks Setup</h4>
										<p className='text-sm text-muted-foreground mb-2'>
											Move beyond basic bookkeeping to sophisticated job costing, 
											class tracking, and multi-location management.
										</p>
										<ul className='text-sm text-muted-foreground space-y-1'>
											<li>• Job costing by project phase</li>
											<li>• Class tracking for different service lines</li>
											<li>• Advanced inventory management</li>
											<li>• Multi-location reporting</li>
										</ul>
									</div>
									<div className='border-l-4 border-primary pl-4'>
										<h4 className='font-semibold mb-2'>Cash Flow Management</h4>
										<p className='text-sm text-muted-foreground mb-2'>
											Implement 13-week rolling forecasts and line of credit 
											management for larger project financing.
										</p>
									</div>
									<div className='border-l-4 border-primary pl-4'>
										<h4 className='font-semibold mb-2'>Financial Reporting</h4>
										<p className='text-sm text-muted-foreground'>
											Monthly financial packages with KPI dashboards for 
											data-driven decision making.
										</p>
									</div>
								</div>
							</div>

							{/* Foundation 2: Project Management */}
							<div className='bg-qb-green-50 border-l-4 border-primary p-6 mb-8 rounded-r-lg'>
								<h2 className='text-2xl font-bold text-primary mb-4'>
									Foundation #2: Sophisticated Project Management
								</h2>
								<p className='text-lg leading-relaxed mb-4'>
									Dublin's high-end projects require project management 
									systems that can handle complex timelines, multiple 
									stakeholders, and detailed financial tracking.
								</p>
							</div>

							<div className='bg-white border border-gray-200 rounded-lg p-6 mb-8'>
								<h3 className='text-xl font-bold mb-4'>
									Project Management Excellence
								</h3>
								<div className='grid md:grid-cols-2 gap-6'>
									<div>
										<h4 className='font-semibold mb-2'>Detailed Estimating</h4>
										<ul className='space-y-2 text-sm text-muted-foreground'>
											<li>• Line-item material costs</li>
											<li>• Labor hour calculations</li>
											<li>• Subcontractor coordination</li>
											<li>• Contingency planning</li>
										</ul>
									</div>
									<div>
										<h4 className='font-semibold mb-2'>Progress Tracking</h4>
										<ul className='space-y-2 text-sm text-muted-foreground'>
											<li>• Weekly progress reports</li>
											<li>• Budget vs. actual analysis</li>
											<li>• Change order management</li>
											<li>• Timeline adjustments</li>
										</ul>
									</div>
								</div>
							</div>

							{/* Mid-Article CTA */}
							<Card className='bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20 my-12'>
								<CardContent className='pt-6'>
									<div className='text-center'>
										<h3 className='text-xl font-bold mb-3'>
											Ready to Scale Your Dublin Construction Business?
										</h3>
										<p className='text-muted-foreground mb-4'>
											I'll help you build the financial foundation needed 
											to compete for Dublin's premium construction projects.
										</p>
										<CalendlyModal
											buttonText='Get Business Growth Help'
											buttonSize='lg'
											buttonClassName='px-8 py-4'
										/>
									</div>
								</CardContent>
							</Card>

							{/* Foundation 3: Team & Operations */}
							<div className='bg-qb-green-50 border-l-4 border-primary p-6 mb-8 rounded-r-lg'>
								<h2 className='text-2xl font-bold text-primary mb-4'>
									Foundation #3: Team & Operational Excellence
								</h2>
								<p className='text-lg leading-relaxed mb-4'>
									Scaling requires building systems that work without your 
									constant oversight. This means investing in team development 
									and operational processes that maintain quality as you grow.
								</p>
							</div>

							<div className='bg-white border border-gray-200 rounded-lg p-6 mb-8'>
								<h3 className='text-xl font-bold mb-4'>
									Building Your Growth Team
								</h3>
								<div className='space-y-4'>
									<div className='border-l-4 border-blue-500 pl-4'>
										<h4 className='font-semibold mb-2'>Project Managers</h4>
										<p className='text-sm text-muted-foreground'>
											Hire experienced project managers who can handle Dublin's 
											sophisticated clients and complex projects independently.
										</p>
									</div>
									<div className='border-l-4 border-blue-500 pl-4'>
										<h4 className='font-semibold mb-2'>Financial Administrator</h4>
										<p className='text-sm text-muted-foreground'>
											Dedicated person to handle invoicing, collections, job 
											costing, and financial reporting as you scale.
										</p>
									</div>
									<div className='border-l-4 border-blue-500 pl-4'>
										<h4 className='font-semibold mb-2'>Quality Control Systems</h4>
										<p className='text-sm text-muted-foreground'>
											Standardized processes and checklists to maintain quality 
											across multiple simultaneous projects.
										</p>
									</div>
								</div>
							</div>

							{/* Foundation 4: Client Relationships */}
							<div className='bg-qb-green-50 border-l-4 border-primary p-6 mb-8 rounded-r-lg'>
								<h2 className='text-2xl font-bold text-primary mb-4'>
									Foundation #4: Premium Client Relationships
								</h2>
								<p className='text-lg leading-relaxed mb-4'>
									Dublin clients expect a different level of service and 
									communication. Building systems to exceed these expectations 
									creates the referral network that drives sustainable growth.
								</p>
							</div>

							<div className='bg-white border border-gray-200 rounded-lg p-6 mb-8'>
								<h3 className='text-xl font-bold mb-4'>
									Client Experience Excellence
								</h3>
								<ul className='space-y-3'>
									<li className='flex items-start gap-3'>
										<CheckCircle className='h-5 w-5 text-primary mt-0.5 flex-shrink-0' />
										<span>
											<strong>Professional Presentations:</strong> Detailed proposals with 3D renderings and material specifications
										</span>
									</li>
									<li className='flex items-start gap-3'>
										<CheckCircle className='h-5 w-5 text-primary mt-0.5 flex-shrink-0' />
										<span>
											<strong>Regular Communication:</strong> Weekly progress reports with photos and timeline updates
										</span>
									</li>
									<li className='flex items-start gap-3'>
										<CheckCircle className='h-5 w-5 text-primary mt-0.5 flex-shrink-0' />
										<span>
											<strong>Change Order Management:</strong> Clear processes for handling project modifications
										</span>
									</li>
									<li className='flex items-start gap-3'>
										<CheckCircle className='h-5 w-5 text-primary mt-0.5 flex-shrink-0' />
										<span>
											<strong>Post-Project Follow-up:</strong> Warranty management and relationship maintenance
										</span>
									</li>
								</ul>
							</div>

							{/* Growth Stages */}
							<h2 className='text-2xl font-bold mb-4 text-primary'>
								The Dublin Construction Growth Path
							</h2>
							<p className='text-lg leading-relaxed mb-6'>
								Successful Dublin construction companies typically follow a 
								predictable growth path. Understanding these stages helps you 
								prepare for each transition and avoid common pitfalls.
							</p>

							<div className='grid md:grid-cols-1 gap-6 mb-8'>
								<Card className='border-l-4 border-green-500'>
									<CardContent className='pt-6'>
										<h4 className='font-semibold mb-3 text-green-600'>Stage 1: Startup ($0-$500K Revenue)</h4>
										<p className='text-sm text-muted-foreground mb-3'>
											Focus on establishing systems and building initial client base.
										</p>
										<ul className='space-y-1 text-sm'>
											<li>• Basic QuickBooks setup with job costing</li>
											<li>• Simple project management systems</li>
											<li>• Personal involvement in all projects</li>
											<li>• Building Dublin network and reputation</li>
										</ul>
									</CardContent>
								</Card>

								<Card className='border-l-4 border-blue-500'>
									<CardContent className='pt-6'>
										<h4 className='font-semibold mb-3 text-blue-600'>Stage 2: Growth ($500K-$2M Revenue)</h4>
										<p className='text-sm text-muted-foreground mb-3'>
											Systematize operations and begin delegating responsibilities.
										</p>
										<ul className='space-y-1 text-sm'>
											<li>• Advanced financial reporting and KPIs</li>
											<li>• Hire first project manager</li>
											<li>• Standardize processes and procedures</li>
											<li>• Develop subcontractor network</li>
										</ul>
									</CardContent>
								</Card>

								<Card className='border-l-4 border-purple-500'>
									<CardContent className='pt-6'>
										<h4 className='font-semibold mb-3 text-purple-600'>Stage 3: Scale ($2M+ Revenue)</h4>
										<p className='text-sm text-muted-foreground mb-3'>
											Build management team and focus on strategic growth.
										</p>
										<ul className='space-y-1 text-sm'>
											<li>• Full management team in place</li>
											<li>• Multiple simultaneous large projects</li>
											<li>• Strategic planning and market expansion</li>
											<li>• Potential for additional locations</li>
										</ul>
									</CardContent>
								</Card>
							</div>

							{/* Common Mistakes */}
							<div className='bg-red-50 border-l-4 border-red-500 p-6 mb-8 rounded-r-lg'>
								<h2 className='text-2xl font-bold text-red-900 mb-4'>
									Common Growth Mistakes to Avoid
								</h2>
								<ul className='space-y-3'>
									<li className='flex items-start gap-3'>
										<span className='text-red-500 font-bold'>×</span>
										<span>Growing too fast without proper financial systems</span>
									</li>
									<li className='flex items-start gap-3'>
										<span className='text-red-500 font-bold'>×</span>
										<span>Taking on projects beyond your current capacity</span>
									</li>
									<li className='flex items-start gap-3'>
										<span className='text-red-500 font-bold'>×</span>
										<span>Neglecting cash flow management during expansion</span>
									</li>
									<li className='flex items-start gap-3'>
										<span className='text-red-500 font-bold'>×</span>
										<span>Failing to invest in team development</span>
									</li>
									<li className='flex items-start gap-3'>
										<span className='text-red-500 font-bold'>×</span>
										<span>Underestimating the complexity of larger projects</span>
									</li>
								</ul>
							</div>

							{/* Results Section */}
							<div className='bg-primary/5 border border-primary/20 rounded-lg p-8 mb-12'>
								<h2 className='text-2xl font-bold text-primary mb-4'>
									Dublin Construction Success Stories
								</h2>
								<p className='text-lg leading-relaxed mb-6'>
									Dublin construction companies that build proper financial 
									foundations achieve remarkable growth and profitability in 
									this premium market.
								</p>

								<div className='grid md:grid-cols-2 gap-6 mb-6'>
									<div className='bg-white rounded-lg p-4'>
										<h4 className='font-semibold mb-2 text-primary'>
											Average Revenue Growth
										</h4>
										<p className='text-2xl font-bold text-primary mb-1'>
											150%
										</p>
										<p className='text-sm text-muted-foreground'>
											Year-over-year growth with proper systems
										</p>
									</div>
									<div className='bg-white rounded-lg p-4'>
										<h4 className='font-semibold mb-2 text-primary'>
											Profit Margin Improvement
										</h4>
										<p className='text-2xl font-bold text-primary mb-1'>
											25%
										</p>
										<p className='text-sm text-muted-foreground'>
											Higher margins than general market
										</p>
									</div>
									<div className='bg-white rounded-lg p-4'>
										<h4 className='font-semibold mb-2 text-primary'>
											Project Size Increase
										</h4>
										<p className='text-2xl font-bold text-primary mb-1'>
											3x
										</p>
										<p className='text-sm text-muted-foreground'>
											Average project value after 2 years
										</p>
									</div>
									<div className='bg-white rounded-lg p-4'>
										<h4 className='font-semibold mb-2 text-primary'>
											Client Satisfaction
										</h4>
										<p className='text-2xl font-bold text-primary mb-1'>
											95%
										</p>
										<p className='text-sm text-muted-foreground'>
											Referral rate from Dublin clients
										</p>
									</div>
								</div>

								<div className='text-center'>
									<CalendlyModal
										buttonText='Start Your Dublin Growth Journey'
										buttonSize='lg'
										buttonClassName='px-8 py-4'
									/>
								</div>
							</div>

							{/* Conclusion */}
							<div className='border-t pt-8'>
								<h2 className='text-2xl font-bold mb-4'>
									Build Your Dublin Construction Empire
								</h2>
								<p className='text-lg leading-relaxed mb-6'>
									Dublin's construction market rewards companies that combine 
									exceptional craftsmanship with sophisticated business systems. 
									The opportunity is there—the question is whether you have the 
									financial foundation to seize it.
								</p>
								<p className='text-lg leading-relaxed mb-8'>
									Don't let inadequate systems limit your growth potential. 
									Build the financial and operational foundation that will 
									support your Dublin construction business for years to come.
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
											QuickBooks ProAdvisor • Business Growth Specialist
										</p>
										<p className='text-muted-foreground mb-6 leading-relaxed'>
											Ray has helped dozens of Dublin area construction 
											companies scale their operations and build the 
											financial systems needed for sustainable growth. 
											His expertise in construction finance and business 
											development has helped clients achieve average 
											revenue growth of 150% within two years.
										</p>

										<div className='flex flex-wrap justify-center lg:justify-start gap-3 mb-6'>
											<div className='flex items-center gap-2 px-3 py-1 bg-qb-green-100 rounded-full'>
												<Award className='h-4 w-4 text-primary' />
												<span className='text-sm font-medium text-primary'>
													Growth Expert
												</span>
											</div>
											<div className='flex items-center gap-2 px-3 py-1 bg-qb-green-100 rounded-full'>
												<TrendingUp className='h-4 w-4 text-primary' />
												<span className='text-sm font-medium text-primary'>
													Business Systems
												</span>
											</div>
											<div className='flex items-center gap-2 px-3 py-1 bg-qb-green-100 rounded-full'>
												<MapPin className='h-4 w-4 text-primary' />
												<span className='text-sm font-medium text-primary'>
													Dublin Specialist
												</span>
											</div>
										</div>

										<CalendlyModal
											buttonText='Schedule Your Growth Consultation'
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
							More Construction Business Tips
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
									title: 'Construction Cash Flow: Avoid the Feast-or-Famine Cycle',
									excerpt:
										'Strategies to maintain steady cash flow year-round.',
									slug: 'construction-cash-flow-management',
									location: 'Central Ohio',
									category: 'Cash Flow',
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
							Ready to Scale Your Dublin Construction Business?
						</h2>
						<p className='text-xl text-muted-foreground mb-8'>
							Don't let inadequate systems limit your growth in Dublin's 
							premium construction market. Get the financial foundation 
							you need to compete and win.
						</p>

						<div className='flex flex-col sm:flex-row gap-4 justify-center'>
							<CalendlyModal
								buttonText='Schedule Business Growth Session'
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
