import { motion } from 'framer-motion'
import {
  Building,
  Home,
  Construction,
  Paintbrush,
  Ruler,
  Shield,
} from 'lucide-react'

const services = [
  {
    icon: Building,
    title: 'Edificación',
    description:
      'Construcción de edificios residenciales y comerciales con los más altos estándares de calidad.',
  },
  {
    icon: Home,
    title: 'Vivienda',
    description:
      'Diseño y construcción de viviendas personalizadas, funcionales y sostenibles.',
  },
  {
    icon: Construction,
    title: 'Remodelación',
    description:
      'Transformamos espacios existentes en ambientes modernos y funcionales.',
  },
  {
    icon: Paintbrush,
    title: 'Acabados',
    description:
      'Acabados de lujo con materiales premium y atención al más mínimo detalle.',
  },
  {
    icon: Ruler,
    title: 'Diseño',
    description:
      'Planos, renders y proyectos arquitectónicos innovadores y funcionales.',
  },
  {
    icon: Shield,
    title: 'Consultoría',
    description:
      'Asesoría técnica especializada en todas las etapas del proyecto.',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-28 bg-gray-150">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-[0.3em]">
            Nuestros servicios
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-dark mt-4 mb-6">
            Soluciones{' '}
            <span className="text-primary">integrales</span>
          </h2>
          <p className="text-dark/60 max-w-2xl mx-auto text-lg leading-relaxed">
            Ofrecemos un servicio completo de construcción, desde el diseño hasta
            la entrega final, adaptándonos a las necesidades de cada cliente.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-white p-8 rounded-sm group hover:shadow-xl transition-all duration-300 cursor-default"
            >
              <div className="w-14 h-14 bg-dark rounded-sm flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                <service.icon className="text-white group-hover:text-dark transition-colors duration-300" size={26} />
              </div>
              <h3 className="text-xl font-bold text-dark mb-3">{service.title}</h3>
              <p className="text-dark/60 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
