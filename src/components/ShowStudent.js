import React, { useEffect, useState } from "react"
import {Link, useNavigate, useParams} from "react-router-dom"
import Axios from "axios"
import noImage from "../images/noImage.png"
import CampusCard from "./CampusCard"


export default function ShowStudent(){
    const [student, setStudent] = useState(null)
    const [campuses, setCampuses] = useState(null)

    const studentId = useParams()

    const navigate = useNavigate()
    

    useEffect(() => {
        async function getStudent(){
           const singleStudent =  await Axios.get(`https://ttpcrup-app.herokuapp.com/api/students/${studentId.studentId}`)
            setStudent(singleStudent)
            console.log(singleStudent)
        }
        getStudent()
    },[])



    const handleDelete = () => {
        Axios.delete(`https://ttpcrup-app.herokuapp.com/api/students/${studentId.studentId}`)
        .then(res => {
            navigate(-1)
            console.log(res)
        })
        .catch(err => console.log(err))
    }

    useEffect(()=>{
        async function getCampuses(){
            const data = await Axios.get("https://ttpcrup-app.herokuapp.com/api/campuses/")
            setCampuses(data)
        }

        getCampuses()
    }, [])

    
    const loadOptions = () => {
        return campuses.data.map((campus) => <option value={campus.id}>{campus.name}</option>)
    }

    const handleSubmit = (ev) => {
        ev.preventDefault()
        Axios.patch(`https://ttpcrup-app.herokuapp.com/api/students/${studentId.studentId}`,{
            campusId : (ev.target[0].value != "none")?ev.target[0].value:null
        }).then(
            navigate(0)
        )
    }

    
    console.log(student?student.data.campusId:"nothing")
    console.log(studentId)
    
    return(
        <div>
            <div id="student-page">
            
                <img src={student? student.data.imageUrl : noImage} alt="No image image"/> {/*Placer holder image */}
                <div id="student-page-info"> 
                    <h1>{student? student.data.firstName + " " + student.data.lastName: "nothing to see here yet"}</h1>
                    <h4>Email: {student? student.data.email : "N/A"}</h4>
                    <h4>GPA: {student? student.data.gpa : "N/A"}</h4> 
                    <Link to={`/EditStudent/${studentId.studentId}`}>EDIT</Link>
                    <button onClick={() => handleDelete()}>Delete</button>
                </div>
                
                
            </div>
            {student? (student.data.campusId? <CampusCard id={student.data.campus.id} name={student.data.campus.name} imageUrl={student.data.campus.imageUrl}/> : "This student does not attend a college") : "N/A"}

            <form onSubmit={handleSubmit}>
                <select>
                    <option value="none">Select Campus</option>
                    {campuses && loadOptions()}
                </select>
                <button type="submit">Add to Campus</button>
            </form>
        </div>
    )
}