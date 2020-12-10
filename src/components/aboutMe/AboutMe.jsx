import {useState} from 'react'
import './AboutMe.css'


export default function AboutMe() {

  const tabs = ['Who am I', 'Skills', 'Experience', 'Education']

  const [selected, setSelected] = useState(tabs[0])

  return (
    <div className="about_me_full_div">
      <div className="about_me_inner_full_div">
        <div>
          {
            tabs.map(tab => {
              const active = (tab === selected ? 'active' : '');
              return(
                <p className={'test' + active} onClick={ () => setSelected(tab)} key={tab}>{tab}</p>
              )
            })
          }
        </div>
      </div>
    </div>
  );
}