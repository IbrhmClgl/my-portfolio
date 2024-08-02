'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const projects = [
  {
    id: '1',
    color: 'from-blue-300 to violet-300',
    title: 'Test',
    desc: 'Lorem ipsum dolor sit amet conasd sdfiuh sdfigusdfb',
    img: 'https://images.pexel....',
    link: 'https://...',
  },
  {
    id: '2',
    color: 'from-blue-300 to violet-300',
    title: 'Test2',
    desc: 'Lorem ipsum dolor sit amet conasd sdfiuh sdfigusdfb',
    img: 'https://images.pexel....',
    link: 'https://...',
  },
  {
    id: '3',
    color: 'from-blue-300 to violet-300',
    title: 'Test3',
    desc: 'Lorem ipsum dolor sit amet conasd sdfiuh sdfigusdfb',
    img: 'https://images.pexel....',
    link: 'https://...',
  },
  {
    id: '4',
    color: 'from-blue-300 to violet-300',
    title: 'Test4',
    desc: 'Lorem ipsum dolor sit amet conasd sdfiuh sdfigusdfb',
    img: 'https://images.pexel....',
    link: 'https://...',
  },
];

const PortfolioPage = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  return (
    <motion.div
      className="h-full"
      initial={{ y: '-200vh' }}
      animate={{ y: '0%' }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center text-white">
          My recent Projects
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center">
          {projects.map((project) => (
            <div
              className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${project.color}`}
              key={project.id}
            >
              <div className="flex flex-col gap-8 text-white">
                <h1>{project.title}</h1>
                <div className="relative">
                  <Image src="" alt="" fill />
                </div>
                <p>{project.desc}</p>
                <Link href={project.link}>
                  <button>See Demo</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
