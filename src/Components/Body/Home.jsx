import CTA from './CTA'
import Features from './Features'
import FeaturesTitle from './FeaturesTitle'
import Hero from './Hero'
import Testimonials from './Testimonials'
import TestimonialsMobile from './TestimonialsMobile'

/**
 * Componente Home principal de la página.
 * @returns {import('react').JSX.Element} Componente Home.
 */

const Home = () => (
  <>
    <Hero />
    <div className="flex flex-col md:flex-row md:justify-between text-center md:text-left mt-[100px] md:mt-40 px-8 space-y-16 md:space-y-0 md:gap-[130px] max-w-[1200px] md:mx-auto">
      <FeaturesTitle />
      <Features />
    </div>
    <div className="block md:hidden">
      <TestimonialsMobile />
    </div>
    <div className="hidden md:block">
      <Testimonials />
    </div>
    <CTA />
  </>
)

export default Home
