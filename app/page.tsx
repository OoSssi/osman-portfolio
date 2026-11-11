export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <nav className="flex justify-between items-center px-8 py-6 max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold">
          Osman<span className="text-blue-400"></span>
        </h1>

        <div className="flex gap-6 text-gray-300">
          <a href="#about">Hakkımda</a>
          <a href="#skills">Yetenekler</a>
          <a href="#projects">Projeler</a>
        </div>
      </nav>

      <section className="max-w-6xl mx-auto px-8 py-32">
        <p className="text-blue-400 mb-4">
          MERHABA, BEN OSMAN
        </p>

        <h2 className="text-5xl md:text-7xl font-bold leading-tight">
          Web geliştirme dünyasına
          <br />
          <span className="text-blue-400">hoş geldin.</span>
        </h2>

        <p className="text-gray-400 mt-8 max-w-xl text-lg">
          Modern web teknolojileriyle kullanıcı
          dostu ve işlevsel dijital deneyimler
          geliştirmeyi öğreniyorum.
        </p>

        <a
          href="#projects"
          className="inline-block mt-8 bg-blue-600 hover:bg-blue-500 px-7 py-3 rounded-lg"
        >
          Projelerimi keşfet
        </a>
      </section>

      <section id="about" className="max-w-6xl mx-auto px-8 py-16">
        <h2 className="text-3xl font-bold mb-5">Hakkımda</h2>
        <p className="text-gray-400 leading-8">
          Yazılım geliştirme alanında kendimi
          geliştiriyor, yeni teknolojiler öğreniyor
          ve projeler üretiyorum.
        </p>
      </section>

      <section id="skills" className="max-w-6xl mx-auto px-8 py-16">
        <h2 className="text-3xl font-bold mb-8">Teknolojiler</h2>
        <div className="flex flex-wrap gap-4">
          {["HTML", "CSS", "JavaScript", "React", "Next.js"].map(
            (skill) => (
              <span
                key={skill}
                className="bg-slate-800 border border-slate-700 px-5 py-3 rounded-lg"
              >
                {skill}
              </span>
            )
          )}
        </div>
      </section>

      <section id="projects" className="max-w-6xl mx-auto px-8 py-16">
        <h2 className="text-3xl font-bold mb-5">Projelerim</h2>
        <p className="text-gray-400">
          Yakında burada geliştirdiğim projeler yer alacak.
        </p>
      </section>

      <footer className="text-center text-gray-500 py-10 border-t border-slate-800">
        © 2026 Osman Demir | Kişisel Portföy
      </footer>
    </main>
  );
}
