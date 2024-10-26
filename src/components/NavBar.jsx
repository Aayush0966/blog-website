"use client";

import Link from 'next/link';
import React, { useState, useLayoutEffect } from 'react';
import { Sun, Moon, SidebarOpenIcon, SidebarCloseIcon } from 'lucide-react'; // Import your icons

function NavBar() {
  const [isNavBarOpened, setIsNavBarOpened] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const navItems = ["home", "blogs", "about"];

  const toggleTheme = () => {
    const newTheme = isDarkTheme ? 'light' : 'dark';
    setIsDarkTheme(!isDarkTheme);

    document.documentElement.classList = newTheme;
    localStorage.setItem('theme', newTheme);
  };

  useLayoutEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      document.documentElement.classList = savedTheme;
      setIsDarkTheme(savedTheme === 'dark');
    } 
  }, []);

  return (
    <nav className='flex p-8 lg:px-32 justify-between bg-gray-200 dark:bg-gray-950 dark:text-white'>
      <div>
        <Link className='text-3xl lg:text-6xl md:text-5xl sm:text-4xl font-semibold uppercase' href='/'>DevBlogs</Link>
      </div>
      <div className='text-center lg:gap-10 justify-center items-center sm:flex hidden'>
        {navItems.map(item => (
          <Link key={item} className='mx-4 text-xl text-gray-600 dark:text-gray-300 dark:hover:text-gray-100 hover:text-gray-900' href={item}>
            {item}
          </Link>
        ))}
        {/* Theme Toggle Button for desktop users */}
        <div className='ml-4 hidden sm:block'>
          <label className="inline-flex items-center relative">
            <input
              className="hidden peer"
              type="checkbox"
              checked={isDarkTheme} // Change this line
              onChange={toggleTheme} // Ensure this function correctly toggles the theme
            />
            <div className="relative w-[110px] h-[50px] bg-white peer-checked:bg-zinc-500 rounded-full after:absolute after:content-[''] after:w-[40px] after:h-[40px] after:bg-gradient-to-r from-orange-500 to-yellow-400 peer-checked:after:from-zinc-900 peer-checked:after:to-zinc-900 after:rounded-full after:top-[5px] after:left-[5px] active:after:w-[50px] peer-checked:after:left-[105px] peer-checked:after:translate-x-[-100%] shadow-sm duration-300 after:duration-300 after:shadow-md" />
            <Sun className="fill-white peer-checked:opacity-60 absolute w-6 h-6 left-[13px]" />
            <Moon className="fill-black opacity-60 peer-checked:opacity-70 peer-checked:fill-white absolute w-6 h-6 right-[13px]" />
          </label>
        </div>

      </div>
      <div className='sm:hidden flex items-center'>
        <button 
          onClick={() => setIsNavBarOpened(!isNavBarOpened)} 
          aria-expanded={isNavBarOpened}
          className='text-gray-600 hover:text-gray-900'>
          {isNavBarOpened ? <SidebarCloseIcon size={24} /> : <SidebarOpenIcon size={24} />} {/* Render icons as JSX */}
        </button>
        {isNavBarOpened && (
          <div className='absolute dark:bg-gradient-to-t from-gray-900 via-gray-900 to-gray-950 top-16 left-0 w-full h-screen p-6 bg-gray-200 z-50'>
            <ul className='flex-col w-full h-full'>
              {navItems.map(item => (
                <li onClick={() => setIsNavBarOpened(!isNavBarOpened)} key={item} className='text-gray-600 dark:text-gray-300 pb-6 hover:text-gray-900 dark:hover:text-gray-100'>
                  <Link href={item}>{item}</Link>
                </li>
              ))}
              {/* Theme Toggle Button within Nav Items for mobile users */}
              <li className='pb-6'>
                <button 
                  onClick={toggleTheme} 
                  className='flex items-center text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100'>
                  {isDarkTheme ? <Sun size={24} /> : <Moon size={24} />} 
                  <span className='ml-2'>{isDarkTheme ? 'Light Mode' : 'Dark Mode'}</span>
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
