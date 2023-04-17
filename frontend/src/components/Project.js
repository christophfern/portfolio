import React from 'react';

function Project(props) {
  return (
    <div className="bg-white shadow-lg rounded-lg px-6 py-4">
      <h2 className="text-xl font-bold mb-2">{props.title}</h2>
      <p className="text-gray-700 mb-4">{props.description}</p>
      <a href={props.link} className="bg-primary-500 hover:bg-primary-600 text-white font-bold py-2 px-4 rounded-full inline-block">{props.buttonText}</a>
    </div>
  );
}

export default Project;