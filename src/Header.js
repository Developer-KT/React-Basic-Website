import React from 'react'
import ReactLogo from '../src/images/ReactLogo.png'

export default function Header() {                                                                                     // Header as its own component
    return (
        <header>
            <nav>
                <div className="logo-div">
                    <img src={ReactLogo} className="logo" alt="logo"/>
                    <h1 className="logo-text">ReactFacts</h1>
                </div>
                <ul className="list-container">
                    <li className="list-item">Pricing</li>
                    <li className="list-item">About</li>
                    <li className="list-item">Contact</li>
                </ul>
            </nav>
        </header>
    )
}