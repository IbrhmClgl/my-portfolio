'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import React, { useRef } from 'react';
import { languagesStore } from '@/app/store/languageState';
import deData from '@/app/store/languages/de/german.json';
import engData from '@/app/store/languages/eng/english.json';

const ContactPage = () => {
  const currentLanguage = languagesStore((state) => state.lang);
  const text = currentLanguage == 'de' ? deData.contactmsg : engData.contactmsg;

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [validationError, setValidationError] = useState('');

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);
    setValidationError('');

    const userEmail = form.current['user_email'].value.trim();
    const userMessage = form.current['user_message'].value.trim();

    // Validation
    if (!userEmail || !userMessage) {
      setValidationError(
        currentLanguage == 'de' ? deData.contactmsg6 : engData.contactmsg6
      );
      return;
    }

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
                  repeatDelay: text.length * 0.1,
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
          <span className="text-black">
            {currentLanguage == 'de' ? deData.contactmsg1 : engData.contactmsg1}
          </span>
          <textarea
            rows={6}
            className="bg-transparent border-b-2 border-b-black outline-none resize-none text-black"
            name="user_message"
          />
          <span className="text-black">
            {currentLanguage == 'de' ? deData.contactmsg2 : engData.contactmsg2}
          </span>
          <input
            name="user_email"
            type="text"
            className="bg-transparent border-b-2 border-b-black outline-none text-black"
          />
          <span className="text-black">
            {currentLanguage == 'de' ? deData.contactmsg3 : engData.contactmsg3}
          </span>
          <button className="bg-blue-800 rounded font-semibold text-white p-4">
            {currentLanguage == 'de'
              ? deData.contactbtnmsg
              : engData.contactbtnmsg}
          </button>
          {validationError && (
            <span className="text-red-600 font-semibold">
              {validationError}
            </span>
          )}
          {success && (
            <span className="text-green-300 font-semibold">
              {currentLanguage == 'de'
                ? deData.contactmsg4
                : engData.contactmsg4}
            </span>
          )}
          {error && (
            <span className="text-red-600 font-semibold">
              {currentLanguage == 'de'
                ? deData.contactmsg5
                : engData.contactmsg5}
            </span>
          )}
        </form>
      </div>
    </motion.div>
  );
};
export default ContactPage;
