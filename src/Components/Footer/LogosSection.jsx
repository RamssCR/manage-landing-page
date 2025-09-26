import brands from '../../data/brands.data'

/** Componente donde se renderizan las redes sociales
 * @returns {import('react').JSX.Element}
 */
export const BrandsMap = () => (
  <section className="flex flex-col gap-10 md:gap-0 items-center md:justify-between">
    <div>
      <img src="./images/images/logo.svg" alt="logo" />
    </div>
    <div className="flex">
      {brands.map((brand) => (
        <img key={brand.id} src={brand.logo} alt={brand.name} />
      ))}
    </div>
  </section>
)

export default BrandsMap
