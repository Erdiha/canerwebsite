'use client';
import { useState } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import Image from 'next/image';

const imagesData = [
  {
    id: 1,
    src: '/gallery/i1.jpg',
    name: 'Artwork 1',
    date: '2023-06-01',
    sold: false,
    description: 'This is an amazing piece of art.',
  },
  {
    id: 2,
    src: '/gallery/i2.jpg',
    name: 'Artwork 2',
    date: '2023-05-15',
    sold: false,
    description: 'Another beautiful creation.',
  },
  {
    id: 3,
    src: '/gallery/i3.jpg',
    name: 'Artwork 3',
    date: '2023-04-20',
    sold: true,
    description: 'Stunning visuals in this artwork.',
  },
  {
    id: 4,
    src: '/gallery/i4.jpg',
    name: 'Artwork 3',
    date: '2023-04-20',
    sold: false,
    description: 'asdsadsadsadsa',
  },
  {
    id: 5,
    src: '/gallery/i5.jpg',
    name: 'Artwork 3',
    date: '2023-04-20',
    sold: false,
    description: '',
  },
  {
    id: 6,
    src: '/gallery/i1.jpg',
    name: 'Artwork 1',
    date: '2023-06-01',
    sold: false,
    description: '',
  },
  {
    id: 7,
    src: '/gallery/i2.jpg',
    name: 'Artwork 2',
    date: '2023-05-15',
    sold: false,
    description: '',
  },
  {
    id: 8,
    src: '/gallery/i3.jpg',
    name: 'Artwork 3',
    date: '2023-04-20',
    sold: false,
    description: '',
  },
  {
    id: 9,
    src: '/gallery/i4.jpg',
    name: 'Artwork 3',
    date: '2023-04-20',
    sold: false,
    description: '',
  },
  {
    id: 10,
    src: '/gallery/i5.jpg',
    name: 'Artwork 3',
    date: '2023-04-20',
    sold: true,
    description: '',
  },
  // Add more images here
];

function DraggableImage({ image, index, moveImage }) {
  const [showDescription, setShowDescription] = useState(false);
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
    <div
      ref={(node) => ref(drop(node))}
      className={`relative p-4  rounded-lg hover:shadow-lg transition-shadow duration-200 group`}
    >
      <Image
        src={image.src}
        alt={image.name}
        width={300}
        height={300}
        className="w-full h-auto rounded shadow-lg "
      />
      {image.sold && (
        <p className="absolute top-2 right-2 px-2 py-1 bg-red-500 text-white text-xs font-bold rounded">
          SOLD
        </p>
      )}
      <p className="mt-2 text-start flex justify-start items-start">
        {image.name}
      </p>
      <p className="text-start flex justify-start items-start text-xs text-gray-500">
        {image.date}
      </p>
      {image.description && (
        <div className="absolute  top-5 bg-black bg-opacity-50 text-white p-2 opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 rounded group-hover:translate-x-1 shadow-xl">
          <p className="text-sm">{image.description}</p>
        </div>
      )}
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
      if (criteria === 'price') return a.price - b.price;
      if (criteria === 'sold') return a.sold === b.sold ? 0 : a.sold ? -1 : 1;
      if (criteria === 'available')
        return a.sold === b.sold ? 0 : a.sold ? 1 : -1;
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
      <div className="mx-auto py-10 md:py-20 max-w-7xl animate-slideUp">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-xl font-bold pl-4">Exhibition Gallery</h1>
          <div>
            <label htmlFor="sort" className="mr-2">
              Sort by:
            </label>
            <select
              id="sort"
              className="p-1 rounded border text-background"
              value={sortCriteria}
              onChange={(e) => {
                setSortCriteria(e.target.value);
                sortImages(e.target.value);
              }}
            >
              <option value="available">Available</option>
              <option value="name">Name</option>
              <option value="date">Date</option>
              <option value="price">Price</option>
              <option value="sold">Sold</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
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

// import { createClient } from '@/utils/supabase/server'
// import { cookies } from 'next/headers'

// export default async function Page() {
//   const cookieStore = await cookies()
//   const supabase = createClient(cookieStore)

//   const { data: todos } = await supabase.from('todos').select()

//   return (
//     <ul>
//       {todos?.map((todo) => (
//         <li>{todo}</li>
//       ))}
//     </ul>
//   )
// }
