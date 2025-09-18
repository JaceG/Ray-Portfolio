'use client';

import { useState, useEffect } from 'react';
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Calendar, X } from 'lucide-react';

interface CalendlyModalProps {
	children?: React.ReactNode;
	buttonText?: string;
	buttonVariant?: 'default' | 'outline' | 'secondary' | 'ghost' | 'link';
	buttonSize?: 'default' | 'sm' | 'lg' | 'icon';
	buttonClassName?: string;
	calendlyUrl?: string;
}

export function CalendlyModal({
	children,
	buttonText = 'Book Free Call',
	buttonVariant = 'default',
	buttonSize = 'default',
	buttonClassName = '',
	calendlyUrl = 'https://calendly.com/your-link', // Replace with actual Calendly URL
}: CalendlyModalProps) {
	const [isOpen, setIsOpen] = useState(false);
	const [isScriptLoaded, setIsScriptLoaded] = useState(false);

	useEffect(() => {
		// Load Calendly script when modal opens
		if (isOpen && !isScriptLoaded) {
			const script = document.createElement('script');
			script.src =
				'https://assets.calendly.com/assets/external/widget.js';
			script.async = true;
			script.onload = () => setIsScriptLoaded(true);
			document.body.appendChild(script);

			return () => {
				// Cleanup script on unmount
				const existingScript = document.querySelector(
					'script[src="https://assets.calendly.com/assets/external/widget.js"]'
				);
				if (existingScript) {
					document.body.removeChild(existingScript);
				}
			};
		}
	}, [isOpen, isScriptLoaded]);

	const triggerButton = children || (
		<Button
			variant={buttonVariant}
			size={buttonSize}
			className={buttonClassName}>
			<Calendar className='mr-2 h-4 w-4' />
			{buttonText}
		</Button>
	);

	return (
		<Dialog open={isOpen} onOpenChange={setIsOpen}>
			<DialogTrigger asChild>{triggerButton}</DialogTrigger>
			<DialogContent className='max-w-4xl max-h-[90vh] p-0'>
				<DialogHeader className='p-6 pb-0'>
					<DialogTitle className='flex items-center gap-2'>
						<Calendar className='h-5 w-5 text-primary' />
						Schedule Your Free Consultation
					</DialogTitle>
					<DialogDescription>
						Choose a time that works best for you. Ray will call you
						at the scheduled time for your 30-minute consultation.
					</DialogDescription>
				</DialogHeader>
				<div className='p-6 pt-0'>
					{isOpen && (
						<div className='bg-gray-50 border border-gray-200 rounded-lg p-6 text-center min-h-[500px] flex items-center justify-center'>
							<div className='max-w-md'>
								<Calendar className='h-12 w-12 text-gray-400 mx-auto mb-4' />
								<h3 className='text-lg font-semibold text-gray-600 mb-2'>
									Calendly Integration Ready
								</h3>
								<p className='text-gray-500 mb-4'>
									Replace the calendlyUrl prop with your
									actual Calendly link to enable booking:
								</p>
								<div className='bg-white p-3 rounded border text-left text-xs font-mono text-gray-700'>
									{`<CalendlyModal 
  calendlyUrl="https://calendly.com/ray-galloway"
  buttonText="Book My Free Call"
/>`}
								</div>
								<p className='text-xs text-gray-500 mt-3'>
									Current URL: {calendlyUrl}
								</p>
							</div>
						</div>
					)}
				</div>
			</DialogContent>
		</Dialog>
	);
}

// Hook for programmatic opening
export function useCalendlyPopup(calendlyUrl?: string) {
	const openCalendly = () => {
		if (typeof window !== 'undefined' && window.Calendly) {
			window.Calendly.initPopupWidget({
				url: calendlyUrl || 'https://calendly.com/your-link',
			});
		} else {
			// Fallback to new window if Calendly not loaded
			window.open(
				calendlyUrl || 'https://calendly.com/your-link',
				'calendly',
				'width=800,height=600'
			);
		}
	};

	return { openCalendly };
}

// Add Calendly types to window
declare global {
	interface Window {
		Calendly?: {
			initPopupWidget: (options: { url: string }) => void;
		};
	}
}
