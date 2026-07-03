import { motion } from 'framer-motion'
import { ArrowDown } from 'lucide-react'
import portada from '../../medios/portada.jpeg'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-dark-900">
      <div className="absolute inset-0">
        <img src={portada} alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-dark/70" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl pb-28">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <span className="inline-block text-primary text-sm font-semibold uppercase tracking-[0.3em] mb-6">
            Construyendo el futuro
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white leading-[1.05] mb-8"
        >
          Calidad que{' '}
          <span className="text-primary">trasciende</span>
          <br />
          obras que{' '}
          <span className="text-primary">inspiran</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          Más de 20 años transformando ideas en espacios extraordinarios.
          Innovación, compromiso y excelencia en cada proyecto.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href="#contact"
            className="bg-primary text-white font-bold px-10 py-4 rounded-sm hover:bg-primary-dark transition-all duration-300 text-sm uppercase tracking-widest"
          >
            Solicitar cotización
          </a>
          <a
            href="#projects"
            className="border border-white/20 text-white px-10 py-4 rounded-sm hover:border-white/50 transition-all duration-300 text-sm uppercase tracking-widest"
          >
            Ver proyectos
          </a>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/40 hover:text-primary transition-colors"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown size={28} />
        </motion.div>
      </motion.a>
    </section>
  )
}
