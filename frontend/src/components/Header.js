import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export const PageEnum = Object.freeze({
    Home: '/',
    About: '/about',
    Contact: '/contact'
});


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  let currentPage = useLocation().pathname
  const selectedPage = "bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium";
  const notSelectedPage = "text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium";
//  const { hookFunction } = setCurrentLocation(useLocation().pathname);
//  const hookFunctionRef = useRef(hookFunction);
  useEffect(() => {
     console.log(currentPage)
  }, [currentPage])

  function getClass(page) {
    if (page === currentPage) {
        return selectedPage;
    }
    return notSelectedPage;
  }

  return (

    <nav className="bg-gray-800">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0">
              <img className="h-8 w-8" src="/logo.svg" alt="Logo" />
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <Link to={PageEnum.Home} className={getClass(PageEnum.Home)}>Home</Link>
                <Link to={PageEnum.About} className={getClass(PageEnum.About)}>About</Link>
                <Link to={PageEnum.Contact} className={getClass(PageEnum.Contact)}>Contact</Link>
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:hidden">
            <button type="button" onClick={() => setIsOpen(!isOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-expanded={isOpen}>
              <span className="sr-only">Open main menu</span>
              <svg className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        <div className={`${isOpen ? 'block' : 'hidden'} sm:hidden`}>
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link to="/" className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium">Home</Link>
            <Link to="/about" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">About</Link>
            <Link to="/contact" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Contact</Link>
        </div>
      </div>
    </div>

</nav>
  );
};

export default Header;