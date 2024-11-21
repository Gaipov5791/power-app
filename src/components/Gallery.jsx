// components/Gallery/Gallery.js
import React from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import galleryImage1 from '../assets/img/image1.jpg';
import galleryImage2 from '../assets/img/nature-2.jpg';
import galleryImage3 from '../assets/img/nature-3.jpg';
import galleryImage4 from '../assets/img/nature-4.jpg';

const Gallery = () => {
    return (
        <div className="bg-gray-100 py-16 text-center" id='gallery'>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-semibold text-gray-600">Галерея</h2>
                </div>
                <div className="mt-10">
                    <Swiper
                        modules={[Navigation]}
                        spaceBetween={30}
                        slidesPerView={1}
                        navigation={true}
                    >
                        <SwiperSlide className="h-[28rem]">
                        <img className="w-full h-full object-cover" src={galleryImage1} alt="Gallery Image 1" />
                        </SwiperSlide>
                        <SwiperSlide className="h-[28rem]">
                        <img className="h-auto w-full" src={galleryImage2} alt="Gallery Image 2" />
                        </SwiperSlide>
                        <SwiperSlide className="h-[28rem]">
                        <img className="h-auto w-full" src={galleryImage3} alt="Gallery Image 2" />
                        </SwiperSlide>
                        <SwiperSlide className="h-[28rem]">
                        <img className="h-auto w-full" src={galleryImage4} alt="Gallery Image 2" />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Gallery;
