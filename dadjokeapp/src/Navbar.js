import React from 'react'
import './Navbar.css'

function Navbar() {
    return (
        <nav className='navbar'>
            <ul className='navlist'>
                <li>Today's Joke</li>
                <li>All Jokes</li>
                <li>Random Joke</li>
                <li>About This Project</li>
            </ul>
        </nav>
    )
}

export default Navbar
