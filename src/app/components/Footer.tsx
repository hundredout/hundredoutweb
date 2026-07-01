import { Link } from "react-router-dom";

const exploreLinks = [
  { label: "App", to: "/app" },
  { label: "Gear", to: "/gear" },
  { label: "Club", to: "/club" },
  { label: "Download", to: "/download" },
];

const companyLinks = [
  { label: "About", to: "/about" },
  { label: "Partnerships", to: "/partnerships" },
];

const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/hundredout" },
  { label: "YouTube", href: "https://www.youtube.com/@hundredout" },
  { label: "TikTok", href: "https://www.tiktok.com/@hundredout" },
  { label: "Facebook", href: "https://www.facebook.com/hundredout" },
  { label: "X", href: "https://twitter.com/hundredout" },
];

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
                <span className="text-white font-[var(--font-display)] font-semibold text-xl tracking-wider">100</span>
              </div>
              <span className="font-[var(--font-display)] font-semibold text-2xl tracking-tight uppercase">HundredOut</span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              Golf with more action, more banter, and more to play for.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://www.instagram.com/hundredout"
                target="_blank"
                rel="noreferrer"
                aria-label="HundredOut on Instagram"
                className="w-10 h-10 border border-white/20 flex items-center justify-center hover:border-[#EE455F] hover:text-[#EE455F] transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="4" y="4" width="12" height="12" rx="2"/>
                  <circle cx="10" cy="10" r="3"/>
                  <circle cx="14" cy="6" r="0.5" fill="currentColor"/>
                </svg>
              </a>
              <a
                href="mailto:info@hundredout.com"
                aria-label="Email HundredOut"
                className="w-10 h-10 border border-white/20 flex items-center justify-center hover:border-[#EE455F] hover:text-[#EE455F] transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M16 6L10 10L4 6" strokeLinecap="square"/>
                  <path d="M4 6L10 2L16 6L10 14L4 6Z" strokeLinejoin="miter"/>
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@hundredout"
                target="_blank"
                rel="noreferrer"
                aria-label="HundredOut on YouTube"
                className="w-10 h-10 border border-white/20 flex items-center justify-center hover:border-[#EE455F] hover:text-[#EE455F] transition-colors"
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="3" y="5" width="14" height="10" rx="1"/>
                  <path d="M8 10L12 8V12L8 10Z" fill="currentColor" stroke="none"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Explore Column */}
          <div>
            <h4 className="font-[var(--font-display)] font-semibold text-lg uppercase tracking-tight mb-4">Explore</h4>
            <ul className="space-y-3">
              {exploreLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-white/60 hover:text-white text-sm transition-colors">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-[var(--font-display)] font-semibold text-lg uppercase tracking-tight mb-4">Company</h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-white/60 hover:text-white text-sm transition-colors">{link.label}</Link>
                </li>
              ))}
              <li>
                <a href="mailto:info@hundredout.com" className="text-white/60 hover:text-white text-sm transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Follow Column */}
          <div>
            <h4 className="font-[var(--font-display)] font-semibold text-lg uppercase tracking-tight mb-4">Follow</h4>
            <ul className="space-y-3">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-white/60 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            © 2026 HundredOut. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <a
              href="/legal/HundredOut-Privacy-Policy.pdf"
              target="_blank"
              rel="noreferrer"
              className="text-white/40 hover:text-white text-sm transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="/legal/HundredOut-Terms-of-Use.pdf"
              target="_blank"
              rel="noreferrer"
              className="text-white/40 hover:text-white text-sm transition-colors"
            >
              Terms of Use
            </a>
            <a href="mailto:info@hundredout.com" className="text-white/40 hover:text-white text-sm transition-colors">info@hundredout.com</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
