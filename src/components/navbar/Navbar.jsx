import { useState } from 'react';
import './Navbar.css'

export default function Navbar() {

  const [bars, setBars] = useState(false)

  function onMenuClick() {
    setBars(!bars)
  }

  return (
    <div className="menu_bar" onClick={onMenuClick}>
      <div className={bars === false ? "menu" : "menu_change"} >
        <div id="bar1" className="bar"></div>
        <div id="bar2" className="bar"></div>
        <div id="bar3" className="bar"></div>
      </div>
    </div>
  );
}