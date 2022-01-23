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
            const all = await Axios.get("https://ttpcrup-app.herokuapp.com/api/students/") //dummy data from dummy api
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
                {allStudents? allStudents.data
                .map(elm => {
                    return(
                        <StudentMiniCard id={elm.id} imageUrl={elm.imageUrl} firstName={elm.firstName} lastName={elm.lastName}/>
                    )
                }) : "Nothing to see here"
            }
            
            </div>
        </div>
    )
        
}