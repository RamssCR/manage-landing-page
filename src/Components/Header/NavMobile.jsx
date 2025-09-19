import { AnimatePresence, motion } from 'framer-motion'
import navLinks from './navLinks.data'

/** Navmobile component
 * @returns {import('react').JSX.Element}
 */
export default function NavMobile({ open }) {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black z-30 md:hidden"
          />

          <motion.nav
            initial={{ opacity: 0, translateY: -20 }}
            animate={{ opacity: 1, translateY: 0 }}
            exit={{ opacity: 0, translateY: -20 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="absolute rounded-[15px] z-40 top-16 left-1/2 -translate-x-1/2
                       max-w-[350px] w-full bg-white shadow-lg md:hidden"
          >
            <ul className="flex flex-col items-center space-y-6 py-6 text-primary-bg text-[15px] font-medium">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <a
                    href={href}
                    className="hover:text-accent transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  )
}
