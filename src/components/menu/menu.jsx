import './menu.css'
import {BrowserRouter as Router, Link} from 'react-router-dom'

import React from 'react'

function Menu() {
    return (
        <div className="menu">
            <Router>
            <div className="menu-tabs"><Link to="/">Home</Link></div>
            <div className="menu-tabs"><Link to="/search">Search</Link></div>
            <div className="menu-tabs"><Link to="/simpsons">Simpsons</Link></div>
            </Router>
        </div>
    )
}

export default Menu
