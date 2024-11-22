// components/Gallery/Gallery.js
// import React from 'react';
// import { Navigation } from 'swiper/modules';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/navigation';
// import galleryImage1 from '../assets/img/image1.jpg';
// import galleryImage2 from '../assets/img/nature-2.jpg';
// import galleryImage3 from '../assets/img/nature-3.jpg';
// import galleryImage4 from '../assets/img/nature-4.jpg';

// const Gallery = () => {
//     return (
//         <div className="bg-gray-100 py-16 text-center" id='gallery'>
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                 <div className="text-center">
//                     <h2 className="text-3xl font-semibold text-gray-600">Галерея</h2>
//                 </div>
//                 <div className="mt-10">
//                     <Swiper
//                         modules={[Navigation]}
//                         spaceBetween={30}
//                         slidesPerView={1}
//                         navigation={true}
//                     >
//                         <SwiperSlide className="h-screen">
//                         <img className="w-full h-full object-contain" src={galleryImage1} alt="Gallery Image 1" />
//                         </SwiperSlide>
//                         <SwiperSlide className="h-screen">
//                         <img className="w-full h-full object-contain" src={galleryImage2} alt="Gallery Image 2" />
//                         </SwiperSlide>
//                         <SwiperSlide className="h-screen">
//                         <img className="w-full h-full object-contain" src={galleryImage3} alt="Gallery Image 2" />
//                         </SwiperSlide>
//                         <SwiperSlide className="h-screen">
//                         <img className="w-full h-full object-contain" src={galleryImage4} alt="Gallery Image 2" />
//                         </SwiperSlide>
//                     </Swiper>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default Gallery;

// components/Gallery.js
import React, { useState } from 'react';
import galleryImage1 from '../assets/img/image1.jpg';
import galleryImage2 from '../assets/img/nature-2.jpg';
import galleryImage3 from '../assets/img/nature-3.jpg';
import galleryImage4 from '../assets/img/nature-4.jpg';

const images = [
  { src: galleryImage1, alt: 'Image 1' },
  { src: galleryImage2, alt: 'Image 2' },
  { src: galleryImage3, alt: 'Image 3' },
  { src: galleryImage4, alt: 'Image 4' },
  { src: '/image5.jpg', alt: 'Image 5' },
  { src: '/image6.jpg', alt: 'Image 6' },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isClosing, setIsClosing] = useState(false);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      setSelectedImage(null);
      setIsClosing(false);
    }, 300); // Match the duration of the transition
  };

  return (
    <div className="bg-gray-100 py-16" id='gallery'>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">ГАЛЛЕРЕЯ</h2>
        </div>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-lg"
              onClick={() => openModal(image)}
            >
              <img
                className="w-full h-64 object-cover"
                src={image.src}
                alt={image.alt}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Modal for Enlarged Image */}
      {/* Modal for Enlarged Image */}
{selectedImage && (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
        <div
            className={`relative w-full max-w-4xl max-h-screen transform transition-transform duration-300 ${
                isClosing ? 'scale-100 opacity-0' : 'scale-100 opacity-100'
            }`}
            style={{
                animation: 'fadeIn 300ms ease-in-out forwards',
            }}
        >
        <button
            className="absolute top-4 right-4 text-white text-3xl font-bold z-50"
            onClick={closeModal}
        >
            &times;
        </button>
        <img
            className="w-full h-auto rounded-lg shadow-lg"
            src={selectedImage.src}
            alt={selectedImage.alt}
        />
        </div>
    </div>
)}

    </div>
  );
};

export default Gallery;

