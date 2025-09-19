/** Componente donde se renderizan las redes sociales
 * @returns {import('react').JSX.Element}
 */
export default function LogosSection() {
  return (
    <section className="flex flex-col-reverse md:flex-col items-center gap-10 md:justify-between">
      <img
        className="filter brightness-0 invert"
        src="./images/images/logo.svg"
        alt="Manage logo"
      />
      <div className="flex justify-between w-[300px] md:w-[170px]">
        <img
          className="w-8 h-8 md:w-6 md:h-6"
          src="./images/icons/icon-facebook.svg"
          alt="facebook"
        />
        <img
          className="w-8 h-8 md:w-6 md:h-6"
          src="./images/icons/icon-youtube.svg"
          alt="youtube"
        />
        <img
          className="w-8 h-8 md:w-6 md:h-6"
          src="./images/icons/icon-twitter.svg"
          alt="twitter"
        />
        <img
          className="w-8 h-8 md:w-6 md:h-6"
          src="./images/icons/icon-pinterest.svg"
          alt="pinterest"
        />
        <img
          className="w-8 h-8 md:w-6 md:h-6"
          src="./images/icons/icon-instagram.svg"
          alt="instagram"
        />
      </div>
    </section>
  )
}
