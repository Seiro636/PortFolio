'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { profile } from '@/data/profile'
import Link from 'next/link'
import { useTheme } from 'next-themes'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-900/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="text-2xl font-bold text-primary">
            {profile.name}
          </a>

          <div className="hidden md:flex space-x-8 items-center">
            <Link href="/timeline" className="text-gray-300 hover:text-primary transition-colors">
              À propos
            </Link>
            <a href="#skills" className="text-gray-300 hover:text-primary transition-colors">
              Compétences
            </a>
            <a href="#projects" className="text-gray-300 hover:text-primary transition-colors">
              Projets
            </a>
            <a href="#contact" className="text-gray-300 hover:text-primary transition-colors">
              Contact
            </a>
            <button
              aria-label="Toggle dark mode"
              className="ml-6 p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors"
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            >
              {mounted && theme === 'dark' ? (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m8.66-12.66l-.71.71M4.05 19.07l-.71.71M21 12h-1M4 12H3m16.66 4.66l-.71-.71M6.34 6.34l-.71-.71M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
              ) : (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-200" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" /></svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}

export default Navbar 