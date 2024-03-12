// components/Contacts.js
import React from 'react';

const Contacts = () => {
    return (
        <div className="bg-gray-100 py-16" id='contact'>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center">
                    <h2 className="text-3xl font-semibold text-gray-600">Свяжитесь с нами</h2>
                </div>
                <div className="mt-10 max-w-lg mx-auto">
                    <form className="grid grid-cols-1 gap-y-6">
                        <div>
                            <label 
                                htmlFor="name" 
                                className="block text-sm font-medium text-gray-700"
                            >
                                Name
                            </label>
                            <input 
                                type="text" 
                                name="name" 
                                id="name" 
                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 
                                block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-3" 
                            />
                        </div>
                        <div>
                            <label 
                                htmlFor="email" 
                                className="block text-sm font-medium text-gray-700"
                            >
                                Email
                            </label>
                            <input 
                                type="email" 
                                name="email" id="email" 
                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 
                                block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-3" 
                            />
                        </div>
                        <div>
                            <label 
                                htmlFor="message" 
                                className="block text-sm font-medium text-gray-700"
                            >
                                Message
                            </label>
                            <textarea 
                                id="message" 
                                name="message" 
                                rows="4" 
                                className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 
                                block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                            ></textarea>
                        </div>
                        <div className="text-right">
                                <button 
                                    type="submit" 
                                    className="inline-flex items-center px-4 py-2 border 
                                    border-transparent rounded-md shadow-sm text-sm font-medium 
                                    text-white bg-indigo-600 hover:bg-indigo-700 
                                    focus:outline-none focus:ring-2 focus:ring-offset-2 
                                    focus:ring-indigo-500"
                                >
                                    Send
                                </button>
                        </div>
                    </form>
                    {/* Section for contact information */}
                    <div>
                        <h3 className="text-xl font-semibold mb-4">Контакты:</h3>
                        <div>
                        <p className="text-sm font-medium text-gray-700 mb-2">Страна:</p>
                        <p className="text-gray-600">Кыргызстан</p>
                        </div>
                        <div>
                        <p className="text-sm font-medium text-gray-700 mb-2">Адрес:</p>
                        <p className="text-gray-600">Ваш Адрес</p>
                        </div>
                        <div>
                        <p className="text-sm font-medium text-gray-700 mb-2">Номер тел.:</p>
                        <p className="text-gray-600">Номер вашего телефона</p>
                        </div>
                        <div>
                        <p className="text-sm font-medium text-gray-700 mb-2">Электронная почта:</p>
                        <p className="text-gray-600">Ваша эл.почта</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contacts;
