import testimonials from '../../data/testimonials.data'
import { useState } from 'react'

const FIRST_INDEX = 0
const NEXT_INCREMENT = 1

/**
 * Componente TestimonialsMobile para testimonios en móvil.
 * @returns {import('react').JSX.Element} Componente TestimonialsMobile.
 */

const TestimonialsMobile = () => {
  const [current, setCurrent] = useState(FIRST_INDEX)

  const handleNext = () => {
    if (current === testimonials.length - NEXT_INCREMENT) {
      setCurrent(FIRST_INDEX)
    } else {
      setCurrent(current + NEXT_INCREMENT)
    }
  }

  const handleSelect = (index) => {
    setCurrent(index)
  }

  const testimonial = testimonials[current]

  return (
    <div className="max-w-[90%] md:max-w-md mx-auto bg-background-light rounded-lg p-6 text-center relative">
      <img
        src={testimonial.avatar}
        alt={testimonial.name}
        className="w-16 h-16 rounded-full mx-auto mb-4"
      />
      <p className="text-muted mb-4">"{testimonial.text}"</p>
      <h3 className="font-bold text-primary-bg mb-1">{testimonial.name}</h3>
      <span className="text-muted mb-6 block">{testimonial.role}</span>
      <div className="flex justify-center space-x-3 mb-6">
        {testimonials.map((testimonialItem, id) => (
          <button
            key={testimonialItem.id}
            type="button"
            onClick={() => handleSelect(id)}
            className={`w-3 h-3 rounded-full ${id === current ? 'border-accent bg-accent' : 'bg-background-light'}`}
            aria-label={`Go to testimonial ${testimonialItem.id}`}
          />
        ))}
      </div>
      <button
        type="button"
        onClick={handleNext}
        className="cursor-pointer bg-accent hover:bg-accent text-light px-6 py-3 rounded-full font-semibold transition-colors"
      >
        Get Started
      </button>
    </div>
  )
}

export default TestimonialsMobile
