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
	Palette,
	Lightbulb,
	Zap,
} from 'lucide-react';

export const metadata = {
	title: 'Short North Columbus Bookkeeping Services | Creative Business Financial Management',
	description:
		'Professional bookkeeping services for Short North, Columbus businesses. Specialized support for creative agencies, startups, galleries, and innovative businesses in the arts district.',
	keywords:
		'bookkeeping Short North Columbus, creative business accounting, startup bookkeeping Columbus, arts district financial services, gallery bookkeeping Columbus OH',
};

export default function ShortNorthServices() {
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
								SHORT NORTH, COLUMBUS
							</span>
						</div>

						<h1 className='text-4xl sm:text-5xl font-bold mb-6'>
							Creative Business Bookkeeping for
							<br />
							<span className='text-primary'>
								Short North, Columbus
							</span>
						</h1>

						<p className='text-xl text-muted-foreground mb-8 max-w-3xl mx-auto'>
							Serving Columbus's vibrant arts district with
							innovative QuickBooks bookkeeping services. From
							creative agencies to galleries, startups to
							restaurants, supporting the unique financial needs
							of Short North businesses.
						</p>

						<div className='max-w-4xl mx-auto mb-8 p-6 bg-white/80 rounded-lg shadow-sm'>
							<p className='text-muted-foreground leading-relaxed'>
								The Short North Arts District pulses with
								creative energy, and I've been part of this
								dynamic community's business ecosystem since its
								transformation into Columbus's premier cultural
								destination. From the monthly Gallery Hop along
								High Street where I regularly network with
								creative entrepreneurs, to the spectacular
								HighBall Halloween fashion event that showcases
								the district's innovative spirit, I understand
								the unique rhythms and financial challenges of
								creative businesses. I've worked with design
								agencies in converted Victorian Village
								buildings, helped art galleries near Goodale
								Park navigate commission structures and
								exhibition costs, and supported tech startups in
								the modern co-working spaces that blend
								seamlessly with the area's historic
								architecture. Whether your business is located
								in the heart of the gallery district, closer to
								the bustling restaurant scene that serves both
								Ohio State students and downtown professionals,
								or in the emerging areas stretching toward the
								Arena District and Convention Center, I
								appreciate how the Short North's proximity to
								campus brings both opportunities and seasonal
								fluctuations that require strategic financial
								planning. I've seen firsthand how this community
								supports innovation - from the public art
								installations that line the streets to the
								entrepreneurial spirit that drives everything
								from boutique retail shops to cutting-edge
								marketing firms - and I bring that same creative
								problem-solving approach to financial
								management, helping Short North businesses turn
								their artistic vision into sustainable financial
								success.
							</p>
						</div>

						<div className='flex flex-col sm:flex-row gap-4 justify-center mb-12'>
							<CalendlyModal
								buttonText='Schedule Creative Consultation'
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

						{/* Short North Stats */}
						<div className='grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto'>
							<div className='text-center'>
								<div className='text-2xl font-bold text-primary'>
									60+
								</div>
								<div className='text-sm text-muted-foreground'>
									Creative Clients
								</div>
							</div>
							<div className='text-center'>
								<div className='text-2xl font-bold text-primary'>
									15+
								</div>
								<div className='text-sm text-muted-foreground'>
									Startups Launched
								</div>
							</div>
							<div className='text-center'>
								<div className='text-2xl font-bold text-primary'>
									5.0★
								</div>
								<div className='text-sm text-muted-foreground'>
									Creative Rating
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

			{/* Why Short North Creatives Choose Ray */}
			<section className='py-16'>
				<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='max-w-6xl mx-auto'>
						<div className='text-center mb-12'>
							<h2 className='text-3xl sm:text-4xl font-bold mb-4'>
								Why Short North Creatives Choose Ray
							</h2>
							<p className='text-xl text-muted-foreground'>
								Understanding the unique needs of Columbus's
								creative community
							</p>
						</div>

						<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
							<Card className='border-2 hover:border-primary/20 transition-colors'>
								<CardContent className='pt-6'>
									<Palette className='h-12 w-12 text-primary mb-4' />
									<h3 className='font-bold mb-2'>
										Creative Industry Expertise
									</h3>
									<p className='text-sm text-muted-foreground'>
										Deep understanding of creative business
										models, from project-based work to
										commission structures, licensing, and
										intellectual property revenue.
									</p>
								</CardContent>
							</Card>

							<Card className='border-2 hover:border-primary/20 transition-colors'>
								<CardContent className='pt-6'>
									<Zap className='h-12 w-12 text-primary mb-4' />
									<h3 className='font-bold mb-2'>
										Startup & Innovation Focus
									</h3>
									<p className='text-sm text-muted-foreground'>
										Specialized support for Short North
										startups and innovative businesses,
										including funding preparation and
										investor-ready financials.
									</p>
								</CardContent>
							</Card>

							<Card className='border-2 hover:border-primary/20 transition-colors'>
								<CardContent className='pt-6'>
									<Building className='h-12 w-12 text-primary mb-4' />
									<h3 className='font-bold mb-2'>
										Arts District Knowledge
									</h3>
									<p className='text-sm text-muted-foreground'>
										Intimate knowledge of the Short North
										arts district, from High Street
										galleries to creative co-working spaces
										and everything in between.
									</p>
								</CardContent>
							</Card>

							<Card className='border-2 hover:border-primary/20 transition-colors'>
								<CardContent className='pt-6'>
									<Users className='h-12 w-12 text-primary mb-4' />
									<h3 className='font-bold mb-2'>
										Creative Community Network
									</h3>
									<p className='text-sm text-muted-foreground'>
										Strong connections within Columbus's
										creative ecosystem, including artists,
										designers, developers, and creative
										entrepreneurs.
									</p>
								</CardContent>
							</Card>

							<Card className='border-2 hover:border-primary/20 transition-colors'>
								<CardContent className='pt-6'>
									<Lightbulb className='h-12 w-12 text-primary mb-4' />
									<h3 className='font-bold mb-2'>
										Innovative Solutions
									</h3>
									<p className='text-sm text-muted-foreground'>
										Creative approaches to financial
										management that match the innovative
										spirit of Short North businesses and
										entrepreneurs.
									</p>
								</CardContent>
							</Card>

							<Card className='border-2 hover:border-primary/20 transition-colors'>
								<CardContent className='pt-6'>
									<Clock className='h-12 w-12 text-primary mb-4' />
									<h3 className='font-bold mb-2'>
										Flexible & Agile Service
									</h3>
									<p className='text-sm text-muted-foreground'>
										Understanding that creative businesses
										move fast, providing agile financial
										support that keeps pace with your
										innovation.
									</p>
								</CardContent>
							</Card>
						</div>
					</div>
				</div>
			</section>

			{/* Creative Business Services */}
			<section className='py-16 bg-gray-50'>
				<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='max-w-6xl mx-auto'>
						<div className='text-center mb-12'>
							<h2 className='text-3xl sm:text-4xl font-bold mb-4'>
								Creative Business Services for Short North
							</h2>
							<p className='text-xl text-muted-foreground'>
								Innovative financial management for innovative
								businesses
							</p>
						</div>

						<div className='grid md:grid-cols-2 gap-8'>
							{[
								{
									icon: <Palette className='h-8 w-8' />,
									title: 'Creative Agency & Studio Support',
									description:
										'Specialized bookkeeping for design agencies, marketing firms, and creative studios in the Short North.',
									features: [
										'Project-based accounting',
										'Client retainer management',
										'Creative asset tracking',
										'Freelancer payment management',
									],
								},
								{
									icon: <Zap className='h-8 w-8' />,
									title: 'Startup Financial Management',
									description:
										'Comprehensive support for Short North startups from inception to growth stage.',
									features: [
										'Investor reporting',
										'Burn rate analysis',
										'Funding round preparation',
										'Equity tracking',
									],
								},
								{
									icon: <Building className='h-8 w-8' />,
									title: 'Gallery & Arts Business Accounting',
									description:
										'Specialized financial management for galleries, artists, and arts organizations.',
									features: [
										'Art sales tracking',
										'Commission calculations',
										'Exhibition cost management',
										'Grant funding tracking',
									],
								},
								{
									icon: <Briefcase className='h-8 w-8' />,
									title: 'Restaurant & Hospitality Support',
									description:
										'Financial management for Short North restaurants, bars, and hospitality businesses.',
									features: [
										'Daily sales reconciliation',
										'Inventory cost tracking',
										'Tip reporting & distribution',
										'Seasonal revenue planning',
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

			{/* Short North Success Stories */}
			<section className='py-16'>
				<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='max-w-4xl mx-auto'>
						<div className='text-center mb-12'>
							<h2 className='text-3xl sm:text-4xl font-bold mb-4'>
								Short North Creative Success Stories
							</h2>
							<p className='text-xl text-muted-foreground'>
								Real results from Columbus's creative community
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
										"Ray helped our Short North design
										agency transition from chaos to clarity.
										His understanding of project-based
										billing and creative workflows made all
										the difference in our growth."
									</p>
									<div className='flex items-center'>
										<div className='w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center mr-3'>
											<span className='text-primary font-semibold text-sm'>
												AC
											</span>
										</div>
										<div>
											<p className='font-semibold text-sm'>
												Alex Chen
											</p>
											<p className='text-xs text-muted-foreground'>
												Pixel Perfect Design, Short
												North Columbus
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
										"As a Short North startup, we needed
										investor-ready financials fast. Ray's
										expertise in startup accounting and
										funding preparation was instrumental in
										our successful Series A round."
									</p>
									<div className='flex items-center'>
										<div className='w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center mr-3'>
											<span className='text-primary font-semibold text-sm'>
												SP
											</span>
										</div>
										<div>
											<p className='font-semibold text-sm'>
												Sarah Peterson
											</p>
											<p className='text-xs text-muted-foreground'>
												InnovateCBUS, Short North
												Columbus
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
										"Ray's understanding of the art world
										and gallery business model helped our
										Short North gallery optimize our
										commission structure and improve
										profitability significantly."
									</p>
									<div className='flex items-center'>
										<div className='w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center mr-3'>
											<span className='text-primary font-semibold text-sm'>
												MR
											</span>
										</div>
										<div>
											<p className='font-semibold text-sm'>
												Marcus Rivera
											</p>
											<p className='text-xs text-muted-foreground'>
												Rivera Contemporary Gallery,
												Short North Columbus
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
										"Our Short North restaurant needed
										someone who understood the hospitality
										industry's unique challenges. Ray's
										expertise in cost control and seasonal
										planning has been a game-changer."
									</p>
									<div className='flex items-center'>
										<div className='w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center mr-3'>
											<span className='text-primary font-semibold text-sm'>
												JD
											</span>
										</div>
										<div>
											<p className='font-semibold text-sm'>
												Julia Davis
											</p>
											<p className='text-xs text-muted-foreground'>
												Artisan Kitchen, Short North
												Columbus
											</p>
										</div>
									</div>
								</CardContent>
							</Card>
						</div>
					</div>
				</div>
			</section>

			{/* Short North Areas */}
			<section className='py-16 bg-gray-50'>
				<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='max-w-4xl mx-auto'>
						<div className='text-center mb-12'>
							<h2 className='text-3xl font-bold mb-4'>
								Serving the Entire Short North Arts District
							</h2>
							<p className='text-muted-foreground'>
								Creative bookkeeping services throughout
								Columbus's premier arts district
							</p>
						</div>

						<div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
							{[
								'High Street Gallery District',
								'Victorian Village',
								'Italian Village',
								'Harrison West',
								'Brewery District',
								'Arena District',
								'Convention Center Area',
								'OSU Campus Gateway',
								'Grandview Heights Border',
							].map((area, index) => (
								<div
									key={index}
									className='bg-white rounded-lg p-4 text-center shadow-sm border-l-4 border-l-primary'>
									<p className='text-sm font-medium'>
										{area}
									</p>
								</div>
							))}
						</div>
					</div>
				</div>
			</section>

			{/* Creative CTA */}
			<section className='py-16 bg-gradient-to-br from-primary/5 to-primary/10'>
				<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='max-w-6xl mx-auto'>
						<div className='grid lg:grid-cols-2 gap-12 items-center'>
							<div>
								<h2 className='text-3xl sm:text-4xl font-bold mb-6'>
									Ready to Unleash Your
									<br />
									<span className='text-primary'>
										Creative Business Potential?
									</span>
								</h2>

								<p className='text-xl text-muted-foreground mb-8'>
									Join 60+ Short North creatives and
									entrepreneurs who trust Ray with their
									financial management. From startups to
									established agencies, get the innovative
									support your creative business deserves.
								</p>

								<div className='space-y-4 mb-8'>
									<div className='flex items-center gap-3'>
										<Palette className='h-5 w-5 text-primary' />
										<div>
											<p className='font-semibold'>
												Creative Industry Expertise
											</p>
											<p className='text-sm text-muted-foreground'>
												Understanding unique creative
												business models
											</p>
										</div>
									</div>
									<div className='flex items-center gap-3'>
										<Zap className='h-5 w-5 text-primary' />
										<div>
											<p className='font-semibold'>
												Startup & Innovation Support
											</p>
											<p className='text-sm text-muted-foreground'>
												From idea to IPO preparation
											</p>
										</div>
									</div>
									<div className='flex items-center gap-3'>
										<Clock className='h-5 w-5 text-primary' />
										<div>
											<p className='font-semibold'>
												Agile Response Time
											</p>
											<p className='text-sm text-muted-foreground'>
												Keeping pace with creative speed
											</p>
										</div>
									</div>
								</div>

								<div className='flex flex-col sm:flex-row gap-4'>
									<CalendlyModal
										buttonText='Schedule Creative Consultation'
										buttonSize='lg'
										buttonClassName='flex-1 sm:flex-none px-8 py-6 text-lg'
									/>
									<Button
										variant='outline'
										size='lg'
										className='px-8 py-6 text-lg'
										asChild>
										<Link href='/free-guide'>
											Creative Business Guide
										</Link>
									</Button>
								</div>
							</div>

							<div>
								<LeadMagnetForm
									title='Creative Business Financial Guide'
									description='"7 Financial Strategies for Short North Creatives"'
									buttonText='Download Creative Guide'
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
