import Timeline from '@/components/Timeline'
import Link from 'next/link'

export default function TimelinePage() {
  return (
    <main className="min-h-screen bg-gray-900 py-20">
      <header className="sticky top-0 z-40 bg-gray-900/95 border-b border-gray-800 mb-8">
        <div className="container mx-auto px-4 py-4 flex items-center">
          <Link href="/" className="text-primary font-semibold flex items-center gap-2 hover:underline">
            <span className="text-2xl">←</span> Accueil
          </Link>
        </div>
      </header>
      <div className="container mx-auto px-4 max-w-3xl">
        <h1 className="text-4xl font-bold text-primary mb-4">À propos</h1>
        <p className="text-lg text-gray-300 mb-8">
          Passionné par le développement full stack et étudiant en 2ᵉ année de BUT Informatique à l'IUT de Nantes, je combine mes compétences techniques en React, Node.js, et PostgreSQL avec ma créativité pour concevoir des applications innovantes, telles que Grocery Shop, une plateforme immersive en pixel art. Curieux et engagé, je suis à la recherche de nouvelles opportunités pour continuer à évoluer dans des projets ambitieux, notamment en e-commerce et développement d'API.
        </p>
        <div className="flex flex-wrap gap-4 mb-12">
          <a href="mailto:kenzo.gallon@example.com" className="text-primary underline">Me contacter</a>
          <a href="https://github.com/kenzogallon" className="text-primary underline" target="_blank">GitHub</a>
          <a href="https://www.linkedin.com/in/kenzogallon/" className="text-primary underline" target="_blank">LinkedIn</a>
        </div>
        <h2 className="text-3xl font-bold text-primary mb-8">Mon Parcours</h2>
        <Timeline />
      </div>
    </main>
  )
} 