import React from 'react';

import FeaturedProject from './FeaturedProject'

function HomePage() {
  return (
    <div className="bg-cardcolor shadow-lg rounded-lg px-4 lg:px-8 py-10">
      <div className="flex justify-center align-center">
        <FeaturedProject
        title="This Project!"
        description="I developed this entire project, which features a static React frontend deployed on top of a Spring Boot backend running on a Spring Boot server. The project is hosted on Google Cloud and utilizes AWS for file storage. My goal was to minimize expenses. Head to the GitHub to learn more."
        buttonText="GitHub"
        link="https://github.com/christophfern/portfolio"
        />
      </div>
    </div>
  );
}

export default HomePage;