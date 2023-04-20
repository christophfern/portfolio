import React from 'react';

function Portfolio() {
  return (
    <div>
      {/* Work Experience section */}
      <section className="bg-accent-100 py-12">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <h2 className="text-3xl font-bold text-primary-500 mb-4">Work Experience</h2>
          <div class="flex flex-wrap -mx-2">
            <div class="w-full lg:w-1/2 px-2 mb-4">
              <div class="bg-white p-6 shadow-lg rounded-lg">
                <h3 class="text-lg font-bold mb-2">Web Developer</h3>
                <p class="text-gray-500 mb-2">ABC Company</p>
                <p class="text-gray-500 mb-2">January 2020 - Present</p>
                <p class="text-gray-600 mb-4">Description of job responsibilities and accomplishments.</p>
                <ul class="list-disc ml-6 text-gray-600">
                  <li class="mb-1">Responsibility or accomplishment</li>
                  <li class="mb-1">Responsibility or accomplishment</li>
                  <li>Responsibility or accomplishment</li>
                </ul>
              </div>
            </div>
            <div class="w-full lg:w-1/2 px-2 mb-4">
              <div class="bg-white p-6 shadow-lg rounded-lg">
                <h3 class="text-lg font-bold mb-2">Front-end Developer</h3>
                <p class="text-gray-500 mb-2">XYZ Company</p>
                <p class="text-gray-500 mb-2">June 2018 - December 2019</p>
                <p class="text-gray-600 mb-4">Description of job responsibilities and accomplishments.</p>
                <ul class="list-disc ml-6 text-gray-600">
                  <li class="mb-1">Responsibility or accomplishment</li>
                  <li class="mb-1">Responsibility or accomplishment</li>
                  <li>Responsibility or accomplishment</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* Projects section */}
   <section className="bg-primary-500 py-12">
     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
       <h2 className="text-3xl font-bold text-white mb-4">Projects</h2>
       <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
         <div className="bg-secondary-400 p-6 rounded-lg shadow-lg">
           <h3 className="text-2xl font-bold text-white mb-2">Project 1</h3>
           <p className="text-secondary-200 mb-4">Description of project.</p>
           <ul className="list-disc ml-6 text-secondary-100">
             <li className="mb-1">Feature or functionality of project</li>
             <li className="mb-1">Feature or functionality of project</li>
             <li>Feature or functionality of project</li>
           </ul>
         </div>
         <div className="bg-secondary-400 p-6 rounded-lg shadow-lg">
           <h3 className="text-2xl font-bold text-white mb-2">Project 2</h3>
           <p className="text-secondary-200 mb-4">Description of project.</p>
           <ul className="list-disc ml-6 text-secondary-100">
             <li className="mb-1">Feature or functionality of project</li>
             <li className="mb-1">Feature or functionality of project</li>
             <li>Feature or functionality of project</li>
           </ul>
         </div>
       </div>
     </div>
   </section>

      {/* Skills section */}
    <section className="bg-accent-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-primary-500 mb-4">Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold text-primary-500 mb-4">Front-end</h3>
            <ul className="list-disc ml-6">
              <li className="mb-1">HTML</li>
              <li className="mb-1">CSS</li>
              <li className="mb-1">JavaScript</li>
              <li className="mb-1">React</li>
              <li>Vue</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold text-primary-500 mb-4">Back-end</h3>
            <ul className="list-disc ml-6">
              <li className="mb-1">Node.js</li>
              <li className="mb-1">PHP</li>
              <li className="mb-1">Python</li>
              <li className="mb-1">Ruby</li>
              <li>Java</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-bold text-primary-500 mb-4">Tools & Platforms</h3>
            <ul className="list-disc ml-6">
              <li className="mb-1">Git</li>
              <li className="mb-1">AWS</li>
              <li className="mb-1">Docker</li>
              <li className="mb-1">WordPress</li>
              <li>Shopify</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

  <section className="bg-primary-500 py-12">
     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-6">Resume and Cover Letter</h2>
        <div className="flex space-x-4">
          <a href="#" className="bg-secondary-400 text-white py-2 px-4 rounded-md font-medium hover:bg-accent-400 ml-4 mr-4">
            Download Resume
          </a>
          <a href="#" className="bg-secondary-400 text-white py-2 px-4 rounded-md font-medium hover:bg-accent-400 ml-4 mr-4">
            Download Cover Letter
          </a>
        </div>
      </div>
    </section>
</div>
);
}

export default Portfolio;