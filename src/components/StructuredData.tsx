interface LocalBusinessSchema {
	name: string;
	description: string;
	url: string;
	telephone: string;
	email: string;
	address: {
		streetAddress?: string;
		addressLocality: string;
		addressRegion: string;
		postalCode?: string;
		addressCountry: string;
	};
	geo?: {
		latitude: number;
		longitude: number;
	};
	serviceArea: string[];
	priceRange: string;
	openingHours?: string[];
}

interface PersonSchema {
	name: string;
	jobTitle: string;
	description: string;
	url: string;
	email: string;
	telephone: string;
	address: {
		addressLocality: string;
		addressRegion: string;
		addressCountry: string;
	};
	alumniOf?: string;
	awards?: string[];
}

export function LocalBusinessStructuredData({
	name = 'Ray Galloway Bookkeeping',
	description = 'Professional bookkeeping services for Delaware and Columbus area businesses. QuickBooks ProAdvisor with 10+ years experience.',
	url = 'https://ray-portfolio.onrender.com',
	telephone = '+1-555-123-4567',
	email = 'ray@gallowaybookkeeping.com',
	address = {
		addressLocality: 'Delaware',
		addressRegion: 'OH',
		addressCountry: 'US',
	},
	serviceArea = [
		'Delaware, OH',
		'Columbus, OH',
		'Dublin, OH',
		'Powell, OH',
		'Worthington, OH',
		'Westerville, OH',
	],
	priceRange = '$$',
	openingHours = ['Mo-Fr 09:00-17:00'],
}: Partial<LocalBusinessSchema> = {}) {
	const schema = {
		'@context': 'https://schema.org',
		'@type': 'LocalBusiness',
		'@id': `${url}#business`,
		name,
		description,
		url,
		telephone,
		email,
		address: {
			'@type': 'PostalAddress',
			...address,
		},
		serviceArea: serviceArea.map((area) => ({
			'@type': 'City',
			name: area,
		})),
		priceRange,
		openingHoursSpecification: openingHours.map((hours) => ({
			'@type': 'OpeningHoursSpecification',
			dayOfWeek: hours.split(' ')[0],
			opens: hours.split(' ')[1]?.split('-')[0],
			closes: hours.split(' ')[1]?.split('-')[1],
		})),
		aggregateRating: {
			'@type': 'AggregateRating',
			ratingValue: '5.0',
			reviewCount: '100',
			bestRating: '5',
			worstRating: '1',
		},
		review: [
			{
				'@type': 'Review',
				author: {
					'@type': 'Person',
					name: 'John Miller',
				},
				reviewRating: {
					'@type': 'Rating',
					ratingValue: '5',
				},
				reviewBody:
					'Ray transformed our messy books into a clear financial picture. His local Delaware expertise is invaluable.',
			},
		],
		makesOffer: [
			{
				'@type': 'Offer',
				itemOffered: {
					'@type': 'Service',
					name: 'Monthly Bookkeeping Services',
					description:
						'Complete monthly financial management and QuickBooks administration',
				},
			},
			{
				'@type': 'Offer',
				itemOffered: {
					'@type': 'Service',
					name: 'Tax-Ready Organization',
					description:
						'Year-round tax document organization and preparation assistance',
				},
			},
			{
				'@type': 'Offer',
				itemOffered: {
					'@type': 'Service',
					name: 'Financial Analysis',
					description:
						'Business financial analysis and growth insights',
				},
			},
		],
	};

	return (
		<script
			type='application/ld+json'
			dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
		/>
	);
}

export function PersonStructuredData({
	name = 'Ray Galloway',
	jobTitle = 'QuickBooks ProAdvisor & Bookkeeping Expert',
	description = 'Professional bookkeeper with 10+ years experience helping Delaware and Columbus area businesses streamline their financial management.',
	url = 'https://ray-portfolio.onrender.com',
	email = 'ray@gallowaybookkeeping.com',
	telephone = '+1-555-123-4567',
	address = {
		addressLocality: 'Delaware',
		addressRegion: 'OH',
		addressCountry: 'US',
	},
	alumniOf = "Bachelor's Degree in Accounting",
	awards = [
		'QuickBooks ProAdvisor Certification',
		'10+ Years Professional Experience',
	],
}: Partial<PersonSchema> = {}) {
	const schema = {
		'@context': 'https://schema.org',
		'@type': 'Person',
		'@id': `${url}#person`,
		name,
		jobTitle,
		description,
		url,
		email,
		telephone,
		address: {
			'@type': 'PostalAddress',
			...address,
		},
		alumniOf,
		award: awards,
		knowsAbout: [
			'Bookkeeping',
			'QuickBooks',
			'Small Business Accounting',
			'Tax Document Organization',
			'Financial Analysis',
			'Business Consulting',
		],
		serviceArea: {
			'@type': 'GeoCircle',
			geoMidpoint: {
				'@type': 'GeoCoordinates',
				latitude: 40.2987,
				longitude: -83.0682, // Delaware, OH coordinates
			},
			geoRadius: '50000', // 50km radius
		},
	};

	return (
		<script
			type='application/ld+json'
			dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
		/>
	);
}

export function ServiceStructuredData({
	name = 'Professional Bookkeeping Services',
	description = 'Expert QuickBooks bookkeeping and financial management for small businesses',
	provider = 'Ray Galloway Bookkeeping',
	areaServed = ['Delaware, OH', 'Columbus, OH', 'Dublin, OH'],
	url = 'https://ray-portfolio.onrender.com',
}) {
	const schema = {
		'@context': 'https://schema.org',
		'@type': 'Service',
		'@id': `${url}#service`,
		name,
		description,
		provider: {
			'@type': 'LocalBusiness',
			name: provider,
			url,
		},
		areaServed: areaServed.map((area) => ({
			'@type': 'City',
			name: area,
		})),
		serviceType: 'Bookkeeping Services',
		category: 'Financial Services',
		offers: {
			'@type': 'Offer',
			availability: 'InStock',
			priceRange: '$$',
			priceCurrency: 'USD',
		},
	};

	return (
		<script
			type='application/ld+json'
			dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
		/>
	);
}
