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
	Heart,
} from 'lucide-react';

export const metadata = {
	title: 'Gahanna Ohio Bookkeeping Services | Community-Focused Financial Management',
	description:
		'Professional bookkeeping services for Gahanna, OH businesses. Local QuickBooks expert serving the Gahanna community with personalized financial management.',
	keywords:
		'bookkeeping Gahanna Ohio, QuickBooks Gahanna OH, accountant Gahanna Ohio, small business bookkeeping Gahanna, community business financial services',
};

export default function GahannaServices() {
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
								GAHANNA, OHIO
							</span>
						</div>

						<h1 className='text-4xl sm:text-5xl font-bold mb-6'>
							Community-Focused Bookkeeping for
							<br />
							<span className='text-primary'>
								Gahanna, Ohio Businesses
							</span>
						</h1>

						<p className='text-xl text-muted-foreground mb-8 max-w-3xl mx-auto'>
							Serving Gahanna's vibrant business community with
							personalized QuickBooks bookkeeping services. From
							Old Gahanna to Creekside, supporting local
							businesses with the financial management they need
							to thrive.
						</p>

						<div className='max-w-4xl mx-auto mb-8 p-6 bg-white/80 rounded-lg shadow-sm'>
							<p className='text-muted-foreground leading-relaxed'>
								Gahanna holds a special place in my heart as the
								"Herb Capital of Ohio," and I've been deeply
								involved in this community's business landscape
								for years. From the charming Ohio Herb Center
								where I've learned about the city's unique
								herbal heritage and attended workshops, to the
								bustling Creekside District with its scenic
								views of Big Walnut Creek, I understand what
								makes Gahanna businesses tick. I've had the
								pleasure of working with clients who participate
								in the annual Creekside Blues & Jazz Festival,
								and I've seen firsthand how this community comes
								together to support local enterprises. Whether
								your business is nestled in Old Gahanna with its
								historic charm, located near the Gahanna Woods
								State Nature Preserve where many of my clients
								enjoy hiking, or part of the vibrant commercial
								areas along Hamilton Road and Granville Street,
								I appreciate the strong community spirit that
								defines this city. I've helped businesses
								navigate the seasonal fluctuations that come
								with Gahanna's tourism and event calendar, and I
								understand the unique opportunities that arise
								from being perfectly positioned between
								Columbus's urban amenities and the natural
								beauty of Big Walnut Creek - it's this blend of
								community focus and business acumen that makes
								Gahanna such a wonderful place to work and grow
								a business.
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

						{/* Gahanna Stats */}
						<div className='grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto'>
							<div className='text-center'>
								<div className='text-2xl font-bold text-primary'>
									30+
								</div>
								<div className='text-sm text-muted-foreground'>
									Gahanna Clients
								</div>
							</div>
							<div className='text-center'>
								<div className='text-2xl font-bold text-primary'>
									7+
								</div>
								<div className='text-sm text-muted-foreground'>
									Years in Community
								</div>
							</div>
							<div className='text-center'>
								<div className='text-2xl font-bold text-primary'>
									5.0★
								</div>
								<div className='text-sm text-muted-foreground'>
									Community Rating
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

			{/* Why Gahanna Businesses Choose Ray */}
			<section className='py-16'>
				<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='max-w-6xl mx-auto'>
						<div className='text-center mb-12'>
							<h2 className='text-3xl sm:text-4xl font-bold mb-4'>
								Why Gahanna Businesses Choose Ray
							</h2>
							<p className='text-xl text-muted-foreground'>
								Community-focused service for Gahanna's local
								business owners
							</p>
						</div>

						<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
							<Card>
								<CardContent className='pt-6'>
									<Heart className='h-12 w-12 text-primary mb-4' />
									<h3 className='font-bold mb-2'>
										Community Connection
									</h3>
									<p className='text-sm text-muted-foreground'>
										Deep roots in the Gahanna community,
										understanding local business culture and
										supporting the growth of neighborhood
										enterprises.
									</p>
								</CardContent>
							</Card>

							<Card>
								<CardContent className='pt-6'>
									<Home className='h-12 w-12 text-primary mb-4' />
									<h3 className='font-bold mb-2'>
										Local Business Expertise
									</h3>
									<p className='text-sm text-muted-foreground'>
										Specialized experience with Gahanna's
										diverse business mix, from Old Gahanna
										shops to Creekside developments and
										everything in between.
									</p>
								</CardContent>
							</Card>

							<Card>
								<CardContent className='pt-6'>
									<Users className='h-12 w-12 text-primary mb-4' />
									<h3 className='font-bold mb-2'>
										Personal Relationships
									</h3>
									<p className='text-sm text-muted-foreground'>
										Building lasting relationships with
										Gahanna business owners, providing
										personalized service that larger firms
										can't match.
									</p>
								</CardContent>
							</Card>

							<Card>
								<CardContent className='pt-6'>
									<Clock className='h-12 w-12 text-primary mb-4' />
									<h3 className='font-bold mb-2'>
										Accessible & Responsive
									</h3>
									<p className='text-sm text-muted-foreground'>
										Always available for Gahanna clients
										with quick response times and flexible
										meeting options throughout the
										community.
									</p>
								</CardContent>
							</Card>

							<Card>
								<CardContent className='pt-6'>
									<Shield className='h-12 w-12 text-primary mb-4' />
									<h3 className='font-bold mb-2'>
										Local Tax Knowledge
									</h3>
									<p className='text-sm text-muted-foreground'>
										Expert understanding of Ohio tax
										requirements, Franklin County
										regulations, and Gahanna-specific
										business considerations.
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
										Committed to Gahanna's economic growth,
										supporting local businesses and
										contributing to the community's
										prosperity.
									</p>
								</CardContent>
							</Card>
						</div>
					</div>
				</div>
			</section>

			{/* Gahanna Business Services */}
			<section className='py-16 bg-gray-50'>
				<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='max-w-6xl mx-auto'>
						<div className='text-center mb-12'>
							<h2 className='text-3xl sm:text-4xl font-bold mb-4'>
								Bookkeeping Services for Gahanna Businesses
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
									title: 'Small Business Bookkeeping',
									description:
										'Complete monthly bookkeeping services designed for Gahanna small businesses and local entrepreneurs.',
									features: [
										'Monthly financial statements',
										'Bank reconciliation',
										'Expense categorization',
										'QuickBooks setup & training',
									],
								},
								{
									icon: <Home className='h-8 w-8' />,
									title: 'Retail & Restaurant Support',
									description:
										'Specialized accounting for Gahanna retail shops, restaurants, and hospitality businesses.',
									features: [
										'Daily sales tracking',
										'Inventory management',
										'Cost of goods sold',
										'Seasonal business planning',
									],
								},
								{
									icon: <Briefcase className='h-8 w-8' />,
									title: 'Service Business Management',
									description:
										'Tailored bookkeeping for Gahanna service providers, contractors, and professional services.',
									features: [
										'Job costing',
										'Project profitability',
										'Client billing support',
										'Equipment depreciation',
									],
								},
								{
									icon: <TrendingUp className='h-8 w-8' />,
									title: 'Growth & Expansion Planning',
									description:
										'Financial insights and planning to help Gahanna businesses grow and expand.',
									features: [
										'Cash flow forecasting',
										'Budget planning',
										'Growth strategy support',
										'Loan preparation',
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

			{/* Gahanna Success Stories */}
			<section className='py-16'>
				<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='max-w-4xl mx-auto'>
						<div className='text-center mb-12'>
							<h2 className='text-3xl sm:text-4xl font-bold mb-4'>
								Gahanna Business Success Stories
							</h2>
							<p className='text-xl text-muted-foreground'>
								Real results from Gahanna business owners
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
										"Ray has been instrumental in helping
										our Gahanna bakery grow from a small
										startup to a thriving community
										business. His personal approach and
										local knowledge made all the
										difference."
									</p>
									<div className='flex items-center'>
										<div className='w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center mr-3'>
											<span className='text-primary font-semibold text-sm'>
												SC
											</span>
										</div>
										<div>
											<p className='font-semibold text-sm'>
												Sarah Chen
											</p>
											<p className='text-xs text-muted-foreground'>
												Sweet Dreams Bakery, Gahanna OH
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
										"As a Gahanna contractor, I needed
										someone who understood the seasonal
										nature of my business. Ray's cash flow
										planning and tax strategies have been a
										game-changer for our family business."
									</p>
									<div className='flex items-center'>
										<div className='w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center mr-3'>
											<span className='text-primary font-semibold text-sm'>
												MJ
											</span>
										</div>
										<div>
											<p className='font-semibold text-sm'>
												Mike Johnson
											</p>
											<p className='text-xs text-muted-foreground'>
												Johnson Home Improvements,
												Gahanna OH
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
										"Ray's community focus and personal
										attention set him apart. He truly cares
										about Gahanna businesses and goes above
										and beyond to help us succeed. Highly
										recommend!"
									</p>
									<div className='flex items-center'>
										<div className='w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center mr-3'>
											<span className='text-primary font-semibold text-sm'>
												KR
											</span>
										</div>
										<div>
											<p className='font-semibold text-sm'>
												Karen Roberts
											</p>
											<p className='text-xs text-muted-foreground'>
												Gahanna Wellness Center, Gahanna
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
										Gahanna retail shop's financial
										management. His expertise in retail
										accounting and local business knowledge
										helped us optimize our operations."
									</p>
									<div className='flex items-center'>
										<div className='w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center mr-3'>
											<span className='text-primary font-semibold text-sm'>
												DL
											</span>
										</div>
										<div>
											<p className='font-semibold text-sm'>
												David Lee
											</p>
											<p className='text-xs text-muted-foreground'>
												Gahanna Gift Gallery, Gahanna OH
											</p>
										</div>
									</div>
								</CardContent>
							</Card>
						</div>
					</div>
				</div>
			</section>

			{/* Gahanna Areas Served */}
			<section className='py-16 bg-gray-50'>
				<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='max-w-4xl mx-auto'>
						<div className='text-center mb-12'>
							<h2 className='text-3xl font-bold mb-4'>
								Serving All Gahanna Business Areas
							</h2>
							<p className='text-muted-foreground'>
								Professional bookkeeping services throughout
								Gahanna, Ohio
							</p>
						</div>

						<div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
							{[
								'Old Gahanna',
								'Creekside',
								'Gahanna Woods',
								'Lincoln High School Area',
								'Granville Street',
								'Hamilton Road Corridor',
								'Morse Road Business District',
								'Big Walnut Creek Area',
								'Gahanna Municipal Airport',
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

			{/* Gahanna CTA */}
			<section className='py-16 bg-gradient-to-br from-primary/5 to-primary/10'>
				<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='max-w-6xl mx-auto'>
						<div className='grid lg:grid-cols-2 gap-12 items-center'>
							<div>
								<h2 className='text-3xl sm:text-4xl font-bold mb-6'>
									Ready to Join Gahanna's
									<br />
									<span className='text-primary'>
										Thriving Business Community?
									</span>
								</h2>

								<p className='text-xl text-muted-foreground mb-8'>
									Join 30+ Gahanna businesses that trust Ray
									with their financial management. Experience
									the personal attention and community focus
									that makes the difference for local
									businesses.
								</p>

								<div className='space-y-4 mb-8'>
									<div className='flex items-center gap-3'>
										<Phone className='h-5 w-5 text-primary' />
										<div>
											<p className='font-semibold'>
												(555) 123-4567
											</p>
											<p className='text-sm text-muted-foreground'>
												Serving all Gahanna areas
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
												Personal response guaranteed
											</p>
										</div>
									</div>
									<div className='flex items-center gap-3'>
										<MapPin className='h-5 w-5 text-primary' />
										<div>
											<p className='font-semibold'>
												Gahanna & Surrounding Areas
											</p>
											<p className='text-sm text-muted-foreground'>
												Local meetings available
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
									title='Get Your Free Gahanna Business Guide'
									description='"7 Financial Tips for Community-Focused Businesses"'
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
