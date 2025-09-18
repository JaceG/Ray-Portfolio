import { Badge } from './ui/badge';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
	return (
		<footer className='bg-qb-green-900 text-white py-12'>
			<div className='container mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
					<div>
						<div className='flex items-center gap-2 mb-4'>
							<div className='w-8 h-8 bg-white rounded-lg flex items-center justify-center'>
								<span className='text-qb-green-900 font-bold'>
									RG
								</span>
							</div>
							<span className='text-xl font-medium'>
								Ray Galloway
							</span>
						</div>
						<p className='text-qb-green-100 mb-4'>
							Professional bookkeeping services for Delaware and
							Columbus area businesses. Accurate books, expert
							insights, peace of mind.
						</p>
						<Badge
							variant='outline'
							className='border-qb-green-300 text-qb-green-100'>
							Certified QuickBooks ProAdvisor
						</Badge>
					</div>

					<div>
						<h3 className='font-medium mb-4'>Services</h3>
						<ul className='space-y-2 text-qb-green-100'>
							<li>Monthly Bookkeeping</li>
							<li>Financial Statements</li>
							<li>Tax Preparation Support</li>
							<li>Payroll Processing</li>
							<li>Financial Analysis</li>
							<li>QuickBooks Training</li>
						</ul>
					</div>

					<div>
						<h3 className='font-medium mb-4'>Service Areas</h3>
						<ul className='space-y-2 text-qb-green-100'>
							<li>Delaware, OH</li>
							<li>Powell, OH</li>
							<li>Dublin, OH</li>
							<li>Worthington, OH</li>
							<li>Westerville, OH</li>
							<li>Greater Columbus Area</li>
						</ul>
						<p className='text-xs text-qb-green-200 mt-3'>
							Remote services available nationwide
						</p>
					</div>

					<div>
						<h3 className='font-medium mb-4'>Contact Info</h3>
						<div className='space-y-3 text-qb-green-100'>
							<div className='flex items-center gap-2'>
								<Phone className='h-4 w-4' />
								<span>(555) 123-4567</span>
							</div>
							<div className='flex items-center gap-2'>
								<Mail className='h-4 w-4' />
								<span>ray@gallowaybookkeeping.com</span>
							</div>
							<div className='flex items-center gap-2'>
								<MapPin className='h-4 w-4' />
								<span>Delaware, OH & Columbus Area</span>
							</div>
						</div>
					</div>
				</div>

				<div className='border-t border-qb-green-700 mt-12 pt-8 text-center text-qb-green-200'>
					<p>
						&copy; 2024 Ray Galloway Professional Bookkeeping. All
						rights reserved. | Privacy Policy | Terms of Service
					</p>
				</div>
			</div>
		</footer>
	);
}
