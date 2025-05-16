'use client'

import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="section bg-gray-50 dark:bg-gray-800">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="heading text-center">À propos</h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg mb-6">
              Je suis un développeur Full Stack passionné par la création d'applications web modernes et performantes.
              Avec plus de 5 ans d'expérience dans le développement web, je m'efforce de créer des solutions élégantes
              et efficaces qui répondent aux besoins des utilisateurs.
            </p>
            <p className="text-lg mb-6">
              Mon approche du développement est centrée sur l'utilisateur et la qualité du code. Je suis un fervent
              défenseur des bonnes pratiques de développement, notamment le Test-Driven Development (TDD), le pair
              programming et les méthodologies agiles.
            </p>
            <p className="text-lg">
              Je suis constamment à la recherche de nouveaux défis et opportunités d'apprentissage pour rester à la
              pointe des dernières technologies et tendances du développement web.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About 