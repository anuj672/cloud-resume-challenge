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
        <NavLink className="bttn licon" to={`/projects`}>
          <ChevronLeft />
          Back to Projects   
        </NavLink>
        <h2>{project.name}</h2>
        <p>{project.description}</p>
    </>
    )
}