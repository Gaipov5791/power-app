import React from 'react';
import backgroundImage from '../assets/img/гэс.jpg';

const Home = () => {
    return (
        <div 
            className="header bg-cover bg-center h-screen flex items-center justify-center" 
            id='home'
            style={{
                backgroundImage: `url(${backgroundImage})`, 
                backgroundSize: 'cover', 
                backgroundRepeat: 'no-repeat'
            }}>
            <div className="max-w-md px-4 py-8 bg-white bg-opacity-75 shadow-lg rounded-lg">
                <h2 className="text-2xl font-bold mb-4">Welcome to Our Website</h2>
                <p className="text-gray-700">This is a simple home page created with React and Tailwind CSS.</p>
                <p className="text-gray-700">Feel free to explore the different sections of our website.</p>
            </div>
        </div>
    );
};

export default Home;

