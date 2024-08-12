'use client';

import Link from 'next/link';
import { useState } from 'react';
import NavLink from './navLink';
import { motion } from 'framer-motion';
import { languagesStore } from '@/app/store/languageState';

const translations = {
  en: {
    home: 'Home',
    about: 'About',
    portfolio: 'Portfolio',
    contact: 'Contact',
  },
  de: {
    home: 'Startseite',
    about: 'Über',
    portfolio: 'Portfolio',
    contact: 'Kontakt',
  },
};

const getNavs = (lang) => [
  { url: `/`, title: translations[lang].home },
  { url: `/about`, title: translations[lang].about },
  { url: `/portfolio`, title: translations[lang].portfolio },
  { url: `/contact`, title: translations[lang].contact },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const topVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: 45,
      backgroundColor: 'rgb(255,255,255)',
    },
  };

  const centerVariants = {
    closed: {
      opacity: 1,
    },
    opened: {
      opacity: 0,
    },
  };

  const bottomVariants = {
    closed: {
      rotate: 0,
    },
    opened: {
      rotate: -45,
      backgroundColor: 'rgb(255,255,255)',
    },
  };

  const listVariants = {
    closed: {
      x: '100vw',
    },
    opened: {
      x: 0,
      transition: {
        when: 'beforeChildren',
        staggerChildren: 0.2,
      },
    },
  };

  const listItemVariants = {
    closed: {
      x: -10,
      opacity: 0,
    },
    opened: {
      x: 0,
      opacity: 1,
    },
  };
  const currentLanguage = languagesStore((state) => state.lang);
  const setLanguageInStore = languagesStore((state) => state.setLang);

  const [language, setLanguage] = useState(currentLanguage);
  const navs = getNavs(language);

  const handleLanguageChange = (lang) => {
    setLanguage(lang);
    setLanguageInStore(lang);
  };

  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
      {/* Links */}
      <div className="hidden md:flex gap-4 w-1/3">
        {navs.map((link) => (
          <NavLink link={link} key={link.title} />
        ))}
      </div>
      <div className="md:hidden lg:flex xl:w-1/3 xl:justify-center">
        <Link
          href="/"
          className="text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center"
        >
          <span
            onClick={() => handleLanguageChange('de')}
            className="text-white mr-1 p-3"
          >
            DE
          </span>
          <span
            onClick={() => handleLanguageChange('en')}
            className="w-12 h-8 rounded bg-white text-black flex items-center justify-center"
          >
            EN
          </span>
        </Link>
      </div>
      <div className="hidden md:flex gap-4 w-1/3">
        {/* Socials */}
        <Link href="https://github.com/IbrhmClgl">
          <img src="/github.png" alt="" width={24} height={24} />
        </Link>
        <Link href="https://www.linkedin.com/in/ibrahim-ciloglu-7a63b4217/">
          <img
            className="bg-white"
            src="/linkedin.png"
            alt=""
            width={24}
            height={24}
          />
        </Link>
        {/* <button onClick={() => handleLanguageChange('en')}>en</button>
        <button onClick={() => handleLanguageChange('de')}>de</button> */}
      </div>
      {/* Repsonsive Menu */}
      <div className="md:hidden">
        <button
          className="w-10 h-8 flex flex-col justify-between z-50 relative"
          onClick={() => setOpen(!open)}
        >
          <motion.div
            variants={topVariants}
            animate={open ? 'opened' : 'closed'}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
          <motion.div
            variants={centerVariants}
            animate={open ? 'opened' : 'closed'}
            className="w-10 h-1 bg-black rounded"
          ></motion.div>
          <motion.div
            variants={bottomVariants}
            animate={open ? 'opened' : 'closed'}
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
        </button>
        {/* Menu List */}
        {open && (
          <motion.div
            variants={listVariants}
            initial="closed"
            animate="opened"
            className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl z-40"
          >
            {navs.map((link) => (
              <motion.div
                variants={listItemVariants}
                key={link.title}
                className=""
              >
                <Link href={link.url}>{link.title}</Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
