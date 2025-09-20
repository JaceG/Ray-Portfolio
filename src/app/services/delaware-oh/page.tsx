import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CalendlyModal } from '@/components/CalendlyModal';
import { LeadMagnetForm } from '@/components/LeadMagnetForm';
import {
	ArrowLeft,
	MapPin,
	Phone,
	Mail,
	CheckCircle,
	Star,
	Users,
	Building,
	TrendingUp,
	Clock,
	Calculator,
	FileText,
	Shield,
	Award,
} from 'lucide-react';

export const metadata = {
	title: 'Professional Bookkeeping Services in Delaware, OH | Ray Galloway',
	description:
		'Expert QuickBooks bookkeeping for Delaware, Ohio businesses. Local CPA with 10+ years experience. Save 60+ hours per year with professional financial management.',
	keywords:
		'bookkeeping Delaware Ohio, QuickBooks Delaware OH, accountant Delaware Ohio, small business bookkeeping, financial services Delaware OH',
};

export default function DelawareOHServices() {
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
							<MapPin className='h-4 w-4 text-primary' />
							<span className='text-sm font-medium text-primary'>
								DELAWARE, OHIO
							</span>
						</div>

						<h1 className='text-4xl sm:text-5xl font-bold mb-6'>
							Professional Bookkeeping Services in
							<br />
							<span className='text-primary'>Delaware, Ohio</span>
						</h1>

						<p className='text-xl text-muted-foreground mb-8 max-w-3xl mx-auto'>
							Born and raised in Delaware, Ray Galloway provides
							expert QuickBooks bookkeeping services to local
							businesses. Save 60+ hours per year with
							professional financial management tailored to
							Delaware's business community.
						</p>

						<div className='max-w-4xl mx-auto mb-8 p-6 bg-white/80 rounded-lg shadow-sm'>
							<p className='text-muted-foreground leading-relaxed'>
								Delaware, Ohio isn't just where I provide
								bookkeeping services - it's my hometown, and
								that personal connection makes all the
								difference in how I serve our local business
								community. Growing up here, I watched this city
								evolve from a quiet county seat to a thriving
								community that perfectly balances small-town
								charm with modern business opportunities. I know
								every corner of this town, from the historic
								downtown district along North Sandusky Street
								where I actually owned and operated my own
								retail business for several years, to the newer
								commercial developments near the Delaware County
								Fairgrounds where I've helped numerous seasonal
								and year-round businesses optimize their
								financial operations. I've walked the same
								streets as my clients, shopped at the same local
								businesses, and understand the unique challenges
								that come with operating in a community where
								everyone knows everyone. Whether your business
								is located near Ohio Wesleyan University where
								I've worked with student-oriented enterprises,
								along the US-23 corridor that brings steady
								traffic through our town, or in the residential
								areas where many home-based businesses thrive, I
								bring not just professional expertise but
								genuine community investment to every client
								relationship. Having been part of Delaware's
								business community as both an entrepreneur and
								service provider, I understand the seasonal
								rhythms of our local economy, the importance of
								supporting each other during challenging times,
								and the incredible opportunities that come from
								being perfectly positioned between Columbus's
								urban energy and Ohio's beautiful rural
								landscapes.
							</p>
						</div>

						<div className='flex flex-col sm:flex-row gap-4 justify-center mb-12'>
							<CalendlyModal
								buttonText='Schedule Free Consultation'
								buttonSize='lg'
								buttonClassName='px-8 py-6 text-lg'
							/>
							<Button
								variant='outline'
								size='lg'
								className='px-8 py-6 text-lg'
								asChild>
								<a href='tel:555-123-4567'>
									<Phone className='mr-2 h-5 w-5' />
									Call (555) 123-4567
								</a>
							</Button>
						</div>

						{/* Local Stats */}
						<div className='grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto'>
							<div className='text-center'>
								<div className='text-2xl font-bold text-primary'>
									50+
								</div>
								<div className='text-sm text-muted-foreground'>
									Delaware Clients
								</div>
							</div>
							<div className='text-center'>
								<div className='text-2xl font-bold text-primary'>
									10+
								</div>
								<div className='text-sm text-muted-foreground'>
									Years Local
								</div>
							</div>
							<div className='text-center'>
								<div className='text-2xl font-bold text-primary'>
									5.0★
								</div>
								<div className='text-sm text-muted-foreground'>
									Local Rating
								</div>
							</div>
							<div className='text-center'>
								<div className='text-2xl font-bold text-primary'>
									24hr
								</div>
								<div className='text-sm text-muted-foreground'>
									Response Time
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Why Choose Local */}
			<section className='py-16'>
				<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='max-w-6xl mx-auto'>
						<div className='text-center mb-12'>
							<h2 className='text-3xl sm:text-4xl font-bold mb-4'>
								Why Delaware Businesses Choose Ray
							</h2>
							<p className='text-xl text-muted-foreground'>
								Local expertise meets professional excellence
							</p>
						</div>

						<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
							<Card>
								<CardContent className='pt-6'>
									<MapPin className='h-12 w-12 text-primary mb-4' />
									<h3 className='font-bold mb-2'>
										Born & Raised in Delaware
									</h3>
									<p className='text-sm text-muted-foreground'>
										Deep understanding of local business
										landscape, from North Sandusky Street to
										the Delaware County Fairgrounds area. I
										know the community.
									</p>
								</CardContent>
							</Card>

							<Card>
								<CardContent className='pt-6'>
									<Building className='h-12 w-12 text-primary mb-4' />
									<h3 className='font-bold mb-2'>
										Delaware Business Experience
									</h3>
									<p className='text-sm text-muted-foreground'>
										Former retail shop owner on North
										Sandusky Street. I understand the
										challenges of running a business in
										Delaware firsthand.
									</p>
								</CardContent>
							</Card>

							<Card>
								<CardContent className='pt-6'>
									<Users className='h-12 w-12 text-primary mb-4' />
									<h3 className='font-bold mb-2'>
										Local Network & Connections
									</h3>
									<p className='text-sm text-muted-foreground'>
										Strong relationships with Delaware
										banks, attorneys, and other
										professionals. I can connect you with
										trusted local resources.
									</p>
								</CardContent>
							</Card>

							<Card>
								<CardContent className='pt-6'>
									<Clock className='h-12 w-12 text-primary mb-4' />
									<h3 className='font-bold mb-2'>
										Quick Local Response
									</h3>
									<p className='text-sm text-muted-foreground'>
										Being local means faster response times
										and the ability to meet in person when
										needed. No waiting for out-of-town
										consultants.
									</p>
								</CardContent>
							</Card>

							<Card>
								<CardContent className='pt-6'>
									<Shield className='h-12 w-12 text-primary mb-4' />
									<h3 className='font-bold mb-2'>
										Delaware Tax Knowledge
									</h3>
									<p className='text-sm text-muted-foreground'>
										Familiar with local tax implications,
										Delaware County requirements, and Ohio
										small business regulations that affect
										your bottom line.
									</p>
								</CardContent>
							</Card>

							<Card>
								<CardContent className='pt-6'>
									<Award className='h-12 w-12 text-primary mb-4' />
									<h3 className='font-bold mb-2'>
										Community Investment
									</h3>
									<p className='text-sm text-muted-foreground'>
										Committed to helping Delaware's business
										community thrive. Your success
										contributes to our shared hometown
										prosperity.
									</p>
								</CardContent>
							</Card>
						</div>
					</div>
				</div>
			</section>

			{/* Services for Delaware Businesses */}
			<section className='py-16 bg-gray-50'>
				<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='max-w-6xl mx-auto'>
						<div className='text-center mb-12'>
							<h2 className='text-3xl sm:text-4xl font-bold mb-4'>
								Bookkeeping Services for Delaware, OH Businesses
							</h2>
							<p className='text-xl text-muted-foreground'>
								Comprehensive financial management tailored to
								local needs
							</p>
						</div>

						<div className='grid md:grid-cols-2 gap-8'>
							{[
								{
									icon: <Calculator className='h-8 w-8' />,
									title: 'Monthly Bookkeeping',
									description:
										'Complete monthly financial management including transaction categorization, reconciliation, and financial statements.',
									features: [
										'Bank reconciliation',
										'Expense categorization',
										'Monthly financial reports',
										'QuickBooks management',
									],
								},
								{
									icon: <TrendingUp className='h-8 w-8' />,
									title: 'Financial Analysis & Insights',
									description:
										'Turn your numbers into actionable insights for better business decisions.',
									features: [
										'Profit & loss analysis',
										'Cash flow forecasting',
										'Expense optimization',
										'Growth planning',
									],
								},
								{
									icon: <FileText className='h-8 w-8' />,
									title: 'Tax-Ready Organization',
									description:
										'Year-round tax document organization and preparation support for Delaware businesses.',
									features: [
										'Quarterly tax estimates',
										'Tax document preparation',
										'Deduction optimization',
										'IRS compliance',
									],
								},
								{
									icon: <Shield className='h-8 w-8' />,
									title: 'Audit-Proof Documentation',
									description:
										'Organized, compliant record-keeping that stands up to scrutiny.',
									features: [
										'Document organization',
										'Compliance tracking',
										'Audit preparation',
										'Record retention',
									],
								},
							].map((service, index) => (
								<Card key={index} className='h-full'>
									<CardHeader>
										<div className='flex items-center gap-3 mb-2'>
											<div className='w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center text-primary'>
												{service.icon}
											</div>
											<CardTitle className='text-xl'>
												{service.title}
											</CardTitle>
										</div>
									</CardHeader>
									<CardContent>
										<p className='text-muted-foreground mb-4'>
											{service.description}
										</p>
										<ul className='space-y-2'>
											{service.features.map(
												(feature, idx) => (
													<li
														key={idx}
														className='flex items-center gap-2 text-sm'>
														<CheckCircle className='h-4 w-4 text-primary flex-shrink-0' />
														{feature}
													</li>
												)
											)}
										</ul>
									</CardContent>
								</Card>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* Delaware Business Testimonials */}
			<section className='py-16'>
				<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='max-w-4xl mx-auto'>
						<div className='text-center mb-12'>
							<h2 className='text-3xl sm:text-4xl font-bold mb-4'>
								What Delaware Business Owners Say
							</h2>
							<p className='text-xl text-muted-foreground'>
								Real results from real Delaware businesses
							</p>
						</div>

						<div className='grid md:grid-cols-2 gap-8'>
							<Card>
								<CardContent className='pt-6'>
									<div className='flex text-yellow-400 mb-4'>
										{[...Array(5)].map((_, i) => (
											<Star
												key={i}
												className='h-4 w-4 fill-current'
											/>
										))}
									</div>
									<p className='text-muted-foreground italic mb-4'>
										"Ray's local knowledge made all the
										difference. He understands Delaware's
										business environment and helped us
										navigate local tax requirements we
										didn't even know existed. Saved us
										thousands!"
									</p>
									<div className='flex items-center'>
										<div className='w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center mr-3'>
											<span className='text-primary font-semibold text-sm'>
												JM
											</span>
										</div>
										<div>
											<p className='font-semibold text-sm'>
												John Miller
											</p>
											<p className='text-xs text-muted-foreground'>
												Miller Construction, Delaware OH
											</p>
										</div>
									</div>
								</CardContent>
							</Card>

							<Card>
								<CardContent className='pt-6'>
									<div className='flex text-yellow-400 mb-4'>
										{[...Array(5)].map((_, i) => (
											<Star
												key={i}
												className='h-4 w-4 fill-current'
											/>
										))}
									</div>
									<p className='text-muted-foreground italic mb-4'>
										"Having a bookkeeper who actually lives
										in Delaware is amazing. Ray understands
										our community and business challenges.
										His response time is incredible -
										usually same day!"
									</p>
									<div className='flex items-center'>
										<div className='w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center mr-3'>
											<span className='text-primary font-semibold text-sm'>
												LW
											</span>
										</div>
										<div>
											<p className='font-semibold text-sm'>
												Lisa Williams
											</p>
											<p className='text-xs text-muted-foreground'>
												Williams Consulting, Delaware OH
											</p>
										</div>
									</div>
								</CardContent>
							</Card>
						</div>
					</div>
				</div>
			</section>

			{/* Local Contact & CTA */}
			<section className='py-16 bg-gradient-to-br from-primary/5 to-primary/10'>
				<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='max-w-6xl mx-auto'>
						<div className='grid lg:grid-cols-2 gap-12 items-center'>
							<div>
								<h2 className='text-3xl sm:text-4xl font-bold mb-6'>
									Ready to Work with Delaware's
									<br />
									<span className='text-primary'>
										Trusted Bookkeeping Expert?
									</span>
								</h2>

								<p className='text-xl text-muted-foreground mb-8'>
									Join 50+ Delaware businesses that trust Ray
									with their financial management. Get your
									free consultation and see how professional
									bookkeeping can transform your business.
								</p>

								<div className='space-y-4 mb-8'>
									<div className='flex items-center gap-3'>
										<Phone className='h-5 w-5 text-primary' />
										<div>
											<p className='font-semibold'>
												(555) 123-4567
											</p>
											<p className='text-sm text-muted-foreground'>
												Local Delaware number
											</p>
										</div>
									</div>
									<div className='flex items-center gap-3'>
										<Mail className='h-5 w-5 text-primary' />
										<div>
											<p className='font-semibold'>
												ray@gallowaybookkeeping.com
											</p>
											<p className='text-sm text-muted-foreground'>
												Usually responds within 2 hours
											</p>
										</div>
									</div>
									<div className='flex items-center gap-3'>
										<MapPin className='h-5 w-5 text-primary' />
										<div>
											<p className='font-semibold'>
												Serving Delaware & Surrounding
												Areas
											</p>
											<p className='text-sm text-muted-foreground'>
												In-person meetings available
											</p>
										</div>
									</div>
								</div>

								<div className='flex flex-col sm:flex-row gap-4'>
									<CalendlyModal
										buttonText='Schedule Free Consultation'
										buttonSize='lg'
										buttonClassName='flex-1 sm:flex-none px-8 py-6 text-lg'
									/>
									<Button
										variant='outline'
										size='lg'
										className='px-8 py-6 text-lg'
										asChild>
										<Link href='/free-guide'>
											Get Free Guide
										</Link>
									</Button>
								</div>
							</div>

							<div>
								<LeadMagnetForm
									title='Get Your Free Delaware Business Guide'
									description='"7 Financial Tricks for Delaware Service Businesses"'
									buttonText='Download Free Guide'
									variant='default'
								/>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Local Business Resources */}
			<section className='py-16 bg-white'>
				<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='max-w-4xl mx-auto'>
						<div className='text-center mb-12'>
							<h2 className='text-3xl font-bold mb-4'>
								Delaware Business Resources
							</h2>
							<p className='text-muted-foreground'>
								Helpful local resources for Delaware, Ohio
								business owners
							</p>
						</div>

						<div className='grid md:grid-cols-2 gap-6'>
							<Card>
								<CardContent className='pt-6'>
									<h3 className='font-semibold mb-2'>
										Delaware City Government
									</h3>
									<p className='text-sm text-muted-foreground mb-3'>
										Business licenses, permits, and local
										regulations
									</p>
									<a
										href='https://www.delawareohio.net'
										target='_blank'
										rel='noopener noreferrer'
										className='text-primary text-sm hover:underline'>
										Visit delawareohio.net →
									</a>
								</CardContent>
							</Card>

							<Card>
								<CardContent className='pt-6'>
									<h3 className='font-semibold mb-2'>
										Delaware County Chamber
									</h3>
									<p className='text-sm text-muted-foreground mb-3'>
										Networking, business development, and
										local events
									</p>
									<a
										href='#'
										className='text-primary text-sm hover:underline'>
										Chamber information →
									</a>
								</CardContent>
							</Card>

							<Card>
								<CardContent className='pt-6'>
									<h3 className='font-semibold mb-2'>
										Ohio Business Gateway
									</h3>
									<p className='text-sm text-muted-foreground mb-3'>
										State business registration and tax
										information
									</p>
									<a
										href='https://business.ohio.gov'
										target='_blank'
										rel='noopener noreferrer'
										className='text-primary text-sm hover:underline'>
										Visit business.ohio.gov →
									</a>
								</CardContent>
							</Card>

							<Card>
								<CardContent className='pt-6'>
									<h3 className='font-semibold mb-2'>
										Local Banking Partners
									</h3>
									<p className='text-sm text-muted-foreground mb-3'>
										Delaware area banks that work well with
										QuickBooks
									</p>
									<span className='text-primary text-sm'>
										Contact Ray for recommendations
									</span>
								</CardContent>
							</Card>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
