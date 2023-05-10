import React from 'react';
import { Link } from 'react-router-dom';
import {PageEnum} from './enum/PageEnum';

function Hero() {
  return (
    <div className>
      <div className="bg-cardcolor shadow-lg rounded-lg px-4 lg:px-8 py-10">
        <div className="max-w-3xl  mx-auto text-center">
          <h1 className="text-4xl font-header text-header sm:text-5xl md:text-6xl">
            Welcome to My Portfolio
          </h1>
          <p className="mt-3 font-body text-body text-lg sm:mt-4">
           Thanks for visiting my portfolio! I'm thrilled to have you here.
           As a full stack software engineer with a passion for technology, I am always excited to explore new ideas.
           Through this portfolio, you will get a glimpse into both my professional work and my personal interests.
           I hope you enjoy it and I hope you reach out!
          </p>
          <div className="mt-10 sm:flex sm:justify-center">
            <div className="rounded-md shadow">
            <nav>
              <Link to={PageEnum.Contact} className="w-full flex items-center justify-center px-8 py-3 border border-transparent bg-accenta hover:bg-background text-body font-body rounded-full md:py-4 md:text-lg md:px-10">
                Get in Touch
              </Link>
             </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
