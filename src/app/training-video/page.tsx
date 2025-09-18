'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
	ArrowLeft,
	Play,
	Download,
	Clock,
	Users,
	Star,
	CheckCircle,
	BookOpen,
	Calendar,
	Gift,
	Volume2,
	Maximize,
	Share2,
} from 'lucide-react';

export default function TrainingVideo() {
	const [isPlaying, setIsPlaying] = useState(false);
	const [watchTime, setWatchTime] = useState(0);
	const [hasWatched, setHasWatched] = useState(false);

	// Simulate video progress
	const handleVideoPlay = () => {
		setIsPlaying(true);
		// In a real implementation, this would track actual video progress
		const interval = setInterval(() => {
			setWatchTime((prev) => {
				if (prev >= 100) {
					clearInterval(interval);
					setHasWatched(true);
					setIsPlaying(false);
					return 100;
				}
				return prev + 2;
			});
		}, 200);
	};

	return (
		<div className='min-h-screen bg-gradient-to-br from-qb-green-50 via-white to-qb-green-100'>
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
						<div className='flex items-center space-x-4'>
							<span className='text-sm font-medium text-primary'>
								🎥 Free Training Video
							</span>
						</div>
					</div>
				</div>
			</header>

			<div className='container mx-auto px-4 sm:px-6 lg:px-8 py-12'>
				<div className='max-w-5xl mx-auto'>
					{/* Video Header */}
					<div className='text-center mb-8'>
						<div className='inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6'>
							<Play className='h-4 w-4 text-primary' />
							<span className='text-sm font-medium text-primary'>
								FREE TRAINING
							</span>
						</div>

						<h1 className='text-4xl sm:text-5xl font-bold mb-6'>
							Master Your Business Finances in
							<br />
							<span className='text-primary'>
								Just 15 Minutes
							</span>
						</h1>

						<p className='text-xl text-muted-foreground max-w-3xl mx-auto mb-8'>
							Watch Ray walk you through the exact system he uses
							to help Delaware and Columbus area businesses save
							60+ hours per year on bookkeeping.
						</p>

						{/* Video Stats */}
						<div className='flex flex-wrap justify-center items-center gap-6 mb-8'>
							<div className='flex items-center gap-2'>
								<Clock className='h-5 w-5 text-primary' />
								<span className='text-sm font-medium'>
									15 minutes
								</span>
							</div>
							<div className='flex items-center gap-2'>
								<Users className='h-5 w-5 text-primary' />
								<span className='text-sm font-medium'>
									1,200+ views
								</span>
							</div>
							<div className='flex items-center gap-2'>
								<Star className='h-5 w-5 text-yellow-400 fill-current' />
								<span className='text-sm font-medium'>
									4.9/5 rating
								</span>
							</div>
						</div>
					</div>

					{/* Video Player Section */}
					<div className='grid lg:grid-cols-3 gap-8 mb-12'>
						{/* Video Player */}
						<div className='lg:col-span-2'>
							<Card className='overflow-hidden shadow-2xl'>
								<div className='relative bg-black aspect-video'>
									{/* Video Placeholder */}
									{!isPlaying ? (
										<div className='absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800'>
											<div className='text-center'>
												<div
													className='w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-primary/90 transition-colors cursor-pointer'
													onClick={handleVideoPlay}>
													<Play className='h-8 w-8 text-white ml-1' />
												</div>
												<h3 className='text-white text-xl font-semibold mb-2'>
													7 Financial Tricks for
													Delaware Service Businesses
												</h3>
												<p className='text-gray-300 text-sm'>
													Click to start the training
													video
												</p>
											</div>

											{/* Video Overlay Info */}
											<div className='absolute top-4 left-4 bg-black/50 rounded-lg px-3 py-2'>
												<div className='flex items-center gap-2 text-white text-sm'>
													<Clock className='h-4 w-4' />
													<span>15:42</span>
												</div>
											</div>

											<div className='absolute top-4 right-4 flex gap-2'>
												<button className='bg-black/50 rounded-lg p-2 text-white hover:bg-black/70 transition-colors'>
													<Volume2 className='h-4 w-4' />
												</button>
												<button className='bg-black/50 rounded-lg p-2 text-white hover:bg-black/70 transition-colors'>
													<Maximize className='h-4 w-4' />
												</button>
												<button className='bg-black/50 rounded-lg p-2 text-white hover:bg-black/70 transition-colors'>
													<Share2 className='h-4 w-4' />
												</button>
											</div>
										</div>
									) : (
										<div className='absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/20 to-primary/40'>
											<div className='text-center text-white'>
												<div className='animate-pulse mb-4'>
													<Play className='h-16 w-16 mx-auto' />
												</div>
												<p className='text-lg font-semibold mb-2'>
													Video Playing...
												</p>
												<div className='w-64 bg-white/20 rounded-full h-2 mx-auto'>
													<div
														className='bg-white rounded-full h-2 transition-all duration-200'
														style={{
															width: `${watchTime}%`,
														}}></div>
												</div>
												<p className='text-sm mt-2'>
													{Math.round(watchTime)}%
													complete
												</p>
											</div>
										</div>
									)}
								</div>

								{/* Video Description */}
								<CardContent className='pt-6'>
									<h3 className='text-xl font-bold mb-3'>
										What You'll Learn in This Training
									</h3>
									<div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
										{[
											'Delaware-specific tax strategies',
											'QuickBooks automation shortcuts',
											'Cash flow optimization system',
											'Error-proof documentation',
											'Year-end preparation checklist',
											'Local business resources',
										].map((item, index) => (
											<div
												key={index}
												className='flex items-center gap-2'>
												<CheckCircle className='h-4 w-4 text-primary flex-shrink-0' />
												<span className='text-sm'>
													{item}
												</span>
											</div>
										))}
									</div>
								</CardContent>
							</Card>
						</div>

						{/* Sidebar */}
						<div className='space-y-6'>
							{/* Video Progress */}
							{watchTime > 0 && (
								<Card>
									<CardContent className='pt-6'>
										<div className='flex items-center gap-3 mb-4'>
											<Clock className='h-5 w-5 text-primary' />
											<h3 className='font-semibold'>
												Your Progress
											</h3>
										</div>
										<div className='space-y-3'>
											<div className='w-full bg-gray-200 rounded-full h-2'>
												<div
													className='bg-primary rounded-full h-2 transition-all duration-300'
													style={{
														width: `${watchTime}%`,
													}}></div>
											</div>
											<p className='text-sm text-muted-foreground'>
												{Math.round(watchTime)}%
												complete (
												{Math.round(
													(watchTime * 15.42) / 100
												)}{' '}
												min watched)
											</p>
										</div>
									</CardContent>
								</Card>
							)}

							{/* Download Guide CTA */}
							<Card className='bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20'>
								<CardContent className='pt-6'>
									<div className='text-center'>
										<Gift className='h-12 w-12 text-primary mx-auto mb-4' />
										<h3 className='font-bold mb-2'>
											Get the Written Guide
										</h3>
										<p className='text-sm text-muted-foreground mb-4'>
											Download the PDF version of this
											training plus bonus worksheets.
										</p>
										<Button asChild className='w-full'>
											<Link href='/free-guide'>
												<Download className='mr-2 h-4 w-4' />
												Download Free Guide
											</Link>
										</Button>
									</div>
								</CardContent>
							</Card>

							{/* Book Consultation CTA */}
							<Card>
								<CardContent className='pt-6'>
									<div className='text-center'>
										<Calendar className='h-12 w-12 text-primary mx-auto mb-4' />
										<h3 className='font-bold mb-2'>
											Ready to Get Started?
										</h3>
										<p className='text-sm text-muted-foreground mb-4'>
											Let's discuss how to implement these
											strategies for your business.
										</p>
										<Button
											asChild
											variant='outline'
											className='w-full'>
											<Link href='/book-a-call'>
												Schedule Free Consultation
											</Link>
										</Button>
									</div>
								</CardContent>
							</Card>

							{/* About Ray */}
							<Card>
								<CardContent className='pt-6'>
									<div className='flex items-center gap-3 mb-4'>
										<div className='w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold'>
											RG
										</div>
										<div>
											<h3 className='font-semibold'>
												Ray Galloway
											</h3>
											<p className='text-sm text-muted-foreground'>
												QuickBooks ProAdvisor
											</p>
										</div>
									</div>
									<p className='text-sm text-muted-foreground mb-4'>
										10+ years helping Delaware and Columbus
										area businesses streamline their
										bookkeeping and maximize their profits.
									</p>
									<div className='flex items-center gap-4 text-xs text-muted-foreground'>
										<span className='flex items-center gap-1'>
											<Users className='h-3 w-3' />
											100+ clients
										</span>
										<span className='flex items-center gap-1'>
											<Star className='h-3 w-3 text-yellow-400 fill-current' />
											5.0 rating
										</span>
									</div>
								</CardContent>
							</Card>
						</div>
					</div>

					{/* Completion Actions */}
					{hasWatched && (
						<Card className='bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20'>
							<CardContent className='pt-8'>
								<div className='text-center'>
									<CheckCircle className='h-16 w-16 text-primary mx-auto mb-4' />
									<h2 className='text-2xl font-bold mb-4'>
										Congratulations! Training Complete
									</h2>
									<p className='text-muted-foreground mb-6 max-w-2xl mx-auto'>
										You've learned the key strategies to
										transform your business finances. Now
										let's put this knowledge into action for
										your Delaware business.
									</p>

									<div className='flex flex-col sm:flex-row gap-4 justify-center'>
										<Button size='lg' asChild>
											<Link href='/book-a-call'>
												<Calendar className='mr-2 h-5 w-5' />
												Schedule Implementation Call
											</Link>
										</Button>
										<Button
											size='lg'
											variant='outline'
											asChild>
											<Link href='/free-guide'>
												<BookOpen className='mr-2 h-5 w-5' />
												Get Written Materials
											</Link>
										</Button>
									</div>
								</div>
							</CardContent>
						</Card>
					)}

					{/* Related Content */}
					<div className='mt-12'>
						<h2 className='text-2xl font-bold mb-8 text-center'>
							Continue Your Learning
						</h2>

						<div className='grid md:grid-cols-3 gap-6'>
							<Card className='hover:shadow-lg transition-shadow cursor-pointer'>
								<CardContent className='pt-6'>
									<BookOpen className='h-8 w-8 text-primary mb-4' />
									<h3 className='font-semibold mb-2'>
										Written Guide
									</h3>
									<p className='text-sm text-muted-foreground mb-4'>
										Download the complete PDF with
										worksheets and checklists.
									</p>
									<Link
										href='/free-guide'
										className='text-primary text-sm font-medium hover:underline'>
										Download Now →
									</Link>
								</CardContent>
							</Card>

							<Card className='hover:shadow-lg transition-shadow cursor-pointer'>
								<CardContent className='pt-6'>
									<Calendar className='h-8 w-8 text-primary mb-4' />
									<h3 className='font-semibold mb-2'>
										Free Consultation
									</h3>
									<p className='text-sm text-muted-foreground mb-4'>
										Get personalized advice for your
										specific business situation.
									</p>
									<Link
										href='/book-a-call'
										className='text-primary text-sm font-medium hover:underline'>
										Book Call →
									</Link>
								</CardContent>
							</Card>

							<Card className='hover:shadow-lg transition-shadow cursor-pointer'>
								<CardContent className='pt-6'>
									<Users className='h-8 w-8 text-primary mb-4' />
									<h3 className='font-semibold mb-2'>
										Client Dashboard
									</h3>
									<p className='text-sm text-muted-foreground mb-4'>
										See how your financial dashboard would
										look with live data.
									</p>
									<Link
										href='/dashboard'
										className='text-primary text-sm font-medium hover:underline'>
										View Demo →
									</Link>
								</CardContent>
							</Card>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
