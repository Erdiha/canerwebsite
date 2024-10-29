'use client';
import { useEffect, useRef } from 'react';
import Image from 'next/image';

export default function Home() {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const text = 'Caner Dogan';

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

  useEffect(() => {
    const textElement = textRef.current;
    let index = 0;

    const typeEffect = () => {
      if (index < text.length) {
        textElement.textContent += text[index];
        index++;
        requestAnimationFrame(typeEffect); // smoother frame updates
      }
    };

    if (textElement.textContent === '') {
      typeEffect();
    }
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
            src="/brushes.jpg"
            layout="fill"
            objectFit="cover"
          />
        </div>

        <div className="absolute w-full h-full bg-gradient-to-b from-background to-transparent opacity-100"></div>

        <div className="flex items-center justify-center w-full h-full bg-transparent z-10  font-bold relative">
          <span
            ref={textRef}
            className="font-normal signature-animation ease-in-out z-[-10] relative md:text-[4.5rem] text-[2rem]"
            style={{ pointerEvents: 'none', userSelect: 'none' }}
          ></span>
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
