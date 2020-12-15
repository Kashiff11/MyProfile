import { useState } from 'react';
import './Navbar.css'

export default function Navbar() {

  const [bars, setBars] = useState(false)

  function onMenuClick() {
    setBars(!bars)
  }

  return (
    <div className={bars===false ? "menu_bar" : "menu_bar_change"}>
      <a href="#home" id="home_page_menu_item" className={bars===false ? "menu_item" : "menu_item_change"}>Home Page</a>
      <a href="#aboutme"id="about_me_menu_item" className={bars===false ? "menu_item" : "menu_item_change"}>About Me</a>
      <a href="#projects" id="my_projects_menu_item" className={bars===false ? "menu_item" : "menu_item_change"}>My Projects</a>
      <a href="#contactme" id="contact_me_menu_item" className={bars === false ? "menu_item" : "menu_item_change"}>Contact Me</a>
      <a href={'https://github.com/Kashiff11'} target="_blank" id="git_hib_menu_item" className={bars === false ? "menu_item" : "menu_item_change"}>Github Profile</a>
      <a href={'https://www.linkedin.com/in/kashiffhkhan/'} target="_blank" id="git_hib_menu_item" className={bars === false ? "menu_item" : "menu_item_change"}>Linkedin Profile</a>
      
      <div className={bars === false ? "menu" : "menu_change"} onClick={onMenuClick}>
        <div id="bar1" className="bar"></div>
        <div id="bar2" className="bar"></div>
        <div id="bar3" className="bar"></div>
      </div>
      <div className="navbar_choices">

      </div>
    </div>
  );
}