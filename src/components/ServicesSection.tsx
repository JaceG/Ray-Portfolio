import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from './ui/card';
import {
	FileText,
	DollarSign,
	BarChart3,
	Shield,
	Clock,
	Settings,
	Wrench,
} from 'lucide-react';
import { Button } from './ui/button';

const services = [
	{
		icon: Settings,
		title: 'QuickBooks Setup',
		description:
			"We set up QuickBooks to match your business needs - so you're ready for reliable bookkeeping from day one.",
		details: [
			'QuickBooks version selection',
			'Custom chart of accounts',
			'Banking connections setup',
			'User training & support',
		],
	},
	{
		icon: FileText,
		title: 'Monthly Bookkeeping',
		description:
			'Stay on top of your finances with accurate, reliable monthly bookkeeping. No stress, no surprises - just solid bookkeeping.',
		details: [
			'Bank & credit card reconciliation',
			'Transaction categorization',
			'Monthly financial statements',
			'QuickBooks maintenance',
		],
	},
	{
		icon: Wrench,
		title: 'Cleanup Bookkeeping',
		description:
			"If your books are behind, unorganized, or full of errors, don't stress - we are here to help!",
		details: [
			'Multi-year catch-up services',
			'Data cleanup & organization',
			'Error correction',
			'Chart of accounts optimization',
		],
	},
	{
		icon: Shield,
		title: 'Tax-Ready Organization',
		description:
			'Year-end financial statements and organized records that make working with your tax preparer smooth and stress-free.',
		details: [
			'Year-end financial statements',
			'1099 preparation & filing',
			'Tax document organization',
			'CPA collaboration',
		],
	},
	{
		icon: DollarSign,
		title: 'Payroll & Sales Tax',
		description:
			'Accurate payroll processing and sales tax management to keep you compliant and worry-free.',
		details: [
			'Bi-weekly/monthly payroll',
			'Payroll tax filings',
			'Sales tax calculations',
			'Quarterly reporting',
		],
	},
	{
		icon: BarChart3,
		title: 'Financial Insights',
		description:
			'Monthly reports and analysis that help you understand your financial position and make informed decisions.',
		details: [
			'Profit & loss analysis',
			'Cash flow reporting',
			'Budget vs. actual comparisons',
			'Key performance metrics',
		],
	},
];

export default function ServicesSection() {
	return (
		<section id='services' className='py-20 bg-white'>
			<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='text-center mb-16'>
					<h2 className='text-3xl sm:text-4xl font-bold mb-4'>
						Comprehensive Bookkeeping Services
					</h2>
					<p className='text-xl text-muted-foreground max-w-3xl mx-auto'>
						We provide accurate, dependable bookkeeping services
						tailored to the needs of small businesses, solopreneurs,
						and growing companies. Whether you are just starting
						out, catching up, or scaling fast - we keep your
						financial records clean, compliant, and ready for smart
						financial decision making.
					</p>
				</div>

				<div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
					{services.map((service, index) => (
						<Card
							key={index}
							className='border-2 hover:border-primary/50 transition-colors duration-200'>
							<CardHeader>
								<div className='w-12 h-12 bg-qb-green-100 rounded-lg flex items-center justify-center mb-4'>
									<service.icon className='h-6 w-6 text-primary' />
								</div>
								<CardTitle className='text-xl'>
									{service.title}
								</CardTitle>
							</CardHeader>
							<CardContent>
								<CardDescription className='text-base leading-relaxed mb-4'>
									{service.description}
								</CardDescription>
								<ul className='text-sm text-muted-foreground space-y-1'>
									{service.details.map((detail, idx) => (
										<li key={idx}>• {detail}</li>
									))}
								</ul>
								<div className='mt-6'>
									<Button
										onClick={() =>
											document
												.getElementById('contact')
												?.scrollIntoView({
													behavior: 'smooth',
												})
										}
										size='sm'
										className='w-full'>
										Book Now
									</Button>
								</div>
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}
