import React from 'react';
import { motion } from 'framer-motion';
import { Award, Settings, ShieldCheck, Clock } from 'lucide-react';

const WhyChooseUs = () => {
  const features = [
    {
      title: "Expert in All Fiberglass",
      desc: "End-to-end solutions with precision craftsmanship.",
      icon: Award
    },
    {
      title: "Custom Manufacturing",
      desc: "Tailored to your exact industrial or commercial needs.",
      icon: Settings
    },
    {
      title: "Durable & Weatherproof",
      desc: "High-grade raw materials ensuring lifelong performance.",
      icon: ShieldCheck
    },
    {
      title: "Timely Delivery",
      desc: "Committed to delivering projects exactly on schedule.",
      icon: Clock
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -40 },
    show: { opacity: 1, x: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="w-full py-20 bg-gray-50 dark:bg-[#0A1222] transition-colors duration-300 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* LEFT SIDE -> Content + Feature Points */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="lg:col-span-8 flex flex-col justify-center pr-0 lg:pr-10"
          >
            <motion.span variants={itemVariants} className="text-primary font-bold tracking-widest text-sm uppercase mb-3 block drop-shadow-sm">
              Our Edge
            </motion.span>

            <motion.h2 variants={itemVariants} className="text-3xl md:text-4xl lg:text-5xl font-extrabold uppercase mb-6">
              <span className="text-secondary">Why </span>
              <span className="text-secondary">Choose Us?</span>
            </motion.h2>

            <motion.p variants={itemVariants} className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-10 max-w-2xl">
              With 20+ years of fiberglass expertise, we deliver unmatched quality and satisfaction across every project.
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, y: -2 }}
                  className="flex items-start group cursor-default transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-white dark:bg-[#060C1A] flex items-center justify-center text-primary dark:text-[#00A1FF] shadow-sm group-hover:shadow-lg group-hover:bg-primary/10 transition-all duration-300 border border-gray-100 dark:border-gray-800 mr-5">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2 group-hover:text-primary transition-colors">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed font-medium">
                      {feature.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT SIDE -> Highlight Card */}
          <div className="lg:col-span-4 mt-8 lg:mt-0 relative">

            {/* Background absolute glows mapping premium effect natively */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 blur-3xl rounded-full scale-90"></div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 40 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative w-full rounded-[2rem] bg-white dark:bg-[#0D1628] shadow-2xl p-10 border border-gray-100 dark:border-primary/20 flex flex-col items-center justify-center overflow-hidden z-10 text-center"
            >

              <div className="w-24 h-24 bg-gradient-to-br from-primary to-primary to-accent rounded-full flex items-center justify-center mb-8 shadow-lg shadow-primary/30 shrink-0">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>

              <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 dark:text-white uppercase tracking-wide mb-4">
                100% Quality<br />
                <span className="text-secondary">Guaranteed</span>
              </h3>

              <p className="text-gray-600 dark:text-gray-300 font-medium mb-8">
                Every project runs through rigorous quality control parameters ensuring complete durability and reliability seamlessly.
              </p>

              <div className="w-full h-1 bg-gradient-to-r from-primary to-primary to-primary rounded-full opacity-80"></div>
            </motion.div>

          </div>

        </div>
      </div>

      {/* Footer Edge Ribbon */}
      <div className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-primary via-secondary to-accent opacity-90"></div>
    </section>
  );
};

export default WhyChooseUs;
