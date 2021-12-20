import React, { useState, useContext }from 'react'
import JokeCard from './JokeCard'
import './AllJokes.css'
import { JokeContext } from './JokeContext'
import { HeaderContext } from './HeaderContext'

function AllJokes() {
    let content = null
    const [joke, setJoke] = useContext(JokeContext)
    const [header, setHeader] = useContext(HeaderContext)

    if(header.hidden) {
        return(<></>)
    }

    if (joke) {
        content = joke.map((element, key) =>
            <JokeCard currentJoke={element} key={element._id}/>
        )
    }
    
    return (
        <>
            <div className='all-jokes'>
                {content}
            </div>
        </>
    )
}

export default AllJokes
