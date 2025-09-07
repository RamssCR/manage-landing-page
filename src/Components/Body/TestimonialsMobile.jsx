import testimonials from './testimonials.data'
import { useState } from 'react'

/**
 * @returns {import('react').JSX.Element}
 */

const FIRST_INDEX = 0
const NEXT_INCREMENT = 1

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
    <div className="max-w-[90%] md:max-w-md mx-auto bg-gray-200 rounded-lg p-6 text-center relative">
      <img
        src={testimonial.avatar}
        alt={testimonial.name}
        className="w-16 h-16 rounded-full mx-auto mb-4"
      />
      <p className="text-gray-600 mb-4">"{testimonial.text}"</p>
      <h3 className="font-bold text-primary-bg mb-1">{testimonial.name}</h3>
      <span className="text-gray-400 mb-6 block">{testimonial.role}</span>
      <div className="flex justify-center space-x-3 mb-6">
        {testimonials.map((testimonialItem, index) => (
          <button
            key={testimonialItem.id}
            type="button"
            onClick={() => handleSelect(index)}
            className={`w-3 h-3 rounded-full ${index === current ? 'border-orange-400 bg-orange-400' : 'bg-gray-50'}`}
            aria-label={`Go to testimonial ${testimonialItem.id}`}
          />
        ))}
      </div>
      <button
        type="button"
        onClick={handleNext}
        className="cursor-pointer bg-orange-400 hover:bg-orange-500 text-white px-6 py-3 rounded-full font-semibold transition-colors"
      >
        Get Started
      </button>
    </div>
  )
}

export default TestimonialsMobile
