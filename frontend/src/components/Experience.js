import React from 'react';

function Experience(props) {
  return (

<div className="w-full lg:w-1/2 px-2 mb-4">
              <div className="bg-white p-6 shadow-lg rounded-lg">
                 <h3 className="text-lg font-bold mb-2">{props.title}</h3>
                {props.link ? (
                    <a href={props.link}>
                      <p className="text-gray-500 underline mb-2">{props.company}</p>
                    </a>
                  ) : (
                    <p className="text-gray-500 mb-2">{props.company}</p>
                  )}
                <p className="text-gray-500 mb-2">{props.workedYears}</p>
                <p className="text-gray-600 mb-4">{props.description}</p>
                <ul className="list-disc ml-6 text-gray-600">
                   {props.responsibilities.map( (responsibility, index) => (
                              <li key={index} className="mb-1">{responsibility}</li>
                          ))}
                </ul>
              </div>
            </div>
   );
  }

export default Experience;