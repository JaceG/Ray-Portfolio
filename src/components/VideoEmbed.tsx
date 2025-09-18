'use client';

import { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import {
	Play,
	Volume2,
	Maximize,
	Share2,
	Clock,
	ExternalLink,
} from 'lucide-react';

interface VideoEmbedProps {
	title?: string;
	description?: string;
	duration?: string;
	thumbnailUrl?: string;
	videoUrl?: string;
	embedCode?: string;
	aspectRatio?: '16:9' | '4:3' | '1:1';
	autoPlay?: boolean;
	showControls?: boolean;
	className?: string;
	onPlay?: () => void;
	onComplete?: () => void;
}

export function VideoEmbed({
	title = 'Video',
	description,
	duration,
	thumbnailUrl,
	videoUrl,
	embedCode,
	aspectRatio = '16:9',
	autoPlay = false,
	showControls = true,
	className = '',
	onPlay,
	onComplete,
}: VideoEmbedProps) {
	const [isPlaying, setIsPlaying] = useState(false);
	const [isLoaded, setIsLoaded] = useState(false);

	const aspectRatioClasses = {
		'16:9': 'aspect-video',
		'4:3': 'aspect-[4/3]',
		'1:1': 'aspect-square',
	};

	const handlePlay = () => {
		setIsPlaying(true);
		setIsLoaded(true);
		onPlay?.();
	};

	const handleVideoComplete = () => {
		setIsPlaying(false);
		onComplete?.();
	};

	return (
		<Card className={`overflow-hidden ${className}`}>
			<div
				className={`relative bg-black ${aspectRatioClasses[aspectRatio]}`}>
				{/* Video Embed or Placeholder */}
				{isLoaded && embedCode ? (
					<div
						className='absolute inset-0'
						dangerouslySetInnerHTML={{ __html: embedCode }}
					/>
				) : isLoaded && videoUrl ? (
					<video
						className='absolute inset-0 w-full h-full object-cover'
						controls={showControls}
						autoPlay={autoPlay}
						onEnded={handleVideoComplete}
						onPlay={() => setIsPlaying(true)}
						onPause={() => setIsPlaying(false)}>
						<source src={videoUrl} type='video/mp4' />
						Your browser does not support the video tag.
					</video>
				) : (
					/* Thumbnail/Placeholder */
					<div className='absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800'>
						{thumbnailUrl ? (
							<>
								<img
									src={thumbnailUrl}
									alt={title}
									className='absolute inset-0 w-full h-full object-cover opacity-70'
								/>
								<div className='relative z-10 text-center'>
									<button
										onClick={handlePlay}
										className='w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-primary/90 transition-colors shadow-lg'>
										<Play className='h-6 w-6 text-white ml-1' />
									</button>
									<h3 className='text-white text-lg font-semibold mb-2'>
										{title}
									</h3>
									{description && (
										<p className='text-gray-300 text-sm max-w-xs mx-auto'>
											{description}
										</p>
									)}
								</div>
							</>
						) : (
							/* Default placeholder */
							<div className='text-center'>
								<button
									onClick={handlePlay}
									className='w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 hover:bg-primary/90 transition-colors shadow-lg'>
									<Play className='h-8 w-8 text-white ml-1' />
								</button>
								<h3 className='text-white text-xl font-semibold mb-2'>
									{title}
								</h3>
								{description && (
									<p className='text-gray-300 text-sm max-w-sm mx-auto mb-4'>
										{description}
									</p>
								)}
								<p className='text-gray-400 text-xs'>
									{videoUrl || embedCode
										? 'Click to play video'
										: 'Video placeholder - Add videoUrl or embedCode'}
								</p>
							</div>
						)}

						{/* Video Info Overlay */}
						{duration && (
							<div className='absolute top-4 left-4 bg-black/50 rounded-lg px-3 py-2'>
								<div className='flex items-center gap-2 text-white text-sm'>
									<Clock className='h-4 w-4' />
									<span>{duration}</span>
								</div>
							</div>
						)}

						{/* Control Buttons */}
						{showControls && (
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
						)}
					</div>
				)}
			</div>

			{/* Video Caption/Description */}
			{(title || description) && (
				<CardContent className='pt-4'>
					<div className='flex items-start justify-between'>
						<div>
							<h4 className='font-semibold mb-1'>{title}</h4>
							{description && (
								<p className='text-sm text-muted-foreground'>
									{description}
								</p>
							)}
						</div>
						{videoUrl && (
							<Button variant='ghost' size='sm' asChild>
								<a
									href={videoUrl}
									target='_blank'
									rel='noopener noreferrer'>
									<ExternalLink className='h-4 w-4' />
								</a>
							</Button>
						)}
					</div>
				</CardContent>
			)}
		</Card>
	);
}

// Specialized components for common use cases

export function YouTubeEmbed({
	videoId,
	title,
	className = '',
	...props
}: {
	videoId: string;
	title?: string;
	className?: string;
} & Partial<VideoEmbedProps>) {
	const embedCode = `
		<iframe
			width="100%"
			height="100%"
			src="https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1"
			title="${title || 'YouTube video'}"
			frameborder="0"
			allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
			allowfullscreen
			style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;">
		</iframe>
	`;

	return (
		<VideoEmbed
			title={title}
			embedCode={embedCode}
			className={className}
			{...props}
		/>
	);
}

export function VimeoEmbed({
	videoId,
	title,
	className = '',
	...props
}: {
	videoId: string;
	title?: string;
	className?: string;
} & Partial<VideoEmbedProps>) {
	const embedCode = `
		<iframe
			src="https://player.vimeo.com/video/${videoId}?badge=0&autopause=0&player_id=0&app_id=58479"
			width="100%"
			height="100%"
			frameborder="0"
			allow="autoplay; fullscreen; picture-in-picture"
			allowfullscreen
			title="${title || 'Vimeo video'}"
			style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;">
		</iframe>
	`;

	return (
		<VideoEmbed
			title={title}
			embedCode={embedCode}
			className={className}
			{...props}
		/>
	);
}

// Hero video component for introduction videos
export function HeroVideoEmbed({
	title = 'Meet Ray Galloway',
	description = 'Your Delaware bookkeeping expert',
	className = '',
	...props
}: Partial<VideoEmbedProps>) {
	return (
		<div className={`relative ${className}`}>
			<VideoEmbed
				title={title}
				description={description}
				aspectRatio='16:9'
				showControls={true}
				className='shadow-2xl'
				{...props}
			/>

			{/* Decorative elements */}
			<div className='absolute -top-4 -right-4 w-8 h-8 bg-primary/20 rounded-full'></div>
			<div className='absolute -bottom-4 -left-4 w-12 h-12 bg-primary/10 rounded-full'></div>
		</div>
	);
}
