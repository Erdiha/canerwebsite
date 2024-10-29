'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-background text-white p-4 fixed max-h-[10vh] h-fit w-screen z-10">
      <div className="container mx-auto flex justify-between items-center">
        {/* Signature Animation */}
        <Link href="/">
          <h1 className="text-2xl font-bold signature-animation">
            Caner Dogan
          </h1>
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
        <div className="hidden md:flex space-x-6">
          <Link href="/aboutme" className="px-3 py-2 rounded hover:bg-gray-700">
            About Me
          </Link>
          <Link href="/gallery" className="px-3 py-2 rounded hover:bg-gray-700">
            Gallery
          </Link>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed top-0 left-0 h-screen w-screen bg-gray-800 transform opacity-90 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="flex justify-end p-4">
          <button
            className="text-white focus:outline-none"
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
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>

        <div className="flex flex-col items-center space-y-4 justify-center h-full">
          <Link onClick={() => setIsOpen(!isOpen)} href="/">
            <h1 className="text-2xl font-bold font-">Caner Dogan</h1>
          </Link>
          <Link
            href="/aboutme"
            className="text-xl px-3 py-2 rounded hover:bg-gray-700"
            onClick={() => setIsOpen(false)}
          >
            About Me
          </Link>
          <Link
            href="/gallery"
            className="text-xl px-3 py-2 rounded hover:bg-gray-700"
            onClick={() => setIsOpen(false)}
          >
            Gallery
          </Link>
        </div>
      </div>
    </nav>
  );
}
