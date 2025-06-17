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
    <>
    <div></div>
    <section className="contact pb-0 bg-n-5 pb-20 pt-65 md:pt-80 lg:pt-30" id="contact">
      <div className="container mx-auto px-4">
        
        <div className="relative max-w-6xl mx-auto">
          
          {/* Contact Form Section - Background */}
          <div className="relative bg-n-1 px-6 py-20 sm:py-16 text-white lg:ml-96 lg:px-12 lg:py-20 transition-colors duration-400 lg:max-w-2xl lg:ml-auto">
            <h2 className="text-n-6 text-2xl font-bold mb-8 text-center lg:text-left">
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
                type="button"
                onClick={sendEmail}
                disabled={isSubmitting}
                className="bg-n-5 disabled:bg-black text-n-6 font-medium py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2 mt-4"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                </svg>
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </div>
          </div>

          {/* Contact Data Section - Overlay */}
          <div className="absolute -top-60 left-4 sm:left-6 lg:-top-15 lg:left-15 w-80 sm:w-96 lg:w-[28rem] h-70 lg:h-[28rem] dark:bg-n-2 p-8 sm:p-10 lg:p-16 border-b-4 border-n-1 z-10 transition-colors duration-400 shadow-2xl">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 lg:mb-10 text-n-6">
              <span>Contact Me.</span>
            </h2>
            
            <p className="text-black font-medium mb-6 lg:mb-8 text-base lg:text-lg">
              I read comments. Respond to emails. Sometimes.
            </p>
            
            <p className="text-n-1 text-sm lg:text-base mb-8">
              PT2 I read comments. Respond to emails. Sometimes.
            </p>
            
            {/* Geometric Box */}
            <div className="absolute top-6 lg:top-10 right-8 lg:right-12 w-8 h-8 lg:w-12 lg:h-12 bg-n-4 rotate-45"></div>
          </div>
        </div>
      </div>
    </section>
    </>
    
  );
};

export default Contact;