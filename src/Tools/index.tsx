import React from 'react';
import '../App.css';
import Collapse from './components/collapse';

function Tools() {

  // TODO: Get this from json file later.
  // Right now get it form the static List

  const toolsResourcesInfo = [
    {
      name: 'Accommadotion',
      description: 'Lorem Ipsum Doler Ummit',
      links: [
        {
          name: 'kayak',
          link: 'https://example.com'
        },
        {
          name: 'Expedia',
          link: 'https://example.com'
        }
      ]
    },
    {
      name: 'Flight',
      description: 'Lorem Ipsum Doler Ummit',
      links: [
        {
          name: 'Flight Link',
          link: 'https://example.com'
        }
      ]
    },
    {
      name: 'Train',
      description: 'Lorem Ipsum Doler Ummit',
      links: [
        {
          name: 'Train Link',
          link: 'https://example.com'
        }
      ]
    },
    {
      name: 'Rental Car',
      description: 'Lorem Ipsum Doler Ummit',
      links: [
        {
          name: 'Rental Link',
          link: 'https://example.com'
        }
      ]
    },
    {
      name: 'Visit',
      description: 'Lorem Ipsum Doler Ummit',
      links: [
        {
          name: 'Visit Link',
          link: 'https://example.com'
        }
      ]
    },
    {
      name: 'Cruise',
      description: 'Lorem Ipsum Doler Ummit',
      links: [
        {
          name: 'Cruise Link',
          link: 'https://example.com'
        }
      ]
    },
    {
      name: 'Tour',
      description: 'Lorem Ipsum Doler Ummit',
      links: [
        {
          name: 'Tour Link',
          link: 'https://example.com'
        }
      ]
    }
  ];

  return (
    <>
      <div className='flex flex-col flex-1'>
        {toolsResourcesInfo.map(tool => {
          return(
            <Collapse name={tool.name}
                      description={tool.description}
                      links={tool.links}
                      key={tool.name} />
          )
        })}
      </div>
    </>
  );
}

export default Tools;
