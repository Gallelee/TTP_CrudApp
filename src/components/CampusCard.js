import React from "react"
import Axios from "axios"
import {Link} from "react-router-dom"


export default function CampusCard(props){


    /* function deleteHandler(){
        Axios.delete(`https://ttpcrup-app.herokuapp.com/api/campuses/${props.id}`)
        .then(res => console.log(res))
        .catch(err => console.log(err))
    */

    return(
        <div id="campus-card">
            <div>
                <img src={props.imageUrl} alt="image of college"/>
            </div>
            <h2>{props.name}</h2>
            <Link to="/EditCampus">Edit</Link>
            <button >Delete</button>
        </div>
    )

}