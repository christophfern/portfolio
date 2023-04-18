import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MenuIcon } from '@heroicons/react/outline';


function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-primary-500 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-wrap items-center justify-between">
        <h1 className="text-3xl font-bold">Chris Fernandez</h1>
        <button className="block lg:hidden focus:outline-none" onClick={toggleMenu}>
          <MenuIcon className="h-6 w-6" aria-hidden="true" />
            <path
              className={isMenuOpen ? 'hidden' : 'block'}
              d="M4 6h16M4 12h16M4 18h16"
            />
            <path
              className={isMenuOpen ? 'block' : 'hidden'}
              d="M6 18L18 6M6 6l12 12"
            />
        </button>
        <nav
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } w-full lg:block lg:w-auto lg:flex lg:items-center`}
        >
          <ul className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
            <li>
              <Link
                to="/"
                className="block lg:inline-block hover:text-secondary-300"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/portfolio"
                className="block lg:inline-block hover:text-secondary-300"
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                to="/technical-blog"
                className="block lg:inline-block hover:text-secondary-300"
              >
                Technical Blog
              </Link>
            </li>
            <li>
              <Link
                to="/personal-blog"
                className="block lg:inline-block hover:text-secondary-300"
              >
                Personal Blog
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="block lg:inline-block hover:text-secondary-300"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;