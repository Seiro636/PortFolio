'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

const timeline = [
  {
    year: '2019',
    title: 'Entretien de jardin',
    description: "Début de missions régulières d'entretien de jardin."
  },
  {
    year: '2020 - 2021',
    title: 'Ménage chez des particuliers',
    description: 'Réalisation de missions ponctuelles de nettoyage pour des particuliers.'
  },
  {
    year: '2021',
    title: "CJS L'Ouvre Boîte 44",
    description: 'Participation à une coopérative de jeunes pour développer des compétences entrepreneuriales (été).'
  },
  {
    year: '2022',
    title: 'BAC STI2D spécialité informatique',
    description: 'Obtention avec mention assez bien.'
  },
  {
    year: '2022',
    title: "McDonald's",
    description: 'Équipier polyvalent en restauration rapide (février à août).'
  },
  {
    year: '2023',
    title: "BUT Informatique à l'IUT de Nantes",
    description: 'Début de la formation en septembre.'
  },
  {
    year: '2024',
    title: "McDonald's",
    description: 'Nouvelle expérience en tant qu\'équipier polyvalent (mai).'
  },
  {
    year: '2024',
    title: 'Projets informatiques',
    description: 'Développement de Grocery Shop et Grocery Fast.'
  },
  {
    year: '2025',
    title: 'Développement de compétences',
    description: "Début de l'apprentissage du coréen.\nExploration du développement de plugins Minecraft et des microservices.\nUtilisation des technologies React, Next.js, NestJS et PostgreSQL dans divers projets."
  },
  {
    year: '2025',
    title: 'Stage chez Keyzia',
    description: 'Stage de 8 semaines',
    logo: 'https://keyzia.fr/wp-content/uploads/2025/02/cropped-favicon-32x32.png'
  }
]

const Timeline = () => {
  return (
    <section className="section bg-gray-900">
      <div className="container">
        <h2 className="heading text-primary mb-16">Parcours</h2>
        <div className="relative border-l-2 border-primary/30 ml-4">
          {timeline.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="mb-12 ml-8 relative"
            >
              <div className="absolute -left-6 top-1 w-8 h-8 bg-gray-800 border-2 border-primary rounded-full flex items-center justify-center">
                {item.logo ? (
                  <Image src={item.logo} alt={item.title} width={24} height={24} className="rounded-full" />
                ) : (
                  <span className="text-primary font-bold text-lg">{item.year.slice(2,4)}</span>
                )}
              </div>
              <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-primary font-bold text-lg">{item.year}</span>
                  <span className="text-white font-semibold text-lg">{item.title}</span>
                </div>
                <p className="text-gray-300 whitespace-pre-line">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Timeline 