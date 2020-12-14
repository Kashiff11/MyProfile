import React from 'react';
import './Homepage.css'

export default function Homepage() {
  return (
    <div className="home_page_container">
      <p className="logo">{"<K.Khan/>"}</p>
      <p className="personal_intro">Greetings. My name is <span className='home_page_name'>Kashiff Khan</span>, a full-stack developer</p>
      <p personal_intro>currently residing in the Washington D.C. metro area.</p>
    </div>
  );
}