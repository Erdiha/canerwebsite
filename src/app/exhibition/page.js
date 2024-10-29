'use client';
import { useState } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Image from 'next/image';

const imagesData = [
  { id: 1, src: '/gallery/i1.jpg', name: 'Artwork 1', date: '2023-06-01' },
  { id: 2, src: '/gallery/i2.jpg', name: 'Artwork 2', date: '2023-05-15' },
  { id: 3, src: '/gallery/i3.jpg', name: 'Artwork 3', date: '2023-04-20' },
  { id: 4, src: '/gallery/i4.jpg', name: 'Artwork 3', date: '2023-04-20' },
  { id: 5, src: '/gallery/i5.jpg', name: 'Artwork 3', date: '2023-04-20' },
  { id: 6, src: '/gallery/i1.jpg', name: 'Artwork 1', date: '2023-06-01' },
  { id: 7, src: '/gallery/i2.jpg', name: 'Artwork 2', date: '2023-05-15' },
  { id: 8, src: '/gallery/i3.jpg', name: 'Artwork 3', date: '2023-04-20' },
  { id: 9, src: '/gallery/i4.jpg', name: 'Artwork 3', date: '2023-04-20' },
  { id: 10, src: '/gallery/i5.jpg', name: 'Artwork 3', date: '2023-04-20' },
  // Add more images here
];

function DraggableImage({ image, index, moveImage }) {
  const [, ref] = useDrag({
    type: 'image',
    item: { index },
  });

  const [, drop] = useDrop({
    accept: 'image',
    hover: (draggedItem) => {
      if (draggedItem.index !== index) {
        moveImage(draggedItem.index, index);
        draggedItem.index = index;
      }
    },
  });

  return (
    <div ref={(node) => ref(drop(node))} className="p-2">
      <Image
        src={image.src}
        alt={image.name}
        width={300}
        height={300}
        className="w-full h-auto rounded shadow-lg"
      />
      <p className="text-center mt-2">{image.name}</p>
      <p className="text-center text-sm text-gray-500">{image.date}</p>
    </div>
  );
}

const Exhibition = () => {
  const [images, setImages] = useState(imagesData);
  const [sortCriteria, setSortCriteria] = useState('name');

  // Sorting logic
  const sortImages = (criteria) => {
    const sortedImages = [...images].sort((a, b) => {
      if (criteria === 'name') return a.name.localeCompare(b.name);
      if (criteria === 'date') return new Date(a.date) - new Date(b.date);
      return 0;
    });
    setImages(sortedImages);
  };

  // Drag-and-drop handler
  const moveImage = (fromIndex, toIndex) => {
    const updatedImages = [...images];
    const [movedImage] = updatedImages.splice(fromIndex, 1);
    updatedImages.splice(toIndex, 0, movedImage);
    setImages(updatedImages);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className=" mx-auto md:py-20 py-10 mw-full md:w-[90%] max-w-[120rem] scrollable-section">
        <div className="flex justify-between items-center mb-4 pr-2">
          <h1 className="text-xl font-bold pl-2">Exhibition Gallery</h1>
          <div>
            <label htmlFor="sort" className="mr-2">
              Sort by:
            </label>
            <select
              id="sort"
              className=" p-1 rounded text-background pr-2"
              value={sortCriteria}
              onChange={(e) => {
                setSortCriteria(e.target.value);
                sortImages(e.target.value);
              }}
            >
              <option value="name">Name</option>
              <option value="date">Date</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 ">
          {images.map((image, index) => (
            <DraggableImage
              key={image.id}
              image={image}
              index={index}
              moveImage={moveImage}
            />
          ))}
        </div>
      </div>
    </DndProvider>
  );
};

export default Exhibition;
