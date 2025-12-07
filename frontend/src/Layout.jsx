import { use, useState } from 'react'
import { useEffect } from 'react';
import Header from 'components/Header.jsx'
import { Outlet, NavLink, useLocation } from 'react-router';
import 'css/default.css'
import 'css/pygments.css'
import 'css/markdown.css' 

export default function Layout() {

  const location = useLocation();
  const path = location.pathname;

  let pageName = "";
  useEffect(() => {
    if(location.pathname === "/"){
      pageName = "home";
    }
    else if(location.pathname === "/resume") {
      pageName = "resume";
    }
    else if(location.pathname === "/projects") {
      pageName = "projects";
    }
    else if (/^\/projects\/[^/]+$/.test(path)) {
      // Matches /projects/:handle
      pageName = "project";
    } 
    else if (/^\/blog\/\d{4}-\d{2}-\d{2}\/[^/]+$/.test(path)) {
      // Matches /blog/YYYY-MM-DD/:handle
      pageName = "blog_post";
    }

    document.body.setAttribute("location", pageName);

    return () => {
      document.body.removeAttribute("location");
    }
  }, [location]);

  return (
    <>
      <Header></Header>
      <div className="content_wrapp">
        <div className="content">
          <article>
            <Outlet></Outlet>
          </article>
        </div>
      </div> 
    </>       
  )
}

