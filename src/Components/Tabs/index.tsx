import React from 'react';
import { Link } from 'react-router-dom';

type TabTypes = {
  data: {
    name: string | null,
    link: string
  }[]
}


const Tabs = (props: TabTypes) => {
  return(
    <>
      <div className="tabs flex flex-1 bg-base-300">
        {props.data.map(elem => {
          return(
            <Link to={elem.link}
                  className="flex flex-1 tab tab-lifted tab-lg
                           text-green-700 font-bold bg-base-300
                           hover:bg-white ">
              {elem.name}

            </Link>
          )
        })}
      </div>
    </>
  )
}

export default Tabs;
