import React from 'react';

function Skill(props) {
  return (

<div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-xl font-header text-accent mb-4">{props.skillType}</h3>
        <ul className="font-body text-accent list-disc ml-6">
        {props.skills.map( (skill, index) => (
            <li key={index} className="mb-1">{skill}</li>
        ))}
        </ul>
      </div>

   );
  }

export default Skill;