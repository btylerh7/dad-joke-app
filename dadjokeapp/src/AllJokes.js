import React from 'react'

function AllJokes({ joke }) {
    // console.log(jokes)
    // jokes.array.forEach(element => {
    //     return (
    //     <div>
    //         <h1>{element.title}</h1>
    //         <p>{element.description}</p>
    //     </div>
    //     )
    // });
    return (
        <div className='all-joke'>
            <p>{joke}</p>
        </div>
    )
}

export default AllJokes
