export const siteIdentity = {
  code: process.env.NEXT_PUBLIC_SITE_CODE || 'f955vfu9tm',
  name: process.env.NEXT_PUBLIC_SITE_NAME || 'MediaDistro',
  tagline: process.env.NEXT_PUBLIC_SITE_TAGLINE || 'Premium guest post distribution',
  description:
    process.env.NEXT_PUBLIC_SITE_DESCRIPTION ||
    'Strategic guest post placements on high-authority publishers—niche-relevant backlinks, transparent pricing, and fast reporting.',
  domain: process.env.NEXT_PUBLIC_SITE_DOMAIN || 'authorityxa.com',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://authorityxa.com',
  ogImage: process.env.NEXT_PUBLIC_SITE_OG_IMAGE || '/og-default.png',
  googleMapsEmbedApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_API_KEY || '',
} as const

export const defaultAuthorProfile = {
  name: siteIdentity.name,
  avatar: '/placeholder.svg?height=80&width=80',
} as const
