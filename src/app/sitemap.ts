import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
	const baseUrl = 'https://ray-portfolio.onrender.com';

	return [
		{
			url: baseUrl,
			lastModified: new Date(),
			changeFrequency: 'weekly',
			priority: 1,
		},
		{
			url: `${baseUrl}/book-a-call`,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.9,
		},
		{
			url: `${baseUrl}/free-guide`,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.9,
		},
		{
			url: `${baseUrl}/training-video`,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.8,
		},
		// {
		// 	url: `${baseUrl}/dashboard`,
		// 	lastModified: new Date(),
		// 	changeFrequency: 'monthly',
		// 	priority: 0.7,
		// },
		// {
		// 	url: `${baseUrl}/auth`,
		// 	lastModified: new Date(),
		// 	changeFrequency: 'yearly',
		// 	priority: 0.5,
		// },
		// Local SEO Pages
		{
			url: `${baseUrl}/services/delaware-oh`,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.9,
		},
		{
			url: `${baseUrl}/services/columbus`,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.8,
		},
		{
			url: `${baseUrl}/services/dublin`,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.8,
		},
		{
			url: `${baseUrl}/services/hilliard`,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.8,
		},
		{
			url: `${baseUrl}/services/new-albany`,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.8,
		},
		{
			url: `${baseUrl}/services/gahanna`,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.8,
		},
		{
			url: `${baseUrl}/services/westerville`,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.8,
		},
		{
			url: `${baseUrl}/services/upper-arlington`,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.8,
		},
		{
			url: `${baseUrl}/services/short-north`,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.8,
		},
		// Blog Pages
		{
			url: `${baseUrl}/blog`,
			lastModified: new Date(),
			changeFrequency: 'weekly',
			priority: 0.8,
		},
		{
			url: `${baseUrl}/blog/columbus-construction-bookkeeping-mistakes`,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.7,
		},
		{
			url: `${baseUrl}/blog/columbus-construction-tax-strategies`,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.7,
		},
		{
			url: `${baseUrl}/blog/quickbooks-job-costing-construction`,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.7,
		},
		{
			url: `${baseUrl}/blog/construction-cash-flow-management`,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.7,
		},
		{
			url: `${baseUrl}/blog/dublin-construction-business-growth`,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.7,
		},
		{
			url: `${baseUrl}/blog/construction-expense-tracking-system`,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.7,
		},
		// Pricing Page
		{
			url: `${baseUrl}/pricing`,
			lastModified: new Date(),
			changeFrequency: 'monthly',
			priority: 0.9,
		},
	];
}
