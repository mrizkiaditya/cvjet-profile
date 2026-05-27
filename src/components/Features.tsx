import React from 'react';

export default function Features() {
  return (
    <section id="keunggulan" className="min-h-screen py-24 bg-jet-white flex flex-col justify-center relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:64px_64px]"></div>
        <div className="absolute -left-40 top-40 w-96 h-96 bg-jet-orange/5 rounded-full blur-[100px]"></div>
        <h2 className="absolute top-20 left-10 text-[15vw] font-black text-jet-black/5 whitespace-nowrap -rotate-6 transform-gpu">WHY US?</h2>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="text-jet-orange font-bold tracking-widest uppercase text-sm block">Keunggulan Utama</span>
          <h2 className="text-5xl md:text-6xl font-black text-jet-black tracking-tight leading-tight">Mencetak Tanpa <br/> Batas, Tanpa Ragu.</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="p-12 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.05)] rounded-[40px] relative overflow-hidden group border border-jet-gray-100 hover:border-jet-orange transition-all duration-500">
            <div className="absolute top-0 right-0 w-32 h-32 bg-jet-orange/10 rounded-bl-full transition-transform duration-500 group-hover:scale-150"></div>
            <div className="text-5xl mb-8 relative z-10">🏅</div>
            <h3 className="text-3xl font-black text-jet-black mb-4 relative z-10">Kualitas Premium</h3>
            <p className="text-jet-gray-500 text-lg leading-relaxed relative z-10">
              Menggunakan mesin berstandar industri dan material pilihan terbaik untuk menghasilkan ketajaman warna dan daya tahan maksimal pada setiap cetakan Anda.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-12 bg-jet-black text-white rounded-[40px] relative overflow-hidden group transform md:-translate-y-8 shadow-[0_30px_60px_rgba(255,90,0,0.15)] border border-jet-gray-800">
            <div className="absolute top-0 right-0 w-32 h-32 bg-jet-orange rounded-bl-full opacity-20 transition-transform duration-500 group-hover:scale-150 group-hover:opacity-100"></div>
            <div className="text-5xl mb-8 relative z-10">⚡</div>
            <h3 className="text-3xl font-black mb-4 relative z-10">Secepat Jet</h3>
            <p className="text-jet-gray-300 text-lg leading-relaxed relative z-10">
              Menghargai deadline Anda adalah prioritas mutlak kami. Proses pengerjaan yang tersistem memastikan pesanan selesai tepat waktu, tanpa kompromi kualitas.
            </p>
            <div className="absolute bottom-0 left-0 w-full h-2 bg-jet-orange transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
          </div>

          {/* Card 3 */}
          <div className="p-12 bg-white shadow-[0_20px_50px_rgba(0,0,0,0.05)] rounded-[40px] relative overflow-hidden group border border-jet-gray-100 hover:border-jet-orange transition-all duration-500">
            <div className="absolute top-0 right-0 w-32 h-32 bg-jet-orange/10 rounded-bl-full transition-transform duration-500 group-hover:scale-150"></div>
            <div className="text-5xl mb-8 relative z-10">🏠</div>
            <h3 className="text-3xl font-black text-jet-black mb-4 relative z-10">Satu Atap</h3>
            <p className="text-jet-gray-500 text-lg leading-relaxed relative z-10">
              Efisien dan sangat praktis. Anda tidak perlu mencari desainer terpisah, kami melayani revisi desain hingga produksi logistik akhir di satu tempat.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
