'use client';

import { Description } from '@radix-ui/react-dialog';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { BsArrowDownRight } from 'react-icons/bs';

const services = [
  {
    num: '01',
    title: 'Fullstack Web Development',
    description: 'Development of web apps, both frontend and backend',
    href: '',
  },
  {
    num: '02',
    title: 'Graphic Design',
    description:
      'Creative design of anything visual, from logos to products and photoshop touch-ups',
    href: '',
  },
  {
    num: '03',
    title: '3D Modeling',
    description: 'Creation of quality 3D assets',
    href: '',
  },
  {
    num: '04',
    title: 'Archviz',
    description: 'Creation of photorealistic renders',
    href: '',
  },
];
const Services = () => {
  return (
    <section className="min-h-[80vh] flec flex-col justify-center py-12 xl:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 1.6, duration: 0.4, ease: 'easeIn' },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-1 flex-col justify-center gap-6 group"
            >
              <div className="w-full flex justify-between items-center">
                <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">
                  {service.num}
                </div>
                <Link
                  href={service.href}
                  className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center
                hover:-rotate-45"
                >
                  <BsArrowDownRight className="text-primary text-3xl" />
                </Link>
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">
                {service.title}
              </h2>
              <p className="text-white/60">{service.description}</p>
              <div className="border-b border-white/20 w-full"></div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
