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
        <div className="app_home_page"><Homepage/></div>
        <div className="app_about_me_page"><AboutMe /></div>
        <div className="second_background">
          <div className="app_projects"><Projects/></div>
          <div className="app_contact_me_page"><ContactMe/></div>
        </div>
      </div>
    </div>
  );
}

export default App;
