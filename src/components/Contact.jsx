import { useState } from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react'

const WHATSAPP_NUMBER = '525648024018'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    const text = encodeURIComponent(
      `Hola, soy ${form.name} (${form.email}).%0A%0A${form.subject ? `Asunto: ${form.subject}%0A%0A` : ''}${form.message}`
    )
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank')
  }

  const update = (field) => (e) => setForm({ ...form, [field]: e.target.value })

  return (
    <section id="contact" className="py-28 bg-dark">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-[0.3em]">
            Contacto
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
            Hagamos realidad tu{' '}
            <span className="text-primary">proyecto</span>
          </h2>
          <p className="text-white/50 max-w-2xl mx-auto text-lg leading-relaxed">
            Estamos listos para escuchar tus ideas y convertirlas en espacios
            extraordinarios. Contáctanos y recibe una cotización personalizada.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7 }}
            className="space-y-8"
          >
              {[
                { icon: Phone, label: 'Teléfono', value: '+52 56 4802 4018', href: `https://wa.me/${WHATSAPP_NUMBER}` },
                { icon: MessageCircle, label: 'WhatsApp', value: '+52 56 4802 4018', href: `https://wa.me/${WHATSAPP_NUMBER}` },
                { icon: Mail, label: 'Email', value: 'direccion@constructoraarkonis.com.mx', href: 'mailto:direccion@constructoraarkonis.com.mx' },
                { icon: MapPin, label: 'Dirección', value: 'Av. Principal 123, Ciudad' },
                { icon: Clock, label: 'Horario', value: 'Lun - Vie: 8:00 AM - 6:00 PM' },
              ].map((item) => {
                const content = (
                  <div className="flex items-center gap-5 group">
                    <div className="w-12 h-12 bg-dark-800 rounded-sm flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                      <item.icon className="text-primary group-hover:text-dark transition-colors duration-300" size={22} />
                    </div>
                    <div>
                      <div className="text-white/40 text-xs uppercase tracking-wider font-semibold">{item.label}</div>
                      <div className="text-white font-medium">{item.value}</div>
                    </div>
                  </div>
                )
                return item.href ? (
                  <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer" className="block">
                    {content}
                  </a>
                ) : (
                  <div key={item.label}>{content}</div>
                )
              })}
          </motion.div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.7 }}
            className="space-y-5"
          >
            <div className="grid grid-cols-2 gap-5">
              <input
                type="text"
                placeholder="Nombre"
                value={form.name}
                onChange={update('name')}
                required
                className="w-full bg-dark-800 border border-white/10 rounded-sm px-5 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-primary transition-colors text-sm"
              />
              <input
                type="email"
                placeholder="Email"
                value={form.email}
                onChange={update('email')}
                required
                className="w-full bg-dark-800 border border-white/10 rounded-sm px-5 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-primary transition-colors text-sm"
              />
            </div>
            <input
              type="text"
              placeholder="Asunto"
              value={form.subject}
              onChange={update('subject')}
              className="w-full bg-dark-800 border border-white/10 rounded-sm px-5 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-primary transition-colors text-sm"
            />
            <textarea
              rows={5}
              placeholder="Mensaje"
              value={form.message}
              onChange={update('message')}
              required
              className="w-full bg-dark-800 border border-white/10 rounded-sm px-5 py-4 text-white placeholder:text-white/30 focus:outline-none focus:border-primary transition-colors text-sm resize-none"
            />
            <button
              type="submit"
              className="w-full bg-primary text-white font-bold py-4 rounded-sm hover:bg-primary-dark transition-all duration-300 text-sm uppercase tracking-widest"
            >
              Enviar mensaje
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
