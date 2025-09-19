'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { CalendlyModal } from '@/components/CalendlyModal';
import {
	ArrowLeft,
	Play,
	Pause,
	Volume2,
	Maximize,
	CheckCircle,
	Clock,
	Users,
	Star,
	Calendar,
} from 'lucide-react';

export default function TrainingVideo() {
	const [videoProgress, setVideoProgress] = useState(0);
	const [isPlaying, setIsPlaying] = useState(false);
	const [showCalendlyButton, setShowCalendlyButton] = useState(false);
	const [currentTime, setCurrentTime] = useState(0);
	const [duration, setDuration] = useState(0);

	// Show Calendly button when user has watched 90% of the video
	useEffect(() => {
		if (videoProgress >= 90) {
			setShowCalendlyButton(true);
		}
	}, [videoProgress]);

	// Simulate video progress (replace with actual video player integration)
	const handleVideoProgress = (progress: number) => {
		setVideoProgress(progress);
	};

	// Format time in MM:SS format
	const formatTime = (seconds: number) => {
		const mins = Math.floor(seconds / 60);
		const secs = Math.floor(seconds % 60);
		return `${mins}:${secs.toString().padStart(2, '0')}`;
	};

	return (
		<div className='min-h-screen bg-gradient-to-br from-qb-green-50 via-white to-qb-green-100'>
			{/* Header */}
			<header className='bg-white border-b sticky top-0 z-50'>
				<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='flex justify-between items-center h-16'>
						<Link
							href='/free-guide'
							className='flex items-center text-lg font-medium hover:text-primary transition-colors'>
							<ArrowLeft className='mr-2 h-4 w-4' />
							Back to Guide
						</Link>
						<div className='flex items-center space-x-4'>
							<span className='text-sm font-medium text-primary'>
								Free Training Video
							</span>
						</div>
					</div>
				</div>
			</header>

			<div className='container mx-auto px-4 sm:px-6 lg:px-8 py-12'>
				<div className='max-w-6xl mx-auto'>
					{/* Header Section */}
					<div className='text-center mb-8'>
						<div className='inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6'>
							<Star className='h-4 w-4 text-primary' />
							<span className='text-sm font-medium text-primary'>
								EXCLUSIVE TRAINING
							</span>
						</div>

						<h1 className='text-4xl sm:text-5xl font-bold mb-6'>
							7 Financial Tricks for
							<br />
							<span className='text-primary'>
								Delaware Service Businesses
							</span>
						</h1>

						<p className='text-xl text-muted-foreground mb-6 max-w-3xl mx-auto'>
							Watch this exclusive 25-minute training to discover
							the insider strategies that help Delaware businesses
							save 60+ hours per year and increase profit margins
							by 18%.
						</p>

						{/* Social Proof */}
						<div className='flex flex-wrap justify-center items-center gap-6 mb-8'>
							<div className='flex items-center gap-2'>
								<Users className='h-5 w-5 text-primary' />
								<span className='text-sm font-medium'>
									Watched by 1,200+ business owners
								</span>
							</div>
							<div className='flex items-center gap-2'>
								<Clock className='h-5 w-5 text-primary' />
								<span className='text-sm font-medium'>
									25 minutes
								</span>
							</div>
							<div className='flex items-center gap-2'>
								<CheckCircle className='h-5 w-5 text-primary' />
								<span className='text-sm font-medium'>
									Actionable strategies
								</span>
							</div>
						</div>
					</div>

					<div className='grid lg:grid-cols-3 gap-8'>
						{/* Main Video Column */}
						<div className='lg:col-span-2'>
							<Card className='border-2 border-primary/20 mb-6'>
								<CardContent className='p-0'>
									{/* Video Player Placeholder */}
									<div className='relative bg-black rounded-t-lg aspect-video flex items-center justify-center'>
										{/* TODO: Replace with actual video player */}
										<div className='text-center text-white'>
											<div className='w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4'>
												<Play className='h-10 w-10 ml-1' />
											</div>
											<h3 className='text-xl font-semibold mb-2'>
												Video Training Placeholder
											</h3>
											<p className='text-gray-300 mb-4'>
												Replace this with your actual
												video player
											</p>
											<Button
												onClick={() => {
													setIsPlaying(!isPlaying);
													// Simulate video progress for demo
													if (!isPlaying) {
														const interval =
															setInterval(() => {
																setCurrentTime(
																	(prev) => {
																		const newTime =
																			prev +
																			1;
																		const progress =
																			(newTime /
																				1500) *
																			100; // 25 minutes = 1500 seconds
																		setVideoProgress(
																			progress
																		);
																		if (
																			progress >=
																			100
																		) {
																			clearInterval(
																				interval
																			);
																			setIsPlaying(
																				false
																			);
																		}
																		return newTime;
																	}
																);
															}, 1000);
													}
												}}
												className='bg-primary hover:bg-primary/90'>
												{isPlaying ? (
													<>
														<Pause className='mr-2 h-4 w-4' />
														Pause Training
													</>
												) : (
													<>
														<Play className='mr-2 h-4 w-4' />
														Start Training
													</>
												)}
											</Button>
										</div>
									</div>

									{/* Video Controls */}
									<div className='p-4 bg-gray-900 text-white rounded-b-lg'>
										<div className='flex items-center justify-between mb-2'>
											<span className='text-sm'>
												{formatTime(currentTime)} /{' '}
												{formatTime(1500)}
											</span>
											<span className='text-sm'>
												{Math.round(videoProgress)}%
												watched
											</span>
										</div>
										<Progress
											value={videoProgress}
											className='mb-3'
										/>
										<div className='flex items-center justify-between'>
											<div className='flex items-center gap-2'>
												<Button
													size='sm'
													variant='ghost'
													className='text-white hover:bg-gray-800'>
													{isPlaying ? (
														<Pause className='h-4 w-4' />
													) : (
														<Play className='h-4 w-4' />
													)}
												</Button>
												<Button
													size='sm'
													variant='ghost'
													className='text-white hover:bg-gray-800'>
													<Volume2 className='h-4 w-4' />
												</Button>
											</div>
											<Button
												size='sm'
												variant='ghost'
												className='text-white hover:bg-gray-800'>
												<Maximize className='h-4 w-4' />
											</Button>
										</div>
									</div>
								</CardContent>
							</Card>

							{/* Calendly Button - Only shows after 90% completion */}
							{showCalendlyButton && (
								<Card className='border-2 border-green-500 bg-green-50'>
									<CardContent className='pt-6'>
										<div className='text-center'>
											<CheckCircle className='h-12 w-12 text-green-500 mx-auto mb-4' />
											<h3 className='text-xl font-bold mb-2'>
												Congratulations! 🎉
											</h3>
											<p className='text-muted-foreground mb-6'>
												You've completed the training!
												Ready to implement these
												strategies in your business?
												Let's schedule a free
												consultation to create your
												custom plan.
											</p>
											<CalendlyModal
												mode='modal'
												buttonText='Schedule My Free Strategy Session'
												buttonSize='lg'
												buttonClassName='w-full text-lg py-6 bg-green-600 hover:bg-green-700'
											/>
										</div>
									</CardContent>
								</Card>
							)}

							{/* Progress Indicator */}
							{!showCalendlyButton && (
								<Card className='border border-yellow-200 bg-yellow-50'>
									<CardContent className='pt-6'>
										<div className='text-center'>
											<Clock className='h-8 w-8 text-yellow-600 mx-auto mb-3' />
											<h4 className='font-semibold mb-2'>
												Keep Watching to Unlock Your
												Free Consultation
											</h4>
											<p className='text-sm text-muted-foreground mb-3'>
												Watch{' '}
												{Math.max(
													0,
													90 -
														Math.round(
															videoProgress
														)
												)}
												% more to unlock your free
												strategy session
											</p>
											<Progress
												value={videoProgress}
												className='max-w-xs mx-auto'
											/>
										</div>
									</CardContent>
								</Card>
							)}
						</div>

						{/* Sidebar */}
						<div className='lg:col-span-1 space-y-6'>
							{/* What You'll Learn */}
							<Card>
								<CardHeader>
									<CardTitle className='text-lg'>
										What You'll Learn
									</CardTitle>
								</CardHeader>
								<CardContent>
									<ul className='space-y-3 text-sm'>
										<li className='flex items-start gap-3'>
											<CheckCircle className='h-4 w-4 text-primary mt-0.5 flex-shrink-0' />
											<span>
												Delaware-specific tax advantages
												most businesses miss
											</span>
										</li>
										<li className='flex items-start gap-3'>
											<CheckCircle className='h-4 w-4 text-primary mt-0.5 flex-shrink-0' />
											<span>
												Cash flow optimization
												strategies for 25% improvement
											</span>
										</li>
										<li className='flex items-start gap-3'>
											<CheckCircle className='h-4 w-4 text-primary mt-0.5 flex-shrink-0' />
											<span>
												QuickBooks shortcuts that save
												10+ hours monthly
											</span>
										</li>
										<li className='flex items-start gap-3'>
											<CheckCircle className='h-4 w-4 text-primary mt-0.5 flex-shrink-0' />
											<span>
												Audit-proof documentation system
											</span>
										</li>
										<li className='flex items-start gap-3'>
											<CheckCircle className='h-4 w-4 text-primary mt-0.5 flex-shrink-0' />
											<span>
												Year-end tax preparation
												checklist
											</span>
										</li>
									</ul>
								</CardContent>
							</Card>

							{/* About Ray */}
							<Card className='bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20'>
								<CardContent className='pt-6'>
									<div className='text-center'>
										<div className='w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold'>
											RG
										</div>
										<h3 className='font-semibold mb-2'>
											Ray Galloway
										</h3>
										<p className='text-sm text-muted-foreground mb-3'>
											QuickBooks ProAdvisor
										</p>
										<p className='text-sm text-muted-foreground'>
											10+ years helping Delaware and
											Columbus area businesses streamline
											their bookkeeping and maximize
											profits.
										</p>
									</div>
								</CardContent>
							</Card>

							{/* Testimonial */}
							<Card>
								<CardContent className='pt-6'>
									<div className='flex text-yellow-400 mb-3'>
										{[...Array(5)].map((_, i) => (
											<Star
												key={i}
												className='h-4 w-4 fill-current'
											/>
										))}
									</div>
									<p className='text-sm italic mb-4'>
										"This training helped me identify $3,200
										in missed deductions and cut my
										bookkeeping time in half. Ray's
										strategies are game-changing for
										Delaware businesses."
									</p>
									<div className='flex items-center'>
										<div className='w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center mr-3'>
											<span className='text-primary font-semibold text-sm'>
												SM
											</span>
										</div>
										<div>
											<p className='font-semibold text-sm'>
												Sarah Mitchell
											</p>
											<p className='text-xs text-muted-foreground'>
												Mitchell Consulting, Delaware OH
											</p>
										</div>
									</div>
								</CardContent>
							</Card>

							{/* Download Guide */}
							<Card className='border-2 border-primary/20'>
								<CardContent className='pt-6'>
									<div className='text-center'>
										<div className='w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3'>
											<CheckCircle className='h-6 w-6 text-primary' />
										</div>
										<h4 className='font-semibold mb-2'>
											Get the PDF Guide
										</h4>
										<p className='text-sm text-muted-foreground mb-4'>
											Download the companion PDF guide
											with all the strategies from this
											training.
										</p>
										<Button
											variant='outline'
											size='sm'
											className='w-full'
											onClick={() => {
												// TODO: Trigger PDF download
												alert(
													'PDF download would start here. Add actual PDF file to public/downloads/'
												);
											}}>
											Download PDF Guide
										</Button>
									</div>
								</CardContent>
							</Card>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
