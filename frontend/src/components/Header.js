import React from 'react';

function Header() {
  return (
    <header className="bg-primary-500 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">Chris Fernandez</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a href="#" className="hover:text-secondary-300">Home</a></li>
              <li><a href="#" className="hover:text-secondary-300">Portfolio</a></li>
              <li><a href="#" className="hover:text-secondary-300">Blog</a></li>
              <li><a href="#" className="hover:text-secondary-300">Contact</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;