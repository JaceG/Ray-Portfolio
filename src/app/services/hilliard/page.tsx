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
	title: 'Hilliard Ohio Bookkeeping Services | Local QuickBooks Expert | Ray Galloway',
	description:
		'Professional bookkeeping services for Hilliard, OH businesses. Local QuickBooks ProAdvisor serving Hilliard City Schools district and surrounding business community.',
	keywords:
		'bookkeeping Hilliard Ohio, QuickBooks Hilliard OH, accountant Hilliard Ohio, small business bookkeeping Hilliard, financial services Hilliard OH',
};

export default function HilliardServices() {
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
								HILLIARD, OHIO
							</span>
						</div>

						<h1 className='text-4xl sm:text-5xl font-bold mb-6'>
							Trusted Bookkeeping Services for
							<br />
							<span className='text-primary'>
								Hilliard, Ohio Businesses
							</span>
						</h1>

						<p className='text-xl text-muted-foreground mb-8 max-w-3xl mx-auto'>
							Serving Hilliard's growing business community with
							professional QuickBooks bookkeeping services. From
							Old Hilliard to the Cemetery Road corridor, help
							your business achieve financial success.
						</p>

						<div className='max-w-4xl mx-auto mb-8 p-6 bg-white/80 rounded-lg shadow-sm'>
							<p className='text-muted-foreground leading-relaxed'>
								Having worked extensively throughout Hilliard, I
								understand this community's unique blend of
								historical charm and modern growth. Originally
								known as Hilliard's Station, this vibrant city
								developed around the Piqua and Indiana Railroad
								station that once bisected the farmland, and
								today that beautifully restored original train
								station stands as a testament to our rich
								heritage. I've helped businesses from the Early
								Television Museum area (the only museum of its
								kind in the nation!) to the bustling Cemetery
								Road business corridor, and I'm familiar with
								everything from the Heritage Trail Dog Park
								where many of my clients walk their dogs during
								our meetings, to the local favorites like The
								Olive Tree Lebanese and Mediterranean Café where
								I've shared many business lunches. Whether
								you're located near the historic Hilliard
								Village with its charming collection of period
								buildings including the old caboose and log
								cabin, or you're part of the newer developments
								stretching toward Big Darby Creek and the Scioto
								River, I understand the seasonal rhythms of
								Hilliard businesses and the unique opportunities
								that come with being perfectly positioned
								between Columbus's urban energy and Ohio's
								beautiful countryside.
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

						{/* Hilliard Stats */}
						<div className='grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto'>
							<div className='text-center'>
								<div className='text-2xl font-bold text-primary'>
									35+
								</div>
								<div className='text-sm text-muted-foreground'>
									Hilliard Clients
								</div>
							</div>
							<div className='text-center'>
								<div className='text-2xl font-bold text-primary'>
									8+
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

			{/* Why Hilliard Businesses Choose Ray */}
			<section className='py-16'>
				<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='max-w-6xl mx-auto'>
						<div className='text-center mb-12'>
							<h2 className='text-3xl sm:text-4xl font-bold mb-4'>
								Why Hilliard Businesses Choose Ray
							</h2>
							<p className='text-xl text-muted-foreground'>
								Local expertise for Hilliard's diverse business
								community
							</p>
						</div>

						<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
							<Card>
								<CardContent className='pt-6'>
									<Home className='h-12 w-12 text-primary mb-4' />
									<h3 className='font-bold mb-2'>
										Hilliard Community Knowledge
									</h3>
									<p className='text-sm text-muted-foreground'>
										Deep understanding of Hilliard's family-
										oriented business environment, from Old
										Hilliard's historic charm to the modern
										developments along Cemetery Road.
									</p>
								</CardContent>
							</Card>

							<Card>
								<CardContent className='pt-6'>
									<Building className='h-12 w-12 text-primary mb-4' />
									<h3 className='font-bold mb-2'>
										Growing Business Focus
									</h3>
									<p className='text-sm text-muted-foreground'>
										Specialized in supporting Hilliard's
										expanding business landscape, from
										established family businesses to new
										enterprises in developing areas.
									</p>
								</CardContent>
							</Card>

							<Card>
								<CardContent className='pt-6'>
									<Users className='h-12 w-12 text-primary mb-4' />
									<h3 className='font-bold mb-2'>
										Local Business Network
									</h3>
									<p className='text-sm text-muted-foreground'>
										Strong connections with Hilliard Chamber
										of Commerce, local banks, and business
										professionals. Part of the community
										business ecosystem.
									</p>
								</CardContent>
							</Card>

							<Card>
								<CardContent className='pt-6'>
									<Clock className='h-12 w-12 text-primary mb-4' />
									<h3 className='font-bold mb-2'>
										Responsive Local Service
									</h3>
									<p className='text-sm text-muted-foreground'>
										Quick response times and flexible
										meeting options throughout Hilliard.
										Available for in-person consultations
										when needed.
									</p>
								</CardContent>
							</Card>

							<Card>
								<CardContent className='pt-6'>
									<Shield className='h-12 w-12 text-primary mb-4' />
									<h3 className='font-bold mb-2'>
										Ohio Tax Compliance
									</h3>
									<p className='text-sm text-muted-foreground'>
										Expert knowledge of Ohio state tax
										requirements, Franklin County
										regulations, and Hilliard business
										compliance needs.
									</p>
								</CardContent>
							</Card>

							<Card>
								<CardContent className='pt-6'>
									<Award className='h-12 w-12 text-primary mb-4' />
									<h3 className='font-bold mb-2'>
										Family Business Expertise
									</h3>
									<p className='text-sm text-muted-foreground'>
										Understanding of family-owned business
										dynamics common in Hilliard, including
										succession planning and multi-
										generational financial management.
									</p>
								</CardContent>
							</Card>
						</div>
					</div>
				</div>
			</section>

			{/* Hilliard-Specific Services */}
			<section className='py-16 bg-gray-50'>
				<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='max-w-6xl mx-auto'>
						<div className='text-center mb-12'>
							<h2 className='text-3xl sm:text-4xl font-bold mb-4'>
								Bookkeeping Services for Hilliard Businesses
							</h2>
							<p className='text-xl text-muted-foreground'>
								Comprehensive financial management for
								Hilliard's business community
							</p>
						</div>

						<div className='grid md:grid-cols-2 gap-8'>
							{[
								{
									icon: <Calculator className='h-8 w-8' />,
									title: 'Small Business Bookkeeping',
									description:
										'Complete monthly bookkeeping services tailored for Hilliard small businesses and family enterprises.',
									features: [
										'Monthly financial statements',
										'Bank reconciliation',
										'Expense tracking',
										'QuickBooks setup & training',
									],
								},
								{
									icon: <Home className='h-8 w-8' />,
									title: 'Retail & Service Business Support',
									description:
										'Specialized accounting for Hilliard retail shops, restaurants, and service businesses.',
									features: [
										'Point-of-sale integration',
										'Inventory management',
										'Sales tax compliance',
										'Multi-location reporting',
									],
								},
								{
									icon: <TrendingUp className='h-8 w-8' />,
									title: 'Growth Planning & Analysis',
									description:
										'Financial insights and planning to help Hilliard businesses expand and thrive.',
									features: [
										'Cash flow forecasting',
										'Profitability analysis',
										'Budget planning',
										'Growth strategy support',
									],
								},
								{
									icon: <FileText className='h-8 w-8' />,
									title: 'Tax Preparation Support',
									description:
										'Year-round tax organization and preparation assistance for Hilliard business owners.',
									features: [
										'Quarterly tax estimates',
										'Document organization',
										'Deduction optimization',
										'Tax deadline management',
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

			{/* Hilliard Success Stories */}
			<section className='py-16'>
				<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='max-w-4xl mx-auto'>
						<div className='text-center mb-12'>
							<h2 className='text-3xl sm:text-4xl font-bold mb-4'>
								Hilliard Business Success Stories
							</h2>
							<p className='text-xl text-muted-foreground'>
								Real results from Hilliard business owners
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
										"Ray helped our Hilliard family
										restaurant streamline our bookkeeping
										and identify cost savings we never knew
										existed. His local knowledge and
										personal approach made all the
										difference."
									</p>
									<div className='flex items-center'>
										<div className='w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center mr-3'>
											<span className='text-primary font-semibold text-sm'>
												MG
											</span>
										</div>
										<div>
											<p className='font-semibold text-sm'>
												Maria Gonzalez
											</p>
											<p className='text-xs text-muted-foreground'>
												Gonzalez Family Restaurant,
												Hilliard OH
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
										"As a Hilliard home services business,
										we needed someone who understood our
										seasonal fluctuations. Ray's cash flow
										planning helped us navigate slow periods
										and plan for growth."
									</p>
									<div className='flex items-center'>
										<div className='w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center mr-3'>
											<span className='text-primary font-semibold text-sm'>
												BT
											</span>
										</div>
										<div>
											<p className='font-semibold text-sm'>
												Bob Thompson
											</p>
											<p className='text-xs text-muted-foreground'>
												Thompson Landscaping, Hilliard
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

			{/* Hilliard Areas Served */}
			<section className='py-16 bg-gray-50'>
				<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='max-w-4xl mx-auto'>
						<div className='text-center mb-12'>
							<h2 className='text-3xl font-bold mb-4'>
								Serving All Hilliard Business Areas
							</h2>
							<p className='text-muted-foreground'>
								Professional bookkeeping services throughout
								Hilliard, Ohio
							</p>
						</div>

						<div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
							{[
								'Old Hilliard',
								'Cemetery Road Corridor',
								'Hilliard Rome Road',
								'Norwich Township',
								'Britton Parkway',
								'Alton & Darby Creek',
								'Hilliard Station',
								'Brown Township',
								'Heritage Golf Club Area',
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

			{/* Hilliard CTA */}
			<section className='py-16 bg-gradient-to-br from-primary/5 to-primary/10'>
				<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='max-w-6xl mx-auto'>
						<div className='grid lg:grid-cols-2 gap-12 items-center'>
							<div>
								<h2 className='text-3xl sm:text-4xl font-bold mb-6'>
									Ready to Partner with Hilliard's
									<br />
									<span className='text-primary'>
										Trusted Bookkeeping Professional?
									</span>
								</h2>

								<p className='text-xl text-muted-foreground mb-8'>
									Join 35+ Hilliard businesses that trust Ray
									with their financial management. From family
									businesses to growing enterprises, get the
									local expertise you need to succeed.
								</p>

								<div className='space-y-4 mb-8'>
									<div className='flex items-center gap-3'>
										<Phone className='h-5 w-5 text-primary' />
										<div>
											<p className='font-semibold'>
												(555) 123-4567
											</p>
											<p className='text-sm text-muted-foreground'>
												Serving all Hilliard areas
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
												Hilliard & Surrounding Areas
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
									title='Get Your Free Hilliard Business Guide'
									description='"7 Financial Tips for Growing Hilliard Businesses"'
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
