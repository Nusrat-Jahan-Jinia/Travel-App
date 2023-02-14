import React from 'react';
import '../App.css';


const Slider = () => {

  return (
    <>
      <div className='flex flex-1 justify-evenly items-baseline my-5'>
        <div className='absolute'>
          <span className='z-1 relative'>
            <span className='px-3 py-2
                             rounded-full
                             text-3xl
                             bg-slate-300
                             border-slate-500'>^</span>
          </span>
        </div>
      </div>
    </>
  );
}

export default Slider;
