'use client';

import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Download, Gift, Star } from 'lucide-react';

interface LeadMagnetFormProps {
	title?: string;
	description?: string;
	buttonText?: string;
	variant?: 'default' | 'compact' | 'popup';
	onSuccess?: (data: FormData) => void;
	className?: string;
}

interface FormData {
	firstName: string;
	lastName: string;
	email: string;
	businessName: string;
	businessType: string;
}

export function LeadMagnetForm({
	title = 'Get Your Free Financial Guide',
	description = '7 Financial Tricks for Delaware Service Businesses',
	buttonText = 'Get My Free Guide',
	variant = 'default',
	onSuccess,
	className = '',
}: LeadMagnetFormProps) {
	const [formData, setFormData] = useState<FormData>({
		firstName: '',
		lastName: '',
		email: '',
		businessName: '',
		businessType: '',
	});
	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleInputChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		if (!formData.firstName || !formData.email) {
			alert('Please fill in all required fields');
			return;
		}

		setIsSubmitting(true);

		try {
			// TODO: Integrate with email service (ConvertKit, Mailchimp, etc.)
			console.log('Lead magnet form submitted:', formData);

			// Simulate API call
			await new Promise((resolve) => setTimeout(resolve, 1500));

			// Call success callback or redirect
			if (onSuccess) {
				onSuccess(formData);
			} else {
				// Redirect to free guide page with email parameter
				window.location.href = `/free-guide?email=${encodeURIComponent(
					formData.email
				)}&name=${encodeURIComponent(formData.firstName)}`;
			}
		} catch (error) {
			console.error('Form submission error:', error);
			alert('There was an error submitting the form. Please try again.');
		} finally {
			setIsSubmitting(false);
		}
	};

	if (variant === 'compact') {
		return (
			<div
				className={`bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg p-6 ${className}`}>
				<div className='flex items-center mb-4'>
					<Gift className='h-6 w-6 text-primary mr-2' />
					<div>
						<h3 className='font-semibold'>{title}</h3>
						<p className='text-sm text-muted-foreground'>
							{description}
						</p>
					</div>
				</div>

				<form onSubmit={handleSubmit} className='space-y-3'>
					<div className='grid grid-cols-2 gap-3'>
						<Input
							name='firstName'
							value={formData.firstName}
							onChange={handleInputChange}
							placeholder='First Name *'
							required
						/>
						<Input
							name='email'
							type='email'
							value={formData.email}
							onChange={handleInputChange}
							placeholder='Email *'
							required
						/>
					</div>

					<Button
						type='submit'
						className='w-full'
						disabled={isSubmitting}>
						{isSubmitting ? (
							<>
								<div className='animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2'></div>
								Sending...
							</>
						) : (
							<>
								<Download className='mr-2 h-4 w-4' />
								{buttonText}
							</>
						)}
					</Button>
				</form>

				<p className='text-xs text-muted-foreground mt-2'>
					No spam. Unsubscribe anytime.
				</p>
			</div>
		);
	}

	return (
		<Card
			className={`bg-white shadow-xl border-2 border-primary/20 ${className}`}>
			<CardHeader className='text-center'>
				<div className='flex items-center justify-center mb-2'>
					<Star className='h-5 w-5 text-yellow-400 fill-current' />
					<Star className='h-5 w-5 text-yellow-400 fill-current' />
					<Star className='h-5 w-5 text-yellow-400 fill-current' />
					<Star className='h-5 w-5 text-yellow-400 fill-current' />
					<Star className='h-5 w-5 text-yellow-400 fill-current' />
				</div>
				<CardTitle className='text-xl mb-2'>{title}</CardTitle>
				<p className='text-muted-foreground text-sm'>{description}</p>
			</CardHeader>

			<CardContent>
				<form onSubmit={handleSubmit} className='space-y-4'>
					<div className='grid grid-cols-2 gap-4'>
						<div>
							<Label htmlFor='firstName' className='text-sm'>
								First Name *
							</Label>
							<Input
								id='firstName'
								name='firstName'
								value={formData.firstName}
								onChange={handleInputChange}
								required
								className='mt-1'
								placeholder='Ray'
							/>
						</div>
						<div>
							<Label htmlFor='lastName' className='text-sm'>
								Last Name
							</Label>
							<Input
								id='lastName'
								name='lastName'
								value={formData.lastName}
								onChange={handleInputChange}
								className='mt-1'
								placeholder='Galloway'
							/>
						</div>
					</div>

					<div>
						<Label htmlFor='email' className='text-sm'>
							Email Address *
						</Label>
						<Input
							id='email'
							name='email'
							type='email'
							value={formData.email}
							onChange={handleInputChange}
							required
							className='mt-1'
							placeholder='ray@yourbusiness.com'
						/>
					</div>

					{variant === 'default' && (
						<>
							<div>
								<Label
									htmlFor='businessName'
									className='text-sm'>
									Business Name
								</Label>
								<Input
									id='businessName'
									name='businessName'
									value={formData.businessName}
									onChange={handleInputChange}
									className='mt-1'
									placeholder='Your Business Name'
								/>
							</div>

							<div>
								<Label
									htmlFor='businessType'
									className='text-sm'>
									Business Type
								</Label>
								<select
									id='businessType'
									name='businessType'
									value={formData.businessType}
									onChange={handleInputChange}
									className='w-full mt-1 px-3 py-2 border border-input rounded-md bg-background text-sm'>
									<option value=''>
										Select your business type
									</option>
									<option value='consulting'>
										Consulting
									</option>
									<option value='construction'>
										Construction
									</option>
									<option value='healthcare'>
										Healthcare
									</option>
									<option value='professional-services'>
										Professional Services
									</option>
									<option value='restaurant'>
										Restaurant/Food Service
									</option>
									<option value='retail'>Retail</option>
									<option value='other'>Other</option>
								</select>
							</div>
						</>
					)}

					<Button
						type='submit'
						className='w-full text-lg py-6 mt-6'
						disabled={isSubmitting}>
						{isSubmitting ? (
							<>
								<div className='animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2'></div>
								Preparing Your Guide...
							</>
						) : (
							<>
								<Download className='mr-2 h-5 w-5' />
								{buttonText}
							</>
						)}
					</Button>

					<p className='text-xs text-muted-foreground text-center mt-4'>
						By downloading this guide, you agree to receive helpful
						bookkeeping tips via email. You can unsubscribe at any
						time.
					</p>
				</form>

				{/* Trust Indicators */}
				<div className='mt-6 pt-6 border-t text-center'>
					<p className='text-xs font-medium text-muted-foreground mb-2'>
						Join 500+ Delaware business owners
					</p>
					<div className='flex justify-center items-center gap-4 text-xs'>
						<span className='flex items-center gap-1'>
							<Download className='h-3 w-3' />
							500+ downloads
						</span>
						<span className='flex items-center gap-1'>
							<Star className='h-3 w-3 text-yellow-400 fill-current' />
							4.9/5 rating
						</span>
					</div>
				</div>
			</CardContent>
		</Card>
	);
}

// Hook for programmatic form handling
export function useLeadMagnetForm() {
	const [isOpen, setIsOpen] = useState(false);

	const openForm = () => setIsOpen(true);
	const closeForm = () => setIsOpen(false);

	return {
		isOpen,
		openForm,
		closeForm,
	};
}
