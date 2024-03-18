import Image from 'next/image'
import React from 'react'
import setting from './../public/image/setting.png'
import profile from './../public/image/profile.png'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className="navbar mr-3">
      <div className="flex-1">
        <a className="md:text-xl font-serif pt-4">দোয়া পেজ</a>
      </div>
      <div className="flex-none gap-2">

        <div className='hidden sm:block mr-24'>
          <label className="input input-bordered flex items-center gap-2">
            <input type="text" className="grow w-64" placeholder="Search by dua name" />

            <div className='p-3 rounded-lg bg-slate-100'>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" clipRule="evenodd" /></svg>
            </div>
          </label>
        </div>

        <div className="dropdown dropdown-end mr-4">
          <div tabIndex={0} role="button" className="hidden sm:block btn btn-ghost btn-circle  mr-3">
            <div className='flex items-center gap-2'>
              <Image
                alt="Tailwind CSS Navbar component"
                src={profile}
                className=''
              />
              <p>⯆</p>
            </div>
          </div>
          <ul tabIndex={0} className="mt-3 z-[0] p-3 shadow menu menu-sm dropdown-content  text-lg bg-base-100 rounded-box w-64">
            <li className='flex flex-row hover:bg-slate-100 p-1 rounded-lg'>
              <Image
                alt="Tailwind CSS Navbar component"
                src={profile}
                className=''
              />
              support us
            </li>
            <li className='flex flex-row hover:bg-slate-100 p-1 rounded-lg'>
              <Image
                alt="Tailwind CSS Navbar component"
                src={profile}
                className=''
              />
              download dua app
            </li>
            <li className='flex flex-row hover:bg-slate-100 p-1 rounded-lg'>
              <Image
                alt="Tailwind CSS Navbar component"
                src={profile}
                className=''
              />
              privacy policy
            </li>
            <li className='flex flex-row hover:bg-slate-100 p-1 rounded-lg'>
              <Image
                alt="Tailwind CSS Navbar component"
                src={profile}
                className=''
              />
              thank and credit
            </li>
            <li className='flex flex-row hover:bg-slate-100 p-1 rounded-lg'>
              <Image
                alt="Tailwind CSS Navbar component"
                src={profile}
                className=''
              />
              about us
            </li>
            <li className='flex flex-row hover:bg-slate-100 p-1 rounded-lg'>
              <Image
                alt="Tailwind CSS Navbar component"
                src={profile}
                className=''
              />
              copywrite warning
            </li>
            <li className='flex flex-row hover:bg-slate-100 p-1 rounded-lg'>
              <Image
                alt="Tailwind CSS Navbar component"
                src={profile}
                className=''
              />
              our other prozect
            </li>

          </ul>
        </div>



        <div className="drawer drawer-end mr-6">
          <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content">
            {/* Page content here */}
            <label htmlFor="my-drawer-4" >
              <Image
                alt="Tailwind CSS Navbar component"
                src={setting}
                className='w-6'
              />
            </label>
          </div>
          <div className="drawer-side">
            <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
            <ul className="menu rounded-l-3xl p-4 w-80 min-h-full bg-white text-base-content ">
              <div className='text-center text-2xl p-3'>settings</div>
              <div className='mt-2 rounded-lg border-4 border-t-0 border-l border-r border-b text-2xl'>
                <div className='text-center w-full bg-slate-100 py-3 rounded-r-xl border-l-4 border-l-green-600 text-lg flex'>
                  <Image
                    alt="pulm logo"
                    src=""
                    className='w-4 h-4 p-4'
                  />
                  Language Settings
                </div>
                <div className='text-center w-full flex gap-3 justify-center py-7 rounded-xl text-lg'>
                  <button className='bg-green-500 px-6 py-1 rounded-md text-white '>bangla</button>
                  <button className=' border-2 border-gray-500 px-6 py-1 rounded-md'>english</button>
                </div>
              </div>

              <div className='text-center mt-4 w-full bg-slate-100 py-3 rounded-xl text-lg flex'>
                <Image
                  alt="pulm logo"
                  src=""
                  className='w-4 h-4 p-4'
                />
                genarel Settings
              </div>
              <div className='text-center mt-4 w-full bg-slate-100 py-3 rounded-xl text-lg flex'>
                <Image
                  alt="pulm logo"
                  src=""
                  className='w-4 h-4 p-4'
                />
                font Settings
              </div>
              <div className='text-center mt-4 w-full bg-slate-100 py-3 rounded-xl text-lg flex'>
                <Image
                  alt="pulm logo"
                  src=""
                  className='w-4 h-4 p-4'
                />
                appearence Settings
              </div>


            </ul>
          </div>
        </div>



      </div>
    </div>)
}

export default Navbar