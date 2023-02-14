import React from 'react';
import { Link } from 'react-router-dom';

type CollapseTypes = {
  description: string | React.ReactElement<any, string > | React.ReactFragment | React.ReactPortal | null | undefined;
  name: string | React.ReactElement<any, string > | React.ReactFragment | React.ReactPortal | null | undefined;
  links: {
    name: string,
    link: string
  }[],
  key: string
}


const Collapse = (props: CollapseTypes) => {

  return (
    <>
      <div className='flex flex-col flex-1'>
        <div tabIndex={0}
             className="my-3 collapse collapse-plus border border-base-300 bg-base-200 rounded-box">
          <div className="collapse-title text-xl font-medium">
            {props.name}
          </div>
          <div className="collapse-content">
            <p>{props.description}</p>
            {props.links.map(elem => {
              return(
                <>
                  <span key={elem.name} className='text-blue-800 font-medium p-1 flex flex-col'>
                    <Link to={{ pathname: `${elem.link}`}} target="_blank">
                      {elem.name}
                    </Link>
                  </span>
                </>
              )
            })}
          </div>
        </div>

      </div>
    </>
  );
}

export default Collapse;
