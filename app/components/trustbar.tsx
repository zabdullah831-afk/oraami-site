export default function TrustBar() {
  return (
    <div className="w-full bg-black py-16">

      {/* Text */}
      <p className="text-white/100 text-xl text-center mb-8">
        Trusted by 150,000+ users worldwide
      </p>

      {/* Scrolling logos */}
      <div className="overflow-hidden max-w-7xl mx-auto">
        <div className="flex gap-12 animate-marquee">

          {/* First set */}
            <div className="flex items-center gap-2 shrink-0">
            <img src="/01_spinner.svg" alt="logo1" className="h-12 opacity-40 grayscale"/>
            <span className="text-white/40 text-xl font-bold">Logoipsum</span>
            </div>

            <div className="flex items-center gap-2 shrink-0">
            <img src="/02_business.svg" alt="logo2" className="h-12 opacity-40 grayscale"/>
            <span className="text-white/40 text-xl font-bold">business</span>
            </div>

            <div className="flex items-center gap-2 shrink-0">
            <img src="/03_cloud.svg" alt="logo3" className="h-12 opacity-40 grayscale"/>
            <span className="text-white/40 text-xl font-bold">application</span>
            </div>

            <div className="flex items-center gap-2 shrink-0">
            <img src="/04_startup_arrow.svg" alt="logo4" className="h-12 opacity-40 grayscale"/>
            <span className="text-white/40 text-xl font-bold">startup</span>
            </div>

            <div className="flex items-center gap-2 shrink-0">
            <img src="/05_striped_circle.svg" alt="logo5" className="h-12 opacity-40 grayscale"/>
            <span className="text-white/40 text-xl font-bold">Logoipsum</span>
            </div>

            <div className="flex items-center gap-2 shrink-0">
            <img src="/06_circle_mark.svg" alt="logo6" className="h-12 opacity-40 grayscale"/>
            <span className="text-white/40 text-xl font-bold">company</span>
            </div>

          {/* Second set - duplicate for infinite loop */}
          
            <div className="flex items-center gap-2 shrink-0">
            <img src="/01_spinner.svg" alt="logo1" className="h-12 opacity-40 grayscale"/>
            <span className="text-white/40 text-xl font-bold">Logoipsum</span>
            </div>

            <div className="flex items-center gap-2 shrink-0">
            <img src="/02_business.svg" alt="logo2" className="h-12 opacity-40 grayscale"/>
            <span className="text-white/40 text-xl font-bold">business</span>
            </div>

            <div className="flex items-center gap-2 shrink-0">
            <img src="/03_cloud.svg" alt="logo3" className="h-12 opacity-40 grayscale"/>
            <span className="text-white/40 text-xl font-bold">application</span>
            </div>

            <div className="flex items-center gap-2 shrink-0">
            <img src="/04_startup_arrow.svg" alt="logo4" className="h-12 opacity-40 grayscale"/>
            <span className="text-white/40 text-xl font-bold">startup</span>
            </div>

            <div className="flex items-center gap-2 shrink-0">
            <img src="/05_striped_circle.svg" alt="logo5" className="h-12 opacity-40 grayscale"/>
            <span className="text-white/40 text-xl font-bold">Logoipsum</span>
            </div>

            <div className="flex items-center gap-2 shrink-0">
            <img src="/06_circle_mark.svg" alt="logo6" className="h-12 opacity-40 grayscale"/>
            <span className="text-white/40 text-xl font-bold">company</span>
            </div>
        </div>
      </div>

    </div>
  )
}