'use client'

import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="section bg-white dark:bg-gray-900">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="heading mb-8">À propos</h2>
        </motion.div>
      </div>
    </section>
  )
}

export default About 