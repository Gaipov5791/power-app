// components/About/About.js
import React from 'react';
import aboutImage from '../assets/img/work-img.jpg';

const About = () => {
    return (
        <div className="bg-gray-100 py-16" id='about'>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                <h2 className="text-3xl font-bold text-gray-600">О нас</h2>
                <p className="mt-4 text-lg text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet sapien ut leo volutpat congue.</p>
                </div>
                <div className="mt-20">
                <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
                    <div className="w-full sm:w-1/2 mb-8 sm:mb-0">
                    <img className=" w-[100%] object-cover object-center rounded-lg shadow-lg" src={aboutImage} alt="About Us" />
                    </div>
                    <div className="w-full sm:w-1/2">
                    <p className="text-lg text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet sapien ut leo volutpat congue.</p>
                    <p className="mt-4 text-lg text-gray-600">Sed in velit vehicula, vehicula velit sed, vehicula velit. In hac habitasse platea dictumst. Sed ac justo ut arcu dapibus rhoncus.</p>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default About;

