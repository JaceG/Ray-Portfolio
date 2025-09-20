'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, Mail, X } from 'lucide-react';

interface ThankYouModalProps {
	isOpen: boolean;
	onClose: () => void;
	title?: string;
	description?: string;
	userEmail?: string;
}

export function ThankYouModal({
	isOpen,
	onClose,
	title = "Thank You!",
	description = "Your free guide request has been received. We'll email it to you shortly.",
	userEmail
}: ThankYouModalProps) {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		if (isOpen) {
			setIsVisible(true);
		} else {
			setIsVisible(false);
		}
	}, [isOpen]);

	const handleClose = () => {
		setIsVisible(false);
		setTimeout(() => {
			onClose();
		}, 200);
	};

	if (!isOpen) return null;

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center">
			{/* Backdrop */}
			<div 
				className="absolute inset-0 bg-black/50 transition-opacity duration-200"
				onClick={handleClose}
			/>
			
			{/* Modal */}
			<Card className={`relative w-full max-w-md mx-4 transform transition-all duration-200 ${
				isVisible ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
			}`}>
				<CardHeader className="text-center pb-4">
					<div className="flex justify-between items-start mb-4">
						<div className="flex-1" />
						<Button
							variant="ghost"
							size="sm"
							onClick={handleClose}
							className="h-8 w-8 p-0 hover:bg-gray-100"
						>
							<X className="h-4 w-4" />
						</Button>
					</div>
					
					<div className="flex justify-center mb-4">
						<div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
							<CheckCircle className="h-8 w-8 text-green-600" />
						</div>
					</div>
					
					<CardTitle className="text-2xl mb-2">{title}</CardTitle>
					<p className="text-muted-foreground">{description}</p>
				</CardHeader>

				<CardContent className="pt-0">
					{userEmail && (
						<div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
							<div className="flex items-center gap-3">
								<Mail className="h-5 w-5 text-blue-600" />
								<div>
									<p className="text-sm font-medium text-blue-900">
										We'll send your guide to:
									</p>
									<p className="text-sm text-blue-700 font-mono">
										{userEmail}
									</p>
								</div>
							</div>
						</div>
					)}

					<div className="space-y-4">
						<div className="text-center">
							<h4 className="font-semibold mb-2">What happens next?</h4>
							<div className="space-y-2 text-sm text-muted-foreground">
								<div className="flex items-center gap-2">
									<div className="w-2 h-2 bg-primary rounded-full" />
									<span>You'll receive an email within 5 minutes</span>
								</div>
								<div className="flex items-center gap-2">
									<div className="w-2 h-2 bg-primary rounded-full" />
									<span>The guide includes 7 proven financial strategies</span>
								</div>
								<div className="flex items-center gap-2">
									<div className="w-2 h-2 bg-primary rounded-full" />
									<span>Plus bonus tips for Columbus area businesses</span>
								</div>
							</div>
						</div>

						<Button 
							onClick={handleClose}
							className="w-full"
						>
							Got it, thanks!
						</Button>
					</div>
				</CardContent>
			</Card>
		</div>
	);
}
