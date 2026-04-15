import { ArrowRight } from "lucide-react";

export function GearSection() {
  const products = [
    {
      name: "Performance Polo",
      category: "Apparel",
      price: "$89",
      color: "#EE455F"
    },
    {
      name: "Tour Cap",
      category: "Headwear",
      price: "$45",
      color: "#45B9ED"
    },
    {
      name: "Premium Glove",
      category: "Accessories",
      price: "$32",
      color: "#2D5016"
    }
  ];

  return (
    <section className="relative py-32 bg-white">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <div className="inline-block px-4 py-1.5 bg-[#0d1b28]/5 text-[#0d1b28] text-xs uppercase tracking-wider rounded-full mb-6">
              Wear the Brand
            </div>
            <h2 className="font-['Proxima_Nova'] text-[clamp(2.5rem,8vw,6rem)] leading-[0.95] tracking-tight uppercase">
              Look Good
              <br />
              <span className="text-[#0d1b28]/40">Play Better</span>
            </h2>
          </div>

          <button className="group flex items-center gap-2 text-sm uppercase tracking-wide hover:text-[#EE455F] transition-colors">
            Shop All
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="group relative cursor-pointer"
            >
              {/* Image Container */}
              <div className="relative aspect-[3/4] bg-gradient-to-br from-neutral-100 to-neutral-200 mb-4 overflow-hidden">
                {/* Placeholder with brand pattern */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div
                      className="w-20 h-20 mx-auto mb-4 flex items-center justify-center"
                      style={{ backgroundColor: product.color + '20', border: `2px solid ${product.color}40` }}
                    >
                      <span className="font-['Proxima_Nova'] text-3xl" style={{ color: product.color }}>
                        100
                      </span>
                    </div>
                    <div className="text-sm text-[#0d1b28]/40 uppercase tracking-wider">{product.category}</div>
                  </div>
                </div>

                {/* Hover Overlay */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                  style={{ backgroundColor: product.color }}
                >
                  <span className="text-white uppercase tracking-wider text-sm">Quick View</span>
                </div>

                {/* Corner Accent */}
                <div
                  className="absolute top-0 right-0 w-20 h-20 translate-x-10 -translate-y-10 group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-300"
                  style={{ backgroundColor: product.color }}
                ></div>
              </div>

              {/* Product Info */}
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-['Proxima_Nova'] text-xl uppercase tracking-tight mb-1">
                    {product.name}
                  </h3>
                  <p className="text-sm text-[#0d1b28]/40 uppercase tracking-wide">{product.category}</p>
                </div>
                <div className="font-['Proxima_Nova'] text-2xl">{product.price}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Lifestyle Split Section */}
        <div className="grid lg:grid-cols-2 gap-12 mt-32">
          {/* Left: Image */}
          <div className="relative aspect-[4/5] bg-gradient-to-br from-black to-[#1a1a1a] overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center text-white/20">
                <div className="font-['Proxima_Nova'] text-[8rem] leading-none">100</div>
                <div className="text-sm uppercase tracking-[0.3em]">HundredOut</div>
              </div>
            </div>
            <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-[#EE455F] rounded-full blur-[100px] opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
          </div>

          {/* Right: Content */}
          <div className="flex flex-col justify-center">
            <h3 className="font-['Proxima_Nova'] text-[clamp(2rem,6vw,4rem)] leading-[0.95] tracking-tight uppercase mb-6">
              Apparel for
              <br />
              <span className="text-[#EE455F]">People Who Play</span>
            </h3>
            <p className="text-lg text-[#0d1b28]/60 mb-8 leading-relaxed">
              Golf gear that doesn't take itself too seriously but performs when it counts. Comfortable enough for 18. Bold enough to back up the talk.
            </p>

            <div className="space-y-4 mb-10">
              <div className="flex items-start gap-4">
                <div className="w-1 h-12 bg-[#EE455F] mt-1"></div>
                <div>
                  <h4 className="uppercase tracking-wide mb-1">Designed for Movement</h4>
                  <p className="text-sm text-[#0d1b28]/60">Swing freely without sacrificing style</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-1 h-12 bg-[#45B9ED] mt-1"></div>
                <div>
                  <h4 className="uppercase tracking-wide mb-1">Subtle Branding</h4>
                  <p className="text-sm text-[#0d1b28]/60">If you know, you know</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-1 h-12 bg-[#2D5016] mt-1"></div>
                <div>
                  <h4 className="uppercase tracking-wide mb-1">Wear It Everywhere</h4>
                  <p className="text-sm text-[#0d1b28]/60">From the first tee to the 19th hole</p>
                </div>
              </div>
            </div>

            <button className="self-start px-8 py-4 bg-[#0d1b28] text-white uppercase tracking-wide text-sm hover:bg-[#EE455F] transition-all">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
