import useToggle from '../../hooks/useToggle'

/**
 * @returns {import('react').JSX.Element}
 */
export default function HamburgerButton({ open = false }) {
  const { active, toggle } = useToggle(open)

  return (
    <button
      type="button"
      onClick={toggle}
      className="md:hidden cursor-pointer z-50"
      aria-label="Toggle menu"
    >
      {active ? (
        <img
          src="./images/icons/icon-close.svg"
          alt="Close menu"
          className="h-6 w-6"
        />
      ) : (
        <img
          src="./images/icons/icon-hamburger.svg"
          alt="Close menu"
          className="h-6 w-6"
        />
      )}
    </button>
  )
}
