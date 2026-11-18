interface ProjectCardProps {
  name: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  emoji: string;
}

export default function ProjectCard({
  name,
  description,
  techStack,
  githubUrl,
  emoji,
}: ProjectCardProps) {
  return (
    <div className="gaming-card rounded-xl p-6 neon-box flex flex-col h-full group">
      {/* Top bar */}
      <div className="flex items-center gap-2 mb-1 font-mono text-xs text-gray-600">
        <span className="w-2.5 h-2.5 rounded-full bg-neon-pink/60" />
        <span className="w-2.5 h-2.5 rounded-full bg-amber-400/60" />
        <span className="w-2.5 h-2.5 rounded-full bg-neon-green/60" />
        <span className="ml-2">project.exe</span>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-gaming-border mb-4" />

      {/* Project emoji & name */}
      <div className="flex items-center gap-3 mb-3">
        <span className="text-3xl">{emoji}</span>
        <h3 className="font-display text-xl font-bold text-gray-200 tracking-wide uppercase group-hover:text-neon-blue transition-colors">
          {name}
        </h3>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-400 leading-relaxed mb-4 flex-grow">
        {description}
      </p>

      {/* Tech stack tags */}
      <div className="flex flex-wrap gap-2 mb-5">
        {techStack.map((tech) => (
          <span
            key={tech}
            className="skill-tag px-2.5 py-1 text-xs font-mono font-semibold rounded-md"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* GitHub link */}
      <a
        href={githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-5 py-2.5 bg-neon-blue/10 text-neon-blue text-sm font-semibold font-display tracking-wider uppercase rounded-lg border border-neon-blue/30 hover:bg-neon-blue/20 hover:border-neon-blue/60 hover:shadow-[0_0_15px_rgba(0,212,255,0.15)] transition-all duration-200 w-fit"
      >
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
        View on GitHub
      </a>
    </div>
  );
}
