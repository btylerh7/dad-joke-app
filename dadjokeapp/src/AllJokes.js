import React from 'react'

function AllJokes({ jokes }) {
    console.log(jokes)
    return (
        <div className='all-joke'>
            <p> {jokes} </p>
        </div>
    )
}

export default AllJokes
