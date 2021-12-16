import React, { useState }from 'react'
import './Header.css'

function Header({ title }) {
    return (
        <main>
            <div className='header'>
                <h1 className='page-title'>{title}</h1>
            </div>
        </main>
    )
}
Header.defaultProps = {
    title: 'Dad Joke of the Day!'
}
export default Header
