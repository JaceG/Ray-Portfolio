'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Calculator, DollarSign, Clock, TrendingUp } from 'lucide-react';

interface ROICalculatorProps {
	title?: string;
	description?: string;
	className?: string;
}

export function ROICalculator({
	title = 'Calculate Your Bookkeeping ROI',
	description = 'See how much time and money you could save with professional bookkeeping',
	className = '',
}: ROICalculatorProps) {
	const [inputs, setInputs] = useState({
		monthlyRevenue: '',
		hoursSpentBookkeeping: '',
		hourlyRate: '',
	});
	const [results, setResults] = useState<{
		timeSaved: number;
		moneySaved: number;
		yearlyTimeSaved: number;
		yearlyMoneySaved: number;
	} | null>(null);

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setInputs({
			...inputs,
			[e.target.name]: e.target.value,
		});
	};

	const calculateROI = () => {
		const revenue = parseFloat(inputs.monthlyRevenue) || 0;
		const hours = parseFloat(inputs.hoursSpentBookkeeping) || 0;
		const rate = parseFloat(inputs.hourlyRate) || 0;

		// Assume professional bookkeeping saves 75% of time spent
		const timeSavedPerMonth = hours * 0.75;
		const moneySavedPerMonth = timeSavedPerMonth * rate;
		const yearlyTimeSaved = timeSavedPerMonth * 12;
		const yearlyMoneySaved = moneySavedPerMonth * 12;

		setResults({
			timeSaved: timeSavedPerMonth,
			moneySaved: moneySavedPerMonth,
			yearlyTimeSaved,
			yearlyMoneySaved,
		});
	};

	return (
		<Card className={`max-w-4xl mx-auto ${className}`}>
			<CardHeader className='text-center'>
				<div className='w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4'>
					<Calculator className='h-8 w-8 text-primary' />
				</div>
				<CardTitle className='text-2xl sm:text-3xl'>{title}</CardTitle>
				<p className='text-muted-foreground'>{description}</p>
			</CardHeader>
			<CardContent>
				<div className='grid md:grid-cols-2 gap-8'>
					{/* Input Section */}
					<div className='space-y-4'>
						<h3 className='text-lg font-semibold mb-4'>
							Tell us about your business:
						</h3>

						<div>
							<Label htmlFor='monthlyRevenue'>
								Monthly Revenue ($)
							</Label>
							<Input
								id='monthlyRevenue'
								name='monthlyRevenue'
								type='number'
								placeholder='25000'
								value={inputs.monthlyRevenue}
								onChange={handleInputChange}
								className='mt-1'
							/>
						</div>

						<div>
							<Label htmlFor='hoursSpentBookkeeping'>
								Hours spent on bookkeeping per month
							</Label>
							<Input
								id='hoursSpentBookkeeping'
								name='hoursSpentBookkeeping'
								type='number'
								placeholder='20'
								value={inputs.hoursSpentBookkeeping}
								onChange={handleInputChange}
								className='mt-1'
							/>
						</div>

						<div>
							<Label htmlFor='hourlyRate'>
								Your hourly rate/value ($)
							</Label>
							<Input
								id='hourlyRate'
								name='hourlyRate'
								type='number'
								placeholder='75'
								value={inputs.hourlyRate}
								onChange={handleInputChange}
								className='mt-1'
							/>
						</div>

						<Button
							onClick={calculateROI}
							className='w-full mt-6'
							size='lg'>
							<Calculator className='mr-2 h-4 w-4' />
							Calculate My Savings
						</Button>
					</div>

					{/* Results Section */}
					<div className='bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg p-6'>
						<h3 className='text-lg font-semibold mb-4'>
							Your Potential Savings:
						</h3>

						{results ? (
							<div className='space-y-4'>
								<div className='flex items-center justify-between p-3 bg-white rounded-lg'>
									<div className='flex items-center'>
										<Clock className='h-5 w-5 text-primary mr-2' />
										<span className='font-medium'>
											Time Saved/Month
										</span>
									</div>
									<span className='text-lg font-bold text-primary'>
										{results.timeSaved.toFixed(1)} hours
									</span>
								</div>

								<div className='flex items-center justify-between p-3 bg-white rounded-lg'>
									<div className='flex items-center'>
										<DollarSign className='h-5 w-5 text-primary mr-2' />
										<span className='font-medium'>
											Money Saved/Month
										</span>
									</div>
									<span className='text-lg font-bold text-primary'>
										${results.moneySaved.toFixed(0)}
									</span>
								</div>

								<div className='border-t pt-4'>
									<div className='flex items-center justify-between p-3 bg-primary text-white rounded-lg'>
										<div className='flex items-center'>
											<TrendingUp className='h-5 w-5 mr-2' />
											<span className='font-medium'>
												Yearly Savings
											</span>
										</div>
										<div className='text-right'>
											<div className='text-lg font-bold'>
												$
												{results.yearlyMoneySaved.toFixed(
													0
												)}
											</div>
											<div className='text-sm opacity-90'>
												{results.yearlyTimeSaved.toFixed(
													0
												)}{' '}
												hours
											</div>
										</div>
									</div>
								</div>

								<div className='text-center mt-6'>
									<p className='text-sm text-muted-foreground mb-4'>
										Ready to get your time back and reduce
										financial stress?
									</p>
									<Button size='lg' className='w-full'>
										Get Your Free Consultation
									</Button>
								</div>
							</div>
						) : (
							<div className='text-center py-8'>
								<Calculator className='h-12 w-12 text-muted-foreground mx-auto mb-4' />
								<p className='text-muted-foreground'>
									Fill out the form to see your potential
									savings with professional bookkeeping.
								</p>
							</div>
						)}
					</div>
				</div>
			</CardContent>
		</Card>
	);
}
