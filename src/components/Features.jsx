import React from 'react';

const Features = () => {
    return (
        <div className="bg-gray-100 py-16 text-center" id='features'>
        <h2 className="text-3xl font-bold text-gray-600">НОВОСТИ</h2>
        <div className="flex flex-wrap justify-center mt-4">
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 mb-4">
                <div className="text-4xl mb-4">Icon 1</div>
                <div className="text-lg font-semibold mb-2">Feature 1</div>
                <div className="text-base">Description of Feature 1.</div>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 mb-4">
                <div className="text-4xl mb-4">Icon 2</div>
                <div className="text-lg font-semibold mb-2">Feature 2</div>
                <div className="text-base">Description of Feature 2.</div>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 mb-4">
                <div className="text-4xl mb-4">Icon 3</div>
                <div className="text-lg font-semibold mb-2">Feature 3</div>
                <div className="text-base">Description of Feature 3.</div>
            </div>
        </div>
        </div>
    );
};

export default Features;

