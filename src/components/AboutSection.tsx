import { Card, CardContent } from './ui/card';
import { CalendlyModal } from './CalendlyModal';
import {
	Award,
	Users,
	Clock,
	CheckCircle,
	MapPin,
	GraduationCap,
	Building,
} from 'lucide-react';

// TODO: Replace placeholder content with Ray's actual information
// See SETUP.md for detailed instructions on customizing content

export default function AboutSection() {
	return (
		<section id='about' className='py-20 bg-white'>
			<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='max-w-6xl mx-auto'>
					<div className='grid lg:grid-cols-2 gap-12 items-center'>
						{/* Left Column - Photo and Quick Stats */}
						<div className='text-center lg:text-left'>
							{/* Profile Photo Placeholder */}
							<div className='w-64 h-64 bg-qb-green-100 rounded-xl shadow-lg mx-auto lg:mx-0 mb-8 flex items-center justify-center'>
								<span className='text-6xl font-bold text-primary'>
									RG
								</span>
							</div>

							{/* Quick Stats */}
							<div className='grid grid-cols-2 gap-4 max-w-sm mx-auto lg:mx-0'>
								<div className='text-center p-4 bg-qb-green-50 rounded-lg'>
									<div className='text-2xl font-bold text-primary mb-1'>
										10+
									</div>
									<div className='text-sm text-muted-foreground'>
										Years Experience
									</div>
								</div>
								<div className='text-center p-4 bg-qb-green-50 rounded-lg'>
									<div className='text-2xl font-bold text-primary mb-1'>
										100+
									</div>
									<div className='text-sm text-muted-foreground'>
										Happy Clients
									</div>
								</div>
								<div className='text-center p-4 bg-qb-green-50 rounded-lg'>
									<div className='text-2xl font-bold text-primary mb-1'>
										4.9★
									</div>
									<div className='text-sm text-muted-foreground'>
										Client Rating
									</div>
								</div>
								<div className='text-center p-4 bg-qb-green-50 rounded-lg'>
									<div className='text-2xl font-bold text-primary mb-1'>
										60+
									</div>
									<div className='text-sm text-muted-foreground'>
										Hours Saved
									</div>
								</div>
							</div>
						</div>

						{/* Right Column - About Content */}
						<div>
							<h2 className='text-3xl sm:text-4xl font-bold mb-6'>
								Meet Ray Galloway
								<span className='block text-primary text-2xl font-normal mt-2'>
									Your Local QuickBooks ProAdvisor
								</span>
							</h2>

							<p className='text-lg text-muted-foreground mb-6'>
								Hi, I&apos;m Ray! I&apos;ve been helping
								Columbus area businesses get their books in
								order for over 10 years. I know how overwhelming
								bookkeeping can feel when you&apos;re trying to
								run a business - that&apos;s exactly why
								I&apos;m here to help.
							</p>

							<p className='text-muted-foreground mb-8'>
								After earning my degree in Accounting and
								becoming a certified QuickBooks ProAdvisor,
								I&apos;ve worked with hundreds of service
								businesses just like yours. From construction
								companies to consultants, I understand the
								unique challenges Columbus area businesses face.
							</p>

							{/* Credentials */}
							<div className='space-y-4 mb-8'>
								<div className='flex items-center'>
									<Award className='h-5 w-5 text-primary mr-3' />
									<span className='text-sm'>
										Certified QuickBooks ProAdvisor
									</span>
								</div>
								<div className='flex items-center'>
									<GraduationCap className='h-5 w-5 text-primary mr-3' />
									<span className='text-sm'>
										Bachelor's Degree in Accounting
									</span>
								</div>
								<div className='flex items-center'>
									<MapPin className='h-5 w-5 text-primary mr-3' />
									<span className='text-sm'>
										Serving Columbus & Central Ohio
									</span>
								</div>
								<div className='flex items-center'>
									<Building className='h-5 w-5 text-primary mr-3' />
									<span className='text-sm'>
										Specializing in Service-Based Businesses
									</span>
								</div>
							</div>

							{/* CTA */}
							<div className='flex flex-col sm:flex-row gap-4'>
								<CalendlyModal
									buttonText='Schedule Free Consultation'
									buttonSize='lg'
									buttonClassName='px-8 py-6 text-lg'
								/>
							</div>
						</div>
					</div>

					{/* Bottom Section - Why Choose Ray */}
					<div className='mt-20'>
						<h3 className='text-2xl font-bold text-center mb-12'>
							Why Columbus Area Businesses Choose Ray
						</h3>

						<div className='grid md:grid-cols-3 gap-8'>
							<Card className='text-center'>
								<CardContent className='pt-6'>
									<Users className='h-12 w-12 text-primary mx-auto mb-4' />
									<h4 className='font-semibold mb-2'>
										Local Expertise
									</h4>
									<p className='text-sm text-muted-foreground'>
										Deep understanding of Ohio tax laws and
										Columbus area business regulations that
										affect your bottom line.
									</p>
								</CardContent>
							</Card>

							<Card className='text-center'>
								<CardContent className='pt-6'>
									<Clock className='h-12 w-12 text-primary mx-auto mb-4' />
									<h4 className='font-semibold mb-2'>
										Time-Saving Focus
									</h4>
									<p className='text-sm text-muted-foreground'>
										Streamlined processes that save you 60+
										hours per year, so you can focus on
										growing your business.
									</p>
								</CardContent>
							</Card>

							<Card className='text-center'>
								<CardContent className='pt-6'>
									<CheckCircle className='h-12 w-12 text-primary mx-auto mb-4' />
									<h4 className='font-semibold mb-2'>
										Proven Results
									</h4>
									<p className='text-sm text-muted-foreground'>
										100+ satisfied clients with an average
										18% improvement in profit margins
										through better financial management.
									</p>
								</CardContent>
							</Card>
						</div>
					</div>

					{/* Service Areas */}
					<div className='mt-16 text-center'>
						<h4 className='text-lg font-semibold mb-4'>
							Proudly Serving Central Ohio
						</h4>
						<div className='flex flex-wrap justify-center gap-4 text-sm text-muted-foreground'>
							<span>Columbus, OH</span>
							<span>•</span>
							<span>Powell, OH</span>
							<span>•</span>
							<span>Dublin, OH</span>
							<span>•</span>
							<span>Worthington, OH</span>
							<span>•</span>
							<span>Westerville, OH</span>
							<span>•</span>
							<span>Columbus</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
