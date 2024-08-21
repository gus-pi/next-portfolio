'use client';

import { Description } from '@radix-ui/react-dialog';
import { motion } from 'framer-motion';
import { useState } from 'react';

const projects = [
  {
    num: '01',
    category: 'fullstack',
    title: 'pet-soft',
    description:
      'A fullstack app to manage a pet hotel. Keep track of owners and their pets. Payment to use the app managed with stripe',
    stack: [{ name: 'next.js' }, { name: 'typescript' }, { name: 'stripe' }],
    image: '/public/assets/work/thumb1.png',
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
    image: '/public/assets/work/thumb2.png',
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
    image: '/public/assets/work/thumb3.png',
    live: 'https://next-moviedb.netlify.app',
    github: 'https://github.com/PieMenard/next-moviesdb',
  },
];

const WorkPage = () => {
  const [project, setProject] = useState(projects[0]);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            text
          </div>
          <div className="w-full xl:w-[50%]">slider</div>
        </div>
      </div>
    </motion.div>
  );
};

export default WorkPage;
