export default function TestimonialsSection() {
	return (
		<section id='testimonials' className='py-20 bg-base-100'>
			<div className='container mx-auto px-4'>
				<div className='text-center mb-16'>
					<h2 className='text-4xl font-bold mb-4'>
						What Clients Say
					</h2>
					<p className='text-xl opacity-70'>
						Real feedback from real businesses
					</p>
				</div>

				<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
					<div className='card bg-base-200 shadow-xl'>
						<div className='card-body'>
							<div className='flex items-center mb-4'>
								<div className='avatar placeholder mr-3'>
									<div className='bg-primary text-primary-content rounded-full w-12'>
										<span className='text-lg'>SM</span>
									</div>
								</div>
								<div>
									<div className='font-semibold'>
										Sarah Mitchell
									</div>
									<div className='text-sm opacity-70'>
										Freelance Designer
									</div>
								</div>
							</div>
							<p className='mb-4'>
								&quot;Ray saved me hours every month and helped
								me understand my finances for the first time. My
								books are always perfect and tax season is
								stress-free!&quot;
							</p>
							<div className='rating rating-sm'>
								<input
									type='radio'
									name='rating-1'
									className='mask mask-star-2 bg-warning'
									disabled
									checked
								/>
								<input
									type='radio'
									name='rating-1'
									className='mask mask-star-2 bg-warning'
									disabled
									checked
								/>
								<input
									type='radio'
									name='rating-1'
									className='mask mask-star-2 bg-warning'
									disabled
									checked
								/>
								<input
									type='radio'
									name='rating-1'
									className='mask mask-star-2 bg-warning'
									disabled
									checked
								/>
								<input
									type='radio'
									name='rating-1'
									className='mask mask-star-2 bg-warning'
									disabled
									checked
								/>
							</div>
						</div>
					</div>

					<div className='card bg-base-200 shadow-xl'>
						<div className='card-body'>
							<div className='flex items-center mb-4'>
								<div className='avatar placeholder mr-3'>
									<div className='bg-secondary text-secondary-content rounded-full w-12'>
										<span className='text-lg'>MJ</span>
									</div>
								</div>
								<div>
									<div className='font-semibold'>
										Mike Johnson
									</div>
									<div className='text-sm opacity-70'>
										Restaurant Owner
									</div>
								</div>
							</div>
							<p className='mb-4'>
								&quot;Professional, reliable, and knowledgeable.
								Ray caught up three years of messy books and now
								handles everything monthly. Highly
								recommended!&quot;
							</p>
							<div className='rating rating-sm'>
								<input
									type='radio'
									name='rating-2'
									className='mask mask-star-2 bg-warning'
									disabled
									checked
								/>
								<input
									type='radio'
									name='rating-2'
									className='mask mask-star-2 bg-warning'
									disabled
									checked
								/>
								<input
									type='radio'
									name='rating-2'
									className='mask mask-star-2 bg-warning'
									disabled
									checked
								/>
								<input
									type='radio'
									name='rating-2'
									className='mask mask-star-2 bg-warning'
									disabled
									checked
								/>
								<input
									type='radio'
									name='rating-2'
									className='mask mask-star-2 bg-warning'
									disabled
									checked
								/>
							</div>
						</div>
					</div>

					<div className='card bg-base-200 shadow-xl'>
						<div className='card-body'>
							<div className='flex items-center mb-4'>
								<div className='avatar placeholder mr-3'>
									<div className='bg-accent text-accent-content rounded-full w-12'>
										<span className='text-lg'>LC</span>
									</div>
								</div>
								<div>
									<div className='font-semibold'>
										Lisa Chen
									</div>
									<div className='text-sm opacity-70'>
										E-commerce Store
									</div>
								</div>
							</div>
							<p className='mb-4'>
								&quot;Ray&apos;s monthly reports help me make
								better business decisions. The insights are
								invaluable and the service is always
								top-notch.&quot;
							</p>
							<div className='rating rating-sm'>
								<input
									type='radio'
									name='rating-3'
									className='mask mask-star-2 bg-warning'
									disabled
									checked
								/>
								<input
									type='radio'
									name='rating-3'
									className='mask mask-star-2 bg-warning'
									disabled
									checked
								/>
								<input
									type='radio'
									name='rating-3'
									className='mask mask-star-2 bg-warning'
									disabled
									checked
								/>
								<input
									type='radio'
									name='rating-3'
									className='mask mask-star-2 bg-warning'
									disabled
									checked
								/>
								<input
									type='radio'
									name='rating-3'
									className='mask mask-star-2 bg-warning'
									disabled
									checked
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
