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
} from 'lucide-react';

export const metadata = {
	title: 'Columbus Ohio Bookkeeping Services | QuickBooks Expert | Ray Galloway',
	description:
		'Professional bookkeeping services for Columbus, OH businesses. QuickBooks ProAdvisor with 10+ years experience. Serving downtown Columbus to suburban areas.',
	keywords:
		'bookkeeping Columbus Ohio, QuickBooks Columbus OH, accountant Columbus Ohio, small business bookkeeping Columbus, financial services Columbus OH',
};

export default function ColumbusServices() {
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
								COLUMBUS, OHIO
							</span>
						</div>

						<h1 className='text-4xl sm:text-5xl font-bold mb-6'>
							Expert Bookkeeping Services for
							<br />
							<span className='text-primary'>
								Columbus, Ohio Businesses
							</span>
						</h1>

						<p className='text-xl text-muted-foreground mb-8 max-w-3xl mx-auto'>
							From downtown Columbus to the suburban business
							districts, Ray Galloway provides professional
							QuickBooks bookkeeping services to help your
							business thrive in Central Ohio's competitive
							market.
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

						{/* Columbus Stats */}
						<div className='grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto'>
							<div className='text-center'>
								<div className='text-2xl font-bold text-primary'>
									75+
								</div>
								<div className='text-sm text-muted-foreground'>
									Columbus Clients
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
									5.0★
								</div>
								<div className='text-sm text-muted-foreground'>
									Client Rating
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

			{/* Columbus Business Expertise */}
			<section className='py-16'>
				<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='max-w-6xl mx-auto'>
						<div className='text-center mb-12'>
							<h2 className='text-3xl sm:text-4xl font-bold mb-4'>
								Why Columbus Businesses Trust Ray
							</h2>
							<p className='text-xl text-muted-foreground'>
								Local expertise for Central Ohio's diverse
								business landscape
							</p>
						</div>

						<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
							<Card>
								<CardContent className='pt-6'>
									<Building className='h-12 w-12 text-primary mb-4' />
									<h3 className='font-bold mb-2'>
										Columbus Market Knowledge
									</h3>
									<p className='text-sm text-muted-foreground'>
										Deep understanding of Columbus business
										environment, from downtown corporations
										to suburban service businesses in
										Grandview, Clintonville, and beyond.
									</p>
								</CardContent>
							</Card>

							<Card>
								<CardContent className='pt-6'>
									<Briefcase className='h-12 w-12 text-primary mb-4' />
									<h3 className='font-bold mb-2'>
										Diverse Industry Experience
									</h3>
									<p className='text-sm text-muted-foreground'>
										Worked with Columbus businesses across
										industries: professional services,
										healthcare, restaurants, retail, and
										technology startups.
									</p>
								</CardContent>
							</Card>

							<Card>
								<CardContent className='pt-6'>
									<Users className='h-12 w-12 text-primary mb-4' />
									<h3 className='font-bold mb-2'>
										Central Ohio Network
									</h3>
									<p className='text-sm text-muted-foreground'>
										Strong relationships with Columbus area
										banks, attorneys, CPAs, and business
										advisors. Connected to the local
										business community.
									</p>
								</CardContent>
							</Card>

							<Card>
								<CardContent className='pt-6'>
									<Clock className='h-12 w-12 text-primary mb-4' />
									<h3 className='font-bold mb-2'>
										Flexible Service Options
									</h3>
									<p className='text-sm text-muted-foreground'>
										Remote services for efficiency, with
										in-person meetings available throughout
										the Columbus metro area when needed.
									</p>
								</CardContent>
							</Card>

							<Card>
								<CardContent className='pt-6'>
									<TrendingUp className='h-12 w-12 text-primary mb-4' />
									<h3 className='font-bold mb-2'>
										Growth-Focused Approach
									</h3>
									<p className='text-sm text-muted-foreground'>
										Understand Columbus's dynamic business
										growth. Help scale your financial
										systems as your business expands in
										Central Ohio.
									</p>
								</CardContent>
							</Card>

							<Card>
								<CardContent className='pt-6'>
									<Shield className='h-12 w-12 text-primary mb-4' />
									<h3 className='font-bold mb-2'>
										Ohio Tax Expertise
									</h3>
									<p className='text-sm text-muted-foreground'>
										Specialized knowledge of Ohio state tax
										requirements, Columbus city tax
										implications, and multi-jurisdiction
										compliance.
									</p>
								</CardContent>
							</Card>
						</div>
					</div>
				</div>
			</section>

			{/* Columbus-Specific Services */}
			<section className='py-16 bg-gray-50'>
				<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='max-w-6xl mx-auto'>
						<div className='text-center mb-12'>
							<h2 className='text-3xl sm:text-4xl font-bold mb-4'>
								Specialized Services for Columbus Businesses
							</h2>
							<p className='text-xl text-muted-foreground'>
								Tailored solutions for Central Ohio's business
								community
							</p>
						</div>

						<div className='grid md:grid-cols-2 gap-8'>
							{[
								{
									icon: <Building className='h-8 w-8' />,
									title: 'Multi-Location Business Management',
									description:
										'Perfect for Columbus businesses with multiple locations across Central Ohio.',
									features: [
										'Consolidated reporting',
										'Location-specific P&L',
										'Inter-company transactions',
										'Franchise accounting',
									],
								},
								{
									icon: <Users className='h-8 w-8' />,
									title: 'Professional Services Bookkeeping',
									description:
										"Specialized support for Columbus's thriving professional services sector.",
									features: [
										'Project-based accounting',
										'Time & billing integration',
										'Client retainer management',
										'Professional liability tracking',
									],
								},
								{
									icon: <TrendingUp className='h-8 w-8' />,
									title: 'Startup & Scale-up Support',
									description:
										'Help Columbus startups build solid financial foundations for growth.',
									features: [
										'Investor reporting',
										'Burn rate analysis',
										'Funding preparation',
										'Scalable systems setup',
									],
								},
								{
									icon: <Calculator className='h-8 w-8' />,
									title: 'Restaurant & Hospitality',
									description:
										"Specialized accounting for Columbus's vibrant food and hospitality scene.",
									features: [
										'Cost of goods tracking',
										'Tip reporting',
										'Inventory management',
										'Multi-revenue stream handling',
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

			{/* Columbus Business Success Stories */}
			<section className='py-16'>
				<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='max-w-4xl mx-auto'>
						<div className='text-center mb-12'>
							<h2 className='text-3xl sm:text-4xl font-bold mb-4'>
								Columbus Business Success Stories
							</h2>
							<p className='text-xl text-muted-foreground'>
								Real results from Central Ohio businesses
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
										"Ray helped us scale from one Columbus
										location to three across Central Ohio.
										His multi-location expertise and
										understanding of Ohio tax requirements
										saved us from major compliance issues."
									</p>
									<div className='flex items-center'>
										<div className='w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center mr-3'>
											<span className='text-primary font-semibold text-sm'>
												MR
											</span>
										</div>
										<div>
											<p className='font-semibold text-sm'>
												Maria Rodriguez
											</p>
											<p className='text-xs text-muted-foreground'>
												Rodriguez Restaurants, Columbus
												OH
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
										"As a Columbus tech startup, we needed
										someone who understood both traditional
										accounting and modern business models.
										Ray's expertise helped us prepare for
										Series A funding."
									</p>
									<div className='flex items-center'>
										<div className='w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center mr-3'>
											<span className='text-primary font-semibold text-sm'>
												DK
											</span>
										</div>
										<div>
											<p className='font-semibold text-sm'>
												David Kim
											</p>
											<p className='text-xs text-muted-foreground'>
												TechFlow Solutions, Columbus OH
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
										"Ray's knowledge of Columbus's business
										landscape is incredible. He connected us
										with the right bank and helped navigate
										city requirements for our downtown
										expansion."
									</p>
									<div className='flex items-center'>
										<div className='w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center mr-3'>
											<span className='text-primary font-semibold text-sm'>
												AB
											</span>
										</div>
										<div>
											<p className='font-semibold text-sm'>
												Amanda Brown
											</p>
											<p className='text-xs text-muted-foreground'>
												Brown & Associates Law, Columbus
												OH
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
										"Working with Ray transformed our
										Columbus medical practice's finances.
										His healthcare industry knowledge and
										attention to compliance details gave us
										complete peace of mind."
									</p>
									<div className='flex items-center'>
										<div className='w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center mr-3'>
											<span className='text-primary font-semibold text-sm'>
												TP
											</span>
										</div>
										<div>
											<p className='font-semibold text-sm'>
												Dr. Thomas Parker
											</p>
											<p className='text-xs text-muted-foreground'>
												Parker Family Medicine, Columbus
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

			{/* Service Areas in Columbus */}
			<section className='py-16 bg-gray-50'>
				<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='max-w-4xl mx-auto'>
						<div className='text-center mb-12'>
							<h2 className='text-3xl font-bold mb-4'>
								Serving All Columbus Area Neighborhoods
							</h2>
							<p className='text-muted-foreground'>
								Professional bookkeeping services throughout
								Central Ohio
							</p>
						</div>

						<div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
							{[
								'Downtown Columbus',
								'Short North',
								'German Village',
								'Grandview Heights',
								'Clintonville',
								'Bexley',
								'Upper Arlington',
								'Hilliard',
								'Grove City',
								'Reynoldsburg',
								'Gahanna',
								'Pickerington',
								'New Albany',
								'Lewis Center',
								'Powell',
								'Dublin',
							].map((area, index) => (
								<div
									key={index}
									className='bg-white rounded-lg p-4 text-center shadow-sm'>
									<p className='text-sm font-medium'>
										{area}
									</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* Columbus CTA */}
			<section className='py-16 bg-gradient-to-br from-primary/5 to-primary/10'>
				<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='max-w-6xl mx-auto'>
						<div className='grid lg:grid-cols-2 gap-12 items-center'>
							<div>
								<h2 className='text-3xl sm:text-4xl font-bold mb-6'>
									Ready to Partner with Columbus's
									<br />
									<span className='text-primary'>
										Most Trusted Bookkeeping Expert?
									</span>
								</h2>

								<p className='text-xl text-muted-foreground mb-8'>
									Join 75+ Columbus area businesses that rely
									on Ray for professional financial
									management. From startups to established
									companies, get the expertise you need to
									thrive in Central Ohio.
								</p>

								<div className='space-y-4 mb-8'>
									<div className='flex items-center gap-3'>
										<Phone className='h-5 w-5 text-primary' />
										<div>
											<p className='font-semibold'>
												(555) 123-4567
											</p>
											<p className='text-sm text-muted-foreground'>
												Serving all Columbus metro areas
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
												Quick response guaranteed
											</p>
										</div>
									</div>
									<div className='flex items-center gap-3'>
										<MapPin className='h-5 w-5 text-primary' />
										<div>
											<p className='font-semibold'>
												Serving Greater Columbus Area
											</p>
											<p className='text-sm text-muted-foreground'>
												Remote & in-person options
												available
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
											Get Free Business Guide
										</Link>
									</Button>
								</div>
							</div>

							<div>
								<LeadMagnetForm
									title='Get Your Free Columbus Business Guide'
									description='"7 Financial Tricks for Central Ohio Service Businesses"'
									buttonText='Download Free Guide'
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
