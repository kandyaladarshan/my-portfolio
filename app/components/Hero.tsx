export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-16 px-4 relative overflow-hidden gaming-grid"
    >
      {/* Background decorative elements */}
      {/* Floating code snippets */}
      <div className="absolute top-24 left-6 code-decoration float-animation opacity-50 hidden lg:block w-64">
        <div className="text-neon-green/40 text-[10px]">// portfolio.ts</div>
        <div><span className="text-neon-purple/60">const</span> <span className="text-neon-blue/50">developer</span> = &#123;</div>
        <div>  <span className="text-neon-green/50">name</span>: <span className="text-amber-400/50">&quot;Sai Darshan K&quot;</span>,</div>
        <div>  <span className="text-neon-green/50">college</span>: <span className="text-amber-400/50">&quot;BIT, Bangalore&quot;</span>,</div>
        <div>  <span className="text-neon-green/50">degree</span>: <span className="text-amber-400/50">&quot;B.E. (2026-2030)&quot;</span></div>
        <div>&#125;;</div>
      </div>

      <div className="absolute bottom-32 right-8 code-decoration float-animation-reverse opacity-40 hidden lg:block w-52">
        <div className="text-neon-green/40 text-[10px]"># skills.py</div>
        <div><span className="text-neon-purple/60">skills</span> = [</div>
        <div>  <span className="text-amber-400/50">&quot;Python&quot;</span>,</div>
        <div>  <span className="text-amber-400/50">&quot;JavaScript&quot;</span>,</div>
        <div>  <span className="text-amber-400/50">&quot;C&quot;</span>,</div>
        <div>  <span className="text-amber-400/50">&quot;IoT&quot;</span></div>
        <div>]</div>
      </div>

      <div className="absolute top-48 right-16 code-decoration float-animation opacity-30 hidden xl:block w-48">
        <div className="text-neon-green/40 text-[10px]">/* main.c */</div>
        <div><span className="text-neon-purple/60">#include</span> <span className="text-amber-400/50">&lt;stdio.h&gt;</span></div>
        <div><span className="text-neon-blue/50">int</span> <span className="text-neon-green/50">main</span>() &#123;</div>
        <div>  <span className="text-neon-blue/50">printf</span>(<span className="text-amber-400/50">&quot;Hello!&quot;</span>);</div>
        <div>  <span className="text-neon-purple/60">return</span> 0;</div>
        <div>&#125;</div>
      </div>

      {/* Laptop SVG illustration - left side */}
      <div className="absolute bottom-16 left-12 hidden lg:block opacity-20 float-animation">
        <svg width="140" height="100" viewBox="0 0 140 100" fill="none">
          {/* Laptop screen */}
          <rect x="15" y="5" width="110" height="70" rx="4" stroke="#00d4ff" strokeWidth="1.5" fill="#0f1629" />
          {/* Screen content - code lines */}
          <line x1="25" y1="20" x2="80" y2="20" stroke="#7c3aed" strokeWidth="1" opacity="0.6" />
          <line x1="25" y1="28" x2="95" y2="28" stroke="#00d4ff" strokeWidth="1" opacity="0.4" />
          <line x1="25" y1="36" x2="70" y2="36" stroke="#39ff14" strokeWidth="1" opacity="0.5" />
          <line x1="25" y1="44" x2="85" y2="44" stroke="#00d4ff" strokeWidth="1" opacity="0.3" />
          <line x1="25" y1="52" x2="60" y2="52" stroke="#7c3aed" strokeWidth="1" opacity="0.6" />
          <line x1="25" y1="60" x2="90" y2="60" stroke="#39ff14" strokeWidth="1" opacity="0.4" />
          {/* Laptop base */}
          <path d="M5 75 L15 75 L15 80 L125 80 L125 75 L135 75 L135 85 C135 88 132 90 129 90 L11 90 C8 90 5 88 5 85 Z" stroke="#00d4ff" strokeWidth="1.5" fill="#141b2d" />
          {/* Keyboard dots */}
          <rect x="30" y="82" width="80" height="4" rx="1" fill="#1a2342" stroke="#2a3a5c" strokeWidth="0.5" />
        </svg>
      </div>

      {/* Monitor SVG - right side */}
      <div className="absolute top-32 left-[70%] hidden xl:block opacity-15 float-animation-reverse">
        <svg width="120" height="110" viewBox="0 0 120 110" fill="none">
          {/* Monitor frame */}
          <rect x="5" y="5" width="110" height="75" rx="4" stroke="#7c3aed" strokeWidth="1.5" fill="#0f1629" />
          {/* Screen content */}
          <rect x="15" y="15" width="90" height="55" rx="2" fill="#0a0e1a" />
          {/* Code lines on screen */}
          <line x1="22" y1="25" x2="65" y2="25" stroke="#00d4ff" strokeWidth="1" opacity="0.5" />
          <line x1="22" y1="33" x2="80" y2="33" stroke="#39ff14" strokeWidth="1" opacity="0.4" />
          <line x1="22" y1="41" x2="55" y2="41" stroke="#7c3aed" strokeWidth="1" opacity="0.5" />
          <line x1="22" y1="49" x2="75" y2="49" stroke="#00d4ff" strokeWidth="1" opacity="0.3" />
          <line x1="22" y1="57" x2="60" y2="57" stroke="#ff006e" strokeWidth="1" opacity="0.4" />
          {/* Stand */}
          <rect x="45" y="80" width="30" height="8" rx="1" fill="#141b2d" stroke="#2a3a5c" strokeWidth="1" />
          <rect x="35" y="88" width="50" height="6" rx="2" fill="#141b2d" stroke="#2a3a5c" strokeWidth="1" />
        </svg>
      </div>

      {/* Glowing orbs background */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-blue/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-neon-purple/5 rounded-full blur-3xl pointer-events-none" />

      {/* Main Hero Content */}
      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="gaming-card rounded-2xl p-8 sm:p-12 neon-box relative scan-line">

          {/* Coding Avatar SVG */}
          <div className="flex justify-center mb-6">
            <div className="relative">
              {/* Avatar sitting at desk */}
              <svg width="180" height="140" viewBox="0 0 180 140" fill="none" className="opacity-80">
                {/* Desk */}
                <rect x="20" y="100" width="140" height="6" rx="2" fill="#1a2342" stroke="#2a3a5c" strokeWidth="1" />
                <rect x="30" y="106" width="4" height="30" fill="#2a3a5c" />
                <rect x="146" y="106" width="4" height="30" fill="#2a3a5c" />

                {/* Laptop on desk */}
                <rect x="55" y="68" width="70" height="32" rx="3" fill="#0f1629" stroke="#00d4ff" strokeWidth="1" />
                {/* Screen glow */}
                <rect x="60" y="72" width="60" height="24" rx="1" fill="#0a0e1a" />
                <line x1="65" y1="78" x2="95" y2="78" stroke="#00d4ff" strokeWidth="1" opacity="0.6" />
                <line x1="65" y1="83" x2="105" y2="83" stroke="#39ff14" strokeWidth="1" opacity="0.5" />
                <line x1="65" y1="88" x2="90" y2="88" stroke="#7c3aed" strokeWidth="1" opacity="0.6" />

                {/* Character body */}
                <ellipse cx="90" cy="45" rx="12" ry="14" fill="#1a2342" stroke="#00d4ff" strokeWidth="1" />
                {/* Headphones */}
                <path d="M78 40 Q78 28 90 28 Q102 28 102 40" stroke="#7c3aed" strokeWidth="2.5" fill="none" />
                <circle cx="78" cy="40" r="4" fill="#7c3aed" opacity="0.8" />
                <circle cx="102" cy="40" r="4" fill="#7c3aed" opacity="0.8" />
                {/* Eyes (screen reflection) */}
                <circle cx="85" cy="43" r="1.5" fill="#00d4ff" />
                <circle cx="95" cy="43" r="1.5" fill="#00d4ff" />
                {/* Smile */}
                <path d="M86 49 Q90 52 94 49" stroke="#00d4ff" strokeWidth="1" fill="none" opacity="0.6" />

                {/* Body / hoodie */}
                <path d="M76 55 Q75 70 70 95 L110 95 Q105 70 104 55" fill="#1a2342" stroke="#00d4ff" strokeWidth="1" />
                {/* Arms typing */}
                <path d="M76 70 L60 90 L70 95" stroke="#00d4ff" strokeWidth="1" fill="none" opacity="0.5" />
                <path d="M104 70 L120 90 L110 95" stroke="#00d4ff" strokeWidth="1" fill="none" opacity="0.5" />

                {/* Coffee mug */}
                <rect x="130" y="88" width="12" height="12" rx="2" fill="#1a2342" stroke="#ff006e" strokeWidth="1" />
                <path d="M142 91 Q148 91 148 95 Q148 99 142 99" stroke="#ff006e" strokeWidth="1" fill="none" />
                {/* Steam */}
                <path d="M134 85 Q136 80 134 76" stroke="#ff006e" strokeWidth="0.8" fill="none" opacity="0.4" />
                <path d="M138 85 Q140 79 138 74" stroke="#ff006e" strokeWidth="0.8" fill="none" opacity="0.3" />
              </svg>
            </div>
          </div>

          {/* Realistic Anime Boy Coder Avatar */}
          <div className="flex justify-center mb-8">
            <div className="photo-frame">
              <div className="w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full bg-gaming-panel border-2 border-gaming-border flex items-center justify-center overflow-hidden shadow-[0_0_35px_rgba(0,212,255,0.2)]">
                <svg width="320" height="320" viewBox="0 0 320 320" fill="none" className="w-full h-full">
                  <defs>
                    {/* Background Radial Glow */}
                    <radialGradient id="cyberSphere" cx="50%" cy="46%" r="54%">
                      <stop offset="0%" stopColor="#0284c7" stopOpacity="0.4" />
                      <stop offset="45%" stopColor="#0f172a" stopOpacity="0.85" />
                      <stop offset="100%" stopColor="#060913" stopOpacity="1" />
                    </radialGradient>

                    {/* Skin Base & Shadows */}
                    <linearGradient id="maleSkinGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#fde0c8" />
                      <stop offset="65%" stopColor="#fcd3b6" />
                      <stop offset="100%" stopColor="#f5ba93" />
                    </linearGradient>
                    <linearGradient id="skinShadow" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#e29f79" />
                      <stop offset="100%" stopColor="#cc835c" />
                    </linearGradient>

                    {/* Screen Reflection Light on Face & Body */}
                    <linearGradient id="monitorBounceLight" x1="0%" y1="100%" x2="0%" y2="0%">
                      <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.5" />
                      <stop offset="50%" stopColor="#00d4ff" stopOpacity="0.15" />
                      <stop offset="100%" stopColor="#00d4ff" stopOpacity="0" />
                    </linearGradient>

                    {/* Anime Boy Hair Shader */}
                    <linearGradient id="maleHairGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#1e293b" />
                      <stop offset="45%" stopColor="#0f172a" />
                      <stop offset="85%" stopColor="#090d16" />
                      <stop offset="100%" stopColor="#0369a1" />
                    </linearGradient>

                    {/* Hair Highlight Sheen */}
                    <linearGradient id="hairSheen" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#38bdf8" stopOpacity="0" />
                      <stop offset="50%" stopColor="#7dd3fc" stopOpacity="0.5" />
                      <stop offset="100%" stopColor="#38bdf8" stopOpacity="0" />
                    </linearGradient>

                    {/* Tech Jacket Shading */}
                    <linearGradient id="jacketBase" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#1e293b" />
                      <stop offset="50%" stopColor="#0f172a" />
                      <stop offset="100%" stopColor="#090d16" />
                    </linearGradient>

                    {/* Anime Boy Eye Iris */}
                    <linearGradient id="maleIrisGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#0284c7" />
                      <stop offset="50%" stopColor="#00d4ff" />
                      <stop offset="100%" stopColor="#a5f3fc" />
                    </linearGradient>

                    {/* Laptop Screen Radiant Glow */}
                    <linearGradient id="laptopDisplayGlow" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#00d4ff" stopOpacity="0.35" />
                      <stop offset="100%" stopColor="#00d4ff" stopOpacity="0.05" />
                    </linearGradient>
                  </defs>

                  {/* Dark Room & Ambient Gaming Atmosphere */}
                  <circle cx="160" cy="160" r="156" fill="url(#cyberSphere)" />

                  {/* Cyber Room Accent Lights & Geometry in Background */}
                  <line x1="40" y1="90" x2="280" y2="90" stroke="#00d4ff" strokeWidth="0.6" strokeOpacity="0.12" />
                  <line x1="40" y1="130" x2="280" y2="130" stroke="#00d4ff" strokeWidth="0.6" strokeOpacity="0.1" />
                  <line x1="100" y1="30" x2="100" y2="200" stroke="#00d4ff" strokeWidth="0.6" strokeOpacity="0.08" />
                  <line x1="220" y1="30" x2="220" y2="200" stroke="#00d4ff" strokeWidth="0.6" strokeOpacity="0.08" />
                  {/* Floating Hexagons */}
                  <polygon points="60,65 68,60 76,65 76,75 68,80 60,75" stroke="#00d4ff" strokeWidth="0.8" fill="none" opacity="0.15" />
                  <polygon points="248,55 258,49 268,55 268,67 258,73 248,67" stroke="#38bdf8" strokeWidth="0.8" fill="none" opacity="0.18" />

                  {/* Desk Surface (Wide Mechanical Battlestation) */}
                  <rect x="20" y="235" width="280" height="12" rx="4" fill="#0f172a" stroke="#1e293b" strokeWidth="1.2" />
                  {/* Neon Cyan Edge Glow on Desk */}
                  <line x1="22" y1="236" x2="298" y2="236" stroke="#00d4ff" strokeWidth="1.2" strokeOpacity="0.6" />

                  {/* --- Anime Boy Back Hair (Spikes & Neck Layers) --- */}
                  <path d="M102 120 Q80 135 78 165 Q90 152 104 150" fill="url(#maleHairGrad)" />
                  <path d="M218 120 Q240 135 242 165 Q230 152 216 150" fill="url(#maleHairGrad)" />
                  <path d="M86 100 Q70 120 74 148 Q84 135 94 132" fill="#090d16" />
                  <path d="M234 100 Q250 120 246 148 Q236 135 226 132" fill="#090d16" />

                  {/* Headphone Metallic Overhead Band */}
                  <path d="M96 90 Q160 48 224 90" stroke="#334155" strokeWidth="6" strokeLinecap="round" fill="none" />
                  <path d="M102 87 Q160 52 218 87" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.9" />

                  {/* --- Broad Shoulders / Techwear Hoodie --- */}
                  <path
                    d="M100 160 Q80 178 50 240 L270 240 Q240 178 220 160 Z"
                    fill="url(#jacketBase)"
                    stroke="#1e293b"
                    strokeWidth="1.5"
                  />
                  {/* Hoodie Shoulder Creases & Fabric Anatomy */}
                  <path d="M84 185 Q70 208 55 238" stroke="#090d16" strokeWidth="2.5" fill="none" />
                  <path d="M236 185 Q250 208 265 238" stroke="#090d16" strokeWidth="2.5" fill="none" />
                  {/* Subtle rim highlight on jacket shoulders */}
                  <path d="M88 178 Q72 205 58 238" stroke="#38bdf8" strokeWidth="0.8" strokeOpacity="0.3" fill="none" />
                  <path d="M232 178 Q248 205 262 238" stroke="#38bdf8" strokeWidth="0.8" strokeOpacity="0.3" fill="none" />

                  {/* High Zipper Collar */}
                  <path
                    d="M120 148 L140 184 L180 184 L200 148 Q160 164 120 148 Z"
                    fill="#1e293b"
                    stroke="#0284c7"
                    strokeWidth="1.2"
                  />
                  {/* Metallic Zipper */}
                  <line x1="160" y1="184" x2="160" y2="238" stroke="#00d4ff" strokeWidth="2" strokeDasharray="3 2" />

                  {/* --- Strong Neck & Adam's Apple (Male Anime) --- */}
                  <path d="M138 135 L138 162 Q160 172 182 162 L182 135 Z" fill="url(#maleSkinGrad)" />
                  {/* Neck Muscle & Shadow */}
                  <path d="M140 140 Q160 152 180 140 L180 155 Q160 168 140 155 Z" fill="url(#skinShadow)" opacity="0.6" />
                  {/* Adam's Apple */}
                  <path d="M157 150 L160 153 L163 150" stroke="#c27d53" strokeWidth="1" strokeLinecap="round" fill="none" />

                  {/* --- Defined Masculine Jawline & Face --- */}
                  <path
                    d="M112 96 Q108 132 132 154 L160 168 L188 154 Q212 132 208 96 Q160 84 112 96 Z"
                    fill="url(#maleSkinGrad)"
                    stroke="#b45309"
                    strokeWidth="0.6"
                  />
                  {/* Jawline Ambient Shadow */}
                  <path d="M132 154 L160 168 L188 154 Q160 162 132 154 Z" fill="url(#skinShadow)" opacity="0.4" />

                  {/* Monitor Bounce Light on Chin and Jaw */}
                  <path
                    d="M126 142 Q160 168 194 142 L188 154 L160 168 L132 154 Z"
                    fill="url(#monitorBounceLight)"
                  />

                  {/* --- Ears & Cyber Gaming Headset --- */}
                  {/* Left Ear */}
                  <path d="M106 108 Q100 114 104 126 Q110 130 114 122 Z" fill="url(#maleSkinGrad)" />
                  {/* Right Ear */}
                  <path d="M214 108 Q220 114 216 126 Q210 130 206 122 Z" fill="url(#maleSkinGrad)" />
                  {/* Left Headset Cup */}
                  <g transform="translate(90, 100)">
                    <rect x="0" y="0" width="18" height="34" rx="9" fill="#0f172a" stroke="#00d4ff" strokeWidth="1.8" />
                    <circle cx="9" cy="17" r="5" fill="#0284c7" />
                    <circle cx="9" cy="17" r="2.5" fill="#a5f3fc" />
                  </g>
                  {/* Right Headset Cup */}
                  <g transform="translate(212, 100)">
                    <rect x="0" y="0" width="18" height="34" rx="9" fill="#0f172a" stroke="#00d4ff" strokeWidth="1.8" />
                    <circle cx="9" cy="17" r="5" fill="#0284c7" />
                    <circle cx="9" cy="17" r="2.5" fill="#a5f3fc" />
                  </g>

                  {/* --- Masculine Anime Nose & Mouth (Focused Coder Expression) --- */}
                  {/* Sharp defined anime nose bridge */}
                  <path d="M160 114 L157 127 L162 127" stroke="#9a3412" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  {/* Nose shadow */}
                  <polygon points="157,123 157,127 162,127" fill="#c27d53" opacity="0.6" />
                  {/* Confident slight smirk / focused mouth */}
                  <path d="M150 140 Q160 144 170 139" stroke="#0f172a" strokeWidth="1.8" strokeLinecap="round" fill="none" />
                  <path d="M152 142 Q160 146 168 142" stroke="#e11d48" strokeWidth="0.8" strokeLinecap="round" fill="none" opacity="0.6" />

                  {/* --- Sharp Masculine Anime Eyes & Focused Brows --- */}
                  {/* Left Eyebrow (slanted, intense concentration) */}
                  <path d="M120 102 Q136 96 148 101" stroke="#0f172a" strokeWidth="2.8" strokeLinecap="round" fill="none" />
                  {/* Right Eyebrow */}
                  <path d="M172 101 Q184 96 200 102" stroke="#0f172a" strokeWidth="2.8" strokeLinecap="round" fill="none" />

                  {/* Left Eye */}
                  <g id="realMaleLeftEye">
                    {/* Eyelid crease */}
                    <path d="M124 105 Q136 101 146 105" stroke="#9a3412" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.7" />
                    {/* Upper sharp lash line */}
                    <path d="M121 110 Q134 105 147 109" stroke="#090d16" strokeWidth="2.6" strokeLinecap="round" fill="none" />
                    {/* Sclera (White) */}
                    <path d="M124 111 Q134 110 145 111 Q142 124 135 125 Q126 123 124 111 Z" fill="#ffffff" />
                    {/* Iris */}
                    <ellipse cx="135" cy="118" rx="6.5" ry="7.5" fill="url(#maleIrisGrad)" />
                    {/* Deep Pupil */}
                    <ellipse cx="135" cy="118" rx="3.2" ry="4" fill="#030712" />
                    {/* Code reflection in iris */}
                    <rect x="131" y="117.5" width="8" height="1.2" fill="#e0f2fe" opacity="0.85" />
                    <rect x="132" y="120" width="5.5" height="1.2" fill="#38bdf8" opacity="0.75" />
                    {/* Specular White Catchlights */}
                    <circle cx="132" cy="115" r="2.2" fill="#ffffff" />
                    <circle cx="137.5" cy="120" r="1.2" fill="#ffffff" />
                    {/* Lower lash line */}
                    <path d="M126 124 Q135 126 143 124" stroke="#090d16" strokeWidth="1.2" strokeLinecap="round" fill="none" />
                  </g>

                  {/* Right Eye */}
                  <g id="realMaleRightEye">
                    {/* Eyelid crease */}
                    <path d="M174 105 Q184 101 196 105" stroke="#9a3412" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.7" />
                    {/* Upper sharp lash line */}
                    <path d="M173 109 Q186 105 199 110" stroke="#090d16" strokeWidth="2.6" strokeLinecap="round" fill="none" />
                    {/* Sclera (White) */}
                    <path d="M175 111 Q186 110 196 111 Q194 124 185 125 Q178 123 175 111 Z" fill="#ffffff" />
                    {/* Iris */}
                    <ellipse cx="185" cy="118" rx="6.5" ry="7.5" fill="url(#maleIrisGrad)" />
                    {/* Deep Pupil */}
                    <ellipse cx="185" cy="118" rx="3.2" ry="4" fill="#030712" />
                    {/* Code reflection in iris */}
                    <rect x="181" y="117.5" width="8" height="1.2" fill="#e0f2fe" opacity="0.85" />
                    <rect x="182" y="120" width="5.5" height="1.2" fill="#38bdf8" opacity="0.75" />
                    {/* Specular White Catchlights */}
                    <circle cx="182" cy="115" r="2.2" fill="#ffffff" />
                    <circle cx="187.5" cy="120" r="1.2" fill="#ffffff" />
                    {/* Lower lash line */}
                    <path d="M177 124 Q185 126 194 124" stroke="#090d16" strokeWidth="1.2" strokeLinecap="round" fill="none" />
                  </g>

                  {/* --- Realistic Layered Anime Boy Haircut (Curtain Fringe & Textured Strands) --- */}
                  <g id="maleHairFront">
                    {/* Main Head Crown Shape */}
                    <path
                      d="M106 95 Q90 60 120 40 Q160 26 200 40 Q230 60 214 95 Q205 60 160 52 Q115 60 106 95 Z"
                      fill="url(#maleHairGrad)"
                    />
                    {/* Top volume spikes */}
                    <path d="M135 44 Q146 22 156 32 Q150 40 144 46" fill="#0284c7" />
                    <path d="M156 34 Q168 20 178 34 Q170 42 162 48" fill="#0369a1" />
                    <path d="M178 36 Q194 26 198 42" fill="#0f172a" />
                    <path d="M120 48 Q108 34 118 52" fill="#0f172a" />

                    {/* Center Curtain Part (revealing forehead and eyebrows cleanly) */}
                    {/* Left curtain sweep */}
                    <path d="M142 54 Q152 75 146 95 Q140 82 134 68 Z" fill="url(#maleHairGrad)" />
                    <path d="M130 58 Q140 85 130 100 Q124 82 120 70 Z" fill="url(#maleHairGrad)" />
                    {/* Left sideburn lock */}
                    <path d="M108 92 Q102 120 108 140 Q114 122 116 100 Z" fill="#090d16" />

                    {/* Right curtain sweep */}
                    <path d="M178 54 Q168 75 174 95 Q180 82 186 68 Z" fill="url(#maleHairGrad)" />
                    <path d="M190 58 Q180 85 190 100 Q196 82 200 70 Z" fill="url(#maleHairGrad)" />
                    {/* Right sideburn lock */}
                    <path d="M212 92 Q218 120 212 140 Q206 122 204 100 Z" fill="#090d16" />

                    {/* Center forehead fringe tip */}
                    <path d="M155 52 Q158 72 160 84 Q162 72 165 52 Z" fill="#0369a1" />

                    {/* Hair Gloss Sheen Across Crown */}
                    <path
                      d="M116 68 Q160 54 204 68 Q160 60 116 68 Z"
                      fill="url(#hairSheen)"
                    />
                  </g>

                  {/* --- Arms & Realistic Male Coder Hands (Typing Flow) --- */}
                  {/* Left Arm Forearm */}
                  <path d="M72 210 Q98 218 128 226" stroke="#0f172a" strokeWidth="16" strokeLinecap="round" />
                  {/* Right Arm Forearm */}
                  <path d="M248 210 Q222 218 192 226" stroke="#0f172a" strokeWidth="16" strokeLinecap="round" />

                  {/* Left Hand Fingers Resting on Keyboard Home Row */}
                  <g id="leftHandMale">
                    <ellipse cx="128" cy="225" rx="11" ry="7" fill="url(#maleSkinGrad)" stroke="#b45309" strokeWidth="0.6" />
                    {/* Fingers articulated */}
                    <rect x="117" y="222" width="4" height="7" rx="2" fill="url(#maleSkinGrad)" stroke="#b45309" strokeWidth="0.5" />
                    <rect x="122" y="220" width="4" height="9" rx="2" fill="url(#maleSkinGrad)" stroke="#b45309" strokeWidth="0.5" />
                    <rect x="127" y="219" width="4" height="10" rx="2" fill="url(#maleSkinGrad)" stroke="#b45309" strokeWidth="0.5" />
                    <rect x="132" y="221" width="4" height="8" rx="2" fill="url(#maleSkinGrad)" stroke="#b45309" strokeWidth="0.5" />
                    {/* Cyan Screen Glow Bounce on Left Knuckles */}
                    <ellipse cx="128" cy="223" rx="9" ry="3" fill="#38bdf8" opacity="0.3" />
                  </g>

                  {/* Right Hand Fingers on Keyboard */}
                  <g id="rightHandMale">
                    <ellipse cx="192" cy="225" rx="11" ry="7" fill="url(#maleSkinGrad)" stroke="#b45309" strokeWidth="0.6" />
                    {/* Fingers articulated */}
                    <rect x="184" y="221" width="4" height="8" rx="2" fill="url(#maleSkinGrad)" stroke="#b45309" strokeWidth="0.5" />
                    <rect x="189" y="219" width="4" height="10" rx="2" fill="url(#maleSkinGrad)" stroke="#b45309" strokeWidth="0.5" />
                    <rect x="194" y="220" width="4" height="9" rx="2" fill="url(#maleSkinGrad)" stroke="#b45309" strokeWidth="0.5" />
                    <rect x="199" y="222" width="4" height="7" rx="2" fill="url(#maleSkinGrad)" stroke="#b45309" strokeWidth="0.5" />
                    {/* Cyan Screen Glow Bounce on Right Knuckles */}
                    <ellipse cx="192" cy="223" rx="9" ry="3" fill="#38bdf8" opacity="0.3" />
                  </g>

                  {/* --- High-End Gaming Laptop with Angled Screen --- */}
                  {/* Laptop Lower Chassis */}
                  <polygon points="90,240 106,220 214,220 230,240" fill="#090d16" stroke="#38bdf8" strokeWidth="1.6" />
                  {/* Backlit Mechanical Key Rows */}
                  <rect x="110" y="223" width="100" height="9" rx="1.5" fill="#0284c7" opacity="0.65" />
                  {/* Glowing Key Grid */}
                  <line x1="114" y1="226" x2="206" y2="226" stroke="#e0f2fe" strokeWidth="1.4" strokeDasharray="4 2" />
                  <line x1="115" y1="229" x2="205" y2="229" stroke="#e0f2fe" strokeWidth="1.4" strokeDasharray="4 2" />
                  {/* Smooth Touchpad */}
                  <rect x="146" y="234" width="28" height="4" rx="1" fill="#1e293b" stroke="#38bdf8" strokeWidth="0.8" />

                  {/* Laptop Display (Tilted at User) */}
                  <rect x="94" y="152" width="132" height="70" rx="4" fill="#030712" stroke="#00d4ff" strokeWidth="1.8" />
                  {/* Inner Screen Display Area */}
                  <rect x="99" y="157" width="122" height="60" rx="2" fill="#080c1a" />
                  {/* Radiant Glow on Screen Surface */}
                  <rect x="99" y="157" width="122" height="60" fill="url(#laptopDisplayGlow)" />

                  {/* Code Editor Header Bar */}
                  <rect x="99" y="157" width="122" height="9" fill="#0f172a" />
                  {/* Window Controls */}
                  <circle cx="104" cy="161.5" r="1.8" fill="#f43f5e" />
                  <circle cx="110" cy="161.5" r="1.8" fill="#eab308" />
                  <circle cx="116" cy="161.5" r="1.8" fill="#22c55e" />
                  {/* Tab Title */}
                  <text x="124" y="163.5" fill="#94a3b8" fontSize="4.5" fontFamily="monospace">main.cpp — BIT</text>

                  {/* Sidebar Folder Explorer Line */}
                  <line x1="116" y1="166" x2="116" y2="217" stroke="#1e293b" strokeWidth="1" />
                  <text x="102" y="174" fill="#38bdf8" fontSize="4" fontFamily="monospace">&gt; src</text>
                  <text x="102" y="181" fill="#64748b" fontSize="4" fontFamily="monospace"># def</text>

                  {/* Code Editor Line Numbers */}
                  <text x="119" y="174" fill="#475569" fontSize="5" fontFamily="monospace">1</text>
                  <text x="119" y="182" fill="#475569" fontSize="5" fontFamily="monospace">2</text>
                  <text x="119" y="190" fill="#475569" fontSize="5" fontFamily="monospace">3</text>
                  <text x="119" y="198" fill="#475569" fontSize="5" fontFamily="monospace">4</text>
                  <text x="119" y="206" fill="#475569" fontSize="5" fontFamily="monospace">5</text>
                  <text x="119" y="214" fill="#475569" fontSize="5" fontFamily="monospace">6</text>

                  {/* Realistic Code Syntax Highlighting */}
                  {/* Line 1: #include <iostream> */}
                  <line x1="126" y1="172.5" x2="152" y2="172.5" stroke="#c084fc" strokeWidth="2.2" strokeLinecap="round" />
                  <line x1="155" y1="172.5" x2="188" y2="172.5" stroke="#38bdf8" strokeWidth="2.2" strokeLinecap="round" />

                  {/* Line 2: int main() { */}
                  <line x1="126" y1="180.5" x2="140" y2="180.5" stroke="#38bdf8" strokeWidth="2.2" strokeLinecap="round" />
                  <line x1="143" y1="180.5" x2="168" y2="180.5" stroke="#4ade80" strokeWidth="2.2" strokeLinecap="round" />

                  {/* Line 3:   const auto dev = "Sai Darshan K"; */}
                  <line x1="130" y1="188.5" x2="150" y2="188.5" stroke="#c084fc" strokeWidth="2.2" strokeLinecap="round" />
                  <line x1="153" y1="188.5" x2="174" y2="188.5" stroke="#f472b6" strokeWidth="2.2" strokeLinecap="round" />
                  <line x1="177" y1="188.5" x2="210" y2="188.5" stroke="#fde047" strokeWidth="2.2" strokeLinecap="round" />

                  {/* Line 4:   build_future(); */}
                  <line x1="130" y1="196.5" x2="182" y2="196.5" stroke="#00d4ff" strokeWidth="2.2" strokeLinecap="round" />

                  {/* Line 5:   return 0; */}
                  <line x1="130" y1="204.5" x2="162" y2="204.5" stroke="#c084fc" strokeWidth="2.2" strokeLinecap="round" />

                  {/* Animated Neon Blinking Cursor */}
                  <rect x="166" y="202" width="2.5" height="6" fill="#00d4ff">
                    <animate attributeName="opacity" values="1;0;1" dur="0.85s" repeatCount="indefinite" />
                  </rect>

                  {/* Mini Tech Decals on Laptop Edge */}
                  <text x="204" y="214" fill="#38bdf8" fontSize="4.5" fontFamily="monospace" opacity="0.8">BIT'30</text>

                  {/* --- Desk Props: Ceramic Coffee Mug with Animated Steam --- */}
                  <g transform="translate(242, 218)">
                    <rect x="0" y="0" width="16" height="17" rx="3" fill="#1e293b" stroke="#38bdf8" strokeWidth="1" />
                    <path d="M16 4 Q21 4 21 8.5 Q21 13 16 13" stroke="#38bdf8" strokeWidth="1.2" fill="none" />
                    <text x="3.5" y="12" fill="#38bdf8" fontSize="7" fontFamily="sans-serif">⚡</text>
                    {/* Realistic Rising Steam */}
                    <path d="M4 -3 Q7 -9 5 -15" stroke="#38bdf8" strokeWidth="1" fill="none" opacity="0.4">
                      <animate attributeName="opacity" values="0.1;0.7;0.1" dur="2s" repeatCount="indefinite" />
                    </path>
                    <path d="M10 -3 Q13 -8 11 -13" stroke="#38bdf8" strokeWidth="1" fill="none" opacity="0.3">
                      <animate attributeName="opacity" values="0.3;0.8;0.3" dur="2.4s" repeatCount="indefinite" />
                    </path>
                  </g>

                  {/* Mini Desk Cyber Plant / Bonsai */}
                  <g transform="translate(36, 219)">
                    <rect x="0" y="5" width="14" height="11" rx="2" fill="#1e293b" stroke="#22c55e" strokeWidth="1" />
                    <path d="M7 5 Q4 -3 1 -6" stroke="#4ade80" strokeWidth="1.5" fill="none" />
                    <path d="M7 5 Q9 -4 14 -4" stroke="#22c55e" strokeWidth="1.5" fill="none" />
                    <path d="M7 5 Q7 -2 6 -9" stroke="#86efac" strokeWidth="1.3" fill="none" />
                  </g>
                </svg>
              </div>
            </div>
          </div>

          {/* Terminal-style intro line */}
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="font-mono text-sm text-neon-green/70">$</span>
            <span className="font-mono text-sm text-gray-500">whoami</span>
          </div>

          {/* BIG highlighted name */}
          <h1 className="text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-display font-black tracking-wider uppercase mb-6 leading-none">
            <span className="bg-gradient-to-r from-neon-blue via-neon-cyan to-neon-purple bg-clip-text text-transparent neon-glow">
              Sai Darshan K
            </span>
          </h1>

          {/* Subtitle with typing effect feel */}
          <div className="flex items-center justify-center gap-2 mb-8">
            <span className="font-mono text-neon-blue/50">&gt;</span>
            <p className="text-lg sm:text-xl text-gray-400 font-mono">
              CS student who loves building web apps
              <span className="inline-block w-2 h-5 bg-neon-blue/70 ml-1 animate-pulse" />
            </p>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-8 py-3 bg-neon-blue/10 text-neon-blue font-semibold font-display tracking-wider uppercase rounded-lg border border-neon-blue/40 hover:bg-neon-blue/20 hover:border-neon-blue/70 hover:shadow-[0_0_20px_rgba(0,212,255,0.2)] hover:-translate-y-0.5 transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
              View My Work
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-3 bg-neon-purple/10 text-neon-purple font-semibold font-display tracking-wider uppercase rounded-lg border border-neon-purple/40 hover:bg-neon-purple/20 hover:border-neon-purple/70 hover:shadow-[0_0_20px_rgba(124,58,237,0.2)] hover:-translate-y-0.5 transition-all duration-300"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Contact Me
            </a>
          </div>

          {/* Status bar at bottom */}
          <div className="mt-8 pt-4 border-t border-gaming-border flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs font-mono text-gray-400">
            <span className="flex items-center gap-1.5 text-gray-300">
              <span className="w-2 h-2 rounded-full bg-neon-green animate-pulse" />
              Available for Internships & Projects
            </span>
            <span className="text-neon-blue/80">🏛️ Bangalore Institute of Technology (BIT)</span>
            <span className="text-neon-cyan/80">🎓 B.E. (2026 - 2030)</span>
          </div>
        </div>
      </div>
    </section>
  );
}
