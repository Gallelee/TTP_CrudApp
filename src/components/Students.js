import React, { useEffect , useState } from "react"
import {Link} from "react-router-dom"
import ShowStudent from "./ShowStudent"
import Axios from "axios"
import noImage from "../images/noImage.png"
import StudentMiniCard from "./StudentMiniCard"

export default function Students(){

    const [allStudents, setAllStudents] = useState(null)


    useEffect(()=>{
        async function getAllStudents(){
            const all = await Axios.get("https://my-json-server.typicode.com/evs09/CRUD-App-Placeholder-Data/db") //dummy data from dummy api
            console.log(all)
            setAllStudents(all)
        }
        getAllStudents()
    }, [])



    return(
        <div id="students-page">
            <h1>All Students</h1>
            <h1><Link to="/AddStudent">Add Student</Link></h1>
            <div id="students">
                {allStudents? allStudents.data.students
                .map(elm => {
                    return(
                        <StudentMiniCard studentId={elm.studentId} studentImg={elm.studentImg} name={elm.name}/>
                    )
                }) : "Nothing to see here"
            }
            
            </div>
        </div>
    )
        
}