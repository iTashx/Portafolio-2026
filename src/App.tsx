
import { angelData } from './data/angel';

export default function App() {
  const { personal, socials, skills, experience, hobbies } = angelData;
  return (
    <main className="bg-[#0a0a0a] text-gray-200 min-h-screen p-6 md:p-12 lg:p-20 font-sans">
      {/* HERO SECTION */}
      <section className="text-center md:text-left max-w-4xl mx-auto mb-16">
        <h1 className="text-5xl md:text-6xl font-bold mb-4">{personal.name}</h1>
        <p className="text-xl text-gray-400 mb-2">{personal.headline}</p>
        <p className="text-lg mb-4">{personal.age} años – {personal.location}</p>
        <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start mt-6">
          <a href={socials.github} target="_blank" rel="noopener noreferrer" className="bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-2 px-6 rounded transition">
            GitHub
          </a>
          <a href={socials.kick} target="_blank" rel="noopener noreferrer" className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-6 rounded transition">
            Kick
          </a>
          <a href={socials.youtubeMain} target="_blank" rel="noopener noreferrer" className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded transition">
            YouTube 1
          </a>
          <a href={socials.youtubeSec} target="_blank" rel="noopener noreferrer" className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-6 rounded transition">
            YouTube 2
          </a>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl font-semibold mb-4 border-b border-gray-700 pb-2">Sobre Mí</h2>
        <p className="text-lg leading-relaxed">{personal.bio}</p>
      </section>

      {/* SKILLS SECTION */}
      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl font-semibold mb-6 border-b border-gray-700 pb-2">Stack Técnico</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="bg-[#1a1d2e] p-4 rounded-lg border border-gray-700">
              <h3 className="text-xl font-medium mb-3 capitalize text-cyan-300">{category}</h3>
              <ul className="space-y-1">
                {items.map((skill: string) => (
                  <li key={skill} className="text-gray-300">• {skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section className="max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl font-semibold mb-6 border-b border-gray-700 pb-2">Experiencia y Proyectos</h2>
        <ul className="space-y-6">
          {experience.map((exp, idx) => (
            <li key={idx} className="border-l-4 border-cyan-600 pl-4">
              <h4 className="text-2xl font-medium text-cyan-300 mb-1">{exp.title}</h4>
              <p className="text-gray-300 leading-relaxed">{exp.desc}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* HOBBIES SECTION */}
      <section className="max-w-4xl mx-auto mb-12">
        <h2 className="text-3xl font-semibold mb-4 border-b border-gray-700 pb-2">Intereses Extra</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-300">
          {hobbies.map((hobby, idx) => (
            <li key={idx}>{hobby}</li>
          ))}
        </ul>
      </section>
    </main>
  );
}
