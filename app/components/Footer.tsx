export default function Footer() {
  return (
    <footer className="py-8 px-4 border-t border-gaming-border bg-gaming-dark">
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex items-center justify-center gap-2 mb-2">
          <span className="font-display text-sm text-neon-blue tracking-wider">&lt;/&gt;</span>
          <p className="text-sm text-gray-500">
            Designed & built by{" "}
            <span className="font-bold text-neon-blue">Sai Darshan K</span>
          </p>
        </div>
        <p className="text-xs text-gray-600 font-mono">
          © 2026 Sai Darshan K // All rights reserved
        </p>
      </div>
    </footer>
  );
}
