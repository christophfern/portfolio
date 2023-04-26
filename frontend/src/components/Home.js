import React from 'react';
import HomePageProjects from './HomePageProjects';
import Hero from './Hero';
import AboutMe from './AboutMe';

function Home() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <Hero />
      <div className="my-10">
        <AboutMe />
      </div>
      <div className="my-10">
        <HomePageProjects />
      </div>
    </div>
  );
}
export default Home;
