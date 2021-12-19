import React, { useState, useEffect }from 'react'
import JokeCard from './JokeCard'
import './AllJokes.css'

function AllJokes() {
    const apiUrl = 'https://shielded-sierra-55191.herokuapp.com/api/jokes'
    let content = null
    const [joke, setJoke] = useState(null)

    
    useEffect(() => {
        fetch(apiUrl)
            .then(response => {
                return response.json()
            })
            .then(data => {
                setJoke(data)
            })
    }, [apiUrl])


    if (joke) {
        content = joke.map((element, key) =>
            <JokeCard currentJoke={element}/>
        )
    }
    
    return (
        <>
            <h2 className='all-jokes-header'>Can't get enough of the jokes? Here's some more!</h2>
            <div className='all-jokes'>
                {content}
            </div>
        </>
    )
}

export default AllJokes
