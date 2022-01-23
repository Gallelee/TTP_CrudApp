import React from "react"
import {Link} from "react-router-dom"

const linkStyle = {
    display: "inline",
    textDecoration: "none",
    margin: "auto",
    marginLeft: "7%",
    marginRight: "5%",
}

const homeLinkStyle = {
    display: "inline",
    textDecoration: "none",
    marginRight: "40%",
}

export default function Navbar(){

    return(
        <div id="nav-bar">
            <Link to="/" style={homeLinkStyle}>Home</Link>
            <Link to="/Students" style={linkStyle}>Students</Link>
            <Link to="/" style={linkStyle}>Campuses</Link>
        </div>
    )
}