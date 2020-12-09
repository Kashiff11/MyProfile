import {useState} from 'react'
import './AboutMe.css'


export default function AboutMe() {

  // const [tab, setTab] = useState('who_am_i')

  // function onTabClick(int) {
  //   if (int === 1) {
  //       setTab('skills')
  //   } else {
  //     setTab('who am i')
  //     }
  // }

  return (
    <div className="about_me_full_div">
      <div className="about_me_inner_full_div">
        <div className="about_me_categories">
          <div id="who_am_i"><p className="category_titles">Who Am I</p></div>
          <div id="skills"><p className="category_titles">Skills</p></div>
          <div id="experience"><p className="category_titles">Experience</p></div>
          <div id="education"><p className="category_titles">Education</p></div>
        </div>
        <div className="about_me_content">
          <p className="about_me_content_title">Who Am I</p>
          <p className="about_me_content_desc">I am a full stack developer with a naturally curious demeanor. I bring a decade of experience in operations & logistics, making me uniquely, suited to logically deconstructing and solving programming problems. I am patient, dedicated, capable of integrating into different teams and contributing to their overall success.</p>
        </div>
      </div>
    </div>
  );
}