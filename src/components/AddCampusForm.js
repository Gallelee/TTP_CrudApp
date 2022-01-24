import React from "react"
import Axios from "axios"
import { useNavigate } from "react-router-dom"


export default function AddCampus(){


    const navigate = useNavigate()

    const handleSubmit = (ev) => {
        ev.preventDefault()
        Axios.post("https://ttpcrup-app.herokuapp.com/api/campuses/",{
            name: ev.target[0].value,
            address: ev.target[1].value
        })
        .then(res => {
            navigate(-1)
            console.log(res)}
            )
        .catch(err => console.log(err))
        
    }


    return(
        <form onSubmit={handleSubmit}>
            <label>Campus Name</label>
            <input type="text"/>
            <label>Address</label>
            <input type="text"/>
            <input type="submit"/>
        </form>
    )
}