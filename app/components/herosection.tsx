export default function Hero() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-black">

      <video
        src="https://framerusercontent.com/assets/Bax1SXv4b9QI33bMvkicABKnI.mp4"
        autoPlay loop muted playsInline
        className="absolute top-0 right-0 h-full w-[100%] object-cover"
      />

      
      <div className="absolute inset-0 bg-black/40"/>
      <div className="relative z-10 px-45 pt-28 pb-20">

        
        <div className="inline-block p-[2px] rounded-full bg-gradient-to-r from-orange-500 via-black to-blue-500 mb-3">
          <div className="bg-black rounded-full px-4 py-1">
            <span className="text-white text-xs font-semibold tracking-widest uppercase">
              Supercharge Your AI Workflows
            </span>
          </div>
        </div>

        
        <h1 className="text-6xl font-bold text-white leading-tight mb-6 max-w-lg">
          Automate Your AI Workflows with AI Agent
        </h1>

        
        <p className="text-white/100 text-lg max-w-[37%] mb-10">
          Connect your favorite apps, set triggers and watch AI handle the rest - no coding required. Get up and running in minutes.
        </p>

        
        <div className="flex items-center gap-4">

          
          <div className="relative inline-block">
        <span className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-[3px] bg-gradient-to-r from-transparent via-orange-400 to-transparent rounded-full z-20"/>
        <div className="p-[1px] rounded-xl bg-gradient-to-r from-orange-500 via-black to-blue-500">
         <button className="relative px-6 py-3 rounded-[11px] bg-black text-white font-medium overflow-hidden group">
        <span className="block transition-all duration-400 group-hover:-translate-y-6 group-hover:opacity-0">Get Started - Free</span>
        <span className="absolute inset-0 flex items-center justify-center transition-all duration-300 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">Get Started - Free</span>
        </button>
        </div>
        </div>

          
          <button className="relative px-6 py-3 rounded-xl border border-white/20 bg-black/50 text-white font-medium overflow-hidden group hover:bg-white/10 transition-all duration-300">
            <span className="block transition-all duration-300 group-hover:-translate-y-6 group-hover:opacity-0">View Pricing</span>
            <span className="absolute inset-0 flex items-center justify-center transition-all duration-300 translate-y-6 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">View Pricing</span>
          </button>

        </div>
      </div>
     
    </section>
  )
}