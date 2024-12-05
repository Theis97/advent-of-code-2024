/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'

// Create Virtual Routes

const AdventOfCode2024IndexLazyImport = createFileRoute(
  '/advent-of-code-2024/',
)()
const AdventOfCode2024DayTwoLazyImport = createFileRoute(
  '/advent-of-code-2024/day-two',
)()
const AdventOfCode2024DayThreeLazyImport = createFileRoute(
  '/advent-of-code-2024/day-three',
)()
const AdventOfCode2024DayOneLazyImport = createFileRoute(
  '/advent-of-code-2024/day-one',
)()
const AdventOfCode2024DayFourLazyImport = createFileRoute(
  '/advent-of-code-2024/day-four',
)()

// Create/Update Routes

const AdventOfCode2024IndexLazyRoute = AdventOfCode2024IndexLazyImport.update({
  id: '/advent-of-code-2024/',
  path: '/advent-of-code-2024/',
  getParentRoute: () => rootRoute,
} as any).lazy(() =>
  import('./routes/advent-of-code-2024/index.lazy').then((d) => d.Route),
)

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

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
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
      preLoaderRoute: typeof AdventOfCode2024IndexLazyImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/advent-of-code-2024/day-four': typeof AdventOfCode2024DayFourLazyRoute
  '/advent-of-code-2024/day-one': typeof AdventOfCode2024DayOneLazyRoute
  '/advent-of-code-2024/day-three': typeof AdventOfCode2024DayThreeLazyRoute
  '/advent-of-code-2024/day-two': typeof AdventOfCode2024DayTwoLazyRoute
  '/advent-of-code-2024': typeof AdventOfCode2024IndexLazyRoute
}

export interface FileRoutesByTo {
  '/advent-of-code-2024/day-four': typeof AdventOfCode2024DayFourLazyRoute
  '/advent-of-code-2024/day-one': typeof AdventOfCode2024DayOneLazyRoute
  '/advent-of-code-2024/day-three': typeof AdventOfCode2024DayThreeLazyRoute
  '/advent-of-code-2024/day-two': typeof AdventOfCode2024DayTwoLazyRoute
  '/advent-of-code-2024': typeof AdventOfCode2024IndexLazyRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/advent-of-code-2024/day-four': typeof AdventOfCode2024DayFourLazyRoute
  '/advent-of-code-2024/day-one': typeof AdventOfCode2024DayOneLazyRoute
  '/advent-of-code-2024/day-three': typeof AdventOfCode2024DayThreeLazyRoute
  '/advent-of-code-2024/day-two': typeof AdventOfCode2024DayTwoLazyRoute
  '/advent-of-code-2024/': typeof AdventOfCode2024IndexLazyRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths:
    | '/advent-of-code-2024/day-four'
    | '/advent-of-code-2024/day-one'
    | '/advent-of-code-2024/day-three'
    | '/advent-of-code-2024/day-two'
    | '/advent-of-code-2024'
  fileRoutesByTo: FileRoutesByTo
  to:
    | '/advent-of-code-2024/day-four'
    | '/advent-of-code-2024/day-one'
    | '/advent-of-code-2024/day-three'
    | '/advent-of-code-2024/day-two'
    | '/advent-of-code-2024'
  id:
    | '__root__'
    | '/advent-of-code-2024/day-four'
    | '/advent-of-code-2024/day-one'
    | '/advent-of-code-2024/day-three'
    | '/advent-of-code-2024/day-two'
    | '/advent-of-code-2024/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  AdventOfCode2024DayFourLazyRoute: typeof AdventOfCode2024DayFourLazyRoute
  AdventOfCode2024DayOneLazyRoute: typeof AdventOfCode2024DayOneLazyRoute
  AdventOfCode2024DayThreeLazyRoute: typeof AdventOfCode2024DayThreeLazyRoute
  AdventOfCode2024DayTwoLazyRoute: typeof AdventOfCode2024DayTwoLazyRoute
  AdventOfCode2024IndexLazyRoute: typeof AdventOfCode2024IndexLazyRoute
}

const rootRouteChildren: RootRouteChildren = {
  AdventOfCode2024DayFourLazyRoute: AdventOfCode2024DayFourLazyRoute,
  AdventOfCode2024DayOneLazyRoute: AdventOfCode2024DayOneLazyRoute,
  AdventOfCode2024DayThreeLazyRoute: AdventOfCode2024DayThreeLazyRoute,
  AdventOfCode2024DayTwoLazyRoute: AdventOfCode2024DayTwoLazyRoute,
  AdventOfCode2024IndexLazyRoute: AdventOfCode2024IndexLazyRoute,
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
        "/advent-of-code-2024/day-four",
        "/advent-of-code-2024/day-one",
        "/advent-of-code-2024/day-three",
        "/advent-of-code-2024/day-two",
        "/advent-of-code-2024/"
      ]
    },
    "/advent-of-code-2024/day-four": {
      "filePath": "advent-of-code-2024/day-four.lazy.tsx"
    },
    "/advent-of-code-2024/day-one": {
      "filePath": "advent-of-code-2024/day-one.lazy.tsx"
    },
    "/advent-of-code-2024/day-three": {
      "filePath": "advent-of-code-2024/day-three.lazy.tsx"
    },
    "/advent-of-code-2024/day-two": {
      "filePath": "advent-of-code-2024/day-two.lazy.tsx"
    },
    "/advent-of-code-2024/": {
      "filePath": "advent-of-code-2024/index.lazy.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
