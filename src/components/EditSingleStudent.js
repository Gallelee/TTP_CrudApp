import React from "react"
import Axios from "axios"
import { useParams, useNavigate } from "react-router-dom"

export default function EditSingleStudent(){

    const studentId = useParams()

    const navigate = useNavigate()

    console.log(studentId.id)

    const handleSubmit = (ev) => {
        ev.preventDefault()
        Axios.patch(`https://ttpcrup-app.herokuapp.com/api/students/${studentId.id}`,{
            firstName: ev.target[0].value,
            lastName: ev.target[1].value,
            gpa: ev.target[2].value,
        })
        .then(res => console.log(res))
        .catch(err => console.log(err))
        navigate(`/Students/${studentId.id}`)
    }

    

    return(
        <div id="stud-edit-form">
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="First Name"/>
                <input type="text" placeholder="Last Name"/>
                <input type="number" step="0.1" min="0" max="4" placeholder="GPA"/>
                <input type="text" placeholder="Student image Url"/>
                <input type="submit"/>
            </form>

        </div>
    )
}