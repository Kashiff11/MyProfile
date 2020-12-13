import {useState} from 'react'
import './AboutMe.css'
import React_logo from '../../images/React_logo.png'
import ruby_logo from '../../images/ruby_logo.png'
import rails_logo from '../../images/rails_logo.png'
import mongodb_logo from '../../images/mongodb_logo.png'
import nodejs_logo from '../../images/nodejs_logo.png'
import postgresSQL_logo from '../../images/postgresSQL_logo.png'
import express_logo from '../../images/express_logo.jpeg'
import mui from '../../images/mui.png'
import bootstrap from '../../images/bootstrap.png'
import git from '../../images/git.png'
import css from '../../images/css.png'
import HTML5 from '../../images/HTML5.png'
import javascript from '../../images/javascript.png'
import azurelogo from '../../images/azurelogo.png'
import githublogo from '../../images/githublogo.png'
import galogo from '../../images/galogo.png'
import kkhan from '../../images/kkhan.png'



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
          <div className="ga">
              <img src={kkhan} alt="kkhan logo" className="kkhanlogo"/>
              <p className= "general_assembly">K.Khan Dev <span className="date">(December 2020-Current)</span></p>
              <p>D.C. Global Travel: developing an app for a travel agency with a front end developed with ReactJS,
              backend developed with Ruby on Rails, and databases with PostgresSQL. Adding admin features allowing
              authorized users to create informational slides for upcoming packages which will automatically update
              the home page.</p>
            </div>
            <div className="ga">
              <img src={galogo} alt="html logo" className="galogo"/>
              <p className= "general_assembly">General Assembly <span className="date">(September 2020-December 2020)</span></p>
              <p>Full-time fellow in a Software Engineer Immersive (SEI) program, which included 
              over 400 hours of professional training over 12 weeks in building full-stack responsive 
              web applications.
                Worked and collaborated with General Assembly’s UX teams to help build and better my projects,
                working individually or as a team, with two projects that accessed already existing API’s,
              and two where I built up my own.</p>
            </div>
            <div>
            <p className= "general_assembly">Before Code</p>
              <p>Operations Manager at Ross Stores, Multi-Unit-Operations Manager at Macy's, Store Director - Target</p>
            </div>
          </div>
          <div className={selected === tabs[1] ? "show" : "dont_show"}>
            <div className="icon_container">
              <div className="icon_container1">
                <div className="logo_divs"><img src={css} alt="html logo" className="css"/><p>CSS</p></div>
                <div className="logo_divs"><img src={React_logo} alt="react logo" className="react_logo" /><p>ReactJS</p></div>
                <div className="logo_divs"><img src={ruby_logo} alt="ruby logo" className="ruby_logo" /><p>Ruby</p></div>
                <div className="logo_divs"><img src={rails_logo} alt="rails logo" className="rails_logo" /><p>Ruby on Rails</p></div>
              </div>
              <div className="icon_container2">
                <div className="logo_divs"><img src={HTML5} alt="html" className="html" /><p>HTML</p></div>
                <div className="logo_divs"><img src={nodejs_logo} alt="rails logo" className="nodejs_logo" /><p>NodeJS</p></div>
                <div className="logo_divs"><img src={postgresSQL_logo} alt="rails logo" className="postgresSQL_logo" /><p>PostgresSQL</p></div>
                <div className="logo_divs"><img src={express_logo} alt="rails logo" className="express_logo" /><p>ExpressJS</p></div>
              </div>
              <div className="icon_container3">
                <div className="logo_divs"><img src={javascript} alt="javascript" className="javascript" /><p>Material UI</p></div>
                <div className="logo_divs"><img src={bootstrap} alt="rails logo" className="bootstrap" /><p>BootStrap</p></div>
                <div className="logo_divs"><img src={git} alt="git logo" className="git_logo" /><p>Git</p></div>
                <div className="logo_divs"><img src={mongodb_logo} alt="rails logo" className="mongodb_logo" /><p>MongoDB</p></div>
              </div>
              <div className="icon_container4">
                <div className="logo_divs"><img src={mui} alt="material ui" className="materialUI" /><p>Material UI</p></div>
                <div className="logo_divs"><img src={azurelogo} alt="azure" className="azure" /><p>MS Azure</p></div>
                <div className="logo_divs"><img src={githublogo} alt="git logo" className="git_logo" /><p>Github</p></div>
              </div>
            </div>
          </div>
          <div className={selected===tabs[3] ? "show" : "dont_show"}>
            <p className= "general_assembly">General Assembly</p>
            <p>Software Engineering Immersive-Certification of Completeion</p>
            <p className= "general_assembly">Rutgers University</p>
            <p>English Literature-Bachelor of Arts</p>
          </div>
        </div>
      </div>
    </div>
  );
}