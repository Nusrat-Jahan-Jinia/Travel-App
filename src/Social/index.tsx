import React from 'react';
import '../App.css';
import Tabs from '../Components/Tabs';

// TODO:
// We are adding the strict list for the Social Icons now.
// Should have to add the dynamic data from the File later.

const socialLinkLists = [
  {
    name: 'facebook',
    link: 'dummy.com'
  },
  {
    name: 'twitter',
    link: 'dummy.com'
  },
  {
    name: 'youtube',
    link: 'dummy.com'
  }
]

const Social = () => {

  return (
    <>
      <div className="flex flex-1 flex-col bg-base-200">
        <Tabs data={socialLinkLists} />


        <div className="flex flex-1 flex-col justify-center min-h-screen items-center">
          <span className=' text-2xl text-indigo-500 font-bold'>Social</span>
          <span className=' text-sm text-indigo-500 font-bold'>Social list will be here</span>
        </div>
      </div>
    </>
  );
}

export default Social;
