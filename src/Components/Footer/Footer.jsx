import Email from './Email'
import LogosSection from './LogosSection'
import NavSection from './NavSection'
import { footerLinks } from '../../data/footerLinks.data.js'

/**  Componente Footer.
 * @returns {import('react').JSX.Element}
 */
export default function Footer() {
  return (
    <footer className="md:h-[300px] flex items-center justify-center bg-footer-bg w-full">
      <div className="w-4/5 flex flex-col-reverse gap-12 md:flex-row py-12 md:py-6 justify-center md:justify-between">
        <p className="block md:hidden text-center md:text-right text-paragraph">
          Copyright 2020. All Rights Reserved
        </p>
        <LogosSection />
        <NavSection footerLinks={footerLinks} />
        <Email />
      </div>
    </footer>
  )
}
