import React, { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import logoImage from '../assets/img/logo.jpg';

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const scrollSmoothHandler = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            toggleMenu(); // Close the mobile menu after clicking on a link
        }
        console.log(element)
    };
    
    return (
        <nav className="fixed top-0 w-full bg-gray-800 z-50" id='logo'>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex gap-2 items-center">
                        <img className="h-8 rounded-full" src={logoImage} alt="Logo" />
                        <a className='text-white ' href="#">Логотип</a>
                    </div>
                    {/* Navigation Links */}
                    <div className="hidden md:block">
                        <div className="flex space-x-4">
                            <a 
                                href="#home" 
                                className="text-gray-300 hover:bg-gray-700 
                                hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                onClick={() => scrollSmoothHandler('home')}
                            >Главная</a>
                            <a 
                                href="#about" 
                                className="text-gray-300 hover:bg-gray-700 
                                hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                onClick={() => scrollSmoothHandler('about')}
                            >О нас</a>
                            <a 
                                href="#features" 
                                className="text-gray-300 hover:bg-gray-700 
                                hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                onClick={() => scrollSmoothHandler('features')}
                            >Новости</a>
                            <a 
                                href="#gallery" 
                                className="text-gray-300 hover:bg-gray-700 
                                hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                onClick={() => scrollSmoothHandler('gallery')}
                            >Галлерея</a>
                            <a 
                                href="#contact" 
                                className="text-gray-300 hover:bg-gray-700 
                                hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                onClick={() => scrollSmoothHandler('contact')}
                            >Контакты</a>
                        </div>
                    </div>
                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button 
                            onClick={toggleMenu} 
                            className="text-gray-400 hover:text-white focus:outline-none 
                            focus:text-white">
                        {isOpen ? 
                            <AiOutlineClose className="h-6 w-6" /> : 
                            <AiOutlineMenu className="h-6 w-6" />
                        }
                        </button>
                    </div>
                </div>
            </div>
            {/* Responsive Menu */}
            {isOpen && (
                <div className={`md:hidden transition-all duration-300 ${isOpen ? 'block' : 'hidden'}`}>
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <a 
                            href="#home" 
                            className="text-gray-300 hover:bg-gray-700 hover:text-white 
                            block px-3 py-2 rounded-md text-base font-medium"
                            onClick={() => scrollSmoothHandler('home')}
                        >Главная</a>
                        <a 
                            href="#about" 
                            className="text-gray-300 hover:bg-gray-700 hover:text-white 
                            block px-3 py-2 rounded-md text-base font-medium"
                            onClick={() => scrollSmoothHandler('about')}
                        >О нас</a>
                        <a 
                            href="#features" 
                            className="text-gray-300 hover:bg-gray-700 hover:text-white 
                            block px-3 py-2 rounded-md text-base font-medium"
                            onClick={() => scrollSmoothHandler('features')}
                        >Новости</a>
                        <a 
                            href="#gallery" 
                            className="text-gray-300 hover:bg-gray-700 hover:text-white 
                            block px-3 py-2 rounded-md text-base font-medium"
                            onClick={() => scrollSmoothHandler('gallery')}
                        >Галлерея</a>
                        <a 
                            href="#contact" 
                            className="text-gray-300 hover:bg-gray-700 hover:text-white 
                            block px-3 py-2 rounded-md text-base font-medium"
                            onClick={() => scrollSmoothHandler('contact')}
                        >Контакты</a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navigation;

