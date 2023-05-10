import React, { useState } from 'react';

function AboutMe() {
  return (
  <div className="bg-cardcolor shadow-lg rounded-lg px-4 lg:px-8 py-10">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="flex justify-center items-center">
        <img src={require("./images/home-picture.jpg")} alt="Chris Fernandez" className="self-auto rounded-lg shadow-lg object-cover h-80 w-80 sm:h-96 sm:w-96 md:h-120 md:w-120"/>
      </div>
      <div >
        <h2 className="text-3xl mb-4 text-header font-header text-center">About Me</h2>
        <p className="text-lg text-body font-body">As a full-stack software engineer,
        I've learned and developed skills across almost every level of the technology stack.
        From database design and implementation to front-end development,
        I've consistently delivered high-quality work with a focus on performance and user experience.
        I specialize in building robust APIs and backend algorithms that seamlessly deliver real-time data to end-users.
        Additionally, I have experience in cloud infrastructure and infrastructure as code.
        I'm a lifelong learner, constantly exploring new technologies and pushing the boundaries of what's possible in software engineering.
        </p>
        <br/>
        <p className="text-lg text-body font-body">
         Outside of software engineering and technology, I am an avid outdoor enthusiast.
         I enjoy hiking, backpacking, and exploring nature.
         Whether it's running in the summer or snowboarding in the winter, I love being outside and pushing myself physically.
         Growing up in the great Smoky Mountains, I have a goal of hiking in every national park in the US and am always planning my next adventure.
        </p>
      </div>
    </div>
  </div>
  );
}

export default AboutMe;