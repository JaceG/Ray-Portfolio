'use client';

import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Mail, ArrowRight } from 'lucide-react';

interface EmailCollectionModalProps {
	isOpen: boolean;
	onClose: () => void;
	onSubmit: (data: { name: string; email: string }) => void;
	title?: string;
	description?: string;
	buttonText?: string;
}

export function EmailCollectionModal({
	isOpen,
	onClose,
	onSubmit,
	title = 'Where should I send a link to the training?',
	description = 'Enter your details below to get instant access to the video training',
	buttonText = 'Send Me The Training Link',
}: EmailCollectionModalProps) {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
	});
	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		if (!formData.name || !formData.email) {
			alert('Please fill in all fields');
			return;
		}

		setIsSubmitting(true);

		try {
			await onSubmit(formData);
			onClose();
		} catch (error) {
			console.error('Form submission error:', error);
			alert('There was an error. Please try again.');
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<Dialog open={isOpen} onOpenChange={onClose}>
			<DialogContent className='sm:max-w-md'>
				<DialogHeader>
					<DialogTitle className='text-center text-xl font-bold'>
						{title}
					</DialogTitle>
				</DialogHeader>

				<div className='text-center mb-6'>
					<div className='w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4'>
						<Mail className='h-8 w-8 text-primary' />
					</div>
					<p className='text-muted-foreground'>{description}</p>
				</div>

				<form onSubmit={handleSubmit} className='space-y-4'>
					<div>
						<Label htmlFor='name'>First Name *</Label>
						<Input
							id='name'
							name='name'
							value={formData.name}
							onChange={handleInputChange}
							required
							className='mt-1'
							placeholder='Enter your first name'
						/>
					</div>

					<div>
						<Label htmlFor='email'>Email Address *</Label>
						<Input
							id='email'
							name='email'
							type='email'
							value={formData.email}
							onChange={handleInputChange}
							required
							className='mt-1'
							placeholder='Enter your email address'
						/>
					</div>

					<Button
						type='submit'
						className='w-full text-lg py-6 mt-6'
						disabled={isSubmitting}>
						{isSubmitting ? (
							<>
								<div className='animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2'></div>
								Sending...
							</>
						) : (
							<>
								{buttonText}
								<ArrowRight className='ml-2 h-5 w-5' />
							</>
						)}
					</Button>

					<p className='text-xs text-muted-foreground text-center mt-4'>
						By submitting, you agree to receive the training video
						and helpful tips via email. You can unsubscribe at any
						time.
					</p>
				</form>
			</DialogContent>
		</Dialog>
	);
}
