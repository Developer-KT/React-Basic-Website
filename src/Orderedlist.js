import React from 'react'

export default function OrderedList() {                                                                                // List section as its own component
    return (
        <>
            <div className="hero">
                <h1 className="heading">Facts About React</h1>
                <ul className="main-list">
                    <li>Allows you to build websites faster</li>
                    <li>Is advantageous for job hunting</li>
                    <li>Uses less code than vanilla JS and HTML</li>
                    <li>Is maintained by highly skilled people</li>
                    <li>Is popular therefore highly required</li>
                </ul>
            </div>
        </>
    )
}