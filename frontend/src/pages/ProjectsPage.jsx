import React from 'react';
import 'css/pages/projects.css';
import projectsData from 'data/projectsData.json';
import ProjectItem from 'components/ProjectItem.jsx';

export default function ProjectsPage() {

  return (
    <>
    <h1 className='fancy'>Anuj's Projects</h1>
        <div className="projects">
            {projectsData.map((project) => (
                <ProjectItem key={project.handle} project={project} />
            ))    
            }
        </div>
    </>
    )
}