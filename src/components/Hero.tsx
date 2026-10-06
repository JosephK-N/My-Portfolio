export default function Hero() {
  return (
    <section className="py-20 text-center">
      <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl text-slate-900">
        Hi, I'm <span className="text-blue-600">Your Name</span>
      </h1>
      <p className="mt-6 text-lg leading-8 text-slate-600 max-w-2xl mx-auto">
        Full-stack software engineer specializing in building fast, scalable, and responsive web applications.
      </p>
      <div className="mt-8 flex justify-center gap-x-4">
        <a
          href="#projects"
          className="rounded-md bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 transition"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="rounded-md bg-slate-100 px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-200 transition"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
}