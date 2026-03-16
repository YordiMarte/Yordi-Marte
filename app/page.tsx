import Navbar from "@/components/Navbar"

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto px-6">

      <Navbar />

      <section className="mt-24">

        <h1 className="text-4xl font-bold">
          hey, Yordi here!
        </h1>

        <p className="text-gray-400 mt-4 max-w-xl">
          I{}m a Software Engineer focused on backend infrastructure,
          distributed systems and scalable APIs.
        </p>

      </section>

      <section className="mt-20 grid gap-6 md:grid-cols-2">
      </section>

    </main>
  )
}