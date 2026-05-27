import { useState, useEffect } from 'react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-jet-black/90 backdrop-blur-md border-b border-white/10 shadow-lg py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img src="/logo-jet.png" alt="CV JET Logo" className="h-11 p-1 saturate-[1.75] contrast-125 drop-shadow-[0_0_12px_rgba(255,90,0,0.5)]" />
            <div>
              <span className="text-xl font-black tracking-wider text-white">CV JET</span>
              <span className="text-[10px] text-jet-gray-300 block tracking-[0.2em] font-medium uppercase mt-0.5">Printing & Design</span>
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8 items-center text-sm font-medium">
            <a href="#tentang" className="text-jet-gray-300 hover:text-white transition-colors">Tentang</a>
            <a href="#layanan" className="text-jet-gray-300 hover:text-white transition-colors">Layanan</a>
            <a href="#produk" className="text-jet-gray-300 hover:text-white transition-colors">Produk</a>
            <a href="#keunggulan" className="text-jet-gray-300 hover:text-white transition-colors">Keunggulan</a>
            <a href="#kontak" className="px-6 py-2.5 bg-white text-jet-black font-bold rounded-full hover:bg-jet-orange hover:text-white transition-all duration-300 shadow-lg">
              Hubungi Kami
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-jet-gray-300 hover:text-white focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-jet-black/95 backdrop-blur-xl border-t border-white/10 px-4 pt-4 pb-6 space-y-2 shadow-2xl">
          <a href="#tentang" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-3 text-white font-medium rounded-lg hover:bg-white/5">Tentang</a>
          <a href="#layanan" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-3 text-white font-medium rounded-lg hover:bg-white/5">Layanan</a>
          <a href="#produk" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-3 text-white font-medium rounded-lg hover:bg-white/5">Produk</a>
          <a href="#keunggulan" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-3 text-white font-medium rounded-lg hover:bg-white/5">Keunggulan</a>
          <a href="#kontak" onClick={() => setMobileMenuOpen(false)} className="block w-full text-center mt-4 px-6 py-3 bg-jet-orange text-white font-bold rounded-lg hover:bg-[#E04D00]">Hubungi Kami</a>
        </div>
      )}
    </nav>
  );
}
