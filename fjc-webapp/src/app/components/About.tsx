import React from 'react';

const About = () => (
    <section className="bg-gray-50 dark:bg-gray-900 transition-colors duration-400 py-16" id="about">
        <div className="container mx-auto px-4 grid gap-0 max-w-6xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
                <span>About Me.</span>
            </h2>

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                {/* Profile Image Section */}
                <div className="relative justify-self-center mb-10 lg:mb-0">
                    <div className="relative w-56 h-80">
                        {/* Main Image Container */}
                        <div className="relative z-10">

                            {/* <div className="w-56 h-80 bg-gray-200 dark:bg-gray-700 border-4 border-white rounded-lg flex items-center justify-center">
                                <span className="text-gray-500 dark:text-gray-400">
                                </span>
                            </div> */}

                        </div>

                        {/* Background Shadow */}
                        {/* <div className="absolute w-36 h-96 bg-white dark:bg-gray-800 -top-10 -right-14 border-b-4 border-blue-500 transition-colors duration-400"></div> */}

                        {/* Geometric Box */}
                        {/* <div className="absolute top-6 -right-11 w-8 h-8 bg-blue-500 rotate-45"></div> */}

                        {/* Decorative Line */}
                        {/* <div className="absolute -right-5 top-24 w-12 h-12 opacity-70">
                            <svg viewBox="0 0 50 50" className="w-full h-full stroke-current text-gray-600 dark:text-gray-300">
                                <path d="M5,25 Q25,5 45,25 Q25,45 5,25" fill="none" strokeWidth="2" />
                            </svg>
                        </div> */}

                        {/* Small Box */}
                        {/* <div className="absolute w-10 h-10 bg-blue-500 -right-2 bottom-6"></div> */}
                    </div>
                </div>

                {/* Info Section */}
                <div className="lg:pl-5">
                    <div className="relative">
                        <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg leading-relaxed relative pl-8">
                            <span className="absolute left-0 top-2 w-5 h-px bg-gray-700 dark:bg-gray-300"></span>
                            Passionate about creating <strong className="text-gray-900 dark:text-white">Software for robots to rock this world</strong> with the
                            odd <strong className="text-gray-900 dark:text-white">Glitch</strong> which we hope doesn't lead to the destruction of the earth.
                        </p>
                    </div>

                    <ul className="list-none mb-12 text-gray-700 dark:text-gray-300">
                        <li className="relative pl-6 mb-2">
                            <span className="absolute left-0 top-2 w-2 h-2 bg-blue-500 rotate-45"></span>
                            <strong className="text-gray-900 dark:text-white">My skills Are: </strong>
                            Spelling mistakes, eating food, and running long distances ... sometimes.
                        </li>
                    </ul>

                    <div className="flex justify-center lg:justify-center items-center gap-4 flex-wrap">
                        <a
                            href="#contact"
                            className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-colors duration-300 font-medium"
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
                            className="inline-flex items-center justify-center w-12 h-12 border-2 border-gray-300 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400 text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 rounded-lg transition-colors duration-300"
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
);

export default About;