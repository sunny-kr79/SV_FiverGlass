import React, { useState, useEffect } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { Moon, Sun, Menu, X } from 'lucide-react';

const Navbar = () => {
  const { isDark, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services & Products', href: '#services' },
    { name: 'Clients', href: '#clients' },
    { name: 'Contact', href: '#contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'clients', 'contact'];
      let currentIdx = sections.length - 1;

      while (currentIdx >= 0) {
        const _id = sections[currentIdx];
        const element = document.getElementById(_id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 120) {
            setActiveSection(_id);
            break;
          }
        }
        currentIdx--;
      }
      
      // Top of page edge case
      if (window.scrollY < 100) setActiveSection('home');
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/90 dark:bg-[#060C1A]/90 border-b border-gray-200 dark:border-gray-800 shadow-sm transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Left Side: Logo */}
          <div className="flex items-center gap-3">
            <a href="#home">
              <img 
                src="/logo.png" 
                alt="Sunny Verma Fiber Glass Logo" 
                className="w-25 h-25 object-contain cursor-pointer"
                onError={(e) => { e.target.style.display = 'none'; }} 
              />
            </a>
          </div>

          {/* Right Side: Navigation Links & Theme Toggle */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex gap-6 font-semibold text-gray-700 dark:text-gray-300 text-sm lg:text-base">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className={`transition-colors duration-300 ${activeSection === link.href.substring(1) ? 'text-primary dark:text-primary' : 'hover:text-primary dark:hover:text-primary'}`}
                >
                  {link.name}
                </a>
              ))}
            </div>

            <button 
              onClick={toggleTheme}
              className="p-2.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700 transition shadow-sm hover:shadow"
              aria-label="Toggle Dark Mode"
            >
              {isDark ? <Sun className="w-5 h-5 text-accent" /> : <Moon className="w-5 h-5 text-gray-600" />}
            </button>
          </div>

          {/* Mobile Menu Button  */}
          <div className="md:hidden flex items-center gap-4">
             <button 
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 transition"
            >
              {isDark ? <Sun className="w-4 h-4 text-accent" /> : <Moon className="w-4 h-4 text-gray-600" />}
            </button>
            <button 
              className="text-gray-800 dark:text-gray-200"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute w-full bg-white dark:bg-[#060C1A] border-b border-gray-200 dark:border-gray-800 shadow-xl py-4 flex flex-col items-center">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`py-3 w-full text-center font-semibold transition-colors duration-300 ${activeSection === link.href.substring(1) ? 'text-primary bg-gray-50 dark:bg-gray-900/50' : 'text-gray-700 dark:text-gray-300'}`}
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
