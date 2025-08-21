import ServicesSection from '@/components/ServicesSection';
import AboutSection from '@/components/AboutSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
	return (
		<div data-theme='business' className='min-h-screen'>
			{/* Navigation Header */}
			<div className='navbar bg-base-100 shadow-lg'>
				<div className='navbar-start'>
					<div className='dropdown'>
						<div
							tabIndex={0}
							role='button'
							className='btn btn-ghost lg:hidden'>
							<svg
								className='w-5 h-5'
								fill='none'
								stroke='currentColor'
								viewBox='0 0 24 24'>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth='2'
									d='M4 6h16M4 12h8m-8 6h16'
								/>
							</svg>
						</div>
						<ul
							tabIndex={0}
							className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'>
							<li>
								<a href='#services'>Services</a>
							</li>
							<li>
								<a href='#about'>About</a>
							</li>
							<li>
								<a href='#testimonials'>Testimonials</a>
							</li>
							<li>
								<a href='#contact'>Contact</a>
							</li>
						</ul>
					</div>
					<a className='btn btn-ghost text-xl font-bold'>
						Ray Galloway
					</a>
				</div>
				<div className='navbar-center hidden lg:flex'>
					<ul className='menu menu-horizontal px-1'>
						<li>
							<a href='#services' className='hover:text-primary'>
								Services
							</a>
						</li>
						<li>
							<a href='#about' className='hover:text-primary'>
								About
							</a>
						</li>
						<li>
							<a
								href='#testimonials'
								className='hover:text-primary'>
								Testimonials
							</a>
						</li>
						<li>
							<a href='#contact' className='hover:text-primary'>
								Contact
							</a>
						</li>
					</ul>
				</div>
				<div className='navbar-end space-x-2'>
					<a href='/auth' className='btn btn-ghost btn-sm'>
						Client Login
					</a>
					<a href='#contact' className='btn btn-primary'>
						Free Consultation
					</a>
				</div>
			</div>

			{/* Hero Section */}
			<div className='hero min-h-screen bg-gradient-to-br from-base-200 to-base-300'>
				<div className='hero-content text-center max-w-4xl'>
					<div>
						<h1 className='text-5xl font-bold mb-6'>
							I Handle the Books -
							<span className='text-primary'>
								{' '}
								You Handle the Business
							</span>
						</h1>
						<p className='text-xl mb-4 opacity-90'>
							Save an average of{' '}
							<span className='font-bold text-primary'>
								60+ hours per year
							</span>{' '}
							with professional bookkeeping that eliminates costly
							errors and gives you clear financial insights.
						</p>
						<p className='text-lg mb-8 opacity-80'>
							Watch your books get organized in real-time through
							your private client dashboard. Expert QuickBooks
							management with live data updates and direct
							communication with Ray.
						</p>
						<div className='flex flex-col sm:flex-row gap-4 justify-center'>
							<a
								href='#contact'
								className='btn btn-primary btn-lg'>
								Get Your FREE Book Evaluation
							</a>
							<a
								href='#services'
								className='btn btn-outline btn-lg'>
								Explore Services
							</a>
						</div>

						{/* Demo Dashboard Link */}
						<div className='mt-8'>
							<a
								href='/dashboard'
								className='btn btn-secondary btn-lg relative'>
								<span className='flex items-center gap-2'>
									📊 Experience Your Live Dashboard
									<div className='w-2 h-2 bg-success rounded-full animate-pulse'></div>
								</span>
							</a>
							<p className='text-sm opacity-60 mt-2'>
								See real-time financial updates in action
							</p>
						</div>

						{/* Enhanced Trust Signals with Certifications */}
						<div className='flex flex-wrap justify-center items-center gap-8 mt-12'>
							<div className='text-center'>
								<div className='text-2xl mb-1'>🏆</div>
								<div className='text-sm font-semibold'>
									QuickBooks
								</div>
								<div className='text-xs opacity-70'>
									ProAdvisor Certified
								</div>
							</div>
							<div className='text-center'>
								<div className='text-2xl mb-1'>🎓</div>
								<div className='text-sm font-semibold'>
									Bachelor's Degree
								</div>
								<div className='text-xs opacity-70'>
									Accounting
								</div>
							</div>
							<div className='text-center'>
								<div className='text-2xl mb-1'>📊</div>
								<div className='text-sm font-semibold'>
									10+ Years
								</div>
								<div className='text-xs opacity-70'>
									Experience
								</div>
							</div>
							<div className='text-center'>
								<div className='text-2xl mb-1'>⭐</div>
								<div className='text-sm font-semibold'>CPA</div>
								<div className='text-xs opacity-70'>
									Recommended
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Real-Time Dashboard Section */}
			<section className='py-20 bg-gradient-to-br from-base-100 to-base-200'>
				<div className='container mx-auto px-4'>
					<div className='text-center mb-16'>
						<h2 className='text-4xl font-bold mb-4'>
							Your Business,{' '}
							<span className='text-primary'>
								Live & Transparent
							</span>
						</h2>
						<p className='text-xl opacity-70 max-w-3xl mx-auto'>
							Unlike traditional bookkeepers who send monthly
							reports, you get real-time access to your financial
							data 24/7. Watch Ray work on your books and see
							updates as they happen.
						</p>
					</div>

					<div className='grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto'>
						<div className='space-y-8'>
							<div className='flex items-start space-x-4'>
								<div className='w-3 h-3 bg-success rounded-full animate-pulse mt-2'></div>
								<div>
									<h3 className='text-xl font-semibold mb-2'>
										Live Data Updates
									</h3>
									<p className='opacity-80'>
										Your dashboard syncs with QuickBooks and
										bank accounts every 15 minutes. No
										waiting for month-end reports.
									</p>
								</div>
							</div>

							<div className='flex items-start space-x-4'>
								<div className='text-2xl'>💬</div>
								<div>
									<h3 className='text-xl font-semibold mb-2'>
										Direct Communication
									</h3>
									<p className='opacity-80'>
										Message Ray directly through your
										dashboard. Get questions answered and
										see his responses in real-time.
									</p>
								</div>
							</div>

							<div className='flex items-start space-x-4'>
								<div className='text-2xl'>📊</div>
								<div>
									<h3 className='text-xl font-semibold mb-2'>
										Work Progress Tracking
									</h3>
									<p className='opacity-80'>
										See exactly what Ray is working on and
										when your books are updated. Complete
										transparency in the bookkeeping process.
									</p>
								</div>
							</div>

							<div className='flex items-start space-x-4'>
								<div className='text-2xl'>🔒</div>
								<div>
									<h3 className='text-xl font-semibold mb-2'>
										Bank-Level Security
									</h3>
									<p className='opacity-80'>
										Your data is protected with
										enterprise-grade encryption and secure
										connections to your financial
										institutions.
									</p>
								</div>
							</div>
						</div>

						<div className='relative'>
							<div className='mockup-browser bg-base-300 border'>
								<div className='mockup-browser-toolbar'>
									<div className='input'>
										dashboard.gallowaybookkeeping.com
									</div>
								</div>
								<div className='bg-base-200 px-6 py-8'>
									<div className='space-y-4'>
										<div className='flex justify-between items-center'>
											<h4 className='font-semibold'>
												Welcome back, Sarah!
											</h4>
											<div className='flex items-center space-x-1'>
												<div className='w-2 h-2 bg-success rounded-full animate-pulse'></div>
												<span className='text-xs text-success'>
													Live
												</span>
											</div>
										</div>
										<div className='grid grid-cols-2 gap-3'>
											<div className='bg-success/20 p-3 rounded text-center'>
												<div className='text-sm font-semibold text-success'>
													Revenue
												</div>
												<div className='text-lg font-bold'>
													$47,250
												</div>
											</div>
											<div className='bg-primary/20 p-3 rounded text-center'>
												<div className='text-sm font-semibold text-primary'>
													Profit
												</div>
												<div className='text-lg font-bold'>
													$15,360
												</div>
											</div>
										</div>
										<div className='bg-base-100 p-3 rounded'>
											<div className='text-xs font-semibold mb-2'>
												Ray is working on your books
											</div>
											<div className='text-xs opacity-70'>
												Currently: November
												reconciliation • 2 hrs ago
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className='absolute -bottom-4 -right-4 bg-primary text-primary-content p-3 rounded-full animate-bounce'>
								<span className='text-lg'>✨</span>
							</div>
						</div>
					</div>

					<div className='text-center mt-12'>
						<a href='/dashboard' className='btn btn-primary btn-lg'>
							Experience Your Dashboard Now
						</a>
					</div>
				</div>
			</section>

			<ServicesSection />
			<AboutSection />
			<TestimonialsSection />
			<ContactSection />
			<Footer />
		</div>
	);
}
