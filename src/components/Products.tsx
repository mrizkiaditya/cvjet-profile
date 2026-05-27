interface ProductItem {
  name: string;
  desc: string;
}

export default function Products() {
  const officeProducts: ProductItem[] = [
    { name: "Kartu Nama", desc: "Representasi profesional bisnis Anda dengan kertas premium." },
    { name: "Kop Surat Resmi", desc: "Kertas custom dengan logo terintegrasi untuk korespondensi." },
    { name: "Map Folder", desc: "Map dokumen custom untuk kesan presentasi mewah." },
    { name: "Amplop Perusahaan", desc: "Tersedia berbagai ukuran dengan cetakan logo instansi." },
    { name: "ID Card & Lanyard", desc: "Tanda pengenal elegan untuk karyawan dan acara." },
    { name: "Stempel Otomatis", desc: "Stempel flash warna berkualitas tinggi." }
  ];

  const merchandiseProducts: ProductItem[] = [
    { name: "Mug & Botol Minum", desc: "Cetak gelas, tumbler eksklusif untuk souvenir." },
    { name: "Seragam & Pakaian", desc: "Kaos acara, kemeja kerja, hingga jaket dengan bordir presisi." },
    { name: "Tas Kanvas & Tas Besar/Kecil", desc: "Tote bag kustom untuk seminar atau kebutuhan ritel." },
    { name: "Premium Paper Bag", desc: "Tas kertas tebal elegan dengan laminasi doff/glossy." },
    { name: "Payung Promosi", desc: "Payung golf atau lipat dengan cetak sablon logo." },
    { name: "Undangan & Buku", desc: "Cetak undangan acara eksklusif dan buku catatan custom." }
  ];

  return (
    <section id="produk" className="min-h-screen py-24 bg-jet-black text-white relative overflow-hidden flex flex-col justify-center">
      {/* Complex Geometric Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-[800px] h-full bg-jet-black-light -skew-x-12 transform origin-top-right hidden lg:block border-l border-white/5"></div>
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-jet-orange/20 to-transparent"></div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-jet-orange/5 rounded-full blur-[100px]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="text-center mb-24 space-y-4">
          <span className="text-jet-orange font-bold tracking-widest uppercase text-sm block">Katalog Produk</span>
          <h2 className="text-5xl md:text-6xl font-black tracking-tight">Apa yang Bisa Kami Buat?</h2>
          <p className="text-jet-gray-300 max-w-2xl mx-auto text-lg">Dari keperluan administratif hingga barang promosi massal, kami memastikan setiap item diproduksi dengan presisi tinggi.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Office Products */}
          <div className="space-y-8">
            <div className="flex items-center gap-6 pb-6 border-b border-white/10">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-4xl border border-white/5 shadow-xl">🗂️</div>
              <div>
                <h3 className="text-3xl font-black">Kebutuhan Kantor</h3>
                <p className="text-jet-orange font-medium text-sm mt-1 uppercase tracking-wider">Corporate Identity</p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {officeProducts.map((prod, idx) => (
                <div key={idx} className="p-6 bg-white/5 border border-white/5 rounded-2xl hover:bg-jet-orange/10 hover:border-jet-orange/30 transition-all duration-300 group">
                  <h4 className="font-bold text-white group-hover:text-jet-orange transition-colors mb-2">{prod.name}</h4>
                  <p className="text-sm text-jet-gray-300 leading-relaxed">{prod.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Merchandise Products */}
          <div className="space-y-8">
            <div className="flex items-center gap-6 pb-6 border-b border-white/10">
              <div className="w-16 h-16 bg-jet-orange/20 rounded-2xl flex items-center justify-center text-4xl border border-jet-orange/20 shadow-xl shadow-jet-orange/10">🛍️</div>
              <div>
                <h3 className="text-3xl font-black">Merchandise & Kemasan</h3>
                <p className="text-jet-orange font-medium text-sm mt-1 uppercase tracking-wider">Promotional Items</p>
              </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {merchandiseProducts.map((prod, idx) => (
                <div key={idx} className="p-6 bg-white/5 border border-white/5 rounded-2xl hover:bg-jet-orange/10 hover:border-jet-orange/30 transition-all duration-300 group">
                  <h4 className="font-bold text-white group-hover:text-jet-orange transition-colors mb-2">{prod.name}</h4>
                  <p className="text-sm text-jet-gray-300 leading-relaxed">{prod.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
