import Axios from "axios"
import React, {useEffect, useState}from "react"
import { useParams } from "react-router-dom"
import noImage from "../images/noImage.png"
import StudentMiniCard from "./StudentMiniCard"


export default function ShowCampuses(){
    const [campus, setCampus] = useState(null)

    const [campStudents, setCampStudents] = useState(null)

    const campusID = useParams()

    useEffect(() => {
        async function getCampus(){
            const camp = await Axios.get(`https://ttpcrup-app.herokuapp.com/api/campuses/${campusID.campusID}`)
            setCampus(camp)
            console.log(camp)
        }
        getCampus()
    }, [])


    
   



    console.log(campusID)
    
    return(
        <div id="campus">
            <div id="campus-page-info">        
            <img src={campus? campus.data.imageUrl : noImage}/>
                <div >
                    <h1>{campus? campus.data.name : "N/A"}</h1>
                    <p>{campus? campus.data.description : "N/A"}</p>

                </div>
            </div>
            <p>{campus? campus.data.address : "No address"}</p>
            <h1>Students on Campus</h1>
            <div id="camp-stu-card">
                {campus? campus.data.students.map(elm => <StudentMiniCard id={elm.id} imageUrl={elm.imageUrl} firstName={elm.firstName} lastName={elm.lastName}/>) : "There are no students currently registered to this campus"}
            </div>
        </div>
    )
}