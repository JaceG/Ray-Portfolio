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
	Landmark,
} from 'lucide-react';

export const metadata = {
	title: 'Westerville Ohio Bookkeeping Services | Historic District Business Support',
	description:
		'Professional bookkeeping services for Westerville, OH businesses. Supporting Uptown Westerville and surrounding business community with expert QuickBooks management.',
	keywords:
		'bookkeeping Westerville Ohio, QuickBooks Westerville OH, accountant Westerville Ohio, Uptown Westerville business, historic district bookkeeping',
};

export default function WestervilleServices() {
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
								WESTERVILLE, OHIO
							</span>
						</div>

						<h1 className='text-4xl sm:text-5xl font-bold mb-6'>
							Professional Bookkeeping for
							<br />
							<span className='text-primary'>
								Westerville, Ohio Businesses
							</span>
						</h1>

						<p className='text-xl text-muted-foreground mb-8 max-w-3xl mx-auto'>
							Serving Westerville's historic business community
							with modern QuickBooks bookkeeping services. From
							Uptown Westerville to the surrounding business
							districts, helping local enterprises achieve
							financial success.
						</p>

						<div className='max-w-4xl mx-auto mb-8 p-6 bg-white/80 rounded-lg shadow-sm'>
							<p className='text-muted-foreground leading-relaxed'>
								Westerville's rich history as the former
								headquarters of the Anti-Saloon League gives
								this community a unique character that I've come
								to deeply appreciate through years of serving
								local businesses. From the vibrant Uptown
								district with its locally-owned shops and cafes
								where I often meet clients, to the beautiful
								Otterbein University campus that brings youthful
								energy to our business community, I understand
								the delicate balance between preserving
								Westerville's historic charm and embracing
								modern growth. I've worked with businesses
								throughout the diverse neighborhoods, from the
								stately historic homes near State Street to the
								newer developments along Maxtown Road and
								Schrock Road business districts. Whether you're
								located near the scenic Alum Creek or closer to
								Cleveland Avenue's commercial corridor, I
								appreciate how Westerville's 20-minute proximity
								to downtown Columbus provides the perfect blend
								of small-town community feel with big-city
								business opportunities. I've helped clients
								navigate everything from the seasonal rhythms of
								businesses that serve Otterbein students to the
								year-round operations of established
								professional practices, and I understand that
								Westerville businesses value the same qualities
								that define this community: integrity,
								reliability, and a commitment to excellence that
								honors both tradition and innovation.
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

						{/* Westerville Stats */}
						<div className='grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto'>
							<div className='text-center'>
								<div className='text-2xl font-bold text-primary'>
									45+
								</div>
								<div className='text-sm text-muted-foreground'>
									Westerville Clients
								</div>
							</div>
							<div className='text-center'>
								<div className='text-2xl font-bold text-primary'>
									9+
								</div>
								<div className='text-sm text-muted-foreground'>
									Years Serving Area
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
									Same Day
								</div>
								<div className='text-sm text-muted-foreground'>
									Response Time
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Why Westerville Businesses Choose Ray */}
			<section className='py-16'>
				<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='max-w-6xl mx-auto'>
						<div className='text-center mb-12'>
							<h2 className='text-3xl sm:text-4xl font-bold mb-4'>
								Why Westerville Businesses Choose Ray
							</h2>
							<p className='text-xl text-muted-foreground'>
								Combining historic charm with modern financial
								expertise
							</p>
						</div>

						<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
							<Card>
								<CardContent className='pt-6'>
									<Landmark className='h-12 w-12 text-primary mb-4' />
									<h3 className='font-bold mb-2'>
										Historic District Expertise
									</h3>
									<p className='text-sm text-muted-foreground'>
										Deep understanding of Uptown
										Westerville's unique business
										environment, from historic storefronts
										to modern professional offices.
									</p>
								</CardContent>
							</Card>

							<Card>
								<CardContent className='pt-6'>
									<Building className='h-12 w-12 text-primary mb-4' />
									<h3 className='font-bold mb-2'>
										Diverse Business Experience
									</h3>
									<p className='text-sm text-muted-foreground'>
										Extensive experience with Westerville's
										mix of retail, professional services,
										healthcare, and educational support
										businesses.
									</p>
								</CardContent>
							</Card>

							<Card>
								<CardContent className='pt-6'>
									<Users className='h-12 w-12 text-primary mb-4' />
									<h3 className='font-bold mb-2'>
										Community Business Network
									</h3>
									<p className='text-sm text-muted-foreground'>
										Strong connections with Westerville Area
										Chamber of Commerce, local banks, and
										business professionals throughout the
										community.
									</p>
								</CardContent>
							</Card>

							<Card>
								<CardContent className='pt-6'>
									<Clock className='h-12 w-12 text-primary mb-4' />
									<h3 className='font-bold mb-2'>
										Reliable Local Service
									</h3>
									<p className='text-sm text-muted-foreground'>
										Consistent, dependable service with
										quick response times and flexible
										meeting options throughout Westerville
										and surrounding areas.
									</p>
								</CardContent>
							</Card>

							<Card>
								<CardContent className='pt-6'>
									<Shield className='h-12 w-12 text-primary mb-4' />
									<h3 className='font-bold mb-2'>
										Ohio Compliance Expertise
									</h3>
									<p className='text-sm text-muted-foreground'>
										Thorough knowledge of Ohio state tax
										requirements, Delaware County
										regulations, and Westerville business
										compliance needs.
									</p>
								</CardContent>
							</Card>

							<Card>
								<CardContent className='pt-6'>
									<Award className='h-12 w-12 text-primary mb-4' />
									<h3 className='font-bold mb-2'>
										Educational Community Focus
									</h3>
									<p className='text-sm text-muted-foreground'>
										Understanding of Westerville's
										educational heritage and support for
										businesses serving the academic
										community and families.
									</p>
								</CardContent>
							</Card>
						</div>
					</div>
				</div>
			</section>

			{/* Westerville Business Services */}
			<section className='py-16 bg-gray-50'>
				<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='max-w-6xl mx-auto'>
						<div className='text-center mb-12'>
							<h2 className='text-3xl sm:text-4xl font-bold mb-4'>
								Bookkeeping Services for Westerville Businesses
							</h2>
							<p className='text-xl text-muted-foreground'>
								Modern financial management for historic
								Westerville
							</p>
						</div>

						<div className='grid md:grid-cols-2 gap-8'>
							{[
								{
									icon: <Landmark className='h-8 w-8' />,
									title: 'Historic District Business Support',
									description:
										'Specialized bookkeeping for Uptown Westerville businesses, from boutiques to professional services.',
									features: [
										'Retail point-of-sale integration',
										'Seasonal business planning',
										'Historic tax credit tracking',
										'Tourism revenue management',
									],
								},
								{
									icon: <Briefcase className='h-8 w-8' />,
									title: 'Professional Services Accounting',
									description:
										'Comprehensive financial management for Westerville professional service providers.',
									features: [
										'Client billing & collections',
										'Project profitability tracking',
										'Professional liability management',
										'Partnership accounting',
									],
								},
								{
									icon: <Home className='h-8 w-8' />,
									title: 'Healthcare & Wellness Support',
									description:
										'Specialized accounting for Westerville healthcare providers and wellness businesses.',
									features: [
										'Insurance billing support',
										'Patient payment tracking',
										'Medical equipment depreciation',
										'HIPAA-compliant documentation',
									],
								},
								{
									icon: <Calculator className='h-8 w-8' />,
									title: 'Educational Services Bookkeeping',
									description:
										'Financial management for tutoring centers, educational consultants, and learning centers.',
									features: [
										'Student enrollment tracking',
										'Program revenue analysis',
										'Educational material costs',
										'Seasonal cash flow planning',
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

			{/* Westerville Success Stories */}
			<section className='py-16'>
				<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='max-w-4xl mx-auto'>
						<div className='text-center mb-12'>
							<h2 className='text-3xl sm:text-4xl font-bold mb-4'>
								Westerville Business Success Stories
							</h2>
							<p className='text-xl text-muted-foreground'>
								Real results from Westerville business owners
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
										"Ray helped our Uptown Westerville
										boutique navigate the complexities of
										retail accounting. His understanding of
										our historic district business model and
										seasonal fluctuations was invaluable."
									</p>
									<div className='flex items-center'>
										<div className='w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center mr-3'>
											<span className='text-primary font-semibold text-sm'>
												JW
											</span>
										</div>
										<div>
											<p className='font-semibold text-sm'>
												Jennifer Walsh
											</p>
											<p className='text-xs text-muted-foreground'>
												Vintage Charm Boutique,
												Westerville OH
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
										"As a Westerville healthcare provider, I
										needed someone who understood medical
										billing complexities. Ray's expertise
										and attention to compliance details gave
										me complete peace of mind."
									</p>
									<div className='flex items-center'>
										<div className='w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center mr-3'>
											<span className='text-primary font-semibold text-sm'>
												DR
											</span>
										</div>
										<div>
											<p className='font-semibold text-sm'>
												Dr. Robert Martinez
											</p>
											<p className='text-xs text-muted-foreground'>
												Westerville Family Practice,
												Westerville OH
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
										"Ray's support helped our Westerville
										tutoring center grow from a small
										operation to serving hundreds of
										students. His educational business
										expertise made all the difference."
									</p>
									<div className='flex items-center'>
										<div className='w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center mr-3'>
											<span className='text-primary font-semibold text-sm'>
												LT
											</span>
										</div>
										<div>
											<p className='font-semibold text-sm'>
												Lisa Thompson
											</p>
											<p className='text-xs text-muted-foreground'>
												Westerville Learning Center,
												Westerville OH
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
										Westerville law practice's financial
										management. His professional approach
										and local knowledge helped us optimize
										our operations and plan for expansion."
									</p>
									<div className='flex items-center'>
										<div className='w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center mr-3'>
											<span className='text-primary font-semibold text-sm'>
												AB
											</span>
										</div>
										<div>
											<p className='font-semibold text-sm'>
												Attorney Brian Adams
											</p>
											<p className='text-xs text-muted-foreground'>
												Adams & Associates Law,
												Westerville OH
											</p>
										</div>
									</div>
								</CardContent>
							</Card>
						</div>
					</div>
				</div>
			</section>

			{/* Westerville Areas Served */}
			<section className='py-16 bg-gray-50'>
				<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='max-w-4xl mx-auto'>
						<div className='text-center mb-12'>
							<h2 className='text-3xl font-bold mb-4'>
								Serving All Westerville Business Areas
							</h2>
							<p className='text-muted-foreground'>
								Professional bookkeeping services throughout
								Westerville, Ohio
							</p>
						</div>

						<div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
							{[
								'Uptown Westerville',
								'Otterbein University Area',
								'Maxtown Road Corridor',
								'Cleveland Avenue',
								'Schrock Road Business District',
								'Sunbury Road',
								'State Street Historic District',
								'Westerville North',
								'Minerva Park',
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

			{/* Westerville CTA */}
			<section className='py-16 bg-gradient-to-br from-primary/5 to-primary/10'>
				<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='max-w-6xl mx-auto'>
						<div className='grid lg:grid-cols-2 gap-12 items-center'>
							<div>
								<h2 className='text-3xl sm:text-4xl font-bold mb-6'>
									Ready to Partner with Westerville's
									<br />
									<span className='text-primary'>
										Trusted Bookkeeping Expert?
									</span>
								</h2>

								<p className='text-xl text-muted-foreground mb-8'>
									Join 45+ Westerville businesses that trust
									Ray with their financial management. From
									historic Uptown businesses to modern
									professional services, get the expertise you
									need to thrive.
								</p>

								<div className='space-y-4 mb-8'>
									<div className='flex items-center gap-3'>
										<Phone className='h-5 w-5 text-primary' />
										<div>
											<p className='font-semibold'>
												(555) 123-4567
											</p>
											<p className='text-sm text-muted-foreground'>
												Serving all Westerville areas
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
												Quick local response
											</p>
										</div>
									</div>
									<div className='flex items-center gap-3'>
										<MapPin className='h-5 w-5 text-primary' />
										<div>
											<p className='font-semibold'>
												Westerville & Surrounding Areas
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
											Get Free Business Guide
										</Link>
									</Button>
								</div>
							</div>

							<div>
								<LeadMagnetForm
									title='Get Your Free Westerville Business Guide'
									description='"7 Financial Strategies for Historic District Businesses"'
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
