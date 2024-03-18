"use client"
import './../app/globals.css';
import Image from 'next/image';
import { useState } from 'react';
import dua from './../public/categoryimg/dua.png';
import arrow from './../public/categoryimg/arrow.png';

const Dropdown = ({ categories }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [openCategory, setOpenCategory] = useState(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const toggleCategory = (category) => {
    setOpenCategory(category === openCategory ? null : category);
  };

  return (
    <div>
      <div
        onClick={toggleDropdown}
        className="bg-white hover:bg-gray-200 hover:rounded-lg text-gray-800 rounded-xl flex items-center gap-3 w-80 ml-2 h-20 justify-between overflow-x-hidden"
      >
        <div className="flex items-center gap-2 pl-3">
          <div className='bg-gray-100 rounded-lg p-2'>

          <Image src={dua} alt="dropdown img" width={40} height={40} />
          </div>
          <div>
            <p className="font-mono text-xl">salah</p>
            <p>subcategory:17</p>
          </div>
        </div>
        <div className="flex justify-around pr-3">
          <div>
            <p className="font-bold text-lg">15</p>
            <p>Duas</p>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="w-80 ml-3 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 ">
          <ul className=" ml-5 border-l-2 border-h-2 border-green-500 border-dotted ">
            {categories.map((category) => (
              <li key={category.id} className=''>
                <div className='flex'>

                <span className='text-green text-4xl font-extrabold'>.</span>
                <div
                  onClick={() => toggleCategory(category.id)}
                  className="cursor-pointer px-4 text-sm text-gray-700 hover:bg-gray-100 pt-5"
                  >
                  {category.name}
                </div>
                  </div>
                {openCategory === category.id && (
                  <ul className="ml-4 text ">
                    {category.subcategories.map((subcategory) => (
                      <li key={subcategory.id} className="py-2 cursor-pointer gap-1">
                        <Image
                          alt='arrow'
                          src={arrow}
                        />
                        {subcategory.name}
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;





