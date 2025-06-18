'use client'

import React, { useEffect, useState } from 'react';
import Scene from '@/components/Scene';
import Star from '@/components/Interfaces/Stars';

const PortfolioLanding = () => {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    // Generate random stars
    const generateStars = () => {
      const starArray = [];
      for (let i = 0; i < 150; i++) {
        starArray.push({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 3 + 1,
          opacity: Math.random() * 0.8 + 0.2,
          animationDelay: Math.random() * 3,
          animationDuration: Math.random() * 3 + 2,
        });
      }
      setStars(starArray);
    };

    generateStars();
  }, []);

  return (
    <section id="about">
      <div className="min-h-screen relative overflow-hidden bg-n-2 mt-10 scroll-mt-10">
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

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-black/5 to-black/10"></div>

        {/* Main Content */}
        <div className="relative z-10 container mx-auto px-4 py-16 lg:py-24">
          <div className="max-w-7xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-16 opacity-0 animate-fadeInUp">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-white/90 tracking-tight">
                <span className="inline-block animate-bounce">Hello,</span>{' '}
                <span className="inline-block animate-bounce [animation-delay:0.2s]">I'm</span>{' '}
                <span className="inline-block animate-bounce bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent [animation-delay:0.4s]">
                  Francisco Colmenero
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto leading-relaxed opacity-0 animate-slideInUpDelayed">
                Passionate about creating software for robots to rock this world
              </p>
            </div>

            {/* Main Grid */}
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* 3D Scene Section */}
              <div className="relative order-2 lg:order-1 opacity-0 animate-slideInLeft">
                <div className="relative w-full aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl bg-black/20 backdrop-blur-sm border border-white/10">
                  <Scene />
                </div>
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-white/20 rounded-full animate-float"></div>
                <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-white/10 rounded-full animate-float-delayed"></div>
              </div>

              {/* Content Section */}
              <div className="order-1 lg:order-2 opacity-0 animate-slideInRight">
                <div className="space-y-8">
                  {/* About Text */}
                  <div className="space-y-6">
                    <h2 className="text-4xl md:text-5xl font-bold text-white/90 leading-tight">
                      About Me
                      <span className="text-white/40">.</span>
                    </h2>
                    
                    <div className="space-y-4">
                      <p className="text-lg md:text-xl text-white/80 leading-relaxed">
                        Passionate about creating <strong className="text-white">software for robots to rock this world</strong> with the
                        odd <strong className="text-white">glitch</strong> which we hope doesn't lead to the destruction of the earth.
                      </p>
                      
                      <p className="text-lg md:text-xl text-white/80 leading-relaxed">
                        <strong className="text-white">My skills are:</strong> Spelling mistakes, eating food, and running long distances... sometimes.
                      </p>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-row gap-4 pt-8">
                    <a
                      href="#contact"
                      className="group inline-flex items-center justify-center gap-3 bg-n-5 text-white hover:bg-n-6 hover:text-n-5 px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all duration-300 font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex-1 sm:flex-initial"
                    >
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                      </svg>
                      Contact Me
                    </a>
                    
                    <a
                      href="https://www.linkedin.com/in/colmenerojf/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-n-5 text-white hover:bg-n-6 hover:text-n-5 backdrop-blur-sm border border-white/20  rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex-shrink-0"
                    >
                      <svg className="w-5 h-5 sm:w-7 sm:h-7 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioLanding;