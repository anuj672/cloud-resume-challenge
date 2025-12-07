import React from 'react';
import 'css/pages/home.css';
import cover from 'images/linkedin.jpeg';
import blogData from 'data/blogData.json';
import PostItem from 'components/PostItem.jsx';
import linksData from 'data/linksData.json';

export default function HomePage() {
  const sortedBlogData = [...blogData].sort((a, b) => new Date(b.date) - new Date(a.date));
  return (
    <>
        <h1 className='fancy'>Anuj's Personal Website</h1>
        <div className ="intro_video">
            <img src={cover} /> 
        </div>

        <div className="links">
        {linksData.map((link) => (
          <a key={link.url} target="_blank" href={link.url}>
            <span className="icon" dangerouslySetInnerHTML={{ __html: link.icon }} />
            <span className="name">{link.name}</span>
          </a>
        ))}
      </div>

        <section className='posts'>
            <h2>Recent Posts</h2>
            {sortedBlogData.map((post) => (
              <PostItem key={post.handle} post={post} />
                ))    
            }  
        </ section>
    </>
    )
}