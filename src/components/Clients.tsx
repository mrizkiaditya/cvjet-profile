import React from 'react';
import jgc from '../assets/clients/jgc.png';
import asei from '../assets/clients/asei.png';
import marein from '../assets/clients/marein.png';
import karlin from '../assets/clients/karlin.png';
import als from '../assets/clients/ALS.png';
import ams from '../assets/clients/AMS.png';

export default function Clients() {
  const clients = [
    { name: 'JGC', logo: jgc },
    { name: 'ASEI ASURANSI', logo: asei, customSize: 'h-20 md:h-24 max-w-[200px] md:max-w-[280px]' },
    { name: 'MAREIN', logo: marein },
    { name: 'KARLIN', logo: karlin, customSize: 'h-20 md:h-24 max-w-[200px] md:max-w-[280px]' },
    { name: 'ALS', logo: als },
    { name: 'AMS', logo: ams },
  ];

  return (
    <section className="min-h-screen py-24 bg-jet-gray-100 border-t border-jet-gray-300 flex flex-col justify-center relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-16 relative z-10 w-full">
        
        {/* Testimonial / Quote Area */}
        <div className="relative">
          <div className="text-jet-orange text-8xl absolute -top-10 -left-10 opacity-20 font-serif">"</div>
          <h3 className="text-3xl md:text-5xl font-black text-jet-black leading-tight tracking-tight relative z-10">
            "Kepercayaan Klien adalah Prioritas Kami"
          </h3>
          <p className="text-jet-gray-500 mt-6 font-medium tracking-widest uppercase text-sm">- CV JET -</p>
        </div>

        {/* Marquee Container */}
        <div className="pt-16 border-t border-jet-gray-300 relative w-full overflow-hidden">
          <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-jet-gray-100 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-jet-gray-100 to-transparent z-10"></div>
          
          <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
            <div className="flex shrink-0 items-center gap-16 md:gap-24 px-8 md:px-12">
              {clients.map((client, idx) => (
                <img key={idx} src={client.logo} alt={client.name} className={`${client.customSize || 'h-12 md:h-16 max-w-[150px] md:max-w-[200px]'} w-auto shrink-0 object-contain transition-all duration-300 cursor-default ${client.name === 'AMS' ? 'brightness-0 opacity-40 hover:opacity-100' : 'grayscale hover:grayscale-0 opacity-60 hover:opacity-100'}`} />
              ))}
            </div>
            {/* Duplicate for infinite effect */}
            <div className="flex shrink-0 items-center gap-16 md:gap-24 px-8 md:px-12">
              {clients.map((client, idx) => (
                <img key={`dup-${idx}`} src={client.logo} alt={client.name} className={`${client.customSize || 'h-12 md:h-16 max-w-[150px] md:max-w-[200px]'} w-auto shrink-0 object-contain transition-all duration-300 cursor-default ${client.name === 'AMS' ? 'brightness-0 opacity-40 hover:opacity-100' : 'grayscale hover:grayscale-0 opacity-60 hover:opacity-100'}`} />
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
