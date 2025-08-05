export default function Footer() {
	return (
		<footer className='footer footer-center p-10 bg-base-200 text-base-content rounded'>
			<nav className='grid grid-flow-col gap-4'>
				<a href='#services' className='link link-hover'>
					Services
				</a>
				<a href='#about' className='link link-hover'>
					About
				</a>
				<a href='#testimonials' className='link link-hover'>
					Testimonials
				</a>
				<a href='#contact' className='link link-hover'>
					Contact
				</a>
			</nav>
			<nav>
				<div className='grid grid-flow-col gap-4'>
					<a
						href='mailto:ray@gallowaybookkeeping.com'
						className='text-2xl hover:text-primary'>
						📧
					</a>
					<a
						href='tel:+15551234567'
						className='text-2xl hover:text-primary'>
						📱
					</a>
					<a
						href='https://linkedin.com/in/raygalloway'
						className='text-2xl hover:text-primary'>
						💼
					</a>
				</div>
			</nav>
			<aside>
				<p className='font-bold'>
					Ray Galloway Professional Bookkeeping
				</p>
				<p>
					Accurate books, actionable insights, more time for your
					business.
				</p>
				<p>Copyright © 2024 - All rights reserved</p>
			</aside>
		</footer>
	);
}
