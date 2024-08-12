'use client';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { languagesStore } from '@/app/store/languageState';
import deData from '@/app/store/languages/de/german.json';
import engData from '@/app/store/languages/eng/english.json';

const PortfolioPage = () => {
  const currentLanguage = languagesStore((state) => state.lang);

  const items = [
    {
      id: '1',
      color: 'white',
      title: 'Rambler',
      desc: currentLanguage == 'de' ? deData.ramblermsg : engData.ramblermsg,
      img: '/rambler-app.png',
      link: 'https://rambler-app.netlify.app/',
    },
    {
      id: '2',
      color: 'white',
      title: 'cleanapps beta website',
      desc:
        currentLanguage == 'de' ? deData.cleanappsmsg : engData.cleanappsmsg,
      img: '/cleanapps-beta.png',
      link: 'https://cleanapps-beta.netlify.app/',
    },
    {
      id: '3',
      color: 'white',
      title: 'password generator',
      desc: currentLanguage == 'de' ? deData.pwgenmsg : engData.pwgenmsg,
      img: '/pw-gen.png',
      link: 'https://pw-gen-classic.netlify.app/',
    },
    {
      id: '4',
      color: 'white',
      title: 'hangman',
      desc: currentLanguage == 'de' ? deData.hangmanmsg : engData.hangmanmsg,
      img: '/hangman.png',
      link: 'https://hangman-23.netlify.app/',
    },
  ];

  const containerRef = useRef();

  const { scrollYProgress } = useScroll({ container: containerRef });

  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-80%']);

  return (
    <motion.div
      className="h-full"
      initial={{ y: '-200vh' }}
      animate={{ y: '0%' }}
      transition={{ duration: 1 }}
    >
      <div
        id="container"
        className="h-full overflow-scroll lg:flex"
        ref={containerRef}
      >
        <div className="h-[600vh] relative" ref={containerRef}>
          <div className="w-screen h-[calc(100vh-6rem)] flex flex-col items-center justify-center text-8xl text-center">
            <h1 className="text-6xl text-center">
              {currentLanguage == 'de'
                ? deData.portfoliomsg
                : engData.portfoliomsg}
            </h1>
            {/* BIOGRAPHY SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: '10px' }}
              transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
              viewBox="0 0 24 24"
              fill="none"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#FFFFFF"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#FFFFFF" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#FFFFFF"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
            <motion.div style={{ x }} className="flex">
              <div className="h-screen w-screen flex items-center justify-center" />
              {items.map((item) => (
                <div
                  className={`h-screen w-screen flex items-center justify-center`}
                  key={item.id}
                >
                  <div className="flex flex-col gap-8 text-white">
                    <h1 className="text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl">
                      {item.title}
                    </h1>
                    <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]">
                      <Image src={item.img} alt="" fill />
                    </div>
                    <p className="w-80 md:w96 lg:w-[500px] lg:text-lg xl:w-[600px]">
                      {item.desc}
                    </p>
                    <Link href={item.link} className="flex justify-end">
                      <button className="p-2 text-sm md:p-4 md:text-md lg:p-8 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded">
                        Demo
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
