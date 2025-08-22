import { Button } from './ui/button';
import { Check, Monitor, MessageSquare, Shield, BarChart3 } from 'lucide-react';

export function BenefitsSection() {
	return (
		<section
			id='benefits'
			className='py-20 bg-gradient-to-br from-base-100 to-base-200'>
			<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='text-center mb-16'>
					<h2 className='text-3xl sm:text-4xl font-bold mb-4'>
						Your Business,{' '}
						<span className='text-primary'>Live & Transparent</span>
					</h2>
					<p className='text-xl text-muted-foreground max-w-3xl mx-auto'>
						Unlike traditional bookkeepers who send monthly reports,
						you get real-time access to your financial data 24/7.
						Watch Ray work on your books and see updates as they
						happen.
					</p>
				</div>

				<div className='grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto'>
					<div className='space-y-8'>
						<div className='flex items-start space-x-4'>
							<div className='w-3 h-3 bg-green-500 rounded-full animate-pulse mt-2'></div>
							<div>
								<h3 className='text-xl font-semibold mb-2'>
									Live Data Updates
								</h3>
								<p className='text-muted-foreground'>
									Your dashboard syncs with QuickBooks and
									bank accounts every 15 minutes. No waiting
									for month-end reports.
								</p>
							</div>
						</div>

						<div className='flex items-start space-x-4'>
							<MessageSquare className='h-6 w-6 text-primary mt-1' />
							<div>
								<h3 className='text-xl font-semibold mb-2'>
									Direct Communication
								</h3>
								<p className='text-muted-foreground'>
									Message Ray directly through your dashboard.
									Get questions answered and see his responses
									in real-time.
								</p>
							</div>
						</div>

						<div className='flex items-start space-x-4'>
							<BarChart3 className='h-6 w-6 text-primary mt-1' />
							<div>
								<h3 className='text-xl font-semibold mb-2'>
									Work Progress Tracking
								</h3>
								<p className='text-muted-foreground'>
									See exactly what Ray is working on and when
									your books are updated. Complete
									transparency in the bookkeeping process.
								</p>
							</div>
						</div>

						<div className='flex items-start space-x-4'>
							<Shield className='h-6 w-6 text-primary mt-1' />
							<div>
								<h3 className='text-xl font-semibold mb-2'>
									Bank-Level Security
								</h3>
								<p className='text-muted-foreground'>
									Your data is protected with enterprise-grade
									encryption and secure connections to your
									financial institutions.
								</p>
							</div>
						</div>
					</div>

					<div className='relative'>
						<div className='bg-gray-900 rounded-lg p-1'>
							<div className='bg-gray-800 rounded-lg p-3'>
								<div className='flex items-center space-x-2 mb-3'>
									<div className='w-3 h-3 bg-red-500 rounded-full'></div>
									<div className='w-3 h-3 bg-yellow-500 rounded-full'></div>
									<div className='w-3 h-3 bg-green-500 rounded-full'></div>
									<div className='flex-1 text-center text-xs text-gray-400'>
										dashboard.gallowaybookkeeping.com
									</div>
								</div>
							</div>
							<div className='bg-white rounded-b-lg px-6 py-8'>
								<div className='space-y-4'>
									<div className='flex justify-between items-center'>
										<h4 className='font-semibold'>
											Welcome back, Sarah!
										</h4>
										<div className='flex items-center space-x-1'>
											<div className='w-2 h-2 bg-green-500 rounded-full animate-pulse'></div>
											<span className='text-xs text-green-600'>
												Live
											</span>
										</div>
									</div>
									<div className='grid grid-cols-2 gap-3'>
										<div className='bg-green-50 p-3 rounded-lg text-center border border-green-200'>
											<div className='text-sm font-semibold text-green-700'>
												Revenue
											</div>
											<div className='text-lg font-bold'>
												$47,250
											</div>
										</div>
										<div className='bg-primary/10 p-3 rounded-lg text-center border border-primary/20'>
											<div className='text-sm font-semibold text-primary'>
												Profit
											</div>
											<div className='text-lg font-bold'>
												$15,360
											</div>
										</div>
									</div>
									<div className='bg-gray-50 p-3 rounded-lg'>
										<div className='text-xs font-semibold mb-2'>
											Ray is working on your books
										</div>
										<div className='text-xs text-muted-foreground'>
											Currently: November reconciliation •
											2 hrs ago
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className='absolute -bottom-4 -right-4 bg-primary text-primary-foreground p-3 rounded-full animate-bounce'>
							<span className='text-lg'>✨</span>
						</div>
					</div>
				</div>

				<div className='mt-16 grid grid-cols-1 md:grid-cols-3 gap-8'>
					<div className='text-center'>
						<div className='text-4xl font-bold text-primary mb-2'>
							60+
						</div>
						<div className='text-sm text-muted-foreground'>
							Hours saved per year
						</div>
					</div>
					<div className='text-center'>
						<div className='text-4xl font-bold text-primary mb-2'>
							15 min
						</div>
						<div className='text-sm text-muted-foreground'>
							Real-time data sync
						</div>
					</div>
					<div className='text-center'>
						<div className='text-4xl font-bold text-primary mb-2'>
							24/7
						</div>
						<div className='text-sm text-muted-foreground'>
							Dashboard access
						</div>
					</div>
				</div>

				<div className='text-center mt-12'>
					<Button
						size='lg'
						onClick={() => (window.location.href = '/dashboard')}>
						Experience Your Dashboard Now
					</Button>
				</div>
			</div>
		</section>
	);
}
