import React, { useEffect, useState } from "react"
import Axios from "axios"

export default function ShowStudent(){
    const[student, setStudent] = useState(null)

    useEffect(() => {
        async function getStudent(){
           const singleStudent =  await Axios.get("https://jsonplaceholder.typicode.com/users/1")//dummy api with info for testing
            setStudent(singleStudent)
            console.log(singleStudent)
        }
        getStudent()
        
    },[])
    
    return(
        <div>
            <h1>im the showstudent component</h1>
            <h1>{student? student.data.name: "nothing to see here yet"}</h1>
        </div>
    )
}