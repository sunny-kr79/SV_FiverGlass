import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="
      relative w-full min-h-screen flex items-center overflow-hidden
      bg-[url('/Hero_Section.jpeg')] bg-cover bg-center bg-no-repeat
    ">

      {/* Optional Overlay Div */}
      <div className="absolute inset-0  dark:bg-black/40 z-0 transition-colors duration-300"></div>

      {/* Optional subtle grid pattern overlay */}
      <div className="absolute inset-0 z-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+CjxyZWN0IHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgZmlsbD0ibm9uZSIvPgo8cGF0aCBkPSJNMCAwTDAgNDBaIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4wNykiIHN0cm9rZS13aWR0aD0iMSIvPgo8cGF0aCBkPSJNMCAwTDQwIDBaIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4wNykiIHN0cm9rZS13aWR0aD0iMSIvPgo8L3N2Zz4=')] opacity-30 pointer-events-none"></div>

      {/* Content Wrapper */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 w-full py-20 mt-10">
        <motion.div
          className="max-w-3xl flex flex-col items-start md:items-start text-left max-md:items-center max-md:text-center"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.15, delayChildren: 0.1 }
            }
          }}
        >
          {/* Top Badge */}
          <motion.div
            variants={{
              hidden: { opacity: 0 },
              show: { opacity: 1, transition: { duration: 0.6 } }
            }}
            className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-blue-500 bg-blue-400/40 dark:bg-blue-900/40 mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-400"></span>
            <span className="text-xs sm:text-sm font-semibold text-blue-800 dark:text-blue-300 tracking-wide">
              20+ YEARS OF FIBERGLASS EXCELLENCE
            </span>
          </motion.div>

          {/* Main Heading Text */}
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 40 },
              show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
            }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-extrabold leading-tight mb-6 uppercase"
          >
            <span className="text-white dark:text-white block mb-2 transition-colors duration-300 ">Strong, Reliable &</span>
            <span className="bg-gradient-to-r from-secondary to-secondary bg-clip-text text-transparent pb-2">Trusted FRP Solutions</span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 40 },
              show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
            }}
            className="text-base sm:text-lg md:text-xl text-white dark:text-gray-300 mb-10 max-w-2xl leading-relaxed transition-colors duration-300"
          >
            Over 20+ years of excellence in high-quality FRP manufacturing, custom molds, and industrial solutions.
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 mb-14 w-full justify-start max-md:justify-center"
            variants={{
              hidden: { opacity: 0, y: 40 },
              show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
            }}
          >
            <motion.a
              href="#quote"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3.5 rounded-full font-semibold text-base sm:text-lg bg-gradient-to-r from-orange-500 to-yellow-500 hover:from-orange-600 hover:to-orange-500 text-white shadow-[0_4px_14px_0_rgba(255,140,0,0.39)] transition-all flex items-center justify-center"
            >
              Get a Quote
            </motion.a>
            {/* <motion.a
              href="#work"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3.5 rounded-full font-semibold text-base sm:text-lg bg-transparent border-2 border-[#0077FF] text-[#0077FF] dark:text-[#0077FF] hover:bg-[#0077FF] hover:text-white transition-all flex items-center justify-center"
            >
              View Our Work
            </motion.a> */}
          </motion.div>

          {/* Stats Section */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.4 } }
            }}
            className="flex flex-row items-center gap-4 sm:gap-8 justify-start max-md:justify-center"
          >
            {/* Stat 1 */}
            <motion.div
              variants={{ hidden: { opacity: 0, scale: 0.8 }, show: { opacity: 1, scale: 1 } }}
              className="flex flex-col items-center sm:items-start"
            >
              <span className="text-3xl sm:text-4xl font-extrabold text-white dark:text-white">20+</span>
              <span className="text-xs sm:text-sm text-white dark:text-gray-200 font-medium tracking-wider mt-1">YEARS EXP</span>
            </motion.div>

            <div className="w-px h-15 bg-gray-100 dark:bg-gray-100"></div>

            {/* Stat 2 */}
            <motion.div
              variants={{ hidden: { opacity: 0, scale: 0.8 }, show: { opacity: 1, scale: 1 } }}
              className="flex flex-col items-center sm:items-start"
            >
              <span className="text-3xl sm:text-4xl font-extrabold text-white dark:text-white">1000+</span>
              <span className="text-xs sm:text-sm text-white dark:text-gray-200 font-medium tracking-wider mt-1">PROJECTS</span>
            </motion.div>

            <div className="w-px h-15 bg-gray-100 dark:bg-gray-100 "></div>

            {/* Stat 3 (Optional extra visual separator for mobile, or wrap) */}
            <motion.div
              variants={{ hidden: { opacity: 0, scale: 0.8 }, show: { opacity: 1, scale: 1 } }}
              className="flex flex-col items-center sm:items-start hidden sm:flex"
            >
              <span className="text-3xl sm:text-4xl font-extrabold text-white dark:text-white">100%</span>
              <span className="text-xs sm:text-sm text-white dark:text-gray-200 font-medium tracking-wider mt-1">QUALITY</span>
            </motion.div>

          </motion.div>

          {/* Quick extra div for standardizing mobile responsive */}
          <motion.div
            className="flex flex-col items-center sm:hidden mt-4 pt-4 border-t border-gray-300 dark:border-gray-700 w-full"
            variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { delay: 0.6 } } }}
          >
            <span className="text-3xl font-extrabold text-gray-900 dark:text-white">100%</span>
            <span className="text-xs text-gray-500 dark:text-gray-400 font-medium tracking-wider mt-1">QUALITY</span>
          </motion.div>

        </motion.div>
      </div>

    </section>
  );
};

export default Hero;
