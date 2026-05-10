export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
          Coming Soon
        </h1>

        <p className="mt-6 text-gray-400 text-lg md:text-xl max-w-xl mx-auto">
          We’re working on something amazing. Stay tuned for the launch.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <button className="bg-white text-black px-6 py-3 rounded-2xl font-semibold hover:bg-gray-200 transition">
            Notify Me
          </button>

          <button className="border border-gray-700 px-6 py-3 rounded-2xl hover:border-white transition">
            Learn More
          </button>
        </div>
      </div>
    </main>
  );
}
