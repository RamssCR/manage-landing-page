/**
 * @returns {import('react').JSX.Element}
 */

export default function Hero() {
  return (
    <div className="flex justify-center">
      <div className="flex-col-reverse items-center justify-center flex md:flex-row w-full md:mx-auto px-8 max-w-auto md:max-w-[1200px] mt-5 md:mt-20 md:items-center md:justify-between">
        <section className="text-center md:text-left max-w-auto md:max-w-[500px]">
          <h1 className="text-[50px] text-center md:text-left font-extrabold text-primary-bg leading-tight mb-6">
            Bring everyone together to build better products.
          </h1>
          <p className="text-gray-400 text-[20px] mb-8">
            Manage makes it simple for software teams to plan day-to-day tasks
            while keeping the larger team goals in view.
          </p>
          <button
            type="button"
            className=" md:block shadow-lg cursor-pointer shadow-red-300 bg-orange-400 hover:bg-orange-500 text-white px-6 py-3 rounded-full font-semibold transition-colors"
          >
            Get Started
          </button>
        </section>

        <section className="relative mt-8 md:mt-3">
          <img
            src="/images/images/illustration-intro.svg"
            alt="Design Illustration"
            className="flex object-contain max-w-auto md:mx-auto"
          />
        </section>
      </div>
    </div>
  )
}
