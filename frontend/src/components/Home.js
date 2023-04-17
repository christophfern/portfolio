import React from 'react';
import HomePageProjects from './HomePageProjects';
import Hero from './Hero';

function Home() {
  return (
    <div>
      <Hero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <img src="./images/kitty-cat-kitten.jpg" alt="Chris Fernandez" className="rounded-lg shadow-lg"/>
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            <p className="text-lg text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam bibendum elit non mauris placerat, a lacinia nibh euismod. Fusce euismod aliquam enim, a volutpat velit tincidunt non. Proin vehicula arcu quis dolor bibendum euismod. Nunc vulputate, metus quis pellentesque tincidunt, mauris tellus placerat ipsum, in sagittis mauris arcu a diam. Donec non ipsum non enim eleifend pharetra. Suspendisse potenti. Integer varius dolor vitae urna consectetur, eu elementum nisl auctor.</p>
          </div>
        </div>
      </div>
      <HomePageProjects />
    </div>
  );
}

export default Home;