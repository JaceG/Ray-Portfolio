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
						<h2 className='text-4xl font-bold mb-6'>
							Meet Ray Galloway
						</h2>
						<p className='text-lg mb-6 opacity-90'>
							With over 10 years of experience in financial
							management and bookkeeping, I help small businesses
							and freelancers take control of their finances. My
							passion is turning messy books into clear,
							actionable financial insights that drive business
							growth.
						</p>
						<p className='text-lg mb-8 opacity-90'>
							As a QuickBooks ProAdvisor and trusted partner to
							local CPAs, I provide reliable, accurate bookkeeping
							services that give you confidence in your financial
							decisions and more time to focus on what you do
							best.
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
