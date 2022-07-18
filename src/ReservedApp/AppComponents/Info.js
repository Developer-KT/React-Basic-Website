import React from 'react'
import Zzezze from '../src/zzezze.jpg'

export default function MyInfo() {
    return (
        <div>
            <img src={Zzezze} className="my-image"/>
            <div className="info-text">
                <h1>Tyler Jones</h1>
                <h2>Frontend Develeoper</h2>
                <h3>kmadela19@gmail.com</h3>
            </div>
            <div className="contact-buttons">
                <button type="button" className="email">Email</button>
                <button type="button" className="linked-in">LinkedIn</button>
            </div>
        </div>
    )
}