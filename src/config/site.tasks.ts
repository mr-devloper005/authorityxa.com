export const siteTaskDefinitions = [
  {
    key: 'mediaDistribution',
    label: 'Publisher updates',
    route: '/updates',
    description: 'Network notes, placement guidance, and policy updates.',
    contentType: 'mediaDistribution',
    enabled: true,
  },
] as const

export const siteTaskViews = {
  mediaDistribution: '/updates',
} as const
