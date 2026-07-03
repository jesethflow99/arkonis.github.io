import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import bodega from '../../medios/bodega.jpeg'
import casaHotelera from '../../medios/casa hotelera.jpeg'
import centroComercial from '../../medios/centro comercial.jpeg'
import disenoInterior from '../../medios/diseno de interior.jpeg'
import plazaComercial from '../../medios/plaza comercial.jpeg'
import estacionamiento from '../../medios/estacionamiento publico.jpeg'

const projects = [
  {
    id: 1,
    title: 'Bodega Industrial',
    category: 'Comercial',
    description: 'Bodega de 5,000 m² con infraestructura moderna y eficiente.',
    image: bodega,
  },
  {
    id: 2,
    title: 'Casa Hotelera',
    category: 'Hotelero',
    description: 'Hotel boutique con arquitectura tradicional y acabados de lujo.',
    image: casaHotelera,
  },
  {
    id: 3,
    title: 'Centro Comercial',
    category: 'Comercial',
    description: 'Centro comercial de 25,000 m² con arquitectura vanguardista.',
    image: centroComercial,
  },
  {
    id: 4,
    title: 'Diseño de Interiores',
    category: 'Residencial',
    description: 'Interiores modernos con materiales premium y acabados de lujo.',
    image: disenoInterior,
  },
  {
    id: 5,
    title: 'Plaza Comercial',
    category: 'Comercial',
    description: 'Plaza comercial con espacios versátiles y diseño contemporáneo.',
    image: plazaComercial,
  },
  {
    id: 6,
    title: 'Estacionamiento Público',
    category: 'Público',
    description: 'Estacionamiento de varios niveles con capacidad para 1,200 vehículos.',
    image: estacionamiento,
  },
]

const categories = ['Todos', 'Comercial', 'Residencial', 'Hotelero', 'Público']

export default function Projects() {
  const [active, setActive] = useState('Todos')

  const filtered = active === 'Todos' ? projects : projects.filter(p => p.category === active)

  return (
    <section id="projects" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-[0.3em]">
            Portafolio
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-dark mt-4 mb-6">
            Proyectos{' '}
            <span className="text-primary">recientes</span>
          </h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-6 py-2.5 text-sm uppercase tracking-widest font-semibold transition-all duration-300 rounded-sm ${
                active === cat
                  ? 'bg-primary text-white'
                  : 'bg-dark text-white hover:bg-dark-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
              >
                <div className="rounded-sm overflow-hidden group cursor-pointer relative h-72 bg-dark">
                  {project.image ? (
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                  ) : (
                    <div className={`absolute inset-0 ${project.color}`} />
                  )}

                  <div className="absolute inset-0 bg-dark/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="text-center p-6">
                      <span className="inline-block text-primary text-xs font-semibold uppercase tracking-[0.2em] mb-3">
                        {project.category}
                      </span>
                      <h3 className="text-white text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-white/50 text-sm leading-relaxed mb-4">{project.description}</p>
                    </div>
                  </div>

                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/90 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <div className="text-center p-6">
                      <ExternalLink className="mx-auto mb-3 text-white" size={28} />
                      <h3 className="text-white font-bold text-lg">{project.title}</h3>
                      <span className="text-white/70 text-sm">{project.category}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>


      </div>
    </section>
  )
}
