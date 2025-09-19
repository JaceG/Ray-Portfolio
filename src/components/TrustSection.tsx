import { TrustBadges } from './TrustBadges';
import { Card, CardContent } from './ui/card';
import { Shield, Star, Users, CheckCircle, Quote } from 'lucide-react';

// TODO: Replace placeholder testimonials with actual client reviews
// See SETUP.md for detailed instructions on customizing content

export function TrustSection() {
	return (
		<section className='py-20 bg-gradient-to-br from-qb-green-50 to-white'>
			<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='max-w-6xl mx-auto'>
					{/* Main Trust Badges */}
					<TrustBadges variant='grid' />

					{/* Featured Client Success */}
					<div className='mt-16 grid lg:grid-cols-3 gap-8'>
						<Card className='bg-white shadow-lg'>
							<CardContent className='pt-6'>
								<div className='flex items-center mb-4'>
									<Quote className='h-8 w-8 text-primary mr-3' />
									<div className='flex text-yellow-400'>
										{[...Array(5)].map((_, i) => (
											<Star
												key={i}
												className='h-4 w-4 fill-current'
											/>
										))}
									</div>
								</div>
								<p className='text-sm text-muted-foreground mb-4 italic'>
									"Ray transformed our messy books into a
									clear financial picture. We went from
									spending 15 hours a month on bookkeeping to
									zero. His detailed reports show us exactly
									where our Columbus area construction
									business stands at any moment."
								</p>
								<div className='flex items-center'>
									<div className='w-10 h-10 bg-qb-green-100 rounded-full flex items-center justify-center mr-3'>
										<span className='text-primary font-semibold text-sm'>
											JM
										</span>
									</div>
									<div>
										<p className='font-semibold text-sm'>
											John Miller
										</p>
										<p className='text-xs text-muted-foreground'>
											Miller Construction, Columbus OH
										</p>
									</div>
								</div>
							</CardContent>
						</Card>

						<Card className='bg-white shadow-lg'>
							<CardContent className='pt-6'>
								<div className='flex items-center mb-4'>
									<Quote className='h-8 w-8 text-primary mr-3' />
									<div className='flex text-yellow-400'>
										{[...Array(5)].map((_, i) => (
											<Star
												key={i}
												className='h-4 w-4 fill-current'
											/>
										))}
									</div>
								</div>
								<p className='text-sm text-muted-foreground mb-4 italic'>
									"As a busy restaurant owner in Powell, I
									needed someone who understood food service
									accounting. Ray's expertise and detailed
									financial reports have been game-changers
									for our cash flow management."
								</p>
								<div className='flex items-center'>
									<div className='w-10 h-10 bg-qb-green-100 rounded-full flex items-center justify-center mr-3'>
										<span className='text-primary font-semibold text-sm'>
											SK
										</span>
									</div>
									<div>
										<p className='font-semibold text-sm'>
											Sarah Kim
										</p>
										<p className='text-xs text-muted-foreground'>
											Kim's Kitchen, Powell OH
										</p>
									</div>
								</div>
							</CardContent>
						</Card>

						<Card className='bg-white shadow-lg'>
							<CardContent className='pt-6'>
								<div className='flex items-center mb-4'>
									<Quote className='h-8 w-8 text-primary mr-3' />
									<div className='flex text-yellow-400'>
										{[...Array(5)].map((_, i) => (
											<Star
												key={i}
												className='h-4 w-4 fill-current'
											/>
										))}
									</div>
								</div>
								<p className='text-sm text-muted-foreground mb-4 italic'>
									"Ray caught $8,000 in errors our previous
									bookkeeper missed. His attention to detail
									and knowledge of Columbus area business tax
									requirements saved us from a major headache
									with the IRS."
								</p>
								<div className='flex items-center'>
									<div className='w-10 h-10 bg-qb-green-100 rounded-full flex items-center justify-center mr-3'>
										<span className='text-primary font-semibold text-sm'>
											DT
										</span>
									</div>
									<div>
										<p className='font-semibold text-sm'>
											David Thompson
										</p>
										<p className='text-xs text-muted-foreground'>
											Thompson Consulting, Dublin OH
										</p>
									</div>
								</div>
							</CardContent>
						</Card>
					</div>

					{/* Security & Compliance */}
					<div className='mt-16 bg-white rounded-xl shadow-lg p-8'>
						<div className='text-center mb-8'>
							<Shield className='h-12 w-12 text-primary mx-auto mb-4' />
							<h3 className='text-2xl font-bold mb-2'>
								Your Data is Safe & Secure
							</h3>
							<p className='text-muted-foreground'>
								Professional-grade security and compliance
								standards protect your sensitive financial
								information
							</p>
						</div>

						<div className='grid md:grid-cols-3 gap-6'>
							<div className='text-center'>
								<div className='w-16 h-16 bg-qb-green-100 rounded-full flex items-center justify-center mx-auto mb-4'>
									<Shield className='h-8 w-8 text-primary' />
								</div>
								<h4 className='font-semibold mb-2'>
									Bank-Level Encryption
								</h4>
								<p className='text-sm text-muted-foreground'>
									All data transfers use 256-bit SSL
									encryption, the same security banks use for
									online transactions.
								</p>
							</div>

							<div className='text-center'>
								<div className='w-16 h-16 bg-qb-green-100 rounded-full flex items-center justify-center mx-auto mb-4'>
									<CheckCircle className='h-8 w-8 text-primary' />
								</div>
								<h4 className='font-semibold mb-2'>
									QuickBooks Certified
								</h4>
								<p className='text-sm text-muted-foreground'>
									Intuit-certified ProAdvisor with advanced
									training in QuickBooks security and best
									practices.
								</p>
							</div>

							<div className='text-center'>
								<div className='w-16 h-16 bg-qb-green-100 rounded-full flex items-center justify-center mx-auto mb-4'>
									<Users className='h-8 w-8 text-primary' />
								</div>
								<h4 className='font-semibold mb-2'>
									Local & Trusted
								</h4>
								<p className='text-sm text-muted-foreground'>
									Columbus area local with deep roots in the
									community and a reputation built on trust
									and results.
								</p>
							</div>
						</div>
					</div>

					{/* Call to Action */}
					<div className='mt-12 text-center'>
						<p className='text-lg text-muted-foreground mb-4'>
							Join 100+ Columbus area businesses that trust Ray
							with their books
						</p>
						<div className='text-sm text-muted-foreground'>
							<span className='inline-flex items-center gap-2 mr-6'>
								<CheckCircle className='h-4 w-4 text-green-600' />
								No setup fees
							</span>
							<span className='inline-flex items-center gap-2 mr-6'>
								<CheckCircle className='h-4 w-4 text-green-600' />
								Cancel anytime
							</span>
							<span className='inline-flex items-center gap-2'>
								<CheckCircle className='h-4 w-4 text-green-600' />
								First month 50% off
							</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
