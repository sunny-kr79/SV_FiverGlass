import React from 'react';
import { motion } from 'framer-motion';

const Clients = () => {
  const clients = [
    { logo: "/appu_ghar.png", name: "Appu Ghar" },
    { logo: "/hindustan.jpeg", name: "Hindustan" },
    { logo: "/gip.jpeg", name: "GIP" },
    { logo: "/logo1.png", name: "Client Logo" },
    { logo: "/pollucon.jpg", name: "Pollucon" },
    { logo: "/swastik.jpg", name: "Swastik" },
    { logo: "/wow.png", name: "Worlds of Wonder" }
  ];

  return (
    <section className="w-full py-16 bg-white dark:bg-[#060C1A] transition-colors duration-300 border-t border-gray-100 dark:border-gray-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center w-full"
        >
          <span className="text-gray-500 dark:text-gray-400 font-bold tracking-[0.2em] text-sm uppercase mb-2 inline-block">
            Trusted By
          </span>
          <h2 className="text-2xl md:text-3xl font-extrabold uppercase text-gray-900 dark:text-white">
            Our Clients
          </h2>
        </motion.div>
      </div>

      {/* Infinite Horizontal Marquee */}
      <div className="relative w-full overflow-hidden py-4">
        {/* Gradient Overlays for smooth fading on edges */}
        <div className="absolute top-0 bottom-0 left-0 w-16 md:w-32 bg-gradient-to-r from-white dark:from-[#060C1A] to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-16 md:w-32 bg-gradient-to-l from-white dark:from-[#060C1A] to-transparent z-10 pointer-events-none" />

        {/* Marquee Track */}
        <div className="animate-marquee flex">
          {/* First set of client cards */}
          <div className="flex gap-6 pr-6 shrink-0">
            {clients.map((item, index) => (
              <div 
                key={`first-${index}`} 
                className="w-[200px] shrink-0 h-40 flex items-center justify-center p-6 bg-white dark:bg-[#0D1628] rounded-xl shadow-sm border border-gray-100 dark:border-gray-800/50 hover:shadow-md transition-all duration-300 ease-in-out cursor-pointer group relative hover:scale-105 active:scale-95"
              >
                <img 
                  src={item.logo} 
                  alt={`${item.name} logo`} 
                  className="w-full h-30 object-contain grayscale group-hover:grayscale-0 transition duration-300" 
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 blur-xl transition-colors duration-500 pointer-events-none rounded-xl" />
              </div>
            ))}
          </div>

          {/* Second set of client cards (duplicated for infinite loop) */}
          <div className="flex gap-6 pr-6 shrink-0">
            {clients.map((item, index) => (
              <div 
                key={`second-${index}`} 
                className="w-[200px] shrink-0 h-40 flex items-center justify-center p-6 bg-white dark:bg-[#0D1628] rounded-xl shadow-sm border border-gray-100 dark:border-gray-800/50 hover:shadow-md transition-all duration-300 ease-in-out cursor-pointer group relative hover:scale-105 active:scale-95"
              >
                <img 
                  src={item.logo} 
                  alt={`${item.name} logo`} 
                  className="w-full h-30 object-contain grayscale group-hover:grayscale-0 transition duration-300" 
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/5 blur-xl transition-colors duration-500 pointer-events-none rounded-xl" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
