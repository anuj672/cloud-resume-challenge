import { useState } from 'react'
import Header from 'components/Header.jsx'
import { Outlet, NavLink } from 'react-router';

export default function Layout() {
  const [count, setCount] = useState(0)

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

