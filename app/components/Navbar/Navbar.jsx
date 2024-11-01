'use client';
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import LogoLight from '../../components/Logo/LogoLight';
import BookCateringBtn from '../../components/Button/Button';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  /** Close dropdown menu (if open) when clicked outside */
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    // bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <nav className="flex justify-between items-center h-navbar p-5 bg-neutral-900">
      {/* NAVBAR LOGO */}
      <Link href="/" className="sm:flex-shrink-0" onClick={() => setIsOpen(false)}>
        <LogoLight />
      </Link>

      {/* DROPDOWN BUTTON (mobile devices) */}
      <div className="sm:hidden" ref={dropdownRef}>
        <button className="flex items-center text-neutral-100 focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
          <span className={`transition-opacity duration-250 ${isOpen ? 'opacity-0' : 'opacity-100'}`}>
            {/* OPEN dropdown menu icon (hamburger) */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-auto w-6"
              fill="none"
              viewBox="0 0 22 22"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </span>
          <span className={`transition-opacity duration-300 absolute ${isOpen ? 'opacity-100' : 'opacity-0'}`}>
            {/* CLOSE dropdown menu icon (X) */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-auto w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </span>
        </button>

        {/* DROPDOWN MENU (mobile devices) */}
        <div className={`flex flex-col gap-4 absolute right-0 w-full mt-4 py-6 bg-neutral-900 rounded-b-sm text-lg font-light text-neutral-100 text-center transition-all ease-in-out duration-300 transform ${ isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none' }`}>
          <Link href="menu" className="block hover:text-stone-300 transition-all ease-linear duration-150" onClick={() => setIsOpen(false)}>
            MENU
          </Link>
          <Link href="our-story" className="block hover:text-stone-300 transition-all ease-linear duration-150" onClick={() => setIsOpen(false)}>
            OUR STORY
          </Link>
          <Link href="book-catering" className="block w-fit m-auto" onClick={() => setIsOpen(false)}>
            <BookCateringBtn>BOOK CATERING</BookCateringBtn>
          </Link>
        </div>
      </div>

      {/* NAVBAR LINKS (other devices) */}
      <div className="hidden sm:flex sm:items-center sm:gap-6 text-base font-light text-neutral-100 text-center">
        <Link href="menu" className="hover:text-gray-400 transition-all ease-linear duration-150">
          MENU
        </Link>
        <Link href="our-story" className="hover:text-gray-400 transition-all ease-linear duration-150">
          OUR STORY
        </Link>
        <Link href="book-catering">
          <BookCateringBtn>BOOK CATERING</BookCateringBtn>
        </Link>
      </div>
    </nav>
  );
}
