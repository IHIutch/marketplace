// app/routes/__root.tsx
import {
  Outlet,
  ScrollRestoration,
  createRootRoute,
} from '@tanstack/react-router'
import { Body, Head, Html, Meta, Scripts } from '@tanstack/start'
import type { ReactNode } from 'react'

import globalStyle from '../main.css?url'
import sourceSans from '@fontsource-variable/source-sans-3?url';

export const Route = createRootRoute({
  meta: () => [
    {
      charSet: 'utf-8',
    },
    {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1',
    },
    {
      title: 'TanStack Start Starter',
    },
  ],
  links: () => [
    {
      href: globalStyle,
      rel: 'stylesheet'
    },
    {
      href: sourceSans,
      rel: 'stylesheet'
    }
  ],
  component: RootComponent,
  notFoundComponent: () => (
    <RootDocument>
      <div>
        <h1>404</h1>
      </div>
    </RootDocument>
  ),
})

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  )
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <Html>
      <Head>
        <Meta />
      </Head>
      <Body>
        <div className="font-source-sans">{children}</div>
        <ScrollRestoration />
        <Scripts />
      </Body>
    </Html>
  )
}
