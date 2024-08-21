'use client';

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper/types';
import 'swiper/css';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { BsArrowUpRight, BsGithub } from 'react-icons/bs';
import Image from 'next/image';
import ProjectSliderBtns from '@/components/ProjectSliderBtns';

const projects = [
  {
    num: '01',
    category: 'fullstack',
    title: 'pet-soft',
    description:
      'A fullstack app to manage a pet hotel. Keep track of owners and their pets. Payment to use the app managed with stripe',
    stack: [{ name: 'next.js' }, { name: 'typescript' }, { name: 'stripe' }],
    image: '/assets/work/thumb1.png',
    live: 'https://petsoft-navy.vercel.app/',
    github: 'https://github.com/PieMenard/petsoft',
  },
  {
    num: '02',
    category: 'fullstack',
    title: 'next-expenses',
    description:
      'A fullstack app to manage personal expenses. Uses clerk for authentication.',
    stack: [{ name: 'next.js' }, { name: 'typescript' }, { name: 'mongodb' }],
    image: '/assets/work/thumb2.PNG',
    live: 'https://next-expenses-blond.vercel.app',
    github: 'https://github.com/PieMenard/next-expenses',
  },
  {
    num: '03',
    category: 'frontend',
    title: 'pet-soft',
    description:
      'A frontend page that displays movies using an existing movie database.',
    stack: [{ name: 'next.js' }, { name: 'typescript' }],
    image: '/assets/work/thumb3.PNG',
    live: 'https://next-moviedb.netlify.app',
    github: 'https://github.com/PieMenard/next-moviesdb',
  },
];

const ProjectsPage = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper: SwiperType) => {
    const currentIndex = swiper.activeIndex;

    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 1.6, duration: 0.4, ease: 'easeIn' },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex gap-4">
                {project.stack.map((item, index) => (
                  <li key={index} className="text-xl text-accent">
                    {item.name}
                    {/* remove last comma */}
                    {index !== project.stack.length - 1 && ','}
                  </li>
                ))}
              </ul>
              {/* add border */}
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">
                {/* live project link */}
                <Link
                  href={project.live}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* github link */}
                <Link
                  href={project.github}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                    {/* overlay */}
                    <div className="absolute top-0 bottom-0 w-full bg-black/10 z-10"></div>
                    {/* image */}
                    <div className="relative w-full h-full">
                      <Image
                        src={project.image}
                        fill
                        className="object-cover"
                        alt=""
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              {/* slider buttons */}
              <ProjectSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                iconsStyles="font-extrabold"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ProjectsPage;
