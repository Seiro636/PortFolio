'use client'

import { motion } from 'framer-motion'
import { profile } from '@/data/profile'

const SkillCategory = ({ title, skills }: { title: string; skills: string[] }) => {
  return (
    <div className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <h3 className="text-xl font-bold mb-6 text-center text-primary">{title}</h3>
      <div className="space-y-4">
        {skills.map((skill, index) => (
          <motion.div
            key={`${title}-${skill}-${index}`}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-700 transition-colors duration-200"
          >
            <div className="w-2 h-2 bg-primary rounded-full" />
            <span className="font-medium text-gray-300">{skill}</span>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

const Skills = () => {
  return (
    <section id="skills" className="section bg-gray-900">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="heading text-primary">Compétences</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <SkillCategory title="Frontend" skills={profile.skills.frontend} />
            <SkillCategory title="Backend" skills={profile.skills.backend} />
            <SkillCategory title="Base de données" skills={profile.skills.database} />
            <SkillCategory title="Frameworks" skills={profile.skills.frameworks} />
            <SkillCategory title="Outils" skills={profile.skills.tools} />
            <SkillCategory title="Autres" skills={profile.skills.other} />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills 