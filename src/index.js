import React from 'react'
import ReactDOM from 'react-dom'
import './style.css'

import Header from './Header'
import OrderedList from './Orderedlist'
import Footer from './Footer'


function App() {                                                             // Wrapper component of all
    return (
        <div>
            <Header/>
            <OrderedList/>
            <Footer/>
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById("root"))