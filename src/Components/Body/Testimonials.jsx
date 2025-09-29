import testimonials from '@data/testimonials.data.json'

/**
 * @typedef {object} Testimonial
 * @property {number|string} id - id único
 * @property {string} avatar - URL del avatar del autor
 * @property {string} name - Nombre de la persona
 * @property {string} role - Rol o cargo de la persona
 * @property {string} text - Texto del testimonio
 */

/**
 * Componente 'Testimonials'
 * @returns {import('react').JSX.Element}
 * @example
 * <TestimonialS />
 */
export default function Testimonials() {
  return (
    <section className="testimonials mt-20">
      <h2 className="text-center text-[35px] font-extrabold text-primary-bg mb-12">
        What they've said
      </h2>
      <div
        className="flex flex-col space-y-8 lg:flex-row max-w-screen md:gap-3 md:space-y-0 justify-center px-8"
        id="testimonials-container"
      >
        {testimonials.map(({ id, name, role, avatar, text }) => (
          <div
            key={id}
            className="relative text-center max-w-[600px] mx-auto bg-secondary-bg rounded-lg p-6 pt-12"
          >
            <img
              src={avatar}
              alt={name}
              className="w-16 h-16 rounded-full mx-auto mb-4 absolute -top-8 left-1/2 transform -translate-x-1/2"
            />
            <p className="text-paragraph mb-4">"{text}"</p>
            <h3 className="font-bold text-primary-bg">{name}</h3>
            <span className="text-paragraph">{role}</span>
          </div>
        ))}
      </div>
      <div className="text-center mt-12">
        <button
          type="button"
          className="cursor-pointer shadow-lg shadow-shadow bg-accent hover:bg-accent text-light px-6 py-3 rounded-full font-semibold transition-colors"
        >
          Get Started
        </button>
      </div>
    </section>
  )
}
