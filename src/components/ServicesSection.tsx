export default function ServicesSection() {
	return (
		<section id='services' className='py-20 bg-base-100'>
			<div className='container mx-auto px-4'>
				<div className='text-center mb-16'>
					<h2 className='text-4xl font-bold mb-4'>
						Professional Bookkeeping Services
					</h2>
					<p className='text-xl opacity-70 max-w-2xl mx-auto'>
						Comprehensive financial management solutions tailored to
						your business needs
					</p>
				</div>

				<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
					{/* Monthly Bookkeeping */}
					<div className='card bg-base-200 shadow-xl'>
						<div className='card-body'>
							<div className='text-primary text-3xl mb-4'>📊</div>
							<h3 className='card-title text-xl mb-3'>
								Monthly Bookkeeping
							</h3>
							<p className='mb-4'>
								Complete monthly reconciliation, categorization,
								and financial statement preparation. Keep your
								books current and compliant.
							</p>
							<ul className='text-sm opacity-80 space-y-1'>
								<li>• Bank & credit card reconciliation</li>
								<li>• Transaction categorization</li>
								<li>• Monthly financial statements</li>
								<li>• QuickBooks maintenance</li>
							</ul>
						</div>
					</div>

					{/* Catch-Up Services */}
					<div className='card bg-base-200 shadow-xl'>
						<div className='card-body'>
							<div className='text-primary text-3xl mb-4'>🔧</div>
							<h3 className='card-title text-xl mb-3'>
								Catch-Up & Clean-Up
							</h3>
							<p className='mb-4'>
								Behind on your books? We'll get you caught up
								and organized, no matter how far back you need
								to go.
							</p>
							<ul className='text-sm opacity-80 space-y-1'>
								<li>• Multi-year catch-up services</li>
								<li>• Data cleanup & organization</li>
								<li>• Error correction</li>
								<li>• Chart of accounts optimization</li>
							</ul>
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
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
