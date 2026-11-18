import ProjectCard from "./ProjectCard";

const projects = [
  {
    name: "Portfolio Website",
    description:
      "My personal portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features a gaming-themed dark design with neon glow effects and responsive layout.",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com/kandyaladarshan",
    emoji: "🌐",
  },
  {
    name: "IoT Weather Station",
    description:
      "A weather monitoring system using ESP32 and sensors to collect temperature, humidity, and pressure data. Displays real-time data on an LCD and sends it to a web dashboard.",
    techStack: ["Arduino", "ESP32", "C++", "HTML"],
    githubUrl: "https://github.com/kandyaladarshan",
    emoji: "🌤️",
  },
  {
    name: "Python Automation Scripts",
    description:
      "A collection of Python scripts for automating everyday tasks — file organization, web scraping, email notifications, and data processing.",
    techStack: ["Python", "BeautifulSoup", "Pandas"],
    githubUrl: "https://github.com/kandyaladarshan",
    emoji: "🤖",
  },
  {
    name: "Student Grade Tracker",
    description:
      "A C programming project that lets students input their grades, calculates GPA, and generates a formatted report card with performance trends.",
    techStack: ["C", "File I/O", "Data Structures"],
    githubUrl: "https://github.com/kandyaladarshan",
    emoji: "📊",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 relative gaming-grid">
      {/* Background glow */}
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-neon-blue/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Title */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 font-mono text-sm text-neon-blue/60 mb-3">
            <span className="text-neon-green">$</span> ls ./projects
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-wider uppercase">
            <span className="bg-gradient-to-r from-neon-blue to-neon-cyan bg-clip-text text-transparent">
              My Projects
            </span>
          </h2>
          <div className="w-24 h-0.5 bg-gradient-to-r from-neon-blue to-neon-cyan mx-auto mt-3 rounded-full" />
          <p className="mt-4 text-gray-500 font-mono text-sm">
            // Here are some things I&apos;ve built and worked on
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.name} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
