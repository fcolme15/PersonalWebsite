'use client';

import React, { useState, useRef } from 'react';
import Link from 'next/link';

const Contact = () => {
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    user_subject: '',
    user_message: ''
  });

  const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const sendEmail = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Replace with your actual EmailJS configuration
      // await emailjs.send('service_i0aarzd','template_b15u8ip', formData, 'pm_wTSFE-1TAV2nN1');
      
      // Simulated success for demo - remove this and uncomment above line
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setMessage('Message sent successfully!');
      setFormData({
        user_name: '',
        user_email: '',
        user_subject: '',
        user_message: ''
      });
      
      setTimeout(() => {
        setMessage('');
      }, 5000);
    } catch (error) {
      setMessage('Failed to send message');
      setTimeout(() => {
        setMessage('');
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact pb-0 bg-n-8 pt-65 lg:pt-20" id="contact">
      <div className="container mx-auto px-4">
        
        <div className="relative max-w-6xl mx-auto">
          
          {/* Contact Form Section - Background */}
          <div className="relative bg-gray-900 dark:bg-black px-6 py-20 sm:py-16 lg:ml-96 lg:px-12 lg:py-20 transition-colors duration-400 lg:max-w-2xl lg:ml-auto">
            <h2 className="text-white text-2xl font-bold mb-8 text-center lg:text-left">
              Send me a message
            </h2>

            <div className="grid gap-5 relative max-w-md mx-auto lg:max-w-full lg:mx-0">
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
                    className="peer w-full h-full bg-gray-900 dark:bg-black border-3 border-gray-700 text-white px-4 py-2 font-medium transition-all duration-400 focus:border-white focus:outline-none placeholder-transparent"
                  />
                  <label
                    htmlFor="name"
                    className="absolute left-2 -top-4 text-gray-400 text-sm font-medium bg-gray-900 dark:bg-black px-2 opacity-0 pointer-events-none transition-all duration-400 peer-focus:opacity-100 peer-focus:-top-4 peer-[&:not(:placeholder-shown)]:opacity-100 peer-[&:not(:placeholder-shown)]:-top-4"
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
                    className="peer w-full h-full bg-gray-900 dark:bg-black border-3 border-gray-700 text-white px-4 py-2 font-medium transition-all duration-400 focus:border-white focus:outline-none placeholder-transparent"
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-2 -top-4 text-gray-400 text-sm font-medium bg-gray-900 dark:bg-black px-2 opacity-0 pointer-events-none transition-all duration-400 peer-focus:opacity-100 peer-focus:-top-4 peer-[&:not(:placeholder-shown)]:opacity-100 peer-[&:not(:placeholder-shown)]:-top-4"
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
                  className="peer w-full h-full bg-gray-900 dark:bg-black border-3 border-gray-700 text-white px-4 py-2 font-medium transition-all duration-400 focus:border-white focus:outline-none placeholder-transparent"
                />
                <label
                  htmlFor="subject"
                  className="absolute left-2 -top-4 text-gray-400 text-sm font-medium bg-gray-900 dark:bg-black px-2 opacity-0 pointer-events-none transition-all duration-400 peer-focus:opacity-100 peer-focus:-top-4 peer-[&:not(:placeholder-shown)]:opacity-100 peer-[&:not(:placeholder-shown)]:-top-4"
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
                  className="peer w-full h-full bg-gray-900 dark:bg-black border-3 border-gray-700 text-white px-4 pt-4 font-medium resize-none transition-all duration-400 focus:border-white focus:outline-none placeholder-transparent"
                ></textarea>
                <label
                  htmlFor="message"
                  className="absolute left-2 -top-4 text-gray-400 text-sm font-medium bg-gray-900 dark:bg-black px-2 opacity-0 pointer-events-none transition-all duration-400 peer-focus:opacity-100 peer-focus:-top-4 peer-[&:not(:placeholder-shown)]:opacity-100 peer-[&:not(:placeholder-shown)]:-top-4"
                >
                  Message
                </label>
              </div>

              {/* Status Message */}
              {message && (
                <p className="text-white text-sm absolute -bottom-7 left-0">
                  {message}
                </p>
              )}

              {/* Submit Button */}
              <button
                type="button"
                onClick={sendEmail}
                disabled={isSubmitting}
                className="bg-blue-500 hover:bg-blue-600 disabled:bg-blue-400 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2 mt-4"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                </svg>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </div>

          {/* Contact Data Section - Overlay */}
          <div className="absolute -top-60 sm:-top-50 left-4 sm:left-6 lg:-top-15 lg:left-15 w-80 sm:w-96 lg:w-[28rem] h-70 lg:h-[28rem] bg-gray-50 dark:bg-gray-900 p-8 sm:p-10 lg:p-16 border-b-4 border-blue-500 z-10 transition-colors duration-400 shadow-2xl">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 lg:mb-10 text-gray-900 dark:text-white">
              <span>Contact Me.</span>
            </h2>
            
            <p className="text-gray-700 dark:text-gray-300 font-medium mb-6 lg:mb-8 text-base lg:text-lg">
              I read comments. Respond to emails. Sometimes.
            </p>
            
            <p className="text-gray-600 dark:text-gray-400 text-sm lg:text-base mb-8">
              PT2 I read comments. Respond to emails. Sometimes.
            </p>
            
            {/* Geometric Box */}
            <div className="absolute top-6 lg:top-10 right-8 lg:right-12 w-8 h-8 lg:w-12 lg:h-12 bg-blue-500 rotate-45"></div>
          </div>

          {/* Social Section */}
          {/* <div className="grid gap-4 bg-gray-800 sm:bg-transparent py-4 sm:py-8 text-center">
            
            <div className="w-8 h-8 mx-auto">
              <svg 
                viewBox="0 0 32 32" 
                className="w-full h-full fill-current text-white sm:text-gray-900 dark:sm:text-white transition-colors"
              >
                
                <path d="M16 2C8.268 2 2 8.268 2 16s6.268 14 14 14 14-6.268 14-14S23.732 2 16 2zm0 26C9.373 28 4 22.627 4 16S9.373 4 16 4s12 5.373 12 12-5.373 12-12 12z"/>
                <path d="M16 8l-1.414 1.414L19.172 14H8v2h11.172l-4.586 4.586L16 22l7-7-7-7z"/>
              </svg>
            </div>
            
            <div className="flex flex-col gap-6">
              <div>
                <p className="text-gray-400 sm:text-gray-600 dark:sm:text-gray-400 text-sm mb-2">
                  Does not send me emails
                </p>
                <p className="text-white sm:text-gray-900 dark:sm:text-white text-sm font-semibold">
                  Write me on my social networks
                </p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Contact;