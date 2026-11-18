const technicalSkills = [
  {
    category: "C Programming",
    icon: "⚙️",
    color: "from-neon-blue/20 to-neon-blue/5",
    borderColor: "border-neon-blue/30",
    glowColor: "hover:shadow-[0_0_15px_rgba(0,212,255,0.15)]",
    skills: ["Basics, loops, arrays & functions", "Pointers & structures", "Problem-solving"],
  },
  {
    category: "Python Programming",
    icon: "🐍",
    color: "from-neon-green/20 to-neon-green/5",
    borderColor: "border-neon-green/30",
    glowColor: "hover:shadow-[0_0_15px_rgba(57,255,20,0.15)]",
    skills: ["Basic syntax", "Automation", "Data handling & mini-projects"],
  },
  {
    category: "Web Development",
    icon: "🌐",
    color: "from-neon-purple/20 to-neon-purple/5",
    borderColor: "border-neon-purple/30",
    glowColor: "hover:shadow-[0_0_15px_rgba(124,58,237,0.15)]",
    skills: ["HTML", "CSS", "JavaScript"],
  },
  {
    category: "Electronics & IoT",
    icon: "🔌",
    color: "from-neon-pink/20 to-neon-pink/5",
    borderColor: "border-neon-pink/30",
    glowColor: "hover:shadow-[0_0_15px_rgba(255,0,110,0.15)]",
    skills: ["Arduino & ESP32", "Sensors & circuits", "Embedded systems"],
  },
];

const professionalSkills = [
  { skill: "Communication", why: "Express ideas confidently", emoji: "🗣️" },
  { skill: "Public Speaking", why: "Present projects", emoji: "🎤" },
  { skill: "Leadership", why: "Manage teams", emoji: "👑" },
  { skill: "Teamwork", why: "Work on group projects", emoji: "🤝" },
  { skill: "Problem-solving", why: "Handle technical challenges", emoji: "🧩" },
  { skill: "Time Management", why: "Balance academics & skills", emoji: "⏰" },
  { skill: "Critical Thinking", why: "Develop innovative ideas", emoji: "💡" },
];

export default function About() {
  return (
    <section id="about" className="py-20 px-4 relative gaming-grid">
      {/* Background glow */}
      <div className="absolute top-0 left-1/3 w-96 h-96 bg-neon-purple/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Title */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 font-mono text-sm text-neon-blue/60 mb-3">
            <span className="text-neon-green">$</span> cat about.md
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-wider uppercase">
            <span className="bg-gradient-to-r from-neon-blue to-neon-purple bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="w-24 h-0.5 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto mt-3 rounded-full" />
        </div>

        {/* Bio card */}
        <div className="max-w-2xl mx-auto mb-16">
          <div className="gaming-card rounded-xl p-6 sm:p-8 neon-box">
            <div className="flex items-start gap-3 mb-3">
              <span className="font-mono text-neon-green text-sm">&gt;</span>
              <span className="font-mono text-neon-blue/50 text-sm">README.md</span>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              Hi! I&apos;m <span className="font-bold text-neon-blue neon-glow">Sai Darshan K</span>,
              currently pursuing my <span className="text-neon-cyan font-semibold">B.E. (Bachelor of Engineering)</span> at{" "}
              <span className="text-neon-blue font-semibold">Bangalore Institute of Technology (BIT)</span>, batch of{" "}
              <span className="text-amber-400 font-semibold font-mono">2026 – 2030</span>.
            </p>
            <p className="text-gray-400 text-base leading-relaxed">
              I&apos;m passionate about building modern web applications, tinkering with IoT circuits, and solving algorithmic problems. From writing foundational C code to designing full-stack systems, I&apos;m always excited to push technical limits and turn bold ideas into code. 🚀
            </p>

            {/* Education Badge */}
            <div className="mt-6 pt-5 border-t border-gaming-border/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 bg-gaming-dark/60 p-4 rounded-lg border border-neon-blue/20">
              <div className="flex items-center gap-3">
                <span className="text-3xl">🏛️</span>
                <div>
                  <h4 className="font-display font-bold text-gray-200 text-sm tracking-wide">
                    Bachelor of Engineering (B.E.)
                  </h4>
                  <p className="text-xs text-neon-blue font-mono">
                    Bangalore Institute of Technology (BIT)
                  </p>
                </div>
              </div>
              <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/30">
                2026 – 2030
              </span>
            </div>
          </div>
        </div>

        {/* Technical Skills */}
        <div className="mb-16">
          <h3 className="font-display text-2xl font-bold text-gray-300 text-center mb-8 tracking-wide uppercase">
            ⚡ Technical Skills
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {technicalSkills.map((group) => (
              <div
                key={group.category}
                className={`gaming-card rounded-xl p-5 border ${group.borderColor} ${group.glowColor} transition-all duration-300`}
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-2xl">{group.icon}</span>
                  <h4 className="font-display font-bold text-gray-200 text-sm tracking-wide uppercase">
                    {group.category}
                  </h4>
                </div>
                <ul className="space-y-2">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="flex items-start gap-2 text-sm text-gray-400"
                    >
                      <span className="text-neon-blue mt-0.5 font-mono text-xs">&gt;</span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Professional Skills */}
        <div>
          <h3 className="font-display text-2xl font-bold text-gray-300 text-center mb-8 tracking-wide uppercase">
            🎯 Professional Skills
          </h3>
          <div className="max-w-4xl mx-auto">
            <div className="gaming-card rounded-xl p-6 sm:p-8 neon-box">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {professionalSkills.map((item) => (
                  <div
                    key={item.skill}
                    className="flex items-center gap-3 p-3 rounded-lg bg-gaming-dark/50 border border-gaming-border/50 hover:border-neon-blue/30 hover:bg-neon-blue/5 transition-all duration-200"
                  >
                    <span className="text-2xl">{item.emoji}</span>
                    <div>
                      <p className="font-semibold text-gray-200 text-sm">
                        {item.skill}
                      </p>
                      <p className="text-xs text-gray-500">{item.why}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
