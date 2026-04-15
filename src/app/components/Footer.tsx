
export function Footer() {
  return (
    <footer className="relative bg-[#0d1b28] text-white pt-12 pb-8 border-t border-white/10">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-8">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-[#EE455F] rounded flex items-center justify-center">
                <span className="text-white font-['Proxima_Nova'] text-xl tracking-wider">100</span>
              </div>
              <span className="font-['Proxima_Nova'] text-2xl tracking-tight uppercase">HundredOut</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Golf with more action, more banter, and more to play for.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="#"
                className="w-10 h-10 border border-white/20 flex items-center justify-center hover:border-[#EE455F] hover:text-[#EE455F] transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="4" y="4" width="12" height="12" rx="2"/>
                  <circle cx="10" cy="10" r="3"/>
                  <circle cx="14" cy="6" r="0.5" fill="currentColor"/>
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 border border-white/20 flex items-center justify-center hover:border-[#EE455F] hover:text-[#EE455F] transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M16 6L10 10L4 6" strokeLinecap="square"/>
                  <path d="M4 6L10 2L16 6L10 14L4 6Z" strokeLinejoin="miter"/>
                </svg>
              </a>
              <a
                href="#"
                className="w-10 h-10 border border-white/20 flex items-center justify-center hover:border-[#EE455F] hover:text-[#EE455F] transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="3" y="5" width="14" height="10" rx="1"/>
                  <path d="M8 10L12 8V12L8 10Z" fill="currentColor" stroke="none"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Product Column */}
          <div>
            <h4 className="font-['Proxima_Nova'] text-lg uppercase tracking-tight mb-4">Product</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">App Features</a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">Pricing</a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">Tournaments</a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">Download</a>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-['Proxima_Nova'] text-lg uppercase tracking-tight mb-4">Company</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">About</a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">Blog</a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">Careers</a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">Press</a>
              </li>
            </ul>
          </div>

          {/* Support Column */}
          <div>
            <h4 className="font-['Proxima_Nova'] text-lg uppercase tracking-tight mb-4">Support</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">Help Center</a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">Contact</a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">Privacy</a>
              </li>
              <li>
                <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">Terms</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            © 2026 HundredOut. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-white/40 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/40 hover:text-white text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-white/40 hover:text-white text-sm transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
