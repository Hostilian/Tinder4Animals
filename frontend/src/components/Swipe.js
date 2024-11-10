// frontend/src/app/page.tsx
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center px-4 py-32 text-center">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-blue-50 to-white" />

        <h1 className="mb-6 text-5xl font-bold tracking-tight text-gray-900 sm:text-6xl">
          Find Your Perfect Pet Match
        </h1>

        <p className="mb-8 max-w-2xl text-lg text-gray-600">
          Swipe through profiles of adorable animals looking for their forever homes.
          Your new best friend might be just a swipe away.
        </p>

        <div className="flex gap-4">
          <Link href="/browse">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Start Browsing
            </Button>
          </Link>
          <Link href="/about">
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              title="Easy Matching"
              description="Simple swipe interface to find pets that match your preferences"
            />
            <FeatureCard
              title="Verified Shelters"
              description="All our animal listings come from verified animal shelters"
            />
            <FeatureCard
              title="Direct Communication"
              description="Chat directly with shelters once you match with a pet"
            />
          </div>
        </div>
      </section>
    </div>
  )
}

// frontend/src/components/layout/NavBar.tsx
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function NavBar() {
  return (
    <nav className="bg-white border-b">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between">
          <div className="flex">
            <Link href="/" className="flex items-center font-bold text-xl">
              PetMatch
            </Link>

            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link href="/browse" className="inline-flex items-center px-1 pt-1 text-gray-900">
                Browse
              </Link>
              <Link href="/matches" className="inline-flex items-center px-1 pt-1 text-gray-500 hover:text-gray-900">
                Matches
              </Link>
              <Link href="/about" className="inline-flex items-center px-1 pt-1 text-gray-500 hover:text-gray-900">
                About
              </Link>
            </div>
          </div>

          <div className="flex items-center">
            <Link href="/login">
              <Button variant="ghost">Log in</Button>
            </Link>
            <Link href="/signup">
              <Button className="ml-4">Sign up</Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

// frontend/src/components/animals/SwipeCard.tsx
import { Card } from '@/components/ui/card'
import { X, Heart } from 'lucide-react'

export default function SwipeCard({ animal }) {
  return (
    <Card className="relative w-full max-w-sm overflow-hidden rounded-xl">
      <img
        src={animal.imageUrl}
        alt={animal.name}
        className="h-96 w-full object-cover"
      />

      <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/60 to-transparent p-6 text-white">
        <h3 className="text-2xl font-bold">{animal.name}</h3>
        <p className="text-sm opacity-90">
          {animal.breed} • {animal.age} years old
        </p>
        <p className="mt-2 text-sm opacity-90">{animal.description}</p>
      </div>

      <div className="absolute bottom-4 right-4 flex gap-4">
        <button className="rounded-full bg-red-100 p-3 text-red-600 hover:bg-red-200">
          <X className="h-8 w-8" />
        </button>
        <button className="rounded-full bg-green-100 p-3 text-green-600 hover:bg-green-200">
          <Heart className="h-8 w-8" />
        </button>
      </div>
    </Card>
  )
}
