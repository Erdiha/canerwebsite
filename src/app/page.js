'use client';

import { useEffect, useRef } from 'react';

export default function Home() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    const getRandomColor = () => {
      // Generate a random color
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
      drip.style.backgroundColor = getRandomColor(); // Apply random color

      container.appendChild(drip);
      setTimeout(() => {
        container.removeChild(drip);
      }, 20000); // Matches the animation duration
    };

    container.addEventListener('click', createDripEffect);

    return () => {
      container.removeEventListener('click', createDripEffect);
    };
  }, []);

  return (
    <div className="flex w-screen h-[90vh] border-2 p-4 border-white bg-gray-600">
      <main
        className="flex flex-col items-center relative h-full overflow-hidden w-full"
        ref={containerRef}
      ></main>
    </div>
  );
}
