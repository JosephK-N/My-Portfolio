import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import ProjectCarousel from "@/components/ProjectCarousel";

const carouselProjects = [
  {
    id: "1",
    title: "Next.js Full-Stack Portfolio",
    description: "Personal developer portfolio built with Next.js App Router, TypeScript, Zod schema validation, and Resend API integration.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Zod"],
    image: "/projects/portfolio.jpeg",
    link: "https://github.com/JosephK-N",
  },
  {
    id: "2",
    title: "AI Analytics Dashboard",
    description: "Real-time analytics portal featuring automated streaming data, user authorization, and responsive dark mode UI.",
    tags: ["Next.js", "TypeScript", "Zod", "Tailwind CSS"],
    image: "/projects/hero2.jpg",
    link: "https://github.com/JosephK-N",
  },

  /*
  {
    id: "3",
    title: "RESTful API Explorer",
    description: "Interactive API testing and documentation application designed for modern web developers.",
    tags: ["React", "TypeScript", "REST", "Tailwind CSS"],
    image: "/projects/API.jpg",
    link: "https://github.com/JosephK-N",
  },*/
];

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#0B0F19] text-slate-900 dark:text-slate-100 font-sans selection:bg-orange-500 selection:text-white transition-colors duration-200 flex flex-col justify-between">
      <Header />

      <main className="max-w-5xl mx-auto px-6 py-12 space-y-24 w-full">
        {/* HERO SECTION */}
        <section className="text-center space-y-6 pt-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 text-blue-700 dark:text-blue-400 text-xs font-semibold">
            <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse" />
            Available for hire in Namibia & Remote
          </div>

          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-slate-900 dark:text-white leading-tight max-w-3xl mx-auto">
            Crafting scalable web apps with <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-orange-500">modern design</span>.
          </h1>

          <p className="text-slate-600 dark:text-slate-400 text-lg sm:text-xl max-w-2xl mx-auto leading-relaxed">
            Hi, I'm <strong className="text-slate-900 dark:text-white">Joseph KN</strong>. I specialize in building fast, responsive full-stack applications with Nest.js, Next.js, TypeScript, and Tailwind CSS.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href="#contact"
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-7 py-3.5 rounded-xl shadow-md transition duration-200 text-sm"
            >
              Get In Touch
            </a>
            <a
              href="#projects"
              className="bg-white dark:bg-[#111827] hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-300 border border-slate-300 dark:border-slate-800 font-semibold px-7 py-3.5 rounded-xl shadow-sm transition duration-200 text-sm"
            >
              View Projects
            </a>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="space-y-8 border-t border-slate-200 dark:border-slate-800/80 pt-16">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">About Me</h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm max-w-xl mx-auto">
              Passionate software engineer focused on building performant web solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800/80 rounded-2xl p-8 shadow-sm dark:shadow-xl">
            <div className="space-y-4 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
              <p>
                I am a full-stack developer based in <strong className="text-slate-900 dark:text-white">Windhoek, Namibia</strong>. I enjoy turning complex problems into simple, beautiful, and intuitive user experiences.
              </p>
              <p>
                My main tech stack includes <span className="text-orange-600 dark:text-orange-400 font-medium">Next.js 15+</span>, <span className="text-orange-600 dark:text-orange-400 font-medium">TypeScript</span>, <span className="text-orange-600 dark:text-orange-400 font-medium">Tailwind CSS</span>, and <span className="text-orange-600 dark:text-orange-400 font-medium">Server Actions</span> for back-end validation.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 text-xs font-semibold">
              <div className="bg-slate-50 dark:bg-[#0B0F19] border border-slate-200 dark:border-slate-800 p-4 rounded-xl text-center">
                <span className="block text-2xl mb-1">🚀</span>
                <span className="text-slate-900 dark:text-white">Frontend Dev</span>
                <span className="block text-slate-500 font-normal mt-1">React, Next.js, Tailwind</span>
              </div>
              <div className="bg-slate-50 dark:bg-[#0B0F19] border border-slate-200 dark:border-slate-800 p-4 rounded-xl text-center">
                <span className="block text-2xl mb-1">⚡</span>
                <span className="text-slate-900 dark:text-white">Backend APIs</span>
                <span className="block text-slate-500 font-normal mt-1">Node.js, Zod, Nest.js, Resend</span>
              </div>
              <div className="bg-slate-50 dark:bg-[#0B0F19] border border-slate-200 dark:border-slate-800 p-4 rounded-xl text-center">
                <span className="block text-2xl mb-1">🛠️</span>
                <span className="text-slate-900 dark:text-white">Type Safety</span>
                <span className="block text-slate-500 font-normal mt-1">TypeScript & Validation</span>
              </div>
              <div className="bg-slate-50 dark:bg-[#0B0F19] border border-slate-200 dark:border-slate-800 p-4 rounded-xl text-center">
                <span className="block text-2xl mb-1">📍</span>
                <span className="text-slate-900 dark:text-white">Location</span>
                <span className="block text-slate-500 font-normal mt-1">Windhoek, Namibia</span>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECT CAROUSEL SECTION */}
        <section id="projects" className="space-y-8 border-t border-slate-200 dark:border-slate-800/80 pt-16">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">Featured Projects</h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm max-w-xl mx-auto">
              Use the controls below to browse through my work samples.
            </p>
          </div>

          <ProjectCarousel projects={carouselProjects} />
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="space-y-12 border-t border-slate-200 dark:border-slate-800/80 pt-16">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight">Get In Touch</h2>
            <p className="text-slate-600 dark:text-slate-400 text-sm max-w-xl mx-auto">
              Have a project in mind or want to collaborate? Feel free to reach out.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div className="space-y-6">
              <div className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800/80 rounded-2xl p-6 space-y-4 shadow-sm dark:shadow-xl">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-3">Contact Information</h3>
                
                <div className="space-y-3 text-sm text-slate-700 dark:text-slate-300">
                  <div className="flex items-center gap-3">
                    <span className="text-orange-500 text-base">📍</span>
                    <span><strong>Location:</strong> Windhoek, Namibia</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-orange-500 text-base">📧</span>
                    <span><strong>Email:</strong> phjosephkn@gmail.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-orange-500 text-base">📞</span>
                    <span><strong>Phone:</strong> +264 81 8162308</span>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800/80 rounded-2xl overflow-hidden shadow-sm dark:shadow-xl h-64">
                <iframe
                  title="Google Map Windhoek"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117924.32971207908!2d17.01344405!3d-22.56088065!2m3!1f0!2f0!3f0!2m3!1i1024!2i768!4f13.1!3m3!1m2!1s0x1c0b1b51e08927a7%3A0x6a218d6978438258!2sWindhoek%2C%20Namibia!5e0!3m2!1sen!2s!4v1710000000000!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={false}
                  loading="lazy"
                  className="grayscale opacity-90 hover:grayscale-0 hover:opacity-100 transition duration-300"
                />
              </div>
            </div>

            <div className="bg-white dark:bg-[#111827] border border-slate-200 dark:border-slate-800/80 rounded-2xl p-6 shadow-sm dark:shadow-xl space-y-4">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-slate-800 pb-3">Send a Message</h3>
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}