import React from 'react'

function List({icon, text, onClick}) {
    return (
        <div onClick={onClick} className='navlist-item'>
            <span className='material-icons'>{ icon }</span>
            <li>{ text }</li>
        </div>
    )
}

export default List
