import React, { useEffect, useState } from "react"
import {Link, useParams} from "react-router-dom"
import Axios from "axios"
import noImage from "../images/noImage.png"

export default function ShowStudent(){
    const[student, setStudent] = useState(null)

    const studentId = useParams()

    

    useEffect(() => {
        async function getStudent(){
           const singleStudent =  await Axios.get(`https://my-json-server.typicode.com/evs09/CRUD-App-Placeholder-Data/students?studentId=${studentId.studentId}`)//dummy api with info for testing
            setStudent(singleStudent)
            console.log(singleStudent)
        }
        getStudent()
        
    },[])

    console.log(studentId)
    
    return(
        <div id="student-page">
            
            <img src={student? student.data[0].studentImg : noImage} alt="No image image"/> {/*Placer holder image */} 
            <h1>{student? student.data[0].name: "nothing to see here yet"}</h1>
            <h4>Email: N/A</h4>
            <h4>GPA: {student? student.data[0].gpa : "N/A"}</h4>
            <Link to="/EditStudent">EDIT</Link>
        </div>
    )
}