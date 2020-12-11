import {useState} from 'react'
import './AboutMe.css'
import React_logo from '../../images/React_logo.png'
import ruby_logo from '../../images/ruby_logo.png'
import html_css_js from '../../images/html_css_js.png'
import rails_logo from '../../images/rails_logo.png'
import mongodb_logo from '../../images/mongodb_logo.png'
import nodejs_logo from '../../images/nodejs_logo.png'
import postgresSQL_logo from '../../images/postgresSQL_logo.png'
import express_logo from '../../images/express_logo.jpeg'


export default function AboutMe() {

  const tabs = ['Who am I', 'Skills', 'Experience', 'Education']

  const [selected, setSelected] = useState(tabs[0])

  return (
    <div className="about_me_full_div">
      <div className="about_me_inner_full_div">
        <div className="choices">
          {
            tabs.map(tab => {
              const active = (tab === selected ? 'active' : '');
              return(
                <div className='' onClick={() => setSelected(tab)} key={tab}>
                  <p className={active}>{tab}</p>
                </div>
              )
            })
          }
        </div>
        <div className="content">
          <div className={selected===tabs[0] ? "show" : "dont_show"}>
            <p className="who_am_i_description">Full Stack Developer with a naturally curious demeanor. I bring a decade of experience in operations and logistics, making me uniquely, suited to logically deconstructing and solving programming problems. I am patient, dedicated, capable of integrating into different teams and contributing to their overall success.</p>
          </div>
          <div className={selected===tabs[2] ? "show" : "dont_show"}>
            <p>General Assembly</p>
            <li>Full-time fellow in a Software Engineer Immersive (SEI) program, which included over 400 hours of professional training over 12 weeks.</li>
            <li>Hands-on approach to design and build full stack responsive web applications through Javascript, React, Express, SQL, PostgreSQL, HTML, CSS, Ruby, Rails and version-control through Git and Github.</li>
            <li>Work and collaborate with General Assembly’s UX teams to help build and better my projects, working individually or as a team, with two projects that accessed already existing API’s, and two where I built up my own.</li>
            <p>Before Code</p>
            <p>Operations Manager - Ross Stores</p>
            <p>Multi-Unit-Operations Manager  - Macy's</p>
            <p>Store Director  - Target</p>
          </div>
          <div className={selected === tabs[1] ? "show" : "dont_show"}>
            <div className="icon_container">
              <div className="icon_container1">
                <div className="logo_divs"><img src={html_css_js} alt="html logo" className="html_css_js_logo"/><p>HTML, CSS, JavaScript</p></div>
                <div className="logo_divs"><img src={React_logo} alt="react logo" className="react_logo" /><p>ReactJS</p></div>
                <div className="logo_divs"><img src={ruby_logo} alt="ruby logo" className="ruby_logo" /><p>Ruby</p></div>
                <div className="logo_divs"><img src={rails_logo} alt="rails logo" className="rails_logo" /><p>Ruby on Rails</p></div>
              </div>
              <div className="icon_container2">
                <div className="logo_divs"><img src={mongodb_logo} alt="rails logo" className="mongodb_logo" /><p>MongoDB</p></div>
                <div className="logo_divs"><img src={nodejs_logo} alt="rails logo" className="nodejs_logo" /><p>NodeJS</p></div>
                <div className="logo_divs"><img src={postgresSQL_logo} alt="rails logo" className="postgresSQL_logo" /><p>PostgresSQL</p></div>
                <div className="logo_divs"><img src={express_logo} alt="rails logo" className="express_logo" /><p>ExpressJS</p></div>
              </div>
            </div>
          </div>
          <div className={selected===tabs[3] ? "show" : "dont_show"}>
            <p>General Assembly</p>
            <p>Software Engineering Immersive-Certification of Completeion</p>
            <p>Rutgers University</p>
            <p>English Literature-Bachelor of Arts</p>
          </div>
        </div>
      </div>
    </div>
  );
}