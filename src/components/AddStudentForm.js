import React, { useEffect } from "react"
import Axios from "axios"

export default function AddStudentForm(){

        function handleSubmit(ev){
            ev.preventDefault()
            Axios.post("https://ttpcrup-app.herokuapp.com/api/students/",{
                firstName: ev.target[0].value,

                lastName: ev.target[1].value,

                email: ev.target[2].value
            }).then(res => console.log(res))
            .catch(err => console.log(err))
            console.log(ev.target[0].value)
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