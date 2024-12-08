/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as AdventOfCode2024IndexImport } from './routes/advent-of-code-2024/index'

// Create Virtual Routes

const AdventOfCode2024DayTwoLazyImport = createFileRoute(
  '/advent-of-code-2024/day-two',
)()
const AdventOfCode2024DayThreeLazyImport = createFileRoute(
  '/advent-of-code-2024/day-three',
)()
const AdventOfCode2024DaySixLazyImport = createFileRoute(
  '/advent-of-code-2024/day-six',
)()
const AdventOfCode2024DaySevenLazyImport = createFileRoute(
  '/advent-of-code-2024/day-seven',
)()
const AdventOfCode2024DayOneLazyImport = createFileRoute(
  '/advent-of-code-2024/day-one',
)()
const AdventOfCode2024DayFourLazyImport = createFileRoute(
  '/advent-of-code-2024/day-four',
)()
const AdventOfCode2024DayFiveLazyImport = createFileRoute(
  '/advent-of-code-2024/day-five',
)()

// Create/Update Routes

const AdventOfCode2024IndexRoute = AdventOfCode2024IndexImport.update({
  id: '/advent-of-code-2024/',
  path: '/advent-of-code-2024/',
  getParentRoute: () => rootRoute,
} as any)

const AdventOfCode2024DayTwoLazyRoute = AdventOfCode2024DayTwoLazyImport.update(
  {
    id: '/advent-of-code-2024/day-two',
    path: '/advent-of-code-2024/day-two',
    getParentRoute: () => rootRoute,
  } as any,
).lazy(() =>
  import('./routes/advent-of-code-2024/day-two.lazy').then((d) => d.Route),
)

const AdventOfCode2024DayThreeLazyRoute =
  AdventOfCode2024DayThreeLazyImport.update({
    id: '/advent-of-code-2024/day-three',
    path: '/advent-of-code-2024/day-three',
    getParentRoute: () => rootRoute,
  } as any).lazy(() =>
    import('./routes/advent-of-code-2024/day-three.lazy').then((d) => d.Route),
  )

const AdventOfCode2024DaySixLazyRoute = AdventOfCode2024DaySixLazyImport.update(
  {
    id: '/advent-of-code-2024/day-six',
    path: '/advent-of-code-2024/day-six',
    getParentRoute: () => rootRoute,
  } as any,
).lazy(() =>
  import('./routes/advent-of-code-2024/day-six.lazy').then((d) => d.Route),
)

const AdventOfCode2024DaySevenLazyRoute =
  AdventOfCode2024DaySevenLazyImport.update({
    id: '/advent-of-code-2024/day-seven',
    path: '/advent-of-code-2024/day-seven',
    getParentRoute: () => rootRoute,
  } as any).lazy(() =>
    import('./routes/advent-of-code-2024/day-seven.lazy').then((d) => d.Route),
  )

const AdventOfCode2024DayOneLazyRoute = AdventOfCode2024DayOneLazyImport.update(
  {
    id: '/advent-of-code-2024/day-one',
    path: '/advent-of-code-2024/day-one',
    getParentRoute: () => rootRoute,
  } as any,
).lazy(() =>
  import('./routes/advent-of-code-2024/day-one.lazy').then((d) => d.Route),
)

const AdventOfCode2024DayFourLazyRoute =
  AdventOfCode2024DayFourLazyImport.update({
    id: '/advent-of-code-2024/day-four',
    path: '/advent-of-code-2024/day-four',
    getParentRoute: () => rootRoute,
  } as any).lazy(() =>
    import('./routes/advent-of-code-2024/day-four.lazy').then((d) => d.Route),
  )

