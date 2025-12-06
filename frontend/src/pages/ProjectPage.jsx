import React from 'react';
import 'css/pages/projects.css';
import ProjectsData from 'data/ProjectsData';
import ProjectItem from 'components/ProjectItem.jsx';
import { ChevronLeft } from 'lucide-react';
import { NavLink } from 'react-router-dom';

import { useParams } from 'react-router-dom';

export default function ProjectPage() {
  const { handle } = useParams();

  const project = ProjectsData.find(proj => proj.handle === handle);
  return (
    <>
        <h1 className='fancy'>{project.name}</h1>
        <NavLink className="bttn licon" to={`/projects`}>
          <ChevronLeft />
          Back to Projects   
        </NavLink>
      
        <p>{project.description}</p>

        <div className='markdown' dangerouslySetInnerHTML={{ __html: project.body_html }}></div>
    </>
    )
}