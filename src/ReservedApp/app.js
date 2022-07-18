import React from 'react'
import ReactDOM from 'react-dom'
import './app.css'
import MyInfo from './AppComponents/Info'
import MyAbout from './AppComponents/About'

function MyCard() {
    return (
        <div>
            <MyInfo/>
            <MyAbout/>
        </div>
    )
}

ReactDOM.render(<MyCard/>,document.getElementById("root"))