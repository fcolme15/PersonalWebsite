'use client'

import React, { useEffect, useState, useRef } from 'react';
import { ScrollParallax } from "react-just-parallax";
import { techstack } from '@/constants';
import Star from '@/components/Interfaces/Stars';

const TechStack = () => {
  const [stars, setStars] = useState<Star[]>([]);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Generate random stars
    const generateStars = () => {
      const starArray: Star[] = [];
      for (let i = 0; i < 120; i++) {
        starArray.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 2.5 + 0.5,
          opacity: Math.random() * 0.6 + 0.3,
          animationDelay: Math.random() * 4,
          animationDuration: Math.random() * 3 + 2,
        });
      }
      setStars(starArray);
    };

    generateStars();

    // Intersection Observer for scroll-triggered animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setIsVisible(true);
            setHasAnimated(true); // Prevent re-triggering
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  return (
    <section ref={sectionRef} id="techstack" className="min-h-screen relative overflow-hidden scroll-mt-18 lg:scroll-mt-21 bg-gradient-to-b from-n-5 via-n-5/80 to-n-2">
      
      {/* Animated Star Background */}
      <div className="absolute inset-0 overflow-hidden">
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute rounded-full bg-white animate-pulse"
            style={{
              left: `${star.x}%`,
              top: `${star.y}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              opacity: star.opacity,
              animationDelay: `${star.animationDelay}s`,
              animationDuration: `${star.animationDuration}s`,
            }}
          />
        ))}
      </div>

      {/* Gradient Background */}
      <div className="min-h-screen relative">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black/5 to-black/10"></div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-20 left-10 w-20 h-20 border border-white/10 rounded-full animate-float"></div>
        <div className="absolute top-40 right-20 w-16 h-16 border border-white/10 rotate-45 animate-float-delayed"></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 bg-white/5 rounded-lg animate-float-slow"></div>
        <div className="absolute bottom-20 right-40 w-24 h-24 border border-white/10 rounded-lg rotate-12 animate-float-slower"></div>

        <div className="relative z-10 text-white p-8 py-20">
          <div className="max-w-6xl mx-auto">
            <ScrollParallax strength={0.10}>
              <div 
                className={`text-center mb-16 transition-all duration-1000 ease-out ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-8'
                }`}
              >
                <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
                  Tech Stack
                </h1>
                <div className="w-24 h-1 bg-gradient-to-r from-transparent via-white/30 to-transparent mx-auto"></div>
              </div>
            </ScrollParallax>

            {/* Grid Container */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {techstack.map((category, index) => (
                <ScrollParallax
                  key={index}
                  strength={0.06}
                >
                  <div
                    className={`group relative overflow-hidden lg:max-h-70 bg-n-2 text-n-1 rounded-2xl p-8 border-2 border-n-5 transition-all duration-150 ease-out hover:scale-105 hover:-translate-y-2 hover:border-n-1 hover:text-n-5 ${
                      (index == 0 || index == 1 || index == 2) ? "lg:min-h-70" : ""
                    } ${
                      isVisible 
                        ? 'opacity-100 translate-y-0 scale-100' 
                        : 'opacity-0 translate-y-12 scale-95'
                    }`}
                    style={{
                      transitionDelay: isVisible ? `${0.1 + index * 0.1}s` : '0s'
                    }}
                  >
                    {/* Category Header */}
                    <div className="relative flex items-center gap-4 mb-8">
                      <div className="relative">
                        <div className="absolute inset-0 bg-white/20 rounded-xl blur-sm group-hover:blur-none transition-all duration-100"></div>
                        <div className="relative transform group-hover:scale-110 transition-transform duration-100">
                          {category.icon}
                        </div>
                      </div>
                      <h2 className="text-2xl font-bold tracking-tight">
                        {category.title}
                      </h2>
                    </div>

                    {/* Tech Stack Items */}
                    <div className="relative flex flex-wrap gap-3">
                      {category.techs.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-4 py-2 bg-n-1 text-n-6 rounded-xl text-sm font-semibold cursor-pointer transition-all duration-200 transform hover:scale-105 hover:-translate-y-1 hover:bg-n-5 shadow-lg hover:shadow-xl"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Animated border effect */}
                    <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                    </div>
                  </div>
                </ScrollParallax>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;