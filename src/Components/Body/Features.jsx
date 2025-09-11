import { features } from '/src/data/features.data.js'

/**
 * Componente para mostrar un elemento individual de característica
 * @param {object} props - Propiedades del componente
 * @param {string} props.number - Número de la característica
 * @param {string} props.title - Título de la característica
 * @param {string} props.description - Descripción de la característica
 * @returns {import('react').JSX.Element}
 */
const FeatureItem = ({ number, title, description }) => (
  <section className="flex flex-col sm:flex-row sm:items-start sm:gap-5 mb-8">
    <div className="flex items-center gap-4 sm:flex-col sm:items-start sm:gap-0">
      <span className="bg-accent text-light px-6 py-2 rounded-full font-semibold mb-[30px] sm:mr-4">
        {number}
      </span>
      <h2 className="text-[20px] font-bold text-primary-bg leading-tight mb-4 sm:hidden">
        {title}
      </h2>
    </div>
    <div>
      <h2 className="hidden sm:block text-[20px] font-bold text-primary-bg leading-tight mb-4">
        {title}
      </h2>
      <p className="md:max-w-[500px] max-w-auto text-paragraph text-[20px] mb-8">
        {description}
      </p>
    </div>
  </section>
)

/**
 * Componente principal para mostrar la lista de características
 * @returns {import('react').JSX.Element}
 */
const Features = () => (
  <div className="md:flex-1 md:ml-4">
    <div>
      {features.map((feature) => (
        <FeatureItem
          key={feature.number}
          number={feature.number}
          title={feature.title}
          description={feature.description}
        />
      ))}
    </div>
  </div>
)

export default Features
