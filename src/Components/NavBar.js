import React from 'react'
import PropTypes from 'prop-types'


const NavBar =({title})=> {
      
        return (
            <nav className="navbar bg-primary">
                {title}
            </nav>
        )
    
}

    NavBar.defaultProps={
        title:"Github Finder"
    };

    NavBar.propTypes={
        title: PropTypes.string.isRequired
    }

export default NavBar;
