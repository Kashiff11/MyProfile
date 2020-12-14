import React from 'react';
import './Projects.css'
import meshed from '../../images/meshed.png'
import mypoetrycollection from '../../images/mypoetrycollection.png'
import nurseline from '../../images/nurseline.png'
import { useState } from 'react'

export default function Projects() {

  const projects = ["Intro", "Meshed Family", "My Poetry Collection", "Nurseline"];

  const [selected, setSelected] = useState(projects[0])

  return (
    <div className="projects_container">
      <div className="projects_title"><p className="page_title">Some of My Projects</p></div>
      <div className="projects_navbar">
        {
          projects.map(project => {
            const activeProject = (project === selected ? 'activeProject' : '');
            return (
              <div className='' onClick={() => setSelected(project)} key={project}>
                <p className={activeProject}>{project}</p>
              </div>
            )
          })
        }
      </div>
      <div className="projects_info">
        <div className={selected===projects[0] ? "show" : "dont_show"}>
          <p className="projects_into">Here are some of my recent projects. Each project is an app with full CRUD functionallity. Click on the links above to see more details for each project.</p>
        </div>
        <div className={selected===projects[1] ? "show" : "dont_show"}>
          <div className="meshedInfo">
            <div className="meshedPic"><img src={meshed} alt="meshed screen grab" className="meshed" /></div>
            <div className="meshedDesc">
              <p className="desc">Frontend app for family organization built with React, React Router, Axios, CSS,
              creating an API with full CRUD functionality using Airtable.</p>
              <div>
                <a href={'https://agitated-northcutt-4a166c.netlify.app/'} target="_blank">Visit App</a>
              </div>
            </div>
          </div>
        </div>
        <div className={selected===projects[2] ? "show" : "dont_show"}>
          <p className="projects_into">My Poetry Collection</p>
        </div>
        <div className={selected===projects[3] ? "show" : "dont_show"}>
          <p className="projects_into">Nurseline</p>
        </div>
      </div>
    </div>
  );
}