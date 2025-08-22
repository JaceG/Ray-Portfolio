import { Card, CardContent } from './ui/card';
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';
import { Star } from 'lucide-react';

const testimonials = [
	{
		name: 'Sarah Mitchell',
		role: 'Freelance Designer',
		content:
			'Ray saved me hours every month and helped me understand my finances for the first time. My books are always perfect and tax season is stress-free!',
		rating: 5,
		avatar: 'SM',
	},
	{
		name: 'Mike Johnson',
		role: 'Restaurant Owner',
		content:
			'Professional, reliable, and knowledgeable. Ray caught up three years of messy books and now handles everything monthly. Highly recommended!',
		rating: 5,
		avatar: 'MJ',
	},
	{
		name: 'Lisa Chen',
		role: 'E-commerce Store',
		content:
			"Ray's monthly reports help me make better business decisions. The insights are invaluable and the service is always top-notch.",
		rating: 5,
		avatar: 'LC',
	},
];

export default function TestimonialsSection() {
	return (
		<section id='testimonials' className='py-20 bg-white'>
			<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='text-center mb-16'>
					<h2 className='text-3xl sm:text-4xl font-bold mb-4'>
						Trusted by Growing Businesses
					</h2>
					<p className='text-xl text-muted-foreground max-w-2xl mx-auto'>
						See what our clients say about how professional
						bookkeeping has transformed their business operations.
					</p>
				</div>

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
					{testimonials.map((testimonial, index) => (
						<Card key={index} className='border-2'>
							<CardContent className='pt-6'>
								<div className='flex items-center mb-4'>
									{[...Array(testimonial.rating)].map(
										(_, i) => (
											<Star
												key={i}
												className='h-5 w-5 fill-primary text-primary'
											/>
										)
									)}
								</div>
								<blockquote className='text-muted-foreground mb-6 leading-relaxed'>
									"{testimonial.content}"
								</blockquote>
								<div className='flex items-center gap-3'>
									<Avatar>
										<AvatarFallback className='bg-primary text-white'>
											{testimonial.avatar}
										</AvatarFallback>
									</Avatar>
									<div>
										<div className='font-medium'>
											{testimonial.name}
										</div>
										<div className='text-sm text-muted-foreground'>
											{testimonial.role}
										</div>
									</div>
								</div>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}
