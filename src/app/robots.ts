import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
	const baseUrl = 'https://ray-portfolio.onrender.com';

	return {
		rules: {
			userAgent: '*',
			allow: '/',
			disallow: ['/api/', '/admin/', '/_next/', '/private/'],
		},
		sitemap: `${baseUrl}/sitemap.xml`,
	};
}
