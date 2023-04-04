import Link from 'next/link';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { useState } from 'react';
import NavbarWebNavigation from './NavbarWebNavigation';
import NavbarMobileNavigation from './NavbarMobileNavigation';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='bg-gradient-to-r from-blue-500 to-purple-500 py-4 fixed top-0 left-0 right-0'>
      <div className='container mx-auto flex justify-between items-center'>
        <div className='flex items-center'>
          <Link href='/'>
            <button className='text-white text-xl font-bold'>Tripy</button>
          </Link>
        </div>
        <NavbarWebNavigation />
        <button
          onClick={toggleMenu}
          type='button'
          className='text-white md:hidden hover:text-gray-200 focus:outline-none'
        >
          {isOpen ? (
            <XIcon className='h-6 w-6' aria-hidden='true' />
          ) : (
            <MenuIcon className='h-6 w-6' aria-hidden='true' />
          )}
        </button>
        <NavbarMobileNavigation isOpen={isOpen} />
      </div>
    </nav>
  );
};

export default Navbar;
