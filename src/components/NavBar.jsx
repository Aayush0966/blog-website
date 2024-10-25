"use client";

import Link from 'next/link';
import React, { useState } from 'react';

function NavBar() {
  const [isNavBarOpened, setIsNavBarOpened] = useState(false);

  const navItems = ["home", "blogs", "about"];

  return (
    <nav className='flex p-8 lg:px-32 justify-between bg-white dark:bg-gray-950 dark:text-white'>
      <div>
        <Link className='text-3xl lg:text-6xl md:text-5xl sm:text-4xl font-semibold uppercase' href='#'>DevBlogs</Link>
      </div>
      <div className='text-center lg:gap-10 justify-center items-center sm:flex hidden'>
        {navItems.map(item => (
          <Link key={item} className='mx-4 text-xl  text-gray-600 dark:text-gray-300 dark:hover:text-gray-100 hover:text-gray-900' href={item}>
            {item}          </Link>
        ))}
      </div>
      <div className='sm:hidden flex'>
        <button 
          onClick={() => setIsNavBarOpened(!isNavBarOpened)} 
          aria-expanded={isNavBarOpened}
          className='text-gray-600 hover:text-gray-900'>
          {isNavBarOpened ? "Close" : "Open"}
        </button>
        {isNavBarOpened && (
          <div className='absolute top-16 left-0 w-full h-screen p-6 bg-gray-200 z-50'>
            <ul className='flex-col w-full h-full'>
              {navItems.map(item => (
                <li key={item} className='text-gray-600 pb-6 hover:text-gray-900'>
                  <Link href={item}>{item}</Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
