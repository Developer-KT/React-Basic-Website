import React from 'react'
import ReactLogo from '../src/images/ReactLogo.png'


export default function Navbar() {
    return(
    <nav className="navbar">
        <img src={ReactLogo} className="logo" alt="logo"/>
        <h1 className='LogoText'>React</h1>
    </nav>
    )
}