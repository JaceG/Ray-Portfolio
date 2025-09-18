'use client';

import { Badge } from './ui/badge';
import { Card, CardContent } from './ui/card';
import { Shield, Award, Users, Star, CheckCircle } from 'lucide-react';
import Image from 'next/image';

interface TrustBadge {
	id: string;
	title: string;
	subtitle: string;
	icon: React.ReactNode;
	type: 'certification' | 'association' | 'rating' | 'achievement';
	verified?: boolean;
	logo?: string;
}

interface TrustBadgesProps {
	variant?: 'horizontal' | 'grid' | 'compact';
	showTitle?: boolean;
	className?: string;
	badges?: TrustBadge[];
}

const defaultBadges: TrustBadge[] = [
	{
		id: 'quickbooks-proadvisor',
		title: 'QuickBooks ProAdvisor',
		subtitle: 'Certified by Intuit',
		icon: <Award className='h-6 w-6' />,
		type: 'certification',
		verified: true,
	},
	{
		id: 'bachelor-accounting',
		title: "Bachelor's Degree",
		subtitle: 'Accounting',
		icon: <Shield className='h-6 w-6' />,
		type: 'certification',
		verified: true,
	},
	{
		id: 'local-clients',
		title: '100+ Clients',
		subtitle: 'Delaware & Columbus Area',
		icon: <Users className='h-6 w-6' />,
		type: 'achievement',
		verified: true,
	},
	{
		id: 'five-star',
		title: '5-Star Rating',
		subtitle: 'Client Reviews',
		icon: <Star className='h-6 w-6' />,
		type: 'rating',
		verified: true,
	},
	{
		id: 'bbb-rating',
		title: 'BBB Accredited',
		subtitle: 'A+ Rating',
		icon: <CheckCircle className='h-6 w-6' />,
		type: 'rating',
		verified: false, // Set to true when BBB accreditation is obtained
	},
	{
		id: 'years-experience',
		title: '10+ Years',
		subtitle: 'Professional Experience',
		icon: <Award className='h-6 w-6' />,
		type: 'achievement',
		verified: true,
	},
];

export function TrustBadges({
	variant = 'horizontal',
	showTitle = true,
	className = '',
	badges = defaultBadges,
}: TrustBadgesProps) {
	const verifiedBadges = badges.filter((badge) => badge.verified);

	const getVariantStyles = () => {
		switch (variant) {
			case 'grid':
				return 'grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4';
			case 'compact':
				return 'flex flex-wrap justify-center gap-3';
			default:
				return 'flex flex-wrap justify-center items-center gap-6';
		}
	};

	const getBadgeContent = (badge: TrustBadge) => {
		if (variant === 'compact') {
			return (
				<div className='flex items-center gap-2 px-3 py-2 bg-qb-green-100 rounded-full'>
					<div className='text-primary'>{badge.icon}</div>
					<div className='text-sm font-medium text-primary'>
						{badge.title}
					</div>
				</div>
			);
		}

		return (
			<div className='text-center group'>
				<div className='w-16 h-16 bg-qb-green-100 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:bg-qb-green-200 transition-colors duration-200'>
					<div className='text-primary'>{badge.icon}</div>
				</div>
				<div className='font-semibold text-sm mb-1'>{badge.title}</div>
				<div className='text-xs text-muted-foreground'>
					{badge.subtitle}
				</div>
				{badge.verified && (
					<div className='flex items-center justify-center mt-1'>
						<CheckCircle className='h-3 w-3 text-green-600' />
						<span className='text-xs text-green-600 ml-1'>
							Verified
						</span>
					</div>
				)}
			</div>
		);
	};

	return (
		<div className={className}>
			{showTitle && (
				<div className='text-center mb-8'>
					<h3 className='text-2xl font-bold mb-2'>
						Trusted & Certified Professional
					</h3>
					<p className='text-muted-foreground'>
						Your peace of mind is backed by professional
						certifications and proven results
					</p>
				</div>
			)}

			<div className={getVariantStyles()}>
				{verifiedBadges.map((badge) => (
					<div key={badge.id} className='flex-shrink-0'>
						{getBadgeContent(badge)}
					</div>
				))}
			</div>

			{/* Professional Associations Placeholder */}
			<div className='mt-8 text-center'>
				<p className='text-sm font-medium text-muted-foreground mb-4'>
					Professional Associations & Memberships
				</p>
				<div className='flex flex-wrap justify-center gap-6 items-center'>
					{/* Placeholder for professional logos */}
					<div className='bg-gray-100 border border-gray-200 rounded-lg p-4 w-24 h-16 flex items-center justify-center'>
						<span className='text-xs text-gray-500'>AICPA</span>
					</div>
					<div className='bg-gray-100 border border-gray-200 rounded-lg p-4 w-24 h-16 flex items-center justify-center'>
						<span className='text-xs text-gray-500'>NACPB</span>
					</div>
					<div className='bg-gray-100 border border-gray-200 rounded-lg p-4 w-24 h-16 flex items-center justify-center'>
						<span className='text-xs text-gray-500'>
							QuickBooks
						</span>
					</div>
				</div>
				<p className='text-xs text-muted-foreground mt-3'>
					Replace with actual association logos when available
				</p>
			</div>
		</div>
	);
}

// Compact version for headers/footers
export function CompactTrustBadges({ className = '' }: { className?: string }) {
	return (
		<TrustBadges
			variant='compact'
			showTitle={false}
			className={className}
			badges={defaultBadges.slice(0, 4)} // Show only top 4 badges
		/>
	);
}

// Hero section trust indicators
export function HeroTrustBadges({ className = '' }: { className?: string }) {
	const herosBadges = [
		{
			id: 'quickbooks',
			title: 'QuickBooks ProAdvisor',
			subtitle: 'Certified',
			icon: <span className='text-2xl'>🏆</span>,
			type: 'certification' as const,
			verified: true,
		},
		{
			id: 'degree',
			title: "Bachelor's Degree",
			subtitle: 'Accounting',
			icon: <span className='text-2xl'>🎓</span>,
			type: 'certification' as const,
			verified: true,
		},
		{
			id: 'experience',
			title: '10+ Years',
			subtitle: 'Experience',
			icon: <span className='text-2xl'>📊</span>,
			type: 'achievement' as const,
			verified: true,
		},
		{
			id: 'local',
			title: 'Delaware Local',
			subtitle: 'Born & Raised',
			icon: <span className='text-2xl'>⭐</span>,
			type: 'achievement' as const,
			verified: true,
		},
	];

	return (
		<div
			className={`flex flex-wrap justify-center items-center gap-8 ${className}`}>
			{herosBadges.map((badge) => (
				<div key={badge.id} className='text-center'>
					<div className='text-2xl mb-1'>{badge.icon}</div>
					<div className='text-sm font-semibold'>{badge.title}</div>
					<div className='text-xs text-muted-foreground'>
						{badge.subtitle}
					</div>
				</div>
			))}
		</div>
	);
}
