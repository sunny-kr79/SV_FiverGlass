import React from 'react';
import TestimonialCard from './TestimonialCard';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rajiv Sharma",
      company: "Neokraft Global, Noida",
      review: "After getting FRP lamination done, the durability, life, and performance of our tanks have significantly increased. Highly recommended!",
      rating: 5
    },
    {
      name: "Vijay Kumar",
      company: "Swastik Art & Creation, Noida",
      review: "Excellent craftsmanship and long-lasting fiberglass products. Very satisfied with the quality and professional service.",
      rating: 5
    },
    {
      name: "Shashi Kant",
      company: "Worlds of Wonder, Noida",
      review: "Top-quality fiberglass slides delivered on time! Outstanding finishing and durability. Highly recommended!",
      rating: 5
    },
    {
      name: "Poonam Sinha",
      company: "Pollucon Technologies Ltd., Noida",
      review: "Excellent FRP lamination service! Our tanks' strength, performance, and life have significantly improved!",
      rating: 5
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
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section className="w-full py-20 bg-gray-50 dark:bg-[#060C1A] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center w-full mb-16"
        >
          <span className="text-primary font-bold tracking-widest text-sm uppercase mb-4 inline-block">
            What Clients Say
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold uppercase mt-1">
            <span className="text-secondary">Client </span>
            <span className="text-secondary">Testimonials</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-6 rounded-full opacity-80"></div>
        </motion.div>

        {/* Testimonial Grid mapping logic */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10"
        >
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, scale: 1.02, boxShadow: "0px 15px 30px rgba(0,0,0,0.2)" }}
              className="h-full transform transition-all duration-300 rounded-2xl"
            >
              <TestimonialCard {...item} />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Testimonials;
