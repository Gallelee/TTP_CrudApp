import React from "react"
import {Link} from "react-router-dom"




export default function Navbar(){

    return(
        <div id="nav-bar">
            <Link to="/">Home</Link>
            <Link to="/Students">Students</Link>
            <Link to="/Campuses">Campuses</Link>
            <h1>Hi, Im the Navbar</h1>
        </div>
    )
}