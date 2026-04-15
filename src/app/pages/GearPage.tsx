import gearImg from "../../imports/mainCover_LATEST_v2.png";

export function GearPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative py-32 bg-[#0d1b28] text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-[#EE455F] rounded-full blur-[150px] opacity-10"></div>
          <div className="absolute bottom-1/4 left-1/4 w-[500px] h-[500px] bg-[#45B9ED] rounded-full blur-[150px] opacity-8"></div>
        </div>

        <div className="relative max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-1.5 bg-white/10 text-white text-xs uppercase tracking-wider rounded-full mb-6">
              Gear
            </div>
            <h1 className="font-['Proxima_Nova'] font-black text-[clamp(3rem,10vw,7rem)] leading-[0.9] tracking-tight uppercase mb-8">
              Rep The
              <br />
              <span className="text-[#EE455F]">Movement</span>
            </h1>
            <p className="text-2xl text-white/70 max-w-2xl mb-12">
              Golf gear that doesn't take itself too seriously but performs when it counts.
            </p>
            <button className="px-8 py-4 bg-[#EE455F] text-white uppercase tracking-wide hover:bg-[#d63d54] transition-colors">
              Shop Now
            </button>
          </div>
        </div>
      </section>

      {/* Featured Gear */}
      <section className="py-32 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="font-['Proxima_Nova'] text-5xl uppercase tracking-tight mb-6">
                Performance. Style. Attitude.
              </h2>
              <p className="text-xl text-[#0d1b28]/60 leading-relaxed">
                From the course to the clubhouse, gear that performs and looks good doing it.
              </p>
            </div>
            <div className="relative aspect-[4/3] bg-[#0d1b28]/5 overflow-hidden">
              <img src={gearImg} alt="HundredOut Gear" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
