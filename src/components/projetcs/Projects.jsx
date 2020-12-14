import React from 'react';
import './Projects.css'
import meshed from '../../images/meshed.png'
import mypoetrycollection from '../../images/mypoetrycollection.png'
import nurseline from '../../images/nurseline.png'
import { useState } from 'react'

export default function Projects() {

  const projects = ["Meshed Family", "My Poetry Collection", "Nurseline"];

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
          <div className="meshedInfo">
            <div className="meshedPic"><img src={meshed} alt="meshed screen grab" className="meshed" /></div>
            <div className="meshedDesc">
              <p className="desc">Frontend app for family organization built with React, React Router, Axios, CSS,
              creating an API with full CRUD functionality using Airtable.</p>
              <div className="buttons">
                <a href={'https://agitated-northcutt-4a166c.netlify.app/'} target="_blank"><button className="test">Visit App</button></a>
                <a href={'https://github.com/Kashiff11/Meshed'} target="_blank"><button className="test">Github Repo</button></a>
              </div>
            </div>
          </div>
        </div>
        <div className={selected===projects[1] ? "show" : "dont_show"}>
        <div className="meshedInfo">
            <div className="meshedPic"><img src={mypoetrycollection} alt="meshed screen grab" className="meshed" /></div>
            <div className="meshedDesc">
              <p className="desc">Full-stack app with full CRUD built using Ruby on Rails, PostgresSQL, and React.
              Users can add their favorite poems and poets and read a user’s feed of all poems.</p>
              <div className="buttons">
                <a href={'https://nifty-bohr-a8b873.netlify.app'} target="_blank"><button className="test">Visit App</button></a>
                <a href={'https://github.com/Kashiff11/MyPoemsCollection.com'} target="_blank"><button className="test">Github Repo</button></a>
              </div>
            </div>
          </div>
        </div>
        <div className={selected===projects[2] ? "show" : "dont_show"}>
        <div className="meshedInfo">
            <div className="meshedPic"><img src={nurseline} alt="meshed screen grab" className="meshed" /></div>
            <div className="meshedDesc">
              <p className="desc">Fullstack app for nurses and healthcare workers with full CRUD built in partnership with UX team. Built using React, CSS, Express, MongoDB.</p>
              <div className="buttons">
                <a href={'https://nurseline.netlify.app/'} target="_blank"><button className="test">Visit App</button></a>
                <a href={'https://github.com/MakerMacAttack/nurse-line'} target="_blank"><button className="test">Github Repo</button></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}