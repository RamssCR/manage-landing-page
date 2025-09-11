/**
 * Componente CTA para llamada a la acción.
 * @returns {import('react').JSX.Element} Componente CTA.
 */

import { BackgroundCTA } from '@Components/Background'

export default function CTA() {
  return (
    <section className="bg-accent text-light py-16 mt-20 relative overflow-hidden">
      <BackgroundCTA />
      <div className="max-w-[1200px] mx-auto px-8 flex flex-col md:flex-row items-center justify-between relative z-10">
        <h2 className="text-[40px] font-extrabold mb-6 md:mb-0 md:w-1/2 text-center md:text-left">
          Simplify how your team works today.
        </h2>
        <button
          type="button"
          className="cursor-pointer bg-light text-accent px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors md:w-auto w-full"
        >
          Get Started
        </button>
      </div>
    </section>
  )
}
