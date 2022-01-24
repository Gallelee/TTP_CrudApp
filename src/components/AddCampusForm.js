import React from "react"
import Axios from "axios"
import { useNavigate } from "react-router-dom"
import { useState } from 'react'


export default function AddCampus(){
    const [isName, setIsName] = useState(true)
    const [isAdress, setIsAddress] = useState(true)


    const navigate = useNavigate()

    const handleSubmit = (ev) => {
        ev.preventDefault()

        if(ev.target[0].value.length === 0){
            setIsName(false)
            if(ev.target[1].value.length === 0){
                setIsAddress(false)
            }
        }else if(ev.target[1].value.length === 0){
            setIsAddress(false)
            setIsName(true)
        }else{
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

        
    }


    return(
        <form onSubmit={handleSubmit}>
            <label>Campus Name</label>
            <input type="text"/>
            {!isName && <p style={{color : "red"}}>Name cannot be empty</p>}
            <label>Address</label>
            <input type="text"/>
            {!isAdress && <p style={{color : "red"}}>Address cannot be empty</p>}
            <input className="submit-btn" type="submit"/>
        </form>
    )
}