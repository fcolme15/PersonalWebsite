'use client'

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { timelineData } from '@/constants';

const CareerTimeline = () => {
  const [visibleItems, setVisibleItems] = useState(new Set<number>());
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const sectionObserverRef = useRef<IntersectionObserver | null>(null);
  const mutationObserverRef = useRef<MutationObserver | null>(null);

  const observeTimelineItems = useCallback(() => {
    const elements = document.querySelectorAll('[data-timeline-item]');
    elements.forEach(el => {
      if (observerRef.current && !observerRef.current.takeRecords().some(entry => entry.target === el)) {
        observerRef.current.observe(el);
      }
    });
  }, []);

  useEffect(() => {
    // IntersectionObserver for timeline items visibility
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idAttr = entry.target.getAttribute('data-id');
            if (idAttr) {
              const id = parseInt(idAttr);
              setVisibleItems(prev => new Set(prev).add(id));
            }
          }
        });
      },
      { threshold: 0.1, rootMargin: '50px 0px 0px 0px' }
    );

    // IntersectionObserver for section animation trigger
    sectionObserverRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setHasAnimated(true);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -5% 0px' }
    );

    // Observe section element
    if (sectionRef.current) {
      sectionObserverRef.current.observe(sectionRef.current);
    }

    // Initial observe timeline items
    observeTimelineItems();

    // MutationObserver to watch for added/removed timeline items dynamically
    mutationObserverRef.current = new MutationObserver(() => {
      observeTimelineItems();
    });

    mutationObserverRef.current.observe(document.body, {
      childList: true,
      subtree: true,
    });

    return () => {
      observerRef.current?.disconnect();
      sectionObserverRef.current?.disconnect();
      mutationObserverRef.current?.disconnect();
    };
  }, [observeTimelineItems]);


  return (
    <section id="journey" className='overflow-hidden scroll-mt-18 lg:scroll-mt-21 '>
    <div className="min-h-screen bg-n-6 py-20 " ref={sectionRef}>
      <div className="container">
        <div className="text-center mb-16">
          <h1 className={`text-6xl font-bold text-n-1 mb-4 transition-all duration-700 ${
            hasAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
          }`}>
            Career Journey
          </h1>
          <div className={`w-24 h-1 bg-gradient-to-r from-n-5 to-n-4 mx-auto rounded-full mb-4 transition-all duration-700 delay-200 ${
            hasAnimated ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
          }`}></div>
          <p className={`text-lg text-n-1/70 transition-all duration-700 delay-400 ${
            hasAnimated ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            A timeline of educational milestones and professional growth
          </p>
        </div>

        <div className="relative max-w-7xl mx-auto">
          {/* Central Timeline Line */}
          <div className={`absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-n-5 via-n-4 to-n-5 h-full rounded-full transition-all duration-1500 delay-600 ${
            hasAnimated ? 'opacity-60 scale-y-100' : 'opacity-0 scale-y-0'
          }`}></div>

          {/* Mobile Layout */}
          <div className="md:hidden space-y-8">
            {timelineData.map((item, index) => (
              <div
                key={item.id}
                data-id={item.id}
                data-timeline-item
                className="relative"
              >
                <div className={`transition-all duration-400 ${
                  visibleItems.has(item.id) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{
                  transitionDelay: `${200 + (index * 100)}ms`
                }}>
                  {item.type === 'work' || item.type === 'education' ? (
                    <div className="bg-n-1 rounded-xl p-6 shadow-lg border border-n-2/20">
                      <div className="flex items-center mb-3">
                        <span className="text-xs text-n-2 uppercase tracking-wider bg-n-5/20 px-2 py-1 rounded-full">
                          {item.duration}
                        </span>
                      </div>
                      <h3 className="text-lg font-bold text-n-6 mb-2">{item.title}</h3>
                      <h4 className="text-n-5 font-semibold mb-3">{item.institution || item.company}</h4>
                      <p className="text-sm text-n-3 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  ) : (
                    <div className="bg-gradient-to-br from-n-6/80 to-n-3/80 rounded-lg p-4 shadow-md border border-n-2/20">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <div>
                            <h4 className="font-semibold text-n-1 text-sm">{item.title}</h4>
                            <p className="text-xs text-n-1/60">{item.institution}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Desktop Layout */}
          <div className="hidden md:block">
            {timelineData.map((item, index) => (
              <div
                key={item.id}
                data-id={item.id}
                data-timeline-item
                className="relative mb-8 last:mb-0"
              >
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                  <div
                    className={`w-4 h-4 bg-n-5 border-2 border-n-6 rounded-full shadow-lg transition-all duration-400 ${
                      visibleItems.has(item.id) ? 'scale-125' : 'scale-100'
                    }`}
                  ></div>
                </div>

                {/* Date Label */}
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-8 z-10">
                  <span className="text-xs text-n-1/60 bg-n-6 px-2 py-1 rounded-full font-medium">
                    {item.date}
                  </span>
                </div>

                {/* Content based on type */}
                {item.type === 'work' ? (
                  <div className="flex">
                    <div className="w-1/2 pr-12">
                      <div
                        className={`transition-all duration-400 ${
                          visibleItems.has(item.id) ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
                        }`}
                        style={{
                          transitionDelay: `${200 + (index * 100)}ms`
                        }}
                      >
                        <div className="bg-n-1 rounded-2xl p-8 shadow-xl border border-n-2/20 hover:shadow-2xl transition-all duration-200 hover:-translate-y-1">
                          <div className="flex items-center mb-4">
                            <div className="w-3 h-3 bg-n-5 rounded-full mr-3"></div>
                            <span className="text-xs text-n-2 uppercase tracking-wider">
                              {item.duration}
                            </span>
                          </div>
                          <h3 className="text-xl font-bold text-n-6 mb-3">{item.title}</h3>
                          <h4 className="text-n-5 font-semibold mb-4 text-lg">{item.company}</h4>
                          <p className="text-n-3 leading-relaxed">
                            {item.description}
                          </p>
                          <div className="mt-6 flex justify-end">
                            <div className="w-12 h-1 bg-gradient-to-r from-n-5 to-n-4 rounded-full"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-1/2"></div>
                  </div>
                ) : item.type === 'education' ? (
                  <div className="flex">
                    <div className="w-1/2"></div>
                    <div className="w-1/2 pl-12">
                      <div
                        className={`transition-all duration-400 ${
                          visibleItems.has(item.id) ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
                        }`}
                        style={{
                          transitionDelay: `${200 + (index * 100)}ms`
                        }}
                      >
                        <div className="bg-n-1 rounded-2xl p-8 shadow-xl border border-n-2/30 hover:shadow-2xl transition-all duration-200 hover:-translate-y-1">
                          <div className="flex items-center mb-4">
                            <span className="text-xs text-n-2 uppercase tracking-wider">
                              {item.duration}
                            </span>
                          </div>
                          <h3 className="text-xl font-bold text-n-6 mb-3">{item.title}</h3>
                          <h4 className="text-n-5 font-semibold mb-4 text-lg">{item.institution}</h4>
                          <p className="text-n-3 leading-relaxed">
                            {item.description}
                          </p>
                          <div className="mt-6">
                            <div className="w-12 h-1 bg-gradient-to-r from-n-4 to-n-5 rounded-full"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="flex">
                    <div className="w-1/2"></div>
                    <div className="w-1/2 pl-12">
                      <div
                        className={`transition-all duration-400 ${
                          visibleItems.has(item.id) ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
                        }`}
                        style={{
                          transitionDelay: `${200 + (index * 100)}ms`
                        }}
                      >
                        <div className="bg-gradient-to-br from-n-6/80 to-n-3/80 rounded-xl p-4 shadow-lg border border-n-2/20 hover:shadow-xl transition-all duration-200">
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <div>
                                <h4 className="font-semibold text-n-1 text-sm">{item.title}</h4>
                                <p className="text-xs text-n-1/60">{item.institution}</p>
                              </div>
                            </div>
                            <div className="w-2 h-2 bg-n-4 rounded-full flex-shrink-0"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Bottom circle on line */}
          <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 transition-all duration-700 delay-800 ${
            hasAnimated ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
          }`}>
            <div className="w-6 h-6 bg-n-5 rounded-full shadow-lg"></div>
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default CareerTimeline;