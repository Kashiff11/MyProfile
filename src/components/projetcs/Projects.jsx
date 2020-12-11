import React from 'react';
import './Projects.css'
import meshed from '../../images/meshed.png'
import mypoetrycollection from '../../images/mypoetrycollection.png'

export default function Projects() {
  return (
    <div className="projects_container">
      <div>
        <h2>My Recent Projects</h2>
        <img src={meshed} alt="meshed page" className="meshed" />
        <img src={mypoetrycollection} alt="meshed page" className="meshed"/>
      </div>
    </div>
  );
}