import React from 'react'
import './Navbar.css'
import List from './List.js'

function Navbar() {
    return (
        <nav className='navbar'>
            <ul className='navlist'>
                <List icon='home' text="Today's Joke" />
                <List icon='explore' text="All Jokes" />
                <List icon='shuffle_on' text="Random Joke" />
                <List icon='contact_page' text="About This Project" />
            </ul>
        </nav>
    )
}

export default Navbar
