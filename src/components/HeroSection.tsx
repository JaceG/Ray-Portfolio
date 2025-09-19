import { Button } from './ui/button';
import { ArrowRight, Calculator, TrendingUp, Clock } from 'lucide-react';
import { CalendlyModal } from './CalendlyModal';
import { HeroTrustBadges } from './TrustBadges';
import Link from 'next/link';

export function HeroSection() {
	return (
		<section className='relative overflow-hidden bg-gradient-to-br from-qb-green-50 via-white to-qb-green-100 py-20 lg:py-32'>
			<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='lg:grid lg:grid-cols-12 lg:gap-8'>
					<div className='sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left'>
						<h1 className='text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl'>
							<span className='block'>I Handle the Books -</span>
							<span className='block text-primary'>
								You Handle the Business
							</span>
						</h1>
						<p className='mt-6 text-xl text-muted-foreground max-w-3xl'>
							Save an average of{' '}
							<span className='font-bold text-primary'>
								60+ hours per year
							</span>{' '}
							with professional bookkeeping that eliminates costly
							errors and gives you clear financial insights.
						</p>
						<p className='mt-4 text-lg text-muted-foreground'>
							Expert QuickBooks management with accurate
							bookkeeping, detailed financial reports, and direct
							communication with Ray.
						</p>
						<div className='mt-10 sm:flex sm:justify-center lg:justify-start gap-4'>
							<Button
								size='lg'
								className='w-full sm:w-auto text-lg px-8 py-6'
								asChild>
								<Link href='/free-guide'>
									Get Your Free Guide
									<ArrowRight className='ml-2 h-5 w-5' />
								</Link>
							</Button>
							<CalendlyModal
								buttonText='Book Free Consultation'
								buttonSize='lg'
								buttonClassName='w-full sm:w-auto text-lg px-8 py-6 mt-3 sm:mt-0'
								mode='popup'
							/>
						</div>
						<div className='mt-10 grid grid-cols-3 gap-8 text-center lg:text-left'>
							<div className='flex flex-col items-center lg:items-start'>
								<Calculator className='h-8 w-8 text-primary mb-2' />
								<p className='text-sm text-muted-foreground'>
									Accurate Books
								</p>
							</div>
							<div className='flex flex-col items-center lg:items-start'>
								<TrendingUp className='h-8 w-8 text-primary mb-2' />
								<p className='text-sm text-muted-foreground'>
									Growth Insights
								</p>
							</div>
							<div className='flex flex-col items-center lg:items-start'>
								<Clock className='h-8 w-8 text-primary mb-2' />
								<p className='text-sm text-muted-foreground'>
									Save Time
								</p>
							</div>
						</div>
					</div>
					<div className='mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center'>
						<div className='relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md'>
							<div className='bg-white rounded-lg p-8 shadow-xl'>
								<div className='flex items-center justify-between mb-6'>
									<h3 className='text-lg font-semibold'>
										Financial Overview
									</h3>
									<div className='flex items-center space-x-1'>
										<div className='w-2 h-2 bg-green-500 rounded-full animate-pulse'></div>
										<span className='text-sm text-green-500'>
											Accurate
										</span>
									</div>
								</div>
								<div className='space-y-4'>
									<div className='flex justify-between items-center'>
										<span className='text-muted-foreground'>
											Revenue
										</span>
										<span className='text-primary font-semibold'>
											$47,250
										</span>
									</div>
									<div className='flex justify-between items-center'>
										<span className='text-muted-foreground'>
											Expenses
										</span>
										<span className='font-semibold'>
											$28,940
										</span>
									</div>
									<div className='border-t pt-4'>
										<div className='flex justify-between items-center'>
											<span className='font-medium'>
												Net Profit
											</span>
											<span className='text-lg font-bold text-primary'>
												$18,310
											</span>
										</div>
									</div>
									<div className='bg-qb-green-50 rounded-lg p-4'>
										<div className='flex items-center'>
											<TrendingUp className='h-5 w-5 text-primary mr-2' />
											<span className='text-sm'>
												18% increase from last month
											</span>
										</div>
									</div>
									<div className='mt-4 text-center space-y-2'>
										<CalendlyModal
											buttonText='Get Your Financial Clarity →'
											buttonClassName='text-primary hover:underline text-sm font-medium bg-transparent border-none p-0 h-auto'
										/>
										<p className='block text-xs text-muted-foreground'>
											Schedule a call to discuss your
											bookkeeping needs
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Trust badges */}
				<HeroTrustBadges className='mt-16' />
			</div>
		</section>
	);
}
