import React from "react"
import ReactDOM from "react-dom"
import Item from "./src/Components/Item.js"
import Contact from "./src/Components/Contact.js"


function App() {
    return(
        <div className="hero-section">
            <Item 
            img = "src: images/myImage.jpg"
            name = "Air Jordans"
            Price = "$100"
            />
            <Item 
            img = "src: images/myImage.jpg"
            name = "Air Jordans"
            Price = "$100"
            />
            <Item 
            img = "src: images/myImage.jpg"
            name = "Air Jordans"
            Price = "$100"
            />
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById("root"))





// --------------------------------------------------------------------------
 
// Import react from "react"
// Import ReactDom from "react-dom"

export default function Item(props) {
    return (
        <div className="Item">
            <img src={props.img} />
            <h2>{props.name}</h2>
            <p>{props.price}</p>
        </div>
    )
}



export default function Contact() {
    return (
        <div className="hero">
            <h1>Facts about React</h1>
            <ul>
                <li>Efficient</li>
                <li>Sustainable</li>
                <li>Reusable</li>
                <li>Faster</li>
                <li>Maintained</li>
            </ul>
        </div>
    )
}



export default function Footer() {
    return (
        <footer>
            <p>Lorem ipsum document, dolor ipsum amet, blah that, blah this</p>
        </footer>
    )
}