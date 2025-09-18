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
	Briefcase,
	Home,
} from 'lucide-react';

export const metadata = {
	title: 'Dublin Ohio Bookkeeping Services | Professional QuickBooks Management',
	description:
		'Expert bookkeeping services for Dublin, OH businesses. Serving professional services, tech companies, and growing businesses in Dublin, Ohio with QuickBooks expertise.',
	keywords:
		'bookkeeping Dublin Ohio, QuickBooks Dublin OH, accountant Dublin Ohio, professional services bookkeeping, Dublin business financial services',
};

export default function DublinServices() {
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
								DUBLIN, OHIO
							</span>
						</div>

						<h1 className='text-4xl sm:text-5xl font-bold mb-6'>
							Premium Bookkeeping Services for
							<br />
							<span className='text-primary'>
								Dublin, Ohio Businesses
							</span>
						</h1>

						<p className='text-xl text-muted-foreground mb-8 max-w-3xl mx-auto'>
							Serving Dublin's thriving business community with
							professional QuickBooks bookkeeping services. From
							Bridge Street to Tuttle Crossing, help your business
							achieve financial excellence.
						</p>

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

						{/* Dublin Stats */}
						<div className='grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto'>
							<div className='text-center'>
								<div className='text-2xl font-bold text-primary'>
									40+
								</div>
								<div className='text-sm text-muted-foreground'>
									Dublin Clients
								</div>
							</div>
							<div className='text-center'>
								<div className='text-2xl font-bold text-primary'>
									95%
								</div>
								<div className='text-sm text-muted-foreground'>
									Client Retention
								</div>
							</div>
							<div className='text-center'>
								<div className='text-2xl font-bold text-primary'>
									5.0★
								</div>
								<div className='text-sm text-muted-foreground'>
									Average Rating
								</div>
							</div>
							<div className='text-center'>
								<div className='text-2xl font-bold text-primary'>
									Same Day
								</div>
								<div className='text-sm text-muted-foreground'>
									Response
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Why Dublin Businesses Choose Ray */}
			<section className='py-16'>
				<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='max-w-6xl mx-auto'>
						<div className='text-center mb-12'>
							<h2 className='text-3xl sm:text-4xl font-bold mb-4'>
								Why Dublin's Leading Businesses Choose Ray
							</h2>
							<p className='text-xl text-muted-foreground'>
								Specialized expertise for Dublin's sophisticated
								business environment
							</p>
						</div>

						<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
							<Card>
								<CardContent className='pt-6'>
									<Briefcase className='h-12 w-12 text-primary mb-4' />
									<h3 className='font-bold mb-2'>
										Professional Services Focus
									</h3>
									<p className='text-sm text-muted-foreground'>
										Extensive experience with Dublin's
										concentration of consulting firms, law
										practices, financial services, and
										technology companies.
									</p>
								</CardContent>
							</Card>

							<Card>
								<CardContent className='pt-6'>
									<TrendingUp className='h-12 w-12 text-primary mb-4' />
									<h3 className='font-bold mb-2'>
										High-Growth Business Expertise
									</h3>
									<p className='text-sm text-muted-foreground'>
										Specialized in supporting Dublin's
										fast-growing companies with scalable
										financial systems and investor-ready
										reporting.
									</p>
								</CardContent>
							</Card>

							<Card>
								<CardContent className='pt-6'>
									<Building className='h-12 w-12 text-primary mb-4' />
									<h3 className='font-bold mb-2'>
										Corporate District Knowledge
									</h3>
									<p className='text-sm text-muted-foreground'>
										Familiar with Dublin's corporate
										landscape, from Bridge Street to Metro
										Place, understanding unique business
										requirements.
									</p>
								</CardContent>
							</Card>

							<Card>
								<CardContent className='pt-6'>
									<Users className='h-12 w-12 text-primary mb-4' />
									<h3 className='font-bold mb-2'>
										Executive-Level Service
									</h3>
									<p className='text-sm text-muted-foreground'>
										White-glove service that meets the high
										standards expected by Dublin's executive
										and entrepreneurial community.
									</p>
								</CardContent>
							</Card>

							<Card>
								<CardContent className='pt-6'>
									<Shield className='h-12 w-12 text-primary mb-4' />
									<h3 className='font-bold mb-2'>
										Compliance & Risk Management
									</h3>
									<p className='text-sm text-muted-foreground'>
										Advanced compliance expertise for Dublin
										businesses with complex regulatory
										requirements and fiduciary
										responsibilities.
									</p>
								</CardContent>
							</Card>

							<Card>
								<CardContent className='pt-6'>
									<Clock className='h-12 w-12 text-primary mb-4' />
									<h3 className='font-bold mb-2'>
										Responsive Partnership
									</h3>
									<p className='text-sm text-muted-foreground'>
										Understand the fast-paced Dublin
										business environment. Quick turnaround
										and proactive communication always.
									</p>
								</CardContent>
							</Card>
						</div>
					</div>
				</div>
			</section>

			{/* Dublin-Specific Services */}
			<section className='py-16 bg-gray-50'>
				<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='max-w-6xl mx-auto'>
						<div className='text-center mb-12'>
							<h2 className='text-3xl sm:text-4xl font-bold mb-4'>
								Premium Services for Dublin Businesses
							</h2>
							<p className='text-xl text-muted-foreground'>
								Sophisticated financial management for
								sophisticated businesses
							</p>
						</div>

						<div className='grid md:grid-cols-2 gap-8'>
							{[
								{
									icon: <Briefcase className='h-8 w-8' />,
									title: 'Professional Services Accounting',
									description:
										"Specialized bookkeeping for Dublin's consulting, legal, and professional service firms.",
									features: [
										'Project profitability tracking',
										'Time & billing integration',
										'Client retainer management',
										'Partner distribution calculations',
									],
								},
								{
									icon: <TrendingUp className='h-8 w-8' />,
									title: 'Executive Financial Reporting',
									description:
										'Board-ready financial statements and executive dashboards for decision making.',
									features: [
										'Executive summary reports',
										'KPI dashboards',
										'Variance analysis',
										'Board presentation materials',
									],
								},
								{
									icon: <Building className='h-8 w-8' />,
									title: 'Corporate Tax Planning',
									description:
										"Strategic tax planning and compliance for Dublin's corporate entities.",
									features: [
										'Corporate tax returns',
										'Multi-state compliance',
										'Tax strategy planning',
										'Audit support',
									],
								},
								{
									icon: <Calculator className='h-8 w-8' />,
									title: 'Investment & Asset Management',
									description:
										'Sophisticated tracking for businesses with complex investment portfolios.',
									features: [
										'Investment tracking',
										'Asset depreciation',
										'Portfolio reporting',
										'Capital gains analysis',
									],
								},
							].map((service, index) => (
								<Card
									key={index}
									className='h-full border-2 hover:border-primary/20 transition-colors'>
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

			{/* Dublin Success Stories */}
			<section className='py-16'>
				<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='max-w-4xl mx-auto'>
						<div className='text-center mb-12'>
							<h2 className='text-3xl sm:text-4xl font-bold mb-4'>
								Dublin Business Success Stories
							</h2>
							<p className='text-xl text-muted-foreground'>
								Trusted by Dublin's most successful companies
							</p>
						</div>

						<div className='grid md:grid-cols-2 gap-8'>
							<Card className='border-2'>
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
										"Ray transformed our Dublin consulting
										firm's financial reporting. His
										executive-level insights and
										professional presentation helped us
										secure our largest client contract to
										date."
									</p>
									<div className='flex items-center'>
										<div className='w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center mr-3'>
											<span className='text-primary font-semibold text-sm'>
												CW
											</span>
										</div>
										<div>
											<p className='font-semibold text-sm'>
												Catherine Williams
											</p>
											<p className='text-xs text-muted-foreground'>
												Williams Strategy Group, Dublin
												OH
											</p>
										</div>
									</div>
								</CardContent>
							</Card>

							<Card className='border-2'>
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
										"As a Dublin tech company preparing for
										acquisition, we needed pristine
										financials. Ray's attention to detail
										and investor-ready reporting was
										instrumental in our successful exit."
									</p>
									<div className='flex items-center'>
										<div className='w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center mr-3'>
											<span className='text-primary font-semibold text-sm'>
												JS
											</span>
										</div>
										<div>
											<p className='font-semibold text-sm'>
												James Sullivan
											</p>
											<p className='text-xs text-muted-foreground'>
												DataFlow Technologies, Dublin OH
											</p>
										</div>
									</div>
								</CardContent>
							</Card>
						</div>
					</div>
				</div>
			</section>

			{/* Dublin Business Districts */}
			<section className='py-16 bg-gray-50'>
				<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='max-w-4xl mx-auto'>
						<div className='text-center mb-12'>
							<h2 className='text-3xl font-bold mb-4'>
								Serving All Dublin Business Districts
							</h2>
							<p className='text-muted-foreground'>
								Professional bookkeeping services throughout
								Dublin, Ohio
							</p>
						</div>

						<div className='grid md:grid-cols-2 gap-8'>
							<Card>
								<CardContent className='pt-6'>
									<Building className='h-8 w-8 text-primary mb-4' />
									<h3 className='font-semibold mb-3'>
										Corporate Districts
									</h3>
									<ul className='space-y-2 text-sm text-muted-foreground'>
										<li>• Bridge Street District</li>
										<li>• Metro Place</li>
										<li>• Tuttle Crossing Area</li>
										<li>• Emerald Corporate Center</li>
										<li>• Dublin Corporate Woods</li>
									</ul>
								</CardContent>
							</Card>

							<Card>
								<CardContent className='pt-6'>
									<Home className='h-8 w-8 text-primary mb-4' />
									<h3 className='font-semibold mb-3'>
										Residential Business Areas
									</h3>
									<ul className='space-y-2 text-sm text-muted-foreground'>
										<li>• Historic Dublin</li>
										<li>• Riverside Drive Corridor</li>
										<li>• Avery Road Business District</li>
										<li>• Dublin Village Center</li>
										<li>• Sawmill Road Corridor</li>
									</ul>
								</CardContent>
							</Card>
						</div>
					</div>
				</div>
			</section>

			{/* Premium CTA */}
			<section className='py-16 bg-gradient-to-br from-primary/5 to-primary/10'>
				<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='max-w-6xl mx-auto'>
						<div className='grid lg:grid-cols-2 gap-12 items-center'>
							<div>
								<h2 className='text-3xl sm:text-4xl font-bold mb-6'>
									Ready to Experience
									<br />
									<span className='text-primary'>
										Dublin's Premier Bookkeeping Service?
									</span>
								</h2>

								<p className='text-xl text-muted-foreground mb-8'>
									Join Dublin's most successful businesses who
									trust Ray with their financial management.
									From startups to established corporations,
									experience the difference that professional
									expertise makes.
								</p>

								<div className='space-y-4 mb-8'>
									<div className='flex items-center gap-3'>
										<Award className='h-5 w-5 text-primary' />
										<div>
											<p className='font-semibold'>
												QuickBooks ProAdvisor Certified
											</p>
											<p className='text-sm text-muted-foreground'>
												Advanced QuickBooks expertise
											</p>
										</div>
									</div>
									<div className='flex items-center gap-3'>
										<Users className='h-5 w-5 text-primary' />
										<div>
											<p className='font-semibold'>
												40+ Dublin Clients Served
											</p>
											<p className='text-sm text-muted-foreground'>
												Proven track record of success
											</p>
										</div>
									</div>
									<div className='flex items-center gap-3'>
										<Clock className='h-5 w-5 text-primary' />
										<div>
											<p className='font-semibold'>
												Same-Day Response Guarantee
											</p>
											<p className='text-sm text-muted-foreground'>
												When your business can't wait
											</p>
										</div>
									</div>
								</div>

								<div className='flex flex-col sm:flex-row gap-4'>
									<CalendlyModal
										buttonText='Schedule Executive Consultation'
										buttonSize='lg'
										buttonClassName='flex-1 sm:flex-none px-8 py-6 text-lg'
									/>
									<Button
										variant='outline'
										size='lg'
										className='px-8 py-6 text-lg'
										asChild>
										<Link href='/free-guide'>
											Get Executive Guide
										</Link>
									</Button>
								</div>
							</div>

							<div>
								<LeadMagnetForm
									title='Executive Financial Guide for Dublin Businesses'
									description='"7 Advanced Financial Strategies for Professional Services"'
									buttonText='Download Executive Guide'
									variant='default'
								/>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Dublin Business Resources */}
			<section className='py-16 bg-white'>
				<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='max-w-4xl mx-auto'>
						<div className='text-center mb-12'>
							<h2 className='text-3xl font-bold mb-4'>
								Dublin Business Resources
							</h2>
							<p className='text-muted-foreground'>
								Essential resources for Dublin, Ohio business
								owners
							</p>
						</div>

						<div className='grid md:grid-cols-2 gap-6'>
							<Card>
								<CardContent className='pt-6'>
									<h3 className='font-semibold mb-2'>
										City of Dublin Economic Development
									</h3>
									<p className='text-sm text-muted-foreground mb-3'>
										Business incentives, development
										opportunities, and municipal services
									</p>
									<a
										href='https://dublinohiousa.gov'
										target='_blank'
										rel='noopener noreferrer'
										className='text-primary text-sm hover:underline'>
										Visit dublinohiousa.gov →
									</a>
								</CardContent>
							</Card>

							<Card>
								<CardContent className='pt-6'>
									<h3 className='font-semibold mb-2'>
										Dublin Chamber of Commerce
									</h3>
									<p className='text-sm text-muted-foreground mb-3'>
										Networking events, business advocacy,
										and professional development
									</p>
									<a
										href='#'
										className='text-primary text-sm hover:underline'>
										Chamber membership →
									</a>
								</CardContent>
							</Card>

							<Card>
								<CardContent className='pt-6'>
									<h3 className='font-semibold mb-2'>
										Ohio SCORE Dublin
									</h3>
									<p className='text-sm text-muted-foreground mb-3'>
										Free business mentoring and educational
										workshops
									</p>
									<a
										href='https://dublin.score.org'
										target='_blank'
										rel='noopener noreferrer'
										className='text-primary text-sm hover:underline'>
										SCORE Dublin chapter →
									</a>
								</CardContent>
							</Card>

							<Card>
								<CardContent className='pt-6'>
									<h3 className='font-semibold mb-2'>
										Dublin Professional Networks
									</h3>
									<p className='text-sm text-muted-foreground mb-3'>
										Connect with Dublin's professional
										service providers
									</p>
									<span className='text-primary text-sm'>
										Contact Ray for introductions
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
