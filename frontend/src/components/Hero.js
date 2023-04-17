import React from 'react';

function Hero() {
  return (
    <div className="bg-nature-700">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-extrabold text-nature-900 sm:text-5xl md:text-6xl">
            Welcome to My Portfolio
          </h1>
          <p className="mt-3 text-lg text-nature-900 sm:mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam bibendum elit non mauris placerat, a lacinia nibh euismod. Fusce euismod aliquam enim, a volutpat velit tincidunt non.
          </p>
          <div className="mt-10 sm:flex sm:justify-center">
            <div className="rounded-md shadow">
              <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-nature-300 bg-nature-600 hover:bg-nature-400 md:py-4 md:text-lg md:px-10">
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
