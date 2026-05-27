export default function Hero() {
  return (
    <section className="relative min-h-screen bg-jet-black flex items-center pt-20">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 -right-1/4 w-[600px] h-[600px] bg-jet-orange/10 rounded-full blur-[120px]"></div>
        <div className="absolute -bottom-1/4 -left-1/4 w-[500px] h-[500px] bg-jet-gray-500/10 rounded-full blur-[100px]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-12 lg:py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Hero Text */}
          <div className="space-y-8 animate-slide-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-jet-orange/30 bg-jet-orange/10 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-jet-orange animate-pulse"></span>
              <span className="text-xs font-bold tracking-widest text-jet-orange uppercase">Est. 2013 | Profesional Printing</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.1] tracking-tight">
              Solusi <br />
              <span className="text-gradient">Cetak Premium</span> <br />
              Bisnis Anda.
            </h1>
            
            <p className="text-lg sm:text-xl text-jet-gray-300 max-w-lg leading-relaxed">
              Kami memberikan kualitas cetak tanpa kompromi. Dari konsep awal hingga hasil akhir, semua ditangani dengan kecepatan dan presisi tinggi.
            </p>
            
            <div className="flex flex-wrap gap-4 pt-4">
              <a href="#produk" className="px-8 py-4 bg-jet-orange text-white font-bold rounded-full hover:bg-[#E04D00] hover:shadow-[0_0_20px_rgba(255,90,0,0.4)] transition-all duration-300 transform hover:-translate-y-1">
                Eksplorasi Produk
              </a>
              <a href="/ComPro-CVJET.pdf" download className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-full hover:bg-white/10 hover:border-white/20 transition-all duration-300 flex items-center gap-2 backdrop-blur-md">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                Unduh Profil PDF
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-12 border-t border-white/10 mt-12">
              <div>
                <p className="text-3xl font-black text-white">10+</p>
                <p className="text-xs text-jet-gray-500 uppercase tracking-wider mt-1">Tahun Pengalaman</p>
              </div>
              <div>
                <p className="text-3xl font-black text-white">3k+</p>
                <p className="text-xs text-jet-gray-500 uppercase tracking-wider mt-1">Proyek Selesai</p>
              </div>
              <div>
                <p className="text-3xl font-black text-white">100%</p>
                <p className="text-xs text-jet-gray-500 uppercase tracking-wider mt-1">Kepuasan Klien</p>
              </div>
            </div>
          </div>

          {/* Hero Visual */}
          <div className="relative animate-slide-up delay-200 hidden lg:block">
            <div className="absolute inset-0 bg-gradient-to-tr from-jet-orange/20 to-transparent rounded-3xl blur-2xl transform rotate-3"></div>
            <div className="relative glass-panel rounded-3xl p-8 overflow-hidden aspect-square flex flex-col justify-between border-jet-gray-500/30 group">
              <img src="/hero-image.png" alt="Modern Offset Printing Facility" className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-lighten transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-jet-black via-jet-black/50 to-transparent"></div>
              
              <div className="flex justify-between items-start z-10">
                <div className="w-12 h-12 rounded-full bg-jet-orange flex items-center justify-center text-white font-bold text-xl shadow-[0_0_20px_rgba(255,90,0,0.5)]">J</div>
                <div className="px-3 py-1 rounded-full bg-black/50 backdrop-blur-md text-xs font-bold text-white border border-white/10 tracking-widest uppercase">
                  Premium Facility
                </div>
              </div>
              <div className="z-10 mt-auto">
                <h3 className="text-3xl font-black text-white mb-2">Mesin Pilihan Terkini</h3>
                <p className="text-jet-gray-300 text-sm mb-4">Dilengkapi dengan mesin berpresisi tinggi untuk warna tajam di setiap media cetak.</p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-2 py-1 bg-jet-orange/20 border border-jet-orange/30 text-jet-orange text-[10px] font-bold uppercase tracking-wider rounded backdrop-blur-sm">Sablon</span>
                  <span className="px-2 py-1 bg-jet-orange/20 border border-jet-orange/30 text-jet-orange text-[10px] font-bold uppercase tracking-wider rounded backdrop-blur-sm">Offset</span>
                  <span className="px-2 py-1 bg-jet-orange/20 border border-jet-orange/30 text-jet-orange text-[10px] font-bold uppercase tracking-wider rounded backdrop-blur-sm">Digital Printing</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
