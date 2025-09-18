'use client';

import { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { CalendlyModal } from './CalendlyModal';
import {
	Calculator,
	DollarSign,
	Clock,
	TrendingUp,
	CheckCircle,
} from 'lucide-react';

interface ROICalculatorProps {
	variant?: 'full' | 'compact';
	className?: string;
	title?: string;
	description?: string;
}

export function ROICalculator({
	variant = 'full',
	className = '',
	title = 'ROI Calculator for Construction Companies',
	description = 'See how much you could save with professional bookkeeping',
}: ROICalculatorProps) {
	const [inputs, setInputs] = useState({
		monthlyRevenue: 100000,
		hoursSpentOnBooks: 20,
		hourlyRate: 75,
		errorCosts: 2000,
		packageCost: 497,
	});

	const calculateROI = () => {
		const timeSavings = inputs.hoursSpentOnBooks * 0.7; // 70% time savings
		const timeSavingsValue = timeSavings * inputs.hourlyRate;
		const errorSavings = inputs.errorCosts * 0.8; // 80% error reduction
		const totalMonthlySavings = timeSavingsValue + errorSavings;
		const netSavings = totalMonthlySavings - inputs.packageCost;
		const annualROI = ((netSavings * 12) / (inputs.packageCost * 12)) * 100;

		return {
			timeSavingsHours: timeSavings,
			timeSavingsValue,
			errorSavings,
			totalMonthlySavings,
			netSavings,
			annualROI,
		};
	};

	const roi = calculateROI();

	if (variant === 'compact') {
		return (
			<Card
				className={`bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20 ${className}`}>
				<CardHeader>
					<CardTitle className='text-lg'>
						Quick ROI Estimate
					</CardTitle>
				</CardHeader>
				<CardContent className='space-y-4'>
					<div className='grid grid-cols-2 gap-3'>
						<div>
							<label className='block text-xs font-medium mb-1'>
								Monthly Revenue
							</label>
							<div className='relative'>
								<DollarSign className='absolute left-2 top-1/2 transform -translate-y-1/2 h-3 w-3 text-gray-400' />
								<input
									type='number'
									value={inputs.monthlyRevenue}
									onChange={(e) =>
										setInputs({
											...inputs,
											monthlyRevenue:
												parseInt(e.target.value) || 0,
										})
									}
									className='w-full pl-7 pr-2 py-2 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-primary'
								/>
							</div>
						</div>
						<div>
							<label className='block text-xs font-medium mb-1'>
								Hours on Books
							</label>
							<div className='relative'>
								<Clock className='absolute left-2 top-1/2 transform -translate-y-1/2 h-3 w-3 text-gray-400' />
								<input
									type='number'
									value={inputs.hoursSpentOnBooks}
									onChange={(e) =>
										setInputs({
											...inputs,
											hoursSpentOnBooks:
												parseInt(e.target.value) || 0,
										})
									}
									className='w-full pl-7 pr-2 py-2 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-primary'
								/>
							</div>
						</div>
					</div>

					<div className='bg-white rounded-lg p-3 text-center'>
						<p className='text-sm text-muted-foreground mb-1'>
							Estimated Monthly Savings
						</p>
						<p className='text-xl font-bold text-primary'>
							${roi.netSavings.toLocaleString()}
						</p>
						<p className='text-xs text-muted-foreground'>
							{roi.annualROI.toFixed(0)}% annual ROI
						</p>
					</div>

					<CalendlyModal
						buttonText='Discuss My ROI'
						buttonSize='sm'
						buttonClassName='w-full'
					/>
				</CardContent>
			</Card>
		);
	}

	return (
		<div className={className}>
			<div className='text-center mb-8'>
				<h2 className='text-3xl font-bold mb-4'>{title}</h2>
				<p className='text-muted-foreground'>{description}</p>
			</div>

			<div className='grid lg:grid-cols-2 gap-8'>
				{/* Calculator Inputs */}
				<Card>
					<CardHeader>
						<CardTitle className='flex items-center gap-2'>
							<Calculator className='h-5 w-5 text-primary' />
							Your Construction Business Details
						</CardTitle>
					</CardHeader>
					<CardContent className='space-y-4'>
						<div>
							<label className='block text-sm font-medium mb-2'>
								Monthly Revenue
							</label>
							<div className='relative'>
								<DollarSign className='absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400' />
								<input
									type='number'
									value={inputs.monthlyRevenue}
									onChange={(e) =>
										setInputs({
											...inputs,
											monthlyRevenue:
												parseInt(e.target.value) || 0,
										})
									}
									className='w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent'
									placeholder='100,000'
								/>
							</div>
						</div>

						<div>
							<label className='block text-sm font-medium mb-2'>
								Hours spent on bookkeeping per month
							</label>
							<div className='relative'>
								<Clock className='absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400' />
								<input
									type='number'
									value={inputs.hoursSpentOnBooks}
									onChange={(e) =>
										setInputs({
											...inputs,
											hoursSpentOnBooks:
												parseInt(e.target.value) || 0,
										})
									}
									className='w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent'
									placeholder='20'
								/>
							</div>
						</div>

						<div>
							<label className='block text-sm font-medium mb-2'>
								Your hourly rate (what your time is worth)
							</label>
							<div className='relative'>
								<DollarSign className='absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400' />
								<input
									type='number'
									value={inputs.hourlyRate}
									onChange={(e) =>
										setInputs({
											...inputs,
											hourlyRate:
												parseInt(e.target.value) || 0,
										})
									}
									className='w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent'
									placeholder='75'
								/>
							</div>
						</div>

						<div>
							<label className='block text-sm font-medium mb-2'>
								Monthly cost of bookkeeping errors
							</label>
							<div className='relative'>
								<DollarSign className='absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400' />
								<input
									type='number'
									value={inputs.errorCosts}
									onChange={(e) =>
										setInputs({
											...inputs,
											errorCosts:
												parseInt(e.target.value) || 0,
										})
									}
									className='w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent'
									placeholder='2,000'
								/>
							</div>
						</div>

						<div>
							<label className='block text-sm font-medium mb-2'>
								Bookkeeping Package Cost
							</label>
							<div className='relative'>
								<DollarSign className='absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400' />
								<input
									type='number'
									value={inputs.packageCost}
									onChange={(e) =>
										setInputs({
											...inputs,
											packageCost:
												parseInt(e.target.value) || 0,
										})
									}
									className='w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent'
									placeholder='497'
								/>
							</div>
						</div>
					</CardContent>
				</Card>

				{/* ROI Results */}
				<Card className='bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20'>
					<CardHeader>
						<CardTitle className='flex items-center gap-2'>
							<TrendingUp className='h-5 w-5 text-primary' />
							Your ROI Results
						</CardTitle>
					</CardHeader>
					<CardContent className='space-y-6'>
						<div className='grid grid-cols-2 gap-4'>
							<div className='bg-white rounded-lg p-4 text-center'>
								<p className='text-sm text-muted-foreground mb-1'>
									Time Savings
								</p>
								<p className='text-xl font-bold text-primary'>
									{roi.timeSavingsHours.toFixed(1)} hrs
								</p>
								<p className='text-xs text-muted-foreground'>
									${roi.timeSavingsValue.toLocaleString()}{' '}
									value
								</p>
							</div>
							<div className='bg-white rounded-lg p-4 text-center'>
								<p className='text-sm text-muted-foreground mb-1'>
									Error Savings
								</p>
								<p className='text-xl font-bold text-primary'>
									${roi.errorSavings.toLocaleString()}
								</p>
								<p className='text-xs text-muted-foreground'>
									Per month
								</p>
							</div>
						</div>

						<div className='bg-white rounded-lg p-6 text-center'>
							<p className='text-sm text-muted-foreground mb-2'>
								Total Monthly Savings
							</p>
							<p className='text-3xl font-bold text-primary mb-1'>
								${roi.totalMonthlySavings.toLocaleString()}
							</p>
							<p className='text-sm text-muted-foreground mb-4'>
								Package Cost: $
								{inputs.packageCost.toLocaleString()}
							</p>
							<div className='border-t pt-4'>
								<p className='text-lg font-semibold text-primary'>
									Net Monthly Savings: $
									{roi.netSavings.toLocaleString()}
								</p>
								<p className='text-sm text-muted-foreground'>
									Annual ROI: {roi.annualROI.toFixed(0)}%
								</p>
							</div>
						</div>

						<div className='space-y-3'>
							<div className='flex items-center gap-2'>
								<CheckCircle className='h-4 w-4 text-primary' />
								<span className='text-sm'>
									Save {roi.timeSavingsHours.toFixed(0)} hours
									per month
								</span>
							</div>
							<div className='flex items-center gap-2'>
								<CheckCircle className='h-4 w-4 text-primary' />
								<span className='text-sm'>
									Reduce errors by 80%
								</span>
							</div>
							<div className='flex items-center gap-2'>
								<CheckCircle className='h-4 w-4 text-primary' />
								<span className='text-sm'>
									Improve cash flow visibility
								</span>
							</div>
							<div className='flex items-center gap-2'>
								<CheckCircle className='h-4 w-4 text-primary' />
								<span className='text-sm'>
									Better job profitability tracking
								</span>
							</div>
						</div>

						<CalendlyModal
							buttonText='Schedule Free ROI Discussion'
							buttonSize='lg'
							buttonClassName='w-full py-4'
						/>
					</CardContent>
				</Card>
			</div>
		</div>
	);
}
