import { useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from './ui/card';
import { Calendar, Clock, Phone, Mail } from 'lucide-react';

export default function ContactSection() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		phone: '',
		company: '',
		message: '',
	});

	const handleInputChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();

		// Basic validation
		if (!formData.name || !formData.email || !formData.phone) {
			alert('Please fill in all required fields');
			return;
		}

		// Simulate form submission
		alert(
			"Thank you! We'll contact you within 24 hours to schedule your free consultation."
		);

		// Reset form
		setFormData({
			name: '',
			email: '',
			phone: '',
			company: '',
			message: '',
		});
	};

	return (
		<section id='contact' className='py-20 bg-qb-green-50'>
			<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='max-w-4xl mx-auto'>
					<div className='text-center mb-12'>
						<h2 className='text-3xl sm:text-4xl font-bold mb-4'>
							Book Your FREE Consultation
						</h2>
						<p className='text-xl text-muted-foreground'>
							Let's discuss how I can help streamline your
							bookkeeping and save you 60+ hours per year.
						</p>
					</div>

					<div className='grid lg:grid-cols-2 gap-8'>
						<Card className='border-2'>
							<CardHeader>
								<CardTitle className='flex items-center gap-2'>
									<Calendar className='h-5 w-5 text-primary' />
									Schedule Your Call
								</CardTitle>
								<CardDescription>
									Fill out the form and we'll contact you
									within 24 hours to schedule your free
									30-minute consultation.
								</CardDescription>
							</CardHeader>
							<CardContent>
								<form
									onSubmit={handleSubmit}
									className='space-y-4'>
									<div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
										<div>
											<Label htmlFor='name'>
												Full Name *
											</Label>
											<Input
												id='name'
												name='name'
												value={formData.name}
												onChange={handleInputChange}
												required
												className='mt-1'
											/>
										</div>
										<div>
											<Label htmlFor='email'>
												Email Address *
											</Label>
											<Input
												id='email'
												name='email'
												type='email'
												value={formData.email}
												onChange={handleInputChange}
												required
												className='mt-1'
											/>
										</div>
									</div>

									<div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
										<div>
											<Label htmlFor='phone'>
												Phone Number *
											</Label>
											<Input
												id='phone'
												name='phone'
												type='tel'
												value={formData.phone}
												onChange={handleInputChange}
												required
												className='mt-1'
											/>
										</div>
										<div>
											<Label htmlFor='company'>
												Company Name
											</Label>
											<Input
												id='company'
												name='company'
												value={formData.company}
												onChange={handleInputChange}
												className='mt-1'
											/>
										</div>
									</div>

									<div>
										<Label htmlFor='message'>
											Tell me about your bookkeeping needs
										</Label>
										<Textarea
											id='message'
											name='message'
											rows={4}
											value={formData.message}
											onChange={handleInputChange}
											placeholder='I need help with monthly bookkeeping, catching up on past years, etc.'
											className='mt-1'
										/>
									</div>

									<Button
										type='submit'
										className='w-full text-lg py-6'>
										Schedule My FREE Consultation
									</Button>
								</form>
							</CardContent>
						</Card>

						<div className='space-y-6'>
							<Card>
								<CardContent className='pt-6'>
									<div className='flex items-start gap-4'>
										<Clock className='h-6 w-6 text-primary mt-1' />
										<div>
											<h3 className='font-medium mb-2'>
												What to Expect
											</h3>
											<ul className='text-sm text-muted-foreground space-y-1'>
												<li>
													• 30-minute consultation
													call
												</li>
												<li>
													• Assessment of your current
													bookkeeping
												</li>
												<li>
													• Customized service
													recommendations
												</li>
												<li>
													• Transparent pricing
													discussion
												</li>
												<li>
													• No obligation or pressure
												</li>
												<li>
													• First-time client pricing
													offer
												</li>
											</ul>
										</div>
									</div>
								</CardContent>
							</Card>

							<Card>
								<CardContent className='pt-6'>
									<div className='flex items-start gap-4'>
										<Phone className='h-6 w-6 text-primary mt-1' />
										<div>
											<h3 className='font-medium mb-2'>
												Prefer to Call?
											</h3>
											<p className='text-sm text-muted-foreground mb-2'>
												Speak with Ray directly
											</p>
											<p className='font-medium'>
												(555) 123-4567
											</p>
											<p className='text-sm text-muted-foreground'>
												Mon-Fri 9AM-5PM PST
											</p>
										</div>
									</div>
								</CardContent>
							</Card>

							<Card>
								<CardContent className='pt-6'>
									<div className='flex items-start gap-4'>
										<Mail className='h-6 w-6 text-primary mt-1' />
										<div>
											<h3 className='font-medium mb-2'>
												Have Questions?
											</h3>
											<p className='text-sm text-muted-foreground mb-2'>
												Email me for quick answers
											</p>
											<p className='font-medium'>
												ray@gallowaybookkeeping.com
											</p>
											<p className='text-sm text-muted-foreground'>
												I respond within 24 hours
											</p>
										</div>
									</div>
								</CardContent>
							</Card>

							<div className='mt-6 text-center text-lg font-medium text-primary'>
								I want to learn more about your business!
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
