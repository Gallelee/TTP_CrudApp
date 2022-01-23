import React from "react"
import Axios from "axios"
import {Link} from "react-router-dom"


export default function CampusCard(props){


    return(
        <Link to={`/Campus/${props.id}`}>
        <div id="campus-card">
            <div>
                <img src={props.imageUrl} alt="image of college"/>
            </div>
            <h2>{props.name}</h2>
            <Link to="/EditCampus">Edit</Link>
        </div>
        </Link>
    )

}