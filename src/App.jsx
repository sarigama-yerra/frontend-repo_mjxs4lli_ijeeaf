import React, { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Skull, Compass, Ghost, Zap, Newspaper, Users, MessageCircle, Map, Calendar, TriangleAlert } from 'lucide-react'
import Spline from '@splinetool/react-spline'
import AnimatedOutline from './components/AnimatedOutline'
import Atmosphere from './components/Atmosphere'
import Section from './components/Section'

const steamUrl = 'https://store.steampowered.com/app/000000/POVEGLIA' // replace with real

function Flicker({ children }) {
  return (
    <motion.span
      initial={{ opacity: 0.8 }}
      animate={{ opacity: [0.8, 0.6, 0.85, 0.7, 0.9, 0.8] }}
      transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
      className="inline-block"
    >
      {children}
    </motion.span>
  )
}

function Hero() {
  const { scrollY } = useScroll()
  const y = useTransform(scrollY, [0, 600], [0, -120])
  const opacity = useTransform(scrollY, [0, 400], [1, 0.5])

  return (
    <div className="relative min-h-[100svh] bg-[#1C1C1C] text-[#F5F5F5] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/5iNiBKPngFKgC6zA/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Dark overlays to match palette */}
      <div className="pointer-events-none absolute inset-0 bg-[#000000]/50" />
      <Atmosphere />

      <motion.div style={{ y, opacity }} className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-24 sm:pt-40">
        <div className="max-w-3xl">
          <h1 className="font-[Cinzel] text-5xl sm:text-6xl lg:text-7xl tracking-wide leading-[1.05]">
            POVEGLIA
          </h1>
          <p className="mt-5 text-[#F5F5F5]/85 font-[Lato] text-lg sm:text-xl leading-relaxed">
            La isla susurra. Las puertas no quieren abrir. El agua recuerda.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href={steamUrl} target="_blank" className="inline-flex items-center gap-2 bg-[#800000] hover:bg-[#800000]/90 text-[#F5F5F5] px-6 py-3 rounded-md font-[Lato] tracking-wide transition-colors">
              Añádelo a tu lista de deseos
              <ArrowRight size={18} />
            </a>
            <span className="text-[#F5F5F5]/70 font-[Italianno] text-2xl">Un AAA peruano</span>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

function Lore() {
  return (
    <Section id="lore" title="La isla te habla" subtitle="Entre nieblas y campanas que ya no suenan, la memoria de Poveglia gotea. Cada muro rezuma historias que prefieren no ser nombradas.">
      <div className="grid md:grid-cols-2 gap-8">
        {[
          'https://images.unsplash.com/photo-1544989164-31dc3c645987?q=80&w=1400&auto=format&fit=crop',
          'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1400&auto=format&fit=crop',
        ].map((src, i) => (
          <AnimatedOutline key={i} className="aspect-[16/10]">
            <img src={src} alt="lore" className="w-full h-full object-cover brightness-[0.6]" />
          </AnimatedOutline>
        ))}
      </div>
      <p className="mt-8 font-[Lato] text-[#F5F5F5]/80 max-w-3xl">
        Las grietas en la piedra no son sólo tiempo. Son bocas. Y algunas noches, respiran.
      </p>
    </Section>
  )
}

function Characters() {
  const people = [
    { name: 'La Vigilante', desc: 'Ojos detrás de la puerta sellada.', img: 'https://images.unsplash.com/photo-1513128039-6f1a3969c8f0?q=80&w=1200&auto=format&fit=crop' },
    { name: 'El Barquero', desc: 'Navega sin agua y sin luna.', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop' },
    { name: 'El Interno', desc: 'Recuerda lo que no ocurrió.', img: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1200&auto=format&fit=crop' },
  ]

  return (
    <Section id="personajes" title="Siluetas" subtitle="No se presentan. Se revelan cuando decides mirar.">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {people.map((p, i) => (
          <div key={i} className="group relative overflow-hidden bg-[#112426]">
            <img src={p.img} alt={p.name} className="w-full h-80 object-cover brightness-[0.45] grayscale group-hover:grayscale-0 transition-all duration-500" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0" />
            <div className="absolute inset-0 flex items-end p-5">
              <div>
                <h3 className="font-[Compacta,Impact,_sans-serif] tracking-wider text-2xl">{p.name}</h3>
                <p className="font-[Lato] text-[#F5F5F5]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500">{p.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}

function Scenes() {
  const items = [
    { title: 'Muelle sin regreso', img: 'https://images.unsplash.com/photo-1520970046121-3e1c0e6e8c8b?q=80&w=1400&auto=format&fit=crop' },
    { title: 'Pórtico sellado', img: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1400&auto=format&fit=crop' },
    { title: 'Torre hueca', img: 'https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=1400&auto=format&fit=crop' },
  ]

  return (
    <Section id="escenarios" title="Atmósferas" subtitle="Piedra húmeda, madera cansada, hierro que recuerda el mar." dark>
      <div className="grid md:grid-cols-3 gap-6">
        {items.map((it, i) => (
          <AnimatedOutline key={i} className="aspect-[4/5]">
            <div className="relative w-full h-full overflow-hidden">
              <img src={it.img} alt={it.title} className="w-full h-full object-cover brightness-[0.55]" />
              <div className="absolute inset-0" style={{ background: 'radial-gradient(50% 60% at 50% 40%, transparent, rgba(0,0,0,0.6))' }} />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h4 className="font-[Cinzel] text-xl">{it.title}</h4>
              </div>
            </div>
          </AnimatedOutline>
        ))}
      </div>
    </Section>
  )
}

function Features() {
  const list = [
    { icon: <Ghost />, title: 'Horror psicológico', desc: 'Audios, susurros y memoria que se dobla.' },
    { icon: <Compass />, title: 'Exploración inmersiva', desc: 'Parallax, neblina, madera que cruje.' },
    { icon: <Skull />, title: 'Leyendas italianas', desc: 'La peste dejó cicatrices que hablan.' },
    { icon: <Zap />, title: 'Calidad AAA', desc: 'Primer gran proyecto peruano de esta escala.' },
  ]

  return (
    <Section id="gameplay" title="Gameplay & Features">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {list.map((f, i) => (
          <div key={i} className="bg-[#112426] p-5 rounded-md border border-[#F5F5F5]/10">
            <div className="text-[#800000]">{f.icon}</div>
            <h4 className="mt-3 font-[Compacta,Impact,_sans-serif] tracking-wide text-xl">{f.title}</h4>
            <p className="font-[Lato] text-[#F5F5F5]/80">{f.desc}</p>
          </div>
        ))}
      </div>
      <div className="mt-8 flex flex-wrap items-center gap-4">
        <a href={steamUrl} target="_blank" className="inline-flex items-center gap-2 bg-[#800000] hover:bg-[#800000]/90 text-[#F5F5F5] px-6 py-3 rounded-md font-[Lato]">
          Early Access • Wishlist en Steam
          <ArrowRight size={18} />
        </a>
        <span className="text-[#F5F5F5]/70 font-[Italianno] text-2xl">La isla espera.</span>
      </div>
    </Section>
  )
}

function News() {
  const items = [
    { date: 'Oct 2025', title: 'Diario de desarrollo #1', img: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=800&auto=format&fit=crop' },
    { date: 'Nov 2025', title: 'Sistemas de niebla dinámica', img: 'https://images.unsplash.com/photo-1470104240373-bc1812eddc9f?q=80&w=800&auto=format&fit=crop' },
    { date: 'Dic 2025', title: 'Teaser de personajes', img: 'https://images.unsplash.com/photo-1520970046121-3e1c0e6e8c8b?q=80&w=800&auto=format&fit=crop' },
  ]

  return (
    <Section id="news" title="Noticias / Devlogs">
      <div className="grid md:grid-cols-3 gap-6">
        {items.map((n, i) => (
          <div key={i} className="group relative bg-[#112426] overflow-hidden">
            <img src={n.img} alt="news" className="w-full h-60 object-cover brightness-[0.6]" />
            <div className="absolute inset-0 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ backgroundImage: 'repeating-linear-gradient(0deg, rgba(255,255,255,0.05) 0, rgba(255,255,255,0.05) 1px, transparent 1px, transparent 2px)'}} />
            <div className="p-5">
              <p className="text-[#F5F5F5]/60 font-[Lato]">{n.date}</p>
              <h4 className="font-[Compacta,Impact,_sans-serif] tracking-wide text-xl mt-1">{n.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}

function Gallery() {
  const items = Array.from({ length: 9 }).map((_, i) => `https://picsum.photos/seed/poveglia${i}/600/800`)
  return (
    <Section id="galeria" title="Galería" subtitle="Arte, clips y fragmentos rescatados del agua.">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {items.map((src, i) => (
          <AnimatedOutline key={i} className="aspect-[3/4]">
            <img src={src} alt="gallery" className="w-full h-full object-cover brightness-[0.7]" />
          </AnimatedOutline>
        ))}
      </div>
    </Section>
  )
}

function Roadmap() {
  const steps = [
    { t: 'Preproducción', d: 'Investigación histórica italiana, prototipos atmosféricos.' },
    { t: 'Alpha', d: 'Sistemas de exploración, IA de tensión psicológica.' },
    { t: 'Beta', d: 'Narrativa ramificada, optimización y pulido.' },
    { t: 'Lanzamiento', d: 'Campaña completa, soporte y expansiones.' },
  ]

  return (
    <Section id="roadmap" title="Hoja de Ruta" dark>
      <div className="relative pl-6 border-l border-[#F5F5F5]/20">
        {steps.map((s, i) => (
          <div key={i} className="mb-8">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 bg-[#800000] rounded-full shadow-[0_0_0_3px_rgba(128,0,0,0.3)]" />
              <h4 className="font-[Cinzel] text-xl">{s.t}</h4>
            </div>
            <p className="font-[Lato] text-[#F5F5F5]/80 ml-6 mt-2">{s.d}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}

function Community() {
  return (
    <Section id="comunidad" title="Comunidad" subtitle="Teorías, fanarts y voces desde la niebla.">
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-[#112426] p-5 rounded-md">
          <h4 className="font-[Compacta,Impact,_sans-serif] tracking-wide text-xl">Fanarts</h4>
          <p className="font-[Lato] text-[#F5F5F5]/80">Comparte tu visión de la isla.</p>
        </div>
        <div className="bg-[#112426] p-5 rounded-md">
          <h4 className="font-[Compacta,Impact,_sans-serif] tracking-wide text-xl">Teorías</h4>
          <p className="font-[Lato] text-[#F5F5F5]/80">Lo que se oye cuando nadie habla.</p>
        </div>
        <div className="bg-[#112426] p-5 rounded-md">
          <h4 className="font-[Compacta,Impact,_sans-serif] tracking-wide text-xl">Redes</h4>
          <p className="font-[Lato] text-[#F5F5F5]/80">Síguenos y entra en la niebla.</p>
        </div>
      </div>
    </Section>
  )
}

function Contact() {
  return (
    <Section id="contacto" title="Contacto / Media Kit" subtitle="Solicita logotipos, dossier y recursos para prensa.">
      <div className="bg-[#112426] p-6 rounded-md">
        <p className="font-[Lato] text-[#F5F5F5]/80">Escríbenos: media@poveglia.game</p>
        <div className="mt-4 flex flex-wrap gap-3">
          <a href="#" className="bg-[#800000] hover:bg-[#800000]/90 text-[#F5F5F5] px-4 py-2 rounded">Descargar logotipo</a>
          <a href="#" className="bg-[#800000] hover:bg-[#800000]/90 text-[#F5F5F5] px-4 py-2 rounded">Dossier</a>
        </div>
      </div>
    </Section>
  )
}

function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-[#000000]/40 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="font-[Cinzel] text-[#F5F5F5] tracking-[0.2em]">POVEGLIA</a>
        <button onClick={() => setOpen(!open)} className="md:hidden text-[#F5F5F5]">Menu</button>
        <nav className="hidden md:flex gap-6 text-[#F5F5F5]/80 font-[Lato]">
          <a href="#lore" className="hover:text-[#F5F5F5]">Historia</a>
          <a href="#personajes" className="hover:text-[#F5F5F5]">Personajes</a>
          <a href="#escenarios" className="hover:text-[#F5F5F5]">Escenarios</a>
          <a href="#gameplay" className="hover:text-[#F5F5F5]">Gameplay</a>
          <a href="#news" className="hover:text-[#F5F5F5]">Noticias</a>
          <a href="#galeria" className="hover:text-[#F5F5F5]">Galería</a>
          <a href="#roadmap" className="hover:text-[#F5F5F5]">Roadmap</a>
          <a href="#comunidad" className="hover:text-[#F5F5F5]">Comunidad</a>
          <a href="#contacto" className="hover:text-[#F5F5F5]">Contacto</a>
        </nav>
      </div>
      {open && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-2 text-[#F5F5F5]/90 font-[Lato]">
          {['Historia','Personajes','Escenarios','Gameplay','Noticias','Galería','Roadmap','Comunidad','Contacto'].map((l,i)=> (
            <a key={i} href={`#${['lore','personajes','escenarios','gameplay','news','galeria','roadmap','comunidad','contacto'][i]}`} className="py-2 border-b border-white/10">{l}</a>
          ))}
        </div>
      )}
    </div>
  )
}

export default function App() {
  useEffect(() => {
    const style = document.createElement('style')
    style.innerHTML = `
      @keyframes drift { 0% { transform: translateY(0) } 100% { transform: translateY(-60px) } }
    `
    document.head.appendChild(style)
    return () => { document.head.removeChild(style) }
  }, [])

  return (
    <div className="bg-[#1C1C1C] text-[#F5F5F5] min-h-screen">
      <Navbar />
      <Hero />
      <Lore />
      <Characters />
      <Scenes />
      <Features />
      <News />
      <Gallery />
      <Roadmap />
      <Community />
      <Contact />
      <footer className="bg-black/80 py-10 text-center text-[#F5F5F5]/60 font-[Lato]">
        © {new Date().getFullYear()} POVEGLIA • AAA desarrollado en Perú
      </footer>
    </div>
  )
}
