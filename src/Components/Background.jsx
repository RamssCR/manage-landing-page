/**
 * Componente Background separado.
 * @returns {import('react').JSX.Element} Componente Background.
 */
const Background = () => (
  <img
    className="absolute -top-40 -right-20 -z-10 w-[1000px] h-auto overflow-hidden"
    src="/images/images/bg-tablet-pattern.svg"
    alt="bg"
  />
)

const Background2 = () => (
  <img
    className="absolute top-[1400px] -left-[500px] -z-10 w-[1000px] h-auto"
    src="/images/images/bg-tablet-pattern.svg"
    alt="bg-2"
  />
)

const BackgroundCTA = () => (
  <img
    className="absolute -top-10 right-60 md:right-130 z-10 opacity-10 brightness-150 w-[600px] h-auto"
    src="/images/images/bg-tablet-pattern.svg"
    alt="bg-Cta"
  />
)

export { Background, Background2, BackgroundCTA }