const AdventOfCode2024DayFiveLazyRoute =
  AdventOfCode2024DayFiveLazyImport.update({
    id: '/advent-of-code-2024/day-five',
    path: '/advent-of-code-2024/day-five',
    getParentRoute: () => rootRoute,
  } as any).lazy(() =>
    import('./routes/advent-of-code-2024/day-five.lazy').then((d) => d.Route),
  )

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/advent-of-code-2024/day-five': {
      id: '/advent-of-code-2024/day-five'
      path: '/advent-of-code-2024/day-five'
      fullPath: '/advent-of-code-2024/day-five'
      preLoaderRoute: typeof AdventOfCode2024DayFiveLazyImport
      parentRoute: typeof rootRoute
    }
    '/advent-of-code-2024/day-four': {
      id: '/advent-of-code-2024/day-four'
      path: '/advent-of-code-2024/day-four'
      fullPath: '/advent-of-code-2024/day-four'
      preLoaderRoute: typeof AdventOfCode2024DayFourLazyImport
      parentRoute: typeof rootRoute
    }
    '/advent-of-code-2024/day-one': {
      id: '/advent-of-code-2024/day-one'
      path: '/advent-of-code-2024/day-one'
      fullPath: '/advent-of-code-2024/day-one'
      preLoaderRoute: typeof AdventOfCode2024DayOneLazyImport
      parentRoute: typeof rootRoute
    }
    '/advent-of-code-2024/day-seven': {
      id: '/advent-of-code-2024/day-seven'
      path: '/advent-of-code-2024/day-seven'
      fullPath: '/advent-of-code-2024/day-seven'
      preLoaderRoute: typeof AdventOfCode2024DaySevenLazyImport
      parentRoute: typeof rootRoute
    }
    '/advent-of-code-2024/day-six': {
      id: '/advent-of-code-2024/day-six'
      path: '/advent-of-code-2024/day-six'
      fullPath: '/advent-of-code-2024/day-six'
      preLoaderRoute: typeof AdventOfCode2024DaySixLazyImport
      parentRoute: typeof rootRoute
    }
    '/advent-of-code-2024/day-three': {
      id: '/advent-of-code-2024/day-three'
      path: '/advent-of-code-2024/day-three'
      fullPath: '/advent-of-code-2024/day-three'
      preLoaderRoute: typeof AdventOfCode2024DayThreeLazyImport
      parentRoute: typeof rootRoute
    }
    '/advent-of-code-2024/day-two': {
      id: '/advent-of-code-2024/day-two'
      path: '/advent-of-code-2024/day-two'
      fullPath: '/advent-of-code-2024/day-two'
      preLoaderRoute: typeof AdventOfCode2024DayTwoLazyImport
      parentRoute: typeof rootRoute
    }
    '/advent-of-code-2024/': {
      id: '/advent-of-code-2024/'
      path: '/advent-of-code-2024'
      fullPath: '/advent-of-code-2024'
      preLoaderRoute: typeof AdventOfCode2024IndexImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/advent-of-code-2024/day-five': typeof AdventOfCode2024DayFiveLazyRoute
  '/advent-of-code-2024/day-four': typeof AdventOfCode2024DayFourLazyRoute
  '/advent-of-code-2024/day-one': typeof AdventOfCode2024DayOneLazyRoute
  '/advent-of-code-2024/day-seven': typeof AdventOfCode2024DaySevenLazyRoute
  '/advent-of-code-2024/day-six': typeof AdventOfCode2024DaySixLazyRoute
  '/advent-of-code-2024/day-three': typeof AdventOfCode2024DayThreeLazyRoute
  '/advent-of-code-2024/day-two': typeof AdventOfCode2024DayTwoLazyRoute
  '/advent-of-code-2024': typeof AdventOfCode2024IndexRoute
}

