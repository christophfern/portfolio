import React from 'react';

import FeaturedProject from './FeaturedProject'

function HomePage() {
  return (
    <div className="bg-cardcolor shadow-lg rounded-lg px-4 lg:px-8 py-10">
      <div className="flex justify-center align-center">
        <FeaturedProject
        title="This Project!"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam bibendum elit non mauris placerat, a lacinia nibh euismod. Fusce euismod aliquam enim, a volutpat velit tincidunt non."
        buttonText="Learn More"
        link=""
        />
      </div>
    </div>
  );
}

export default HomePage;