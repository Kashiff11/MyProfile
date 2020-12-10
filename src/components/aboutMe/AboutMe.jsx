import {useState} from 'react'
import './AboutMe.css'


export default function AboutMe() {

  const tabs = ['Who am I', 'Skills', 'Experience', 'Education']

  const [selected, setSelected] = useState(tabs[0])

  return (
    <div className="about_me_full_div">
      <div className="about_me_inner_full_div">
        <ul className="choices nav nav-tabs">
          {
            tabs.map(tab => {
              const active = (tab === selected ? 'active' : '');
              return(
                <li className={'nav-item'} onClick={() => setSelected(tab)} key={tab}>
                  <a className={"nav-link" + active}>{tab}</a>
                </li>
              )
            })
          }
        </ul>
        <div className="content">
          <div className={selected===tabs[0] ? "show" : "dont_show"}>
            <p>Full Stack Developer with a naturally curious demeanor. I bring a decade of experience in operations and logistics, making me uniquely, suited to logically deconstructing and solving programming problems. I am patient, dedicated, capable of integrating into different teams and contributing to their overall success.</p>
          </div>
          <div className={selected===tabs[2] ? "show" : "dont_show"}>
            <p>General Assembly</p>
            <li>Full-time fellow in a Software Engineer Immersive (SEI) program, which included over 400 hours of professional training over 12 weeks.</li>
            <li>Hands-on approach to design and build full stack responsive web applications through Javascript, React, Express, SQL, PostgreSQL, HTML, CSS, Ruby, Rails and version-control through Git and Github.</li>
            <li>Work and collaborate with General Assembly’s UX teams to help build and better my projects, working individually or as a team, with two projects that accessed already existing API’s, and two where I built up my own.</li>
            <p>Ross Stores</p>
            <li>Operations and logistics manager at the largest volume location in the zone. Responsibilities included monthly payroll management, receiving, operations, hiring, and talent management.</li>
            <p>Ross Stores</p>
            <li>Operations and logistics manager at the largest volume location in the zone. Responsibilities included monthly payroll management, receiving, operations, hiring, and talent management.</li>
          </div>
        </div>
      </div>
    </div>
  );
}