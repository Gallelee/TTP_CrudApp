import React, { useState } from "react"
import Axios from "axios"
import { useParams, useNavigate } from "react-router-dom"

export default function EditSingleStudent(){

    const studentId = useParams()

    const [imageUrl, setImageUrl] = useState(null)


    const navigate = useNavigate()

    console.log(studentId.id)

    const handleSubmit = (ev) => {
        ev.preventDefault()
        Axios.patch(`https://ttpcrup-app.herokuapp.com/api/students/${studentId.id}`,{
            firstName: ev.target[0].value,
            lastName: ev.target[1].value,
            email: ev.target[2].value,
            gpa: ev.target[3].value,
            imageUrl: imageUrl? imageUrl : "https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"

        })
        .then(res => {
            navigate(-1)
            console.log(res)}
            )
        .catch(err => console.log(err))
        
    }

    const handleImageUrl = (ev) => {
        setImageUrl(ev.target.value)
        console.log(imageUrl)
    }
    

    return(
        <div id="stud-edit-form">
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="First Name"/>
                <input type="text" placeholder="Last Name"/>
                <input type="text" placeholder="Email "/>
                <input type="number" step="0.1" min="0" max="4" placeholder="GPA"/>
                <input type="text" placeholder="Student image Url" onChange={handleImageUrl}/>
                <input type="submit"/>
            </form>

        </div>
    )
}