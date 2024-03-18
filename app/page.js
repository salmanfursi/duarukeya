import Navbar from '@components/Navbar'
import React from 'react'
import './../app/globals.css';
import Image from 'next/image';
import play from './../public/image/play.png'
import copy from './../public/image/copy.png'
import mark from './../public/image/mark.png'
import bulb from './../public/image/bulb.png'
import share from './../public/image/share.png'
import info from './../public/image/info.png'
import star from './../public/image/star.png'
import ContFot from '@components/ContFot';
import Dropdown from '@components/Dropdown';


const HomePage = () => {
  const categories = [
    {
      id: 2,
      name: 'duas for sneesing',
      img: './../public/categoryimg/dua.png',
      subcategories: [
        { id: 21, name: 'ddddddddddddddddddd' },
        { id: 22, name: 'ddddddddddddddddddd' }
      ]
    },
    {
      id: 2,
      name: 'duas for sneesing',
      img: './../public/categoryimg/cloth.png',
      subcategories: [
        { id: 21, name: 'ddddddddddddddddddd' },
        { id: 22, name: 'ddddddddddddddddddd' }
      ]
    },
    {
      id: 2,
      name: 'duas for sneesing',
      img: './../public/categoryimg/moon.png',
      subcategories: [
        { id: 21, name: 'ddddddddddddddddddd' },
        { id: 22, name: 'ddddddddddddddddddd' }
      ]
    },
    {
      id: 2,
      name: 'duas for sneesing',
      img: './../public/categoryimg/lamp.png',
      subcategories: [
        { id: 21, name: 'ddddddddddddddddddd' },
        { id: 22, name: 'ddddddddddddddddddd' }
      ]
    },
    {
      id: 2,
      name: 'duas for sneesing',
      img: './../public/categoryimg/pray.png',
      subcategories: [
        { id: 21, name: 'ddddddddddddddddddd' },
        { id: 22, name: 'ddddddddddddddddddd' }
      ]
    },
    {
      id: 2,
      name: 'duas for sneesing',
      img: './../public/categoryimg/mosq.png',
      subcategories: [
        { id: 21, name: 'ddddddddddddddddddd' },
        { id: 22, name: 'ddddddddddddddddddd' }
      ]
    },
  ];
  return (
    <div>
      <section className='py-2'>
        <Navbar />
      </section>

      <section className='flex md:gap-6 h-96'>

        {/* category section */}
        <div className='hidden sm:block md:w-[500px] h-[85vh] overflow-y-auto bg-white rounded-t-xl'>
          <div className='custom-green h-14 flex text-sm text-white justify-center items-center'>
            ক্যাটাগরি
          </div>
          <div className='p-3'>
            <label className="input input-bordered flex items-center gap-2">
              <div className='p-2 rounded-lg'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
              </div>
              <input type="text" className="grow w-44" placeholder="Search categories" />

            </label>
          </div>

          {categories.map((category) => (
            <Dropdown key={category.id} categories={categories} />
          ))}
        </div>





        {/* content card */}
        <div className='sm:w-full h-[85vh] overflow-y-auto mr-2 '>
          <div className='rounded-xl text-sm font-serif bg-white pl-6 flex items-center h-14'>
            <span className='text-green font-bold'>পরিচ্ছেদঃ </span> বান্দা তার রবের মুখাপেক্ষী
          </div>

          {/* content card proyojone comp create korbo */}
          <div class="bg-white rounded-lg shadow-md mt-5 p-6">
            <div className='flex gap-4 pb-6 items-center'>
              <Image
                src={star} // Replace with your image path
                alt="Image 2"
                width={40}
                height={40}
                className="w-9 h-9 "
              />
              <p>৩. দাসমুক্তির সওয়াব</p>
            </div>

            <p class="pb-3">নিম্নোক্ত বাণীটি ১০ বার বলবে -

            </p>

            <p className='py-5'>নবী (ﷺ) রাতের বেলা উঠে সালাতের শুরুতে যে দোয়া পড়তেন, তার এক জায়গায় আছে {" "}-</p>

            <p className='py-4 text-3xl text-right'>/اِهْدِنِي لِمَا اخْتُلِفَ فِيهِ مِنَ الْحَقِّ بِإِذْنِكَ إِنَّكَ تَهْدِي مَنْ تَشَاءُ إِلَى صِرَاطٍ مُّسْتَقِيْمٍ/</p>

            <p className='py-4'>উচ্চারণঃ //ইহদিনী লিমাখতুলিফা ফীহি মিনাল হাক্কি‌ বিইযনিকা ইন্নাকা তাহ্‌দী মান তাশা-উ ইলা- সিরা-তিম মুস্তাকীম//</p>

            <p className='pb-8'>অনুবাদঃ// যে সত্য নিয়ে মতবিরোধ দেখা দিয়েছে, তোমার ইচ্ছায় আমাকে তার সঠিক পথ দেখিয়ে দাও। তুমি যাকে চাও, তাকে সঠিক পথের দিশা দিয়ে থাকো।//</p>

            <div className='pb-8'>
              <p className='text-green'>রেফারেন্স</p>
              <p>সূরা আল-ফাতিহা ১:৫</p>
            </div>

            {/* footer images */}
            
            <ContFot />

          </div>
          <div class="bg-white rounded-lg shadow-md mt-5 p-6">
            <div className='flex gap-4 pb-6 items-center'>
              <Image
                src={star} // Replace with your image path
                alt="Image 2"
                width={24}
                height={24}
                className="w-9 h-9 "
              />
              <p>৩. দাসমুক্তির সওয়াব</p>
            </div>
            <p className='py-4 text-3xl text-right'>/اِهْدِنِي لِمَا اخْتُلِفَ فِيهِ مِنَ الْحَقِّ بِإِذْنِكَ إِنَّكَ تَهْدِي مَنْ تَشَاءُ إِلَى صِرَاطٍ مُّسْتَقِيْمٍ/</p>

            <p className='py-4'>উচ্চারণঃ //ইহদিনী লিমাখতুলিফা ফীহি মিনাল হাক্কি‌ বিইযনিকা ইন্নাকা তাহ্‌দী মান তাশা-উ ইলা- সিরা-তিম মুস্তাকীম//</p>


            <div className='pb-8'>
              <p className='text-green'>রেফারেন্স</p>
              <p>সূরা আল-ফাতিহা ১:৫</p>
            </div>

            {/* footer images */}
            {/* <div className="flex justify-between">
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
            </div> */}
            <ContFot />

          </div>


        </div>
      </section>

    </div>
  )
}

export default HomePage