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
	GraduationCap,
} from 'lucide-react';

export const metadata = {
	title: 'Upper Arlington Ohio Bookkeeping Services | Professional Financial Management',
	description:
		'Premium bookkeeping services for Upper Arlington, OH businesses. Serving professional services, medical practices, and established businesses with sophisticated financial needs.',
	keywords:
		'bookkeeping Upper Arlington Ohio, QuickBooks Upper Arlington OH, professional services accounting, medical practice bookkeeping, Upper Arlington business financial services',
};

export default function UpperArlingtonServices() {
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
								UPPER ARLINGTON, OHIO
							</span>
						</div>

						<h1 className='text-4xl sm:text-5xl font-bold mb-6'>
							Professional Bookkeeping Services for
							<br />
							<span className='text-primary'>
								Upper Arlington, Ohio
							</span>
						</h1>

						<p className='text-xl text-muted-foreground mb-8 max-w-3xl mx-auto'>
							Serving Upper Arlington's distinguished professional
							community with premium QuickBooks bookkeeping
							services. From medical practices to law firms,
							providing sophisticated financial management for
							established businesses.
						</p>

						<div className='max-w-4xl mx-auto mb-8 p-6 bg-white/80 rounded-lg shadow-sm'>
							<p className='text-muted-foreground leading-relaxed'>
								Upper Arlington's tree-lined streets and
								commitment to excellence have made it one of
								Central Ohio's most prestigious communities, and
								I've been honored to serve its distinguished
								professional community for over a decade. From
								the medical practices along Riverside Drive to
								the law firms near Northwest Boulevard, I
								understand the sophisticated financial needs of
								Upper Arlington's established businesses. I've
								attended the renowned Labor Day Arts Festival,
								which perfectly captures this community's
								appreciation for quality and culture, and I've
								worked with clients whose children attend the
								top-rated Upper Arlington schools that make this
								area so desirable for professional families.
								Whether your practice is located near the scenic
								Scioto River corridor, in the bustling Kingsdale
								Shopping Center area, or closer to the beautiful
								Miller Park where I've met many clients for
								outdoor consultations, I appreciate the high
								standards that define Upper Arlington
								businesses. I've helped navigate the complex
								financial structures of multi-partner practices,
								supported medical professionals with insurance
								billing intricacies, and worked with consulting
								firms that serve Fortune 500 clients - all while
								maintaining the discretion and professionalism
								that Upper Arlington professionals expect. This
								community's commitment to educational
								excellence, from the outstanding public library
								system to the proximity to The Ohio State
								University, creates a business environment where
								intellectual rigor and financial precision go
								hand in hand.
							</p>
						</div>

						<div className='flex flex-col sm:flex-row gap-4 justify-center mb-12'>
							<CalendlyModal
								buttonText='Schedule Professional Consultation'
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

						{/* Upper Arlington Stats */}
						<div className='grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto'>
							<div className='text-center'>
								<div className='text-2xl font-bold text-primary'>
									55+
								</div>
								<div className='text-sm text-muted-foreground'>
									UA Clients
								</div>
							</div>
							<div className='text-center'>
								<div className='text-2xl font-bold text-primary'>
									12+
								</div>
								<div className='text-sm text-muted-foreground'>
									Years Experience
								</div>
							</div>
							<div className='text-center'>
								<div className='text-2xl font-bold text-primary'>
									98%
								</div>
								<div className='text-sm text-muted-foreground'>
									Client Retention
								</div>
							</div>
							<div className='text-center'>
								<div className='text-2xl font-bold text-primary'>
									4hr
								</div>
								<div className='text-sm text-muted-foreground'>
									Response Time
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Why Upper Arlington Professionals Choose Ray */}
			<section className='py-16'>
				<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='max-w-6xl mx-auto'>
						<div className='text-center mb-12'>
							<h2 className='text-3xl sm:text-4xl font-bold mb-4'>
								Why Upper Arlington Professionals Choose Ray
							</h2>
							<p className='text-xl text-muted-foreground'>
								Professional excellence for Upper Arlington's
								established business community
							</p>
						</div>

						<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
							<Card className='border-2 hover:border-primary/20 transition-colors'>
								<CardContent className='pt-6'>
									<Briefcase className='h-12 w-12 text-primary mb-4' />
									<h3 className='font-bold mb-2'>
										Professional Services Expertise
									</h3>
									<p className='text-sm text-muted-foreground'>
										Extensive experience with Upper
										Arlington's concentration of law firms,
										medical practices, consulting firms, and
										financial services.
									</p>
								</CardContent>
							</Card>

							<Card className='border-2 hover:border-primary/20 transition-colors'>
								<CardContent className='pt-6'>
									<Shield className='h-12 w-12 text-primary mb-4' />
									<h3 className='font-bold mb-2'>
										Medical Practice Specialization
									</h3>
									<p className='text-sm text-muted-foreground'>
										Specialized knowledge of medical
										billing, insurance reimbursements, and
										healthcare compliance requirements for
										Upper Arlington practices.
									</p>
								</CardContent>
							</Card>

							<Card className='border-2 hover:border-primary/20 transition-colors'>
								<CardContent className='pt-6'>
									<Building className='h-12 w-12 text-primary mb-4' />
									<h3 className='font-bold mb-2'>
										Established Business Focus
									</h3>
									<p className='text-sm text-muted-foreground'>
										Understanding of mature business needs,
										including succession planning, partner
										distributions, and long-term wealth
										management strategies.
									</p>
								</CardContent>
							</Card>

							<Card className='border-2 hover:border-primary/20 transition-colors'>
								<CardContent className='pt-6'>
									<Users className='h-12 w-12 text-primary mb-4' />
									<h3 className='font-bold mb-2'>
										Professional Network Integration
									</h3>
									<p className='text-sm text-muted-foreground'>
										Strong relationships with Upper
										Arlington's professional community,
										including attorneys, wealth managers,
										and business advisors.
									</p>
								</CardContent>
							</Card>

							<Card className='border-2 hover:border-primary/20 transition-colors'>
								<CardContent className='pt-6'>
									<Clock className='h-12 w-12 text-primary mb-4' />
									<h3 className='font-bold mb-2'>
										Responsive Professional Service
									</h3>
									<p className='text-sm text-muted-foreground'>
										Understanding that professional time is
										valuable, providing efficient service
										with minimal disruption to your
										practice.
									</p>
								</CardContent>
							</Card>

							<Card className='border-2 hover:border-primary/20 transition-colors'>
								<CardContent className='pt-6'>
									<GraduationCap className='h-12 w-12 text-primary mb-4' />
									<h3 className='font-bold mb-2'>
										Educational Excellence Standards
									</h3>
									<p className='text-sm text-muted-foreground'>
										Commitment to the high standards
										expected in Upper Arlington's
										education-focused community, with
										attention to detail and accuracy.
									</p>
								</CardContent>
							</Card>
						</div>
					</div>
				</div>
			</section>

			{/* Professional Services */}
			<section className='py-16 bg-gray-50'>
				<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='max-w-6xl mx-auto'>
						<div className='text-center mb-12'>
							<h2 className='text-3xl sm:text-4xl font-bold mb-4'>
								Professional Services for Upper Arlington
							</h2>
							<p className='text-xl text-muted-foreground'>
								Sophisticated financial management for
								established professionals
							</p>
						</div>

						<div className='grid md:grid-cols-2 gap-8'>
							{[
								{
									icon: <Shield className='h-8 w-8' />,
									title: 'Medical Practice Management',
									description:
										'Comprehensive financial management for Upper Arlington medical practices and healthcare providers.',
									features: [
										'Insurance billing & collections',
										'Patient payment tracking',
										'Medical equipment depreciation',
										'Practice valuation support',
									],
								},
								{
									icon: <Briefcase className='h-8 w-8' />,
									title: 'Legal Practice Accounting',
									description:
										'Specialized bookkeeping for Upper Arlington law firms and legal professionals.',
									features: [
										'Trust account management',
										'Client retainer tracking',
										'Partner distribution calculations',
										'Legal billing integration',
									],
								},
								{
									icon: <Building className='h-8 w-8' />,
									title: 'Professional Consulting Services',
									description:
										'Financial management for Upper Arlington consulting firms and advisory practices.',
									features: [
										'Project profitability analysis',
										'Time & billing optimization',
										'Client contract management',
										'Performance metrics tracking',
									],
								},
								{
									icon: <Calculator className='h-8 w-8' />,
									title: 'Financial Services Support',
									description:
										'Bookkeeping for Upper Arlington financial advisors and investment professionals.',
									features: [
										'Commission tracking',
										'Regulatory compliance support',
										'Client fee management',
										'Investment performance reporting',
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

			{/* Upper Arlington Success Stories */}
			<section className='py-16'>
				<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='max-w-4xl mx-auto'>
						<div className='text-center mb-12'>
							<h2 className='text-3xl sm:text-4xl font-bold mb-4'>
								Upper Arlington Professional Success Stories
							</h2>
							<p className='text-xl text-muted-foreground'>
								Trusted by Upper Arlington's leading
								professionals
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
										"Ray's expertise in medical practice
										accounting has been invaluable for our
										Upper Arlington clinic. His
										understanding of insurance billing and
										compliance requirements saved us
										countless hours and potential issues."
									</p>
									<div className='flex items-center'>
										<div className='w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center mr-3'>
											<span className='text-primary font-semibold text-sm'>
												DS
											</span>
										</div>
										<div>
											<p className='font-semibold text-sm'>
												Dr. Susan Davis
											</p>
											<p className='text-xs text-muted-foreground'>
												Upper Arlington Family Medicine,
												Upper Arlington OH
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
										"As an Upper Arlington law firm, we
										needed someone who understood trust
										account management and legal billing
										complexities. Ray's professional
										approach and attention to detail are
										exceptional."
									</p>
									<div className='flex items-center'>
										<div className='w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center mr-3'>
											<span className='text-primary font-semibold text-sm'>
												JH
											</span>
										</div>
										<div>
											<p className='font-semibold text-sm'>
												James Harrison, Esq.
											</p>
											<p className='text-xs text-muted-foreground'>
												Harrison & Partners Law, Upper
												Arlington OH
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
										"Ray transformed our Upper Arlington
										consulting firm's financial reporting.
										His strategic insights and professional
										presentation helped us secure our
										largest client engagement to date."
									</p>
									<div className='flex items-center'>
										<div className='w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center mr-3'>
											<span className='text-primary font-semibold text-sm'>
												MW
											</span>
										</div>
										<div>
											<p className='font-semibold text-sm'>
												Michael Wilson
											</p>
											<p className='text-xs text-muted-foreground'>
												Wilson Strategic Consulting,
												Upper Arlington OH
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
										"As an Upper Arlington financial
										advisor, I needed bookkeeping that
										understood regulatory requirements.
										Ray's expertise and professionalism have
										been instrumental in our practice
										growth."
									</p>
									<div className='flex items-center'>
										<div className='w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center mr-3'>
											<span className='text-primary font-semibold text-sm'>
												ER
											</span>
										</div>
										<div>
											<p className='font-semibold text-sm'>
												Emily Rodriguez, CFP
											</p>
											<p className='text-xs text-muted-foreground'>
												Rodriguez Wealth Management,
												Upper Arlington OH
											</p>
										</div>
									</div>
								</CardContent>
							</Card>
						</div>
					</div>
				</div>
			</section>

			{/* Upper Arlington Areas */}
			<section className='py-16 bg-gray-50'>
				<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='max-w-4xl mx-auto'>
						<div className='text-center mb-12'>
							<h2 className='text-3xl font-bold mb-4'>
								Serving Upper Arlington's Professional Districts
							</h2>
							<p className='text-muted-foreground'>
								Professional bookkeeping services throughout
								Upper Arlington, Ohio
							</p>
						</div>

						<div className='grid md:grid-cols-2 gap-8'>
							<Card>
								<CardContent className='pt-6'>
									<Building className='h-8 w-8 text-primary mb-4' />
									<h3 className='font-semibold mb-3'>
										Professional Districts
									</h3>
									<ul className='space-y-2 text-sm text-muted-foreground'>
										<li>• Northwest Boulevard</li>
										<li>• Riverside Drive Medical</li>
										<li>• Lane Avenue Corridor</li>
										<li>• Kingsdale Shopping Center</li>
										<li>• Henderson Road</li>
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
										<li>• Grandview Heights Border</li>
										<li>• Arlington Centre</li>
										<li>• Tremont Road</li>
										<li>• King Avenue</li>
										<li>• Miller Park Area</li>
									</ul>
								</CardContent>
							</Card>
						</div>
					</div>
				</div>
			</section>

			{/* Professional CTA */}
			<section className='py-16 bg-gradient-to-br from-primary/5 to-primary/10'>
				<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='max-w-6xl mx-auto'>
						<div className='grid lg:grid-cols-2 gap-12 items-center'>
							<div>
								<h2 className='text-3xl sm:text-4xl font-bold mb-6'>
									Ready for Professional-Grade
									<br />
									<span className='text-primary'>
										Financial Management?
									</span>
								</h2>

								<p className='text-xl text-muted-foreground mb-8'>
									Join 55+ Upper Arlington professionals who
									trust Ray with their sophisticated
									bookkeeping needs. From medical practices to
									law firms, experience the difference that
									professional expertise makes.
								</p>

								<div className='space-y-4 mb-8'>
									<div className='flex items-center gap-3'>
										<Award className='h-5 w-5 text-primary' />
										<div>
											<p className='font-semibold'>
												QuickBooks ProAdvisor Certified
											</p>
											<p className='text-sm text-muted-foreground'>
												Advanced professional expertise
											</p>
										</div>
									</div>
									<div className='flex items-center gap-3'>
										<Shield className='h-5 w-5 text-primary' />
										<div>
											<p className='font-semibold'>
												Professional Compliance
											</p>
											<p className='text-sm text-muted-foreground'>
												Industry-specific knowledge
											</p>
										</div>
									</div>
									<div className='flex items-center gap-3'>
										<Clock className='h-5 w-5 text-primary' />
										<div>
											<p className='font-semibold'>
												4-Hour Response Guarantee
											</p>
											<p className='text-sm text-muted-foreground'>
												Professional priority service
											</p>
										</div>
									</div>
								</div>

								<div className='flex flex-col sm:flex-row gap-4'>
									<CalendlyModal
										buttonText='Schedule Professional Consultation'
										buttonSize='lg'
										buttonClassName='flex-1 sm:flex-none px-8 py-6 text-lg'
									/>
									<Button
										variant='outline'
										size='lg'
										className='px-8 py-6 text-lg'
										asChild>
										<Link href='/free-guide'>
											Professional Guide
										</Link>
									</Button>
								</div>
							</div>

							<div>
								<LeadMagnetForm
									title='Professional Financial Management Guide'
									description='"7 Advanced Strategies for Upper Arlington Professionals"'
									buttonText='Download Professional Guide'
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
