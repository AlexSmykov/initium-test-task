
enum ERoutes {
  MAIN = 'MAIN',
}

enum ERoutesParts {
  MAIN = 'main',
}

export const EPartialRoutes: Record<ERoutes, string> = {
  [ERoutes.MAIN]: [ERoutesParts.MAIN].join('/'),
}

export const EFullRoutes: Record<ERoutes, any> = {
  [ERoutes.MAIN]: ['/', ERoutesParts.MAIN],
}
