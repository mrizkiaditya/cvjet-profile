interface ServiceItem {
  title: string;
  desc: string;
  icon: React.ReactNode;
}

export default function Services() {
  const services: ServiceItem[] = [
    {
      title: "Percetakan Universal",
      desc: "Mencetak di berbagai media dan bentuk barang. Mulai dari kertas khusus, kain, hingga material padat lainnya dengan hasil warna yang akurat dan tajam.",
      icon: (
        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
        </svg>
      )
    },
    {
      title: "Desain Grafis",
      desc: "Bingung mau desain apa? Kami siap bantu! Kami membuat desain cetak yang kreatif, menarik, dan sesuai dengan identitas profesional brand Anda.",
      icon: (
        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
        </svg>
      )
    },
    {
      title: "Kustomisasi Produk",
      desc: "Melayani berbagai custom order untuk mewujudkan kebutuhan spesifik Anda. Kami siap mencetak dari barang apapun tanpa batasan kreativitas.",
      icon: (
        <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        </svg>
      )
    }
  ];

  return (
    <section id="layanan" className="min-h-screen py-24 bg-jet-gray-100 flex flex-col justify-center relative overflow-hidden">
      {/* Huge Watermark Background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none overflow-hidden">
        <h2 className="text-[20vw] font-black text-jet-black whitespace-nowrap">SERVICES</h2>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3 lg:pr-10 lg:py-10">
            <span className="text-jet-orange font-bold tracking-widest uppercase text-sm block mb-4">Spesialisasi Kami</span>
            <h2 className="text-5xl lg:text-6xl font-black text-jet-black tracking-tight leading-tight mb-6">
              Solusi <br/> Komprehensif <br/> Satu Atap.
            </h2>
            <p className="text-jet-gray-500 text-lg leading-relaxed mb-8">
              Tidak perlu berpindah vendor. Kami menangani segala kebutuhan visual dan fisik brand Anda dari konsep hingga barang jadi di depan pintu Anda.
            </p>
            <div className="h-1 w-24 bg-jet-black rounded-full"></div>
          </div>

          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((svc, idx) => (
              <div key={idx} className={`bg-white p-10 rounded-[32px] border border-jet-gray-300 hover:border-jet-orange hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 group ${idx === 2 ? 'md:col-span-2 md:flex md:items-center md:gap-8' : ''}`}>
                <div className={`w-20 h-20 bg-jet-black group-hover:bg-jet-orange rounded-2xl flex items-center justify-center mb-8 transition-colors ${idx === 2 ? 'md:mb-0 md:shrink-0' : ''}`}>
                  {svc.icon}
                </div>
                <div>
                  <h3 className="text-2xl font-black text-jet-black mb-4">{svc.title}</h3>
                  <p className="text-jet-gray-500 leading-relaxed">{svc.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
