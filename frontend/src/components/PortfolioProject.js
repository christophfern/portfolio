import React from 'react';

function PortfolioProject(props) {
  return (

        <div className="bg-secondary-400 p-6 rounded-lg shadow-lg">
           <h3 className="text-2xl font-header text-white mb-2">{props.title}</h3>
           <p className="font-body text-body mb-4">{props.description}</p>
           <ul className="list-disc ml-6 font-body text-body">
            {props.features.map((feature,index) => (
                <li key={index} className="mb-1">{feature}</li>
            ))}

           </ul>
         </div>

   );
  }

export default PortfolioProject;