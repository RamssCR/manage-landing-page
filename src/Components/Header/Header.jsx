import CTAButton from './CTAButton'
import HamburgerButton from './HamburgerButton'
import NavDesktop from './NavDesktop'
import NavMobile from './NavMobile'
import useToggle from '../../hooks/useToggle'

/** Header component
 * @returns {import('react').JSX.Element}
 */
export default function Header() {
  const { active, toggle } = useToggle(false)

  return (
    <header className="flex flex-row gap-5 md:flex-row items-center justify-between w-full max-w-[1200px] mx-auto mt-10 px-9 py-4 relative">
      <img
        src="./images/images/logo.svg"
        alt="Logo"
        className="block h-5 md:h-8"
      />

      <NavDesktop />

      <div className="hidden md:block">
        <CTAButton />
      </div>

      <HamburgerButton open={active} toggle={toggle} />

      <NavMobile open={active} />
    </header>
  )
}
