import React, {useContext} from 'react'
import './Navbar.css'
import List from './List.js'
import { HeaderContext } from './HeaderContext'



function Navbar() {
    const [header, setHeader] = useContext(HeaderContext)
    
    function handleClickHome() {
        setHeader(prevHeader => {return {...prevHeader, title:"Dad Joke Library", description:"This is a personal project of mine! I created my own API and built this website with React!",hidden: true}})
    }

    function handleClickAll(){
        setHeader(prevHeader => {return {...prevHeader, title:"All Jokes", description:"Can't get enough of the jokes? Here's some more!", hidden:false}})
    }
    
    function handleClickRandom() {
        setHeader(prevHeader => {return {...prevHeader, title: "Random Joke", description: "Here is a random joke:", hidden: true}})
        fetch('https://shielded-sierra-55191.herokuapp.com/api/random')
            .then(response => {
                return response.json()
            })
            .then(data => {
                setHeader(prevHeader => {return {...prevHeader, description: data.description}})
            })
            .catch(err => {
                console.log(err)
                return {error: "Something went wrong."}
            })

    }

    function handleClickContact() {
        setHeader(prevHeader => {return {...prevHeader, title:"About this Project", description:"This project was intended to be a fun project for me to use the concepts I have learned with Javascript. I created my own API and built this website with React!",hidden: true}})
    }
    return (
        <nav className='navbar'>
            <ul className='navlist'>
                <List icon='home' text="Home" onClick={handleClickHome}/>
                <List icon='explore' text="All Jokes" onClick={handleClickAll}/>
                <List icon='shuffle_on' text="Random Joke" onClick={handleClickRandom}/>
                <List icon='contact_page' text="About This Project" onClick={handleClickContact}/>
            </ul>
        </nav>
    )
}

export default Navbar
