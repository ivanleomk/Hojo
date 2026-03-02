import { auth } from '@clerk/tanstack-react-start/server'
import { createFileRoute, redirect } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/react-start'

const requireAuth = createServerFn().handler(async () => {
  const { isAuthenticated } = await auth()
  if (!isAuthenticated) {
    throw redirect({ to: '/' })
  }
})

export const Route = createFileRoute('/dashboard')({
  beforeLoad: async () => {
    await requireAuth()
  },
  component: Dashboard,
})

function Dashboard() {
  return (
    <main className="page-wrap px-4 py-12">
      <section className="island-shell rounded-2xl p-6 sm:p-10">
        <p className="island-kicker mb-2">Dashboard</p>
        <h1 className="display-title m-0 text-4xl font-bold text-[var(--sea-ink)] sm:text-5xl">
          Hojo Dashboard
        </h1>
        <p className="mt-4 text-base text-[var(--sea-ink-soft)]">
          This page is protected by Clerk authentication.
        </p>
      </section>
    </main>
  )
}
