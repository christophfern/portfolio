import React, { useState } from 'react';

function AboutMe() {
  return (
  <div className="bg-cardcolor shadow-lg rounded-lg px-4 lg:px-8 py-10">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="flex justify-center">
        <img src={require("./images/cat-image.jpeg")} alt="Chris Fernandez" className="self-auto rounded-lg shadow-lg object-cover h-80 w-80 sm:h-96 sm:w-96 md:h-120 md:w-120"/>
      </div>
      <div >
        <h2 className="text-3xl mb-4 text-header font-header">About Me</h2>
        <p className="text-lg text-body font-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam bibendum elit non mauris placerat, a lacinia nibh euismod. Fusce euismod aliquam enim, a volutpat velit tincidunt non. Proin vehicula arcu quis dolor bibendum euismod. Nunc vulputate, metus quis pellentesque tincidunt, mauris tellus placerat ipsum, in sagittis mauris arcu a diam. Donec non ipsum non enim eleifend pharetra. Suspendisse potenti. Integer varius dolor vitae urna consectetur, eu elementum nisl auctor.</p>
      </div>
    </div>
  </div>
  );
}

export default AboutMe;