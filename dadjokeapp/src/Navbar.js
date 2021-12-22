import React, {useContext, useState} from 'react'
import './Navbar.css'
import List from './List.js'
import { HeaderContext } from './HeaderContext'



function Navbar() {
    const [header, setHeader] = useContext(HeaderContext)
    const [clicked, setClicked] = useState({style: "navlist-hidden"})
    
    function handleClickHome() {
        setClicked(prevState => {
            return prevState.style === "navlist" ? {style: "navlist-hidden"} : {style: "navlist"}
        })
        setHeader(prevHeader => {return {...prevHeader, title:"Dad Joke Library", description:"This is a personal project of mine! I created my own API and built this website with React!",hidden: true}})
    }

    function handleClickAll(){
        setClicked(prevState => {
            return prevState.style === "navlist" ? {style: "navlist-hidden"} : {style: "navlist"}
        })
        setHeader(prevHeader => {return {...prevHeader, title:"All Jokes", description:"Can't get enough of the jokes? Here's some more!", hidden:false}})
    }
    
    function handleClickRandom() {
        setClicked(prevState => {
            return prevState.style === "navlist" ? {style: "navlist-hidden"} : {style: "navlist"}
        })
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
        setClicked(prevState => {
            return prevState.style === "navlist" ? {style: "navlist-hidden"} : {style: "navlist"}
        })
        setHeader(prevHeader => {return {...prevHeader, title:"About this Project", description:"This project was intended to be a fun project for me to use the concepts I have learned with Javascript. I created my own API and built this website with React!",hidden: true}})
    }

    function handleClickBurger() {
        setClicked(prevState => {
            return prevState.style === "navlist" ? {style: "navlist-hidden"} : {style: "navlist"}
        })
    }

    return (
        <nav className='navbar'>
            <div className="hamburger" onClick={handleClickBurger}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
            <ul className={clicked.style}>
                <List icon='home' text="Home" onClick={handleClickHome}/>
                <List icon='explore' text="All Jokes" onClick={handleClickAll}/>
                <List icon='shuffle_on' text="Random Joke" onClick={handleClickRandom}/>
                <List icon='contact_page' text="About This Project" onClick={handleClickContact}/>
            </ul>

        </nav>
    )
}

export default Navbar