export interface FileRoutesByTo {
  '/advent-of-code-2024/day-five': typeof AdventOfCode2024DayFiveLazyRoute
  '/advent-of-code-2024/day-four': typeof AdventOfCode2024DayFourLazyRoute
  '/advent-of-code-2024/day-one': typeof AdventOfCode2024DayOneLazyRoute
  '/advent-of-code-2024/day-seven': typeof AdventOfCode2024DaySevenLazyRoute
  '/advent-of-code-2024/day-six': typeof AdventOfCode2024DaySixLazyRoute
  '/advent-of-code-2024/day-three': typeof AdventOfCode2024DayThreeLazyRoute
  '/advent-of-code-2024/day-two': typeof AdventOfCode2024DayTwoLazyRoute
  '/advent-of-code-2024': typeof AdventOfCode2024IndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/advent-of-code-2024/day-five': typeof AdventOfCode2024DayFiveLazyRoute
  '/advent-of-code-2024/day-four': typeof AdventOfCode2024DayFourLazyRoute
  '/advent-of-code-2024/day-one': typeof AdventOfCode2024DayOneLazyRoute
  '/advent-of-code-2024/day-seven': typeof AdventOfCode2024DaySevenLazyRoute
  '/advent-of-code-2024/day-six': typeof AdventOfCode2024DaySixLazyRoute
  '/advent-of-code-2024/day-three': typeof AdventOfCode2024DayThreeLazyRoute
  '/advent-of-code-2024/day-two': typeof AdventOfCode2024DayTwoLazyRoute
  '/advent-of-code-2024/': typeof AdventOfCode2024IndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/advent-of-code-2024/day-five'
    | '/advent-of-code-2024/day-four'
    | '/advent-of-code-2024/day-one'
    | '/advent-of-code-2024/day-seven'
    | '/advent-of-code-2024/day-six'
    | '/advent-of-code-2024/day-three'
    | '/advent-of-code-2024/day-two'
    | '/advent-of-code-2024'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/advent-of-code-2024/day-five'
    | '/advent-of-code-2024/day-four'
    | '/advent-of-code-2024/day-one'
    | '/advent-of-code-2024/day-seven'
    | '/advent-of-code-2024/day-six'
    | '/advent-of-code-2024/day-three'
    | '/advent-of-code-2024/day-two'
    | '/advent-of-code-2024'
  id:
    | '__root__'
    | '/advent-of-code-2024/day-five'
    | '/advent-of-code-2024/day-four'
    | '/advent-of-code-2024/day-one'
    | '/advent-of-code-2024/day-seven'
    | '/advent-of-code-2024/day-six'
    | '/advent-of-code-2024/day-three'
    | '/advent-of-code-2024/day-two'
    | '/advent-of-code-2024/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  AdventOfCode2024DayFiveLazyRoute: typeof AdventOfCode2024DayFiveLazyRoute
  AdventOfCode2024DayFourLazyRoute: typeof AdventOfCode2024DayFourLazyRoute
  AdventOfCode2024DayOneLazyRoute: typeof AdventOfCode2024DayOneLazyRoute
  AdventOfCode2024DaySevenLazyRoute: typeof AdventOfCode2024DaySevenLazyRoute
  AdventOfCode2024DaySixLazyRoute: typeof AdventOfCode2024DaySixLazyRoute
  AdventOfCode2024DayThreeLazyRoute: typeof AdventOfCode2024DayThreeLazyRoute
  AdventOfCode2024DayTwoLazyRoute: typeof AdventOfCode2024DayTwoLazyRoute
  AdventOfCode2024IndexRoute: typeof AdventOfCode2024IndexRoute
}

const rootRouteChildren: RootRouteChildren = {
  AdventOfCode2024DayFiveLazyRoute: AdventOfCode2024DayFiveLazyRoute,
  AdventOfCode2024DayFourLazyRoute: AdventOfCode2024DayFourLazyRoute,
  AdventOfCode2024DayOneLazyRoute: AdventOfCode2024DayOneLazyRoute,
  AdventOfCode2024DaySevenLazyRoute: AdventOfCode2024DaySevenLazyRoute,
  AdventOfCode2024DaySixLazyRoute: AdventOfCode2024DaySixLazyRoute,
  AdventOfCode2024DayThreeLazyRoute: AdventOfCode2024DayThreeLazyRoute,
  AdventOfCode2024DayTwoLazyRoute: AdventOfCode2024DayTwoLazyRoute,
  AdventOfCode2024IndexRoute: AdventOfCode2024IndexRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/advent-of-code-2024/day-five",
        "/advent-of-code-2024/day-four",
        "/advent-of-code-2024/day-one",
        "/advent-of-code-2024/day-seven",
        "/advent-of-code-2024/day-six",
        "/advent-of-code-2024/day-three",
        "/advent-of-code-2024/day-two",
        "/advent-of-code-2024/"
      ]
    },
    "/advent-of-code-2024/day-five": {
      "filePath": "advent-of-code-2024/day-five.lazy.tsx"
    },
    "/advent-of-code-2024/day-four": {
      "filePath": "advent-of-code-2024/day-four.lazy.tsx"
    },
    "/advent-of-code-2024/day-one": {
      "filePath": "advent-of-code-2024/day-one.lazy.tsx"
    },
    "/advent-of-code-2024/day-seven": {
      "filePath": "advent-of-code-2024/day-seven.lazy.tsx"
    },
    "/advent-of-code-2024/day-six": {
      "filePath": "advent-of-code-2024/day-six.lazy.tsx"
    },
    "/advent-of-code-2024/day-three": {
      "filePath": "advent-of-code-2024/day-three.lazy.tsx"
    },
    "/advent-of-code-2024/day-two": {
      "filePath": "advent-of-code-2024/day-two.lazy.tsx"
    },
    "/advent-of-code-2024/": {
      "filePath": "advent-of-code-2024/index.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
