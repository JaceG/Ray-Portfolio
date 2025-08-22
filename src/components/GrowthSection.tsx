import { Badge } from './ui/badge';
import { CheckCircle, Clock, Shield, TrendingUp, Zap } from 'lucide-react';

const benefits = [
	{
		icon: Clock,
		title: 'Save 60+ Hours Per Year',
		description:
			'Stop spending your valuable time on data entry and reconciliation. Focus on what you do best - running your business.',
	},
	{
		icon: Shield,
		title: '100% Accurate & Compliant',
		description:
			'Our certified bookkeepers ensure your records are accurate and compliant with all regulations and standards.',
	},
	{
		icon: TrendingUp,
		title: 'Real-Time Financial Insights',
		description:
			'Get monthly reports and KPIs that help you make data-driven decisions for business growth.',
	},
	{
		icon: Zap,
		title: 'Quick Setup & Integration',
		description:
			'We integrate with your existing systems and have you up and running within 48 hours.',
	},
];

export default function GrowthSection() {
	return (
		<section className='py-20 bg-qb-green-50'>
			<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center'>
					<div>
						<Badge variant='secondary' className='mb-4'>
							Why Choose Us
						</Badge>
						<h2 className='text-3xl sm:text-4xl font-bold mb-6'>
							Focus on Growth, Not Paperwork
						</h2>
						<p className='text-xl text-muted-foreground mb-8'>
							Our expert bookkeeping services help small and
							medium businesses maintain accurate financial
							records while freeing up time to focus on what
							matters most.
						</p>

						<div className='space-y-6'>
							{benefits.map((benefit, index) => (
								<div key={index} className='flex gap-4'>
									<div className='flex-shrink-0'>
										<div className='w-10 h-10 bg-primary rounded-lg flex items-center justify-center'>
											<benefit.icon className='h-5 w-5 text-white' />
										</div>
									</div>
									<div>
										<h3 className='text-lg font-medium mb-2'>
											{benefit.title}
										</h3>
										<p className='text-muted-foreground'>
											{benefit.description}
										</p>
									</div>
								</div>
							))}
						</div>
					</div>

					<div className='mt-12 lg:mt-0'>
						<div className='bg-white rounded-xl shadow-lg p-8'>
							<h3 className='text-xl font-semibold mb-6 text-center'>
								What You Get
							</h3>
							<div className='space-y-4'>
								{[
									'Monthly financial statements',
									'Bank & credit card reconciliation',
									'Accounts payable & receivable management',
									'Tax-ready financial records',
									'Dedicated bookkeeper assigned to your account',
									'Monthly check-in calls',
									'Cloud-based access to your books 24/7',
									'QuickBooks Online setup & training',
								].map((item, index) => (
									<div
										key={index}
										className='flex items-center gap-3'>
										<CheckCircle className='h-5 w-5 text-primary flex-shrink-0' />
										<span>{item}</span>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
