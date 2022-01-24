import React, { useEffect, useState } from "react"
import Axios from "axios"
import { useNavigate } from "react-router-dom"

export default function AddStudentForm(){
        const [isFName, setIsFName] = useState(true)
        const [isLName, setIsLName] = useState(true)
        const [isEmail, setIsEmail] = useState(true)

        const navigate = useNavigate()

        function handleSubmit(ev){
            ev.preventDefault()

            if(ev.target[0].value.length === 0){
                console.log("running")
                setIsFName(false)
                if(ev.target[1].value.length === 0){
                    setIsLName(false)
                }
                if(ev.target[2].value.length === 0){
                    setIsEmail(false)
                }
            }else if(ev.target[1].value.length === 0){
                setIsLName(false)
                if(ev.target[2].value.length === 0){
                    setIsEmail(false)
                }
                setIsFName(true)
            }else if(ev.target[2].value.length === 0){
                setIsEmail(false)
                setIsFName(true)
                setIsLName(true)
            }else{
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
            
        }
  

    return(
        <div id="add-stu-form">
            <form onSubmit={handleSubmit}>
                <label>First Name</label>
                <input type="text"/>
                {!isFName && <p style={{color : "red"}}>First name cannot be empty</p>}
                <label>Last Name</label>
                <input type="text"/>
                {!isLName && <p style={{color : "red"}}>Last name cannot be empty</p>}
                <label>Email</label>
                <input type="email"/>
                {!isEmail && <p style={{color : "red"}}>Email needs to be in the example@email.com format</p>}
                <input className="submit-btn" type="submit" value="Add Student"/>
            </form>

        </div>
    )
}