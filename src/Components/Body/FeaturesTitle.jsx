/**
 * Componente FeaturesTitle para el título de la sección de características.
 * @returns {import('react').JSX.Element} Componente FeaturesTitle.
 */
export default function FeaturesTitle() {
  return (
    <section>
      <div className="md:max-w-[400px]">
        <h1 className="text-[35px] text-9xl font-extrabold text-primary-bg leading-tight mb-6">
          What's different about Manage?
        </h1>
        <p className="text-paragraph text-[18px] mb-8">
          Manage provides all the functionality your team needs, without the
          complexity. Our software is tailor-made for modern digital product
          teams.
        </p>
      </div>
    </section>
  )
}
