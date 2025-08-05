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
				<div className='navbar-end'>
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
							Accurate Books. Actionable Insights.
							<span className='text-primary'>
								{' '}
								More Time for Your Business.
							</span>
						</h1>
						<p className='text-xl mb-8 opacity-90'>
							Professional bookkeeping services for small
							businesses and freelancers. Get your finances
							organized with expert QuickBooks management, monthly
							reporting, and strategic insights that drive growth.
						</p>
						<div className='flex flex-col sm:flex-row gap-4 justify-center'>
							<a
								href='#contact'
								className='btn btn-primary btn-lg'>
								Schedule Free Consultation
							</a>
							<a
								href='#services'
								className='btn btn-outline btn-lg'>
								View Services
							</a>
						</div>

						{/* Trust Signals */}
						<div className='flex flex-wrap justify-center items-center gap-8 mt-12 opacity-70'>
							<div className='text-sm font-semibold'>
								QuickBooks Certified
							</div>
							<div className='text-sm font-semibold'>
								CPA Recommended
							</div>
							<div className='text-sm font-semibold'>
								10+ Years Experience
							</div>
						</div>
					</div>
				</div>
			</div>

			<ServicesSection />
			<AboutSection />
			<TestimonialsSection />
			<ContactSection />
			<Footer />
		</div>
	);
}
