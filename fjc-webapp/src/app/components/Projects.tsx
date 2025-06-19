'use client'
import { useState, useEffect, useRef } from 'react';
import { projects } from '@/constants';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
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
    <section id="projects" className="min-h-screen scroll-mt-18 lg:scroll-mt-21 overflow-hidden" ref={sectionRef}>
      {/* Desktop Layout */}
      <div className="hidden md:block bg-n-2 min-h-screen">
        {/* Title at the top for large screens */}
        <div className={`pt-8 pb-6 px-6 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
        }`}>
          <h1 className="text-6xl font-bold text-n-5 text-center mb-2">
            Projects
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-n-5 to-n-4 mx-auto rounded-full"></div>
        </div>

        <div className="flex px-6 pb-6 gap-6 h-[75vh]">
          {/* Left Sidebar - Project List */}
          <div className={`w-1/3 space-y-4 transition-all duration-700 delay-100 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
          }`}>
            {projects.map((project, index) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(index)}
                className={`p-4 rounded-xl cursor-pointer transition-all duration-400 hover:shadow-lg hover:shadow-n-5/50 hover:scale-[1.02] transform ${
                  selectedProject === index
                    ? 'bg-n-5 text-white shadow-lg shadow-n-5/50 scale-[1.02]'
                    : 'bg-n-6 text-black hover:bg-n-2/20'
                } ${isVisible ? 'animate-slideInUp' : 'opacity-0'}`}
                style={{
                  animationDelay: isVisible ? `${200 + (index * 100)}ms` : '0ms',
                  animationFillMode: 'both'
                }}
              >
                <h3 className="font-bold text-lg mb-2 break-words transition-colors duration-400">
                  {project.name}
                </h3>
                <p className={`text-m mb-3 break-words transition-colors duration-400 ${
                  selectedProject === index ? 'text-n-6' : 'text-black'
                }`}>
                  {project.shortDescription}
                </p>
                <p className={`text-sm transition-colors duration-400 ${
                  selectedProject === index ? 'text-n-6' : 'text-black'
                }`}>
                  {project.date}
                </p>
              </div>
            ))}
          </div>

          {/* Right Panel - Project Details */}
          <div className={`w-2/3 bg-n-1 rounded-xl shadow-lg p-8 border-2 border-n-5 shadow-xl hover:shadow-2xl hover:shadow-n-5/30 transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
          }`}>
            {projects[selectedProject] && (
              <div className="flex flex-col">
                {/* Header */}
                <div className={`mb-4 transition-all duration-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} 
                     style={{ transitionDelay: isVisible ? '400ms' : '0ms' }}>
                  <h1 className="text-2xl font-bold text-white mb-3 break-words transition-all duration-400">
                    {projects[selectedProject].name}
                  </h1>
                  <div className="flex items-center gap-4 text-n-2 mb-2">
                    <a 
                      href={projects[selectedProject].link}
                      className="text-n-5 hover:text-n-4 underline hover:scale-105 transition-all duration-400 inline-flex items-center gap-2 group"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span>Project</span>
                      <span className="group-hover:translate-x-1 transition-transform duration-400">→</span>
                    </a>
                  </div>
                  <div className="flex items-center gap-4 text-n-2">
                    <span className="text-sm bg-n-5/20 px-3 py-1 rounded-full">
                      {projects[selectedProject].date}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <div className="mb-4">
                  <h3 className={`text-lg font-semibold text-n-2 mb-3 transition-all duration-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} 
                       style={{ transitionDelay: isVisible ? '500ms' : '0ms' }}>
                    Key Achievements
                  </h3>
                  <ul className={`space-y-2 overflow-y-auto scrollbar-hide transition-all duration-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                      style={{ transitionDelay: isVisible ? '600ms' : '0ms' }}>
                    {projects[selectedProject].description.map((point, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-lg font-bold text-n-5 mr-2 flex-shrink-0 -mt-1">•</span>
                        <span className="text-n-6 leading-relaxed break-words text-sm">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className={`border-t pt-4 border-n-5/30 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                     style={{ transitionDelay: isVisible ? '700ms' : '0ms' }}>
                  <h3 className="text-base font-semibold text-n-6 mb-3">
                    Technologies
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {projects[selectedProject].technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1.5 rounded-full text-xs font-medium bg-n-5 text-n-6 hover:scale-110 hover:shadow-lg hover:shadow-n-5/50 transform transition-all duration-400 cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden bg-n-2 p-4 min-h-screen">
        {/* Mobile Project List */}
        <div className="space-y-4 mb-6">
          <h1 className={`text-3xl font-bold text-n-5 mb-6 text-center transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-8'
          } after:content-[''] after:block after:h-[2px] after:w-20 after:bg-gradient-to-r after:from-n-5 after:to-n-4 after:mx-auto after:mt-3 after:rounded-full`}>
            Projects
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {projects.map((project, index) => (
              <div
                key={project.id}
                onClick={() => setSelectedProject(index)}
                className={`p-4 rounded-xl cursor-pointer transition-all duration-400 hover:shadow-lg hover:shadow-n-5/50 hover:scale-[1.02] transform ${isVisible ? 'animate-slideInUp' : 'opacity-0'} ${
                  selectedProject === index
                    ? 'bg-n-5 text-white shadow-xl shadow-n-5/50 scale-[1.02]'
                    : 'bg-n-6 text-black hover:bg-gradient-to-b from-n-5/20 to-n-1/20'
                }`}
                style={{ 
                  animationDelay: isVisible ? `${200 + (index * 100)}ms` : '0ms',
                  animationFillMode: 'both'
                }}
              >
                <h3 className="font-bold text-base mb-2 break-words">{project.name}</h3>
                <p className={`text-xs mb-2 break-words transition-colors duration-400 ${
                  selectedProject === index ? 'text-n-6' : 'text-n-5'
                }`}>
                  {project.shortDescription}
                </p>
                <p className={`text-xs transition-colors duration-400 ${
                  selectedProject === index ? 'text-n-3' : 'text-black/70'
                }`}>
                  {project.date}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Project Details */}
        <div className={`bg-n-1 rounded-xl shadow-lg p-6 border-2 border-n-5 transition-all duration-700 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          {projects[selectedProject] && (
            <div>
              {/* Header */}
              <div className="mb-6">
                <h1 className="text-2xl font-bold text-white mb-3 break-words">
                  {projects[selectedProject].name}
                </h1>
                <div className="flex flex-col gap-2 text-n-2 mb-4">
                  <a 
                    href={projects[selectedProject].link}
                    className="text-n-5 hover:text-n-4 underline hover:scale-105 transition-all duration-400 inline-flex items-center gap-2 group w-fit"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>Project</span>
                    <span className="group-hover:translate-x-1 transition-transform duration-400">→</span>
                  </a>
                  <span className="text-sm bg-n-5/20 px-3 py-1 rounded-full w-fit">
                    {projects[selectedProject].date}
                  </span>
                </div>
              </div>

              {/* Description */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-n-2 mb-3">Key Achievements</h3>
                <ul className="space-y-2">
                  {projects[selectedProject].description.map((point, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-lg font-bold text-n-5 mr-2 flex-shrink-0">•</span>
                      <span className="text-n-6 leading-relaxed break-words text-sm">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="border-t pt-4 border-n-5/30">
                <h3 className="text-lg font-semibold text-n-6 mb-4">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {projects[selectedProject].technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1.5 rounded-full text-xs font-medium bg-n-5 text-n-6 hover:scale-110 hover:shadow-lg hover:shadow-n-5/50 transform transition-all duration-400 cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;