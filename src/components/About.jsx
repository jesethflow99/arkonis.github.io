import { motion } from 'framer-motion'
import { Trophy, Users, HardHat, Building2 } from 'lucide-react'

const stats = [
  { icon: Building2, value: '350+', label: 'Proyectos' },
  { icon: Trophy, value: '15', label: 'Premios' },
  { icon: Users, value: '200+', label: 'Colaboradores' },
  { icon: HardHat, value: '22', label: 'Años' },
]

export default function About() {
  return (
    <section id="about" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-[0.3em]">
            Quiénes somos
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-dark mt-4 mb-6">
            Nuestra{' '}
            <span className="text-primary">trayectoria</span> habla
          </h2>
          <p className="text-dark/60 max-w-2xl mx-auto text-lg leading-relaxed">
            Somos una empresa con más de dos décadas de experiencia en el sector
            de la construcción, comprometidos con la calidad, la innovación y la
            satisfacción de nuestros clientes.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-dark rounded-sm mb-5 group-hover:bg-primary transition-colors duration-300">
                <stat.icon className="text-white group-hover:text-dark transition-colors duration-300" size={28} />
              </div>
              <div className="text-4xl font-extrabold text-dark mb-1">{stat.value}</div>
              <div className="text-dark/50 text-sm uppercase tracking-wider font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-20 bg-dark rounded-sm p-10 md:p-16 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
            Filosofía de trabajo
          </h3>
          <p className="text-white/60 max-w-3xl mx-auto text-lg leading-relaxed">
            Creemos en la construcción sostenible, en la innovación constante y en el
            trabajo en equipo. Cada proyecto es una oportunidad para superarnos y
            ofrecer resultados que marquen la diferencia.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
