import { use, useState } from 'react'
import { useEffect } from 'react';
import Header from 'components/Header.jsx'
import { Outlet, NavLink, useLocation } from 'react-router';
import 'css/default.css'

export default function Layout() {

  const location = useLocation();

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

