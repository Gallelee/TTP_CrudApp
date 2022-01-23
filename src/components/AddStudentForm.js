import React, { useEffect } from "react"
import Axios from "axios"

export default function AddStudentForm(){

        function handleSubmit(ev){
            ev.preventDefault()
            Axios.post("https://my-json-server.typicode.com/evs09/CRUD-App-Placeholder-Data/students",{
                studentId: 103,
                campusID: 3,
                name: ev.target[0].value,
                studentImg: null,
                gpa: 4.0
            }).then(res => console.log(res))
            .catch(err => console.log(err))
            console.log(ev.target[0].value)
        }
  

    return(
        <div id="add-stu-form">
            <form onSubmit={handleSubmit}>
                <label>Student Name</label>
                <input type="text"/>
                <input type="submit" value="Add Student"/>
            </form>

        </div>
    )
}