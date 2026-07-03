import React from 'react';
import { Star } from 'lucide-react';

const TestimonialCard = ({ name, company, review, rating }) => {
  return (
    <div className="relative bg-white dark:bg-[#0D1628] rounded-2xl p-8 border border-gray-100 dark:border-primary/20 hover:border-primary/40 shadow-sm hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 h-full flex flex-col group">
      
      {/* Large Background Quote Mark */}
      <span className="absolute top-4 right-6 text-8xl text-gray-100 dark:text-gray-800/50 font-serif leading-none select-none pointer-events-none group-hover:text-primary/10 transition-colors duration-300">
        &ldquo;
      </span>

      {/* Review Content */}
      <div className="relative z-10 flex-grow">
        
        {/* Dynamic Stars */}
        <div className="flex gap-1 mb-6">
          {Array.from({ length: rating }).map((_, index) => (
            <Star 
              key={index} 
              className="w-5 h-5 fill-amber-400 text-amber-400 filter drop-shadow-sm" 
            />
          ))}
        </div>

        <p className="text-gray-700 dark:text-gray-300 text-base md:text-lg italic leading-relaxed mb-8">
          "{review}"
        </p>
      </div>

      {/* Footer Info */}
      <div className="relative z-10 mt-auto border-t border-gray-100 dark:border-gray-800 pt-4 flex flex-col">
        <h4 className="text-lg font-bold text-gray-900 dark:text-gray-100 uppercase tracking-wide group-hover:text-primary transition-colors">
          {name}
        </h4>
        <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">
          {company}
        </span>
      </div>

    </div>
  );
};

export default TestimonialCard;
