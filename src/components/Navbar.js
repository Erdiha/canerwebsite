'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useWindowSize } from './helpers/hooks/useWindowSize';
import { IoCartOutline } from 'react-icons/io5';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const size = useWindowSize();

  return (
    <nav className="bg-background text-background fixed min-h-[7vh] items-center flex z-[99999] w-full md:w-[90%] max-w-[120rem]">
      <div className="flex w-full h-full justify-between items-center px-5">
        {/* Signature Animation */}
        <Link href="/">
          <Image
            alt="landing page image"
            src="/caner1.png"
            objectFit="cover"
            width={size.width < 460 ? 40 : 75}
            height={size.height < 460 ? 40 : 75}
            className="flex bg-white shadow-2xl rounded-full border-4 border-[#EC8305] h-fit"
          />
        </Link>

        {/* Mobile menu button */}
        <button
          className="block md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>

        {/* Desktop menu items */}
        <div className="hidden md:flex space-x-6 text-white w-fit">
          <Link
            href="/exhibition"
            className="px-3 py-2 rounded hover:bg-gray-600"
          >
            Exhibition
          </Link>
          <Link href="/aboutme" className="px-3 py-2 rounded hover:bg-gray-600">
            About Me
          </Link>
          <Link href="/contact" className="px-3 py-2 rounded hover:bg-gray-600">
            Contact
          </Link>
          <Link
            href="/cart"
            className="p-3 hover:bg-gray-600 flex justify-center items-center shadow-xl border-l-[1px] border-l-[#EC8305]"
          >
            <IoCartOutline size={20} />
          </Link>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`absolute top-0 left-0 h-screen w-screen bg-gray-200 transform opacity-90 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="flex justify-end p-4">
          <button
            className="text-background focus:outline-none font-bold"
            onClick={() => setIsOpen(false)}
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>

        <div className="flex flex-col items-center space-y-4 justify-center h-screen w-screen font-semibold text-pretty">
          <Link
            href="/exhibition"
            className="text-xl px-3 py-2 rounded hover:bg-gray-700"
            onClick={() => setIsOpen(false)}
          >
            Exhibition
          </Link>
          <Link
            href="/aboutme"
            className="text-xl px-3 py-2 rounded hover:bg-gray-700"
            onClick={() => setIsOpen(false)}
          >
            About Me
          </Link>
          <Link
            href="/contact"
            className="text-xl px-3 py-2 rounded hover:bg-gray-700"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}
