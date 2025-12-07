import React from 'react';
import 'css/pages/post.css';
import blogData from 'data/blogData.json';
import ProjectItem from 'components/ProjectItem.jsx';
import { ChevronLeft } from 'lucide-react';
import { NavLink } from 'react-router-dom';

import { useParams } from 'react-router-dom';

export default function PostPage() {
  const { handle, date } = useParams();

  const post = blogData.find(proj => proj.handle === handle);
  return (
    <>
       <NavLink className="bttn licon" to={`/`}>
          <ChevronLeft />
          Back to Home   
        </NavLink>    
      <h1 className='fancy'>{post.name}</h1>
        <div className="date">{post.date}</div>
        {/* <h2>{post.name}</h2> */}
        <div className='markdown' dangerouslySetInnerHTML={{ __html: post.body_html }}></div>
    </>
    )
}