import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import {
	Clock,
	DollarSign,
	TrendingUp,
	Shield,
	CheckCircle,
	Calculator,
} from 'lucide-react';

// TODO: Replace placeholder content with actual client benefits
// See SETUP.md for detailed instructions on customizing content

export function BenefitsSection() {
	const benefits = [
		{
			icon: <Clock className='h-8 w-8' />,
			title: 'Save 60+ Hours Per Year',
			description:
				'Stop spending nights and weekends on bookkeeping. Get your time back to focus on growing your business.',
		},
		{
			icon: <DollarSign className='h-8 w-8' />,
			title: 'Reduce Costly Errors',
			description:
				'Professional accuracy means no more missed deductions, duplicate entries, or tax penalties.',
		},
		{
			icon: <TrendingUp className='h-8 w-8' />,
			title: 'Clear Financial Insights',
			description:
				'Monthly reports and detailed financial statements that show exactly where your money is going and coming from.',
		},
		{
			icon: <Shield className='h-8 w-8' />,
			title: 'Stay Tax-Ready Year-Round',
			description:
				'Organized records and tax-ready documentation so working with your tax preparer is never stressful again.',
		},
		{
			icon: <CheckCircle className='h-8 w-8' />,
			title: 'QuickBooks Expertise',
			description:
				'Certified ProAdvisor with 10+ years experience optimizing QuickBooks for service businesses.',
		},
		{
			icon: <Calculator className='h-8 w-8' />,
			title: 'Local Columbus Area Knowledge',
			description:
				'Understanding of Ohio compliance requirements and Columbus area business regulations that affect your bottom line.',
		},
	];

	return (
		<section id='benefits' className='py-16 bg-white'>
			<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='text-center mb-12'>
					<h2 className='text-3xl sm:text-4xl font-bold mb-4'>
						Why Columbus Area Businesses Choose Ray
					</h2>
					<p className='text-xl text-muted-foreground max-w-3xl mx-auto'>
						Professional bookkeeping that saves you time, reduces
						stress, and gives you the financial clarity you need to
						make smart business decisions.
					</p>
				</div>

				<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
					{benefits.map((benefit, index) => (
						<Card
							key={index}
							className='text-center hover:shadow-lg transition-shadow duration-200'>
							<CardHeader>
								<div className='w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary'>
									{benefit.icon}
								</div>
								<CardTitle className='text-xl mb-2'>
									{benefit.title}
								</CardTitle>
							</CardHeader>
							<CardContent>
								<p className='text-muted-foreground'>
									{benefit.description}
								</p>
							</CardContent>
						</Card>
					))}
				</div>

				{/* Trust Indicators */}
				<div className='mt-16 text-center'>
					<div className='grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto'>
						<div className='text-center'>
							<div className='text-3xl font-bold text-primary mb-2'>
								100+
							</div>
							<div className='text-sm text-muted-foreground'>
								Happy Clients
							</div>
						</div>
						<div className='text-center'>
							<div className='text-3xl font-bold text-primary mb-2'>
								10+
							</div>
							<div className='text-sm text-muted-foreground'>
								Years Experience
							</div>
						</div>
						<div className='text-center'>
							<div className='text-3xl font-bold text-primary mb-2'>
								60+
							</div>
							<div className='text-sm text-muted-foreground'>
								Hours Saved/Year
							</div>
						</div>
						<div className='text-center'>
							<div className='text-3xl font-bold text-primary mb-2'>
								4.9★
							</div>
							<div className='text-sm text-muted-foreground'>
								Client Rating
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
