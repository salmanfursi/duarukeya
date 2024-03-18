import './../app/globals.css';
import React from 'react';
import Image from 'next/image';
import pulm from '@public/image/pulm.png';
import handlove from '@public/image/handlove.png';

import img1 from '@public/image/home.png';
import img2 from '@public/image/menu.png';
import img3 from '@public/image/bulb.png';
import img4 from '@public/image/mark.png';
import img5 from '@public/image/aid.png';
import img6 from '@public/image/bubble.png';
import img7 from '@public/image/book.png';
import Link from 'next/link';

const Sidebar = () => {

  return (
    <aside className="hidden sm:block fixed m-6 h-[94vh] bg-base-100 md:w-25 shadow-md  flex-col items-center overflow-y-auto rounded-3xl ">


      <ul className='flex flex-col justify-between items-center md:gap-5 '>
        <Link href={'/'} className='mb-10 mt-4'>
          <Image
            alt="pulm logo"
            src={pulm}
            width={80}
            height={80}
          />
        </Link>

        <Link href={'/'} className='rounded-full '>
          <Image
            alt="pulm logo"
            src={img1}
            width={40}
            height={40}
          />
        </Link>
        <Link href={'/'} className='rounded-full '>
          <Image
            alt="pulm logo"
            src={img2}
            width={40}
            height={40}
          />
        </Link>
        <Link href={'/'} className='rounded-full '>
          <Image
            alt="pulm logo"
            src={img3}
            width={40}
            height={40}
          />
        </Link>
        <Link href={'/'} className='rounded-full '>
          <Image
            alt="pulm logo"
            src={img4}
            width={40}
            height={40}
          />
        </Link>
        <Link href={'/'} className='rounded-full '>
          <Image
            alt="pulm logo"
            src={img5}
            width={40}
            height={40}
          />
        </Link>
        <Link href={'/'} className='rounded-full '>
          <Image
            alt="pulm logo"
            src={img6}
            width={40}
            height={40}
          />
        </Link>
        <Link href={'/'} className='rounded-full '>
          <Image
            alt="pulm logo"
            src={img7}
            width={40}
            height={40}
          />
        </Link>
       

        <Link href={'/'} className='mt-10 mb-10'>
          <Image
            alt="pulm logo"
            src={handlove}
            width={85}
            height={85}
          />
        </Link>

      </ul>

    </aside>
  );
};

export default Sidebar;
