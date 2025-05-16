'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { profile } from '@/data/profile'

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="container mx-auto px-4 py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-primary">
              {profile.name}
              <span className="block text-primary">Développeur Full Stack</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8">
              Passionné par le développement full stack et étudiant en 2ᵉ année de BUT Informatique à l'IUT de Nantes, 
              je combine mes compétences techniques en React, Node.js, et PostgreSQL avec ma créativité pour concevoir 
              des applications innovantes.
            </p>
            <div className="flex space-x-4">
              <a
                href="#contact"
                className="btn btn-primary"
              >
                Me contacter
              </a>
              <a
                href="#projects"
                className="btn border border-primary text-primary hover:bg-primary hover:text-white"
              >
                Voir mes projets
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
              <Image
                src="/images/profile.jpg"
                alt={profile.name}
                fill
                className="rounded-full object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero 