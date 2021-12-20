import React, { useState, useContext }from 'react'
import './Header.css'
import { HeaderContext } from './HeaderContext'

function Header() {
    const [header, setHeader] = useContext(HeaderContext)
    return (
        <main>
            <div className='header'>
                <h1 className='page-title'>{header.title}</h1><br />
                <p style={{textAlign:'center'}}>{header.description}</p>
            </div>
        </main>
    )
}
export default Header
