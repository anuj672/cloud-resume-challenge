import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from "react-router"
import Layout from './Layout.jsx'
import ResumePage from './pages/ResumePage'
import BlogPage from './pages/BlogPage.jsx'
import ProjectsPage from './pages/ProjectsPage.jsx'
import ProjectPage from './pages/ProjectPage.jsx'

createRoot(document.querySelector('main')).render(
  <BrowserRouter>
    <Routes>
      <Route element={ <Layout /> }>
        <Route path="/" element={<BlogPage />} />
        <Route path="/resume" element={<ResumePage />} /> 
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/:handle" element={<ProjectPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
)
