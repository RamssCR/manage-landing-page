/**
 * @param {Object} footerLinks
 * @returns {import('react').JSX.Element}
 */

const NavSection = ({ footerLinks }) => {
  ;<section className="flex flex-col md:flex-row gap-8 md:gap-16">
    <div className="flex flex-col gap-3">
      {footerLinks.column1.map((link) => (
        <a
          key={link.href}
          href={`#${link.href}`}
          className="text-gray-400 hover:text-white transition-colors text-center md:text-left"
        >
          {link.label}
        </a>
      ))}
    </div>
    <div className="flex flex-col gap-3">
      {footerLinks.column2.map((link) => (
        <a
          key={link.href}
          href={`#${link.href}`}
          className="text-gray-400 hover:text-white transition-colors text-center md:text-left"
        >
          {link.label}
        </a>
      ))}
    </div>
  </section>
}

export default NavSection
