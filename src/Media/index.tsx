import React from 'react';
import '../App.css';
import Tabs from '../Components/Tabs';


// TODO: Change to dynamic list

const mediaTypesList = [
  {
    name: 'Watch',
    link: 'dummy.com'
  },
  {
    name: 'Listen',
    link: 'dummy.com'
  }
];

const Media = () => {

  return (
    <>
      <div className="flex flex-1 flex-col bg-base-200">
        <Tabs data={mediaTypesList} />

        <div className="flex flex-1 flex-col justify-center min-h-screen items-center">
          <span className=' text-2xl text-indigo-500 font-bold'>Watch</span>
          <span className=' text-sm text-indigo-500 font-bold'>Watch list will be here</span>
        </div>
      </div>
    </>
  );
}

export default Media;
