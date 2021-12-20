import React, { useState, createContext } from 'react'

export const HeaderContext = createContext()

export const HeaderProvider = props => {
    const [header, setHeader] = useState({
        title: "Dad Joke Library",
        description: "This is a personal project of mine! I created my own API and built this website with React!",
        hidden: true
    })


    return (
        <HeaderContext.Provider value={[header, setHeader]}>
            {props.children}
        </HeaderContext.Provider>
    )
}