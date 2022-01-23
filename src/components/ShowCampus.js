import Axios from "axios"
import React, {useEffect, useState}from "react"
import { Link, useParams } from "react-router-dom"
import noImage from "../images/noImage.png"
import StudentMiniCard from "./StudentMiniCard"


export default function ShowCampuses(){
    const [campus, setCampus] = useState(null)

    const [campStudents, setCampStudents] = useState(null)

    const campusID = useParams()

    useEffect(() => {
        async function getCampus(){
            const camp = await Axios.get(`https://my-json-server.typicode.com/evs09/CRUD-App-Placeholder-Data/campuses?campusID=${campusID.campusID}`)
            setCampus(camp)
            console.log(camp)
        }
        getCampus()
    }, [])


    
    useEffect(() => {
        async function getCampusStudents(){
            const campStu = await Axios.get(`https://my-json-server.typicode.com/evs09/CRUD-App-Placeholder-Data/students?campusID=${campusID.campusID}`)
            setCampStudents(campStu)
            console.log(campStu)
        }
        getCampusStudents()
    }, [])




    console.log(campusID)
    return(
        <div id="campus">
            <div id="campus-page-info">
                <table id="show-camp-tbl">
                    <tr>
                        <td id="show-camp-img-td">
                            <img src={campus? campus.data[0].campusImg : noImage} alt="No image" id="show-camp-img"/>
                        </td>
                        <td>
                            <h1>{campus? campus.data[0].campusName: "nothing here yet"}</h1>
                            <p id="camp-desc">lorem ipsum</p>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <p>Address: {campus? campus.data[0].enrolled: "nothing here yet"}</p>
                        </td>
                        <td>
                            <button><Link to ="/EditCampus">Edit</Link></button>
                            <button>Delete</button>
                        </td>
                    </tr>
                </table>

            </div>
            <h1>Students on Campus</h1>
            <div id="camp-stu-card">
                {campStudents? campStudents.data.map(elm => <StudentMiniCard studentId={elm.studentId} studentImg={elm.studentImg} name={elm.name}/>) : "There are no students currently registered to this campus"}
            </div>
        </div>
    )
}