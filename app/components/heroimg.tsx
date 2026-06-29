export default function Heroimg() {
  return (
    <section className="relative w-full bg-black py-20">

      {/* Floating Chat Card */}
      <div className="w-full flex justify-center px-16 mb-10">
        <div className="relative p-[1px] rounded-2xl w-full max-w-3xl"
          style={{ background: "linear-gradient(163deg, rgb(255,137,24) 0%, rgb(0,0,0) 40%, rgb(0,152,243) 100%)" }}>
          <div className="bg-[#0a0a0a] rounded-2xl p-8">

            {/* Top row - GPT 5.5 */}
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center gap-2 border border-white/20 rounded-lg px-4 py-2">
                <span className="text-white text-base">GPT 5.5</span>
                <span className="text-white/40 text-base">▾</span>
              </div>
              <div className="border border-white/20 rounded-lg px-4 py-2">
                <span className="text-white/40 text-base">🌐</span>
              </div>
            </div>

            {/* Input text */}
            <p className="text-white text-xl mb-8">
              Create CRM contact from emails
            </p>

            {/* Bottom row */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <button className="text-white/60 text-sm border border-white/10 rounded-lg px-4 py-2">Chat</button>
                <button className="text-white/60 text-sm border border-white/10 rounded-lg px-4 py-2">Launch Workflow</button>
                <button className="text-white/60 text-sm border border-white/10 rounded-lg px-4 py-2">Data Analysis</button>
              </div>

              {/* Send button */}
              <div className="relative inline-block">
                <span className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-[3px] bg-gradient-to-r from-transparent via-orange-400 to-transparent rounded-full z-20"/>
                <div className="p-[1px] rounded-xl bg-gradient-to-r from-orange-500 via-black to-blue-500">
                  <button className="relative px-5 py-2 rounded-[11px] bg-black text-white text-sm font-medium overflow-hidden group">
                    <span className="block transition-all duration-300 group-hover:-translate-y-6 group-hover:opacity-0">✦ Send</span>
                    <span className="absolute inset-0 flex items-center justify-center transition-all duration-300 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">✦ Send</span>
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* Hero Dashboard Image */}
      <div className="w-full px-16">
        <img
          src="https://framerusercontent.com/images/FcJPSxu5QRR0s0hFrNnbIBqvac.png"
          alt="Hero Dashboard"
          className="w-full max-w-6xl mx-auto rounded-2xl block"
        />
      </div>

    </section>
  )
}