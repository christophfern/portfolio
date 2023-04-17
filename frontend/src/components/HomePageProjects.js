import React from 'react';

import Project from './Project'

function HomePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="flex justify-center align-center">
        <Project
        title="This Project!"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam bibendum elit non mauris placerat, a lacinia nibh euismod. Fusce euismod aliquam enim, a volutpat velit tincidunt non."
        buttonText="Learn More"
        link="#"
        />
      </div>
    </div>
  );
}

export default HomePage;