import navLinks from '../../data/navLinks.data'

/** Navdesktop component
 * @returns {import('react').JSX.Element}
 */
export default function NavDesktop() {
  return (
    <nav className="hidden md:block">
      <ul className="flex space-x-8 text-primary-bg text-[15px] font-medium">
        {navLinks.map(({ href, label }) => (
          <li key={href}>
            <a href={href} className="hover:text-accent transition-colors">
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
