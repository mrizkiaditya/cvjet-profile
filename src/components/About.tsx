export default function About() {
  return (
    <section id="tentang" className="min-h-screen py-24 bg-jet-white relative flex flex-col justify-center overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-jet-gray-100 skew-x-12 translate-x-20 hidden lg:block"></div>
      <div className="absolute top-40 left-10 w-64 h-64 border-[40px] border-jet-gray-100 rounded-full opacity-50 blur-xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 relative z-10">
            <span className="text-jet-orange font-bold tracking-widest uppercase text-sm block">Siapa Kami?</span>
            <h2 className="text-5xl md:text-6xl font-black text-jet-black leading-tight tracking-tight">
              Berkomitmen pada <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-jet-black to-jet-gray-500">Kualitas & Integritas.</span>
            </h2>
            <p className="text-xl text-jet-gray-500 leading-relaxed">
              Didirikan dengan visi untuk menjadi mitra visual terbaik, CV JET memberikan layanan end-to-end—mulai dari tahap konsep dan desain grafis, hingga hasil akhir produksi cetak yang presisi.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
               <div className="p-5 bg-white shadow-xl shadow-jet-gray-100/50 rounded-2xl border-l-4 border-jet-orange w-48">
                  <p className="text-4xl font-black text-jet-black mb-1">10+</p>
                  <p className="text-[10px] text-jet-gray-500 uppercase tracking-widest font-bold">Tahun Pengalaman</p>
               </div>
               <div className="p-5 bg-white shadow-xl shadow-jet-gray-100/50 rounded-2xl border-l-4 border-jet-black w-48">
                  <p className="text-4xl font-black text-jet-black mb-1">100%</p>
                  <p className="text-[10px] text-jet-gray-500 uppercase tracking-widest font-bold">Garansi Kualitas</p>
               </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-[4/5] rounded-[40px] overflow-hidden shadow-2xl relative bg-jet-black group">
               <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-jet-orange/40 via-jet-black to-jet-black transition-transform duration-700 group-hover:scale-110"></div>
               <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:20px_20px]"></div>
               
               {/* Real Photo Placeholder */}
               <img src="/about-image.png" alt="Premium Printing Stationery" className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-lighten transition-transform duration-700 group-hover:scale-105" />
               <div className="absolute inset-0 bg-gradient-to-t from-jet-black via-jet-black/40 to-transparent"></div>

               <div className="absolute bottom-8 left-8 right-8 p-6 glass-panel rounded-3xl border-white/10 backdrop-blur-2xl">
                  <p className="text-white font-bold text-lg mb-2">Eksekusi Visual Akurat</p>
                  <p className="text-jet-gray-300 text-sm leading-relaxed">Lebih dari sekadar mencetak, kami menerjemahkan ide brilian Anda menjadi medium fisik dengan ketajaman warna yang presisi.</p>
               </div>
            </div>
            
            {/* Floating Element */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-jet-orange rounded-full mix-blend-multiply filter blur-2xl opacity-40 animate-pulse"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-jet-gray-500 rounded-full mix-blend-multiply filter blur-2xl opacity-40 animate-pulse delay-700"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
