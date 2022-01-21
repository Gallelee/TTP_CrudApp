import React, { useEffect , useState } from "react"
import {Link} from "react-router-dom"
import ShowStudent from "./ShowStudent"
import Axios from "axios"
import noImage from "../images/noImage.png"

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
        <div>
            <h1>All Students</h1>
            <Link to="/AddStudent">Add Student</Link>
            <div id="students">
                {allStudents? allStudents.data.students
                .map(elm => {
                    return(
                        <div className="mini-student-card">
                            <img src={elm.studentImg}/>
                            <h4>{elm.name}</h4>
                        </div>
                    )
                }) : "Nothing to see here"
            }
            
            </div>
        </div>
    )
        
}