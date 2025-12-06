import React from 'react';
import 'css/pages/home.css';
import cover from 'images/cover_thumb.png';
import blogData from 'data/blogData.json';
import PostItem from 'components/PostItem.jsx';

export default function HomePage() {
  return (
    <>
        <h1>The Cloud Resume Challenge</h1>
        <div className ="intro_video">
            <img src={cover} /> 
        </div>

        <section className='posts'>
            <h2>Recent Posts</h2>
            {blogData.map((post) => (
              <PostItem key={post.handle} post={post} />
                ))    
            }  
        </ section>
    </>
    )
}