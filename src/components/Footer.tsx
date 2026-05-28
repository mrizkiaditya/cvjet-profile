export default function Footer() {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const nama = formData.get('nama');
    const kontak = formData.get('kontak');
    const pesan = formData.get('pesan');

    const subject = encodeURIComponent(`Pertanyaan dari ${nama}`);
    const body = encodeURIComponent(`Nama: ${nama}\nKontak/WhatsApp: ${kontak}\n\nPesan:\n${pesan}`);
    
    window.location.href = `mailto:marketingjet123@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <footer id="kontak" className="min-h-screen bg-jet-black pt-24 pb-12 relative overflow-hidden flex flex-col justify-center">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-jet-orange to-transparent opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          
          {/* Contact Info */}
          <div className="space-y-8">
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
              Mari Mulai <br/>
              <span className="text-jet-orange">Proyek Anda.</span>
            </h2>
            <p className="text-jet-gray-300 text-lg max-w-md leading-relaxed">
              Hubungi kami untuk konsultasi desain, penawaran harga, atau sekadar bertanya tentang kebutuhan cetak Anda.
            </p>
            
            <div className="space-y-6 pt-6">
              <a href="mailto:marketingjet123@gmail.com" className="flex items-center gap-4 group w-fit">
                <div className="w-14 h-14 bg-white/5 rounded-full flex items-center justify-center text-jet-orange border border-white/10 group-hover:bg-jet-orange group-hover:text-white transition-all">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                </div>
                <div>
                  <p className="text-xs text-jet-gray-500 uppercase font-bold tracking-wider mb-1">Email</p>
                  <p className="text-lg font-semibold text-white group-hover:text-jet-orange transition-colors">marketingjet123@gmail.com</p>
                </div>
              </a>

              <a href="https://wa.me/628998147700" target="_blank" rel="noreferrer" className="flex items-center gap-4 group w-fit">
                <div className="w-14 h-14 bg-white/5 rounded-full flex items-center justify-center text-green-500 border border-white/10 group-hover:bg-green-500 group-hover:text-white transition-all">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
                </div>
                <div>
                  <p className="text-xs text-jet-gray-500 uppercase font-bold tracking-wider mb-1">WhatsApp</p>
                  <p className="text-lg font-semibold text-white group-hover:text-green-500 transition-colors">0899-8147-700</p>
                </div>
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-panel p-8 md:p-10 rounded-3xl">
            <h3 className="text-2xl font-bold text-white mb-6">Kirim Pesan Cepat</h3>
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-jet-gray-300 uppercase tracking-wider">Nama Anda</label>
                  <input name="nama" type="text" required className="w-full bg-jet-black-light border border-white/10 rounded-xl p-4 text-white placeholder-jet-gray-500 focus:outline-none focus:border-jet-orange focus:ring-1 focus:ring-jet-orange transition-all" placeholder="John Doe" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-jet-gray-300 uppercase tracking-wider">Email/WhatsApp</label>
                  <input name="kontak" type="text" required className="w-full bg-jet-black-light border border-white/10 rounded-xl p-4 text-white placeholder-jet-gray-500 focus:outline-none focus:border-jet-orange focus:ring-1 focus:ring-jet-orange transition-all" placeholder="0812..." />
                </div>
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-jet-gray-300 uppercase tracking-wider">Kebutuhan Cetak</label>
                <textarea name="pesan" rows={4} required className="w-full bg-jet-black-light border border-white/10 rounded-xl p-4 text-white placeholder-jet-gray-500 focus:outline-none focus:border-jet-orange focus:ring-1 focus:ring-jet-orange transition-all" placeholder="Deskripsikan kebutuhan Anda (contoh: 100 pcs Tote Bag Custom)"></textarea>
              </div>
              <button type="submit" className="w-full bg-jet-orange text-white font-bold py-4 rounded-xl hover:bg-[#E04D00] transition-colors shadow-lg shadow-jet-orange/20 mt-2">
                Kirim Permintaan
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Footer Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-white font-bold text-lg tracking-wider">CV JET</span>
          </div>
          <p className="text-sm text-jet-gray-500">
            © {new Date().getFullYear()} CV JET Printing & Design. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
