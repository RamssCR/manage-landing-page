export default function Email() {
  return (
    <section className="flex flex-col justify-between gap-6">
      <div className="flex flex-row justify-center md:justify-between gap-3">
        <input
          className="flex-1 p-3 rounded-[30px] bg-light text-gray-700 placeholder-gray-400"
          type="email"
          placeholder="Updates in your inbox..."
        />
        <button
          type="submit"
          className="shrink-0 cursor-pointer rounded-[30px] px-6 py-3 bg-orange-500 text-white"
        >
          Go
        </button>
      </div>
      <p className="hidden md:block text-center md:text-right text-gray-400">
        Copyright 2020. All Rights Reserved
      </p>
    </section>
  )
}
