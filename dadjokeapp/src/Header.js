import React, { useState }from 'react'
import './Header.css'

function Header({ title }) {
    return (
        <main>
            <div className='header'>
                <h1 className='page-title'>{title}</h1><br />
                <p style={{textAlign:'center'}}>Did you hear about the bread factory burning down? They say the business is toast.</p>
            </div>
        </main>
    )
}
Header.defaultProps = {
    title: 'Dad Joke of the Day!'
}
export default Header
