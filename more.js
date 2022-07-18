import React from 'react'
import ReactDOM from 'react-dom'

// function MainContent() {
//     return (
//         <div>
//     <h1>React to this</h1>
//     <p1>Lorem ipsum dolor sit amet, consectur</p1>
//         </div>
//     )
// }

// ReactDOM.render (
//     <div>
//     <MainContent/>
//     </div>,
//     document.getElementById("root")
// )
// -----------------------------------------------------------------------

// const navbar = (
//     <nav>
//         <h1>Website</h1>
//         <ul>
//             <li>Pricing</li>
//             <li>About</li>
//             <li>Contact</li>
//         </ul>
//     </nav>
// )

// ReactDOM.render(navbar, document.getElementById("root"))


const page = (
    <div>
        <h1>Website</h1>
        <h3>React reasons</h3>
        <ol>
            <li>Compatible</li>
            <li>Declarative</li>
            <li>Hirable</li>
            <li>Maintained</li>
        </ol>
    </div>
)

ReactDOM.render(page, document.getElementById("root"))

// ---------------------------------------------------------------------------------------------------------------------------

import './style.css'

import Header from './Header'
import OrderedList from './Orderedlist'
import Footer from './Footer'


function App() {                                                                                      // Wrapper component of all
    return (
        <div>
            <Header/>
            <OrderedList/>
            <Footer/>
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById("root"))