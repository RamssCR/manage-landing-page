import brands from '@data/brands.data.js'

/** Componente donde se renderizan las redes sociales
 * @returns {import('react').JSX.Element}
 */

export const BrandsMap = () => (
  <div>
    /** Mapeo de logos
    {brands.map((brand) => (
      <img key={brand.id} src={brand.logo} alt={brand.name} />
    ))}
  </div>
)
