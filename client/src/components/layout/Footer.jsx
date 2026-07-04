import React from 'react';
import { MapPin, Phone, Mail, Globe } from 'lucide-react';

const Footer = () => {
  const servicesLinks = [
    { name: "Industrial Tank FRP", path: "#services" },
    { name: "Automobile FRP Parts", path: "#services" },
    { name: "Water Park Slides", path: "#services" },
    { name: "Theme Park Sculptures", path: "#services" },
    { name: "Fiber Sheets", path: "#services" },
    { name: "Custom Mold Products", path: "#services" },
    { name: "Repair Services", path: "#services" }
  ];

  const quickLinks = [
    { name: "Who We Are", path: "#about" },
    { name: "Services & Products", path: "#services & Products" },
    { name: "Clients", path: "#clients" },
    { name: "Contact Us", path: "#contact" }
  ];

  return (
    <footer className="bg-gray-100 dark:bg-[#040910] border-t border-gray-200 dark:border-gray-800/50 pt-16 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">

          {/* COLUMN 1: Brand & Contact */}
          <div className="lg:col-span-2 pr-0 lg:pr-8">
            <div className="flex items-center gap-3 mb-3">
              <img
                src="/logo.png"
                alt="Logo"
                className="w-40 h-15 object-contain"
                onError={(e) => { e.target.src = '/public/logo.png'; }} // Fallback if user kept previous name
              />
            </div>

            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-3">
              India's trusted manufacturer of customized fiberglass products &mdash; industrial tanks to water park slides, sculptures to automobile parts.
            </p>

            <ul className="space-y-4 text-sm md:text-base text-gray-600 dark:text-gray-400 font-medium">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span>B-79, Ground Floor, Block-B, Sector-88, Noida UP: 201305</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <div className="flex flex-col">
                  <a href="tel:+919899587246" className="hover:text-primary transition-colors">+91 9899587246</a>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="mailto:info@vermafiber.com" className="hover:text-primary transition-colors">info@vermafiber.com</a>
              </li>
              <li className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="http://www.vermafiber.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">www.vermafiber.com</a>
              </li>
            </ul>
          </div>

          {/* COLUMN 2: Services Links */}
          <div>
            <h3 className="text-lg font-bold text-[#0f172a] dark:text-gray-100 uppercase mb-8 drop-shadow-sm">
              Services & Products
            </h3>
            <ul className="space-y-5">
              {servicesLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.path} className="text-[#3b4b66] dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-all duration-300 flex items-center gap-3 group text-[15.5px]">
                    <span className="w-[7px] h-[7px] rounded-full bg-orange-500 flex-shrink-0"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* COLUMN 3: Quick Links & CTA */}
          <div>
            <h3 className="text-lg font-bold text-[#0f172a] dark:text-gray-100 uppercase mb-8 drop-shadow-sm">
              Quick Links
            </h3>
            <ul className="space-y-5 mb-8 flex flex-col">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.path} className="text-[#3b4b66] dark:text-gray-400 hover:text-primary dark:hover:text-primary transition-all duration-300 text-[15.5px]">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>

            {/* CTA BOX */}
            <div className="bg-white dark:bg-[#0D1628] border border-gray-200 dark:border-primary/20 p-5 rounded-xl shadow-md mt-4">
              <p className="text-gray-900 dark:text-gray-100 font-bold mb-4 drop-shadow-sm">
                Need a custom FRP solution? Let's talk!
              </p>
              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full py-3 bg-gradient-to-r from-primary to-blue-600 hover:from-blue-600 hover:to-primary text-white font-bold rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all outline-none"
              >
                Get Free Quote
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* BOTTOM STRIP */}
      <div className="w-full bg-gray-200 dark:bg-[#02050A] border-t border-gray-300 dark:border-gray-800 py-6 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 dark:text-gray-500 text-sm font-medium text-center md:text-left">
            &copy; {new Date().getFullYear()} Sunny Verma Fiber Glass. All rights reserved.
          </p>
          <p className="text-gray-500 dark:text-gray-500 text-sm font-medium flex items-center gap-1.5">
            Made with <span className="text-red-500 mx-0.5 text-lg">❤️</span> |
            <a href="mailto:info@vermafiber.com" className="hover:text-primary ml-1 transition-colors">
              info@vermafiber.com
            </a>
          </p>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
