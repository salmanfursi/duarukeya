import React from 'react';
import Image from 'next/image';
import play from './../public/image/play.png'
import copy from './../public/image/copy.png'
import mark from './../public/image/mark.png'
import bulb from './../public/image/bulb.png'
import share from './../public/image/share.png'
import info from './../public/image/info.png'
import star from './../public/image/star.png'

const ContFot = () => {
  return (
    <div className="flex justify-between">
              <div>
                <Image
                  src={play} // Replace with your image path
                  alt="Image 1"
                  width={48}
                  height={48}
                  className="object-cover mr-4 rounded-lg"
                />
              </div>
              <div className="flex gap-8 pr-3 items-center">
                <Image
                  src={copy} // Replace with your image path
                  alt="Image 2"
                  width={24}
                  height={24}
                  className="w-5 h-5 mt-1"
                />
                <Image
                  src={mark} // Replace with your image path
                  alt="Image 3"
                  width={24}
                  height={24}
                  className="w-7 h-7  "
                />
                <Image
                  src={bulb} // Replace with your image path
                  alt="Image 4"
                  width={24}
                  height={24}
                  className="w-7 h-7 "
                />
                <Image
                  src={share} // Replace with your image path
                  alt="Image 5"
                  width={24}
                  height={24}
                  className="w-6 h-6 "
                />
                <Image
                  src={info} // Replace with your image path
                  alt="Image 6"
                  width={24}
                  height={24}
                  className="w-6 h-6  "
                />
              </div>
            </div>
  );
};

export default ContFot;