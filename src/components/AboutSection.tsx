import { CalendlyModal } from './CalendlyModal';
import { MapPin, Heart, Users } from 'lucide-react';
import Image from 'next/image';

export default function AboutSection() {
	return (
		<section id='about' className='py-20 bg-white'>
			<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto'>
					<div className='lg:w-1/3'>
						<div className='relative'>
							<div className='w-64 h-64 rounded-xl shadow-lg overflow-hidden'>
								{/* Replace with Ray's actual photo: public/images/ray-profile.jpg */}
								<div className='bg-gradient-to-br from-primary to-primary/80 w-full h-full flex items-center justify-center text-white text-6xl font-bold'>
									RG
								</div>
								{/* Uncomment and use this when you have Ray's photo:
								<Image
									src="/images/ray-profile.jpg"
									alt="Ray Galloway - QuickBooks ProAdvisor"
									width={256}
									height={256}
									className="object-cover w-full h-full"
								/>
								*/}
							</div>
							<div className='absolute -bottom-4 -right-4 bg-qb-green-100 text-primary p-4 rounded-lg shadow-lg'>
								<div className='text-2xl font-bold'>10+</div>
								<div className='text-sm'>Years Experience</div>
							</div>
						</div>
					</div>
					<div className='lg:w-2/3'>
						<div className='flex items-center gap-3 mb-4'>
							<h2 className='text-3xl sm:text-4xl font-bold'>
								Hi, I'm Ray Galloway
							</h2>
							<div className='flex items-center gap-2 px-3 py-1 bg-qb-green-100 rounded-full'>
								<MapPin className='h-4 w-4 text-primary' />
								<span className='text-sm font-medium text-primary'>
									Delaware, OH
								</span>
							</div>
						</div>

						<p className='text-lg text-muted-foreground mb-6'>
							Born and raised in Delaware, Ohio, I've been helping
							local businesses in the Columbus area streamline
							their bookkeeping for over 10 years. I'm ready to
							help you save an extra
							<span className='font-semibold text-primary'>
								{' '}
								60+ hours per year
							</span>{' '}
							by taking the bookkeeping burden off your shoulders!
						</p>

						<p className='text-lg text-muted-foreground mb-6'>
							With my Bachelor's degree in Accounting and
							QuickBooks ProAdvisor certification, I started my
							bookkeeping practice right here in Delaware because
							I love watching our local businesses grow and
							succeed. Having owned retail shops on North Sandusky
							Street and run my own consulting practice, I
							understand firsthand the challenges of managing
							books while trying to grow a business.
						</p>

						<div className='bg-qb-green-50 border-l-4 border-primary p-4 mb-6'>
							<div className='flex items-start gap-3'>
								<Heart className='h-5 w-5 text-primary mt-0.5 flex-shrink-0' />
								<div>
									<p className='font-medium text-primary mb-1'>
										My Delaware Community Connection
									</p>
									<p className='text-sm text-muted-foreground'>
										I've helped over 100 businesses from
										Delaware to Dublin, Powell to
										Worthington. From the local contractors
										working on new developments near Alum
										Creek to service businesses downtown, I
										understand the unique needs of our
										growing community.
									</p>
								</div>
							</div>
						</div>

						<p className='text-lg text-muted-foreground mb-8'>
							I want to learn about <em>your</em> Delaware area
							business. Tell me about your strengths, goals, and
							any bookkeeping challenges you've faced. I can
							tailor my services to fit your needs and help you
							focus on what you do best while I handle the
							numbers.
						</p>

						<div className='flex flex-col sm:flex-row gap-4 mb-8'>
							<CalendlyModal
								buttonText='Schedule My FREE Evaluation'
								buttonSize='lg'
								buttonClassName='flex-1 sm:flex-none'
							/>
							<div className='text-center sm:text-left'>
								<p className='text-sm font-medium text-primary'>
									First-time client special:
								</p>
								<p className='text-sm text-muted-foreground'>
									50% off your first month
								</p>
							</div>
						</div>

						{/* Credentials */}
						<div className='grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-gray-50 rounded-lg'>
							<div className='text-center'>
								<div className='w-12 h-12 bg-qb-green-100 rounded-lg flex items-center justify-center mx-auto mb-2'>
									<span className='text-2xl'>🏆</span>
								</div>
								<div className='font-semibold text-sm'>
									QuickBooks
								</div>
								<div className='text-xs text-muted-foreground'>
									ProAdvisor Certified
								</div>
							</div>
							<div className='text-center'>
								<div className='w-12 h-12 bg-qb-green-100 rounded-lg flex items-center justify-center mx-auto mb-2'>
									<span className='text-2xl'>🎓</span>
								</div>
								<div className='font-semibold text-sm'>
									Bachelor's
								</div>
								<div className='text-xs text-muted-foreground'>
									Accounting Degree
								</div>
							</div>
							<div className='text-center'>
								<div className='w-12 h-12 bg-qb-green-100 rounded-lg flex items-center justify-center mx-auto mb-2'>
									<Users className='h-6 w-6 text-primary' />
								</div>
								<div className='font-semibold text-sm'>
									100+
								</div>
								<div className='text-xs text-muted-foreground'>
									Local Clients
								</div>
							</div>
							<div className='text-center'>
								<div className='w-12 h-12 bg-qb-green-100 rounded-lg flex items-center justify-center mx-auto mb-2'>
									<MapPin className='h-6 w-6 text-primary' />
								</div>
								<div className='font-semibold text-sm'>
									Delaware
								</div>
								<div className='text-xs text-muted-foreground'>
									Born & Raised
								</div>
							</div>
						</div>

						{/* Local Service Area */}
						<div className='mt-6 text-center'>
							<p className='text-sm font-medium text-primary mb-2'>
								Proudly Serving the Columbus Area
							</p>
							<div className='flex flex-wrap justify-center gap-2 text-xs text-muted-foreground'>
								<span className='px-2 py-1 bg-qb-green-100 rounded'>
									Delaware
								</span>
								<span className='px-2 py-1 bg-qb-green-100 rounded'>
									Powell
								</span>
								<span className='px-2 py-1 bg-qb-green-100 rounded'>
									Dublin
								</span>
								<span className='px-2 py-1 bg-qb-green-100 rounded'>
									Worthington
								</span>
								<span className='px-2 py-1 bg-qb-green-100 rounded'>
									Westerville
								</span>
								<span className='px-2 py-1 bg-qb-green-100 rounded'>
									Columbus
								</span>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
