import { Globe, MessageSquare, Video, Share2 } from 'lucide-react'
import logo from '../../medios/logo-arkonis.png'

export default function Footer() {
  return (
    <footer className="bg-dark-900 border-t border-white/5 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <img src={logo} alt="Arkonis" className="h-28 w-auto brightness-0 invert" />

          <div className="flex gap-6">
            {[Globe, MessageSquare, Video, Share2].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-10 h-10 border border-white/10 rounded-sm flex items-center justify-center text-white/40 hover:text-primary hover:border-primary transition-all duration-300"
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/5 text-center text-white/30 text-xs uppercase tracking-widest">
          © {new Date().getFullYear()} Constructora. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  )
}
