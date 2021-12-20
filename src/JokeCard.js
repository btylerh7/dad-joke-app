import React from 'react'
import './JokeCard.css'

function JokeCard({ currentJoke }) {
    return (
        <div className='joke-card'>
            <p>{currentJoke.description}</p>
        </div>
    )
}

export default JokeCard
