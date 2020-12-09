import React from 'react';
import './Homepage.css'

export default function Homepage() {
  return (
    <div className="home_page_container">
      <p className="logo">{"<K. Khan/>"}</p>
      <p>Greetings. My name is <span className='home_page_name'>Kashiff Khan</span>.</p>
      <p>I am a full-stack developer currently</p>
      <p>residing in the Washington D.C. metro area.</p>
      <p>More about Me</p>
    </div>
  );
}