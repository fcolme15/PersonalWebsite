import React from 'react';
import Scene from '@/components/Scene'

const About = () => (
    <>
    <section className="bg-n-2 transition-colors duration-400 py-16 scroll-mt-20 mt-20" id="about">
        <div className="container mx-auto px-4 grid gap-0 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-n-6">
                <span>About Me.</span>
            </h2>

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                {/* Profile Image Section */}
                <div className="relative justify-self-center mb-10 lg:mb-0 overflow-hidden scrollbar-hide">
                    <div className="relative w-200 h-150 overflow-hidden scrollbar-hide">
                        {/* Main 3-D Container */}
                        <Scene/>
                    </div>
                </div>

                {/* Info Section */}
                <div className="lg:pl-5">
                    <div className="relative">
                        <p className="text-n-1 mb-6 text-lg leading-relaxed relative pl-8">
                            <span className="absolute left-0 top-2 w-5 h-px"></span>
                            Passionate about creating <strong className="text-n-1">Software for robots to rock this world</strong> with the
                            odd <strong className="text-n-1">Glitch</strong> which we hope doesn't lead to the destruction of the earth.
                        </p>
                    </div>

                    <ul className="list-none mb-12 text-n-6">
                        <li className="relative pl-6 mb-2">
                            <span className="absolute left-0 top-2 w-2 h-2 rotate-45"></span>
                            <strong className="text-n-6">My skills Are: </strong>
                            Spelling mistakes, eating food, and running long distances ... sometimes.
                        </li>
                    </ul>

                    <div className="flex justify-center lg:justify-center items-center gap-4 flex-wrap">
                        <a
                            href="#contact"
                            className="inline-flex items-center gap-2 bg-n-5 text-n-6 hover:text-n-1 px-6 py-3 rounded-lg transition-colors duration-300 font-medium"
                        >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
                            </svg>
                            Contact Me.
                        </a>

                        <a
                            href="https://www.linkedin.com/in/colmenerojf/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center w-12 h-12 border-2 bg-n-5 border-n-5 text-n-6 hover:text-n-1 rounded-lg transition-colors duration-300"
                        >
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
    
);

export default About;