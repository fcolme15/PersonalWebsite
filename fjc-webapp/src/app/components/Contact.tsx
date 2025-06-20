'use client';

import React, { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [formData, setFormData] = useState({
  user_name: '',
  user_email: '',
  user_subject: '',
  user_message: ''
});

useEffect(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
          setHasAnimated(true);
        }
      });
    },
    {
      threshold: 0.2,
      rootMargin: '0px 0px -50px 0px',
    }
  );

  const currentSection = sectionRef.current;
  if (currentSection) observer.observe(currentSection);

  return () => {
    if (currentSection) observer.unobserve(currentSection);
  };
}, [hasAnimated]);

const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
  const { name, value } = e.target;
  setFormData(prev => ({
    ...prev,
    [name]: value
  }));
};

const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    const result = await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
      formData,
      process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
    );

    console.log('Email sent successfully:', result.text);
    setMessage('Message sent successfully!');
    setFormData({
      user_name: '',
      user_email: '',
      user_subject: '',
      user_message: ''
    });

    setTimeout(() => setMessage(''), 5000);
  } catch (error) {
    console.error('EmailJS error:', error);
    setMessage('Failed to send message. Please try again.');
    setTimeout(() => setMessage(''), 5000);
  } finally {
    setIsSubmitting(false);
  }
};


  return (
    <>
    <div></div>
    <section ref={sectionRef} className="contact pb-0 bg-n-5 pb-20 pt-65 md:pt-80 lg:pt-30 scroll-mt-18 lg:scroll-mt-21 overflow-hidden" id="contact">
      <div className="container mx-auto px-4">
        
        <div className="relative max-w-6xl mx-auto">
          
          {/* Contact Form Section - Background - Fade in from Right */}
          <div className={`relative bg-n-1 px-6 py-20 sm:py-16 text-white lg:ml-96 lg:px-12 lg:py-20 transition-all duration-1000 ease-out lg:max-w-2xl lg:ml-auto ${
            isVisible 
              ? 'opacity-100 translate-x-0' 
              : 'opacity-0 translate-x-12'
          }`}
          style={{
            animationDelay: isVisible ? '0.2s' : '0s',
            animationFillMode: 'both'
          }}>
            <h2 className="text-n-6 text-2xl font-bold mb-8 text-center lg:text-left">
              Send me a message
            </h2>

            <div className="grid gap-5 relative max-w-md mx-auto lg:max-w-full lg:mx-0">
              <form onSubmit={sendEmail}>
              <div className="grid gap-5 sm:grid-cols-2 sm:gap-4">
                
                {/* First Name */}
                <div className="relative w-full h-14">
                  <input
                    type="text"
                    name="user_name"
                    id="name"
                    value={formData.user_name}
                    onChange={handleInputChange}
                    required
                    placeholder="First Name"
                    className="peer w-full h-full bg-black border-3 border-gray-700 text-white px-4 py-2 font-medium transition-all duration-400 focus:border-white focus:outline-none placeholder-gray-500 focus:placeholder-transparent"
                  />
                  <label
                    htmlFor="name"
                    className="absolute left-2 -top-4 text-gray-400 text-sm font-medium bg-black px-2 opacity-0 pointer-events-none transition-all duration-400 peer-focus:opacity-100 peer-focus:-top-4 peer-[&:not(:placeholder-shown)]:opacity-100 peer-[&:not(:placeholder-shown)]:-top-4"
                  >
                    First Name
                  </label>
                </div>

                {/* Email */}
                <div className="relative w-full h-14">
                  <input
                    type="email"
                    name="user_email"
                    id="email"
                    value={formData.user_email}
                    onChange={handleInputChange}
                    required
                    placeholder="Email Address"
                    className="peer w-full h-full bg-black border-3 border-gray-700 text-white px-4 py-2 font-medium transition-all duration-400 focus:border-white focus:outline-none placeholder-gray-500 focus:placeholder-transparent"
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-2 -top-4 text-gray-400 text-sm font-medium bg-black px-2 opacity-0 pointer-events-none transition-all duration-400 peer-focus:opacity-100 peer-focus:-top-4 peer-[&:not(:placeholder-shown)]:opacity-100 peer-[&:not(:placeholder-shown)]:-top-4"
                  >
                    Email Address
                  </label>
                </div>
              </div>

              {/* Subject */}
              <div className="relative w-full h-14">
                <input
                  type="text"
                  name="user_subject"
                  id="subject"
                  value={formData.user_subject}
                  onChange={handleInputChange}
                  required
                  placeholder="Subject"
                  className="peer w-full h-full bg-black border-3 border-gray-700 text-white px-4 py-2 font-medium transition-all duration-400 focus:border-white focus:outline-none placeholder-gray-500 focus:placeholder-transparent"
                />
                <label
                  htmlFor="subject"
                  className="absolute left-2 -top-4 text-gray-400 text-sm font-medium bg-black px-2 opacity-0 pointer-events-none transition-all duration-400 peer-focus:opacity-100 peer-focus:-top-4 peer-[&:not(:placeholder-shown)]:opacity-100 peer-[&:not(:placeholder-shown)]:-top-4"
                >
                  Subject
                </label>
              </div>

              {/* Message */}
              <div className="relative w-full h-40">
                <textarea
                  name="user_message"
                  id="message"
                  value={formData.user_message}
                  onChange={handleInputChange}
                  required
                  placeholder="Message"
                  className="peer w-full h-full bg-black border-3 border-gray-700 text-white px-4 pt-4 font-medium resize-none transition-all duration-400 focus:border-white focus:outline-none placeholder-gray-500 focus:placeholder-transparent"
                ></textarea>
                <label
                  htmlFor="message"
                  className="absolute left-2 -top-4 text-gray-400 text-sm font-medium bg-black px-2 opacity-0 pointer-events-none transition-all duration-400 peer-focus:opacity-100 peer-focus:-top-4 peer-[&:not(:placeholder-shown)]:opacity-100 peer-[&:not(:placeholder-shown)]:-top-4"
                >
                  Message
                </label>
              </div>

              {/* Status Message */}
              {message && (
                <p className="text-n-6 text-sm absolute -bottom-7 left-0">
                  {message}
                </p>
              )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-n-5 disabled:bg-black text-n-6 font-medium py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2 mt-4"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                  </svg>
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>

          {/* Contact Data Section - Overlay - Fade in from Left */}
          <div className={`absolute -top-38 left-4 sm:left-6 lg:-top-15 lg:left-25 w-70 sm:w-96 lg:w-[25rem] h-55 lg:h-[20rem] dark:bg-n-2 p-8 sm:p-10 lg:p-16 border-b-4 border-n-1 z-10 transition-all duration-1000 ease-out shadow-2xl ${
            isVisible 
              ? 'opacity-100 translate-x-0' 
              : 'opacity-0 -translate-x-12'
          }`}
          style={{
            animationDelay: isVisible ? '0s' : '0s',
            animationFillMode: 'both'
          }}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 lg:mb-10 text-n-6">
              <span>Contact Me.</span>
            </h2>
            
            <p className="text-black font-medium mb-6 lg:mb-8 text-base lg:text-lg">
              Always looking to make connections and work on new projects.
            </p>
            
            {/* Geometric Box */}
            <div className="absolute top-6 lg:top-10 right-8 lg:right-12 w-8 h-8 lg:w-12 lg:h-12 bg-n-4 rotate-45"></div>
            <div className="absolute top-7 lg:top-11.5 right-9 lg:right-13 w-6 h-6 lg:w-9.5 lg:h-9.5 bg-n-1 rotate-60"></div>
          </div>
        </div>
      </div>
    </section>
    </>
    
  );
};

export default Contact;