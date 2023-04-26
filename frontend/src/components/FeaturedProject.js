import React from 'react';

function FeaturedProject(props) {

  return (
    <div >
      <h2 className="text-xl text-header font-header mb-2">{props.title}</h2>
      <p className="text-body font-body mb-4">{props.description}</p>
      <a href={props.link} className="bg-accenta hover:bg-background text-body font-body py-2 px-4 rounded-full inline-block">{props.buttonText}</a>
    </div>
  );
}

export default FeaturedProject;