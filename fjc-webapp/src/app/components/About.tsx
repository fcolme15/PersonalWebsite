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
            <div className="text-center mb-5 opacity-0 animate-fadeInUp">
              <h1 className="text-5xl md:text-7xl lg:text-7xl font-bold mb-4 text-white/90 tracking-tight">
                <span className="inline-block animate-bounce">Hello,</span>{' '}
                <span className="inline-block animate-bounce [animation-delay:0.3s]">I&apos;m</span>{' '}
                <br/>
                <span className="inline-block animate-bounce bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent [animation-delay:0.2s]">
                  Francisco Colmenero
                </span>
              </h1>
            </div>

            {/* Main Grid */}
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-8 items-center">
              {/* 3D Scene Section */}
              <div className="relative order-2 lg:order-1 opacity-0 animate-slideInLeft">
                <div className="relative w-full lg:h-125 aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl bg-black/20 backdrop-blur-sm border border-white/10">
                  
                  {/* Scene Component */}
                  <Scene />

                  {/* "drag & zoom" label */}
                  <div className="absolute top-2 left-2 text-n-6 text-xs md:text-sm bg-n-5 px-2 py-1 rounded-md pointer-events-none z-10">
                    Drag & Zoom
                  </div>
                </div>

                {/* Floating Elements In Corners */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-white/20 rounded-full animate-float"></div>
                <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-white/10 rounded-full animate-float-delayed"></div>
              </div>


              {/* Content Section */}
              <div className="order-1 lg:order-2 opacity-0 animate-slideInRight">
                <div className="space-y-8">
                  {/* About Text */}
                  <div className="space-y-6">
                    
                    <div className="space-y-4">
                      <p className="text-lg md:text-xl text-white/80 leading-relaxed">
                        I build intelligent systems that combine <strong className="text-white">creativity, code, and data </strong> 
                        to solve real-world problems. From machine learning models to embedded microcontrollers, I love working at the intersection of software and systems.
                      </p>

                      <p className="text-lg md:text-xl text-white/80 leading-relaxed">
                        Whether it&apos;s predicting player stats, optimizing performance, or automating decisions, I focus on <strong className="text-white">
                          high-quality, high-impact work</strong>—the kind that moves the needle and holds up under pressure.
                      </p>

                      <p className="text-lg md:text-xl text-white/80 leading-relaxed">
                        Off the keyboard, I draw inspiration from <strong className="text-white">soccer, motorsports, and endurance training</strong>—fields
                        that demand precision, resilience, and constant iteration. That mindset fuels how I build and ship software.
                      </p>
                    </div>


                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-8 -mt-10">
                    {/* contact button */}
                    <a
                      href="#contact"
                      className="group inline-flex items-center justify-center gap-3 bg-n-5 text-white hover:bg-n-6 hover:text-n-5 px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all duration-300 font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 w-full sm:flex-initial"
                    >
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                      </svg>
                      <p className='items-center'>
                        Contact Me
                      </p>
                    </a>

                    {/* Social buttons container */}
                    <div className="flex flex-row gap-4 justify-center sm:justify-start">
                      {/* linkedIn button */}
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
                      
                      {/* github button */}
                      <a
                        href="https://github.com/fcolme15"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-n-5 text-white hover:bg-n-6 hover:text-n-5 backdrop-blur-sm border border-white/20 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex-shrink-0"
                      >
                        <svg
                          className="w-5 h-5 sm:w-7 sm:h-7 transition-transform group-hover:scale-110"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 0C5.37 0 0 5.373 0 12a12 12 0 008.207 11.385c.6.111.82-.261.82-.58v-2.037c-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.09-.745.083-.729.083-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.835 2.807 1.305 3.492.997.107-.775.42-1.305.763-1.605-2.665-.3-5.466-1.333-5.466-5.933 0-1.31.467-2.381 1.235-3.22-.124-.303-.535-1.52.117-3.166 0 0 1.008-.322 3.3 1.23a11.46 11.46 0 013.003-.404c1.02.004 2.046.138 3.002.404 2.29-1.552 3.296-1.23 3.296-1.23.654 1.647.243 2.864.12 3.166.77.839 1.232 1.91 1.232 3.22 0 4.61-2.805 5.63-5.475 5.924.43.372.823 1.105.823 2.229v3.305c0 .322.218.695.825.578A12.005 12.005 0 0024 12c0-6.627-5.373-12-12-12z" />
                        </svg>
                      </a>
                      
                      {/* Instagram Button */}
                      <a
                        href="https://instagram.com/francisco__colmenero"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-n-5 text-white hover:bg-n-6 hover:text-n-5 backdrop-blur-sm border border-white/20 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex-shrink-0"
                      >
                        <svg
                          className="w-5 h-5 sm:w-7 sm:h-7 transition-transform group-hover:scale-110"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                      </a>

                      {/* Resume/CV Button */}
                      <a
                        href="https://github.com/fcolme15/PersonalWebsite/blob/main/FranciscoJC-Resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-n-5 text-white hover:bg-n-6 hover:text-n-5 backdrop-blur-sm border border-white/20 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex-shrink-0"
                      >
                        <svg
                          className="w-5 h-5 sm:w-7 sm:h-7 transition-transform group-hover:scale-110"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8l-6-6z" />
                          <polyline points="14,2 14,8 20,8" />
                          <line x1="16" y1="13" x2="8" y2="13" />
                          <line x1="16" y1="17" x2="8" y2="17" />
                          <polyline points="10,9 9,9 8,9" />
                        </svg>
                      </a>
                    </div>
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