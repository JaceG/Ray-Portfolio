import Link from 'next/link';

export default function Dashboard() {
	// Sample data for the dashboard
	const currentMonth = 'November 2024';
	const financialData = {
		revenue: 47250,
		expenses: 31890,
		profit: 15360,
		lastMonthProfit: 12840,
		cashFlow: 23450,
		accountsReceivable: 8900,
		accountsPayable: 5670,
	};

	const revenueData = [
		{ month: 'Jul', amount: 38000 },
		{ month: 'Aug', amount: 42000 },
		{ month: 'Sep', amount: 39000 },
		{ month: 'Oct', amount: 44000 },
		{ month: 'Nov', amount: 47250 },
	];

	const expenseCategories = [
		{ category: 'Payroll', amount: 18500, percentage: 58 },
		{ category: 'Office Rent', amount: 4200, percentage: 13 },
		{ category: 'Marketing', amount: 3200, percentage: 10 },
		{ category: 'Utilities', amount: 1890, percentage: 6 },
		{ category: 'Software', amount: 2100, percentage: 7 },
		{ category: 'Other', amount: 2000, percentage: 6 },
	];

	const recentTransactions = [
		{
			date: '2024-11-28',
			description: 'Client Payment - ABC Corp',
			amount: 5500,
			type: 'income',
		},
		{
			date: '2024-11-27',
			description: 'Office Supplies - Staples',
			amount: -287,
			type: 'expense',
		},
		{
			date: '2024-11-26',
			description: 'Marketing Campaign - Google Ads',
			amount: -450,
			type: 'expense',
		},
		{
			date: '2024-11-25',
			description: 'Client Payment - XYZ Ltd',
			amount: 3200,
			type: 'income',
		},
		{
			date: '2024-11-24',
			description: 'Software Subscription - Adobe',
			amount: -79,
			type: 'expense',
		},
		{
			date: '2024-11-23',
			description: 'Consulting Services - DEF Inc',
			amount: 2800,
			type: 'income',
		},
	];

	const formatCurrency = (amount: number) => {
		return new Intl.NumberFormat('en-US', {
			style: 'currency',
			currency: 'USD',
		}).format(amount);
	};

	const calculateChange = (current: number, previous: number) => {
		const change = ((current - previous) / previous) * 100;
		return {
			percentage: Math.abs(change).toFixed(1),
			isPositive: change > 0,
		};
	};

	const profitChange = calculateChange(
		financialData.profit,
		financialData.lastMonthProfit
	);

	return (
		<div data-theme='business' className='min-h-screen bg-base-200'>
			{/* Header */}
			<div className='navbar bg-base-100 shadow-lg'>
				<div className='navbar-start'>
					<Link href='/' className='btn btn-ghost text-xl font-bold'>
						← Ray Galloway Bookkeeping
					</Link>
				</div>
				<div className='navbar-center'>
					<h1 className='text-xl font-semibold'>Client Dashboard</h1>
				</div>
				<div className='navbar-end space-x-2'>
					{/* Real-time Status Indicator */}
					<div className='flex items-center space-x-2'>
						<div className='flex items-center space-x-1'>
							<div className='w-2 h-2 bg-success rounded-full animate-pulse'></div>
							<span className='text-xs text-success'>Live</span>
						</div>
						<div className='text-sm opacity-70'>
							Last updated: 2 min ago
						</div>
					</div>
					<div className='text-sm opacity-70'>{currentMonth}</div>
					<Link href='/auth' className='btn btn-ghost btn-sm'>
						Logout
					</Link>
				</div>
			</div>

			<div className='p-6'>
				{/* Dashboard Header */}
				<div className='mb-8'>
					<div className='flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4'>
						<div>
							<h2 className='text-3xl font-bold mb-2'>
								Welcome back, Sarah!
							</h2>
							<p className='text-lg opacity-70'>
								Here's your financial overview for{' '}
								{currentMonth}
							</p>
						</div>

						{/* Ray's Work Status */}
						<div className='card bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20'>
							<div className='card-body py-4 px-6'>
								<div className='flex items-center space-x-3'>
									<div className='avatar placeholder'>
										<div className='bg-primary text-primary-content rounded-full w-10'>
											<span className='text-sm'>RG</span>
										</div>
									</div>
									<div>
										<p className='text-sm font-semibold'>
											Ray is working on your books
										</p>
										<p className='text-xs opacity-70'>
											Currently: November reconciliation •
											2 hours ago
										</p>
									</div>
									<div className='text-primary'>
										<svg
											className='w-4 h-4 animate-spin'
											fill='none'
											viewBox='0 0 24 24'>
											<circle
												className='opacity-25'
												cx='12'
												cy='12'
												r='10'
												stroke='currentColor'
												strokeWidth='4'></circle>
											<path
												className='opacity-75'
												fill='currentColor'
												d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'></path>
										</svg>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Financial Overview Cards */}
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8'>
					{/* Revenue Card */}
					<div className='card bg-gradient-to-br from-success to-success/80 text-success-content shadow-xl'>
						<div className='card-body'>
							<div className='flex items-center justify-between'>
								<div>
									<p className='text-success-content/70 text-sm'>
										Total Revenue
									</p>
									<p className='text-2xl font-bold'>
										{formatCurrency(financialData.revenue)}
									</p>
								</div>
								<div className='text-3xl'>💰</div>
							</div>
						</div>
					</div>

					{/* Expenses Card */}
					<div className='card bg-gradient-to-br from-warning to-warning/80 text-warning-content shadow-xl'>
						<div className='card-body'>
							<div className='flex items-center justify-between'>
								<div>
									<p className='text-warning-content/70 text-sm'>
										Total Expenses
									</p>
									<p className='text-2xl font-bold'>
										{formatCurrency(financialData.expenses)}
									</p>
								</div>
								<div className='text-3xl'>📊</div>
							</div>
						</div>
					</div>

					{/* Profit Card */}
					<div className='card bg-gradient-to-br from-primary to-primary/80 text-primary-content shadow-xl'>
						<div className='card-body'>
							<div className='flex items-center justify-between'>
								<div>
									<p className='text-primary-content/70 text-sm'>
										Net Profit
									</p>
									<p className='text-2xl font-bold'>
										{formatCurrency(financialData.profit)}
									</p>
									<div className='flex items-center mt-1'>
										<span
											className={`text-xs ${
												profitChange.isPositive
													? 'text-success'
													: 'text-error'
											}`}>
											{profitChange.isPositive
												? '↗'
												: '↘'}{' '}
											{profitChange.percentage}% vs last
											month
										</span>
									</div>
								</div>
								<div className='text-3xl'>📈</div>
							</div>
						</div>
					</div>

					{/* Cash Flow Card */}
					<div className='card bg-gradient-to-br from-info to-info/80 text-info-content shadow-xl'>
						<div className='card-body'>
							<div className='flex items-center justify-between'>
								<div>
									<p className='text-info-content/70 text-sm'>
										Cash Flow
									</p>
									<p className='text-2xl font-bold'>
										{formatCurrency(financialData.cashFlow)}
									</p>
								</div>
								<div className='text-3xl'>💵</div>
							</div>
						</div>
					</div>
				</div>

				{/* Charts Section */}
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8'>
					{/* Revenue Trend Chart */}
					<div className='card bg-base-100 shadow-xl'>
						<div className='card-body'>
							<h3 className='card-title mb-4'>
								Revenue Trend (Last 5 Months)
							</h3>
							<div className='space-y-3'>
								{revenueData.map((item, index) => (
									<div
										key={item.month}
										className='flex items-center justify-between'>
										<span className='text-sm font-medium w-12'>
											{item.month}
										</span>
										<div className='flex-1 mx-4'>
											<div className='bg-base-300 rounded-full h-3'>
												<div
													className='bg-gradient-to-r from-primary to-secondary h-3 rounded-full transition-all duration-500'
													style={{
														width: `${
															(item.amount /
																50000) *
															100
														}%`,
													}}></div>
											</div>
										</div>
										<span className='text-sm font-semibold w-20 text-right'>
											{formatCurrency(item.amount)}
										</span>
									</div>
								))}
							</div>
						</div>
					</div>

					{/* Expense Breakdown */}
					<div className='card bg-base-100 shadow-xl'>
						<div className='card-body'>
							<h3 className='card-title mb-4'>
								Expense Breakdown
							</h3>
							<div className='space-y-3'>
								{expenseCategories.map((expense) => (
									<div
										key={expense.category}
										className='flex items-center justify-between'>
										<span className='text-sm font-medium flex-1'>
											{expense.category}
										</span>
										<div className='flex items-center space-x-3'>
											<div className='w-20 bg-base-300 rounded-full h-2'>
												<div
													className='bg-gradient-to-r from-warning to-error h-2 rounded-full'
													style={{
														width: `${expense.percentage}%`,
													}}></div>
											</div>
											<span className='text-sm font-semibold w-16 text-right'>
												{formatCurrency(expense.amount)}
											</span>
											<span className='text-xs opacity-70 w-8'>
												{expense.percentage}%
											</span>
										</div>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>

				{/* Bottom Section */}
				<div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
					{/* Recent Transactions */}
					<div className='lg:col-span-2'>
						<div className='card bg-base-100 shadow-xl'>
							<div className='card-body'>
								<h3 className='card-title mb-4'>
									Recent Transactions
								</h3>
								<div className='overflow-x-auto'>
									<table className='table w-full'>
										<thead>
											<tr>
												<th>Date</th>
												<th>Description</th>
												<th>Amount</th>
											</tr>
										</thead>
										<tbody>
											{recentTransactions.map(
												(transaction, index) => (
													<tr
														key={index}
														className='hover:bg-base-200'>
														<td className='text-sm'>
															{new Date(
																transaction.date
															).toLocaleDateString()}
														</td>
														<td className='text-sm'>
															{
																transaction.description
															}
														</td>
														<td
															className={`text-sm font-semibold ${
																transaction.type ===
																'income'
																	? 'text-success'
																	: 'text-error'
															}`}>
															{transaction.type ===
															'income'
																? '+'
																: ''}
															{formatCurrency(
																transaction.amount
															)}
														</td>
													</tr>
												)
											)}
										</tbody>
									</table>
								</div>
								<div className='card-actions justify-end mt-4'>
									<button className='btn btn-outline btn-sm'>
										View All Transactions
									</button>
								</div>
							</div>
						</div>
					</div>

					{/* Financial Health & Actions */}
					<div className='space-y-6'>
						{/* Accounts Summary */}
						<div className='card bg-base-100 shadow-xl'>
							<div className='card-body'>
								<h3 className='card-title text-lg mb-4'>
									Accounts Summary
								</h3>
								<div className='space-y-3'>
									<div className='flex justify-between items-center'>
										<span className='text-sm'>
											Accounts Receivable
										</span>
										<span className='font-semibold text-success'>
											{formatCurrency(
												financialData.accountsReceivable
											)}
										</span>
									</div>
									<div className='flex justify-between items-center'>
										<span className='text-sm'>
											Accounts Payable
										</span>
										<span className='font-semibold text-warning'>
											{formatCurrency(
												financialData.accountsPayable
											)}
										</span>
									</div>
									<div className='divider my-2'></div>
									<div className='flex justify-between items-center'>
										<span className='text-sm font-semibold'>
											Net Position
										</span>
										<span className='font-bold text-primary'>
											{formatCurrency(
												financialData.accountsReceivable -
													financialData.accountsPayable
											)}
										</span>
									</div>
								</div>
							</div>
						</div>

						{/* Tax Preparation */}
						<div className='card bg-base-100 shadow-xl'>
							<div className='card-body'>
								<h3 className='card-title text-lg mb-4'>
									Tax Preparation
								</h3>
								<div className='space-y-3'>
									<div className='alert alert-info'>
										<div className='flex items-center space-x-2'>
											<span>🗓️</span>
											<div>
												<p className='text-sm font-semibold'>
													Q4 2024 Ready
												</p>
												<p className='text-xs'>
													All documents prepared
												</p>
											</div>
										</div>
									</div>
									<div className='space-y-2'>
										<div className='flex justify-between text-sm'>
											<span>Estimated Tax Liability</span>
											<span className='font-semibold'>
												{formatCurrency(4608)}
											</span>
										</div>
										<div className='flex justify-between text-sm'>
											<span>Quarterly Payment Due</span>
											<span className='font-semibold'>
												Jan 15, 2025
											</span>
										</div>
									</div>
									<button className='btn btn-primary btn-sm w-full mt-3'>
										Download Tax Package
									</button>
								</div>
							</div>
						</div>

						{/* Quick Actions */}
						<div className='card bg-base-100 shadow-xl'>
							<div className='card-body'>
								<h3 className='card-title text-lg mb-4'>
									Quick Actions
								</h3>
								<div className='space-y-2'>
									<button className='btn btn-outline btn-sm w-full'>
										📷 Upload Receipt
									</button>
									<button className='btn btn-outline btn-sm w-full'>
										📅 Schedule Meeting
									</button>
									<button className='btn btn-outline btn-sm w-full'>
										📊 Download Reports
									</button>
									<button className='btn btn-primary btn-sm w-full relative'>
										💬 Message Ray
										<div className='badge badge-error badge-xs absolute -top-1 -right-1'>
											2
										</div>
									</button>
								</div>
							</div>
						</div>

						{/* Recent Messages */}
						<div className='card bg-base-100 shadow-xl'>
							<div className='card-body'>
								<h3 className='card-title text-lg mb-4'>
									Recent Messages
								</h3>
								<div className='space-y-3'>
									<div className='flex items-start space-x-3'>
										<div className='avatar placeholder'>
											<div className='bg-primary text-primary-content rounded-full w-8'>
												<span className='text-xs'>
													RG
												</span>
											</div>
										</div>
										<div className='flex-1'>
											<p className='text-sm'>
												<span className='font-semibold'>
													Ray:
												</span>{' '}
												November books are looking
												great! Found a few tax
												deductions for you.
											</p>
											<p className='text-xs opacity-70'>
												3 hours ago
											</p>
										</div>
									</div>
									<div className='flex items-start space-x-3'>
										<div className='avatar placeholder'>
											<div className='bg-secondary text-secondary-content rounded-full w-8'>
												<span className='text-xs'>
													SM
												</span>
											</div>
										</div>
										<div className='flex-1'>
											<p className='text-sm'>
												<span className='font-semibold'>
													You:
												</span>{' '}
												Thanks! Can we schedule a call
												this week?
											</p>
											<p className='text-xs opacity-70'>
												1 day ago
											</p>
										</div>
									</div>
								</div>
								<button className='btn btn-outline btn-xs mt-3'>
									View All Messages
								</button>
							</div>
						</div>
					</div>
				</div>

				{/* Footer Note */}
				<div className='text-center mt-12 p-6 bg-gradient-to-r from-base-100 to-base-200 rounded-lg border'>
					<div className='flex flex-col sm:flex-row items-center justify-center gap-4 mb-4'>
						<div className='flex items-center space-x-2'>
							<div className='w-3 h-3 bg-success rounded-full animate-pulse'></div>
							<span className='text-sm font-semibold'>
								Live Data Connection
							</span>
						</div>
						<div className='flex items-center space-x-2'>
							<span className='text-lg'>🔒</span>
							<span className='text-sm'>Bank-Level Security</span>
						</div>
						<div className='flex items-center space-x-2'>
							<span className='text-lg'>✅</span>
							<span className='text-sm'>ProAdvisor Verified</span>
						</div>
					</div>
					<p className='text-sm opacity-70 mb-2'>
						📊 Your financial data syncs automatically from
						QuickBooks and your bank accounts
					</p>
					<p className='text-xs opacity-50'>
						All calculations verified by Ray Galloway, QuickBooks
						ProAdvisor • Data updated every 15 minutes
					</p>
				</div>
			</div>
		</div>
	);
}
