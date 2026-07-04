import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null);
  const [statusType, setStatusType] = useState('success');

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatusMessage(null);

    // Simulated API call since EmailJS keys are placeholder
    // Replace this block with your actual emailjs.sendForm call once you have your keys
    new Promise((resolve) => setTimeout(resolve, 1500))
      .then(() => {
        setStatusType('success');
        setStatusMessage("Message Sent Successfully! We will get back to you soon.");
        e.target.reset();
      })
      .catch(() => {
        setStatusType('error');
        setStatusMessage("Failed to send message. Please try again or email us directly.");
      })
      .finally(() => {
        setIsSubmitting(false);

        // Auto-hide alert after 5 seconds
        setTimeout(() => {
          setStatusMessage(null);
        }, 5000);
      });
  };

  return (
    <section className="w-full py-20 bg-[#F9FAFB] dark:bg-[#0A1222] transition-colors duration-300 border-t border-gray-100 dark:border-gray-800 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

          {/* Left Side: Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-col justify-start pt-4 lg:pt-8"
          >
            <h2 className="text-3xl lg:text-4xl font-extrabold mb-5 uppercase">
              <span className="text-primary">Let's Build </span>
              <span className="text-secondary">Together</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed mb-10 lg:pr-10">
              Have a project in mind or need custom FRP solutions? Reach out to us today. We are here to help you build strong, reliable, and trusted fiberglass products.
            </p>

            <div className="space-y-5">
              {/* Card 1: Office Address */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex items-start gap-4 p-5 md:p-6 bg-white dark:bg-[#0D1628] rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-[#00A1FF] flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="text-[17px] font-bold text-gray-900 dark:text-white mb-2">Office Address</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-[15px] leading-relaxed">
                    B-79, Ground Floor, Block-B,<br />Sector-88, Noida UP: 201305
                  </p>
                </div>
              </motion.div>

              {/* Card 2: Phone */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex items-start gap-4 p-5 md:p-6 bg-white dark:bg-[#0D1628] rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 dark:bg-orange-900/30 flex items-center justify-center text-[#FF8C00] flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="text-[17px] font-bold text-gray-900 dark:text-white mb-2">Phone Number</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-[15px] leading-relaxed">
                    +91 9899587246
                  </p>
                </div>
              </motion.div>

              {/* Card 3: Email */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="flex items-start gap-4 p-5 md:p-6 bg-white dark:bg-[#0D1628] rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center text-[#00A1FF] flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="text-[17px] font-bold text-gray-900 dark:text-white mb-2">Email Address</h4>
                  <a href="mailto:info@vermafiber.com" className="text-gray-600 dark:text-gray-400 hover:text-blue-500 transition-colors text-[15px]">
                    info@vermafiber.com
                  </a>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-[#0D1628] rounded-2xl p-8 lg:p-10 shadow-[0_4px_30px_rgba(0,0,0,0.06)] border border-gray-100 dark:border-gray-800 relative mt-8 lg:mt-0"
          >
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-8">Send a Message</h3>

            {statusMessage && (
              <div className={`mb-6 p-4 rounded-lg font-medium ${statusType === 'success' ? 'bg-green-100 text-green-800 border border-green-200' : 'bg-red-100 text-red-800 border border-red-200'} animate-fade-in-up`}>
                {statusMessage}
              </div>
            )}

            <form action="https://formsubmit.co/dharmu6669777@gmail.com" method="POST" className="space-y-6">
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_subject" value="New Contact Message" />
              <input type="hidden" name="_template" value="table" />
              <input type="hidden" name="_next" value="https://sv-fiver-glass.vercel.app/" />  {/* ← ADD THIS */}
              <input type="text" name="_honey" style={{ display: "none" }} />
              {/* ...rest of your form */}


              <div>
                <label className="block text-[13px] font-bold text-gray-600 dark:text-gray-400 mb-2">Full Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#060C1A] text-gray-900 dark:text-white focus:ring-1 focus:ring-blue-400 focus:border-blue-400 outline-none transition-all placeholder:text-gray-400 shadow-sm"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-[13px] font-bold text-gray-600 dark:text-gray-400 mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#060C1A] text-gray-900 dark:text-white focus:ring-1 focus:ring-blue-400 focus:border-blue-400 outline-none transition-all placeholder:text-gray-400 shadow-sm"
                  />
                </div>
                <div>
                  <label className="block text-[13px] font-bold text-gray-600 dark:text-gray-400 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="Your phone number"
                    className="w-full px-4 py-3 rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#060C1A] text-gray-900 dark:text-white focus:ring-1 focus:ring-blue-400 focus:border-blue-400 outline-none transition-all placeholder:text-gray-400 shadow-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[13px] font-bold text-gray-600 dark:text-gray-400 mb-2">Message</label>
                <textarea
                  name="message"
                  required
                  rows="4"
                  placeholder="How can we help you?"
                  className="w-full px-4 py-3 rounded-md border border-gray-200 dark:border-gray-700 bg-white dark:bg-[#060C1A] text-gray-900 dark:text-white focus:ring-1 focus:ring-blue-400 focus:border-blue-400 outline-none transition-all placeholder:text-gray-400 shadow-sm resize-y"
                ></textarea>
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                className={`w-full py-3.5 rounded-md font-bold text-sm text-white from-secondary to-secondary  transition-all transform flex justify-center items-center gap-2 ${isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-gradient-to-r from-orange-400 to-[#FF4500] shadow-[0_4px_14px_0_rgba(255,100,0,0.39)] hover:shadow-[0_6px_20px_rgba(255,100,0,0.23)] border-none'}`}
              >
                {isSubmitting ? (
                  <span>Sending...</span>
                ) : (
                  <span>Send Message</span>
                )}
              </motion.button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
