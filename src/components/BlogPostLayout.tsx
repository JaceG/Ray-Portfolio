import Link from 'next/link';
import Image from 'next/image';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { CalendlyModal } from './CalendlyModal';
import {
	ArrowLeft,
	Calendar,
	Clock,
	MapPin,
	Hammer,
	Building,
	Award,
	Share2,
} from 'lucide-react';

interface BlogPostLayoutProps {
	title: string;
	excerpt: string;
	publishDate: string;
	readTime: string;
	category: string;
	location: string;
	featuredImage?: string;
	children: React.ReactNode;
	relatedPosts?: {
		title: string;
		excerpt: string;
		slug: string;
		location: string;
		category: string;
	}[];
}

export function BlogPostLayout({
	title,
	excerpt,
	publishDate,
	readTime,
	category,
	location,
	featuredImage,
	children,
	relatedPosts = [],
}: BlogPostLayoutProps) {
	return (
		<div className='min-h-screen bg-white'>
			{/* Header */}
			<header className='bg-white border-b sticky top-0 z-50'>
				<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='flex justify-between items-center h-16'>
						<Link
							href='/blog'
							className='flex items-center text-lg font-medium hover:text-primary transition-colors'>
							<ArrowLeft className='mr-2 h-4 w-4' />
							Construction Blog
						</Link>
						<div className='flex items-center space-x-4'>
							<CalendlyModal
								buttonText='Free Consultation'
								buttonSize='sm'
							/>
						</div>
					</div>
				</div>
			</header>

			{/* Article Header */}
			<section className='py-12 bg-gradient-to-br from-qb-green-50 via-white to-qb-green-100'>
				<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='max-w-4xl mx-auto'>
						{/* Breadcrumb */}
						<nav className='flex items-center gap-2 text-sm text-muted-foreground mb-6'>
							<Link href='/' className='hover:text-primary'>
								Home
							</Link>
							<span>/</span>
							<Link href='/blog' className='hover:text-primary'>
								Blog
							</Link>
							<span>/</span>
							<span>{category}</span>
						</nav>

						{/* Article Meta */}
						<div className='flex flex-wrap items-center gap-4 mb-6'>
							<div className='flex items-center gap-2 px-3 py-1 bg-primary/10 rounded-full'>
								<Hammer className='h-4 w-4 text-primary' />
								<span className='text-sm font-medium text-primary'>
									{category}
								</span>
							</div>
							<div className='flex items-center gap-2 px-3 py-1 bg-gray-100 rounded-full'>
								<MapPin className='h-4 w-4 text-gray-600' />
								<span className='text-sm font-medium text-gray-600'>
									{location}
								</span>
							</div>
							<div className='flex items-center gap-2 text-sm text-muted-foreground'>
								<Calendar className='h-4 w-4' />
								<span>
									{new Date(publishDate).toLocaleDateString()}
								</span>
							</div>
							<div className='flex items-center gap-2 text-sm text-muted-foreground'>
								<Clock className='h-4 w-4' />
								<span>{readTime}</span>
							</div>
						</div>

						{/* Title */}
						<h1 className='text-4xl sm:text-5xl font-bold mb-6 leading-tight'>
							{title}
						</h1>

						<p className='text-xl text-muted-foreground mb-8'>
							{excerpt}
						</p>

						{/* Featured Image */}
						{featuredImage ? (
							<div className='relative h-64 sm:h-80 lg:h-96 rounded-xl overflow-hidden shadow-xl mb-8'>
								<Image
									src={featuredImage}
									alt={title}
									fill
									className='object-cover'
									sizes='(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw'
								/>
							</div>
						) : (
							<div className='relative h-64 sm:h-80 lg:h-96 rounded-xl overflow-hidden shadow-xl mb-8'>
								<div className='absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/40 flex items-center justify-center'>
									<div className='text-center text-white'>
										<Building className='h-20 w-20 mx-auto mb-4' />
										<p className='text-lg font-semibold'>
											{location} Construction
										</p>
										<p className='text-sm opacity-75'>
											Add featured image for this article
										</p>
									</div>
								</div>
							</div>
						)}

						{/* Share Buttons */}
						<div className='flex items-center gap-4 mb-8'>
							<span className='text-sm font-medium text-muted-foreground'>
								Share:
							</span>
							<Button variant='outline' size='sm'>
								<Share2 className='h-4 w-4 mr-2' />
								LinkedIn
							</Button>
							<Button variant='outline' size='sm'>
								<Share2 className='h-4 w-4 mr-2' />
								Facebook
							</Button>
						</div>
					</div>
				</div>
			</section>

			{/* Article Content */}
			<article className='py-12'>
				<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='max-w-4xl mx-auto'>
						<div className='prose prose-lg max-w-none'>
							{children}
						</div>
					</div>
				</div>
			</article>

			{/* Author Bio Section */}
			<section className='py-12 bg-gray-50'>
				<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='max-w-4xl mx-auto'>
						<Card className='border-2 border-primary/20'>
							<CardContent className='pt-8'>
								<div className='flex flex-col lg:flex-row items-center gap-8'>
									<div className='flex-shrink-0'>
										<div className='w-32 h-32 rounded-xl shadow-lg overflow-hidden'>
											{/* TODO: Add Ray's professional photo */}
											<div className='bg-gradient-to-br from-primary to-primary/80 w-full h-full flex items-center justify-center text-white text-4xl font-bold'>
												RG
											</div>
										</div>
									</div>

									<div className='flex-1 text-center lg:text-left'>
										<h3 className='text-2xl font-bold mb-2'>
											About Ray Galloway
										</h3>
										<p className='text-primary font-semibold mb-3'>
											QuickBooks ProAdvisor • Construction
											Industry Specialist
										</p>
										<p className='text-muted-foreground mb-6 leading-relaxed'>
											Born and raised in Delaware, Ohio,
											Ray specializes in helping
											construction companies throughout
											the Columbus area optimize their
											financial management. With over 10
											years of experience and a passion
											for the construction industry, he's
											helped local contractors save over
											$1 million in taxes and improve
											their profit margins significantly.
										</p>

										<div className='flex flex-wrap justify-center lg:justify-start gap-3 mb-6'>
											<div className='flex items-center gap-2 px-3 py-1 bg-qb-green-100 rounded-full'>
												<Award className='h-4 w-4 text-primary' />
												<span className='text-sm font-medium text-primary'>
													QuickBooks ProAdvisor
												</span>
											</div>
											<div className='flex items-center gap-2 px-3 py-1 bg-qb-green-100 rounded-full'>
												<Hammer className='h-4 w-4 text-primary' />
												<span className='text-sm font-medium text-primary'>
													Construction Expert
												</span>
											</div>
											<div className='flex items-center gap-2 px-3 py-1 bg-qb-green-100 rounded-full'>
												<MapPin className='h-4 w-4 text-primary' />
												<span className='text-sm font-medium text-primary'>
													Delaware Local
												</span>
											</div>
										</div>

										<CalendlyModal
											buttonText='Schedule Your Construction Consultation'
											buttonSize='lg'
											buttonClassName='px-8 py-4'
										/>
									</div>
								</div>
							</CardContent>
						</Card>
					</div>
				</div>
			</section>

			{/* Related Articles */}
			{relatedPosts.length > 0 && (
				<section className='py-12'>
					<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
						<div className='max-w-6xl mx-auto'>
							<h2 className='text-3xl font-bold mb-8 text-center'>
								Related Construction Articles
							</h2>

							<div className='grid md:grid-cols-3 gap-6'>
								{relatedPosts.map((post, index) => (
									<Card
										key={index}
										className='hover:shadow-lg transition-shadow cursor-pointer'>
										<CardContent className='pt-6'>
											<div className='flex items-center gap-2 mb-3'>
												<MapPin className='h-4 w-4 text-primary' />
												<span className='text-sm text-primary font-medium'>
													{post.location}
												</span>
											</div>
											<h3 className='font-bold mb-2 leading-tight'>
												{post.title}
											</h3>
											<p className='text-sm text-muted-foreground mb-4'>
												{post.excerpt}
											</p>
											<Button size='sm' asChild>
												<Link
													href={`/blog/${post.slug}`}>
													Read Article
												</Link>
											</Button>
										</CardContent>
									</Card>
								))}
							</div>
						</div>
					</div>
				</section>
			)}

			{/* Final CTA */}
			<section className='py-16 bg-gradient-to-br from-primary/5 to-primary/10'>
				<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
					<div className='max-w-3xl mx-auto text-center'>
						<h2 className='text-3xl font-bold mb-4'>
							Transform Your Construction Business Finances
						</h2>
						<p className='text-xl text-muted-foreground mb-8'>
							Join 100+ Delaware and Columbus construction
							companies that trust Ray with their financial
							management. Get expert help implementing these
							strategies.
						</p>

						<div className='flex flex-col sm:flex-row gap-4 justify-center'>
							<CalendlyModal
								buttonText='Schedule Free Construction Consultation'
								buttonSize='lg'
								buttonClassName='px-8 py-6 text-lg'
							/>
							<Button
								variant='outline'
								size='lg'
								className='px-8 py-6 text-lg'
								asChild>
								<Link href='/free-guide'>
									Download Free Construction Guide
								</Link>
							</Button>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
