import React, { useState, createContext, useEffect} from 'react'

export const JokeContext = createContext()

export const JokeProvider = props => {
    const apiUrl = 'https://shielded-sierra-55191.herokuapp.com/api/jokes'
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


    return (
        <JokeContext.Provider value={[joke, setJoke]}>
            {props.children}
        </JokeContext.Provider>
    )
}