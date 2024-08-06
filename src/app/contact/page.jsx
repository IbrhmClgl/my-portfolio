'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';

const text = 'Say Hello';

const ContactPage = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log('Email successfully sent:', result.text);
          setSuccess(true);
          form.current.reset();
        },
        (error) => {
          console.error('Failed to send email:', error);
          setError(true);
        }
      );
  };

  return (
    <motion.div
      className="h-full"
      initial={{ y: '-200vh' }}
      animate={{ y: '0%' }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* Text Container */}
        <div className="w-1/2 lg:h-full lg:w-1/2 flex items-center justify-center text-5xl">
          <div id="text">
            {text.split('').map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: index * 0.1,
                }}
              >
                {letter}
              </motion.span>
            ))}
          </div>
        </div>
        {/* Form Container */}
        <form
          id="form"
          onSubmit={sendEmail}
          ref={form}
          className="w-1/2 lg:h-full lg:w-1/2 bg-blue-400 rounded-xl text-xl flex flex-col justify-center p-24 gap-8"
        >
          <span className="text-black">Your message:</span>
          <textarea
            rows={6}
            className="bg-transparent border-b-2 border-b-black outline-none resize-none text-black"
            name="user_message"
          />
          <span className="text-black">Your email address is:</span>
          <input
            name="user_email"
            type="text"
            className="bg-transparent border-b-2 border-b-black outline-none text-black"
          />
          <span className="text-black">Regards</span>
          <button className="bg-blue-800 rounded font-semibold text-white p-4">
            Send
          </button>
          {success && (
            <span className="text-green-300 font-semibold">
              Your message has been sent successfully!
            </span>
          )}
          {error && (
            <span className="text-red-600 font-semibold">
              Something went wrong!
            </span>
          )}
        </form>
      </div>
    </motion.div>
  );
};
export default ContactPage;
