"use client";

import { useState, FormEvent } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    alert(
      `Thanks for reaching out, ${formData.name}! 🎉\n(This form isn't connected to a backend yet.)`
    );
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 px-4 relative gaming-grid">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-neon-purple/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Title */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 font-mono text-sm text-neon-blue/60 mb-3">
            <span className="text-neon-green">$</span> open contact.sh
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-wider uppercase">
            <span className="bg-gradient-to-r from-neon-purple to-neon-pink bg-clip-text text-transparent">
              Get in Touch
            </span>
          </h2>
          <div className="w-24 h-0.5 bg-gradient-to-r from-neon-purple to-neon-pink mx-auto mt-3 rounded-full" />
          <p className="mt-4 text-gray-500 font-mono text-sm">
            // Have a question or want to work together?
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Contact Form */}
          <div className="gaming-card rounded-xl p-6 sm:p-8 neon-box">
            {/* Terminal header */}
            <div className="flex items-center gap-2 mb-1 font-mono text-xs text-gray-600">
              <span className="w-2.5 h-2.5 rounded-full bg-neon-pink/60" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400/60" />
              <span className="w-2.5 h-2.5 rounded-full bg-neon-green/60" />
              <span className="ml-2">send_message.sh</span>
            </div>
            <div className="w-full h-px bg-gaming-border mb-6" />

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-semibold text-gray-400 mb-1 font-mono"
                >
                  <span className="text-neon-blue">const</span> name =
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-2.5 rounded-lg border border-gaming-border bg-gaming-dark/80 text-gray-200 focus:border-neon-blue/60 focus:ring-1 focus:ring-neon-blue/30 outline-none transition-all text-sm font-mono placeholder-gray-600"
                  placeholder='"Your Name"'
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-400 mb-1 font-mono"
                >
                  <span className="text-neon-blue">const</span> email =
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-2.5 rounded-lg border border-gaming-border bg-gaming-dark/80 text-gray-200 focus:border-neon-blue/60 focus:ring-1 focus:ring-neon-blue/30 outline-none transition-all text-sm font-mono placeholder-gray-600"
                  placeholder='"you@example.com"'
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-gray-400 mb-1 font-mono"
                >
                  <span className="text-neon-blue">const</span> message =
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="w-full px-4 py-2.5 rounded-lg border border-gaming-border bg-gaming-dark/80 text-gray-200 focus:border-neon-blue/60 focus:ring-1 focus:ring-neon-blue/30 outline-none transition-all text-sm font-mono resize-none placeholder-gray-600"
                  placeholder='"Write your message here..."'
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-neon-blue/10 text-neon-blue font-bold font-display tracking-wider uppercase rounded-lg border border-neon-blue/40 hover:bg-neon-blue/20 hover:border-neon-blue/70 hover:shadow-[0_0_20px_rgba(0,212,255,0.2)] transition-all duration-300"
              >
                ⚡ Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-6">
            {/* Email */}
            <div className="gaming-card rounded-xl p-6 neon-box">
              <h3 className="font-display text-lg font-bold text-gray-200 tracking-wide uppercase mb-3">
                📧 Email Me
              </h3>
              <a
                href="mailto:kandyaladarshan@gmail.com"
                className="text-neon-blue hover:text-neon-cyan font-mono text-sm underline underline-offset-4 transition-colors"
              >
                kandyaladarshan@gmail.com
              </a>
            </div>

            {/* Social Links */}
            <div className="gaming-card rounded-xl p-6 neon-box">
              <h3 className="font-display text-lg font-bold text-gray-200 tracking-wide uppercase mb-4">
                🔗 Find Me Online
              </h3>
              <div className="space-y-3">
                <a
                  href="https://github.com/kandyaladarshan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-2.5 rounded-lg border border-transparent hover:border-gaming-border hover:bg-gaming-dark/50 transition-all group"
                >
                  <svg
                    className="w-5 h-5 text-gray-500 group-hover:text-neon-blue transition-colors"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  <span className="text-sm font-medium text-gray-400 group-hover:text-gray-200 transition-colors">
                    GitHub
                  </span>
                  <span className="ml-auto text-xs font-mono text-gray-600 group-hover:text-neon-blue/50 transition-colors">
                    @kandyaladarshan
                  </span>
                </a>

                <a
                  href="https://www.linkedin.com/in/sai-darshan-k-bit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-2.5 rounded-lg border border-transparent hover:border-gaming-border hover:bg-gaming-dark/50 transition-all group"
                >
                  <svg
                    className="w-5 h-5 text-gray-500 group-hover:text-neon-blue transition-colors"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  <span className="text-sm font-medium text-gray-400 group-hover:text-gray-200 transition-colors">
                    LinkedIn
                  </span>
                  <span className="ml-auto text-xs font-mono text-gray-600 group-hover:text-neon-blue/50 transition-colors">
                    Sai Darshan K
                  </span>
                </a>

                <a
                  href="https://www.instagram.com/darshan.kandyala"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-2.5 rounded-lg border border-transparent hover:border-gaming-border hover:bg-gaming-dark/50 transition-all group"
                >
                  <svg
                    className="w-5 h-5 text-gray-500 group-hover:text-neon-pink transition-colors"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                  <span className="text-sm font-medium text-gray-400 group-hover:text-gray-200 transition-colors">
                    Instagram
                  </span>
                  <span className="ml-auto text-xs font-mono text-gray-600 group-hover:text-neon-pink/50 transition-colors">
                    @darshan.kandyala
                  </span>
                </a>
              </div>
            </div>

            {/* Quote */}
            <div className="gaming-card rounded-xl p-5 border-neon-purple/20">
              <div className="flex items-center gap-2 font-mono text-xs text-gray-600 mb-2">
                <span className="text-neon-green">&gt;</span> echo $MOTTO
              </div>
              <p className="font-display text-lg text-neon-purple/80 text-center tracking-wide neon-glow-purple">
                &quot;Let&apos;s build something awesome together!&quot; 🚀
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
