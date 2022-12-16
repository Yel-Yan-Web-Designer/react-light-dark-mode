import React from 'react'

const Nav = ({ darkMode , toggleDarkMode }) => {
    
  return (
   
        <nav className= {darkMode ? "dark"  : ""}>
            <div className="container">
            {/* React logo */}
            <div className="logo-container">
                <img src = "./images/react-icon-small.png" className='logo'/>
                <h3 className='logo-text'>React Facts</h3>
            </div>

            {/* light / dark toggle */}
            <div className="toggler">

                <h4 className='toggler-light'>Light</h4>

                <div className="toggler-slider" onClick={toggleDarkMode}>
                    <div className="toggler-slider-circle"></div>
                </div>

                <h4 className = "toggler-dark">Dark</h4>

            </div>
            </div>
        </nav>

  )
}

export default Nav