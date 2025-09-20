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
	Crown,
} from 'lucide-react';

export const metadata = {
	title: 'New Albany Ohio Bookkeeping Services | Executive Financial Management',
	description:
		'Premium bookkeeping services for New Albany, OH businesses. Serving executives, entrepreneurs, and high-growth companies with sophisticated financial management.',
	keywords:
		'bookkeeping New Albany Ohio, QuickBooks New Albany OH, executive bookkeeping, high-net-worth financial services, New Albany business accounting',
};

export default function NewAlbanyServices() {
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
								NEW ALBANY, OHIO
							</span>
						</div>

						<h1 className='text-4xl sm:text-5xl font-bold mb-6'>
							Executive-Level Bookkeeping for
							<br />
							<span className='text-primary'>
								New Albany, Ohio Businesses
							</span>
						</h1>

						<p className='text-xl text-muted-foreground mb-8 max-w-3xl mx-auto'>
							Serving New Albany's distinguished business
							community with premium QuickBooks bookkeeping
							services. From Market Street to the New Albany
							Country Club area, providing sophisticated financial
							management for discerning business owners.
						</p>

						<div className='max-w-4xl mx-auto mb-8 p-6 bg-white/80 rounded-lg shadow-sm'>
							<p className='text-muted-foreground leading-relaxed'>
								New Albany represents the pinnacle of
								master-planned community development, and I've
								had the privilege of serving its distinguished
								business community for years. From the
								Georgian-style architecture that defines the
								Market Square area to the corporate headquarters
								in the New Albany International Business Park, I
								understand the sophisticated financial needs of
								this unique community. I've worked with
								executives from companies near the Jeanne B.
								McCoy Community Center for the Arts, where I've
								attended numerous cultural events that showcase
								New Albany's commitment to enriching the lives
								of its residents. Whether your business is
								located near the prestigious New Albany Country
								Club, along the extensive network of leisure
								trails that connect every neighborhood, or in
								one of the newer developments near Central
								College Road, I appreciate the high standards
								and attention to detail that New Albany
								businesses expect. Having helped clients
								navigate everything from the New Albany Farmers
								Market vendors to Fortune 500 executives, I
								understand that this community demands nothing
								less than executive-level service, and that's
								exactly what I deliver - with the discretion and
								professionalism that matches New Albany's
								refined character.
							</p>
						</div>

						<div className='flex flex-col sm:flex-row gap-4 justify-center mb-12'>
							<CalendlyModal
								buttonText='Schedule Executive Consultation'
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

						{/* New Albany Stats */}
						<div className='grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto'>
							<div className='text-center'>
								<div className='text-2xl font-bold text-primary'>
									25+
								</div>
								<div className='text-sm text-muted-foreground'>
									New Albany Clients
								</div>
							</div>
							<div className='text-center'>
								<div className='text-2xl font-bold text-primary'>
									$50M+
								</div>
								<div className='text-sm text-muted-foreground'>
									Assets Managed
								</div>
							</div>
							<div className='text-center'>
								<div className='text-2xl font-bold text-primary'>
									100%
								</div>
								<div className='text-sm text-muted-foreground'>
									Client Satisfaction
								</div>
							</div>
							<div className='text-center'>
								<div className='text-2xl font-bold text-primary'>
									2hr
								</div>
								<div className='text-sm text-muted-foreground'>
									Response Time
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Why New Albany Executives Choose Ray */}
			<section className='py-16'>
				<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='max-w-6xl mx-auto'>
						<div className='text-center mb-12'>
							<h2 className='text-3xl sm:text-4xl font-bold mb-4'>
								Why New Albany Executives Choose Ray
							</h2>
							<p className='text-xl text-muted-foreground'>
								Premium service for New Albany's sophisticated
								business community
							</p>
						</div>

						<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
							<Card className='border-2 hover:border-primary/20 transition-colors'>
								<CardContent className='pt-6'>
									<Crown className='h-12 w-12 text-primary mb-4' />
									<h3 className='font-bold mb-2'>
										Executive-Level Service
									</h3>
									<p className='text-sm text-muted-foreground'>
										White-glove financial management that
										meets the high standards expected by New
										Albany's executive and entrepreneurial
										community.
									</p>
								</CardContent>
							</Card>

							<Card className='border-2 hover:border-primary/20 transition-colors'>
								<CardContent className='pt-6'>
									<Briefcase className='h-12 w-12 text-primary mb-4' />
									<h3 className='font-bold mb-2'>
										High-Net-Worth Expertise
									</h3>
									<p className='text-sm text-muted-foreground'>
										Specialized experience managing complex
										financial structures, multiple entities,
										and sophisticated investment portfolios
										common in New Albany.
									</p>
								</CardContent>
							</Card>

							<Card className='border-2 hover:border-primary/20 transition-colors'>
								<CardContent className='pt-6'>
									<Building className='h-12 w-12 text-primary mb-4' />
									<h3 className='font-bold mb-2'>
										Corporate Headquarters Support
									</h3>
									<p className='text-sm text-muted-foreground'>
										Understanding of New Albany's role as a
										corporate headquarters hub, with
										expertise in multi-location and
										subsidiary management.
									</p>
								</CardContent>
							</Card>

							<Card className='border-2 hover:border-primary/20 transition-colors'>
								<CardContent className='pt-6'>
									<Shield className='h-12 w-12 text-primary mb-4' />
									<h3 className='font-bold mb-2'>
										Confidentiality & Discretion
									</h3>
									<p className='text-sm text-muted-foreground'>
										Absolute confidentiality and
										professional discretion in handling
										sensitive financial information for
										high-profile clients.
									</p>
								</CardContent>
							</Card>

							<Card className='border-2 hover:border-primary/20 transition-colors'>
								<CardContent className='pt-6'>
									<TrendingUp className='h-12 w-12 text-primary mb-4' />
									<h3 className='font-bold mb-2'>
										Strategic Financial Planning
									</h3>
									<p className='text-sm text-muted-foreground'>
										Beyond bookkeeping - strategic financial
										insights that support wealth building
										and business expansion goals.
									</p>
								</CardContent>
							</Card>

							<Card className='border-2 hover:border-primary/20 transition-colors'>
								<CardContent className='pt-6'>
									<Users className='h-12 w-12 text-primary mb-4' />
									<h3 className='font-bold mb-2'>
										Elite Professional Network
									</h3>
									<p className='text-sm text-muted-foreground'>
										Connections with New Albany's top
										attorneys, wealth managers, and business
										advisors for comprehensive support.
									</p>
								</CardContent>
							</Card>
						</div>
					</div>
				</div>
			</section>

			{/* Premium Services */}
			<section className='py-16 bg-gray-50'>
				<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='max-w-6xl mx-auto'>
						<div className='text-center mb-12'>
							<h2 className='text-3xl sm:text-4xl font-bold mb-4'>
								Premium Financial Services for New Albany
							</h2>
							<p className='text-xl text-muted-foreground'>
								Sophisticated solutions for sophisticated
								businesses
							</p>
						</div>

						<div className='grid md:grid-cols-2 gap-8'>
							{[
								{
									icon: <Crown className='h-8 w-8' />,
									title: 'Executive Financial Management',
									description:
										'Comprehensive financial oversight for executives and high-net-worth business owners.',
									features: [
										'Multi-entity consolidation',
										'Executive compensation tracking',
										'Board-ready financial reports',
										'Strategic financial analysis',
									],
								},
								{
									icon: <Building className='h-8 w-8' />,
									title: 'Corporate Headquarters Support',
									description:
										'Specialized services for New Albany corporate headquarters and holding companies.',
									features: [
										'Subsidiary management',
										'Intercompany transactions',
										'Consolidated reporting',
										'Corporate compliance',
									],
								},
								{
									icon: <TrendingUp className='h-8 w-8' />,
									title: 'Investment & Portfolio Tracking',
									description:
										'Sophisticated tracking and reporting for complex investment portfolios.',
									features: [
										'Investment performance tracking',
										'Capital gains/loss reporting',
										'Portfolio diversification analysis',
										'Tax-loss harvesting support',
									],
								},
								{
									icon: <Shield className='h-8 w-8' />,
									title: 'Wealth Preservation Planning',
									description:
										'Strategic financial planning focused on wealth preservation and tax optimization.',
									features: [
										'Tax strategy optimization',
										'Estate planning support',
										'Trust accounting',
										'Succession planning',
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

			{/* New Albany Success Stories */}
			<section className='py-16'>
				<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='max-w-4xl mx-auto'>
						<div className='text-center mb-12'>
							<h2 className='text-3xl sm:text-4xl font-bold mb-4'>
								New Albany Executive Success Stories
							</h2>
							<p className='text-xl text-muted-foreground'>
								Trusted by New Albany's business leaders
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
										"Ray's executive-level service and
										discretion are exactly what we needed
										for our New Albany headquarters. His
										sophisticated approach to multi-entity
										management saved us significant time and
										money."
									</p>
									<div className='flex items-center'>
										<div className='w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center mr-3'>
											<span className='text-primary font-semibold text-sm'>
												RH
											</span>
										</div>
										<div>
											<p className='font-semibold text-sm'>
												Robert Harrison
											</p>
											<p className='text-xs text-muted-foreground'>
												Harrison Holdings, New Albany OH
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
										"As a New Albany entrepreneur with
										multiple ventures, I needed someone who
										could handle complexity with
										sophistication. Ray's strategic insights
										have been invaluable for our growth."
									</p>
									<div className='flex items-center'>
										<div className='w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center mr-3'>
											<span className='text-primary font-semibold text-sm'>
												EL
											</span>
										</div>
										<div>
											<p className='font-semibold text-sm'>
												Elizabeth Lancaster
											</p>
											<p className='text-xs text-muted-foreground'>
												Lancaster Ventures, New Albany
												OH
											</p>
										</div>
									</div>
								</CardContent>
							</Card>
						</div>
					</div>
				</div>
			</section>

			{/* New Albany Areas */}
			<section className='py-16 bg-gray-50'>
				<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='max-w-4xl mx-auto'>
						<div className='text-center mb-12'>
							<h2 className='text-3xl font-bold mb-4'>
								Serving New Albany's Premier Business Districts
							</h2>
							<p className='text-muted-foreground'>
								Executive bookkeeping services throughout New
								Albany, Ohio
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
										<li>
											• Market Street Corporate Center
										</li>
										<li>• New Albany Business Park</li>
										<li>• Innovation Campus</li>
										<li>• Central College Road</li>
										<li>• Bevelhymer Road Corridor</li>
									</ul>
								</CardContent>
							</Card>

							<Card>
								<CardContent className='pt-6'>
									<Home className='h-8 w-8 text-primary mb-4' />
									<h3 className='font-semibold mb-3'>
										Executive Residential Areas
									</h3>
									<ul className='space-y-2 text-sm text-muted-foreground'>
										<li>• New Albany Country Club</li>
										<li>• Fenway</li>
										<li>• The Golf Club</li>
										<li>• Forest Park</li>
										<li>• Wexford</li>
									</ul>
								</CardContent>
							</Card>
						</div>
					</div>
				</div>
			</section>

			{/* Executive CTA */}
			<section className='py-16 bg-gradient-to-br from-primary/5 to-primary/10'>
				<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='max-w-6xl mx-auto'>
						<div className='grid lg:grid-cols-2 gap-12 items-center'>
							<div>
								<h2 className='text-3xl sm:text-4xl font-bold mb-6'>
									Ready for Executive-Level
									<br />
									<span className='text-primary'>
										Financial Management?
									</span>
								</h2>

								<p className='text-xl text-muted-foreground mb-8'>
									Join New Albany's most successful executives
									and entrepreneurs who trust Ray with their
									sophisticated financial management needs.
									Experience the difference that premium
									service makes.
								</p>

								<div className='space-y-4 mb-8'>
									<div className='flex items-center gap-3'>
										<Crown className='h-5 w-5 text-primary' />
										<div>
											<p className='font-semibold'>
												Executive-Level Service
											</p>
											<p className='text-sm text-muted-foreground'>
												White-glove financial management
											</p>
										</div>
									</div>
									<div className='flex items-center gap-3'>
										<Shield className='h-5 w-5 text-primary' />
										<div>
											<p className='font-semibold'>
												Complete Confidentiality
											</p>
											<p className='text-sm text-muted-foreground'>
												Absolute discretion guaranteed
											</p>
										</div>
									</div>
									<div className='flex items-center gap-3'>
										<Clock className='h-5 w-5 text-primary' />
										<div>
											<p className='font-semibold'>
												Priority Response
											</p>
											<p className='text-sm text-muted-foreground'>
												2-hour response time
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
											Executive Financial Guide
										</Link>
									</Button>
								</div>
							</div>

							<div>
								<LeadMagnetForm
									title='Executive Financial Management Guide'
									description='"7 Wealth-Building Strategies for New Albany Executives"'
									buttonText='Download Executive Guide'
									variant='default'
								/>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
