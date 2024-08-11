'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const Homepage = () => {
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
          <h2 className="text-4xl md:text-6xl font-bold">
            Hello this is my cv !
          </h2>
          <p className="md:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            iusto, sit architecto non, dolore a asperiores ipsam quidem
            voluptatibus magni illum obcaecati possimus ratione sed ab quisquam
            eum est labore.
          </p>
          {/* Buttons */}
          <div className="w-full flex gap-4">
            <button className="p-4 rounded-lg ring-1 ring-white bg-black text-white">
              <a href="/portfolio">View my work</a>
            </button>
            <button className="p-4 rounded-lg ring-1 ring-white bg-black">
              <a href="/contact">Contact me</a>
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
