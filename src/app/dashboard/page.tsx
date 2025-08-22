'use client';

import Link from 'next/link';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import {
	ArrowLeft,
	TrendingUp,
	TrendingDown,
	DollarSign,
	BarChart3,
	Activity,
	Users,
	Calendar,
	MessageSquare,
	Upload,
	Download,
	Clock,
} from 'lucide-react';

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
		<div className='min-h-screen bg-gray-50'>
			{/* Header */}
			<header className='bg-white border-b sticky top-0 z-50'>
				<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='flex justify-between items-center h-16'>
						<Link
							href='/'
							className='flex items-center text-lg font-medium hover:text-primary transition-colors'>
							<ArrowLeft className='mr-2 h-4 w-4' />
							Ray Galloway Bookkeeping
						</Link>
						<h1 className='text-xl font-semibold'>
							Client Dashboard
						</h1>
						<div className='flex items-center space-x-4'>
							<div className='flex items-center space-x-2'>
								<div className='flex items-center space-x-1'>
									<div className='w-2 h-2 bg-green-500 rounded-full animate-pulse'></div>
									<span className='text-xs text-green-600'>
										Live
									</span>
								</div>
								<span className='text-sm text-muted-foreground'>
									Last updated: 2 min ago
								</span>
							</div>
							<span className='text-sm text-muted-foreground'>
								{currentMonth}
							</span>
							<Button variant='ghost' size='sm' asChild>
								<Link href='/auth'>Logout</Link>
							</Button>
						</div>
					</div>
				</div>
			</header>

			<div className='container mx-auto px-4 sm:px-6 lg:px-8 py-6'>
				{/* Dashboard Header */}
				<div className='mb-8'>
					<div className='flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4'>
						<div>
							<h2 className='text-3xl font-bold mb-2'>
								Welcome back, Sarah!
							</h2>
							<p className='text-lg text-muted-foreground'>
								Here's your financial overview for{' '}
								{currentMonth}
							</p>
						</div>

						{/* Ray's Work Status */}
						<Card className='bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20'>
							<CardContent className='py-4 px-6'>
								<div className='flex items-center space-x-3'>
									<div className='w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-semibold'>
										RG
									</div>
									<div>
										<p className='text-sm font-semibold'>
											Ray is working on your books
										</p>
										<p className='text-xs text-muted-foreground'>
											Currently: November reconciliation •
											2 hours ago
										</p>
									</div>
									<div className='text-primary'>
										<Clock className='w-4 h-4 animate-spin' />
									</div>
								</div>
							</CardContent>
						</Card>
					</div>
				</div>

				{/* Financial Overview Cards */}
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8'>
					{/* Revenue Card */}
					<Card className='bg-gradient-to-br from-green-50 to-green-100 border-green-200'>
						<CardHeader className='pb-2'>
							<CardTitle className='text-sm font-medium text-green-700'>
								Total Revenue
							</CardTitle>
						</CardHeader>
						<CardContent>
							<div className='flex items-center justify-between'>
								<div>
									<p className='text-2xl font-bold text-green-900'>
										{formatCurrency(financialData.revenue)}
									</p>
								</div>
								<DollarSign className='h-8 w-8 text-green-600' />
							</div>
						</CardContent>
					</Card>

					{/* Expenses Card */}
					<Card className='bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200'>
						<CardHeader className='pb-2'>
							<CardTitle className='text-sm font-medium text-orange-700'>
								Total Expenses
							</CardTitle>
						</CardHeader>
						<CardContent>
							<div className='flex items-center justify-between'>
								<div>
									<p className='text-2xl font-bold text-orange-900'>
										{formatCurrency(financialData.expenses)}
									</p>
								</div>
								<BarChart3 className='h-8 w-8 text-orange-600' />
							</div>
						</CardContent>
					</Card>

					{/* Profit Card */}
					<Card className='bg-gradient-to-br from-primary/10 to-primary/20 border-primary/30'>
						<CardHeader className='pb-2'>
							<CardTitle className='text-sm font-medium text-primary'>
								Net Profit
							</CardTitle>
						</CardHeader>
						<CardContent>
							<div className='flex items-center justify-between'>
								<div>
									<p className='text-2xl font-bold'>
										{formatCurrency(financialData.profit)}
									</p>
									<div className='flex items-center mt-1'>
										{profitChange.isPositive ? (
											<TrendingUp className='w-4 h-4 text-green-600 mr-1' />
										) : (
											<TrendingDown className='w-4 h-4 text-red-600 mr-1' />
										)}
										<span
											className={`text-xs ${
												profitChange.isPositive
													? 'text-green-600'
													: 'text-red-600'
											}`}>
											{profitChange.percentage}% vs last
											month
										</span>
									</div>
								</div>
								<Activity className='h-8 w-8 text-primary' />
							</div>
						</CardContent>
					</Card>

					{/* Cash Flow Card */}
					<Card className='bg-gradient-to-br from-blue-50 to-blue-100 border-blue-200'>
						<CardHeader className='pb-2'>
							<CardTitle className='text-sm font-medium text-blue-700'>
								Cash Flow
							</CardTitle>
						</CardHeader>
						<CardContent>
							<div className='flex items-center justify-between'>
								<div>
									<p className='text-2xl font-bold text-blue-900'>
										{formatCurrency(financialData.cashFlow)}
									</p>
								</div>
								<Activity className='h-8 w-8 text-blue-600' />
							</div>
						</CardContent>
					</Card>
				</div>

				{/* Charts Section */}
				<div className='grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8'>
					{/* Revenue Trend Chart */}
					<Card>
						<CardHeader>
							<CardTitle>Revenue Trend (Last 5 Months)</CardTitle>
						</CardHeader>
						<CardContent>
							<div className='space-y-4'>
								{revenueData.map((item) => (
									<div key={item.month} className='space-y-2'>
										<div className='flex items-center justify-between text-sm'>
											<span className='font-medium'>
												{item.month}
											</span>
											<span className='font-semibold'>
												{formatCurrency(item.amount)}
											</span>
										</div>
										<Progress
											value={(item.amount / 50000) * 100}
											className='h-2'
										/>
									</div>
								))}
							</div>
						</CardContent>
					</Card>

					{/* Expense Breakdown */}
					<Card>
						<CardHeader>
							<CardTitle>Expense Breakdown</CardTitle>
						</CardHeader>
						<CardContent>
							<div className='space-y-4'>
								{expenseCategories.map((expense) => (
									<div
										key={expense.category}
										className='space-y-2'>
										<div className='flex items-center justify-between text-sm'>
											<span className='font-medium'>
												{expense.category}
											</span>
											<div className='flex items-center gap-2'>
												<span className='font-semibold'>
													{formatCurrency(
														expense.amount
													)}
												</span>
												<span className='text-muted-foreground'>
													({expense.percentage}%)
												</span>
											</div>
										</div>
										<Progress
											value={expense.percentage}
											className='h-2'
										/>
									</div>
								))}
							</div>
						</CardContent>
					</Card>
				</div>

				{/* Bottom Section */}
				<div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
					{/* Recent Transactions */}
					<div className='lg:col-span-2'>
						<Card>
							<CardHeader>
								<CardTitle>Recent Transactions</CardTitle>
							</CardHeader>
							<CardContent>
								<div className='space-y-3'>
									{recentTransactions.map(
										(transaction, index) => (
											<div
												key={index}
												className='flex items-center justify-between py-2 border-b last:border-0'>
												<div className='flex-1'>
													<p className='text-sm font-medium'>
														{
															transaction.description
														}
													</p>
													<p className='text-xs text-muted-foreground'>
														{new Date(
															transaction.date
														).toLocaleDateString()}
													</p>
												</div>
												<span
													className={`text-sm font-semibold ${
														transaction.type ===
														'income'
															? 'text-green-600'
															: 'text-red-600'
													}`}>
													{transaction.type ===
													'income'
														? '+'
														: ''}
													{formatCurrency(
														transaction.amount
													)}
												</span>
											</div>
										)
									)}
								</div>
								<Button
									variant='outline'
									size='sm'
									className='w-full mt-4'>
									View All Transactions
								</Button>
							</CardContent>
						</Card>
					</div>

					{/* Right Column */}
					<div className='space-y-6'>
						{/* Accounts Summary */}
						<Card>
							<CardHeader>
								<CardTitle className='text-lg'>
									Accounts Summary
								</CardTitle>
							</CardHeader>
							<CardContent>
								<div className='space-y-3'>
									<div className='flex justify-between items-center'>
										<span className='text-sm'>
											Accounts Receivable
										</span>
										<span className='font-semibold text-green-600'>
											{formatCurrency(
												financialData.accountsReceivable
											)}
										</span>
									</div>
									<div className='flex justify-between items-center'>
										<span className='text-sm'>
											Accounts Payable
										</span>
										<span className='font-semibold text-orange-600'>
											{formatCurrency(
												financialData.accountsPayable
											)}
										</span>
									</div>
									<div className='border-t pt-3'>
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
							</CardContent>
						</Card>

						{/* Tax Preparation */}
						<Card>
							<CardHeader>
								<CardTitle className='text-lg'>
									Tax Preparation
								</CardTitle>
							</CardHeader>
							<CardContent>
								<div className='space-y-3'>
									<div className='bg-blue-50 border border-blue-200 rounded-lg p-3'>
										<div className='flex items-center space-x-2'>
											<Calendar className='h-5 w-5 text-blue-600' />
											<div>
												<p className='text-sm font-semibold text-blue-900'>
													Q4 2024 Ready
												</p>
												<p className='text-xs text-blue-700'>
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
									<Button className='w-full' size='sm'>
										<Download className='mr-2 h-4 w-4' />
										Download Tax Package
									</Button>
								</div>
							</CardContent>
						</Card>

						{/* Quick Actions */}
						<Card>
							<CardHeader>
								<CardTitle className='text-lg'>
									Quick Actions
								</CardTitle>
							</CardHeader>
							<CardContent>
								<div className='space-y-2'>
									<Button
										variant='outline'
										size='sm'
										className='w-full justify-start'>
										<Upload className='mr-2 h-4 w-4' />
										Upload Receipt
									</Button>
									<Button
										variant='outline'
										size='sm'
										className='w-full justify-start'>
										<Calendar className='mr-2 h-4 w-4' />
										Schedule Meeting
									</Button>
									<Button
										variant='outline'
										size='sm'
										className='w-full justify-start'>
										<Download className='mr-2 h-4 w-4' />
										Download Reports
									</Button>
									<Button
										size='sm'
										className='w-full justify-start relative'>
										<MessageSquare className='mr-2 h-4 w-4' />
										Message Ray
										<Badge
											className='absolute -top-1 -right-1'
											variant='destructive'>
											2
										</Badge>
									</Button>
								</div>
							</CardContent>
						</Card>

						{/* Recent Messages */}
						<Card>
							<CardHeader>
								<CardTitle className='text-lg'>
									Recent Messages
								</CardTitle>
							</CardHeader>
							<CardContent>
								<div className='space-y-3'>
									<div className='flex items-start space-x-3'>
										<div className='w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-xs font-semibold'>
											RG
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
											<p className='text-xs text-muted-foreground'>
												3 hours ago
											</p>
										</div>
									</div>
									<div className='flex items-start space-x-3'>
										<div className='w-8 h-8 bg-secondary rounded-full flex items-center justify-center text-secondary-foreground text-xs font-semibold'>
											SM
										</div>
										<div className='flex-1'>
											<p className='text-sm'>
												<span className='font-semibold'>
													You:
												</span>{' '}
												Thanks! Can we schedule a call
												this week?
											</p>
											<p className='text-xs text-muted-foreground'>
												1 day ago
											</p>
										</div>
									</div>
								</div>
								<Button
									variant='outline'
									size='sm'
									className='w-full mt-3'>
									View All Messages
								</Button>
							</CardContent>
						</Card>
					</div>
				</div>

				{/* Footer Note */}
				<Card className='mt-12 bg-gradient-to-r from-gray-50 to-gray-100'>
					<CardContent className='pt-6'>
						<div className='flex flex-col sm:flex-row items-center justify-center gap-4 mb-4'>
							<div className='flex items-center space-x-2'>
								<div className='w-3 h-3 bg-green-500 rounded-full animate-pulse'></div>
								<span className='text-sm font-semibold'>
									Live Data Connection
								</span>
							</div>
							<div className='flex items-center space-x-2'>
								<span className='text-lg'>🔒</span>
								<span className='text-sm'>
									Bank-Level Security
								</span>
							</div>
							<div className='flex items-center space-x-2'>
								<span className='text-lg'>✅</span>
								<span className='text-sm'>
									ProAdvisor Verified
								</span>
							</div>
						</div>
						<p className='text-sm text-muted-foreground text-center mb-2'>
							📊 Your financial data syncs automatically from
							QuickBooks and your bank accounts
						</p>
						<p className='text-xs text-muted-foreground text-center'>
							All calculations verified by Ray Galloway,
							QuickBooks ProAdvisor • Data updated every 15
							minutes
						</p>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
