'use client';

import { useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function Home() {
  const containerRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    const getRandomColor = () => {
      const letters = '0123456789ABCDEF';
      let color = '#';
      for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      return color;
    };

    const createDripEffect = (e) => {
      const drip = document.createElement('div');
      drip.classList.add('drip');
      drip.style.left = `${e.clientX - container.offsetLeft}px`;
      drip.style.top = `${e.clientY - container.offsetTop}px`;
      drip.style.backgroundColor = getRandomColor();

      container.appendChild(drip);
      setTimeout(() => {
        container.removeChild(drip);
      }, 5000);
    };

    container.addEventListener('click', createDripEffect);

    return () => {
      container.removeEventListener('click', createDripEffect);
    };
  }, []);

  return (
    <div className="flex w-screen h-full">
      <main
        className="flex flex-col items-center relative overflow-hidden w-full h-full z-[9999]"
        ref={containerRef}
      >
        <div className="absolute w-full h-full">
          <Image
            alt="landing page image"
            src="/gallery/landing2.jpeg"
            layout="fill"
            objectFit="cover"
          />
        </div>

        <div className="absolute w-full h-full bg-gradient-to-b from-background to-transparent opacity-100"></div>

        <div className="flex items-center justify-center w-full h-full bg-transparent z-10 font-bold relative">
          {/* Text with slide-up animation */}
          <span
            ref={textRef}
            className="font-normal text-[2rem] md:text-[4.5rem] animate-slideUp font-signature"
            style={{ pointerEvents: 'none', userSelect: 'none' }}
          >
            Caner Dogan
          </span>
          <span
            className="text-[10px] aspect-square flex justify-center items-center
            border-white border-[1px] rounded-full p-[3px] font-thin text-orange-500 animate-rotation"
          >
            Artist
          </span>
        </div>
      </main>
    </div>
  );
}
