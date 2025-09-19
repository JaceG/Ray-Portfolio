'use client';

import { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Calendar } from 'lucide-react';

interface CalendlyModalProps {
	buttonText?: string;
	buttonSize?: 'sm' | 'lg' | 'default';
	buttonClassName?: string;
	children?: React.ReactNode;
	mode?: 'popup' | 'modal' | 'inline';
	className?: string;
	calendlyUrl?: string;
}

export function CalendlyModal({
	buttonText = 'Book a Call',
	buttonSize = 'default',
	buttonClassName = '',
	children,
	mode = 'popup',
	className = '',
	calendlyUrl = 'https://calendly.com/d/demo', // Demo URL - TODO: Replace with Ray's actual Calendly URL
}: CalendlyModalProps) {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [isCalendlyReady, setIsCalendlyReady] = useState(false);

	useEffect(() => {
		// Temporarily disable script loading to prevent conflicts
		console.log('CalendlyModal loaded - using new tab mode only');
	}, []);

	const handleOpenCalendly = () => {
		console.log('Button clicked - mode:', mode);
		console.log(
			'Calendly available:',
			typeof window !== 'undefined' && !!window.Calendly
		);

		if (mode === 'popup') {
			// Use custom modal popup instead of Calendly widget to avoid conflicts
			console.log('Opening custom Calendly modal popup...');
			setIsModalOpen(true);
		} else if (mode === 'modal') {
			// Open in our custom modal
			setIsModalOpen(true);
		}
	};

	// Inline mode - render Calendly iframe directly
	if (mode === 'inline') {
		return (
			<div className={className}>
				<iframe
					src={calendlyUrl}
					width='100%'
					height='630'
					frameBorder='0'
					title='Schedule a consultation'
					className='rounded-lg'
					style={{ minWidth: '320px' }}
				/>
			</div>
		);
	}

	// Custom modal mode (for both 'modal' and 'popup' modes)
	if (mode === 'modal' || mode === 'popup') {
		return (
			<>
				{children ? (
					<div
						onClick={handleOpenCalendly}
						className='cursor-pointer'>
						{children}
					</div>
				) : (
					<Button
						onClick={handleOpenCalendly}
						size={buttonSize}
						className={buttonClassName}>
						<Calendar className='mr-2 h-4 w-4' />
						{buttonText}
					</Button>
				)}

				<Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
					<DialogContent className='sm:max-w-4xl max-h-[80vh]'>
						<DialogHeader>
							<DialogTitle className='text-center text-xl font-bold'>
								Schedule Your Free Consultation
							</DialogTitle>
						</DialogHeader>
						<div className='mt-4'>
							<iframe
								src={calendlyUrl}
								width='100%'
								height='600'
								frameBorder='0'
								title='Schedule a consultation'
								className='rounded-lg'
							/>
						</div>
					</DialogContent>
				</Dialog>
			</>
		);
	}

	// Default popup mode
	if (children) {
		return (
			<div onClick={handleOpenCalendly} className='cursor-pointer'>
				{children}
			</div>
		);
	}

	return (
		<Button
			onClick={handleOpenCalendly}
			size={buttonSize}
			className={buttonClassName}>
			<Calendar className='mr-2 h-4 w-4' />
			{buttonText}
		</Button>
	);
}

// Extend Window interface for Calendly
declare global {
	interface Window {
		Calendly: {
			initPopupWidget: (options: { url: string }) => void;
		};
	}
}
