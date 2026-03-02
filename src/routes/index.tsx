import {
  SignedIn,
  SignedOut,
} from '@clerk/tanstack-react-start'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: Home,
})

function Home() {
  return (
    <main className="page-wrap px-4 py-12">
      <section className="island-shell rounded-2xl p-6 sm:p-10">
        <p className="island-kicker mb-2">Welcome</p>
        <h1 className="display-title m-0 text-4xl font-bold text-[var(--sea-ink)] sm:text-6xl">
          Hojo
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-7 text-[var(--sea-ink-soft)] sm:text-lg">
          A focused landing page for the Hojo product experience.
        </p>
        <SignedOut>
          <p className="mt-6 text-sm text-[var(--sea-ink-soft)]">
            Sign in from the top right to continue.
          </p>
        </SignedOut>
        <SignedIn>
          <p className="mt-6 text-sm text-[var(--sea-ink-soft)]">
            You are signed in.
          </p>
        </SignedIn>
      </section>
    </main>
  )
}
