export default function AboutSection() {
	return (
		<section id='about' className='py-20 bg-white'>
			<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto'>
					<div className='lg:w-1/3'>
						<div className='relative'>
							<div className='w-64 h-64 rounded-xl shadow-lg overflow-hidden'>
								{/* Placeholder for Ray's photo */}
								<div className='bg-gradient-to-br from-primary to-primary/80 w-full h-full flex items-center justify-center text-white text-6xl font-bold'>
									RG
								</div>
							</div>
							<div className='absolute -bottom-4 -right-4 bg-qb-green-100 text-primary p-4 rounded-lg shadow-lg'>
								<div className='text-2xl font-bold'>10+</div>
								<div className='text-sm'>Years Experience</div>
							</div>
						</div>
					</div>
					<div className='lg:w-2/3'>
						<h2 className='text-3xl sm:text-4xl font-bold mb-6'>
							Hi, I'm Ray
						</h2>
						<p className='text-lg text-muted-foreground mb-6'>
							I'm ready to help you save an extra 60 hours on
							average per year by streamlining your bookkeeping!
							Let's work together to not only save you time, but
							eliminate costly errors in your books!
						</p>
						<p className='text-lg text-muted-foreground mb-6'>
							I have my Bachelor's degree in Accounting. I started
							my bookkeeping business because I love watching
							businesses grow and succeed. I have owned my own
							retail shops and consulting practice, so I
							understand the importance of having accurate and
							up-to-date books.
						</p>
						<p className='text-lg text-muted-foreground mb-8'>
							I want to learn more about your business. Tell me
							about your strengths, goals, and any bookkeeping
							challenges you have faced. I can tailor my services
							to fit your needs. Contact me now for a FREE
							evaluation of your books and to learn more about my
							first time client pricing offer!
						</p>

						{/* Credentials */}
						<div className='grid grid-cols-2 md:grid-cols-4 gap-6 p-6 bg-gray-50 rounded-lg'>
							<div className='text-center'>
								<div className='w-12 h-12 bg-qb-green-100 rounded-lg flex items-center justify-center mx-auto mb-2'>
									<span className='text-2xl'>🏆</span>
								</div>
								<div className='font-semibold'>QuickBooks</div>
								<div className='text-sm text-muted-foreground'>
									ProAdvisor
								</div>
							</div>
							<div className='text-center'>
								<div className='w-12 h-12 bg-qb-green-100 rounded-lg flex items-center justify-center mx-auto mb-2'>
									<span className='text-2xl'>🎓</span>
								</div>
								<div className='font-semibold'>Bachelor's</div>
								<div className='text-sm text-muted-foreground'>
									Accounting
								</div>
							</div>
							<div className='text-center'>
								<div className='w-12 h-12 bg-qb-green-100 rounded-lg flex items-center justify-center mx-auto mb-2'>
									<span className='text-2xl'>👥</span>
								</div>
								<div className='font-semibold'>100+</div>
								<div className='text-sm text-muted-foreground'>
									Clients Served
								</div>
							</div>
							<div className='text-center'>
								<div className='w-12 h-12 bg-qb-green-100 rounded-lg flex items-center justify-center mx-auto mb-2'>
									<span className='text-2xl'>⭐</span>
								</div>
								<div className='font-semibold'>5-Star</div>
								<div className='text-sm text-muted-foreground'>
									Reviews
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
