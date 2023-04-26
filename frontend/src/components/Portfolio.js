import React from 'react';
import Skill from './Skill';
import Experience from './Experience';
import PortfolioProject from './PortfolioProject';

function Portfolio() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* Work Experience section */}
      <section className="bg-cardcolor rounded-lg shadow-lg py-12 mb-8">
           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
             <h2 className="text-3xl font-header text-header text-center mb-4">Work Experience</h2>
          <div class="flex flex-wrap -mx-2">

            <Experience
                title="Web Developer"
                company="ABC Company"
                workedYears='January 2020 - Present'
                description='Description of job'
                responsibilities={[
                'Responsibility or accomplishment',
                'Responsibility or accomplishment',
                'Responsibility or accomplishment'
                ]}
            />
         <Experience
                title="Web Developer"
                company="ABC Company"
                workedYears='January 2020 - Present'
                description='Description of job'
                responsibilities={[
                'Responsibility or accomplishment',
                'Responsibility or accomplishment',
                'Responsibility or accomplishment'
                ]}
            />
         <Experience
                title="Web Developer"
                company="ABC Company"
                workedYears='January 2020 - Present'
                description='Description of job'
                responsibilities={[
                'Responsibility or accomplishment',
                'Responsibility or accomplishment',
                'Responsibility or accomplishment'
                ]}
            />


          </div>
        </div>
      </section>


      {/* Projects section */}
   <section className="bg-cardcolor rounded-lg shadow-lg py-12 mb-8">
     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
       <h2 className="text-3xl font-header text-header text-center mb-4">Projects</h2>
       <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <PortfolioProject
            title="Project 1"
            description="Description of project."
            features={
                [
                'Feature or functionality of project',
                'Feature or functionality of project',
                'Feature or functionality of project'
                ]
            }
            />
        <PortfolioProject
            title="Project 1"
            description="Description of project."
            features={
                [
                'Feature or functionality of project',
                'Feature or functionality of project',
                'Feature or functionality of project'
                ]
            }
            />
        <PortfolioProject
            title="Project 1"
            description="Description of project."
            features={
                [
                'Feature or functionality of project',
                'Feature or functionality of project',
                'Feature or functionality of project'
                ]
            }
            />

       </div>
     </div>
   </section>

      {/* Skills section */}
    <section className="bg-cardcolor rounded-lg shadow-lg py-12 mb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-header text-header text-center mb-4">Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          <Skill
            skillType="Front End"
            skills={['HTML', 'CSS', 'JavaScript', 'React']}
            />
          <Skill
            skillType="Front End"
            skills={['HTML', 'CSS', 'JavaScript', 'React']}
            />
          <Skill
            skillType="Front End"
            skills={['HTML', 'CSS', 'JavaScript', 'React']}
            />

        </div>
      </div>
    </section>

  <section className="bg-cardcolor rounded-lg shadow-lg py-12  mb-8">
     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white text-center mb-6">Resume and Cover Letter</h2>
        <div className="flex items-center justify-evenly space-x-4">
          <a href="#" className="bg-accenta hover:bg-background text-body font-body rounded-full py-2 px-4 ml-4 mr-4">
            Download Resume
          </a>
          <a href="#" className="bg-accenta hover:bg-background text-body font-body rounded-full py-2 px-4 ml-4 mr-4">
            Download Cover Letter
          </a>
        </div>
      </div>
    </section>
</div>
);
}

export default Portfolio;