import React from 'react';

function Hero() {
  return (
    <div className>
      <div className="bg-cardcolor shadow-lg rounded-lg px-4 lg:px-8 py-10">
        <div className="max-w-3xl  mx-auto text-center">
          <h1 className="text-4xl font-header text-header sm:text-5xl md:text-6xl">
            Welcome to My Portfolio
          </h1>
          <p className="mt-3 font-body text-body text-lg sm:mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam bibendum elit non mauris placerat, a lacinia nibh euismod. Fusce euismod aliquam enim, a volutpat velit tincidunt non.
          </p>
          <div className="mt-10 sm:flex sm:justify-center">
            <div className="rounded-md shadow">
              <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent bg-accenta hover:bg-background text-body font-body rounded-full md:py-4 md:text-lg md:px-10">
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
