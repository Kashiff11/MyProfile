import { useState } from 'react';
import './Navbar.css'

export default function Navbar() {

  const [bars, setBars] = useState(false)

  function onMenuClick() {
    setBars(!bars)
  }

  return (
    <div className={bars === false ? "menu_bar" : "menu_bar_change"}>
      <p id="home_page_menu_item" className={bars===false ? "menu_item" : "menu_item_change"}>Home Page</p>
      <p id="about_me_menu_item" className={bars===false ? "menu_item" : "menu_item_change"}>About Me</p>
      <p id="my_projects_menu_item" className={bars===false ? "menu_item" : "menu_item_change"}>My Projects</p>
      <p id="my_projects_menu_item" className={bars===false ? "menu_item" : "menu_item_change"}>A Junior Dev's Blog</p>
      <p id="contact_me_menu_item" className={bars===false ? "menu_item" : "menu_item_change"}>Contact Me</p>
      
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