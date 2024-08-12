'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { languagesStore } from '@/app/store/languageState';
import deData from './store/languages/de/german.json';
import engData from './store/languages/eng/english.json';

const Homepage = () => {
  const currentLanguage = languagesStore((state) => state.lang);
  return (
    <motion.div
      className="h-full"
      initial={{ y: '-200vh' }}
      animate={{ y: '0%' }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* Image Container */}
        <div
          id="myimage"
          className="h-1/3 relative lg:h-full lg:w-1/2 flex justify-center items-center"
        >
          <Image
            id="image"
            src="/myimage.png"
            alt=""
            fill
            className="object-contain rounded-full"
          />
          <div className="circle"></div>
        </div>
        {/* Text Container */}
        <div className="h-1/2 lg:h-full lg:w-1/2 lg:p-10 flex flex-col gap-8 items-center justify-center">
          {/* Title */}
          <h2 id="lptitle" className="text-4xl md:text-6xl font-bold">
            {currentLanguage == 'de' ? deData.hello : engData.hello}
          </h2>
          <p id="lpdesc" className="md:text-xl">
            {currentLanguage == 'de'
              ? deData.lpDescription
              : engData.lpDescription}
          </p>
          {/* Buttons */}
          <div id="btnstyle" className="w-full flex gap-4">
            <button className="p-4 rounded-lg ring-1 ring-white bg-black text-white">
              <a href="/portfolio">
                {currentLanguage == 'de'
                  ? deData.myprojects
                  : engData.myprojects}
              </a>
            </button>
            <button className="p-4 rounded-lg ring-1 ring-white bg-black">
              <a href="/contact">
                {currentLanguage == 'de' ? deData.contactme : engData.contactme}
              </a>
            </button>
            <a
              href="/ibrahim-cv.pdf"
              className="p-4 rounded-full ring-1 ring-white bg-black"
              download={'cv'}
            >
              Download cv
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

<style></style>;

export default Homepage;
