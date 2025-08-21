export default function ServicesSection() {
	return (
		<section id='services' className='py-20 bg-base-100'>
			<div className='container mx-auto px-4'>
				<div className='text-center mb-16'>
					<h2 className='text-4xl font-bold mb-4'>Our Services</h2>
					<p className='text-xl opacity-70 max-w-3xl mx-auto'>
						We provide accurate, dependable bookkeeping services
						tailored to the needs of small businesses, solopreneurs,
						and growing companies. Whether you are just starting
						out, catching up, or scaling fast - we keep your
						financial records clean, compliant, and ready for smart
						financial decision making.
					</p>
				</div>

				<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
					{/* QuickBooks Setup */}
					<div className='card bg-base-200 shadow-xl'>
						<div className='card-body'>
							<div className='text-primary text-3xl mb-4'>⚙️</div>
							<h3 className='card-title text-xl mb-3'>
								QuickBooks Setup
							</h3>
							<p className='mb-4'>
								We set up QuickBooks to match your business
								needs - so you're ready for reliable bookkeeping
								from day one. We will set up your QuickBooks
								account to fit your business, not the other way
								around. From choosing the right version to
								customizing your setup, we make sure everything
								is organized and easy to use.
							</p>
							<ul className='text-sm opacity-80 space-y-1'>
								<li>• QuickBooks version selection</li>
								<li>• Custom chart of accounts</li>
								<li>• Banking connections setup</li>
								<li>• User training & support</li>
							</ul>
							<div className='card-actions justify-end mt-4'>
								<a
									href='#contact'
									className='btn btn-primary btn-sm'>
									Book Now
								</a>
							</div>
						</div>
					</div>
					{/* Monthly Bookkeeping */}
					<div className='card bg-base-200 shadow-xl'>
						<div className='card-body'>
							<div className='text-primary text-3xl mb-4'>📊</div>
							<h3 className='card-title text-xl mb-3'>
								Monthly Bookkeeping
							</h3>
							<p className='mb-4'>
								Stay on top of your finances with accurate,
								reliable monthly bookkeeping. We record your
								transactions, reconcile your accounts, and
								deliver clean financial reports - so you always
								know where your business stands. No stress, no
								surprises - just solid bookkeeping.
							</p>
							<ul className='text-sm opacity-80 space-y-1'>
								<li>• Bank & credit card reconciliation</li>
								<li>• Transaction categorization</li>
								<li>• Monthly financial statements</li>
								<li>• QuickBooks maintenance</li>
							</ul>
							<div className='card-actions justify-end mt-4'>
								<a
									href='#contact'
									className='btn btn-primary btn-sm'>
									Book Now
								</a>
							</div>
						</div>
					</div>

					{/* Catch-Up Services */}
					<div className='card bg-base-200 shadow-xl'>
						<div className='card-body'>
							<div className='text-primary text-3xl mb-4'>🔧</div>
							<h3 className='card-title text-xl mb-3'>
								Cleanup Bookkeeping
							</h3>
							<p className='mb-4'>
								If your books are behind, unorganized, or full
								of errors, don't stress - we are here to help!
								We will sort through the chaos, clean up your
								transactions, and get your books back in shape
								so you can make smart financial decisions and
								stay tax-ready.
							</p>
							<ul className='text-sm opacity-80 space-y-1'>
								<li>• Multi-year catch-up services</li>
								<li>• Data cleanup & organization</li>
								<li>• Error correction</li>
								<li>• Chart of accounts optimization</li>
							</ul>
							<div className='card-actions justify-end mt-4'>
								<a
									href='#contact'
									className='btn btn-primary btn-sm'>
									Book Now
								</a>
							</div>
						</div>
					</div>

					{/* Tax Preparation Support */}
					<div className='card bg-base-200 shadow-xl'>
						<div className='card-body'>
							<div className='text-primary text-3xl mb-4'>📋</div>
							<h3 className='card-title text-xl mb-3'>
								Tax Prep Support
							</h3>
							<p className='mb-4'>
								Year-end financial statements and organized
								records that make tax preparation smooth and
								stress-free.
							</p>
							<ul className='text-sm opacity-80 space-y-1'>
								<li>• Year-end financial statements</li>
								<li>• 1099 preparation & filing</li>
								<li>• Tax document organization</li>
								<li>• CPA collaboration</li>
							</ul>
							<div className='card-actions justify-end mt-4'>
								<a
									href='#contact'
									className='btn btn-primary btn-sm'>
									Book Now
								</a>
							</div>
						</div>
					</div>

					{/* Payroll Services */}
					<div className='card bg-base-200 shadow-xl'>
						<div className='card-body'>
							<div className='text-primary text-3xl mb-4'>💰</div>
							<h3 className='card-title text-xl mb-3'>
								Payroll & Sales Tax
							</h3>
							<p className='mb-4'>
								Accurate payroll processing and sales tax
								management to keep you compliant and worry-free.
							</p>
							<ul className='text-sm opacity-80 space-y-1'>
								<li>• Bi-weekly/monthly payroll</li>
								<li>• Payroll tax filings</li>
								<li>• Sales tax calculations</li>
								<li>• Quarterly reporting</li>
							</ul>
							<div className='card-actions justify-end mt-4'>
								<a
									href='#contact'
									className='btn btn-primary btn-sm'>
									Book Now
								</a>
							</div>
						</div>
					</div>

					{/* Financial Reporting */}
					<div className='card bg-base-200 shadow-xl'>
						<div className='card-body'>
							<div className='text-primary text-3xl mb-4'>📈</div>
							<h3 className='card-title text-xl mb-3'>
								Financial Insights
							</h3>
							<p className='mb-4'>
								Monthly reports and analysis that help you
								understand your financial position and make
								informed decisions.
							</p>
							<ul className='text-sm opacity-80 space-y-1'>
								<li>• Profit & loss analysis</li>
								<li>• Cash flow reporting</li>
								<li>• Budget vs. actual comparisons</li>
								<li>• Key performance metrics</li>
							</ul>
							<div className='card-actions justify-end mt-4'>
								<a
									href='#contact'
									className='btn btn-primary btn-sm'>
									Book Now
								</a>
							</div>
						</div>
					</div>

					{/* QuickBooks Training */}
					<div className='card bg-base-200 shadow-xl'>
						<div className='card-body'>
							<div className='text-primary text-3xl mb-4'>🎓</div>
							<h3 className='card-title text-xl mb-3'>
								QuickBooks Training
							</h3>
							<p className='mb-4'>
								Learn to manage your own books with personalized
								training and ongoing support for QuickBooks.
							</p>
							<ul className='text-sm opacity-80 space-y-1'>
								<li>• One-on-one training sessions</li>
								<li>• Custom workflow setup</li>
								<li>• Best practices guidance</li>
								<li>• Ongoing support</li>
							</ul>
							<div className='card-actions justify-end mt-4'>
								<a
									href='#contact'
									className='btn btn-primary btn-sm'>
									Book Now
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
