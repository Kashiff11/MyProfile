import './App.css';
import AboutMe from './components/aboutMe/AboutMe';
import ContactMe from './components/contactMe/ContactMe';
import Homepage from './components/homepage/Homepage';
import Navbar from './components/navbar/Navbar';
import Projects from './components/projetcs/Projects';


function App() {
  return (
    <div className="app">
      <div className="app_navbar"><Navbar/></div>
      <div className="app_body_container">
        <div className="app_home_page" id="home"><Homepage/></div>
        <div className="app_about_me_page" id="aboutme"><AboutMe /></div>
        <div className="second_background">
          <div className="app_projects" id="projects"><Projects/></div>
          <div className="app_contact_me_page" id="contactme"><ContactMe/></div>
        </div>
      </div>
    </div>
  );
}

export default App;
