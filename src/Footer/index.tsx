import React from 'react';
import '../App.css';
import explore from './Explore.png';
import media from './Media.png';
import resources from './Resources.png';
import socialMedia from './social-media.png';
import { Link } from 'react-router-dom';


// TODO: Change the Image PNG with the SVG files.
// TODO: Change the Hover and Focused State of the svg icon to Yellow.

function Footer() {
  return (
    <>
      <footer className="flex flex-1 items-center py-10 bg-base-200 ">
        <div className="flex flex-1 justify-center content-center">
          <div className='flex  flex-1 place-content-center'>
            <Link to="/">
              <img src={resources} alt={"resources"}  className={'object-contain h-8 w-auto'}/>
            </Link>
          </div>

          <div className='flex flex-1 place-content-center'>
            <Link to="/explores">
              <img src={explore} alt={"Explore"} className={'object-contain h-8 w-auto'}/>
            </Link>
          </div>
          <div className='flex  flex-1 place-content-center'>
            <Link to="/media">
              <img src={media} alt={"Media"}  className={'object-contain h-8 w-auto'}/>
            </Link>
          </div>
          <div className='flex  flex-1 place-content-center'>
            <Link to="/social-media">
              <img src={socialMedia} alt={"Media"}  className={'object-contain h-8 w-auto'}/>
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
