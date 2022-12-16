import React from 'react';
import bgDarkImage from '../img/react-icon-dark.png';
import bgLightImage from '../img/react-icon-light.png';

const Main = ({ darkMode }) => {

  return (
    <main 
        className= {darkMode ? "dark" : ""} 
        style = {{
            backgroundImage : darkMode ? `url(${bgDarkImage})` : `url(${bgLightImage})`,
            backgroundRepeat : 'no-repeat',
            backgroundPosition : 'right center',
        }}>
        <div className="container main">
        <h1>Fun facts about React</h1>
        <ul>
            <li>Was first released in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 100L stars on Github</li>
            <li>Powers thousands of enterprise apps, including mobile apps</li>
        </ul>
        </div>
    </main>
    )
}

export default Main