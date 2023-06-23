const mapping: Record<string, string> = {
  domains: 'domain',
  marketplaces: 'marketplace',
  'support-requests': 'support_request',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
