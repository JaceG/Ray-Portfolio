export default function ContactSection() {
	return (
		<section id='contact' className='py-20 bg-primary text-primary-content'>
			<div className='container mx-auto px-4'>
				<div className='max-w-4xl mx-auto'>
					<div className='text-center mb-12'>
						<h2 className='text-4xl font-bold mb-4'>
							Ready to Get Your Books in Order?
						</h2>
						<p className='text-xl opacity-90'>
							Schedule a free 15-minute consultation to discuss
							your bookkeeping needs
						</p>
					</div>

					<div className='grid md:grid-cols-2 gap-12 items-center'>
						{/* Contact Form */}
						<div className='card bg-base-100 text-base-content shadow-xl'>
							<div className='card-body'>
								<h3 className='card-title mb-4'>
									Get Your Free Consultation
								</h3>
								<form className='space-y-4'>
									<div className='form-control'>
										<label className='label'>
											<span className='label-text'>
												Your Name
											</span>
										</label>
										<input
											type='text'
											placeholder='Enter your name'
											className='input input-bordered'
											required
										/>
									</div>
									<div className='form-control'>
										<label className='label'>
											<span className='label-text'>
												Email Address
											</span>
										</label>
										<input
											type='email'
											placeholder='Enter your email'
											className='input input-bordered'
											required
										/>
									</div>
									<div className='form-control'>
										<label className='label'>
											<span className='label-text'>
												Business Type
											</span>
										</label>
										<select className='select select-bordered'>
											<option disabled selected>
												Select your business type
											</option>
											<option>
												Freelancer / Consultant
											</option>
											<option>E-commerce</option>
											<option>
												Restaurant / Food Service
											</option>
											<option>Retail</option>
											<option>
												Professional Services
											</option>
											<option>Other</option>
										</select>
									</div>
									<div className='form-control'>
										<label className='label'>
											<span className='label-text'>
												Tell us about your needs
											</span>
										</label>
										<textarea
											className='textarea textarea-bordered h-24'
											placeholder='Describe your current bookkeeping situation and what you need help with'></textarea>
									</div>
									<div className='form-control mt-6'>
										<button
											type='submit'
											className='btn btn-primary'>
											Schedule Free Consultation
										</button>
									</div>
								</form>
							</div>
						</div>

						{/* Contact Info */}
						<div className='space-y-8'>
							<div>
								<h3 className='text-2xl font-bold mb-4'>
									Get in Touch
								</h3>
								<p className='text-lg opacity-90 mb-6'>
									Ready to take the stress out of bookkeeping?
									Let&apos;s discuss how I can help your
									business stay organized and compliant.
								</p>
							</div>

							<div className='space-y-4'>
								<div className='flex items-center space-x-3'>
									<div className='text-2xl'>📧</div>
									<div>
										<div className='font-semibold'>
											Email
										</div>
										<div className='opacity-80'>
											ray@gallowaybookkeeping.com
										</div>
									</div>
								</div>
								<div className='flex items-center space-x-3'>
									<div className='text-2xl'>📱</div>
									<div>
										<div className='font-semibold'>
											Phone
										</div>
										<div className='opacity-80'>
											(555) 123-4567
										</div>
									</div>
								</div>
								<div className='flex items-center space-x-3'>
									<div className='text-2xl'>⏰</div>
									<div>
										<div className='font-semibold'>
											Response Time
										</div>
										<div className='opacity-80'>
											Within 24 hours
										</div>
									</div>
								</div>
							</div>

							<div className='mt-8'>
								<h4 className='font-semibold mb-3'>
									What to expect:
								</h4>
								<ul className='space-y-2 opacity-90'>
									<li>• Free 15-minute consultation call</li>
									<li>
										• Assessment of your current situation
									</li>
									<li>
										• Customized service recommendations
									</li>
									<li>• Transparent pricing discussion</li>
									<li>• No pressure, just helpful advice</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
