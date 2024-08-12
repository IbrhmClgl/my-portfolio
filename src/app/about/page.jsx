'use client';
import Brain from '@/components/brain';
import { motion, useInView, useScroll } from 'framer-motion';
import { useRef } from 'react';
import { languagesStore } from '@/app/store/languageState';
import deData from '@/app/store/languages/de/german.json';
import engData from '@/app/store/languages/eng/english.json';

const AboutPage = () => {
  const containerRef = useRef();

  const { scrollYProgress } = useScroll({ container: containerRef });

  const skillRef = useRef();
  const isSkillRefInView = useInView(skillRef, { margin: '-100px' });

  const experienceRef = useRef();
  const isExperienceRefInView = useInView(experienceRef, { margin: '-100px' });

  const currentLanguage = languagesStore((state) => state.lang);

  return (
    <motion.div
      className="h-full"
      initial={{ y: '-200vh' }}
      animate={{ y: '0%' }}
      transition={{ duration: 1 }}
    >
      {/* CONTAINER */}
      <div
        id="container"
        className="h-full overflow-scroll lg:flex"
        ref={containerRef}
      >
        {/* TEXT CONTAINER */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-28 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:w-1/2">
          {/* BIOGRAPHY CONTAINER */}
          <div className="flex flex-col gap-12 justify-center">
            {/* BIOGRAPHY TITLE */}
            <h1 className="font-bold text-2xl">
              {currentLanguage == 'de' ? deData.biography : engData.biography}
            </h1>
            {/* BIOGRAPHY DESC */}
            <p className="text-lg">
              {currentLanguage == 'de'
                ? deData.biographydesc
                : engData.biographydesc}
            </p>
            {/* BIOGRAPHY QUOTE */}
            <span className="italic">
              {currentLanguage == 'de' ? deData.quote : engData.quote}
            </span>
            {/* BIOGRAPHY SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: '10px' }}
              transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
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
          {/* SKILLS CONTAINER */}
          <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
            {/* SKILL TITLE */}
            <motion.h1
              initial={{ x: '-300px' }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              SKILLS
            </motion.h1>
            {/* SKILL LIST */}
            <motion.div
              initial={{ x: '-300px' }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              className="flex gap-4 flex-wrap"
            >
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                JavaScript
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                TypeScript
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                React.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Next.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Vue.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Astro.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Node.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Express.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Three.js
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                HTML
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                CSS
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Tailwind CSS
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Framer Motion
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Vite
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Docker
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                Git
              </div>
            </motion.div>
            {/* SKILL SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: '10px' }}
              transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
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
          {/* EXPERIENCE CONTAINER */}
          <div
            className="flex flex-col gap-12 justify-center pb-48"
            ref={experienceRef}
          >
            {/* EXPERIENCE TITLE */}
            <motion.h1
              initial={{ x: '-300px' }}
              animate={isExperienceRefInView ? { x: '0' } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              {currentLanguage == 'de' ? deData.experience : engData.experience}
            </motion.h1>
            {/* EXPERIENCE LIST */}
            <motion.div
              initial={{ x: '-300px' }}
              animate={isExperienceRefInView ? { x: '0' } : {}}
              className=""
            >
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between space-y-1">
                {/* LEFT */}
                <div className="w-1/3 bg-gray-900/50">
                  {/* JOB TITLE */}
                  <div className="bg-white text-black p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Teaching Assistant
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic flex flex-col">
                    <p>{currentLanguage == 'de' ? deData.ta1 : engData.ta1}</p>
                    <p>{currentLanguage == 'de' ? deData.ta2 : engData.ta2}</p>
                    <p>{currentLanguage == 'de' ? deData.ta3 : engData.ta3}</p>
                    <p>{currentLanguage == 'de' ? deData.ta4 : engData.ta4}</p>
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-blue-400 text-sm font-semibold">
                    {currentLanguage == 'de' ? deData.tadate : engData.tadate}
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded bg-gray-400 text-black text-sm font-semibold w-full">
                    Coding Bootcamps Europe
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-300 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-black-400 bg-blue-900 -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 "></div>
              </div>
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between space-y-1">
                {/* LEFT */}
                <div className="w-1/3 "></div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-300 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-black-400 bg-blue-900 -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 bg-gray-900/50">
                  {/* JOB TITLE */}
                  <div className="bg-white text-black p-3 font-semibold rounded-b-lg rounded-z-lg">
                    Junior Fullstack Developer
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic">
                    {currentLanguage == 'de' ? deData.jfd : engData.jfd}
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-blue-400 text-sm font-semibold">
                    09.2023 - 03.2024
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded bg-gray-400 text-black text-sm font-semibold w-full">
                    CleanApps & Software UG
                  </div>
                </div>
              </div>
              {/* EXPERIENCE LIST ITEM */}
              <div className="flex justify-between space-y-1">
                {/* LEFT */}
                <div className="w-1/3 bg-gray-900/50">
                  {/* JOB TITLE */}
                  <div className="bg-white text-black p-3 font-semibold rounded-b-lg rounded-s-lg">
                    Automation Developer
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic flex flex-col">
                    <p>{currentLanguage == 'de' ? deData.ad1 : engData.ad1}</p>
                    <p>{currentLanguage == 'de' ? deData.ad2 : engData.ad2}</p>
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-blue-400 text-sm font-semibold">
                    09.2022 - 04.2024
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded bg-gray-400 text-black text-sm font-semibold w-full">
                    commercetools GmbH
                  </div>
                </div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-300 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-black-400 bg-blue-900 -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 "></div>
              </div>
              <div className="flex justify-between space-y-1">
                {/* LEFT */}
                <div className="w-1/3 "></div>
                {/* CENTER */}
                <div className="w-1/6 flex justify-center">
                  {/* LINE */}
                  <div className="w-1 h-full bg-gray-300 rounded relative">
                    {/* LINE CIRCLE */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-black-400 bg-blue-900 -left-2"></div>
                  </div>
                </div>
                {/* RIGHT */}
                <div className="w-1/3 bg-gray-900/50">
                  {/* JOB TITLE */}
                  <div className="bg-white text-black p-3 font-semibold rounded-b-lg rounded-z-lg">
                    Internal IT Admin
                  </div>
                  {/* JOB DESC */}
                  <div className="p-3 text-sm italic flex flex-col">
                    <p>
                      {currentLanguage == 'de' ? deData.iia1 : engData.iia1}
                    </p>
                    <p>
                      {currentLanguage == 'de' ? deData.iia2 : engData.iia2}
                    </p>
                    <p>
                      {currentLanguage == 'de' ? deData.iia3 : engData.iia3}
                    </p>
                    <p>
                      {currentLanguage == 'de' ? deData.iia4 : engData.iia4}
                    </p>
                    <p>
                      {currentLanguage == 'de' ? deData.iia5 : engData.iia5}
                    </p>
                  </div>
                  {/* JOB DATE */}
                  <div className="p-3 text-blue-400 text-sm font-semibold">
                    01.2020 - 08.2022
                  </div>
                  {/* JOB COMPANY */}
                  <div className="p-1 rounded bg-gray-400 text-black text-sm font-semibold w-full">
                    commercetools GmbH
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        {/* SVG CONTAINER */}
        <div className="hidden lg:block w-1/3 sticky top-0 z-30 xl:w-1/2">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
