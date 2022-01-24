import React, { useEffect } from "react"
import Axios from "axios"
import { useNavigate } from "react-router-dom"

export default function AddStudentForm(){

        const navigate = useNavigate()

        function handleSubmit(ev){
            ev.preventDefault()
            Axios.post("https://ttpcrup-app.herokuapp.com/api/students/",{
                firstName: ev.target[0].value,

                lastName: ev.target[1].value,

                email: ev.target[2].value
            }).then(res => console.log(res))
            .catch(err => {
                
                console.log(err)
            })
            setTimeout(()=> navigate(-1),500)
            
        }
  

    return(
        <div id="add-stu-form">
            <form onSubmit={handleSubmit}>
                <label>First Name</label>
                <input type="text"/>
                <label>Last Name</label>
                <input type="text"/>
                <label>Email</label>
                <input type="text"/>
                <input type="submit" value="Add Student"/>
            </form>

        </div>
    )
}