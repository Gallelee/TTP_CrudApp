import React, { useEffect, useState } from "react"
import {Link} from "react-router-dom"
import Axios from "axios"
import noImage from "../images/noImage.png"

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
        <div id="student-page">
            <h1>im the showstudent component</h1>
            <img src={noImage} alt="No image image"/> {/*Placer holder image */} 
            <h1>{student? student.data.name: "nothing to see here yet"}</h1>
            <h4>GPA: N/A</h4>
            <Link to="/EditStudent">EDIT</Link>
        </div>
    )
}