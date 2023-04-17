import React from 'react';

function HomePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="bg-white shadow-lg rounded-lg px-6 py-4">
          <h2 className="text-xl font-bold mb-2">Featured Project 1</h2>
          <p className="text-gray-700 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam bibendum elit non mauris placerat, a lacinia nibh euismod. Fusce euismod aliquam enim, a volutpat velit tincidunt non.</p>
          <a href="#" className="bg-primary-500 hover:bg-primary-600 text-white font-bold py-2 px-4 rounded-full inline-block">Learn More</a>
        </div>
        <div className="bg-white shadow-lg rounded-lg px-6 py-4">
          <h2 className="text-xl font-bold mb-2">Featured Project 2</h2>
          <p className="text-gray-700 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam bibendum elit non mauris placerat, a lacinia nibh euismod. Fusce euismod aliquam enim, a volutpat velit tincidunt non.</p>
          <a href="#" className="bg-primary-500 hover:bg-primary-600 text-white font-bold py-2 px-4 rounded-full inline-block">Learn More</a>
        </div>
        <div className="bg-white shadow-lg rounded-lg px-6 py-4">
          <h2 className="text-xl font-bold mb-2">Featured Project 3</h2>
          <p className="text-gray-700 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam bibendum elit non mauris placerat, a lacinia nibh euismod. Fusce euismod aliquam enim, a volutpat velit tincidunt non.</p>
          <a href="#" className="bg-primary-500 hover:bg-primary-600 text-white font-bold py-2 px-4 rounded-full inline-block">Learn More</a>
        </div>
      </div>
    </div>
  );
}

export default HomePage;