/**
 * @returns {import('react').JSX.Element}
 */

export default function HamburgerButton({ open, setOpen }) {
  return (
    <button
      type="button"
      onClick={() => setOpen(!open)}
      className="md:hidden cursor-pointer z-50"
      aria-label="Toggle menu"
    >
      {open ? (
        <img
          src="./images/icons/icon-close.svg"
          alt="Close menu"
          className="h-6 w-6"
        />
      ) : (
        <img
          src="./images/icons/icon-hamburger.svg"
          alt="Open menu"
          className="h-6 w-6"
        />
      )}
    </button>
  )
}
