'use client';

import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import {
	Calendar,
	Clock,
	Phone,
	Mail,
	CheckCircle,
	AlertCircle,
	Loader2,
	Shield,
} from 'lucide-react';

interface FormData {
	name: string;
	email: string;
	phone: string;
	company: string;
	projectType: string;
	monthlyRevenue: string;
	currentBookkeeper: string;
	message: string;
	urgency: string;
}

interface FormErrors {
	[key: string]: string;
}

export function EnhancedContactForm() {
	const [formData, setFormData] = useState<FormData>({
		name: '',
		email: '',
		phone: '',
		company: '',
		projectType: '',
		monthlyRevenue: '',
		currentBookkeeper: '',
		message: '',
		urgency: '',
	});

	const [errors, setErrors] = useState<FormErrors>({});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [isSubmitted, setIsSubmitted] = useState(false);
	const [submitError, setSubmitError] = useState('');

	const validateForm = (): boolean => {
		const newErrors: FormErrors = {};

		// Required field validation
		if (!formData.name.trim()) {
			newErrors.name = 'Name is required';
		}

		if (!formData.email.trim()) {
			newErrors.email = 'Email is required';
		} else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
			newErrors.email = 'Please enter a valid email address';
		}

		if (!formData.phone.trim()) {
			newErrors.phone = 'Phone number is required';
		} else if (
			!/^[\d\s\-\(\)\+]{10,}$/.test(formData.phone.replace(/\s/g, ''))
		) {
			newErrors.phone = 'Please enter a valid phone number';
		}

		if (!formData.company.trim()) {
			newErrors.company = 'Company name is required';
		}

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleInputChange = (
		e: React.ChangeEvent<
			HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
		>
	) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));

		// Clear error when user starts typing
		if (errors[name]) {
			setErrors((prev) => ({ ...prev, [name]: '' }));
		}
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setSubmitError('');

		if (!validateForm()) {
			return;
		}

		setIsSubmitting(true);

		try {
			// TODO: Replace with actual email service integration
			console.log('Enhanced form submitted:', formData);

			// Simulate API call
			await new Promise((resolve) => setTimeout(resolve, 2000));

			// TODO: Send email notification
			// Example integration points:
			// - Formspree: https://formspree.io
			// - EmailJS: https://emailjs.com
			// - Custom API endpoint: /api/contact

			setIsSubmitted(true);
		} catch (error) {
			console.error('Form submission error:', error);
			setSubmitError(
				'There was an error submitting your form. Please try again or call us directly.'
			);
		} finally {
			setIsSubmitting(false);
		}
	};

	if (isSubmitted) {
		return (
			<Card className='border-2 border-primary/20'>
				<CardContent className='pt-8 text-center'>
					<CheckCircle className='h-16 w-16 text-primary mx-auto mb-4' />
					<h3 className='text-2xl font-bold mb-4'>
						Thank You, {formData.name}!
					</h3>
					<p className='text-muted-foreground mb-6'>
						Your consultation request has been received. Ray will
						contact you within 24 hours to schedule your free
						construction bookkeeping consultation.
					</p>
					<div className='bg-qb-green-50 rounded-lg p-4 mb-6'>
						<p className='text-sm font-medium text-primary mb-2'>
							What happens next:
						</p>
						<ul className='text-sm text-muted-foreground space-y-1'>
							<li>• Ray will review your business details</li>
							<li>• You'll receive a call within 24 hours</li>
							<li>
								• We'll schedule your free 30-minute
								consultation
							</li>
							<li>
								• Get a customized bookkeeping plan for your
								construction business
							</li>
						</ul>
					</div>
					<div className='flex flex-col sm:flex-row gap-4 justify-center'>
						<Button asChild>
							<a href='tel:555-123-4567'>
								<Phone className='mr-2 h-4 w-4' />
								Call Ray Directly
							</a>
						</Button>
						<Button
							variant='outline'
							onClick={() => setIsSubmitted(false)}>
							Submit Another Request
						</Button>
					</div>
				</CardContent>
			</Card>
		);
	}

	return (
		<Card className='border-2'>
			<CardHeader>
				<CardTitle className='flex items-center gap-2'>
					<Calendar className='h-5 w-5 text-primary' />
					Schedule Your Construction Consultation
				</CardTitle>
				<p className='text-muted-foreground'>
					Fill out this form and Ray will contact you within 24 hours
					to schedule your free 30-minute consultation specifically
					for construction businesses.
				</p>
			</CardHeader>

			<CardContent>
				<form onSubmit={handleSubmit} className='space-y-4'>
					{submitError && (
						<div className='bg-red-50 border border-red-200 rounded-lg p-4 flex items-start gap-3'>
							<AlertCircle className='h-5 w-5 text-red-500 mt-0.5 flex-shrink-0' />
							<p className='text-sm text-red-700'>
								{submitError}
							</p>
						</div>
					)}

					<div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
						<div>
							<Label htmlFor='name'>Full Name *</Label>
							<Input
								id='name'
								name='name'
								value={formData.name}
								onChange={handleInputChange}
								className={`mt-1 ${
									errors.name ? 'border-red-500' : ''
								}`}
								placeholder='Ray Galloway'
							/>
							{errors.name && (
								<p className='text-xs text-red-500 mt-1'>
									{errors.name}
								</p>
							)}
						</div>
						<div>
							<Label htmlFor='email'>Email Address *</Label>
							<Input
								id='email'
								name='email'
								type='email'
								value={formData.email}
								onChange={handleInputChange}
								className={`mt-1 ${
									errors.email ? 'border-red-500' : ''
								}`}
								placeholder='ray@yourcompany.com'
							/>
							{errors.email && (
								<p className='text-xs text-red-500 mt-1'>
									{errors.email}
								</p>
							)}
						</div>
					</div>

					<div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
						<div>
							<Label htmlFor='phone'>Phone Number *</Label>
							<Input
								id='phone'
								name='phone'
								type='tel'
								value={formData.phone}
								onChange={handleInputChange}
								className={`mt-1 ${
									errors.phone ? 'border-red-500' : ''
								}`}
								placeholder='(555) 123-4567'
							/>
							{errors.phone && (
								<p className='text-xs text-red-500 mt-1'>
									{errors.phone}
								</p>
							)}
						</div>
						<div>
							<Label htmlFor='company'>
								Construction Company Name *
							</Label>
							<Input
								id='company'
								name='company'
								value={formData.company}
								onChange={handleInputChange}
								className={`mt-1 ${
									errors.company ? 'border-red-500' : ''
								}`}
								placeholder='ABC Construction LLC'
							/>
							{errors.company && (
								<p className='text-xs text-red-500 mt-1'>
									{errors.company}
								</p>
							)}
						</div>
					</div>

					<div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
						<div>
							<Label htmlFor='projectType'>
								Primary Project Type
							</Label>
							<select
								id='projectType'
								name='projectType'
								value={formData.projectType}
								onChange={handleInputChange}
								className='w-full mt-1 px-3 py-2 border border-input rounded-md bg-background'>
								<option value=''>Select project type</option>
								<option value='residential'>
									Residential Construction
								</option>
								<option value='commercial'>
									Commercial Construction
								</option>
								<option value='remodeling'>
									Remodeling & Renovation
								</option>
								<option value='roofing'>Roofing</option>
								<option value='electrical'>Electrical</option>
								<option value='plumbing'>Plumbing</option>
								<option value='hvac'>HVAC</option>
								<option value='landscaping'>Landscaping</option>
								<option value='other'>
									Other Construction
								</option>
							</select>
						</div>
						<div>
							<Label htmlFor='monthlyRevenue'>
								Approximate Monthly Revenue
							</Label>
							<select
								id='monthlyRevenue'
								name='monthlyRevenue'
								value={formData.monthlyRevenue}
								onChange={handleInputChange}
								className='w-full mt-1 px-3 py-2 border border-input rounded-md bg-background'>
								<option value=''>Select revenue range</option>
								<option value='under-25k'>Under $25,000</option>
								<option value='25k-50k'>
									$25,000 - $50,000
								</option>
								<option value='50k-100k'>
									$50,000 - $100,000
								</option>
								<option value='100k-250k'>
									$100,000 - $250,000
								</option>
								<option value='250k-500k'>
									$250,000 - $500,000
								</option>
								<option value='over-500k'>Over $500,000</option>
							</select>
						</div>
					</div>

					<div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
						<div>
							<Label htmlFor='currentBookkeeper'>
								Current Bookkeeping Situation
							</Label>
							<select
								id='currentBookkeeper'
								name='currentBookkeeper'
								value={formData.currentBookkeeper}
								onChange={handleInputChange}
								className='w-full mt-1 px-3 py-2 border border-input rounded-md bg-background'>
								<option value=''>
									Select current situation
								</option>
								<option value='self'>I do it myself</option>
								<option value='spouse'>
									Spouse/family member does it
								</option>
								<option value='bookkeeper'>
									Have a bookkeeper (not satisfied)
								</option>
								<option value='accountant'>
									Have an accountant
								</option>
								<option value='nothing'>
									No bookkeeping system
								</option>
								<option value='software-only'>
									Just using software alone
								</option>
							</select>
						</div>
						<div>
							<Label htmlFor='urgency'>
								How urgent is your need?
							</Label>
							<select
								id='urgency'
								name='urgency'
								value={formData.urgency}
								onChange={handleInputChange}
								className='w-full mt-1 px-3 py-2 border border-input rounded-md bg-background'>
								<option value=''>Select urgency</option>
								<option value='immediate'>
									Immediate (this week)
								</option>
								<option value='soon'>
									Soon (within 2 weeks)
								</option>
								<option value='month'>Within a month</option>
								<option value='planning'>
									Just planning ahead
								</option>
								<option value='tax-season'>
									Before tax season
								</option>
							</select>
						</div>
					</div>

					<div>
						<Label htmlFor='message'>
							Tell Ray about your construction bookkeeping
							challenges
						</Label>
						<Textarea
							id='message'
							name='message'
							rows={4}
							value={formData.message}
							onChange={handleInputChange}
							placeholder='I need help with job costing, managing subcontractor payments, organizing receipts, preparing for tax season, etc.'
							className='mt-1'
						/>
					</div>

					<Button
						type='submit'
						className='w-full text-lg py-6'
						disabled={isSubmitting}>
						{isSubmitting ? (
							<>
								<Loader2 className='mr-2 h-5 w-5 animate-spin' />
								Submitting Your Request...
							</>
						) : (
							<>
								<Calendar className='mr-2 h-5 w-5' />
								Schedule My FREE Construction Consultation
							</>
						)}
					</Button>

					<div className='text-center'>
						<div className='flex items-center justify-center gap-2 text-xs text-muted-foreground'>
							<Shield className='h-3 w-3' />
							<span>
								Your information is secure and never shared
							</span>
						</div>
					</div>
				</form>
			</CardContent>
		</Card>
	);
}
