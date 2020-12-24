import React, { Component } from 'react'

export class NavBar extends Component {

    static defaultProps={
        title:"Github Finder"
    }

    render() {
        return (
            <nav className="navbar bg-primary">
                {this.props.title}
            </nav>
        )
    }
}

export default NavBar;
