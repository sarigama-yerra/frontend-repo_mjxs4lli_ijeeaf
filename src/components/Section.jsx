import { motion } from 'framer-motion'

export default function Section({ id, title, subtitle, children, dark = false }) {
  return (
    <section id={id} className={`${dark ? 'bg-[#1C1C1C]' : 'bg-[#112426]'} relative text-[#F5F5F5]`}
    >
      <div className="max-w-7xl mx-auto px-6 py-24 sm:py-28 lg:py-32">
        {title && (
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-20% 0px' }}
            transition={{ duration: 0.6 }}
            className="font-[Cinzel] text-3xl sm:text-4xl lg:text-5xl tracking-wide mb-2"
          >
            {title}
          </motion.h2>
        )}
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-[Lato] text-[#F5F5F5]/80 max-w-3xl"
          >
            {subtitle}
          </motion.p>
        )}
        <div className="mt-10">
          {children}
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(50%_60%_at_50%_40%,transparent,rgba(0,0,0,0.4),#000)]" />
    </section>
  )
}
