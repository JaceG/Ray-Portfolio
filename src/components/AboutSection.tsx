export default function AboutSection() {
	return (
		<section id='about' className='py-20 bg-base-200'>
			<div className='container mx-auto px-4'>
				<div className='flex flex-col lg:flex-row items-center gap-12'>
					<div className='lg:w-1/3'>
						<div className='avatar'>
							<div className='w-64 rounded-xl shadow-lg'>
								{/* Placeholder for Ray's photo */}
								<div className='bg-gradient-to-br from-primary to-secondary w-full h-64 flex items-center justify-center text-white text-6xl font-bold'>
									RG
								</div>
							</div>
						</div>
					</div>
					<div className='lg:w-2/3'>
						<h2 className='text-4xl font-bold mb-6'>Hi, I'm Ray</h2>
						<p className='text-lg mb-6 opacity-90'>
							I'm ready to help you save an extra 60 hours on
							average per year by streamlining your bookkeeping!
							Let's work together to not only save you time, but
							eliminate costly errors in your books!
						</p>
						<p className='text-lg mb-6 opacity-90'>
							I have my Bachelor's degree in Accounting. I started
							my bookkeeping business because I love watching
							businesses grow and succeed. I have owned my own
							retail shops and consulting practice, so I
							understand the importance of having accurate and
							up-to-date books.
						</p>
						<p className='text-lg mb-8 opacity-90'>
							I want to learn more about your business. Tell me
							about your strengths, goals, and any bookkeeping
							challenges you have faced. I can tailor my services
							to fit your needs. Contact me now for a FREE
							evaluation of your books and to learn more about my
							first time client pricing offer!
						</p>

						{/* Credentials */}
						<div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
							<div className='text-center'>
								<div className='text-2xl mb-2'>🏆</div>
								<div className='text-sm font-semibold'>
									QuickBooks
								</div>
								<div className='text-xs opacity-70'>
									ProAdvisor
								</div>
							</div>
							<div className='text-center'>
								<div className='text-2xl mb-2'>📊</div>
								<div className='text-sm font-semibold'>
									10+ Years
								</div>
								<div className='text-xs opacity-70'>
									Experience
								</div>
							</div>
							<div className='text-center'>
								<div className='text-2xl mb-2'>👥</div>
								<div className='text-sm font-semibold'>
									100+
								</div>
								<div className='text-xs opacity-70'>
									Clients Served
								</div>
							</div>
							<div className='text-center'>
								<div className='text-2xl mb-2'>⭐</div>
								<div className='text-sm font-semibold'>
									5-Star
								</div>
								<div className='text-xs opacity-70'>
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
