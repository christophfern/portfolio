import React, { useState } from 'react';
import { MenuIcon } from '@heroicons/react/outline';
import { Link, useLocation } from 'react-router-dom';
import {PageEnum} from './enum/PageEnum';


function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const selectedClass = "text-accent";
  let currentPage = useLocation().pathname
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  function isSelectedClass(pageEnum) {
    return pageEnum === currentPage;
  }

  return (
    <header className="bg-accenta">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-wrap items-center justify-between">
        <h1 className="text-3xl font-header text-header">Chris Fernandez</h1>
        <button className="block lg:hidden focus:outline-none" onClick={toggleMenu}>
          <MenuIcon className="h-6 w-6" aria-hidden="true" />
            <div
              className={isMenuOpen ? 'hidden' : 'block'}
              d="M4 6h16M4 12h16M4 18h16"
            />
            <div
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
                to={PageEnum.Home}
                className={`${ isSelectedClass(PageEnum.Home) ?  selectedClass : 'text-body font-body' }
                block rounded-lg lg:inline-block hover:text-accent transition-colors duration-300` }
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to={PageEnum.Portfolio}
                className={`${ isSelectedClass(PageEnum.Portfolio) ?  selectedClass : 'text-body font-body' }
                    block rounded-lg lg:inline-block hover:text-accent transition-colors duration-300` }
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                to={PageEnum.TechnicalBlog}
                className={`${ isSelectedClass(PageEnum.TechnicalBlog) ?  selectedClass : 'text-body font-body' }
                    block rounded-lg lg:inline-block hover:text-accent transition-colors duration-300` }
              >
                Technical Blog
              </Link>
            </li>
            <li>
              <Link
                to={PageEnum.PersonalBlog}
                className={`${ isSelectedClass(PageEnum.PersonalBlog) ?  selectedClass : 'text-body font-body' }
                   block rounded-lg lg:inline-block hover:text-accent transition-colors duration-300` }
              >
                Personal Blog
              </Link>
            </li>
            <li>
              <Link
                to={PageEnum.Contact}
                className={`${ isSelectedClass(PageEnum.Contact) ?  selectedClass : 'text-body font-body' }
                   block rounded-lg lg:inline-block hover:text-accent transition-colors duration-300` }
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
