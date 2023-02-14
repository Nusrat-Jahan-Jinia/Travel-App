import React from 'react';
import '../App.css';
import logo from './logo.png'

// TODO: Change the Image PNG with the SVG files.
// TODO: Add the home path to the Logo.

function Header() {
  return (
    <>
      <div className="navbar bg-base-200 max-h-32">
        <div className="flex-1">
          <a href={'/'} className="btn btn-ghost normal-case text-xl">
            <span className='text-green-800'>GC TRAVELS&nbsp;|&nbsp;</span>
            <span className='text-yellow-600'>EXPLORE</span>
          </a>
        </div>
        <div className="flex-none">
          <img src={logo} alt="Logo" className='h-12 w-auto object-contain'/>
        </div>
      </div>
    </>
  );
}

export default Header;
